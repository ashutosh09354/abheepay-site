

// import React, { useState, useRef } from "react";
// import {
//   Shield,
//   Settings,
//   Lock,
//   Cookie,
//   Globe,
//   User,
//   RefreshCw,
//   Mail,
//   Phone,
//   ChevronRight,
//   Eye,
//   Bell,
//   Database,
//   ShieldCheck,
//   FileText,
//   Clock,
//   Headphones,
//   Scale,
//   ArrowRight,
//   MapPin,
// } from "lucide-react";

// const PrivacyPolicy = () => {
//   const [activeSection, setActiveSection] = useState(1);
//   const sectionRefs = useRef({});

//   const sections = [
//     {
//       id: 1,
//       icon: <Shield className="w-5 h-5" />,
//       title: "Introduction & Acceptance",
//       subtitle: "Who we are and what this policy covers",
//       content: [
//         "Abheepay (\u201cwe\u201d, \u201cus\u201d, \u201cour\u201d) respects every individual\u2019s right to privacy and is committed to protecting their Personal Data and Sensitive Personal Data or Information.",
//         "This Privacy Policy (\u201cPolicy\u201d) applies to all visitors (who do not have an account) and users (who have registered accounts) (collectively \u201cUser\u201d) who access, browse, or use our website, applications, platforms, or services (collectively \u201cPlatform\u201d).",
//         "This Policy explains how we collect, use, store, process, transfer, and disclose User data.",
//         "By accessing or using our Platform, you acknowledge that you have read, understood, and agreed to this Policy. If you do not agree, please do not use our services.",
//         "This Policy forms part of Abheepay\u2019s Terms & Conditions. Continued use of our services after updates constitutes acceptance of the revised Policy.",
//         "We reserve the right to modify this Policy at any time. Material changes will be notified via registered email or other communication channels. Users are advised to review this Policy periodically.",
//       ],
//     },
//     {
//       id: 2,
//       icon: <Scale className="w-5 h-5" />,
//       title: "Legal Compliance",
//       subtitle: "Laws and regulations we follow",
//       content: [
//         "This Policy is published in compliance with:",
//         "Section 43A of the Information Technology Act, 2000",
//         "Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011",
//         "Digital Personal Data Protection Act, 2023 (\u201cDPDP Act\u201d) and applicable rules",
//       ],
//     },
//     {
//       id: 3,
//       icon: <FileText className="w-5 h-5" />,
//       title: "Definitions",
//       subtitle: "Key terms used in this Policy",
//       content: [
//         "Data Fiduciary: Entity determining purpose and means of processing personal data.",
//         "Data Principal: Individual to whom personal data relates.",
//         "Personal Data: Any data about an identifiable individual.",
//         "Personal Information: Information capable of identifying a person directly or indirectly.",
//         "Sensitive Personal Data or Information: Includes passwords, financial information, health data, biometric information, and similar sensitive categories as defined under applicable law.",
//         "Payment Data: Transaction data including customer information, payment credentials, account details, and transaction references.",
//         "Information publicly available or disclosed under law is not treated as sensitive data.",
//       ],
//     },
//     {
//       id: 4,
//       icon: <ShieldCheck className="w-5 h-5" />,
//       title: "Consent",
//       subtitle: "Your consent and how it works",
//       content: [
//         "By using our Platform, Users consent to collection, storage, processing, and use of their Personal Information for lawful purposes.",
//         "Sensitive Personal Data is collected only with explicit consent, such as when creating an account or submitting forms.",
//         "If a User is under 18 years of age, parental or guardian consent is presumed.",
//         "Users may withdraw consent at any time. However, doing so may limit service availability.",
//       ],
//     },
//     {
//       id: 5,
//       icon: <Database className="w-5 h-5" />,
//       title: "Information We Collect",
//       subtitle: "Categories of data we may collect",
//       content: [
//         {
//           type: "Account & Identity Data",
//           desc: "Name, age, demographic details, username and password, email address, mobile number, postal address and contact details, PAN or other KYC details.",
//         },
//         {
//           type: "Payment & Transaction Data",
//           desc: "Payment instrument details, transaction records, payment history, deposits and withdrawals, service usage records, settlement and reconciliation data.",
//         },
//         {
//           type: "Device & Technical Data",
//           desc: "IP address and device identifiers, device and browser information, cookies and usage data, log files and access timestamps.",
//         },
//         {
//           type: "Support & Communications",
//           desc: "Feedback, queries, and communications shared with us through customer support or other channels.",
//         },
//         {
//           type: "Other Necessary Information",
//           desc: "Any other information required for service delivery and compliance, as applicable.",
//         },
//       ],
//     },
//     {
//       id: 6,
//       icon: <Settings className="w-5 h-5" />,
//       title: "Purpose of Collection",
//       subtitle: "Why we collect and use your data",
//       content: [
//         "Providing secure and efficient services.",
//         "Account creation and verification.",
//         "Customer support and issue resolution.",
//         "Processing transactions.",
//         "Fraud detection and prevention.",
//         "Service improvement and analytics.",
//         "Compliance with regulatory requirements.",
//         "Marketing and promotional communication (with opt-out option).",
//         "Development of new products and features.",
//         "Enforcement of legal rights and agreements.",
//       ],
//     },
//     {
//       id: 7,
//       icon: <RefreshCw className="w-5 h-5" />,
//       title: "How Information Is Collected",
//       subtitle: "Sources of data collection",
//       content: [
//         "Directly from Users during registration or service use.",
//         "Through communications with customer support.",
//         "Automatically via cookies and analytics tools.",
//         "From third-party integrations or partners where permitted.",
//       ],
//     },
//     {
//       id: 8,
//       icon: <Globe className="w-5 h-5" />,
//       title: "Disclosure of Information",
//       subtitle: "When and with whom we may share data",
//       content: [
//         "Affiliates and group companies.",
//         "Banks and payment partners.",
//         "Technology vendors and service providers.",
//         "Regulatory authorities or law enforcement when required by law.",
//         "Professional advisors.",
//         "We may also disclose data in connection with mergers, acquisitions, restructuring, or sale of business assets.",
//         "Credit information accessed through our platform shall be used strictly for consented purposes and never for unauthorized use.",
//       ],
//     },
//     {
//       id: 9,
//       icon: <MapPin className="w-5 h-5" />,
//       title: "Location Data",
//       subtitle: "Collection and use of location information",
//       content: [
//         "We may collect approximate or precise device location data if permission is granted.",
//         "Uses include: location-based services, fraud detection, regulatory compliance, and service optimization.",
//         "Users may disable location permissions through device or browser settings. Some features may then become unavailable.",
//         "Location data is shared only with authorized service providers or authorities and retained only as long as necessary.",
//       ],
//     },
//     {
//       id: 10,
//       icon: <Cookie className="w-5 h-5" />,
//       title: "Cookies & Tracking Technologies",
//       subtitle: "How cookies help improve your experience",
//       content: [
//         "We use cookies and similar technologies to understand user behavior, improve performance, and personalize experience.",
//         "Users may disable cookies in browser settings; however, some features may not function properly.",
//         "Third-party cookies may appear on certain pages, and we are not responsible for such third-party practices.",
//       ],
//     },
//     {
//       id: 11,
//       icon: <Globe className="w-5 h-5" />,
//       title: "Third-Party Links",
//       subtitle: "External sites and services",
//       content:
//         "Our Platform may contain links to external websites. We are not responsible for the privacy practices of such websites.",
//     },
//     {
//       id: 12,
//       icon: <User className="w-5 h-5" />,
//       title: "User Rights",
//       subtitle: "Access, correction and erasure",
//       content: [
//         "Review your data.",
//         "Update or correct inaccuracies.",
//         "Request deletion of personal data (subject to legal retention requirements).",
//         "Requests can be made through account settings or by contacting us.",
//       ],
//     },
//     {
//       id: 13,
//       icon: <Clock className="w-5 h-5" />,
//       title: "Data Retention",
//       subtitle: "How long we keep your data",
//       content: [
//         "We retain personal data only for as long as required for stated purposes, required by law/regulation, or needed for legal/contractual obligations.",
//         "After this period, data is securely deleted or anonymized.",
//       ],
//     },
//     {
//       id: 14,
//       icon: <Mail className="w-5 h-5" />,
//       title: "Communications",
//       subtitle: "Transactional and promotional messages",
//       content: [
//         "We may send transactional or promotional communications.",
//         "Users can opt out of promotional emails via unsubscribe links or account settings.",
//       ],
//     },
//     {
//       id: 15,
//       icon: <Eye className="w-5 h-5" />,
//       title: "Advertising",
//       subtitle: "How ads may be served",
//       content: [
//         "We may use third-party advertising providers.",
//         "These providers may use anonymized data to display relevant advertisements.",
//         "No personally identifiable information is shared for advertising purposes.",
//       ],
//     },
//     {
//       id: 16,
//       icon: <Database className="w-5 h-5" />,
//       title: "Data Localization",
//       subtitle: "Where payment data is stored",
//       content: [
//         "In compliance with Reserve Bank of India regulations, all payment data is stored only on servers located within India.",
//         "For cross-border transactions, copies of domestic transaction data may be stored abroad if legally required.",
//       ],
//     },
//     {
//       id: 17,
//       icon: <Lock className="w-5 h-5" />,
//       title: "Security Measures",
//       subtitle: "How we protect your data",
//       content: [
//         "We maintain strict administrative, technical, and physical safeguards to protect data, including secure servers, encryption protocols, access controls, firewall protection, and periodic security audits.",
//         "In case of any data breach likely to cause harm, affected Users will be notified promptly.",
//       ],
//     },
//     {
//       id: 18,
//       icon: <RefreshCw className="w-5 h-5" />,
//       title: "Changes to This Policy",
//       subtitle: "Policy updates and revisions",
//       content:
//         "We reserve the right to modify this Policy at any time. Material changes will be notified via registered email or other communication channels. Continued use of our services after updates constitutes acceptance of the revised Policy.",
//     },
//   ];

//   const scrollToSection = (id) => {
//     setActiveSection(id);
//     const el = sectionRefs.current[id];
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC]" style={{ zoom: 0.67 }}>
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#081C2E] via-[#0B2A44] to-[#0E3A56]">
//         <div
//           className="absolute inset-0 opacity-[0.07]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
//             backgroundSize: "48px 48px",
//           }}
//         />
//         <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00D3CD] opacity-10 blur-3xl" />

//         <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 relative grid lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <div className="inline-flex items-center gap-2 bg-[#00D3CD]/10 border border-[#00D3CD]/30 rounded-full px-3 py-1.5 mb-6">
//               <ShieldCheck className="w-3.5 h-3.5 text-[#00D3CD]" />
//               <span className="text-[11px] font-semibold text-[#5EEAE3] tracking-widest">
//                 LEGAL
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
//               Privacy Policy
//             </h1>

//             <p className="text-slate-300 text-lg mb-4">
//               Your privacy and data security are extremely important to us.
//             </p>

//             <p className="text-slate-400 leading-relaxed max-w-xl">
//               This Privacy Policy explains how we collect, use, store,
//               process, transfer, and protect your personal information when
//               you access or use Abheepay services, including our website,
//               applications, and digital financial services. By using
//               Abheepay services, you agree to the collection and use of
//               information in accordance with this policy.
//             </p>
//           </div>

//           <div className="hidden lg:flex items-center justify-center relative">
//             <div className="relative w-72 h-72">
//               <div className="absolute inset-0 rounded-full border border-[#00D3CD]/20" />
//               <div className="absolute inset-6 rounded-full border border-[#00D3CD]/15" />
//               <div className="absolute inset-12 rounded-full bg-[#00D3CD]/5 backdrop-blur-sm flex items-center justify-center">
//                 <Shield className="w-24 h-24 text-[#00D3CD]" strokeWidth={1.25} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Body */}
//       <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
//         <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
//           {/* Sidebar */}
//           <aside className="lg:sticky lg:top-24 space-y-4 order-2 lg:order-1">
//             <nav className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
//               <h3 className="text-xs font-bold text-slate-400 tracking-widest px-2 mb-2">
//                 POLICY SECTIONS
//               </h3>
//               <div className="max-h-[520px] overflow-y-auto pr-1">
//                 {sections.map((section) => {
//                   const active = activeSection === section.id;
//                   return (
//                     <button
//                       key={section.id}
//                       onClick={() => scrollToSection(section.id)}
//                       className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-left transition-colors ${
//                         active ? "bg-[#00A79D]/8" : "hover:bg-slate-50"
//                       }`}
//                     >
//                       <span className="flex items-center gap-2.5 min-w-0">
//                         <span
//                           className={
//                             active ? "text-[#00A79D]" : "text-slate-400"
//                           }
//                         >
//                           {section.icon}
//                         </span>
//                         <span
//                           className={`text-sm truncate ${
//                             active
//                               ? "text-[#00A79D] font-semibold"
//                               : "text-slate-600"
//                           }`}
//                         >
//                           {section.title}
//                         </span>
//                       </span>
//                       <ChevronRight
//                         className={`w-4 h-4 shrink-0 ${
//                           active ? "text-[#00A79D]" : "text-slate-300"
//                         }`}
//                       />
//                     </button>
//                   );
//                 })}
//               </div>
//             </nav>

//             <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
//               <div className="w-10 h-10 rounded-xl bg-[#00A79D]/10 flex items-center justify-center mb-3">
//                 <Headphones className="w-5 h-5 text-[#00A79D]" />
//               </div>
//               <h4 className="font-semibold text-slate-900 text-sm mb-1">
//                 Have Questions?
//               </h4>
//               <p className="text-xs text-slate-500 mb-3">
//                 We're here to help.
//               </p>
//               <a
//                 href="mailto:support@abheepay.com"
//                 className="inline-flex items-center gap-1 text-sm font-semibold text-[#00A79D]"
//               >
//                 Contact Us <ArrowRight className="w-3.5 h-3.5" />
//               </a>
//             </div>
//           </aside>

//           {/* Content */}
//           <div className="space-y-5 order-1 lg:order-2">
//             <div className="bg-gradient-to-br from-[#00A79D] to-[#0B7268] rounded-2xl p-7 sm:p-8 relative overflow-hidden shadow-sm">
//               <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
//               <div className="relative flex items-start gap-4">
//                 <div className="bg-white/15 p-3 rounded-xl">
//                   <Shield className="w-7 h-7 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-bold text-white mb-1.5">
//                     Abheepay
//                   </h2>
//                   <p className="text-white/85 text-sm leading-relaxed max-w-2xl">
//                     Abheepay respects every individual's right to privacy and
//                     is committed to protecting Personal Data and Sensitive
//                     Personal Data or Information. We follow applicable Indian
//                     data protection laws and industry security practices.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {sections.map((section) => (
//               <div
//                 key={section.id}
//                 ref={(el) => (sectionRefs.current[section.id] = el)}
//                 className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
//               >
//                 <div className="flex items-start gap-4 mb-5">
//                   <div className="w-11 h-11 rounded-xl bg-[#00A79D]/10 flex items-center justify-center shrink-0">
//                     <span className="text-[#00A79D]">{section.icon}</span>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-lg font-bold text-slate-900">
//                       {section.id}. {section.title}
//                     </h3>
//                     <div className="w-8 h-0.5 bg-[#00A79D] rounded-full my-1.5" />
//                     <p className="text-sm text-slate-400">{section.subtitle}</p>
//                   </div>
//                   <span className="hidden sm:block text-4xl font-extrabold text-slate-100 leading-none">
//                     {String(section.id).padStart(2, "0")}
//                   </span>
//                 </div>

//                 <div className="space-y-3">
//                   {Array.isArray(section.content) ? (
//                     section.content.map((item, i) =>
//                       typeof item === "string" ? (
//                         <div key={i} className="flex items-start gap-3">
//                           <div className="w-1.5 h-1.5 rounded-full bg-[#00A79D] mt-2 shrink-0" />
//                           <p className="text-slate-600 text-sm leading-relaxed">
//                             {item}
//                           </p>
//                         </div>
//                       ) : (
//                         <div
//                           key={i}
//                           className="bg-slate-50 rounded-xl p-4 border border-slate-100"
//                         >
//                           <h4 className="text-[#00A79D] font-semibold text-sm mb-1.5 flex items-center gap-2">
//                             <span className="w-1 h-3.5 bg-[#00A79D] rounded-full" />
//                             {item.type}
//                           </h4>
//                           <p className="text-slate-500 text-sm leading-relaxed">
//                             {item.desc}
//                           </p>
//                         </div>
//                       )
//                     )
//                   ) : (
//                     <p className="text-slate-600 text-sm leading-relaxed">
//                       {section.content}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}

//             {/* Contact */}
//             <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
//               <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
//                 <Bell className="w-5 h-5 text-[#00A79D]" />
//                 Grievance Officer / Contact Us
//               </h3>
//               <p className="text-slate-500 text-sm mb-6">
//                 For any privacy concerns, complaints, or requests related to
//                 this Privacy Policy, please contact us.{" "}
//                 <span className="italic text-slate-400">
//                   Response time: within 30 days of receipt of request.
//                 </span>
//               </p>

//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
//                   <div className="flex items-center gap-2.5 mb-2">
//                     <div className="w-9 h-9 bg-[#00A79D]/10 rounded-lg flex items-center justify-center">
//                       <Mail className="w-4 h-4 text-[#00A79D]" />
//                     </div>
//                     <span className="text-xs text-slate-400">
//                       Email Support
//                     </span>
//                   </div>
//                   <a
//                     href="mailto:support@abheepay.com"
//                     className="text-slate-900 font-semibold hover:text-[#00A79D] transition-colors"
//                   >
//                     support@abheepay.com
//                   </a>
//                 </div>

//                 <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
//                   <div className="flex items-center gap-2.5 mb-2">
//                     <div className="w-9 h-9 bg-[#00A79D]/10 rounded-lg flex items-center justify-center">
//                       <Phone className="w-4 h-4 text-[#00A79D]" />
//                     </div>
//                     <span className="text-xs text-slate-400">
//                       Phone Support
//                     </span>
//                   </div>
//                   <a
//                     href="tel:8860037218"
//                     className="text-slate-900 font-semibold hover:text-[#00A79D] transition-colors"
//                   >
//                     8860037218
//                   </a>
//                 </div>
//               </div>

//               <div className="flex flex-wrap items-center justify-center gap-6 mt-7 pt-6 border-t border-slate-100">
//                 {[
//                   [Lock, "256-bit Encryption"],
//                   [Eye, "Privacy Controls"],
//                   [Clock, "30-day Response"],
//                   [FileText, "Regular Audits"],
//                 ].map(([Icon, label]) => (
//                   <div
//                     key={label}
//                     className="flex items-center gap-1.5 text-slate-400"
//                   >
//                     <Icon className="w-4 h-4 text-[#00A79D]" />
//                     <span className="text-xs">{label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;










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
