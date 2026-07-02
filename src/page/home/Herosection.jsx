// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const slides = [
//     {
//       title: "MATM – Micro ATM Services",
//       desc: "Provide cash withdrawal, balance enquiry, and mini statements directly at retail outlets with AbheePay MATM services.",
//       img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
//       link: "/services/micro-atm-matm-services" 
//     },
//     {
//       title: "POS Machine Solutions",
//       desc: "Accept debit and credit card payments easily with fast, secure, and reliable POS machines for your business.",
//       img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
//       link: "/services/pos-devices"
//     },
//     {
//       title: "BBPS & Recharge Services",
//       desc: "Offer electricity, water, gas, mobile, and DTH bill payments under one platform with BBPS and recharge services.",
//       img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
//       link: "/services/bbps-recharge-bill-payments"
//     },
//     {
//       title: "Credit Card, Loan & Collection Services",
//       desc: "Enable credit card services, loan assistance, and payment collection solutions to grow your retail business.",
//       img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
//       link: "/services/credit-card-sourcing-and-lifecycle-support"
//     }
//   ];

//   return (
//     <section className="relative w-full h-[80dvh] md:h-[100dvh] font-sans overflow-hidden">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop
//         onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//         navigation={{
//           nextEl: ".hero-next",
//           prevEl: ".hero-prev",
//         }}
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <section
//               className="relative w-full h-full bg-cover bg-center flex items-center"
//               style={{ backgroundImage: `url('${slide.img}')` }}
//             >
//               <div className="absolute inset-0 bg-black/10"></div>
//               <div
//                 className={`relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 text-white transition-all duration-1000 ease-out ${
//                   activeSlide === index
//                     ? "opacity-100 translate-y-0 scale-100 blur-0"
//                     : "opacity-0 translate-y-12 sm:translate-y-16 scale-95 blur-sm"
//                 }`}
//               >
//                 <h1 className="text-[2.1rem] leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl max-w-[90%] sm:max-w-4xl">
//                   {slide.title}
//                 </h1>
//                 <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-[95%] sm:max-w-3xl text-white/90 leading-relaxed">
//                   {slide.desc}
//                 </p>
//                 <div className="mt-8 sm:mt-10">
//                   <Link to={slide.link}>
//                     <button className="border border-white px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold tracking-wide uppercase hover:bg-white hover:text-black transition min-w-[140px] sm:min-w-[160px]">
//                       Know More
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </section>
//           </SwiperSlide>
//         ))}
//       </Swiper>

      
//       <div className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-end gap-2 sm:gap-3 z-20 hidden sm:flex">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`h-[2px] sm:h-[3px] transition-all duration-300 ${
//               activeSlide === i ? "w-8 sm:w-10 bg-white" : "w-4 sm:w-6 bg-white/40"
//             }`}
//           ></span>
//         ))}
//       </div>


//       <div className="absolute bottom-5 sm:bottom-8 md:bottom-10 right-5 sm:right-8 md:right-10 flex items-center gap-4 sm:gap-6 text-white z-20">
//         <button className="hero-prev text-3xl sm:text-4xl hover:opacity-70 transition">
//           &#8249;
//         </button>
//         <span className="w-px h-6 sm:h-8 bg-white/50"></span>
//         <button className="hero-next text-3xl sm:text-4xl hover:opacity-70 transition">
//           &#8250;
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;





// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });
//   const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
//   const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const slides = [
//     {
//       eyebrow: "Micro ATM Network",
//       titleMain: "Powering India's",
//       titleAccent: "Digital Payment Ecosystem",
//       desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
//       link: "/services/micro-atm-matm-services",
//       dashboard: {
//         revenue: "\u20b912.5Cr",
//         revenueGrowth: "+23.5% this month",
//         successRate: "99.5%",
//         successNote: "8,234 transactions",
//         chart: [55, 70, 80, 50, 90, 100, 85],
//         img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
//       },
//     },
//     {
//       eyebrow: "Card Payment Infrastructure",
//       titleMain: "Accept Payments Anywhere with",
//       titleAccent: "POS Solutions",
//       desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
//       link: "/services/pos-devices",
//       dashboard: {
//         revenue: "\u20b98.1Cr",
//         revenueGrowth: "+15.2% this month",
//         successRate: "98.9%",
//         successNote: "5,410 transactions",
//         chart: [40, 65, 60, 75, 55, 95, 80],
//         img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
//       },
//     },
//     {
//       eyebrow: "Bill Payment Platform",
//       titleMain: "One Platform for",
//       titleAccent: "BBPS & Recharge Services",
//       desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
//       link: "/services/bbps-recharge-bill-payments",
//       dashboard: {
//         revenue: "\u20b94.6Cr",
//         revenueGrowth: "+9.8% this month",
//         successRate: "99.1%",
//         successNote: "12,980 transactions",
//         chart: [60, 50, 70, 85, 65, 75, 90],
//         img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
//       },
//     },
//     {
//       eyebrow: "Credit & Collections",
//       titleMain: "Grow Faster with",
//       titleAccent: "Loan & Collection Services",
//       desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
//       link: "/services/credit-card-sourcing-and-lifecycle-support",
//       dashboard: {
//         revenue: "\u20b96.3Cr",
//         revenueGrowth: "+18.4% this month",
//         successRate: "99.2%",
//         successNote: "3,150 transactions",
//         chart: [45, 55, 95, 70, 60, 80, 65],
//         img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
//       },
//     },
//   ];

//   const stats = [
//     { icon: Users, value: "100,000+", label: "Merchants" },
//     { icon: Building2, value: "500+", label: "Partners" },
//     { icon: Coins, value: "99.9%", label: "Uptime" },
//     { icon: Headphones, value: "24x7", label: "Support" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full font-sans bg-white overflow-hidden"
//     >
//       {/* full-bleed soft background image per slide, faded behind the gradient wash */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         allowTouchMove={false}
//         speed={1200}
//         className="absolute inset-0 z-0 h-full w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={`bg-${index}`}>
//             <div
//               className="h-full w-full bg-cover bg-center"
//               style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-sm" />
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-cyan-50/50 to-gray-100/60" />

//       <motion.div
//         aria-hidden="true"
//         className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl z-0"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         autoHeight
//         onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//         navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
//         className="relative z-10 w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16">
//               <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16 items-center">
//                 {/* left: heading + copy + ctas */}
//                 <motion.div
//                   style={{ opacity: fade }}
//                   className={`transition-all duration-1000 ease-out ${
//                     activeSlide === index
//                       ? "opacity-100 translate-y-0 blur-0"
//                       : "opacity-0 translate-y-10 blur-sm"
//                   }`}
//                 >
//                   <motion.h1
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     style={{
//                       fontSize: "clamp(1.85rem, 1.0rem + 2.6vw, 3rem)",
//                       lineHeight: 1.15,
//                     }}
//                     className="font-bold text-gray-900 max-w-lg"
//                   >
//                     {slide.titleMain}{" "}
//                     <span className="text-cyan-500">{slide.titleAccent}</span>
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="mt-5 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md"
//                   >
//                     {slide.desc}
//                   </motion.p>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="mt-7 flex flex-wrap items-center gap-3"
//                   >
//                     <Link to={slide.link}>
//                       <motion.button
//                         whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -8px rgba(6,182,212,0.5)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-400"
//                       >
//                         Get Started
//                       </motion.button>
//                     </Link>
//                     <Link to="/contact">
//                       <motion.button
//                         whileHover={{ scale: 1.04, backgroundColor: "rgb(240 253 250)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-lg border border-cyan-500 px-6 py-3 text-sm font-semibold text-cyan-600 bg-white transition-colors"
//                       >
//                         Book Demo
//                       </motion.button>
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* right: floating dashboard card */}
//                 <motion.div
//                   style={{ y: cardY }}
//                   initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                   animate={
//                     activeSlide === index
//                       ? { opacity: 1, y: 0, scale: 1 }
//                       : { opacity: 0, y: 40, scale: 0.96 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
//                   whileHover={{ y: -6 }}
//                   className="relative w-full max-w-[400px] h-full max-h-[500px] lg:ml-auto rounded-2xl bg-white/95 backdrop-blur-md p-2 shadow-2xl shadow-gray-900/10 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-2 gap-5">
//                     <div
//                       className="relative rounded-xl p-2 text-white overflow-hidden"
//                       style={{
//                         backgroundImage: `linear-gradient(135deg, rgba(8,145,178,0.88), rgba(6,182,212,0.75)), url('${slide.dashboard.img}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <BarChart3 className="h-3 w-3" />
//                       <p className="mt-3 text-xs text-white/80">Total Revenue</p>
//                       <p className="mt-1  text-xs font-bold">{slide.dashboard.revenue}</p>
//                       <p className="mt-1 text-[11px] text-white/80">
//                         &#8599; {slide.dashboard.revenueGrowth}
//                       </p>
//                     </div>
//                     <div className="rounded-xl border border-gray-100 bg-white p-1">
//                       <CheckCircle2 className="h-3 w-3 text-cyan-500" />
//                       <p className="mt-3 text-xs text-gray-500">Success Rate</p>
//                       <p className="mt-1 text-xl font-bold text-gray-900">
//                         {slide.dashboard.successRate}
//                       </p>
//                       <p className="mt-2 text-[10px] text-gray-400">{slide.dashboard.successNote}</p>
//                     </div>
//                   </div>

//                   <div className="mt-3 rounded-xl border border-gray-100 bg-white p-4">
//                     <div className="flex items-center justify-between">
//                       <p className="text-sm font-semibold text-gray-800">Transaction Analytics</p>
//                       <span className="text-xs text-gray-400">Last 7 days</span>
//                     </div>
//                     <div className="mt-5 flex items-end justify-between gap-2 h-24 sm:h-28">
//                       {slide.dashboard.chart.map((h, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ height: 0 }}
//                           animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
//                           transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
//                           className="flex-1 rounded-md bg-cyan-400"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute right-4 sm:right-6 md:right-8 top-[16%] flex flex-col items-end gap-2 sm:gap-3 z-20 hidden sm:flex">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`h-[2px] sm:h-[3px] transition-all duration-300 ${
//               activeSlide === i ? "w-8 sm:w-10 bg-cyan-500" : "w-4 sm:w-6 bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>

//       <div className="absolute top-3 sm:top-4 right-5 sm:right-8 md:right-10 flex items-center gap-4 sm:gap-6 text-gray-700 z-20 hidden sm:flex">
//         <motion.button
//           whileHover={{ scale: 1.15, x: -2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-prev text-2xl sm:text-3xl"
//         >
//           &#8249;
//         </motion.button>
//         <span className="w-px h-5 sm:h-6 bg-gray-300"></span>
//         <motion.button
//           whileHover={{ scale: 1.15, x: 2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-next text-2xl sm:text-3xl"
//         >
//           &#8250;
//         </motion.button>
//       </div>

//       {/* bottom stats strip */}
//       <div className="relative z-10 border-t border-gray-100 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="text-center"
//               >
//                 <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-500 mx-auto" />
//                 <p className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
//                 <p className="mt-1 text-xs sm:text-sm text-gray-500">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

















// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });
//   const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
//   const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const slides = [
//     {
//       eyebrow: "Micro ATM Network",
//       titleMain: "Powering India's",
//       titleAccent: "Digital Payment Ecosystem",
//       desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
//       link: "/services/micro-atm-matm-services",
//       dashboard: {
//         revenue: "\u20b912.5Cr",
//         revenueGrowth: "+23.5% this month",
//         successRate: "99.5%",
//         successNote: "8,234 transactions",
//         chart: [55, 70, 80, 50, 90, 100, 85],
//         img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
//       },
//     },
//     {
//       eyebrow: "Card Payment Infrastructure",
//       titleMain: "Accept Payments Anywhere with",
//       titleAccent: "POS Solutions",
//       desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
//       link: "/services/pos-devices",
//       dashboard: {
//         revenue: "\u20b98.1Cr",
//         revenueGrowth: "+15.2% this month",
//         successRate: "98.9%",
//         successNote: "5,410 transactions",
//         chart: [40, 65, 60, 75, 55, 95, 80],
//         img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
//       },
//     },
//     {
//       eyebrow: "Bill Payment Platform",
//       titleMain: "One Platform for",
//       titleAccent: "BBPS & Recharge Services",
//       desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
//       link: "/services/bbps-recharge-bill-payments",
//       dashboard: {
//         revenue: "\u20b94.6Cr",
//         revenueGrowth: "+9.8% this month",
//         successRate: "99.1%",
//         successNote: "12,980 transactions",
//         chart: [60, 50, 70, 85, 65, 75, 90],
//         img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
//       },
//     },
//     {
//       eyebrow: "Credit & Collections",
//       titleMain: "Grow Faster with",
//       titleAccent: "Loan & Collection Services",
//       desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
//       link: "/services/credit-card-sourcing-and-lifecycle-support",
//       dashboard: {
//         revenue: "\u20b96.3Cr",
//         revenueGrowth: "+18.4% this month",
//         successRate: "99.2%",
//         successNote: "3,150 transactions",
//         chart: [45, 55, 95, 70, 60, 80, 65],
//         img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
//       },
//     },
//   ];

//   const stats = [
//     { icon: Users, value: "100,000+", label: "Merchants" },
//     { icon: Building2, value: "500+", label: "Partners" },
//     { icon: Coins, value: "99.9%", label: "Uptime" },
//     { icon: Headphones, value: "24x7", label: "Support" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full font-sans bg-white overflow-hidden"
//     >
//       {/* full-bleed soft background image per slide, faded behind the gradient wash */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         allowTouchMove={false}
//         speed={1200}
//         className="absolute inset-0 z-0 h-full w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={`bg-${index}`}>
//             <div
//               className="h-full w-full bg-cover bg-center"
//               style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-sm" />
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-cyan-50/50 to-gray-100/60" />

//       <motion.div
//         aria-hidden="true"
//         className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl z-0"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         autoHeight
//         onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//         navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
//         className="relative z-10 w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14">
//               <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-14 items-center">
//                 {/* left: heading + copy + ctas */}
//                 <motion.div
//                   style={{ opacity: fade }}
//                   className={`transition-all duration-1000 ease-out ${
//                     activeSlide === index
//                       ? "opacity-100 translate-y-0 blur-0"
//                       : "opacity-0 translate-y-10 blur-sm"
//                   }`}
//                 >
//                   <motion.h1
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     style={{
//                       fontSize: "clamp(1.5rem, 0.9rem + 2vw, 2.5rem)",
//                       lineHeight: 1.2,
//                     }}
//                     className="font-bold text-gray-900 max-w-lg"
//                   >
//                     {slide.titleMain}{" "}
//                     <span className="text-cyan-500">{slide.titleAccent}</span>
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="mt-4 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md"
//                   >
//                     {slide.desc}
//                   </motion.p>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="mt-6 flex flex-wrap items-center gap-2.5"
//                   >
//                     <Link to={slide.link}>
//                       <motion.button
//                         whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -8px rgba(6,182,212,0.5)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-lg bg-cyan-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-cyan-400"
//                       >
//                         Get Started
//                       </motion.button>
//                     </Link>
//                     <Link to="/contact">
//                       <motion.button
//                         whileHover={{ scale: 1.04, backgroundColor: "rgb(240 253 250)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-lg border border-cyan-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-cyan-600 bg-white transition-colors"
//                       >
//                         Book Demo
//                       </motion.button>
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* right: floating dashboard card */}
//                 <motion.div
//                   style={{ y: cardY }}
//                   initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                   animate={
//                     activeSlide === index
//                       ? { opacity: 1, y: 0, scale: 1 }
//                       : { opacity: 0, y: 40, scale: 0.96 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
//                   whileHover={{ y: -6 }}
//                   className="relative w-full max-w-[340px] lg:ml-auto rounded-xl bg-white/95 backdrop-blur-md p-3 shadow-xl shadow-gray-900/10 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-2 gap-2.5">
//                     <div
//                       className="relative rounded-lg p-3 text-white overflow-hidden"
//                       style={{
//                         backgroundImage: `linear-gradient(135deg, rgba(8,145,178,0.88), rgba(6,182,212,0.75)), url('${slide.dashboard.img}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <BarChart3 className="h-3.5 w-3.5" />
//                       <p className="mt-2 text-[10px] text-white/80">Total Revenue</p>
//                       <p className="mt-0.5 text-base font-bold">{slide.dashboard.revenue}</p>
//                       <p className="mt-1 text-[9px] text-white/80">
//                         &#8599; {slide.dashboard.revenueGrowth}
//                       </p>
//                     </div>
//                     <div className="rounded-lg border border-gray-100 bg-white p-3">
//                       <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500" />
//                       <p className="mt-2 text-[10px] text-gray-500">Success Rate</p>
//                       <p className="mt-0.5 text-base font-bold text-gray-900">
//                         {slide.dashboard.successRate}
//                       </p>
//                       <p className="mt-1 text-[9px] text-gray-400">{slide.dashboard.successNote}</p>
//                     </div>
//                   </div>

//                   <div className="mt-2.5 rounded-lg border border-gray-100 bg-white p-3">
//                     <div className="flex items-center justify-between">
//                       <p className="text-xs font-semibold text-gray-800">Transaction Analytics</p>
//                       <span className="text-[10px] text-gray-400">Last 7 days</span>
//                     </div>
//                     <div className="mt-3 flex items-end justify-between gap-1.5 h-14">
//                       {slide.dashboard.chart.map((h, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ height: 0 }}
//                           animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
//                           transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
//                           className="flex-1 rounded-sm bg-cyan-400"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute right-4 sm:right-6 md:right-8 top-[16%] flex flex-col items-end gap-2 z-20 hidden sm:flex">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`h-[2px] transition-all duration-300 ${
//               activeSlide === i ? "w-7 bg-cyan-500" : "w-4 bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>

//       <div className="absolute top-3 right-5 sm:right-8 md:right-10 flex items-center gap-3 text-gray-700 z-20 hidden sm:flex">
//         <motion.button
//           whileHover={{ scale: 1.15, x: -2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-prev text-xl sm:text-2xl"
//         >
//           &#8249;
//         </motion.button>
//         <span className="w-px h-4 sm:h-5 bg-gray-300"></span>
//         <motion.button
//           whileHover={{ scale: 1.15, x: 2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-next text-xl sm:text-2xl"
//         >
//           &#8250;
//         </motion.button>
//       </div>

//       {/* bottom stats strip */}
//       <div className="relative z-10 border-t border-gray-100 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="text-center"
//               >
//                 <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-500 mx-auto" />
//                 <p className="mt-2 text-lg sm:text-xl font-bold text-gray-900">{stat.value}</p>
//                 <p className="mt-1 text-[11px] sm:text-xs text-gray-500">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;






// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });
//   const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
//   const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const slides = [
//     {
//       eyebrow: "Micro ATM Network",
//       titleMain: "Powering India's",
//       titleAccent: "Digital Payment Ecosystem",
//       desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
//       link: "/services/micro-atm-matm-services",
//       dashboard: {
//         revenue: "\u20b912.5Cr",
//         revenueGrowth: "+23.5% this month",
//         successRate: "99.5%",
//         successNote: "8,234 transactions",
//         chart: [55, 70, 80, 50, 90, 100, 85],
//         img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
//       },
//     },
//     {
//       eyebrow: "Card Payment Infrastructure",
//       titleMain: "Accept Payments Anywhere with",
//       titleAccent: "POS Solutions",
//       desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
//       link: "/services/pos-devices",
//       dashboard: {
//         revenue: "\u20b98.1Cr",
//         revenueGrowth: "+15.2% this month",
//         successRate: "98.9%",
//         successNote: "5,410 transactions",
//         chart: [40, 65, 60, 75, 55, 95, 80],
//         img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
//       },
//     },
//     {
//       eyebrow: "Bill Payment Platform",
//       titleMain: "One Platform for",
//       titleAccent: "BBPS & Recharge Services",
//       desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
//       link: "/services/bbps-recharge-bill-payments",
//       dashboard: {
//         revenue: "\u20b94.6Cr",
//         revenueGrowth: "+9.8% this month",
//         successRate: "99.1%",
//         successNote: "12,980 transactions",
//         chart: [60, 50, 70, 85, 65, 75, 90],
//         img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
//       },
//     },
//     {
//       eyebrow: "Credit & Collections",
//       titleMain: "Grow Faster with",
//       titleAccent: "Loan & Collection Services",
//       desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
//       link: "/services/credit-card-sourcing-and-lifecycle-support",
//       dashboard: {
//         revenue: "\u20b96.3Cr",
//         revenueGrowth: "+18.4% this month",
//         successRate: "99.2%",
//         successNote: "3,150 transactions",
//         chart: [45, 55, 95, 70, 60, 80, 65],
//         img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
//       },
//     },
//   ];

//   const stats = [
//     { icon: Users, value: "100,000+", label: "Merchants" },
//     { icon: Building2, value: "500+", label: "Partners" },
//     { icon: Coins, value: "99.9%", label: "Uptime" },
//     { icon: Headphones, value: "24x7", label: "Support" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full font-sans bg-white overflow-hidden"
//     >
//       {/* full-bleed soft background image per slide, faded behind the gradient wash */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         allowTouchMove={false}
//         speed={1200}
//         className="absolute inset-0 z-0 h-full w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={`bg-${index}`}>
//             <div
//               className="h-full w-full bg-cover bg-center"
//               style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-sm" />
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-cyan-50/50 to-gray-100/60" />

//       <motion.div
//         aria-hidden="true"
//         className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl z-0"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         autoHeight
//         onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//         navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
//         className="relative z-10 w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14">
//               <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-14 items-center">
//                 {/* left: heading + copy + ctas */}
//                 <motion.div
//                   style={{ opacity: fade }}
//                   className={`transition-all duration-1000 ease-out ${
//                     activeSlide === index
//                       ? "opacity-100 translate-y-0 blur-0"
//                       : "opacity-0 translate-y-10 blur-sm"
//                   }`}
//                 >
//                   <motion.h1
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     style={{
//                       fontSize: "clamp(1.25rem, 0.8rem + 1.6vw, 2rem)",
//                       lineHeight: 1.2,
//                     }}
//                     className="font-bold text-gray-900 max-w-lg"
//                   >
//                     {slide.titleMain}{" "}
//                     <span className="text-cyan-500">{slide.titleAccent}</span>
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="mt-3 text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-sm"
//                   >
//                     {slide.desc}
//                   </motion.p>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="mt-6 flex flex-wrap items-center gap-2.5"
//                   >
//                     <Link to={slide.link}>
//                       <motion.button
//                         whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -8px rgba(6,182,212,0.5)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md bg-cyan-500 px-4 py-2 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:bg-cyan-400"
//                       >
//                         Get Started
//                       </motion.button>
//                     </Link>
//                     <Link to="/contact">
//                       <motion.button
//                         whileHover={{ scale: 1.04, backgroundColor: "rgb(240 253 250)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md border border-cyan-500 px-4 py-2 text-[11px] sm:text-xs font-semibold text-cyan-600 bg-white transition-colors"
//                       >
//                         Book Demo
//                       </motion.button>
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* right: floating dashboard card */}
//                 <motion.div
//                   style={{ y: cardY }}
//                   initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                   animate={
//                     activeSlide === index
//                       ? { opacity: 1, y: 0, scale: 1 }
//                       : { opacity: 0, y: 40, scale: 0.96 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
//                   whileHover={{ y: -6 }}
//                   className="relative w-full max-w-[400px] lg:ml-auto rounded-xl bg-white/95 backdrop-blur-md p-2.5 shadow-xl shadow-gray-900/10 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-2 gap-2">
//                     <div
//                       className="relative rounded-lg p-2.5 text-white overflow-hidden"
//                       style={{
//                         backgroundImage: `linear-gradient(135deg, rgba(8,145,178,0.88), rgba(6,182,212,0.75)), url('${slide.dashboard.img}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <BarChart3 className="h-3 w-3" />
//                       <p className="mt-1.5 text-[5px] text-white/80">Total Revenue</p>
//                       <p className="mt-0.5 text-sm font-bold">{slide.dashboard.revenue}</p>
//                       <p className="mt-1 text-[5px] text-white/80">
//                         &#8599; {slide.dashboard.revenueGrowth}
//                       </p>
//                     </div>
//                     <div className="rounded-lg border border-gray-100 bg-white p-2.5">
//                       <CheckCircle2 className="h-3 w-3 text-cyan-500" />
//                       <p className="mt-1.5 text-[8px] text-gray-500">Success Rate</p>
//                       <p className="mt-0.5 text-sm font-bold text-gray-900">
//                         {slide.dashboard.successRate}
//                       </p>
//                       <p className="mt-1 text-[8px] text-gray-400">{slide.dashboard.successNote}</p>
//                     </div>
//                   </div>

//                   <div className="mt-2 rounded-lg border border-gray-100 bg-white p-2.5">
//                     <div className="flex items-center justify-between">
//                       <p className="text-[10px] font-semibold text-gray-800">Transaction Analytics</p>
//                       <span className="text-[8px] text-gray-400">Last 7 days</span>
//                     </div>
//                     <div className="mt-2 flex items-end justify-between gap-1 h-9">
//                       {slide.dashboard.chart.map((h, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ height: 0 }}
//                           animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
//                           transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
//                           className="flex-1 rounded-sm bg-cyan-400 max-w-[10px]"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute right-4 sm:right-6 md:right-8 top-[16%] flex flex-col items-end gap-2 z-20 hidden sm:flex">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`h-[2px] transition-all duration-300 ${
//               activeSlide === i ? "w-7 bg-cyan-500" : "w-4 bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>

//       <div className="absolute top-3 right-5 sm:right-8 md:right-10 flex items-center gap-3 text-gray-700 z-20 hidden sm:flex">
//         <motion.button
//           whileHover={{ scale: 1.15, x: -2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-prev text-xl sm:text-2xl"
//         >
//           &#8249;
//         </motion.button>
//         <span className="w-px h-4 sm:h-5 bg-gray-300"></span>
//         <motion.button
//           whileHover={{ scale: 1.15, x: 2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-next text-xl sm:text-2xl"
//         >
//           &#8250;
//         </motion.button>
//       </div>

//       {/* bottom stats strip */}
//       <div className="relative z-10 border-t border-gray-100 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="text-center"
//               >
//                 <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500 mx-auto" />
//                 <p className="mt-1.5 text-base sm:text-lg font-bold text-gray-900">{stat.value}</p>
//                 <p className="mt-0.5 text-[10px] sm:text-[11px] text-gray-500">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

















// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });
//   const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
//   const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const slides = [
//     {
//       eyebrow: "Micro ATM Network",
//       titleMain: "Powering India's",
//       titleAccent: "Digital Payment Ecosystem",
//       desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
//       link: "/services/micro-atm-matm-services",
//       dashboard: {
//         revenue: "\u20b912.5Cr",
//         revenueGrowth: "+23.5% this month",
//         successRate: "99.5%",
//         successNote: "8,234 transactions",
//         chart: [55, 70, 80, 50, 90, 100, 85],
//         img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
//       },
//     },
//     {
//       eyebrow: "Card Payment Infrastructure",
//       titleMain: "Accept Payments Anywhere with",
//       titleAccent: "POS Solutions",
//       desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
//       link: "/services/pos-devices",
//       dashboard: {
//         revenue: "\u20b98.1Cr",
//         revenueGrowth: "+15.2% this month",
//         successRate: "98.9%",
//         successNote: "5,410 transactions",
//         chart: [40, 65, 60, 75, 55, 95, 80],
//         img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
//       },
//     },
//     {
//       eyebrow: "Bill Payment Platform",
//       titleMain: "One Platform for",
//       titleAccent: "BBPS & Recharge Services",
//       desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
//       link: "/services/bbps-recharge-bill-payments",
//       dashboard: {
//         revenue: "\u20b94.6Cr",
//         revenueGrowth: "+9.8% this month",
//         successRate: "99.1%",
//         successNote: "12,980 transactions",
//         chart: [60, 50, 70, 85, 65, 75, 90],
//         img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
//       },
//     },
//     {
//       eyebrow: "Credit & Collections",
//       titleMain: "Grow Faster with",
//       titleAccent: "Loan & Collection Services",
//       desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
//       link: "/services/credit-card-sourcing-and-lifecycle-support",
//       dashboard: {
//         revenue: "\u20b96.3Cr",
//         revenueGrowth: "+18.4% this month",
//         successRate: "99.2%",
//         successNote: "3,150 transactions",
//         chart: [45, 55, 95, 70, 60, 80, 65],
//         img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
//       },
//     },
//   ];

//   const stats = [
//     { icon: Users, value: "100,000+", label: "Merchants" },
//     { icon: Building2, value: "500+", label: "Partners" },
//     { icon: Coins, value: "99.9%", label: "Uptime" },
//     { icon: Headphones, value: "24x7", label: "Support" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full font-sans bg-white overflow-hidden"
//     >
//       {/* full-bleed soft background image per slide, faded behind the gradient wash */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         allowTouchMove={false}
//         speed={1200}
//         className="absolute inset-0 z-0 h-full w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={`bg-${index}`}>
//             <div
//               className="h-full w-full bg-cover bg-center"
//               style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-sm" />
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-cyan-50/50 to-gray-100/60" />

//       <motion.div
//         aria-hidden="true"
//         className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl z-0"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         autoHeight
//         onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//         navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
//         className="relative z-10 w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14">
//               <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-14 items-center">
//                 {/* left: heading + copy + ctas */}
//                 <motion.div
//                   style={{ opacity: fade }}
//                   className={`transition-all duration-1000 ease-out ${
//                     activeSlide === index
//                       ? "opacity-100 translate-y-0 blur-0"
//                       : "opacity-0 translate-y-10 blur-sm"
//                   }`}
//                 >
//                   <motion.h1
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     style={{
//                       fontSize: "clamp(1.25rem, 0.8rem + 1.6vw, 2rem)",
//                       lineHeight: 1.2,
//                     }}
//                     className="font-bold text-gray-900 max-w-lg"
//                   >
//                     {slide.titleMain}{" "}
//                     <span className="text-cyan-500">{slide.titleAccent}</span>
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="mt-3 text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-sm"
//                   >
//                     {slide.desc}
//                   </motion.p>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="mt-6 flex flex-wrap items-center gap-2.5"
//                   >
//                     <Link to={slide.link}>
//                       <motion.button
//                         whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -8px rgba(6,182,212,0.5)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md bg-cyan-500 px-4 py-2 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:bg-cyan-400"
//                       >
//                         Get Started
//                       </motion.button>
//                     </Link>
//                     <Link to="/contact">
//                       <motion.button
//                         whileHover={{ scale: 1.04, backgroundColor: "rgb(240 253 250)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md border border-cyan-500 px-4 py-2 text-[11px] sm:text-xs font-semibold text-cyan-600 bg-white transition-colors"
//                       >
//                         Book Demo
//                       </motion.button>
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* right: floating dashboard card */}
//                 <motion.div
//                   style={{ y: cardY }}
//                   initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                   animate={
//                     activeSlide === index
//                       ? { opacity: 1, y: 0, scale: 1 }
//                       : { opacity: 0, y: 40, scale: 0.96 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
//                   whileHover={{ y: -6 }}
//                   className="relative w-full max-w-[400px] lg:ml-auto rounded-xl bg-white/95 backdrop-blur-md p-2.5 shadow-xl shadow-gray-900/10 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-2 gap-2">
//                     <div
//                       className="relative rounded-lg p-2 text-white overflow-hidden"
//                       style={{
//                         backgroundImage: `linear-gradient(135deg, rgba(8,145,178,0.88), rgba(6,182,212,0.75)), url('${slide.dashboard.img}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <BarChart3 className="h-3 w-3" />
//                       <p className="mt-1.5 text-[8px] text-white/80">Total Revenue</p>
//                       <p className="mt-0.5 text-sm font-bold">{slide.dashboard.revenue}</p>
//                       <p className="mt-1 text-[8px] text-white/80">
//                         &#8599; {slide.dashboard.revenueGrowth}
//                       </p>
//                     </div>
//                     <div className="rounded-lg border border-gray-100 bg-white p-2">
//                       <CheckCircle2 className="h-2.5 w-2.5 text-cyan-500" />
//                       <p className="mt-1 text-[8px] text-gray-500">Success Rate</p>
//                       <p className="mt-0.5 text-xs font-bold text-gray-900">
//                         {slide.dashboard.successRate}
//                       </p>
//                       <p className="mt-0.5 text-[7px] text-gray-400">{slide.dashboard.successNote}</p>
//                     </div>
//                   </div>

//                   <div className="mt-2 rounded-lg border border-gray-100 bg-white p-2.5">
//                     <div className="flex items-center justify-between">
//                       <p className="text-[10px] font-semibold text-gray-800">Transaction Analytics</p>
//                       <span className="text-[8px] text-gray-400">Last 7 days</span>
//                     </div>
//                     <div className="mt-2 flex items-end justify-between gap-1.5 h-24">
//                       {slide.dashboard.chart.map((h, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ height: 0 }}
//                           animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
//                           transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
//                           className="flex-1 rounded-md bg-cyan-400 max-w-[22px]"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute right-4 sm:right-6 md:right-8 top-[16%] flex flex-col items-end gap-2 z-20 hidden sm:flex">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`h-[2px] transition-all duration-300 ${
//               activeSlide === i ? "w-7 bg-cyan-500" : "w-4 bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>

//       <div className="absolute top-3 right-5 sm:right-8 md:right-10 flex items-center gap-3 text-gray-700 z-20 hidden sm:flex">
//         <motion.button
//           whileHover={{ scale: 1.15, x: -2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-prev text-xl sm:text-2xl"
//         >
//           &#8249;
//         </motion.button>
//         <span className="w-px h-4 sm:h-5 bg-gray-300"></span>
//         <motion.button
//           whileHover={{ scale: 1.15, x: 2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-next text-xl sm:text-2xl"
//         >
//           &#8250;
//         </motion.button>
//       </div>

//       {/* bottom stats strip */}
//       <div className="relative z-10 border-t border-gray-100 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="text-center"
//               >
//                 <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500 mx-auto" />
//                 <p className="mt-1.5 text-base sm:text-lg font-bold text-gray-900">{stat.value}</p>
//                 <p className="mt-0.5 text-[10px] sm:text-[11px] text-gray-500">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;








// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });
//   const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
//   const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const slides = [
//     {
//       eyebrow: "Micro ATM Network",
//       titleMain: "Powering India's",
//       titleAccent: "Digital Payment Ecosystem",
//       desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
//       link: "/services/micro-atm-matm-services",
//       dashboard: {
//         revenue: "\u20b912.5Cr",
//         revenueGrowth: "+23.5% this month",
//         successRate: "99.5%",
//         successNote: "8,234 transactions",
//         chart: [55, 70, 80, 50, 90, 100, 85],
//         img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
//       },
//     },
//     {
//       eyebrow: "Card Payment Infrastructure",
//       titleMain: "Accept Payments Anywhere with",
//       titleAccent: "POS Solutions",
//       desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
//       link: "/services/pos-devices",
//       dashboard: {
//         revenue: "\u20b98.1Cr",
//         revenueGrowth: "+15.2% this month",
//         successRate: "98.9%",
//         successNote: "5,410 transactions",
//         chart: [40, 65, 60, 75, 55, 95, 80],
//         img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
//       },
//     },
//     {
//       eyebrow: "Bill Payment Platform",
//       titleMain: "One Platform for",
//       titleAccent: "BBPS & Recharge Services",
//       desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
//       link: "/services/bbps-recharge-bill-payments",
//       dashboard: {
//         revenue: "\u20b94.6Cr",
//         revenueGrowth: "+9.8% this month",
//         successRate: "99.1%",
//         successNote: "12,980 transactions",
//         chart: [60, 50, 70, 85, 65, 75, 90],
//         img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
//       },
//     },
//     {
//       eyebrow: "Credit & Collections",
//       titleMain: "Grow Faster with",
//       titleAccent: "Loan & Collection Services",
//       desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
//       link: "/services/credit-card-sourcing-and-lifecycle-support",
//       dashboard: {
//         revenue: "\u20b96.3Cr",
//         revenueGrowth: "+18.4% this month",
//         successRate: "99.2%",
//         successNote: "3,150 transactions",
//         chart: [45, 55, 95, 70, 60, 80, 65],
//         img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
//       },
//     },
//   ];

//   const stats = [
//     { icon: Users, value: "100,000+", label: "Merchants" },
//     { icon: Building2, value: "500+", label: "Partners" },
//     { icon: Coins, value: "99.9%", label: "Uptime" },
//     { icon: Headphones, value: "24x7", label: "Support" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full font-sans bg-[#00C4C7] overflow-hidden"
//     >
//       {/* full-bleed soft background image per slide, faded behind the gradient wash */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         allowTouchMove={false}
//         speed={1200}
//         className="absolute inset-0 z-0 h-full w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={`bg-${index}`}>
//             <div
//               className="h-full w-full bg-cover bg-center"
//               style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-sm" />
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-cyan-50/50 to-gray-100/60" />

//       <motion.div
//         aria-hidden="true"
//         className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl z-0"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         autoHeight
//         onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//         navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
//         className="relative z-10 w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14">
//               <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-14 items-center">
//                 {/* left: heading + copy + ctas */}
//                 <motion.div
//                   style={{ opacity: fade }}
//                   className={`transition-all duration-1000 ease-out ${
//                     activeSlide === index
//                       ? "opacity-100 translate-y-0 blur-0"
//                       : "opacity-0 translate-y-10 blur-sm"
//                   }`}
//                 >
//                   <motion.h1
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     style={{
//                       fontSize: "clamp(1.25rem, 0.8rem + 1.6vw, 2rem)",
//                       lineHeight: 1.2,
//                     }}
//                     className="font-bold text-gray-900 max-w-lg"
//                   >
//                     {slide.titleMain}{" "}
//                     <span className="text-cyan-500">{slide.titleAccent}</span>
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="mt-3 text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-sm"
//                   >
//                     {slide.desc}
//                   </motion.p>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="mt-6 flex flex-wrap items-center gap-2.5"
//                   >
//                     <Link to={slide.link}>
//                       <motion.button
//                         whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -8px rgba(6,182,212,0.5)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md bg-cyan-500 px-4 py-2 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:bg-cyan-400"
//                       >
//                         Get Started
//                       </motion.button>
//                     </Link>
//                     <Link to="/contact">
//                       <motion.button
//                         whileHover={{ scale: 1.04, backgroundColor: "rgb(240 253 250)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md border border-cyan-500 px-4 py-2 text-[11px] sm:text-xs font-semibold text-cyan-600 bg-white transition-colors"
//                       >
//                         Book Demo
//                       </motion.button>
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* right: floating dashboard card */}
//                 <motion.div
//                   style={{ y: cardY }}
//                   initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                   animate={
//                     activeSlide === index
//                       ? { opacity: 1, y: 0, scale: 1 }
//                       : { opacity: 0, y: 40, scale: 0.96 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
//                   whileHover={{ y: -6 }}
//                   className="relative w-full max-w-[400px] lg:ml-auto rounded-xl bg-white/95 backdrop-blur-md p-2.5 shadow-xl shadow-gray-900/10 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-2 gap-1.5">
//                     <div
//                       className="relative rounded-md p-1.5 text-white overflow-hidden"
//                       style={{
//                         backgroundImage: `linear-gradient(135deg, rgba(8,145,178,0.88), rgba(6,182,212,0.75)), url('${slide.dashboard.img}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <BarChart3 className="h-2 w-2" />
//                       <p className="mt-1 text-[6px] text-white/80">Total Revenue</p>
//                       <p className="mt-0.5 text-[10px] font-bold">{slide.dashboard.revenue}</p>
//                       <p className="mt-0.5 text-[6px] text-white/80">
//                         &#8599; {slide.dashboard.revenueGrowth}
//                       </p>
//                     </div>
//                     <div className="rounded-md border border-gray-100 bg-white p-1.5">
//                       <CheckCircle2 className="h-2 w-2 text-cyan-500" />
//                       <p className="mt-1 text-[6px] text-gray-500">Success Rate</p>
//                       <p className="mt-0.5 text-[10px] font-bold text-gray-900">
//                         {slide.dashboard.successRate}
//                       </p>
//                       <p className="mt-0.5 text-[6px] text-gray-400">{slide.dashboard.successNote}</p>
//                     </div>
//                   </div>

//                   <div className="mt-2 rounded-lg border border-gray-100 bg-white p-2.5">
//                     <div className="flex items-center justify-between">
//                       <p className="text-[10px] font-semibold text-gray-800">Transaction Analytics</p>
//                       <span className="text-[8px] text-gray-400">Last 7 days</span>
//                     </div>
//                     <div className="mt-2 flex items-end justify-between gap-1.5 h-24">
//                       {slide.dashboard.chart.map((h, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ height: 0 }}
//                           animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
//                           transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
//                           className="flex-1 rounded-md bg-cyan-400 max-w-[22px]"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute right-4 sm:right-6 md:right-8 top-[16%] flex flex-col items-end gap-2 z-20 hidden sm:flex">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`h-[2px] transition-all duration-300 ${
//               activeSlide === i ? "w-7 bg-cyan-500" : "w-4 bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>

//       <div className="absolute top-3 right-5 sm:right-8 md:right-10 flex items-center gap-3 text-gray-700 z-20 hidden sm:flex">
//         <motion.button
//           whileHover={{ scale: 1.15, x: -2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-prev text-xl sm:text-2xl"
//         >
//           &#8249;
//         </motion.button>
//         <span className="w-px h-4 sm:h-5 bg-gray-300"></span>
//         <motion.button
//           whileHover={{ scale: 1.15, x: 2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-next text-xl sm:text-2xl"
//         >
//           &#8250;
//         </motion.button>
//       </div>

//       {/* bottom stats strip */}
//       <div className="relative z-10 border-t border-gray-100 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="text-center"
//               >
//                 <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500 mx-auto" />
//                 <p className="mt-1.5 text-base sm:text-lg font-bold text-gray-900">{stat.value}</p>
//                 <p className="mt-0.5 text-[10px] sm:text-[11px] text-gray-500">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;







// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });
//   const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
//   const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const slides = [
//     {
//       eyebrow: "Micro ATM Network",
//       titleMain: "Powering India's",
//       titleAccent: "Digital Payment Ecosystem",
//       desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
//       link: "/services/micro-atm-matm-services",
//       dashboard: {
//         revenue: "₹12.5Cr",
//         revenueGrowth: "+23.5% this month",
//         successRate: "99.5%",
//         successNote: "8,234 transactions",
//         chart: [55, 70, 80, 50, 90, 100, 85],
//         img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
//       },
//     },
//     {
//       eyebrow: "Card Payment Infrastructure",
//       titleMain: "Accept Payments Anywhere with",
//       titleAccent: "POS Solutions",
//       desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
//       link: "/services/pos-devices",
//       dashboard: {
//         revenue: "₹8.1Cr",
//         revenueGrowth: "+15.2% this month",
//         successRate: "98.9%",
//         successNote: "5,410 transactions",
//         chart: [40, 65, 60, 75, 55, 95, 80],
//         img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
//       },
//     },
//     {
//       eyebrow: "Bill Payment Platform",
//       titleMain: "One Platform for",
//       titleAccent: "BBPS & Recharge Services",
//       desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
//       link: "/services/bbps-recharge-bill-payments",
//       dashboard: {
//         revenue: "₹4.6Cr",
//         revenueGrowth: "+9.8% this month",
//         successRate: "99.1%",
//         successNote: "12,980 transactions",
//         chart: [60, 50, 70, 85, 65, 75, 90],
//         img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
//       },
//     },
//     {
//       eyebrow: "Credit & Collections",
//       titleMain: "Grow Faster with",
//       titleAccent: "Loan & Collection Services",
//       desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
//       link: "/services/credit-card-sourcing-and-lifecycle-support",
//       dashboard: {
//         revenue: "₹6.3Cr",
//         revenueGrowth: "+18.4% this month",
//         successRate: "99.2%",
//         successNote: "3,150 transactions",
//         chart: [45, 55, 95, 70, 60, 80, 65],
//         img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
//       },
//     },
//   ];

//   const stats = [
//     { icon: Users, value: "100,000+", label: "Merchants" },
//     { icon: Building2, value: "500+", label: "Partners" },
//     { icon: Coins, value: "99.9%", label: "Uptime" },
//     { icon: Headphones, value: "24x7", label: "Support" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full font-sans bg-white overflow-hidden"
//     >
//       {/* full-bleed soft background image per slide, faded behind the gradient wash */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         allowTouchMove={false}
//         speed={1200}
//         className="absolute inset-0 z-0 h-full w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={`bg-${index}`}>
//             <div
//               className="h-full w-full bg-cover bg-center"
//               style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="absolute inset-0 z-0 bg-white/80 backdrop-blur-sm" />
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/70 via-cyan-50/40 to-gray-100/40" />

//       <motion.div
//         aria-hidden="true"
//         className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl z-0"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         aria-hidden="true"
//         className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/40 blur-3xl z-0"
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         autoHeight
//         onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//         navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
//         className="relative z-10 w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14">
//               <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-14 items-center">
//                 {/* left: heading + copy + ctas */}
//                 <motion.div
//                   style={{ opacity: fade }}
//                   className={`transition-all duration-1000 ease-out ${
//                     activeSlide === index
//                       ? "opacity-100 translate-y-0 blur-0"
//                       : "opacity-0 translate-y-10 blur-sm"
//                   }`}
//                 >
//                   <motion.h1
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     style={{
//                       fontSize: "clamp(1.25rem, 0.8rem + 1.6vw, 2rem)",
//                       lineHeight: 1.2,
//                     }}
//                     className="font-bold text-gray-900 max-w-lg"
//                   >
//                     {slide.titleMain}{" "}
//                     <span className="text-cyan-500">{slide.titleAccent}</span>
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="mt-3 text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-sm"
//                   >
//                     {slide.desc}
//                   </motion.p>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="mt-6 flex flex-wrap items-center gap-2.5"
//                   >
//                     <Link to={slide.link}>
//                       <motion.button
//                         whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -8px rgba(6,182,212,0.5)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md bg-cyan-500/90 backdrop-blur-md px-4 py-2 text-[11px] sm:text-xs font-semibold text-white border border-white/30 transition-colors hover:bg-cyan-400/90"
//                       >
//                         Get Started
//                       </motion.button>
//                     </Link>
//                     <Link to="/contact">
//                       <motion.button
//                         whileHover={{ scale: 1.04, backgroundColor: "rgba(240, 253, 250, 0.6)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md border border-cyan-500/40 px-4 py-2 text-[11px] sm:text-xs font-semibold text-cyan-600 bg-white/40 backdrop-blur-md transition-colors"
//                       >
//                         Book Demo
//                       </motion.button>
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* right: floating glassmorphic dashboard card */}
//                 <motion.div
//                   style={{ y: cardY }}
//                   initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                   animate={
//                     activeSlide === index
//                       ? { opacity: 1, y: 0, scale: 1 }
//                       : { opacity: 0, y: 40, scale: 0.96 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
//                   whileHover={{ y: -6 }}
//                   className="relative w-full max-w-[400px] lg:ml-auto rounded-xl bg-white/30 backdrop-blur-xl p-2.5 shadow-xl shadow-gray-900/10 border border-white/40 ring-1 ring-white/20"
//                 >
//                   {/* glass sheen overlay */}
//                   <div
//                     aria-hidden="true"
//                     className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 via-transparent to-transparent"
//                   />

//                   <div className="relative grid grid-cols-2 gap-1.5">
//                     <div
//                       className="relative rounded-md p-1.5 text-white overflow-hidden border border-white/30 backdrop-blur-md"
//                       style={{
//                         backgroundImage: `linear-gradient(135deg, rgba(8,145,178,0.65), rgba(6,182,212,0.45)), url('${slide.dashboard.img}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <BarChart3 className="h-2 w-2" />
//                       <p className="mt-1 text-[6px] text-white/80">Total Revenue</p>
//                       <p className="mt-0.5 text-[10px] font-bold">{slide.dashboard.revenue}</p>
//                       <p className="mt-0.5 text-[6px] text-white/80">
//                         ↗ {slide.dashboard.revenueGrowth}
//                       </p>
//                     </div>
//                     <div className="rounded-md border border-white/40 bg-white/40 backdrop-blur-md p-1.5">
//                       <CheckCircle2 className="h-2 w-2 text-cyan-500" />
//                       <p className="mt-1 text-[6px] text-gray-600">Success Rate</p>
//                       <p className="mt-0.5 text-[10px] font-bold text-gray-900">
//                         {slide.dashboard.successRate}
//                       </p>
//                       <p className="mt-0.5 text-[6px] text-gray-500">{slide.dashboard.successNote}</p>
//                     </div>
//                   </div>

//                   <div className="relative mt-2 rounded-lg border border-white/40 bg-white/35 backdrop-blur-md p-2.5">
//                     <div className="flex items-center justify-between">
//                       <p className="text-[10px] font-semibold text-gray-800">Transaction Analytics</p>
//                       <span className="text-[8px] text-gray-500">Last 7 days</span>
//                     </div>
//                     <div className="mt-2 flex items-end justify-between gap-1.5 h-24">
//                       {slide.dashboard.chart.map((h, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ height: 0 }}
//                           animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
//                           transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
//                           className="flex-1 rounded-md bg-cyan-400/80 backdrop-blur-sm max-w-[22px]"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute right-4 sm:right-6 md:right-8 top-[16%] flex flex-col items-end gap-2 z-20 hidden sm:flex">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`h-[2px] transition-all duration-300 ${
//               activeSlide === i ? "w-7 bg-cyan-500" : "w-4 bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>

//       <div className="absolute top-3 right-5 sm:right-8 md:right-10 flex items-center gap-3 text-gray-700 z-20 hidden sm:flex rounded-full bg-white/30 backdrop-blur-md border border-white/40 px-3 py-1.5">
//         <motion.button
//           whileHover={{ scale: 1.15, x: -2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-prev text-xl sm:text-2xl"
//         >
//           ‹
//         </motion.button>
//         <span className="w-px h-4 sm:h-5 bg-gray-300"></span>
//         <motion.button
//           whileHover={{ scale: 1.15, x: 2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-next text-xl sm:text-2xl"
//         >
//           ›
//         </motion.button>
//       </div>

//       {/* bottom stats strip - glassmorphic */}
//       <div className="relative z-10 border-t border-white/40 bg-white/40 backdrop-blur-xl">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 whileHover={{ y: -3 }}
//                 className="text-center rounded-lg border border-white/40 bg-white/30 backdrop-blur-md py-3"
//               >
//                 <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-500 mx-auto" />
//                 <p className="mt-1.5 text-base sm:text-lg font-bold text-gray-900">{stat.value}</p>
//                 <p className="mt-0.5 text-[10px] sm:text-[11px] text-gray-500">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;














// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });
//   const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
//   const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const slides = [
//     {
//       eyebrow: "Micro ATM Network",
//       titleMain: "Powering India's",
//       titleAccent: "Digital Payment Ecosystem",
//       desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
//       link: "/services/micro-atm-matm-services",
//       dashboard: {
//         revenue: "\u20b912.5Cr",
//         revenueGrowth: "+23.5% this month",
//         successRate: "99.5%",
//         successNote: "8,234 transactions",
//         chart: [55, 70, 80, 50, 90, 100, 85],
//         img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
//       },
//     },
//     {
//       eyebrow: "Card Payment Infrastructure",
//       titleMain: "Accept Payments Anywhere with",
//       titleAccent: "POS Solutions",
//       desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
//       link: "/services/pos-devices",
//       dashboard: {
//         revenue: "\u20b98.1Cr",
//         revenueGrowth: "+15.2% this month",
//         successRate: "98.9%",
//         successNote: "5,410 transactions",
//         chart: [40, 65, 60, 75, 55, 95, 80],
//         img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
//       },
//     },
//     {
//       eyebrow: "Bill Payment Platform",
//       titleMain: "One Platform for",
//       titleAccent: "BBPS & Recharge Services",
//       desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
//       link: "/services/bbps-recharge-bill-payments",
//       dashboard: {
//         revenue: "\u20b94.6Cr",
//         revenueGrowth: "+9.8% this month",
//         successRate: "99.1%",
//         successNote: "12,980 transactions",
//         chart: [60, 50, 70, 85, 65, 75, 90],
//         img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
//       },
//     },
//     {
//       eyebrow: "Credit & Collections",
//       titleMain: "Grow Faster with",
//       titleAccent: "Loan & Collection Services",
//       desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
//       link: "/services/credit-card-sourcing-and-lifecycle-support",
//       dashboard: {
//         revenue: "\u20b96.3Cr",
//         revenueGrowth: "+18.4% this month",
//         successRate: "99.2%",
//         successNote: "3,150 transactions",
//         chart: [45, 55, 95, 70, 60, 80, 65],
//         img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
//       },
//     },
//   ];

//   const stats = [
//     { icon: Users, value: "100,000+", label: "Merchants" },
//     { icon: Building2, value: "500+", label: "Partners" },
//     { icon: Coins, value: "99.9%", label: "Uptime" },
//     { icon: Headphones, value: "24x7", label: "Support" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full font-sans bg-[#2DD4BF] overflow-hidden"
//     >
//       {/* full-bleed soft background image per slide, faded behind the gradient wash */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         allowTouchMove={false}
//         speed={1200}
//         className="absolute inset-0 z-0 h-full w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={`bg-${index}`}>
//             <div
//               className="h-full w-full bg-cover bg-center"
//               style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-sm" />
//       <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#F0FDFA]/50 to-gray-100/60" />

//       <motion.div
//         aria-hidden="true"
//         className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#2DD4BF]/30 blur-3xl z-0"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         loop
//         autoHeight
//         onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//         navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
//         className="relative z-10 w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14">
//               <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-14 items-center">
//                 {/* left: heading + copy + ctas */}
//                 <motion.div
//                   style={{ opacity: fade }}
//                   className={`transition-all duration-1000 ease-out ${
//                     activeSlide === index
//                       ? "opacity-100 translate-y-0 blur-0"
//                       : "opacity-0 translate-y-10 blur-sm"
//                   }`}
//                 >
//                   <motion.h1
//                     initial={{ opacity: 0, y: 24 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     style={{
//                       fontSize: "clamp(1.25rem, 0.8rem + 1.6vw, 2rem)",
//                       lineHeight: 1.2,
//                     }}
//                     className="font-bold text-gray-900 max-w-lg"
//                   >
//                     {slide.titleMain}{" "}
//                     <span className="text-[#2DD4BF]">{slide.titleAccent}</span>
//                   </motion.h1>

//                   <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="mt-3 text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-sm"
//                   >
//                     {slide.desc}
//                   </motion.p>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     className="mt-6 flex flex-wrap items-center gap-2.5"
//                   >
//                     <Link to={slide.link}>
//                       <motion.button
//                         whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -8px rgba(45,212,191,0.5)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md bg-[#2DD4BF] px-4 py-2 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:bg-[#26BCA8]"
//                       >
//                         Get Started
//                       </motion.button>
//                     </Link>
//                     <Link to="/contact">
//                       <motion.button
//                         whileHover={{ scale: 1.04, backgroundColor: "rgb(240 253 250)" }}
//                         whileTap={{ scale: 0.97 }}
//                         className="rounded-md border border-[#2DD4BF] px-4 py-2 text-[11px] sm:text-xs font-semibold text-[#1F9E8E] bg-white transition-colors"
//                       >
//                         Book Demo
//                       </motion.button>
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* right: floating dashboard card */}
//                 <motion.div
//                   style={{ y: cardY }}
//                   initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                   animate={
//                     activeSlide === index
//                       ? { opacity: 1, y: 0, scale: 1 }
//                       : { opacity: 0, y: 40, scale: 0.96 }
//                   }
//                   transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
//                   whileHover={{ y: -6 }}
//                   className="relative w-full max-w-[400px] lg:ml-auto rounded-xl bg-white/95 backdrop-blur-md p-2.5 shadow-xl shadow-gray-900/10 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-2 gap-1.5">
//                     <div
//                       className="relative rounded-md p-1.5 text-white overflow-hidden"
//                       style={{
//                         backgroundImage: `linear-gradient(135deg, rgba(31,158,142,0.88), rgba(45,212,191,0.75)), url('${slide.dashboard.img}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <BarChart3 className="h-2 w-2" />
//                       <p className="mt-1 text-[6px] text-white/80">Total Revenue</p>
//                       <p className="mt-0.5 text-[10px] font-bold">{slide.dashboard.revenue}</p>
//                       <p className="mt-0.5 text-[6px] text-white/80">
//                         &#8599; {slide.dashboard.revenueGrowth}
//                       </p>
//                     </div>
//                     <div className="rounded-md border border-gray-100 bg-white p-1.5">
//                       <CheckCircle2 className="h-2 w-2 text-[#2DD4BF]" />
//                       <p className="mt-1 text-[6px] text-gray-500">Success Rate</p>
//                       <p className="mt-0.5 text-[10px] font-bold text-gray-900">
//                         {slide.dashboard.successRate}
//                       </p>
//                       <p className="mt-0.5 text-[6px] text-gray-400">{slide.dashboard.successNote}</p>
//                     </div>
//                   </div>

//                   <div className="mt-2 rounded-lg border border-gray-100 bg-white p-2.5">
//                     <div className="flex items-center justify-between">
//                       <p className="text-[10px] font-semibold text-gray-800">Transaction Analytics</p>
//                       <span className="text-[8px] text-gray-400">Last 7 days</span>
//                     </div>
//                     <div className="mt-2 flex items-end justify-between gap-1.5 h-24">
//                       {slide.dashboard.chart.map((h, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ height: 0 }}
//                           animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
//                           transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
//                           className="flex-1 rounded-sm bg-[#2DD4BF] max-w-[30px]"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className="absolute right-4 sm:right-6 md:right-8 top-[16%] flex flex-col items-end gap-2 z-20 hidden sm:flex">
//         {slides.map((_, i) => (
//           <span
//             key={i}
//             className={`h-[2px] transition-all duration-300 ${
//               activeSlide === i ? "w-7 bg-[#2DD4BF]" : "w-4 bg-gray-300"
//             }`}
//           ></span>
//         ))}
//       </div>

//       <div className="absolute top-3 right-5 sm:right-8 md:right-10 flex items-center gap-3 text-gray-700 z-20 hidden sm:flex">
//         <motion.button
//           whileHover={{ scale: 1.15, x: -2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-prev text-xl sm:text-2xl"
//         >
//           &#8249;
//         </motion.button>
//         <span className="w-px h-4 sm:h-5 bg-gray-300"></span>
//         <motion.button
//           whileHover={{ scale: 1.15, x: 2 }}
//           whileTap={{ scale: 0.9 }}
//           className="hero-next text-xl sm:text-2xl"
//         >
//           &#8250;
//         </motion.button>
//       </div>

//       {/* bottom stats strip */}
//       <div className="relative z-10 border-t border-gray-100 bg-white">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="text-center"
//               >
//                 <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#2DD4BF] mx-auto" />
//                 <p className="mt-1.5 text-base sm:text-lg font-bold text-gray-900">{stat.value}</p>
//                 <p className="mt-0.5 text-[10px] sm:text-[11px] text-gray-500">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;










// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [activeSlideMobile, setActiveSlideMobile] = useState(0);
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });
//   const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
//   const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   const slides = [
//     {
//       eyebrow: "Micro ATM Network",
//       titleMain: "Powering India's",
//       titleAccent: "Digital Payment Ecosystem",
//       desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
//       link: "/services/micro-atm-matm-services",
//       dashboard: {
//         revenue: "\u20b912.5Cr",
//         revenueGrowth: "+23.5% this month",
//         successRate: "99.5%",
//         successNote: "8,234 transactions",
//         chart: [55, 70, 80, 50, 90, 100, 85],
//         img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
//       },
//     },
//     {
//       eyebrow: "Card Payment Infrastructure",
//       titleMain: "Accept Payments Anywhere with",
//       titleAccent: "POS Solutions",
//       desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
//       link: "/services/pos-devices",
//       dashboard: {
//         revenue: "\u20b98.1Cr",
//         revenueGrowth: "+15.2% this month",
//         successRate: "98.9%",
//         successNote: "5,410 transactions",
//         chart: [40, 65, 60, 75, 55, 95, 80],
//         img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
//       },
//     },
//     {
//       eyebrow: "Bill Payment Platform",
//       titleMain: "One Platform for",
//       titleAccent: "BBPS & Recharge Services",
//       desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
//       link: "/services/bbps-recharge-bill-payments",
//       dashboard: {
//         revenue: "\u20b94.6Cr",
//         revenueGrowth: "+9.8% this month",
//         successRate: "99.1%",
//         successNote: "12,980 transactions",
//         chart: [60, 50, 70, 85, 65, 75, 90],
//         img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
//       },
//     },
//     {
//       eyebrow: "Credit & Collections",
//       titleMain: "Grow Faster with",
//       titleAccent: "Loan & Collection Services",
//       desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
//       link: "/services/credit-card-sourcing-and-lifecycle-support",
//       dashboard: {
//         revenue: "\u20b96.3Cr",
//         revenueGrowth: "+18.4% this month",
//         successRate: "99.2%",
//         successNote: "3,150 transactions",
//         chart: [45, 55, 95, 70, 60, 80, 65],
//         img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
//       },
//     },
//   ];

//   const stats = [
//     { icon: Users, value: "100,000+", label: "Merchants" },
//     { icon: Building2, value: "500+", label: "Partners" },
//     { icon: Coins, value: "99.9%", label: "Uptime" },
//     { icon: Headphones, value: "24x7", label: "Support" },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full font-sans bg-[#2DD4BF] overflow-hidden"
//     >
//       {/* ======================= DESKTOP / TABLET VERSION (untouched) ======================= */}
//       <div className="hidden md:block">
//         {/* full-bleed soft background image per slide, faded behind the gradient wash */}
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop
//           allowTouchMove={false}
//           speed={1200}
//           className="absolute inset-0 z-0 h-full w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={`bg-${index}`}>
//               <div
//                 className="h-full w-full bg-cover bg-center"
//                 style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-sm" />
//         <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#F0FDFA]/50 to-gray-100/60" />

//         <motion.div
//           aria-hidden="true"
//           className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#2DD4BF]/30 blur-3xl z-0"
//           animate={{ y: [0, 20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <Swiper
//           modules={[Navigation, Autoplay]}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop
//           autoHeight
//           onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
//           navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
//           className="relative z-10 w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14">
//                 <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-14 items-center">
//                   {/* left: heading + copy + ctas */}
//                   <motion.div
//                     style={{ opacity: fade }}
//                     className={`transition-all duration-1000 ease-out ${
//                       activeSlide === index
//                         ? "opacity-100 translate-y-0 blur-0"
//                         : "opacity-0 translate-y-10 blur-sm"
//                     }`}
//                   >
//                     <motion.h1
//                       initial={{ opacity: 0, y: 24 }}
//                       animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                       transition={{ duration: 0.6, delay: 0.1 }}
//                       style={{
//                         fontSize: "clamp(1.25rem, 0.8rem + 1.6vw, 2rem)",
//                         lineHeight: 1.2,
//                       }}
//                       className="font-bold text-gray-900 max-w-lg"
//                     >
//                       {slide.titleMain}{" "}
//                       <span className="text-[#2DD4BF]">{slide.titleAccent}</span>
//                     </motion.h1>

//                     <motion.p
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                       transition={{ duration: 0.6, delay: 0.2 }}
//                       className="mt-3 text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-sm"
//                     >
//                       {slide.desc}
//                     </motion.p>

//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
//                       transition={{ duration: 0.6, delay: 0.3 }}
//                       className="mt-6 flex flex-wrap items-center gap-2.5"
//                     >
//                       <Link to={slide.link}>
//                         <motion.button
//                           whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -8px rgba(45,212,191,0.5)" }}
//                           whileTap={{ scale: 0.97 }}
//                           className="rounded-md bg-[#2DD4BF] px-4 py-2 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:bg-[#26BCA8]"
//                         >
//                           Get Started
//                         </motion.button>
//                       </Link>
//                       <Link to="/contact">
//                         <motion.button
//                           whileHover={{ scale: 1.04, backgroundColor: "rgb(240 253 250)" }}
//                           whileTap={{ scale: 0.97 }}
//                           className="rounded-md border border-[#2DD4BF] px-4 py-2 text-[11px] sm:text-xs font-semibold text-[#1F9E8E] bg-white transition-colors"
//                         >
//                           Book Demo
//                         </motion.button>
//                       </Link>
//                     </motion.div>
//                   </motion.div>

//                   {/* right: floating dashboard card */}
//                   <motion.div
//                     style={{ y: cardY }}
//                     initial={{ opacity: 0, y: 40, scale: 0.96 }}
//                     animate={
//                       activeSlide === index
//                         ? { opacity: 1, y: 0, scale: 1 }
//                         : { opacity: 0, y: 40, scale: 0.96 }
//                     }
//                     transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
//                     whileHover={{ y: -6 }}
//                     className="relative w-full max-w-[400px] lg:ml-auto rounded-xl bg-white/95 backdrop-blur-md p-2.5 shadow-xl shadow-gray-900/10 border border-gray-100"
//                   >
//                     <div className="grid grid-cols-2 gap-1.5">
//                       <div
//                         className="relative rounded-md p-1.5 text-white overflow-hidden"
//                         style={{
//                           backgroundImage: `linear-gradient(135deg, rgba(31,158,142,0.88), rgba(45,212,191,0.75)), url('${slide.dashboard.img}')`,
//                           backgroundSize: "cover",
//                           backgroundPosition: "center",
//                         }}
//                       >
//                         <BarChart3 className="h-2 w-2" />
//                         <p className="mt-1 text-[6px] text-white/80">Total Revenue</p>
//                         <p className="mt-0.5 text-[10px] font-bold">{slide.dashboard.revenue}</p>
//                         <p className="mt-0.5 text-[6px] text-white/80">
//                           &#8599; {slide.dashboard.revenueGrowth}
//                         </p>
//                       </div>
//                       <div className="rounded-md border border-gray-100 bg-white p-1.5">
//                         <CheckCircle2 className="h-2 w-2 text-[#2DD4BF]" />
//                         <p className="mt-1 text-[6px] text-gray-500">Success Rate</p>
//                         <p className="mt-0.5 text-[10px] font-bold text-gray-900">
//                           {slide.dashboard.successRate}
//                         </p>
//                         <p className="mt-0.5 text-[6px] text-gray-400">{slide.dashboard.successNote}</p>
//                       </div>
//                     </div>

//                     <div className="mt-2 rounded-lg border border-gray-100 bg-white p-2.5">
//                       <div className="flex items-center justify-between">
//                         <p className="text-[10px] font-semibold text-gray-800">Transaction Analytics</p>
//                         <span className="text-[8px] text-gray-400">Last 7 days</span>
//                       </div>
//                       <div className="mt-2 flex items-end justify-between gap-1.5 h-24">
//                         {slide.dashboard.chart.map((h, i) => (
//                           <motion.div
//                             key={i}
//                             initial={{ height: 0 }}
//                             animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
//                             transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
//                             className="flex-1 rounded-sm bg-[#2DD4BF] max-w-[30px]"
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <div className="absolute right-4 sm:right-6 md:right-8 top-[16%] flex flex-col items-end gap-2 z-20 hidden sm:flex">
//           {slides.map((_, i) => (
//             <span
//               key={i}
//               className={`h-[2px] transition-all duration-300 ${
//                 activeSlide === i ? "w-7 bg-[#2DD4BF]" : "w-4 bg-gray-300"
//               }`}
//             ></span>
//           ))}
//         </div>

//         <div className="absolute top-3 right-5 sm:right-8 md:right-10 flex items-center gap-3 text-gray-700 z-20 hidden sm:flex">
//           <motion.button
//             whileHover={{ scale: 1.15, x: -2 }}
//             whileTap={{ scale: 0.9 }}
//             className="hero-prev text-xl sm:text-2xl"
//           >
//             &#8249;
//           </motion.button>
//           <span className="w-px h-4 sm:h-5 bg-gray-300"></span>
//           <motion.button
//             whileHover={{ scale: 1.15, x: 2 }}
//             whileTap={{ scale: 0.9 }}
//             className="hero-next text-xl sm:text-2xl"
//           >
//             &#8250;
//           </motion.button>
//         </div>

//         {/* bottom stats strip */}
//         <div className="relative z-10 border-t border-gray-100 bg-white">
//           <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
//             {stats.map((stat, i) => {
//               const Icon = stat.icon;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.5 }}
//                   transition={{ duration: 0.5, delay: i * 0.08 }}
//                   className="text-center"
//                 >
//                   <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#2DD4BF] mx-auto" />
//                   <p className="mt-1.5 text-base sm:text-lg font-bold text-gray-900">{stat.value}</p>
//                   <p className="mt-0.5 text-[10px] sm:text-[11px] text-gray-500">{stat.label}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ======================= MOBILE VERSION (new) ======================= */}
//       <div className="block md:hidden relative">
//         {/* background image swiper, synced to the content swiper below */}
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop
//           allowTouchMove={false}
//           speed={1000}
//           className="absolute inset-0 z-0 h-full w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={`m-bg-${index}`}>
//               <div
//                 className="h-full w-full bg-cover bg-center"
//                 style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute inset-0 z-0 bg-white/92 backdrop-blur-sm" />
//         <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-[#F0FDFA]/60 to-white" />

//         <motion.div
//           aria-hidden="true"
//           className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#2DD4BF]/30 blur-3xl z-0"
//           animate={{ y: [0, 14, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop
//           autoHeight
//           onSlideChange={(swiper) => setActiveSlideMobile(swiper.realIndex)}
//           className="relative z-10 w-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={`m-${index}`}>
//               <div className="relative w-full px-4 pt-8 pb-8">
//                 {/* heading + copy */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={activeSlideMobile === index ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                 >
//                   <span className="inline-block rounded-full bg-[#2DD4BF]/15 px-2.5 py-1 text-[9px] font-semibold text-[#1F9E8E]">
//                     {slide.eyebrow}
//                   </span>

//                   <h1
//                     style={{ lineHeight: 1.25 }}
//                     className="mt-2.5 text-[20px] font-bold text-gray-900"
//                   >
//                     {slide.titleMain}{" "}
//                     <span className="text-[#2DD4BF]">{slide.titleAccent}</span>
//                   </h1>

//                   <p className="mt-2 text-[12px] text-gray-500 leading-relaxed">
//                     {slide.desc}
//                   </p>

//                   <div className="mt-4 flex items-center gap-2.5">
//                     <Link to={slide.link} className="flex-1">
//                       <motion.button
//                         whileTap={{ scale: 0.96 }}
//                         className="w-full rounded-md bg-[#2DD4BF] px-4 py-2.5 text-[12px] font-semibold text-white"
//                       >
//                         Get Started
//                       </motion.button>
//                     </Link>
//                     <Link to="/contact" className="flex-1">
//                       <motion.button
//                         whileTap={{ scale: 0.96 }}
//                         className="w-full rounded-md border border-[#2DD4BF] px-4 py-2.5 text-[12px] font-semibold text-[#1F9E8E] bg-white"
//                       >
//                         Book Demo
//                       </motion.button>
//                     </Link>
//                   </div>
//                 </motion.div>

//                 {/* dashboard card */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 24, scale: 0.97 }}
//                   animate={
//                     activeSlideMobile === index
//                       ? { opacity: 1, y: 0, scale: 1 }
//                       : { opacity: 0, y: 24, scale: 0.97 }
//                   }
//                   transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
//                   className="relative mt-5 w-full rounded-xl bg-white/95 backdrop-blur-md p-2.5 shadow-lg shadow-gray-900/10 border border-gray-100"
//                 >
//                   <div className="grid grid-cols-2 gap-1.5">
//                     <div
//                       className="relative rounded-md p-2 text-white overflow-hidden"
//                       style={{
//                         backgroundImage: `linear-gradient(135deg, rgba(31,158,142,0.88), rgba(45,212,191,0.75)), url('${slide.dashboard.img}')`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                       }}
//                     >
//                       <BarChart3 className="h-3 w-3" />
//                       <p className="mt-1 text-[8px] text-white/80">Total Revenue</p>
//                       <p className="mt-0.5 text-[13px] font-bold">{slide.dashboard.revenue}</p>
//                       <p className="mt-0.5 text-[7px] text-white/80">
//                         &#8599; {slide.dashboard.revenueGrowth}
//                       </p>
//                     </div>
//                     <div className="rounded-md border border-gray-100 bg-white p-2">
//                       <CheckCircle2 className="h-3 w-3 text-[#2DD4BF]" />
//                       <p className="mt-1 text-[8px] text-gray-500">Success Rate</p>
//                       <p className="mt-0.5 text-[13px] font-bold text-gray-900">
//                         {slide.dashboard.successRate}
//                       </p>
//                       <p className="mt-0.5 text-[7px] text-gray-400">{slide.dashboard.successNote}</p>
//                     </div>
//                   </div>

//                   <div className="mt-2 rounded-lg border border-gray-100 bg-white p-2.5">
//                     <div className="flex items-center justify-between">
//                       <p className="text-[11px] font-semibold text-gray-800">Transaction Analytics</p>
//                       <span className="text-[8px] text-gray-400">Last 7 days</span>
//                     </div>
//                     <div className="mt-2 flex items-end justify-between gap-1 h-16">
//                       {slide.dashboard.chart.map((h, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ height: 0 }}
//                           animate={activeSlideMobile === index ? { height: `${h}%` } : { height: 0 }}
//                           transition={{ duration: 0.5, delay: 0.35 + i * 0.04, ease: "easeOut" }}
//                           className="flex-1 rounded-sm bg-[#2DD4BF] max-w-[18px]"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* dot pagination */}
//                 <div className="mt-4 flex items-center justify-center gap-1.5">
//                   {slides.map((_, i) => (
//                     <span
//                       key={i}
//                       className={`h-1.5 rounded-full transition-all duration-300 ${
//                         activeSlideMobile === i ? "w-5 bg-[#2DD4BF]" : "w-1.5 bg-gray-300"
//                       }`}
//                     ></span>
//                   ))}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* stats strip, 2x2 on mobile */}
//         <div className="relative z-10 border-t border-gray-100 bg-white">
//           <div className="px-4 py-5 grid grid-cols-2 gap-4">
//             {stats.map((stat, i) => {
//               const Icon = stat.icon;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 16 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.5 }}
//                   transition={{ duration: 0.4, delay: i * 0.06 }}
//                   className="text-center"
//                 >
//                   <Icon className="h-4 w-4 text-[#2DD4BF] mx-auto" />
//                   <p className="mt-1.5 text-base font-bold text-gray-900">{stat.value}</p>
//                   <p className="mt-0.5 text-[10px] text-gray-500">{stat.label}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


























import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlideMobile, setActiveSlideMobile] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const slides = [
    {
      eyebrow: "Micro ATM Network",
      titleMain: "Powering India's",
      titleAccent: "Digital Payment Ecosystem",
      desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
      link: "/services/micro-atm-matm-services",
      dashboard: {
        revenue: "\u20b912.5Cr",
        revenueGrowth: "+23.5% this month",
        successRate: "99.5%",
        successNote: "8,234 transactions",
        chart: [55, 70, 80, 50, 90, 100, 85],
        img: "https://i.pinimg.com/1200x/68/5c/b5/685cb56b3266c5e339945013cdf1445b.jpg",
      },
    },
    {
      eyebrow: "Card Payment Infrastructure",
      titleMain: "Accept Payments Anywhere with",
      titleAccent: "POS Solutions",
      desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
      link: "/services/pos-devices",
      dashboard: {
        revenue: "\u20b98.1Cr",
        revenueGrowth: "+15.2% this month",
        successRate: "98.9%",
        successNote: "5,410 transactions",
        chart: [40, 65, 60, 75, 55, 95, 80],
        img: "https://i.pinimg.com/736x/6d/b0/8d/6db08dd65ee31868f2c126f42ec319d9.jpg",
      },
    },
    {
      eyebrow: "Bill Payment Platform",
      titleMain: "One Platform for",
      titleAccent: "BBPS & Recharge Services",
      desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
      link: "/services/bbps-recharge-bill-payments",
      dashboard: {
        revenue: "\u20b94.6Cr",
        revenueGrowth: "+9.8% this month",
        successRate: "99.1%",
        successNote: "12,980 transactions",
        chart: [60, 50, 70, 85, 65, 75, 90],
        img: "https://i.pinimg.com/1200x/78/56/5c/78565cd7adebcbeab6d0b7d565e5eac0.jpg",
      },
    },
    {
      eyebrow: "Credit & Collections",
      titleMain: "Grow Faster with",
      titleAccent: "Loan & Collection Services",
      desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
      link: "/services/credit-card-sourcing-and-lifecycle-support",
      dashboard: {
        revenue: "\u20b96.3Cr",
        revenueGrowth: "+18.4% this month",
        successRate: "99.2%",
        successNote: "3,150 transactions",
        chart: [45, 55, 95, 70, 60, 80, 65],
        img: "https://i.pinimg.com/1200x/32/4c/47/324c47df02b5b1661820011fe877847e.jpg",
      },
    },
  ];

  const stats = [
    { icon: Users, value: "100,000+", label: "Merchants" },
    { icon: Building2, value: "500+", label: "Partners" },
    { icon: Coins, value: "99.9%", label: "Uptime" },
    { icon: Headphones, value: "24x7", label: "Support" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full font-sans bg-[#2DD4BF] overflow-hidden pt-12 md:pt-0"
    >
      {/* ======================= DESKTOP / TABLET VERSION (untouched) ======================= */}
      <div className="hidden md:block">
        {/* full-bleed soft background image per slide, faded behind the gradient wash */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          allowTouchMove={false}
          speed={1200}
          className="absolute inset-0 z-0 h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`bg-${index}`}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 z-0 bg-white/90 backdrop-blur-sm" />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#F0FDFA]/50 to-gray-100/60" />

        <motion.div
          aria-hidden="true"
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#2DD4BF]/30 blur-3xl z-0"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          autoHeight
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
          className="relative z-10 w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-14 items-center">
                  {/* left: heading + copy + ctas */}
                  <motion.div
                    style={{ opacity: fade }}
                    className={`transition-all duration-1000 ease-out ${
                      activeSlide === index
                        ? "opacity-100 translate-y-0 blur-0"
                        : "opacity-0 translate-y-10 blur-sm"
                    }`}
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 24 }}
                      animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      style={{
                        fontSize: "clamp(1.8rem, 1.1rem + 2.2vw, 2.9rem)",
                        lineHeight: 1.1,
                      }}
                      className="font-bold text-gray-900 max-w-lg"
                    >
                      {slide.titleMain}{" "}
                      <span className="text-[#2DD4BF]">{slide.titleAccent}</span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-3 text-[11px] sm:text-xs text-gray-500 leading-relaxed max-w-sm"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-6 flex flex-wrap items-center gap-2.5"
                    >
                      <Link to={slide.link}>
                        <motion.button
                          whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -8px rgba(45,212,191,0.5)" }}
                          whileTap={{ scale: 0.97 }}
                          className="rounded-md bg-[#2DD4BF] px-4 py-2 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:bg-[#26BCA8]"
                        >
                          Get Started
                        </motion.button>
                      </Link>
                      <Link to="/contact">
                        <motion.button
                          whileHover={{ scale: 1.04, backgroundColor: "rgb(240 253 250)" }}
                          whileTap={{ scale: 0.97 }}
                          className="rounded-md border border-[#2DD4BF] px-4 py-2 text-[11px] sm:text-xs font-semibold text-[#1F9E8E] bg-white transition-colors"
                        >
                          Book Demo
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* right: floating dashboard card */}
                  <motion.div
                    style={{ y: cardY }}
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={
                      activeSlide === index
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 40, scale: 0.96 }
                    }
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                    whileHover={{ y: -6 }}
                    className="relative w-full max-w-[400px] lg:ml-auto rounded-xl bg-white/95 backdrop-blur-md p-2.5 shadow-xl shadow-gray-900/10 border border-gray-100"
                  >
                    <div className="grid grid-cols-2 gap-1.5">
                      <div
                        className="relative rounded-md p-1.5 text-white overflow-hidden"
                        style={{
                          backgroundImage: `linear-gradient(135deg, rgba(31,158,142,0.88), rgba(45,212,191,0.75)), url('${slide.dashboard.img}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <BarChart3 className="h-2 w-2" />
                        <p className="mt-1 text-[6px] text-white/80">Total Revenue</p>
                        <p className="mt-0.5 text-[10px] font-bold">{slide.dashboard.revenue}</p>
                        <p className="mt-0.5 text-[6px] text-white/80">
                          &#8599; {slide.dashboard.revenueGrowth}
                        </p>
                      </div>
                      <div className="rounded-md border border-gray-100 bg-white p-1.5">
                        <CheckCircle2 className="h-2 w-2 text-[#2DD4BF]" />
                        <p className="mt-1 text-[6px] text-gray-500">Success Rate</p>
                        <p className="mt-0.5 text-[10px] font-bold text-gray-900">
                          {slide.dashboard.successRate}
                        </p>
                        <p className="mt-0.5 text-[6px] text-gray-400">{slide.dashboard.successNote}</p>
                      </div>
                    </div>

                    <div className="mt-2 rounded-lg border border-gray-100 bg-white p-2.5">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-semibold text-gray-800">Transaction Analytics</p>
                        <span className="text-[8px] text-gray-400">Last 7 days</span>
                      </div>
                      <div className="mt-2 flex items-end justify-between gap-1.5 h-24">
                        {slide.dashboard.chart.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
                            className="flex-1 rounded-sm bg-[#2DD4BF] max-w-[30px]"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-4 sm:right-6 md:right-8 top-[16%] flex flex-col items-end gap-2 z-20 hidden sm:flex">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-[2px] transition-all duration-300 ${
                activeSlide === i ? "w-7 bg-[#2DD4BF]" : "w-4 bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        <div className="absolute top-3 right-5 sm:right-8 md:right-10 flex items-center gap-3 text-gray-700 z-20 hidden sm:flex">
          <motion.button
            whileHover={{ scale: 1.15, x: -2 }}
            whileTap={{ scale: 0.9 }}
            className="hero-prev text-xl sm:text-2xl"
          >
            &#8249;
          </motion.button>
          <span className="w-px h-4 sm:h-5 bg-gray-300"></span>
          <motion.button
            whileHover={{ scale: 1.15, x: 2 }}
            whileTap={{ scale: 0.9 }}
            className="hero-next text-xl sm:text-2xl"
          >
            &#8250;
          </motion.button>
        </div>

        {/* bottom stats strip */}
        <div className="relative z-10 border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-5 sm:py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-center"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#2DD4BF] mx-auto" />
                  <p className="mt-1.5 text-base sm:text-lg font-bold text-gray-900">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] text-gray-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ======================= MOBILE VERSION (new) ======================= */}
      <div className="block md:hidden relative">
        {/* background image swiper, synced to the content swiper below */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          allowTouchMove={false}
          speed={1000}
          className="absolute inset-0 z-0 h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`m-bg-${index}`}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.dashboard.img}')` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 z-0 bg-white/92 backdrop-blur-sm" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-[#F0FDFA]/60 to-white" />

        <motion.div
          aria-hidden="true"
          className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#2DD4BF]/30 blur-3xl z-0"
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          autoHeight
          onSlideChange={(swiper) => setActiveSlideMobile(swiper.realIndex)}
          className="relative z-10 w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`m-${index}`}>
              <div className="relative w-full px-4 pt-8 pb-8">
                {/* heading + copy */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={activeSlideMobile === index ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h1
                    style={{ lineHeight: 1.25 }}
                    className="text-[30px] sm:text-[30px] font-bold text-gray-900"
                  >
                    {slide.titleMain}{" "}
                    <span className="text-[#2DD4BF]">{slide.titleAccent}</span>
                  </h1>

                  <p className="mt-2 text-[12px] text-gray-500 leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="mt-4 flex items-center gap-2.5">
                    <Link to={slide.link} className="flex-1">
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        className="w-full rounded-md bg-[#2DD4BF] px-4 py-2.5 text-[12px] font-semibold text-white"
                      >
                        Get Started
                      </motion.button>
                    </Link>
                    <Link to="/contact" className="flex-1">
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        className="w-full rounded-md border border-[#2DD4BF] px-4 py-2.5 text-[12px] font-semibold text-[#1F9E8E] bg-white"
                      >
                        Book Demo
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>

                {/* dot pagination */}
                <div className="mt-6 flex items-center justify-center gap-1.5">
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeSlideMobile === i ? "w-5 bg-[#2DD4BF]" : "w-1.5 bg-gray-300"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* stats strip, 2x2 on mobile */}
        <div className="relative z-10 border-t border-gray-100 bg-white">
          <div className="px-4 py-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="text-center"
                >
                  <Icon className="h-4 w-4 text-[#2DD4BF] mx-auto" />
                  <p className="mt-1.5 text-base font-bold text-gray-900">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] text-gray-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;