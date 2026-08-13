// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import {
//   QrCode, BarChart3, ShieldCheck, Boxes, SlidersHorizontal, Puzzle,
//   Settings2, Code2, Headphones, Rocket, ArrowRight, Lock, Webhook,
//   Infinity as InfinityIcon, Database, Fingerprint, ScanLine
// } from 'lucide-react';

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

// const qrCells = [
//   1,1,1,1,1,0,1,0,1,1,1,1,1,
//   1,0,0,0,1,0,0,0,1,0,0,0,1,
//   1,0,1,0,1,1,0,1,0,1,1,0,1,
//   1,0,1,0,1,0,1,0,1,0,1,0,1,
//   1,0,0,0,1,1,0,0,1,1,0,0,1,
//   1,1,1,1,1,0,1,1,0,1,1,1,1,
//   0,0,0,0,0,1,0,1,1,0,0,0,0,
//   1,1,0,1,1,0,1,0,0,1,1,0,1,
//   1,0,1,0,0,1,0,1,1,0,0,1,1,
//   1,0,1,1,1,0,1,0,1,1,1,0,1,
//   1,0,0,0,1,1,0,1,0,0,0,1,1,
//   1,0,1,0,1,0,1,0,1,1,0,0,1,
//   1,1,1,1,1,0,1,1,0,1,1,1,1,
// ];

// const BBPSAPI = () => {
//   const services = [
//     { title: "Bill Presentment", desc: "Fetch and present bills in real time to users.", icon: <QrCode size={26} /> },
//     { title: "Scheduled Payments", desc: "Support recurring and future-dated bill payments.", icon: <BarChart3 size={26} /> },
//     { title: "Easy Reconciliation", desc: "Track payments with clear settlement references.", icon: <Puzzle size={26} /> },
//     { title: "Operator Coverage", desc: "Integrations with major billers and utilities.", icon: <ShieldCheck size={26} /> },
//   ];

//   const whyChoose = [
//     { title: "Reliable Processing", desc: "Robust bill payment processing backbone.", icon: <Boxes size={20} /> },
//     { title: "Secure Settlements", desc: "Clear confirmations and settlement tracking.", icon: <Settings2 size={20} /> },
//     { title: "Developer Tools", desc: "Sandbox, docs and SDKs for quick integration.", icon: <Code2 size={20} /> },
//     { title: "Support", desc: "Assistance for large biller integrations.", icon: <Headphones size={20} /> },
//   ];

//   const more = [
//     { title: "Instant Fetch", desc: "Retrieve bill details instantly for users.", icon: <Lock size={22} /> },
//     { title: "Webhook Notifications", desc: "Receive real-time payment confirmations.", icon: <Webhook size={22} /> },
//     { title: "High Uptime", desc: "Built for reliability and scale.", icon: <InfinityIcon size={22} /> },
//     { title: "Detailed Reporting", desc: "Comprehensive reports for reconciliations.", icon: <Database size={22} /> },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.215rem]" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
//       <FontLoader />
//       <section className="px-[0.912rem] sm:px-[1.518rem] pt-[7rem] sm:pt-[8rem] pb-[2rem] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(20,184,166,0.22), transparent 24%), radial-gradient(circle at 80% 10%, rgba(20,184,166,0.14), transparent 20%), radial-gradient(circle at 10% 85%, rgba(20,184,166,0.08), transparent 24%)" }}></div>
//         <div className="max-w-[1280px] mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.8rem] items-stretch">
//             <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col justify-center">
//               <span className="inline-flex w-fit items-center gap-[0.5rem] bg-white border border-slate-200 rounded-full px-[0.912rem] py-[0.38rem] text-[0.8rem] font-bold tracking-[0.08em] text-slate-500 mb-[1.518rem]">
//                 <span className="w-[6px] h-[6px] rounded-full bg-[#14B8A6]"></span>
//                 API SERVICES
//               </span>

//               <h1 className="text-[3.2rem] sm:text-[3.8rem] font-extrabold leading-[1.02] tracking-[-0.02em] mb-[1rem]">
//                 <span className="text-slate-900">BBPS</span>{" "}
//                 <span className="text-[#14B8A6]">API</span>
//               </h1>

//               <p className="text-[1.15rem] font-bold text-slate-800 leading-snug mb-[1.2rem]">
//                 Reliable bill presentment and payments via Bharat Bill Payment System.
//               </p>

//               <p className="text-[0.98rem] text-slate-500 leading-relaxed mb-[1.6rem] max-w-[26rem]">
//                 Integrate BBPS to offer bill payments across utilities and services with secure settlement tracking.
//               </p>

//               <div className="flex items-center gap-[0.608rem]">
//                 <div className="w-[2.126rem] h-[2.126rem] rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
//                   <QrCode size={16} />
//                 </div>
//                 <p className="text-[0.9rem] text-slate-500">
//                   <span className="font-semibold text-slate-700">Abheepay Team</span> &nbsp;•&nbsp; 2026
//                 </p>
//               </div>
//             </motion.div>

//             <div className="flex items-center justify-center">
//               <img src="/assets/image/services/ApiServices.png" alt="API services" className="w-full max-w-[560px] rounded-[14px] shadow-lg" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-[3.5rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
//         <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[1.8rem] items-start">
//           <div>
//             <div className="w-[2.2rem] h-[3px] bg-[#14B8A6] mb-[0.8rem] rounded-full"></div>
//             <h2 className="text-[1.6rem] sm:text-[1.85rem] font-extrabold text-slate-900 mb-[1.5rem]">Our BBPS Services</h2>

//             <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem]">
//               {services.map((s, i) => (
//                 <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="group bg-white border border-slate-200 rounded-[18px] p-[1.4rem] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:border-[#14B8A6]/40 hover:shadow-[0_10px_30px_rgba(20,184,166,0.1)] transition-all duration-300">
//                   <div className="w-[2.9rem] h-[2.9rem] rounded-[12px] bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-[0.9rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">{s.icon}</div>
//                   <h3 className="font-bold text-[1.03rem] text-slate-900 mb-[0.4rem] leading-snug">{s.title}</h3>
//                   <p className="text-slate-500 text-[0.9rem] leading-relaxed mb-[0.9rem]">{s.desc}</p>
//                   <span className="inline-flex items-center justify-center w-[2rem] h-[2rem] rounded-full border border-slate-200 text-slate-400 group-hover:border-[#14B8A6] group-hover:text-[#14B8A6] transition-colors"><ArrowRight size={15} /></span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-[22px] p-[1.6rem] sm:p-[1.9rem] overflow-hidden">
//             <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "18px 18px" }}></div>

//             <h3 className="relative z-10 text-white text-[1.35rem] font-extrabold mb-[1.3rem]">Why Choose BBPS?</h3>

//             <div className="relative z-10 space-y-[1.15rem]">
//               {whyChoose.map((w, i) => (
//                 <div key={i} className="flex items-start gap-[0.75rem]">
//                   <span className="w-[2.3rem] h-[2.3rem] shrink-0 rounded-full bg-white/15 text-white flex items-center justify-center">{w.icon}</span>
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

//       <section className="px-[0.912rem] sm:px-[1.518rem] pb-[3rem]">
//         <div className="max-w-[1280px] mx-auto">
//           <div className="relative rounded-[20px] bg-slate-50 border border-slate-100 px-[1.5rem] sm:px-[2rem] py-[1.6rem] flex flex-col sm:flex-row items-center justify-between gap-[1.2rem] overflow-hidden">
//             <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(to right, transparent 60%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 60%, black 100%)" }}></div>
//             <div className="relative z-10 flex items-center gap-[1rem] text-center sm:text-left flex-col sm:flex-row">
//               <span className="w-[3rem] h-[3rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center"><Rocket size={22} /></span>
//               <div>
//                 <h3 className="font-extrabold text-[1.15rem] text-slate-900 mb-[0.2rem]">Start accepting bill payments with BBPS</h3>
//                 <p className="text-slate-500 text-[0.92rem]">Connect to Bharat Bill Payment System and enable seamless bill payments.</p>
//               </div>
//             </div>
//             <Link to="/docs" className="relative z-10 shrink-0"><button className="inline-flex items-center gap-[0.5rem] px-[1.4rem] py-[0.75rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.92rem]">View API Documentation<ArrowRight size={16} /></button></Link>
//           </div>
//         </div>
//       </section>

//       <section className="px-[0.912rem] sm:px-[1.518rem] pb-[4rem]">
//         <div className="max-w-[1280px] mx-auto">
//           <div className="text-center mb-[2.2rem]"><h2 className="text-[1.35rem] font-extrabold text-slate-900 mb-[0.5rem]">More With BBPS</h2><div className="w-[2.6rem] h-[3px] bg-[#14B8A6] mx-auto rounded-full"></div></div>

//           <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
//             {more.map((m, i) => (
//               <motion.div key={i} variants={fadeInUp} className="flex items-start gap-[0.75rem]">
//                 <span className="w-[2.9rem] h-[2.9rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">{m.icon}</span>
//                 <div>
//                   <p className="font-bold text-[0.95rem] text-slate-900 mb-[0.3rem]">{m.title}</p>
//                   <p className="text-slate-500 text-[0.85rem] leading-relaxed">{m.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BBPSAPI;























import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  QrCode, BarChart3, ShieldCheck, Boxes, SlidersHorizontal, Puzzle,
  Settings2, Code2, Headphones, Rocket, ArrowRight, Lock, Webhook,
  Infinity as InfinityIcon, Database, Fingerprint, ScanLine, CheckCircle2,
  Building2, Smartphone, Landmark, Store, Layers, Globe2, FlaskConical,
  Wifi, Wallet, ScanQrCode, RefreshCcw
} from 'lucide-react';

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
  url: "/api-marketplace/bbps-api",
  title: "BBPS API for Bill Payment Integration | AbheePay",
  description:
    "Integrate the AbheePay BBPS API to offer secure bill payment services for electricity, water, gas, broadband, DTH, FASTag, LPG, and more through your website, app, or business platform.",
};

const useSEO = ({ title, description, url }) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const ensureMeta = (name) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      return tag;
    };

    const descTag = ensureMeta('description');
    const prevDescription = descTag.getAttribute('content');
    descTag.setAttribute('content', description);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    const hadCanonical = !!canonicalTag;
    const prevHref = canonicalTag ? canonicalTag.getAttribute('href') : null;
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    if (url) {
      canonicalTag.setAttribute('href', `https://www.abheepay.com${url}`);
    }

    return () => {
      document.title = prevTitle;
      if (prevDescription !== null) {
        descTag.setAttribute('content', prevDescription);
      }
      if (!hadCanonical && canonicalTag.parentNode) {
        canonicalTag.parentNode.removeChild(canonicalTag);
      } else if (prevHref) {
        canonicalTag.setAttribute('href', prevHref);
      }
    };
  }, [title, description, url]);
};

const BBPSAPI = () => {
  useSEO(SEO);

  const services = [
    { title: "Multiple Bill Categories", desc: "Offer customers access to a wide range of BBPS-supported bill payment services through one API.", icon: <Layers size={31} /> },
    { title: "Easy API Integration", desc: "Integrate with websites, mobile apps, retailer portals, kiosks, ERP systems, or custom software using developer-friendly REST APIs.", icon: <Code2 size={31} /> },
    { title: "Real-Time Bill Payments", desc: "Enable customers to fetch bill details, make payments, and receive instant payment confirmations.", icon: <BarChart3 size={31} /> },
    { title: "Secure Transactions", desc: "Provide a safe and reliable bill payment experience through a secure payment infrastructure.", icon: <ShieldCheck size={31} /> },
    { title: "Webhook Support", desc: "Receive instant payment updates and automate transaction status through webhook notifications.", icon: <Webhook size={31} /> },
    { title: "Sandbox Environment", desc: "Test your application in a dedicated sandbox environment before launching live services.", icon: <FlaskConical size={31} /> },
  ];

  const businesses = [
    { title: "Fintech Companies", icon: <Smartphone size={24} /> },
    { title: "Payment Service Providers", icon: <Wallet size={24} /> },
    { title: "Retailer Networks", icon: <Store size={24} /> },
    { title: "Distributor Platforms", icon: <Boxes size={24} /> },
    { title: "Mobile Applications", icon: <ScanQrCode size={24} /> },
    { title: "Banking Correspondents", icon: <Landmark size={24} /> },
    { title: "Enterprise Applications", icon: <Building2 size={24} /> },
    { title: "Digital Service Platforms", icon: <Globe2 size={24} /> },
    { title: "Custom Business Software", icon: <Settings2 size={24} /> },
  ];

  const integrationSteps = [
    { title: "Register for API access", desc: "Sign up to get started with the AbheePay BBPS API." },
    { title: "Complete business verification", desc: "Submit your business details for verification." },
    { title: "Receive your API credentials", desc: "Get your keys to authenticate API requests." },
    { title: "Integrate the BBPS API", desc: "Add the API into your application, website, or platform." },
    { title: "Test in the Sandbox environment", desc: "Validate your integration before going live." },
    { title: "Go live", desc: "Start offering bill payment services to your customers." },
  ];

  const keyFeatures = [
    "REST API Integration",
    "Multiple BBPS Categories",
    "Bill Fetch & Payment",
    "Real-Time Transaction Status",
    "Webhook Notifications",
    "Sandbox Environment",
    "Developer Documentation",
    "Scalable API Infrastructure",
    "Dedicated Technical Support",
  ];

  const faqs = [
    {
      q: "What is the AbheePay BBPS API?",
      a: "The BBPS API enables businesses to integrate Bharat Bill Payment System services into websites, mobile applications, and business platforms.",
    },
    {
      q: "Which bill payment categories are supported?",
      a: "The API supports multiple BBPS categories, including electricity, water, gas, broadband, landline, DTH, FASTag, LPG, insurance, education fees, and other supported services.",
    },
    {
      q: "Who can use the BBPS API?",
      a: "The API is suitable for fintech companies, payment service providers, retailer networks, distributors, enterprises, and digital service platforms.",
    },
    {
      q: "Is a Sandbox environment available?",
      a: "Yes. Developers can test the BBPS API in a sandbox environment before moving to production.",
    },
    {
      q: "Where can I access technical documentation?",
      a: "Complete API documentation, SDKs, webhooks, Postman collections, and integration guides are available in the Developer Hub.",
    },
  ];

  const otherAPIs = [
    { title: "Payment Gateway API", icon: <Wallet size={22} /> },
    { title: "Payout API", icon: <RefreshCcw size={22} /> },
    { title: "Wallet API", icon: <Wallet size={22} /> },
    { title: "QR API", icon: <ScanQrCode size={22} /> },
    { title: "Recharge API", icon: <Smartphone size={22} /> },
    { title: "Aadhaar Verification API", icon: <Fingerprint size={22} /> },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.458rem]" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <FontLoader />

      {/* Hero */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pt-[8.4rem] sm:pt-[9.6rem] pb-[2.4rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(20,184,166,0.22), transparent 24%), radial-gradient(circle at 80% 10%, rgba(20,184,166,0.14), transparent 20%), radial-gradient(circle at 10% 85%, rgba(20,184,166,0.08), transparent 24%)" }}></div>
        <div className="max-w-[1536px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2.16rem] items-stretch">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-[0.6rem] bg-white border border-slate-200 rounded-full px-[1.094rem] py-[0.456rem] text-[0.96rem] font-bold tracking-[0.08em] text-slate-500 mb-[1.822rem]">
                <span className="w-[7px] h-[7px] rounded-full bg-[#14B8A6]"></span>
                API SERVICES
              </span>

              <h1 className="text-[3.84rem] sm:text-[4.56rem] font-extrabold leading-[1.02] tracking-[-0.02em] mb-[1.2rem]">
                <span className="text-slate-900">BBPS</span>{" "}
                <span className="text-[#14B8A6]">API</span>
              </h1>

              <p className="text-[1.38rem] font-bold text-slate-800 leading-snug mb-[1.44rem]">
                Offer Multiple Bill Payment Services Through One API
              </p>

              <p className="text-[1.176rem] text-slate-500 leading-relaxed mb-[1.92rem] max-w-[36rem]">
                The AbheePay BBPS API enables businesses to integrate Bharat Bill Payment System (BBPS) services into websites, mobile applications, fintech platforms, retailer networks, and business software. With a single integration, offer bill payments for electricity, water, gas, broadband, landline, mobile postpaid, DTH, FASTag, LPG, insurance premiums, education fees, and other supported BBPS categories.
              </p>

              <div className="flex flex-wrap items-center gap-[0.96rem] mb-[2.16rem]">
                <button className="inline-flex items-center gap-[0.6rem] px-[1.8rem] py-[1.02rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.104rem]">
                  Get API Access<ArrowRight size={19} />
                </button>
                <button className="inline-flex items-center gap-[0.6rem] px-[1.8rem] py-[1.02rem] bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-[#14B8A6]/50 transition text-[1.104rem]">
                  Contact Sales
                </button>
              </div>

              <div className="flex items-center gap-[0.73rem]">
                <div className="w-[2.551rem] h-[2.551rem] rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
                  <QrCode size={19} />
                </div>
                <p className="text-[1.08rem] text-slate-500">
                  <span className="font-semibold text-slate-700">Abheepay Team</span> &nbsp;•&nbsp; 2026
                </p>
              </div>
            </motion.div>

            <div className="flex items-center justify-center">
              <img src="/assets/image/services/ApiServices3.png" alt="AbheePay BBPS API bill payment integration" className="w-full max-w-[672px] rounded-[17px] shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-white">
        <div className="max-w-[1536px] mx-auto">
          <div className="w-[2.64rem] h-[4px] bg-[#14B8A6] mb-[0.96rem] rounded-full"></div>
          <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.6rem]">Why Choose AbheePay BBPS API?</h2>
          <p className="text-slate-500 text-[1.14rem] mb-[2.16rem] max-w-[48rem]">
            The AbheePay BBPS API is designed to simplify bill payment integration while providing businesses with a reliable and scalable platform.
          </p>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.2rem]">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="group bg-white border border-slate-200 rounded-[22px] p-[1.68rem] shadow-[0_2px_14px_rgba(15,23,42,0.04)] hover:border-[#14B8A6]/40 hover:shadow-[0_12px_36px_rgba(20,184,166,0.1)] transition-all duration-300">
                <div className="w-[3.48rem] h-[3.48rem] rounded-[14px] bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-[1.08rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">{s.icon}</div>
                <h3 className="font-bold text-[1.236rem] text-slate-900 mb-[0.48rem] leading-snug">{s.title}</h3>
                <p className="text-slate-500 text-[1.08rem] leading-relaxed mb-[1.08rem]">{s.desc}</p>
                <span className="inline-flex items-center justify-center w-[2.4rem] h-[2.4rem] rounded-full border border-slate-200 text-slate-400 group-hover:border-[#14B8A6] group-hover:text-[#14B8A6] transition-colors"><ArrowRight size={18} /></span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Built for Every Business */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-slate-50">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.64rem]">
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.72rem]">Built for Every Business</h2>
            <p className="text-slate-500 text-[1.14rem] max-w-[43.2rem] mx-auto">
              The AbheePay BBPS API is ideal for a wide range of businesses. Whether you serve hundreds or thousands of customers, the BBPS API helps you expand your digital payment services with confidence.
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[1.08rem]">
            {businesses.map((b, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center gap-[0.84rem] bg-white border border-slate-200 rounded-[17px] px-[1.2rem] py-[1.08rem]">
                <span className="w-[2.76rem] h-[2.76rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">{b.icon}</span>
                <p className="font-semibold text-slate-800 text-[1.056rem] leading-snug">{b.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integration Overview */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-white">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[2.4rem] items-start">
          <div>
            <div className="w-[2.64rem] h-[4px] bg-[#14B8A6] mb-[0.96rem] rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.72rem]">Integration Overview</h2>
            <p className="text-slate-500 text-[1.14rem] mb-[2.16rem] max-w-[33.6rem]">
              Getting started is simple. For complete API documentation, sample requests, SDKs, and implementation guides, visit our Developer Hub.
            </p>
            <button className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.96rem] bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-[#14B8A6]/50 transition text-[1.08rem]">
              Visit Developer Hub<ArrowRight size={19} />
            </button>
          </div>

          <motion.ol variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-[1.2rem]">
            {integrationSteps.map((step, i) => (
              <motion.li key={i} variants={fadeInUp} className="flex items-start gap-[1.2rem] bg-white border border-slate-200 rounded-[17px] px-[1.32rem] py-[1.2rem]">
                <span className="w-[2.52rem] h-[2.52rem] shrink-0 rounded-full bg-[#14B8A6] text-white text-[1.02rem] font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-900 text-[1.14rem] mb-[0.18rem]">{step.title}</p>
                  <p className="text-slate-500 text-[1.02rem] leading-relaxed">{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-slate-50">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.64rem]">
            <h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">Key Features</h2>
            <div className="w-[3.12rem] h-[4px] bg-[#14B8A6] mx-auto rounded-full"></div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.08rem] max-w-[1080px] mx-auto">
            {keyFeatures.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center gap-[0.72rem] bg-white border border-slate-200 rounded-[14px] px-[1.2rem] py-[0.96rem]">
                <CheckCircle2 size={22} className="text-[#14B8A6] shrink-0" />
                <p className="font-semibold text-slate-800 text-[1.02rem]">{f}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="px-[1.094rem] sm:px-[1.822rem] py-[3.6rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="relative rounded-[24px] bg-slate-50 border border-slate-100 px-[1.8rem] sm:px-[2.4rem] py-[1.92rem] flex flex-col sm:flex-row items-center justify-between gap-[1.44rem] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: "radial-gradient(#14B8A6 1px, transparent 1px)", backgroundSize: "26px 26px", maskImage: "linear-gradient(to right, transparent 60%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 60%, black 100%)" }}></div>
            <div className="relative z-10 flex items-center gap-[1.2rem] text-center sm:text-left flex-col sm:flex-row">
              <span className="w-[3.6rem] h-[3.6rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center"><Rocket size={26} /></span>
              <div>
                <h3 className="font-extrabold text-[1.38rem] text-slate-900 mb-[0.24rem]">Start accepting bill payments with BBPS</h3>
                <p className="text-slate-500 text-[1.104rem]">Connect to Bharat Bill Payment System and enable seamless bill payments.</p>
              </div>
            </div>
            <Link to="/docs" className="relative z-10 shrink-0"><button className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.104rem]">View API Documentation<ArrowRight size={19} /></button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.8rem]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-[2.64rem]">
            <h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">Frequently Asked Questions</h2>
            <div className="w-[3.12rem] h-[4px] bg-[#14B8A6] mx-auto rounded-full"></div>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-[1.08rem]">
            {faqs.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white border border-slate-200 rounded-[17px] px-[1.56rem] py-[1.32rem]">
                <p className="font-bold text-slate-900 text-[1.14rem] mb-[0.42rem]">{f.q}</p>
                <p className="text-slate-500 text-[1.056rem] leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explore Other APIs */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.8rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.64rem]">
            <h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">Explore Other APIs</h2>
            <p className="text-slate-500 text-[1.08rem]">Expand your platform with other AbheePay APIs.</p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[1.08rem]">
            {otherAPIs.map((a, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -3 }} className="flex flex-col items-center text-center gap-[0.72rem] bg-white border border-slate-200 rounded-[17px] px-[1.2rem] py-[1.56rem] hover:border-[#14B8A6]/40 transition-colors">
                <span className="w-[3.12rem] h-[3.12rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">{a.icon}</span>
                <p className="font-semibold text-slate-800 text-[0.984rem] leading-snug">{a.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[6rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="relative rounded-[31px] bg-gradient-to-br from-[#14B8A6] to-[#0D9488] px-[2.16rem] sm:px-[3.6rem] py-[3.6rem] text-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}></div>
            <h2 className="relative z-10 text-white text-[2.04rem] sm:text-[2.4rem] font-extrabold mb-[0.84rem]">Ready to Offer BBPS Services?</h2>
            <p className="relative z-10 text-white/85 text-[1.176rem] max-w-[43.2rem] mx-auto mb-[2.16rem]">
              Integrate the AbheePay BBPS API to provide secure and reliable bill payment services through your website, mobile application, or business platform.
            </p>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-[1.08rem]">
              <button className="inline-flex items-center gap-[0.6rem] px-[1.92rem] py-[1.08rem] bg-white text-[#0D9488] rounded-lg font-bold hover:bg-slate-100 transition text-[1.14rem]">
                Request API Access<ArrowRight size={19} />
              </button>
              <button className="inline-flex items-center gap-[0.6rem] px-[1.92rem] py-[1.08rem] bg-white/10 border border-white/40 text-white rounded-lg font-bold hover:bg-white/20 transition text-[1.14rem]">
                Talk to Our API Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BBPSAPI;
