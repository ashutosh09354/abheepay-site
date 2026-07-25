// import React, { useState, useEffect } from "react";
// import {
//   CheckCircle,
//   Users,
//   Briefcase,
//   Lock,
//   Globe,
//   MoveRight,
//   Shield,
//   Zap,
// } from "lucide-react";
// import Ourclient from "../home/Ourclient";

// const AnimatedNumber = ({ value }) => {
//   const [count, setCount] = useState(0);

//   const target = parseInt(value.replace(/[^0-9]/g, ""));
//   const symbol = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = target / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [target]);

//   return (
//     <>
//       {count}
//       {symbol}
//     </>
//   );
// };

// const AboutPage = () => {
//   const [activeTab, setActiveTab] = useState("mission");

//   const tabData = {
//     mission: {
//       quote:
//         "To build a secure, intelligent, and inclusive digital ecosystem that enables financial services for all.",
//       desc: "Our mission is to build a secure, intelligent, and inclusive digital ecosystem that seamlessly enables payments, banking, credit, insurance, travel, and API-driven financial services. We focus on creating technology-led solutions that are reliable, compliant, and easy to use, empowering both businesses and individuals to access essential financial services. By simplifying complex financial processes and ensuring trust at every level, we help our partners, merchants, and users grow with confidence and long-term stability in an evolving digital economy.",
//     },
//     vision: {
//       quote: "To become a trusted digital financial backbone for India.",
//       desc: "Our vision is to become a trusted digital financial backbone for India by delivering secure, scalable, and compliant fintech and service platforms. We aim to support the nation’s growing digital economy by enabling sustainable financial access for businesses, merchants, and individuals across urban and rural regions alike. Through innovation, strong infrastructure, and long-term impact-driven solutions, we strive to contribute to inclusive economic growth and build lasting trust in digital financial services.",
//     },
//   };

//   const values = [
//     {
//       title: "Security First",
//       desc: "Bank-grade security protocols ensuring safe transactions",
//       icon: <Shield className="w-6 h-6 text-white" />,
//       style: "bg-slate-50 text-slate-800",
//       iconBg: "bg-[#2DD4BF]",
//     },
//     {
//       title: "Innovation",
//       desc: "Cutting-edge technology driving financial solutions",
//       icon: <Zap className="w-6 h-6 text-white" />,
//       style: "bg-slate-50 text-slate-800",
//       iconBg: "bg-[#2DD4BF]",
//     },
//     {
//       title: "Customer Focus",
//       desc: "Dedicated to retailer success and satisfaction",
//       icon: <Users className="w-6 h-6 text-white" />,
//       style: "bg-slate-50 text-slate-800",
//       iconBg: "bg-[#2DD4BF]",
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 min-h-screen">

//       <section
//         className="relative h-[320px] sm:h-[500px] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative text-center text-white z-10 px-4">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-2">About Us</h1>
//         </div>
//       </section>


//       <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

//           <div className="relative mx-auto md:mx-0 max-w-md md:max-w-none">
//             <div className="w-full sm:w-10/12 overflow-hidden rounded-[40px] shadow-lg mx-auto md:mx-0">
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//                 alt="Digital financial services"
//                 className="w-full h-[380px] sm:h-[450px] object-cover"
//               />
//             </div>

//             <div className="absolute -bottom-8 sm:-bottom-10 right-4 sm:right-1 w-8/12 sm:w-6/12 rounded-[40px] overflow-hidden shadow-md">
//               <img
//                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
//                 alt="Merchant empowerment"
//                 className="w-full h-48 sm:h-64 object-cover"
//               />
//             </div>

//             <div
//               className="absolute top-6 sm:top-10 right-2 sm:right-4 bg-[#00D3CD] text-white p-5 sm:p-8 rounded-2xl shadow-lg min-w-[120px] sm:min-w-[150px] text-center"
//               style={{
//                 clipPath: "polygon(0 0, 100% 0, 100% 82%, 18% 100%, 0 100%)",
//               }}
//             >
//               <h3 className="text-3xl sm:text-4xl font-bold">30K+</h3>
//               <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
//                 Active <br /> Partners
//               </p>
//             </div>
//           </div>

//           <div className="space-y-6 sm:space-y-8 text-center md:text-left mt-12 md:mt-0">
//             <div>
//               <h4 className="text-[#00D3CD] font-bold tracking-[0.2em] uppercase text-xs mb-3 sm:mb-4">
//                 About AbheePay
//               </h4>
//               <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-medium leading-tight sm:leading-[1.1] text-slate-800">
//                 Powering Digital Finance for <br className="hidden sm:block" />
//                 <span className="font-bold">Modern Indian Businesses</span>
//               </h2>
//             </div>

//             <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-base">
//               AbheePay is a technology-driven fintech and digital financial
//               services company delivering secure, scalable, and compliance-ready
//               solutions across India.
//             </p>

//             <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-base">
//               Designed to serve merchants, MSMEs, enterprises, partners, and
//               consumers, AbheePay combines robust financial infrastructure with
//               innovation-led technology to simplify transactions and enable
//               sustainable business growth.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//               {[
//                 "Secure & Scalable Payment Solutions",
//                 "Banking, Credit & Insurance Services",
//                 "API-Led Financial Infrastructure",
//                 "Trusted Platform for MSMEs & Enterprises",
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
//                   <CheckCircle className="text-[#00D3CD] w-5 h-5 flex-shrink-0" />
//                   <span className="text-sm font-semibold text-gray-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#00D3CD] py-10 sm:py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-white text-center">
//             {[
//               { icon: <Briefcase />, count: "1000+", label: "Partner Retailers" },
//               { icon: <Globe />, count: "50+", label: "Cities Covered" },
//               { icon: <Users />, count: "10k", label: "Happy Customers" },
//               { icon: <Lock />, count: "100%", label: "Secure Transactions" },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 border-b sm:border-r border-white/20 last:border-0 pb-6 sm:pb-0"
//               >
//                 <div className="bg-black/10 p-3 rounded-full shrink-0">
//                   {stat.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-2xl sm:text-3xl font-bold">
//                     <AnimatedNumber value={stat.count} />
//                   </h3>
//                   <p className="text-[10px] sm:text-xs text-[#feffff] uppercase mt-1">
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//       <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
//           <div className="space-y-6 text-center md:text-left">
//             <h4 className="text-[#00D3CD] font-bold uppercase text-sm tracking-wide">
//               Our Mission & Vision
//             </h4>
//             <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
//               Our Main Goal to Satisfied Local & Global Clients
//             </h2>

//             <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 my-6">
//               <button
//                 onClick={() => setActiveTab("mission")}
//                 className={`px-5 sm:px-6 py-2 rounded-full text-sm font-semibold transition ${
//                   activeTab === "mission"
//                     ? "bg-[#00D3CD] text-white shadow-md"
//                     : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 Our Mission
//               </button>
//               <button
//                 onClick={() => setActiveTab("vision")}
//                 className={`px-5 sm:px-6 py-2 rounded-full text-sm font-semibold transition ${
//                   activeTab === "vision"
//                     ? "bg-[#00D3CD] text-white shadow-md"
//                     : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 Our Vision
//               </button>
//             </div>

//             <p className="text-gray-600 italic text-base max-w-xl mx-auto md:mx-0">
//               {tabData[activeTab].quote}
//             </p>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
//               {tabData[activeTab].desc}
//             </p>
//           </div>

//           <div className="mt-8 md:mt-0">
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//               alt="Global Office"
//               className="rounded-2xl shadow-2xl w-full h-auto aspect-[4/3] object-cover"
//             />
//           </div>
//         </div>
//       </section>


//       <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10 sm:mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
//               Our Core Values
//             </h2>
//             <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
//               Built on the foundation of trust, innovation, and excellence
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {values.map((item, i) => (
//               <div
//                 key={i}
//                 className={`relative p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-sm ${item.style}`}
//               >
//                 <div
//                   className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 sm:mb-8 shadow-sm`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
//                 <p className="text-sm leading-relaxed text-slate-500">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Ourclient />
//     </div>
//   );
// };

// export default AboutPage;





















// import React, { useState, useEffect } from "react";
// import {
//   CheckCircle,
//   Users,
//   Briefcase,
//   Lock,
//   Globe,
//   MoveRight,
//   Shield,
//   Zap,
// } from "lucide-react";
// import Ourclient from "../home/Ourclient";

// const AnimatedNumber = ({ value }) => {
//   const [count, setCount] = useState(0);

//   const target = parseInt(value.replace(/[^0-9]/g, ""));
//   const symbol = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = target / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [target]);

//   return (
//     <>
//       {count}
//       {symbol}
//     </>
//   );
// };

// const AboutPage = () => {
//   const [activeTab, setActiveTab] = useState("mission");

//   const tabData = {
//     mission: {
//       quote:
//         "To build a secure, intelligent, and inclusive digital ecosystem that enables financial services for all.",
//       desc: "Our mission is to build a secure, intelligent, and inclusive digital ecosystem that seamlessly enables payments, banking, credit, insurance, travel, and API-driven financial services. We focus on creating technology-led solutions that are reliable, compliant, and easy to use, empowering both businesses and individuals to access essential financial services. By simplifying complex financial processes and ensuring trust at every level, we help our partners, merchants, and users grow with confidence and long-term stability in an evolving digital economy.",
//     },
//     vision: {
//       quote: "To become a trusted digital financial backbone for India.",
//       desc: "Our vision is to become a trusted digital financial backbone for India by delivering secure, scalable, and compliant fintech and service platforms. We aim to support the nation’s growing digital economy by enabling sustainable financial access for businesses, merchants, and individuals across urban and rural regions alike. Through innovation, strong infrastructure, and long-term impact-driven solutions, we strive to contribute to inclusive economic growth and build lasting trust in digital financial services.",
//     },
//   };

//   const values = [
//     {
//       title: "Security First",
//       desc: "Bank-grade security protocols ensuring safe transactions",
//       icon: <Shield className="w-5 h-5 text-white" />,
//       style: "bg-slate-50 text-slate-800",
//       iconBg: "bg-[#2DD4BF]",
//     },
//     {
//       title: "Innovation",
//       desc: "Cutting-edge technology driving financial solutions",
//       icon: <Zap className="w-5 h-5 text-white" />,
//       style: "bg-slate-50 text-slate-800",
//       iconBg: "bg-[#2DD4BF]",
//     },
//     {
//       title: "Customer Focus",
//       desc: "Dedicated to retailer success and satisfaction",
//       icon: <Users className="w-5 h-5 text-white" />,
//       style: "bg-slate-50 text-slate-800",
//       iconBg: "bg-[#2DD4BF]",
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 min-h-screen text-[13px] overflow-x-hidden">
//       <style>{`
//         @keyframes ap-fadeUp {
//           0% { opacity: 0; transform: translateY(14px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes ap-float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes ap-pulseRing {
//           0% { box-shadow: 0 0 0 0 rgba(0, 211, 205, 0.45); }
//           70% { box-shadow: 0 0 0 10px rgba(0, 211, 205, 0); }
//           100% { box-shadow: 0 0 0 0 rgba(0, 211, 205, 0); }
//         }
//         @keyframes ap-shimmer {
//           0% { transform: translateX(-120%); }
//           100% { transform: translateX(120%); }
//         }
//         @keyframes ap-drift {
//           0% { transform: translate(0, 0) scale(1); }
//           50% { transform: translate(20px, -15px) scale(1.08); }
//           100% { transform: translate(0, 0) scale(1); }
//         }
//         .ap-fade-up { animation: ap-fadeUp 0.7s ease-out both; }
//         .ap-fade-up-1 { animation: ap-fadeUp 0.7s 0.08s ease-out both; }
//         .ap-fade-up-2 { animation: ap-fadeUp 0.7s 0.16s ease-out both; }
//         .ap-fade-up-3 { animation: ap-fadeUp 0.7s 0.24s ease-out both; }
//         .ap-float { animation: ap-float 4s ease-in-out infinite; }
//         .ap-pulse-ring { animation: ap-pulseRing 2.4s ease-out infinite; }
//         .ap-drift { animation: ap-drift 8s ease-in-out infinite; }
//         .ap-card:hover .ap-card-glow { opacity: 1; }
//         .ap-card-glow {
//           opacity: 0;
//           transition: opacity 0.35s ease;
//           background: linear-gradient(135deg, rgba(0,211,205,0.18), rgba(45,212,191,0) 60%);
//         }
//         .ap-shine {
//           position: absolute;
//           top: 0; left: 0; height: 100%; width: 40%;
//           background: linear-gradient(115deg, transparent, rgba(255,255,255,0.35), transparent);
//           animation: ap-shimmer 3.2s ease-in-out infinite;
//         }
//       `}</style>

//       <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20">
//         <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold text-gray-900">
//           About Us
//         </h1>
//       </div>

//       {/* Intro */}
//       <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-5 lg:gap-8 items-center">

//           <div className="relative mx-auto md:mx-0 max-w-sm md:max-w-none ap-fade-up">
//             <div className="w-full sm:w-10/12 overflow-hidden rounded-xl shadow-md mx-auto md:mx-0">
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//                 alt="Digital financial services"
//                 className="w-full h-[160px] sm:h-[200px] object-cover"
//               />
//             </div>

//             <div className="absolute -bottom-4 sm:-bottom-5 right-4 sm:right-1 w-9/12 sm:w-5/12 rounded-xl overflow-hidden shadow-sm">
//               <img
//                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
//                 alt="Merchant empowerment"
//                 className="w-full h-20 sm:h-28 object-cover"
//               />
//             </div>

//             <div
//               className="absolute top-3 sm:top-4 right-2 sm:right-4 bg-[#00D3CD] text-white p-2 sm:p-3 rounded-lg shadow-md min-w-[80px] sm:min-w-[100px] text-center ap-float ap-pulse-ring"
//               style={{
//                 clipPath: "polygon(0 0, 100% 0, 100% 82%, 18% 100%, 0 100%)",
//               }}
//             >
//               <h3 className="text-base sm:text-lg font-bold">30K+</h3>
//               <p className="text-[8px] font-bold uppercase tracking-[0.1em] mt-0.5">
//                 Active <br /> Partners
//               </p>
//             </div>
//           </div>

//           <div className="space-y-3 sm:space-y-4 text-center md:text-left mt-8 md:mt-0 ap-fade-up-1">
//             <div>
//               <h4 className="text-[#00D3CD] font-bold tracking-[0.18em] uppercase text-[10px] mb-1.5">
//                 About AbheePay
//               </h4>
//               <h2 className="text-xl sm:text-2xl lg:text-[26px] font-serif font-medium leading-tight sm:leading-[1.15] text-slate-800">
//                 Powering Digital Finance for{" "}
//                 <span className="font-bold">Modern Indian Businesses</span>
//               </h2>
//             </div>

//             <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-xs">
//               AbheePay is a technology-driven fintech and digital financial
//               services company delivering secure, scalable, and compliance-ready
//               solutions across India.
//             </p>

//             <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-xs">
//               Designed to serve merchants, MSMEs, enterprises, partners, and
//               consumers, AbheePay combines robust financial infrastructure with
//               innovation-led technology to simplify transactions and enable
//               sustainable business growth.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
//               {[
//                 "Secure & Scalable Payment Solutions",
//                 "Banking, Credit & Insurance Services",
//                 "API-Led Financial Infrastructure",
//                 "Trusted Platform for MSMEs & Enterprises",
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-2 justify-center md:justify-start transition-transform duration-200 hover:translate-x-1">
//                   <CheckCircle className="text-[#00D3CD] w-3.5 h-3.5 flex-shrink-0" />
//                   <span className="text-[11px] font-semibold text-gray-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="relative bg-[#00D3CD] py-4 sm:py-5 overflow-hidden">
//         <div className="ap-shine" aria-hidden="true" />
//         <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 text-white text-center">
//             {[
//               { icon: <Briefcase className="w-4 h-4" />, count: "1000+", label: "Partner Retailers" },
//               { icon: <Globe className="w-4 h-4" />, count: "50+", label: "Cities Covered" },
//               { icon: <Users className="w-4 h-4" />, count: "10k", label: "Happy Customers" },
//               { icon: <Lock className="w-4 h-4" />, count: "100%", label: "Secure Transactions" },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 border-b sm:border-r border-white/20 last:border-0 pb-3 sm:pb-0"
//               >
//                 <div className="bg-white/15 backdrop-blur-sm ring-1 ring-white/25 p-2 rounded-full shrink-0">
//                   {stat.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold">
//                     <AnimatedNumber value={stat.count} />
//                   </h3>
//                   <p className="text-[8px] sm:text-[9px] text-[#feffff] uppercase mt-0.5">
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-5 lg:gap-6 items-center">
//           <div className="space-y-3 text-center md:text-left">
//             <h4 className="text-[#00D3CD] font-bold uppercase text-[10px] tracking-wide">
//               Our Mission & Vision
//             </h4>
//             <h2 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
//               Our Main Goal to Satisfied Local & Global Clients
//             </h2>

//             <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 my-2">
//               <button
//                 onClick={() => setActiveTab("mission")}
//                 className={`px-3.5 sm:px-4 py-1 rounded-full text-[11px] font-semibold transition ${activeTab === "mission"
//                     ? "bg-[#00D3CD] text-white shadow-md"
//                     : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//               >
//                 Our Mission
//               </button>
//               <button
//                 onClick={() => setActiveTab("vision")}
//                 className={`px-3.5 sm:px-4 py-1 rounded-full text-[11px] font-semibold transition ${activeTab === "vision"
//                     ? "bg-[#00D3CD] text-white shadow-md"
//                     : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//               >
//                 Our Vision
//               </button>
//             </div>

//             <p className="text-gray-600 italic text-xs max-w-xl mx-auto md:mx-0">
//               {tabData[activeTab].quote}
//             </p>
//             <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed max-w-xl mx-auto md:mx-0">
//               {tabData[activeTab].desc}
//             </p>
//           </div>

//           <div className="mt-4 md:mt-0 relative group">
//             <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-br from-[#00D3CD]/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//               alt="Global Office"
//               className="relative rounded-xl shadow-lg w-full h-auto aspect-[16/10] object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-4 sm:mb-5">
//             <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">
//               Our Core Values
//             </h2>
//             <p className="text-slate-500 text-[11px] sm:text-xs max-w-2xl mx-auto">
//               Built on the foundation of trust, innovation, and excellence
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
//             {values.map((item, i) => (
//               <div
//                 key={i}
//                 className={`ap-card relative overflow-hidden p-3 sm:p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-sm border border-transparent hover:border-[#00D3CD]/40 ${item.style}`}
//               >
//                 <div className="ap-card-glow absolute inset-0 pointer-events-none" aria-hidden="true" />
//                 <div
//                   className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${item.iconBg} flex items-center justify-center mb-3 sm:mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="relative text-sm sm:text-base font-bold mb-1">{item.title}</h3>
//                 <p className="relative text-[11px] leading-relaxed text-slate-500">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Ourclient />
//     </div>
//   );
// };

// export default AboutPage;







// import React, { useState, useEffect } from "react";
// import {
//   Users,
//   Briefcase,
//   Lock,
//   Globe,
//   Shield,
//   Zap,
//   ShieldCheck,
//   Landmark,
//   Code2,
//   UserCheck,
//   Target,
// } from "lucide-react";
// import Ourclient from "../home/Ourclient";

// const AnimatedNumber = ({ value }) => {
//   const [count, setCount] = useState(0);

//   const target = parseInt(value.replace(/[^0-9]/g, ""));
//   const symbol = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = target / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [target]);

//   return (
//     <>
//       {count}
//       {symbol}
//     </>
//   );
// };

// const AboutPage = () => {
//   const [activeTab, setActiveTab] = useState("mission");

//   const tabData = {
//     mission: {
//       quote:
//         "To build a secure, intelligent, and inclusive digital ecosystem that enables financial services for all.",
//       desc: "Our mission is to build a secure, intelligent, and inclusive digital ecosystem that seamlessly enables payments, banking, credit, insurance, travel, and API-driven financial services. We focus on creating technology-led solutions that are reliable, compliant, and easy to use, empowering both businesses and individuals to access essential financial services. By simplifying complex financial processes and ensuring trust at every level, we help our partners, merchants, and users grow with confidence and long-term stability in an evolving digital economy.",
//     },
//     vision: {
//       quote: "To become a trusted digital financial backbone for India.",
//       desc: "Our vision is to become a trusted digital financial backbone for India by delivering secure, scalable, and compliant fintech and service platforms. We aim to support the nation’s growing digital economy by enabling sustainable financial access for businesses, merchants, and individuals across urban and rural regions alike. Through innovation, strong infrastructure, and long-term impact-driven solutions, we strive to contribute to inclusive economic growth and build lasting trust in digital financial services.",
//     },
//   };

//   const featureBadges = [
//     {
//       title: "Secure & Scalable Payment Solutions",
//       icon: <ShieldCheck className="w-5 h-5" />,
//     },
//     {
//       title: "Banking, Credit & Insurance Services",
//       icon: <Landmark className="w-5 h-5" />,
//     },
//     {
//       title: "API-Led Financial Infrastructure",
//       icon: <Code2 className="w-5 h-5" />,
//     },
//     {
//       title: "Trusted Platform for MSMEs & Enterprises",
//       icon: <UserCheck className="w-5 h-5" />,
//     },
//   ];

//   const values = [
//     {
//       title: "Security First",
//       desc: "Bank-grade security protocols ensuring safe transactions and data protection.",
//       icon: <Shield className="w-5 h-5 text-[#00D3CD]" />,
//     },
//     {
//       title: "Innovation",
//       desc: "Cutting-edge technology driving next-generation financial solutions.",
//       icon: <Zap className="w-5 h-5 text-[#00D3CD]" />,
//     },
//     {
//       title: "Customer Focus",
//       desc: "Dedicated to retailer success and satisfaction with reliable 24/7 support.",
//       icon: <Users className="w-5 h-5 text-[#00D3CD]" />,
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 min-h-screen text-[13px] overflow-x-hidden bg-white">
//       <style>{`
//         @keyframes ap-fadeUp {
//           0% { opacity: 0; transform: translateY(14px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes ap-float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes ap-pulseRing {
//           0% { box-shadow: 0 0 0 0 rgba(0, 211, 205, 0.45); }
//           70% { box-shadow: 0 0 0 10px rgba(0, 211, 205, 0); }
//           100% { box-shadow: 0 0 0 0 rgba(0, 211, 205, 0); }
//         }
//         @keyframes ap-shimmer {
//           0% { transform: translateX(-120%); }
//           100% { transform: translateX(120%); }
//         }
//         .ap-fade-up { animation: ap-fadeUp 0.7s ease-out both; }
//         .ap-fade-up-1 { animation: ap-fadeUp 0.7s 0.08s ease-out both; }
//         .ap-fade-up-2 { animation: ap-fadeUp 0.7s 0.16s ease-out both; }
//         .ap-float { animation: ap-float 4s ease-in-out infinite; }
//         .ap-pulse-ring { animation: ap-pulseRing 2.4s ease-out infinite; }
//         .ap-card:hover .ap-card-glow { opacity: 1; }
//         .ap-card-glow {
//           opacity: 0;
//           transition: opacity 0.35s ease;
//           background: linear-gradient(135deg, rgba(0,211,205,0.10), rgba(45,212,191,0) 60%);
//         }
//         .ap-shine {
//           position: absolute;
//           top: 0; left: 0; height: 100%; width: 40%;
//           background: linear-gradient(115deg, transparent, rgba(255,255,255,0.35), transparent);
//           animation: ap-shimmer 3.2s ease-in-out infinite;
//         }
//       `}</style>

//       <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-16">
//         <h4 className="text-[#00D3CD] font-bold tracking-[0.18em] uppercase text-[10px] mb-2">
//           About AbheePay
//         </h4>
//       </div>

//       {/* Intro */}
//       <section className="pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
//           <div className="space-y-4 ap-fade-up-1 order-2 md:order-1">
//             <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-tight text-slate-900">
//               Powering Digital Finance for Modern{" "}
//               <span className="text-[#00D3CD]">Indian Businesses</span>
//             </h2>

//             <p className="text-gray-600 max-w-lg text-[13px] leading-relaxed">
//               AbheePay is a technology-driven fintech and digital financial
//               services company delivering secure, scalable, and
//               compliance-ready solutions across India.
//             </p>

//             <p className="text-gray-600 max-w-lg text-[13px] leading-relaxed">
//               Designed to serve merchants, MSMEs, enterprises, partners, and
//               consumers, AbheePay combines robust financial infrastructure
//               with innovation-led technology to simplify transactions and
//               enable sustainable business growth.
//             </p>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 pt-3">
//               {featureBadges.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex flex-col items-center text-center gap-2 group"
//                 >
//                   <div className="w-11 h-11 rounded-xl border border-[#00D3CD]/50 text-[#00D3CD] flex items-center justify-center bg-[#00D3CD]/5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:bg-[#00D3CD]/10">
//                     {item.icon}
//                   </div>
//                   <span className="text-[10.5px] font-semibold text-slate-700 leading-snug">
//                     {item.title}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative mx-auto md:mx-0 max-w-md md:max-w-none ap-fade-up order-1 md:order-2">
//             <div className="w-full overflow-hidden rounded-2xl shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//                 alt="Digital financial services"
//                 className="w-full h-[220px] sm:h-[300px] object-cover"
//               />
//             </div>

//             <div
//               className="absolute -bottom-5 right-4 sm:right-6 bg-[#00D3CD] text-white px-4 py-3 rounded-xl shadow-lg min-w-[110px] text-center ap-float ap-pulse-ring"
//             >
//               <h3 className="text-lg sm:text-xl font-bold">30K+</h3>
//               <p className="text-[8.5px] font-bold uppercase tracking-[0.1em] mt-0.5 leading-tight">
//                 Active Partners
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto -mt-2 mb-8 sm:mb-10">
//         <div className="relative bg-white rounded-2xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden py-5 sm:py-6 px-5 sm:px-8">
//           <div className="ap-shine opacity-30" aria-hidden="true" />
//           <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-4">
//             {[
//               { icon: <Briefcase className="w-4 h-4" />, count: "1000+", label: "Partner Retailers" },
//               { icon: <Globe className="w-4 h-4" />, count: "50+", label: "Cities Covered" },
//               { icon: <Users className="w-4 h-4" />, count: "10k", label: "Happy Customers" },
//               { icon: <Lock className="w-4 h-4" />, count: "100%", label: "Secure Transactions" },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 sm:border-r border-slate-100 last:border-0"
//               >
//                 <div className="bg-[#00D3CD]/10 text-[#00D3CD] p-2.5 rounded-full shrink-0">
//                   {stat.icon}
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900">
//                     <AnimatedNumber value={stat.count} />
//                   </h3>
//                   <p className="text-[8px] sm:text-[9px] text-slate-500 uppercase mt-0.5 tracking-wide">
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
//           <div className="space-y-3 text-center md:text-left">
//             <h4 className="text-[#00D3CD] font-bold uppercase text-[10px] tracking-wide">
//               Mission & Vision
//             </h4>
//             <h2 className="text-xl sm:text-2xl font-bold leading-tight text-slate-900">
//               Our Main Goal to Satisfied Local & Global Clients
//             </h2>

//             <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 my-2">
//               <button
//                 onClick={() => setActiveTab("mission")}
//                 className={`px-4 sm:px-5 py-1.5 rounded-full text-[11px] font-semibold transition ${
//                   activeTab === "mission"
//                     ? "bg-[#00D3CD] text-white shadow-md"
//                     : "bg-gray-100 hover:bg-gray-200 text-slate-600"
//                 }`}
//               >
//                 Mission
//               </button>
//               <button
//                 onClick={() => setActiveTab("vision")}
//                 className={`px-4 sm:px-5 py-1.5 rounded-full text-[11px] font-semibold transition ${
//                   activeTab === "vision"
//                     ? "bg-[#00D3CD] text-white shadow-md"
//                     : "bg-gray-100 hover:bg-gray-200 text-slate-600"
//                 }`}
//               >
//                 Our Vision
//               </button>
//             </div>

//             <p className="text-gray-700 italic text-xs max-w-xl mx-auto md:mx-0">
//               {tabData[activeTab].quote}
//             </p>
//             <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed max-w-xl mx-auto md:mx-0">
//               {tabData[activeTab].desc}
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2 md:mt-0">
//             <div className="relative rounded-xl overflow-hidden shadow-lg self-start">
//               <img
//                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
//                 alt="Our office"
//                 className="w-full h-[220px] sm:h-[280px] object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-[#00D3CD] text-white p-3 sm:p-4">
//                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-2">
//                   <Target className="w-4 h-4" />
//                 </div>
//                 <h5 className="text-xs sm:text-sm font-bold mb-1">
//                   Our Commitment
//                 </h5>
//                 <p className="text-[9.5px] sm:text-[10px] leading-snug text-white/90">
//                   Empowering businesses and individuals with secure,
//                   innovative and inclusive financial solutions.
//                 </p>
//               </div>
//             </div>

//             <div className="rounded-xl overflow-hidden shadow-lg mt-6 sm:mt-8">
//               <img
//                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
//                 alt="Team collaboration"
//                 className="w-full h-[220px] sm:h-[280px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-6 sm:mb-8">
//             <h4 className="text-[#00D3CD] font-bold uppercase text-[10px] tracking-wide mb-1.5">
//               Our Core Values
//             </h4>
//             <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
//               Built on the foundation of{" "}
//               <span className="relative inline-block">
//                 trust, innovation, and excellence
//                 <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#00D3CD]/40" />
//               </span>
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
//             {values.map((item, i) => (
//               <div
//                 key={i}
//                 className="ap-card relative overflow-hidden p-4 sm:p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-sm border border-slate-100 bg-white"
//               >
//                 <div className="ap-card-glow absolute inset-0 pointer-events-none" aria-hidden="true" />
//                 <div className="relative w-11 h-11 rounded-full bg-[#00D3CD]/10 flex items-center justify-center mb-3 sm:mb-4">
//                   {item.icon}
//                 </div>
//                 <h3 className="relative text-sm sm:text-base font-bold mb-1.5 text-slate-900">
//                   {item.title}
//                 </h3>
//                 <p className="relative text-[11px] leading-relaxed text-slate-500 mb-3">
//                   {item.desc}
//                 </p>
//                 <span className="block h-[2px] w-8 bg-[#00D3CD] rounded-full" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Ourclient />
//     </div>
//   );
// };

// export default AboutPage;












import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Zap,
  Users,
  Landmark,
  Globe,
  Lock,
  Briefcase,
  Star,
  Wallet,
  HeartPulse,
  Laptop,
  Car,
  Baby,
  PartyPopper,
  Headphones,
  Lightbulb,
  Gift,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

/* ---------------------------------------------------
   Animated counter — ticks up once the stat is on screen
--------------------------------------------------- */
const AnimatedStat = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  const numeric = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");
  const isDecimal = value.includes(".");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1400;
          const stepTime = 16;
          const steps = duration / stepTime;
          const increment = numeric / steps;
          const timer = setInterval(() => {
            start += increment;
            if (start >= numeric) {
              setCount(numeric);
              clearInterval(timer);
            } else {
              setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [numeric, isDecimal]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutPage = () => {
  const teamRows = [
    [
      { name: "XYZ", role: "Founder & CEO" },
      { name: "XYZ", role: "Co-founder & CTO" },

    ],

    [
      { name: "XYZ", role: "Associate Director | HR" },
      { name: "XYZ", role: "Associate Director | Compliance" },
      { name: "XYZ", role: "Associate Director | Marketing" },
      { name: "XYZ", role: "Associate Director | Finance" },
      { name: "XYZ", role: "Developer | IT" },
      
    ],

  ];

  const values = [
    {
      title: "Sharp & Focused",
      desc: "We articulate our thinking with precision, always simplifying complex financial ideas so partners can act on them fast.",
      shade: "bg-[#14B8A6]",
      text: "text-white",
    },
    {
      title: "Resourceful Innovation",
      desc: "We dig deep to understand every challenge and build with what's available — staying open to new ideas at every level.",
      shade: "bg-[#0F9E90]",
      text: "text-white",
    },
    {
      title: "Resolute Commitment",
      desc: "Our perseverance doesn't waver. We back each other, celebrate wins together, and stay locked on the bigger goal.",
      shade: "bg-[#CCF5F0]",
      text: "text-slate-800",
    },
    {
      title: "Empowered To Act",
      desc: "We equip merchants and partners with the insight and confidence to make bold decisions and seize new opportunity.",
      shade: "bg-[#5EEAD4]",
      text: "text-slate-900",
    },
    {
      title: "Bold Vision",
      desc: "We take pioneering, well-reasoned risks — every choice is strategic and built for long-term impact.",
      shade: "bg-[#0B2A33]",
      text: "text-white",
    },
    {
      title: "Being Humble",
      desc: "Despite our progress, we stay grounded. Humility keeps us listening, learning, and growing alongside our partners.",
      shade: "bg-[#E6FFFB]",
      text: "text-slate-800",
    },
  ];

  const benefits = [
    { icon: <Wallet className="w-5 h-5" />, label: "Employee Provident Fund" },
    { icon: <Shield className="w-5 h-5" />, label: "Health Insurance" },
    { icon: <Gift className="w-5 h-5" />, label: "Gratuity Benefits" },
    { icon: <HeartPulse className="w-5 h-5" />, label: "Wellness Time-off" },
    { icon: <Users className="w-5 h-5" />, label: "Work Socials" },
    { icon: <Zap className="w-5 h-5" />, label: "Performance Incentives" },
    { icon: <Laptop className="w-5 h-5" />, label: "Remote Work Friendly" },
    { icon: <Car className="w-5 h-5" />, label: "Free Cab Rides" },
    { icon: <Baby className="w-5 h-5" />, label: "Paid Parental Leave" },
    { icon: <PartyPopper className="w-5 h-5" />, label: "Annual Retreats" },
    { icon: <Headphones className="w-5 h-5" />, label: "Employee Assistance Programs" },
    { icon: <Lightbulb className="w-5 h-5" />, label: "Cultural & Learning Events" },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white text-[13px]">
      <style>{`
        @keyframes fadeUp { 0% { opacity:0; transform: translateY(16px);} 100% { opacity:1; transform: translateY(0);} }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease-out both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.2s ease-out both; }
      `}</style>

      {/* ---------------- NAV ---------------- */}
      <header className="bg-[#0A1122] text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-block w-2.5 h-2.5 bg-[#14B8A6] rounded-sm" />
            <span className="inline-block w-2.5 h-2.5 bg-[#14B8A6] rounded-sm -ml-1 mt-1.5" />
            AbheePay
          </div>
          <nav className="hidden lg:flex items-center gap-7 text-[12px] text-slate-300">
            <span>Products</span>
            <span>Solutions</span>
            <span>Developer's Hub</span>
            <span>Company</span>
            <span>Our Blog</span>
          </nav>
          <div className="flex items-center gap-3">
            <button className="text-[12px] font-medium text-white border border-white/20 rounded-full px-4 py-1.5 hover:bg-white/10 transition">
              Login
            </button>
            <button className="text-[12px] font-semibold bg-[#14B8A6] text-white rounded-full px-4 py-1.5 hover:bg-[#0F9E90] transition">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="bg-[#0A1122] text-white pt-12 pb-16 px-5 sm:px-8 relative overflow-hidden">
        <div className="absolute top-10 left-4 w-16 h-16 border border-[#14B8A6]/25 rounded-lg hidden sm:block" />
        <div className="absolute top-16 right-6 w-20 h-20 border border-[#14B8A6]/25 rounded-lg hidden sm:block" />

        <div className="max-w-6xl mx-auto text-center relative">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#5EEAD4] border border-[#14B8A6]/40 rounded-full px-4 py-1 mb-5 fade-up">
            Our Vision
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight fade-up-1">
            We are AbheePay, The Complete
            <br />
            <span className="text-[#14B8A6]">Business Banking Platform</span>
          </h1>

          <div className="relative mt-10 rounded-2xl overflow-hidden max-w-4xl mx-auto fade-up-2 shadow-2xl">
            <img
              src="#"
              alt="AbheePay team"
              className="w-full h-[220px] sm:h-[320px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1122]/70 via-transparent to-transparent" />
            <span className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[28px] sm:text-[56px] font-black tracking-tight text-white/25 whitespace-nowrap select-none">
              #ABHEEPAY
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- MODERN BUSINESS BANKING ---------------- */}
      <section className="px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Modern Business <span className="text-[#14B8A6]">Banking</span>
            </h2>
            <p className="text-[12px] font-semibold text-slate-500 mt-2">
              Empowering Startups, SME's & Enterprises
            </p>
          </div>
          <div className="space-y-4 text-[12.5px] leading-relaxed text-slate-600">
            <p>
              At AbheePay, we redefine the way India transacts — providing comprehensive financial
              services for the inclusive and sustainable growth of individuals, SMEs, and enterprises
              nationwide.
            </p>
            <p>
              From API banking solutions, payouts, collections, and expense management, to gift cards,
              identity verification, and enterprise utility payments, our platform is designed to be a{" "}
              <span className="font-bold text-slate-800">
                one-stop solution for all financial transactions
              </span>
              , enabling ease of access and management through a single interface.
            </p>
            <p>
              <span className="font-bold text-slate-800">Trust is our foundation,</span> maintained
              through the highest standards of integrity and transparency. We use state-of-the-art
              security to protect every transaction and keep customer data secure.
            </p>
            <p>
              <span className="font-bold text-slate-800">Join us</span> on our journey to transform
              the financial landscape of India, making it more inclusive, sustainable, efficient, and
              forward-thinking.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- STATS BAR ---------------- */}
      <section className="bg-[#0A1122] text-white px-5 sm:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
            We Deliver <span className="text-[#14B8A6]">Results</span>
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {[
              { label: "Transactions Per Day", value: "1M+" },
              { label: "Monthly Payment Value", value: "$1B+" },
              { label: "Registered Businesses", value: "1M+" },
              { label: "App Store Ratings", value: "4.5", icon: <Star className="w-4 h-4 fill-[#14B8A6] text-[#14B8A6] inline ml-1" /> },
            ].map((s, i) => (
              <div key={i} className="border-l border-white/15 pl-4">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <AnimatedStat value={s.value} />
                  {s.icon}
                </h3>
                <p className="text-[10px] uppercase tracking-wide text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TEAM ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12">
            One <span className="text-[#14B8A6]">TEAM.</span> One VISION.
          </h2>
          <div className="space-y-10">
            {teamRows.map((row, ri) => (
              <div key={ri} className="flex flex-wrap justify-center gap-8 sm:gap-12">
                {row.map((person, pi) => {
                  const initials = person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("");
                  return (
                    <div key={pi} className="w-28 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-[#E6FFFB] border-2 border-[#14B8A6]/30 flex items-center justify-center text-[#0F9E90] font-bold text-lg mb-3">
                        {initials}
                      </div>
                      <p className="font-semibold text-slate-900 text-[12px] leading-snug">
                        {person.name}
                      </p>
                      <p className="text-[10.5px] text-slate-500 mt-0.5">{person.role}</p>
                      <Linkedin className="w-3.5 h-3.5 text-[#14B8A6] mt-1.5" />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- OUR VALUES ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 bg-[#F7FDFC]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className={`${values[0].shade} ${values[0].text} rounded-2xl p-6 flex flex-col justify-between min-h-[170px]`}>
              <p className="text-[12px] leading-relaxed opacity-90">{values[0].desc}</p>
              <h3 className="text-lg font-bold mt-4">{values[0].title}</h3>
            </div>
            <div className={`${values[1].shade} ${values[1].text} rounded-2xl p-6 flex flex-col justify-between min-h-[170px]`}>
              <p className="text-[12px] leading-relaxed opacity-90">{values[1].desc}</p>
              <h3 className="text-lg font-bold mt-4">{values[1].title}</h3>
            </div>

            <div className={`${values[2].shade} ${values[2].text} rounded-2xl p-6 sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-h-[110px]`}>
              <h3 className="text-lg font-bold">{values[2].title}</h3>
              <p className="text-[12px] leading-relaxed opacity-80 sm:max-w-xl">{values[2].desc}</p>
            </div>

            <div className={`${values[3].shade} ${values[3].text} rounded-2xl p-6 flex flex-col justify-between min-h-[170px] sm:col-span-1`}>
              <p className="text-[12px] leading-relaxed opacity-90">{values[3].desc}</p>
              <h3 className="text-lg font-bold mt-4">{values[3].title}</h3>
            </div>
            <div className={`${values[4].shade} ${values[4].text} rounded-2xl p-6 flex flex-col justify-between min-h-[170px]`}>
              <p className="text-[12px] leading-relaxed opacity-90">{values[4].desc}</p>
              <h3 className="text-lg font-bold mt-4">{values[4].title}</h3>
            </div>

            <div className={`${values[5].shade} ${values[5].text} rounded-2xl p-6 sm:col-span-2 min-h-[110px]`}>
              <h3 className="text-lg font-bold mb-2">{values[5].title}</h3>
              <p className="text-[12px] leading-relaxed opacity-80">{values[5].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CULTURE ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img
              src="#"
              alt="Team working"
              className="rounded-xl object-cover h-40 sm:h-52 w-full"
            />
            <div className="flex flex-col gap-3">
              <div className="bg-[#0A1122] rounded-xl h-16 sm:h-24 flex items-center justify-center text-white font-bold tracking-wide text-[11px]">
                abheepay
              </div>
              <img
                src="#"
                alt="Team celebration"
                className="rounded-xl object-cover h-24 sm:h-24 w-full"
              />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#14B8A6] mb-2">
              Our Culture
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Collaborate, Create &amp; Succeed <span className="text-[#14B8A6]">Together</span>
            </h2>
            <p className="text-[12.5px] text-slate-600 leading-relaxed mt-4 max-w-md">
              We're a team of builders, bankers, and problem-solvers who believe great financial
              products come from people who trust each other enough to challenge, support, and grow
              together every day.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- BENEFITS ---------------- */}
      <section className="bg-[#0A1122] text-white px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Benefits</h2>
          <p className="text-[12px] text-slate-400 mt-1 mb-10">
            We Care about our <span className="text-[#14B8A6] font-semibold">Team</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
            {benefits.map((b, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  {b.icon}
                </div>
                <p className="text-[11.5px] font-medium text-slate-200 leading-snug">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="grid sm:grid-cols-2">
        <img
          src="#"
          alt="Team outdoors"
          className="w-full h-56 sm:h-72 object-cover"
        />
        <div className="bg-gradient-to-br from-[#0A1122] to-[#0F9E90] flex flex-col justify-center px-8 py-10 sm:py-0">
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            Join Our
            <br />
            Growing Team
          </h2>
          <button className="mt-5 w-fit bg-[#14B8A6] hover:bg-[#0F9E90] transition text-white text-[12px] font-semibold rounded-full px-5 py-2">
            Find your calling
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;