import { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";
import { useLocation } from "react-router-dom";

const SKIPPED_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "SVG"]);

const shouldTranslate = (node) => {
  const parent = node.parentElement;
  return (
    parent &&
    !SKIPPED_TAGS.has(parent.tagName) &&
    !parent.closest("[data-no-translate]") &&
    /[A-Za-z]/.test(node.nodeValue)
  );
};

const translateText = async (text) => {
  const query = new URLSearchParams({
    client: "gtx",
    sl: "en",
    tl: "hi",
    dt: "t",
    q: text,
  });
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${query}`);
  if (!response.ok) throw new Error("Translation request failed");

  const data = await response.json();
  return data[0].map(([translatedPart]) => translatedPart).join("");
};

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(() => localStorage.getItem("abheepay-language") || "en");
  const originals = useRef(new WeakMap());
  const location = useLocation();

  useEffect(() => {
    // Remove the legacy widget if it was loaded by an earlier version during HMR.
    document.querySelectorAll("iframe.goog-te-banner-frame, #google_translate_element, script[src*='translate_a/element']").forEach((element) => {
      element.remove();
    });
    document.documentElement.style.removeProperty("top");
    document.body.style.removeProperty("top");
  }, []);

  useEffect(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => (shouldTranslate(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
    });
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    if (language === "en") {
      textNodes.forEach((textNode) => {
        const original = originals.current.get(textNode);
        if (original) textNode.nodeValue = original;
      });
      document.documentElement.lang = "en";
      return undefined;
    }

    document.documentElement.lang = "hi";
    let cancelled = false;
    const translatePage = async () => {
      // A small worker pool avoids overwhelming the translation endpoint on long pages.
      const queue = textNodes.filter((textNode) => {
        if (!originals.current.has(textNode)) originals.current.set(textNode, textNode.nodeValue);
        return textNode.nodeValue.trim();
      });
      const workers = Array.from({ length: 6 }, async () => {
        while (queue.length && !cancelled) {
          const textNode = queue.shift();
          const original = originals.current.get(textNode);
          try {
            const translated = await translateText(original);
            if (!cancelled && textNode.isConnected) textNode.nodeValue = translated;
          } catch {
            // Keep the original English copy visible if an individual request fails.
          }
        }
      });
      await Promise.all(workers);
    };

    translatePage();
    return () => {
      cancelled = true;
    };
  }, [language, location.pathname]);

  const changeLanguage = (event) => {
    const nextLanguage = event.target.value;
    setLanguage(nextLanguage);
    localStorage.setItem("abheepay-language", nextLanguage);
  };

  return (
    <label className="relative flex shrink-0 items-center text-gray-600" aria-label="Select site language" data-no-translate>
      <Languages size={17} className="pointer-events-none absolute left-2.5 sm:left-3" aria-hidden="true" />
      <select
        value={language}
        onChange={changeLanguage}
        className="h-10 w-[118px] rounded-lg border border-gray-200 bg-white py-0 pl-8 pr-2 text-[14px] font-semibold text-gray-700 outline-none transition-colors hover:border-[#00C4C7] focus:border-[#00C4C7] sm:w-auto sm:pl-9 sm:pr-3 sm:text-[16px]"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </label>
  );
};

export default LanguageSwitcher;
