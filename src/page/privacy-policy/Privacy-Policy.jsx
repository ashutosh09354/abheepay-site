
import React, { useState, useRef, useEffect } from "react";
import {
  Shield,
  Settings,
  Lock,
  Cookie,
  Globe,
  User,
  RefreshCw,
  Mail,
  Phone,
  ChevronRight,
  Eye,
  Bell,
  Database,
  ShieldCheck,
  FileText,
  Baby,
  ArrowRight,
  Building2,
  HeartHandshake,
} from "lucide-react";

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------
// URL:              /privacy-policy
// SEO Title:        Privacy Policy | AbheePay
// Meta Description: Read the AbheePay Privacy Policy to understand how we
//                    collect, use, store, and protect your personal
//                    information when you use our website, products, and
//                    services.
const SEO = {
  url: "/privacy-policy",
  title: "Privacy Policy | AbheePay",
  description:
    "Read the AbheePay Privacy Policy to understand how we collect, use, store, and protect your personal information when you use our website, products, and services.",
};

const EFFECTIVE_DATE = "01 August 2026";

const useSEO = ({ title, description }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      const created = !tag;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      const prevContent = tag.getAttribute("content");
      tag.setAttribute("content", content);
      return { tag, created, prevContent };
    };

    const descMeta = setMeta("description", description);

    return () => {
      document.title = prevTitle;
      if (descMeta.created) {
        descMeta.tag.remove();
      } else if (descMeta.prevContent !== null) {
        descMeta.tag.setAttribute("content", descMeta.prevContent);
      }
    };
  }, [title, description]);
};

const PrivacyPolicy = () => {
  useSEO(SEO);

  const [activeSection, setActiveSection] = useState(1);
  const sectionRefs = useRef({});

  const sections = [
    {
      id: 1,
      icon: <Shield className="w-5 h-5" />,
      title: "Introduction",
      subtitle: "Who we are and what this policy covers",
      content: [
        "Welcome to AbheePay. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website, use our products, or interact with our services.",
        "By accessing or using our website and services, you agree to the practices described in this Privacy Policy.",
      ],
    },
    {
      id: 2,
      icon: <Database className="w-5 h-5" />,
      title: "Information We Collect",
      subtitle: "What you share with us, and what we collect automatically",
      content: [
        {
          type: "Information You Provide",
          desc: "Full name, company name, email address, mobile number, business address, business information, enquiry details, account information, and any information submitted through forms or customer support.",
        },
        {
          type: "Information Collected Automatically",
          desc: "IP address, browser type, device information, operating system, website usage data, and cookies and similar technologies.",
        },
      ],
    },
    {
      id: 3,
      icon: <Settings className="w-5 h-5" />,
      title: "How We Use Your Information",
      subtitle: "The purposes behind our data use",
      content: [
        "Provide our products and services.",
        "Respond to enquiries and support requests.",
        "Process business applications.",
        "Improve our website and services.",
        "Communicate product updates and important notifications.",
        "Enhance website security.",
        "Comply with applicable legal and regulatory requirements.",
        "We only use personal information for legitimate business purposes.",
      ],
    },
    {
      id: 4,
      icon: <Cookie className="w-5 h-5" />,
      title: "Cookies",
      subtitle: "How cookies help improve your experience",
      content: [
        "Our website may use cookies and similar technologies to improve your browsing experience.",
        "Cookies help us remember your preferences, improve website performance, analyse website traffic, and enhance user experience.",
        "You can manage or disable cookies through your browser settings. Some website features may not function properly if cookies are disabled.",
      ],
    },
    {
      id: 5,
      icon: <Globe className="w-5 h-5" />,
      title: "Information Sharing",
      subtitle: "When and with whom we may share data",
      content: [
        "We do not sell your personal information.",
        "Your information may be shared only when necessary with service providers supporting our business operations, technology partners, payment service providers, government authorities where required by law, and regulatory authorities where applicable.",
        "Information is shared only for legitimate business or legal purposes.",
      ],
    },
    {
      id: 6,
      icon: <Lock className="w-5 h-5" />,
      title: "Data Security",
      subtitle: "How we protect your data",
      content: [
        "Protecting your information is important to us.",
        "We implement reasonable technical, administrative, and organisational measures to safeguard personal information from unauthorised access, disclosure, alteration, or misuse.",
        "While we strive to protect your information, no internet-based system can guarantee complete security.",
      ],
    },
    {
      id: 7,
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Data Retention",
      subtitle: "How long we keep your data",
      content: [
        "We retain personal information only for as long as necessary to deliver our services, meet legal and regulatory obligations, resolve disputes, and maintain business records.",
        "When information is no longer required, it is securely deleted or anonymised where appropriate.",
      ],
    },
    {
      id: 8,
      icon: <Building2 className="w-5 h-5" />,
      title: "Third-Party Services",
      subtitle: "External sites and services",
      content: [
        "Our website may contain links to third-party websites or integrate third-party services.",
        "We are not responsible for the privacy practices or content of external websites. We encourage you to review the privacy policies of any third-party services you use.",
      ],
    },
    {
      id: 9,
      icon: <User className="w-5 h-5" />,
      title: "Your Rights",
      subtitle: "Access, correction and erasure",
      content: [
        "Request access to your personal information.",
        "Request correction of inaccurate information.",
        "Request deletion of eligible personal information.",
        "Withdraw consent where applicable.",
        "Update your communication preferences.",
        "Requests will be processed in accordance with applicable legal requirements.",
      ],
    },
    {
      id: 10,
      icon: <Baby className="w-5 h-5" />,
      title: "Children's Privacy",
      subtitle: "Protecting younger users",
      content: [
        "Our products and services are intended for businesses and individuals who are legally permitted to use them.",
        "We do not knowingly collect personal information from children without appropriate legal consent.",
      ],
    },
    {
      id: 11,
      icon: <FileText className="w-5 h-5" />,
      title: "Updates to This Policy",
      subtitle: "Policy updates and revisions",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or business practices.",
        "Any updates will be published on this page along with the revised effective date.",
        "We encourage you to review this page periodically.",
      ],
    },
    {
      id: 12,
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Your Privacy Matters",
      subtitle: "Our commitment to you",
      content: [
        "AbheePay is committed to handling personal information responsibly and transparently.",
        "We continuously work to maintain secure systems and responsible data practices that help protect the trust our customers, partners, and website visitors place in us.",
      ],
    },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#081C2E] via-[#0B2A44] to-[#0E3A56]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00D3CD] opacity-10 blur-3xl" />

        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-8 md:px-10 xl:px-16 py-12 sm:py-16 lg:py-20 relative grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00D3CD]/10 border border-[#00D3CD]/30 rounded-full px-3 py-1.5 mb-5 sm:mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00D3CD]" />
              <span className="text-[11px] font-semibold text-[#5EEAE3] tracking-widest">
                LEGAL
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 tracking-tight">
              Privacy Policy
            </h1>

            <p className="text-slate-300 text-base sm:text-lg mb-2">
              Your privacy is important to us.
            </p>

            <p className="text-slate-500 text-xs mb-4">
              Effective Date: {EFFECTIVE_DATE}
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              This Privacy Policy explains how we collect, use, disclose, and
              protect your personal information when you visit our website,
              use our products, or interact with our services. By accessing
              or using our website and services, you agree to the practices
              described in this Privacy Policy.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-56 h-56 xl:w-72 xl:h-72">
              <div className="absolute inset-0 rounded-full border border-[#00D3CD]/20" />
              <div className="absolute inset-6 rounded-full border border-[#00D3CD]/15" />
              <div className="absolute inset-12 rounded-full bg-[#00D3CD]/5 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-20 h-20 xl:w-24 xl:h-24 text-[#00D3CD]" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-5 sm:px-8 md:px-10 xl:px-16 py-10 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] gap-6 sm:gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-4 order-2 lg:order-1">
            <nav className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 tracking-widest px-2 mb-2">
                POLICY SECTIONS
              </h3>
              <div className="max-h-[280px] sm:max-h-[340px] lg:max-h-[calc(100vh-14rem)] overflow-y-auto pr-1">
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
                <Bell className="w-5 h-5 text-[#00A79D]" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">
                Have Questions?
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                We're here to help.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#00A79D]"
              >
                Contact Us <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-5 order-1 lg:order-2">
            <div className="w-full bg-gradient-to-br from-[#00A79D] to-[#0B7268] rounded-2xl p-5 sm:p-7 md:p-8 relative overflow-hidden shadow-sm">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
              <div className="relative flex items-start gap-3 sm:gap-4">
                <div className="bg-white/15 p-2.5 sm:p-3 rounded-xl shrink-0">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                    AbheePay
                  </h2>
                  <p className="text-white/85 text-sm leading-relaxed max-w-2xl">
                    AbheePay is committed to handling personal information
                    responsibly and transparently, and to maintaining secure
                    systems that protect the trust our customers, partners,
                    and website visitors place in us.
                  </p>
                </div>
              </div>
            </div>

            {sections.map((section) => (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm scroll-mt-24"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#00A79D]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#00A79D]">{section.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {section.id}. {section.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#00A79D] rounded-full my-1.5" />
                    <p className="text-xs sm:text-sm text-slate-400">{section.subtitle}</p>
                  </div>
                  <span className="hidden sm:block text-3xl md:text-4xl font-extrabold text-slate-100 leading-none">
                    {String(section.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="space-y-3">
                  {Array.isArray(section.content) ? (
                    section.content.map((item, i) =>
                      typeof item === "string" ? (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00A79D] mt-2 shrink-0" />
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ) : (
                        <div
                          key={i}
                          className="bg-slate-50 rounded-xl p-4 border border-slate-100"
                        >
                          <h4 className="text-[#00A79D] font-semibold text-sm mb-1.5 flex items-center gap-2">
                            <span className="w-1 h-3.5 bg-[#00A79D] rounded-full" />
                            {item.type}
                          </h4>
                          <p className="text-slate-500 text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Contact */}
            <div className="w-full bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#00A79D]" />
                Contact Us
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                If you have any questions about this Privacy Policy or how we
                handle your information, please contact us through our
                Contact Us page or use the official contact details published
                on our website.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    href="mailto:support@abheepay.com"
                    className="text-slate-900 font-semibold hover:text-[#00A79D] transition-colors"
                  >
                    support@abheepay.com
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
                    8860037218
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-7 pt-6 border-t border-slate-100">
                {[
                  [Lock, "Reasonable Security Measures"],
                  [Eye, "Privacy Controls"],
                  [RefreshCw, "Periodic Updates"],
                  [FileText, "No Sale of Data"],
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
