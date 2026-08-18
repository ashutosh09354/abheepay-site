
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Building2, Server, ShieldCheck, Headphones, LayoutGrid,
  ArrowRight, Landmark, Cpu, PlugZap, Users, Lock, BadgeCheck,
  LineChart, Boxes, KeySquare, Globe2, Wallet, ReceiptText,
  AlertTriangle, FileCheck2, Layers, Gauge, CreditCard, Code2,
  Store, Smartphone, LayoutDashboard, Network, Sparkles, ChevronDown,
  IndianRupee, Zap, ArrowLeftRight
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

// ---------------- Live fintech doodle overlay ----------------
// Hand-sketched "money is moving" layer: dashed flow tracks with pulsing
// dots gliding along them, plus small currency/transfer doodles rising and
// fading like little receipts printing. Purely decorative (aria-hidden).
const LiveFlowDoodles = () => {
  const path1 = "M 24 300 C 110 210, 170 250, 230 160 S 360 70, 400 44";
  const path2 = "M 46 66 C 130 112, 150 44, 224 100 S 340 220, 384 292";

  const risingDoodles = [
    { icon: <IndianRupee size={15} strokeWidth={2.25} />, left: "10%", delay: 0 },
    { icon: <Zap size={13} strokeWidth={2.25} />, left: "82%", delay: 1.6 },
    { icon: <ArrowLeftRight size={13} strokeWidth={2.25} />, left: "46%", delay: 3.1 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-2xl" aria-hidden="true">
      {/* sketchy dashed tracks — the "rails" money moves along */}
      <svg viewBox="0 0 420 320" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <path d={path1} fill="none" stroke="#5EEAD4" strokeWidth="1.5" strokeDasharray="1 8" strokeLinecap="round" opacity="0.55" />
        <path d={path2} fill="none" stroke="#5EEAD4" strokeWidth="1.5" strokeDasharray="1 8" strokeLinecap="round" opacity="0.4" />
      </svg>

      {/* pulsing dots gliding along the tracks, like live transactions settling */}
      <motion.div
        className="absolute w-[7px] h-[7px] rounded-full bg-[#5EEAD4]"
        style={{ offsetPath: `path('${path1}')`, boxShadow: "0 0 10px 2px rgba(94,234,212,0.65)" }}
        animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[5px] h-[5px] rounded-full bg-white"
        style={{ offsetPath: `path('${path2}')`, boxShadow: "0 0 8px 2px rgba(255,255,255,0.55)" }}
        animate={{ offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "linear", delay: 0.8 }}
      />

      {/* small doodle icons rising and fading, like receipts confirming */}
      {risingDoodles.map((d, i) => (
        <motion.div
          key={i}
          className="absolute bottom-6 text-[#5EEAD4]"
          style={{ left: d.left }}
          initial={{ y: 0, opacity: 0, rotate: -6 }}
          animate={{ y: [0, -130], opacity: [0, 0.9, 0], rotate: [-6, 6] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeOut", delay: d.delay }}
        >
          {d.icon}
        </motion.div>
      ))}
    </div>
  );
};

// small reusable "live" ping ring — sits behind an icon to signal activity
const PingRing = ({ className = "", color = "#14B8A6" }) => (
  <motion.span
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{ backgroundColor: color }}
    initial={{ opacity: 0.5, scale: 1 }}
    animate={{ opacity: [0.5, 0], scale: [1, 1.9] }}
    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
  />
);

// ---------------- Isometric "data hub" illustration ----------------
// Recreates the reference scene (raised platform, rising light column,
// floating dashboard panels, people on the deck) in the site's teal
// palette, with the beam pulsing, data rising through it, chart lines
// drawing themselves, and every panel + person gently floating.
const floatLoop = (delay = 0, dist = 8, dur = 3.2) => ({
  animate: { y: [0, -dist, 0] },
  transition: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
});

const MiniLineChart = ({ stroke = "#14B8A6" }) => (
  <motion.polyline
    points="4,34 16,24 28,28 40,14 52,18 64,4"
    fill="none"
    stroke={stroke}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray="90"
    animate={{ strokeDashoffset: [90, 0, 0, 90] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.8, 1] }}
  />
);

const MiniBarChart = () => {
  const heights = [10, 22, 14, 30, 20];
  return (
    <>
      {heights.map((h, i) => (
        <motion.rect
          key={i}
          x={4 + i * 13}
          width="8"
          rx="1.5"
          fill={i % 2 === 0 ? "#14B8A6" : "#5EEAD4"}
          initial={{ height: 0, y: 34 }}
          animate={{ height: h, y: 34 - h }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.15 }}
        />
      ))}
    </>
  );
};

const MiniWaveChart = () => (
  <motion.path
    d="M4,18 C14,4 22,32 32,18 S50,4 60,18"
    fill="none"
    stroke="#0D9488"
    strokeWidth="2.25"
    strokeLinecap="round"
    animate={{ d: ["M4,18 C14,4 22,32 32,18 S50,4 60,18", "M4,18 C14,32 22,4 32,18 S50,32 60,18", "M4,18 C14,4 22,32 32,18 S50,4 60,18"] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
  />
);

const Person = ({ x, y, delay = 0 }) => (
  <motion.g {...floatLoop(delay, 3, 2.6)} style={{ transformOrigin: `${x}px ${y}px` }}>
    <ellipse cx={x} cy={y + 26} rx="9" ry="3" fill="#0F172A" opacity="0.08" />
    <rect x={x - 5} y={y} width="10" height="17" rx="3" fill="#14B8A6" />
    <circle cx={x} cy={y - 6} r="5.5" fill="#0F172A" />
  </motion.g>
);

const IsoDataHub = () => (
  <div className="relative w-full max-w-[36rem] mx-auto aspect-[6/5]">
    <svg viewBox="0 0 600 500" className="w-full h-full" role="img" aria-label="Isometric illustration of a data platform with rising analytics beam, floating dashboards and people">
      <defs>
        <linearGradient id="beamGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0" />
          <stop offset="55%" stopColor="#5EEAD4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="baseTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
      </defs>

      {/* ---- base isometric platform (bottom tier) ---- */}
      <polygon points="300,300 460,368 300,436 140,368" fill="url(#baseTop)" />
      <polygon points="140,368 300,436 300,466 140,398" fill="#CBD5E1" />
      <polygon points="460,368 300,436 300,466 460,398" fill="#94A3B8" />

      {/* ---- upper deck (teal tier) ---- */}
      <polygon points="300,258 420,308 300,358 180,308" fill="#0D9488" />
      <polygon points="180,308 300,358 300,382 180,332" fill="#0B7A6D" />
      <polygon points="420,308 300,358 300,382 420,332" fill="#0A6659" />

      {/* recessed teal opening the beam rises from */}
      <ellipse cx="300" cy="308" rx="46" ry="20" fill="#04342C" />

      {/* ---- rising light beam ---- */}
      <motion.rect
        x="264" y="60" width="72" height="248"
        fill="url(#beamGrad)"
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={288 + i * 10}
          r="3.5"
          fill="#CFFAFE"
          initial={{ cy: 300, opacity: 0 }}
          animate={{ cy: [300, 80], opacity: [0, 0.9, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: i * 0.7 }}
        />
      ))}

      {/* ---- floating dashboard panels ---- */}
      <motion.g {...floatLoop(0, 7, 3)}>
        <rect x="60" y="96" width="150" height="96" rx="8" fill="#fff" stroke="#14B8A6" strokeOpacity="0.35" />
        <rect x="76" y="110" width="46" height="8" rx="2" fill="#E1F5EE" />
        <g transform="translate(72,140)"><MiniLineChart /></g>
        <circle cx="184" cy="118" r="10" fill="none" stroke="#14B8A6" strokeWidth="3" strokeDasharray="14 4" />
      </motion.g>

      <motion.g {...floatLoop(0.4, 6, 3.4)}>
        <rect x="392" y="80" width="150" height="72" rx="8" fill="#fff" stroke="#14B8A6" strokeOpacity="0.35" />
        <rect x="408" y="94" width="60" height="7" rx="2" fill="#E1F5EE" />
        <rect x="408" y="106" width="40" height="7" rx="2" fill="#E1F5EE" />
      </motion.g>

      <motion.g {...floatLoop(0.8, 8, 3.1)}>
        <rect x="404" y="168" width="122" height="84" rx="8" fill="#fff" stroke="#14B8A6" strokeOpacity="0.35" />
        <g transform="translate(412,196)"><MiniBarChart /></g>
      </motion.g>

      <motion.g {...floatLoop(1.2, 6, 2.9)}>
        <rect x="330" y="30" width="120" height="60" rx="8" fill="#fff" stroke="#14B8A6" strokeOpacity="0.35" />
        <g transform="translate(340,52)"><MiniWaveChart /></g>
      </motion.g>

      {/* ---- small floating step tiles, bottom-left ---- */}
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={80 - i * 22}
          y={392 + i * 22}
          width="34" height="8" rx="2"
          fill="#5EEAD4"
          opacity={0.5 - i * 0.08}
          {...floatLoop(i * 0.3, 5, 2.6)}
        />
      ))}

      {/* ---- people on the deck ---- */}
      <Person x={252} y={330} delay={0} />
      <Person x={352} y={330} delay={0.5} />
    </svg>
  </div>
);

const Enterprise = () => {
  // "Why Choose the AbheePay Enterprise Program?"
  const whyChoose = [
    {
      title: "Custom Development",
      desc: "Build technology solutions tailored to your business requirements and operational workflows.",
      icon: <Cpu size={42} strokeWidth={1.75} />
    },
    {
      title: "Payment Infrastructure",
      desc: "Implement secure payment solutions, digital collections, merchant management, and business payment systems through one trusted technology partner.",
      icon: <Landmark size={42} strokeWidth={1.75} />
    },
    {
      title: "API Integration",
      desc: "Connect your applications with payment systems, banking services, and third-party platforms using reliable API integrations.",
      icon: <PlugZap size={42} strokeWidth={1.75} />
    },
    {
      title: "Scalable Architecture",
      desc: "Build applications that support business growth, increasing transaction volumes, and expanding operations.",
      icon: <LineChart size={42} strokeWidth={1.75} />
    },
    {
      title: "Dedicated Project Team",
      desc: "Work with experienced business analysts, designers, developers, and project managers from planning through deployment.",
      icon: <Users size={42} strokeWidth={1.75} />
    },
    {
      title: "Long-Term Support",
      desc: "Receive implementation assistance, maintenance, upgrades, and technical support to keep your platform running efficiently.",
      icon: <Headphones size={42} strokeWidth={1.75} />
    },
  ];

  // Three pillars behind the Enterprise Program
  const solutions = [
    {
      title: "Payment Technology",
      desc: "Payment gateways, digital collections, merchant management and business banking, built on trusted infrastructure.",
      icon: <Landmark size={30} />
    },
    {
      title: "Custom Software Development",
      desc: "Websites, mobile apps, business portals and enterprise platforms built around your workflows.",
      icon: <Code2 size={30} />
    },
    {
      title: "API Integration",
      desc: "Connect payment gateways, banking services and third-party systems into your existing or new applications.",
      icon: <PlugZap size={30} />
    },
  ];

  // Full list of Enterprise offerings
  const capabilities = [
    { title: "Payment Gateway Integration", icon: <CreditCard size={24} /> },
    { title: "Business APIs", icon: <Code2 size={24} /> },
    { title: "White Label Payment Solutions", icon: <Layers size={24} /> },
    { title: "Merchant Management Platforms", icon: <Store size={24} /> },
    { title: "Business Banking Solutions", icon: <Landmark size={24} /> },
    { title: "Mobile App Development", icon: <Smartphone size={24} /> },
    { title: "Website Development", icon: <Globe2 size={24} /> },
    { title: "Custom Business Portals", icon: <LayoutDashboard size={24} /> },
    { title: "API Integration Services", icon: <PlugZap size={24} /> },
    { title: "Custom Software Development", icon: <Cpu size={24} /> },
    { title: "Payment Infrastructure Solutions", icon: <Network size={24} /> },
    { title: "Enterprise Payment Solutions", icon: <Building2 size={24} /> },
    { title: "Digital Transformation Consulting", icon: <Sparkles size={24} /> },
  ];

  const faqs = [
    { q: "Can AbheePay build custom software?", a: "Yes. We develop custom websites, mobile applications, payment platforms, merchant portals, business portals, API integrations, and enterprise technology solutions based on your business requirements." },
    { q: "Can solutions be customized?", a: "Yes. Every solution is designed to match your business processes, branding, operational needs, and growth objectives." },
    { q: "Do you provide API integration?", a: "Yes. We integrate payment gateways, payment APIs, banking services, and third-party systems into your existing or newly developed applications." },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div
      className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.215rem]"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <FontLoader />

      <Helmet>
        <title>Enterprise Solutions | Payments, APIs &amp; Custom Software | AbheePay</title>
        <meta
          name="description"
          content="AbheePay's Enterprise Program delivers payment gateway integration, business APIs, white label solutions, merchant platforms, and custom software development built around your business goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="/enterprise" />
        <meta property="og:title" content="Enterprise Solutions | Payments, APIs & Custom Software | AbheePay" />
        <meta
          property="og:description"
          content="AbheePay's Enterprise Program delivers payment gateway integration, business APIs, white label solutions, merchant platforms, and custom software development built around your business goals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/enterprise" />
      </Helmet>

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative bg-[#EFF6FF] overflow-hidden pt-[9rem] sm:pt-[11.25rem] md:pt-[9rem] pb-[6rem] sm:pb-[7.5rem] px-[0.912rem] sm:px-[1.518rem] lg:px-[3rem] xl:px-[5rem] 2xl:px-[7rem]">
        {/* fintech dot-grid mesh */}
        <div
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)",
            backgroundSize: "27px 27px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 0%, transparent 75%)",
          }}
        ></div>
        <div className="absolute top-[4.5rem] left-[1.5rem] w-[9rem] h-[9rem] border border-[#14B8A6]/25 rounded-2xl hidden sm:block"></div>
        <div className="absolute top-[8.25rem] left-[5.25rem] w-[9rem] h-[9rem] border border-[#14B8A6]/20 rounded-2xl hidden sm:block"></div>
        <div className="absolute top-[12rem] left-[0.75rem] w-[9rem] h-[9rem] border border-[#14B8A6]/15 rounded-2xl hidden sm:block"></div>
        <div className="absolute bottom-[3rem] left-[12rem] w-[7.5rem] h-[7.5rem] border border-[#14B8A6]/15 rounded-2xl hidden lg:block"></div>
        <div className="absolute bottom-[3rem] left-[19.5rem] w-[7.5rem] h-[7.5rem] border border-[#14B8A6]/10 rounded-2xl hidden lg:block"></div>

        <div className="max-w-[1920px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[3.75rem] lg:gap-[2.126rem] items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-[0.456rem] bg-white rounded-full shadow-sm px-[0.912rem] py-[0.456rem] text-[0.878rem] font-semibold text-[#0D9488] mb-[1.215rem]">
              <Building2 size={16.5} />
              For Businesses & Institutions
            </span>

            <h1 className="text-[2.25rem] sm:text-[2.85rem] md:text-[3.225rem] font-extrabold mb-[1.215rem] leading-[1.2] text-slate-900">
              Enterprise-Grade{" "}
              <span className="text-[#14B8A6]">Fintech Infrastructure</span> For Your Business
            </h1>

            <p className="text-[1.05rem] sm:text-[1.215rem] text-slate-500 mb-[2.126rem] max-w-lg mx-auto lg:mx-0">
              AbheePay delivers technology solutions that help businesses improve operations,
              automate processes, and accelerate digital transformation — every solution designed
              around your business goals, workflows, and operational requirements.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-[0.912rem] mb-[2.126rem]">
              <Link to="/contact">
                <button className="px-[1.823rem] py-[0.912rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.181rem]">
                  Talk to Our Team
                </button>
              </Link>
              <Link to="/contact">
                <button className="inline-flex items-center gap-[0.456rem] px-[1.823rem] py-[0.912rem] bg-transparent border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition text-[1.181rem]">
                  View Documentation
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>

            {/* fintech stat strip */}
            <div className="flex items-center justify-center lg:justify-start divide-x divide-slate-300/70">
              <div className="pr-[1.518rem]">
                <p className="text-[1.518rem] font-extrabold text-slate-900">99.95%</p>
                <p className="text-[0.81rem] text-slate-500">Platform Uptime</p>
              </div>
              <div className="px-[1.518rem]">
                <p className="text-[1.518rem] font-extrabold text-slate-900">120+</p>
                <p className="text-[0.81rem] text-slate-500">Enterprise Clients</p>
              </div>
              <div className="pl-[1.518rem]">
                <p className="text-[1.518rem] font-extrabold text-slate-900">4-6 Wks</p>
                <p className="text-[0.81rem] text-slate-500">Avg. Integration Time</p>
              </div>
            </div>
          </motion.div>

          {/* Right: hero illustration + floating fintech chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-[36rem] mx-auto rounded-2xl overflow-hidden shadow-xl bg-white border border-[#14B8A6]/15">
              <IsoDataHub />
              {/* animated "money is moving" doodle layer, sits on top of the illustration */}
              <LiveFlowDoodles />

              {/* live status tag, top-left of the console — blinking dot = something is happening */}
              <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-[0.35rem] bg-[#0F172A]/80 backdrop-blur-sm rounded-full px-[0.65rem] py-[0.3rem]">
                <span className="relative flex w-[7px] h-[7px]">
                  <PingRing className="inset-0 w-[7px] h-[7px]" color="#5EEAD4" />
                  <span className="relative w-[7px] h-[7px] rounded-full bg-[#5EEAD4]"></span>
                </span>
                <span className="text-[0.68rem] font-semibold tracking-wide text-white">LIVE</span>
              </div>
            </div>

            {/* floating uptime chip */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-[1.125rem] -left-[1.125rem] items-center gap-[0.608rem] bg-white rounded-xl shadow-lg px-[0.912rem] py-[0.608rem] z-20"
            >
              <span className="relative w-[2.126rem] h-[2.126rem] rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                <PingRing className="inset-0 w-full h-full" color="#10B981" />
                <Gauge size={19.5} className="relative" />
              </span>
              <div>
                <p className="text-[0.878rem] font-bold text-slate-800 leading-none">4.2M txns/day</p>
                <p className="text-[0.675rem] text-slate-400 mt-[0.152rem]">Processed at peak load</p>
              </div>
            </motion.div>

            {/* floating "verified & secure" badge */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-[1.125rem] -right-[1.125rem] items-center gap-[0.456rem] bg-[#0F172A] text-white rounded-xl shadow-lg px-[0.912rem] py-[0.608rem] z-20"
            >
              <BadgeCheck size={21} className="text-[#5EEAD4]" />
              <span className="text-[0.878rem] font-semibold">RBI &amp; IRDAI Verified</span>
            </motion.div>

            {/* service chips row */}
            <div className="mt-[2.126rem] flex flex-wrap items-center justify-center gap-[0.608rem] px-[0.75rem]">
              <span className="inline-flex items-center gap-[0.456rem] bg-white rounded-full shadow-md px-[0.912rem] py-[0.456rem] text-[0.878rem] font-semibold text-slate-700">
                <span className="w-[1.518rem] h-[1.518rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  <KeySquare size={16.5} />
                </span>
                API Banking
              </span>
              <span className="inline-flex items-center gap-[0.456rem] bg-white rounded-full shadow-md px-[0.912rem] py-[0.456rem] text-[0.878rem] font-semibold text-slate-700">
                <span className="w-[1.518rem] h-[1.518rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  <Globe2 size={16.5} />
                </span>
                White-Label
              </span>
              <span className="inline-flex items-center gap-[0.456rem] bg-white rounded-full shadow-md px-[0.912rem] py-[0.456rem] text-[0.878rem] font-semibold text-slate-700">
                <span className="w-[1.518rem] h-[1.518rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  <ShieldCheck size={16.5} />
                </span>
                Compliance
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Trust & Security Bar ---------------- */}
      <section className="bg-white border-b border-slate-100 py-[1.518rem] px-[0.912rem] sm:px-[1.518rem] lg:px-[3rem] xl:px-[5rem] 2xl:px-[7rem]">
        <div className="max-w-[1920px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-[1.215rem] text-center sm:text-left">
          {[
            { icon: <ShieldCheck size={24} />, label: "Bank-Grade Security" },
            { icon: <Lock size={24} />, label: "256-bit Encryption" },
            { icon: <BadgeCheck size={24} />, label: "RBI & IRDAI Compliant" },
            { icon: <Headphones size={24} />, label: "Dedicated Enterprise Support" },
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-center sm:justify-start gap-[0.608rem]">
              <span className="w-[2.58rem] h-[2.58rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                {t.icon}
              </span>
              <span className="text-[0.878rem] sm:text-[0.945rem] font-semibold text-slate-600">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Why Choose the Enterprise Program ---------------- */}
      <section className="py-[4.253rem] sm:py-[4.86rem] px-[0.912rem] sm:px-[1.518rem] lg:px-[3rem] xl:px-[5rem] 2xl:px-[7rem] bg-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-[72px]">
            <h2 className="text-[45px] sm:text-[54px] lg:text-[3rem] font-black tracking-[-0.03em] leading-tight text-slate-900 p-[6px]">
              Why Choose the AbheePay <span className="text-[#14B8A6]">Enterprise Program?</span>
            </h2>
            <p className="text-gray-500 text-[1.013rem] sm:text-[1.181rem] max-w-[864px] mx-auto mt-[0.912rem]">
              Our Enterprise Program combines payment technology, custom software development, and
              API integration to help organizations build secure, scalable, and future-ready
              digital solutions.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-[2.126rem] gap-y-[2.735rem]"
          >
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group bg-white border border-slate-200 rounded-[24px] p-9 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.12)] hover:border-[#14B8A6]/40 transition-all duration-300"
              >
                <div className="w-[84px] h-[84px] rounded-xl flex items-center justify-center text-[#14B8A6] mb-[18px] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-[24px] font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-[18px] leading-6 text-slate-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Three Pillars ---------------- */}
      <section className="pb-[3.645rem] px-[0.912rem] sm:px-[1.518rem] lg:px-[3rem] xl:px-[5rem] 2xl:px-[7rem] bg-white">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-[1.518rem] sm:text-[2.025rem] font-extrabold text-slate-900 mb-[0.305rem]">
            Enterprise Solutions,
          </h2>
          <p className="text-[1.518rem] sm:text-[2.025rem] font-extrabold text-[#14B8A6] mb-[1.215rem]">
            Built Around Your Business
          </p>
          <p className="text-gray-500 text-[1.013rem] sm:text-[1.181rem] mb-[2.126rem] max-w-[1008px]">
            AbheePay helps businesses improve operations, automate processes, and accelerate
            digital transformation through three connected pillars.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[0.912rem]">
            {solutions.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-[1.215rem] rounded-[18px] border border-gray-200 shadow-sm"
              >
                <span className="w-[2.58rem] h-[2.58rem] rounded-full bg-[#14B8A6] text-white flex items-center justify-center mb-[0.759rem]">
                  {cat.icon}
                </span>
                <h3 className="font-bold text-[1.125rem] text-slate-900 mb-[0.305rem]">{cat.title}</h3>
                <p className="text-gray-500 text-[1.013rem] leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Integration: 3 Easy Steps ---------------- */}
      <section className="pb-[3.645rem] sm:pb-[4.253rem] px-[0.912rem] sm:px-[1.518rem] lg:px-[3rem] xl:px-[5rem] 2xl:px-[7rem] bg-white">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-[2.025rem] overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.15)]">
          {/* left: steps */}
          <div className="bg-slate-50 p-[1.518rem] sm:p-[2.126rem]">
            <p className="text-[0.81rem] font-bold uppercase tracking-[0.2em] text-gray-400 mb-[0.456rem]">Integration</p>
            <h2 className="text-[1.518rem] sm:text-[1.823rem] font-extrabold text-slate-900 mb-[1.518rem]">
              Go Live in <br className="hidden sm:block" /> 3 Structured Steps
            </h2>

            <div className="space-y-0">
              {[
                { no: "01", title: "Consult & Scope", desc: "Our solutions team maps your use case to the right combination of APIs, rails and SLAs." },
                { no: "02", title: "Integrate in Sandbox", desc: "Build against our sandbox with full documentation, test credentials and hands-on engineering support." },
                { no: "03", title: "Go Live & Scale", desc: "Move to production with monitored rollout, then scale across new products and geographies over time." },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`py-[1.064rem] ${i === 1 ? "border-y border-[#14B8A6]" : "border-b border-slate-100"}`}
                >
                  <div className="flex items-start gap-[0.912rem]">
                    <span className="text-[1.125rem] font-extrabold text-[#14B8A6]">{s.no}</span>
                    <div>
                      <h3 className="font-bold text-[1.125rem] text-slate-900 mb-[0.152rem]">{s.title}</h3>
                      <p className="text-gray-500 text-[1.013rem] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right: enterprise dashboard mockup visual */}
          <div className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center p-[1.518rem] min-h-[24rem] overflow-hidden">
            {/* ambient doodle flow behind the mockup card */}
            <LiveFlowDoodles />

            <div className="relative z-20 w-full max-w-[19.5rem] bg-white rounded-[24px] shadow-2xl p-[1.064rem]">
              <p className="text-center text-[#14B8A6] font-extrabold text-[1.013rem] mb-[0.152rem]">INTEGRATION LIVE</p>
              <p className="text-center text-gray-400 text-[0.675rem] mb-[0.912rem]">
                Your production environment is connected <br /> to AbheePay's core rails
              </p>
              <div className="flex justify-between bg-slate-50 rounded-[12px] p-[0.608rem] mb-[0.759rem] text-[0.675rem]">
                <div>
                  <p className="text-gray-400">Environment</p>
                  <p className="font-bold text-slate-800">Production</p>
                </div>
                <div className="flex items-center gap-[0.305rem]">
                  <span>
                    <p className="text-gray-400">Status</p>
                    <p className="font-bold text-emerald-500">Connected</p>
                  </span>
                  <span className="relative flex w-[7px] h-[7px]">
                    <PingRing className="inset-0 w-[7px] h-[7px]" color="#10B981" />
                    <span className="relative w-[7px] h-[7px] rounded-full bg-emerald-500"></span>
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-slate-50 rounded-[12px] p-[0.608rem] mb-[0.759rem]">
                <div>
                  <p className="text-[0.608rem] text-gray-400">Monthly Settlement Volume</p>
                  <p className="text-[0.878rem] font-bold text-slate-800">₹42.6 Cr</p>
                </div>
                <svg viewBox="0 0 60 18" className="w-[4.5rem] h-[1.35rem] overflow-visible">
                  <polyline
                    points="0,15 10,13 20,14 30,8 40,10 50,4 60,3"
                    fill="none"
                    stroke="#14B8A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* traveling pulse along the mini sparkline — signals live data */}
                  <motion.circle
                    r="2.2"
                    fill="#14B8A6"
                    style={{ offsetPath: "path('M0,15 10,13 20,14 30,8 40,10 50,4 60,3')" }}
                    animate={{ offsetDistance: ["0%", "100%"] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>
              <button className="w-full bg-[#14B8A6] text-white text-[0.743rem] font-bold py-[0.608rem] rounded-[12px]">
                View API Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Enterprise Capabilities ---------------- */}
      <section className="py-[3.038rem] sm:py-[3.645rem] px-[0.912rem] sm:px-[1.518rem] lg:px-[3rem] xl:px-[5rem] 2xl:px-[7rem] bg-white">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[2.126rem] items-center">
          <div>
            <h2 className="text-[1.518rem] sm:text-[2.025rem] font-extrabold text-slate-900 mb-[0.608rem] leading-tight">
              Enterprise Capabilities <br /> Built for Scale
            </h2>
            <p className="text-gray-500 text-[1.013rem] sm:text-[1.181rem] mb-[1.215rem] max-w-[576px]">
              Mix and match modules as your business grows — every solution is designed around
              your business goals, workflows, and operational requirements.
            </p>
            <Link to="/contact">
              <button className="px-[1.518rem] py-[0.759rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.013rem]">
                Talk to Our Team
              </button>
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-[0.759rem]"
          >
            {capabilities.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                className="bg-white p-[0.759rem] rounded-[12px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-[0.531rem]"
              >
                <div className="w-[2.126rem] h-[2.126rem] shrink-0 bg-[#14B8A6]/10 rounded-[9px] flex items-center justify-center text-[#14B8A6]">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-[0.878rem] text-slate-700">{service.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="py-[3.645rem] sm:py-[4.253rem] px-[0.912rem] sm:px-[1.518rem] bg-slate-50">
        <div className="max-w-[864px] mx-auto">
          <h2 className="text-[1.518rem] sm:text-[2.025rem] font-extrabold text-slate-900 mb-[2.126rem] text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-[0.759rem]">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-[16px] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-[0.912rem] text-left px-[1.215rem] py-[1.064rem]"
                  >
                    <span className="font-semibold text-[1.013rem] text-slate-800">{f.q}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#14B8A6] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-[1.215rem] pb-[1.064rem] text-gray-500 text-[0.945rem] leading-relaxed">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Dark CTA Banner ----------------
      <section className="relative bg-[#0F172A] py-[3.645rem] sm:py-[4.557rem] px-[0.912rem] sm:px-[1.518rem] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:3.75rem_3.75rem]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4.5rem] h-[4.5rem] border-[3px] border-[#14B8A6]/60 rounded-2xl rotate-6"></div>

        <div className="relative z-10 max-w-[1008px] mx-auto pt-[4.5rem]">
          <h2 className="text-[1.823rem] sm:text-[2.228rem] font-extrabold text-white mb-[1.518rem] leading-tight">
            Let's Build Your <span className="text-[#14B8A6]">Enterprise Integration</span> Together
          </h2>
          <div className="flex items-center justify-center gap-[0.912rem]">
            <Link to="/contact">
              <button className="px-[1.518rem] py-[0.759rem] bg-[#14B8A6] text-white rounded-lg font-bold hover:bg-[#0D9488] transition text-[1.013rem]">
                Get Started
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-[1.518rem] py-[0.759rem] bg-transparent border border-white/30 text-white rounded-lg font-bold hover:bg-white/10 transition text-[1.013rem]">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Enterprise;