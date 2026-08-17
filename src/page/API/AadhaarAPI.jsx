// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import {
//   Fingerprint, MessageSquareText, UserCheck, ScanFace, QrCode,
//   ShieldCheck, Zap, Wifi, Code2, ArrowRight,
//   CheckCircle2, Lock, BadgeCheck
// } from 'lucide-react';

// // Brand color used throughout: #14B8A6

// // ---------------- Animation Variants ----------------
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// const FontLoader = () => (
//   <link
//     rel="stylesheet"
//     href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
//   />
// );

// const AadhaarAPI = () => {
//   // "Our Services" — Aadhaar verification methods
//   const services = [
//     {
//       title: "OTP-Based eKYC",
//       desc: "Instant Aadhaar verification via OTP sent to the customer's UIDAI-registered mobile number.",
//       icon: <MessageSquareText size={26} />
//     },
//     {
//       title: "Demographic Authentication",
//       desc: "Match name, date of birth, gender and address against UIDAI records in real time.",
//       icon: <UserCheck size={26} />
//     },
//     {
//       title: "Biometric Authentication",
//       desc: "Fingerprint & iris-based verification for BC outlets, kiosks and physical onboarding points.",
//       icon: <ScanFace size={26} />
//     },
//     {
//       title: "Offline Aadhaar XML & QR",
//       desc: "Verify identity using masked Aadhaar XML or QR code, with no live UIDAI server call needed.",
//       icon: <QrCode size={26} />
//     },
//   ];

//   // Teal "Why Choose AbheePay?" panel
//   const whyChoose = [
//     {
//       title: "UIDAI-compliant infrastructure",
//       desc: "Built to UIDAI data-handling and consent standards, end to end.",
//       icon: <ShieldCheck size={20} />
//     },
//     {
//       title: "Real-time verification",
//       desc: "Sub-second responses even at high onboarding volumes.",
//       icon: <Zap size={20} />
//     },
//     {
//       title: "Masked & encrypted Aadhaar data",
//       desc: "Numbers are masked at capture and encrypted at rest and in transit.",
//       icon: <Lock size={20} />
//     },
//     {
//       title: "Simple plug-and-play integration",
//       desc: "Clear docs, sandbox keys and SDKs to go live in days, not months.",
//       icon: <Code2 size={20} />
//     },
//   ];

//   return (
//     <div
//       className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.215rem]"
//       style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
//     >
//       <FontLoader />

//       {/* ---------------- Hero Section ---------------- */}
//       <section className="relative bg-white overflow-hidden pt-[7.5rem] sm:pt-[8.5rem] pb-[3.5rem] px-[0.912rem] sm:px-[1.518rem]">
//         {/* soft radial backdrop, right side, echoing the reference's pale blob */}
//         <div
//           className="absolute -top-[6rem] right-[-8rem] w-[36rem] h-[36rem] rounded-full pointer-events-none hidden lg:block"
//           style={{ background: "radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)" }}
//         ></div>

//         <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-[3rem] lg:gap-[2.5rem] items-center">
//           {/* Left: copy */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//           >
//             <span className="inline-flex items-center gap-[0.5rem] bg-[#14B8A6]/10 rounded-full px-[0.912rem] py-[0.38rem] text-[0.8rem] font-bold tracking-[0.08em] text-[#0D9488] mb-[1.518rem]">
//               <span className="w-[6px] h-[6px] rounded-full bg-[#14B8A6]"></span>
//               OUR SERVICES
//             </span>

//             <h1 className="text-[2.6rem] sm:text-[3.2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-900 mb-[1.518rem]">
//               Aadhaar
//               <br />
//               <span className="text-[#14B8A6]">Verification API</span>
//             </h1>

//             <p className="text-[1.05rem] text-slate-500 leading-relaxed mb-[1.823rem] max-w-[34rem]">
//               We give fintech and BC platforms a single, UIDAI-aligned layer
//               for identity — OTP eKYC, demographic checks, biometric
//               authentication and offline XML/QR verification, backed by
//               masked storage and audit-ready logs.
//             </p>

//             <div className="flex items-center gap-[0.608rem]">
//               <div className="w-[2.126rem] h-[2.126rem] rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
//                 <Fingerprint size={18} />
//               </div>
//               <p className="text-[0.9rem] text-slate-500">
//                 <span className="font-semibold text-slate-700">Abheepay Team</span> &nbsp;•&nbsp; 2026
//               </p>
//             </div>
//           </motion.div>

//           {/* Right: dashboard mockup (laptop + phone) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative"
//           >
//             <div className="relative rounded-[20px] bg-[#0B1220] shadow-2xl p-[1.4rem] sm:p-[1.8rem] overflow-hidden">
//               {/* faint dot mesh on the dark panel */}
//               <div
//                 className="absolute inset-0 opacity-[0.25] pointer-events-none"
//                 style={{
//                   backgroundImage: "radial-gradient(#14B8A6 0.6px, transparent 0.6px)",
//                   backgroundSize: "20px 20px",
//                 }}
//               ></div>

//               <div className="relative z-10 flex items-center gap-[0.456rem] mb-[1.4rem]">
//                 <div className="w-[1.6rem] h-[1.6rem] rounded-md bg-[#14B8A6] flex items-center justify-center">
//                   <Fingerprint size={14} className="text-[#0B1220]" />
//                 </div>
//                 <span className="text-white text-[0.9rem] font-extrabold tracking-tight">ABHEE<span className="text-[#14B8A6]">PAY</span></span>
//               </div>

//               <p className="relative z-10 text-white text-[1.7rem] sm:text-[1.95rem] font-extrabold leading-tight mb-[0.3rem]">
//                 AADHAAR
//               </p>
//               <p className="relative z-10 text-[#14B8A6] text-[1.7rem] sm:text-[1.95rem] font-extrabold leading-tight mb-[0.9rem]">
//                 API SERVICES
//               </p>
//               <p className="relative z-10 text-slate-400 text-[0.85rem] mb-[1.1rem] max-w-[16rem]">
//                 Verify identity in real time with secure, UIDAI-aligned APIs.
//               </p>

//               <div className="relative z-10 grid grid-cols-2 gap-x-[1rem] gap-y-[0.4rem] mb-[1.3rem] text-[0.78rem] text-slate-300">
//                 {["OTP eKYC", "Biometric", "Demographic", "Offline XML"].map((f, i) => (
//                   <span key={i} className="flex items-center gap-[0.35rem]">
//                     <CheckCircle2 size={13} className="text-[#14B8A6]" />
//                     {f}
//                   </span>
//                 ))}
//               </div>

//               {/* mini "dashboard" card with stats + sparkline */}
//               <div className="relative z-10 bg-white/[0.04] border border-white/10 rounded-[14px] p-[1rem] mb-[1.1rem]">
//                 <div className="grid grid-cols-3 gap-[0.6rem] mb-[0.8rem]">
//                   <div>
//                     <p className="text-white text-[1.05rem] font-bold leading-none">18,940</p>
//                     <p className="text-slate-400 text-[0.68rem] mt-[0.25rem]">eKYC Today</p>
//                   </div>
//                   <div>
//                     <p className="text-white text-[1.05rem] font-bold leading-none">99.2%</p>
//                     <p className="text-slate-400 text-[0.68rem] mt-[0.25rem]">Success Rate</p>
//                   </div>
//                   <div>
//                     <p className="text-white text-[1.05rem] font-bold leading-none">0.8s</p>
//                     <p className="text-slate-400 text-[0.68rem] mt-[0.25rem]">Avg. Response</p>
//                   </div>
//                 </div>
//                 <svg viewBox="0 0 220 40" className="w-full h-[2.5rem]">
//                   <polyline
//                     points="0,32 20,28 40,30 60,20 80,24 100,14 120,18 140,9 160,13 180,6 200,10 220,4"
//                     fill="none"
//                     stroke="#14B8A6"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>

//               {/* bottom trust strip */}
//               <div className="relative z-10 grid grid-cols-2 gap-[0.7rem] text-[0.72rem] text-slate-300">
//                 <span className="flex items-center gap-[0.35rem]"><ShieldCheck size={14} className="text-[#14B8A6]" /> UIDAI Aligned</span>
//                 <span className="flex items-center gap-[0.35rem]"><Zap size={14} className="text-[#14B8A6]" /> Sub-second Response</span>
//                 <span className="flex items-center gap-[0.35rem]"><Wifi size={14} className="text-[#14B8A6]" /> 99.9% Uptime</span>
//                 <span className="flex items-center gap-[0.35rem]"><Code2 size={14} className="text-[#14B8A6]" /> Developer Friendly</span>
//               </div>
//             </div>

//             {/* floating phone card, overlapping the panel */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
//               className="hidden sm:block absolute -bottom-[1.5rem] -right-[1.2rem] w-[9.5rem] bg-white rounded-[16px] shadow-xl p-[0.7rem] z-20"
//             >
//               <div className="flex items-center gap-[0.3rem] mb-[0.5rem]">
//                 <BadgeCheck size={14} className="text-[#14B8A6]" />
//                 <p className="text-[0.62rem] font-bold text-slate-700">Verification Success</p>
//               </div>
//               <p className="text-[0.72rem] text-slate-400 mb-[0.15rem]">Aadhaar (masked)</p>
//               <p className="text-[0.82rem] font-bold text-slate-800 mb-[0.5rem]">XXXX XXXX 4821</p>
//               <div className="bg-emerald-50 text-emerald-600 text-[0.68rem] font-semibold rounded-[8px] px-[0.5rem] py-[0.3rem] text-center">
//                 Verified ✓
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Our Services + Why Choose ---------------- */}
//       <section className="py-[3.5rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
//         <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[1.8rem] items-start">
//           {/* Left: services grid */}
//           <div>
//             <div className="w-[2.2rem] h-[3px] bg-[#14B8A6] mb-[0.8rem] rounded-full"></div>
//             <h2 className="text-[1.6rem] sm:text-[1.85rem] font-extrabold text-slate-900 mb-[1.5rem]">
//               Our Services
//             </h2>

//             <motion.div
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem]"
//             >
//               {services.map((s, i) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeInUp}
//                   whileHover={{ y: -4 }}
//                   transition={{ duration: 0.25 }}
//                   className="group bg-white border border-slate-200 rounded-[18px] p-[1.4rem] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:border-[#14B8A6]/40 hover:shadow-[0_10px_30px_rgba(20,184,166,0.1)] transition-all duration-300"
//                 >
//                   <div className="w-[2.9rem] h-[2.9rem] rounded-[12px] bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-[0.9rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
//                     {s.icon}
//                   </div>
//                   <h3 className="font-bold text-[1.03rem] text-slate-900 mb-[0.4rem] leading-snug">
//                     {s.title}
//                   </h3>
//                   <p className="text-slate-500 text-[0.9rem] leading-relaxed mb-[0.9rem]">
//                     {s.desc}
//                   </p>
//                   <span className="inline-flex items-center justify-center w-[2rem] h-[2rem] rounded-full border border-slate-200 text-slate-400 group-hover:border-[#14B8A6] group-hover:text-[#14B8A6] transition-colors">
//                     <ArrowRight size={15} />
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right: teal "Why Choose AbheePay?" panel */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-[22px] p-[1.6rem] sm:p-[1.9rem] overflow-hidden"
//           >
//             <div
//               className="absolute inset-0 opacity-[0.12] pointer-events-none"
//               style={{
//                 backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
//                 backgroundSize: "18px 18px",
//               }}
//             ></div>

//             <h3 className="relative z-10 text-white text-[1.35rem] font-extrabold mb-[1.3rem]">
//               Why Choose AbheePay?
//             </h3>

//             <div className="relative z-10 space-y-[1.15rem]">
//               {whyChoose.map((w, i) => (
//                 <div key={i} className="flex items-start gap-[0.75rem]">
//                   <span className="w-[2.3rem] h-[2.3rem] shrink-0 rounded-full bg-white/15 text-white flex items-center justify-center">
//                     {w.icon}
//                   </span>
//                   <div>
//                     <p className="text-white font-bold text-[0.95rem] leading-snug mb-[0.15rem]">{w.title}</p>
//                     <p className="text-white/75 text-[0.82rem] leading-relaxed">{w.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- CTA strip ---------------- */}
//       <section className="px-[0.912rem] sm:px-[1.518rem] pb-[3.5rem]">
//         <div className="max-w-[1280px] mx-auto">
//           <div
//             className="relative rounded-[20px] bg-slate-50 border border-slate-100 px-[1.5rem] sm:px-[2rem] py-[1.6rem] flex flex-col sm:flex-row items-center justify-between gap-[1.2rem] overflow-hidden"
//           >
//             <div
//               className="absolute inset-0 opacity-[0.35] pointer-events-none"
//               style={{
//                 backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)",
//                 backgroundSize: "22px 22px",
//                 maskImage: "linear-gradient(to right, transparent 60%, black 100%)",
//                 WebkitMaskImage: "linear-gradient(to right, transparent 60%, black 100%)",
//               }}
//             ></div>
//             <div className="relative z-10 flex items-center gap-[1rem] text-center sm:text-left flex-col sm:flex-row">
//               <span className="w-[3rem] h-[3rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
//                 <Fingerprint size={22} />
//               </span>
//               <div>
//                 <h3 className="font-extrabold text-[1.15rem] text-slate-900 mb-[0.2rem]">
//                   Ready to verify your customers?
//                 </h3>
//                 <p className="text-slate-500 text-[0.92rem]">
//                   Explore our services and find the right verification solution that fits your needs.
//                 </p>
//               </div>
//             </div>
//             <Link to="/services" className="relative z-10 shrink-0">
//               <button className="inline-flex items-center gap-[0.5rem] px-[1.4rem] py-[0.75rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.92rem]">
//                 Back to Services
//                 <ArrowRight size={16} />
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default AadhaarAPI;

















import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  Fingerprint, MessageSquareText, UserCheck, ScanFace, QrCode,
  ShieldCheck, Zap, Wifi, Code2, ArrowRight,
  CheckCircle2, Lock, BadgeCheck, Building2, Landmark, HandCoins,
  Umbrella, Radio, Briefcase, ShoppingCart, Users, Settings2,
  Webhook, FlaskConical, FileText, LifeBuoy, ChevronDown,
  CreditCard, Send, Repeat, Wallet, Smartphone, KeyRound
} from 'lucide-react';

// Brand color used throughout: #14B8A6

// ---------------- Animation Variants ----------------
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const FontLoader = () => (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
  />
);

const AadhaarAPI = () => {
  // "Our Services" — Aadhaar verification methods
  const services = [
    {
      title: "OTP-Based eKYC",
      desc: "Instant Aadhaar verification via OTP sent to the customer's UIDAI-registered mobile number.",
      icon: <MessageSquareText size={31} />
    },
    {
      title: "Demographic Authentication",
      desc: "Match name, date of birth, gender and address against UIDAI records in real time.",
      icon: <UserCheck size={31} />
    },
    {
      title: "Biometric Authentication",
      desc: "Fingerprint & iris-based verification for BC outlets, kiosks and physical onboarding points.",
      icon: <ScanFace size={31} />
    },
    {
      title: "Offline Aadhaar XML & QR",
      desc: "Verify identity using masked Aadhaar XML or QR code, with no live UIDAI server call needed.",
      icon: <QrCode size={31} />
    },
  ];

  // Teal "Why Choose AbheePay?" panel
  const whyChoose = [
    {
      title: "UIDAI-compliant infrastructure",
      desc: "Built to UIDAI data-handling and consent standards, end to end.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Real-time verification",
      desc: "Sub-second responses even at high onboarding volumes.",
      icon: <Zap size={24} />
    },
    {
      title: "Masked & encrypted Aadhaar data",
      desc: "Numbers are masked at capture and encrypted at rest and in transit.",
      icon: <Lock size={24} />
    },
    {
      title: "Simple plug-and-play integration",
      desc: "Clear docs, sandbox keys and SDKs to go live in days, not months.",
      icon: <Code2 size={24} />
    },
  ];

  // ---------------- SEO: document title & meta description ----------------
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Aadhaar Verification API for Secure Identity Verification | AbheePay";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : null;
    const desc = "Integrate the AbheePay Aadhaar Verification API to verify customer identity quickly and securely. Simplify digital onboarding, KYC, and identity verification through a reliable API.";
    let createdMeta = null;
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    } else {
      createdMeta = document.createElement('meta');
      createdMeta.setAttribute('name', 'description');
      createdMeta.setAttribute('content', desc);
      document.head.appendChild(createdMeta);
    }

    return () => {
      document.title = prevTitle;
      if (createdMeta) {
        createdMeta.remove();
      } else if (metaDesc && prevDesc !== null) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  // "Built for Every Business" — industries served
  const industries = [
    { title: "Fintech Companies", icon: <Zap size={22} /> },
    { title: "Banking & Financial Services", icon: <Landmark size={22} /> },
    { title: "Lending Platforms", icon: <HandCoins size={22} /> },
    { title: "Insurance Companies", icon: <Umbrella size={22} /> },
    { title: "Telecom Service Providers", icon: <Radio size={22} /> },
    { title: "NBFCs", icon: <Building2 size={22} /> },
    { title: "E-commerce Platforms", icon: <ShoppingCart size={22} /> },
    { title: "Enterprise Applications", icon: <Briefcase size={22} /> },
    { title: "HR & Employee Verification", icon: <Users size={22} /> },
    { title: "Custom Business Software", icon: <Settings2 size={22} /> },
  ];

  // "Integration Overview" — a real sequential process, so numbering carries information
  const integrationSteps = [
    { title: "Register for API access", desc: "Create your AbheePay developer account to get started." },
    { title: "Complete business verification", desc: "Share the details we need to verify your business." },
    { title: "Receive your API credentials", desc: "Get sandbox and production keys for your account." },
    { title: "Integrate the API", desc: "Add the Aadhaar Verification API into your application." },
    { title: "Test in Sandbox", desc: "Run your integration against the dedicated sandbox environment." },
    { title: "Go live", desc: "Switch to production and start verifying customer identities." },
  ];

  // "Key Features" — feature chip list
  const keyFeatures = [
    { title: "REST API Integration", icon: <Code2 size={19} /> },
    { title: "Aadhaar Identity Verification", icon: <Fingerprint size={19} /> },
    { title: "Real-Time Verification Response", icon: <Zap size={19} /> },
    { title: "Secure Authentication", icon: <KeyRound size={19} /> },
    { title: "Webhook Notifications", icon: <Webhook size={19} /> },
    { title: "Sandbox Environment", icon: <FlaskConical size={19} /> },
    { title: "Developer Documentation", icon: <FileText size={19} /> },
    { title: "Scalable API Infrastructure", icon: <ShieldCheck size={19} /> },
    { title: "Dedicated Technical Support", icon: <LifeBuoy size={19} /> },
  ];

  // FAQs — plain-language answers, structured for FAQPage rich results
  const faqs = [
    {
      q: "What is the AbheePay Aadhaar Verification API?",
      a: "The Aadhaar Verification API enables businesses to verify customer identity digitally through a secure API integration."
    },
    {
      q: "Who can use the Aadhaar Verification API?",
      a: "The API is suitable for fintech companies, banks, NBFCs, insurance providers, telecom companies, enterprises, and software platforms that require digital identity verification."
    },
    {
      q: "Can I integrate the API with my existing application?",
      a: "Yes. The API can be integrated with websites, mobile applications, ERP systems, CRM software, and custom business platforms."
    },
    {
      q: "Is a Sandbox environment available?",
      a: "Yes. Developers can test the API in a dedicated sandbox environment before moving to production."
    },
    {
      q: "Where can I find technical documentation?",
      a: "Complete API documentation, SDKs, webhooks, Postman collections, and implementation guides are available in the Developer Hub."
    },
  ];

  // "Explore Other APIs"
const otherApis = [
  {
    title: "Payment Gateway API",
    icon: <CreditCard size={20} />,
    href: "/api/payment-gateway",
  },
  {
    title: "Payout API",
    icon: <Send size={20} />,
    href: "/api/payout",
  },
  {
    title: "BBPS API",
    icon: <Repeat size={20} />,
    href: "/api/bbps",
  },
  {
    title: "Wallet API",
    icon: <Wallet size={20} />,
    href: "/api/wallet",
  },
  {
    title: "QR API",
    icon: <QrCode size={20} />,
    href: "/api-marketplace/qr-api",
  },
  {
    title: "Recharge API",
    icon: <Smartphone size={20} />,
    href: "/api/recharge",
  },

];

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div
      className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.458rem]"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <FontLoader />

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative bg-white overflow-hidden pt-[9rem] sm:pt-[10.2rem] pb-[4.2rem] px-[1.094rem] sm:px-[1.822rem]">
        {/* soft radial backdrop, right side, echoing the reference's pale blob */}
        <div
          className="absolute -top-[7.2rem] right-[-9.6rem] w-[43.2rem] h-[43.2rem] rounded-full pointer-events-none hidden lg:block"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)" }}
        ></div>

        <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-[3.6rem] lg:gap-[3rem] items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-flex items-center gap-[0.6rem] bg-[#14B8A6]/10 rounded-full px-[1.094rem] py-[0.456rem] text-[0.96rem] font-bold tracking-[0.08em] text-[#0D9488] mb-[1.822rem]">
              <span className="w-[7.2px] h-[7.2px] rounded-full bg-[#14B8A6]"></span>
              OUR SERVICES
            </span>

            <h1 className="text-[3.12rem] sm:text-[3.84rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-900 mb-[1.822rem]">
              Aadhaar
              <br />
              <span className="text-[#14B8A6]">Verification API</span>
            </h1>

            <p className="text-[1.26rem] text-slate-500 leading-relaxed mb-[1.2rem] max-w-[40.8rem]">
              The AbheePay Aadhaar Verification API enables businesses to
              verify customer identity quickly and securely during digital
              onboarding, KYC, account registration and service activation —
              via OTP eKYC, demographic checks, biometric authentication and
              offline XML/QR verification, backed by masked storage and
              audit-ready logs.
            </p>

<div className="flex flex-wrap items-center gap-[0.86rem] mb-[2.188rem]">
  <Link
    to="/company/contact-us"
    className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.98rem]"
  >
    Get API Access
    <ArrowRight size={18} />
  </Link>
</div>

            <div className="flex items-center gap-[0.73rem]">
              <div className="w-[2.551rem] h-[2.551rem] rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
                <Fingerprint size={22} />
              </div>
              <p className="text-[1.08rem] text-slate-500">
                <span className="font-semibold text-slate-700">Abheepay Team</span> &nbsp;•&nbsp; 2026
              </p>
            </div>
          </motion.div>

          {/* Right: dashboard mockup (laptop + phone) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[24px] bg-[#0B1220] shadow-2xl p-[1.68rem] sm:p-[2.16rem] overflow-hidden">
              {/* faint dot mesh on the dark panel */}
              <div
                className="absolute inset-0 opacity-[0.25] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#14B8A6 0.72px, transparent 0.72px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>

              <div className="relative z-10 flex items-center gap-[0.547rem] mb-[1.68rem]">
                <div className="w-[1.92rem] h-[1.92rem] rounded-md bg-[#14B8A6] flex items-center justify-center">
                  <Fingerprint size={17} className="text-[#0B1220]" />
                </div>
                <span className="text-white text-[1.08rem] font-extrabold tracking-tight">ABHEE<span className="text-[#14B8A6]">PAY</span></span>
              </div>

              <p className="relative z-10 text-white text-[2.04rem] sm:text-[2.34rem] font-extrabold leading-tight mb-[0.36rem]">
                AADHAAR
              </p>
              <p className="relative z-10 text-[#14B8A6] text-[2.04rem] sm:text-[2.34rem] font-extrabold leading-tight mb-[1.08rem]">
                API SERVICES
              </p>
              <p className="relative z-10 text-slate-400 text-[1.02rem] mb-[1.32rem] max-w-[19.2rem]">
                Verify identity in real time with secure, UIDAI-aligned APIs.
              </p>

              <div className="relative z-10 grid grid-cols-2 gap-x-[1.2rem] gap-y-[0.48rem] mb-[1.56rem] text-[0.936rem] text-slate-300">
                {["OTP eKYC", "Biometric", "Demographic", "Offline XML"].map((f, i) => (
                  <span key={i} className="flex items-center gap-[0.42rem]">
                    <CheckCircle2 size={16} className="text-[#14B8A6]" />
                    {f}
                  </span>
                ))}
              </div>

              {/* mini "dashboard" card with stats + sparkline */}
              <div className="relative z-10 bg-white/[0.04] border border-white/10 rounded-[16.8px] p-[1.2rem] mb-[1.32rem]">
                <div className="grid grid-cols-3 gap-[0.72rem] mb-[0.96rem]">
                  <div>
                    <p className="text-white text-[1.26rem] font-bold leading-none">18,940</p>
                    <p className="text-slate-400 text-[0.816rem] mt-[0.3rem]">eKYC Today</p>
                  </div>
                  <div>
                    <p className="text-white text-[1.26rem] font-bold leading-none">99.2%</p>
                    <p className="text-slate-400 text-[0.816rem] mt-[0.3rem]">Success Rate</p>
                  </div>
                  <div>
                    <p className="text-white text-[1.26rem] font-bold leading-none">0.8s</p>
                    <p className="text-slate-400 text-[0.816rem] mt-[0.3rem]">Avg. Response</p>
                  </div>
                </div>
                <svg viewBox="0 0 220 40" className="w-full h-[3rem]">
                  <polyline
                    points="0,32 20,28 40,30 60,20 80,24 100,14 120,18 140,9 160,13 180,6 200,10 220,4"
                    fill="none"
                    stroke="#14B8A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* bottom trust strip */}
              <div className="relative z-10 grid grid-cols-2 gap-[0.84rem] text-[0.864rem] text-slate-300">
                <span className="flex items-center gap-[0.42rem]"><ShieldCheck size={17} className="text-[#14B8A6]" /> UIDAI Aligned</span>
                <span className="flex items-center gap-[0.42rem]"><Zap size={17} className="text-[#14B8A6]" /> Sub-second Response</span>
                <span className="flex items-center gap-[0.42rem]"><Wifi size={17} className="text-[#14B8A6]" /> 99.9% Uptime</span>
                <span className="flex items-center gap-[0.42rem]"><Code2 size={17} className="text-[#14B8A6]" /> Developer Friendly</span>
              </div>
            </div>

            {/* floating phone card, overlapping the panel */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block absolute -bottom-[1.8rem] -right-[1.44rem] w-[11.4rem] bg-white rounded-[19.2px] shadow-xl p-[0.84rem] z-20"
            >
              <div className="flex items-center gap-[0.36rem] mb-[0.6rem]">
                <BadgeCheck size={17} className="text-[#14B8A6]" />
                <p className="text-[0.744rem] font-bold text-slate-700">Verification Success</p>
              </div>
              <p className="text-[0.864rem] text-slate-400 mb-[0.18rem]">Aadhaar (masked)</p>
              <p className="text-[0.984rem] font-bold text-slate-800 mb-[0.6rem]">XXXX XXXX 4821</p>
              <div className="bg-emerald-50 text-emerald-600 text-[0.816rem] font-semibold rounded-[9.6px] px-[0.6rem] py-[0.36rem] text-center">
                Verified ✓
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Our Services + Why Choose ---------------- */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[2.16rem] items-start">
          {/* Left: services grid */}
          <div>
            <div className="w-[2.64rem] h-[3.6px] bg-[#14B8A6] mb-[0.96rem] rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[1.8rem]">
              Our Services
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-[1.2rem]"
            >
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-white border border-slate-200 rounded-[21.6px] p-[1.68rem] shadow-[0_2.4px_14.4px_rgba(15,23,42,0.04)] hover:border-[#14B8A6]/40 hover:shadow-[0_12px_36px_rgba(20,184,166,0.1)] transition-all duration-300"
                >
                  <div className="w-[3.48rem] h-[3.48rem] rounded-[14.4px] bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-[1.08rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-[1.236rem] text-slate-900 mb-[0.48rem] leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-[1.08rem] leading-relaxed mb-[1.08rem]">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center justify-center w-[2.4rem] h-[2.4rem] rounded-full border border-slate-200 text-slate-400 group-hover:border-[#14B8A6] group-hover:text-[#14B8A6] transition-colors">
                    <ArrowRight size={18} />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: teal "Why Choose AbheePay?" panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-[26.4px] p-[1.92rem] sm:p-[2.28rem] overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#fff 1.2px, transparent 1.2px)",
                backgroundSize: "21.6px 21.6px",
              }}
            ></div>

            <h3 className="relative z-10 text-white text-[1.62rem] font-extrabold mb-[1.56rem]">
              Why Choose AbheePay?
            </h3>

            <div className="relative z-10 space-y-[1.38rem]">
              {whyChoose.map((w, i) => (
                <div key={i} className="flex items-start gap-[0.9rem]">
                  <span className="w-[2.76rem] h-[2.76rem] shrink-0 rounded-full bg-white/15 text-white flex items-center justify-center">
                    {w.icon}
                  </span>
                  <div>
                    <p className="text-white font-bold text-[1.14rem] leading-snug mb-[0.18rem]">{w.title}</p>
                    <p className="text-white/75 text-[0.984rem] leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Built for Every Business ---------------- */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-slate-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[38rem] mx-auto mb-[2.4rem]">
            <div className="w-[2.64rem] h-[3.6px] bg-[#14B8A6] mb-[0.96rem] mx-auto rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.72rem]">
              Built for Every Business
            </h2>
            <p className="text-slate-500 text-[1.008rem] leading-relaxed">
              Whether you verify a few users each day or process high-volume
              customer onboarding, the Aadhaar Verification API is designed
              to support your business as it grows.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[0.96rem]"
          >
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-[16.8px] p-[1.2rem] flex flex-col items-center text-center gap-[0.6rem] hover:border-[#14B8A6]/40 hover:shadow-[0_10px_30px_rgba(20,184,166,0.08)] transition-all duration-300"
              >
                <span className="w-[2.88rem] h-[2.88rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  {ind.icon}
                </span>
                <p className="text-slate-700 text-[0.876rem] font-semibold leading-snug">
                  {ind.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Integration Overview ---------------- */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-[2.4rem] items-start">
          <div>
            <div className="w-[2.64rem] h-[3.6px] bg-[#14B8A6] mb-[0.96rem] rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.96rem]">
              Integration Overview
            </h2>
            <p className="text-slate-500 text-[1.008rem] leading-relaxed mb-[1.2rem]">
              Getting started is simple — go from registration to a live
              integration in six steps.
            </p>
            <p className="text-slate-500 text-[0.936rem] leading-relaxed">
              For implementation guides, SDKs, Postman collections, API
              documentation and sample requests, visit our{" "}
              <Link to="/developers/documentation" className="text-[#14B8A6] font-semibold hover:underline">
                Developer Hub
              </Link>.
            </p>
          </div>

          <ol className="space-y-[1.08rem]">
            {integrationSteps.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-[1.08rem] bg-slate-50 border border-slate-100 rounded-[16.8px] p-[1.2rem]"
              >
                <span className="shrink-0 w-[2.4rem] h-[2.4rem] rounded-full bg-[#14B8A6] text-white flex items-center justify-center font-extrabold text-[0.96rem]">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-slate-900 text-[0.984rem] mb-[0.18rem]">{step.title}</p>
                  <p className="text-slate-500 text-[0.876rem] leading-relaxed">{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Key Features ---------------- */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-slate-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[38rem] mx-auto mb-[2.4rem]">
            <div className="w-[2.64rem] h-[3.6px] bg-[#14B8A6] mb-[0.96rem] mx-auto rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900">
              Key Features
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-[0.96rem]"
          >
            {keyFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-center gap-[0.84rem] bg-white border border-slate-200 rounded-[14.4px] p-[1.08rem]"
              >
                <span className="shrink-0 w-[2.52rem] h-[2.52rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  {f.icon}
                </span>
                <p className="text-slate-800 text-[0.936rem] font-semibold leading-snug">{f.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA strip ---------------- */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.2rem]">
        <div className="max-w-[1280px] mx-auto">
          <div
            className="relative rounded-[24px] bg-slate-50 border border-slate-100 px-[1.8rem] sm:px-[2.4rem] py-[1.92rem] flex flex-col sm:flex-row items-center justify-between gap-[1.44rem] overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#14B8A6 0.84px, transparent 0.84px)",
                backgroundSize: "26.4px 26.4px",
                maskImage: "linear-gradient(to right, transparent 60%, black 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 60%, black 100%)",
              }}
            ></div>
            <div className="relative z-10 flex items-center gap-[1.2rem] text-center sm:text-left flex-col sm:flex-row">
              <span className="w-[3.6rem] h-[3.6rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                <Fingerprint size={26} />
              </span>
              <div>
                <h3 className="font-extrabold text-[1.38rem] text-slate-900 mb-[0.24rem]">
                  Ready to verify your customers?
                </h3>
                <p className="text-slate-500 text-[1.104rem]">
                  Explore our services and find the right verification solution that fits your needs.
                </p>
              </div>
            </div>
            {/* <Link to="/services" className="relative z-10 shrink-0">
              <button className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.104rem]">
                Back to Services
                <ArrowRight size={19} />
              </button>
            </Link> */}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ (schema.org FAQPage markup for SEO rich results) ---------------- */}
      <section
        className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-white"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mb-[2.4rem]">
            <div className="w-[2.64rem] h-[3.6px] bg-[#14B8A6] mb-[0.96rem] mx-auto rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-[0.72rem]">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="border border-slate-200 rounded-[16.8px] overflow-hidden bg-slate-50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-[0.96rem] text-left px-[1.2rem] py-[1.08rem]"
                  >
                    <span itemProp="name" className="font-bold text-slate-900 text-[0.984rem]">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#14B8A6] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                          className="px-[1.2rem] pb-[1.08rem]"
                        >
                          <p itemProp="text" className="text-slate-500 text-[0.9rem] leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Explore Other APIs ---------------- */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-slate-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[38rem] mx-auto mb-[2.4rem]">
            <div className="w-[2.64rem] h-[3.6px] bg-[#14B8A6] mb-[0.96rem] mx-auto rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.72rem]">
              Explore Other APIs
            </h2>
            <p className="text-slate-500 text-[1.008rem] leading-relaxed">
              Discover more APIs from AbheePay.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[0.96rem]">
            {otherApis.map((api, i) => (
              <Link
                key={i}
                to={api.href}
                className="group bg-white border border-slate-200 rounded-[16.8px] p-[1.2rem] flex flex-col items-center text-center gap-[0.72rem] hover:border-[#14B8A6]/40 hover:shadow-[0_10px_30px_rgba(20,184,166,0.08)] transition-all duration-300"
              >
                <span className="w-[2.88rem] h-[2.88rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
                  {api.icon}
                </span>
                <p className="text-slate-700 text-[0.852rem] font-semibold leading-snug">
                  {api.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section id="get-access" className="px-[1.094rem] sm:px-[1.822rem] pb-[4.2rem]">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative rounded-[28.8px] bg-gradient-to-br from-[#14B8A6] to-[#0D9488] px-[1.8rem] sm:px-[3rem] py-[3rem] overflow-hidden text-center">
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#fff 1.2px, transparent 1.2px)",
                backgroundSize: "26.4px 26.4px",
              }}
            ></div>

            <div className="relative z-10 max-w-[44rem] mx-auto">
              <h2 className="text-white text-[1.92rem] sm:text-[2.22rem] font-extrabold mb-[0.96rem]">
                Ready to Simplify Identity Verification?
              </h2>
              <p className="text-white/80 text-[1.008rem] leading-relaxed mb-[2.16rem]">
                Integrate the AbheePay Aadhaar Verification API to streamline
                customer onboarding, improve verification workflows, and
                build secure digital experiences — for fintech platforms,
                banking applications, lending solutions and enterprise
                systems alike.
              </p>
<div className="flex flex-wrap items-center justify-center gap-[0.96rem]">
  <Link
    to="/company/contact-us"
    className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-white text-[#0D9488] rounded-lg font-semibold hover:bg-slate-100 transition text-[0.984rem]"
  >
    Get Started Today
    <ArrowRight size={19} />
  </Link>

  {/* <Link
    to="/company/contact-us"
    className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-white/10 border border-white/40 text-white rounded-lg font-semibold hover:bg-white/20 transition text-[0.984rem]"
  >
    Request API Access
  </Link>

  <Link
    to="/company/contact-us"
    className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] text-white font-semibold hover:underline transition text-[0.984rem]"
  >
    Talk to Our API Experts
  </Link> */}
</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AadhaarAPI;