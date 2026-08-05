import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  QrCode, BarChart3, ShieldCheck, Boxes, SlidersHorizontal, Puzzle,
  Settings2, Code2, Headphones, Rocket, ArrowRight, Lock, Webhook,
  Infinity as InfinityIcon, Database, Fingerprint, ScanLine
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

const QRAPI = () => {
  // "Our QRAPI Services"
  const services = [
    {
      title: "Dynamic QR Code Generation",
      desc: "Generate static or dynamic QR codes with custom data, amount, expiry & more.",
      icon: <QrCode size={26} />
    },
    {
      title: "Real-time Tracking & Analytics",
      desc: "Track scans in real time with insights on location, device, time & more.",
      icon: <BarChart3 size={26} />
    },
    {
      title: "Easy API Integration",
      desc: "Developer-friendly REST APIs with easy integration and comprehensive documentation.",
      icon: <Puzzle size={26} />
    },
    {
      title: "Custom Branding",
      desc: "Add your logo, colors, and brand identity to every QR code you generate.",
      icon: <SlidersHorizontal size={26} />
    },
  ];

  // Teal "Why Choose QRAPI?" panel
  const whyChoose = [
    {
      title: "Scalable Infrastructure",
      desc: "Built to handle millions of QR code requests with ease.",
      icon: <Boxes size={20} />
    },
    {
      title: "Secure & Reliable",
      desc: "Enterprise-grade security with 99.9% uptime and data protection.",
      icon: <Settings2 size={20} />
    },
    {
      title: "Developer First",
      desc: "Well-documented APIs, SDKs, and sandbox for seamless development.",
      icon: <Code2 size={20} />
    },
    {
      title: "Dedicated Support",
      desc: "Our team is here to help you integrate and grow.",
      icon: <Headphones size={20} />
    },
  ];

  // "More With QRAPI" bottom row
  const more = [
    {
      title: "Secure & Encrypted",
      desc: "All QR codes and data are encrypted and protected with industry-standard security.",
      icon: <Lock size={22} />
    },
    {
      title: "Real-time Webhooks",
      desc: "Get instant notifications for every scan and transaction via webhooks.",
      icon: <Webhook size={22} />
    },
    {
      title: "Unlimited Possibilities",
      desc: "Create QR codes for payments, collections, tickets, events, and more.",
      icon: <InfinityIcon size={22} />
    },
    {
      title: "Detailed Reports",
      desc: "Access detailed reports and analytics to monitor performance and growth.",
      icon: <Database size={22} />
    },
  ];

  return (
    <div
      className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.215rem]"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <FontLoader />

      {/* ---------------- Hero Section ---------------- */}
      <section className="px-[0.912rem] sm:px-[1.518rem] pt-[7rem] sm:pt-[8rem] pb-[2rem]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.8rem] items-stretch">
            {/* Left: copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col justify-center"
            >
              <span className="inline-flex w-fit items-center gap-[0.5rem] bg-white border border-slate-200 rounded-full px-[0.912rem] py-[0.38rem] text-[0.8rem] font-bold tracking-[0.08em] text-slate-500 mb-[1.518rem]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#14B8A6]"></span>
                OUR SERVICES
              </span>

              <h1 className="text-[3.2rem] sm:text-[3.8rem] font-extrabold leading-[1.02] tracking-[-0.02em] mb-[1rem]">
                <span className="text-slate-900">QR</span>{" "}
                <span className="text-[#14B8A6]">API</span>
              </h1>

              <p className="text-[1.15rem] font-bold text-slate-800 leading-snug mb-[1.2rem]">
                Generate. Personalize. Track.
                <br />
                All through one powerful API.
              </p>

              <p className="text-[0.98rem] text-slate-500 leading-relaxed mb-[1.6rem] max-w-[26rem]">
                QR API by AbheePay empowers businesses to generate dynamic QR
                codes, automate workflows, and track performance in real
                time. Built for developers, designed for scale.
              </p>

              <div className="flex items-center gap-[0.608rem]">
                <div className="w-[2.126rem] h-[2.126rem] rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
                  <QrCode size={16} />
                </div>
                <p className="text-[0.9rem] text-slate-500">
                  <span className="font-semibold text-slate-700">Abheepay Team</span> &nbsp;•&nbsp; 2026
                </p>
              </div>
            </motion.div>

            {/* Right: teal panel with phone mockup + floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-[24px] bg-gradient-to-br from-[#EAF7F5] to-[#DFF3F0] p-[1.8rem] sm:p-[2.2rem] overflow-hidden min-h-[26rem]"
            >
              <div
                className="absolute inset-0 opacity-[0.5] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)",
                  backgroundSize: "22px 22px",
                  maskImage: "radial-gradient(ellipse 65% 65% at 70% 20%, black 0%, transparent 75%)",
                  WebkitMaskImage: "radial-gradient(ellipse 65% 65% at 70% 20%, black 0%, transparent 75%)",
                }}
              ></div>

              <div className="relative z-10 flex items-center gap-[0.456rem] mb-[1.6rem]">
                <div className="w-[1.8rem] h-[1.8rem] rounded-md bg-[#14B8A6] flex items-center justify-center">
                  <QrCode size={14} className="text-white" />
                </div>
                <span className="text-slate-900 text-[0.95rem] font-extrabold tracking-tight">ABHEE<span className="text-[#14B8A6]">PAY</span></span>
              </div>

              <h2 className="relative z-10 text-[2rem] sm:text-[2.3rem] font-extrabold leading-none mb-[0.8rem]">
                <span className="text-slate-900">QR</span><span className="text-[#14B8A6]">API</span>
              </h2>
              <p className="relative z-10 text-slate-600 text-[0.9rem] font-semibold mb-[1.1rem] max-w-[13rem]">
                Powerful QR Code Generation API
              </p>

              <div className="relative z-10 space-y-[0.55rem] mb-[1.5rem]">
                {["Dynamic QR Codes", "Real-time Tracking", "Easy Integration", "Developer Friendly"].map((f, i) => (
                  <div key={i} className="flex items-center gap-[0.5rem]">
                    <span className="w-[1.15rem] h-[1.15rem] rounded-full bg-[#14B8A6]/15 text-[#14B8A6] flex items-center justify-center shrink-0">
                      <ScanLine size={11} />
                    </span>
                    <span className="text-[0.85rem] font-semibold text-slate-700">{f}</span>
                  </div>
                ))}
              </div>

              {/* phone mockup */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[1.2rem] sm:right-[2rem] bottom-[-1rem] w-[10.5rem] sm:w-[11.5rem] rotate-[6deg]"
              >
                <div className="bg-[#0B1220] rounded-[1.8rem] p-[0.4rem] shadow-2xl">
                  <div className="bg-white rounded-[1.4rem] overflow-hidden">
                    <div className="px-[0.7rem] pt-[0.6rem] pb-[0.3rem] flex items-center gap-[0.3rem]">
                      <Fingerprint size={10} className="text-[#14B8A6]" />
                      <span className="text-[0.55rem] font-extrabold text-slate-800">ABHEEPAY</span>
                    </div>
                    <div className="px-[0.7rem]">
                      <div className="bg-[#14B8A6] text-white text-[0.55rem] font-bold text-center rounded-[8px] py-[0.3rem] mb-[0.5rem]">
                        QR Code Generated
                      </div>
                      <div className="bg-white border border-slate-200 rounded-[10px] p-[0.5rem] mb-[0.4rem]">
                        <div
                          className="grid gap-[1px] mx-auto"
                          style={{ gridTemplateColumns: "repeat(13, 1fr)", width: "100%" }}
                        >
                          {qrCells.map((c, i) => (
                            <span
                              key={i}
                              className={`aspect-square rounded-[0.5px] ${c ? "bg-[#0B1220]" : "bg-transparent"}`}
                            ></span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[0.5rem] text-slate-400 text-center mb-[0.5rem] flex items-center justify-center gap-[0.15rem]">
                        <ScanLine size={9} /> Scan to Pay
                      </p>
                      <div className="flex items-center justify-center gap-[0.3rem] pb-[0.6rem] flex-wrap">
                        {["UPI", "BHIM", "Paytm", "PhonePe"].map((p, i) => (
                          <span key={i} className="text-[0.42rem] font-bold text-slate-500 bg-slate-50 rounded-[3px] px-[0.25rem] py-[0.1rem]">
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
                className="hidden sm:flex absolute top-[1.6rem] right-[1.2rem] w-[3.2rem] h-[3.2rem] rounded-[14px] bg-white shadow-lg items-center justify-center text-[#14B8A6] z-20"
              >
                <QrCode size={20} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute top-[6.4rem] right-[0.6rem] w-[3.2rem] h-[3.2rem] rounded-[14px] bg-white shadow-lg items-center justify-center text-[#14B8A6] z-20"
              >
                <BarChart3 size={20} />
              </motion.div>
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:flex absolute top-[11.2rem] right-[1.2rem] w-[3.2rem] h-[3.2rem] rounded-[14px] bg-white shadow-lg items-center justify-center text-[#14B8A6] z-20"
              >
                <ShieldCheck size={20} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- Our QRAPI Services + Why Choose ---------------- */}
      <section className="py-[3.5rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[1.8rem] items-start">
          {/* Left: services grid */}
          <div>
            <div className="w-[2.2rem] h-[3px] bg-[#14B8A6] mb-[0.8rem] rounded-full"></div>
            <h2 className="text-[1.6rem] sm:text-[1.85rem] font-extrabold text-slate-900 mb-[1.5rem]">
              Our QRAPI Services
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

          {/* Right: teal "Why Choose QRAPI?" panel */}
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
              Why Choose QRAPI?
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
      <section className="px-[0.912rem] sm:px-[1.518rem] pb-[3rem]">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative rounded-[20px] bg-slate-50 border border-slate-100 px-[1.5rem] sm:px-[2rem] py-[1.6rem] flex flex-col sm:flex-row items-center justify-between gap-[1.2rem] overflow-hidden">
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
                <Rocket size={22} />
              </span>
              <div>
                <h3 className="font-extrabold text-[1.15rem] text-slate-900 mb-[0.2rem]">
                  Ready to power your business with QRAPI?
                </h3>
                <p className="text-slate-500 text-[0.92rem]">
                  Start generating, tracking, and managing QR codes at scale with AbheePay.
                </p>
              </div>
            </div>
            <Link to="/docs" className="relative z-10 shrink-0">
              <button className="inline-flex items-center gap-[0.5rem] px-[1.4rem] py-[0.75rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.92rem]">
                View API Documentation
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- More With QRAPI ---------------- */}
      <section className="px-[0.912rem] sm:px-[1.518rem] pb-[4rem]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-[2.2rem]">
            <h2 className="text-[1.35rem] font-extrabold text-slate-900 mb-[0.5rem]">
              More With QRAPI
            </h2>
            <div className="w-[2.6rem] h-[3px] bg-[#14B8A6] mx-auto rounded-full"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]"
          >
            {more.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-[0.75rem]">
                <span className="w-[2.9rem] h-[2.9rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  {m.icon}
                </span>
                <div>
                  <p className="font-bold text-[0.95rem] text-slate-900 mb-[0.3rem]">{m.title}</p>
                  <p className="text-slate-500 text-[0.85rem] leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QRAPI;