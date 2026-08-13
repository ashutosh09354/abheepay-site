import { useEffect } from "react";

/**
 * Lightweight SEO component — no extra npm packages required.
 * Updates document.title, meta description, and canonical link
 * whenever the page mounts / props change.
 *
 * Usage:
 *   <Seo
 *     title="Secure Payment Gateway for Businesses | AbheePay"
 *     description="Accept online payments with the AbheePay Payment Gateway..."
 *     path="/products/payment-gateway"
 *   />
 */
const SITE_URL = "https://www.abheepay.com"; // update to your live domain

const Seo = ({ title, description, path = "" }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", description);
    }

    // Canonical URL
    const canonicalHref = `${SITE_URL}${path}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalHref);

    // Open Graph tags (optional but recommended for social sharing)
    const setOgTag = (property, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setOgTag("og:title", title);
    setOgTag("og:description", description);
    setOgTag("og:url", canonicalHref);
  }, [title, description, path]);

  return null; // renders nothing — just side effects
};

export default Seo;
