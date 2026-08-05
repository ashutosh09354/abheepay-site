import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  Fingerprint, MessageSquareText, UserCheck, ScanFace, QrCode,
  ShieldCheck, Zap, Wifi, Code2, ArrowRight,
  CheckCircle2, Lock, BadgeCheck
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
      icon: <MessageSquareText size={26} />
    },
    {
      title: "Demographic Authentication",
      desc: "Match name, date of birth, gender and address against UIDAI records in real time.",
      icon: <UserCheck size={26} />
    },
    {
      title: "Biometric Authentication",
      desc: "Fingerprint & iris-based verification for BC outlets, kiosks and physical onboarding points.",
      icon: <ScanFace size={26} />
    },
    {
      title: "Offline Aadhaar XML & QR",
      desc: "Verify identity using masked Aadhaar XML or QR code, with no live UIDAI server call needed.",
      icon: <QrCode size={26} />
    },
  ];

  // Teal "Why Choose AbheePay?" panel
  const whyChoose = [
    {
      title: "UIDAI-compliant infrastructure",
      desc: "Built to UIDAI data-handling and consent standards, end to end.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Real-time verification",
      desc: "Sub-second responses even at high onboarding volumes.",
      icon: <Zap size={20} />
    },
    {
      title: "Masked & encrypted Aadhaar data",
      desc: "Numbers are masked at capture and encrypted at rest and in transit.",
      icon: <Lock size={20} />
    },
    {
      title: "Simple plug-and-play integration",
      desc: "Clear docs, sandbox keys and SDKs to go live in days, not months.",
      icon: <Code2 size={20} />
    },
  ];

  return (
    <div
      className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.215rem]"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <FontLoader />

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative bg-white overflow-hidden pt-[7.5rem] sm:pt-[8.5rem] pb-[3.5rem] px-[0.912rem] sm:px-[1.518rem]">
        {/* soft radial backdrop, right side, echoing the reference's pale blob */}
        <div
          className="absolute -top-[6rem] right-[-8rem] w-[36rem] h-[36rem] rounded-full pointer-events-none hidden lg:block"
          style={{ background: "radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)" }}
        ></div>

        <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-[3rem] lg:gap-[2.5rem] items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="inline-flex items-center gap-[0.5rem] bg-[#14B8A6]/10 rounded-full px-[0.912rem] py-[0.38rem] text-[0.8rem] font-bold tracking-[0.08em] text-[#0D9488] mb-[1.518rem]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#14B8A6]"></span>
              OUR SERVICES
            </span>

            <h1 className="text-[2.6rem] sm:text-[3.2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-900 mb-[1.518rem]">
              Aadhaar
              <br />
              <span className="text-[#14B8A6]">Verification API</span>
            </h1>

            <p className="text-[1.05rem] text-slate-500 leading-relaxed mb-[1.823rem] max-w-[34rem]">
              We give fintech and BC platforms a single, UIDAI-aligned layer
              for identity — OTP eKYC, demographic checks, biometric
              authentication and offline XML/QR verification, backed by
              masked storage and audit-ready logs.
            </p>

            <div className="flex items-center gap-[0.608rem]">
              <div className="w-[2.126rem] h-[2.126rem] rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
                <Fingerprint size={18} />
              </div>
              <p className="text-[0.9rem] text-slate-500">
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
            <div className="relative rounded-[20px] bg-[#0B1220] shadow-2xl p-[1.4rem] sm:p-[1.8rem] overflow-hidden">
              {/* faint dot mesh on the dark panel */}
              <div
                className="absolute inset-0 opacity-[0.25] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#14B8A6 0.6px, transparent 0.6px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="relative z-10 flex items-center gap-[0.456rem] mb-[1.4rem]">
                <div className="w-[1.6rem] h-[1.6rem] rounded-md bg-[#14B8A6] flex items-center justify-center">
                  <Fingerprint size={14} className="text-[#0B1220]" />
                </div>
                <span className="text-white text-[0.9rem] font-extrabold tracking-tight">ABHEE<span className="text-[#14B8A6]">PAY</span></span>
              </div>

              <p className="relative z-10 text-white text-[1.7rem] sm:text-[1.95rem] font-extrabold leading-tight mb-[0.3rem]">
                AADHAAR
              </p>
              <p className="relative z-10 text-[#14B8A6] text-[1.7rem] sm:text-[1.95rem] font-extrabold leading-tight mb-[0.9rem]">
                API SERVICES
              </p>
              <p className="relative z-10 text-slate-400 text-[0.85rem] mb-[1.1rem] max-w-[16rem]">
                Verify identity in real time with secure, UIDAI-aligned APIs.
              </p>

              <div className="relative z-10 grid grid-cols-2 gap-x-[1rem] gap-y-[0.4rem] mb-[1.3rem] text-[0.78rem] text-slate-300">
                {["OTP eKYC", "Biometric", "Demographic", "Offline XML"].map((f, i) => (
                  <span key={i} className="flex items-center gap-[0.35rem]">
                    <CheckCircle2 size={13} className="text-[#14B8A6]" />
                    {f}
                  </span>
                ))}
              </div>

              {/* mini "dashboard" card with stats + sparkline */}
              <div className="relative z-10 bg-white/[0.04] border border-white/10 rounded-[14px] p-[1rem] mb-[1.1rem]">
                <div className="grid grid-cols-3 gap-[0.6rem] mb-[0.8rem]">
                  <div>
                    <p className="text-white text-[1.05rem] font-bold leading-none">18,940</p>
                    <p className="text-slate-400 text-[0.68rem] mt-[0.25rem]">eKYC Today</p>
                  </div>
                  <div>
                    <p className="text-white text-[1.05rem] font-bold leading-none">99.2%</p>
                    <p className="text-slate-400 text-[0.68rem] mt-[0.25rem]">Success Rate</p>
                  </div>
                  <div>
                    <p className="text-white text-[1.05rem] font-bold leading-none">0.8s</p>
                    <p className="text-slate-400 text-[0.68rem] mt-[0.25rem]">Avg. Response</p>
                  </div>
                </div>
                <svg viewBox="0 0 220 40" className="w-full h-[2.5rem]">
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
              <div className="relative z-10 grid grid-cols-2 gap-[0.7rem] text-[0.72rem] text-slate-300">
                <span className="flex items-center gap-[0.35rem]"><ShieldCheck size={14} className="text-[#14B8A6]" /> UIDAI Aligned</span>
                <span className="flex items-center gap-[0.35rem]"><Zap size={14} className="text-[#14B8A6]" /> Sub-second Response</span>
                <span className="flex items-center gap-[0.35rem]"><Wifi size={14} className="text-[#14B8A6]" /> 99.9% Uptime</span>
                <span className="flex items-center gap-[0.35rem]"><Code2 size={14} className="text-[#14B8A6]" /> Developer Friendly</span>
              </div>
            </div>

            {/* floating phone card, overlapping the panel */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block absolute -bottom-[1.5rem] -right-[1.2rem] w-[9.5rem] bg-white rounded-[16px] shadow-xl p-[0.7rem] z-20"
            >
              <div className="flex items-center gap-[0.3rem] mb-[0.5rem]">
                <BadgeCheck size={14} className="text-[#14B8A6]" />
                <p className="text-[0.62rem] font-bold text-slate-700">Verification Success</p>
              </div>
              <p className="text-[0.72rem] text-slate-400 mb-[0.15rem]">Aadhaar (masked)</p>
              <p className="text-[0.82rem] font-bold text-slate-800 mb-[0.5rem]">XXXX XXXX 4821</p>
              <div className="bg-emerald-50 text-emerald-600 text-[0.68rem] font-semibold rounded-[8px] px-[0.5rem] py-[0.3rem] text-center">
                Verified ✓
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Our Services + Why Choose ---------------- */}
      <section className="py-[3.5rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[1.8rem] items-start">
          {/* Left: services grid */}
          <div>
            <div className="w-[2.2rem] h-[3px] bg-[#14B8A6] mb-[0.8rem] rounded-full"></div>
            <h2 className="text-[1.6rem] sm:text-[1.85rem] font-extrabold text-slate-900 mb-[1.5rem]">
              Our Services
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem]"
            >
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-white border border-slate-200 rounded-[18px] p-[1.4rem] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:border-[#14B8A6]/40 hover:shadow-[0_10px_30px_rgba(20,184,166,0.1)] transition-all duration-300"
                >
                  <div className="w-[2.9rem] h-[2.9rem] rounded-[12px] bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-[0.9rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-[1.03rem] text-slate-900 mb-[0.4rem] leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-[0.9rem] leading-relaxed mb-[0.9rem]">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center justify-center w-[2rem] h-[2rem] rounded-full border border-slate-200 text-slate-400 group-hover:border-[#14B8A6] group-hover:text-[#14B8A6] transition-colors">
                    <ArrowRight size={15} />
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
            className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-[22px] p-[1.6rem] sm:p-[1.9rem] overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            ></div>

            <h3 className="relative z-10 text-white text-[1.35rem] font-extrabold mb-[1.3rem]">
              Why Choose AbheePay?
            </h3>

            <div className="relative z-10 space-y-[1.15rem]">
              {whyChoose.map((w, i) => (
                <div key={i} className="flex items-start gap-[0.75rem]">
                  <span className="w-[2.3rem] h-[2.3rem] shrink-0 rounded-full bg-white/15 text-white flex items-center justify-center">
                    {w.icon}
                  </span>
                  <div>
                    <p className="text-white font-bold text-[0.95rem] leading-snug mb-[0.15rem]">{w.title}</p>
                    <p className="text-white/75 text-[0.82rem] leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- CTA strip ---------------- */}
      <section className="px-[0.912rem] sm:px-[1.518rem] pb-[3.5rem]">
        <div className="max-w-[1280px] mx-auto">
          <div
            className="relative rounded-[20px] bg-slate-50 border border-slate-100 px-[1.5rem] sm:px-[2rem] py-[1.6rem] flex flex-col sm:flex-row items-center justify-between gap-[1.2rem] overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)",
                backgroundSize: "22px 22px",
                maskImage: "linear-gradient(to right, transparent 60%, black 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 60%, black 100%)",
              }}
            ></div>
            <div className="relative z-10 flex items-center gap-[1rem] text-center sm:text-left flex-col sm:flex-row">
              <span className="w-[3rem] h-[3rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                <Fingerprint size={22} />
              </span>
              <div>
                <h3 className="font-extrabold text-[1.15rem] text-slate-900 mb-[0.2rem]">
                  Ready to verify your customers?
                </h3>
                <p className="text-slate-500 text-[0.92rem]">
                  Explore our services and find the right verification solution that fits your needs.
                </p>
              </div>
            </div>
            <Link to="/services" className="relative z-10 shrink-0">
              <button className="inline-flex items-center gap-[0.5rem] px-[1.4rem] py-[0.75rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.92rem]">
                Back to Services
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AadhaarAPI;