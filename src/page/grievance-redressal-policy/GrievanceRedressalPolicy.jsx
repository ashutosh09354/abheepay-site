import React from "react";
import { Helmet } from "react-helmet-async"; // swap to "react-helmet" if that's what you have installed
import {
  MessageCircleWarning,
  CheckCircle2,
  Mail,
  Clock3,
  ChevronRight,
  UserCog,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO CONSTANTS                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.abheepay.com"; // update if this differs from your production domain
const PAGE_PATH = "/grievance-redressal";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const SEO_TITLE = "Grievance Redressal Policy | AbheePay";
const SEO_DESCRIPTION =
  "Learn about the AbheePay Grievance Redressal Policy, including how to submit complaints, our resolution process, response timelines, and escalation mechanism.";

// Update this whenever the policy is revised — shown in the header.
// No date was specified for this page, so it's set to match the other legal pages; change if this one is dated separately.
const EFFECTIVE_DATE = "01 August 2026";
const EFFECTIVE_DATE_ISO = "2026-08-01";

// ⚠️ Update these before publishing — see the "Grievance Officer" section below.
const GRIEVANCE_OFFICER = {
  name: "[To Be Updated]",
  designation: "Grievance Officer",
  email: "[To Be Updated]",
  phone: "[To Be Updated]",
  address: "[To Be Updated]",
};

/* ------------------------------------------------------------------ */
/*  CONTENT                                                             */
/* ------------------------------------------------------------------ */

const sections = [
  {
    title: "Our Commitment",
    intro: "We are committed to:",
    items: [
      "Listening to customer concerns.",
      "Handling complaints professionally and fairly.",
      "Maintaining transparency throughout the resolution process.",
      "Responding within reasonable timelines.",
      "Continuously improving our products and services based on customer feedback.",
    ],
    outro: "Every grievance is treated with importance and reviewed by the appropriate team.",
  },
  {
    title: "Who Can Submit a Grievance?",
    intro: "This policy applies to:",
    items: [
      "Customers",
      "Merchants",
      "Business Partners",
      "API Developers",
      "Enterprise Clients",
      "Website Visitors",
      "Prospective Customers",
    ],
    outro: "Anyone who believes they have experienced an issue related to AbheePay products or services may submit a grievance.",
  },
  {
    title: "Types of Grievances",
    intro: "You may contact us regarding matters such as:",
    items: [
      "Merchant onboarding issues",
      "Payment-related concerns",
      "Settlement enquiries",
      "API integration issues",
      "Technical support requests",
      "Account access issues",
      "Service quality concerns",
      "Billing-related questions",
      "Product-related complaints",
      "Website issues",
      "Privacy concerns",
      "General customer service feedback",
    ],
  },
  {
    title: "How to Submit a Grievance",
    intro: "You can contact us through any of the following official channels:",
    items: [
      { label: "Contact Form", desc: "Submit your complaint using the contact form available on our website." },
      { label: "Email", desc: "Send your grievance to the official support or grievance email address published on the Contact Us page." },
      { label: "Phone", desc: "You may also contact our customer support team during business hours." },
      { label: "Registered Office", desc: "Written communications may be sent to our registered office address available on our website." },
    ],
  },
  {
    title: "Information to Include",
    intro: "To help us resolve your grievance efficiently, please provide:",
    items: [
      "Full Name",
      "Company Name (if applicable)",
      "Registered Mobile Number",
      "Registered Email Address",
      "Merchant ID or Customer ID (if applicable)",
      "Transaction Reference (if applicable)",
      "Product or Service Name",
      "Description of the issue",
      "Supporting documents or screenshots (if available)",
    ],
    outro: "Providing complete information helps us investigate your concern more quickly.",
  },
  {
    title: "Resolution Process",
    intro: "Our grievance handling process generally follows these steps:",
    items: [
      { label: "Step 1 – Complaint Received", desc: "Your grievance is received through one of our official communication channels." },
      { label: "Step 2 – Acknowledgement", desc: "We acknowledge receipt of your complaint and assign it for review." },
      { label: "Step 3 – Investigation", desc: "The relevant department reviews the information, investigates the issue, and may contact you if additional information is required." },
      { label: "Step 4 – Resolution", desc: "Once the review is complete, we communicate the outcome and, where appropriate, implement corrective action." },
      { label: "Step 5 – Closure", desc: "The grievance is considered resolved after appropriate action has been taken or an explanation has been provided." },
    ],
  },
  {
    title: "Response Timelines",
    intro: "We aim to:",
    items: [
      "Acknowledge grievances within a reasonable time after receipt.",
      "Review and investigate complaints promptly.",
      "Resolve issues as quickly as reasonably possible, depending on the complexity of the matter.",
    ],
    outro: "Some cases involving banking partners, payment providers, regulatory requirements, or third-party services may require additional time.",
  },
  {
    title: "Escalation Process",
    text: "If you are not satisfied with the initial response, you may request that your grievance be reviewed by the appropriate senior team or designated grievance officer. Escalated cases will be reviewed independently to ensure a fair resolution.",
  },
  {
    title: "Complaints We Cannot Process",
    intro: "We may be unable to process complaints that:",
    items: [
      "Do not contain sufficient information.",
      "Relate to matters outside the scope of AbheePay services.",
      "Are abusive, threatening, or fraudulent.",
      "Violate applicable laws or our policies.",
    ],
    outro: "Where appropriate, we may request additional information before proceeding.",
  },
  {
    title: "Continuous Improvement",
    text: "Customer feedback helps us improve our products, services, and support processes. We regularly review grievance trends to identify opportunities for improving customer experience and service quality.",
  },
];

const GrievanceRedressalPolicy = () => {
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
            <MessageCircleWarning className="h-4 w-4 text-[#00857E]" />
            <span className="text-xs font-medium uppercase tracking-wider text-[#00857E]">Customer support</span>
          </div>
          <h1 className="mb-5 text-4xl font-bold text-slate-900 sm:text-5xl">
            Grievance Redressal <span className="text-[#00B5B0]">Policy</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Our process for receiving, reviewing, and resolving customer grievances.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Effective Date: <time dateTime={EFFECTIVE_DATE_ISO}>{EFFECTIVE_DATE}</time>
          </p>
        </header>

        <section className="mb-6 rounded-3xl border border-[#00D3CD]/20 bg-white p-7 shadow-sm sm:p-8">
          <div className="flex gap-4">
            <Clock3 className="h-6 w-6 shrink-0 text-[#00B5B0]" />
            <p className="leading-relaxed text-slate-600">
              At AbheePay, customer satisfaction is one of our highest priorities. This
              Grievance Redressal Policy explains how customers, merchants, developers,
              partners, and website users can raise complaints or concerns regarding our
              products and services, and the process we follow to review, investigate,
              and resolve grievances fairly and efficiently. Please provide complete and
              accurate information when raising a grievance so that we can investigate
              and assist you as efficiently as possible.
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
                  {section.items.map((item, i) =>
                    typeof item === "string" ? (
                      <li key={item} className="flex items-start gap-3 leading-relaxed text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00B5B0]" />
                        {item}
                      </li>
                    ) : (
                      <li key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                        <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-[#00857E]">
                          <span className="h-1 w-3.5 rounded-full bg-[#00857E]" />
                          {item.label}
                        </p>
                        <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                      </li>
                    )
                  )}
                </ul>
              )}
              {section.outro && <p className="mt-4 leading-relaxed text-slate-600">{section.outro}</p>}
            </section>
          ))}

          {/* Grievance Officer */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="mb-4 flex items-center gap-3 text-xl font-bold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D3CD]/10 text-sm font-semibold text-[#00857E]">
                {String(sections.length + 1).padStart(2, "0")}
              </span>
              Grievance Officer
            </h2>
            <p className="mb-4 leading-relaxed text-slate-600">
              For matters requiring formal escalation, you may contact our designated
              Grievance Officer.
            </p>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00A79D]/10">
                  <UserCog className="h-4 w-4 text-[#00A79D]" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{GRIEVANCE_OFFICER.name}</p>
                  <p className="text-xs text-slate-400">{GRIEVANCE_OFFICER.designation}</p>
                </div>
              </div>
              <div className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#00A79D]" /> {GRIEVANCE_OFFICER.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#00A79D]" /> {GRIEVANCE_OFFICER.phone}
                </p>
                <p className="flex items-center gap-2 sm:col-span-2">
                  <MapPin className="h-4 w-4 text-[#00A79D]" /> {GRIEVANCE_OFFICER.address}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm italic text-slate-400">
              Please update these details with your official grievance contact before
              publishing this page.
            </p>
          </section>
        </div>

        {/* Closing trust statement + contact */}
        <section className="mt-8 rounded-3xl bg-gradient-to-br from-[#00D3CD] to-[#008B88] p-8 text-white">
          <div className="flex items-start gap-4">
            <Heart className="h-6 w-6 shrink-0" />
            <div className="flex-1">
              <h2 className="text-xl font-bold">Our Commitment to Fair Resolution</h2>
              <p className="mt-2 leading-relaxed text-white/90">
                At AbheePay, we believe that every customer deserves to be heard. We are
                committed to resolving concerns in a transparent, respectful, and timely
                manner while continually improving the quality of our products,
                services, and customer support.
              </p>
              <a
                href="mailto:care@abheepay.com"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#00857E] transition-colors hover:bg-slate-50"
              >
                <Mail className="h-4 w-4" />
                Submit a grievance
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GrievanceRedressalPolicy;
