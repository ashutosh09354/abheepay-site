import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  CreditCard, Smartphone, Wallet, Zap, ShieldCheck,
  Headphones, LayoutGrid, IndianRupee, ArrowRight,
  Landmark, FileText, GraduationCap,
  Banknote, Send, ReceiptText, PlaneTakeoff,
  Users, Lock, BadgeCheck, TrendingUp
} from 'lucide-react';

// Adjust this import to wherever you place the illustration in your
// project's asset pipeline (e.g. src/assets/abheepay-hero-illustration.png).
import heroIllustration from '/assets/image/Hero/mainPageSlider/abheepay-hero-illustration.png';

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

// Inter — loaded here so this component works even if the host app
// hasn't registered the font globally. If Inter is already loaded
// elsewhere in your app (e.g. in index.html or tailwind.config.js),
// you can safely delete this <link> and just keep the className below.
const FontLoader = () => (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
  />
);

const Retailer = () => {
  // "Why Choose AbheePay?" — plain icon-over-text grid, no cards
  const whyChoose = [
    {
      title: "Diverse Product Portfolio",
      desc: "Comprehensive suite of trusted services across banking, payments, and insurance.",
      icon: <FileText size={42} strokeWidth={1.75} />
    },
    {
      title: "Dedicated Support",
      desc: "Get support 24*7 for transactions, onboarding and query resolution.",
      icon: <Headphones size={42} strokeWidth={1.75} />
    },
    {
      title: "Work Anytime, Anywhere",
      desc: "Operate independently with full control over your time and location.",
      icon: <Users size={42} strokeWidth={1.75} />
    },
    {
      title: "No Paperwork Needed",
      desc: "Paper-free, instant onboarding and service activation.",
      icon: <FileText size={42} strokeWidth={1.75} />
    },
    {
      title: "Structured Training",
      desc: "Gain access to curated learning modules and continuous operational support.",
      icon: <GraduationCap size={42} strokeWidth={1.75} />
    },
    {
      title: "Income from Zero Capital",
      desc: "Begin generating income from day one with a 0 investment, performance-driven model.",
      icon: <IndianRupee size={42} strokeWidth={1.75} />
    },
  ];

  // "One Powerful Platform" category cards
  const categories = [
    {
      title: "Banking Services",
      desc: "MATM, POS machine, cash deposit and withdrawal — full banking access for your customers.",
      icon: <Landmark size={30} />
    },
    {
      title: "Payments & Recharge",
      desc: "BBPS, mobile & DTH recharge, utility bill payments and domestic remittance in one place.",
      icon: <Zap size={30} />
    },
    {
      title: "Insurance & Loans",
      desc: "Help customers protect what matters with insurance and loan services, all under one roof.",
      icon: <ShieldCheck size={30} />
    },
  ];

  // Onboarding steps
  const steps = [
    {
      no: "01",
      title: "Register on AbheePay",
      desc: "Sign up as a retail partner on our app or web dashboard by providing a few essential details."
    },
    {
      no: "02",
      title: "Complete Verification & Training",
      desc: "Engage in a simple onboarding process and gain expertise across our product suite."
    },
    {
      no: "03",
      title: "Start Earning",
      desc: "Begin offering services and earn commissions instantly, with no investment required."
    },
  ];

  // More products / opportunities — compact chip grid
  const moreProducts = [
    { title: "MATM", icon: <LayoutGrid size={24} /> },
    { title: "POS Machine", icon: <CreditCard size={24} /> },
    { title: "CC Bill Pay", icon: <CreditCard size={24} /> },
    { title: "Recharge", icon: <Smartphone size={24} /> },
    { title: "BBPS", icon: <ReceiptText size={24} /> },
    { title: "Cash Deposit", icon: <Banknote size={24} /> },
    { title: "Cash Withdrawal", icon: <Wallet size={24} /> },
    { title: "Domestic Remittance", icon: <Send size={24} /> },
    { title: "Travel Booking", icon: <PlaneTakeoff size={24} /> },
  ];

  return (
    <div
      className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.215rem]"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <FontLoader />

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative bg-[#EFF6FF] overflow-hidden pt-[9rem] sm:pt-[11.25rem] md:pt-[9rem] pb-[6rem] sm:pb-[7.5rem] px-[0.912rem] sm:px-[1.518rem]">
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
        {/* decorative stacked square outlines, top-left */}
        <div className="absolute top-[4.5rem] left-[1.5rem] w-[9rem] h-[9rem] border border-[#14B8A6]/25 rounded-2xl hidden sm:block"></div>
        <div className="absolute top-[8.25rem] left-[5.25rem] w-[9rem] h-[9rem] border border-[#14B8A6]/20 rounded-2xl hidden sm:block"></div>
        <div className="absolute top-[12rem] left-[0.75rem] w-[9rem] h-[9rem] border border-[#14B8A6]/15 rounded-2xl hidden sm:block"></div>
        <div className="absolute bottom-[3rem] left-[12rem] w-[7.5rem] h-[7.5rem] border border-[#14B8A6]/15 rounded-2xl hidden lg:block"></div>
        <div className="absolute bottom-[3rem] left-[19.5rem] w-[7.5rem] h-[7.5rem] border border-[#14B8A6]/10 rounded-2xl hidden lg:block"></div>

        <div className="max-w-[1536px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[3.75rem] lg:gap-[2.126rem] items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <h1 className="text-[2.25rem] sm:text-[2.85rem] md:text-[3.225rem] font-extrabold mb-[1.215rem] leading-[1.2] text-slate-900">
              Become a Certified{" "}
              <span className="text-[#14B8A6]">Banking</span> Partner Today!
            </h1>

            <p className="text-[1.05rem] sm:text-[1.215rem] text-slate-500 mb-[2.126rem] max-w-lg mx-auto lg:mx-0">
              Join AbheePay's growing network and earn money by offering
              banking, payments and insurance services — all at your
              fingertips.
            </p>

            <div className="flex items-center justify-center lg:justify-start mb-[2.126rem]">
              <Link to="/contact">
                <button className="px-[1.823rem] py-[0.912rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.181rem]">
                  Start Earning
                </button>
              </Link>
            </div>

            {/* fintech stat strip */}
            <div className="flex items-center justify-center lg:justify-start divide-x divide-slate-300/70">
              <div className="pr-[1.518rem]">
                <p className="text-[1.518rem] font-extrabold text-slate-900">50K+</p>
                <p className="text-[0.81rem] text-slate-500">Active Partners</p>
              </div>
              <div className="px-[1.518rem]">
                <p className="text-[1.518rem] font-extrabold text-slate-900">₹12L</p>
                <p className="text-[0.81rem] text-slate-500">Avg. Annual Earning</p>
              </div>
              <div className="pl-[1.518rem]">
                <p className="text-[1.518rem] font-extrabold text-slate-900">700+</p>
                <p className="text-[0.81rem] text-slate-500">Cities Covered</p>
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
              <img
                src={heroIllustration}
                alt="Shopkeeper accepting an instant, secure Abheepay QR payment from a customer"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* floating live-earnings chip with sparkline */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-[1.125rem] -left-[1.125rem] items-center gap-[0.608rem] bg-white rounded-xl shadow-lg px-[0.912rem] py-[0.608rem] z-20"
            >
              <span className="w-[2.126rem] h-[2.126rem] rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                <TrendingUp size={19.5} />
              </span>
              <div>
                <p className="text-[0.878rem] font-bold text-slate-800 leading-none">₹1,04,200</p>
                <svg viewBox="0 0 60 18" className="w-[4.5rem] h-[1.35rem] mt-[0.225rem]">
                  <polyline
                    points="0,15 10,12 20,13 30,7 40,9 50,3 60,2"
                    fill="none"
                    stroke="#14B8A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
                  <Landmark size={16.5} />
                </span>
                Banking Services
              </span>
              <span className="inline-flex items-center gap-[0.456rem] bg-white rounded-full shadow-md px-[0.912rem] py-[0.456rem] text-[0.878rem] font-semibold text-slate-700">
                <span className="w-[1.518rem] h-[1.518rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  <Zap size={16.5} />
                </span>
                Payments
              </span>
              <span className="inline-flex items-center gap-[0.456rem] bg-white rounded-full shadow-md px-[0.912rem] py-[0.456rem] text-[0.878rem] font-semibold text-slate-700">
                <span className="w-[1.518rem] h-[1.518rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  <ShieldCheck size={16.5} />
                </span>
                Insurance
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Trust & Security Bar ---------------- */}
      <section className="bg-white border-b border-slate-100 py-[1.518rem] px-[0.912rem] sm:px-[1.518rem]">
        <div className="max-w-[1536px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-[1.215rem] text-center sm:text-left">
          {[
            { icon: <ShieldCheck size={24} />, label: "Bank-Grade Security" },
            { icon: <Lock size={24} />, label: "256-bit Encryption" },
            { icon: <BadgeCheck size={24} />, label: "RBI & IRDAI Compliant" },
            { icon: <Headphones size={24} />, label: "24x7 Partner Support" },
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

      {/* ----------------   Pay ---------------- */}
      <section className="py-[4.253rem] sm:py-[4.86rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[72px]">
            <h2 className="text-[45px] sm:text-[54px] lg:text-[3rem] font-black tracking-[-0.03em] leading-tight text-slate-900 p-[6px]">
              Why Choose <span className="text-[#14B8A6]">AbheePay?</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.126rem] gap-y-[2.735rem]"
          >
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="groupbg-white border border-slate-200 rounded-[24px] p-9 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.12)] hover:border-[#14B8A6]/40 transition-all duration-300"
              >
                <div className="w-[84px] h-[84px] rounded-xl  flex items-center justify-center text-[#14B8A6] mb-[18px] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
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

      {/* ---------------- One Powerful Platform ---------------- */}
      <section className="pb-[3.645rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
        <div className="max-w-[1536px] mx-auto">
          <h2 className="text-[1.518rem] sm:text-[2.025rem] font-extrabold text-slate-900 mb-[0.305rem]">
            Power Every Transaction
          </h2>
          <p className="text-[1.518rem] sm:text-[2.025rem] font-extrabold text-[#14B8A6] mb-[1.215rem]">
            All From One Powerful Platform
          </p>
          <p className="text-gray-500 text-[1.013rem] sm:text-[1.181rem] mb-[2.126rem] max-w-[1008px]">
            From enabling banking access to securing what customers value, offer solutions that matter.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[0.912rem]">
            {categories.map((cat, index) => (
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

      {/* ---------------- Onboarding: 3 Easy Steps ---------------- */}
      <section className="pb-[3.645rem] sm:pb-[4.253rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-[2.025rem] overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.15)]">
          {/* left: steps */}
          <div className="bg-slate-50 p-[1.518rem] sm:p-[2.126rem]">
            <p className="text-[0.81rem] font-bold uppercase tracking-[0.2em] text-gray-400 mb-[0.456rem]">Onboarding</p>
            <h2 className="text-[1.518rem] sm:text-[1.823rem] font-extrabold text-slate-900 mb-[1.518rem]">
              Become a Partner in <br className="hidden sm:block" /> 3 Easy Steps
            </h2>

            <div className="space-y-0">
              {steps.map((s, i) => (
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

          {/* right: earnings mockup visual */}
          <div className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center p-[1.518rem] min-h-[24rem]">
            <div className="w-full max-w-[19.5rem] bg-white rounded-[24px] shadow-2xl p-[1.064rem]">
              <p className="text-center text-[#14B8A6] font-extrabold text-[1.013rem] mb-[0.152rem]">CONGRATULATIONS!</p>
              <p className="text-center text-gray-400 text-[0.675rem] mb-[0.912rem]">
                You have successfully completed <br /> AbheePay Partner onboarding
              </p>
              <div className="flex justify-between bg-slate-50 rounded-[12px] p-[0.608rem] mb-[0.759rem] text-[0.675rem]">
                <div>
                  <p className="text-gray-400">Status</p>
                  <p className="font-bold text-slate-800">Active</p>
                </div>
                <div>
                  <p className="text-gray-400">Result</p>
                  <p className="font-bold text-emerald-500">Approved</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-slate-50 rounded-[12px] p-[0.608rem] mb-[0.759rem]">
                <div>
                  <p className="text-[0.608rem] text-gray-400">Projected Commission</p>
                  <p className="text-[0.878rem] font-bold text-slate-800">₹8,400 / mo</p>
                </div>
                <svg viewBox="0 0 60 18" className="w-[4.5rem] h-[1.35rem]">
                  <polyline
                    points="0,15 10,13 20,14 30,8 40,10 50,4 60,3"
                    fill="none"
                    stroke="#14B8A6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <button className="w-full bg-[#14B8A6] text-white text-[0.743rem] font-bold py-[0.608rem] rounded-[12px]">
                Start Earning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- More Products, More Opportunities ---------------- */}
      <section className="py-[3.038rem] sm:py-[3.645rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[2.126rem] items-center">
          <div>
            <h2 className="text-[1.518rem] sm:text-[2.025rem] font-extrabold text-slate-900 mb-[0.608rem] leading-tight">
              More Products <br /> More Opportunities
            </h2>
            <p className="text-gray-500 text-[1.013rem] sm:text-[1.181rem] mb-[1.215rem] max-w-[576px]">
              Expand your portfolio with our wide range of financial products and earn on every transaction.
            </p>
            <Link to="/contact">
              <button className="px-[1.518rem] py-[0.759rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[1.013rem]">
                Start Earning
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
            {moreProducts.map((service, index) => (
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

      {/* ---------------- Dark CTA Banner ---------------- */}
      <section className="relative bg-[#0F172A] py-[3.645rem] sm:py-[4.557rem] px-[0.912rem] sm:px-[1.518rem] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:3.75rem_3.75rem]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4.5rem] h-[4.5rem] border-[3px] border-[#14B8A6]/60 rounded-2xl rotate-6"></div>

        <div className="relative z-10 max-w-[1008px] mx-auto pt-[4.5rem]">
          <h2 className="text-[1.823rem] sm:text-[2.228rem] font-extrabold text-white mb-[1.518rem] leading-tight">
            Become a Trusted <span className="text-[#14B8A6]">AbheePay Partner</span> Today
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
      </section>

    </div>
  );
};

export default Retailer;