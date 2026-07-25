// // // // // // import React from "react";
// // // // // // import { IndianRupee, ShieldCheck, Users, TrendingUp } from "lucide-react";

// // // // // // const Benefits = () => {
// // // // // //   const benefits = [
// // // // // //     {
// // // // // //       icon: IndianRupee,
// // // // // //       title: "0 investment",
// // // // // //       subtitle: "business",
// // // // // //       description: "Start your journey without any initial cost",
// // // // // //       color: "from-emerald-500 to-teal-500",
// // // // // //       delay: "0ms",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: ShieldCheck,
// // // // // //       title: "simple joining",
// // // // // //       subtitle: "process",
// // // // // //       description: "Quick and hassle-free onboarding",
// // // // // //       color: "from-blue-500 to-cyan-500",
// // // // // //       delay: "100ms",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: Users,
// // // // // //       title: "24*7 customer",
// // // // // //       subtitle: "service",
// // // // // //       description: "Always here to support your growth",
// // // // // //       color: "from-purple-500 to-pink-500",
// // // // // //       delay: "200ms",
// // // // // //     },
// // // // // //     {
// // // // // //       icon: TrendingUp,
// // // // // //       title: "Earn ₹4L - ₹12L",
// // // // // //       subtitle: "per annum",
// // // // // //       description: "Unlimited earning potential",
// // // // // //       color: "from-orange-500 to-red-500",
// // // // // //       delay: "300ms",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (

// // // // // //     <section className="relative bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#F8FAFC] py-8 px-6 md:px-12 lg:px-24 text-slate-800 overflow-hidden">

// // // // // //       <div className="absolute inset-0 opacity-[0.15]">
// // // // // //         <div
// // // // // //           className="absolute inset-0"
// // // // // //           style={{
// // // // // //             backgroundImage:
// // // // // //               "linear-gradient(#0D9488 1px, transparent 1px), linear-gradient(90deg, #0D9488 1px, transparent 1px)",
// // // // // //             backgroundSize: "50px 50px",
// // // // // //           }}
// // // // // //         ></div>
// // // // // //       </div>


// // // // // //       <div className="absolute top-10 left-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
// // // // // //       <div
// // // // // //         className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse"
// // // // // //         style={{ animationDelay: "1.5s" }}
// // // // // //       ></div>

// // // // // //       <div className="max-w-7xl mx-auto text-center relative z-10">

// // // // // //         <div className="mb-10">
// // // // // //           <p className="text-[#94A3B8] text-sm uppercase tracking-[0.2em] mb-4 font-bold animate-fade-in">
// // // // // //             Aapka business • Humara investment
// // // // // //           </p>

// // // // // //           <h2 className="text-5xl md:text-5xl font-black mb-4 animate-slide-up text-slate-900">
// // // // // //             Abheepay Benefits
// // // // // //           </h2>

// // // // // //           <div className="flex items-center justify-center gap-2 mt-6">
// // // // // //             <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#2DD4BF]"></div>
// // // // // //             <div className="w-2 h-2 bg-[#2DD4BF] rounded-full"></div>
// // // // // //             <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#2DD4BF]"></div>
// // // // // //           </div>
// // // // // //         </div>


// // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // // //           {benefits.map((benefit, index) => {
// // // // // //             const Icon = benefit.icon;
// // // // // //             return (
// // // // // //               <div
// // // // // //                 key={index}
// // // // // //                 className="group relative animate-fade-in-up"
// // // // // //                 style={{ animationDelay: benefit.delay }}
// // // // // //               >
// // // // // //                 <div className="relative h-full bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:border-[#2DD4BF]">

// // // // // //                   <div className="relative mb-5">
// // // // // //                     <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gray-300 p-[2px] transition-all duration-500">
// // // // // //                       <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
// // // // // //                         <Icon
// // // // // //                           className={`w-9 h-9 transition-transform duration-500 group-hover:scale-110`}
// // // // // //                           style={{ color: "inherit" }}
// // // // // //                           strokeWidth={2.5}
// // // // // //                         />
// // // // // //                         <div
// // // // // //                           className={`absolute inset-0 flex items-center justify-center`}
// // // // // //                         >
// // // // // //                           <Icon
// // // // // //                             className="w-9 h-9 text-slate-500"
// // // // // //                             strokeWidth={2.5}
// // // // // //                           />
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>


// // // // // //                   <div className="space-y-2">
// // // // // //                     <h3 className="text-xl font-bold text-slate-900">
// // // // // //                       {benefit.title}
// // // // // //                     </h3>
// // // // // //                     <p className="text-lg font-semibold text-slate-500">
// // // // // //                       {benefit.subtitle}
// // // // // //                     </p>
// // // // // //                     <p className="text-sm text-slate-400 leading-relaxed font-medium">
// // // // // //                       {benefit.description}
// // // // // //                     </p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx>{`
// // // // // //         @keyframes fade-in {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //           }
// // // // // //         }
// // // // // //         @keyframes slide-up {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(30px);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0);
// // // // // //           }
// // // // // //         }
// // // // // //         @keyframes fade-in-up {
// // // // // //           from {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(40px) scale(0.95);
// // // // // //           }
// // // // // //           to {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0) scale(1);
// // // // // //           }
// // // // // //         }
// // // // // //         .animate-fade-in {
// // // // // //           animation: fade-in 1s ease-out;
// // // // // //         }
// // // // // //         .animate-slide-up {
// // // // // //           animation: slide-up 1s ease-out;
// // // // // //         }
// // // // // //         .animate-fade-in-up {
// // // // // //           animation: fade-in-up 0.8s ease-out forwards;
// // // // // //           opacity: 0;
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Benefits;










// // // // // import React from "react";
// // // // // import { FileText, TrendingUp, Wallet } from "lucide-react";

// // // // // const chartData = [
// // // // //   { v: 38 },
// // // // //   { v: 52 },
// // // // //   { v: 44 },
// // // // //   { v: 68 },
// // // // //   { v: 74 },
// // // // //   { v: 58 },
// // // // //   { v: 70 },
// // // // //   { v: 82 },
// // // // //   { v: 66 },
// // // // //   { v: 60 },
// // // // //   { v: 80 },
// // // // //   { v: 62 },
// // // // // ];

// // // // // const settlements = [
// // // // //   { amount: "₹2.4L", date: "Jan 15", status: "Completed" },
// // // // //   { amount: "₹1.8L", date: "Jan 14", status: "Completed" },
// // // // //   { amount: "₹3.1L", date: "Jan 13", status: "Completed" },
// // // // //   { amount: "₹2.7L", date: "Jan 12", status: "Pending" },
// // // // // ];

// // // // // const merchantStats = [
// // // // //   { icon: FileText, value: "8,234", label: "Active Merchants" },
// // // // //   { icon: TrendingUp, value: "342", label: "New This Month" },
// // // // //   { icon: Wallet, value: "₹45.2Cr", label: "Total Volume" },
// // // // // ];

// // // // // const revenue = [
// // // // //   { label: "Payment Gateway", pct: 45, shade: "#14B8A6" },
// // // // //   { label: "QR Payments", pct: 30, shade: "#2DD4BF" },
// // // // //   { label: "POS Systems", pct: 25, shade: "#5EEAD4" },
// // // // // ];

// // // // // function StatusBadge({ status }) {
// // // // //   const isDone = status === "Completed";
// // // // //   return (
// // // // //     <span
// // // // //       className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
// // // // //         isDone ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
// // // // //       }`}
// // // // //     >
// // // // //       {status}
// // // // //     </span>
// // // // //   );
// // // // // }

// // // // // function SolidCircle({ label, pct, shade }) {
// // // // //   return (
// // // // //     <div className="flex flex-col items-center gap-1">
// // // // //       <div
// // // // //         className="w-10 h-10 rounded-full flex items-center justify-center"
// // // // //         style={{ backgroundColor: shade }}
// // // // //       >
// // // // //         <span className="text-[10px] font-bold text-white">{pct}%</span>
// // // // //       </div>
// // // // //       <p className="text-[10px] font-medium text-slate-700 text-center leading-tight">
// // // // //         {label}
// // // // //       </p>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // const Benefits = () => {
// // // // //   return (
// // // // //     <section className="relative bg-[#F7F8FA] py-6 px-4 md:px-6 lg:px-10 text-slate-800">
// // // // //       <div className="max-w-3xl mx-auto">
// // // // //         <h2 className="text-lg md:text-xl font-extrabold text-slate-900 text-center mb-4">
// // // // //           Powerful Dashboard
// // // // //         </h2>

// // // // //         {/* Row 1 */}
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-2.5 mb-2.5">
// // // // //           {/* Transaction Analytics */}
// // // // //           <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2.5">
// // // // //             <div className="flex items-center justify-between mb-2.5">
// // // // //               <h3 className="text-xs font-semibold text-slate-800">
// // // // //                 Transaction Analytics
// // // // //               </h3>
// // // // //               <span className="text-[9px] text-slate-400">This Month</span>
// // // // //             </div>
// // // // //             <div className="h-20 flex items-end gap-1 md:gap-1.5">
// // // // //               {chartData.map((d, i) => (
// // // // //                 <div
// // // // //                   key={i}
// // // // //                   className="flex-1 bg-teal-400 rounded-t-sm"
// // // // //                   style={{ height: `${d.v}%` }}
// // // // //                 />
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Settlement Reports */}
// // // // //           <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2.5">
// // // // //             <h3 className="text-xs font-semibold text-slate-800 mb-1.5">
// // // // //               Settlement Reports
// // // // //             </h3>
// // // // //             <div className="space-y-1.5">
// // // // //               {settlements.map((s, i) => (
// // // // //                 <div key={i} className="flex items-center justify-between">
// // // // //                   <div>
// // // // //                     <p className="text-xs font-semibold text-slate-800">
// // // // //                       {s.amount}
// // // // //                     </p>
// // // // //                     <p className="text-[9px] text-slate-400">{s.date}</p>
// // // // //                   </div>
// // // // //                   <StatusBadge status={s.status} />
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Row 2 */}
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
// // // // //           {/* Merchant Management */}
// // // // //           <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2.5">
// // // // //             <h3 className="text-xs font-semibold text-slate-800 mb-1.5">
// // // // //               Merchant Management
// // // // //             </h3>
// // // // //             <div className="space-y-1">
// // // // //               {merchantStats.map((m, i) => {
// // // // //                 const Icon = m.icon;
// // // // //                 return (
// // // // //                   <div
// // // // //                     key={i}
// // // // //                     className="flex items-center gap-2 bg-slate-50 rounded-lg px-2 py-1"
// // // // //                   >
// // // // //                     <div className="w-5 h-5 rounded bg-teal-400 flex items-center justify-center flex-shrink-0">
// // // // //                       <Icon className="w-3 h-3 text-white" strokeWidth={2} />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <p className="text-xs font-bold text-slate-800 leading-tight">
// // // // //                         {m.value}
// // // // //                       </p>
// // // // //                       <p className="text-[9px] text-slate-400">{m.label}</p>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 );
// // // // //               })}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Revenue Insights */}
// // // // //           <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2.5">
// // // // //             <h3 className="text-xs font-semibold text-slate-800 mb-2">
// // // // //               Revenue Insights
// // // // //             </h3>
// // // // //             <div className="flex items-center justify-around">
// // // // //               {revenue.map((r, i) => (
// // // // //                 <SolidCircle
// // // // //                   key={i}
// // // // //                   label={r.label}
// // // // //                   pct={r.pct}
// // // // //                   shade={r.shade}
// // // // //                 />
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Benefits;














// // // // import React, { useEffect, useRef, useState } from "react";
// // // // import {
// // // //   Zap,
// // // //   Server,
// // // //   Headset,
// // // //   TrendingUp,
// // // //   Rocket,
// // // //   CheckCircle2,
// // // //   ChevronDown,
// // // // } from "lucide-react";

// // // // /* ---------------- config ---------------- */
// // // // const NUM_SLIDES = 5;
// // // // const SLIDE_VH = 160; // each slide occupies 160vh of scroll while pinned
// // // // const TRANS = 0.3; // fraction of a slide-unit used for crossfade in/out

// // // // const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
// // // // const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// // // // function countUp(from, to, t, decimals = 0) {
// // // //   const eased = easeOutCubic(clamp(t, 0, 1));
// // // //   const val = from + (to - from) * eased;
// // // //   return decimals > 0
// // // //     ? val.toFixed(decimals)
// // // //     : Math.round(val).toLocaleString();
// // // // }

// // // // const chartData = [38, 52, 44, 68, 74, 58, 70, 82, 66, 60, 80, 62];
// // // // const settlementsData = [
// // // //   { amount: "₹2.4L", date: "Jan 15" },
// // // //   { amount: "₹1.8L", date: "Jan 14" },
// // // //   { amount: "₹3.1L", date: "Jan 13" },
// // // //   { amount: "₹2.7L", date: "Jan 12" },
// // // // ];

// // // // const slideMeta = [
// // // //   { label: "Faster Settlement", icon: Zap, accent: "#14B8A6", bg: "#ECFDF5" },
// // // //   { label: "Infrastructure", icon: Server, accent: "#3B82F6", bg: "#EFF6FF" },
// // // //   { label: "Better Support", icon: Headset, accent: "#A855F7", bg: "#FAF5FF" },
// // // //   { label: "Scalable Platform", icon: TrendingUp, accent: "#F97316", bg: "#FFF7ED" },
// // // //   { label: "Easy Onboarding", icon: Rocket, accent: "#0D9488", bg: "#F0FDFA" },
// // // // ];

// // // // /* ---------------- slide content ---------------- */

// // // // function SettlementSlide({ t }) {
// // // //   const chartOpacity = clamp(1 - t / 0.5, 0, 1);
// // // //   const barsScale = 1 - t * 0.5;
// // // //   const widgetT = clamp((t - 0.3) / 0.5, 0, 1);
// // // //   const hrs = countUp(48, 1, clamp((t - 0.15) / 0.7, 0, 1), 0);

// // // //   return (
// // // //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center w-full max-w-3xl">
// // // //       <div>
// // // //         <div style={{ opacity: chartOpacity }}>
// // // //           <div className="h-24 md:h-28 flex items-end gap-1.5">
// // // //             {chartData.map((v, i) => (
// // // //               <div
// // // //                 key={i}
// // // //                 className="flex-1 bg-teal-400 rounded-t-sm"
// // // //                 style={{ height: `${v * barsScale}%` }}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //         <div
// // // //           style={{
// // // //             opacity: widgetT,
// // // //             transform: `translateY(${(1 - widgetT) * 16}px)`,
// // // //           }}
// // // //           className="mt-4"
// // // //         >
// // // //           <p className="text-xs text-slate-500 mb-1">Avg. Settlement Time</p>
// // // //           <p className="text-3xl md:text-4xl font-black text-teal-600">
// // // //             {hrs}
// // // //             <span className="text-base md:text-lg"> hr</span>
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       <div className="space-y-2 w-full">
// // // //         {settlementsData.map((s, i) => {
// // // //           const rowT = clamp((t - i * 0.1) / 0.35, 0, 1);
// // // //           const done = rowT > 0.6;
// // // //           return (
// // // //             <div
// // // //               key={i}
// // // //               className="flex items-center justify-between bg-white/80 rounded-xl px-3 py-2 shadow-sm"
// // // //               style={{
// // // //                 opacity: clamp(rowT + 0.25, 0, 1),
// // // //                 transform: `translateX(${(1 - rowT) * 12}px)`,
// // // //               }}
// // // //             >
// // // //               <div>
// // // //                 <p className="text-sm font-semibold text-slate-800">
// // // //                   {s.amount}
// // // //                 </p>
// // // //                 <p className="text-[10px] text-slate-400">{s.date}</p>
// // // //               </div>
// // // //               <span
// // // //                 className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-full px-2 py-0.5"
// // // //                 style={{
// // // //                   backgroundColor: done ? "#D1FAE5" : "#FEF3C7",
// // // //                   color: done ? "#059669" : "#D97706",
// // // //                 }}
// // // //               >
// // // //                 <CheckCircle2 className="w-3 h-3" />
// // // //                 {done ? "Instant" : "Processing"}
// // // //               </span>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function StatCard({ label, value, suffix, accent, delay, t }) {
// // // //   const localT = clamp((t - delay) / 0.5, 0, 1);
// // // //   return (
// // // //     <div
// // // //       className="bg-white/80 rounded-2xl px-5 py-4 shadow-sm min-w-[150px]"
// // // //       style={{
// // // //         opacity: localT,
// // // //         transform: `translateY(${(1 - localT) * 16}px)`,
// // // //       }}
// // // //     >
// // // //       <p className="text-3xl font-black" style={{ color: accent }}>
// // // //         {value}
// // // //         <span className="text-base font-bold">{suffix}</span>
// // // //       </p>
// // // //       <p className="text-xs text-slate-500 mt-1">{label}</p>
// // // //     </div>
// // // //   );
// // // // }

// // // // function GenericSlide({ meta, t, stats }) {
// // // //   const Icon = meta.icon;
// // // //   const headingT = clamp(t / 0.4, 0, 1);
// // // //   return (
// // // //     <div className="flex flex-col items-center text-center max-w-2xl">
// // // //       <div
// // // //         className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
// // // //         style={{
// // // //           backgroundColor: meta.accent,
// // // //           opacity: headingT,
// // // //           transform: `scale(${0.7 + headingT * 0.3})`,
// // // //         }}
// // // //       >
// // // //         <Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
// // // //       </div>
// // // //       <h3
// // // //         className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8"
// // // //         style={{
// // // //           opacity: headingT,
// // // //           transform: `translateY(${(1 - headingT) * 14}px)`,
// // // //         }}
// // // //       >
// // // //         {meta.label}
// // // //       </h3>
// // // //       <div className="flex flex-wrap justify-center gap-4">
// // // //         {stats.map((s, i) => (
// // // //           <StatCard key={i} {...s} accent={meta.accent} t={t} />
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function OnboardingSlide({ meta, t }) {
// // // //   const Icon = meta.icon;
// // // //   const headingT = clamp(t / 0.3, 0, 1);
// // // //   const minutes = countUp(0, 15, clamp((t - 0.1) / 0.5, 0, 1), 0);
// // // //   const steps = [
// // // //     "Sign up online",
// // // //     "Verify KYC instantly",
// // // //     "Get API keys",
// // // //     "Go live",
// // // //   ];
// // // //   return (
// // // //     <div className="flex flex-col items-center text-center max-w-xl">
// // // //       <div
// // // //         className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
// // // //         style={{
// // // //           backgroundColor: meta.accent,
// // // //           opacity: headingT,
// // // //           transform: `scale(${0.7 + headingT * 0.3})`,
// // // //         }}
// // // //       >
// // // //         <Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
// // // //       </div>
// // // //       <h3
// // // //         className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2"
// // // //         style={{ opacity: headingT }}
// // // //       >
// // // //         {meta.label}
// // // //       </h3>
// // // //       <p
// // // //         className="text-4xl font-black mb-6"
// // // //         style={{ color: meta.accent, opacity: clamp((t - 0.1) / 0.4, 0, 1) }}
// // // //       >
// // // //         {minutes}
// // // //         <span className="text-lg"> min to go live</span>
// // // //       </p>
// // // //       <div className="space-y-2 w-full">
// // // //         {steps.map((s, i) => {
// // // //           const st = clamp((t - 0.25 - i * 0.15) / 0.25, 0, 1);
// // // //           return (
// // // //             <div
// // // //               key={i}
// // // //               className="flex items-center gap-3 bg-white/80 rounded-xl px-4 py-2 shadow-sm text-left"
// // // //               style={{
// // // //                 opacity: st,
// // // //                 transform: `translateX(${(1 - st) * -14}px)`,
// // // //               }}
// // // //             >
// // // //               <span
// // // //                 className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
// // // //                 style={{ backgroundColor: meta.accent }}
// // // //               >
// // // //                 {i + 1}
// // // //               </span>
// // // //               <p className="text-sm font-medium text-slate-700">{s}</p>
// // // //             </div>
// // // //           );
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function renderSlide(index, t) {
// // // //   const meta = slideMeta[index];
// // // //   switch (index) {
// // // //     case 0:
// // // //       return <SettlementSlide t={t} />;
// // // //     case 1:
// // // //       return (
// // // //         <GenericSlide
// // // //           meta={meta}
// // // //           t={t}
// // // //           stats={[
// // // //             { label: "Uptime", value: countUp(90, 99.99, clamp((t - 0.15) / 0.6, 0, 1), 2), suffix: "%", delay: 0.15 },
// // // //             { label: "API Latency", value: countUp(400, 80, clamp((t - 0.3) / 0.6, 0, 1), 0), suffix: "ms", delay: 0.3 },
// // // //           ]}
// // // //         />
// // // //       );
// // // //     case 2:
// // // //       return (
// // // //         <GenericSlide
// // // //           meta={meta}
// // // //           t={t}
// // // //           stats={[
// // // //             { label: "Avg. Response Time", value: countUp(30, 2, clamp((t - 0.15) / 0.6, 0, 1), 0), suffix: " min", delay: 0.15 },
// // // //             { label: "Resolution Rate", value: countUp(70, 98, clamp((t - 0.3) / 0.6, 0, 1), 0), suffix: "%", delay: 0.3 },
// // // //           ]}
// // // //         />
// // // //       );
// // // //     case 3:
// // // //       return (
// // // //         <GenericSlide
// // // //           meta={meta}
// // // //           t={t}
// // // //           stats={[
// // // //             { label: "Active Merchants", value: countUp(8234, 52000, clamp((t - 0.15) / 0.6, 0, 1), 0), suffix: "+", delay: 0.15 },
// // // //             { label: "Transactions / sec", value: countUp(120, 4800, clamp((t - 0.3) / 0.6, 0, 1), 0), suffix: "", delay: 0.3 },
// // // //           ]}
// // // //         />
// // // //       );
// // // //     case 4:
// // // //       return <OnboardingSlide meta={meta} t={t} />;
// // // //     default:
// // // //       return null;
// // // //   }
// // // // }

// // // // /* ---------------- main component ---------------- */

// // // // const Benefits = () => {
// // // //   const wrapperRef = useRef(null);
// // // //   const [progress, setProgress] = useState(0);

// // // //   useEffect(() => {
// // // //     let rafId = null;

// // // //     const measure = () => {
// // // //       const el = wrapperRef.current;
// // // //       if (!el) return;
// // // //       const rect = el.getBoundingClientRect();
// // // //       const scrollable = rect.height - window.innerHeight;
// // // //       const scrolled = -rect.top;
// // // //       const p = scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0;
// // // //       setProgress(p);
// // // //     };

// // // //     const onScroll = () => {
// // // //       if (rafId) return;
// // // //       rafId = requestAnimationFrame(() => {
// // // //         rafId = null;
// // // //         measure();
// // // //       });
// // // //     };

// // // //     measure();
// // // //     window.addEventListener("scroll", onScroll, { passive: true });
// // // //     window.addEventListener("resize", onScroll);
// // // //     return () => {
// // // //       window.removeEventListener("scroll", onScroll);
// // // //       window.removeEventListener("resize", onScroll);
// // // //       if (rafId) cancelAnimationFrame(rafId);
// // // //     };
// // // //   }, []);

// // // //   const slideFloat = progress * NUM_SLIDES;
// // // //   const activePct = Math.round(progress * 100);

// // // //   return (
// // // //     <section className="relative bg-[#F7F8FA] text-slate-800">
// // // //       {/* Intro (100vh, normal scroll) */}
// // // //       <div className="h-screen flex flex-col items-center justify-center px-6">
// // // //         <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center mb-4">
// // // //           Powerful Dashboard
// // // //         </h2>
// // // //         <p className="text-slate-500 text-sm md:text-base mb-10 text-center">
// // // //           Scroll to see what Abheepay powers behind the scenes
// // // //         </p>
// // // //         <ChevronDown className="w-6 h-6 text-teal-500 animate-bounce" />
// // // //       </div>

// // // //       {/* Pinned scroll-driven section */}
// // // //       <div
// // // //         ref={wrapperRef}
// // // //         style={{ height: `calc(${NUM_SLIDES * SLIDE_VH}vh + 100vh)` }}
// // // //         className="relative"
// // // //       >
// // // //         <div className="sticky top-0 h-screen overflow-hidden">
// // // //           {/* progress rail */}
// // // //           <div className="hidden md:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-30">
// // // //             {[0, 20, 40, 60, 80, 100].map((pct) => {
// // // //               const isActive = Math.abs(activePct - pct) < 10;
// // // //               return (
// // // //                 <div key={pct} className="flex items-center gap-2 justify-end">
// // // //                   <span
// // // //                     className={`text-[10px] font-semibold transition-colors ${
// // // //                       isActive ? "text-teal-600" : "text-slate-300"
// // // //                     }`}
// // // //                   >
// // // //                     {pct}%
// // // //                   </span>
// // // //                   <span
// // // //                     className={`w-2 h-2 rounded-full transition-all ${
// // // //                       isActive ? "bg-teal-500 scale-125" : "bg-slate-300"
// // // //                     }`}
// // // //                   />
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>

// // // //           {/* slide label top */}
// // // //           <div className="absolute top-8 left-0 right-0 flex justify-center z-30 pointer-events-none">
// // // //             <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
// // // //               {slideMeta[clamp(Math.floor(slideFloat), 0, NUM_SLIDES - 1)].label}
// // // //             </span>
// // // //           </div>

// // // //           {slideMeta.map((meta, i) => {
// // // //             const local = slideFloat - i;
// // // //             const isLast = i === NUM_SLIDES - 1;
// // // //             let opacity;
// // // //             let translateY;

// // // //             if (local < -TRANS) {
// // // //               opacity = 0;
// // // //               translateY = 30;
// // // //             } else if (local < 0) {
// // // //               const tt = (local + TRANS) / TRANS;
// // // //               opacity = clamp(tt, 0, 1);
// // // //               translateY = (1 - opacity) * 30;
// // // //             } else if (isLast || local < 1 - TRANS) {
// // // //               opacity = 1;
// // // //               translateY = 0;
// // // //             } else if (local < 1) {
// // // //               const tt = (1 - local) / TRANS;
// // // //               opacity = clamp(tt, 0, 1);
// // // //               translateY = -(1 - opacity) * 30;
// // // //             } else {
// // // //               opacity = 0;
// // // //               translateY = -30;
// // // //             }

// // // //             const localT = clamp(local, 0, 1);

// // // //             return (
// // // //               <div
// // // //                 key={i}
// // // //                 className="absolute inset-0 flex items-center justify-center p-6"
// // // //                 style={{
// // // //                   opacity,
// // // //                   transform: `translateY(${translateY}px)`,
// // // //                   background: meta.bg,
// // // //                   zIndex: 10 + i,
// // // //                   pointerEvents: opacity > 0.5 ? "auto" : "none",
// // // //                 }}
// // // //               >
// // // //                 {renderSlide(i, localT)}
// // // //               </div>
// // // //             );
// // // //           })}
// // // //         </div>
// // // //       </div>

// // // //       {/* Outro */}
// // // //       <div className="h-[60vh] flex flex-col items-center justify-center px-6 bg-white">
// // // //         <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 text-center">
// // // //           Ready to power your business?
// // // //         </h3>
// // // //         <p className="text-slate-500 text-sm mb-6 text-center max-w-md">
// // // //           Join thousands of merchants growing with Abheepay's payment
// // // //           infrastructure.
// // // //         </p>
// // // //         <button className="bg-teal-500 hover:bg-teal-600 transition-colors text-white font-semibold px-6 py-3 rounded-xl text-sm">
// // // //           Get Started
// // // //         </button>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Benefits;










// // // import React, { useEffect, useRef, useState } from "react";
// // // import { ChevronDown, CheckCircle2 } from "lucide-react";

// // // /* ---------------- config ---------------- */
// // // const NUM_SLIDES = 5;
// // // const SLIDE_VH = 160;
// // // const TRANS = 0.3;

// // // const ACCENT = "#0D9488"; // teal-600, single professional accent throughout
// // // const ACCENT_SOFT = "#CCFBF1";
// // // const INK = "#0F172A"; // slate-900

// // // const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
// // // const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// // // function countUp(from, to, t, decimals = 0) {
// // //   const eased = easeOutCubic(clamp(t, 0, 1));
// // //   const val = from + (to - from) * eased;
// // //   return decimals > 0
// // //     ? val.toFixed(decimals)
// // //     : Math.round(val).toLocaleString();
// // // }

// // // const slideMeta = [
// // //   { key: "01", label: "Faster Settlement" },
// // //   { key: "02", label: "Infrastructure" },
// // //   { key: "03", label: "Better Support" },
// // //   { key: "04", label: "Scalable Platform" },
// // //   { key: "05", label: "Easy Onboarding" },
// // // ];

// // // /* ---------------- reusable chart primitives ---------------- */

// // // function ProgressBar({ label, value, display, suffix, max, delay, t, invert }) {
// // //   const localT = clamp((t - delay) / 0.55, 0, 1);
// // //   const pct = invert ? 100 - (value / max) * 100 : (value / max) * 100;
// // //   const width = pct * localT;
// // //   return (
// // //     <div style={{ opacity: clamp(localT * 2, 0, 1) }}>
// // //       <div className="flex items-baseline justify-between mb-1.5">
// // //         <span className="text-xs font-medium text-slate-500">{label}</span>
// // //         <span
// // //           className="text-lg font-bold tabular-nums"
// // //           style={{ color: INK }}
// // //         >
// // //           {display}
// // //           <span className="text-xs font-semibold text-slate-400">
// // //             {suffix}
// // //           </span>
// // //         </span>
// // //       </div>
// // //       <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
// // //         <div
// // //           className="h-full rounded-full"
// // //           style={{ width: `${clamp(width, 0, 100)}%`, backgroundColor: ACCENT }}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function MiniBarChart({ values, labels, t, delay = 0 }) {
// // //   const max = Math.max(...values);
// // //   return (
// // //     <div className="flex items-end gap-3 h-28">
// // //       {values.map((v, i) => {
// // //         const barT = clamp((t - delay - i * 0.08) / 0.4, 0, 1);
// // //         const h = (v / max) * 100 * easeOutCubic(barT);
// // //         return (
// // //           <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
// // //             <div className="w-full h-24 flex items-end">
// // //               <div
// // //                 className="w-full rounded-t-sm"
// // //                 style={{
// // //                   height: `${h}%`,
// // //                   backgroundColor: i === values.length - 1 ? ACCENT : "#99F6E4",
// // //                 }}
// // //               />
// // //             </div>
// // //             <span className="text-[10px] text-slate-400 font-medium">
// // //               {labels[i]}
// // //             </span>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // }

// // // function Sparkline({ t, delay = 0 }) {
// // //   const points = [8, 22, 18, 34, 30, 46, 42, 58, 54, 70, 66, 82];
// // //   const w = 220;
// // //   const h = 70;
// // //   const step = w / (points.length - 1);
// // //   const coords = points.map((p, i) => [i * step, h - (p / 100) * h]);
// // //   const path = coords
// // //     .map((c, i) => `${i === 0 ? "M" : "L"}${c[0].toFixed(1)},${c[1].toFixed(1)}`)
// // //     .join(" ");

// // //   const localT = clamp((t - delay) / 0.6, 0, 1);
// // //   const dashLen = 420;

// // //   return (
// // //     <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
// // //       <path
// // //         d={path}
// // //         fill="none"
// // //         stroke={ACCENT}
// // //         strokeWidth="2.5"
// // //         strokeLinecap="round"
// // //         strokeLinejoin="round"
// // //         strokeDasharray={dashLen}
// // //         strokeDashoffset={dashLen * (1 - localT)}
// // //       />
// // //       {localT > 0.95 && (
// // //         <circle
// // //           cx={coords[coords.length - 1][0]}
// // //           cy={coords[coords.length - 1][1]}
// // //           r="3.5"
// // //           fill={ACCENT}
// // //         />
// // //       )}
// // //     </svg>
// // //   );
// // // }

// // // /* ---------------- slide layout shell ---------------- */

// // // function SlideShell({ index, t, eyebrow, title, children }) {
// // //   const headingT = clamp(t / 0.35, 0, 1);
// // //   return (
// // //     <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-14 items-center">
// // //       <div
// // //         style={{
// // //           opacity: headingT,
// // //           transform: `translateY(${(1 - headingT) * 16}px)`,
// // //         }}
// // //       >
// // //         <div className="flex items-center gap-3 mb-4">
// // //           <span
// // //             className="text-xs font-bold tracking-widest"
// // //             style={{ color: ACCENT }}
// // //           >
// // //             {String(index + 1).padStart(2, "0")} / 05
// // //           </span>
// // //           <span className="h-px flex-1 bg-slate-200" />
// // //         </div>
// // //         <h3 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
// // //           {title}
// // //         </h3>
// // //       </div>
// // //       <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
// // //         {children}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // /* ---------------- 5 slides ---------------- */

// // // function SettlementSlide({ t }) {
// // //   const hrs = countUp(48, 1, clamp((t - 0.15) / 0.6, 0, 1), 0);
// // //   const settlements = [
// // //     { amount: "₹2.4L", date: "Jan 15" },
// // //     { amount: "₹1.8L", date: "Jan 14" },
// // //     { amount: "₹3.1L", date: "Jan 13" },
// // //     { amount: "₹2.7L", date: "Jan 12" },
// // //   ];
// // //   return (
// // //     <SlideShell
// // //       index={0}
// // //       t={t}
// // //       title={
// // //         <>
// // //           Payouts settle in
// // //           <span style={{ color: ACCENT }}> hours, not days.</span>
// // //         </>
// // //       }
// // //     >
// // //       <div className="mb-5">
// // //         <p className="text-xs text-slate-500 mb-1">Avg. settlement time</p>
// // //         <p className="text-4xl font-black tabular-nums" style={{ color: INK }}>
// // //           {hrs}
// // //           <span className="text-base font-semibold text-slate-400"> hr</span>
// // //           <span className="text-sm font-medium text-slate-400 ml-2">
// // //             was 48 hr
// // //           </span>
// // //         </p>
// // //       </div>
// // //       <div className="space-y-2">
// // //         {settlements.map((s, i) => {
// // //           const rowT = clamp((t - 0.3 - i * 0.1) / 0.3, 0, 1);
// // //           const done = rowT > 0.6;
// // //           return (
// // //             <div
// // //               key={i}
// // //               className="flex items-center justify-between border-t border-slate-100 pt-2 first:border-t-0 first:pt-0"
// // //               style={{ opacity: clamp(rowT + 0.25, 0, 1) }}
// // //             >
// // //               <div>
// // //                 <p className="text-sm font-semibold text-slate-800 tabular-nums">
// // //                   {s.amount}
// // //                 </p>
// // //                 <p className="text-[10px] text-slate-400">{s.date}</p>
// // //               </div>
// // //               <span
// // //                 className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-full px-2 py-0.5"
// // //                 style={{
// // //                   backgroundColor: done ? ACCENT_SOFT : "#FEF3C7",
// // //                   color: done ? "#0F766E" : "#B45309",
// // //                 }}
// // //               >
// // //                 <CheckCircle2 className="w-3 h-3" />
// // //                 {done ? "Instant" : "Processing"}
// // //               </span>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>
// // //     </SlideShell>
// // //   );
// // // }

// // // function InfraSlide({ t }) {
// // //   const uptime = countUp(90, 99.99, clamp((t - 0.2) / 0.6, 0, 1), 2);
// // //   const latency = countUp(400, 80, clamp((t - 0.35) / 0.6, 0, 1), 0);
// // //   return (
// // //     <SlideShell
// // //       index={1}
// // //       t={t}
// // //       title={
// // //         <>
// // //           Built on
// // //           <span style={{ color: ACCENT }}> infrastructure that doesn't blink.</span>
// // //         </>
// // //       }
// // //     >
// // //       <div className="mb-6">
// // //         <div className="flex items-baseline justify-between mb-1">
// // //           <span className="text-xs font-medium text-slate-500">
// // //             Platform uptime
// // //           </span>
// // //           <span className="text-2xl font-black tabular-nums" style={{ color: INK }}>
// // //             {uptime}
// // //             <span className="text-xs font-semibold text-slate-400">%</span>
// // //           </span>
// // //         </div>
// // //         <Sparkline t={t} delay={0.15} />
// // //       </div>
// // //       <ProgressBar
// // //         label="API response time"
// // //         value={Number(latency)}
// // //         display={latency}
// // //         suffix=" ms"
// // //         max={400}
// // //         delay={0.4}
// // //         t={t}
// // //         invert
// // //       />
// // //     </SlideShell>
// // //   );
// // // }

// // // function SupportSlide({ t }) {
// // //   const response = countUp(30, 2, clamp((t - 0.2) / 0.6, 0, 1), 0);
// // //   const resolution = countUp(70, 98, clamp((t - 0.35) / 0.6, 0, 1), 0);
// // //   return (
// // //     <SlideShell
// // //       index={2}
// // //       t={t}
// // //       title={
// // //         <>
// // //           Support that
// // //           <span style={{ color: ACCENT }}> answers before you finish typing.</span>
// // //         </>
// // //       }
// // //     >
// // //       <div className="space-y-6">
// // //         <ProgressBar
// // //           label="Avg. response time"
// // //           value={Number(response)}
// // //           display={response}
// // //           suffix=" min"
// // //           max={30}
// // //           delay={0.15}
// // //           t={t}
// // //           invert
// // //         />
// // //         <ProgressBar
// // //           label="First-contact resolution"
// // //           value={Number(resolution)}
// // //           display={resolution}
// // //           suffix="%"
// // //           max={100}
// // //           delay={0.35}
// // //           t={t}
// // //         />
// // //       </div>
// // //     </SlideShell>
// // //   );
// // // }

// // // function ScaleSlide({ t }) {
// // //   const merchants = countUp(8234, 52000, clamp((t - 0.2) / 0.6, 0, 1), 0);
// // //   const tps = countUp(120, 4800, clamp((t - 0.35) / 0.6, 0, 1), 0);
// // //   return (
// // //     <SlideShell
// // //       index={3}
// // //       t={t}
// // //       title={
// // //         <>
// // //           One platform,
// // //           <span style={{ color: ACCENT }}> built to scale with you.</span>
// // //         </>
// // //       }
// // //     >
// // //       <div className="mb-5">
// // //         <p className="text-xs text-slate-500 mb-2">Merchants onboarded / quarter</p>
// // //         <MiniBarChart
// // //           values={[12, 18, 27, 41, 63, 100]}
// // //           labels={["Q1", "Q2", "Q3", "Q4", "Q5", "Now"]}
// // //           t={t}
// // //           delay={0.1}
// // //         />
// // //       </div>
// // //       <div className="flex items-end justify-between border-t border-slate-100 pt-4">
// // //         <div>
// // //           <p className="text-xs text-slate-500">Active merchants</p>
// // //           <p className="text-2xl font-black tabular-nums" style={{ color: INK }}>
// // //             {merchants}
// // //             <span className="text-xs font-semibold text-slate-400">+</span>
// // //           </p>
// // //         </div>
// // //         <div className="text-right">
// // //           <p className="text-xs text-slate-500">Transactions / sec</p>
// // //           <p className="text-2xl font-black tabular-nums" style={{ color: ACCENT }}>
// // //             {tps}
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </SlideShell>
// // //   );
// // // }

// // // function OnboardingSlide({ t }) {
// // //   const minutes = countUp(0, 15, clamp((t - 0.15) / 0.5, 0, 1), 0);
// // //   const steps = ["Sign up online", "Verify KYC instantly", "Get API keys", "Go live"];
// // //   const lineT = clamp((t - 0.25) / 0.6, 0, 1);
// // //   return (
// // //     <SlideShell
// // //       index={4}
// // //       t={t}
// // //       title={
// // //         <>
// // //           Go live
// // //           <span style={{ color: ACCENT }}> in minutes, not weeks.</span>
// // //         </>
// // //       }
// // //     >
// // //       <div className="mb-6">
// // //         <p className="text-xs text-slate-500 mb-1">Time to go live</p>
// // //         <p className="text-4xl font-black tabular-nums" style={{ color: INK }}>
// // //           {minutes}
// // //           <span className="text-base font-semibold text-slate-400"> min</span>
// // //         </p>
// // //       </div>

// // //       <div className="relative pl-4">
// // //         <div className="absolute left-[7px] top-1 bottom-1 w-px bg-slate-100" />
// // //         <div
// // //           className="absolute left-[7px] top-1 w-px"
// // //           style={{
// // //             height: `calc(${lineT * 100}% - 4px)`,
// // //             backgroundColor: ACCENT,
// // //           }}
// // //         />
// // //         <div className="space-y-4">
// // //           {steps.map((s, i) => {
// // //             const st = clamp((t - 0.3 - i * 0.15) / 0.25, 0, 1);
// // //             const active = st > 0.5;
// // //             return (
// // //               <div
// // //                 key={i}
// // //                 className="flex items-center gap-3 relative"
// // //                 style={{ opacity: clamp(st + 0.3, 0, 1) }}
// // //               >
// // //                 <span
// // //                   className="w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 -ml-[3px] z-10"
// // //                   style={{
// // //                     borderColor: active ? ACCENT : "#CBD5E1",
// // //                     backgroundColor: active ? ACCENT : "#fff",
// // //                   }}
// // //                 />
// // //                 <p className="text-sm font-medium text-slate-700">{s}</p>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </SlideShell>
// // //   );
// // // }

// // // function renderSlide(index, t) {
// // //   switch (index) {
// // //     case 0:
// // //       return <SettlementSlide t={t} />;
// // //     case 1:
// // //       return <InfraSlide t={t} />;
// // //     case 2:
// // //       return <SupportSlide t={t} />;
// // //     case 3:
// // //       return <ScaleSlide t={t} />;
// // //     case 4:
// // //       return <OnboardingSlide t={t} />;
// // //     default:
// // //       return null;
// // //   }
// // // }

// // // /* ---------------- main component ---------------- */

// // // const Benefits = () => {
// // //   const wrapperRef = useRef(null);
// // //   const [progress, setProgress] = useState(0);

// // //   useEffect(() => {
// // //     let rafId = null;

// // //     const measure = () => {
// // //       const el = wrapperRef.current;
// // //       if (!el) return;
// // //       const rect = el.getBoundingClientRect();
// // //       const scrollable = rect.height - window.innerHeight;
// // //       const scrolled = -rect.top;
// // //       const p = scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0;
// // //       setProgress(p);
// // //     };

// // //     const onScroll = () => {
// // //       if (rafId) return;
// // //       rafId = requestAnimationFrame(() => {
// // //         rafId = null;
// // //         measure();
// // //       });
// // //     };

// // //     measure();
// // //     window.addEventListener("scroll", onScroll, { passive: true });
// // //     window.addEventListener("resize", onScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", onScroll);
// // //       window.removeEventListener("resize", onScroll);
// // //       if (rafId) cancelAnimationFrame(rafId);
// // //     };
// // //   }, []);

// // //   const slideFloat = progress * NUM_SLIDES;
// // //   const activePct = Math.round(progress * 100);

// // //   return (
// // //     <section className="relative bg-white text-slate-800">
// // //       {/* Intro (100vh, normal scroll) */}
// // //       <div className="h-screen flex flex-col items-center justify-center px-6 bg-[#F8FAFC]">
// // //         <span
// // //           className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
// // //           style={{ color: ACCENT }}
// // //         >
// // //           Abheepay Platform
// // //         </span>
// // //         <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-4 max-w-2xl">
// // //           A powerful dashboard behind every transaction
// // //         </h2>
// // //         <p className="text-slate-500 text-sm md:text-base mb-10 text-center max-w-md">
// // //           Scroll to see the metrics that keep merchants running.
// // //         </p>
// // //         <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
// // //       </div>

// // //       {/* Pinned scroll-driven section */}
// // //       <div
// // //         ref={wrapperRef}
// // //         style={{ height: `calc(${NUM_SLIDES * SLIDE_VH}vh + 100vh)` }}
// // //         className="relative"
// // //       >
// // //         <div className="sticky top-0 h-screen overflow-hidden bg-[#F8FAFC]">
// // //           {/* top progress bar */}
// // //           <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 z-40">
// // //             <div
// // //               className="h-full"
// // //               style={{ width: `${progress * 100}%`, backgroundColor: ACCENT }}
// // //             />
// // //           </div>

// // //           {/* slide label + counter, top */}
// // //           <div className="absolute top-6 left-0 right-0 flex items-center justify-center gap-3 z-30 pointer-events-none">
// // //             <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
// // //               {slideMeta[clamp(Math.floor(slideFloat), 0, NUM_SLIDES - 1)].label}
// // //             </span>
// // //           </div>

// // //           {/* progress rail, right */}
// // //           <div className="hidden md:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-30">
// // //             {[0, 20, 40, 60, 80, 100].map((pct) => {
// // //               const isActive = Math.abs(activePct - pct) < 10;
// // //               return (
// // //                 <div key={pct} className="flex items-center gap-2 justify-end">
// // //                   <span
// // //                     className={`text-[10px] font-semibold tabular-nums transition-colors ${
// // //                       isActive ? "" : "text-slate-300"
// // //                     }`}
// // //                     style={isActive ? { color: ACCENT } : undefined}
// // //                   >
// // //                     {pct}
// // //                   </span>
// // //                   <span
// // //                     className="w-4 h-px transition-all"
// // //                     style={{
// // //                       backgroundColor: isActive ? ACCENT : "#CBD5E1",
// // //                       width: isActive ? "20px" : "16px",
// // //                     }}
// // //                   />
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>

// // //           {slideMeta.map((meta, i) => {
// // //             const local = slideFloat - i;
// // //             const isLast = i === NUM_SLIDES - 1;
// // //             let opacity;
// // //             let translateY;

// // //             if (local < -TRANS) {
// // //               opacity = 0;
// // //               translateY = 20;
// // //             } else if (local < 0) {
// // //               const tt = (local + TRANS) / TRANS;
// // //               opacity = clamp(tt, 0, 1);
// // //               translateY = (1 - opacity) * 20;
// // //             } else if (isLast || local < 1 - TRANS) {
// // //               opacity = 1;
// // //               translateY = 0;
// // //             } else if (local < 1) {
// // //               const tt = (1 - local) / TRANS;
// // //               opacity = clamp(tt, 0, 1);
// // //               translateY = -(1 - opacity) * 20;
// // //             } else {
// // //               opacity = 0;
// // //               translateY = -20;
// // //             }

// // //             const localT = clamp(local, 0, 1);

// // //             return (
// // //               <div
// // //                 key={i}
// // //                 className="absolute inset-0 flex items-center justify-center px-6"
// // //                 style={{
// // //                   opacity,
// // //                   transform: `translateY(${translateY}px)`,
// // //                   zIndex: 10 + i,
// // //                   pointerEvents: opacity > 0.5 ? "auto" : "none",
// // //                 }}
// // //               >
// // //                 {renderSlide(i, localT)}
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>

// // //       {/* Outro */}
// // //       <div className="h-[60vh] flex flex-col items-center justify-center px-6 bg-white border-t border-slate-100">
// // //         <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 text-center">
// // //           Ready to power your business?
// // //         </h3>
// // //         <p className="text-slate-500 text-sm mb-6 text-center max-w-md">
// // //           Join thousands of merchants growing with Abheepay's payment
// // //           infrastructure.
// // //         </p>
// // //         <button
// // //           className="text-white font-semibold px-6 py-3 rounded-xl text-sm transition-opacity hover:opacity-90"
// // //           style={{ backgroundColor: ACCENT }}
// // //         >
// // //           Get Started
// // //         </button>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Benefits;










// // import React, { useEffect, useRef, useState } from "react";
// // import { ChevronDown, CheckCircle2 } from "lucide-react";

// // /* ---------------- config ---------------- */
// // const NUM_SLIDES = 5;
// // const SLIDE_VH = 160;
// // const TRANS = 0.3;

// // const ACCENT = "#0D9488"; // teal-600, single professional accent throughout
// // const ACCENT_SOFT = "#CCFBF1";
// // const INK = "#0F172A"; // slate-900

// // const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
// // const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// // function countUp(from, to, t, decimals = 0) {
// //   const eased = easeOutCubic(clamp(t, 0, 1));
// //   const val = from + (to - from) * eased;
// //   return decimals > 0
// //     ? val.toFixed(decimals)
// //     : Math.round(val).toLocaleString();
// // }

// // const slideMeta = [
// //   { key: "01", label: "Faster Settlement" },
// //   { key: "02", label: "Infrastructure" },
// //   { key: "03", label: "Better Support" },
// //   { key: "04", label: "Scalable Platform" },
// //   { key: "05", label: "Easy Onboarding" },
// // ];

// // /* ---------------- reusable chart primitives ---------------- */

// // function ProgressBar({ label, value, display, suffix, max, delay, t, invert }) {
// //   const localT = clamp((t - delay) / 0.55, 0, 1);
// //   const pct = invert ? 100 - (value / max) * 100 : (value / max) * 100;
// //   const width = pct * localT;
// //   return (
// //     <div style={{ opacity: clamp(localT * 2, 0, 1) }}>
// //       <div className="flex items-baseline justify-between mb-1.5">
// //         <span className="text-xs font-medium text-slate-500">{label}</span>
// //         <span
// //           className="text-base font-bold tabular-nums"
// //           style={{ color: INK }}
// //         >
// //           {display}
// //           <span className="text-xs font-semibold text-slate-400">
// //             {suffix}
// //           </span>
// //         </span>
// //       </div>
// //       <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
// //         <div
// //           className="h-full rounded-full"
// //           style={{ width: `${clamp(width, 0, 100)}%`, backgroundColor: ACCENT }}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // function MiniBarChart({ values, labels, t, delay = 0 }) {
// //   const max = Math.max(...values);
// //   return (
// //     <div className="flex items-end gap-2.5 h-24">
// //       {values.map((v, i) => {
// //         const barT = clamp((t - delay - i * 0.08) / 0.4, 0, 1);
// //         const h = (v / max) * 100 * easeOutCubic(barT);
// //         return (
// //           <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
// //             <div className="w-full h-20 flex items-end">
// //               <div
// //                 className="w-full rounded-t-sm"
// //                 style={{
// //                   height: `${h}%`,
// //                   backgroundColor: i === values.length - 1 ? ACCENT : "#99F6E4",
// //                 }}
// //               />
// //             </div>
// //             <span className="text-[10px] text-slate-400 font-medium">
// //               {labels[i]}
// //             </span>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // function Sparkline({ t, delay = 0 }) {
// //   const points = [8, 22, 18, 34, 30, 46, 42, 58, 54, 70, 66, 82];
// //   const w = 220;
// //   const h = 70;
// //   const step = w / (points.length - 1);
// //   const coords = points.map((p, i) => [i * step, h - (p / 100) * h]);
// //   const path = coords
// //     .map((c, i) => `${i === 0 ? "M" : "L"}${c[0].toFixed(1)},${c[1].toFixed(1)}`)
// //     .join(" ");

// //   const localT = clamp((t - delay) / 0.6, 0, 1);
// //   const dashLen = 420;

// //   return (
// //     <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
// //       <path
// //         d={path}
// //         fill="none"
// //         stroke={ACCENT}
// //         strokeWidth="2.5"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         strokeDasharray={dashLen}
// //         strokeDashoffset={dashLen * (1 - localT)}
// //       />
// //       {localT > 0.95 && (
// //         <circle
// //           cx={coords[coords.length - 1][0]}
// //           cy={coords[coords.length - 1][1]}
// //           r="3.5"
// //           fill={ACCENT}
// //         />
// //       )}
// //     </svg>
// //   );
// // }

// // /* ---------------- slide layout shell ---------------- */

// // function SlideShell({ index, t, eyebrow, title, children }) {
// //   const headingT = clamp(t / 0.35, 0, 1);
// //   return (
// //     <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-11 items-center">
// //       <div
// //         style={{
// //           opacity: headingT,
// //           transform: `translateY(${(1 - headingT) * 16}px)`,
// //         }}
// //       >
// //         <div className="flex items-center gap-3 mb-4">
// //           <span
// //             className="text-xs font-bold tracking-widest"
// //             style={{ color: ACCENT }}
// //           >
// //             {String(index + 1).padStart(2, "0")} / 05
// //           </span>
// //           <span className="h-px flex-1 bg-slate-200" />
// //         </div>
// //         <h3 className="text-xl md:text-3xl font-bold text-slate-900 leading-tight">
// //           {title}
// //         </h3>
// //       </div>
// //       <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
// //         {children}
// //       </div>
// //     </div>
// //   );
// // }

// // /* ---------------- 5 slides ---------------- */

// // function SettlementSlide({ t }) {
// //   const hrs = countUp(48, 1, clamp((t - 0.15) / 0.6, 0, 1), 0);
// //   const settlements = [
// //     { amount: "₹2.4L", date: "Jan 15" },
// //     { amount: "₹1.8L", date: "Jan 14" },
// //     { amount: "₹3.1L", date: "Jan 13" },
// //     { amount: "₹2.7L", date: "Jan 12" },
// //   ];
// //   return (
// //     <SlideShell
// //       index={0}
// //       t={t}
// //       title={
// //         <>
// //           Payouts settle in
// //           <span style={{ color: ACCENT }}> hours, not days.</span>
// //         </>
// //       }
// //     >
// //       <div className="mb-5">
// //         <p className="text-xs text-slate-500 mb-1">Avg. settlement time</p>
// //         <p className="text-3xl font-black tabular-nums" style={{ color: INK }}>
// //           {hrs}
// //           <span className="text-base font-semibold text-slate-400"> hr</span>
// //           <span className="text-sm font-medium text-slate-400 ml-2">
// //             was 48 hr
// //           </span>
// //         </p>
// //       </div>
// //       <div className="space-y-2">
// //         {settlements.map((s, i) => {
// //           const rowT = clamp((t - 0.3 - i * 0.1) / 0.3, 0, 1);
// //           const done = rowT > 0.6;
// //           return (
// //             <div
// //               key={i}
// //               className="flex items-center justify-between border-t border-slate-100 pt-2 first:border-t-0 first:pt-0"
// //               style={{ opacity: clamp(rowT + 0.25, 0, 1) }}
// //             >
// //               <div>
// //                 <p className="text-sm font-semibold text-slate-800 tabular-nums">
// //                   {s.amount}
// //                 </p>
// //                 <p className="text-[10px] text-slate-400">{s.date}</p>
// //               </div>
// //               <span
// //                 className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-full px-2 py-0.5"
// //                 style={{
// //                   backgroundColor: done ? ACCENT_SOFT : "#FEF3C7",
// //                   color: done ? "#0F766E" : "#B45309",
// //                 }}
// //               >
// //                 <CheckCircle2 className="w-3 h-3" />
// //                 {done ? "Instant" : "Processing"}
// //               </span>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </SlideShell>
// //   );
// // }

// // function InfraSlide({ t }) {
// //   const uptime = countUp(90, 99.99, clamp((t - 0.2) / 0.6, 0, 1), 2);
// //   const latency = countUp(400, 80, clamp((t - 0.35) / 0.6, 0, 1), 0);
// //   return (
// //     <SlideShell
// //       index={1}
// //       t={t}
// //       title={
// //         <>
// //           Built on
// //           <span style={{ color: ACCENT }}> infrastructure that doesn't blink.</span>
// //         </>
// //       }
// //     >
// //       <div className="mb-6">
// //         <div className="flex items-baseline justify-between mb-1">
// //           <span className="text-xs font-medium text-slate-500">
// //             Platform uptime
// //           </span>
// //           <span className="text-xl font-black tabular-nums" style={{ color: INK }}>
// //             {uptime}
// //             <span className="text-xs font-semibold text-slate-400">%</span>
// //           </span>
// //         </div>
// //         <Sparkline t={t} delay={0.15} />
// //       </div>
// //       <ProgressBar
// //         label="API response time"
// //         value={Number(latency)}
// //         display={latency}
// //         suffix=" ms"
// //         max={400}
// //         delay={0.4}
// //         t={t}
// //         invert
// //       />
// //     </SlideShell>
// //   );
// // }

// // function SupportSlide({ t }) {
// //   const response = countUp(30, 2, clamp((t - 0.2) / 0.6, 0, 1), 0);
// //   const resolution = countUp(70, 98, clamp((t - 0.35) / 0.6, 0, 1), 0);
// //   return (
// //     <SlideShell
// //       index={2}
// //       t={t}
// //       title={
// //         <>
// //           Support that
// //           <span style={{ color: ACCENT }}> answers before you finish typing.</span>
// //         </>
// //       }
// //     >
// //       <div className="space-y-6">
// //         <ProgressBar
// //           label="Avg. response time"
// //           value={Number(response)}
// //           display={response}
// //           suffix=" min"
// //           max={30}
// //           delay={0.15}
// //           t={t}
// //           invert
// //         />
// //         <ProgressBar
// //           label="First-contact resolution"
// //           value={Number(resolution)}
// //           display={resolution}
// //           suffix="%"
// //           max={100}
// //           delay={0.35}
// //           t={t}
// //         />
// //       </div>
// //     </SlideShell>
// //   );
// // }

// // function ScaleSlide({ t }) {
// //   const merchants = countUp(8234, 52000, clamp((t - 0.2) / 0.6, 0, 1), 0);
// //   const tps = countUp(120, 4800, clamp((t - 0.35) / 0.6, 0, 1), 0);
// //   return (
// //     <SlideShell
// //       index={3}
// //       t={t}
// //       title={
// //         <>
// //           One platform,
// //           <span style={{ color: ACCENT }}> built to scale with you.</span>
// //         </>
// //       }
// //     >
// //       <div className="mb-5">
// //         <p className="text-xs text-slate-500 mb-2">Merchants onboarded / quarter</p>
// //         <MiniBarChart
// //           values={[12, 18, 27, 41, 63, 100]}
// //           labels={["Q1", "Q2", "Q3", "Q4", "Q5", "Now"]}
// //           t={t}
// //           delay={0.1}
// //         />
// //       </div>
// //       <div className="flex items-end justify-between border-t border-slate-100 pt-4">
// //         <div>
// //           <p className="text-xs text-slate-500">Active merchants</p>
// //           <p className="text-xl font-black tabular-nums" style={{ color: INK }}>
// //             {merchants}
// //             <span className="text-xs font-semibold text-slate-400">+</span>
// //           </p>
// //         </div>
// //         <div className="text-right">
// //           <p className="text-xs text-slate-500">Transactions / sec</p>
// //           <p className="text-xl font-black tabular-nums" style={{ color: ACCENT }}>
// //             {tps}
// //           </p>
// //         </div>
// //       </div>
// //     </SlideShell>
// //   );
// // }

// // function OnboardingSlide({ t }) {
// //   const minutes = countUp(0, 15, clamp((t - 0.15) / 0.5, 0, 1), 0);
// //   const steps = ["Sign up online", "Verify KYC instantly", "Get API keys", "Go live"];
// //   const lineT = clamp((t - 0.25) / 0.6, 0, 1);
// //   return (
// //     <SlideShell
// //       index={4}
// //       t={t}
// //       title={
// //         <>
// //           Go live
// //           <span style={{ color: ACCENT }}> in minutes, not weeks.</span>
// //         </>
// //       }
// //     >
// //       <div className="mb-6">
// //         <p className="text-xs text-slate-500 mb-1">Time to go live</p>
// //         <p className="text-3xl font-black tabular-nums" style={{ color: INK }}>
// //           {minutes}
// //           <span className="text-base font-semibold text-slate-400"> min</span>
// //         </p>
// //       </div>

// //       <div className="relative pl-4">
// //         <div className="absolute left-[6px] top-1 bottom-1 w-px bg-slate-100" />
// //         <div
// //           className="absolute left-[6px] top-1 w-px"
// //           style={{
// //             height: `calc(${lineT * 100}% - 4px)`,
// //             backgroundColor: ACCENT,
// //           }}
// //         />
// //         <div className="space-y-4">
// //           {steps.map((s, i) => {
// //             const st = clamp((t - 0.3 - i * 0.15) / 0.25, 0, 1);
// //             const active = st > 0.5;
// //             return (
// //               <div
// //                 key={i}
// //                 className="flex items-center gap-3 relative"
// //                 style={{ opacity: clamp(st + 0.3, 0, 1) }}
// //               >
// //                 <span
// //                   className="w-3 h-3 rounded-full border-2 flex-shrink-0 -ml-[3px] z-10"
// //                   style={{
// //                     borderColor: active ? ACCENT : "#CBD5E1",
// //                     backgroundColor: active ? ACCENT : "#fff",
// //                   }}
// //                 />
// //                 <p className="text-sm font-medium text-slate-700">{s}</p>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </SlideShell>
// //   );
// // }

// // function renderSlide(index, t) {
// //   switch (index) {
// //     case 0:
// //       return <SettlementSlide t={t} />;
// //     case 1:
// //       return <InfraSlide t={t} />;
// //     case 2:
// //       return <SupportSlide t={t} />;
// //     case 3:
// //       return <ScaleSlide t={t} />;
// //     case 4:
// //       return <OnboardingSlide t={t} />;
// //     default:
// //       return null;
// //   }
// // }

// // /* ---------------- main component ---------------- */

// // const Benefits = () => {
// //   const wrapperRef = useRef(null);
// //   const [progress, setProgress] = useState(0);

// //   useEffect(() => {
// //     let rafId = null;

// //     const measure = () => {
// //       const el = wrapperRef.current;
// //       if (!el) return;
// //       const rect = el.getBoundingClientRect();
// //       const scrollable = rect.height - window.innerHeight;
// //       const scrolled = -rect.top;
// //       const p = scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0;
// //       setProgress(p);
// //     };

// //     const onScroll = () => {
// //       if (rafId) return;
// //       rafId = requestAnimationFrame(() => {
// //         rafId = null;
// //         measure();
// //       });
// //     };

// //     measure();
// //     window.addEventListener("scroll", onScroll, { passive: true });
// //     window.addEventListener("resize", onScroll);
// //     return () => {
// //       window.removeEventListener("scroll", onScroll);
// //       window.removeEventListener("resize", onScroll);
// //       if (rafId) cancelAnimationFrame(rafId);
// //     };
// //   }, []);

// //   const slideFloat = progress * NUM_SLIDES;
// //   const activePct = Math.round(progress * 100);

// //   return (
// //     <section className="relative bg-white text-slate-800">
// //       {/* Intro (100vh, normal scroll) */}
// //       <div className="h-screen flex flex-col items-center justify-center px-6 bg-[#F8FAFC]">
// //         <span
// //           className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
// //           style={{ color: ACCENT }}
// //         >
// //           Abheepay Platform
// //         </span>
// //         <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-3 max-w-xl">
// //           A powerful dashboard behind every transaction
// //         </h2>
// //         <p className="text-slate-500 text-xs md:text-sm mb-8 text-center max-w-sm">
// //           Scroll to see the metrics that keep merchants running.
// //         </p>
// //         <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
// //       </div>

// //       {/* Pinned scroll-driven section */}
// //       <div
// //         ref={wrapperRef}
// //         style={{ height: `calc(${NUM_SLIDES * SLIDE_VH}vh + 100vh)` }}
// //         className="relative"
// //       >
// //         <div className="sticky top-0 h-screen overflow-hidden bg-[#F8FAFC]">
// //           {/* top progress bar */}
// //           <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 z-40">
// //             <div
// //               className="h-full"
// //               style={{ width: `${progress * 100}%`, backgroundColor: ACCENT }}
// //             />
// //           </div>

// //           {/* slide label + counter, top */}
// //           <div className="absolute top-6 left-0 right-0 flex items-center justify-center gap-3 z-30 pointer-events-none">
// //             <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
// //               {slideMeta[clamp(Math.floor(slideFloat), 0, NUM_SLIDES - 1)].label}
// //             </span>
// //           </div>

// //           {/* progress rail, right */}
// //           <div className="hidden md:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-30">
// //             {[0, 20, 40, 60, 80, 100].map((pct) => {
// //               const isActive = Math.abs(activePct - pct) < 10;
// //               return (
// //                 <div key={pct} className="flex items-center gap-2 justify-end">
// //                   <span
// //                     className={`text-[10px] font-semibold tabular-nums transition-colors ${
// //                       isActive ? "" : "text-slate-300"
// //                     }`}
// //                     style={isActive ? { color: ACCENT } : undefined}
// //                   >
// //                     {pct}
// //                   </span>
// //                   <span
// //                     className="w-4 h-px transition-all"
// //                     style={{
// //                       backgroundColor: isActive ? ACCENT : "#CBD5E1",
// //                       width: isActive ? "20px" : "16px",
// //                     }}
// //                   />
// //                 </div>
// //               );
// //             })}
// //           </div>

// //           {slideMeta.map((meta, i) => {
// //             const local = slideFloat - i;
// //             const isLast = i === NUM_SLIDES - 1;
// //             let opacity;
// //             let translateY;

// //             if (local < -TRANS) {
// //               opacity = 0;
// //               translateY = 20;
// //             } else if (local < 0) {
// //               const tt = (local + TRANS) / TRANS;
// //               opacity = clamp(tt, 0, 1);
// //               translateY = (1 - opacity) * 20;
// //             } else if (isLast || local < 1 - TRANS) {
// //               opacity = 1;
// //               translateY = 0;
// //             } else if (local < 1) {
// //               const tt = (1 - local) / TRANS;
// //               opacity = clamp(tt, 0, 1);
// //               translateY = -(1 - opacity) * 20;
// //             } else {
// //               opacity = 0;
// //               translateY = -20;
// //             }

// //             const localT = clamp(local, 0, 1);

// //             return (
// //               <div
// //                 key={i}
// //                 className="absolute inset-0 flex items-center justify-center px-6"
// //                 style={{
// //                   opacity,
// //                   transform: `translateY(${translateY}px)`,
// //                   zIndex: 10 + i,
// //                   pointerEvents: opacity > 0.5 ? "auto" : "none",
// //                 }}
// //               >
// //                 {renderSlide(i, localT)}
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>

// //       {/* Outro */}
// //       <div className="h-[48vh] flex flex-col items-center justify-center px-6 bg-white border-t border-slate-100">
// //         <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 text-center">
// //           Ready to power your business?
// //         </h3>
// //         <p className="text-slate-500 text-xs mb-5 text-center max-w-sm">
// //           Join thousands of merchants growing with Abheepay's payment
// //           infrastructure.
// //         </p>
// //         <button
// //           className="text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-opacity hover:opacity-90"
// //           style={{ backgroundColor: ACCENT }}
// //         >
// //           Get Started
// //         </button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Benefits;







// import React, { useEffect, useRef, useState } from "react";
// import { ChevronDown, CheckCircle2 } from "lucide-react";

// /* ---------------- config ---------------- */
// const NUM_SLIDES = 5;
// const SLIDE_VH = 160;
// const TRANS = 0.3;
// const NAV_HEIGHT = 80; // adjust to match your site's fixed navbar height in px

// const ACCENT = "#0D9488"; // teal-600, single professional accent throughout
// const ACCENT_SOFT = "#CCFBF1";
// const INK = "#0F172A"; // slate-900

// const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
// const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// function countUp(from, to, t, decimals = 0) {
//   const eased = easeOutCubic(clamp(t, 0, 1));
//   const val = from + (to - from) * eased;
//   return decimals > 0
//     ? val.toFixed(decimals)
//     : Math.round(val).toLocaleString();
// }

// const slideMeta = [
//   { key: "01", label: "Faster Settlement" },
//   { key: "02", label: "Infrastructure" },
//   { key: "03", label: "Better Support" },
//   { key: "04", label: "Scalable Platform" },
//   { key: "05", label: "Easy Onboarding" },
// ];

// /* ---------------- reusable chart primitives ---------------- */

// function ProgressBar({ label, value, display, suffix, max, delay, t, invert }) {
//   const localT = clamp((t - delay) / 0.55, 0, 1);
//   const pct = invert ? 100 - (value / max) * 100 : (value / max) * 100;
//   const width = pct * localT;
//   return (
//     <div style={{ opacity: clamp(localT * 2, 0, 1) }}>
//       <div className="flex items-baseline justify-between mb-1.5">
//         <span className="text-xs font-medium text-slate-500">{label}</span>
//         <span
//           className="text-base font-bold tabular-nums"
//           style={{ color: INK }}
//         >
//           {display}
//           <span className="text-xs font-semibold text-slate-400">
//             {suffix}
//           </span>
//         </span>
//       </div>
//       <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
//         <div
//           className="h-full rounded-full"
//           style={{ width: `${clamp(width, 0, 100)}%`, backgroundColor: ACCENT }}
//         />
//       </div>
//     </div>
//   );
// }

// function MiniBarChart({ values, labels, t, delay = 0 }) {
//   const max = Math.max(...values);
//   return (
//     <div className="flex items-end gap-2.5 h-24">
//       {values.map((v, i) => {
//         const barT = clamp((t - delay - i * 0.08) / 0.4, 0, 1);
//         const h = (v / max) * 100 * easeOutCubic(barT);
//         return (
//           <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
//             <div className="w-full h-20 flex items-end">
//               <div
//                 className="w-full rounded-t-sm"
//                 style={{
//                   height: `${h}%`,
//                   backgroundColor: i === values.length - 1 ? ACCENT : "#99F6E4",
//                 }}
//               />
//             </div>
//             <span className="text-[10px] text-slate-400 font-medium">
//               {labels[i]}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// function Sparkline({ t, delay = 0 }) {
//   const points = [8, 22, 18, 34, 30, 46, 42, 58, 54, 70, 66, 82];
//   const w = 220;
//   const h = 70;
//   const step = w / (points.length - 1);
//   const coords = points.map((p, i) => [i * step, h - (p / 100) * h]);
//   const path = coords
//     .map((c, i) => `${i === 0 ? "M" : "L"}${c[0].toFixed(1)},${c[1].toFixed(1)}`)
//     .join(" ");

//   const localT = clamp((t - delay) / 0.6, 0, 1);
//   const dashLen = 420;

//   return (
//     <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
//       <path
//         d={path}
//         fill="none"
//         stroke={ACCENT}
//         strokeWidth="2.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeDasharray={dashLen}
//         strokeDashoffset={dashLen * (1 - localT)}
//       />
//       {localT > 0.95 && (
//         <circle
//           cx={coords[coords.length - 1][0]}
//           cy={coords[coords.length - 1][1]}
//           r="3.5"
//           fill={ACCENT}
//         />
//       )}
//     </svg>
//   );
// }

// /* ---------------- slide layout shell ---------------- */

// function SlideShell({ index, t, eyebrow, title, children }) {
//   const headingT = clamp(t / 0.35, 0, 1);
//   return (
//     <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-11 items-center">
//       <div
//         style={{
//           opacity: headingT,
//           transform: `translateY(${(1 - headingT) * 16}px)`,
//         }}
//       >
//         <div className="flex items-center gap-3 mb-4">
//           <span
//             className="text-xs font-bold tracking-widest"
//             style={{ color: ACCENT }}
//           >
//             {String(index + 1).padStart(2, "0")} / 05
//           </span>
//           <span className="h-px flex-1 bg-slate-200" />
//         </div>
//         <h3 className="text-xl md:text-3xl font-bold text-slate-900 leading-tight">
//           {title}
//         </h3>
//       </div>
//       <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
//         {children}
//       </div>
//     </div>
//   );
// }

// /* ---------------- 5 slides ---------------- */

// function SettlementSlide({ t }) {
//   const hrs = countUp(48, 1, clamp((t - 0.15) / 0.6, 0, 1), 0);
//   const settlements = [
//     { amount: "₹2.4L", date: "Jan 15" },
//     { amount: "₹1.8L", date: "Jan 14" },
//     { amount: "₹3.1L", date: "Jan 13" },
//     { amount: "₹2.7L", date: "Jan 12" },
//   ];
//   return (
//     <SlideShell
//       index={0}
//       t={t}
//       title={
//         <>
//           Payouts settle in
//           <span style={{ color: ACCENT }}> hours, not days.</span>
//         </>
//       }
//     >
//       <div className="mb-5">
//         <p className="text-xs text-slate-500 mb-1">Avg. settlement time</p>
//         <p className="text-3xl font-black tabular-nums" style={{ color: INK }}>
//           {hrs}
//           <span className="text-base font-semibold text-slate-400"> hr</span>
//           <span className="text-sm font-medium text-slate-400 ml-2">
//             was 48 hr
//           </span>
//         </p>
//       </div>
//       <div className="space-y-2">
//         {settlements.map((s, i) => {
//           const rowT = clamp((t - 0.3 - i * 0.1) / 0.3, 0, 1);
//           const done = rowT > 0.6;
//           return (
//             <div
//               key={i}
//               className="flex items-center justify-between border-t border-slate-100 pt-2 first:border-t-0 first:pt-0"
//               style={{ opacity: clamp(rowT + 0.25, 0, 1) }}
//             >
//               <div>
//                 <p className="text-sm font-semibold text-slate-800 tabular-nums">
//                   {s.amount}
//                 </p>
//                 <p className="text-[10px] text-slate-400">{s.date}</p>
//               </div>
//               <span
//                 className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-full px-2 py-0.5"
//                 style={{
//                   backgroundColor: done ? ACCENT_SOFT : "#FEF3C7",
//                   color: done ? "#0F766E" : "#B45309",
//                 }}
//               >
//                 <CheckCircle2 className="w-3 h-3" />
//                 {done ? "Instant" : "Processing"}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     </SlideShell>
//   );
// }

// function InfraSlide({ t }) {
//   const uptime = countUp(90, 99.99, clamp((t - 0.2) / 0.6, 0, 1), 2);
//   const latency = countUp(400, 80, clamp((t - 0.35) / 0.6, 0, 1), 0);
//   return (
//     <SlideShell
//       index={1}
//       t={t}
//       title={
//         <>
//           Built on
//           <span style={{ color: ACCENT }}> infrastructure that doesn't blink.</span>
//         </>
//       }
//     >
//       <div className="mb-6">
//         <div className="flex items-baseline justify-between mb-1">
//           <span className="text-xs font-medium text-slate-500">
//             Platform uptime
//           </span>
//           <span className="text-xl font-black tabular-nums" style={{ color: INK }}>
//             {uptime}
//             <span className="text-xs font-semibold text-slate-400">%</span>
//           </span>
//         </div>
//         <Sparkline t={t} delay={0.15} />
//       </div>
//       <ProgressBar
//         label="API response time"
//         value={Number(latency)}
//         display={latency}
//         suffix=" ms"
//         max={400}
//         delay={0.4}
//         t={t}
//         invert
//       />
//     </SlideShell>
//   );
// }

// function SupportSlide({ t }) {
//   const response = countUp(30, 2, clamp((t - 0.2) / 0.6, 0, 1), 0);
//   const resolution = countUp(70, 98, clamp((t - 0.35) / 0.6, 0, 1), 0);
//   return (
//     <SlideShell
//       index={2}
//       t={t}
//       title={
//         <>
//           Support that
//           <span style={{ color: ACCENT }}> answers before you finish typing.</span>
//         </>
//       }
//     >
//       <div className="space-y-6">
//         <ProgressBar
//           label="Avg. response time"
//           value={Number(response)}
//           display={response}
//           suffix=" min"
//           max={30}
//           delay={0.15}
//           t={t}
//           invert
//         />
//         <ProgressBar
//           label="First-contact resolution"
//           value={Number(resolution)}
//           display={resolution}
//           suffix="%"
//           max={100}
//           delay={0.35}
//           t={t}
//         />
//       </div>
//     </SlideShell>
//   );
// }

// function ScaleSlide({ t }) {
//   const merchants = countUp(8234, 52000, clamp((t - 0.2) / 0.6, 0, 1), 0);
//   const tps = countUp(120, 4800, clamp((t - 0.35) / 0.6, 0, 1), 0);
//   return (
//     <SlideShell
//       index={3}
//       t={t}
//       title={
//         <>
//           One platform,
//           <span style={{ color: ACCENT }}> built to scale with you.</span>
//         </>
//       }
//     >
//       <div className="mb-5">
//         <p className="text-xs text-slate-500 mb-2">Merchants onboarded / quarter</p>
//         <MiniBarChart
//           values={[12, 18, 27, 41, 63, 100]}
//           labels={["Q1", "Q2", "Q3", "Q4", "Q5", "Now"]}
//           t={t}
//           delay={0.1}
//         />
//       </div>
//       <div className="flex items-end justify-between border-t border-slate-100 pt-4">
//         <div>
//           <p className="text-xs text-slate-500">Active merchants</p>
//           <p className="text-xl font-black tabular-nums" style={{ color: INK }}>
//             {merchants}
//             <span className="text-xs font-semibold text-slate-400">+</span>
//           </p>
//         </div>
//         <div className="text-right">
//           <p className="text-xs text-slate-500">Transactions / sec</p>
//           <p className="text-xl font-black tabular-nums" style={{ color: ACCENT }}>
//             {tps}
//           </p>
//         </div>
//       </div>
//     </SlideShell>
//   );
// }

// function OnboardingSlide({ t }) {
//   const minutes = countUp(0, 15, clamp((t - 0.15) / 0.5, 0, 1), 0);
//   const steps = ["Sign up online", "Verify KYC instantly", "Get API keys", "Go live"];
//   const lineT = clamp((t - 0.25) / 0.6, 0, 1);
//   return (
//     <SlideShell
//       index={4}
//       t={t}
//       title={
//         <>
//           Go live
//           <span style={{ color: ACCENT }}> in minutes, not weeks.</span>
//         </>
//       }
//     >
//       <div className="mb-6">
//         <p className="text-xs text-slate-500 mb-1">Time to go live</p>
//         <p className="text-3xl font-black tabular-nums" style={{ color: INK }}>
//           {minutes}
//           <span className="text-base font-semibold text-slate-400"> min</span>
//         </p>
//       </div>

//       <div className="relative pl-4">
//         <div className="absolute left-[6px] top-1 bottom-1 w-px bg-slate-100" />
//         <div
//           className="absolute left-[6px] top-1 w-px"
//           style={{
//             height: `calc(${lineT * 100}% - 4px)`,
//             backgroundColor: ACCENT,
//           }}
//         />
//         <div className="space-y-4">
//           {steps.map((s, i) => {
//             const st = clamp((t - 0.3 - i * 0.15) / 0.25, 0, 1);
//             const active = st > 0.5;
//             return (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 relative"
//                 style={{ opacity: clamp(st + 0.3, 0, 1) }}
//               >
//                 <span
//                   className="w-3 h-3 rounded-full border-2 flex-shrink-0 -ml-[3px] z-10"
//                   style={{
//                     borderColor: active ? ACCENT : "#CBD5E1",
//                     backgroundColor: active ? ACCENT : "#fff",
//                   }}
//                 />
//                 <p className="text-sm font-medium text-slate-700">{s}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </SlideShell>
//   );
// }

// function renderSlide(index, t) {
//   switch (index) {
//     case 0:
//       return <SettlementSlide t={t} />;
//     case 1:
//       return <InfraSlide t={t} />;
//     case 2:
//       return <SupportSlide t={t} />;
//     case 3:
//       return <ScaleSlide t={t} />;
//     case 4:
//       return <OnboardingSlide t={t} />;
//     default:
//       return null;
//   }
// }

// /* ---------------- main component ---------------- */

// const Benefits = () => {
//   const wrapperRef = useRef(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     let rafId = null;

//     const measure = () => {
//       const el = wrapperRef.current;
//       if (!el) return;
//       const rect = el.getBoundingClientRect();
//       const scrollable = rect.height - window.innerHeight + NAV_HEIGHT;
//       const scrolled = NAV_HEIGHT - rect.top;
//       const p = scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0;
//       setProgress(p);
//     };

//     const onScroll = () => {
//       if (rafId) return;
//       rafId = requestAnimationFrame(() => {
//         rafId = null;
//         measure();
//       });
//     };

//     measure();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//       if (rafId) cancelAnimationFrame(rafId);
//     };
//   }, []);

//   const slideFloat = progress * NUM_SLIDES;
//   const activePct = Math.round(progress * 100);

//   return (
//     <section className="relative bg-white text-slate-800">
//       {/* Intro (100vh, normal scroll) */}
//       <div className="h-screen flex flex-col items-center justify-center px-6 bg-[#F8FAFC]">
//         <span
//           className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
//           style={{ color: ACCENT }}
//         >
//           Abheepay Platform
//         </span>
//         <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-3 max-w-xl">
//           A powerful dashboard behind every transaction
//         </h2>
//         <p className="text-slate-500 text-xs md:text-sm mb-8 text-center max-w-sm">
//           Scroll to see the metrics that keep merchants running.
//         </p>
//         <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
//       </div>

//       {/* Pinned scroll-driven section */}
//       <div
//         ref={wrapperRef}
//         style={{ height: `calc(${NUM_SLIDES * SLIDE_VH}vh + 100vh - ${NAV_HEIGHT}px)` }}
//         className="relative"
//       >
//         <div
//           className="sticky overflow-hidden bg-[#F8FAFC]"
//           style={{ top: NAV_HEIGHT, height: `calc(100vh - ${NAV_HEIGHT}px)` }}
//         >
//           {/* top progress bar */}
//           <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 z-40">
//             <div
//               className="h-full"
//               style={{ width: `${progress * 100}%`, backgroundColor: ACCENT }}
//             />
//           </div>

//           {/* slide label + counter, top */}
//           <div className="absolute top-6 left-0 right-0 flex items-center justify-center gap-3 z-30 pointer-events-none">
//             <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
//               {slideMeta[clamp(Math.floor(slideFloat), 0, NUM_SLIDES - 1)].label}
//             </span>
//           </div>

//           {/* progress rail, right */}
//           <div className="hidden md:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-30">
//             {[0, 20, 40, 60, 80, 100].map((pct) => {
//               const isActive = Math.abs(activePct - pct) < 10;
//               return (
//                 <div key={pct} className="flex items-center gap-2 justify-end">
//                   <span
//                     className={`text-[10px] font-semibold tabular-nums transition-colors ${
//                       isActive ? "" : "text-slate-300"
//                     }`}
//                     style={isActive ? { color: ACCENT } : undefined}
//                   >
//                     {pct}
//                   </span>
//                   <span
//                     className="w-4 h-px transition-all"
//                     style={{
//                       backgroundColor: isActive ? ACCENT : "#CBD5E1",
//                       width: isActive ? "20px" : "16px",
//                     }}
//                   />
//                 </div>
//               );
//             })}
//           </div>

//           {slideMeta.map((meta, i) => {
//             const local = slideFloat - i;
//             const isLast = i === NUM_SLIDES - 1;
//             let opacity;
//             let translateY;

//             if (local < -TRANS) {
//               opacity = 0;
//               translateY = 20;
//             } else if (local < 0) {
//               const tt = (local + TRANS) / TRANS;
//               opacity = clamp(tt, 0, 1);
//               translateY = (1 - opacity) * 20;
//             } else if (isLast || local < 1 - TRANS) {
//               opacity = 1;
//               translateY = 0;
//             } else if (local < 1) {
//               const tt = (1 - local) / TRANS;
//               opacity = clamp(tt, 0, 1);
//               translateY = -(1 - opacity) * 20;
//             } else {
//               opacity = 0;
//               translateY = -20;
//             }

//             const localT = clamp(local, 0, 1);

//             return (
//               <div
//                 key={i}
//                 className="absolute inset-0 flex items-center justify-center px-6"
//                 style={{
//                   opacity,
//                   transform: `translateY(${translateY}px)`,
//                   zIndex: 10 + i,
//                   pointerEvents: opacity > 0.5 ? "auto" : "none",
//                 }}
//               >
//                 {renderSlide(i, localT)}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Outro */}
//       <div className="h-[48vh] flex flex-col items-center justify-center px-6 bg-white border-t border-slate-100">
//         <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 text-center">
//           Ready to power your business?
//         </h3>
//         <p className="text-slate-500 text-xs mb-5 text-center max-w-sm">
//           Join thousands of merchants growing with Abheepay's payment
//           infrastructure.
//         </p>
//         <button
//           className="text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-opacity hover:opacity-90"
//           style={{ backgroundColor: ACCENT }}
//         >
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Benefits;







import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

/* ---------------- config ---------------- */
const NUM_SLIDES = 5;
const SLIDE_VH = 160;
const TRANS = 0.3;
const NAV_HEIGHT = 80; // adjust to match your site's fixed navbar height in px

const ACCENT = "#0D9488"; // teal-600, single professional accent throughout
const ACCENT_SOFT = "#CCFBF1";
const INK = "#0F172A"; // slate-900

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function countUp(from, to, t, decimals = 0) {
  const eased = easeOutCubic(clamp(t, 0, 1));
  const val = from + (to - from) * eased;
  return decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString();
}

const slideMeta = [
  { key: "01", label: "Faster Settlement" },
  { key: "02", label: "Infrastructure" },
  { key: "03", label: "Better Support" },
  { key: "04", label: "Scalable Platform" },
  { key: "05", label: "Easy Onboarding" },
];

/* ---------------- reusable chart primitives ---------------- */

function ProgressBar({ label, value, display, suffix, max, delay, t, invert }) {
  const localT = clamp((t - delay) / 0.55, 0, 1);
  const pct = invert ? 100 - (value / max) * 100 : (value / max) * 100;
  const width = pct * localT;
  return (
    <div style={{ opacity: clamp(localT * 2, 0, 1) }}>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-xs font-medium text-slate-500">{label}</span>
        <span
          className="text-base font-bold tabular-nums"
          style={{ color: INK }}
        >
          {display}
          <span className="text-xs font-semibold text-slate-400">
            {suffix}
          </span>
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${clamp(width, 0, 100)}%`, backgroundColor: ACCENT }}
        />
      </div>
    </div>
  );
}

function MiniBarChart({ values, labels, t, delay = 0 }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-2.5 h-24">
      {values.map((v, i) => {
        const barT = clamp((t - delay - i * 0.08) / 0.4, 0, 1);
        const h = (v / max) * 100 * easeOutCubic(barT);
        return (
          <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
            <div className="w-full h-20 flex items-end">
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === values.length - 1 ? ACCENT : "#99F6E4",
                }}
              />
            </div>
            <span className="text-[10px] text-slate-400 font-medium">
              {labels[i]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Sparkline({ t, delay = 0 }) {
  const points = [8, 22, 18, 34, 30, 46, 42, 58, 54, 70, 66, 82];
  const w = 220;
  const h = 70;
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => [i * step, h - (p / 100) * h]);
  const path = coords
    .map((c, i) => `${i === 0 ? "M" : "L"}${c[0].toFixed(1)},${c[1].toFixed(1)}`)
    .join(" ");

  const localT = clamp((t - delay) / 0.6, 0, 1);
  const dashLen = 420;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
      <path
        d={path}
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashLen}
        strokeDashoffset={dashLen * (1 - localT)}
      />
      {localT > 0.95 && (
        <circle
          cx={coords[coords.length - 1][0]}
          cy={coords[coords.length - 1][1]}
          r="3.5"
          fill={ACCENT}
        />
      )}
    </svg>
  );
}

/* ---------------- slide layout shell ---------------- */

function SlideShell({ index, t, eyebrow, title, children }) {
  const headingT = clamp(t / 0.35, 0, 1);
  return (
    <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-11 items-center">
      <div
        style={{
          opacity: headingT,
          transform: `translateY(${(1 - headingT) * 16}px)`,
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: ACCENT }}
          >
            {String(index + 1).padStart(2, "0")} / 05
          </span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>
        <h3 className="text-xl md:text-3xl font-bold text-slate-900 leading-tight">
          {title}
        </h3>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        {children}
      </div>
    </div>
  );
}

/* ---------------- 5 slides ---------------- */

function SettlementSlide({ t }) {
  const hrs = countUp(48, 1, clamp((t - 0.15) / 0.6, 0, 1), 0);
  const settlements = [
    { amount: "₹2.4L", date: "Jan 15" },
    { amount: "₹1.8L", date: "Jan 14" },
    { amount: "₹3.1L", date: "Jan 13" },
    { amount: "₹2.7L", date: "Jan 12" },
  ];
  return (
    <SlideShell
      index={0}
      t={t}
      title={
        <>
          Payouts settle in
          <span style={{ color: ACCENT }}> hours, not days.</span>
        </>
      }
    >
      <div className="mb-5">
        <p className="text-xs text-slate-500 mb-1">Avg. settlement time</p>
        <p className="text-3xl font-black tabular-nums" style={{ color: INK }}>
          {hrs}
          <span className="text-base font-semibold text-slate-400"> hr</span>
          <span className="text-sm font-medium text-slate-400 ml-2">
            was 48 hr
          </span>
        </p>
      </div>
      <div className="space-y-2">
        {settlements.map((s, i) => {
          const rowT = clamp((t - 0.3 - i * 0.1) / 0.3, 0, 1);
          const done = rowT > 0.6;
          return (
            <div
              key={i}
              className="flex items-center justify-between border-t border-slate-100 pt-2 first:border-t-0 first:pt-0"
              style={{ opacity: clamp(rowT + 0.25, 0, 1) }}
            >
              <div>
                <p className="text-sm font-semibold text-slate-800 tabular-nums">
                  {s.amount}
                </p>
                <p className="text-[10px] text-slate-400">{s.date}</p>
              </div>
              <span
                className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-full px-2 py-0.5"
                style={{
                  backgroundColor: done ? ACCENT_SOFT : "#FEF3C7",
                  color: done ? "#0F766E" : "#B45309",
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                {done ? "Instant" : "Processing"}
              </span>
            </div>
          );
        })}
      </div>
    </SlideShell>
  );
}

function InfraSlide({ t }) {
  const uptime = countUp(90, 99.99, clamp((t - 0.2) / 0.6, 0, 1), 2);
  const latency = countUp(400, 80, clamp((t - 0.35) / 0.6, 0, 1), 0);
  return (
    <SlideShell
      index={1}
      t={t}
      title={
        <>
          Built on
          <span style={{ color: ACCENT }}> infrastructure that doesn't blink.</span>
        </>
      }
    >
      <div className="mb-6">
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-xs font-medium text-slate-500">
            Platform uptime
          </span>
          <span className="text-xl font-black tabular-nums" style={{ color: INK }}>
            {uptime}
            <span className="text-xs font-semibold text-slate-400">%</span>
          </span>
        </div>
        <Sparkline t={t} delay={0.15} />
      </div>
      <ProgressBar
        label="API response time"
        value={Number(latency)}
        display={latency}
        suffix=" ms"
        max={400}
        delay={0.4}
        t={t}
        invert
      />
    </SlideShell>
  );
}

function SupportSlide({ t }) {
  const response = countUp(30, 2, clamp((t - 0.2) / 0.6, 0, 1), 0);
  const resolution = countUp(70, 98, clamp((t - 0.35) / 0.6, 0, 1), 0);
  return (
    <SlideShell
      index={2}
      t={t}
      title={
        <>
          Support that
          <span style={{ color: ACCENT }}> answers before you finish typing.</span>
        </>
      }
    >
      <div className="space-y-6">
        <ProgressBar
          label="Avg. response time"
          value={Number(response)}
          display={response}
          suffix=" min"
          max={30}
          delay={0.15}
          t={t}
          invert
        />
        <ProgressBar
          label="First-contact resolution"
          value={Number(resolution)}
          display={resolution}
          suffix="%"
          max={100}
          delay={0.35}
          t={t}
        />
      </div>
    </SlideShell>
  );
}

function ScaleSlide({ t }) {
  const merchants = countUp(8234, 52000, clamp((t - 0.2) / 0.6, 0, 1), 0);
  const tps = countUp(120, 4800, clamp((t - 0.35) / 0.6, 0, 1), 0);
  return (
    <SlideShell
      index={3}
      t={t}
      title={
        <>
          One platform,
          <span style={{ color: ACCENT }}> built to scale with you.</span>
        </>
      }
    >
      <div className="mb-5">
        <p className="text-xs text-slate-500 mb-2">Merchants onboarded / quarter</p>
        <MiniBarChart
          values={[12, 18, 27, 41, 63, 100]}
          labels={["Q1", "Q2", "Q3", "Q4", "Q5", "Now"]}
          t={t}
          delay={0.1}
        />
      </div>
      <div className="flex items-end justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs text-slate-500">Active merchants</p>
          <p className="text-xl font-black tabular-nums" style={{ color: INK }}>
            {merchants}
            <span className="text-xs font-semibold text-slate-400">+</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">Transactions / sec</p>
          <p className="text-xl font-black tabular-nums" style={{ color: ACCENT }}>
            {tps}
          </p>
        </div>
      </div>
    </SlideShell>
  );
}

function OnboardingSlide({ t }) {
  const minutes = countUp(0, 15, clamp((t - 0.15) / 0.5, 0, 1), 0);
  const steps = ["Sign up online", "Verify KYC instantly", "Get API keys", "Go live"];
  const lineT = clamp((t - 0.25) / 0.6, 0, 1);
  return (
    <SlideShell
      index={4}
      t={t}
      title={
        <>
          Go live
          <span style={{ color: ACCENT }}> in minutes, not weeks.</span>
        </>
      }
    >
      <div className="mb-6">
        <p className="text-xs text-slate-500 mb-1">Time to go live</p>
        <p className="text-3xl font-black tabular-nums" style={{ color: INK }}>
          {minutes}
          <span className="text-base font-semibold text-slate-400"> min</span>
        </p>
      </div>

      <div className="relative pl-4">
        <div className="absolute left-[6px] top-1 bottom-1 w-px bg-slate-100" />
        <div
          className="absolute left-[6px] top-1 w-px"
          style={{
            height: `calc(${lineT * 100}% - 4px)`,
            backgroundColor: ACCENT,
          }}
        />
        <div className="space-y-4">
          {steps.map((s, i) => {
            const st = clamp((t - 0.3 - i * 0.15) / 0.25, 0, 1);
            const active = st > 0.5;
            return (
              <div
                key={i}
                className="flex items-center gap-3 relative"
                style={{ opacity: clamp(st + 0.3, 0, 1) }}
              >
                <span
                  className="w-3 h-3 rounded-full border-2 flex-shrink-0 -ml-[3px] z-10"
                  style={{
                    borderColor: active ? ACCENT : "#CBD5E1",
                    backgroundColor: active ? ACCENT : "#fff",
                  }}
                />
                <p className="text-sm font-medium text-slate-700">{s}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

function renderSlide(index, t) {
  switch (index) {
    case 0:
      return <SettlementSlide t={t} />;
    case 1:
      return <InfraSlide t={t} />;
    case 2:
      return <SupportSlide t={t} />;
    case 3:
      return <ScaleSlide t={t} />;
    case 4:
      return <OnboardingSlide t={t} />;
    default:
      return null;
  }
}

/* ---------------- main component ---------------- */

const Benefits = () => {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = null;

    const measure = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight + NAV_HEIGHT;
      const scrolled = NAV_HEIGHT - rect.top;
      const p = scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0;
      setProgress(p);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        measure();
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const slideFloat = progress * NUM_SLIDES;
  const activePct = Math.round(progress * 100);

  return (
    <section className="relative bg-white text-slate-800">
      {/* Intro (100vh, normal scroll) */}
      <div className="h-screen flex flex-col items-center justify-center px-6 bg-[#F8FAFC]">
        <span
          className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
          style={{ color: ACCENT }}
        >
          Abheepay Platform
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-3 max-w-xl">
          A powerful dashboard behind every transaction
        </h2>
        <p className="text-slate-500 text-xs md:text-sm mb-8 text-center max-w-sm">
          Scroll to see the metrics that keep merchants running.
        </p>
        <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
      </div>

      {/* Pinned scroll-driven section */}
      <div
        ref={wrapperRef}
        style={{ height: `calc(${NUM_SLIDES * SLIDE_VH}vh + 100vh - ${NAV_HEIGHT}px)` }}
        className="relative"
      >
        <div
          className="sticky overflow-hidden bg-[#F8FAFC]"
          style={{ top: NAV_HEIGHT, height: `calc(100vh - ${NAV_HEIGHT}px)` }}
        >
          {/* top progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 z-40">
            <div
              className="h-full"
              style={{ width: `${progress * 100}%`, backgroundColor: ACCENT }}
            />
          </div>

          {/* slide label + counter, top-left */}
          <div className="absolute top-6 left-6 md:left-10 flex items-center gap-3 z-30 pointer-events-none">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
              {slideMeta[clamp(Math.floor(slideFloat), 0, NUM_SLIDES - 1)].label}
            </span>
          </div>

          {/* progress rail, right */}
          <div className="hidden md:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-30">
            {[0, 20, 40, 60, 80, 100].map((pct) => {
              const isActive = Math.abs(activePct - pct) < 10;
              return (
                <div key={pct} className="flex items-center gap-2 justify-end">
                  <span
                    className={`text-[10px] font-semibold tabular-nums transition-colors ${isActive ? "" : "text-slate-300"
                      }`}
                    style={isActive ? { color: ACCENT } : undefined}
                  >
                    {pct}
                  </span>
                  <span
                    className="w-4 h-px transition-all"
                    style={{
                      backgroundColor: isActive ? ACCENT : "#CBD5E1",
                      width: isActive ? "20px" : "16px",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {slideMeta.map((meta, i) => {
            const local = slideFloat - i;
            const isLast = i === NUM_SLIDES - 1;
            let opacity;
            let translateY;

            if (local < -TRANS) {
              opacity = 0;
              translateY = 20;
            } else if (local < 0) {
              const tt = (local + TRANS) / TRANS;
              opacity = clamp(tt, 0, 1);
              translateY = (1 - opacity) * 20;
            } else if (isLast || local < 1 - TRANS) {
              opacity = 1;
              translateY = 0;
            } else if (local < 1) {
              const tt = (1 - local) / TRANS;
              opacity = clamp(tt, 0, 1);
              translateY = -(1 - opacity) * 20;
            } else {
              opacity = 0;
              translateY = -20;
            }

            const localT = clamp(local, 0, 1);

            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center px-6"
                style={{
                  opacity,
                  transform: `translateY(${translateY}px)`,
                  zIndex: 10 + i,
                  pointerEvents: opacity > 0.5 ? "auto" : "none",
                }}
              >
                {renderSlide(i, localT)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Outro */}
      <div className="h-[48vh] flex flex-col items-center justify-center px-6 bg-white border-t border-slate-100">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 text-center">
          Ready to power your business?
        </h3>
        <p className="text-slate-500 text-xs mb-5 text-center max-w-sm">
          Join thousands of merchants growing with Abheepay's payment
          infrastructure.
        </p>
        <Link to="/contact">
          <button
            className="text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-opacity hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Benefits;