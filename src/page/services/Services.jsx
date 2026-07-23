// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   ArrowRight,
//   Banknote,
//   Building2,
//   Code2,
//   CreditCard,
//   Headphones,
//   Landmark,
//   LockKeyhole,
//   Plane,
//   QrCode,
//   Rocket,
//   ShieldCheck,
//   Smartphone,
//   UsersRound,
//   WalletCards,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import servicesData from "./Servicesdata.json";

// const groupDefinitions = [
//   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
//   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
//   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
//   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
//   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// ];

// const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];



// const CategoryCard = ({ title, description, Icon }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <a
//       href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
//       className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-2 shadow-[0_4px_15px_rgba(15,37,76,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300"
//     >
//       {/* Icon */}
//       <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
//         <Icon size={22} strokeWidth={1.6} />
//       </div>

//       {/* Title */}
//       <h3 className="text-[12px] font-bold leading-tight text-[#091d48]">
//         {title}
//       </h3>

//       {/* Description */}
//       <div className="mt-1 flex flex-1 flex-col">
//         <p
//           className={`text-[10px] leading-4 text-slate-500 ${expanded ? "" : "line-clamp-1"
//             }`}
//         >
//           {description}
//         </p>

//         {/* Expand Button */}
//         <button
//           type="button"
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             setExpanded(!expanded);
//           }}
//           className="mt-1 w-fit text-cyan-600"
//         >
//           <ChevronDown
//             size={13}
//             className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""
//               }`}
//           />
//         </button>

//         {/* Arrow */}
//         <div className="mt-auto flex justify-end pt-1">
//           <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
//             <ArrowRight size={12} />
//           </span>
//         </div>
//       </div>
//     </a>
//   );
// };

// const ServiceItem = ({ service, index }) => {
//   const Icon = serviceIcons[index % serviceIcons.length];
//   return (
//     <Link to={`/services/${service.id}`} className="group flex min-w-0 flex-1 flex-col items-center px-2 py-2.5 text-center transition hover:bg-cyan-50/60 sm:border-l sm:border-slate-100 first:border-l-0">
//       <div className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] group-hover:scale-110"><Icon size={19} strokeWidth={1.7} /></div>
//       <h4 className="line-clamp-2 text-xs font-extrabold text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
//       <p className="mt-0.5 line-clamp-1 text-[10px] leading-4 text-slate-500">{service.description}</p>
//     </Link>
//   );
// };






// // sidebar


// const ServiceRow = ({ group }) => {
//   const [expanded, setExpanded] = useState(false);

//   const Icon = group.icon;

//   // Faster lookup
//   const serviceMap = new Map(
//     servicesData.map((service) => [service.id, service])
//   );

//   const services = group.ids
//     .map((id) => serviceMap.get(id))
//     .filter(Boolean);

//     const [showAllServices, setShowAllServices] = useState(false);

//   return (
//     <section
//       id={group.title.toLowerCase().replace(/\s+/g, "-")}
//       className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
//     >
//       <div className="flex flex-col lg:flex-row">
//         {/* Left Panel */}
//         <div className="flex w-full shrink-0 flex-row items-start gap-3 bg-gradient-to-br from-slate-50 to-cyan-50 p-4 lg:w-56 lg:flex-col lg:items-start lg:justify-center">
//           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
//             <Icon size={26} />
//           </div>

//           <div className="flex-1 lg:flex-none">
//             <h2 className="text-base font-bold text-[#09215a]">
//               {group.title}
//             </h2>

//             <p
//               className={`mt-1 text-xs leading-5 text-slate-600 transition-all ${expanded ? "" : "line-clamp-1"
//                 }`}
//             >
//               {group.description}
//             </p>

//             <button
//               type="button"
//               onClick={() => setExpanded(!expanded)}
//               className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 transition hover:text-cyan-700"
//             >
//               {expanded ? "View Less" : "View All"}
//               {expanded ? (
//                 <ChevronUp size={14} />
//               ) : (
//                 <ChevronDown size={14} />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Services */}
//        {/* Services */}
// <div className="grid flex-1 grid-cols-2 border-t border-slate-100 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 lg:border-l lg:border-t-0">
//   {services.length ? (
//     <>
//       {(showAllServices ? services : services.slice(0, 3)).map((service, index) => (
//         <ServiceItem
//           key={service.id}
//           service={service}
//           index={index}
//         />
//       ))}

//       {!showAllServices && services.length > 3 && (
//         <button
//           onClick={() => setShowAllServices(true)}
//           className="flex min-h-[110px] flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50 transition hover:bg-slate-100"
//         >
//           <ChevronDown className="h-6 w-6 text-slate-600" />
//           <span className="text-sm font-medium text-slate-700">
//             View All
//           </span>
//         </button>
//       )}

//       {showAllServices && services.length > 3 && (
//         <button
//           onClick={() => setShowAllServices(false)}
//           className="flex min-h-[110px] flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50 transition hover:bg-slate-100"
//         >
//           <ChevronUp className="h-6 w-6 text-slate-600" />
//           <span className="text-sm font-medium text-slate-700">
//             Show Less
//           </span>
//         </button>
//       )}
//     </>
//   ) : (
//     <div className="col-span-full flex h-40 items-center justify-center text-sm text-slate-500">
//       No services available.
//     </div>
//   )}
// </div>
//       </div>
//     </section>
//   );
// };

// const ServiceList = () => (
//   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-8 font-sans text-[#0b1d45]">
//     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
//       <div className="absolute -right-24 top-8 -z-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
//       <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 md:grid-cols-2 lg:px-10 lg:py-16">
//         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
//           <p className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-600"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> All Services</p>
//           <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-[#0a2050] sm:text-5xl">Complete Financial Ecosystem for Modern Businesses</h1>
//           <p className="mt-5 max-w-lg text-base leading-6 text-[#526783]">Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.</p>
//           <div className="mt-7 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#12afc1] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">Get Started Now <ArrowRight size={16} /></Link><Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-cyan-500 bg-white px-5 py-3 text-sm font-bold text-cyan-600">Talk to Sales <Headphones size={16} /></Link></div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-72 w-full max-w-md md:block">
//           <div className="absolute inset-x-3 bottom-1 h-14 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
//           <div className="absolute bottom-5 left-10 h-36 w-28 -rotate-6 rounded-2xl border-4 border-slate-700 bg-white p-2 shadow-2xl"><p className="text-[8px] font-bold text-[#08235a]">ABHEEPAY</p><div className="mt-3 grid grid-cols-4 gap-1">{Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-3 bg-slate-900" />)}</div><p className="mt-2 text-center text-[7px] text-slate-500">Scan & Pay</p></div>
//           <div className="absolute bottom-4 left-1/2 h-52 w-36 -translate-x-1/2 rotate-6 overflow-hidden rounded-[25px] border-[7px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-3 shadow-2xl"><div className="h-4 w-14 rounded-full bg-[#061a43]" /><p className="mt-7 text-[8px] text-white/70">Total Transactions</p><p className="text-xl font-bold text-white">₹ 68,490</p><div className="mt-6 flex h-12 items-end gap-1">{[20, 35, 25, 45, 35, 60, 52].map((height, index) => <span key={index} style={{ height }} className="w-3 rounded-t bg-cyan-300" />)}</div></div>
//           <div className="absolute bottom-5 right-6 w-36 rounded-xl bg-white p-3 shadow-xl"><p className="text-[9px] font-bold text-slate-700">Receipts</p><div className="mt-2 space-y-2 text-[8px] text-slate-500"><p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p><p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p><p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p></div></div>
//           <div className="absolute bottom-3 right-28 rotate-12 rounded-xl bg-white p-2 shadow-xl"><img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-20 w-20 object-contain" /></div>
//           <div className="absolute right-6 top-12 rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#0b376a] shadow-lg">Successful<br />Transactions <span className="text-cyan-500">12,650</span></div>
//           <div className="absolute bottom-16 left-1 rounded-2xl bg-cyan-500 p-3 text-white shadow-lg"><LockKeyhole size={26} /></div>
//         </motion.div>
//       </div>
//     </section>

//     <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
//       <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-extrabold text-[#0b1d45]">Top Service Categories</h2><a href="#payment-solutions" className="text-xs font-bold text-cyan-600">Explore All Services <ArrowRight className="inline" size={14} /></a></div>
//       <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{groupDefinitions.map((group) => <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />)}</div>
//       <div className="mt-4">{groupDefinitions.map((group) => <ServiceRow key={group.title} group={group} />)}</div>
//       <section className="mt-5 grid overflow-hidden rounded-2xl bg-[#071d48] text-white sm:grid-cols-4">{[[UsersRound, "10,000+", "Active Merchants"], [WalletCards, "₹500 Cr+", "Monthly Transactions"], [ShieldCheck, "99.99%", "System Uptime"], [Headphones, "24×7", "Customer Support"]].map(([Icon, value, label]) => <div key={label} className="flex items-center justify-center gap-3 border-white/15 p-5 sm:border-r last:border-r-0"><span className="rounded-full bg-cyan-400/10 p-3 text-cyan-300"><Icon size={21} /></span><span><b className="block text-lg">{value}</b><small className="text-xs text-slate-300">{label}</small></span></div>)}</section>
//       <section className="relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-6 py-7 text-white sm:px-9"><Rocket className="absolute -bottom-6 right-10 h-28 w-28 rotate-[-20deg] text-white/25" /><div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-extrabold">Ready to Transform Your Business?</h2><p className="mt-2 text-sm text-white/90">Join thousands of businesses already growing with ABHEEPAY.</p></div><Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#10366e]">Create Account Now <ArrowRight size={16} /></Link></div></section>
//     </div>
//   </main>
// );

// const ServiceDetail = ({ service }) => {
//   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
//   const features = service.features || [];
//   const highlights = service.benefits || [];
//   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
//   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

//   return (
//     <motion.div initial="hidden" animate="visible" className="bg-white min-h-screen font-sans text-gray-800 py-8 px-4 md:px-12">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-10">
//           <motion.div variants={fadeInUp} className="md:w-1/2">
//             <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-6 leading-tight">{service.name}</h1>
//             <div className="flex items-center gap-3 mt-4 text-gray-500 text-sm">
//               <motion.span initial={{ width: 0 }} animate={{ width: 32 }} transition={{ delay: 0.3, duration: 0.5 }} className="h-[2px] bg-[#00D3CD]" />
//               <span>Abheepay Team • 2026</span>
//             </div>
//           </motion.div>
//           <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="md:w-1/2 relative w-full">
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="absolute -top-4 -left-4 w-full h-[220px] sm:h-[280px] md:h-[320px] border-2 border-[#00D3CD] rounded-lg -z-10" />
//             <div className="w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-lg shadow-xl bg-white p-3">
//               <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={mainImg} alt={service.name} className="w-full h-full object-fill object-center" />
//             </div>
//           </motion.div>
//         </div>
//         <div className="grid md:grid-cols-3 gap-6 mt-12">
//           <div className="md:col-span-2 space-y-6">
//             <motion.p variants={fadeInUp} className="text-base text-gray-600 leading-relaxed max-w-2xl">{service.longDescription || service.description}</motion.p>
//             <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
//               {features.map((text, index) => (
//                 <motion.div key={index} variants={fadeInUp} whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.2 } }} className="p-4 border-b md:border-r border-gray-100 flex items-center gap-3 bg-white text-gray-900 transition-colors cursor-default">
//                   <span className="text-[#00D3CD] font-bold text-xl">→</span><span className="font-bold text-lg">{text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#00D3CD] p-6 flex flex-col min-h-[320px] shadow-lg relative overflow-hidden">
//             <h2 className="text-xl font-black mb-6 tracking-tighter text-black">BENEFITS</h2>
//             <div className="space-y-5">
//               {highlights.map((benefit, index) => (
//                 <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
//                   <p className="text-black font-bold text-base leading-tight uppercase">{benefit}</p>
//                   {index !== highlights.length - 1 && <div className="w-full h-[1px] bg-black/20 mt-4" />}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//         <motion.div variants={fadeInUp} className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 gap-4">
//           <Link to="/services" className="text-sm font-bold border border-black px-6 py-2 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest">— BACK TO SERVICES</Link>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const Services = () => {
//   const { id } = useParams();

//   if (!id) return <ServiceList />;

//   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
//   if (!service) {
//     return <div className="min-h-screen flex items-center justify-center bg-white text-black"><p className="text-lg font-semibold border-b-2 border-[#00D3CD]">Service not found</p></div>;
//   }

//   return <ServiceDetail service={service} />;
// };

// export default Services;








// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   ArrowRight,
//   Banknote,
//   Building2,
//   Code2,
//   CreditCard,
//   Headphones,
//   Landmark,
//   LockKeyhole,
//   Plane,
//   QrCode,
//   Rocket,
//   ShieldCheck,
//   Smartphone,
//   UsersRound,
//   WalletCards,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import servicesData from "./Servicesdata.json";

// const groupDefinitions = [
//   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
//   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
//   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
//   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
//   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// ];

// const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];

// const CategoryCard = ({ title, description, Icon }) => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <a
//       href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
//       className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_4px_15px_rgba(15,37,76,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300"
//     >
//       <div className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
//         <Icon size={15} strokeWidth={1.6} />
//       </div>

//       <h3 className="text-[10px] font-bold leading-tight text-[#091d48]">
//         {title}
//       </h3>

//       <div className="mt-0.5 flex flex-1 flex-col">
//         <p
//           className={`text-[8px] leading-3 text-slate-500 ${expanded ? "" : "line-clamp-1"}`}
//         >
//           {description}
//         </p>

//         <button
//           type="button"
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             setExpanded(!expanded);
//           }}
//           className="mt-0.5 w-fit text-cyan-600"
//         >
//           <ChevronDown
//             size={10}
//             className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
//           />
//         </button>

//         <div className="mt-auto flex justify-end pt-0.5">
//           <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
//             <ArrowRight size={9} />
//           </span>
//         </div>
//       </div>
//     </a>
//   );
// };

// const ServiceItem = ({ service, index }) => {
//   const Icon = serviceIcons[index % serviceIcons.length];
//   return (
//     <Link to={`/services/${service.id}`} className="group flex min-w-0 flex-1 flex-col items-center px-1.5 py-2 text-center transition hover:bg-cyan-50/60 sm:border-l sm:border-slate-100 first:border-l-0">
//       <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] group-hover:scale-110">
//         <Icon size={13} strokeWidth={1.7} />
//       </div>
//       <h4 className="line-clamp-2 text-[10px] font-extrabold text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
//       <p className="mt-0.5 line-clamp-1 text-[8px] leading-3 text-slate-500">{service.description}</p>
//     </Link>
//   );
// };

// const ServiceRow = ({ group }) => {
//   const [expanded, setExpanded] = useState(false);
//   const Icon = group.icon;

//   const serviceMap = new Map(
//     servicesData.map((service) => [service.id, service])
//   );

//   const services = group.ids
//     .map((id) => serviceMap.get(id))
//     .filter(Boolean);

//   const [showAllServices, setShowAllServices] = useState(false);

//   return (
//     <section
//       id={group.title.toLowerCase().replace(/\s+/g, "-")}
//       className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
//     >
//       <div className="flex flex-col lg:flex-row">
//         <div className="flex w-full shrink-0 flex-row items-start gap-2 bg-gradient-to-br from-slate-50 to-cyan-50 p-3 lg:w-40 lg:flex-col lg:items-start lg:justify-center">
//           <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
//             <Icon size={18} />
//           </div>

//           <div className="flex-1 lg:flex-none">
//             <h2 className="text-sm font-bold text-[#09215a]">
//               {group.title}
//             </h2>

//             <p
//               className={`mt-0.5 text-[10px] leading-4 text-slate-600 transition-all ${expanded ? "" : "line-clamp-1"}`}
//             >
//               {group.description}
//             </p>

//             <button
//               type="button"
//               onClick={() => setExpanded(!expanded)}
//               className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-600 transition hover:text-cyan-700"
//             >
//               {expanded ? "View Less" : "View All"}
//               {expanded ? (
//                 <ChevronUp size={10} />
//               ) : (
//                 <ChevronDown size={10} />
//               )}
//             </button>
//           </div>
//         </div>

//         <div className="grid flex-1 grid-cols-2 border-t border-slate-100 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 lg:border-l lg:border-t-0">
//           {services.length ? (
//             <>
//               {(showAllServices ? services : services.slice(0, 3)).map((service, index) => (
//                 <ServiceItem
//                   key={service.id}
//                   service={service}
//                   index={index}
//                 />
//               ))}

//               {!showAllServices && services.length > 3 && (
//                 <button
//                   onClick={() => setShowAllServices(true)}
//                   className="flex min-h-[74px] flex-col items-center justify-center gap-1.5 border border-slate-100 bg-slate-50 transition hover:bg-slate-100"
//                 >
//                   <ChevronDown className="h-4 w-4 text-slate-600" />
//                   <span className="text-xs font-medium text-slate-700">
//                     View All
//                   </span>
//                 </button>
//               )}

//               {showAllServices && services.length > 3 && (
//                 <button
//                   onClick={() => setShowAllServices(false)}
//                   className="flex min-h-[74px] flex-col items-center justify-center gap-1.5 border border-slate-100 bg-slate-50 transition hover:bg-slate-100"
//                 >
//                   <ChevronUp className="h-4 w-4 text-slate-600" />
//                   <span className="text-xs font-medium text-slate-700">
//                     Show Less
//                   </span>
//                 </button>
//               )}
//             </>
//           ) : (
//             <div className="col-span-full flex h-28 items-center justify-center text-xs text-slate-500">
//               No services available.
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ServiceList = () => (
//   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-6 font-sans text-[#0b1d45]">
//     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
//       <div className="absolute -right-16 top-6 -z-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
//       <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-9 sm:px-6 md:grid-cols-2 lg:px-7 lg:py-14">
//         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
//           {/* <p className="mb-3 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-cyan-600">
//             <span className="h-1 w-1 rounded-full bg-cyan-500" /> All Services
//           </p> */}
//           <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#0a2050] sm:text-3xl">
//             Complete Financial Ecosystem for Modern Businesses
//           </h1>
//           <p className="mt-3 max-w-lg text-sm leading-5 text-[#526783]">
//             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
//           </p>
//           <div className="mt-5 flex flex-wrap gap-2">
//             <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md bg-[#12afc1] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/20">
//               Get Started Now <ArrowRight size={12} />
//             </Link>
//             <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md border border-cyan-500 bg-white px-4 py-2 text-xs font-bold text-cyan-600">
//               Talk to Sales <Headphones size={12} />
//             </Link>
//           </div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-48 w-full max-w-sm md:block">
//           <div className="absolute inset-x-2 bottom-0.5 h-9 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
//           <div className="absolute bottom-3 left-7 h-24 w-19 -rotate-6 rounded-2xl border-2 border-slate-700 bg-white p-1.5 shadow-2xl">
//             <p className="text-[6px] font-bold text-[#08235a]">ABHEEPAY</p>
//             <div className="mt-2 grid grid-cols-4 gap-0.5">
//               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-2 bg-slate-900" />)}
//             </div>
//             <p className="mt-1.5 text-center text-[5px] text-slate-500">Scan & Pay</p>
//           </div>
//           <div className="absolute bottom-3 left-1/2 h-35 w-24 -translate-x-1/2 rotate-6 overflow-hidden rounded-[17px] border-[5px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-2 shadow-2xl">
//             <div className="h-3 w-9 rounded-full bg-[#061a43]" />
//             <p className="mt-5 text-[6px] text-white/70">Total Transactions</p>
//             <p className="text-base font-bold text-white">₹ 68,490</p>
//             <div className="mt-4 flex h-8 items-end gap-0.5">
//               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
//                 <span key={index} style={{ height: height * 0.67 }} className="w-2 rounded-t bg-cyan-300" />
//               ))}
//             </div>
//           </div>
//           <div className="absolute bottom-3 right-4 w-24 rounded-xl bg-white p-2 shadow-xl">
//             <p className="text-[7px] font-bold text-slate-700">Receipts</p>
//             <div className="mt-1.5 space-y-1.5 text-[6px] text-slate-500">
//               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
//               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
//               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
//             </div>
//           </div>
//           <div className="absolute bottom-2 right-19 rotate-12 rounded-xl bg-white p-1.5 shadow-xl">
//             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-14 w-14 object-contain" />
//           </div>
//           <div className="absolute right-4 top-8 rounded-xl bg-white px-2 py-1.5 text-[10px] font-bold text-[#0b376a] shadow-lg">
//             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
//           </div>
//           <div className="absolute bottom-11 left-0.5 rounded-2xl bg-cyan-500 p-2 text-white shadow-lg">
//             <LockKeyhole size={18} />
//           </div>
//         </motion.div>
//       </div>
//     </section>

//     <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-7">
//       <div className="mb-3 flex items-center justify-between">
//         <h2 className="text-base font-extrabold text-[#0b1d45]">Top Service Categories</h2>
//         <a href="#payment-solutions" className="text-[10px] font-bold text-cyan-600">
//           Explore All Services <ArrowRight className="inline" size={10} />
//         </a>
//       </div>
//       <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
//         {groupDefinitions.map((group) => (
//           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
//         ))}
//       </div>
//       <div className="mt-3">
//         {groupDefinitions.map((group) => (
//           <ServiceRow key={group.title} group={group} />
//         ))}
//       </div>
//       <section className="mt-3 grid overflow-hidden rounded-2xl bg-[#071d48] text-white sm:grid-cols-4">
//         {[
//           [UsersRound, "10,000+", "Active Merchants"],
//           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
//           [ShieldCheck, "99.99%", "System Uptime"],
//           [Headphones, "24×7", "Customer Support"],
//         ].map(([Icon, value, label]) => (
//           <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
//             <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
//               <Icon size={15} />
//             </span>
//             <span>
//               <b className="block text-sm">{value}</b>
//               <small className="text-[10px] text-slate-300">{label}</small>
//             </span>
//           </div>
//         ))}
//       </section>
//       <section className="relative mt-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-4 py-5 text-white sm:px-6">
//         <Rocket className="absolute -bottom-4 right-7 h-19 w-19 rotate-[-20deg] text-white/25" />
//         <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
//           <div>
//             <h2 className="text-lg font-extrabold">Ready to Transform Your Business?</h2>
//             <p className="mt-1.5 text-xs text-white/90">Join thousands of businesses already growing with ABHEEPAY.</p>
//           </div>
//           <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#10366e]">
//             Create Account Now <ArrowRight size={12} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   </main>
// );

// const ServiceDetail = ({ service }) => {
//   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
//   const features = service.features || [];
//   const highlights = service.benefits || [];
//   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
//   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

//   return (
//     <motion.div initial="hidden" animate="visible" className="bg-white min-h-screen font-sans text-gray-800 py-5 px-3 md:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-7">
//           <motion.div variants={fadeInUp} className="md:w-1/2">
//             <h1 className="text-2xl md:text-3xl font-black text-gray-900 mt-4 leading-tight">{service.name}</h1>
//             <div className="flex items-center gap-2 mt-3 text-gray-500 text-xs">
//               <motion.span initial={{ width: 0 }} animate={{ width: 21 }} transition={{ delay: 0.3, duration: 0.5 }} className="h-[2px] bg-[#00D3CD]" />
//               <span>Abheepay Team • 2026</span>
//             </div>
//           </motion.div>
//           <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="md:w-1/2 relative w-full">
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="absolute -top-3 -left-3 w-full h-[145px] sm:h-[185px] md:h-[210px] border-2 border-[#00D3CD] rounded-lg -z-10" />
//             <div className="w-full h-[145px] sm:h-[185px] md:h-[210px] overflow-hidden rounded-lg shadow-xl bg-white p-2">
//               <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={mainImg} alt={service.name} className="w-full h-full object-fill object-center" />
//             </div>
//           </motion.div>
//         </div>
//         <div className="grid md:grid-cols-3 gap-4 mt-8">
//           <div className="md:col-span-2 space-y-4">
//             <motion.p variants={fadeInUp} className="text-sm text-gray-600 leading-relaxed max-w-2xl">
//               {service.longDescription || service.description}
//             </motion.p>
//             <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
//               {features.map((text, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeInUp}
//                   whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.2 } }}
//                   className="p-3 border-b md:border-r border-gray-100 flex items-center gap-2 bg-white text-gray-900 transition-colors cursor-default"
//                 >
//                   <span className="text-[#00D3CD] font-bold text-base">→</span>
//                   <span className="font-bold text-sm">{text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="bg-[#00D3CD] p-4 flex flex-col min-h-[215px] shadow-lg relative overflow-hidden"
//           >
//             <h2 className="text-base font-black mb-4 tracking-tighter text-black">BENEFITS</h2>
//             <div className="space-y-3">
//               {highlights.map((benefit, index) => (
//                 <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
//                   <p className="text-black font-bold text-sm leading-tight uppercase">{benefit}</p>
//                   {index !== highlights.length - 1 && <div className="w-full h-[1px] bg-black/20 mt-3" />}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//         <motion.div variants={fadeInUp} className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-4 gap-3">
//           <Link to="/services" className="text-xs font-bold border border-black px-4 py-1.5 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest">
//             — BACK TO SERVICES
//           </Link>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const Services = () => {
//   const { id } = useParams();

//   if (!id) return <ServiceList />;

//   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white text-black">
//         <p className="text-base font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
//       </div>
//     );
//   }

//   return <ServiceDetail service={service} />;
// };

// export default Services;










// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   ArrowRight,
//   Banknote,
//   Building2,
//   Code2,
//   CreditCard,
//   Headphones,
//   Landmark,
//   LockKeyhole,
//   Plane,
//   QrCode,
//   Rocket,
//   ShieldCheck,
//   Smartphone,
//   UsersRound,
//   WalletCards,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import servicesData from "./Servicesdata.json";

// const groupDefinitions = [
//   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
//   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
//   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
//   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
//   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// ];

// const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];

// const trustAvatars = [
//   { initial: "A", color: "#f97316" },
//   { initial: "R", color: "#0ea5e9" },
//   { initial: "S", color: "#22c55e" },
// ];

// const CategoryCard = ({ title, description, Icon }) => (
//   <a
//     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
//     className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_4px_15px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
//   >
//     <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
//       <Icon size={22} strokeWidth={1.6} />
//     </div>

//     <h3 className="text-sm font-bold leading-tight text-[#091d48]">
//       {title}
//     </h3>

//     <p className="mt-1.5 flex-1 text-xs leading-5 text-slate-500">
//       {description}
//     </p>

//     <div className="mt-3 flex justify-end">
//       <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
//         <ArrowRight size={13} />
//       </span>
//     </div>
//   </a>
// );

// const ServiceItem = ({ service, index }) => {
//   const Icon = serviceIcons[index % serviceIcons.length];
//   return (
//     <Link
//       to={`/services/${service.id}`}
//       className="group flex flex-col gap-2 rounded-xl border border-slate-100 bg-white p-3.5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
//     >
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
//         <Icon size={17} strokeWidth={1.7} />
//       </div>
//       <h4 className="line-clamp-2 text-sm font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
//       <p className="line-clamp-2 text-xs leading-5 text-slate-500">{service.description}</p>
//     </Link>
//   );
// };

// const ServiceRow = ({ group }) => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const Icon = group.icon;

//   const serviceMap = new Map(
//     servicesData.map((service) => [service.id, service])
//   );

//   const services = group.ids
//     .map((id) => serviceMap.get(id))
//     .filter(Boolean);

//   return (
//     <section
//       id={group.title.toLowerCase().replace(/\s+/g, "-")}
//       className="flex flex-col gap-3 border-b border-slate-100 py-4 first:pt-2 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
//     >
//       <div
//         className={`flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 transition-colors duration-200 lg:w-56 lg:flex-col lg:items-start lg:justify-center ${
//           showAllServices
//             ? "border-cyan-500 bg-cyan-50/60"
//             : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
//         }`}
//       >
//         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
//           <Icon size={18} />
//         </div>

//         <div className="flex-1 lg:flex-none">
//           <h2 className="text-sm font-bold text-[#09215a]">
//             {group.title}
//           </h2>

//           <button
//             type="button"
//             onClick={() => setShowAllServices(!showAllServices)}
//             className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 transition hover:text-cyan-700"
//           >
//             {showAllServices ? "View Less" : "View All"}
//             {showAllServices ? (
//               <ChevronUp size={12} />
//             ) : (
//               <ChevronDown size={12} />
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//         {services.length ? (
//           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
//             <ServiceItem
//               key={service.id}
//               service={service}
//               index={index}
//             />
//           ))
//         ) : (
//           <div className="col-span-full flex h-24 items-center justify-center text-sm text-slate-500">
//             No services available.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const ServiceList = () => (
//   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-6 font-sans text-[#0b1d45]">
//     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
//       <div className="absolute -right-16 top-6 -z-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
//       <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-9 sm:px-6 md:grid-cols-2 lg:px-7 lg:py-14">
//         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
//           <h1 className="max-w-xl text-3xl font-black leading-[1.08] tracking-tight text-[#0a2050] sm:text-4xl">
//             Complete Financial Ecosystem for Modern Businesses
//           </h1>
//           <p className="mt-3 max-w-lg text-sm leading-6 text-[#526783] sm:text-base">
//             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
//           </p>
//           <div className="mt-5 flex flex-wrap gap-2">
//             <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md bg-[#12afc1] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20">
//               Get Started Now <ArrowRight size={12} />
//             </Link>
//             <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md border border-cyan-500 bg-white px-4 py-2.5 text-xs font-bold text-cyan-600">
//               Talk to Sales <Headphones size={12} />
//             </Link>
//           </div>

//           <div className="mt-5 flex items-center gap-3">
//             <div className="flex -space-x-3">
//               {trustAvatars.map((avatar) => (
//                 <span
//                   key={avatar.initial}
//                   style={{ backgroundColor: avatar.color }}
//                   className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow"
//                 >
//                   {avatar.initial}
//                 </span>
//               ))}
//             </div>
//             <p className="text-xs leading-4 text-slate-600">
//               Trusted by <b className="text-[#0a2050]">10,000+ businesses</b>
//               <br />
//               across India
//             </p>
//           </div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-48 w-full max-w-sm md:block">
//           <div className="absolute inset-x-2 bottom-0.5 h-9 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
//           <div className="absolute bottom-3 left-7 h-24 w-19 -rotate-6 rounded-2xl border-2 border-slate-700 bg-white p-1.5 shadow-2xl">
//             <p className="text-[6px] font-bold text-[#08235a]">ABHEEPAY</p>
//             <div className="mt-2 grid grid-cols-4 gap-0.5">
//               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-2 bg-slate-900" />)}
//             </div>
//             <p className="mt-1.5 text-center text-[5px] text-slate-500">Scan & Pay</p>
//           </div>
//           <div className="absolute bottom-3 left-1/2 h-35 w-24 -translate-x-1/2 rotate-6 overflow-hidden rounded-[17px] border-[5px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-2 shadow-2xl">
//             <div className="h-3 w-9 rounded-full bg-[#061a43]" />
//             <p className="mt-5 text-[6px] text-white/70">Total Transactions</p>
//             <p className="text-base font-bold text-white">₹ 68,490</p>
//             <div className="mt-4 flex h-8 items-end gap-0.5">
//               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
//                 <span key={index} style={{ height: height * 0.67 }} className="w-2 rounded-t bg-cyan-300" />
//               ))}
//             </div>
//           </div>
//           <div className="absolute bottom-3 right-4 w-24 rounded-xl bg-white p-2 shadow-xl">
//             <p className="text-[7px] font-bold text-slate-700">Receipts</p>
//             <div className="mt-1.5 space-y-1.5 text-[6px] text-slate-500">
//               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
//               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
//               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
//             </div>
//           </div>
//           <div className="absolute bottom-2 right-19 rotate-12 rounded-xl bg-white p-1.5 shadow-xl">
//             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-14 w-14 object-contain" />
//           </div>
//           <div className="absolute right-4 top-8 rounded-xl bg-white px-2 py-1.5 text-[10px] font-bold text-[#0b376a] shadow-lg">
//             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
//           </div>
//           <div className="absolute bottom-11 left-0.5 rounded-2xl bg-cyan-500 p-2 text-white shadow-lg">
//             <LockKeyhole size={18} />
//           </div>
//         </motion.div>
//       </div>
//     </section>

//     <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-7">
//       <div className="mb-3 flex items-center justify-between">
//         <h2 className="text-base font-extrabold text-[#0b1d45] sm:text-lg">Top Service Categories</h2>
//         <a href="#payment-solutions" className="text-xs font-bold text-cyan-600">
//           Explore All Services <ArrowRight className="inline" size={12} />
//         </a>
//       </div>
//       <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
//         {groupDefinitions.map((group) => (
//           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
//         ))}
//       </div>

//       <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
//         {groupDefinitions.map((group) => (
//           <ServiceRow key={group.title} group={group} />
//         ))}
//       </div>

//       <section className="mt-6 grid overflow-hidden rounded-2xl bg-[#071d48] text-white sm:grid-cols-4">
//         {[
//           [UsersRound, "10,000+", "Active Merchants"],
//           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
//           [ShieldCheck, "99.99%", "System Uptime"],
//           [Headphones, "24×7", "Customer Support"],
//         ].map(([Icon, value, label]) => (
//           <div key={label} className="flex items-center justify-center gap-2.5 border-white/15 p-4 sm:border-r last:border-r-0">
//             <span className="rounded-full bg-cyan-400/10 p-2.5 text-cyan-300">
//               <Icon size={16} />
//             </span>
//             <span>
//               <b className="block text-base">{value}</b>
//               <small className="text-[11px] text-slate-300">{label}</small>
//             </span>
//           </div>
//         ))}
//       </section>

//       <section className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-4 py-6 text-white sm:px-6">
//         <Rocket className="absolute -bottom-4 right-7 h-19 w-19 rotate-[-20deg] text-white/25" />
//         <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
//           <div>
//             <h2 className="text-lg font-extrabold sm:text-xl">Ready to Transform Your Business?</h2>
//             <p className="mt-1.5 text-xs text-white/90 sm:text-sm">Join thousands of businesses already growing with ABHEEPAY.</p>
//           </div>
//           <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-[#10366e]">
//             Create Account Now <ArrowRight size={12} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   </main>
// );

// const ServiceDetail = ({ service }) => {
//   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
//   const features = service.features || [];
//   const highlights = service.benefits || [];
//   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
//   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

//   return (
//     <motion.div initial="hidden" animate="visible" className="bg-white min-h-screen font-sans text-gray-800 py-5 px-3 md:px-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-7">
//           <motion.div variants={fadeInUp} className="md:w-1/2">
//             <h1 className="text-2xl md:text-3xl font-black text-gray-900 mt-4 leading-tight">{service.name}</h1>
//             <div className="flex items-center gap-2 mt-3 text-gray-500 text-xs">
//               <motion.span initial={{ width: 0 }} animate={{ width: 21 }} transition={{ delay: 0.3, duration: 0.5 }} className="h-[2px] bg-[#00D3CD]" />
//               <span>Abheepay Team • 2026</span>
//             </div>
//           </motion.div>
//           <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="md:w-1/2 relative w-full">
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="absolute -top-3 -left-3 w-full h-[145px] sm:h-[185px] md:h-[210px] border-2 border-[#00D3CD] rounded-lg -z-10" />
//             <div className="w-full h-[145px] sm:h-[185px] md:h-[210px] overflow-hidden rounded-lg shadow-xl bg-white p-2">
//               <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={mainImg} alt={service.name} className="w-full h-full object-fill object-center" />
//             </div>
//           </motion.div>
//         </div>
//         <div className="grid md:grid-cols-3 gap-4 mt-8">
//           <div className="md:col-span-2 space-y-4">
//             <motion.p variants={fadeInUp} className="text-sm text-gray-600 leading-relaxed max-w-2xl">
//               {service.longDescription || service.description}
//             </motion.p>
//             <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
//               {features.map((text, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeInUp}
//                   whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.2 } }}
//                   className="p-3 border-b md:border-r border-gray-100 flex items-center gap-2 bg-white text-gray-900 transition-colors cursor-default"
//                 >
//                   <span className="text-[#00D3CD] font-bold text-base">→</span>
//                   <span className="font-bold text-sm">{text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="bg-[#00D3CD] p-4 flex flex-col min-h-[215px] shadow-lg relative overflow-hidden"
//           >
//             <h2 className="text-base font-black mb-4 tracking-tighter text-black">BENEFITS</h2>
//             <div className="space-y-3">
//               {highlights.map((benefit, index) => (
//                 <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
//                   <p className="text-black font-bold text-sm leading-tight uppercase">{benefit}</p>
//                   {index !== highlights.length - 1 && <div className="w-full h-[1px] bg-black/20 mt-3" />}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//         <motion.div variants={fadeInUp} className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-4 gap-3">
//           <Link to="/services" className="text-xs font-bold border border-black px-4 py-1.5 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest">
//             — BACK TO SERVICES
//           </Link>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const Services = () => {
//   const { id } = useParams();

//   if (!id) return <ServiceList />;

//   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white text-black">
//         <p className="text-base font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
//       </div>
//     );
//   }

//   return <ServiceDetail service={service} />;
// };

// export default Services;







// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   ArrowRight,
//   Banknote,
//   Building2,
//   Code2,
//   CreditCard,
//   Headphones,
//   Landmark,
//   LockKeyhole,
//   Plane,
//   QrCode,
//   Rocket,
//   ShieldCheck,
//   Smartphone,
//   UsersRound,
//   WalletCards,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import servicesData from "./Servicesdata.json";

// const groupDefinitions = [
//   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
//   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
//   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
//   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
//   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// ];

// const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];

// const trustAvatars = [
//   { initial: "A", color: "#f97316" },
//   { initial: "R", color: "#0ea5e9" },
//   { initial: "S", color: "#22c55e" },
// ];

// const CategoryCard = ({ title, description, Icon }) => (
//   <a
//     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
//     className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-[0_3px_12px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
//   >
//     <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
//       <Icon size={18} strokeWidth={1.6} />
//     </div>

//     <h3 className="text-xs font-bold leading-tight text-[#091d48]">
//       {title}
//     </h3>

//     <p className="mt-1 flex-1 text-[11px] leading-4 text-slate-500">
//       {description}
//     </p>

//     <div className="mt-2.5 flex justify-end">
//       <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
//         <ArrowRight size={11} />
//       </span>
//     </div>
//   </a>
// );

// const ServiceItem = ({ service, index }) => {
//   const Icon = serviceIcons[index % serviceIcons.length];
//   return (
//     <Link
//       to={`/services/${service.id}`}
//       className="group flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
//     >
//       <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
//         <Icon size={14} strokeWidth={1.7} />
//       </div>
//       <h4 className="line-clamp-2 text-xs font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
//       <p className="line-clamp-2 text-[11px] leading-4 text-slate-500">{service.description}</p>
//     </Link>
//   );
// };

// const ServiceRow = ({ group }) => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const Icon = group.icon;

//   const serviceMap = new Map(
//     servicesData.map((service) => [service.id, service])
//   );

//   const services = group.ids
//     .map((id) => serviceMap.get(id))
//     .filter(Boolean);

//   return (
//     <section
//       id={group.title.toLowerCase().replace(/\s+/g, "-")}
//       className="flex flex-col gap-2.5 border-b border-slate-100 py-3 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-5"
//     >
//       <div
//         className={`flex shrink-0 items-center gap-2.5 rounded-lg border-l-4 p-2.5 transition-colors duration-200 lg:w-44 lg:flex-col lg:items-start lg:justify-center ${
//           showAllServices
//             ? "border-cyan-500 bg-cyan-50/60"
//             : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
//         }`}
//       >
//         <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
//           <Icon size={15} />
//         </div>

//         <div className="flex-1 lg:flex-none">
//           <h2 className="text-xs font-bold text-[#09215a]">
//             {group.title}
//           </h2>

//           <button
//             type="button"
//             onClick={() => setShowAllServices(!showAllServices)}
//             className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-600 transition hover:text-cyan-700"
//           >
//             {showAllServices ? "View Less" : "View All"}
//             {showAllServices ? (
//               <ChevronUp size={10} />
//             ) : (
//               <ChevronDown size={10} />
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
//         {services.length ? (
//           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
//             <ServiceItem
//               key={service.id}
//               service={service}
//               index={index}
//             />
//           ))
//         ) : (
//           <div className="col-span-full flex h-20 items-center justify-center text-xs text-slate-500">
//             No services available.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const ServiceList = () => (
//   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-5 font-sans text-[#0b1d45]">
//     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
//       <div className="absolute -right-13 top-5 -z-10 h-51 w-51 rounded-full bg-cyan-200/30 blur-3xl" />
//       <div className="mx-auto grid max-w-6xl items-center gap-4 px-3 py-7 sm:px-5 md:grid-cols-2 lg:px-6 lg:py-12">
//         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
//           <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#2DD4BF] sm:text-3xl">
//             Complete Financial Ecosystem for Modern Businesses
//           </h1>
//           <p className="mt-2.5 max-w-lg text-xs leading-5 text-[#526783] sm:text-sm">
//             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
//           </p>
//           <div className="mt-4 flex flex-wrap gap-1.5">
//             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md bg-[#2DD4BF] px-3 py-2 text-[11px] font-bold text-white shadow-lg shadow-cyan-500/20">
//               Get Started Now <ArrowRight size={10} />
//             </Link>
//             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md border border-cyan-500 bg-white px-3 py-2 text-[11px] font-bold text-cyan-600">
//               Talk to Sales <Headphones size={15} />
//             </Link>
//           </div>

//           <div className="mt-4 flex items-center gap-2.5">
//             <div className="flex -space-x-2.5">
//               {trustAvatars.map((avatar) => (
//                 <span
//                   key={avatar.initial}
//                   style={{ backgroundColor: avatar.color }}
//                   className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
//                 >
//                   {avatar.initial}
//                 </span>
//               ))}
//             </div>
//             <p className="text-[11px] leading-4 text-slate-600">
//               Trusted by <b className="text-[#00AEB2]">10,000+ businesses</b>
//               <br />
//               across India
//             </p>
//           </div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-38 w-full max-w-xs md:block">
//           <div className="absolute inset-x-1.5 bottom-0.5 h-7 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
//           <div className="absolute bottom-2.5 left-6 h-19 w-15 -rotate-6 rounded-xl border-2 border-slate-700 bg-white p-1 shadow-2xl">
//             <p className="text-[5px] font-bold text-[#08235a]">ABHEEPAY</p>
//             <div className="mt-1.5 grid grid-cols-4 gap-0.5">
//               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-1.5 bg-slate-900" />)}
//             </div>
//             <p className="mt-1 text-center text-[4px] text-slate-500">Scan & Pay</p>
//           </div>
//           <div className="absolute bottom-2.5 left-1/2 h-28 w-19 -translate-x-1/2 rotate-6 overflow-hidden rounded-[14px] border-[4px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-1.5 shadow-2xl">
//             <div className="h-2.5 w-7 rounded-full bg-[#061a43]" />
//             <p className="mt-4 text-[5px] text-white/70">Total Transactions</p>
//             <p className="text-sm font-bold text-white">₹ 68,490</p>
//             <div className="mt-3 flex h-6 items-end gap-0.5">
//               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
//                 <span key={index} style={{ height: height * 0.54 }} className="w-1.5 rounded-t bg-cyan-300" />
//               ))}
//             </div>
//           </div>
//           <div className="absolute bottom-2.5 right-3 w-19 rounded-lg bg-white p-1.5 shadow-xl">
//             <p className="text-[6px] font-bold text-slate-700">Receipts</p>
//             <div className="mt-1 space-y-1 text-[5px] text-slate-500">
//               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
//               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
//               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
//             </div>
//           </div>
//           <div className="absolute bottom-1.5 right-15 rotate-12 rounded-lg bg-white p-1 shadow-xl">
//             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-11 w-11 object-contain" />
//           </div>
//           <div className="absolute right-3 top-6 rounded-lg bg-white px-1.5 py-1 text-[8px] font-bold text-[#0b376a] shadow-lg">
//             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
//           </div>
//           <div className="absolute bottom-9 left-0.5 rounded-xl bg-cyan-500 p-1.5 text-white shadow-lg">
//             <LockKeyhole size={14} />
//           </div>
//         </motion.div>
//       </div>
//     </section>

//     <div className="mx-auto max-w-6xl px-3 py-4 sm:px-5 lg:px-6">
//       <div className="mb-2.5 flex items-center justify-between">
//         <h2 className="text-sm font-extrabold text-[#0b1d45] sm:text-base">Top Service Categories</h2>
//         <a href="#payment-solutions" className="text-[11px] font-bold text-cyan-600">
//           Explore All Services <ArrowRight className="inline" size={10} />
//         </a>
//       </div>
//       <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
//         {groupDefinitions.map((group) => (
//           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
//         ))}
//       </div>

//       <div className="mt-5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4">
//         {groupDefinitions.map((group) => (
//           <ServiceRow key={group.title} group={group} />
//         ))}
//       </div>

//       <section className="mt-5 grid overflow-hidden rounded-xl bg-[#071d48] text-white sm:grid-cols-4">
//         {[
//           [UsersRound, "10,000+", "Active Merchants"],
//           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
//           [ShieldCheck, "99.99%", "System Uptime"],
//           [Headphones, "24×7", "Customer Support"],
//         ].map(([Icon, value, label]) => (
//           <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
//             <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
//               <Icon size={13} />
//             </span>
//             <span>
//               <b className="block text-sm">{value}</b>
//               <small className="text-[9px] text-slate-300">{label}</small>
//             </span>
//           </div>
//         ))}
//       </section>

//       <section className="relative mt-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-3 py-5 text-white sm:px-5">
//         <Rocket className="absolute -bottom-3 right-6 h-15 w-15 rotate-[-20deg] text-white/25" />
//         <div className="relative flex flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center">
//           <div>
//             <h2 className="text-base font-extrabold sm:text-lg">Ready to Transform Your Business?</h2>
//             <p className="mt-1 text-[11px] text-white/90 sm:text-xs">Join thousands of businesses already growing with ABHEEPAY.</p>
//           </div>
//           <Link to="/contact" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-[#10366e]">
//             Join Us Now <ArrowRight size={10} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   </main>
// );



// // Service Details

// const ServiceDetail = ({ service }) => {
//   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
//   const features = service.features || [];
//   const highlights = service.benefits || [];
//   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
//   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

//   return (
//     <motion.div initial="hidden" animate="visible" className="bg-white min-h-screen font-sans text-gray-800 py-12 px-2.5 md:px-6">
//       <div className="max-w-3xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <motion.div variants={fadeInUp} className="md:w-1/2">
//             <h1 className="text-xl md:text-2xl font-black text-gray-900 mt-3 leading-tight">{service.name}</h1>
//             <div className="flex items-center gap-1.5 mt-2.5 text-gray-500 text-[11px]">
//               <motion.span initial={{ width: 0 }} animate={{ width: 17 }} transition={{ delay: 0.3, duration: 0.5 }} className="h-[2px] bg-[#00D3CD]" />
//               <span>Abheepay Team • 2026</span>
//             </div>
//           </motion.div>
//           <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="md:w-1/2 relative w-full">
//             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="absolute -top-2.5 -left-2.5 w-full h-[116px] sm:h-[148px] md:h-[168px] border-2 border-[#00D3CD] rounded-lg -z-10" />
//             <div className="w-full h-[116px] sm:h-[148px] md:h-[168px] overflow-hidden rounded-lg shadow-xl bg-white p-1.5">
//               <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={mainImg} alt={service.name} className="w-full h-full object-fill object-center" />
//             </div>
//           </motion.div>
//         </div>
//         <div className="grid md:grid-cols-3 gap-3 mt-6">
//           <div className="md:col-span-2 space-y-3">
//             <motion.p variants={fadeInUp} className="text-xs text-gray-600 leading-relaxed max-w-2xl">
//               {service.longDescription || service.description}
//             </motion.p>
//             <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
//               {features.map((text, index) => (
//                 <motion.div
//                   key={index}
//                   variants={fadeInUp}
//                   whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.2 } }}
//                   className="p-2.5 border-b md:border-r border-gray-100 flex items-center gap-1.5 bg-white text-gray-900 transition-colors cursor-default"
//                 >
//                   <span className="text-[#00D3CD] font-bold text-sm">→</span>
//                   <span className="font-bold text-xs">{text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="bg-[#00D3CD] p-3 flex flex-col min-h-[172px] shadow-lg relative overflow-hidden"
//           >
//             <h2 className="text-sm font-black mb-3 tracking-tighter text-black">BENEFITS</h2>
//             <div className="space-y-2.5">
//               {highlights.map((benefit, index) => (
//                 <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
//                   <p className="text-black font-bold text-xs leading-tight uppercase">{benefit}</p>
//                   {index !== highlights.length - 1 && <div className="w-full h-[1px] bg-black/20 mt-2.5" />}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//         <motion.div variants={fadeInUp} className="mt-6 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-3 gap-2.5">
//           <Link to="/services" className="text-[11px] font-bold border border-black px-3 py-1 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest">
//             — BACK TO SERVICES
//           </Link>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const Services = () => {
//   const { id } = useParams();

//   if (!id) return <ServiceList />;

//   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white text-black">
//         <p className="text-sm font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
//       </div>
//     );
//   }

//   return <ServiceDetail service={service} />;
// };

// export default Services;




// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   ArrowRight,
//   Banknote,
//   Building2,
//   Code2,
//   CreditCard,
//   FileText,
//   Headphones,
//   Landmark,
//   LockKeyhole,
//   Plane,
//   QrCode,
//   Rocket,
//   ShieldCheck,
//   Smartphone,
//   UsersRound,
//   WalletCards,
//   ChevronDown,
//   ChevronUp,
//   ClipboardList,
// } from "lucide-react";
// import servicesData from "./Servicesdata.json";

// const groupDefinitions = [
//   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
//   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
//   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
//   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
//   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// ];

// const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// const trustAvatars = [
//   { initial: "A", color: "#f97316" },
//   { initial: "R", color: "#0ea5e9" },
//   { initial: "S", color: "#22c55e" },
// ];

// const CategoryCard = ({ title, description, Icon }) => (
//   <a
//     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
//     className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-[0_3px_12px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
//   >
//     <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
//       <Icon size={18} strokeWidth={1.6} />
//     </div>

//     <h3 className="text-xs font-bold leading-tight text-[#091d48]">
//       {title}
//     </h3>

//     <p className="mt-1 flex-1 text-[11px] leading-4 text-slate-500">
//       {description}
//     </p>

//     <div className="mt-2.5 flex justify-end">
//       <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
//         <ArrowRight size={11} />
//       </span>
//     </div>
//   </a>
// );

// const ServiceItem = ({ service, index }) => {
//   const Icon = serviceIcons[index % serviceIcons.length];
//   return (
//     <Link
//       to={`/services/${service.id}`}
//       className="group flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
//     >
//       <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
//         <Icon size={14} strokeWidth={1.7} />
//       </div>
//       <h4 className="line-clamp-2 text-xs font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
//       <p className="line-clamp-2 text-[11px] leading-4 text-slate-500">{service.description}</p>
//     </Link>
//   );
// };

// const ServiceRow = ({ group }) => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const Icon = group.icon;

//   const serviceMap = new Map(
//     servicesData.map((service) => [service.id, service])
//   );

//   const services = group.ids
//     .map((id) => serviceMap.get(id))
//     .filter(Boolean);

//   return (
//     <section
//       id={group.title.toLowerCase().replace(/\s+/g, "-")}
//       className="flex flex-col gap-2.5 border-b border-slate-100 py-3 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-5"
//     >
//       <div
//         className={`flex shrink-0 items-center gap-2.5 rounded-lg border-l-4 p-2.5 transition-colors duration-200 lg:w-44 lg:flex-col lg:items-start lg:justify-center ${
//           showAllServices
//             ? "border-cyan-500 bg-cyan-50/60"
//             : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
//         }`}
//       >
//         <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
//           <Icon size={15} />
//         </div>

//         <div className="flex-1 lg:flex-none">
//           <h2 className="text-xs font-bold text-[#09215a]">
//             {group.title}
//           </h2>

//           <button
//             type="button"
//             onClick={() => setShowAllServices(!showAllServices)}
//             className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-600 transition hover:text-cyan-700"
//           >
//             {showAllServices ? "View Less" : "View All"}
//             {showAllServices ? (
//               <ChevronUp size={10} />
//             ) : (
//               <ChevronDown size={10} />
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
//         {services.length ? (
//           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
//             <ServiceItem
//               key={service.id}
//               service={service}
//               index={index}
//             />
//           ))
//         ) : (
//           <div className="col-span-full flex h-20 items-center justify-center text-xs text-slate-500">
//             No services available.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const ServiceList = () => (
//   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-5 font-sans text-[#0b1d45]">
//     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
//       <div className="absolute -right-13 top-5 -z-10 h-51 w-51 rounded-full bg-cyan-200/30 blur-3xl" />
//       <div className="mx-auto grid max-w-6xl items-center gap-4 px-3 py-7 sm:px-5 md:grid-cols-2 lg:px-6 lg:py-12">
//         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
//           <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#2DD4BF] sm:text-3xl">
//             Complete Financial Ecosystem for Modern Businesses
//           </h1>
//           <p className="mt-2.5 max-w-lg text-xs leading-5 text-[#526783] sm:text-sm">
//             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
//           </p>
//           <div className="mt-4 flex flex-wrap gap-1.5">
//             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md bg-[#2DD4BF] px-3 py-2 text-[11px] font-bold text-white shadow-lg shadow-cyan-500/20">
//               Get Started Now <ArrowRight size={10} />
//             </Link>
//             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md border border-cyan-500 bg-white px-3 py-2 text-[11px] font-bold text-cyan-600">
//               Talk to Sales <Headphones size={15} />
//             </Link>
//           </div>

//           <div className="mt-4 flex items-center gap-2.5">
//             <div className="flex -space-x-2.5">
//               {trustAvatars.map((avatar) => (
//                 <span
//                   key={avatar.initial}
//                   style={{ backgroundColor: avatar.color }}
//                   className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
//                 >
//                   {avatar.initial}
//                 </span>
//               ))}
//             </div>
//             <p className="text-[11px] leading-4 text-slate-600">
//               Trusted by <b className="text-[#00AEB2]">10,000+ businesses</b>
//               <br />
//               across India
//             </p>
//           </div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-38 w-full max-w-xs md:block">
//           <div className="absolute inset-x-1.5 bottom-0.5 h-7 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
//           <div className="absolute bottom-2.5 left-6 h-19 w-15 -rotate-6 rounded-xl border-2 border-slate-700 bg-white p-1 shadow-2xl">
//             <p className="text-[5px] font-bold text-[#08235a]">ABHEEPAY</p>
//             <div className="mt-1.5 grid grid-cols-4 gap-0.5">
//               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-1.5 bg-slate-900" />)}
//             </div>
//             <p className="mt-1 text-center text-[4px] text-slate-500">Scan & Pay</p>
//           </div>
//           <div className="absolute bottom-2.5 left-1/2 h-28 w-19 -translate-x-1/2 rotate-6 overflow-hidden rounded-[14px] border-[4px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-1.5 shadow-2xl">
//             <div className="h-2.5 w-7 rounded-full bg-[#061a43]" />
//             <p className="mt-4 text-[5px] text-white/70">Total Transactions</p>
//             <p className="text-sm font-bold text-white">₹ 68,490</p>
//             <div className="mt-3 flex h-6 items-end gap-0.5">
//               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
//                 <span key={index} style={{ height: height * 0.54 }} className="w-1.5 rounded-t bg-cyan-300" />
//               ))}
//             </div>
//           </div>
//           <div className="absolute bottom-2.5 right-3 w-19 rounded-lg bg-white p-1.5 shadow-xl">
//             <p className="text-[6px] font-bold text-slate-700">Receipts</p>
//             <div className="mt-1 space-y-1 text-[5px] text-slate-500">
//               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
//               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
//               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
//             </div>
//           </div>
//           <div className="absolute bottom-1.5 right-15 rotate-12 rounded-lg bg-white p-1 shadow-xl">
//             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-11 w-11 object-contain" />
//           </div>
//           <div className="absolute right-3 top-6 rounded-lg bg-white px-1.5 py-1 text-[8px] font-bold text-[#0b376a] shadow-lg">
//             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
//           </div>
//           <div className="absolute bottom-9 left-0.5 rounded-xl bg-cyan-500 p-1.5 text-white shadow-lg">
//             <LockKeyhole size={14} />
//           </div>
//         </motion.div>
//       </div>
//     </section>

//     <div className="mx-auto max-w-6xl px-3 py-4 sm:px-5 lg:px-6">
//       <div className="mb-2.5 flex items-center justify-between">
//         <h2 className="text-sm font-extrabold text-[#0b1d45] sm:text-base">Top Service Categories</h2>
//         <a href="#payment-solutions" className="text-[11px] font-bold text-cyan-600">
//           Explore All Services <ArrowRight className="inline" size={10} />
//         </a>
//       </div>
//       <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
//         {groupDefinitions.map((group) => (
//           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
//         ))}
//       </div>

//       <div className="mt-5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4">
//         {groupDefinitions.map((group) => (
//           <ServiceRow key={group.title} group={group} />
//         ))}
//       </div>

//       <section className="mt-5 grid overflow-hidden rounded-xl bg-[#071d48] text-white sm:grid-cols-4">
//         {[
//           [UsersRound, "10,000+", "Active Merchants"],
//           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
//           [ShieldCheck, "99.99%", "System Uptime"],
//           [Headphones, "24×7", "Customer Support"],
//         ].map(([Icon, value, label]) => (
//           <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
//             <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
//               <Icon size={13} />
//             </span>
//             <span>
//               <b className="block text-sm">{value}</b>
//               <small className="text-[9px] text-slate-300">{label}</small>
//             </span>
//           </div>
//         ))}
//       </section>

//       <section className="relative mt-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-3 py-5 text-white sm:px-5">
//         <Rocket className="absolute -bottom-3 right-6 h-15 w-15 rotate-[-20deg] text-white/25" />
//         <div className="relative flex flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center">
//           <div>
//             <h2 className="text-base font-extrabold sm:text-lg">Ready to Transform Your Business?</h2>
//             <p className="mt-1 text-[11px] text-white/90 sm:text-xs">Join thousands of businesses already growing with ABHEEPAY.</p>
//           </div>
//           <Link to="/contact" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-[#10366e]">
//             Join Us Now <ArrowRight size={10} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   </main>
// );

// // Service Details
 
// const ServiceDetail = ({ service, category }) => {
//   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
//   const features = service.features || [];
//   const highlights = service.benefits || [];
//   const categoryLabel = category || "Our Services";
 
//   const nameWords = service.name.trim().split(" ");
//   const lastWord = nameWords.pop();
//   const restName = nameWords.join(" ");
 
//   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
//   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
 
//   return (
//     <div className="bg-white font-sans text-[#0b1d45]">
//       {/* Hero */}
//       <section className="border-b border-slate-100 bg-gradient-to-b from-[#f4faf9] to-white px-3 py-7 sm:px-5 md:px-7 md:py-12">
//         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.span
//               variants={fadeInUp}
//               className="inline-flex items-center gap-1 rounded-full bg-[#00D3CD]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#00A79D]"
//             >
//               <FileText size={10} /> {categoryLabel}
//             </motion.span>
 
//             <motion.h1
//               variants={fadeInUp}
//               className="mt-3 text-[1.7rem] font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-[1.95rem]"
//             >
//               {restName ? `${restName} ` : ""}
//               <span className="text-[#00D3CD]">{lastWord}</span>
//             </motion.h1>
 
//             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8 bg-[#00D3CD]" />
 
//             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5 text-slate-500">
//               {service.longDescription || service.description}
//             </motion.p>
 
//             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
//               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00D3CD]/10 text-[#00A79D]">
//                 <UsersRound size={10} />
//               </span>
//               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
//             </motion.div>
//           </motion.div>
 
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="relative mx-auto w-full max-w-sm"
//           >
//             <div className="relative overflow-hidden rounded-xl shadow-xl">
//               <motion.img
//                 whileHover={{ scale: 1.04 }}
//                 transition={{ duration: 0.3 }}
//                 src={mainImg}
//                 alt={service.name}
//                 className="h-48 w-full object-cover sm:h-60"
//               />
//               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
//             </div>
 
//             {service.partner && (
//               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
//                 <p className="text-[8px] font-semibold text-slate-500">In Partnership with</p>
//                 {service.partner.logo ? (
//                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
//                 ) : (
//                   <p className="text-xs font-black text-[#0b1d45]">{service.partner.name}</p>
//                 )}
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </section>
 
//       {/* Solutions + Benefits */}
//       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
//         <div className="grid gap-6 md:grid-cols-3">
//           <div className="md:col-span-2">
//             <div className="h-[2px] w-8 bg-[#00D3CD]" />
//             <h2 className="mt-2 text-base font-black text-slate-900 sm:text-lg">Our {categoryLabel}</h2>
 
//             {features.length ? (
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={staggerContainer}
//                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
//               >
//                 {features.map((text, index) => {
//                   const Icon = serviceIcons[index % serviceIcons.length];
//                   return (
//                     <motion.div
//                       key={index}
//                       variants={fadeInUp}
//                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D3CD]/60 hover:shadow-md"
//                     >
//                       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00D3CD]/10 text-[#00A79D]">
//                         <Icon size={12} strokeWidth={1.7} />
//                       </div>
//                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug text-slate-800">{text}</p>
//                       <div className="mt-2 flex justify-end">
//                         <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#00D3CD]/40 text-[#00A79D] transition-all duration-300 group-hover:bg-[#00D3CD] group-hover:text-white">
//                           <ArrowRight size={9} />
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             ) : (
//               <p className="mt-4 text-[13px] text-slate-500">More details coming soon.</p>
//             )}
//           </div>
 
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="relative flex flex-col overflow-hidden rounded-xl bg-[#00D3CD] p-4 text-white shadow-lg"
//           >
//             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
//               {Array.from({ length: 24 }).map((_, index) => (
//                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
//               ))}
//             </div>
 
//             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
//             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />
 
//             <div className="mt-3.5 space-y-3">
//               {highlights.length ? (
//                 highlights.map((benefit, index) => {
//                   const Icon = benefitIcons[index % benefitIcons.length];
//                   return (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -15 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.05 }}
//                     >
//                       <div className="flex items-start gap-2">
//                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#00A79D]">
//                           <Icon size={11} />
//                         </span>
//                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
//                       </div>
//                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
//                     </motion.div>
//                   );
//                 })
//               ) : (
//                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </section>
 
//       {/* CTA */}
//       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 bg-[#f7fdfc] p-4 sm:flex-row sm:p-6"
//         >
//           <div className="flex items-center gap-3 text-center sm:text-left">
//             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00D3CD]/10 text-[#00A79D] sm:flex">
//               <Landmark size={20} />
//             </span>
//             <div>
//               <h3 className="text-sm font-black text-slate-900 sm:text-base">Ready to grow your business?</h3>
//               <p className="mt-1 max-w-sm text-[13px] text-slate-500">
//                 Explore our services and find the right financial solution that fits your needs.
//               </p>
//             </div>
//           </div>
 
//           <Link
//             to="/services"
//             className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#00D3CD] px-3 py-2 text-[11px] font-bold text-white shadow-md shadow-[#00D3CD]/30 transition hover:bg-[#00bdb8]"
//           >
//             Back to Services <ArrowRight size={10} />
//           </Link>
//         </motion.div>
//       </section>
//     </div>
//   );
// };
 
// const Services = () => {
//   const { id } = useParams();
 
//   if (!id) return <ServiceList />;
 
//   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white text-black">
//         <p className="text-sm font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
//       </div>
//     );
//   }
 
//   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;
 
//   return <ServiceDetail service={service} category={category} />;
// };
 
// export default Services;









// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   ArrowRight,
//   Banknote,
//   Building2,
//   Code2,
//   CreditCard,
//   FileText,
//   Headphones,
//   Landmark,
//   LockKeyhole,
//   Plane,
//   QrCode,
//   Rocket,
//   ShieldCheck,
//   Smartphone,
//   UsersRound,
//   WalletCards,
//   ChevronDown,
//   ChevronUp,
//   ClipboardList,
// } from "lucide-react";
// import servicesData from "./Servicesdata.json";

// const groupDefinitions = [
//   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
//   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
//   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
//   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
//   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// ];

// const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// const trustAvatars = [
//   { initial: "A", color: "#f97316" },
//   { initial: "R", color: "#0ea5e9" },
//   { initial: "S", color: "#22c55e" },
// ];

// const CategoryCard = ({ title, description, Icon }) => (
//   <a
//     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
//     className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-[0_3px_12px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
//   >
//     <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
//       <Icon size={18} strokeWidth={1.6} />
//     </div>

//     <h3 className="text-xs font-bold leading-tight text-[#091d48]">
//       {title}
//     </h3>

//     <p className="mt-1 flex-1 text-[11px] leading-4 text-slate-500">
//       {description}
//     </p>

//     <div className="mt-2.5 flex justify-end">
//       <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
//         <ArrowRight size={11} />
//       </span>
//     </div>
//   </a>
// );

// const ServiceItem = ({ service, index }) => {
//   const Icon = serviceIcons[index % serviceIcons.length];
//   return (
//     <Link
//       to={`/services/${service.id}`}
//       className="group flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
//     >
//       <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
//         <Icon size={14} strokeWidth={1.7} />
//       </div>
//       <h4 className="line-clamp-2 text-xs font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
//       <p className="line-clamp-2 text-[11px] leading-4 text-slate-500">{service.description}</p>
//     </Link>
//   );
// };

// const ServiceRow = ({ group }) => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const Icon = group.icon;

//   const serviceMap = new Map(
//     servicesData.map((service) => [service.id, service])
//   );

//   const services = group.ids
//     .map((id) => serviceMap.get(id))
//     .filter(Boolean);

//   return (
//     <section
//       id={group.title.toLowerCase().replace(/\s+/g, "-")}
//       className="flex flex-col gap-2.5 border-b border-slate-100 py-3 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-5"
//     >
//       <div
//         className={`flex shrink-0 items-center gap-2.5 rounded-lg border-l-4 p-2.5 transition-colors duration-200 lg:w-44 lg:flex-col lg:items-start lg:justify-center ${
//           showAllServices
//             ? "border-cyan-500 bg-cyan-50/60"
//             : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
//         }`}
//       >
//         <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
//           <Icon size={15} />
//         </div>

//         <div className="flex-1 lg:flex-none">
//           <h2 className="text-xs font-bold text-[#09215a]">
//             {group.title}
//           </h2>

//           <button
//             type="button"
//             onClick={() => setShowAllServices(!showAllServices)}
//             className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-600 transition hover:text-cyan-700"
//           >
//             {showAllServices ? "View Less" : "View All"}
//             {showAllServices ? (
//               <ChevronUp size={10} />
//             ) : (
//               <ChevronDown size={10} />
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
//         {services.length ? (
//           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
//             <ServiceItem
//               key={service.id}
//               service={service}
//               index={index}
//             />
//           ))
//         ) : (
//           <div className="col-span-full flex h-20 items-center justify-center text-xs text-slate-500">
//             No services available.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// const ServiceList = () => (
//   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-5 font-sans text-[#0b1d45]">
//     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
//       <div className="absolute -right-13 top-5 -z-10 h-51 w-51 rounded-full bg-cyan-200/30 blur-3xl" />
//       <div className="mx-auto grid max-w-6xl items-center gap-4 px-3 py-7 sm:px-5 md:grid-cols-2 lg:px-6 lg:py-12">
//         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
//           <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#2DD4BF] sm:text-3xl">
//             Complete Financial Ecosystem for Modern Businesses
//           </h1>
//           <p className="mt-2.5 max-w-lg text-xs leading-5 text-[#526783] sm:text-sm">
//             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
//           </p>
//           <div className="mt-4 flex flex-wrap gap-1.5">
//             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md bg-[#2DD4BF] px-3 py-2 text-[11px] font-bold text-white shadow-lg shadow-cyan-500/20">
//               Get Started Now <ArrowRight size={10} />
//             </Link>
//             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md border border-cyan-500 bg-white px-3 py-2 text-[11px] font-bold text-cyan-600">
//               Talk to Sales <Headphones size={15} />
//             </Link>
//           </div>

//           <div className="mt-4 flex items-center gap-2.5">
//             <div className="flex -space-x-2.5">
//               {trustAvatars.map((avatar) => (
//                 <span
//                   key={avatar.initial}
//                   style={{ backgroundColor: avatar.color }}
//                   className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
//                 >
//                   {avatar.initial}
//                 </span>
//               ))}
//             </div>
//             <p className="text-[11px] leading-4 text-slate-600">
//               Trusted by <b className="text-[#00AEB2]">10,000+ businesses</b>
//               <br />
//               across India
//             </p>
//           </div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-38 w-full max-w-xs md:block">
//           <div className="absolute inset-x-1.5 bottom-0.5 h-7 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
//           <div className="absolute bottom-2.5 left-6 h-19 w-15 -rotate-6 rounded-xl border-2 border-slate-700 bg-white p-1 shadow-2xl">
//             <p className="text-[5px] font-bold text-[#08235a]">ABHEEPAY</p>
//             <div className="mt-1.5 grid grid-cols-4 gap-0.5">
//               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-1.5 bg-slate-900" />)}
//             </div>
//             <p className="mt-1 text-center text-[4px] text-slate-500">Scan & Pay</p>
//           </div>
//           <div className="absolute bottom-2.5 left-1/2 h-28 w-19 -translate-x-1/2 rotate-6 overflow-hidden rounded-[14px] border-[4px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-1.5 shadow-2xl">
//             <div className="h-2.5 w-7 rounded-full bg-[#061a43]" />
//             <p className="mt-4 text-[5px] text-white/70">Total Transactions</p>
//             <p className="text-sm font-bold text-white">₹ 68,490</p>
//             <div className="mt-3 flex h-6 items-end gap-0.5">
//               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
//                 <span key={index} style={{ height: height * 0.54 }} className="w-1.5 rounded-t bg-cyan-300" />
//               ))}
//             </div>
//           </div>
//           <div className="absolute bottom-2.5 right-3 w-19 rounded-lg bg-white p-1.5 shadow-xl">
//             <p className="text-[6px] font-bold text-slate-700">Receipts</p>
//             <div className="mt-1 space-y-1 text-[5px] text-slate-500">
//               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
//               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
//               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
//             </div>
//           </div>
//           <div className="absolute bottom-1.5 right-15 rotate-12 rounded-lg bg-white p-1 shadow-xl">
//             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-11 w-11 object-contain" />
//           </div>
//           <div className="absolute right-3 top-6 rounded-lg bg-white px-1.5 py-1 text-[8px] font-bold text-[#0b376a] shadow-lg">
//             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
//           </div>
//           <div className="absolute bottom-9 left-0.5 rounded-xl bg-cyan-500 p-1.5 text-white shadow-lg">
//             <LockKeyhole size={14} />
//           </div>
//         </motion.div>
//       </div>
//     </section>

//     <div className="mx-auto max-w-6xl px-3 py-4 sm:px-5 lg:px-6">
//       <div className="mb-2.5 flex items-center justify-between">
//         <h2 className="text-sm font-extrabold text-[#0b1d45] sm:text-base">Top Service Categories</h2>
//         <a href="#payment-solutions" className="text-[11px] font-bold text-cyan-600">
//           Explore All Services <ArrowRight className="inline" size={10} />
//         </a>
//       </div>
//       <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
//         {groupDefinitions.map((group) => (
//           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
//         ))}
//       </div>

//       <div className="mt-5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4">
//         {groupDefinitions.map((group) => (
//           <ServiceRow key={group.title} group={group} />
//         ))}
//       </div>

//       <section className="mt-5 grid overflow-hidden rounded-xl bg-[#071d48] text-white sm:grid-cols-4">
//         {[
//           [UsersRound, "10,000+", "Active Merchants"],
//           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
//           [ShieldCheck, "99.99%", "System Uptime"],
//           [Headphones, "24×7", "Customer Support"],
//         ].map(([Icon, value, label]) => (
//           <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
//             <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
//               <Icon size={13} />
//             </span>
//             <span>
//               <b className="block text-sm">{value}</b>
//               <small className="text-[9px] text-slate-300">{label}</small>
//             </span>
//           </div>
//         ))}
//       </section>

//       <section className="relative mt-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-3 py-5 text-white sm:px-5">
//         <Rocket className="absolute -bottom-3 right-6 h-15 w-15 rotate-[-20deg] text-white/25" />
//         <div className="relative flex flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center">
//           <div>
//             <h2 className="text-base font-extrabold sm:text-lg">Ready to Transform Your Business?</h2>
//             <p className="mt-1 text-[11px] text-white/90 sm:text-xs">Join thousands of businesses already growing with ABHEEPAY.</p>
//           </div>
//           <Link to="/contact" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-[#10366e]">
//             Join Us Now <ArrowRight size={10} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   </main>
// );

// // Service Details

// const ServiceDetail = ({ service, category }) => {
//   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
//   const features = service.features || [];
//   const highlights = service.benefits || [];
//   const categoryLabel = category || "Our Services";

//   const nameWords = service.name.trim().split(" ");
//   const lastWord = nameWords.pop();
//   const restName = nameWords.join(" ");

//   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
//   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

//   return (
//     <div className="bg-white font-sans text-[#0b1d45]">
//       {/* Hero */}
//       <section className="border-b border-slate-100 bg-gradient-to-b from-[#f4faf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
//         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.span
//               variants={fadeInUp}
//               className="inline-flex items-center gap-1 rounded-full bg-[#00D3CD]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#00A79D]"
//             >
//               <FileText size={10} /> {categoryLabel}
//             </motion.span>

//             <motion.h1
//               variants={fadeInUp}
//               className="mt-3 text-[1.7rem] font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-[1.95rem]"
//             >
//               {restName ? `${restName} ` : ""}
//               <span className="text-[#00D3CD]">{lastWord}</span>
//             </motion.h1>

//             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8 bg-[#00D3CD]" />

//             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5 text-slate-500">
//               {service.longDescription || service.description}
//             </motion.p>

//             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
//               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00D3CD]/10 text-[#00A79D]">
//                 <UsersRound size={10} />
//               </span>
//               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="relative mx-auto w-full max-w-sm"
//           >
//             <div className="relative overflow-hidden rounded-xl shadow-xl">
//               <motion.img
//                 whileHover={{ scale: 1.04 }}
//                 transition={{ duration: 0.3 }}
//                 src={mainImg}
//                 alt={service.name}
//                 className="h-48 w-full object-cover sm:h-60"
//               />
//               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
//             </div>

//             {service.partner && (
//               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
//                 <p className="text-[8px] font-semibold text-slate-500">In Partnership with</p>
//                 {service.partner.logo ? (
//                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
//                 ) : (
//                   <p className="text-xs font-black text-[#0b1d45]">{service.partner.name}</p>
//                 )}
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </section>

//       {/* Solutions + Benefits */}
//       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
//         <div className="grid gap-6 md:grid-cols-3">
//           <div className="md:col-span-2">
//             <div className="h-[2px] w-8 bg-[#00D3CD]" />
//             <h2 className="mt-2 text-base font-black text-slate-900 sm:text-lg">Our {categoryLabel}</h2>

//             {features.length ? (
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={staggerContainer}
//                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
//               >
//                 {features.map((text, index) => {
//                   const Icon = serviceIcons[index % serviceIcons.length];
//                   return (
//                     <motion.div
//                       key={index}
//                       variants={fadeInUp}
//                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D3CD]/60 hover:shadow-md"
//                     >
//                       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00D3CD]/10 text-[#00A79D]">
//                         <Icon size={12} strokeWidth={1.7} />
//                       </div>
//                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug text-slate-800">{text}</p>
//                       <div className="mt-2 flex justify-end">
//                         <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#00D3CD]/40 text-[#00A79D] transition-all duration-300 group-hover:bg-[#00D3CD] group-hover:text-white">
//                           <ArrowRight size={9} />
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             ) : (
//               <p className="mt-4 text-[13px] text-slate-500">More details coming soon.</p>
//             )}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="relative flex flex-col overflow-hidden rounded-xl bg-[#00D3CD] p-4 text-white shadow-lg"
//           >
//             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
//               {Array.from({ length: 24 }).map((_, index) => (
//                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
//               ))}
//             </div>

//             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
//             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />

//             <div className="mt-3.5 space-y-3">
//               {highlights.length ? (
//                 highlights.map((benefit, index) => {
//                   const Icon = benefitIcons[index % benefitIcons.length];
//                   return (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -15 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: index * 0.05 }}
//                     >
//                       <div className="flex items-start gap-2">
//                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#00A79D]">
//                           <Icon size={11} />
//                         </span>
//                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
//                       </div>
//                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
//                     </motion.div>
//                   );
//                 })
//               ) : (
//                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 bg-[#f7fdfc] p-4 sm:flex-row sm:p-6"
//         >
//           <div className="flex items-center gap-3 text-center sm:text-left">
//             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00D3CD]/10 text-[#00A79D] sm:flex">
//               <Landmark size={20} />
//             </span>
//             <div>
//               <h3 className="text-sm font-black text-slate-900 sm:text-base">Ready to grow your business?</h3>
//               <p className="mt-1 max-w-sm text-[13px] text-slate-500">
//                 Explore our services and find the right financial solution that fits your needs.
//               </p>
//             </div>
//           </div>

//           <Link
//             to="/services"
//             className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#00D3CD] px-3 py-2 text-[11px] font-bold text-white shadow-md shadow-[#00D3CD]/30 transition hover:bg-[#00bdb8]"
//           >
//             Back to Services <ArrowRight size={10} />
//           </Link>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// const Services = () => {
//   const { id } = useParams();

//   if (!id) return <ServiceList />;

//   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white text-black">
//         <p className="text-sm font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
//       </div>
//     );
//   }

//   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

//   return <ServiceDetail service={service} category={category} />;
// };

// export default Services;












import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Banknote,
  Building2,
  Code2,
  CreditCard,
  FileText,
  Headphones,
  Landmark,
  LockKeyhole,
  Plane,
  QrCode,
  Rocket,
  ShieldCheck,
  Smartphone,
  UsersRound,
  WalletCards,
  ChevronDown,
  ChevronUp,
  ClipboardList,
} from "lucide-react";
import servicesData from "./Servicesdata.json";

const groupDefinitions = [
  { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
  { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
  { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
  { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
  { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
];

const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

const trustAvatars = [
  { initial: "A", color: "#f97316" },
  { initial: "R", color: "#0ea5e9" },
  { initial: "S", color: "#22c55e" },
];

const CategoryCard = ({ title, description, Icon }) => (
  <a
    href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
    className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-[0_3px_12px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
  >
    <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
      <Icon size={18} strokeWidth={1.6} />
    </div>

    <h3 className="text-xs font-bold leading-tight text-[#091d48]">
      {title}
    </h3>

    <p className="mt-1 flex-1 text-[11px] leading-4 text-slate-500">
      {description}
    </p>

    <div className="mt-2.5 flex justify-end">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
        <ArrowRight size={11} />
      </span>
    </div>
  </a>
);

const ServiceItem = ({ service, index }) => {
  const Icon = serviceIcons[index % serviceIcons.length];
  return (
    <Link
      to={`/services/${service.id}`}
      className="group flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
        <Icon size={14} strokeWidth={1.7} />
      </div>
      <h4 className="line-clamp-2 text-xs font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
      <p className="line-clamp-2 text-[11px] leading-4 text-slate-500">{service.description}</p>
    </Link>
  );
};

const ServiceRow = ({ group }) => {
  const [showAllServices, setShowAllServices] = useState(false);
  const Icon = group.icon;

  const serviceMap = new Map(
    servicesData.map((service) => [service.id, service])
  );

  const services = group.ids
    .map((id) => serviceMap.get(id))
    .filter(Boolean);

  return (
    <section
      id={group.title.toLowerCase().replace(/\s+/g, "-")}
      className="flex flex-col gap-2.5 border-b border-slate-100 py-3 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-5"
    >
      <div
        className={`flex shrink-0 items-center gap-2.5 rounded-lg border-l-4 p-2.5 transition-colors duration-200 lg:w-44 lg:flex-col lg:items-start lg:justify-center ${
          showAllServices
            ? "border-cyan-500 bg-cyan-50/60"
            : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
        }`}
      >
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
          <Icon size={15} />
        </div>

        <div className="flex-1 lg:flex-none">
          <h2 className="text-xs font-bold text-[#09215a]">
            {group.title}
          </h2>

          <button
            type="button"
            onClick={() => setShowAllServices(!showAllServices)}
            className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-600 transition hover:text-cyan-700"
          >
            {showAllServices ? "View Less" : "View All"}
            {showAllServices ? (
              <ChevronUp size={10} />
            ) : (
              <ChevronDown size={10} />
            )}
          </button>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {services.length ? (
          (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              index={index}
            />
          ))
        ) : (
          <div className="col-span-full flex h-20 items-center justify-center text-xs text-slate-500">
            No services available.
          </div>
        )}
      </div>
    </section>
  );
};

const ServiceList = () => (
  <main id="top" className="overflow-hidden bg-[#fbfdff] pb-5 font-sans text-[#0b1d45]">
    <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
      <div className="absolute -right-13 top-5 -z-10 h-51 w-51 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-4 px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:grid-cols-2 lg:px-6 lg:pb-12 lg:pt-16">
        <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
          <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#2DD4BF] sm:text-3xl">
            Complete Financial Ecosystem for Modern Businesses
          </h1>
          <p className="mt-2.5 max-w-lg text-xs leading-5 text-[#526783] sm:text-sm">
            Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <Link to="/contact" className="inline-flex items-center gap-1 rounded-md bg-[#2DD4BF] px-3 py-2 text-[11px] font-bold text-white shadow-lg shadow-cyan-500/20">
              Get Started Now <ArrowRight size={10} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-1 rounded-md border border-cyan-500 bg-white px-3 py-2 text-[11px] font-bold text-cyan-600">
              Talk to Sales <Headphones size={15} />
            </Link>
          </div>

          <div className="mt-4 flex items-center gap-2.5">
            <div className="flex -space-x-2.5">
              {trustAvatars.map((avatar) => (
                <span
                  key={avatar.initial}
                  style={{ backgroundColor: avatar.color }}
                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
                >
                  {avatar.initial}
                </span>
              ))}
            </div>
            <p className="text-[11px] leading-4 text-slate-600">
              Trusted by <b className="text-[#00AEB2]">10,000+ businesses</b>
              <br />
              across India
            </p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-38 w-full max-w-xs md:block">
          <div className="absolute inset-x-1.5 bottom-0.5 h-7 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
          <div className="absolute bottom-2.5 left-6 h-19 w-15 -rotate-6 rounded-xl border-2 border-slate-700 bg-white p-1 shadow-2xl">
            <p className="text-[5px] font-bold text-[#08235a]">ABHEEPAY</p>
            <div className="mt-1.5 grid grid-cols-4 gap-0.5">
              {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-1.5 bg-slate-900" />)}
            </div>
            <p className="mt-1 text-center text-[4px] text-slate-500">Scan & Pay</p>
          </div>
          <div className="absolute bottom-2.5 left-1/2 h-28 w-19 -translate-x-1/2 rotate-6 overflow-hidden rounded-[14px] border-[4px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-1.5 shadow-2xl">
            <div className="h-2.5 w-7 rounded-full bg-[#061a43]" />
            <p className="mt-4 text-[5px] text-white/70">Total Transactions</p>
            <p className="text-sm font-bold text-white">₹ 68,490</p>
            <div className="mt-3 flex h-6 items-end gap-0.5">
              {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
                <span key={index} style={{ height: height * 0.54 }} className="w-1.5 rounded-t bg-cyan-300" />
              ))}
            </div>
          </div>
          <div className="absolute bottom-2.5 right-3 w-19 rounded-lg bg-white p-1.5 shadow-xl">
            <p className="text-[6px] font-bold text-slate-700">Receipts</p>
            <div className="mt-1 space-y-1 text-[5px] text-slate-500">
              <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
              <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
              <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
            </div>
          </div>
          <div className="absolute bottom-1.5 right-15 rotate-12 rounded-lg bg-white p-1 shadow-xl">
            <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-11 w-11 object-contain" />
          </div>
          <div className="absolute right-3 top-6 rounded-lg bg-white px-1.5 py-1 text-[8px] font-bold text-[#0b376a] shadow-lg">
            Successful<br />Transactions <span className="text-cyan-500">12,650</span>
          </div>
          <div className="absolute bottom-9 left-0.5 rounded-xl bg-cyan-500 p-1.5 text-white shadow-lg">
            <LockKeyhole size={14} />
          </div>
        </motion.div>
      </div>
    </section>

    <div className="mx-auto max-w-6xl px-3 py-4 sm:px-5 lg:px-6">
      <div className="mb-2.5 flex items-center justify-between">
        <h2 className="text-sm font-extrabold text-[#0b1d45] sm:text-base">Top Service Categories</h2>
        <a href="#payment-solutions" className="text-[11px] font-bold text-cyan-600">
          Explore All Services <ArrowRight className="inline" size={10} />
        </a>
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
        {groupDefinitions.map((group) => (
          <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4">
        {groupDefinitions.map((group) => (
          <ServiceRow key={group.title} group={group} />
        ))}
      </div>

      <section className="mt-5 grid overflow-hidden rounded-xl bg-[#071d48] text-white sm:grid-cols-4">
        {[
          [UsersRound, "10,000+", "Active Merchants"],
          [WalletCards, "₹500 Cr+", "Monthly Transactions"],
          [ShieldCheck, "99.99%", "System Uptime"],
          [Headphones, "24×7", "Customer Support"],
        ].map(([Icon, value, label]) => (
          <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
            <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
              <Icon size={13} />
            </span>
            <span>
              <b className="block text-sm">{value}</b>
              <small className="text-[9px] text-slate-300">{label}</small>
            </span>
          </div>
        ))}
      </section>

      <section className="relative mt-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-3 py-5 text-white sm:px-5">
        <Rocket className="absolute -bottom-3 right-6 h-15 w-15 rotate-[-20deg] text-white/25" />
        <div className="relative flex flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-base font-extrabold sm:text-lg">Ready to Transform Your Business?</h2>
            <p className="mt-1 text-[11px] text-white/90 sm:text-xs">Join thousands of businesses already growing with ABHEEPAY.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-[#10366e]">
            Join Us Now <ArrowRight size={10} />
          </Link>
        </div>
      </section>
    </div>
  </main>
);

// Service Details

const ServiceDetail = ({ service, category }) => {
  const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
  const features = service.features || [];
  const highlights = service.benefits || [];
  const categoryLabel = category || "Our Services";

  const nameWords = service.name.trim().split(" ");
  const lastWord = nameWords.pop();
  const restName = nameWords.join(" ");

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

  return (
    <div className="bg-white font-sans text-[#0b1d45]">
      {/* Hero */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-[#f4faf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
        <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-1 rounded-full bg-[#00D3CD]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#00A79D]"
            >
              <FileText size={10} /> {categoryLabel}
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="mt-3 text-[1.7rem] font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-[1.95rem]"
            >
              {restName ? `${restName} ` : ""}
              <span className="text-[#00D3CD]">{lastWord}</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8 bg-[#00D3CD]" />

            <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5 text-slate-500">
              {service.longDescription || service.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00D3CD]/10 text-[#00A79D]">
                <UsersRound size={10} />
              </span>
              <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                src={mainImg}
                alt={service.name}
                className="h-48 w-full object-cover sm:h-60"
              />
              <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {service.partner && (
              <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
                <p className="text-[8px] font-semibold text-slate-500">In Partnership with</p>
                {service.partner.logo ? (
                  <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
                ) : (
                  <p className="text-xs font-black text-[#0b1d45]">{service.partner.name}</p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Solutions + Benefits */}
      <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="h-[2px] w-8 bg-[#00D3CD]" />
            <h2 className="mt-2 text-base font-black text-slate-900 sm:text-lg">Our {categoryLabel}</h2>

            {features.length ? (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {features.map((text, index) => {
                  const Icon = serviceIcons[index % serviceIcons.length];
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D3CD]/60 hover:shadow-md"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00D3CD]/10 text-[#00A79D]">
                        <Icon size={12} strokeWidth={1.7} />
                      </div>
                      <p className="mt-2 flex-1 text-[13px] font-bold leading-snug text-slate-800">{text}</p>
                      <div className="mt-2 flex justify-end">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#00D3CD]/40 text-[#00A79D] transition-all duration-300 group-hover:bg-[#00D3CD] group-hover:text-white">
                          <ArrowRight size={9} />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <p className="mt-4 text-[13px] text-slate-500">More details coming soon.</p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col overflow-hidden rounded-xl bg-[#00D3CD] p-4 text-white shadow-lg"
          >
            <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} className="h-1 w-1 rounded-full bg-white" />
              ))}
            </div>

            <h2 className="text-sm font-black tracking-tight">Benefits</h2>
            <div className="mt-1.5 h-[2px] w-7 bg-white/70" />

            <div className="mt-3.5 space-y-3">
              {highlights.length ? (
                highlights.map((benefit, index) => {
                  const Icon = benefitIcons[index % benefitIcons.length];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex items-start gap-2">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#00A79D]">
                          <Icon size={11} />
                        </span>
                        <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
                      </div>
                      {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
                    </motion.div>
                  );
                })
              ) : (
                <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 bg-[#f7fdfc] p-4 sm:flex-row sm:p-6"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00D3CD]/10 text-[#00A79D] sm:flex">
              <Landmark size={20} />
            </span>
            <div>
              <h3 className="text-sm font-black text-slate-900 sm:text-base">Ready to grow your business?</h3>
              <p className="mt-1 max-w-sm text-[13px] text-slate-500">
                Explore our services and find the right financial solution that fits your needs.
              </p>
            </div>
          </div>

          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#00D3CD] px-3 py-2 text-[11px] font-bold text-white shadow-md shadow-[#00D3CD]/30 transition hover:bg-[#00bdb8]"
          >
            Back to Services <ArrowRight size={10} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

const Services = () => {
  const { id } = useParams();

  if (!id) return <ServiceList />;

  const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <p className="text-sm font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
      </div>
    );
  }

  const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

  return <ServiceDetail service={service} category={category} />;
};

export default Services;