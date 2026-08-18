import React from "react";
import { Helmet } from "react-helmet-async"; // swap to "react-helmet" if that's what you have installed
import {
  Cookie,
  CheckCircle2,
  Mail,
  Settings2,
  ChevronRight,
  BookOpen,
  Heart,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO CONSTANTS                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.abheepay.com"; // update if this differs from your production domain
const PAGE_PATH = "/cookie-policy";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const SEO_TITLE = "Cookie Policy | AbheePay";
const SEO_DESCRIPTION =
  "Read the AbheePay Cookie Policy to understand how we use cookies and similar technologies on our website, applications, and online services, and how to manage them.";


const EFFECTIVE_DATE = "01 August 2026";
const EFFECTIVE_DATE_ISO = "2026-08-01";



const sections = [
  {
    title: "What Are Cookies?",
    text: "Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, improve website functionality, enhance security, and provide a better user experience. Cookies do not normally contain information that directly identifies you. However, they may be associated with information you provide to us or information collected during your use of our services.",
  },
  {
    title: "Why We Use Cookies",
    intro: "AbheePay uses cookies to:",
    items: [
      "Improve website performance.",
      "Remember your preferences.",
      "Enhance website security.",
      "Keep you signed in where applicable.",
      "Understand how visitors use our website.",
      "Improve navigation and user experience.",
      "Measure website performance and traffic.",
      "Detect technical issues and prevent misuse.",
    ],
    outro: "Our objective is to make our website faster, safer, and easier to use.",
  },
  {
    title: "Essential Cookies",
    intro: "These cookies are necessary for the website to function properly. They help with:",
    items: [
      "Secure login sessions",
      "Website security",
      "Form submissions",
      "Navigation",
      "Basic website functionality",
    ],
    outro: "Without these cookies, certain parts of the website may not function correctly.",
  },
  {
    title: "Performance & Analytics Cookies",
    intro:
      "These cookies help us understand how visitors interact with our website. They may collect information such as:",
    items: [
      "Pages visited",
      "Time spent on pages",
      "Navigation behaviour",
      "Device type",
      "Browser type",
      "Website performance metrics",
    ],
    outro: "This information helps us improve our website and user experience.",
  },
  {
    title: "Functional Cookies",
    intro:
      "These cookies remember your preferences and settings to provide a more personalised experience. Examples include:",
    items: [
      "Language preferences",
      "Session preferences",
      "Previously entered information",
      "User interface settings",
    ],
  },
  {
    title: "Security Cookies",
    intro: "Security cookies help us:",
    items: [
      "Detect suspicious activity",
      "Prevent fraudulent use",
      "Protect user accounts",
      "Improve website security",
    ],
    outro: "These cookies support the integrity and safety of our platform.",
  },
  {
    title: "Third-Party Cookies",
    intro:
      "Some features of our website may use services provided by trusted third-party providers. These providers may place cookies on your device to support:",
    items: [
      "Website analytics",
      "Performance monitoring",
      "Customer support tools",
      "Embedded content",
      "Other website functionality",
    ],
    outro: "Each third-party provider manages its own cookies according to its respective privacy policy.",
  },
  {
    title: "Managing Cookies",
    intro: "Most web browsers allow you to manage, block, or delete cookies. You can usually:",
    items: [
      "View stored cookies.",
      "Delete existing cookies.",
      "Block future cookies.",
      "Configure cookie preferences.",
    ],
    outro: "Please note that disabling certain cookies may affect the functionality and performance of our website.",
  },
  {
    title: "Browser Settings",
    intro: "You can control cookies through your browser settings. Most browsers provide options to:",
    items: [
      "Accept all cookies.",
      "Block all cookies.",
      "Delete existing cookies.",
      "Receive notifications before cookies are stored.",
    ],
    outro: "Refer to your browser's help documentation for detailed instructions.",
  },
  {
    title: "Changes to This Cookie Policy",
    text: "We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our website functionality. The latest version will always be published on this page with the updated effective date.",
  },
];

const LEARN_MORE_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "User Agreement", href: "/user-agreement" },
];

const CookiePolicy = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: PAGE_URL,
    isPartOf: {
      "@type": "WebSite",
      name: "AbheePay",
      url: SITE_URL,
    },
    about: {
      "@type": "Organization",
      name: "AbheePay",
      email: "care@abheepay.com",
      url: SITE_URL,
    },
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-4 py-12 sm:px-6 lg:py-20">
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="AbheePay" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="mx-auto max-w-4xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00D3CD]/20 bg-[#00D3CD]/10 px-4 py-2">
            <Cookie className="h-4 w-4 text-[#00857E]" />
            <span className="text-xs font-medium uppercase tracking-wider text-[#00857E]">Legal policy</span>
          </div>
          <h1 className="mb-5 text-4xl font-bold text-slate-900 sm:text-5xl">
            Cookie <span className="text-[#00B5B0]">Policy</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            How AbheePay uses cookies and similar technologies on our website and services.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Effective Date: <time dateTime={EFFECTIVE_DATE_ISO}>{EFFECTIVE_DATE}</time>
          </p>
        </header>

        <section className="mb-6 rounded-3xl border border-[#00D3CD]/20 bg-white p-7 shadow-sm sm:p-8">
          <div className="flex gap-4">
            <Settings2 className="h-6 w-6 shrink-0 text-[#00B5B0]" />
            <p className="leading-relaxed text-slate-600">
              This Cookie Policy explains how AbheePay ("we," "our," or "us") uses
              cookies and similar technologies when you visit our website,
              applications, and online services. By continuing to use our website,
              you agree to the use of cookies in accordance with this Cookie Policy,
              unless you disable them through your browser settings or cookie
              preferences. This Cookie Policy should be read together with our{" "}
              <a href="/privacy-policy" className="font-semibold text-[#00857E] underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D3CD]/10 text-sm font-semibold text-[#00857E]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              {section.text && <p className="leading-relaxed text-slate-600">{section.text}</p>}
              {section.intro && <p className="mb-4 leading-relaxed text-slate-600">{section.intro}</p>}
              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00B5B0]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.outro && <p className="mt-4 leading-relaxed text-slate-600">{section.outro}</p>}
            </section>
          ))}
        </div>

        {/* Learn more */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-slate-900">
            <BookOpen className="h-5 w-5 text-[#00857E]" />
            Learn More
          </h2>
          <p className="mb-4 leading-relaxed text-slate-600">
            For additional information about how we collect, use, store, and protect
            personal information, please review our:
          </p>
          <ul className="space-y-3">
            {LEARN_MORE_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 font-semibold text-[#00857E] underline underline-offset-2"
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-slate-600">
            These documents work together to explain your rights and our
            responsibilities when you use AbheePay products and services.
          </p>
        </section>

        {/* Your Privacy Matters + contact */}
        <section className="mt-8 rounded-3xl bg-gradient-to-br from-[#00D3CD] to-[#008B88] p-8 text-white">
          <div className="flex items-start gap-4">
            <Heart className="h-6 w-6 shrink-0" />
            <div>
              <h2 className="text-xl font-bold">Your Privacy Matters</h2>
              <p className="mt-2 leading-relaxed text-white/90">
                At AbheePay, we believe in transparency and responsible data
                practices. We use cookies to improve your experience while
                protecting your privacy and maintaining the security of our
                website and services.
              </p>
              <a
                href="mailto:care@abheepay.com"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
              >
                <Mail className="h-4 w-4" /> Contact AbheePay support
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicy;
