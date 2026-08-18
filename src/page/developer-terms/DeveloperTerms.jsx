import React from "react";
import { Helmet } from "react-helmet-async"; // swap to "react-helmet" if that's what you have installed
import {
  Code2,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Mail,
  FileCheck2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO CONSTANTS                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.abheepay.com"; // update if this differs from your production domain
const PAGE_PATH = "/developer-terms";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const SEO_TITLE = "Developer Terms of Use | AbheePay API Marketplace";
const SEO_DESCRIPTION =
  "Read the AbheePay Developer Terms of Use governing access to the API Marketplace, API keys, developer accounts, integrations, security, and acceptable API usage.";

// Update this whenever the terms are revised — shown in the header.
const EFFECTIVE_DATE = "01 August 2026";


const sections = [
  {
    title: "Acceptance and Scope",
    text: "These Developer Terms of Use (\u201cDeveloper Terms\u201d) govern your access to and use of the AbheePay API Marketplace, Developer Hub, APIs, SDKs, Sandbox Environment, Webhooks, documentation, and other developer resources. By creating a developer account, accessing the Developer Hub, or integrating any AbheePay API into your applications, you agree to comply with these Developer Terms, our Terms & Conditions, Privacy Policy, User Agreement, and any product-specific agreements. If you do not agree with these Developer Terms, you should not access or use the AbheePay Developer Platform.",
  },
  {
    title: "Developer Eligibility",
    intro: "To access the AbheePay Developer Platform, you must:",
    items: [
      "Be legally eligible to enter into a binding agreement.",
      "Register using accurate and complete information.",
      "Maintain a valid developer account where required.",
      "Comply with applicable laws and regulations.",
      "Meet any product-specific onboarding or verification requirements.",
    ],
    outro: "Some APIs may require additional approval before production access is granted.",
  },
  {
    title: "Developer Account",
    intro:
      "Developers are responsible for maintaining the security and confidentiality of their developer accounts. You agree to:",
    items: [
      "Provide accurate registration information.",
      "Keep your contact information updated.",
      "Protect your account credentials.",
      "Notify AbheePay immediately if unauthorized access is suspected.",
    ],
    outro: "You are responsible for all activity performed through your developer account.",
  },
  {
    title: "API Access",
    intro:
      "AbheePay provides APIs to help businesses integrate payment and business services into their applications. Available APIs may include:",
    items: [
      "Payment Gateway API",
      "Payout API",
      "BBPS API",
      "Wallet API",
      "QR API",
      "Recharge API",
      "Aadhaar Verification API",
    ],
    outro:
      "API availability may change from time to time based on business, operational, or regulatory requirements.",
  },
  {
    title: "API Keys & Credentials",
    intro: "API credentials are confidential. You agree to:",
    items: [
      "Store API keys securely.",
      "Never expose API credentials publicly.",
      "Never share API keys with unauthorized persons.",
      "Rotate credentials where appropriate.",
      "Immediately report any suspected credential compromise.",
    ],
    outro: "AbheePay may revoke or regenerate compromised credentials without prior notice.",
  },
  {
    title: "Sandbox Environment",
    intro:
      "The Sandbox Environment is provided for testing and development purposes only. Developers must not:",
    items: [
      "Process real customer transactions in the Sandbox.",
      "Use Sandbox credentials in production.",
      "Misrepresent Sandbox data as production data.",
    ],
    outro: "Sandbox services may be modified, reset, or discontinued without notice.",
  },
  {
    title: "Acceptable API Usage",
    intro:
      "Developers agree to use the APIs responsibly and only for authorized business purposes. You must not:",
    items: [
      "Use APIs for illegal or fraudulent activities.",
      "Attempt unauthorized access to AbheePay systems.",
      "Reverse engineer or bypass security mechanisms.",
      "Interfere with platform performance or availability.",
      "Perform excessive automated requests intended to disrupt services.",
      "Use APIs in violation of applicable laws or regulations.",
      "Resell or redistribute API access without written authorization.",
    ],
  },
  {
    title: "Integration Requirements",
    intro: "Developers are responsible for ensuring that their integrations:",
    items: [
      "Follow the official API documentation.",
      "Implement appropriate authentication and authorization.",
      "Protect customer information.",
      "Handle errors securely.",
      "Test integrations before moving to production.",
      "Maintain compatibility with supported API versions.",
    ],
  },
  {
    title: "Security Responsibilities",
    intro: "Developers should implement reasonable security measures, including:",
    items: [
      "HTTPS encryption",
      "Secure credential storage",
      "Access controls",
      "Input validation",
      "Logging and monitoring",
      "Regular security updates",
    ],
    outro: "Developers remain responsible for securing their own applications and infrastructure.",
  },
  {
    title: "API Rate Limits",
    intro:
      "To maintain platform stability, AbheePay may apply usage limits, request limits, or fair usage policies. If usage exceeds permitted limits, we may:",
    items: [
      "Throttle requests",
      "Temporarily suspend API access",
      "Require additional approval for higher usage",
      "Recommend a suitable commercial plan",
    ],
  },
  {
    title: "API Updates & Versioning",
    intro: "We continuously improve our APIs. AbheePay may:",
    items: [
      "Release new API versions.",
      "Introduce new features.",
      "Deprecate older versions.",
      "Improve security and performance.",
    ],
    outro:
      "Developers are encouraged to review Release Notes regularly and update their integrations when necessary.",
  },
  {
    title: "Intellectual Property",
    text: "All APIs, SDKs, documentation, software, trademarks, and developer resources remain the intellectual property of AbheePay or its licensors. Developers receive a limited, non-exclusive, non-transferable license to use these resources solely for authorized integrations.",
  },
  {
    title: "Suspension or Termination",
    intro: "AbheePay may suspend or terminate API access if:",
    items: [
      "These Developer Terms are violated.",
      "Fraudulent or illegal activity is detected.",
      "Security risks are identified.",
      "API credentials are compromised.",
      "Regulatory or legal obligations require such action.",
      "Platform misuse is identified.",
    ],
  },
  {
    title: "Limitation of Liability",
    text: "While AbheePay strives to provide reliable APIs and developer services, uninterrupted availability cannot be guaranteed. To the fullest extent permitted by law, AbheePay shall not be liable for indirect, incidental, consequential, or special damages resulting from the use of the Developer Platform or APIs.",
  },
  {
    title: "Changes to These Terms",
    text: "We may update these Developer Terms from time to time. The latest version will always be published on this page with the updated effective date. Continued use of the Developer Platform after changes become effective constitutes acceptance of the revised terms.",
  },
  {
    title: "Governing Law",
    text: "These Developer Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of the competent courts where AbheePay is legally registered, unless otherwise required by applicable law.",
  },
];

const DeveloperTerms = () => {
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
    <main className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:py-20">
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

      <div className="max-w-5xl mx-auto">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00D3CD]/20 bg-[#00D3CD]/10 px-4 py-2 mb-6">
            <Code2 className="w-4 h-4 text-[#00857E]" />
            <span className="text-xs font-medium tracking-wider uppercase text-[#00857E]">
              Legal · Developers
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">
            Developer <span className="text-[#00B5B0]">Terms of Use</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            The terms that apply when you use AbheePay developer tools, APIs, SDKs,
            sandbox environments, and related integration services.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Effective Date: <time dateTime="2026-08-01">{EFFECTIVE_DATE}</time>
          </p>
        </header>

        <section className="mb-8 rounded-3xl border border-[#00D3CD]/20 bg-white p-7 shadow-sm sm:p-8">
          <div className="flex gap-4">
            <ShieldCheck className="w-6 h-6 shrink-0 text-[#00B5B0]" />
            <p className="leading-relaxed text-slate-600">
              These Developer Terms are an agreement between you and AbheePay. If you use
              Developer Services on behalf of an organisation, you confirm that you have
              authority to accept these terms for that organisation.
            </p>
          </div>
        </section>

        <div className="grid gap-5">
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
                    <li key={item} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00B5B0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.outro && (
                <p className="mt-4 leading-relaxed text-slate-600">{section.outro}</p>
              )}
            </section>
          ))}
        </div>

        {/* Acceptance note */}
        <section className="mt-8 rounded-3xl border border-[#00D3CD]/20 bg-white p-7 shadow-sm sm:p-8">
          <div className="flex gap-4">
            <FileCheck2 className="w-6 h-6 shrink-0 text-[#00B5B0]" />
            <p className="leading-relaxed text-slate-600">
              <span className="font-semibold text-slate-900">Acceptance. </span>
              By accessing the AbheePay Developer Hub, API Marketplace, SDKs, Sandbox,
              Webhooks, or any developer resource, you acknowledge that you have read,
              understood, and agreed to these Developer Terms of Use.
            </p>
          </div>
        </section>

        <section className="mt-8 flex flex-col items-start justify-between gap-5 rounded-3xl bg-gradient-to-br from-[#00D3CD] to-[#008B88] p-8 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">Contact the Developer Team</h2>
            <p className="mt-1 text-sm text-white/90">
              Questions about API access, integrations, or these Developer Terms? Our
              developer support team is here to help.
            </p>
          </div>
          <a href="mailto:care@abheepay.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#00857E] transition-colors hover:bg-slate-50 flex-shrink-0">
            <Mail className="h-4 w-4" />
            Contact support
            <ChevronRight className="h-4 w-4" />
          </a>
        </section>
      </div>
    </main>
  );
};

export default DeveloperTerms;
