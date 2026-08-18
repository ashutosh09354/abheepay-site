import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  QrCode, BarChart3, ShieldCheck, Boxes, SlidersHorizontal, Puzzle,
  Settings2, Code2, Headphones, Rocket, ArrowRight, Lock, Webhook,
  Infinity as InfinityIcon, Database, Fingerprint, ScanLine,
  Zap, Users, Truck, Store, Smartphone as PhoneIcon, LayoutGrid,
  Briefcase, KeyRound, FileText, ChevronDown, CreditCard, Send,
  Repeat, Wallet, Fingerprint as AadhaarIcon
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

const qrCells = [
  1,1,1,1,1,0,1,0,1,1,1,1,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,0,1,0,1,1,0,1,0,1,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,0,0,1,1,0,0,1,1,0,0,1,
  1,1,1,1,1,0,1,1,0,1,1,1,1,
  0,0,0,0,0,1,0,1,1,0,0,0,0,
  1,1,0,1,1,0,1,0,0,1,1,0,1,
  1,0,1,0,0,1,0,1,1,0,0,1,1,
  1,0,1,1,1,0,1,0,1,1,1,0,1,
  1,0,0,0,1,1,0,1,0,0,0,1,1,
  1,0,1,0,1,0,1,0,1,1,0,0,1,
  1,1,1,1,1,0,1,1,0,1,1,1,1,
];

const RechargeAPI = () => {
  const services = [
    { title: "Instant Top-ups", desc: "Mobile and DTH recharges with real-time status.", icon: <QrCode size={31} /> },
    { title: "Operator Routing", desc: "Optimized routing to improve success rates.", icon: <BarChart3 size={31} /> },
    { title: "Promotions & Vouchers", desc: "Issue promos and vouchers alongside recharges.", icon: <Puzzle size={31} /> },
    { title: "Secure Channels", desc: "Encrypted requests and safe operator calls.", icon: <ShieldCheck size={31} /> },
  ];

  const whyChoose = [
    { title: "High Success Rate", desc: "Optimized paths and retries for reliability.", icon: <Boxes size={24} /> },
    { title: "Sandbox Testing", desc: "Test flows without real money using sandbox keys.", icon: <Code2 size={24} /> },
    { title: "Detailed Logs", desc: "End-to-end logs for every top-up.", icon: <Database size={24} /> },
    { title: "24/7 Support", desc: "Dedicated support for operator issues.", icon: <Headphones size={24} /> },
  ];

  const more = [
    { title: "Retry Logic", desc: "Automatic retries for transient failures.", icon: <Lock size={26} /> },
    { title: "Webhook Events", desc: "Immediate callbacks for recharge status.", icon: <Webhook size={26} /> },
    { title: "Scalable Systems", desc: "Handles peaks in volume without hiccups.", icon: <InfinityIcon size={26} /> },
    { title: "Reporting", desc: "Exportable reports for reconciliations.", icon: <Database size={26} /> },
  ];

  // ---------------- SEO: document title & meta description ----------------
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Recharge API for Mobile & DTH Recharge Integration | AbheePay";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : null;
    const desc = "Integrate the AbheePay Recharge API to offer mobile, DTH, and FASTag recharge services through your website, mobile app, fintech platform, or business software.";
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

  // "Built for Every Business" — who the Recharge API serves
  const industries = [
    { title: "Fintech Companies", icon: <Zap size={26} /> },
    { title: "Payment Service Providers", icon: <CreditCard size={26} /> },
    { title: "Retailer Networks", icon: <Store size={26} /> },
    { title: "Distributor Platforms", icon: <Truck size={26} /> },
    { title: "Mobile Applications", icon: <PhoneIcon size={26} /> },
    { title: "Digital Service Platforms", icon: <LayoutGrid size={26} /> },
    { title: "Enterprise Applications", icon: <Briefcase size={26} /> },
    { title: "Recharge Portals", icon: <QrCode size={26} /> },
    { title: "Custom Business Software", icon: <Settings2 size={26} /> },
  ];

  // "Integration Overview" — a real sequential process, so numbering carries information
  const integrationSteps = [
    { title: "Register for API access", desc: "Create your AbheePay developer account to get started." },
    { title: "Complete business verification", desc: "Share the details we need to verify your business." },
    { title: "Receive your API credentials", desc: "Get sandbox and production keys for your account." },
    { title: "Integrate the Recharge API", desc: "Add recharge services into your application." },
    { title: "Test in Sandbox", desc: "Run your integration against the dedicated sandbox environment." },
    { title: "Go live", desc: "Start offering recharge services to your customers." },
  ];

  // "Key Features" — feature chip list
  const keyFeatures = [
    { title: "REST API Integration", icon: <Code2 size={23} /> },
    { title: "Mobile Recharge", icon: <PhoneIcon size={23} /> },
    { title: "DTH Recharge", icon: <QrCode size={23} /> },
    { title: "FASTag Recharge", icon: <ScanLine size={23} /> },
    { title: "Real-Time Transaction Status", icon: <Zap size={23} /> },
    { title: "Secure Authentication", icon: <KeyRound size={23} /> },
    { title: "Webhook Notifications", icon: <Webhook size={23} /> },
    { title: "Sandbox Environment", icon: <Boxes size={23} /> },
    { title: "Developer Documentation", icon: <FileText size={23} /> },
    { title: "Dedicated Technical Support", icon: <Headphones size={23} /> },
  ];

  // FAQs — plain-language answers, structured for FAQPage rich results
  const faqs = [
    {
      q: "What is the AbheePay Recharge API?",
      a: "The Recharge API enables businesses to integrate digital recharge services into websites, mobile applications, and business platforms through a single API."
    },
    {
      q: "Which recharge services are supported?",
      a: "The API supports prepaid mobile recharge, DTH recharge, FASTag recharge, and other supported digital recharge services."
    },
    {
      q: "Who can use the Recharge API?",
      a: "The API is suitable for fintech companies, payment service providers, retailer networks, distributors, digital service platforms, enterprises, and software providers."
    },
    {
      q: "Is a Sandbox environment available?",
      a: "Yes. Developers can test the Recharge API in a dedicated sandbox environment before moving to production."
    },
    {
      q: "Where can I find technical documentation?",
      a: "Complete API documentation, SDKs, webhooks, Postman collections, and integration guides are available in the Developer Hub."
    },
  ];

  // "Explore Other APIs"
  const otherApis = [




    { title: "Payment Gateway API", icon: <CreditCard size={24} />, href: "/api/payment-gateway" },
    { title: "Payout API", icon: <Send size={24} />, href: "/api-marketplace/payout-api" },
    { title: "BBPS API", icon: <Repeat size={24} />, href: "/api/bbps" },
    { title: "Wallet API", icon: <Wallet size={24} />, href: "/api/wallet" },
    { title: "QR API", icon: <QrCode size={24} />, href: "/api-marketplace/qr-api" },
    { title: "Aadhaar Verification API", icon: <AadhaarIcon size={24} />, href: "/api/aadhaar" },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.458rem]" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <FontLoader />
      <section className="px-[1.094rem] sm:px-[1.822rem] pt-[8.4rem] sm:pt-[9.6rem] pb-[2.4rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(20,184,166,0.22), transparent 24%), radial-gradient(circle at 80% 10%, rgba(20,184,166,0.14), transparent 20%), radial-gradient(circle at 10% 85%, rgba(20,184,166,0.08), transparent 24%)" }}></div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2.16rem] items-stretch">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-[0.6rem] bg-white border border-slate-200 rounded-full px-[1.094rem] py-[0.456rem] text-[0.96rem] font-bold tracking-[0.08em] text-slate-500 mb-[1.822rem]">
                <span className="w-[7.2px] h-[7.2px] rounded-full bg-[#14B8A6]"></span>
                API SERVICES
              </span>

              <h1 className="text-[3.84rem] sm:text-[4.56rem] font-extrabold leading-[1.02] tracking-[-0.02em] mb-[1.2rem]">
                <span className="text-slate-900">Recharge</span>{" "}
                <span className="text-[#14B8A6]">API</span>
              </h1>

              <p className="text-[1.38rem] font-bold text-slate-800 leading-snug mb-[1.44rem]">
                Fast, reliable mobile, DTH & FASTag recharge integration.
              </p>

              <p className="text-[1.176rem] text-slate-500 leading-relaxed mb-[1.92rem] max-w-[31.2rem]">
                The AbheePay Recharge API lets you integrate digital recharge
                services into your website, mobile app, retailer platform,
                fintech solution or enterprise software through a single
                integration — prepaid mobile recharge, DTH recharge, FASTag
                recharge and other supported digital recharge services.
              </p>
<div className="flex flex-wrap items-center gap-[0.86rem] mb-[1.92rem]">
  <Link
    to="/company/contact-us"
    className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.98rem]"
  >
    Get API Access
    <ArrowRight size={18} />
  </Link>

  {/* <Link
    to="/company/contact-us"
    className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-[#14B8A6] hover:text-[#0D9488] transition text-[0.98rem]"
  >
    Contact Sales
  </Link> */}
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
              <img src="/assets/image/services/ApiServices60.png" alt="AbheePay Recharge API dashboard for mobile, DTH and FASTag recharge integration" className="w-full max-w-[672px] rounded-[16.8px] shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[2.16rem] items-start">
          <div>
            <div className="w-[2.64rem] h-[3.6px] bg-[#14B8A6] mb-[0.96rem] rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[1.8rem]">Recharge Features</h2>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-[1.2rem]">
              {services.map((s, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="group bg-white border border-slate-200 rounded-[21.6px] p-[1.68rem] shadow-[0_2.4px_14.4px_rgba(15,23,42,0.04)] hover:border-[#14B8A6]/40 hover:shadow-[0_12px_36px_rgba(20,184,166,0.1)] transition-all duration-300">
                  <div className="w-[3.48rem] h-[3.48rem] rounded-[14.4px] bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-[1.08rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">{s.icon}</div>
                  <h3 className="font-bold text-[1.236rem] text-slate-900 mb-[0.48rem] leading-snug">{s.title}</h3>
                  <p className="text-slate-500 text-[1.08rem] leading-relaxed mb-[1.08rem]">{s.desc}</p>
                  <span className="inline-flex items-center justify-center w-[2.4rem] h-[2.4rem] rounded-full border border-slate-200 text-slate-400 group-hover:border-[#14B8A6] group-hover:text-[#14B8A6] transition-colors"><ArrowRight size={18} /></span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-[26.4px] p-[1.92rem] sm:p-[2.28rem] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1.2px, transparent 1.2px)", backgroundSize: "21.6px 21.6px" }}></div>

            <h3 className="relative z-10 text-white text-[1.62rem] font-extrabold mb-[1.56rem]">Why Recharge API?</h3>

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

      {/* ---------------- Built for Every Business ---------------- */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-slate-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[38rem] mx-auto mb-[2.4rem]">
            <div className="w-[2.64rem] h-[3.6px] bg-[#14B8A6] mb-[0.96rem] mx-auto rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.72rem]">
              Built for Every Business
            </h2>
            <p className="text-slate-500 text-[1.008rem] leading-relaxed">
              Whether you manage a few hundred recharge transactions or serve
              a large merchant network, the Recharge API is built to scale
              with your business.
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
              For API documentation, SDKs, Postman collections, sample
              requests and implementation guides, visit our{" "}
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

      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[3.6rem]">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative rounded-[24px] bg-slate-50 border border-slate-100 px-[1.8rem] sm:px-[2.4rem] py-[1.92rem] flex flex-col sm:flex-row items-center justify-between gap-[1.44rem] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: "radial-gradient(#14B8A6 0.84px, transparent 0.84px)", backgroundSize: "26.4px 26.4px", maskImage: "linear-gradient(to right, transparent 60%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 60%, black 100%)" }}></div>
            <div className="relative z-10 flex items-center gap-[1.2rem] text-center sm:text-left flex-col sm:flex-row">
              <span className="w-[3.6rem] h-[3.6rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center"><Rocket size={26} /></span>
              <div>
                <h3 className="font-extrabold text-[1.38rem] text-slate-900 mb-[0.24rem]">Integrate recharges in minutes</h3>
                <p className="text-slate-500 text-[1.104rem]">Provide instant top-ups to users with reliable operator routing.</p>
              </div>
            </div>
            <Link to="/developers/documentation" className="relative z-10 shrink-0"><button className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.104rem]">View API Documentation<ArrowRight size={19} /></button></Link>
          </div>
        </div>
      </section>

      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.8rem]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-[2.64rem]"><h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">Recharge Ecosystem</h2><div className="w-[3.12rem] h-[3.6px] bg-[#14B8A6] mx-auto rounded-full"></div></div>

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
              Expand your platform with other AbheePay APIs.
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
                Ready to Offer Digital Recharge Services?
              </h2>
              <p className="text-white/80 text-[1.008rem] leading-relaxed mb-[2.16rem]">
                Integrate the AbheePay Recharge API to provide fast and
                reliable recharge services through your website, mobile
                application or business platform — for fintech platforms,
                retailer networks, enterprise solutions and digital service
                portals alike.
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

export default RechargeAPI;