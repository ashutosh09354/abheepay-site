import React from "react";
import { Helmet } from "react-helmet-async"; // swap to "react-helmet" if that's what you have installed
import { TriangleAlert, CheckCircle2, Mail, ChevronRight, FileCheck2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO CONSTANTS                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.abheepay.com"; // update if this differs from your production domain
const PAGE_PATH = "/disclaimer";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const SEO_TITLE = "Disclaimer | AbheePay";
const SEO_DESCRIPTION =
  "Read the AbheePay Disclaimer regarding the use of our website, products, APIs, payment solutions, and business services.";

// Update this whenever the disclaimer is revised — shown in the header.

const EFFECTIVE_DATE = "01 August 2026";
const EFFECTIVE_DATE_ISO = "2026-08-01";


const sections = [
  {
    title: "General Information",
    text: "The information available on the AbheePay website is provided for general business and informational purposes only. While we make reasonable efforts to keep the information accurate and up to date, we do not guarantee that all content is complete, accurate, current, or free from errors. Users should independently evaluate any information before making business or operational decisions.",
  },
  {
    title: "No Professional Advice",
    intro:
      "The content published on our website, blogs, product pages, documentation, and resource materials is intended for general informational purposes only. Nothing on this website should be considered:",
    items: [
      "Legal advice",
      "Financial advice",
      "Tax advice",
      "Investment advice",
      "Regulatory advice",
      "Professional consulting advice",
    ],
    outro: "Users should seek advice from qualified professionals before making decisions based on information available on our website.",
  },
  {
    title: "Product & Service Availability",
    intro:
      "Products, features, APIs, integrations, pricing, and services described on this website may change without prior notice. Availability may depend on:",
    items: [
      "Business eligibility",
      "Merchant verification",
      "Regulatory requirements",
      "Technical compatibility",
      "Geographic availability",
      "Partner availability",
    ],
    outro: "Not every product or feature may be available to every customer.",
  },
  {
    title: "Third-Party Services",
    intro:
      "Some AbheePay products and services may integrate with third-party providers, banking partners, payment partners, or technology platforms. AbheePay is not responsible for:",
    items: [
      "Third-party websites",
      "Third-party products or services",
      "External content",
      "External privacy practices",
      "Availability of third-party services",
    ],
    outro: "Users should review the terms and policies of any third-party service they choose to use.",
  },
  {
    title: "Website Availability",
    intro:
      "We strive to maintain uninterrupted access to our website and digital services. However, we do not guarantee that the website or services will always be:",
    items: ["Available", "Error-free", "Uninterrupted", "Secure", "Free from technical issues"],
    outro:
      "Temporary interruptions may occur due to maintenance, upgrades, technical issues, or circumstances beyond our reasonable control.",
  },
  {
    title: "API & Developer Disclaimer",
    intro:
      "Developers using the AbheePay API Marketplace, Developer Hub, SDKs, Sandbox, or related resources acknowledge that:",
    items: [
      "APIs may be updated, modified, or discontinued.",
      "Sandbox environments are provided only for development and testing.",
      "API documentation may change as products evolve.",
      "Developers are responsible for testing and validating their integrations before using them in production.",
    ],
  },
  {
    title: "Merchant Disclaimer",
    intro: "Merchants remain responsible for:",
    items: [
      "Compliance with applicable laws.",
      "Business licensing requirements.",
      "Customer communications.",
      "Product and service information provided to customers.",
      "Business operations conducted through AbheePay services.",
    ],
    outro: "Use of AbheePay services does not transfer these responsibilities to AbheePay.",
  },
  {
    title: "Limitation of Liability",
    intro:
      "To the maximum extent permitted by applicable law, AbheePay shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages arising from or related to:",
    items: [
      "Use of our website or services.",
      "Business interruptions.",
      "Loss of revenue or profits.",
      "Loss of business opportunities.",
      "Loss of data.",
      "Technical failures.",
      "Third-party service interruptions.",
    ],
    outro: "Nothing in this Disclaimer excludes liability where such exclusion is prohibited by applicable law.",
  },
  {
    title: "Intellectual Property",
    text: "All trademarks, logos, software, documentation, graphics, designs, and content displayed on this website are the intellectual property of AbheePay or their respective owners. Unauthorised copying, reproduction, modification, distribution, or commercial use is prohibited without prior written permission.",
  },
  {
    title: "External Links",
    text: "Our website may include links to external websites for your convenience. These links do not imply endorsement or approval of third-party products, services, or content. AbheePay is not responsible for the content or practices of external websites.",
  },
  {
    title: "Changes to This Disclaimer",
    text: "AbheePay may update this Disclaimer from time to time to reflect changes in our products, services, legal requirements, or business practices. The latest version will always be available on this page along with the updated effective date.",
  },
];

const Disclaimer = () => {
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
            <TriangleAlert className="h-4 w-4 text-[#00857E]" />
            <span className="text-xs font-medium uppercase tracking-wider text-[#00857E]">Legal notice</span>
          </div>
          <h1 className="mb-5 text-4xl font-bold text-slate-900 sm:text-5xl">Disclaimer</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Important information about using the AbheePay website, products, and services.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Effective Date: <time dateTime={EFFECTIVE_DATE_ISO}>{EFFECTIVE_DATE}</time>
          </p>
        </header>

        <section className="mb-6 rounded-3xl border border-[#00D3CD]/20 bg-white p-7 shadow-sm sm:p-8">
          <p className="leading-relaxed text-slate-600">
            This Disclaimer explains the limitations of liability and the conditions
            under which information, products, services, and content are provided
            through the AbheePay website, Merchant App, API Marketplace, Developer
            Hub, and other digital platforms. By accessing or using our website or
            services, you acknowledge this Disclaimer together with our Terms &amp;
            Conditions, Privacy Policy, and other applicable legal policies.
          </p>
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

        {/* Acceptance note */}
        <section className="mt-8 rounded-3xl border border-[#00D3CD]/20 bg-white p-7 shadow-sm sm:p-8">
          <div className="flex gap-4">
            <FileCheck2 className="h-6 w-6 shrink-0 text-[#00B5B0]" />
            <p className="leading-relaxed text-slate-600">
              <span className="font-semibold text-slate-900">Acceptance. </span>
              By accessing or using the AbheePay website, Merchant App, API
              Marketplace, Developer Hub, or any related products or services, you
              acknowledge that you have read, understood, and agreed to this
              Disclaimer.
            </p>
          </div>
        </section>

        <section className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-br from-[#00D3CD] to-[#008B88] p-8 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">Need clarification?</h2>
            <p className="mt-1 text-sm text-white/90">
              If you have any questions regarding this Disclaimer, get in touch.
            </p>
          </div>
          <a
            href="mailto:care@abheepay.com"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#00857E] transition-colors hover:bg-slate-50"
          >
            <Mail className="h-4 w-4" />
            Contact AbheePay support
            <ChevronRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  );
};

export default Disclaimer;
