
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  CreditCard, Smartphone, Wallet, Zap, ShieldCheck,
  Headphones, LayoutGrid, IndianRupee, ArrowRight, ChevronDown,
  ReceiptText, DollarSign, Users, TrendingUp, Quote, Star,
  Network, Award, Crown, PlayCircle, Menu, X,
  Linkedin, Twitter, Facebook, Instagram, Phone, Mail, MapPin
} from 'lucide-react';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};


const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    .abheepay-distributor-page, .abheepay-distributor-page * {
      font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    }
  `}</style>
);

const Joins = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={22} /> },
    { title: "POS Machine", desc: "Point of Sale Solutions", icon: <CreditCard size={22} /> },
    { title: "CC Bill Pay", desc: "Credit Card Bill Payments", icon: <ReceiptText size={22} /> },
    { title: "Recharge", desc: "Mobile & DTH Recharge", icon: <Smartphone size={22} /> },
    { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={22} /> },
    { title: "Collect", desc: "Payment Collection Services", icon: <Wallet size={22} /> },
    { title: "Credit Card", desc: "Credit Card Services", icon: <CreditCard size={22} /> },
    { title: "Loan", desc: "Loan Services", icon: <TrendingUp size={22} /> },
    { title: "Insurance", desc: "Insurance Services", icon: <ShieldCheck size={22} /> },
  ];

  const benefits = [
    { title: "0 Investment Business", icon: <DollarSign size={24} /> },
    { title: "Simple Joining Process", icon: <ShieldCheck size={24} /> },
    { title: "24×7 Customer Service", icon: <Headphones size={24} /> },
    { title: "Earn upto ₹4L to ₹12L per annum", icon: <IndianRupee size={24} /> },
  ];

  const tiers = [
    {
      name: "Silver Distributor",
      icon: <Network size={22} />,
      retailers: "Up to 25 retailers",
      commission: "Up to 0.4% per txn",
      payout: "₹4L – ₹6L / yr",
      highlight: false,
    },
    {
      name: "Gold Distributor",
      icon: <Award size={22} />,
      retailers: "26 – 75 retailers",
      commission: "Up to 0.6% per txn",
      payout: "₹6L – ₹9L / yr",
      highlight: true,
    },
    {
      name: "Platinum Distributor",
      icon: <Crown size={22} />,
      retailers: "75+ retailers",
      commission: "Up to 0.8% per txn",
      payout: "₹9L – ₹12L / yr",
      highlight: false,
    },
  ];

  const navLinks = ["Services", "Solutions", "Partner", "About Us", "Contact"];

  const footerColumns = [
    {
      title: "Company",
      links: ["Home", "About Us", "Join as Retailer", "Join as Distributor", "Privacy Policy", "Terms & Conditions"],
    },
    {
      title: "Our Services",
      links: ["Bill Payments Solution", "POS Machine", "AEPS", "Micro ATM Services", "Credit Card", "Insurance Solutions"],
    },
  ];

  return (
    <div
      className="abheepay-distributor-page font-sans text-gray-800 bg-white overflow-x-hidden text-[0.81rem]"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      <FontLoader />

      {/* ---------------- Navbar ---------------- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-[0.81rem] sm:px-[1.012rem] py-[0.709rem]">
          <span className="text-[1.012rem] font-extrabold tracking-tight text-[#14B8A6]">
            ABHEE<span className="text-slate-900">PAY</span>
          </span>

          <nav className="hidden lg:flex items-center gap-[1.417rem]">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-[0.203rem] text-[0.71rem] font-semibold text-slate-600 hover:text-[#14B8A6] transition"
              >
                {link}
                {(link === "Solutions" || link === "Partner") && <ChevronDown size={13} />}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-[0.608rem]">
            <button className="px-[0.81rem] py-[0.405rem] rounded-lg border border-[#14B8A6] text-[#14B8A6] font-semibold text-[0.675rem] hover:bg-[#14B8A6]/5 transition">
              Login
            </button>
            <Link to="/contact">
              <button className="px-[0.81rem] py-[0.405rem] rounded-lg bg-[#14B8A6] text-white font-semibold text-[0.675rem] hover:bg-[#0D9488] transition">
                Get Started
              </button>
            </Link>
          </div>

          <button className="lg:hidden text-slate-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-slate-100 px-[0.81rem] py-[0.608rem] flex flex-col gap-[0.506rem]">
            {navLinks.map((link, i) => (
              <a key={i} href="#" className="text-[0.71rem] font-semibold text-slate-600">{link}</a>
            ))}
            <div className="flex gap-[0.506rem] pt-[0.405rem]">
              <button className="flex-1 px-[0.81rem] py-[0.405rem] rounded-lg border border-[#14B8A6] text-[#14B8A6] font-semibold text-[0.675rem]">Login</button>
              <button className="flex-1 px-[0.81rem] py-[0.405rem] rounded-lg bg-[#14B8A6] text-white font-semibold text-[0.675rem]">Get Started</button>
            </div>
          </div>
        )}
      </header>

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative bg-[#EFF6FF] overflow-hidden pt-[3.24rem] sm:pt-[4.05rem] pb-[3.24rem] sm:pb-[4.05rem] px-[0.81rem] sm:px-[1.012rem]">
        <div
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)",
            backgroundSize: "18px 18px",
            maskImage: "radial-gradient(ellipse 60% 60% at 30% 30%, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 30% 30%, black 0%, transparent 75%)",
          }}
        ></div>
        <div className="absolute -top-[4rem] -right-[4rem] w-[16rem] h-[16rem] bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 -left-[3rem] w-[12rem] h-[12rem] bg-[#5EEAD4]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[2.5rem] lg:gap-[2rem] items-center">
          {/* Left: copy */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-flex items-center gap-[0.304rem] mb-[0.709rem] px-[0.608rem] py-[0.253rem] rounded-full bg-white border border-[#14B8A6]/20 shadow-sm text-[0.585rem] font-bold uppercase tracking-[0.1em] text-[#0D9488]">
              <Network size={12} /> Digital Banking Partner
            </span>

            <h1 className="text-[1.75rem] sm:text-[2.15rem] md:text-[2.5rem] font-extrabold mb-[0.81rem] leading-[1.15] text-slate-900">
              AbheePay ke saath apna{" "}
              <span className="text-[#14B8A6]">distribution vyapar</span>{" "}
              shuru karein
            </h1>

            <p className="text-[0.75rem] sm:text-[0.81rem] text-slate-500 mb-[1.417rem] max-w-lg">
              Enabling Indian SMEs to build and lead their own network of retail
              partners — earn on every transaction, join the revolution of digital finance.
            </p>

            <div className="flex flex-wrap items-center gap-[0.81rem]">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-[1.215rem] py-[0.608rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.787rem] shadow-lg shadow-[#14B8A6]/20 flex items-center gap-[0.304rem]"
                >
                  Get Started <ArrowRight size={15} />
                </motion.button>
              </Link>
              <button className="flex items-center gap-[0.354rem] text-[0.75rem] font-semibold text-slate-700 hover:text-[#14B8A6] transition">
                <PlayCircle size={22} className="text-[#14B8A6]" /> Watch Video
              </button>
            </div>
          </motion.div>

          {/* Right: hero mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[16rem] sm:h-[19rem]"
          >
            {/* main earnings card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[11rem] bg-white rounded-2xl shadow-2xl border-2 border-[#0F172A] p-[0.81rem] z-20">
              <p className="text-center text-[#14B8A6] font-extrabold text-[0.675rem] tracking-wide mb-[0.608rem]">ABHEEPAY</p>
              <p className="text-[0.585rem] text-slate-400 mb-[0.101rem]">Total Earnings</p>
              <p className="text-[1.012rem] font-extrabold text-slate-900 mb-[0.101rem]">₹12,00,000</p>
              <p className="text-[0.585rem] font-bold text-emerald-500 mb-[0.608rem]">+20% This Month</p>
              <svg viewBox="0 0 100 24" className="w-full h-[1.5rem]">
                <polyline
                  points="0,20 15,17 30,18 45,10 60,13 75,4 100,2"
                  fill="none" stroke="#14B8A6" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* trailing dark card behind */}
            <div className="absolute top-[1.5rem] left-1/2 translate-x-[3.4rem] w-[9rem] h-[10rem] bg-gradient-to-br from-[#134E4A] to-[#0F172A] rounded-2xl -z-0"></div>

            {/* floating chips */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute top-[1.5rem] left-0 items-center gap-[0.304rem] bg-white rounded-full shadow-md px-[0.608rem] py-[0.354rem] z-30 border border-slate-100"
            >
              <span className="w-[1.012rem] h-[1.012rem] rounded-md bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                <ReceiptText size={11} />
              </span>
              <span className="text-[0.585rem] font-semibold text-slate-700">CC Bill Pay</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute top-[7.5rem] left-[1rem] items-center gap-[0.304rem] bg-white rounded-full shadow-md px-[0.608rem] py-[0.354rem] z-30 border border-slate-100"
            >
              <span className="w-[1.012rem] h-[1.012rem] rounded-md bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                <Zap size={11} />
              </span>
              <span className="text-[0.585rem] font-semibold text-slate-700">BBPS</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="hidden sm:flex absolute top-[3rem] right-0 items-center gap-[0.304rem] bg-white rounded-full shadow-md px-[0.608rem] py-[0.354rem] z-30 border border-slate-100"
            >
              <span className="w-[1.012rem] h-[1.012rem] rounded-md bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                <LayoutGrid size={11} />
              </span>
              <span className="text-[0.585rem] font-semibold text-slate-700">POS Machine</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="hidden lg:flex absolute bottom-[1rem] right-[0.5rem] items-center gap-[0.304rem] bg-[#0F172A] text-white rounded-xl shadow-lg px-[0.608rem] py-[0.405rem] z-30"
            >
              <Users size={13} className="text-[#5EEAD4]" />
              <span className="text-[0.585rem] font-semibold">42 Retailers Onboarded</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Teal CTA Strip ---------------- */}
      <section className="px-[0.81rem] sm:px-[1.012rem] -mt-[1.5rem] sm:-mt-[1.8rem] relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-r from-[#14B8A6] to-[#0D9488] rounded-2xl shadow-xl shadow-[#14B8A6]/20 p-[1.012rem] sm:p-[1.417rem] flex flex-col sm:flex-row items-center justify-between gap-[0.81rem]"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-white font-extrabold text-[0.9rem] sm:text-[1.012rem] mb-[0.152rem]">
              Start Your Banking Journey as Distributor Today
            </h3>
            <p className="text-white/85 text-[0.675rem] sm:text-[0.72rem] max-w-lg">
              Join thousands of successful distributors who have transformed their business with
              AbheePay. Earn up to <span className="font-bold text-white">₹12 Lakh</span> annually!
            </p>
          </div>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="whitespace-nowrap px-[1.012rem] py-[0.506rem] bg-white text-[#0D9488] rounded-lg font-bold text-[0.675rem] flex items-center gap-[0.253rem] shadow-md"
            >
              Join as Distributor Now <ArrowRight size={14} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ---------------- Our Services ---------------- */}
      <section className="py-[2.835rem] sm:py-[3.24rem] px-[0.81rem] sm:px-[1.012rem] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-[1.823rem]">
            <p className="text-[0.54rem] font-bold uppercase tracking-[0.25em] text-[#0D9488] mb-[0.304rem]">Our Services</p>
            <h2 className="text-[1.35rem] sm:text-[1.62rem] font-extrabold text-slate-900 leading-tight">
              Comprehensive banking and <br className="hidden sm:block" />
              <span className="text-[#14B8A6]">financial solutions</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.81rem]"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group bg-white border border-slate-200 rounded-2xl p-[1.012rem] shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.12)] hover:border-[#14B8A6]/40 transition-all duration-300"
              >
                <div className="w-[2.7rem] h-[2.7rem] rounded-xl bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] mb-[0.608rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-[0.85rem] text-slate-900 mb-[0.152rem]">{service.title}</h3>
                <p className="text-[0.7rem] text-slate-500">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Abheepay Benefits ---------------- */}
      <section className="py-[2.835rem] sm:py-[3.24rem] px-[0.81rem] sm:px-[1.012rem] bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[14rem] h-[14rem] bg-[#14B8A6]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <p className="text-[0.54rem] font-bold uppercase tracking-[0.25em] text-[#0D9488] mb-[0.304rem]">Aapka Business • Humara Investment</p>
          <h2 className="text-[1.35rem] sm:text-[1.62rem] font-extrabold text-slate-900 mb-[1.823rem]">
            Abheepay <span className="text-[#14B8A6]">Benefits</span>
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.81rem]"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group bg-white p-[1.012rem] rounded-2xl border border-slate-100 shadow-sm hover:border-[#14B8A6]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-[3rem] h-[3rem] mx-auto mb-[0.709rem]">
                  <div className="absolute inset-0 bg-[#14B8A6]/10 rounded-xl rotate-6 group-hover:rotate-12 group-hover:bg-[#14B8A6] transition-all duration-300"></div>
                  <div className="relative w-full h-full flex items-center justify-center text-[#14B8A6] group-hover:text-white transition-colors duration-300">
                    {b.icon}
                  </div>
                </div>
                <h3 className="font-extrabold text-[0.75rem] text-slate-800 leading-snug">{b.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Earning Tiers ---------------- */}
      <section className="py-[2.835rem] sm:py-[3.24rem] px-[0.81rem] sm:px-[1.012rem] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-[1.417rem]">
            <p className="text-[0.54rem] font-bold uppercase tracking-[0.25em] text-[#0D9488] mb-[0.304rem]">Grow As You Go</p>
            <h2 className="text-[1.215rem] sm:text-[1.485rem] font-extrabold text-slate-900">
              Your Earning Potential, By Network Size
            </h2>
            <p className="text-slate-500 text-[0.675rem] sm:text-[0.787rem] mt-[0.405rem] max-w-xl mx-auto">
              The bigger your retailer network, the higher your commission slab.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[0.81rem]">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-[1.012rem] border transition-all duration-300 ${
                  tier.highlight
                    ? "bg-[#0F172A] border-[#14B8A6]/40 shadow-xl shadow-[#14B8A6]/10 sm:-translate-y-[0.5rem]"
                    : "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-[#14B8A6]/30"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-[0.6rem] left-1/2 -translate-x-1/2 px-[0.608rem] py-[0.152rem] bg-[#14B8A6] text-white text-[0.51rem] font-bold uppercase tracking-wider rounded-full shadow-md">
                    Most Popular
                  </span>
                )}
                <span className={`w-[2.43rem] h-[2.43rem] rounded-xl flex items-center justify-center mb-[0.709rem] ${tier.highlight ? "bg-[#14B8A6] text-white" : "bg-[#14B8A6]/10 text-[#14B8A6]"}`}>
                  {tier.icon}
                </span>
                <h3 className={`font-extrabold text-[0.9rem] mb-[0.608rem] ${tier.highlight ? "text-white" : "text-slate-900"}`}>{tier.name}</h3>
                <div className={`space-y-[0.405rem] text-[0.675rem] ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                  <div className="flex justify-between">
                    <span>Network size</span>
                    <span className={`font-semibold ${tier.highlight ? "text-white" : "text-slate-800"}`}>{tier.retailers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commission</span>
                    <span className={`font-semibold ${tier.highlight ? "text-white" : "text-slate-800"}`}>{tier.commission}</span>
                  </div>
                  <div className={`flex justify-between pt-[0.405rem] mt-[0.405rem] border-t ${tier.highlight ? "border-white/10" : "border-slate-100"}`}>
                    <span>Est. payout</span>
                    <span className={`font-extrabold ${tier.highlight ? "text-[#5EEAD4]" : "text-[#0D9488]"}`}>{tier.payout}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Testimonial ---------------- */}
      <section className="pb-[2.835rem] sm:pb-[3.24rem] px-[0.81rem] sm:px-[1.012rem] bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-slate-50 border border-slate-100 rounded-2xl p-[1.417rem] text-center"
          >
            <Quote size={26} className="text-[#14B8A6]/30 mx-auto mb-[0.608rem]" />
            <div className="flex items-center justify-center gap-[0.152rem] mb-[0.709rem]">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-[#14B8A6] text-[#14B8A6]" />)}
            </div>
            <p className="text-[0.75rem] sm:text-[0.81rem] text-slate-600 leading-relaxed mb-[0.81rem]">
              I started with 8 retailers under me in my first month. Within a year, my network grew to
              over 60 partners and my monthly payouts more than doubled.
            </p>
            <p className="font-bold text-[0.75rem] text-slate-900">Rakesh Sharma</p>
            <p className="text-[0.63rem] text-slate-400">Gold Distributor, Uttar Pradesh</p>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Dark CTA Banner ---------------- */}
      <section className="relative bg-[#0F172A] py-[2.835rem] sm:py-[3.24rem] px-[0.81rem] sm:px-[1.012rem] text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:2.5rem_2.5rem]"></div>
        <div className="absolute top-0 right-[10%] w-[10rem] h-[10rem] bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-[1.215rem] sm:text-[1.485rem] font-extrabold text-white mb-[1.012rem] leading-tight">
            Become a Trusted <span className="text-[#14B8A6]">AbheePay Distributor</span> Today
          </h2>
          <div className="flex items-center justify-center gap-[0.608rem]">
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-[1.012rem] py-[0.506rem] bg-[#14B8A6] text-white rounded-lg font-bold hover:bg-[#0D9488] transition text-[0.675rem]">
                Get Started
              </motion.button>
            </Link>
            <Link to="/contact">
              <button className="px-[1.012rem] py-[0.506rem] bg-transparent border border-white/30 text-white rounded-lg font-bold hover:bg-white/10 transition text-[0.675rem]">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="bg-[#0B1220] text-slate-300 pt-[2.43rem] pb-[1.417rem] px-[0.81rem] sm:px-[1.012rem]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.417rem] mb-[1.823rem]">
          <div>
            <span className="text-[1.012rem] font-extrabold tracking-tight text-[#5EEAD4]">
              ABHEE<span className="text-white">PAY</span>
            </span>
            <p className="text-[0.675rem] text-slate-400 mt-[0.608rem] leading-relaxed max-w-xs">
              Powering digital payments across India with secure and reliable infrastructure.
            </p>
            <div className="flex gap-[0.506rem] mt-[0.81rem]">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <span key={i} className="w-[1.72rem] h-[1.72rem] rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#14B8A6] hover:text-white transition cursor-pointer">
                  <Icon size={14} />
                </span>
              ))}
            </div>
          </div>

          {footerColumns.map((col, i) => (
            <div key={i}>
              <h4 className="text-white font-bold text-[0.75rem] mb-[0.709rem]">{col.title}</h4>
              <ul className="space-y-[0.405rem]">
                {col.links.map((link, j) => (
                  <li key={j} className="text-[0.675rem] text-slate-400 hover:text-[#5EEAD4] transition cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-bold text-[0.75rem] mb-[0.709rem]">Contact Us</h4>
            <ul className="space-y-[0.608rem] text-[0.675rem] text-slate-400">
              <li className="flex items-start gap-[0.405rem]"><Phone size={13} className="text-[#5EEAD4] mt-[0.1rem] shrink-0" /> +91 88600 37218</li>
              <li className="flex items-start gap-[0.405rem]"><Mail size={13} className="text-[#5EEAD4] mt-[0.1rem] shrink-0" /> care@abheepay.com</li>
              <li className="flex items-start gap-[0.405rem]"><MapPin size={13} className="text-[#5EEAD4] mt-[0.1rem] shrink-0" /> 2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, Sector-19, Dwarka, New Delhi - 110043</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/10 pt-[1.012rem] text-center">
          <p className="text-[0.63rem] text-slate-500">© {new Date().getFullYear()} AbheePay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Joins;





