// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   CreditCard, Smartphone, Wallet, Zap, DollarSign, ShieldCheck, 
//   Headphones, LayoutGrid, TrendingUp, UserPlus, CheckCircle, 
//   IndianRupee, Mail, Phone, MapPin, Globe, ArrowRight 
// } from 'lucide-react';

// // Animation Variants
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

// const Join = () => {
//   const services = [
//     { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={24} /> },
//     { title: "POS MACHINE", desc: "Point of Sale Solutions", icon: <CreditCard size={24} /> },
//     { title: "CC BILL PAY", desc: "Credit Card Bill Payments", icon: <DollarSign size={24} /> },
//     { title: "RECHARGE", desc: "Mobile & DTH Recharge", icon: <Smartphone size={24} /> },
//     { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={24} /> },
//     { title: "COLLECT", desc: "Payment Collection Services", icon: <Wallet size={24} /> },
//     { title: "CREDIT CARD", desc: "Credit Card Services", icon: <CreditCard size={24} /> },
//     { title: "LOAN", desc: "Loan Services", icon: <TrendingUp size={24} /> },
//     { title: "INSURANCE", desc: "Insurance", icon: <ShieldCheck size={24} /> },
//   ];

//   const benefits = [
//     { title: "0 investment business", icon: <DollarSign size={32} /> },
//     { title: "simple joining process", icon: <ShieldCheck size={32} /> },
//     { title: "24*7 customer service", icon: <Headphones size={32} /> },
//     { title: "Earn upto ₹4 Lakh to ₹12 Lakh per annum", icon: <IndianRupee size={32} /> },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-white overflow-x-hidden">

//       {/* Hero Section */}
//       <section className="relative py-10 sm:py-10 md:py-20 px-3 sm:px-6 text-center">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="max-w-4xl mx-auto relative z-10"
//         >
//           <span className="inline-block px-4 py-0.5 mb-2 sm:mb-3 text-[0.6rem] font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
//             Digital Banking Partner
//           </span>

//           <h1 className="text-2xl sm:text-3xl md:text-2xl font-extrabold mb-5 leading-tight sm:leading-snug md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
//             AbheePay ke saath apna <br className="sm:hidden" /> banking vyapar shuru karein
//           </h1>

//           <p className="text-base sm:text-lg md:text-xs text-gray-500 mb-8 sm:mb-5 max-w-xl mx-auto">
//             Enabling Indian SMEs to maximise their earning within a single platform.
//             Join the revolution of digital finance.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 sm:px-5 py-3 sm:py-2 rounded-full font-bold flex items-center mx-auto shadow-lg shadow-cyan-200 transition text-base sm:text-lg"
//           >
//             Get Started <ArrowRight className="ml-2" size={15} />
//           </motion.button>
//         </motion.div>

//         {/* Background Decor */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10 pointer-events-none">
//           <div className="absolute top-10 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-10 right-4 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400 rounded-full blur-3xl"></div>
//         </div>
//       </section>

//       {/* Partner CTA */}
//       <section className="bg-[#1e2736] py-12 sm:py-16 px-5 sm:px-8">
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto text-center text-white bg-gradient-to-br from-[#2a3447] to-[#1e2736] p-6 sm:p-10 rounded-3xl border border-gray-700"
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Start Your Banking Journey as Partner Today</h2>
//           <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
//             Join thousands of successful retailers who have transformed their business with AbheePay. Earn up to <span className="text-cyan-400 font-bold">₹12 Lakh</span> annually!
//           </p>
//           <motion.button 
//             whileHover={{ y: -3 }}
//             className="bg-cyan-400 hover:bg-cyan-300 text-[#1e2736] px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-black uppercase tracking-tight transition shadow-xl text-sm sm:text-base"
//           >
//             Join as Partner Now
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-12 sm:py-16 px-5 sm:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12 sm:mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
//             <div className="w-16 sm:w-20 h-1.5 bg-cyan-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
//             <p className="text-gray-500 text-base sm:text-lg">Comprehensive banking and financial solutions</p>
//           </div>

//           <motion.div 
//             variants={staggerContainer} 
//             initial="hidden" 
//             whileInView="visible" 
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
//           >
//             {services.map((service, index) => (
//               <motion.div 
//                 key={index} 
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }}
//                 className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="mb-5 sm:mb-6 w-12 sm:w-14 h-12 sm:h-14 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
//                   {service.icon}
//                 </div>
//                 <h3 className="font-bold text-lg sm:text-xl mb-2">{service.title}</h3>
//                 <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{service.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section – first one (dark) */}
//       <section className="bg-[#0f172a] py-12 sm:py-16 px-5 sm:px-8 text-center text-white relative overflow-hidden">
//         <div className="max-w-6xl mx-auto relative z-10">
//           <motion.p 
//             initial={{ opacity: 0 }} 
//             whileInView={{ opacity: 1 }}
//             className="text-cyan-400 font-bold mb-3 sm:mb-4 uppercase tracking-[0.2em] text-xs sm:text-sm"
//           >
//             Aapka business Humara investment
//           </motion.p>
//           <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 sm:mb-16">Abheepay Benefits</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div 
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-[#1e293b] p-6 sm:p-10 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-colors"
//               >
//                 <div className="text-cyan-400 mb-4 sm:mb-6 flex justify-center">{benefit.icon}</div>
//                 <p className="text-base sm:text-lg font-bold leading-snug">{benefit.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section – second one (light) */}
//       <section className="py-12 sm:py-16 px-5 sm:px-8 bg-[#f8fafc] text-center relative overflow-hidden">
//         <div className="absolute top-0 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-100/50 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-100/50 rounded-full blur-3xl" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.p 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-[#2dd4bf] font-bold mb-2 sm:mb-3 uppercase tracking-widest text-xs sm:text-sm"
//           >
//             Aapka business • Humara investment
//           </motion.p>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-10 sm:mb-16 tracking-tight">
//             Abheepay <span className="text-[#2dd4bf]">Benefits</span>
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="group bg-white p-6 sm:p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-indigo-200 transition-all duration-300"
//               >
//                 <div className="relative w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-6 sm:mb-8 flex items-center justify-center">
//                   <div className="absolute inset-0 bg-indigo-50 rounded-3xl rotate-6 group-hover:rotate-12 group-hover:bg-[#2dd4bf] transition-all duration-300"></div>
//                   <div className="relative text-[#2dd4bf] group-hover:text-white transition-colors duration-300 text-3xl sm:text-4xl">
//                     {benefit.icon}
//                   </div>
//                 </div>

//                 <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-tight">
//                   {benefit.title}
//                 </h3>

//                 <div className="mt-3 sm:mt-4 h-1 w-10 sm:w-12 bg-indigo-100 mx-auto rounded-full group-hover:w-16 sm:group-hover:w-20 group-hover:bg-[#2dd4bf] transition-all duration-300" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-12 sm:py-16 px-5 sm:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden">
//             <div className="bg-white p-8 sm:p-12 lg:p-16 order-2 lg:order-1">
//               <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Join Us Today</h2>
//               <form className="space-y-5 sm:space-y-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-gray-600 ml-1">Full Name</label>
//                   <input 
//                     type="text" 
//                     placeholder="John Doe" 
//                     className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none transition text-base" 
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
//                   <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-600 ml-1">Email</label>
//                     <input 
//                       type="email" 
//                       placeholder="john@example.com" 
//                       className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none transition text-base" 
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-semibold text-gray-600 ml-1">Phone</label>
//                     <input 
//                       type="tel" 
//                       placeholder="+91 00000 00000" 
//                       className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none transition text-base" 
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-gray-600 ml-1">City</label>
//                   <input 
//                     type="text" 
//                     placeholder="New Delhi" 
//                     className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none transition text-base" 
//                   />
//                 </div>
//                 <motion.button 
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-cyan-400 text-white font-black py-4 sm:py-5 rounded-xl hover:bg-cyan-500 transition-colors mt-4 text-base sm:text-lg shadow-lg shadow-cyan-100"
//                 >
//                   Submit Application
//                 </motion.button>
//               </form>
//             </div>

//             <div className="bg-[#1e2736] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative order-1 lg:order-2">
//               <div className="relative z-10">
//                 <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">Contact Information</h3>
//                 <div className="space-y-6 sm:space-y-8">
//                   <div className="flex items-center gap-4 sm:gap-5">
//                     <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <Mail size={20} className="sm:size-6" />
//                     </div>
//                     <span className="text-base sm:text-lg text-gray-300">care@abheepay.in</span>
//                   </div>
//                   <div className="flex items-center gap-4 sm:gap-5">
//                     <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <Phone size={20} className="sm:size-6" />
//                     </div>
//                     <span className="text-base sm:text-lg text-gray-300">88600 37218</span>
//                   </div>
//                   <div className="flex items-start gap-4 sm:gap-5">
//                     <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <MapPin size={20} className="sm:size-6" />
//                     </div>
//                     <span className="text-base sm:text-lg text-gray-300 leading-relaxed">
//                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-4 sm:gap-5">
//                     <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <Globe size={20} className="sm:size-6" />
//                     </div>
//                     <span className="text-base sm:text-lg text-gray-300">www.abheepay.com</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 relative z-10">
//                 <p className="text-gray-400 italic text-sm sm:text-base">
//                   "Empowering Rural India through Digital Innovation."
//                 </p>
//               </div>
//               <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-400/10 blur-3xl rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Join;










// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import {
//   CreditCard, Smartphone, Wallet, Zap, DollarSign, ShieldCheck,
//   Headphones, LayoutGrid, TrendingUp, UserPlus, CheckCircle,
//   IndianRupee, Mail, Phone, MapPin, Globe, ArrowRight
// } from 'lucide-react';

// // Animation Variants
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

// const Join = () => {
//   const services = [
//     { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={16} /> },
//     { title: "POS MACHINE", desc: "Point of Sale Solutions", icon: <CreditCard size={16} /> },
//     { title: "CC BILL PAY", desc: "Credit Card Bill Payments", icon: <DollarSign size={16} /> },
//     { title: "RECHARGE", desc: "Mobile & DTH Recharge", icon: <Smartphone size={16} /> },
//     { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={16} /> },
//     { title: "COLLECT", desc: "Payment Collection Services", icon: <Wallet size={16} /> },
//     { title: "CREDIT CARD", desc: "Credit Card Services", icon: <CreditCard size={16} /> },
//     { title: "LOAN", desc: "Loan Services", icon: <TrendingUp size={16} /> },
//     { title: "INSURANCE", desc: "Insurance", icon: <ShieldCheck size={16} /> },
//   ];

//   const benefits = [
//     { title: "0 investment business", icon: <DollarSign size={18} /> },
//     { title: "simple joining process", icon: <ShieldCheck size={18} /> },
//     { title: "24*7 customer service", icon: <Headphones size={18} /> },
//     { title: "Earn upto ₹4 Lakh to ₹12 Lakh per annum", icon: <IndianRupee size={18} /> },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-white overflow-x-hidden">

//       {/* Hero Section */}
//       <section className="relative py-5 sm:py-5 md:py-10 px-2 sm:px-3 text-center">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="max-w-4xl mx-auto relative z-10"
//         >
//           <span className="inline-block px-2 py-0.5 mt-3 sm:mt-4 mb-1 sm:mb-1.5 text-[0.5rem] font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
//             Digital Banking Partner
//           </span>

//           <h1 className="text-lg sm:text-xl md:text-lg font-extrabold mb-2.5 leading-tight sm:leading-snug md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
//             AbheePay ke saath apna <br className="sm:hidden" /> banking vyapar shuru karein
//           </h1>

//           <p className="text-sm sm:text-sm md:text-[0.65rem] text-gray-500 mb-4 sm:mb-2.5 max-w-xl mx-auto">
//             Enabling Indian SMEs to maximise their earning within a single platform.
//             Join the revolution of digital finance.
//           </p>

//           <Link to="/contact">
//             <button className="px-6 py-3 bg-[#00C4C7] text-white rounded-lg hover:bg-[#00b2b5]">
//               Get Started
//             </button>
//           </Link>
//         </motion.div>

//         {/* Background Decor */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10 pointer-events-none">
//           <div className="absolute top-5 left-2 sm:left-5 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-400 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-5 right-2 sm:right-5 w-24 sm:w-32 h-24 sm:h-32 bg-blue-400 rounded-full blur-3xl"></div>
//         </div>
//       </section>

//       {/* Partner CTA */}
//       <section className="bg-[#1e2736] py-6 sm:py-8 px-2.5 sm:px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto text-center text-white bg-gradient-to-br from-[#2a3447] to-[#1e2736] p-3 sm:p-5 rounded-3xl border border-gray-700"
//         >
//           <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Start Your Banking Journey as Partner Today</h2>
//           <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-sm max-w-2xl mx-auto">
//             Join thousands of successful retailers who have transformed their business with AbheePay. Earn up to <span className="text-cyan-400 font-bold">₹12 Lakh</span> annually!
//           </p>
//           <motion.button
//             whileHover={{ y: -3 }}
//             className="bg-cyan-400 hover:bg-cyan-300 text-[#1e2736] px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl font-black uppercase tracking-tight transition shadow-xl text-xs sm:text-sm"
//           >
//             Join as Partner Now
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-6 sm:py-8 px-2.5 sm:px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-6 sm:mb-8">
//             <h2 className="text-xl sm:text-2xl font-bold mb-2">Our Services</h2>
//             <div className="w-8 sm:w-10 h-1 bg-cyan-400 mx-auto rounded-full mb-2 sm:mb-3"></div>
//             <p className="text-gray-500 text-sm sm:text-sm font-bold">Comprehensive banking and financial solutions</p>
//           </div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }}
//                 className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="mb-2.5 sm:mb-3 w-6 sm:w-7 h-6 sm:h-7 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
//                   {service.icon}
//                 </div>
//                 <h3 className="font-bold text-sm sm:text-base mb-1">{service.title}</h3>
//                 <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{service.desc}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Benefits Section – first one (dark) */}
//       <section className="bg-[#0f172a] py-6 sm:py-8 px-2.5 sm:px-4 text-center text-white relative overflow-hidden">
//         <div className="max-w-6xl mx-auto relative z-10">
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-cyan-400 font-bold mb-1.5 sm:mb-2 uppercase tracking-[0.2em] text-[0.65rem] sm:text-xs"
//           >
//             Aapka business Humara investment
//           </motion.p>
//           <h2 className="text-xl sm:text-2xl font-extrabold mb-5 sm:mb-8">Abheepay Benefits</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-[#1e293b] p-3 sm:p-5 rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-colors"
//               >
//                 <div className="text-cyan-400 mb-2 sm:mb-3 flex justify-center">{benefit.icon}</div>
//                 <p className="text-sm sm:text-sm font-bold leading-snug">{benefit.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section – second one (light) */}
//       <section className="py-6 sm:py-8 px-2.5 sm:px-4 bg-[#f8fafc] text-center relative overflow-hidden">
//         <div className="absolute top-0 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-100/50 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-100/50 rounded-full blur-3xl" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-[#2dd4bf] font-bold mb-1 sm:mb-1.5 uppercase tracking-widest text-[0.65rem] sm:text-xs"
//           >
//             Aapka business • Humara investment
//           </motion.p>

//           <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-5 sm:mb-8 tracking-tight">
//             Abheepay <span className="text-[#2dd4bf]">Benefits</span>
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="group bg-white p-3 sm:p-5 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-indigo-200 transition-all duration-300"
//               >
//                 <div className="relative w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
//                   <div className="absolute inset-0 bg-indigo-50 rounded-3xl rotate-6 group-hover:rotate-12 group-hover:bg-[#2dd4bf] transition-all duration-300"></div>
//                   <div className="relative text-[#2dd4bf] group-hover:text-white transition-colors duration-300 text-lg sm:text-xl">
//                     {benefit.icon}
//                   </div>
//                 </div>

//                 <h3 className="text-sm sm:text-base font-extrabold text-slate-800 leading-tight">
//                   {benefit.title}
//                 </h3>

//                 <div className="mt-1.5 sm:mt-2 h-0.5 w-5 sm:w-6 bg-indigo-100 mx-auto rounded-full group-hover:w-8 sm:group-hover:w-10 group-hover:bg-[#2dd4bf] transition-all duration-300" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-6 sm:py-8 px-2.5 sm:px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden">
//             <div className="bg-white p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
//               <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Join Us Today</h2>
//               <form className="space-y-2.5 sm:space-y-3">
//                 <div className="space-y-1">
//                   <label className="text-xs font-semibold text-gray-600 ml-1">Full Name</label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-base text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
//                   <div className="space-y-1">
//                     <label className="text-xs font-semibold text-gray-600 ml-1">Email</label>
//                     <input
//                       type="email"
//                       placeholder="john@example.com"
//                       className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-base text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                   <div className="space-y-1">
//                     <label className="text-xs font-semibold text-gray-600 ml-1">Phone</label>
//                     <input
//                       type="tel"
//                       placeholder="+91 00000 00000"
//                       className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-base text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-semibold text-gray-600 ml-1">City</label>
//                   <input
//                     type="text"
//                     placeholder="New Delhi"
//                     className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-base text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-cyan-400 text-white font-black py-2 sm:py-2.5 rounded-lg hover:bg-cyan-500 transition-colors mt-2 text-sm sm:text-sm shadow-lg shadow-cyan-100"
//                 >
//                   Submit Application
//                 </motion.button>
//               </form>
//             </div>

//             <div className="bg-[#1e2736] text-white p-4 sm:p-6 lg:p-8 flex flex-col justify-between relative order-1 lg:order-2">
//               <div className="relative z-10">
//                 <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">Contact Information</h3>
//                 <div className="space-y-3 sm:space-y-4">
//                   <div className="flex items-center gap-2 sm:gap-2.5">
//                     <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <Mail size={12} />
//                     </div>
//                     <span className="text-xs sm:text-sm text-gray-300">care@abheepay.in</span>
//                   </div>
//                   <div className="flex items-center gap-2 sm:gap-2.5">
//                     <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <Phone size={12} />
//                     </div>
//                     <span className="text-xs sm:text-sm text-gray-300">88600 37218</span>
//                   </div>
//                   <div className="flex items-start gap-2 sm:gap-2.5">
//                     <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <MapPin size={12} />
//                     </div>
//                     <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
//                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2 sm:gap-2.5">
//                     <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <Globe size={12} />
//                     </div>
//                     <span className="text-xs sm:text-sm text-gray-300">www.abheepay.com</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 relative z-10">
//                 <p className="text-gray-400 italic text-xs sm:text-xs">
//                   "Empowering Rural India through Digital Innovation."
//                 </p>
//               </div>
//               <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-cyan-400/10 blur-3xl rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Join;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import {
//   CreditCard, Smartphone, Wallet, Zap, DollarSign, ShieldCheck,
//   Headphones, LayoutGrid, TrendingUp, CheckCircle,
//   IndianRupee, Mail, Phone, MapPin, Globe, ArrowRight, Play,
//   Handshake, Landmark, User
// } from 'lucide-react';

// // Animation Variants
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

// const Join = () => {
//   const services = [
//     { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={20} /> },
//     { title: "POS MACHINE", desc: "Point of Sale Solutions", icon: <CreditCard size={20} /> },
//     { title: "CC BILL PAY", desc: "Credit Card Bill Payments", icon: <CreditCard size={20} /> },
//     { title: "RECHARGE", desc: "Mobile & DTH Recharge", icon: <Smartphone size={20} /> },
//     { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={20} /> },
//     { title: "COLLECT", desc: "Payment Collection Services", icon: <Wallet size={20} /> },
//     { title: "CREDIT CARD", desc: "Credit Card Services", icon: <CreditCard size={20} /> },
//     { title: "LOAN", desc: "Loan Services", icon: <TrendingUp size={20} /> },
//     { title: "INSURANCE", desc: "Insurance", icon: <ShieldCheck size={20} /> },
//   ];

//   const benefits = [
//     { title: "0 Investment Business", icon: <IndianRupee size={20} /> },
//     { title: "Simple Joining Process", icon: <ShieldCheck size={20} /> },
//     { title: "24*7 Customer Service", icon: <Headphones size={20} /> },
//     { title: "Earn upto ₹4 Lakh to ₹12 Lakh per annum", icon: <IndianRupee size={20} /> },
//   ];

//   const whyChoose = [
//     { title: "0 Investment Business", icon: <IndianRupee size={22} /> },
//     { title: "Simple Joining Process", icon: <ShieldCheck size={22} /> },
//     { title: "24*7 Customer Service", icon: <Headphones size={22} /> },
//     { title: "Upto ₹12 Lakh Earning Potential", icon: <TrendingUp size={22} /> },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-white overflow-x-hidden">

//       {/* ---------------- Hero Section ---------------- */}
//       <section className="relative py-10 sm:py-14 md:py-20 px-4 sm:px-6 overflow-hidden">
//         {/* Background Decor */}
//         <div className="absolute inset-0 -z-0 pointer-events-none">
//           <div className="absolute top-10 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-cyan-100/60 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-blue-100/50 rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">
//           {/* Left: copy */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-center lg:text-left"
//           >
//             <span className="inline-block px-3 py-1 mb-4 text-[0.65rem] font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
//               Digital Banking Partner
//             </span>

//             <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold mb-4 leading-tight text-slate-900">
//               AbheePay ke saath apna{" "}
//               <span className="text-cyan-500">banking vyapar</span> shuru karein
//             </h1>

//             <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-xl mx-auto lg:mx-0">
//               Enabling Indian SMEs to maximise their earning within a single platform.
//               Join the revolution of digital finance.
//             </p>

//             <div className="flex items-center justify-center lg:justify-start gap-4">
//               <Link to="/contact">
//                 <button className="px-6 py-3 bg-[#00C4C7] text-white rounded-lg font-semibold hover:bg-[#00b2b5] transition shadow-lg shadow-cyan-100">
//                   Get Started
//                 </button>
//               </Link>
//               <button className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-cyan-600 transition">
//                 <span className="w-9 h-9 rounded-full border-2 border-slate-300 flex items-center justify-center">
//                   <Play size={14} fill="currentColor" />
//                 </span>
//                 Watch Video
//               </button>
//             </div>
//           </motion.div>

//           {/* Right: illustration */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative h-[340px] sm:h-[400px] flex items-center justify-center"
//           >
//             {/* base platform */}
//             <div className="absolute bottom-4 w-64 h-10 sm:w-72 sm:h-12 bg-slate-100 rounded-full blur-sm"></div>

//             {/* credit card behind phone */}
//             <div className="absolute bottom-8 right-6 sm:right-10 w-28 h-18 sm:w-32 sm:h-20 rounded-xl bg-gradient-to-br from-[#1e2736] to-cyan-700 shadow-xl rotate-6"></div>

//             {/* phone frame */}
//             <div className="relative w-44 sm:w-52 h-[300px] sm:h-[360px] bg-slate-900 rounded-[2rem] p-2 shadow-2xl z-10">
//               <div className="w-full h-full bg-white rounded-[1.6rem] overflow-hidden flex flex-col items-center px-3 pt-6">
//                 <span className="text-cyan-500 font-extrabold tracking-wide text-sm mb-4">ABHEEPAY</span>
//                 <div className="w-full bg-slate-50 rounded-xl p-3 border border-slate-100 shadow-sm">
//                   <p className="text-[0.6rem] text-slate-400 mb-1">Total Earnings</p>
//                   <p className="text-lg font-extrabold text-slate-800">₹12,00,000</p>
//                   <p className="text-[0.65rem] font-semibold text-emerald-500 mb-2">+20% This Month</p>
//                   <svg viewBox="0 0 100 30" className="w-full h-8">
//                     <polyline
//                       points="0,25 15,20 30,22 45,12 60,15 75,5 100,2"
//                       fill="none"
//                       stroke="#2dd4bf"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* floating card: CC Bill Pay */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-6 left-0 sm:left-2 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2 z-20"
//             >
//               <span className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-500">
//                 <Wallet size={16} />
//               </span>
//               <span className="text-[0.7rem] font-semibold text-slate-700">CC Bill Pay</span>
//             </motion.div>

//             {/* floating card: BBPS */}
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-16 left-0 sm:-left-2 bg-white rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2 z-20"
//             >
//               <span className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white">
//                 <Zap size={16} />
//               </span>
//               <span className="text-[0.7rem] font-semibold text-slate-700">BBPS</span>
//             </motion.div>

//             {/* floating card: POS Machine */}
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//               transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-24 right-0 sm:-right-2 bg-white rounded-xl shadow-lg px-3 py-2.5 flex flex-col items-center gap-1 z-20"
//             >
//               <span className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-500">
//                 <LayoutGrid size={16} />
//               </span>
//               <span className="text-[0.65rem] font-semibold text-slate-700">POS Machine</span>
//             </motion.div>

//             {/* connecting dashed lines */}
//             <svg className="absolute inset-0 w-full h-full -z-0 hidden sm:block" viewBox="0 0 400 400">
//               <line x1="70" y1="70" x2="180" y2="140" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//               <line x1="60" y1="280" x2="170" y2="230" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//               <line x1="330" y1="150" x2="240" y2="180" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//             </svg>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Partner CTA ---------------- */}
//       <section className="px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.97 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-6xl mx-auto bg-gradient-to-r from-[#0ea5a3] to-[#0f9c9f] rounded-3xl px-5 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-white"
//         >
//           <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
//             <Handshake size={26} />
//           </div>
//           <div className="flex-1 text-center sm:text-left">
//             <h2 className="text-lg sm:text-xl font-bold mb-1.5">Start Your Banking Journey as Partner Today</h2>
//             <p className="text-cyan-50/90 text-sm max-w-2xl">
//               Join thousands of successful retailers who have transformed their business with AbheePay.
//               Earn up to <span className="font-bold text-white">₹12 Lakh</span> annually!
//             </p>
//           </div>
//           <motion.button
//             whileHover={{ y: -3 }}
//             className="bg-white text-[#0f9c9f] px-5 sm:px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg whitespace-nowrap"
//           >
//             Join as Partner Now <ArrowRight size={16} />
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* ---------------- Services Grid ---------------- */}
//       <section className="py-14 sm:py-16 px-4 sm:px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-10">
//             <p className="flex items-center justify-center gap-3 text-cyan-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
//               <span className="w-6 h-px bg-cyan-300"></span>
//               Our Services
//               <span className="w-6 h-px bg-cyan-300"></span>
//             </p>
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
//               Comprehensive banking and <br className="hidden sm:block" />
//               <span className="text-cyan-500">financial solutions</span>
//             </h2>
//           </div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -6 }}
//                 className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center gap-4"
//               >
//                 <div className="w-11 h-11 shrink-0 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-sm tracking-wide mb-0.5">{service.title}</h3>
//                   <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Benefits (dark, boxed) ---------------- */}
//       <section className="px-4 sm:px-6 pb-14 sm:pb-16">
//         <div className="max-w-6xl mx-auto bg-gradient-to-br from-cyan-50 to-slate-50 rounded-[2rem] py-10 sm:py-12 px-5 sm:px-8">
//           <div className="text-center mb-8 sm:mb-10">
//             <p className="text-cyan-600 font-bold mb-1.5 uppercase tracking-[0.2em] text-xs">
//               Aapka Business Humara Investment
//             </p>
//             <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
//               Abheepay <span className="text-cyan-500">Benefits</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="w-11 h-11 mx-auto rounded-full bg-cyan-500 text-white flex items-center justify-center mb-3">
//                   {benefit.icon}
//                 </div>
//                 <p className="text-sm font-bold text-slate-800 leading-snug">{benefit.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Why Choose (light) ---------------- */}
//       <section className="py-14 sm:py-16 px-4 sm:px-6 bg-[#f8fafc] text-center relative overflow-hidden">
//         <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-100/50 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-indigo-100/50 rounded-full blur-3xl" />

//         <div className="max-w-6xl mx-auto relative z-10">
//           <p className="flex items-center justify-center gap-3 text-[#2dd4bf] font-bold mb-2 uppercase tracking-widest text-xs">
//             <span className="w-6 h-px bg-cyan-300"></span>
//             Why Choose AbheePay?
//             <span className="w-6 h-px bg-cyan-300"></span>
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
//             {whyChoose.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="group bg-white p-5 sm:p-6 rounded-[1.75rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-cyan-200 transition-all duration-300"
//               >
//                 <div className="relative w-11 h-11 mx-auto mb-4 flex items-center justify-center">
//                   <div className="absolute inset-0 bg-indigo-50 rounded-2xl rotate-6 group-hover:rotate-12 group-hover:bg-[#2dd4bf] transition-all duration-300"></div>
//                   <div className="relative text-[#2dd4bf] group-hover:text-white transition-colors duration-300">
//                     {item.icon}
//                   </div>
//                 </div>

//                 <h3 className="text-sm sm:text-base font-extrabold text-slate-800 leading-tight">
//                   {item.title}
//                 </h3>

//                 <div className="mt-2.5 h-0.5 w-6 bg-indigo-100 mx-auto rounded-full group-hover:w-10 group-hover:bg-[#2dd4bf] transition-all duration-300" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Contact Section ---------------- */}
//       <section className="py-14 sm:py-16 px-4 sm:px-6 bg-gray-50">
//         <div className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden">
//             {/* form */}
//             <div className="bg-white p-6 sm:p-8 order-2 lg:order-1">
//               <div className="flex items-center gap-2 mb-5">
//                 <span className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-500 flex items-center justify-center">
//                   <User size={16} />
//                 </span>
//                 <h2 className="text-lg sm:text-xl font-bold">Join Us Today</h2>
//               </div>
//               <form className="space-y-3">
//                 <div className="space-y-1">
//                   <label className="text-xs font-semibold text-gray-600 ml-1">Full Name</label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-sm text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   <div className="space-y-1">
//                     <label className="text-xs font-semibold text-gray-600 ml-1">Email</label>
//                     <input
//                       type="email"
//                       placeholder="john@example.com"
//                       className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-sm text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                   <div className="space-y-1">
//                     <label className="text-xs font-semibold text-gray-600 ml-1">Phone</label>
//                     <input
//                       type="tel"
//                       placeholder="+91 00000 00000"
//                       className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-sm text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-xs font-semibold text-gray-600 ml-1">City</label>
//                   <input
//                     type="text"
//                     placeholder="New Delhi"
//                     className="w-full p-3.5 bg-white border border-gray-200 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-sm text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-cyan-400 text-white font-bold py-3 rounded-xl hover:bg-cyan-500 transition-colors mt-2 text-sm shadow-lg shadow-cyan-100 flex items-center justify-center gap-2"
//                 >
//                   Submit Application <ArrowRight size={15} />
//                 </motion.button>
//               </form>
//             </div>

//             {/* contact info */}
//             <div className="bg-[#1e2736] text-white p-6 sm:p-8 flex flex-col justify-between relative order-1 lg:order-2 overflow-hidden">
//               <div className="relative z-10">
//                 <h3 className="text-lg sm:text-xl font-bold mb-5">Contact Information</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <Mail size={15} />
//                     </div>
//                     <span className="text-sm text-gray-300">care@abheepay.in</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <Phone size={15} />
//                     </div>
//                     <span className="text-sm text-gray-300">88600 37218</span>
//                   </div>
//                   <div className="flex items-start gap-3">
//                     <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <MapPin size={15} />
//                     </div>
//                     <span className="text-sm text-gray-300 leading-relaxed">
//                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 shrink-0">
//                       <Globe size={15} />
//                     </div>
//                     <span className="text-sm text-gray-300">www.abheepay.com</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
//                 <p className="text-gray-400 italic text-xs">
//                   "Empowering Rural India through Digital Innovation."
//                 </p>
//               </div>

//               <Landmark size={140} className="absolute -bottom-6 -right-6 text-white/5 pointer-events-none" />
//               <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-400/10 blur-3xl rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Join;













// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import {
//   CreditCard, Smartphone, Wallet, Zap, DollarSign, ShieldCheck,
//   Headphones, LayoutGrid, TrendingUp, CheckCircle,
//   IndianRupee, Mail, Phone, MapPin, Globe, ArrowRight, Play,
//   Handshake, Landmark, User
// } from 'lucide-react';

// // Animation Variants
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

// const Join = () => {
//   const services = [
//     { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={15} /> },
//     { title: "POS MACHINE", desc: "Point of Sale Solutions", icon: <CreditCard size={15} /> },
//     { title: "CC BILL PAY", desc: "Credit Card Bill Payments", icon: <CreditCard size={15} /> },
//     { title: "RECHARGE", desc: "Mobile & DTH Recharge", icon: <Smartphone size={15} /> },
//     { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={15} /> },
//     { title: "COLLECT", desc: "Payment Collection Services", icon: <Wallet size={15} /> },
//     { title: "CREDIT CARD", desc: "Credit Card Services", icon: <CreditCard size={15} /> },
//     { title: "LOAN", desc: "Loan Services", icon: <TrendingUp size={15} /> },
//     { title: "INSURANCE", desc: "Insurance", icon: <ShieldCheck size={15} /> },
//   ];

//   const benefits = [
//     { title: "0 Investment Business", icon: <IndianRupee size={15} /> },
//     { title: "Simple Joining Process", icon: <ShieldCheck size={15} /> },
//     { title: "24*7 Customer Service", icon: <Headphones size={15} /> },
//     { title: "Earn upto ₹4 Lakh to ₹12 Lakh per annum", icon: <IndianRupee size={15} /> },
//   ];

//   const whyChoose = [
//     { title: "0 Investment Business", icon: <IndianRupee size={16} /> },
//     { title: "Simple Joining Process", icon: <ShieldCheck size={16} /> },
//     { title: "24*7 Customer Service", icon: <Headphones size={16} /> },
//     { title: "Upto ₹12 Lakh Earning Potential", icon: <TrendingUp size={16} /> },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[0.9rem]">

//       {/* ---------------- Hero Section ---------------- */}
//       <section className="relative py-7 sm:py-10 md:py-14 px-3 sm:px-5 overflow-hidden">
//         {/* Background Decor */}
//         <div className="absolute inset-0 -z-0 pointer-events-none">
//           <div className="absolute top-8 left-0 w-28 h-28 sm:w-48 sm:h-48 bg-cyan-100/60 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-48 sm:h-48 bg-blue-100/50 rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-5 items-center">
//           {/* Left: copy */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-center lg:text-left"
//           >
//             <span className="inline-block px-2.5 py-0.5 mb-3 text-[0.55rem] font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
//               Digital Banking Partner
//             </span>

//             <h1 className="text-2xl sm:text-3xl md:text-[1.95rem] font-extrabold mb-3 leading-tight text-slate-900">
//               AbheePay ke saath apna{" "}
//               <span className="text-cyan-500">banking vyapar</span> shuru karein
//             </h1>

//             <p className="text-xs sm:text-sm text-gray-500 mb-4 max-w-lg mx-auto lg:mx-0">
//               Enabling Indian SMEs to maximise their earning within a single platform.
//               Join the revolution of digital finance.
//             </p>

//             <div className="flex items-center justify-center lg:justify-start gap-3">
//               <Link to="/contact">
//                 <button className="px-[1.125rem] py-[0.5625rem] bg-[#00C4C7] text-white rounded-lg font-semibold hover:bg-[#00b2b5] transition shadow-lg shadow-cyan-100 text-sm">
//                   Get Started
//                 </button>
//               </Link>
//               <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-cyan-600 transition">
//                 <span className="w-7 h-7 rounded-full border-2 border-slate-300 flex items-center justify-center">
//                   <Play size={11} fill="currentColor" />
//                 </span>
//                 Watch Video
//               </button>
//             </div>
//           </motion.div>

//           {/* Right: illustration */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative h-[255px] sm:h-[300px] flex items-center justify-center"
//           >
//             {/* base platform */}
//             <div className="absolute bottom-3 w-48 h-7 sm:w-[13.5rem] sm:h-9 bg-slate-100 rounded-full blur-sm"></div>

//             {/* credit card behind phone */}
//             <div className="absolute bottom-6 right-4 sm:right-8 w-[5.25rem] h-14 sm:w-24 sm:h-[3.75rem] rounded-lg bg-gradient-to-br from-[#1e2736] to-cyan-700 shadow-xl rotate-6"></div>

//             {/* phone frame */}
//             <div className="relative w-[8.25rem] sm:w-[9.75rem] h-[225px] sm:h-[270px] bg-slate-900 rounded-[1.5rem] p-1.5 shadow-2xl z-10">
//               <div className="w-full h-full bg-white rounded-[1.2rem] overflow-hidden flex flex-col items-center px-2.5 pt-[1.125rem]">
//                 <span className="text-cyan-500 font-extrabold tracking-wide text-[0.7rem] mb-3">ABHEEPAY</span>
//                 <div className="w-full bg-slate-50 rounded-lg p-2.5 border border-slate-100 shadow-sm">
//                   <p className="text-[0.45rem] text-slate-400 mb-0.5">Total Earnings</p>
//                   <p className="text-sm font-extrabold text-slate-800">₹12,00,000</p>
//                   <p className="text-[0.5rem] font-semibold text-emerald-500 mb-1.5">+20% This Month</p>
//                   <svg viewBox="0 0 100 30" className="w-full h-6">
//                     <polyline
//                       points="0,25 15,20 30,22 45,12 60,15 75,5 100,2"
//                       fill="none"
//                       stroke="#2dd4bf"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* floating card: CC Bill Pay */}
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-[1.125rem] left-0 sm:left-1.5 bg-white rounded-lg shadow-lg px-2.5 py-2 flex items-center gap-1.5 z-20"
//             >
//               <span className="w-6 h-6 rounded-md bg-cyan-50 flex items-center justify-center text-cyan-500">
//                 <Wallet size={12} />
//               </span>
//               <span className="text-[0.55rem] font-semibold text-slate-700">CC Bill Pay</span>
//             </motion.div>

//             {/* floating card: BBPS */}
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-12 left-0 sm:-left-1.5 bg-white rounded-lg shadow-lg px-2.5 py-2 flex items-center gap-1.5 z-20"
//             >
//               <span className="w-6 h-6 rounded-md bg-cyan-500 flex items-center justify-center text-white">
//                 <Zap size={12} />
//               </span>
//               <span className="text-[0.55rem] font-semibold text-slate-700">BBPS</span>
//             </motion.div>

//             {/* floating card: POS Machine */}
//             <motion.div
//               animate={{ y: [0, -4.5, 0] }}
//               transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-[4.5rem] right-0 sm:-right-1.5 bg-white rounded-lg shadow-lg px-2.5 py-2 flex flex-col items-center gap-0.5 z-20"
//             >
//               <span className="w-6 h-6 rounded-md bg-cyan-50 flex items-center justify-center text-cyan-500">
//                 <LayoutGrid size={12} />
//               </span>
//               <span className="text-[0.5rem] font-semibold text-slate-700">POS Machine</span>
//             </motion.div>

//             {/* connecting dashed lines */}
//             <svg className="absolute inset-0 w-full h-full -z-0 hidden sm:block" viewBox="0 0 400 400">
//               <line x1="70" y1="70" x2="180" y2="140" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//               <line x1="60" y1="280" x2="170" y2="230" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//               <line x1="330" y1="150" x2="240" y2="180" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//             </svg>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Partner CTA ---------------- */}
//       <section className="px-3 sm:px-5">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.97 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto bg-gradient-to-r from-[#0ea5a3] to-[#0f9c9f] rounded-2xl px-4 sm:px-6 py-[1.125rem] sm:py-6 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-[1.125rem] text-white"
//         >
//           <div className="w-[2.625rem] h-[2.625rem] rounded-full bg-white/15 flex items-center justify-center shrink-0">
//             <Handshake size={19} />
//           </div>
//           <div className="flex-1 text-center sm:text-left">
//             <h2 className="text-sm sm:text-base font-bold mb-1">Start Your Banking Journey as Partner Today</h2>
//             <p className="text-cyan-50/90 text-xs max-w-xl">
//               Join thousands of successful retailers who have transformed their business with AbheePay.
//               Earn up to <span className="font-bold text-white">₹12 Lakh</span> annually!
//             </p>
//           </div>
//           <motion.button
//             whileHover={{ y: -3 }}
//             className="bg-white text-[#0f9c9f] px-3.5 sm:px-[1.125rem] py-2 rounded-lg font-bold flex items-center gap-1.5 shadow-lg whitespace-nowrap text-xs"
//           >
//             Join as Partner Now <ArrowRight size={12} />
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* ---------------- Services Grid ---------------- */}
//       <section className="py-10 sm:py-12 px-3 sm:px-5 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-7">
//             <p className="flex items-center justify-center gap-2 text-cyan-500 text-[0.6rem] font-bold uppercase tracking-[0.2em] mb-2">
//               <span className="w-[1.125rem] h-px bg-cyan-300"></span>
//               Our Services
//               <span className="w-[1.125rem] h-px bg-cyan-300"></span>
//             </p>
//             <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
//               Comprehensive banking and <br className="hidden sm:block" />
//               <span className="text-cyan-500">financial solutions</span>
//             </h2>
//           </div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -4.5 }}
//                 className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center gap-3"
//               >
//                 <div className="w-[2.125rem] h-[2.125rem] shrink-0 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-xs tracking-wide mb-0.5">{service.title}</h3>
//                   <p className="text-gray-500 text-[0.65rem] leading-relaxed">{service.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Benefits (dark, boxed) ---------------- */}
//       <section className="px-3 sm:px-5 pb-10 sm:pb-12">
//         <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-50 to-slate-50 rounded-[1.5rem] py-7 sm:py-9 px-4 sm:px-6">
//           <div className="text-center mb-6 sm:mb-7">
//             <p className="text-cyan-600 font-bold mb-1 uppercase tracking-[0.2em] text-[0.6rem]">
//               Aapka Business Humara Investment
//             </p>
//             <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900">
//               Abheepay <span className="text-cyan-500">Benefits</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="w-[2.125rem] h-[2.125rem] mx-auto rounded-full bg-cyan-500 text-white flex items-center justify-center mb-2">
//                   {benefit.icon}
//                 </div>
//                 <p className="text-xs font-bold text-slate-800 leading-snug">{benefit.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Why Choose (light) ---------------- */}
//       <section className="py-10 sm:py-12 px-3 sm:px-5 bg-[#f8fafc] text-center relative overflow-hidden">
//         <div className="absolute top-0 left-1/4 w-24 h-24 bg-cyan-100/50 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-indigo-100/50 rounded-full blur-3xl" />

//         <div className="max-w-5xl mx-auto relative z-10">
//           <p className="flex items-center justify-center gap-2 text-[#2dd4bf] font-bold mb-1.5 uppercase tracking-widest text-[0.6rem]">
//             <span className="w-[1.125rem] h-px bg-cyan-300"></span>
//             Why Choose AbheePay?
//             <span className="w-[1.125rem] h-px bg-cyan-300"></span>
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
//             {whyChoose.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="group bg-white p-3.5 sm:p-[1.125rem] rounded-[1.3rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-cyan-200 transition-all duration-300"
//               >
//                 <div className="relative w-[2.125rem] h-[2.125rem] mx-auto mb-3 flex items-center justify-center">
//                   <div className="absolute inset-0 bg-indigo-50 rounded-xl rotate-6 group-hover:rotate-12 group-hover:bg-[#2dd4bf] transition-all duration-300"></div>
//                   <div className="relative text-[#2dd4bf] group-hover:text-white transition-colors duration-300">
//                     {item.icon}
//                   </div>
//                 </div>

//                 <h3 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-tight">
//                   {item.title}
//                 </h3>

//                 <div className="mt-2 h-0.5 w-[1.125rem] bg-indigo-100 mx-auto rounded-full group-hover:w-[1.875rem] group-hover:bg-[#2dd4bf] transition-all duration-300" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Contact Section ---------------- */}
//       <section className="py-10 sm:py-12 px-3 sm:px-5 bg-gray-50">
//         <div className="max-w-3xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[1.5rem] overflow-hidden">
//             {/* form */}
//             <div className="bg-white p-[1.125rem] sm:p-6 order-2 lg:order-1">
//               <div className="flex items-center gap-1.5 mb-3.5">
//                 <span className="w-6 h-6 rounded-md bg-cyan-50 text-cyan-500 flex items-center justify-center">
//                   <User size={12} />
//                 </span>
//                 <h2 className="text-sm sm:text-base font-bold">Join Us Today</h2>
//               </div>
//               <form className="space-y-2.5">
//                 <div className="space-y-0.5">
//                   <label className="text-[0.65rem] font-semibold text-gray-600 ml-1">Full Name</label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-xs text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
//                   <div className="space-y-0.5">
//                     <label className="text-[0.65rem] font-semibold text-gray-600 ml-1">Email</label>
//                     <input
//                       type="email"
//                       placeholder="john@example.com"
//                       className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-xs text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                   <div className="space-y-0.5">
//                     <label className="text-[0.65rem] font-semibold text-gray-600 ml-1">Phone</label>
//                     <input
//                       type="tel"
//                       placeholder="+91 00000 00000"
//                       className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-xs text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-0.5">
//                   <label className="text-[0.65rem] font-semibold text-gray-600 ml-1">City</label>
//                   <input
//                     type="text"
//                     placeholder="New Delhi"
//                     className="w-full p-2.5 bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-xs text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-cyan-400 text-white font-bold py-[0.5625rem] rounded-lg hover:bg-cyan-500 transition-colors mt-1.5 text-xs shadow-lg shadow-cyan-100 flex items-center justify-center gap-1.5"
//                 >
//                   Submit Application <ArrowRight size={11} />
//                 </motion.button>
//               </form>
//             </div>

//             {/* contact info */}
//             <div className="bg-[#1e2736] text-white p-[1.125rem] sm:p-6 flex flex-col justify-between relative order-1 lg:order-2 overflow-hidden">
//               <div className="relative z-10">
//                 <h3 className="text-sm sm:text-base font-bold mb-3.5">Contact Information</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-2">
//                     <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <Mail size={11} />
//                     </div>
//                     <span className="text-xs text-gray-300">care@abheepay.in</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <Phone size={11} />
//                     </div>
//                     <span className="text-xs text-gray-300">88600 37218</span>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <MapPin size={11} />
//                     </div>
//                     <span className="text-xs text-gray-300 leading-relaxed">
//                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-6 h-6 bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <Globe size={11} />
//                     </div>
//                     <span className="text-xs text-gray-300">www.abheepay.com</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-[1.125rem] pt-3 border-t border-white/10 relative z-10">
//                 <p className="text-gray-400 italic text-[0.65rem]">
//                   "Empowering Rural India through Digital Innovation."
//                 </p>
//               </div>

//               <Landmark size={105} className="absolute -bottom-[1.125rem] -right-[1.125rem] text-white/5 pointer-events-none" />
//               <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-400/10 blur-3xl rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Join;













// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import {
//   CreditCard, Smartphone, Wallet, Zap, DollarSign, ShieldCheck,
//   Headphones, LayoutGrid, TrendingUp, CheckCircle,
//   IndianRupee, Mail, Phone, MapPin, Globe, ArrowRight, Play,
//   Handshake, Landmark, User
// } from 'lucide-react';

// // Animation Variants
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

// const Join = () => {
//   const services = [
//     { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={14} /> },
//     { title: "POS MACHINE", desc: "Point of Sale Solutions", icon: <CreditCard size={14} /> },
//     { title: "CC BILL PAY", desc: "Credit Card Bill Payments", icon: <CreditCard size={14} /> },
//     { title: "RECHARGE", desc: "Mobile & DTH Recharge", icon: <Smartphone size={14} /> },
//     { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={14} /> },
//     { title: "COLLECT", desc: "Payment Collection Services", icon: <Wallet size={14} /> },
//     { title: "CREDIT CARD", desc: "Credit Card Services", icon: <CreditCard size={14} /> },
//     { title: "LOAN", desc: "Loan Services", icon: <TrendingUp size={14} /> },
//     { title: "INSURANCE", desc: "Insurance", icon: <ShieldCheck size={14} /> },
//   ];

//   const benefits = [
//     { title: "0 Investment Business", icon: <IndianRupee size={14} /> },
//     { title: "Simple Joining Process", icon: <ShieldCheck size={14} /> },
//     { title: "24*7 Customer Service", icon: <Headphones size={14} /> },
//     { title: "Earn upto ₹4 Lakh to ₹12 Lakh per annum", icon: <IndianRupee size={14} /> },
//   ];

//   const whyChoose = [
//     { title: "0 Investment Business", icon: <IndianRupee size={14} /> },
//     { title: "Simple Joining Process", icon: <ShieldCheck size={14} /> },
//     { title: "24*7 Customer Service", icon: <Headphones size={14} /> },
//     { title: "Upto ₹12 Lakh Earning Potential", icon: <TrendingUp size={14} /> },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[0.81rem]">

//       {/* ---------------- Hero Section ---------------- */}
//       <section className="relative py-[1.417rem] sm:py-[2.025rem] md:py-[2.835rem] px-[0.608rem] sm:px-[1.012rem] overflow-hidden">
//         {/* Background Decor */}
//         <div className="absolute inset-0 -z-0 pointer-events-none">
//           <div className="absolute top-[1.62rem] left-0 w-[5.67rem] h-[5.67rem] sm:w-[9.72rem] sm:h-[9.72rem] bg-cyan-100/60 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-[5.67rem] h-[5.67rem] sm:w-[9.72rem] sm:h-[9.72rem] bg-blue-100/50 rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[1.417rem] lg:gap-[1.012rem] items-center">
//           {/* Left: copy */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-center lg:text-left"
//           >
//             <span className="inline-block px-[0.506rem] py-[0.501rem] mb-[0.208rem] text-[0.495rem] font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
//               Digital Banking Partner
//             </span>

//             <h1 className="text-[1.35rem] sm:text-[1.688rem] md:text-[1.755rem] font-extrabold mb-[0.608rem] leading-tight text-slate-900 py-[0.506rem]">
//               AbheePay ke saath apna{" "}
//               <span className="text-cyan-500">banking vyapar</span> shuru karein
//             </h1>

//             <p className="text-[0.675rem] sm:text-[0.787rem] text-gray-500 mb-[0.81rem] max-w-lg mx-auto lg:mx-0">
//               Enabling Indian SMEs to maximise their earning within a single platform.
//               Join the revolution of digital finance.
//             </p>

//             <div className="flex items-center justify-center lg:justify-start gap-[0.608rem]">
//               <Link to="/contact">
//                 <button className="px-[1.012rem] py-[0.506rem] bg-[#00C4C7] text-white rounded-lg font-semibold hover:bg-[#00b2b5] transition shadow-lg shadow-cyan-100 text-[0.787rem]">
//                   Get Started
//                 </button>
//               </Link>
//               <button className="flex items-center gap-[0.304rem] text-[0.675rem] font-semibold text-slate-700 hover:text-cyan-600 transition">
//                 <span className="w-[1.417rem] h-[1.417rem] rounded-full border-2 border-slate-300 flex items-center justify-center">
//                   <Play size={10} fill="currentColor" />
//                 </span>
//                 Watch Video
//               </button>
//             </div>
//           </motion.div>

//           {/* Right: illustration */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative h-[230px] sm:h-[270px] flex items-center justify-center"
//           >
//             {/* base platform */}
//             <div className="absolute bottom-[0.608rem] w-[9.72rem] h-[1.417rem] sm:w-[12.15rem] sm:h-[1.823rem] bg-slate-100 rounded-full blur-sm"></div>

//             {/* credit card behind phone */}
//             <div className="absolute bottom-[1.215rem] right-[0.81rem] sm:right-[1.62rem] w-[4.725rem] h-[2.835rem] sm:w-[4.86rem] sm:h-[3.375rem] rounded-lg bg-gradient-to-br from-[#1e2736] to-cyan-700 shadow-xl rotate-6"></div>

//             {/* phone frame */}
//             <div className="relative w-[7.425rem] sm:w-[8.775rem] h-[202px] sm:h-[243px] bg-slate-900 rounded-[1.35rem] p-[0.304rem] shadow-2xl z-10">
//               <div className="w-full h-full bg-white rounded-[1.08rem] overflow-hidden flex flex-col items-center px-[0.506rem] pt-[1 rem]">
//                 <span className="text-cyan-500 font-extrabold tracking-wide text-[0.63rem] mb-[0.608rem]">ABHEEPAY</span>
//                 <div className="w-full bg-slate-50 rounded-lg p-[0.506rem] border border-slate-100 shadow-sm">
//                   <p className="text-[0.405rem] text-slate-400 mb-[0.101rem]">Total Earnings</p>
//                   <p className="text-[0.787rem] font-extrabold text-slate-800">₹12,00,000</p>
//                   <p className="text-[0.45rem] font-semibold text-emerald-500 mb-[0.304rem]">+20% This Month</p>
//                   <svg viewBox="0 0 100 30" className="w-full h-[1.215rem]">
//                     <polyline
//                       points="0,25 15,20 30,22 45,12 60,15 75,5 100,2"
//                       fill="none"
//                       stroke="#2dd4bf"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* floating card: CC Bill Pay */}
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-[1.012rem] left-0 sm:left-[0.304rem] bg-white rounded-lg shadow-lg px-[0.506rem] py-[0.405rem] flex items-center gap-[0.304rem] z-20"
//             >
//               <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-cyan-50 flex items-center justify-center text-cyan-500">
//                 <Wallet size={11} />
//               </span>
//               <span className="text-[0.495rem] font-semibold text-slate-700">CC Bill Pay</span>
//             </motion.div>

//             {/* floating card: BBPS */}
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-[2.43rem] left-0 sm:-left-1.5 bg-white rounded-lg shadow-lg px-[0.506rem] py-[0.405rem] flex items-center gap-[0.304rem] z-20"
//             >
//               <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-cyan-500 flex items-center justify-center text-white">
//                 <Zap size={11} />
//               </span>
//               <span className="text-[0.495rem] font-semibold text-slate-700">BBPS</span>
//             </motion.div>

//             {/* floating card: POS Machine */}
//             <motion.div
//               animate={{ y: [0, -4.5, 0] }}
//               transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-[4.05rem] right-0 sm:-right-1.5 bg-white rounded-lg shadow-lg px-[0.506rem] py-[0.405rem] flex flex-col items-center gap-[0.101rem] z-20"
//             >
//               <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-cyan-50 flex items-center justify-center text-cyan-500">
//                 <LayoutGrid size={11} />
//               </span>
//               <span className="text-[0.45rem] font-semibold text-slate-700">POS Machine</span>
//             </motion.div>

//             {/* connecting dashed lines */}
//             <svg className="absolute inset-0 w-full h-full -z-0 hidden sm:block" viewBox="0 0 400 400">
//               <line x1="70" y1="70" x2="180" y2="140" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//               <line x1="60" y1="280" x2="170" y2="230" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//               <line x1="330" y1="150" x2="240" y2="180" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//             </svg>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Partner CTA ---------------- */}
//       <section className="px-[0.608rem] sm:px-[1.012rem]">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.97 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto bg-gradient-to-r from-[#0ea5a3] to-[#0f9c9f] rounded-2xl px-[0.81rem] sm:px-[1.215rem] py-[1.012rem] sm:py-[1.215rem] flex flex-col sm:flex-row items-center gap-[0.709rem] sm:gap-[1.012rem] text-white"
//         >
//           <div className="w-[2.362rem] h-[2.362rem] rounded-full bg-white/15 flex items-center justify-center shrink-0">
//             <Handshake size={17} />
//           </div>
//           <div className="flex-1 text-center sm:text-left">
//             <h2 className="text-[0.787rem] sm:text-[0.9rem] font-bold mb-[0.203rem]">Start Your Banking Journey as Partner Today</h2>
//             <p className="text-cyan-50/90 text-[0.675rem] max-w-xl">
//               Join thousands of successful retailers who have transformed their business with AbheePay.
//               Earn up to <span className="font-bold text-white">₹12 Lakh</span> annually!
//             </p>
//           </div>
//           <motion.button
//             whileHover={{ y: -3 }}
//             className="bg-white text-[#0f9c9f] px-[0.709rem] sm:px-[1.012rem] py-[0.405rem] rounded-lg font-bold flex items-center gap-[0.304rem] shadow-lg whitespace-nowrap text-[0.675rem]"
//           >
//             Join as Partner Now <ArrowRight size={11} />
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* ---------------- Services Grid ---------------- */}
//       <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-[1.417rem]">
//             <p className="flex items-center justify-center gap-[0.405rem] text-cyan-500 text-[0.54rem] font-bold uppercase tracking-[0.2em] mb-[0.405rem]">
//               <span className="w-[1.012rem] h-px bg-cyan-300"></span>
//               Our Services
//               <span className="w-[1.012rem] h-px bg-cyan-300"></span>
//             </p>
//             <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900">
//               Comprehensive banking and <br className="hidden sm:block" />
//               <span className="text-cyan-500">financial solutions</span>
//             </h2>
//           </div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.608rem]"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -4.5 }}
//                 className="bg-white p-[0.709rem] rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center gap-[0.608rem]"
//               >
//                 <div className="w-[1.913rem] h-[1.913rem] shrink-0 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-[0.675rem] tracking-wide mb-[0.101rem]">{service.title}</h3>
//                   <p className="text-gray-500 text-[0.585rem] leading-relaxed">{service.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Benefits (dark, boxed) ---------------- */}
//       <section className="px-[0.608rem] sm:px-[1.012rem] pb-[2.025rem] sm:pb-[2.43rem]">
//         <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-50 to-slate-50 rounded-[1.35rem] py-[1.417rem] sm:py-[1.823rem] px-[0.81rem] sm:px-[1.215rem]">
//           <div className="text-center mb-[1.215rem] sm:mb-[1.417rem]">
//             <p className="text-cyan-600 font-bold mb-[0.203rem] uppercase tracking-[0.2em] text-[0.54rem]">
//               Aapka Business Humara Investment
//             </p>
//             <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900">
//               Abheepay <span className="text-cyan-500">Benefits</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.608rem]">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-[0.709rem] rounded-xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="w-[1.913rem] h-[1.913rem] mx-auto rounded-full bg-cyan-500 text-white flex items-center justify-center mb-[0.405rem]">
//                   {benefit.icon}
//                 </div>
//                 <p className="text-[0.675rem] font-bold text-slate-800 leading-snug">{benefit.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Why Choose (light) ---------------- */}
//       <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-[#f8fafc] text-center relative overflow-hidden">
//         <div className="absolute top-0 left-[0.203rem]/4 w-[4.86rem] h-[4.86rem] bg-cyan-100/50 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-[0.203rem]/4 w-[4.86rem] h-[4.86rem] bg-indigo-100/50 rounded-full blur-3xl" />

//         <div className="max-w-5xl mx-auto relative z-10">
//           <p className="flex items-center justify-center gap-[0.405rem] text-[#2dd4bf] font-bold mb-[0.304rem] uppercase tracking-widest text-[0.54rem]">
//             <span className="w-[1.012rem] h-px bg-cyan-300"></span>
//             Why Choose AbheePay?
//             <span className="w-[1.012rem] h-px bg-cyan-300"></span>
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.608rem] mt-[1.215rem]">
//             {whyChoose.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="group bg-white p-[0.709rem] sm:p-[1.012rem] rounded-[1.17rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-cyan-200 transition-all duration-300"
//               >
//                 <div className="relative w-[1.913rem] h-[1.913rem] mx-auto mb-[0.608rem] flex items-center justify-center">
//                   <div className="absolute inset-0 bg-indigo-50 rounded-xl rotate-6 group-hover:rotate-12 group-hover:bg-[#2dd4bf] transition-all duration-300"></div>
//                   <div className="relative text-[#2dd4bf] group-hover:text-white transition-colors duration-300">
//                     {item.icon}
//                   </div>
//                 </div>

//                 <h3 className="text-[0.675rem] sm:text-[0.787rem] font-extrabold text-slate-800 leading-tight">
//                   {item.title}
//                 </h3>

//                 <div className="mt-[0.405rem] h-[0.101rem] w-[1.012rem] bg-indigo-100 mx-auto rounded-full group-hover:w-[1.688rem] group-hover:bg-[#2dd4bf] transition-all duration-300" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Contact Section ---------------- */}
//       <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-gray-50">
//         <div className="max-w-3xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[1.35rem] overflow-hidden">
//             {/* form */}
//             <div className="bg-white p-[1.012rem] sm:p-[1.215rem] order-2 lg:order-1">
//               <div className="flex items-center gap-[0.304rem] mb-[0.709rem]">
//                 <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-cyan-50 text-cyan-500 flex items-center justify-center">
//                   <User size={11} />
//                 </span>
//                 <h2 className="text-[0.787rem] sm:text-[0.9rem] font-bold">Join Us Today</h2>
//               </div>
//               <form className="space-y-2.5">
//                 <div className="space-y-0.5">
//                   <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">Full Name</label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.506rem]">
//                   <div className="space-y-0.5">
//                     <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">Email</label>
//                     <input
//                       type="email"
//                       placeholder="john@example.com"
//                       className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                   <div className="space-y-0.5">
//                     <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">Phone</label>
//                     <input
//                       type="tel"
//                       placeholder="+91 00000 00000"
//                       className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-0.5">
//                   <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">City</label>
//                   <input
//                     type="text"
//                     placeholder="New Delhi"
//                     className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-cyan-400 text-white font-bold py-[0.506rem] rounded-lg hover:bg-cyan-500 transition-colors mt-[0.304rem] text-[0.675rem] shadow-lg shadow-cyan-100 flex items-center justify-center gap-[0.304rem]"
//                 >
//                   Submit Application <ArrowRight size={10} />
//                 </motion.button>
//               </form>
//             </div>

//             {/* contact info */}
//             <div className="bg-[#1e2736] text-white p-[1.012rem] sm:p-[1.215rem] flex flex-col justify-between relative order-1 lg:order-2 overflow-hidden">
//               <div className="relative z-10">
//                 <h3 className="text-[0.787rem] sm:text-[0.9rem] font-bold mb-[0.709rem]">Contact Information</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-[0.405rem]">
//                     <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <Mail size={10} />
//                     </div>
//                     <span className="text-[0.675rem] text-gray-300">care@abheepay.in</span>
//                   </div>
//                   <div className="flex items-center gap-[0.405rem]">
//                     <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <Phone size={10} />
//                     </div>
//                     <span className="text-[0.675rem] text-gray-300">88600 37218</span>
//                   </div>
//                   <div className="flex items-start gap-[0.405rem]">
//                     <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <MapPin size={10} />
//                     </div>
//                     <span className="text-[0.675rem] text-gray-300 leading-relaxed">
//                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-[0.405rem]">
//                     <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <Globe size={10} />
//                     </div>
//                     <span className="text-[0.675rem] text-gray-300">www.abheepay.com</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-[1.012rem] pt-[0.608rem] border-t border-white/10 relative z-10">
//                 <p className="text-gray-400 italic text-[0.585rem]">
//                   "Empowering Rural India through Digital Innovation."
//                 </p>
//               </div>

//               <Landmark size={94} className="absolute -bottom-[1.012rem] -right-[1.012rem] text-white/5 pointer-events-none" />
//               <div className="absolute top-0 right-0 w-[2.43rem] h-[2.43rem] bg-cyan-400/10 blur-3xl rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Join;












// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// import {
//   CreditCard, Smartphone, Wallet, Zap, DollarSign, ShieldCheck,
//   Headphones, LayoutGrid, TrendingUp, CheckCircle,
//   IndianRupee, Mail, Phone, MapPin, Globe, ArrowRight, Play,
//   Handshake, Landmark, User
// } from 'lucide-react';

// // Animation Variants
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

// const Join = () => {
//   const services = [
//     { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={14} /> },
//     { title: "POS MACHINE", desc: "Point of Sale Solutions", icon: <CreditCard size={14} /> },
//     { title: "CC BILL PAY", desc: "Credit Card Bill Payments", icon: <CreditCard size={14} /> },
//     { title: "RECHARGE", desc: "Mobile & DTH Recharge", icon: <Smartphone size={14} /> },
//     { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={14} /> },
//     { title: "COLLECT", desc: "Payment Collection Services", icon: <Wallet size={14} /> },
//     { title: "CREDIT CARD", desc: "Credit Card Services", icon: <CreditCard size={14} /> },
//     { title: "LOAN", desc: "Loan Services", icon: <TrendingUp size={14} /> },
//     { title: "INSURANCE", desc: "Insurance", icon: <ShieldCheck size={14} /> },
//   ];

//   const benefits = [
//     { title: "0 Investment Business", icon: <IndianRupee size={14} /> },
//     { title: "Simple Joining Process", icon: <ShieldCheck size={14} /> },
//     { title: "24*7 Customer Service", icon: <Headphones size={14} /> },
//     { title: "Earn upto ₹4 Lakh to ₹12 Lakh per annum", icon: <IndianRupee size={14} /> },
//   ];

//   const whyChoose = [
//     { title: "0 Investment Business", icon: <IndianRupee size={14} /> },
//     { title: "Simple Joining Process", icon: <ShieldCheck size={14} /> },
//     { title: "24*7 Customer Service", icon: <Headphones size={14} /> },
//     { title: "Upto ₹12 Lakh Earning Potential", icon: <TrendingUp size={14} /> },
//   ];

//   return (
//     <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[0.81rem]">

//       {/* ---------------- Hero Section ---------------- */}
//       <section className="relative pt-[6rem] sm:pt-[7.5rem] md:pt-[4rem] pb-[1.417rem] sm:pb-[2.025rem] md:pb-[2.835rem] px-[0.608rem] sm:px-[1.012rem] overflow-hidden">
//         {/* Background Decor */}
//         <div className="absolute inset-0 -z-0 pointer-events-none">
//           <div className="absolute top-[1.62rem] left-0 w-[5.67rem] h-[5.67rem] sm:w-[9.72rem] sm:h-[9.72rem] bg-cyan-100/60 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-[5.67rem] h-[5.67rem] sm:w-[9.72rem] sm:h-[9.72rem] bg-blue-100/50 rounded-full blur-3xl"></div>
//         </div>

//         <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[1.417rem] lg:gap-[1.012rem] items-center">
//           {/* Left: copy */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//             className="text-center lg:text-left"
//           >
//             <span className="inline-block px-[0.506rem] py-[0.101rem] mb-[0.608rem] text-[0.495rem] font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
//               Digital Banking Partner
//             </span>

//             <h1 className="text-[1.35rem] sm:text-[1.688rem] md:text-[1.755rem] font-extrabold mb-[0.608rem] leading-tight text-slate-900">
//               AbheePay ke saath apna{" "}
//               <span className="text-cyan-500">banking vyapar</span> shuru karein
//             </h1>

//             <p className="text-[0.675rem] sm:text-[0.787rem] text-gray-500 mb-[0.81rem] max-w-lg mx-auto lg:mx-0">
//               Enabling Indian SMEs to maximise their earning within a single platform.
//               Join the revolution of digital finance.
//             </p>

//             <div className="flex items-center justify-center lg:justify-start gap-[0.608rem]">
//               <Link to="/contact">
//                 <button className="px-[1.012rem] py-[0.506rem] bg-[#00C4C7] text-white rounded-lg font-semibold hover:bg-[#00b2b5] transition shadow-lg shadow-cyan-100 text-[0.787rem]">
//                   Get Started
//                 </button>
//               </Link>
//               <button className="flex items-center gap-[0.304rem] text-[0.675rem] font-semibold text-slate-700 hover:text-cyan-600 transition">
//                 <span className="w-[1.417rem] h-[1.417rem] rounded-full border-2 border-slate-300 flex items-center justify-center">
//                   <Play size={10} fill="currentColor" />
//                 </span>
//                 Watch Video
//               </button>
//             </div>
//           </motion.div>

//           {/* Right: illustration */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="relative h-[230px] sm:h-[270px] flex items-center justify-center"
//           >
//             {/* base platform */}
//             <div className="absolute bottom-[0.608rem] w-[9.72rem] h-[1.417rem] sm:w-[12.15rem] sm:h-[1.823rem] bg-slate-100 rounded-full blur-sm"></div>

//             {/* credit card behind phone */}
//             <div className="absolute bottom-[1.215rem] right-[0.81rem] sm:right-[1.62rem] w-[4.725rem] h-[2.835rem] sm:w-[4.86rem] sm:h-[3.375rem] rounded-lg bg-gradient-to-br from-[#1e2736] to-cyan-700 shadow-xl rotate-6"></div>

//             {/* phone frame */}
//             <div className="relative w-[7.425rem] sm:w-[8.775rem] h-[202px] sm:h-[243px] bg-slate-900 rounded-[1.35rem] p-[0.304rem] shadow-2xl z-10">
//               <div className="w-full h-full bg-white rounded-[1.08rem] overflow-hidden flex flex-col items-center px-[0.506rem] pt-[1.012rem]">
//                 <span className="text-cyan-500 font-extrabold tracking-wide text-[0.63rem] mb-[0.608rem]">ABHEEPAY</span>
//                 <div className="w-full bg-slate-50 rounded-lg p-[0.506rem] border border-slate-100 shadow-sm">
//                   <p className="text-[0.405rem] text-slate-400 mb-[0.101rem]">Total Earnings</p>
//                   <p className="text-[0.787rem] font-extrabold text-slate-800">₹12,00,000</p>
//                   <p className="text-[0.45rem] font-semibold text-emerald-500 mb-[0.304rem]">+20% This Month</p>
//                   <svg viewBox="0 0 100 30" className="w-full h-[1.215rem]">
//                     <polyline
//                       points="0,25 15,20 30,22 45,12 60,15 75,5 100,2"
//                       fill="none"
//                       stroke="#2dd4bf"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* floating card: CC Bill Pay */}
//             <motion.div
//               animate={{ y: [0, -6, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-[1.012rem] left-0 sm:left-[0.304rem] bg-white rounded-lg shadow-lg px-[0.506rem] py-[0.405rem] flex items-center gap-[0.304rem] z-20"
//             >
//               <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-cyan-50 flex items-center justify-center text-cyan-500">
//                 <Wallet size={11} />
//               </span>
//               <span className="text-[0.495rem] font-semibold text-slate-700">CC Bill Pay</span>
//             </motion.div>

//             {/* floating card: BBPS */}
//             <motion.div
//               animate={{ y: [0, 6, 0] }}
//               transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-[2.43rem] left-0 sm:-left-1.5 bg-white rounded-lg shadow-lg px-[0.506rem] py-[0.405rem] flex items-center gap-[0.304rem] z-20"
//             >
//               <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-cyan-500 flex items-center justify-center text-white">
//                 <Zap size={11} />
//               </span>
//               <span className="text-[0.495rem] font-semibold text-slate-700">BBPS</span>
//             </motion.div>

//             {/* floating card: POS Machine */}
//             <motion.div
//               animate={{ y: [0, -4.5, 0] }}
//               transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute top-[4.05rem] right-0 sm:-right-1.5 bg-white rounded-lg shadow-lg px-[0.506rem] py-[0.405rem] flex flex-col items-center gap-[0.101rem] z-20"
//             >
//               <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-cyan-50 flex items-center justify-center text-cyan-500">
//                 <LayoutGrid size={11} />
//               </span>
//               <span className="text-[0.45rem] font-semibold text-slate-700">POS Machine</span>
//             </motion.div>

//             {/* connecting dashed lines */}
//             <svg className="absolute inset-0 w-full h-full -z-0 hidden sm:block" viewBox="0 0 400 400">
//               <line x1="70" y1="70" x2="180" y2="140" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//               <line x1="60" y1="280" x2="170" y2="230" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//               <line x1="330" y1="150" x2="240" y2="180" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
//             </svg>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Partner CTA ---------------- */}
//       <section className="px-[0.608rem] sm:px-[1.012rem]">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.97 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto bg-gradient-to-r from-[#0ea5a3] to-[#0f9c9f] rounded-2xl px-[0.81rem] sm:px-[1.215rem] py-[1.012rem] sm:py-[1.215rem] flex flex-col sm:flex-row items-center gap-[0.709rem] sm:gap-[1.012rem] text-white"
//         >
//           <div className="w-[2.362rem] h-[2.362rem] rounded-full bg-white/15 flex items-center justify-center shrink-0">
//             <Handshake size={17} />
//           </div>
//           <div className="flex-1 text-center sm:text-left">
//             <h2 className="text-[0.787rem] sm:text-[0.9rem] font-bold mb-[0.203rem]">Start Your Banking Journey as Partner Today</h2>
//             <p className="text-cyan-50/90 text-[0.675rem] max-w-xl">
//               Join thousands of successful retailers who have transformed their business with AbheePay.
//               Earn up to <span className="font-bold text-white">₹12 Lakh</span> annually!
//             </p>
//           </div>
//           <motion.button
//             whileHover={{ y: -3 }}
//             className="bg-white text-[#0f9c9f] px-[0.709rem] sm:px-[1.012rem] py-[0.405rem] rounded-lg font-bold flex items-center gap-[0.304rem] shadow-lg whitespace-nowrap text-[0.675rem]"
//           >
//             Join as Partner Now <ArrowRight size={11} />
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* ---------------- Services Grid ---------------- */}
//       <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-[1.417rem]">
//             <p className="flex items-center justify-center gap-[0.405rem] text-cyan-500 text-[0.54rem] font-bold uppercase tracking-[0.2em] mb-[0.405rem]">
//               <span className="w-[1.012rem] h-px bg-cyan-300"></span>
//               Our Services
//               <span className="w-[1.012rem] h-px bg-cyan-300"></span>
//             </p>
//             <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900">
//               Comprehensive banking and <br className="hidden sm:block" />
//               <span className="text-cyan-500">financial solutions</span>
//             </h2>
//           </div>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.608rem]"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -4.5 }}
//                 className="bg-white p-[0.709rem] rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center gap-[0.608rem]"
//               >
//                 <div className="w-[1.913rem] h-[1.913rem] shrink-0 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-[0.675rem] tracking-wide mb-[0.101rem]">{service.title}</h3>
//                   <p className="text-gray-500 text-[0.585rem] leading-relaxed">{service.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------------- Benefits (dark, boxed) ---------------- */}
//       <section className="px-[0.608rem] sm:px-[1.012rem] pb-[2.025rem] sm:pb-[2.43rem]">
//         <div className="max-w-5xl mx-auto bg-gradient-to-br from-cyan-50 to-slate-50 rounded-[1.35rem] py-[1.417rem] sm:py-[1.823rem] px-[0.81rem] sm:px-[1.215rem]">
//           <div className="text-center mb-[1.215rem] sm:mb-[1.417rem]">
//             <p className="text-cyan-600 font-bold mb-[0.203rem] uppercase tracking-[0.2em] text-[0.54rem]">
//               Aapka Business Humara Investment
//             </p>
//             <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900">
//               Abheepay <span className="text-cyan-500">Benefits</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.608rem]">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-[0.709rem] rounded-xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-shadow"
//               >
//                 <div className="w-[1.913rem] h-[1.913rem] mx-auto rounded-full bg-cyan-500 text-white flex items-center justify-center mb-[0.405rem]">
//                   {benefit.icon}
//                 </div>
//                 <p className="text-[0.675rem] font-bold text-slate-800 leading-snug">{benefit.title}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Why Choose (light) ---------------- */}
//       <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-[#f8fafc] text-center relative overflow-hidden">
//         <div className="absolute top-0 left-[0.203rem]/4 w-[4.86rem] h-[4.86rem] bg-cyan-100/50 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-[0.203rem]/4 w-[4.86rem] h-[4.86rem] bg-indigo-100/50 rounded-full blur-3xl" />

//         <div className="max-w-5xl mx-auto relative z-10">
//           <p className="flex items-center justify-center gap-[0.405rem] text-[#2dd4bf] font-bold mb-[0.304rem] uppercase tracking-widest text-[0.54rem]">
//             <span className="w-[1.012rem] h-px bg-cyan-300"></span>
//             Why Choose AbheePay?
//             <span className="w-[1.012rem] h-px bg-cyan-300"></span>
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.608rem] mt-[1.215rem]">
//             {whyChoose.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -6 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="group bg-white p-[0.709rem] sm:p-[1.012rem] rounded-[1.17rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-cyan-200 transition-all duration-300"
//               >
//                 <div className="relative w-[1.913rem] h-[1.913rem] mx-auto mb-[0.608rem] flex items-center justify-center">
//                   <div className="absolute inset-0 bg-indigo-50 rounded-xl rotate-6 group-hover:rotate-12 group-hover:bg-[#2dd4bf] transition-all duration-300"></div>
//                   <div className="relative text-[#2dd4bf] group-hover:text-white transition-colors duration-300">
//                     {item.icon}
//                   </div>
//                 </div>

//                 <h3 className="text-[0.675rem] sm:text-[0.787rem] font-extrabold text-slate-800 leading-tight">
//                   {item.title}
//                 </h3>

//                 <div className="mt-[0.405rem] h-[0.101rem] w-[1.012rem] bg-indigo-100 mx-auto rounded-full group-hover:w-[1.688rem] group-hover:bg-[#2dd4bf] transition-all duration-300" />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Contact Section ---------------- */}
//       <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-gray-50">
//         <div className="max-w-3xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[1.35rem] overflow-hidden">
//             {/* form */}
//             <div className="bg-white p-[1.012rem] sm:p-[1.215rem] order-2 lg:order-1">
//               <div className="flex items-center gap-[0.304rem] mb-[0.709rem]">
//                 <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-cyan-50 text-cyan-500 flex items-center justify-center">
//                   <User size={11} />
//                 </span>
//                 <h2 className="text-[0.787rem] sm:text-[0.9rem] font-bold">Join Us Today</h2>
//               </div>
//               <form className="space-y-2.5">
//                 <div className="space-y-0.5">
//                   <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">Full Name</label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.506rem]">
//                   <div className="space-y-0.5">
//                     <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">Email</label>
//                     <input
//                       type="email"
//                       placeholder="john@example.com"
//                       className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                   <div className="space-y-0.5">
//                     <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">Phone</label>
//                     <input
//                       type="tel"
//                       placeholder="+91 00000 00000"
//                       className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-0.5">
//                   <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">City</label>
//                   <input
//                     type="text"
//                     placeholder="New Delhi"
//                     className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
//                   />
//                 </div>
//                 <motion.button
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-cyan-400 text-white font-bold py-[0.506rem] rounded-lg hover:bg-cyan-500 transition-colors mt-[0.304rem] text-[0.675rem] shadow-lg shadow-cyan-100 flex items-center justify-center gap-[0.304rem]"
//                 >
//                   Submit Application <ArrowRight size={10} />
//                 </motion.button>
//               </form>
//             </div>

//             {/* contact info */}
//             <div className="bg-[#1e2736] text-white p-[1.012rem] sm:p-[1.215rem] flex flex-col justify-between relative order-1 lg:order-2 overflow-hidden">
//               <div className="relative z-10">
//                 <h3 className="text-[0.787rem] sm:text-[0.9rem] font-bold mb-[0.709rem]">Contact Information</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-[0.405rem]">
//                     <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <Mail size={10} />
//                     </div>
//                     <span className="text-[0.675rem] text-gray-300">care@abheepay.in</span>
//                   </div>
//                   <div className="flex items-center gap-[0.405rem]">
//                     <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <Phone size={10} />
//                     </div>
//                     <span className="text-[0.675rem] text-gray-300">88600 37218</span>
//                   </div>
//                   <div className="flex items-start gap-[0.405rem]">
//                     <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <MapPin size={10} />
//                     </div>
//                     <span className="text-[0.675rem] text-gray-300 leading-relaxed">
//                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-[0.405rem]">
//                     <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-cyan-400 shrink-0">
//                       <Globe size={10} />
//                     </div>
//                     <span className="text-[0.675rem] text-gray-300">www.abheepay.com</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-[1.012rem] pt-[0.608rem] border-t border-white/10 relative z-10">
//                 <p className="text-gray-400 italic text-[0.585rem]">
//                   "Empowering Rural India through Digital Innovation."
//                 </p>
//               </div>

//               <Landmark size={94} className="absolute -bottom-[1.012rem] -right-[1.012rem] text-white/5 pointer-events-none" />
//               <div className="absolute top-0 right-0 w-[2.43rem] h-[2.43rem] bg-cyan-400/10 blur-3xl rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Join;










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

const Join = () => {
  const services = [
    { title: "MATM", desc: "Micro ATM Services", icon: <LayoutGrid size={14} /> },
    { title: "POS MACHINE", desc: "Point of Sale Solutions", icon: <CreditCard size={14} /> },
    { title: "CC BILL PAY", desc: "Credit Card Bill Payments", icon: <CreditCard size={14} /> },
    { title: "RECHARGE", desc: "Mobile & DTH Recharge", icon: <Smartphone size={14} /> },
    { title: "BBPS", desc: "Bharat Bill Payment System", icon: <Zap size={14} /> },
    { title: "COLLECT", desc: "Payment Collection Services", icon: <Wallet size={14} /> },
    { title: "CREDIT CARD", desc: "Credit Card Services", icon: <CreditCard size={14} /> },
    { title: "LOAN", desc: "Loan Services", icon: <TrendingUp size={14} /> },
    { title: "INSURANCE", desc: "Insurance", icon: <ShieldCheck size={14} /> },
  ];

  const benefits = [
    { title: "0 Investment Business", icon: <IndianRupee size={14} /> },
    { title: "Simple Joining Process", icon: <ShieldCheck size={14} /> },
    { title: "24*7 Customer Service", icon: <Headphones size={14} /> },
    { title: "Earn upto ₹4 Lakh to ₹12 Lakh per annum", icon: <IndianRupee size={14} /> },
  ];

  const whyChoose = [
    { title: "0 Investment Business", icon: <IndianRupee size={14} /> },
    { title: "Simple Joining Process", icon: <ShieldCheck size={14} /> },
    { title: "24*7 Customer Service", icon: <Headphones size={14} /> },
    { title: "Upto ₹12 Lakh Earning Potential", icon: <TrendingUp size={14} /> },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[0.81rem]">

      {/* ---------------- Hero Section ---------------- */}
      <section className="relative pt-[6rem] sm:pt-[7.5rem] md:pt-[4rem] pb-[1.417rem] sm:pb-[2.025rem] md:pb-[2.835rem] px-[0.608rem] sm:px-[1.012rem] overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div className="absolute top-[1.62rem] left-0 w-[5.67rem] h-[5.67rem] sm:w-[9.72rem] sm:h-[9.72rem] bg-teal-100/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[5.67rem] h-[5.67rem] sm:w-[9.72rem] sm:h-[9.72rem] bg-blue-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[1.417rem] lg:gap-[1.012rem] items-center">
          {/* Left: copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-[0.506rem] py-[0.101rem] mb-[0.608rem] text-[0.495rem] font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full">
              Digital Banking Partner
            </span>

            <h1 className="text-[1.35rem] sm:text-[1.688rem] md:text-[1.755rem] font-extrabold mb-[0.608rem] leading-tight text-slate-900">
              AbheePay ke saath apna{" "}
              <span className="text-teal-500">banking vyapar</span> shuru karein
            </h1>

            <p className="text-[0.675rem] sm:text-[0.787rem] text-gray-500 mb-[0.81rem] max-w-lg mx-auto lg:mx-0">
              Enabling Indian SMEs to maximise their earning within a single platform.
              Join the revolution of digital finance.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-[0.608rem]">
              <Link to="/contact">
                <button className="px-[1.012rem] py-[0.506rem] bg-[#2DD4BF] text-white rounded-lg font-semibold hover:bg-[#14B8A6] transition shadow-lg shadow-teal-100 text-[0.787rem]">
                  Get Started
                </button>
              </Link>
              <button className="flex items-center gap-[0.304rem] text-[0.675rem] font-semibold text-slate-700 hover:text-teal-600 transition">
                <span className="w-[1.417rem] h-[1.417rem] rounded-full border-2 border-slate-300 flex items-center justify-center">
                  <Play size={10} fill="currentColor" />
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
            className="relative h-[230px] sm:h-[270px] flex items-center justify-center"
          >
            {/* base platform */}
            <div className="absolute bottom-[0.608rem] w-[9.72rem] h-[1.417rem] sm:w-[12.15rem] sm:h-[1.823rem] bg-slate-100 rounded-full blur-sm"></div>

            {/* credit card behind phone */}
            <div className="absolute bottom-[1.215rem] right-[0.81rem] sm:right-[1.62rem] w-[4.725rem] h-[2.835rem] sm:w-[4.86rem] sm:h-[3.375rem] rounded-lg bg-gradient-to-br from-[#1e2736] to-teal-700 shadow-xl rotate-6"></div>

            {/* phone frame */}
            <div className="relative w-[7.425rem] sm:w-[8.775rem] h-[202px] sm:h-[243px] bg-slate-900 rounded-[1.35rem] p-[0.304rem] shadow-2xl z-10">
              <div className="w-full h-full bg-white rounded-[1.08rem] overflow-hidden flex flex-col items-center px-[0.506rem] pt-[1.012rem]">
                <span className="text-teal-500 font-extrabold tracking-wide text-[0.63rem] mb-[0.608rem]">ABHEEPAY</span>
                <div className="w-full bg-slate-50 rounded-lg p-[0.506rem] border border-slate-100 shadow-sm">
                  <p className="text-[0.405rem] text-slate-400 mb-[0.101rem]">Total Earnings</p>
                  <p className="text-[0.787rem] font-extrabold text-slate-800">₹12,00,000</p>
                  <p className="text-[0.45rem] font-semibold text-emerald-500 mb-[0.304rem]">+20% This Month</p>
                  <svg viewBox="0 0 100 30" className="w-full h-[1.215rem]">
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
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[1.012rem] left-0 sm:left-[0.304rem] bg-white rounded-lg shadow-lg px-[0.506rem] py-[0.405rem] flex items-center gap-[0.304rem] z-20"
            >
              <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-teal-50 flex items-center justify-center text-teal-500">
                <Wallet size={11} />
              </span>
              <span className="text-[0.495rem] font-semibold text-slate-700">CC Bill Pay</span>
            </motion.div>

            {/* floating card: BBPS */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[2.43rem] left-0 sm:-left-1.5 bg-white rounded-lg shadow-lg px-[0.506rem] py-[0.405rem] flex items-center gap-[0.304rem] z-20"
            >
              <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-teal-500 flex items-center justify-center text-white">
                <Zap size={11} />
              </span>
              <span className="text-[0.495rem] font-semibold text-slate-700">BBPS</span>
            </motion.div>

            {/* floating card: POS Machine */}
            <motion.div
              animate={{ y: [0, -4.5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[4.05rem] right-0 sm:-right-1.5 bg-white rounded-lg shadow-lg px-[0.506rem] py-[0.405rem] flex flex-col items-center gap-[0.101rem] z-20"
            >
              <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-teal-50 flex items-center justify-center text-teal-500">
                <LayoutGrid size={11} />
              </span>
              <span className="text-[0.45rem] font-semibold text-slate-700">POS Machine</span>
            </motion.div>

            {/* connecting dashed lines */}
            <svg className="absolute inset-0 w-full h-full -z-0 hidden sm:block" viewBox="0 0 400 400">
              <line x1="70" y1="70" x2="180" y2="140" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
              <line x1="60" y1="280" x2="170" y2="230" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
              <line x1="330" y1="150" x2="240" y2="180" stroke="#7dd3fc" strokeDasharray="4 4" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Partner CTA ---------------- */}
      <section className="px-[0.608rem] sm:px-[1.012rem]">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#2DD4BF] to-[#0D9488] rounded-2xl px-[0.81rem] sm:px-[1.215rem] py-[1.012rem] sm:py-[1.215rem] flex flex-col sm:flex-row items-center gap-[0.709rem] sm:gap-[1.012rem] text-white"
        >
          <div className="w-[2.362rem] h-[2.362rem] rounded-full bg-white/15 flex items-center justify-center shrink-0">
            <Handshake size={17} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-[0.787rem] sm:text-[0.9rem] font-bold mb-[0.203rem]">Start Your Banking Journey as Partner Today</h2>
            <p className="text-teal-50/90 text-[0.675rem] max-w-xl">
              Join thousands of successful retailers who have transformed their business with AbheePay.
              Earn up to <span className="font-bold text-white">₹12 Lakh</span> annually!
            </p>
          </div>
          <Link to="/contact">
            <motion.button
              whileHover={{ y: -3 }}
              className="bg-white text-[#0D9488] px-[0.709rem] sm:px-[1.012rem] py-[0.405rem] rounded-lg font-bold flex items-center gap-[0.304rem] shadow-lg whitespace-nowrap text-[0.675rem]"
            >
              Join as Partner Now <ArrowRight size={11} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ---------------- Services Grid ---------------- */}
      <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-[1.417rem]">
            <p className="flex items-center justify-center gap-[0.405rem] text-teal-500 text-[0.54rem] font-bold uppercase tracking-[0.2em] mb-[0.405rem]">
              <span className="w-[1.012rem] h-px bg-teal-300"></span>
              Our Services
              <span className="w-[1.012rem] h-px bg-teal-300"></span>
            </p>
            <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900">
              Comprehensive banking and <br className="hidden sm:block" />
              <span className="text-teal-500">financial solutions</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[0.608rem]"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4.5 }}
                className="bg-white p-[0.709rem] rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center gap-[0.608rem]"
              >
                <div className="w-[1.913rem] h-[1.913rem] shrink-0 bg-teal-50 rounded-lg flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[0.675rem] tracking-wide mb-[0.101rem]">{service.title}</h3>
                  <p className="text-gray-500 text-[0.585rem] leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- Benefits (dark, boxed) ---------------- */}
      <section className="px-[0.608rem] sm:px-[1.012rem] pb-[2.025rem] sm:pb-[2.43rem]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-teal-50 to-slate-50 rounded-[1.35rem] py-[1.417rem] sm:py-[1.823rem] px-[0.81rem] sm:px-[1.215rem]">
          <div className="text-center mb-[1.215rem] sm:mb-[1.417rem]">
            <p className="text-teal-600 font-bold mb-[0.203rem] uppercase tracking-[0.2em] text-[0.54rem]">
              Aapka Business Humara Investment
            </p>
            <h2 className="text-[1.012rem] sm:text-[1.35rem] font-extrabold text-slate-900">
              Abheepay <span className="text-teal-500">Benefits</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.608rem]">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-[0.709rem] rounded-xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-[1.913rem] h-[1.913rem] mx-auto rounded-full bg-teal-500 text-white flex items-center justify-center mb-[0.405rem]">
                  {benefit.icon}
                </div>
                <p className="text-[0.675rem] font-bold text-slate-800 leading-snug">{benefit.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why Choose (light) ---------------- */}
      <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-[#f8fafc] text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[4.86rem] h-[4.86rem] bg-teal-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[4.86rem] h-[4.86rem] bg-indigo-100/50 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="flex items-center justify-center gap-[0.405rem] text-[#2dd4bf] font-bold mb-[0.304rem] uppercase tracking-widest text-[0.54rem]">
            <span className="w-[1.012rem] h-px bg-teal-300"></span>
            Why Choose AbheePay?
            <span className="w-[1.012rem] h-px bg-teal-300"></span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[0.608rem] mt-[1.215rem]">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white p-[0.709rem] sm:p-[1.012rem] rounded-[1.17rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-teal-200 transition-all duration-300"
              >
                <div className="relative w-[1.913rem] h-[1.913rem] mx-auto mb-[0.608rem] flex items-center justify-center">
                  <div className="absolute inset-0 bg-indigo-50 rounded-xl rotate-6 group-hover:rotate-12 group-hover:bg-[#2dd4bf] transition-all duration-300"></div>
                  <div className="relative text-[#2dd4bf] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-[0.675rem] sm:text-[0.787rem] font-extrabold text-slate-800 leading-tight">
                  {item.title}
                </h3>

                <div className="mt-[0.405rem] h-[0.101rem] w-[1.012rem] bg-indigo-100 mx-auto rounded-full group-hover:w-[1.688rem] group-hover:bg-[#2dd4bf] transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact Section ---------------- */}
      <section className="py-[2.025rem] sm:py-[2.43rem] px-[0.608rem] sm:px-[1.012rem] bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[1.35rem] overflow-hidden">
            {/* form */}
            <div className="bg-white p-[1.012rem] sm:p-[1.215rem] order-2 lg:order-1">
              <div className="flex items-center gap-[0.304rem] mb-[0.709rem]">
                <span className="w-[1.215rem] h-[1.215rem] rounded-md bg-teal-50 text-teal-500 flex items-center justify-center">
                  <User size={11} />
                </span>
                <h2 className="text-[0.787rem] sm:text-[0.9rem] font-bold">Join Us Today</h2>
              </div>
              <form className="space-y-2.5">
                <div className="space-y-0.5">
                  <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-2 focus:ring-teal-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[0.506rem]">
                  <div className="space-y-0.5">
                    <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-2 focus:ring-teal-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-2 focus:ring-teal-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <label className="text-[0.585rem] font-semibold text-gray-600 ml-[0.203rem]">City</label>
                  <input
                    type="text"
                    placeholder="New Delhi"
                    className="w-full p-[0.506rem] bg-white border border-gray-200 rounded-lg focus:border-teal-400 focus:ring-2 focus:ring-teal-400/40 outline-none transition text-[0.675rem] text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-teal-400 text-white font-bold py-[0.506rem] rounded-lg hover:bg-teal-500 transition-colors mt-[0.304rem] text-[0.675rem] shadow-lg shadow-teal-100 flex items-center justify-center gap-[0.304rem]"
                >
                  Submit Application <ArrowRight size={10} />
                </motion.button>
              </form>
            </div>

            {/* contact info */}
            <div className="bg-[#1e2736] text-white p-[1.012rem] sm:p-[1.215rem] flex flex-col justify-between relative order-1 lg:order-2 overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-[0.787rem] sm:text-[0.9rem] font-bold mb-[0.709rem]">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-[0.405rem]">
                    <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-teal-400 shrink-0">
                      <Mail size={10} />
                    </div>
                    <span className="text-[0.675rem] text-gray-300">care@abheepay.in</span>
                  </div>
                  <div className="flex items-center gap-[0.405rem]">
                    <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-teal-400 shrink-0">
                      <Phone size={10} />
                    </div>
                    <span className="text-[0.675rem] text-gray-300">88600 37218</span>
                  </div>
                  <div className="flex items-start gap-[0.405rem]">
                    <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-teal-400 shrink-0">
                      <MapPin size={10} />
                    </div>
                    <span className="text-[0.675rem] text-gray-300 leading-relaxed">
                      2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA, NEW DELHI- 110043
                    </span>
                  </div>
                  <div className="flex items-center gap-[0.405rem]">
                    <div className="w-[1.215rem] h-[1.215rem] bg-white/10 rounded-md flex items-center justify-center text-teal-400 shrink-0">
                      <Globe size={10} />
                    </div>
                    <span className="text-[0.675rem] text-gray-300">www.abheepay.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-[1.012rem] pt-[0.608rem] border-t border-white/10 relative z-10">
                <p className="text-gray-400 italic text-[0.585rem]">
                  "Empowering Rural India through Digital Innovation."
                </p>
              </div>

              <Landmark size={94} className="absolute -bottom-[1.012rem] -right-[1.012rem] text-white/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-[2.43rem] h-[2.43rem] bg-teal-400/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Join;