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

// const PayoutAPI = () => {
//   const services = [
//     { title: "Bulk Payouts", desc: "Send mass payouts with templated requests.", icon: <QrCode size={26} /> },
//     { title: "Scheduled Disbursements", desc: "Automate salary, commission and vendor payouts.", icon: <BarChart3 size={26} /> },
//     { title: "KYC Aware Routing", desc: "Route payouts based on KYC and bank profiles.", icon: <Puzzle size={26} /> },
//     { title: "Secure Authorization", desc: "Two-factor and role-based approvals for disbursements.", icon: <ShieldCheck size={26} /> },
//   ];

//   const whyChoose = [
//     { title: "Fast Settlements", desc: "Near real-time clearing and reconciliation.", icon: <Boxes size={20} /> },
//     { title: "Developer SDKs", desc: "SDKs and sample code for quick integration.", icon: <Code2 size={20} /> },
//     { title: "Audit & Logs", desc: "Complete traceability for each payout.", icon: <Database size={20} /> },
//     { title: "Support for Scale", desc: "Built for high-volume disbursement flows.", icon: <Headphones size={20} /> },
//   ];

//   const more = [
//     { title: "Retry & Safe-guards", desc: "Automatic retries and limit checks.", icon: <Lock size={22} /> },
//     { title: "Webhook Notifications", desc: "Instant callbacks for payout events.", icon: <Webhook size={22} /> },
//     { title: "High Throughput", desc: "Designed for batch and real-time payouts.", icon: <InfinityIcon size={22} /> },
//     { title: "Detailed Reports", desc: "Exportable settlement reports and ledgers.", icon: <Database size={22} /> },
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
//                 <span className="text-slate-900">Payout</span>{" "}
//                 <span className="text-[#14B8A6]">API</span>
//               </h1>

//               <p className="text-[1.15rem] font-bold text-slate-800 leading-snug mb-[1.2rem]">
//                 Secure, scalable disbursements for payroll, commissions and payouts.
//               </p>

//               <p className="text-[0.98rem] text-slate-500 leading-relaxed mb-[1.6rem] max-w-[26rem]">
//                 AbheePay Payout API makes mass and scheduled disbursements simple with secure routing and reporting.
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
//             <h2 className="text-[1.6rem] sm:text-[1.85rem] font-extrabold text-slate-900 mb-[1.5rem]">Payout Capabilities</h2>

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

//             <h3 className="relative z-10 text-white text-[1.35rem] font-extrabold mb-[1.3rem]">Why use Payout API?</h3>

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
//                 <h3 className="font-extrabold text-[1.15rem] text-slate-900 mb-[0.2rem]">Launch payouts with confidence</h3>
//                 <p className="text-slate-500 text-[0.92rem]">Automate payrolls, commissions and vendor payouts at scale.</p>
//               </div>
//             </div>
//             <Link to="/docs" className="relative z-10 shrink-0"><button className="inline-flex items-center gap-[0.5rem] px-[1.4rem] py-[0.75rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.92rem]">View API Documentation<ArrowRight size={16} /></button></Link>
//           </div>
//         </div>
//       </section>

//       <section className="px-[0.912rem] sm:px-[1.518rem] pb-[4rem]">
//         <div className="max-w-[1280px] mx-auto">
//           <div className="text-center mb-[2.2rem]"><h2 className="text-[1.35rem] font-extrabold text-slate-900 mb-[0.5rem]">Payout Features</h2><div className="w-[2.6rem] h-[3px] bg-[#14B8A6] mx-auto rounded-full"></div></div>

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

// export default PayoutAPI;





























import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  QrCode, BarChart3, ShieldCheck, Boxes, SlidersHorizontal, Puzzle,
  Settings2, Code2, Headphones, Rocket, ArrowRight, Lock, Webhook,
  Infinity as InfinityIcon, Database, Fingerprint, ScanLine,
  Landmark, Smartphone, RefreshCcw, FlaskConical, Layers, Server,
  ChevronDown, Check
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

const PAYOUT_OPTIONS = [
  { icon: <Landmark size={22} />, label: "Bank Accounts" },
  { icon: <Smartphone size={22} />, label: "UPI IDs" },
];

const INDUSTRIES = [
  "Fintech Companies",
  "E-commerce Platforms",
  "Marketplaces",
  "SaaS Platforms",
  "Payroll Solutions",
  "Insurance Companies",
  "Lending Platforms",
  "Travel Companies",
  "Enterprise Applications",
  "Custom Business Software",
];

const INTEGRATION_STEPS = [
  { title: "Register for API access", desc: "Sign up to start your integration." },
  { title: "Complete business verification", desc: "Finish the verification process." },
  { title: "Receive your API credentials", desc: "Get your keys to authenticate requests." },
  { title: "Integrate the Payout API", desc: "Add the API to your application." },
  { title: "Test in Sandbox", desc: "Validate your integration before going live." },
  { title: "Go live", desc: "Start automating your business payouts." },
];

const KEY_FEATURES = [
  { icon: <Server size={22} />, title: "REST API Integration" },
  { icon: <Lock size={22} />, title: "Secure Authentication" },
  { icon: <Landmark size={22} />, title: "Bank Account Payouts" },
  { icon: <Smartphone size={22} />, title: "UPI Payouts" },
  { icon: <BarChart3 size={22} />, title: "Real-Time Transaction Status" },
  { icon: <Webhook size={22} />, title: "Webhook Notifications" },
  { icon: <FlaskConical size={22} />, title: "Sandbox Environment" },
  { icon: <Code2 size={22} />, title: "API Documentation" },
  { icon: <Layers size={22} />, title: "Scalable Infrastructure" },
  { icon: <Headphones size={22} />, title: "Dedicated Technical Support" },
];

const FAQS = [
  {
    q: "What is the AbheePay Payout API?",
    a: "The Payout API enables businesses to automate payments to bank accounts and UPI IDs directly from their applications or business systems.",
  },
  {
    q: "Who can use the Payout API?",
    a: "The API is suitable for fintech companies, marketplaces, SaaS platforms, enterprises, payroll providers, lending businesses, and other organisations that automate business payments.",
  },
  {
    q: "Can I automate payouts?",
    a: "Yes. Businesses can integrate the API to automate payouts based on their own business workflows.",
  },
  {
    q: "Is a Sandbox environment available?",
    a: "Yes. Developers can test the API in the Sandbox environment before moving to production.",
  },
  {
    q: "Where can I find technical documentation?",
    a: "Complete API documentation, SDKs, Webhooks, Postman Collections, and integration guides are available in the Developer Hub.",
  },
];

const OTHER_APIS = [
  { label: "Payment Gateway API", to: "/api-marketplace/payment-gateway-api" },
  { label: "BBPS API", to: "/api-marketplace/bbps-api" },
  { label: "Wallet API", to: "/api-marketplace/wallet-api" },
  { label: "QR API", to: "/api-marketplace/qr-api" },
  { label: "Recharge API", to: "/api-marketplace/recharge-api" },
  { label: "Aadhaar Verification API", to: "/api-marketplace/aadhaar-verification-api" },
];

const FaqItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-[1.2rem] py-[1.5rem] text-left"
      >
        <span className="font-bold text-[1.03rem] text-slate-900">{q}</span>
        <ChevronDown
          className={`h-[1.5rem] w-[1.5rem] shrink-0 text-[#14B8A6] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="pb-[1.5rem] text-[0.95rem] leading-relaxed text-slate-500">
          {a}
        </p>
      )}
    </div>
  );
};

const PayoutAPI = () => {
  const services = [
    { title: "Bulk Payouts", desc: "Send mass payouts with templated requests.", icon: <QrCode size={31} /> },
    { title: "Scheduled Disbursements", desc: "Automate salary, commission and vendor payouts.", icon: <BarChart3 size={31} /> },
    { title: "KYC Aware Routing", desc: "Route payouts based on KYC and bank profiles.", icon: <Puzzle size={31} /> },
    { title: "Secure Authorization", desc: "Two-factor and role-based approvals for disbursements.", icon: <ShieldCheck size={31} /> },
  ];

  const whyChoose = [
    { title: "Fast Settlements", desc: "Near real-time clearing and reconciliation.", icon: <Boxes size={24} /> },
    { title: "Developer SDKs", desc: "SDKs and sample code for quick integration.", icon: <Code2 size={24} /> },
    { title: "Audit & Logs", desc: "Complete traceability for each payout.", icon: <Database size={24} /> },
    { title: "Support for Scale", desc: "Built for high-volume disbursement flows.", icon: <Headphones size={24} /> },
  ];

  const more = [
    { title: "Retry & Safe-guards", desc: "Automatic retries and limit checks.", icon: <Lock size={26} /> },
    { title: "Webhook Notifications", desc: "Instant callbacks for payout events.", icon: <Webhook size={26} /> },
    { title: "High Throughput", desc: "Designed for batch and real-time payouts.", icon: <InfinityIcon size={26} /> },
    { title: "Detailed Reports", desc: "Exportable settlement reports and ledgers.", icon: <Database size={26} /> },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.458rem]" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <FontLoader />

      <Helmet>
        <title>Payout API for Automated Business Payments | AbheePay</title>
        <meta
          name="description"
          content="Automate business payouts with the AbheePay Payout API. Send payments to bank accounts and UPI IDs securely through a simple API integration."
        />
        <link
          rel="canonical"
          href="https://www.abheepay.com/api-marketplace/payout-api"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Payout API for Automated Business Payments | AbheePay" />
        <meta
          property="og:description"
          content="Automate business payouts with the AbheePay Payout API. Send payments to bank accounts and UPI IDs securely through a simple API integration."
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.abheepay.com/api-marketplace/payout-api" />
        <meta property="og:image" content="https://www.abheepay.com/assets/image/services/ApiServices.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Payout API for Automated Business Payments | AbheePay" />
        <meta
          name="twitter:description"
          content="Automate business payouts with the AbheePay Payout API. Send payments to bank accounts and UPI IDs securely through a simple API integration."
        />
      </Helmet>

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
                <span className="text-slate-900">Payout</span>{" "}
                <span className="text-[#14B8A6]">API</span>
              </h1>

              <p className="text-[1.38rem] font-bold text-slate-800 leading-snug mb-[1.44rem]">
                Send secure & fast payouts through a single API.
              </p>

              <p className="text-[1.176rem] text-slate-500 leading-relaxed mb-[1.92rem] max-w-[31.2rem]">
                Automate payments to bank accounts and UPI IDs through a
                secure, developer-friendly API. Whether you're paying
                vendors, employees, partners, customers, or service
                providers, AbheePay simplifies the payout process and
                reduces manual work.
              </p>

              <div className="flex flex-wrap items-center gap-[1rem] mb-[1.6rem]">
                <Link to="/contact">
                  <button className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.104rem]">
                    Get API Access
                    <ArrowRight size={19} />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] border border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-[#14B8A6] hover:text-[#14B8A6] transition text-[1.104rem]">
                    Contact Sales
                  </button>
                </Link>
              </div>

              <div className="flex items-center gap-[0.7296rem]">
                <div className="w-[2.5512rem] h-[2.5512rem] rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
                  <QrCode size={19} />
                </div>
                <p className="text-[1.08rem] text-slate-500">
                  <span className="font-semibold text-slate-700">Abheepay Team</span> &nbsp;•&nbsp; 2026
                </p>
              </div>
            </motion.div>

            <div className="flex items-center justify-center">
              <img src="/assets/image/services/ApiServices40.png" alt="Payout API services" className="w-full max-w-[672px] rounded-[17px] shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Payout capabilities + Why choose */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-white">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[2.16rem] items-start">
          <div>
            <div className="w-[2.64rem] h-[3.6px] bg-[#14B8A6] mb-[0.96rem] rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[1.8rem]">Payout Capabilities</h2>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-[1.2rem]">
              {services.map((s, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="group bg-white border border-slate-200 rounded-[22px] p-[1.68rem] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:border-[#14B8A6]/40 hover:shadow-[0_10px_30px_rgba(20,184,166,0.1)] transition-all duration-300">
                  <div className="w-[3.48rem] h-[3.48rem] rounded-[14px] bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-[1.08rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">{s.icon}</div>
                  <h3 className="font-bold text-[1.236rem] text-slate-900 mb-[0.48rem] leading-snug">{s.title}</h3>
                  <p className="text-slate-500 text-[1.08rem] leading-relaxed mb-[1.08rem]">{s.desc}</p>
                  <span className="inline-flex items-center justify-center w-[2.4rem] h-[2.4rem] rounded-full border border-slate-200 text-slate-400 group-hover:border-[#14B8A6] group-hover:text-[#14B8A6] transition-colors"><ArrowRight size={18} /></span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-[26px] p-[1.92rem] sm:p-[2.28rem] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}></div>

            <h3 className="relative z-10 text-white text-[1.62rem] font-extrabold mb-[1.56rem]">Why use Payout API?</h3>

            <div className="relative z-10 space-y-[1.38rem]">
              {whyChoose.map((w, i) => (
                <div key={i} className="flex items-start gap-[0.9rem]">
                  <span className="w-[2.76rem] h-[2.76rem] shrink-0 rounded-full bg-white/15 text-white flex items-center justify-center">{w.icon}</span>
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

      {/* Multiple payout options */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.2rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.16rem]">
            <div className="w-[2.6rem] h-[3.6px] bg-[#14B8A6] mx-auto rounded-full mb-[0.96rem]"></div>
            <h2 className="text-[1.92rem] font-extrabold text-slate-900 mb-[0.6rem]">Multiple Payout Options</h2>
            <p className="text-slate-500 text-[1.08rem] max-w-[38rem] mx-auto leading-relaxed">
              Send payouts wherever your recipients need them, through one
              secure integration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[1.08rem] max-w-[36rem] mx-auto">
            {PAYOUT_OPTIONS.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center gap-[0.72rem] rounded-[18px] border border-slate-200 bg-white p-[1.68rem] text-center shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
              >
                <span className="inline-flex h-[3.6rem] w-[3.6rem] items-center justify-center rounded-full bg-[#14B8A6]/10 text-[#14B8A6]">
                  {m.icon}
                </span>
                <span className="text-[1.08rem] font-semibold text-slate-800">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration overview */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.2rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.16rem]">
            <div className="w-[2.6rem] h-[3.6px] bg-[#14B8A6] mx-auto rounded-full mb-[0.96rem]"></div>
            <h2 className="text-[1.92rem] font-extrabold text-slate-900 mb-[0.6rem]">Integration Overview</h2>
            <p className="text-slate-500 text-[1.08rem] max-w-[38rem] mx-auto leading-relaxed">
              Getting started is simple — from registration to going live.
            </p>
          </div>

          <div className="grid gap-[1.2rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {INTEGRATION_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="rounded-[18px] border border-slate-200 bg-white p-[1.44rem] shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
              >
                <span className="inline-flex h-[2.88rem] w-[2.88rem] items-center justify-center rounded-full bg-[#14B8A6] text-[1.03rem] font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-[1.08rem] text-[1.03rem] font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-[0.48rem] text-[0.95rem] leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-[1.68rem] text-center text-[1rem] text-slate-500">
            For implementation guides, API references, SDKs, and sample
            code, visit our{" "}
            <Link to="/docs" className="font-semibold text-[#14B8A6] hover:underline">
              Developer Hub
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Built for every business */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.2rem]">
        <div className="max-w-[1536px] mx-auto rounded-[26px] border border-slate-200 bg-slate-50 p-[1.92rem] sm:p-[2.28rem]">
          <div className="text-center mb-[1.8rem]">
            <h2 className="text-[1.92rem] font-extrabold text-slate-900 mb-[0.6rem]">Built for Every Business</h2>
            <p className="text-slate-500 text-[1.08rem] max-w-[38rem] mx-auto leading-relaxed">
              Whether you process a few payouts each day or thousands
              every month, the AbheePay Payout API is designed to grow
              with your business.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[1.08rem]">
            {INDUSTRIES.map((item) => (
              <div
                key={item}
                className="flex items-start gap-[0.6rem] rounded-[14px] bg-white p-[1.08rem] shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
              >
                <Check className="mt-[0.15rem] h-[1.2rem] w-[1.2rem] shrink-0 text-[#14B8A6]" strokeWidth={3} />
                <span className="text-[0.95rem] font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch payouts CTA */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[3.6rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="relative rounded-[24px] bg-slate-50 border border-slate-100 px-[1.8rem] sm:px-[2.4rem] py-[1.92rem] flex flex-col sm:flex-row items-center justify-between gap-[1.44rem] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)", backgroundSize: "26px 26px", maskImage: "linear-gradient(to right, transparent 60%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 60%, black 100%)" }}></div>
            <div className="relative z-10 flex items-center gap-[1.2rem] text-center sm:text-left flex-col sm:flex-row">
              <span className="w-[3.6rem] h-[3.6rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center"><Rocket size={26} /></span>
              <div>
                <h3 className="font-extrabold text-[1.38rem] text-slate-900 mb-[0.24rem]">Launch payouts with confidence</h3>
                <p className="text-slate-500 text-[1.104rem]">Automate payrolls, commissions and vendor payouts at scale.</p>
              </div>
            </div>
            <Link to="/docs" className="relative z-10 shrink-0"><button className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.104rem]">View API Documentation<ArrowRight size={19} /></button></Link>
          </div>
        </div>
      </section>

      {/* Payout features */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.8rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.64rem]"><h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">Payout Features</h2><div className="w-[3.12rem] h-[3.6px] bg-[#14B8A6] mx-auto rounded-full"></div></div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1.5rem]">
            {KEY_FEATURES.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-[0.9rem]">
                <span className="w-[3.48rem] h-[3.48rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">{f.icon}</span>
                <div>
                  <p className="font-bold text-[1.02rem] text-slate-900 leading-snug">{f.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* More with Payout API */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.8rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.64rem]"><h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">More With Payout API</h2><div className="w-[3.12rem] h-[3.6px] bg-[#14B8A6] mx-auto rounded-full"></div></div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.8rem]">
            {more.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-[0.9rem]">
                <span className="w-[3.48rem] h-[3.48rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">{m.icon}</span>
                <div>
                  <p className="font-bold text-[1.14rem] text-slate-900 mb-[0.36rem]">{m.title}</p>
                  <p className="text-slate-500 text-[1.02rem] leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.8rem]">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-[2.16rem]">
            <h2 className="text-[1.92rem] font-extrabold text-slate-900 mb-[0.6rem]">Frequently Asked Questions</h2>
            <div className="w-[3.12rem] h-[3.6px] bg-[#14B8A6] mx-auto rounded-full"></div>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-white px-[1.44rem] shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:px-[1.92rem]">
            {FAQS.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Explore other APIs */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.8rem]">
        <div className="max-w-[1536px] mx-auto rounded-[26px] border border-slate-200 bg-white p-[1.92rem] shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:p-[2.28rem]">
          <h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">Explore Other APIs</h2>
          <p className="text-slate-500 text-[1.08rem] mb-[1.44rem]">
            Discover more APIs from AbheePay.
          </p>
          <div className="flex flex-wrap gap-[0.9rem]">
            {OTHER_APIS.map((api) => (
              <Link
                key={api.label}
                to={api.to}
                className="inline-flex items-center gap-[0.6rem] rounded-full border border-slate-200 bg-slate-50 px-[1.2rem] py-[0.6rem] text-[0.98rem] font-semibold text-slate-700 transition hover:border-[#14B8A6] hover:text-[#14B8A6]"
              >
                {api.label}
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[6rem]">
        <div className="max-w-[1536px] mx-auto rounded-[26px] bg-gradient-to-br from-slate-900 to-[#0B2E31] px-[2.28rem] py-[3.6rem] text-center text-white shadow-2xl">
          <h2 className="text-[2.22rem] font-extrabold sm:text-[2.64rem]">
            Ready to Automate Your Business Payouts?
          </h2>
          <p className="mx-auto mt-[1.2rem] max-w-[42rem] text-[1.02rem] leading-relaxed text-slate-300 sm:text-[1.14rem]">
            Simplify your payout process with the AbheePay Payout API.
            Automate payments, improve operational efficiency, and manage
            business payouts from one secure platform.
          </p>
          <div className="mt-[2.16rem] flex flex-col items-center justify-center gap-[1.2rem] sm:flex-row">
            <Link to="/contact">
              <button className="inline-flex items-center justify-center gap-[0.6rem] rounded-full bg-[#14B8A6] px-[1.92rem] py-[0.9rem] text-[1.104rem] font-semibold text-white shadow-lg transition hover:bg-[#0D9488]">
                Request API Access
                <ArrowRight size={19} />
              </button>
            </Link>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center gap-[0.6rem] rounded-full border border-white/30 px-[1.92rem] py-[0.9rem] text-[1.104rem] font-semibold text-white transition hover:border-white hover:bg-white/10">
                Talk to Our API Experts
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayoutAPI;