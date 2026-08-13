import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  UserCheck,
  UserPlus,
  ListChecks,
  ShieldOff,
  BadgeCheck,
  CreditCard,
  Lock,
  ShieldAlert,
  Copyright,
  Eye,
  RefreshCw,
  Scale,
  Gavel,
  Mail,
  CheckCircle2,
  ChevronRight,
  Info
} from "lucide-react";

/**
 * SEO NOTE (for the page this component is mounted on):
 * URL: /user-agreement
 * <title>User Agreement | AbheePay</title>
 * <meta name="description" content="Read the AbheePay User Agreement to
 *   understand the rights, responsibilities, and obligations of users
 *   accessing our website, merchant platform, APIs, and business services." />
 * <link rel="canonical" href="https://www.abheepay.com/user-agreement" />
 * Keep this page's single <h1> as the primary heading for the route, and
 * consider a BreadcrumbList / WebPage JSON-LD block in <head>.
 */

const sections = [
  {
    id: "eligibility",
    title: "User Eligibility",
    icon: <UserCheck className="w-5 h-5" />,
    intro: "To use AbheePay services, you must:",
    list: [
      "Be legally eligible to enter into a binding agreement.",
      "Provide accurate and complete registration information.",
      "Comply with all applicable laws and regulations.",
      "Meet any additional eligibility requirements applicable to specific products or services."
    ],
    outro:
      "Certain services may require business verification, identity verification, or additional documentation before activation."
  },
  {
    id: "registration",
    title: "Account Registration",
    icon: <UserPlus className="w-5 h-5" />,
    intro:
      "To access certain products and services, you may need to create an AbheePay account. When registering, you agree to:",
    list: [
      "Provide accurate and up-to-date information.",
      "Keep your contact information current.",
      "Maintain the confidentiality of your account credentials.",
      "Accept responsibility for all activities performed through your account."
    ],
    outro:
      "You are responsible for protecting your username, password, OTPs, and other authentication credentials."
  },
  {
    id: "responsibilities",
    title: "User Responsibilities",
    icon: <ListChecks className="w-5 h-5" />,
    intro: "When using AbheePay, you agree to:",
    list: [
      "Use the platform only for lawful purposes.",
      "Provide accurate business and personal information.",
      "Keep your account information updated.",
      "Protect your login credentials from unauthorized access.",
      "Follow all applicable laws, regulations, and industry requirements.",
      "Cooperate with verification or compliance requests where required."
    ]
  },
  {
    id: "prohibited",
    title: "Prohibited Activities",
    icon: <ShieldOff className="w-5 h-5" />,
    intro: "Users must not:",
    list: [
      "Engage in fraudulent, deceptive, or unlawful activities.",
      "Use the platform for money laundering or illegal financial transactions.",
      "Attempt unauthorized access to our systems or other user accounts.",
      "Upload malicious software or harmful code.",
      "Misuse APIs or attempt to bypass security controls.",
      "Copy, modify, distribute, or reverse engineer our software without written permission.",
      "Interfere with the operation, security, or availability of the platform.",
      "Provide false or misleading information during registration or verification."
    ],
    outro: "Violation of these rules may result in suspension or termination of your account.",
    emphasis: true
  },
  {
    id: "verification",
    title: "Verification & Compliance",
    icon: <BadgeCheck className="w-5 h-5" />,
    intro:
      "Certain services may require identity verification, business verification, or Know Your Customer (KYC) documentation. Users agree to:",
    list: [
      "Provide requested information promptly.",
      "Submit valid documents where required.",
      "Cooperate with compliance reviews.",
      "Notify AbheePay if any submitted information changes."
    ],
    outro: "Failure to complete required verification may affect access to certain services."
  },
  {
    id: "payments",
    title: "Payments & Transactions",
    icon: <CreditCard className="w-5 h-5" />,
    paragraphs: [
      "Users are responsible for ensuring that payment information, transaction details, and business information submitted through the platform are accurate.",
      "AbheePay may decline, delay, or review transactions where required for security, compliance, fraud prevention, or operational reasons."
    ]
  },
  {
    id: "security",
    title: "Account Security",
    icon: <Lock className="w-5 h-5" />,
    paragraphs: [
      "Users are responsible for maintaining the security of their accounts.",
      "If you suspect unauthorized access, loss of credentials, or suspicious activity, you should notify AbheePay immediately using our official support channels."
    ]
  },
  {
    id: "suspension",
    title: "Suspension or Termination",
    icon: <ShieldAlert className="w-5 h-5" />,
    intro:
      "AbheePay may suspend, restrict, or terminate user accounts where necessary, including in situations involving:",
    list: [
      "Violation of this User Agreement.",
      "Fraudulent or illegal activity.",
      "Security risks.",
      "Regulatory or legal requirements.",
      "False or misleading information.",
      "Misuse of products, services, or APIs."
    ],
    outro: "Where appropriate, users may be notified before action is taken.",
    emphasis: true
  },
  {
    id: "ip",
    title: "Intellectual Property",
    icon: <Copyright className="w-5 h-5" />,
    paragraphs: [
      "All trademarks, logos, software, content, documentation, graphics, and technology available through AbheePay remain the property of AbheePay or the respective rights holders.",
      "Users may not reproduce, distribute, modify, or commercially exploit these materials without prior written permission."
    ]
  },
  {
    id: "privacy",
    title: "Privacy",
    icon: <Eye className="w-5 h-5" />,
    paragraphs: [
      "The collection, use, storage, and protection of personal information are governed by our Privacy Policy.",
      "By using AbheePay services, you acknowledge that your information may be processed as described in the Privacy Policy."
    ],
    link: { href: "/privacy-policy", label: "Read our Privacy Policy" }
  },
  {
    id: "platform-changes",
    title: "Changes to the Platform",
    icon: <RefreshCw className="w-5 h-5" />,
    paragraphs: [
      "AbheePay may introduce new products, modify existing services, update features, or discontinue certain services from time to time.",
      "We will make reasonable efforts to communicate significant changes where appropriate."
    ]
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: <Scale className="w-5 h-5" />,
    paragraphs: [
      "AbheePay strives to provide secure and reliable services. However, we do not guarantee uninterrupted availability or error-free operation.",
      "To the maximum extent permitted by applicable law, AbheePay shall not be liable for indirect, incidental, consequential, or special damages arising from the use of our platform or services."
    ]
  },
  {
    id: "agreement-changes",
    title: "Changes to This Agreement",
    icon: <FileText className="w-5 h-5" />,
    paragraphs: [
      "We may update this User Agreement from time to time to reflect changes in our products, services, legal obligations, or business practices.",
      "The latest version will always be published on this page with the updated effective date.",
      "Continued use of our services after any update constitutes acceptance of the revised User Agreement."
    ]
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: <Gavel className="w-5 h-5" />,
    paragraphs: [
      "This User Agreement shall be governed by and interpreted in accordance with the laws of India.",
      "Any disputes arising from this agreement shall be subject to the jurisdiction of the competent courts where AbheePay is legally registered, unless otherwise required by applicable law."
    ]
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: <Mail className="w-5 h-5" />,
    paragraphs: [
      "If you have any questions regarding this User Agreement, please contact us through the Contact Us page available on our website."
    ],
    link: { href: "/contact", label: "Visit Contact Us" }
  },
  {
    id: "acceptance",
    title: "Acceptance",
    icon: <CheckCircle2 className="w-5 h-5" />,
    paragraphs: [
      "By accessing or using the AbheePay website, Merchant App, APIs, or business services, you acknowledge that you have read, understood, and agreed to this User Agreement."
    ],
    emphasis: true
  }
];

const UserAgreement = () => {
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
              Legal
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900">User</span>{" "}
            <span className="bg-gradient-to-r from-[#00D3CD] to-purple-600 bg-clip-text text-transparent">
              Agreement
            </span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            This User Agreement governs your access to and use of the AbheePay
            website, Merchant App, APIs, business platforms, products, and services.
          </p>
          <p className="text-slate-400 text-sm mt-4">
            Effective Date: <time dateTime="2026-08-01">01 August 2026</time>
          </p>
        </header>

        {/* Intro card */}
        <div className="max-w-4xl mx-auto mb-12 bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 shadow-sm">
          <p className="text-slate-600 leading-relaxed">
            By creating an account, accessing our platform, or using any AbheePay
            service, you agree to comply with this User Agreement, our Privacy
            Policy, Terms &amp; Conditions, and any additional policies applicable
            to specific products or services.
          </p>
          <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-700/80">
              If you do not agree with this User Agreement, please do not use our
              platform or services.
            </p>
          </div>
        </div>

        {/* Main grid: TOC + sections */}
        <div className="grid lg:grid-cols-4 gap-8 items-start max-w-6xl mx-auto">
          {/* Table of contents */}
          <nav
            aria-label="User Agreement sections"
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

                {s.intro && <p className="text-slate-600 leading-relaxed mb-4">{s.intro}</p>}

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
                  Questions about this agreement?
                </h2>
                <p className="text-white/90 text-sm">
                  Reach out and our team will get back to you.
                </p>
              </div>
              <a
                href="mailto:care@abheepay.com"
                className="bg-white hover:bg-slate-50 text-[#00857E] font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shrink-0"
              >
                <Mail className="w-4 h-4" />
                Contact Support
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

export default UserAgreement;
