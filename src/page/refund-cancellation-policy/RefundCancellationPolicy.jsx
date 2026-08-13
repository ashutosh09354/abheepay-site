import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  ShieldCheck,
  AlertCircle,
  Mail,
  Phone,
  ChevronRight,
  Clock,
  Lock,
  Layers,
  Ban,
  Wallet,
  ClipboardList,
  Timer,
  Code2,
  AlertTriangle,
  RefreshCw,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Scale,
} from "lucide-react";

// ---- SEO ----
// Sets the document <title> and meta description on mount, since the project
// setup for react-helmet / react-helmet-async isn't known. If this app already
// uses react-helmet-async elsewhere, swap this block for a <Helmet> block:
//
// import { Helmet } from 'react-helmet-async';
// <Helmet>
//   <title>{SEO.title}</title>
//   <meta name="description" content={SEO.description} />
//   <link rel="canonical" href={`https://www.abheepay.com${SEO.url}`} />
// </Helmet>
const SEO = {
  url: "/refund-cancellation-policy",
  title: "Refund & Cancellation Policy | AbheePay",
  description:
    "Read the AbheePay Refund & Cancellation Policy to understand our guidelines for cancellations, refunds, and service-related requests.",
};

const useSEO = ({ title, description, url }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const ensureMeta = (name) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      return tag;
    };

    const descTag = ensureMeta("description");
    const prevDescription = descTag.getAttribute("content");
    descTag.setAttribute("content", description);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    const hadCanonical = !!canonicalTag;
    const prevHref = canonicalTag ? canonicalTag.getAttribute("href") : null;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    if (url) {
      canonicalTag.setAttribute("href", `https://www.abheepay.com${url}`);
    }

    return () => {
      document.title = prevTitle;
      if (prevDescription !== null) {
        descTag.setAttribute("content", prevDescription);
      }
      if (!hadCanonical && canonicalTag.parentNode) {
        canonicalTag.parentNode.removeChild(canonicalTag);
      } else if (prevHref) {
        canonicalTag.setAttribute("href", prevHref);
      }
    };
  }, [title, description, url]);
};

const RefundCancellationPolicy = () => {
  useSEO(SEO);

  const [activeSection, setActiveSection] = useState(1);
  const sectionRefs = useRef({});

  const sections = [
    {
      id: 1,
      icon: <Layers className="w-5 h-5" />,
      title: "Scope",
      subtitle: "What this policy covers",
      content: [
        "This policy applies to products and services offered through the AbheePay website, applications, and business platforms, including:",
        "Payment Solutions",
        "API Services",
        "Partner Programs",
        "Enterprise Solutions",
        "Business Technology Services",
        "Software Development Services",
        "Other business services offered by AbheePay",
      ],
    },
    {
      id: 2,
      icon: <Ban className="w-5 h-5" />,
      title: "Cancellation Policy",
      subtitle: "Requesting a cancellation",
      content: [
        "Customers may request cancellation of eligible products or services before the service has been activated, delivered, or started.",
        "Cancellation requests should be submitted through our official support channels.",
        "Please note:",
        "Some services may become non-cancellable after activation.",
        "Enterprise projects, custom software development, and implementation services may have separate contractual cancellation terms.",
        "Cancellation approval is subject to service status and applicable agreements.",
      ],
    },
    {
      id: 3,
      icon: <Wallet className="w-5 h-5" />,
      title: "Refund Policy",
      subtitle: "When refunds may apply",
      content: [
        "Refund eligibility depends on the type of product or service. Refunds may be considered in situations such as:",
        "Duplicate payment made by the customer.",
        "Payment successfully received but the requested service could not be delivered due to reasons attributable to AbheePay.",
        "Incorrect transaction caused by a verified technical issue.",
        "Other situations where AbheePay determines that a refund is appropriate.",
        "Refunds will not normally be provided for:",
        "Services already delivered or completed.",
        "Activated digital products or subscriptions.",
        "Custom software development or implementation work already performed.",
        "Change of business requirements after project commencement.",
        "Customer errors, including incorrect information provided during purchase.",
        "Situations restricted by applicable agreements or regulatory requirements.",
      ],
    },
    {
      id: 4,
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Refund Process",
      subtitle: "How to submit a request",
      content: [
        "If your request qualifies for a refund:",
        "Submit a refund request through our official support channel.",
        "Provide the required transaction or order details.",
        "Our team will review the request.",
        "If approved, the refund will be processed through the original payment method, wherever possible.",
        "Additional information may be requested during the verification process.",
      ],
    },
    {
      id: 5,
      icon: <Timer className="w-5 h-5" />,
      title: "Refund Timeline",
      subtitle: "When to expect your refund",
      content:
        "Approved refunds are generally processed within a reasonable period after successful verification. The time required for the refunded amount to appear in your account may depend on your bank, payment provider, or financial institution.",
    },
    {
      id: 6,
      icon: <Code2 className="w-5 h-5" />,
      title: "API & Enterprise Services",
      subtitle: "Contract-governed refunds",
      content: [
        "For API subscriptions, enterprise solutions, custom development, and implementation projects:",
        "Refunds are governed by the applicable commercial agreement or service contract.",
        "Any advance payments, milestone payments, or implementation fees will be handled according to the signed agreement.",
        "Cancellation of ongoing projects may be subject to completed work, project milestones, and contractual obligations.",
      ],
    },
    {
      id: 7,
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Failed or Duplicate Transactions",
      subtitle: "Debited but unsuccessful payments",
      content:
        "If a payment fails but the amount has been debited, or if a duplicate payment is made, please contact our support team with the relevant transaction details. Our team will investigate the issue and, where applicable, process the appropriate resolution.",
    },
    {
      id: 8,
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Changes to This Policy",
      subtitle: "How updates are communicated",
      content:
        "AbheePay may update this Refund & Cancellation Policy from time to time to reflect changes in our services, business practices, or legal requirements. The latest version will always be available on this page.",
    },
  ];

  const contactChecklist = [
    "Full Name",
    "Company Name (if applicable)",
    "Registered Email Address",
    "Transaction or Order Reference",
    "Date of Payment",
    "Brief Description of the Request",
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081C2E] via-[#0B2A44] to-[#0E3A56] w-full">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00D3CD] opacity-10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00D3CD]/10 border border-[#00D3CD]/30 rounded-full px-3 py-1.5 mb-6">
              <Wallet className="w-3.5 h-3.5 text-[#00D3CD]" />
              <span className="text-[11px] font-semibold text-[#5EEAE3] tracking-widest">
                BILLING POLICY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
              Refund & Cancellation Policy
            </h1>

            <p className="text-slate-300 text-lg mb-4">
              Clear, fair guidelines for cancellations and refund requests
              across our products and services.
            </p>

            <p className="text-slate-400 leading-relaxed max-w-xl mb-6">
              This policy explains the terms that apply to cancellations and
              refund requests for products and services offered by AbheePay.
              The applicability of refunds or cancellations may vary
              depending on the product or service purchased.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-[#00D3CD]" />
                Effective Date: 01 August 2026
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#00D3CD]" />
                Reviewed Case-by-Case
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Scale className="w-4 h-4 text-[#00D3CD]" />
                Governed by Indian Law
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full border border-[#00D3CD]/20" />
              <div className="absolute inset-6 rounded-full border border-[#00D3CD]/15" />
              <div className="absolute inset-12 rounded-full bg-[#00D3CD]/5 backdrop-blur-sm flex items-center justify-center">
                <Wallet className="w-24 h-24 text-[#00D3CD]" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-4 order-2 lg:order-1">
            <nav className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 tracking-widest px-2 mb-2">
                POLICY SECTIONS
              </h3>
              <div className="max-h-[520px] overflow-y-auto pr-1">
                {sections.map((section) => {
                  const active = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-left transition-colors ${
                        active ? "bg-[#00A79D]/8" : "hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={
                            active ? "text-[#00A79D]" : "text-slate-400"
                          }
                        >
                          {section.icon}
                        </span>
                        <span
                          className={`text-sm truncate ${
                            active
                              ? "text-[#00A79D] font-semibold"
                              : "text-slate-600"
                          }`}
                        >
                          {section.title}
                        </span>
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 ${
                          active ? "text-[#00A79D]" : "text-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </nav>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#00A79D]/10 flex items-center justify-center mb-3">
                <Headphones className="w-5 h-5 text-[#00A79D]" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">
                Need a Refund or Cancellation?
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                Reach our support team with your transaction details.
              </p>
              <a
                href="mailto:care@abheepay.in"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#00A79D]"
              >
                Contact Us <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-5 order-1 lg:order-2">
            <div className="bg-gradient-to-br from-[#00A79D] to-[#0B7268] rounded-2xl p-7 sm:p-8 relative overflow-hidden shadow-sm">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
              <div className="relative flex items-start gap-4">
                <div className="bg-white/15 p-3 rounded-xl">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1.5">
                    About This Policy
                  </h2>
                  <p className="text-white/85 text-sm leading-relaxed max-w-2xl">
                    This Refund & Cancellation Policy explains the terms
                    that apply to cancellations and refund requests for
                    products and services offered by AbheePay. Please read
                    this policy carefully before purchasing or using our
                    services.
                  </p>
                </div>
              </div>
            </div>

            {sections.map((section) => (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#00A79D]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#00A79D]">{section.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900">
                      {section.id}. {section.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#00A79D] rounded-full my-1.5" />
                    <p className="text-sm text-slate-400">
                      {section.subtitle}
                    </p>
                  </div>
                  <span className="hidden sm:block text-4xl font-extrabold text-slate-100 leading-none">
                    {String(section.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="space-y-3">
                  {Array.isArray(section.content) ? (
                    section.content.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A79D] mt-2 shrink-0" />
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Important Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    Important Notice
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Approval of any cancellation or refund request is
                    subject to the nature of the product or service,
                    verification of the request, applicable agreements, and
                    relevant legal or regulatory requirements. AbheePay
                    reviews every request individually to ensure a fair and
                    transparent resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <Link to="/contact" className="inline-flex">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2 transition-colors hover:text-[#00A79D]">
                <Mail className="w-5 h-5 text-[#00A79D]" />
                Contact Us
                </h3>
              </Link>
              <p className="text-slate-500 text-sm mb-5">
                If you have questions regarding cancellations or refunds,
                please contact us through the <Link to="/contact" className="font-semibold text-[#00A79D] hover:underline">Contact Us page</Link> on our
                website. To help us review your request efficiently, please
                include:
              </p>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                {contactChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A79D] shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 bg-[#00A79D]/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#00A79D]" />
                    </div>
                    <span className="text-xs text-slate-400">
                      Email Support
                    </span>
                  </div>
                  <a
                    href="mailto:care@abheepay.in"
                    className="text-slate-900 font-semibold hover:text-[#00A79D] transition-colors"
                  >
                    care@abheepay.in
                  </a>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 bg-[#00A79D]/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#00A79D]" />
                    </div>
                    <span className="text-xs text-slate-400">
                      Phone Support
                    </span>
                  </div>
                  <a
                    href="tel:8860037218"
                    className="text-slate-900 font-semibold hover:text-[#00A79D] transition-colors"
                  >
                    +91 88600 37218
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-7 pt-6 border-t border-slate-100">
                {[
                  [ShieldCheck, "Fair Review Process"],
                  [Lock, "Secure Transactions"],
                  [Clock, "Effective 07/08/2026"],
                  [Scale, "Indian Jurisdiction"],
                ].map(([Icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-slate-400"
                  >
                    <Icon className="w-4 h-4 text-[#00A79D]" />
                    <span className="text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <p className="text-center text-slate-400 text-xs italic pt-2">
              © 2026 AbheePay | Telering Process Private Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
