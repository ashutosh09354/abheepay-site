import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  CreditCard, Smartphone, Wallet, Zap, DollarSign, ShieldCheck,
  Headphones, LayoutGrid, TrendingUp, CheckCircle,
  IndianRupee, Mail, Phone, MapPin, Globe, ArrowRight, Play,
  Handshake, Landmark, User
} from 'lucide-react';

// Animation Variants
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

const JoinDistributor = () => {
  const services = [
    { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={21} /> },
    { title: "POS MACHINE", desc: "Point of Sale Solutions", icon: <CreditCard size={21} /> },
    { title: "CC BILL PAY", desc: "Credit Card Bill Payments", icon: <CreditCard size={21} /> },
    { title: "RECHARGE", desc: "Mobile & DTH Recharge", icon: <Smartphone size={21} /> },
    { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={21} /> },
    { title: "COLLECT", desc: "Payment Collection Services", icon: <Wallet size={21} /> },
    { title: "CREDIT CARD", desc: "Credit Card Services", icon: <CreditCard size={21} /> },
    { title: "LOAN", desc: "Loan Services", icon: <TrendingUp size={21} /> },
    { title: "INSURANCE", desc: "Insurance", icon: <ShieldCheck size={21} /> },
  ];

  const benefits = [
    { title: "0 Investment Business", icon: <IndianRupee size={21} /> },
    { title: "Simple Joining Process", icon: <ShieldCheck size={21} /> },
    { title: "24*7 Customer Service", icon: <Headphones size={21} /> },
    { title: "Earn upto ₹4 Lakh to ₹12 Lakh per annum", icon: <IndianRupee size={21} /> },
  ];

  const whyChoose = [
    { title: "0 Investment Business", icon: <IndianRupee size={21} /> },
    { title: "Simple Joining Process", icon: <ShieldCheck size={21} /> },
    { title: "24*7 Customer Service", icon: <Headphones size={21} /> },
    { title: "Upto ₹12 Lakh Earning Potential", icon: <TrendingUp size={21} /> },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.215rem]">

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative pt-[9rem] sm:pt-[11.25rem] md:pt-[6rem] pb-[2.126rem] sm:pb-[3.038rem] md:pb-[4.253rem] px-[0.912rem] sm:px-[1.518rem] overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute top-[2.43rem] left-0 w-[8.505rem] h-[8.505rem] sm:w-[14.58rem] sm:h-[14.58rem] bg-teal-100/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[8.505rem] h-[8.505rem] sm:w-[14.58rem] sm:h-[14.58rem] bg-blue-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1536px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[2.126rem] lg:gap-[1.518rem] items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-[0.759rem] py-[0.152rem] mb-[0.912rem] text-[0.743rem] font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full">
              Digital Banking Partner
            </span>

            <h1 className="text-[2.025rem] sm:text-[2.532rem] md:text-[2.633rem] font-extrabold mb-[0.912rem] leading-tight text-slate-900">
              AbheePay ke saath apna{" "}
              <span className="text-teal-500">distribution vyapar</span> shuru karein
            </h1>

            <p className="text-[1.013rem] sm:text-[1.181rem] text-gray-500 mb-[1.215rem] max-w-lg mx-auto lg:mx-0">
              Enabling Indian SMEs to maximise their earning within a single platform.
              Join the revolution of digital finance.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-[0.912rem]">
              <Link to="/contact">
                <button className="px-[1.518rem] py-[0.759rem] bg-[#2DD4BF] text-white rounded-lg font-semibold hover:bg-[#14B8A6] transition shadow-lg shadow-teal-100 text-[1.181rem]">
                  Get Started
                </button>
              </Link>
              <button className="flex items-center gap-[0.456rem] text-[1.013rem] font-semibold text-slate-700 hover:text-teal-600 transition">
                <span className="w-[2.126rem] h-[2.126rem] rounded-full border-2 border-slate-300 flex items-center justify-center">
                  <Play size={15} fill="currentColor" />
                </span>
                Watch Video
              </button>
            </div>
          </motion.div>

          {/* Right: illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[345px] sm:h-[405px] flex items-center justify-center"
          >
            {/* base platform */}
            <div className="absolute bottom-[0.912rem] w-[14.58rem] h-[2.126rem] sm:w-[18.225rem] sm:h-[2.735rem] bg-slate-100 rounded-full blur-sm"></div>

            {/* credit card behind phone */}
            <div className="absolute bottom-[1.823rem] right-[1.215rem] sm:right-[2.43rem] w-[7.088rem] h-[4.253rem] sm:w-[7.29rem] sm:h-[5.063rem] rounded-lg bg-gradient-to-br from-[#1e2736] to-teal-700 shadow-xl rotate-6"></div>

            {/* phone frame */}
            <div className="relative w-[11.138rem] sm:w-[13.163rem] h-[303px] sm:h-[364.5px] bg-slate-900 rounded-[2.025rem] p-[0.456rem] shadow-2xl z-10">
              <div className="w-full h-full bg-white rounded-[1.62rem] overflow-hidden flex flex-col items-center px-[0.759rem] pt-[1.518rem]">
                <span className="text-teal-500 font-extrabold tracking-wide text-[0.945rem] mb-[0.912rem]">ABHEEPAY</span>
                <div className="w-full bg-slate-50 rounded-lg p-[0.759rem] border border-slate-100 shadow-sm">
                  <p className="text-[0.608rem] text-slate-400 mb-[0.152rem]">Total Earnings</p>
                  <p className="text-[1.181rem] font-extrabold text-slate-800">₹12,00,000</p>
                  <p className="text-[0.675rem] font-semibold text-emerald-500 mb-[0.456rem]">+20% This Month</p>
                  <svg viewBox="0 0 100 30" className="w-full h-[1.823rem]">
                    <polyline
                      points="0,25 15,20 30,22 45,12 60,15 75,5 100,2"
                      fill="none"
                      stroke="#2dd4bf"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* floating card: CC Bill Pay */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[1.518rem] left-0 sm:left-[0.456rem] bg-white rounded-lg shadow-lg px-[0.759rem] py-[0.608rem] flex items-center gap-[0.456rem] z-20"
            >
              <span className="w-[1.823rem] h-[1.823rem] rounded-md bg-teal-50 flex items-center justify-center text-teal-500">
                <Wallet size={16.5} />
              </span>
              <span className="text-[0.743rem] font-semibold text-slate-700">CC Bill Pay</span>
            </motion.div>

            {/* floating card: BBPS */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[3.645rem] left-0 sm:-left-[9px] bg-white rounded-lg shadow-lg px-[0.759rem] py-[0.608rem] flex items-center gap-[0.456rem] z-20"
            >
              <span className="w-[1.823rem] h-[1.823rem] rounded-md bg-teal-500 flex items-center justify-center text-white">
                <Zap size={16.5} />
              </span>
              <span className="text-[0.743rem] font-semibold text-slate-700">BBPS</span>
            </motion.div>

            {/* floating card: POS Machine */}
            <motion.div
              animate={{ y: [0, -6.75, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[6.075rem] right-0 sm:-right-[9px] bg-white rounded-lg shadow-lg px-[0.759rem] py-[0.608rem] flex flex-col items-center gap-[0.152rem] z-20"
            >
              <span className="w-[1.823rem] h-[1.823rem] rounded-md bg-teal-50 flex items-center justify-center text-teal-500">
                <LayoutGrid size={16.5} />
              </span>
              <span className="text-[0.675rem] font-semibold text-slate-700">POS Machine</span>
            </motion.div>

            {/* connecting dashed lines */}
            <svg className="absolute inset-0 w-full h-full -z-0 hidden sm:block" viewBox="0 0 400 400">
              <line x1="70" y1="70" x2="180" y2="140" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="2.25" />
              <line x1="60" y1="280" x2="170" y2="230" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="2.25" />
              <line x1="330" y1="150" x2="240" y2="180" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="2.25" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Partner CTA ---------------- */}
      <section className="px-[0.912rem] sm:px-[1.518rem]">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[1536px] mx-auto bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] rounded-[24px] px-[1.215rem] sm:px-[1.823rem] py-[1.518rem] sm:py-[1.823rem] flex flex-col sm:flex-row items-center gap-[1.064rem] sm:gap-[1.518rem] text-white"
        >
          <div className="w-[3.543rem] h-[3.543rem] rounded-full bg-white/15 flex items-center justify-center shrink-0">
            <Handshake size={25.5} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-[1.181rem] sm:text-[1.35rem] font-bold mb-[0.305rem]">Start Your Banking Journey as Distributor Today</h2>
            <p className="text-teal-50/90 text-[1.013rem] max-w-[864px]">
              Join thousands of successful distributors who have transformed their business with AbheePay.
              Earn up to <span className="font-bold text-white">₹12 Lakh</span> annually!
            </p>
          </div>
          <Link to="/contact">
            <motion.button
              whileHover={{ y: -3 }}
              className="bg-white text-[#0D9488] px-[1.064rem] sm:px-[1.518rem] py-[0.608rem] rounded-lg font-bold flex items-center gap-[0.456rem] shadow-lg whitespace-nowrap text-[1.013rem]"
            >
              Join as Distributor Now <ArrowRight size={16.5} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ---------------- Services Grid ---------------- */}
      <section className="py-[3.038rem] sm:py-[3.645rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-[2.126rem]">
            <p className="flex items-center justify-center gap-[0.608rem] text-teal-500 text-[0.81rem] font-bold uppercase tracking-[0.2em] mb-[0.608rem]">
              <span className="w-[1.518rem] h-px bg-teal-300"></span>
              Our Services
              <span className="w-[1.518rem] h-px bg-teal-300"></span>
            </p>
            <h2 className="text-[1.518rem] sm:text-[2.025rem] font-extrabold text-slate-900">
              Comprehensive banking and <br className="hidden sm:block" />
              <span className="text-teal-500">financial solutions</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.912rem]"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4.5 }}
                className="bg-white p-[1.064rem] rounded-[18px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center gap-[0.912rem]"
              >
                <div className="w-[2.87rem] h-[2.87rem] shrink-0 bg-teal-50 rounded-lg flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[1.013rem] tracking-wide mb-[0.152rem]">{service.title}</h3>
                  <p className="text-gray-500 text-[0.878rem] leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Benefits (boxed) ---------------- */}
      <section className="px-[0.912rem] sm:px-[1.518rem] pb-[3.038rem] sm:pb-[3.645rem]">
        <div className="max-w-[1536px] mx-auto bg-gradient-to-br from-teal-50 to-slate-50 rounded-[2.025rem] py-[2.126rem] sm:py-[2.735rem] px-[1.215rem] sm:px-[1.823rem]">
          <div className="text-center mb-[1.823rem] sm:mb-[2.126rem]">
            <p className="text-teal-600 font-bold mb-[0.305rem] uppercase tracking-[0.2em] text-[0.81rem]">
              Aapka Business Humara Investment
            </p>
            <h2 className="text-[1.518rem] sm:text-[2.025rem] font-extrabold text-slate-900">
              Abheepay <span className="text-teal-500">Benefits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.912rem]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-[1.064rem] rounded-[18px] border border-slate-100 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-[2.87rem] h-[2.87rem] mx-auto rounded-full bg-teal-500 text-white flex items-center justify-center mb-[0.608rem]">
                  {benefit.icon}
                </div>
                <p className="text-[1.013rem] font-bold text-slate-800 leading-snug">{benefit.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why Choose (light) ---------------- */}
      <section className="py-[3.038rem] sm:py-[3.645rem] px-[0.912rem] sm:px-[1.518rem] bg-[#f8fafc] text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[7.29rem] h-[7.29rem] bg-teal-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[7.29rem] h-[7.29rem] bg-indigo-100/50 rounded-full blur-3xl" />

        <div className="max-w-[1536px] mx-auto relative z-10">
          <p className="flex items-center justify-center gap-[0.608rem] text-[#2dd4bf] font-bold mb-[0.456rem] uppercase tracking-widest text-[0.81rem]">
            <span className="w-[1.518rem] h-px bg-teal-300"></span>
            Why Choose AbheePay?
            <span className="w-[1.518rem] h-px bg-teal-300"></span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.912rem] mt-[1.823rem]">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white p-[1.064rem] sm:p-[1.518rem] rounded-[1.755rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-teal-200 transition-all duration-300"
              >
                <div className="relative w-[2.87rem] h-[2.87rem] mx-auto mb-[0.912rem] flex items-center justify-center">
                  <div className="absolute inset-0 bg-indigo-50 rounded-xl rotate-6 group-hover:rotate-12 group-hover:bg-[#2dd4bf] transition-all duration-300"></div>
                  <div className="relative text-[#2dd4bf] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-[1.013rem] sm:text-[1.181rem] font-extrabold text-slate-800 leading-tight">
                  {item.title}
                </h3>

                <div className="mt-[0.608rem] h-[0.152rem] w-[1.518rem] bg-indigo-100 mx-auto rounded-full group-hover:w-[2.532rem] group-hover:bg-[#2dd4bf] transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact Section ---------------- */}
      <section className="py-[3.038rem] sm:py-[3.645rem] px-[0.912rem] sm:px-[1.518rem] bg-gray-50">
        <div className="max-w-[1152px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[2.025rem] overflow-hidden">
            {/* form */}
            <div className="bg-white p-[1.518rem] sm:p-[1.823rem] order-2 lg:order-1">
              <div className="flex items-center gap-[0.456rem] mb-[1.064rem]">
                <span className="w-[1.823rem] h-[1.823rem] rounded-md bg-teal-50 text-teal-500 flex items-center justify-center">
                  <User size={16.5} />
                </span>
                <h2 className="text-[1.181rem] sm:text-[1.35rem] font-bold">Join Us Today</h2>
              </div>
              <form className="space-y-[15px]">
                <div className="space-y-[3px]">
                  <label className="text-[0.878rem] font-semibold text-gray-600 ml-[0.305rem]">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-[0.759rem] bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-2 focus:ring-teal-400/40 outline-none transition text-[1.013rem] text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.759rem]">
                  <div className="space-y-[3px]">
                    <label className="text-[0.878rem] font-semibold text-gray-600 ml-[0.305rem]">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full p-[0.759rem] bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-2 focus:ring-teal-400/40 outline-none transition text-[1.013rem] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-[3px]">
                    <label className="text-[0.878rem] font-semibold text-gray-600 ml-[0.305rem]">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full p-[0.759rem] bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-2 focus:ring-teal-400/40 outline-none transition text-[1.013rem] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="space-y-[3px]">
                  <label className="text-[0.878rem] font-semibold text-gray-600 ml-[0.305rem]">City</label>
                  <input
                    type="text"
                    placeholder="New Delhi"
                    className="w-full p-[0.759rem] bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-2 focus:ring-teal-400/40 outline-none transition text-[1.013rem] text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-teal-400 text-white font-bold py-[0.759rem] rounded-lg hover:bg-teal-500 transition-colors mt-[0.456rem] text-[1.013rem] shadow-lg shadow-teal-100 flex items-center justify-center gap-[0.456rem]"
                >
                  Submit Application <ArrowRight size={15} />
                </motion.button>
              </form>
            </div>

            {/* contact info */}
            <div className="bg-[#1e2736] text-white p-[1.518rem] sm:p-[1.823rem] flex flex-col justify-between relative order-1 lg:order-2 overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-[1.181rem] sm:text-[1.35rem] font-bold mb-[1.064rem]">Contact Information</h3>
                <div className="space-y-[18px]">
                  <div className="flex items-center gap-[0.608rem]">
                    <div className="w-[1.823rem] h-[1.823rem] bg-white/10 rounded-md flex items-center justify-center text-teal-400 shrink-0">
                      <Mail size={15} />
                    </div>
                    <span className="text-[1.013rem] text-gray-300">care@abheepay.in</span>
                  </div>
                  <div className="flex items-center gap-[0.608rem]">
                    <div className="w-[1.823rem] h-[1.823rem] bg-white/10 rounded-md flex items-center justify-center text-teal-400 shrink-0">
                      <Phone size={15} />
                    </div>
                    <span className="text-[1.013rem] text-gray-300">88600 37218</span>
                  </div>
                  <div className="flex items-start gap-[0.608rem]">
                    <div className="w-[1.823rem] h-[1.823rem] bg-white/10 rounded-md flex items-center justify-center text-teal-400 shrink-0">
                      <MapPin size={15} />
                    </div>
                    <span className="text-[1.013rem] text-gray-300 leading-relaxed">
                      2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
                    </span>
                  </div>
                  <div className="flex items-center gap-[0.608rem]">
                    <div className="w-[1.823rem] h-[1.823rem] bg-white/10 rounded-md flex items-center justify-center text-teal-400 shrink-0">
                      <Globe size={15} />
                    </div>
                    <span className="text-[1.013rem] text-gray-300">www.abheepay.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-[1.518rem] pt-[0.912rem] border-t border-white/10 relative z-10">
                <p className="text-gray-400 italic text-[0.878rem]">
                  "Empowering Rural India through Digital Innovation."
                </p>
              </div>

              <Landmark size={141} className="absolute -bottom-[1.518rem] -right-[1.518rem] text-white/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-[3.645rem] h-[3.645rem] bg-teal-400/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JoinDistributor;