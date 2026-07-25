// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { 
// //   CreditCard, Smartphone, Wallet, Zap, DollarSign, ShieldCheck, 
// //   Headphones, LayoutGrid, TrendingUp, UserPlus, CheckCircle, 
// //   IndianRupee, Mail, Phone, MapPin, Globe, ArrowRight 
// // } from 'lucide-react';

// // // Animation Variants
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// // };

// // const staggerContainer = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.1 }
// //   }
// // };

// // const Joins = () => {
// //   const services = [
// //     { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={24} /> },
// //     { title: "POS MACHINE", desc: "Point of Sale Solutions", icon: <CreditCard size={24} /> },
// //     { title: "CC BILL PAY", desc: "Credit Card Bill Payments", icon: <DollarSign size={24} /> },
// //     { title: "RECHARGE", desc: "Mobile & DTH Recharge", icon: <Smartphone size={24} /> },
// //     { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={24} /> },
// //     { title: "COLLECT", desc: "Payment Collection Services", icon: <Wallet size={24} /> },
// //     { title: "CREDIT CARD", desc: "Credit Card Services", icon: <CreditCard size={24} /> },
// //     { title: "LOAN", desc: "Loan Services", icon: <TrendingUp size={24} /> },
// //     { title: "INSURANCE", desc: "Insurance", icon: <ShieldCheck size={24} /> },
// //   ];

// //   const benefits = [
// //     { title: "0 investment business", icon: <DollarSign size={32} /> },
// //     { title: "simple joining process", icon: <ShieldCheck size={32} /> },
// //     { title: "24*7 customer service", icon: <Headphones size={32} /> },
// //     { title: "Earn upto ₹4 Lakh to ₹12 Lakh per annum", icon: <IndianRupee size={32} /> },
// //   ];

// //   return (
// //     <div className="font-sans text-gray-800 bg-white overflow-x-hidden min-h-screen">

// //       {/* Hero Section */}
// //       <section className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-8 text-center">
// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={fadeInUp}
// //           className="max-w-4xl mx-auto relative z-10"
// //         >
// //           <span className="inline-block px-4 py-1.5 mb-4 sm:mb-5 text-xs sm:text-sm font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
// //             Digital Banking Partner
// //           </span>

// //           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 sm:mb-6 leading-tight sm:leading-snug md:leading-[1.15] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
// //             AbheePay ke saath apna <br className="sm:hidden" /> banking vyapar shuru karein
// //           </h1>

// //           <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 max-w-xl md:max-w-2xl mx-auto px-2 sm:px-0">
// //             Enabling Indian SMEs to maximise their earning within a single platform.
// //             Join the revolution of digital finance.
// //           </p>

// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.96 }}
// //             className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold flex items-center mx-auto shadow-lg shadow-cyan-200/40 transition text-base sm:text-lg"
// //           >
// //             Get Started <ArrowRight className="ml-2" size={20} />
// //           </motion.button>
// //         </motion.div>

// //         {/* Background Decor */}
// //         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10 pointer-events-none hidden sm:block">
// //           <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
// //           <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
// //         </div>
// //       </section>

// //       {/* Partner CTA */}
// //       <section className="bg-[#1e2736] py-12 sm:py-16 px-5 sm:px-8">
// //         <motion.div 
// //           initial={{ opacity: 0, scale: 0.95 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           viewport={{ once: true }}
// //           className="max-w-5xl mx-auto text-center text-white bg-gradient-to-br from-[#2a3447] to-[#1e2736] p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-700"
// //         >
// //           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
// //             Start Your Banking Journey as Partner Today
// //           </h2>
// //           <p className="text-gray-300 sm:text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
// //             Join thousands of successful retailers who have transformed their business with AbheePay. 
// //             Earn up to <span className="text-cyan-400 font-bold">₹12 Lakh</span> annually!
// //           </p>
// //           <motion.button 
// //             whileHover={{ y: -3 }}
// //             className="bg-cyan-400 hover:bg-cyan-300 text-[#1e2736] px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-black uppercase tracking-tight transition shadow-xl text-sm sm:text-base"
// //           >
// //             Join as Partner Now
// //           </motion.button>
// //         </motion.div>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-12 sm:py-16 px-5 sm:px-6 bg-gray-50">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="text-center mb-10 sm:mb-16">
// //             <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Services</h2>
// //             <div className="w-16 sm:w-20 h-1.5 bg-cyan-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
// //             <p className="text-gray-600 text-base sm:text-lg">Comprehensive banking and financial solutions</p>
// //           </div>
          
// //           <motion.div 
// //             variants={staggerContainer} 
// //             initial="hidden" 
// //             whileInView="visible" 
// //             viewport={{ once: true }}
// //             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
// //           >
// //             {services.map((service, index) => (
// //               <motion.div 
// //                 key={index} 
// //                 variants={fadeInUp}
// //                 whileHover={{ y: -8, scale: 1.02 }}
// //                 className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
// //               >
// //                 <div className="mb-5 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
// //                   {service.icon}
// //                 </div>
// //                 <h3 className="font-bold text-lg sm:text-xl mb-2">{service.title}</h3>
// //                 <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{service.desc}</p>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Benefits Section (keeping the cleaner light version) */}
// //       <section className="py-12 sm:py-16 px-5 sm:px-8 bg-[#f8fafc] text-center relative overflow-hidden">
// //         <div className="absolute inset-0 opacity-40 pointer-events-none hidden sm:block">
// //           <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-100/60 rounded-full blur-3xl" />
// //           <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-100/60 rounded-full blur-3xl" />
// //         </div>

// //         <div className="max-w-7xl mx-auto relative z-10">
// //           <motion.p 
// //             initial={{ opacity: 0, y: 10 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             className="text-[#14B8A6] font-bold mb-3 uppercase tracking-widest text-xs sm:text-sm"
// //           >
// //             Aapka business • Humara investment
// //           </motion.p>
          
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-10 sm:mb-16 tracking-tight">
// //             Abheepay <span className="text-[#14B8A6]">Benefits</span>
// //           </h2>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
// //             {benefits.map((benefit, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, scale: 0.92 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 whileHover={{ y: -6 }}
// //                 transition={{ duration: 0.3, delay: index * 0.1 }}
// //                 className="group bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] shadow-lg shadow-black/5 border border-slate-100 hover:border-[#14B8A6]/40 transition-all duration-300"
// //               >
// //                 <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center">
// //                   <div className="absolute inset-0 bg-[#14B8A6]/10 rounded-2xl rotate-6 group-hover:rotate-12 group-hover:bg-[#14B8A6] transition-all duration-300"></div>
// //                   <div className="relative text-[#14B8A6] group-hover:text-white transition-colors duration-300 text-3xl sm:text-4xl">
// //                     {benefit.icon}
// //                   </div>
// //                 </div>

// //                 <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-800 leading-snug px-2">
// //                   {benefit.title}
// //                 </h3>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       <section className="py-12 sm:py-16 px-5 sm:px-6 bg-gray-50">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 border border-gray-200">
// //             <div className="bg-white p-8 sm:p-10 lg:p-12 xl:p-16 order-2 lg:order-1">
// //               <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Join Us Today</h2>
// //               <form className="space-y-5 sm:space-y-6">
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
// //                   <input 
// //                     type="text" 
// //                     placeholder="Enter your name" 
// //                     className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition text-base" 
// //                   />
// //                 </div>
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
// //                   <div className="space-y-2">
// //                     <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
// //                     <input 
// //                       type="email" 
// //                       placeholder="Enter your email" 
// //                       className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition text-base" 
// //                     />
// //                   </div>
// //                   <div className="space-y-2">
// //                     <label className="text-sm font-semibold text-gray-700 ml-1">Phone</label>
// //                     <input 
// //                       type="tel" 
// //                       placeholder="Enter your number" 
// //                       className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition text-base" 
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="space-y-2">
// //                   <label className="text-sm font-semibold text-gray-700 ml-1">City</label>
// //                   <input 
// //                     type="text" 
// //                     placeholder="Enter your city" 
// //                     className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none transition text-base" 
// //                   />
// //                 </div>
// //                 <motion.button 
// //                   whileTap={{ scale: 0.98 }}
// //                   className="w-full bg-cyan-400 text-white font-bold py-4 sm:py-5 rounded-xl hover:bg-cyan-500 transition-colors mt-4 text-base sm:text-lg shadow-lg shadow-cyan-200/30"
// //                 >
// //                   Submit Application
// //                 </motion.button>
// //               </form>
// //             </div>

// //             <div className="bg-[#1e2736] text-white p-8 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-between order-1 lg:order-2">
// //               <div className="relative z-10">
// //                 <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">Contact Information</h3>
// //                 <div className="space-y-6 sm:space-y-8">
// //                   <div className="flex items-center gap-4 sm:gap-5">
// //                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
// //                       <Mail size={20} />
// //                     </div>
// //                     <span className="text-base sm:text-lg text-gray-300">care@abheepay.in</span>
// //                   </div>
// //                   <div className="flex items-center gap-4 sm:gap-5">
// //                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
// //                       <Phone size={20} />
// //                     </div>
// //                     <span className="text-base sm:text-lg text-gray-300">88600 37218</span>
// //                   </div>
// //                   <div className="flex items-start gap-4 sm:gap-5">
// //                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
// //                       <MapPin size={20} />
// //                     </div>
// //                     <span className="text-gray-300 leading-relaxed text-base sm:text-lg">
// //                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-4 sm:gap-5">
// //                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
// //                       <Globe size={20} />
// //                     </div>
// //                     <span className="text-base sm:text-lg text-gray-300">www.abheepay.com</span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 relative z-10">
// //                 <p className="text-gray-400 italic text-sm sm:text-base">
// //                   "Empowering Rural India through Digital Innovation."
// //                 </p>
// //               </div>
// //               <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-400/10 blur-3xl rounded-full"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //     </div>
// //   );
// // };

// // export default Joins;








// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { Link } from "react-router-dom";
// // import {
// //   CreditCard, Smartphone, Wallet, Zap, ShieldCheck,
// //   Headphones, LayoutGrid, IndianRupee, ArrowRight,
// //   Landmark, FileText, GraduationCap,
// //   Banknote, Send, ReceiptText, DollarSign,
// //   Users, Lock, BadgeCheck, TrendingUp, Mail, Phone, MapPin, Globe
// // } from 'lucide-react';

// // // Adjust this import to wherever you place the illustration in your
// // // project's asset pipeline (e.g. src/assets/abheepay-distributor-illustration.png).
// // import heroIllustration from '/assets/image/Hero/mainPageSlider/Abheepay.png';

// // // Brand color used throughout: #14B8A6
// // // This page mirrors the design system of the "Join as Retailer" page
// // // (Join.jsx) so both onboarding pages feel like one product.

// // // ---------------- Animation Variants ----------------
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// // };

// // const staggerContainer = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.1 }
// //   }
// // };

// // // Inter — loaded here so this component works even if the host app
// // // hasn't registered the font globally. If Inter is already loaded
// // // elsewhere in your app (e.g. in index.html or tailwind.config.js),
// // // you can safely delete this <link> and just keep the className below.
// // const FontLoader = () => (
// //   <link
// //     rel="stylesheet"
// //     href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
// //   />
// // );

// // const Joins = () => {
// //   // "Why Choose AbheePay?" — plain icon-over-text grid, no cards
// //   const whyChoose = [
// //     {
// //       title: "Zero Investment Business",
// //       desc: "Build a distribution business from day one with no upfront capital required.",
// //       icon: <DollarSign size={28} strokeWidth={1.75} />
// //     },
// //     {
// //       title: "Simple Joining Process",
// //       desc: "Paper-free, straightforward onboarding to get you distributing in no time.",
// //       icon: <FileText size={28} strokeWidth={1.75} />
// //     },
// //     {
// //       title: "Dedicated Support",
// //       desc: "Get support 24*7 for transactions, retailer onboarding and query resolution.",
// //       icon: <Headphones size={28} strokeWidth={1.75} />
// //     },
// //     {
// //       title: "Wide Distribution Network",
// //       desc: "Build and manage your own network of retail partners across your territory.",
// //       icon: <Users size={28} strokeWidth={1.75} />
// //     },
// //     {
// //       title: "Structured Training",
// //       desc: "Gain access to curated learning modules and continuous operational support.",
// //       icon: <GraduationCap size={28} strokeWidth={1.75} />
// //     },
// //     {
// //       title: "Earn ₹4L – ₹12L Per Annum",
// //       desc: "Unlock high-margin commissions across every retailer transaction in your network.",
// //       icon: <IndianRupee size={28} strokeWidth={1.75} />
// //     },
// //   ];

// //   // "One Powerful Platform" category cards
// //   const categories = [
// //     {
// //       title: "Banking & ATM Services",
// //       desc: "MATM and POS machine solutions to help your retailers offer full banking access.",
// //       icon: <Landmark size={20} />
// //     },
// //     {
// //       title: "Payments & Bill Services",
// //       desc: "BBPS, mobile & DTH recharge, bill collection and CC bill pay in one place.",
// //       icon: <Zap size={20} />
// //     },
// //     {
// //       title: "Credit & Insurance",
// //       desc: "Equip your network with credit card, loan and insurance services under one roof.",
// //       icon: <ShieldCheck size={20} />
// //     },
// //   ];

// //   // Onboarding steps
// //   const steps = [
// //     {
// //       no: "01",
// //       title: "Register on AbheePay",
// //       desc: "Sign up as a distribution partner on our app or web dashboard by providing a few essential details."
// //     },
// //     {
// //       no: "02",
// //       title: "Complete Verification & Training",
// //       desc: "Engage in a simple onboarding process and gain expertise across our product suite."
// //     },
// //     {
// //       no: "03",
// //       title: "Build Your Network & Earn",
// //       desc: "Onboard retailers under your distributorship and earn commissions instantly, with no investment required."
// //     },
// //   ];

// //   // More products / opportunities — compact chip grid
// //   const moreProducts = [
// //     { title: "MATM", icon: <LayoutGrid size={16} /> },
// //     { title: "POS Machine", icon: <CreditCard size={16} /> },
// //     { title: "CC Bill Pay", icon: <CreditCard size={16} /> },
// //     { title: "Recharge", icon: <Smartphone size={16} /> },
// //     { title: "BBPS", icon: <ReceiptText size={16} /> },
// //     { title: "Collect", icon: <Wallet size={16} /> },
// //     { title: "Credit Card", icon: <CreditCard size={16} /> },
// //     { title: "Loan", icon: <TrendingUp size={16} /> },
// //     { title: "Insurance", icon: <ShieldCheck size={16} /> },
// //   ];

// //   return (
// //     <div
// //       className="font-sans text-gray-800 bg-white overflow-x-hidden text-[0.81rem]"
// //       style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
// //     >
// //       <FontLoader />

// //       {/* ---------------- Hero Section ---------------- */}
// //       <section className="relative bg-[#EFF6FF] overflow-hidden pt-[6rem] sm:pt-[7.5rem] md:pt-[6rem] pb-[4rem] sm:pb-[5rem] px-[0.608rem] sm:px-[1.012rem]">
// //         {/* fintech dot-grid mesh */}
// //         <div
// //           className="absolute inset-0 opacity-[0.5] pointer-events-none"
// //           style={{
// //             backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)",
// //             backgroundSize: "18px 18px",
// //             maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 0%, transparent 75%)",
// //             WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 0%, transparent 75%)",
// //           }}
// //         ></div>
// //         {/* decorative stacked square outlines, top-left */}
// //         <div className="absolute top-[3rem] left-[1rem] w-[6rem] h-[6rem] border border-[#14B8A6]/25 rounded-2xl hidden sm:block"></div>
// //         <div className="absolute top-[5.5rem] left-[3.5rem] w-[6rem] h-[6rem] border border-[#14B8A6]/20 rounded-2xl hidden sm:block"></div>
// //         <div className="absolute top-[8rem] left-[0.5rem] w-[6rem] h-[6rem] border border-[#14B8A6]/15 rounded-2xl hidden sm:block"></div>
// //         <div className="absolute bottom-[2rem] left-[8rem] w-[5rem] h-[5rem] border border-[#14B8A6]/15 rounded-2xl hidden lg:block"></div>
// //         <div className="absolute bottom-[2rem] left-[13rem] w-[5rem] h-[5rem] border border-[#14B8A6]/10 rounded-2xl hidden lg:block"></div>

// //         <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[2.5rem] lg:gap-[1.417rem] items-center">
// //           {/* Left: copy */}
// //           <motion.div
// //             initial="hidden"
// //             animate="visible"
// //             variants={fadeInUp}
// //             className="text-center lg:text-left"
// //           >
// //             <h1 className="text-[1.5rem] sm:text-[1.9rem] md:text-[2.15rem] font-extrabold mb-[0.81rem] leading-[1.2] text-slate-900">
// //               Become a Certified{" "}
// //               <span className="text-[#14B8A6]">Distribution</span> Partner Today!
// //             </h1>

// //             <p className="text-[0.7rem] sm:text-[0.81rem] text-slate-500 mb-[1.417rem] max-w-lg mx-auto lg:mx-0">
// //               AbheePay ke saath apna banking vyapar shuru karein — build and lead your
// //               own network of retail partners, and earn on every transaction they make.
// //             </p>

// //             <div className="flex items-center justify-center lg:justify-start mb-[1.417rem]">
// //               <Link to="/contact">
// //                 <button className="px-[1.215rem] py-[0.608rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.787rem]">
// //                   Start Earning
// //                 </button>
// //               </Link>
// //             </div>

// //             {/* fintech stat strip */}
// //             <div className="flex items-center justify-center lg:justify-start divide-x divide-slate-300/70">
// //               <div className="pr-[1.012rem]">
// //                 <p className="text-[1.012rem] font-extrabold text-slate-900">10K+</p>
// //                 <p className="text-[0.54rem] text-slate-500">Active Distributors</p>
// //               </div>
// //               <div className="px-[1.012rem]">
// //                 <p className="text-[1.012rem] font-extrabold text-slate-900">₹12L</p>
// //                 <p className="text-[0.54rem] text-slate-500">Avg. Annual Earning</p>
// //               </div>
// //               <div className="pl-[1.012rem]">
// //                 <p className="text-[1.012rem] font-extrabold text-slate-900">700+</p>
// //                 <p className="text-[0.54rem] text-slate-500">Cities Covered</p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Right: hero illustration + floating fintech chips */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.94 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.7, ease: "easeOut" }}
// //             className="relative"
// //           >
// //             <div className="relative w-full max-w-[24rem] mx-auto rounded-2xl overflow-hidden shadow-xl bg-white border border-[#14B8A6]/15">
// //               <img
// //                 src={heroIllustration}
// //                 alt="Distributor managing a network of retail partners on the Abheepay platform"
// //                 className="w-full h-auto object-cover"
// //               />
// //             </div>

// //             {/* floating live-earnings chip with sparkline */}
// //             <motion.div
// //               animate={{ y: [0, -6, 0] }}
// //               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
// //               className="hidden sm:flex absolute -top-[0.75rem] -left-[0.75rem] items-center gap-[0.405rem] bg-white rounded-xl shadow-lg px-[0.608rem] py-[0.405rem] z-20"
// //             >
// //               <span className="w-[1.417rem] h-[1.417rem] rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
// //                 <TrendingUp size={13} />
// //               </span>
// //               <div>
// //                 <p className="text-[0.585rem] font-bold text-slate-800 leading-none">₹1,04,200</p>
// //                 <svg viewBox="0 0 60 18" className="w-[3rem] h-[0.9rem] mt-[0.15rem]">
// //                   <polyline
// //                     points="0,15 10,12 20,13 30,7 40,9 50,3 60,2"
// //                     fill="none"
// //                     stroke="#14B8A6"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                 </svg>
// //               </div>
// //             </motion.div>

// //             {/* floating "verified & secure" badge */}
// //             <motion.div
// //               animate={{ y: [0, 6, 0] }}
// //               transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
// //               className="hidden sm:flex absolute -bottom-[0.75rem] -right-[0.75rem] items-center gap-[0.304rem] bg-[#0F172A] text-white rounded-xl shadow-lg px-[0.608rem] py-[0.405rem] z-20"
// //             >
// //               <BadgeCheck size={14} className="text-[#5EEAD4]" />
// //               <span className="text-[0.585rem] font-semibold">RBI &amp; IRDAI Verified</span>
// //             </motion.div>

// //             {/* service chips row */}
// //             <div className="mt-[1.417rem] flex flex-wrap items-center justify-center gap-[0.405rem] px-[0.5rem]">
// //               <span className="inline-flex items-center gap-[0.304rem] bg-white rounded-full shadow-md px-[0.608rem] py-[0.304rem] text-[0.585rem] font-semibold text-slate-700">
// //                 <span className="w-[1.012rem] h-[1.012rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
// //                   <Landmark size={11} />
// //                 </span>
// //                 Banking Services
// //               </span>
// //               <span className="inline-flex items-center gap-[0.304rem] bg-white rounded-full shadow-md px-[0.608rem] py-[0.304rem] text-[0.585rem] font-semibold text-slate-700">
// //                 <span className="w-[1.012rem] h-[1.012rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
// //                   <Zap size={11} />
// //                 </span>
// //                 Payments
// //               </span>
// //               <span className="inline-flex items-center gap-[0.304rem] bg-white rounded-full shadow-md px-[0.608rem] py-[0.304rem] text-[0.585rem] font-semibold text-slate-700">
// //                 <span className="w-[1.012rem] h-[1.012rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
// //                   <ShieldCheck size={11} />
// //                 </span>
// //                 Insurance
// //               </span>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ---------------- Trust & Security Bar ---------------- */}
// //       <section className="bg-white border-b border-slate-100 py-[1.012rem] px-[0.608rem] sm:px-[1.012rem]">
// //         <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-[0.81rem] text-center sm:text-left">
// //           {[
// //             { icon: <ShieldCheck size={16} />, label: "Bank-Grade Security" },
// //             { icon: <Lock size={16} />, label: "256-bit Encryption" },
// //             { icon: <BadgeCheck size={16} />, label: "RBI & IRDAI Compliant" },
// //             { icon: <Headphones size={16} />, label: "24x7 Partner Support" },
// //           ].map((t, i) => (
// //             <div key={i} className="flex items-center justify-center sm:justify-start gap-[0.405rem]">
// //               <span className="w-[1.72rem] h-[1.72rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
// //                 {t.icon}
// //               </span>
// //               <span className="text-[0.585rem] sm:text-[0.63rem] font-semibold text-slate-600">{t.label}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* ---------------- Why Choose ---------------- */}
// //       <section className="py-[2.835rem] sm:py-[3.24rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
// //         <div className="max-w-5xl mx-auto">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl sm:text-4xl lg:text-[2rem] font-black tracking-[-0.03em] leading-tight text-slate-900 p-1">
// //               Why Choose <span className="text-[#14B8A6]">AbheePay?</span>
// //             </h2>
// //           </div>

// //           <motion.div
// //             variants={staggerContainer}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[1.417rem] gap-y-[1.823rem]"
// //           >
// //             {whyChoose.map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={fadeInUp}
// //                 whileHover={{ y: -6 }}
// //                 transition={{ duration: 0.25 }}
// //                 className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.12)] hover:border-[#14B8A6]/40 transition-all duration-300"
// //               >
// //                 <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#14B8A6] mb-3 group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
// //                   {item.icon}
// //                 </div>

// //                 <h3 className="text-[16px] font-bold text-slate-900 mb-2">
// //                   {item.title}
// //                 </h3>

// //                 <p className="text-[12px] leading-4 text-slate-500">
// //                   {item.desc}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ---------------- One Powerful Platform ---------------- */}
// //       <section className="pb-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
// //         <div className="max-w-5xl mx-auto">
// //           <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900 mb-[0.203rem]">
// //             Power Every Transaction
// //           </h2>
// //           <p className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-[#14B8A6] mb-[0.81rem]">
// //             Across Your Entire Distribution Network
// //           </p>
// //           <p className="text-gray-500 text-[0.675rem] sm:text-[0.787rem] mb-[1.417rem] max-w-2xl">
// //             From enabling banking access to securing what customers value, equip your retailers with solutions that matter.
// //           </p>

// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-[0.608rem]">
// //             {categories.map((cat, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.1 }}
// //                 className="bg-white p-[0.81rem] rounded-xl border border-gray-200 shadow-sm"
// //               >
// //                 <span className="w-[1.72rem] h-[1.72rem] rounded-full bg-[#14B8A6] text-white flex items-center justify-center mb-[0.506rem]">
// //                   {cat.icon}
// //                 </span>
// //                 <h3 className="font-bold text-[0.75rem] text-slate-900 mb-[0.203rem]">{cat.title}</h3>
// //                 <p className="text-gray-500 text-[0.675rem] leading-relaxed">{cat.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------- Onboarding: 3 Easy Steps ---------------- */}
// //       <section className="pb-[2.43rem] sm:pb-[2.835rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
// //         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-[1.35rem] overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.15)]">
// //           {/* left: steps */}
// //           <div className="bg-slate-50 p-[1.012rem] sm:p-[1.417rem]">
// //             <p className="text-[0.54rem] font-bold uppercase tracking-[0.2em] text-gray-400 mb-[0.304rem]">Onboarding</p>
// //             <h2 className="text-[1.012rem] sm:text-[1.215rem] font-extrabold text-slate-900 mb-[1.012rem]">
// //               Become a Distributor in <br className="hidden sm:block" /> 3 Easy Steps
// //             </h2>

// //             <div className="space-y-0">
// //               {steps.map((s, i) => (
// //                 <div
// //                   key={i}
// //                   className={`py-[0.709rem] ${i === 1 ? "border-y border-[#14B8A6]" : "border-b border-slate-100"}`}
// //                 >
// //                   <div className="flex items-start gap-[0.608rem]">
// //                     <span className="text-[0.75rem] font-extrabold text-[#14B8A6]">{s.no}</span>
// //                     <div>
// //                       <h3 className="font-bold text-[0.75rem] text-slate-900 mb-[0.101rem]">{s.title}</h3>
// //                       <p className="text-gray-500 text-[0.675rem] leading-relaxed">{s.desc}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* right: earnings mockup visual */}
// //           <div className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center p-[1.012rem] min-h-[16rem]">
// //             <div className="w-full max-w-[13rem] bg-white rounded-2xl shadow-2xl p-[0.709rem]">
// //               <p className="text-center text-[#14B8A6] font-extrabold text-[0.675rem] mb-[0.101rem]">CONGRATULATIONS!</p>
// //               <p className="text-center text-gray-400 text-[0.45rem] mb-[0.608rem]">
// //                 You have successfully completed <br /> AbheePay Distributor onboarding
// //               </p>
// //               <div className="flex justify-between bg-slate-50 rounded-lg p-[0.405rem] mb-[0.506rem] text-[0.45rem]">
// //                 <div>
// //                   <p className="text-gray-400">Status</p>
// //                   <p className="font-bold text-slate-800">Active</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-gray-400">Result</p>
// //                   <p className="font-bold text-emerald-500">Approved</p>
// //                 </div>
// //               </div>
// //               <div className="flex items-center justify-between bg-slate-50 rounded-lg p-[0.405rem] mb-[0.506rem]">
// //                 <div>
// //                   <p className="text-[0.405rem] text-gray-400">Projected Commission</p>
// //                   <p className="text-[0.585rem] font-bold text-slate-800">₹8,400 / mo</p>
// //                 </div>
// //                 <svg viewBox="0 0 60 18" className="w-[3rem] h-[0.9rem]">
// //                   <polyline
// //                     points="0,15 10,13 20,14 30,8 40,10 50,4 60,3"
// //                     fill="none"
// //                     stroke="#14B8A6"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                 </svg>
// //               </div>
// //               <button className="w-full bg-[#14B8A6] text-white text-[0.495rem] font-bold py-[0.405rem] rounded-lg">
// //                 Start Earning
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------- More Products, More Opportunities ---------------- */}
// //       <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
// //         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[1.417rem] items-center">
// //           <div>
// //             <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900 mb-[0.405rem] leading-tight">
// //               More Products <br /> More Opportunities
// //             </h2>
// //             <p className="text-gray-500 text-[0.675rem] sm:text-[0.787rem] mb-[0.81rem] max-w-sm">
// //               Expand your distribution portfolio with our wide range of financial products and earn on every retailer transaction.
// //             </p>
// //             <Link to="/contact">
// //               <button className="px-[1.012rem] py-[0.506rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.675rem]">
// //                 Start Earning
// //               </button>
// //             </Link>
// //           </div>

// //           <motion.div
// //             variants={staggerContainer}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="grid grid-cols-2 sm:grid-cols-3 gap-[0.506rem]"
// //           >
// //             {moreProducts.map((service, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={fadeInUp}
// //                 whileHover={{ y: -2 }}
// //                 className="bg-white p-[0.506rem] rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-[0.354rem]"
// //               >
// //                 <div className="w-[1.417rem] h-[1.417rem] shrink-0 bg-[#14B8A6]/10 rounded-md flex items-center justify-center text-[#14B8A6]">
// //                   {service.icon}
// //                 </div>
// //                 <h3 className="font-semibold text-[0.585rem] text-slate-700">{service.title}</h3>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ---------------- Get In Touch ---------------- */}
// //       <section className="py-[2.43rem] sm:py-[2.835rem] px-[0.608rem] sm:px-[1.012rem] bg-slate-50">
// //         <div className="max-w-5xl mx-auto">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[1.35rem] overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.15)] border border-slate-100">
// //             {/* form */}
// //             <div className="bg-white p-[1.012rem] sm:p-[1.417rem] order-2 lg:order-1">
// //               <h2 className="text-[1.012rem] sm:text-[1.215rem] font-extrabold text-slate-900 mb-[1.012rem]">Join Us Today</h2>
// //               <form className="space-y-[0.608rem]">
// //                 <div className="space-y-[0.203rem]">
// //                   <label className="text-[0.63rem] font-semibold text-slate-700 ml-[0.101rem]">Full Name</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Enter your name"
// //                     className="w-full p-[0.608rem] bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition text-[0.675rem]"
// //                   />
// //                 </div>
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.506rem]">
// //                   <div className="space-y-[0.203rem]">
// //                     <label className="text-[0.63rem] font-semibold text-slate-700 ml-[0.101rem]">Email</label>
// //                     <input
// //                       type="email"
// //                       placeholder="Enter your email"
// //                       className="w-full p-[0.608rem] bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition text-[0.675rem]"
// //                     />
// //                   </div>
// //                   <div className="space-y-[0.203rem]">
// //                     <label className="text-[0.63rem] font-semibold text-slate-700 ml-[0.101rem]">Phone</label>
// //                     <input
// //                       type="tel"
// //                       placeholder="Enter your number"
// //                       className="w-full p-[0.608rem] bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition text-[0.675rem]"
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="space-y-[0.203rem]">
// //                   <label className="text-[0.63rem] font-semibold text-slate-700 ml-[0.101rem]">City</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Enter your city"
// //                     className="w-full p-[0.608rem] bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition text-[0.675rem]"
// //                   />
// //                 </div>
// //                 <motion.button
// //                   whileTap={{ scale: 0.98 }}
// //                   className="w-full bg-[#14B8A6] text-white font-bold py-[0.709rem] rounded-lg hover:bg-[#0D9488] transition-colors mt-[0.405rem] text-[0.75rem] shadow-md shadow-[#14B8A6]/20"
// //                 >
// //                   Submit Application
// //                 </motion.button>
// //               </form>
// //             </div>

// //             {/* contact info */}
// //             <div className="bg-[#0F172A] text-white p-[1.012rem] sm:p-[1.417rem] flex flex-col justify-between order-1 lg:order-2 relative overflow-hidden">
// //               <div className="relative z-10">
// //                 <h3 className="text-[1.012rem] sm:text-[1.215rem] font-extrabold mb-[1.012rem]">Contact Information</h3>
// //                 <div className="space-y-[0.709rem]">
// //                   <div className="flex items-center gap-[0.506rem]">
// //                     <div className="w-[1.72rem] h-[1.72rem] bg-white/10 rounded-lg flex items-center justify-center text-[#5EEAD4] shrink-0">
// //                       <Mail size={15} />
// //                     </div>
// //                     <span className="text-[0.675rem] text-slate-300">care@abheepay.in</span>
// //                   </div>
// //                   <div className="flex items-center gap-[0.506rem]">
// //                     <div className="w-[1.72rem] h-[1.72rem] bg-white/10 rounded-lg flex items-center justify-center text-[#5EEAD4] shrink-0">
// //                       <Phone size={15} />
// //                     </div>
// //                     <span className="text-[0.675rem] text-slate-300">88600 37218</span>
// //                   </div>
// //                   <div className="flex items-start gap-[0.506rem]">
// //                     <div className="w-[1.72rem] h-[1.72rem] bg-white/10 rounded-lg flex items-center justify-center text-[#5EEAD4] shrink-0">
// //                       <MapPin size={15} />
// //                     </div>
// //                     <span className="text-slate-300 leading-relaxed text-[0.675rem]">
// //                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-[0.506rem]">
// //                     <div className="w-[1.72rem] h-[1.72rem] bg-white/10 rounded-lg flex items-center justify-center text-[#5EEAD4] shrink-0">
// //                       <Globe size={15} />
// //                     </div>
// //                     <span className="text-[0.675rem] text-slate-300">www.abheepay.com</span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="mt-[1.012rem] pt-[0.709rem] border-t border-white/10 relative z-10">
// //                 <p className="text-slate-400 italic text-[0.63rem]">
// //                   "Empowering Rural India through Digital Innovation."
// //                 </p>
// //               </div>
// //               <div className="absolute top-0 right-0 w-[6rem] h-[6rem] bg-[#14B8A6]/10 blur-3xl rounded-full"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ---------------- Dark CTA Banner ---------------- */}
// //       <section className="relative bg-[#0F172A] py-[2.43rem] sm:py-[3.038rem] px-[0.608rem] sm:px-[1.012rem] text-center overflow-hidden">
// //         <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:2.5rem_2.5rem]"></div>
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3rem] h-[3rem] border-2 border-[#14B8A6]/60 rounded-2xl rotate-6"></div>

// //         <div className="relative z-10 max-w-2xl mx-auto pt-[3rem]">
// //           <h2 className="text-[1.215rem] sm:text-[1.485rem] font-extrabold text-white mb-[1.012rem] leading-tight">
// //             Become a Trusted <span className="text-[#14B8A6]">AbheePay Distributor</span> Today
// //           </h2>
// //           <div className="flex items-center justify-center gap-[0.608rem]">
// //             <Link to="/contact">
// //               <button className="px-[1.012rem] py-[0.506rem] bg-[#14B8A6] text-white rounded-lg font-bold hover:bg-[#0D9488] transition text-[0.675rem]">
// //                 Get Started
// //               </button>
// //             </Link>
// //             <Link to="/contact">
// //               <button className="px-[1.012rem] py-[0.506rem] bg-transparent border border-white/30 text-white rounded-lg font-bold hover:bg-white/10 transition text-[0.675rem]">
// //                 Contact Sales
// //               </button>
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //     </div>
// //   );
// // };

// // export default Joins;
















// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import {
//   CreditCard, Smartphone, Wallet, Zap, ShieldCheck,
//   Headphones, LayoutGrid, IndianRupee, ArrowRight,
//   Landmark, FileText, GraduationCap,
//   ReceiptText, DollarSign,
//   Users, Lock, BadgeCheck, TrendingUp, Quote, Star,
//   Network, Award, Crown
// } from 'lucide-react';

// // Adjust this import to wherever you place the illustration in your
// // project's asset pipeline (e.g. src/assets/abheepay-distributor-illustration.png).
// import heroIllustration from '/assets/image/Hero/mainPageSlider/Abheepay.png';

// // Brand color used throughout: #14B8A6
// // This page mirrors the design system of the "Join as Retailer" page
// // (Join.jsx) so both onboarding pages feel like one product.

// // ---------------- Animation Variants ----------------
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

// // Inter — injected as a real @import inside a <style> tag rather than a
// // <link>, since <link> elements dropped into the middle of a React tree
// // are sometimes stripped by the router/SPA shell and silently fail to
// // load. If Inter is already loaded globally in your app (index.html or
// // tailwind.config.js), you can safely delete this block and just keep
// // the className/style below.
// const FontLoader = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
//     .abheepay-distributor-page, .abheepay-distributor-page * {
//       font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
//     }
//   `}</style>
// );

// const Joins = () => {
//   // "Why Choose AbheePay?" — plain icon-over-text grid, no cards
//   const whyChoose = [
//     {
//       title: "Zero Investment Business",
//       desc: "Build a distribution business from day one with no upfront capital required.",
//       icon: <DollarSign size={28} strokeWidth={1.75} />
//     },
//     {
//       title: "Simple Joining Process",
//       desc: "Paper-free, straightforward onboarding to get you distributing in no time.",
//       icon: <FileText size={28} strokeWidth={1.75} />
//     },
//     {
//       title: "Dedicated Support",
//       desc: "Get support 24*7 for transactions, retailer onboarding and query resolution.",
//       icon: <Headphones size={28} strokeWidth={1.75} />
//     },
//     {
//       title: "Wide Distribution Network",
//       desc: "Build and manage your own network of retail partners across your territory.",
//       icon: <Users size={28} strokeWidth={1.75} />
//     },
//     {
//       title: "Structured Training",
//       desc: "Gain access to curated learning modules and continuous operational support.",
//       icon: <GraduationCap size={28} strokeWidth={1.75} />
//     },
//     {
//       title: "Earn ₹4L – ₹12L Per Annum",
//       desc: "Unlock high-margin commissions across every retailer transaction in your network.",
//       icon: <IndianRupee size={28} strokeWidth={1.75} />
//     },
//   ];

//   // "One Powerful Platform" category cards
//   const categories = [
//     {
//       title: "Banking & ATM Services",
//       desc: "MATM and POS machine solutions to help your retailers offer full banking access.",
//       icon: <Landmark size={20} />
//     },
//     {
//       title: "Payments & Bill Services",
//       desc: "BBPS, mobile & DTH recharge, bill collection and CC bill pay in one place.",
//       icon: <Zap size={20} />
//     },
//     {
//       title: "Credit & Insurance",
//       desc: "Equip your network with credit card, loan and insurance services under one roof.",
//       icon: <ShieldCheck size={20} />
//     },
//   ];

//   // Onboarding steps
//   const steps = [
//     {
//       no: "01",
//       title: "Register on AbheePay",
//       desc: "Sign up as a distribution partner on our app or web dashboard by providing a few essential details."
//     },
//     {
//       no: "02",
//       title: "Complete Verification & Training",
//       desc: "Engage in a simple onboarding process and gain expertise across our product suite."
//     },
//     {
//       no: "03",
//       title: "Build Your Network & Earn",
//       desc: "Onboard retailers under your distributorship and earn commissions instantly, with no investment required."
//     },
//   ];

//   // More products / opportunities — compact chip grid
//   const moreProducts = [
//     { title: "MATM", icon: <LayoutGrid size={16} /> },
//     { title: "POS Machine", icon: <CreditCard size={16} /> },
//     { title: "CC Bill Pay", icon: <CreditCard size={16} /> },
//     { title: "Recharge", icon: <Smartphone size={16} /> },
//     { title: "BBPS", icon: <ReceiptText size={16} /> },
//     { title: "Collect", icon: <Wallet size={16} /> },
//     { title: "Credit Card", icon: <CreditCard size={16} /> },
//     { title: "Loan", icon: <TrendingUp size={16} /> },
//     { title: "Insurance", icon: <ShieldCheck size={16} /> },
//   ];

//   // Distribution earning tiers — new section, unique to the distributor journey
//   const tiers = [
//     {
//       name: "Silver Distributor",
//       icon: <Network size={22} />,
//       retailers: "Up to 25 retailers",
//       commission: "Up to 0.4% per txn",
//       payout: "₹4L – ₹6L / yr",
//       highlight: false,
//     },
//     {
//       name: "Gold Distributor",
//       icon: <Award size={22} />,
//       retailers: "26 – 75 retailers",
//       commission: "Up to 0.6% per txn",
//       payout: "₹6L – ₹9L / yr",
//       highlight: true,
//     },
//     {
//       name: "Platinum Distributor",
//       icon: <Crown size={22} />,
//       retailers: "75+ retailers",
//       commission: "Up to 0.8% per txn",
//       payout: "₹9L – ₹12L / yr",
//       highlight: false,
//     },
//   ];

//   return (
//     <div
//       className="abheepay-distributor-page font-sans text-gray-800 bg-white overflow-x-hidden text-[0.81rem]"
//       style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
//     >
//       <FontLoader />

//       {/* ---------------- Hero Section ---------------- */}
//       <section className="relative bg-[#EFF6FF] overflow-hidden pt-[6rem] sm:pt-[7.5rem] md:pt-[6rem] pb-[4rem] sm:pb-[5rem] px-[0.608rem] sm:px-[1.012rem]">
//         {/* fintech dot-grid mesh */}
//         <div
//           className="absolute inset-0 opacity-[0.5] pointer-events-none"
//           style={{
//             backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)",
//             backgroundSize: "18px 18px",
//             maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 0%, transparent 75%)",
//             WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black 0%, transparent 75%)",
//           }}
//         ></div>
//         {/* ambient glow blobs */}
//         <div className="absolute -top-[4rem] -right-[4rem] w-[16rem] h-[16rem] bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none"></div>
//         <div className="absolute bottom-0 -left-[3rem] w-[12rem] h-[12rem] bg-[#5EEAD4]/20 rounded-full blur-3xl pointer-events-none"></div>
//         {/* decorative stacked square outlines, top-left */}
//         <div className="absolute top-[3rem] left-[1rem] w-[6rem] h-[6rem] border border-[#14B8A6]/25 rounded-2xl hidden sm:block"></div>
//         <div className="absolute top-[5.5rem] left-[3.5rem] w-[6rem] h-[6rem] border border-[#14B8A6]/20 rounded-2xl hidden sm:block"></div>
//         <div className="absolute top-[8rem] left-[0.5rem] w-[6rem] h-[6rem] border border-[#14B8A6]/15 rounded-2xl hidden sm:block"></div>
//         <div className="absolute bottom-[2rem] left-[8rem] w-[5rem] h-[5rem] border border-[#14B8A6]/15 rounded-2xl hidden lg:block"></div>
//         <div className="absolute bottom-[2rem] left-[13rem] w-[5rem] h-[5rem] border border-[#14B8A6]/10 rounded-2xl hidden lg:block"></div>

//         <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[2.5rem] lg:gap-[1.417rem] items-center">
//           {/* Left: copy */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-center lg:text-left"
//           >
//             <span className="inline-flex items-center gap-[0.304rem] mb-[0.709rem] px-[0.608rem] py-[0.253rem] rounded-full bg-white border border-[#14B8A6]/20 shadow-sm text-[0.585rem] font-bold uppercase tracking-[0.1em] text-[#0D9488]">
//               <Network size={12} /> Distribution Partner Program
//             </span>

//             <h1 className="text-[1.5rem] sm:text-[1.9rem] md:text-[2.15rem] font-extrabold mb-[0.81rem] leading-[1.2] text-slate-900">
//               Become a Certified{" "}
//               <span className="text-[#14B8A6]">Distribution</span> Partner Today!
//             </h1>

//             <p className="text-[0.7rem] sm:text-[0.81rem] text-slate-500 mb-[1.417rem] max-w-lg mx-auto lg:mx-0">
//               AbheePay ke saath apna banking vyapar shuru karein — build and lead your
//               own network of retail partners, and earn on every transaction they make.
//             </p>

//             <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[0.608rem] mb-[1.417rem]">
//               <Link to="/contact">
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="px-[1.215rem] py-[0.608rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.787rem] shadow-lg shadow-[#14B8A6]/20 flex items-center gap-[0.304rem]"
//                 >
//                   Start Earning <ArrowRight size={15} />
//                 </motion.button>
//               </Link>
//             </div>

//             {/* fintech stat strip */}
//             <div className="flex items-center justify-center lg:justify-start divide-x divide-slate-300/70">
//               <div className="pr-[1.012rem]">
//                 <p className="text-[1.012rem] font-extrabold text-slate-900">10K+</p>
//                 <p className="text-[0.54rem] text-slate-500">Active Distributors</p>
//               </div>
//               <div className="px-[1.012rem]">
//                 <p className="text-[1.012rem] font-extrabold text-slate-900">₹12L</p>
//                 <p className="text-[0.54rem] text-slate-500">Avg. Annual Earning</p>
//               </div>
//               <div className="pl-[1.012rem]">
//                 <p className="text-[1.012rem] font-extrabold text-slate-900">700+</p>
//                 <p className="text-[0.54rem] text-slate-500">Cities Covered</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right: hero illustration + floating fintech chips */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.94 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative"
//           >
//             <div className="relative w-full max-w-[24rem] mx-auto rounded-2xl overflow-hidden shadow-xl bg-white border border-[#14B8A6]/15">
//               <img
//                 src={heroIllustration}
//                 alt="Distributor managing a network of retail partners on the Abheepay platform"
//                 className="w-full h-auto object-cover"
//               />
//             </div>

//             {/* floating live-earnings chip with sparkline */}
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="hidden sm:flex absolute -top-[0.75rem] -left-[0.75rem] items-center gap-[0.405rem] bg-white rounded-xl shadow-lg px-[0.608rem] py-[0.405rem] z-20"
//             >
//               <span className="w-[1.417rem] h-[1.417rem] rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
//                 <TrendingUp size={13} />
//               </span>
//               <div>
//                 <p className="text-[0.585rem] font-bold text-slate-800 leading-none">₹1,04,200</p>
//                 <svg viewBox="0 0 60 18" className="w-[3rem] h-[0.9rem] mt-[0.15rem]">
//                   <polyline
//                     points="0,15 10,12 20,13 30,7 40,9 50,3 60,2"
//                     fill="none"
//                     stroke="#14B8A6"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </motion.div>

//             {/* floating "verified & secure" badge */}
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
//               className="hidden sm:flex absolute -bottom-[0.75rem] -right-[0.75rem] items-center gap-[0.304rem] bg-[#0F172A] text-white rounded-xl shadow-lg px-[0.608rem] py-[0.405rem] z-20"
//             >
//               <BadgeCheck size={14} className="text-[#5EEAD4]" />
//               <span className="text-[0.585rem] font-semibold">RBI &amp; IRDAI Verified</span>
//             </motion.div>

//             {/* floating network-size chip */}
//             <motion.div
//               animate={{ y: [0, -5, 0] }}
//               transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
//               className="hidden lg:flex absolute top-1/2 -right-[1.4rem] items-center gap-[0.304rem] bg-white rounded-xl shadow-lg px-[0.608rem] py-[0.405rem] z-20 border border-[#14B8A6]/15"
//             >
//               <span className="w-[1.417rem] h-[1.417rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center shrink-0">
//                 <Users size={13} />
//               </span>
//               <div>
//                 <p className="text-[0.585rem] font-bold text-slate-800 leading-none">42 Retailers</p>
//                 <p className="text-[0.45rem] text-slate-400 mt-[0.1rem]">In your network</p>
//               </div>
//             </motion.div>

//             {/* service chips row */}
//             <div className="mt-[1.417rem] flex flex-wrap items-center justify-center gap-[0.405rem] px-[0.5rem]">
//               <span className="inline-flex items-center gap-[0.304rem] bg-white rounded-full shadow-md px-[0.608rem] py-[0.304rem] text-[0.585rem] font-semibold text-slate-700">
//                 <span className="w-[1.012rem] h-[1.012rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
//                   <Landmark size={11} />
//                 </span>
//                 Banking Services
//               </span>
//               <span className="inline-flex items-center gap-[0.304rem] bg-white rounded-full shadow-md px-[0.608rem] py-[0.304rem] text-[0.585rem] font-semibold text-slate-700">
//                 <span className="w-[1.012rem] h-[1.012rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
//                   <Zap size={11} />
//                 </span>
//                 Payments
//               </span>
//               <span className="inline-flex items-center gap-[0.304rem] bg-white rounded-full shadow-md px-[0.608rem] py-[0.304rem] text-[0.585rem] font-semibold text-slate-700">
//                 <span className="w-[1.012rem] h-[1.012rem] rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
//                   <ShieldCheck size={11} />
//                 </span>
//                 Insurance
//               </span>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Trust & Security Bar ---------------- */}
//       <section className="bg-white border-b border-slate-100 py-[1.012rem] px-[0.608rem] sm:px-[1.012rem]">
//         <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-[0.81rem] text-center sm:text-left">
//           {[
//             { icon: <ShieldCheck size={16} />, label: "Bank-Grade Security" },
//             { icon: <Lock size={16} />, label: "256-bit Encryption" },
//             { icon: <BadgeCheck size={16} />, label: "RBI & IRDAI Compliant" },
//             { icon: <Headphones size={16} />, label: "24x7 Partner Support" },
//           ].map((t, i) => (
//             <div key={i} className="flex items-center justify-center sm:justify-start gap-[0.405rem]">
//               <span className="w-[1.72rem] h-[1.72rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
//                 {t.icon}
//               </span>
//               <span className="text-[0.585rem] sm:text-[0.63rem] font-semibold text-slate-600">{t.label}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------------- Why Choose ---------------- */}
//       <section className="py-[2.835rem] sm:py-[3.24rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl lg:text-[2rem] font-black tracking-[-0.03em] leading-tight text-slate-900 p-1">
//               Why Choose <span className="text-[#14B8A6]">AbheePay?</span>
//             </h2>
//           </div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[1.417rem] gap-y-[1.823rem]"
//           >
//             {whyChoose.map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.25 }}
//                 className="group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_40px_rgba(20,184,166,0.12)] hover:border-[#14B8A6]/40 transition-all duration-300 overflow-hidden"
//               >
//                 <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[#14B8A6]/0 group-hover:bg-[#14B8A6]/10 blur-xl transition-all duration-300"></div>
//                 <div className="relative w-14 h-14 rounded-xl flex items-center justify-center text-[#14B8A6] mb-3 group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">
//                   {item.icon}
//                 </div>

//                 <h3 className="relative text-[16px] font-bold text-slate-900 mb-2">
//                   {item.title}
//                 </h3>

//                 <p className="relative text-[12px] leading-4 text-slate-500">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- One Powerful Platform ---------------- */}
//       <section className="pb-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900 mb-[0.203rem]">
//             Power Every Transaction
//           </h2>
//           <p className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-[#14B8A6] mb-[0.81rem]">
//             Across Your Entire Distribution Network
//           </p>
//           <p className="text-gray-500 text-[0.675rem] sm:text-[0.787rem] mb-[1.417rem] max-w-2xl">
//             From enabling banking access to securing what customers value, equip your retailers with solutions that matter.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-[0.608rem]">
//             {categories.map((cat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ y: -4 }}
//                 className="bg-white p-[0.81rem] rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#14B8A6]/30 transition-all duration-300"
//               >
//                 <span className="w-[1.72rem] h-[1.72rem] rounded-full bg-[#14B8A6] text-white flex items-center justify-center mb-[0.506rem]">
//                   {cat.icon}
//                 </span>
//                 <h3 className="font-bold text-[0.75rem] text-slate-900 mb-[0.203rem]">{cat.title}</h3>
//                 <p className="text-gray-500 text-[0.675rem] leading-relaxed">{cat.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Earning Tiers ---------------- */}
//       <section className="py-[2.43rem] sm:py-[2.835rem] px-[0.608rem] sm:px-[1.012rem] bg-slate-50 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[14rem] h-[14rem] bg-[#14B8A6]/5 rounded-full blur-3xl pointer-events-none"></div>
//         <div className="max-w-5xl mx-auto relative z-10">
//           <div className="text-center mb-[1.417rem]">
//             <p className="text-[0.54rem] font-bold uppercase tracking-[0.2em] text-[#0D9488] mb-[0.304rem]">Grow As You Go</p>
//             <h2 className="text-[1.215rem] sm:text-[1.485rem] font-extrabold text-slate-900">
//               Your Earning Potential, By Network Size
//             </h2>
//             <p className="text-gray-500 text-[0.675rem] sm:text-[0.787rem] mt-[0.405rem] max-w-xl mx-auto">
//               The bigger your retailer network, the higher your commission slab. Here's how distributors typically scale with AbheePay.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-[0.81rem]">
//             {tiers.map((tier, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ y: -6 }}
//                 className={`relative rounded-2xl p-[1.012rem] border transition-all duration-300 ${
//                   tier.highlight
//                     ? "bg-[#0F172A] border-[#14B8A6]/40 shadow-xl shadow-[#14B8A6]/10 sm:-translate-y-[0.5rem]"
//                     : "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-[#14B8A6]/30"
//                 }`}
//               >
//                 {tier.highlight && (
//                   <span className="absolute -top-[0.6rem] left-1/2 -translate-x-1/2 px-[0.608rem] py-[0.152rem] bg-[#14B8A6] text-white text-[0.51rem] font-bold uppercase tracking-wider rounded-full shadow-md">
//                     Most Popular
//                   </span>
//                 )}
//                 <span
//                   className={`w-[2.43rem] h-[2.43rem] rounded-xl flex items-center justify-center mb-[0.709rem] ${
//                     tier.highlight ? "bg-[#14B8A6] text-white" : "bg-[#14B8A6]/10 text-[#14B8A6]"
//                   }`}
//                 >
//                   {tier.icon}
//                 </span>
//                 <h3 className={`font-extrabold text-[0.9rem] mb-[0.608rem] ${tier.highlight ? "text-white" : "text-slate-900"}`}>
//                   {tier.name}
//                 </h3>
//                 <div className={`space-y-[0.405rem] text-[0.675rem] ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
//                   <div className="flex justify-between">
//                     <span>Network size</span>
//                     <span className={`font-semibold ${tier.highlight ? "text-white" : "text-slate-800"}`}>{tier.retailers}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Commission</span>
//                     <span className={`font-semibold ${tier.highlight ? "text-white" : "text-slate-800"}`}>{tier.commission}</span>
//                   </div>
//                   <div className={`flex justify-between pt-[0.405rem] mt-[0.405rem] border-t ${tier.highlight ? "border-white/10" : "border-slate-100"}`}>
//                     <span>Est. payout</span>
//                     <span className={`font-extrabold ${tier.highlight ? "text-[#5EEAD4]" : "text-[#0D9488]"}`}>{tier.payout}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Onboarding: 3 Easy Steps ---------------- */}
//       <section className="py-[2.43rem] sm:py-[2.835rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-[1.35rem] overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.15)]">
//           {/* left: steps */}
//           <div className="bg-slate-50 p-[1.012rem] sm:p-[1.417rem]">
//             <p className="text-[0.54rem] font-bold uppercase tracking-[0.2em] text-gray-400 mb-[0.304rem]">Onboarding</p>
//             <h2 className="text-[1.012rem] sm:text-[1.215rem] font-extrabold text-slate-900 mb-[1.012rem]">
//               Become a Distributor in <br className="hidden sm:block" /> 3 Easy Steps
//             </h2>

//             <div className="space-y-0">
//               {steps.map((s, i) => (
//                 <div
//                   key={i}
//                   className={`py-[0.709rem] ${i === 1 ? "border-y border-[#14B8A6]" : "border-b border-slate-100"}`}
//                 >
//                   <div className="flex items-start gap-[0.608rem]">
//                     <span className="text-[0.75rem] font-extrabold text-[#14B8A6]">{s.no}</span>
//                     <div>
//                       <h3 className="font-bold text-[0.75rem] text-slate-900 mb-[0.101rem]">{s.title}</h3>
//                       <p className="text-gray-500 text-[0.675rem] leading-relaxed">{s.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* right: earnings mockup visual */}
//           <div className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] flex items-center justify-center p-[1.012rem] min-h-[16rem] overflow-hidden">
//             <div className="absolute -bottom-[3rem] -right-[3rem] w-[10rem] h-[10rem] rounded-full border border-white/10"></div>
//             <div className="absolute -top-[2rem] -left-[2rem] w-[7rem] h-[7rem] rounded-full border border-white/10"></div>
//             <div className="w-full max-w-[13rem] bg-white rounded-2xl shadow-2xl p-[0.709rem] relative z-10">
//               <p className="text-center text-[#14B8A6] font-extrabold text-[0.675rem] mb-[0.101rem]">CONGRATULATIONS!</p>
//               <p className="text-center text-gray-400 text-[0.45rem] mb-[0.608rem]">
//                 You have successfully completed <br /> AbheePay Distributor onboarding
//               </p>
//               <div className="flex justify-between bg-slate-50 rounded-lg p-[0.405rem] mb-[0.506rem] text-[0.45rem]">
//                 <div>
//                   <p className="text-gray-400">Status</p>
//                   <p className="font-bold text-slate-800">Active</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-400">Result</p>
//                   <p className="font-bold text-emerald-500">Approved</p>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between bg-slate-50 rounded-lg p-[0.405rem] mb-[0.506rem]">
//                 <div>
//                   <p className="text-[0.405rem] text-gray-400">Projected Commission</p>
//                   <p className="text-[0.585rem] font-bold text-slate-800">₹8,400 / mo</p>
//                 </div>
//                 <svg viewBox="0 0 60 18" className="w-[3rem] h-[0.9rem]">
//                   <polyline
//                     points="0,15 10,13 20,14 30,8 40,10 50,4 60,3"
//                     fill="none"
//                     stroke="#14B8A6"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//               <button className="w-full bg-[#14B8A6] text-white text-[0.495rem] font-bold py-[0.405rem] rounded-lg">
//                 Start Earning
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- More Products, More Opportunities ---------------- */}
//       <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[1.417rem] items-center">
//           <div>
//             <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900 mb-[0.405rem] leading-tight">
//               More Products <br /> More Opportunities
//             </h2>
//             <p className="text-gray-500 text-[0.675rem] sm:text-[0.787rem] mb-[0.81rem] max-w-sm">
//               Expand your distribution portfolio with our wide range of financial products and earn on every retailer transaction.
//             </p>
//             <Link to="/contact">
//               <button className="px-[1.012rem] py-[0.506rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.675rem]">
//                 Start Earning
//               </button>
//             </Link>
//           </div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-2 sm:grid-cols-3 gap-[0.506rem]"
//           >
//             {moreProducts.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -2 }}
//                 className="bg-white p-[0.506rem] rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-[0.354rem]"
//               >
//                 <div className="w-[1.417rem] h-[1.417rem] shrink-0 bg-[#14B8A6]/10 rounded-md flex items-center justify-center text-[#14B8A6]">
//                   {service.icon}
//                 </div>
//                 <h3 className="font-semibold text-[0.585rem] text-slate-700">{service.title}</h3>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Testimonial ---------------- */}
//       <section className="pb-[2.43rem] sm:pb-[2.835rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
//         <div className="max-w-3xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="relative bg-slate-50 border border-slate-100 rounded-2xl p-[1.417rem] text-center"
//           >
//             <Quote size={28} className="text-[#14B8A6]/30 mx-auto mb-[0.608rem]" />
//             <div className="flex items-center justify-center gap-[0.152rem] mb-[0.709rem]">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} size={13} className="fill-[#14B8A6] text-[#14B8A6]" />
//               ))}
//             </div>
//             <p className="text-[0.75rem] sm:text-[0.81rem] text-slate-600 leading-relaxed mb-[0.81rem]">
//               I started with 8 retailers under me in my first month. Within a year, my network grew to
//               over 60 partners and my monthly payouts more than doubled — AbheePay's dashboard made it
//               simple to track every retailer's activity in one place.
//             </p>
//             <p className="font-bold text-[0.75rem] text-slate-900">Rakesh Sharma</p>
//             <p className="text-[0.63rem] text-slate-400">Gold Distributor, Uttar Pradesh</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Dark CTA Banner ---------------- */}
//       <section className="relative bg-[#0F172A] py-[2.43rem] sm:py-[3.038rem] px-[0.608rem] sm:px-[1.012rem] text-center overflow-hidden">
//         <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:2.5rem_2.5rem]"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[3rem] h-[3rem] border-2 border-[#14B8A6]/60 rounded-2xl rotate-6"></div>
//         <div className="absolute top-0 right-[10%] w-[10rem] h-[10rem] bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none"></div>

//         <div className="relative z-10 max-w-2xl mx-auto pt-[3rem]">
//           <h2 className="text-[1.215rem] sm:text-[1.485rem] font-extrabold text-white mb-[1.012rem] leading-tight">
//             Become a Trusted <span className="text-[#14B8A6]">AbheePay Distributor</span> Today
//           </h2>
//           <div className="flex items-center justify-center gap-[0.608rem]">
//             <Link to="/contact">
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="px-[1.012rem] py-[0.506rem] bg-[#14B8A6] text-white rounded-lg font-bold hover:bg-[#0D9488] transition text-[0.675rem]"
//               >
//                 Get Started
//               </motion.button>
//             </Link>
//             <Link to="/contact">
//               <button className="px-[1.012rem] py-[0.506rem] bg-transparent border border-white/30 text-white rounded-lg font-bold hover:bg-white/10 transition text-[0.675rem]">
//                 Contact Sales
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Joins;









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

// Brand color used throughout: #14B8A6
// Rebuilt to match the live /join-as-distributor page structure
// (navbar, hero mockup, services grid, benefits, footer), restyled
// with the "Join as Retailer" page's design system: teal (#14B8A6),
// Inter typography, card/shadow language, and motion patterns.
// Contact form removed per request; earning-tier and testimonial
// sections added for extra depth.

// ---------------- Animation Variants ----------------
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Inter — injected as a real @import inside a <style> tag (more
// reliable inside a React tree than a <link>) and force-applied to
// every descendant so it can't be overridden by a stray global rule.
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





