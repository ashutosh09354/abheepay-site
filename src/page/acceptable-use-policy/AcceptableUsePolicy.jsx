import React from "react";
import { Helmet } from "react-helmet-async"; // swap to "react-helmet" if that's what you have installed
import { ShieldCheck, CheckCircle2, Mail, ChevronRight, FileCheck2 } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO CONSTANTS                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.abheepay.com"; // update if this differs from your production domain
const PAGE_PATH = "/acceptable-use-policy";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const SEO_TITLE = "Acceptable Use Policy | AbheePay";
const SEO_DESCRIPTION =
  "Read the AbheePay Acceptable Use Policy to understand the acceptable and prohibited use of our website, Merchant App, APIs, payment solutions, and business services.";

// Update this whenever the policy is revised — shown in the header.
// Assuming the same effective date as the Developer Terms page; change if this policy is dated separately.
const EFFECTIVE_DATE = "01 August 2026";
const EFFECTIVE_DATE_ISO = "2026-08-01";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                             */
/* ------------------------------------------------------------------ */

const rules = [
  {
    title: "Purpose of This Policy",
    text: "This Policy helps ensure that every user accesses AbheePay services responsibly, ethically, and in compliance with applicable laws and regulations. We are committed to maintaining a secure environment that protects our customers, partners, developers, and business ecosystem.",
  },
  {
    title: "Who This Policy Applies To",
    intro: "This Policy applies to all users of AbheePay, including:",
    items: [
      "Website Visitors",
      "Merchants",
      "Business Customers",
      "Developers",
      "API Users",
      "Partners",
      "Enterprises",
      "Employees and Authorized Representatives (where applicable)",
    ],
  },
  {
    title: "Acceptable Use",
    intro:
      "You may use AbheePay products and services only for lawful and legitimate business purposes. Examples of acceptable use include:",
    items: [
      "Accepting digital payments for authorised business activities.",
      "Using Payment Gateway, QR Solutions, POS Machines, Merchant App, and Payment Links for approved transactions.",
      "Integrating AbheePay APIs into authorised applications.",
      "Accessing the Developer Hub for software development and testing.",
      "Contacting our support teams for assistance.",
      "Using the website to learn about our products and services.",
    ],
  },
  {
    title: "Illegal Activities",
    intro:
      "Users must not engage in any activity that may harm AbheePay, its customers, partners, or other users. You must not:",
    items: [
      "Violate applicable laws or regulations.",
      "Support unlawful activities.",
      "Process transactions connected with criminal activities.",
      "Engage in fraud, money laundering, or terrorist financing.",
    ],
  },
  {
    title: "Fraud & Misrepresentation",
    intro: "Users must not:",
    items: [
      "Provide false or misleading information.",
      "Create fake accounts.",
      "Impersonate another person or organisation.",
      "Submit forged documents.",
      "Misrepresent products, services, or business information.",
    ],
  },
  {
    title: "Security Violations",
    intro: "You must not:",
    items: [
      "Attempt to gain unauthorised access to any system.",
      "Probe or test system vulnerabilities without permission.",
      "Upload malware, viruses, spyware, ransomware, or harmful software.",
      "Circumvent authentication or security controls.",
      "Interfere with platform performance or availability.",
    ],
  },
  {
    title: "Platform Misuse",
    intro: "You must not:",
    items: [
      "Abuse APIs or developer services.",
      "Reverse engineer software or applications.",
      "Attempt to disrupt our infrastructure.",
      "Generate excessive automated requests that affect platform performance.",
      "Interfere with the normal operation of our services.",
    ],
  },
  {
    title: "Payment Misuse",
    intro: "AbheePay services must not be used for:",
    items: [
      "Fraudulent transactions.",
      "Unauthorised payment collection.",
      "Chargeback abuse.",
      "Payment fraud.",
      "Identity theft.",
      "Financial scams.",
      "Transactions prohibited under applicable laws.",
    ],
  },
  {
    title: "Restricted Business Activities",
    intro:
      "AbheePay services must not be used to facilitate or support businesses, products, or services that violate applicable laws, regulatory requirements, or our internal compliance standards. Examples include, but are not limited to:",
    items: [
      "Illegal products or services",
      "Counterfeit goods",
      "Fraudulent investment schemes",
      "Money laundering",
      "Terrorist financing",
      "Child exploitation or abuse-related content",
      "Intellectual property infringement",
      "Sale of prohibited or regulated products without required approvals",
      "Activities that threaten the security, reputation, or integrity of the AbheePay platform",
    ],
    outro: "AbheePay reserves the right to restrict, suspend, or terminate services where such activities are identified.",
  },
  {
    title: "Developer Responsibilities",
    intro: "Developers using the AbheePay API Marketplace must:",
    items: [
      "Protect API credentials.",
      "Follow official API documentation.",
      "Respect API rate limits.",
      "Build secure integrations.",
      "Use Sandbox environments only for testing.",
      "Comply with the Developer Terms of Use.",
    ],
  },
  {
    title: "Merchant Responsibilities",
    intro: "Merchants agree to:",
    items: [
      "Operate lawful businesses.",
      "Maintain accurate business information.",
      "Protect customer information.",
      "Follow applicable payment regulations.",
      "Use AbheePay services only for approved business activities.",
    ],
  },
  {
    title: "Intellectual Property",
    intro:
      "Users must respect the intellectual property rights of AbheePay and third parties. You must not:",
    items: [
      "Copy website content without permission.",
      "Reproduce software or documentation.",
      "Use AbheePay trademarks without written authorisation.",
      "Distribute proprietary materials unlawfully.",
    ],
  },
  {
    title: "Monitoring & Enforcement",
    intro:
      "To protect our platform, customers, and partners, AbheePay may monitor the use of its services where permitted by applicable laws. Where misuse is detected, we may:",
    items: [
      "Investigate suspicious activity.",
      "Restrict access to products or services.",
      "Suspend merchant or developer accounts.",
      "Disable API credentials.",
      "Remove prohibited content.",
      "Report unlawful activity to regulatory or law enforcement authorities where required.",
    ],
  },
  {
    title: "Reporting Violations",
    intro:
      "If you believe that someone is misusing the AbheePay platform, please notify us immediately through our official support channels. When reporting an issue, please include:",
    items: [
      "Description of the activity.",
      "Date and time.",
      "Relevant account or transaction details.",
      "Supporting information, if available.",
    ],
  },
  {
    title: "Consequences of Violations",
    intro: "Failure to comply with this Policy may result in one or more of the following actions:",
    items: [
      "Warning or notice.",
      "Temporary account suspension.",
      "Permanent account termination.",
      "Suspension of API access.",
      "Merchant account restrictions.",
      "Removal of content.",
      "Legal action.",
      "Reporting to regulatory or law enforcement authorities where required.",
    ],
  },
  {
    title: "Changes to This Policy",
    text: "AbheePay may update this Acceptable Use Policy from time to time to reflect changes in technology, business operations, legal requirements, or security practices. The latest version will always be available on this page along with the updated effective date.",
  },
];

const AcceptableUsePolicy = () => {
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
            <ShieldCheck className="h-4 w-4 text-[#00857E]" />
            <span className="text-xs font-medium uppercase tracking-wider text-[#00857E]">Legal policy</span>
          </div>
          <h1 className="mb-5 text-4xl font-bold text-slate-900 sm:text-5xl">
            Acceptable Use <span className="text-[#00B5B0]">Policy</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            This policy explains the acceptable and prohibited use of the AbheePay
            website, Merchant App, API Marketplace, Developer Hub, payment solutions,
            and business services.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Effective Date: <time dateTime={EFFECTIVE_DATE_ISO}>{EFFECTIVE_DATE}</time>
          </p>
        </header>

        <section className="mb-6 rounded-3xl border border-[#00D3CD]/20 bg-white p-7 shadow-sm sm:p-8">
          <p className="leading-relaxed text-slate-600">
            Our goal is to maintain a secure, reliable, and trusted platform for
            merchants, developers, partners, enterprises, and all users. By using any
            AbheePay product or service, you agree to comply with this Policy, our
            Terms &amp; Conditions, User Agreement, Merchant Terms, Developer Terms of
            Use, Privacy Policy, and any other applicable policies.
          </p>
        </section>

        <div className="space-y-5">
          {rules.map((rule, index) => (
            <section key={rule.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D3CD]/10 text-sm font-semibold text-[#00857E]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {rule.title}
              </h2>
              {rule.text && <p className="leading-relaxed text-slate-600">{rule.text}</p>}
              {rule.intro && <p className="mb-4 leading-relaxed text-slate-600">{rule.intro}</p>}
              {rule.items && (
                <ul className="space-y-3">
                  {rule.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00B5B0]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {rule.outro && <p className="mt-4 leading-relaxed text-slate-600">{rule.outro}</p>}
            </section>
          ))}
        </div>

        {/* Acceptance note */}
        <section className="mt-8 rounded-3xl border border-[#00D3CD]/20 bg-white p-7 shadow-sm sm:p-8">
          <div className="flex gap-4">
            <FileCheck2 className="h-6 w-6 shrink-0 text-[#00B5B0]" />
            <p className="leading-relaxed text-slate-600">
              <span className="font-semibold text-slate-900">Acceptance. </span>
              By accessing or using the AbheePay website, Merchant App, APIs, Developer
              Hub, or any related service, you acknowledge that you have read,
              understood, and agreed to comply with this Acceptable Use Policy.
            </p>
          </div>
        </section>

        <section className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-br from-[#00D3CD] to-[#008B88] p-8 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">Questions about this policy?</h2>
            <p className="mt-1 text-sm text-white/90">
              Have questions or want to report misuse of the AbheePay platform? Get in touch.
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

export default AcceptableUsePolicy;
