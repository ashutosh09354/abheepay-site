import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  QrCode, BarChart3, ShieldCheck, Boxes, SlidersHorizontal, Puzzle,
  Settings2, Code2, Headphones, Rocket, ArrowRight, Lock, Webhook,
  Infinity as InfinityIcon, Database, Fingerprint, ScanLine, CheckCircle2,
  Wallet, Smartphone, Store, Landmark, Building2, Globe2, FlaskConical,
  RefreshCcw, ScanQrCode, ReceiptText, UtensilsCrossed, Layers
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

// simple deterministic "QR-like" pattern, purely decorative
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
  url: "/api-marketplace/qr-api",
  title: "QR API for UPI QR Code Integration | AbheePay",
  description:
    "Integrate the AbheePay QR API to generate and manage Static and Dynamic QR Codes for secure UPI payment collection in websites, mobile apps, and business software.",
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

const QRAPI = () => {
  useSEO(SEO);

  // "Why Choose QRAPI?" services grid
  const services = [
    {
      title: "Static QR Code Generation",
      desc: "Generate permanent QR Codes that merchants can print and display for everyday payment collection.",
      icon: <QrCode size={31} />
    },
    {
      title: "Dynamic QR Code Generation",
      desc: "Create Dynamic QR Codes with predefined payment amounts, order details, or invoice references for faster, more accurate collection.",
      icon: <ReceiptText size={31} />
    },
    {
      title: "Real-Time Payment Notifications",
      desc: "Receive instant transaction updates through webhook notifications after successful QR payments.",
      icon: <BarChart3 size={31} />
    },
    {
      title: "QR Management",
      desc: "Generate, monitor, and manage multiple QR Codes from your application or business platform.",
      icon: <Layers size={31} />
    },
  ];

  // Teal "Why Choose QRAPI?" panel
  const whyChoose = [
    {
      title: "Secure API Integration",
      desc: "Integrate using developer-friendly REST APIs with secure authentication and reliable infrastructure.",
      icon: <Lock size={24} />
    },
    {
      title: "Sandbox Environment",
      desc: "Test your QR integration in a dedicated sandbox environment before moving to production.",
      icon: <FlaskConical size={24} />
    },
    {
      title: "Developer First",
      desc: "Well-documented APIs, SDKs, and Postman collections for seamless development.",
      icon: <Code2 size={24} />
    },
    {
      title: "Dedicated Support",
      desc: "Our team is here to help you integrate and grow.",
      icon: <Headphones size={24} />
    },
  ];

  const businesses = [
    { title: "Fintech Companies", icon: <Smartphone size={24} /> },
    { title: "Payment Service Providers", icon: <Wallet size={24} /> },
    { title: "Billing Software", icon: <ReceiptText size={24} /> },
    { title: "POS Software", icon: <ScanQrCode size={24} /> },
    { title: "E-commerce Platforms", icon: <Store size={24} /> },
    { title: "Mobile Applications", icon: <Smartphone size={24} /> },
    { title: "Retail Chains", icon: <Landmark size={24} /> },
    { title: "Restaurant Management Systems", icon: <UtensilsCrossed size={24} /> },
    { title: "ERP Solutions", icon: <Database size={24} /> },
    { title: "Enterprise Applications", icon: <Building2 size={24} /> },
  ];

  const integrationSteps = [
    { title: "Register for API access", desc: "Sign up to get started with the AbheePay QR API." },
    { title: "Complete business verification", desc: "Submit your business details for verification." },
    { title: "Receive your API credentials", desc: "Get your keys to authenticate API requests." },
    { title: "Integrate the QR API", desc: "Add the API into your application, website, or platform." },
    { title: "Test in the Sandbox environment", desc: "Validate your implementation before going live." },
    { title: "Go live", desc: "Start generating QR Codes for your merchants and customers." },
  ];

  const keyFeatures = [
    "REST API Integration",
    "Static QR Generation",
    "Dynamic QR Generation",
    "QR Management",
    "Real-Time Payment Status",
    "Webhook Notifications",
    "Secure Authentication",
    "Sandbox Environment",
    "Developer Documentation",
    "Dedicated Technical Support",
  ];

  const faqs = [
    {
      q: "What is the AbheePay QR API?",
      a: "The QR API enables businesses to generate and manage Static and Dynamic QR Codes for UPI payment collection through websites, mobile applications, and business software.",
    },
    {
      q: "What is the difference between Static and Dynamic QR Codes?",
      a: "A Static QR Code is fixed and suitable for general payment collection, while a Dynamic QR Code is generated with specific transaction details such as payment amount or order information.",
    },
    {
      q: "Who can use the QR API?",
      a: "The API is suitable for fintech companies, payment service providers, software companies, retailers, SaaS platforms, and enterprises that want to integrate QR payment functionality.",
    },
    {
      q: "Is a Sandbox environment available?",
      a: "Yes. Developers can test the QR API in a dedicated sandbox environment before moving to production.",
    },
    {
      q: "Where can I find technical documentation?",
      a: "Complete API documentation, SDKs, webhooks, Postman collections, and integration guides are available in the Developer Hub.",
    },
  ];

  const otherAPIs = [
    { title: "Payment Gateway API", icon: <Wallet size={22} /> },
    { title: "Payout API", icon: <RefreshCcw size={22} /> },
    { title: "BBPS API", icon: <ShieldCheck size={22} /> },
    { title: "Wallet API", icon: <Wallet size={22} /> },
    { title: "Recharge API", icon: <Smartphone size={22} /> },
    { title: "Aadhaar Verification API", icon: <Fingerprint size={22} /> },
  ];

  return (
    <div
      className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.458rem]"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <FontLoader />

      {/* ---------------- Hero Section ---------------- */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pt-[8.4rem] sm:pt-[9.6rem] pb-[2.4rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2.16rem] items-stretch">
            {/* Left: copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col justify-center"
            >
              <span className="inline-flex w-fit items-center gap-[0.6rem] bg-white border border-slate-200 rounded-full px-[1.094rem] py-[0.456rem] text-[0.96rem] font-bold tracking-[0.08em] text-slate-500 mb-[1.822rem]">
                <span className="w-[7px] h-[7px] rounded-full bg-[#14B8A6]"></span>
                OUR SERVICES
              </span>

              <h1 className="text-[3.84rem] sm:text-[4.56rem] font-extrabold leading-[1.02] tracking-[-0.02em] mb-[1.2rem]">
                <span className="text-slate-900">QR</span>{" "}
                <span className="text-[#14B8A6]">API</span>
              </h1>

              <p className="text-[1.38rem] font-bold text-slate-800 leading-snug mb-[1.44rem]">
                Generate. Collect. Track.
                <br />
                Seamless UPI payment collection through one API.
              </p>

              <p className="text-[1.176rem] text-slate-500 leading-relaxed mb-[1.92rem] max-w-[31.2rem]">
                The AbheePay QR API enables businesses to generate, manage,
                and monitor Static and Dynamic QR Codes through a secure API
                integration. Generate QR Codes for payment collection,
                receive real-time payment updates, and manage QR-based
                transactions from one platform.
              </p>
<div className="flex flex-wrap items-center gap-[0.96rem] mb-[2.16rem]">
  <Link
    to="/developers/documentation"
    className="inline-flex items-center gap-[0.6rem] px-[1.8rem] py-[1.02rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.104rem]"
  >
    Get API Access
    <ArrowRight size={19} />
  </Link>

  {/* <Link
    to="/contact-us"
    className="inline-flex items-center gap-[0.6rem] px-[1.8rem] py-[1.02rem] bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-[#14B8A6]/50 transition text-[1.104rem]"
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

            {/* Right: teal panel with phone mockup + floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-[29px] bg-gradient-to-br from-[#EAF7F5] to-[#DFF3F0] p-[2.16rem] sm:p-[2.64rem] overflow-hidden min-h-[31.2rem]"
            >
              <div
                className="absolute inset-0 opacity-[0.5] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#14B8A6 1px, transparent 1px)",
                  backgroundSize: "26px 26px",
                  maskImage: "radial-gradient(ellipse 65% 65% at 70% 20%, black 0%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 70% 20%, black 0%, transparent 75%)",
                }}
              ></div>

              <div className="relative z-10 flex items-center gap-[0.547rem] mb-[1.92rem]">
                <div className="w-[2.16rem] h-[2.16rem] rounded-md bg-[#14B8A6] flex items-center justify-center">
                  <QrCode size={17} className="text-white" />
                </div>
                <span className="text-slate-900 text-[1.14rem] font-extrabold tracking-tight">ABHEE<span className="text-[#14B8A6]">PAY</span></span>
              </div>

              <h2 className="relative z-10 text-[2.4rem] sm:text-[2.76rem] font-extrabold leading-none mb-[0.96rem]">
                <span className="text-slate-900">QR</span><span className="text-[#14B8A6]">API</span>
              </h2>
              <p className="relative z-10 text-slate-600 text-[1.08rem] font-semibold mb-[1.32rem] max-w-[15.6rem]">
                Static & Dynamic UPI QR Code API
              </p>

              <div className="relative z-10 space-y-[0.66rem] mb-[1.8rem]">
                {["Static & Dynamic QR", "Real-time Notifications", "Easy Integration", "Developer Friendly"].map((f, i) => (
                  <div key={i} className="flex items-center gap-[0.6rem]">
                    <span className="w-[1.38rem] h-[1.38rem] rounded-full bg-[#14B8A6]/15 text-[#14B8A6] flex items-center justify-center shrink-0">
                      <ScanLine size={13} />
                    </span>
                    <span className="text-[1.02rem] font-semibold text-slate-700">{f}</span>
                  </div>
                ))}
              </div>

              {/* phone mockup */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[1.44rem] sm:right-[2.4rem] bottom-[-1.2rem] w-[12.6rem] sm:w-[13.8rem] rotate-[6deg]"
              >
                <div className="bg-[#0B1220] rounded-[2.16rem] p-[0.48rem] shadow-2xl">
                  <div className="bg-white rounded-[1.68rem] overflow-hidden">
                    <div className="px-[0.84rem] pt-[0.72rem] pb-[0.36rem] flex items-center gap-[0.36rem]">
                      <Fingerprint size={12} className="text-[#14B8A6]" />
                      <span className="text-[0.66rem] font-extrabold text-slate-800">ABHEEPAY</span>
                    </div>
                    <div className="px-[0.84rem]">
                      <div className="bg-[#14B8A6] text-white text-[0.66rem] font-bold text-center rounded-[10px] py-[0.36rem] mb-[0.6rem]">
                        QR Code Generated
                      </div>
                      <div className="bg-white border border-slate-200 rounded-[12px] p-[0.6rem] mb-[0.48rem]">
                        <div
                          className="grid gap-[1px] mx-auto"
                          style={{ gridTemplateColumns: "repeat(13, 1fr)", width: "100%" }}
                        >
                          {qrCells.map((c, i) => (
                            <span
                              key={i}
                              className={`aspect-square rounded-[1px] ${c ? "bg-[#0B1220]" : "bg-transparent"}`}
                            ></span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[0.6rem] text-slate-400 text-center mb-[0.6rem] flex items-center justify-center gap-[0.18rem]">
                        <ScanLine size={11} /> Scan to Pay
                      </p>
                      <div className="flex items-center justify-center gap-[0.36rem] pb-[0.72rem] flex-wrap">
                        {["UPI", "BHIM", "Paytm", "PhonePe"].map((p, i) => (
                          <span key={i} className="text-[0.504rem] font-bold text-slate-500 bg-slate-50 rounded-[4px] px-[0.3rem] py-[0.12rem]">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* floating icon badges */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute top-[1.92rem] right-[1.44rem] w-[3.84rem] h-[3.84rem] rounded-[17px] bg-white shadow-lg items-center justify-center text-[#14B8A6] z-20"
              >
                <QrCode size={24} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute top-[7.68rem] right-[0.72rem] w-[3.84rem] h-[3.84rem] rounded-[17px] bg-white shadow-lg items-center justify-center text-[#14B8A6] z-20"
              >
                <BarChart3 size={24} />
              </motion.div>
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute top-[13.44rem] right-[1.44rem] w-[3.84rem] h-[3.84rem] rounded-[17px] bg-white shadow-lg items-center justify-center text-[#14B8A6] z-20"
              >
                <ShieldCheck size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- Why Choose QRAPI ---------------- */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-white">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[2.16rem] items-start">
          {/* Left: services grid */}
          <div>
            <div className="w-[2.64rem] h-[4px] bg-[#14B8A6] mb-[0.96rem] rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.72rem]">
              Why Choose AbheePay QR API?
            </h2>
            <p className="text-slate-500 text-[1.14rem] mb-[1.8rem] max-w-[43.2rem]">
              The AbheePay QR API helps businesses integrate QR payment capabilities quickly while providing a reliable and secure payment experience.
            </p>

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
                  className="group bg-white border border-slate-200 rounded-[22px] p-[1.68rem] shadow-[0_2px_14px_rgba(15,23,42,0.04)] hover:border-[#14B8A6]/40 hover:shadow-[0_12px_36px_rgba(20,184,166,0.1)] transition-all duration-300"
                >
                  <div className="w-[3.48rem] h-[3.48rem] rounded-[14px] bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-[1.08rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
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

          {/* Right: teal "Why Choose QRAPI?" panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-[26px] p-[1.92rem] sm:p-[2.28rem] overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            ></div>

            <h3 className="relative z-10 text-white text-[1.62rem] font-extrabold mb-[1.56rem]">
              Why Choose QRAPI?
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
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.64rem]">
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.72rem]">Built for Every Business</h2>
            <p className="text-slate-500 text-[1.14rem] max-w-[43.2rem] mx-auto">
              Whether you are managing one merchant or thousands, the QR API helps you deliver a fast and secure UPI payment experience.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[1.08rem]"
          >
            {businesses.map((b, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center gap-[0.84rem] bg-white border border-slate-200 rounded-[17px] px-[1.2rem] py-[1.08rem]">
                <span className="w-[2.76rem] h-[2.76rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">{b.icon}</span>
                <p className="font-semibold text-slate-800 text-[1.056rem] leading-snug">{b.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Integration Overview ---------------- */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-white">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[2.4rem] items-start">
          <div>
            <div className="w-[2.64rem] h-[4px] bg-[#14B8A6] mb-[0.96rem] rounded-full"></div>
            <h2 className="text-[1.92rem] sm:text-[2.22rem] font-extrabold text-slate-900 mb-[0.72rem]">Integration Overview</h2>
            <p className="text-slate-500 text-[1.14rem] mb-[2.16rem] max-w-[33.6rem]">
              Getting started is simple. For complete implementation guides, SDKs, Postman collections, and API documentation, visit our Developer Hub.
            </p>
            <button className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.96rem] bg-white border border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-[#14B8A6]/50 transition text-[1.08rem]">
              Visit Developer Hub<ArrowRight size={19} />
            </button>
          </div>

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-[1.2rem]"
          >
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

      {/* ---------------- Key Features ---------------- */}
      <section className="py-[4.2rem] px-[1.094rem] sm:px-[1.822rem] bg-slate-50">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.64rem]">
            <h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">Key Features</h2>
            <div className="w-[3.12rem] h-[4px] bg-[#14B8A6] mx-auto rounded-full"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.08rem] max-w-[1080px] mx-auto"
          >
            {keyFeatures.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-center gap-[0.72rem] bg-white border border-slate-200 rounded-[14px] px-[1.2rem] py-[0.96rem]">
                <CheckCircle2 size={22} className="text-[#14B8A6] shrink-0" />
                <p className="font-semibold text-slate-800 text-[1.02rem]">{f}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA strip ---------------- */}
      <section className="px-[1.094rem] sm:px-[1.822rem] py-[3.6rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="relative rounded-[24px] bg-slate-50 border border-slate-100 px-[1.8rem] sm:px-[2.4rem] py-[1.92rem] flex flex-col sm:flex-row items-center justify-between gap-[1.44rem] overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#14B8A6 1px, transparent 1px)",
                backgroundSize: "26px 26px",
                maskImage: "linear-gradient(to right, transparent 60%, black 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 60%, black 100%)",
              }}
            ></div>
            <div className="relative z-10 flex items-center gap-[1.2rem] text-center sm:text-left flex-col sm:flex-row">
              <span className="w-[3.6rem] h-[3.6rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                <Rocket size={26} />
              </span>
              <div>
                <h3 className="font-extrabold text-[1.38rem] text-slate-900 mb-[0.24rem]">
                  Ready to power your business with QRAPI?
                </h3>
                <p className="text-slate-500 text-[1.104rem]">
                  Start generating, tracking, and managing QR codes at scale with AbheePay.
                </p>
              </div>
            </div>
            <Link to="/developers/documentation" className="relative z-10 shrink-0">
              <button className="inline-flex items-center gap-[0.6rem] px-[1.68rem] py-[0.9rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.104rem]">
                View API Documentation
                <ArrowRight size={19} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.8rem]">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-[2.64rem]">
            <h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">Frequently Asked Questions</h2>
            <div className="w-[3.12rem] h-[4px] bg-[#14B8A6] mx-auto rounded-full"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-[1.08rem]"
          >
            {faqs.map((f, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white border border-slate-200 rounded-[17px] px-[1.56rem] py-[1.32rem]">
                <p className="font-bold text-slate-900 text-[1.14rem] mb-[0.42rem]">{f.q}</p>
                <p className="text-slate-500 text-[1.056rem] leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Explore Other APIs ---------------- */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[4.8rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.64rem]">
            <h2 className="text-[1.62rem] font-extrabold text-slate-900 mb-[0.6rem]">Explore Other APIs</h2>
            <p className="text-slate-500 text-[1.08rem]">Expand your payment platform with other AbheePay APIs.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[1.08rem]"
          >
            {otherAPIs.map((a, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -3 }} className="flex flex-col items-center text-center gap-[0.72rem] bg-white border border-slate-200 rounded-[17px] px-[1.2rem] py-[1.56rem] hover:border-[#14B8A6]/40 transition-colors">
                <span className="w-[3.12rem] h-[3.12rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">{a.icon}</span>
                <p className="font-semibold text-slate-800 text-[0.984rem] leading-snug">{a.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className="px-[1.094rem] sm:px-[1.822rem] pb-[6rem]">
        <div className="max-w-[1536px] mx-auto">
          <div className="relative rounded-[31px] bg-gradient-to-br from-[#14B8A6] to-[#0D9488] px-[2.16rem] sm:px-[3.6rem] py-[3.6rem] text-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            ></div>
            <h2 className="relative z-10 text-white text-[2.04rem] sm:text-[2.4rem] font-extrabold mb-[0.84rem]">Ready to Integrate QR Payments?</h2>
            <p className="relative z-10 text-white/85 text-[1.176rem] max-w-[43.2rem] mx-auto mb-[2.16rem]">
              Whether you're developing a fintech platform, billing software, retail application, or enterprise solution, our API helps you generate QR Codes, collect UPI payments, and manage transactions through one reliable platform.
            </p>
<div className="relative z-10 flex flex-wrap items-center justify-center gap-[1.08rem]">
  {/* <Link
    to="/api-access"
    className="inline-flex items-center gap-[0.6rem] px-[1.92rem] py-[1.08rem] bg-white text-[#0D9488] rounded-lg font-bold hover:bg-slate-100 transition text-[1.14rem]"
  >
    Request API Access
    <ArrowRight size={19} />
  </Link> */}

  <Link
    to="/company/contact-us"
    className="inline-flex items-center gap-[0.6rem] px-[1.92rem] py-[1.08rem] bg-white/10 border border-white/40 text-white rounded-lg font-bold hover:bg-white/20 transition text-[1.14rem]"
  >
    Talk to Our API Experts
  </Link>
</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QRAPI;