// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   Download,
//   BarChart3,
//   Users,
//   FileText,
//   Check,
//   ShieldCheck,
//   BellRing,
//   Store,
//   Briefcase,
//   Volume2,
//   TrendingUp,
//   QrCode,
//   CreditCard,
// } from "lucide-react";

// // Merchant App has no physical product, so the hero uses a phone-dashboard
// // mockup UI instead of a packshot photo — showing what the owner actually
// // sees when they open the app. Swap the numbers/copy below for a real
// // product screenshot whenever you have one.
// const MerchantAppPhoneMockup = () => (
//   <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
//     {/* ambient rings */}
//     <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
//     <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

//     {/* floating notification bubble */}
//     <div className="absolute -right-3 top-10 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg shadow-[#00C4C7]/20">
//       <BellRing className="h-3.5 w-3.5 text-[#00C4C7]" />
//       <span className="text-[10px] font-semibold text-[#0F5562]">+ ₹850</span>
//     </div>
//     <div className="absolute -left-2 bottom-16 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
//       <TrendingUp className="h-3.5 w-3.5 text-[#00AEB2]" />
//     </div>

//     {/* phone frame */}
//     <div className="relative z-10 w-64 overflow-hidden rounded-[2.5rem] border-[6px] border-[#0F172A] bg-white shadow-2xl shadow-[#00C4C7]/20">
//       {/* status bar */}
//       <div className="flex items-center justify-between bg-[#0F172A] px-5 pb-2 pt-3 text-[10px] font-medium text-white/70">
//         <span>9:41</span>
//         <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
//       </div>

//       {/* dashboard */}
//       <div className="bg-[#0F172A] px-5 pb-6 pt-2">
//         <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7EE2E6]">
//           Today's sales
//         </p>
//         <p className="mt-1 text-2xl font-bold text-white">₹18,420</p>
//         <p className="mt-1 text-[10px] text-slate-300">↑ 12% vs yesterday</p>

//         {/* mini bar chart */}
//         <div className="mt-4 flex h-14 items-end gap-1.5">
//           {[8, 14, 10, 20, 16, 26, 22].map((h, i) => (
//             <span
//               key={i}
//               className="flex-1 rounded-t-sm bg-[#00C4C7]/70 last:bg-[#00C4C7]"
//               style={{ height: `${h * 2}px` }}
//             ></span>
//           ))}
//         </div>
//       </div>

//       {/* recent transactions */}
//       <div className="space-y-3 bg-[#F1F8FA] px-5 py-4">
//         <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
//           Recent
//         </p>
//         <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
//           <div className="flex items-center gap-2">
//             <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#0F5562]">
//               <QrCode className="h-3.5 w-3.5" />
//             </span>
//             <span className="text-[11px] font-medium text-slate-700">QR Code</span>
//           </div>
//           <span className="text-[11px] font-semibold text-[#065F46]">+ ₹1,250</span>
//         </div>
//         <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
//           <div className="flex items-center gap-2">
//             <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
//               <CreditCard className="h-3.5 w-3.5" />
//             </span>
//             <span className="text-[11px] font-medium text-slate-700">POS Machine</span>
//           </div>
//           <span className="text-[11px] font-semibold text-[#065F46]">+ ₹4,999</span>
//         </div>
//       </div>
//     </div>

//     {/* platform */}
//     <div className="absolute -bottom-6 left-1/2 h-6 w-56 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
//     <div className="absolute -bottom-4 left-1/2 h-3 w-44 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
//   </div>
// );

// const MerchantApp = () => {
//   return (
//     <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
//         <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
//         <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-8">
//           {/* Left copy */}
//           <div className="max-w-xl">
//             <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//               Product Spotlight
//             </p>
//             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//               Merchant App
//             </h1>
//             <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
//               Your whole business,
//               <br />
//               in your pocket.
//             </h2>
//             <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
//               Track every sale, settlement, and staff login from one app.
//               See payments from your Sound Box, QR Code, POS Machine, and
//               Payment Gateway the moment they land.
//             </p>
//             <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
//               >
//                 <Phone className="h-4 w-4" />
//                 Talk to Sales
//               </Link>
//               <Link
//                 to="/download-app"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
//               >
//                 <Download className="h-4 w-4" />
//                 Download App
//               </Link>
//             </div>
//           </div>

//           {/* Device */}
//           <div className="flex justify-center py-6 lg:py-0">
//             <MerchantAppPhoneMockup />
//           </div>

//           {/* Floating cards */}
//           <div className="flex flex-col gap-4 lg:max-w-xs">
//             <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
//                 <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
//                 All devices, one app
//               </p>
//               <h3 className="mt-2 text-lg font-bold">Every payment, unified</h3>
//               <p className="mt-3 text-sm leading-6 text-slate-200">
//                 Monitor your Sound Box, QR Code, POS Machine, and Payment
//                 Gateway from a single dashboard.
//               </p>
//             </div>

//             <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
//                 <BellRing className="h-5 w-5 text-[#00C4C7]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//                 Instant notifications
//               </p>
//               <h3 className="mt-2 text-lg font-bold text-slate-900">
//                 Never miss a payment
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Get a ping the moment any payment comes in, day or night.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why it works */}
//       <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//             Why businesses love it
//           </p>
//           <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
//             Why Merchant App works{" "}
//             <span className="relative inline-block">
//               for your business
//               <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
//             </span>
//           </h2>
//           <p className="mt-4 text-base leading-7 text-slate-600">
//             Built for owners on the move, Merchant App makes tracking
//             sales, managing staff, and reconciling settlements simple and
//             reliable — from anywhere.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-8">
//           <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//             <div className="divide-y divide-slate-100">
//               <div className="flex gap-4 pb-6">
//                 <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7] text-lg font-bold text-white">
//                   1
//                 </span>
//                 <div className="flex flex-1 items-center justify-between gap-4">
//                   <div>
//                     <h3 className="font-semibold text-slate-900">
//                       Real-time Dashboard
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Watch sales roll in as they happen, with a live view
//                       across every payment device.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
//                     <BarChart3 className="h-5 w-5" />
//                   </span>
//                 </div>
//               </div>

//               <div className="flex gap-4 py-6">
//                 <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-lg font-bold text-white">
//                   2
//                 </span>
//                 <div className="flex flex-1 items-center justify-between gap-4">
//                   <div>
//                     <h3 className="font-semibold text-slate-900">
//                       Manage Your Team
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Add staff logins with custom roles and permissions
//                       for every counter.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
//                     <Users className="h-5 w-5" />
//                   </span>
//                 </div>
//               </div>

//               <div className="flex gap-4 pt-6">
//                 <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#10B981] text-lg font-bold text-white">
//                   3
//                 </span>
//                 <div className="flex flex-1 items-center justify-between gap-4">
//                   <div>
//                     <h3 className="font-semibold text-slate-900">
//                       Settlements & Reports
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Download detailed statements anytime for easy
//                       reconciliation and filing.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
//                     <FileText className="h-5 w-5" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//             <h3 className="text-xl font-semibold text-slate-900">
//               Merchant App highlights
//             </h3>
//             <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
//               <li className="flex items-start gap-3 py-4 first:pt-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Track sales across every payment device in one place.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Instant push notifications for every transaction.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Add and manage staff access with custom roles.</span>
//               </li>
//               <li className="flex items-start gap-3 pt-4 last:pb-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Download settlement reports anytime, anywhere.</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Built for retail */}
//       <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//         <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
//           <div className="grid gap-8 lg:grid-cols-3">
//             <div className="space-y-3">
//               <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//                 Designed for owners
//               </p>
//               <h2 className="text-3xl font-bold text-slate-900">
//                 Built to run your business from anywhere
//               </h2>
//               <p className="text-sm leading-7 text-slate-600">
//                 Merchant App gives you a complete, real-time view of your
//                 business — whether you're behind the counter or on the go.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#F8FDFF] p-6">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
//                 <Store className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Perfect for multi-counter stores
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 See sales from every counter and device roll up into one
//                 unified view.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#EEF9FF] p-6">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
//                 <Briefcase className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Ideal for owners on the move
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Check in on sales, staff, and settlements without ever
//                 needing to be in-store.
//               </p>
//             </div>
//           </div>

//           <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 lg:grid-cols-3">
//             <div className="hidden lg:block"></div>
//             <div className="rounded-3xl bg-[#ECFDF5] p-6 lg:col-span-2 lg:max-w-sm">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
//                 <Volume2 className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Works with your whole toolkit
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Sound Box, QR Code, POS Machine, Payment Links, and Payment
//                 Gateway all report into Merchant App automatically.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default MerchantApp;













// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   Download,
//   BarChart3,
//   Users,
//   FileText,
//   Check,
//   ShieldCheck,
//   BellRing,
//   Store,
//   Briefcase,
//   Volume2,
//   TrendingUp,
// } from "lucide-react";

// // Swap MERCHANT_APP_IMAGE for your own product photo/screenshot (e.g. an
// // import from /assets) when you have one — this is a free-to-use sample
// // placeholder in the meantime.
// const MERCHANT_APP_IMAGE =
//   "/assets/image/services/merchantApplication.png";

// const MerchantAppDevice = () => (
//   <div className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center sm:max-w-[36rem]">
//     {/* ambient rings */}
//     <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
//     <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

//     {/* device photo */}
//     <div className="relative z-10 w-full max-w-[40rem] overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-[#00C4C7]/20">
//       <img
//         src={MERCHANT_APP_IMAGE}
//         alt="Merchant App dashboard for tracking sales and settlements"
//         className="w-full max-h-[34rem] rounded-[1.5rem] object-contain"
//         loading="lazy"
//       />
//     </div>

//     {/* platform */}
//     <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
//     <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
//   </div>
// );

// const MerchantApp = () => {
//   return (
//     <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
//         <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
//         <div className="relative mx-auto grid max-w-8xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_560px_300px] lg:items-center lg:px-8">
//           {/* Left copy */}
//           <div className="max-w-3xl">
//             <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//               Product Spotlight
//             </p>
//             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//               Merchant App
//             </h1>
//             <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
//               Your whole business,
//               <br />
//               in your pocket.
//             </h2>
//             <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
//               Track every sale, settlement, and staff login from one app.
//               See payments from your Sound Box, QR Code, POS Machine, and
//               Payment Gateway the moment they land.
//             </p>
//             <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
//               >
//                 <Phone className="h-4 w-4" />
//                 Talk to Sales
//               </Link>
//               <Link
//                 to="/download-app"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
//               >
//                 <Download className="h-4 w-4" />
//                 Download App
//               </Link>
//             </div>
//           </div>

//           {/* Device */}
//           <div className="flex justify-end py-6 lg:py-0 lg:translate-x-10">
//             <MerchantAppDevice />
//           </div>

//           {/* Floating cards */}
//           <div className="ml-auto flex flex-col gap-4 lg:w-[280px]">
//             <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
//                 <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
//                 All devices, one app
//               </p>
//               <h3 className="mt-2 text-lg font-bold">Every payment, unified</h3>
//               <p className="mt-3 text-sm leading-6 text-slate-200">
//                 Monitor your Sound Box, QR Code, POS Machine, and Payment
//                 Gateway from a single dashboard.
//               </p>
//             </div>

//             <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
//                 <BellRing className="h-5 w-5 text-[#00C4C7]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//                 Instant notifications
//               </p>
//               <h3 className="mt-2 text-lg font-bold text-slate-900">
//                 Never miss a payment
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Get a ping the moment any payment comes in, day or night.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why it works */}
//       <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//             Why businesses love it
//           </p>
//           <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
//             Why Merchant App works{" "}
//             <span className="relative inline-block">
//               for your business
//               <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
//             </span>
//           </h2>
//           <p className="mt-4 text-base leading-7 text-slate-600">
//             Built for owners on the move, Merchant App makes tracking
//             sales, managing staff, and reconciling settlements simple and
//             reliable — from anywhere.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-8">
//           <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//             <div className="divide-y divide-slate-100">
//               <div className="flex gap-4 pb-6">
//                 <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7] text-lg font-bold text-white">
//                   1
//                 </span>
//                 <div className="flex flex-1 items-center justify-between gap-4">
//                   <div>
//                     <h3 className="font-semibold text-slate-900">
//                       Real-time Dashboard
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Watch sales roll in as they happen, with a live view
//                       across every payment device.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
//                     <BarChart3 className="h-5 w-5" />
//                   </span>
//                 </div>
//               </div>

//               <div className="flex gap-4 py-6">
//                 <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-lg font-bold text-white">
//                   2
//                 </span>
//                 <div className="flex flex-1 items-center justify-between gap-4">
//                   <div>
//                     <h3 className="font-semibold text-slate-900">
//                       Manage Your Team
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Add staff logins with custom roles and permissions
//                       for every counter.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
//                     <Users className="h-5 w-5" />
//                   </span>
//                 </div>
//               </div>

//               <div className="flex gap-4 pt-6">
//                 <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#10B981] text-lg font-bold text-white">
//                   3
//                 </span>
//                 <div className="flex flex-1 items-center justify-between gap-4">
//                   <div>
//                     <h3 className="font-semibold text-slate-900">
//                       Settlements & Reports
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Download detailed statements anytime for easy
//                       reconciliation and filing.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
//                     <FileText className="h-5 w-5" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//             <h3 className="text-xl font-semibold text-slate-900">
//               Merchant App highlights
//             </h3>
//             <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
//               <li className="flex items-start gap-3 py-4 first:pt-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Track sales across every payment device in one place.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Instant push notifications for every transaction.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Add and manage staff access with custom roles.</span>
//               </li>
//               <li className="flex items-start gap-3 pt-4 last:pb-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Download settlement reports anytime, anywhere.</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Built for retail */}
//       <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//         <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
//           <div className="grid gap-8 lg:grid-cols-3">
//             <div className="space-y-3">
//               <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//                 Designed for owners
//               </p>
//               <h2 className="text-3xl font-bold text-slate-900">
//                 Built to run your business from anywhere
//               </h2>
//               <p className="text-sm leading-7 text-slate-600">
//                 Merchant App gives you a complete, real-time view of your
//                 business — whether you're behind the counter or on the go.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#F8FDFF] p-6">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
//                 <Store className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Perfect for multi-counter stores
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 See sales from every counter and device roll up into one
//                 unified view.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#EEF9FF] p-6">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
//                 <Briefcase className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Ideal for owners on the move
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Check in on sales, staff, and settlements without ever
//                 needing to be in-store.
//               </p>
//             </div>
//           </div>

//           <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 lg:grid-cols-3">
//             <div className="hidden lg:block"></div>
//             <div className="rounded-3xl bg-[#ECFDF5] p-6 lg:col-span-2 lg:max-w-sm">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
//                 <Volume2 className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Works with your whole toolkit
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Sound Box, QR Code, POS Machine, Payment Links, and Payment
//                 Gateway all report into Merchant App automatically.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default MerchantApp;
















import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Download,
  BarChart3,
  Users,
  FileText,
  Check,
  ShieldCheck,
  BellRing,
  Store,
  Briefcase,
  Volume2,
  TrendingUp,
  QrCode,
  RefreshCcw,
  History,
  UserCog,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// Swap MERCHANT_APP_IMAGE for your own product photo/screenshot (e.g. an
// import from /assets) when you have one — this is a free-to-use sample
// placeholder in the meantime.
const MERCHANT_APP_IMAGE =
  "/assets/image/services/merchantApplication.png0";

const MerchantAppDevice = () => (
  <div className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center sm:max-w-[36rem]">
    {/* ambient rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* device photo */}
    <div className="relative z-10 w-full max-w-[40rem] overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-[#00C4C7]/20">
      <img
        src={MERCHANT_APP_IMAGE}
        alt="AbheePay Merchant App dashboard for tracking QR Code and Sound Box transactions"
        className="w-full max-h-[34rem] rounded-[1.5rem] object-contain"
        loading="lazy"
      />
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const KEY_FEATURES = [
  {
    icon: BarChart3,
    title: "Real-Time Transaction Tracking",
    copy: "View successful transactions instantly and monitor payment activity as it happens.",
  },
  {
    icon: RefreshCcw,
    title: "Settlement Management",
    copy: "Track settlement status, settlement history, and payment credits directly from the app.",
  },
  {
    icon: History,
    title: "Payment History",
    copy: "Access complete transaction records with date, amount, and payment status whenever you need them.",
  },
  {
    icon: QrCode,
    title: "QR Code Management",
    copy: "View your assigned QR Code, download it for printing, or share it digitally with customers.",
  },
  {
    icon: Volume2,
    title: "Sound Box Management",
    copy: "Monitor your connected Sound Box devices and check their operational status from the app.",
  },
  {
    icon: FileText,
    title: "Business Reports",
    copy: "View daily, weekly, and monthly collection reports to understand your business performance.",
  },
  {
    icon: UserCog,
    title: "Merchant Profile",
    copy: "Update business information, contact details, and other merchant account settings from one place.",
  },
  {
    icon: BellRing,
    title: "Notifications",
    copy: "Receive instant notifications for successful payments, settlements, and service announcements.",
  },
];

const HOW_IT_WORKS = [
  {
    title: "Register as a merchant",
    copy: "Sign up as an AbheePay merchant to get started.",
  },
  {
    title: "Complete KYC & verification",
    copy: "Finish the merchant verification process.",
  },
  {
    title: "Activate QR Code & Sound Box",
    copy: "Get your devices activated and ready to use.",
  },
  {
    title: "Download & log in",
    copy: "Install the AbheePay Merchant App and sign in.",
  },
  {
    title: "Start monitoring",
    copy: "Track transactions, settlements, and reports on your phone.",
  },
];

const FAQS = [
  {
    q: "What is the AbheePay Merchant App?",
    a: "The AbheePay Merchant App is a mobile application that helps merchants manage their AbheePay QR Code and Sound Box services, track transactions, monitor settlements, and access business reports.",
  },
  {
    q: "Who can use the Merchant App?",
    a: "The app is designed for merchants using AbheePay QR Code and Sound Box solutions.",
  },
  {
    q: "Can I track my daily collections?",
    a: "Yes. The app provides real-time access to your daily transactions, payment history, and collection reports.",
  },
  {
    q: "Can I monitor settlement status?",
    a: "Yes. You can view settlement status, settlement history, and payment reports directly from the app.",
  },
  {
    q: "Can I manage my QR Code from the app?",
    a: "Yes. You can access your QR Code, view merchant details, and manage your QR-related information through the app.",
  },
  {
    q: "Is the Merchant App available on Android and iOS?",
    a: "The AbheePay Merchant App is available for supported mobile platforms. Please contact our team for the latest availability and download information.",
  },
];

const RELATED_PRODUCTS = [
  { label: "QR Payment Solution", to: "/products/qr-payment-solution" },
  { label: "QR Sound Box", to: "/products/sound-box" },
  { label: "Payment Gateway", to: "/products/payment-gateway" },
  { label: "Payment Links", to: "/products/payment-links" },
  { label: "POS Machine", to: "/products/pos-machine" },
  { label: "Digital Invoice", to: "/products/digital-invoice" },
];

const FaqItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#00AEB2] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="pb-5 text-sm leading-6 text-slate-600">{a}</p>}
    </div>
  );
};

const MerchantApp = () => {
  return (
    <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
      <Helmet>
        <title>Merchant App for QR Code & Sound Box | AbheePay</title>
        <meta
          name="description"
          content="Manage your AbheePay QR Code and Sound Box from one mobile app. Track transactions, settlements, payment history, and business reports anytime, anywhere."
        />
        <link
          rel="canonical"
          href="https://www.abheepay.com/products/merchant-app"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Merchant App for QR Code & Sound Box | AbheePay"
        />
        <meta
          property="og:description"
          content="Manage your AbheePay QR Code and Sound Box from one mobile app. Track transactions, settlements, payment history, and business reports anytime, anywhere."
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:url"
          content="https://www.abheepay.com/products/merchant-app"
        />
        <meta
          property="og:image"
          content="https://www.abheepay.com/assets/image/services/merchantApplication.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Merchant App for QR Code & Sound Box | AbheePay"
        />
        <meta
          name="twitter:description"
          content="Manage your AbheePay QR Code and Sound Box from one mobile app. Track transactions, settlements, payment history, and business reports anytime, anywhere."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
        <div className="relative mx-auto grid max-w-8xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_560px_300px] lg:items-center lg:px-8">
          {/* Left copy */}
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
              Product Spotlight
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              AbheePay Merchant App
            </h1>
            <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
              Manage Your QR Code & Sound Box
              <br />
              from One App
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
              Track UPI collections, monitor settlements, view payment
              history, download reports, and manage your QR business
              directly from your smartphone — in the shop or away from it.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/download-app"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
              >
                <Download className="h-4 w-4" />
                Download App
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
              >
                <Phone className="h-4 w-4" />
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Device */}
          <div className="flex justify-end py-6 lg:py-0 lg:translate-x-10">
            <MerchantAppDevice />
          </div>

          {/* Floating cards */}
          <div className="ml-auto flex flex-col gap-4 lg:w-[280px]">
            <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                All devices, one app
              </p>
              <h3 className="mt-2 text-lg font-bold">Every payment, unified</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Monitor your QR Code and Sound Box payment activity from a
                single dashboard.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                <BellRing className="h-5 w-5 text-[#00C4C7]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Instant notifications
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Never miss a payment
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Get a ping the moment any payment comes in, day or night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything you need */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            One app, full control
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Everything You Need to Manage Your QR Business
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Monitor payment activity, manage QR devices, and access
            important business information anytime — whether you run one
            shop or several.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {[
            "View real-time UPI transactions",
            "Track daily payment collections",
            "Monitor settlement status",
            "Download payment reports",
            "Manage your business profile",
            "Receive payment notifications",
            "Access customer support",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/40"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Why businesses love it
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Choose the{" "}
            <span className="relative inline-block">
              AbheePay Merchant App
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Built to simplify everyday payment management for merchants
            using AbheePay QR and Sound Box solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <div className="divide-y divide-slate-100">
              <div className="flex gap-4 pb-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7] text-lg font-bold text-white">
                  1
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Real-time Dashboard
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Watch sales roll in as they happen, with a live view
                      across QR Code and Sound Box.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                    <BarChart3 className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="flex gap-4 py-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-lg font-bold text-white">
                  2
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Simple, Secure Access
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Manage daily payment operations without needing a
                      computer or technical knowledge.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                    <Users className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#10B981] text-lg font-bold text-white">
                  3
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Settlements & Reports
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Download detailed statements anytime for easy
                      reconciliation and filing.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                    <FileText className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <h3 className="text-xl font-semibold text-slate-900">
              Merchant App highlights
            </h3>
            <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
              <li className="flex items-start gap-3 py-4 first:pt-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Real-time payment tracking, wherever you are.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Settlement monitoring and easy access to transaction history.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Business reports and QR Code management in one place.</span>
              </li>
              <li className="flex items-start gap-3 pt-4 last:pb-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Monitor Sound Box activity with simple, secure mobile access.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key features grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              What's inside
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Key Features
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Manage your business with powerful features designed for
              everyday operations.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_FEATURES.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-3xl bg-[#F8FDFF] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Get started
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Getting started with the AbheePay Merchant App is simple.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {HOW_IT_WORKS.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7] text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.copy}
              </p>
              {i < HOW_IT_WORKS.length - 1 && (
                <ArrowRight className="pointer-events-none absolute -right-4 top-8 hidden h-4 w-4 text-slate-300 lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Built for owners on the move */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                Designed for owners
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Secure & Convenient Business Management
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Whether you're checking today's collections, tracking
                settlements, or reviewing transaction history, everything
                is available in one mobile application.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8FDFF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Store className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Perfect for multi-outlet businesses
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                See QR and Sound Box activity from every location roll up
                into one unified view.
              </p>
            </div>

            <div className="rounded-3xl bg-[#EEF9FF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Ideal for owners on the move
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Stay connected to your business without visiting a branch
                or using a desktop computer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White label callout */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#ECFDF5] p-8 shadow-xl shadow-slate-200/30 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div className="sm:max-w-xl">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
              <TrendingUp className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              Looking for a White Label QR Solution?
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Want to launch your own branded QR Code and Sound Box
              solution? AbheePay also offers White Label QR Solutions for
              distributors, fintech companies, and enterprises.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#059669]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#059669] transition hover:bg-[#059669] hover:text-white sm:mt-0"
          >
            Contact our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10 rounded-[2rem] bg-white px-6 shadow-xl shadow-slate-200/30 sm:px-8">
          {FAQS.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* Related products */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <h2 className="text-2xl font-bold text-slate-900">
            Explore Related Products
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Complete your payment ecosystem with other AbheePay solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {RELATED_PRODUCTS.map((p) => (
              <Link
                key={p.label}
                to={p.to}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#F8FBFD] px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#00C4C7] hover:text-[#00AEB2]"
              >
                {p.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#0F172A] to-[#0B2E31] px-8 py-14 text-center text-white shadow-2xl shadow-slate-900/30">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Download the AbheePay Merchant App Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Track transactions, monitor settlements, receive payment
            updates, and access business reports — all from one secure
            mobile application.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/download-app"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/30 transition hover:bg-[#14d0d4]"
            >
              <Download className="h-4 w-4" />
              Download App
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MerchantApp;