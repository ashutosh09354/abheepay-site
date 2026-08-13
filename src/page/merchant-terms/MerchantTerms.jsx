import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  UserCheck,
  ClipboardList,
  ListChecks,
  CreditCard,
  Banknote,
  Handshake,
  ShieldOff,
  MessageSquareWarning,
  Lock,
  BadgeCheck,
  ShieldAlert,
  Copyright,
  RefreshCw,
  Gavel,
  Mail,
  CheckCircle2,
  ChevronRight,
  Info
} from "lucide-react";

/**
 * SEO DETAILS (for the page this component is mounted on):
 * URL: /merchant-terms
 * <title>Merchant Terms | AbheePay</title>
 * <meta name="description" content="Read the AbheePay Merchant Terms
 *   governing merchant onboarding, payment acceptance, settlements,
 *   compliance, account responsibilities, and use of merchant services." />
 * <link rel="canonical" href="https://www.abheepay.com/merchant-terms" />
 * Keep this page's single <h1> as the primary heading for the route, and
 * consider a BreadcrumbList / WebPage JSON-LD block in <head>.
 */

const sections = [
  {
    id: "eligibility",
    title: "Merchant Eligibility",
    icon: <UserCheck className="w-5 h-5" />,
    intro: "To become an AbheePay Merchant, you must:",
    list: [
      "Be legally eligible to operate your business.",
      "Provide accurate and complete registration information.",
      "Complete the required verification process.",
      "Comply with all applicable laws and regulatory requirements.",
      "Maintain valid business and contact information."
    ],
    outro:
      "AbheePay reserves the right to approve, reject, suspend, or terminate merchant applications based on applicable business, legal, compliance, or operational requirements."
  },
  {
    id: "onboarding",
    title: "Merchant Onboarding",
    icon: <ClipboardList className="w-5 h-5" />,
    intro: "To activate merchant services, you may be required to provide:",
    list: [
      "Business Name",
      "Business Address",
      "Contact Information",
      "Identity Verification Documents",
      "Business Registration Documents (where applicable)",
      "Bank Account Details",
      "Other documents required for verification"
    ],
    outro: "Merchant activation is subject to successful verification and approval."
  },
  {
    id: "responsibilities",
    title: "Merchant Responsibilities",
    icon: <ListChecks className="w-5 h-5" />,
    intro: "As an AbheePay Merchant, you agree to:",
    list: [
      "Use AbheePay services only for lawful business activities.",
      "Provide accurate and updated business information.",
      "Maintain the security of your merchant account.",
      "Inform AbheePay of any significant changes to your business.",
      "Cooperate with verification, compliance, and audit requests when required.",
      "Display pricing and business information accurately to your customers.",
      "Follow all applicable payment and business regulations."
    ],
    outro: "Merchants are responsible for all activities performed through their merchant account."
  },
  {
    id: "payment-acceptance",
    title: "Payment Acceptance",
    icon: <CreditCard className="w-5 h-5" />,
    intro: "Merchants may accept payments using eligible AbheePay products, including:",
    list: [
      "Payment Gateway",
      "Payment Links",
      "QR Payment Solution",
      "QR Sound Box",
      "POS Machine",
      "Other approved payment services"
    ],
    outro:
      "The availability of payment methods may vary depending on the merchant category, business type, and applicable regulatory requirements."
  },
  {
    id: "settlements",
    title: "Settlements",
    icon: <Banknote className="w-5 h-5" />,
    paragraphs: [
      "Settlement of eligible transactions will be processed according to the applicable settlement schedule and service agreement."
    ],
    intro: "Settlement timelines may vary based on:",
    list: [
      "Product type",
      "Banking partner",
      "Transaction review",
      "Compliance verification",
      "Public holidays or banking schedules"
    ],
    outro:
      "AbheePay may temporarily hold or delay settlements where required for fraud prevention, compliance reviews, dispute resolution, or regulatory obligations."
  },
  {
    id: "obligations",
    title: "Merchant Obligations",
    icon: <Handshake className="w-5 h-5" />,
    intro: "Merchants agree to:",
    list: [
      "Operate their business ethically and legally.",
      "Honour genuine customer transactions.",
      "Maintain accurate transaction records where required.",
      "Respond promptly to requests for information.",
      "Comply with tax, financial, and regulatory obligations applicable to their business."
    ]
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
    icon: <ShieldOff className="w-5 h-5" />,
    intro: "Merchants must not:",
    list: [
      "Process fraudulent or unauthorised transactions.",
      "Accept payments for illegal goods or services.",
      "Use AbheePay services for money laundering, fraud, or prohibited activities.",
      "Share merchant credentials with unauthorised individuals.",
      "Manipulate, reverse engineer, or misuse AbheePay systems.",
      "Circumvent security controls or transaction monitoring systems.",
      "Misrepresent products, services, or business information."
    ],
    outro:
      "Violation of these Terms may result in immediate suspension or termination of merchant services.",
    emphasis: true
  },
  {
    id: "chargebacks",
    title: "Chargebacks & Disputes",
    icon: <MessageSquareWarning className="w-5 h-5" />,
    paragraphs: [
      "Where applicable, merchants are responsible for cooperating in the resolution of customer disputes, chargebacks, or transaction investigations."
    ],
    intro: "Merchants may be required to provide:",
    list: [
      "Transaction records",
      "Delivery confirmation",
      "Customer communication",
      "Supporting documentation"
    ],
    outro: "Failure to provide requested information may affect dispute resolution outcomes."
  },
  {
    id: "account-security",
    title: "Merchant Account Security",
    icon: <Lock className="w-5 h-5" />,
    intro: "Merchants are responsible for safeguarding:",
    list: [
      "Login credentials",
      "Passwords",
      "OTPs",
      "API credentials (where applicable)",
      "POS devices",
      "QR materials",
      "Other account access information"
    ],
    outro: "Any suspected unauthorised activity should be reported to AbheePay immediately."
  },
  {
    id: "compliance",
    title: "Compliance",
    icon: <BadgeCheck className="w-5 h-5" />,
    intro: "Merchants agree to comply with all applicable:",
    list: [
      "Laws",
      "Regulatory requirements",
      "Financial compliance obligations",
      "Anti-fraud measures",
      "Business licensing requirements",
      "Tax obligations"
    ],
    outro: "Failure to comply may affect eligibility to continue using merchant services."
  },
  {
    id: "suspension",
    title: "Suspension & Termination",
    icon: <ShieldAlert className="w-5 h-5" />,
    intro: "AbheePay may suspend, restrict, or terminate merchant services if:",
    list: [
      "These Merchant Terms are violated.",
      "Fraudulent activity is suspected.",
      "Required verification is not completed.",
      "Regulatory or legal requirements apply.",
      "Merchant information is false or misleading.",
      "Services are used for prohibited activities."
    ],
    outro: "Where appropriate, merchants may be notified before action is taken.",
    emphasis: true
  },
  {
    id: "ip",
    title: "Intellectual Property",
    icon: <Copyright className="w-5 h-5" />,
    paragraphs: [
      "All trademarks, software, technology, documentation, merchant applications, and other materials provided by AbheePay remain the intellectual property of AbheePay or its licensors.",
      "Merchants may only use these materials as authorised for the purpose of using AbheePay services."
    ]
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: <Gavel className="w-5 h-5" />,
    paragraphs: [
      "AbheePay makes reasonable efforts to provide reliable merchant services but does not guarantee uninterrupted availability.",
      "To the maximum extent permitted by law, AbheePay shall not be liable for indirect, incidental, consequential, or special damages arising from the use of merchant services."
    ]
  },
  {
    id: "service-changes",
    title: "Changes to Merchant Services",
    icon: <RefreshCw className="w-5 h-5" />,
    paragraphs: [
      "AbheePay may update, improve, suspend, or discontinue products or features to enhance services, improve security, or comply with legal and regulatory requirements.",
      "Where appropriate, merchants will be informed of significant changes."
    ]
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: <Gavel className="w-5 h-5" />,
    paragraphs: [
      "These Merchant Terms are governed by the laws of India.",
      "Any disputes arising from these Terms shall be subject to the jurisdiction of the competent courts where AbheePay is legally registered, unless otherwise required by applicable law."
    ]
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: <Mail className="w-5 h-5" />,
    paragraphs: [
      "If you have any questions regarding these Merchant Terms, please contact our merchant support team through the Contact Us page."
    ],
    link: { href: "/contact", label: "Visit Contact Us" }
  },
  {
    id: "acceptance",
    title: "Acceptance",
    icon: <CheckCircle2 className="w-5 h-5" />,
    paragraphs: [
      "By registering as an AbheePay Merchant or using any merchant product or service, you acknowledge that you have read, understood, and agreed to these Merchant Terms."
    ],
    emphasis: true
  }
];

const MerchantTerms = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:py-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D3CD] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#00D3CD]/10 backdrop-blur-sm border border-[#00D3CD]/20 rounded-full px-4 py-2 mb-6">
            <FileText className="w-4 h-4 text-[#00B5B0]" />
            <span className="text-xs font-medium text-[#00857E] tracking-wider uppercase">
              Legal · Merchants
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900">Merchant</span>{" "}
            <span className="bg-gradient-to-r from-[#00D3CD] to-purple-600 bg-clip-text text-transparent">
              Terms
            </span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            These Merchant Terms govern the use of merchant products and services
            offered by AbheePay, including payment solutions, merchant
            applications, QR solutions, POS devices, payment links, digital
            invoices, APIs, and other business services.
          </p>
          <p className="text-slate-400 text-sm mt-4">
            Effective Date: <time dateTime="2026-08-01">01 August 2026</time>
          </p>
        </header>

        {/* Intro card */}
        <div className="max-w-4xl mx-auto mb-12 bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 shadow-sm">
          <p className="text-slate-600 leading-relaxed">
            By registering as a merchant or using any AbheePay merchant service,
            you agree to comply with these Merchant Terms, the User Agreement,
            Privacy Policy, Terms &amp; Conditions, and any product-specific
            agreements applicable to your account.
          </p>
          <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700/80">
              Merchant activation and continued access to AbheePay merchant
              services are subject to successful verification and ongoing
              compliance with these Terms.
            </p>
          </div>
        </div>

        {/* Main grid: TOC + sections */}
        <div className="grid lg:grid-cols-4 gap-8 items-start max-w-6xl mx-auto">
          {/* Table of contents */}
          <nav
            aria-label="Merchant Terms sections"
            className="lg:sticky lg:top-8 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm order-2 lg:order-1"
          >
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
              On this page
            </h2>
            <ul className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onMouseEnter={() => setHovered(s.id)}
                    onMouseLeave={() => setHovered(null)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-colors ${
                      hovered === s.id
                        ? "bg-[#00D3CD]/10 text-[#00857E]"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="text-[#00D3CD] shrink-0">{s.icon}</span>
                    <span className="leading-tight">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-heading`}
                className={`scroll-mt-8 bg-white border rounded-3xl p-8 shadow-sm transition-colors ${
                  s.emphasis
                    ? "border-red-100"
                    : "border-slate-200 hover:border-[#00D3CD]/30"
                }`}
              >
                <h2
                  id={`${s.id}-heading`}
                  className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      s.emphasis ? "bg-red-50 text-red-500" : "bg-[#00D3CD]/10 text-[#00D3CD]"
                    }`}
                  >
                    {s.icon}
                  </div>
                  {String(i + 1).padStart(2, "0")}. {s.title}
                </h2>

                {s.paragraphs &&
                  s.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-slate-600 leading-relaxed mb-3 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}

                {s.intro && (
                  <p className="text-slate-600 leading-relaxed mb-4 mt-3 first:mt-0">
                    {s.intro}
                  </p>
                )}

                {s.list && (
                  <ul className="space-y-2 mb-4">
                    {s.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00D3CD] shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.outro && (
                  <p
                    className={`text-sm leading-relaxed ${
                      s.emphasis
                        ? "text-red-600/90 border-t border-red-100 pt-4"
                        : "text-slate-500 border-t border-slate-100 pt-4"
                    }`}
                  >
                    {s.outro}
                  </p>
                )}

                {s.link && (
                  <Link
                    to={s.link.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#00D3CD] hover:text-[#00B5B0] transition-colors"
                  >
                    {s.link.label}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}
              </section>
            ))}

            {/* Contact CTA footer */}
            <div className="bg-gradient-to-br from-[#00D3CD] to-[#008B88] rounded-3xl p-8 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">
                  Questions about these Merchant Terms?
                </h2>
                <p className="text-white/90 text-sm">
                  Our merchant support team is ready to help.
                </p>
              </div>
              <a
                href="mailto:care@abheepay.com"
                className="bg-white hover:bg-slate-50 text-[#00857E] font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shrink-0"
              >
                <Mail className="w-4 h-4" />
                Contact Merchant Support
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default MerchantTerms;
