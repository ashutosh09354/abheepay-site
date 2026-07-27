// // // import React from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Building2,
// // //   Code2,
// // //   CreditCard,
// // //   Headphones,
// // //   Landmark,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   UsersRound,
// // //   WalletCards,
// // //   ChevronDown,
// // //   ChevronUp,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];



// // // const CategoryCard = ({ title, description, Icon }) => {
// // //   const [expanded, setExpanded] = useState(false);

// // //   return (
// // //     <a
// // //       href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //       className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-2 shadow-[0_4px_15px_rgba(15,37,76,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300"
// // //     >
// // //       {/* Icon */}
// // //       <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
// // //         <Icon size={22} strokeWidth={1.6} />
// // //       </div>

// // //       {/* Title */}
// // //       <h3 className="text-[12px] font-bold leading-tight text-[#091d48]">
// // //         {title}
// // //       </h3>

// // //       {/* Description */}
// // //       <div className="mt-1 flex flex-1 flex-col">
// // //         <p
// // //           className={`text-[10px] leading-4 text-slate-500 ${expanded ? "" : "line-clamp-1"
// // //             }`}
// // //         >
// // //           {description}
// // //         </p>

// // //         {/* Expand Button */}
// // //         <button
// // //           type="button"
// // //           onClick={(e) => {
// // //             e.preventDefault();
// // //             e.stopPropagation();
// // //             setExpanded(!expanded);
// // //           }}
// // //           className="mt-1 w-fit text-cyan-600"
// // //         >
// // //           <ChevronDown
// // //             size={13}
// // //             className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""
// // //               }`}
// // //           />
// // //         </button>

// // //         {/* Arrow */}
// // //         <div className="mt-auto flex justify-end pt-1">
// // //           <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
// // //             <ArrowRight size={12} />
// // //           </span>
// // //         </div>
// // //       </div>
// // //     </a>
// // //   );
// // // };

// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link to={`/services/${service.id}`} className="group flex min-w-0 flex-1 flex-col items-center px-2 py-2.5 text-center transition hover:bg-cyan-50/60 sm:border-l sm:border-slate-100 first:border-l-0">
// // //       <div className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] group-hover:scale-110"><Icon size={19} strokeWidth={1.7} /></div>
// // //       <h4 className="line-clamp-2 text-xs font-extrabold text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
// // //       <p className="mt-0.5 line-clamp-1 text-[10px] leading-4 text-slate-500">{service.description}</p>
// // //     </Link>
// // //   );
// // // };






// // // // sidebar


// // // const ServiceRow = ({ group }) => {
// // //   const [expanded, setExpanded] = useState(false);

// // //   const Icon = group.icon;

// // //   // Faster lookup
// // //   const serviceMap = new Map(
// // //     servicesData.map((service) => [service.id, service])
// // //   );

// // //   const services = group.ids
// // //     .map((id) => serviceMap.get(id))
// // //     .filter(Boolean);

// // //     const [showAllServices, setShowAllServices] = useState(false);

// // //   return (
// // //     <section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
// // //     >
// // //       <div className="flex flex-col lg:flex-row">
// // //         {/* Left Panel */}
// // //         <div className="flex w-full shrink-0 flex-row items-start gap-3 bg-gradient-to-br from-slate-50 to-cyan-50 p-4 lg:w-56 lg:flex-col lg:items-start lg:justify-center">
// // //           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
// // //             <Icon size={26} />
// // //           </div>

// // //           <div className="flex-1 lg:flex-none">
// // //             <h2 className="text-base font-bold text-[#09215a]">
// // //               {group.title}
// // //             </h2>

// // //             <p
// // //               className={`mt-1 text-xs leading-5 text-slate-600 transition-all ${expanded ? "" : "line-clamp-1"
// // //                 }`}
// // //             >
// // //               {group.description}
// // //             </p>

// // //             <button
// // //               type="button"
// // //               onClick={() => setExpanded(!expanded)}
// // //               className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 transition hover:text-cyan-700"
// // //             >
// // //               {expanded ? "View Less" : "View All"}
// // //               {expanded ? (
// // //                 <ChevronUp size={14} />
// // //               ) : (
// // //                 <ChevronDown size={14} />
// // //               )}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Services */}
// // //        {/* Services */}
// // // <div className="grid flex-1 grid-cols-2 border-t border-slate-100 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 lg:border-l lg:border-t-0">
// // //   {services.length ? (
// // //     <>
// // //       {(showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //         <ServiceItem
// // //           key={service.id}
// // //           service={service}
// // //           index={index}
// // //         />
// // //       ))}

// // //       {!showAllServices && services.length > 3 && (
// // //         <button
// // //           onClick={() => setShowAllServices(true)}
// // //           className="flex min-h-[110px] flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50 transition hover:bg-slate-100"
// // //         >
// // //           <ChevronDown className="h-6 w-6 text-slate-600" />
// // //           <span className="text-sm font-medium text-slate-700">
// // //             View All
// // //           </span>
// // //         </button>
// // //       )}

// // //       {showAllServices && services.length > 3 && (
// // //         <button
// // //           onClick={() => setShowAllServices(false)}
// // //           className="flex min-h-[110px] flex-col items-center justify-center gap-2 border border-slate-100 bg-slate-50 transition hover:bg-slate-100"
// // //         >
// // //           <ChevronUp className="h-6 w-6 text-slate-600" />
// // //           <span className="text-sm font-medium text-slate-700">
// // //             Show Less
// // //           </span>
// // //         </button>
// // //       )}
// // //     </>
// // //   ) : (
// // //     <div className="col-span-full flex h-40 items-center justify-center text-sm text-slate-500">
// // //       No services available.
// // //     </div>
// // //   )}
// // // </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const ServiceList = () => (
// // //   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-8 font-sans text-[#0b1d45]">
// // //     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
// // //       <div className="absolute -right-24 top-8 -z-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
// // //       <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 md:grid-cols-2 lg:px-10 lg:py-16">
// // //         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //           <p className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-cyan-600"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> All Services</p>
// // //           <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-[#0a2050] sm:text-5xl">Complete Financial Ecosystem for Modern Businesses</h1>
// // //           <p className="mt-5 max-w-lg text-base leading-6 text-[#526783]">Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.</p>
// // //           <div className="mt-7 flex flex-wrap gap-3"><Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#12afc1] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20">Get Started Now <ArrowRight size={16} /></Link><Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-cyan-500 bg-white px-5 py-3 text-sm font-bold text-cyan-600">Talk to Sales <Headphones size={16} /></Link></div>
// // //         </motion.div>
// // //         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-72 w-full max-w-md md:block">
// // //           <div className="absolute inset-x-3 bottom-1 h-14 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
// // //           <div className="absolute bottom-5 left-10 h-36 w-28 -rotate-6 rounded-2xl border-4 border-slate-700 bg-white p-2 shadow-2xl"><p className="text-[8px] font-bold text-[#08235a]">ABHEEPAY</p><div className="mt-3 grid grid-cols-4 gap-1">{Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-3 bg-slate-900" />)}</div><p className="mt-2 text-center text-[7px] text-slate-500">Scan & Pay</p></div>
// // //           <div className="absolute bottom-4 left-1/2 h-52 w-36 -translate-x-1/2 rotate-6 overflow-hidden rounded-[25px] border-[7px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-3 shadow-2xl"><div className="h-4 w-14 rounded-full bg-[#061a43]" /><p className="mt-7 text-[8px] text-white/70">Total Transactions</p><p className="text-xl font-bold text-white">₹ 68,490</p><div className="mt-6 flex h-12 items-end gap-1">{[20, 35, 25, 45, 35, 60, 52].map((height, index) => <span key={index} style={{ height }} className="w-3 rounded-t bg-cyan-300" />)}</div></div>
// // //           <div className="absolute bottom-5 right-6 w-36 rounded-xl bg-white p-3 shadow-xl"><p className="text-[9px] font-bold text-slate-700">Receipts</p><div className="mt-2 space-y-2 text-[8px] text-slate-500"><p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p><p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p><p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p></div></div>
// // //           <div className="absolute bottom-3 right-28 rotate-12 rounded-xl bg-white p-2 shadow-xl"><img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-20 w-20 object-contain" /></div>
// // //           <div className="absolute right-6 top-12 rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#0b376a] shadow-lg">Successful<br />Transactions <span className="text-cyan-500">12,650</span></div>
// // //           <div className="absolute bottom-16 left-1 rounded-2xl bg-cyan-500 p-3 text-white shadow-lg"><LockKeyhole size={26} /></div>
// // //         </motion.div>
// // //       </div>
// // //     </section>

// // //     <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
// // //       <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-extrabold text-[#0b1d45]">Top Service Categories</h2><a href="#payment-solutions" className="text-xs font-bold text-cyan-600">Explore All Services <ArrowRight className="inline" size={14} /></a></div>
// // //       <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{groupDefinitions.map((group) => <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />)}</div>
// // //       <div className="mt-4">{groupDefinitions.map((group) => <ServiceRow key={group.title} group={group} />)}</div>
// // //       <section className="mt-5 grid overflow-hidden rounded-2xl bg-[#071d48] text-white sm:grid-cols-4">{[[UsersRound, "10,000+", "Active Merchants"], [WalletCards, "₹500 Cr+", "Monthly Transactions"], [ShieldCheck, "99.99%", "System Uptime"], [Headphones, "24×7", "Customer Support"]].map(([Icon, value, label]) => <div key={label} className="flex items-center justify-center gap-3 border-white/15 p-5 sm:border-r last:border-r-0"><span className="rounded-full bg-cyan-400/10 p-3 text-cyan-300"><Icon size={21} /></span><span><b className="block text-lg">{value}</b><small className="text-xs text-slate-300">{label}</small></span></div>)}</section>
// // //       <section className="relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-6 py-7 text-white sm:px-9"><Rocket className="absolute -bottom-6 right-10 h-28 w-28 rotate-[-20deg] text-white/25" /><div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-extrabold">Ready to Transform Your Business?</h2><p className="mt-2 text-sm text-white/90">Join thousands of businesses already growing with ABHEEPAY.</p></div><Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#10366e]">Create Account Now <ArrowRight size={16} /></Link></div></section>
// // //     </div>
// // //   </main>
// // // );

// // // const ServiceDetail = ({ service }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // //   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // //   return (
// // //     <motion.div initial="hidden" animate="visible" className="bg-white min-h-screen font-sans text-gray-800 py-8 px-4 md:px-12">
// // //       <div className="max-w-4xl mx-auto">
// // //         <div className="flex flex-col md:flex-row justify-between items-center gap-10">
// // //           <motion.div variants={fadeInUp} className="md:w-1/2">
// // //             <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-6 leading-tight">{service.name}</h1>
// // //             <div className="flex items-center gap-3 mt-4 text-gray-500 text-sm">
// // //               <motion.span initial={{ width: 0 }} animate={{ width: 32 }} transition={{ delay: 0.3, duration: 0.5 }} className="h-[2px] bg-[#00D3CD]" />
// // //               <span>Abheepay Team • 2026</span>
// // //             </div>
// // //           </motion.div>
// // //           <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="md:w-1/2 relative w-full">
// // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="absolute -top-4 -left-4 w-full h-[220px] sm:h-[280px] md:h-[320px] border-2 border-[#00D3CD] rounded-lg -z-10" />
// // //             <div className="w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-lg shadow-xl bg-white p-3">
// // //               <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={mainImg} alt={service.name} className="w-full h-full object-fill object-center" />
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //         <div className="grid md:grid-cols-3 gap-6 mt-12">
// // //           <div className="md:col-span-2 space-y-6">
// // //             <motion.p variants={fadeInUp} className="text-base text-gray-600 leading-relaxed max-w-2xl">{service.longDescription || service.description}</motion.p>
// // //             <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
// // //               {features.map((text, index) => (
// // //                 <motion.div key={index} variants={fadeInUp} whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.2 } }} className="p-4 border-b md:border-r border-gray-100 flex items-center gap-3 bg-white text-gray-900 transition-colors cursor-default">
// // //                   <span className="text-[#00D3CD] font-bold text-xl">→</span><span className="font-bold text-lg">{text}</span>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#00D3CD] p-6 flex flex-col min-h-[320px] shadow-lg relative overflow-hidden">
// // //             <h2 className="text-xl font-black mb-6 tracking-tighter text-black">BENEFITS</h2>
// // //             <div className="space-y-5">
// // //               {highlights.map((benefit, index) => (
// // //                 <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
// // //                   <p className="text-black font-bold text-base leading-tight uppercase">{benefit}</p>
// // //                   {index !== highlights.length - 1 && <div className="w-full h-[1px] bg-black/20 mt-4" />}
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //         <motion.div variants={fadeInUp} className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 gap-4">
// // //           <Link to="/services" className="text-sm font-bold border border-black px-6 py-2 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest">— BACK TO SERVICES</Link>
// // //         </motion.div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return <div className="min-h-screen flex items-center justify-center bg-white text-black"><p className="text-lg font-semibold border-b-2 border-[#00D3CD]">Service not found</p></div>;
// // //   }

// // //   return <ServiceDetail service={service} />;
// // // };

// // // export default Services;








// // // import React from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Building2,
// // //   Code2,
// // //   CreditCard,
// // //   Headphones,
// // //   Landmark,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   UsersRound,
// // //   WalletCards,
// // //   ChevronDown,
// // //   ChevronUp,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];

// // // const CategoryCard = ({ title, description, Icon }) => {
// // //   const [expanded, setExpanded] = useState(false);

// // //   return (
// // //     <a
// // //       href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //       className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-1.5 shadow-[0_4px_15px_rgba(15,37,76,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300"
// // //     >
// // //       <div className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
// // //         <Icon size={15} strokeWidth={1.6} />
// // //       </div>

// // //       <h3 className="text-[10px] font-bold leading-tight text-[#091d48]">
// // //         {title}
// // //       </h3>

// // //       <div className="mt-0.5 flex flex-1 flex-col">
// // //         <p
// // //           className={`text-[8px] leading-3 text-slate-500 ${expanded ? "" : "line-clamp-1"}`}
// // //         >
// // //           {description}
// // //         </p>

// // //         <button
// // //           type="button"
// // //           onClick={(e) => {
// // //             e.preventDefault();
// // //             e.stopPropagation();
// // //             setExpanded(!expanded);
// // //           }}
// // //           className="mt-0.5 w-fit text-cyan-600"
// // //         >
// // //           <ChevronDown
// // //             size={10}
// // //             className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
// // //           />
// // //         </button>

// // //         <div className="mt-auto flex justify-end pt-0.5">
// // //           <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
// // //             <ArrowRight size={9} />
// // //           </span>
// // //         </div>
// // //       </div>
// // //     </a>
// // //   );
// // // };

// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link to={`/services/${service.id}`} className="group flex min-w-0 flex-1 flex-col items-center px-1.5 py-2 text-center transition hover:bg-cyan-50/60 sm:border-l sm:border-slate-100 first:border-l-0">
// // //       <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] group-hover:scale-110">
// // //         <Icon size={13} strokeWidth={1.7} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-[10px] font-extrabold text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
// // //       <p className="mt-0.5 line-clamp-1 text-[8px] leading-3 text-slate-500">{service.description}</p>
// // //     </Link>
// // //   );
// // // };

// // // const ServiceRow = ({ group }) => {
// // //   const [expanded, setExpanded] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(
// // //     servicesData.map((service) => [service.id, service])
// // //   );

// // //   const services = group.ids
// // //     .map((id) => serviceMap.get(id))
// // //     .filter(Boolean);

// // //   const [showAllServices, setShowAllServices] = useState(false);

// // //   return (
// // //     <section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
// // //     >
// // //       <div className="flex flex-col lg:flex-row">
// // //         <div className="flex w-full shrink-0 flex-row items-start gap-2 bg-gradient-to-br from-slate-50 to-cyan-50 p-3 lg:w-40 lg:flex-col lg:items-start lg:justify-center">
// // //           <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600">
// // //             <Icon size={18} />
// // //           </div>

// // //           <div className="flex-1 lg:flex-none">
// // //             <h2 className="text-sm font-bold text-[#09215a]">
// // //               {group.title}
// // //             </h2>

// // //             <p
// // //               className={`mt-0.5 text-[10px] leading-4 text-slate-600 transition-all ${expanded ? "" : "line-clamp-1"}`}
// // //             >
// // //               {group.description}
// // //             </p>

// // //             <button
// // //               type="button"
// // //               onClick={() => setExpanded(!expanded)}
// // //               className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-600 transition hover:text-cyan-700"
// // //             >
// // //               {expanded ? "View Less" : "View All"}
// // //               {expanded ? (
// // //                 <ChevronUp size={10} />
// // //               ) : (
// // //                 <ChevronDown size={10} />
// // //               )}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="grid flex-1 grid-cols-2 border-t border-slate-100 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 lg:border-l lg:border-t-0">
// // //           {services.length ? (
// // //             <>
// // //               {(showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //                 <ServiceItem
// // //                   key={service.id}
// // //                   service={service}
// // //                   index={index}
// // //                 />
// // //               ))}

// // //               {!showAllServices && services.length > 3 && (
// // //                 <button
// // //                   onClick={() => setShowAllServices(true)}
// // //                   className="flex min-h-[74px] flex-col items-center justify-center gap-1.5 border border-slate-100 bg-slate-50 transition hover:bg-slate-100"
// // //                 >
// // //                   <ChevronDown className="h-4 w-4 text-slate-600" />
// // //                   <span className="text-xs font-medium text-slate-700">
// // //                     View All
// // //                   </span>
// // //                 </button>
// // //               )}

// // //               {showAllServices && services.length > 3 && (
// // //                 <button
// // //                   onClick={() => setShowAllServices(false)}
// // //                   className="flex min-h-[74px] flex-col items-center justify-center gap-1.5 border border-slate-100 bg-slate-50 transition hover:bg-slate-100"
// // //                 >
// // //                   <ChevronUp className="h-4 w-4 text-slate-600" />
// // //                   <span className="text-xs font-medium text-slate-700">
// // //                     Show Less
// // //                   </span>
// // //                 </button>
// // //               )}
// // //             </>
// // //           ) : (
// // //             <div className="col-span-full flex h-28 items-center justify-center text-xs text-slate-500">
// // //               No services available.
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const ServiceList = () => (
// // //   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-6 font-sans text-[#0b1d45]">
// // //     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
// // //       <div className="absolute -right-16 top-6 -z-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
// // //       <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-9 sm:px-6 md:grid-cols-2 lg:px-7 lg:py-14">
// // //         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //           {/* <p className="mb-3 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-cyan-600">
// // //             <span className="h-1 w-1 rounded-full bg-cyan-500" /> All Services
// // //           </p> */}
// // //           <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#0a2050] sm:text-3xl">
// // //             Complete Financial Ecosystem for Modern Businesses
// // //           </h1>
// // //           <p className="mt-3 max-w-lg text-sm leading-5 text-[#526783]">
// // //             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
// // //           </p>
// // //           <div className="mt-5 flex flex-wrap gap-2">
// // //             <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md bg-[#12afc1] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/20">
// // //               Get Started Now <ArrowRight size={12} />
// // //             </Link>
// // //             <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md border border-cyan-500 bg-white px-4 py-2 text-xs font-bold text-cyan-600">
// // //               Talk to Sales <Headphones size={12} />
// // //             </Link>
// // //           </div>
// // //         </motion.div>
// // //         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-48 w-full max-w-sm md:block">
// // //           <div className="absolute inset-x-2 bottom-0.5 h-9 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
// // //           <div className="absolute bottom-3 left-7 h-24 w-19 -rotate-6 rounded-2xl border-2 border-slate-700 bg-white p-1.5 shadow-2xl">
// // //             <p className="text-[6px] font-bold text-[#08235a]">ABHEEPAY</p>
// // //             <div className="mt-2 grid grid-cols-4 gap-0.5">
// // //               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-2 bg-slate-900" />)}
// // //             </div>
// // //             <p className="mt-1.5 text-center text-[5px] text-slate-500">Scan & Pay</p>
// // //           </div>
// // //           <div className="absolute bottom-3 left-1/2 h-35 w-24 -translate-x-1/2 rotate-6 overflow-hidden rounded-[17px] border-[5px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-2 shadow-2xl">
// // //             <div className="h-3 w-9 rounded-full bg-[#061a43]" />
// // //             <p className="mt-5 text-[6px] text-white/70">Total Transactions</p>
// // //             <p className="text-base font-bold text-white">₹ 68,490</p>
// // //             <div className="mt-4 flex h-8 items-end gap-0.5">
// // //               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
// // //                 <span key={index} style={{ height: height * 0.67 }} className="w-2 rounded-t bg-cyan-300" />
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-3 right-4 w-24 rounded-xl bg-white p-2 shadow-xl">
// // //             <p className="text-[7px] font-bold text-slate-700">Receipts</p>
// // //             <div className="mt-1.5 space-y-1.5 text-[6px] text-slate-500">
// // //               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
// // //               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
// // //               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-2 right-19 rotate-12 rounded-xl bg-white p-1.5 shadow-xl">
// // //             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-14 w-14 object-contain" />
// // //           </div>
// // //           <div className="absolute right-4 top-8 rounded-xl bg-white px-2 py-1.5 text-[10px] font-bold text-[#0b376a] shadow-lg">
// // //             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
// // //           </div>
// // //           <div className="absolute bottom-11 left-0.5 rounded-2xl bg-cyan-500 p-2 text-white shadow-lg">
// // //             <LockKeyhole size={18} />
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>

// // //     <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-7">
// // //       <div className="mb-3 flex items-center justify-between">
// // //         <h2 className="text-base font-extrabold text-[#0b1d45]">Top Service Categories</h2>
// // //         <a href="#payment-solutions" className="text-[10px] font-bold text-cyan-600">
// // //           Explore All Services <ArrowRight className="inline" size={10} />
// // //         </a>
// // //       </div>
// // //       <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
// // //         {groupDefinitions.map((group) => (
// // //           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
// // //         ))}
// // //       </div>
// // //       <div className="mt-3">
// // //         {groupDefinitions.map((group) => (
// // //           <ServiceRow key={group.title} group={group} />
// // //         ))}
// // //       </div>
// // //       <section className="mt-3 grid overflow-hidden rounded-2xl bg-[#071d48] text-white sm:grid-cols-4">
// // //         {[
// // //           [UsersRound, "10,000+", "Active Merchants"],
// // //           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
// // //           [ShieldCheck, "99.99%", "System Uptime"],
// // //           [Headphones, "24×7", "Customer Support"],
// // //         ].map(([Icon, value, label]) => (
// // //           <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
// // //             <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
// // //               <Icon size={15} />
// // //             </span>
// // //             <span>
// // //               <b className="block text-sm">{value}</b>
// // //               <small className="text-[10px] text-slate-300">{label}</small>
// // //             </span>
// // //           </div>
// // //         ))}
// // //       </section>
// // //       <section className="relative mt-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-4 py-5 text-white sm:px-6">
// // //         <Rocket className="absolute -bottom-4 right-7 h-19 w-19 rotate-[-20deg] text-white/25" />
// // //         <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
// // //           <div>
// // //             <h2 className="text-lg font-extrabold">Ready to Transform Your Business?</h2>
// // //             <p className="mt-1.5 text-xs text-white/90">Join thousands of businesses already growing with ABHEEPAY.</p>
// // //           </div>
// // //           <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#10366e]">
// // //             Create Account Now <ArrowRight size={12} />
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   </main>
// // // );

// // // const ServiceDetail = ({ service }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // //   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // //   return (
// // //     <motion.div initial="hidden" animate="visible" className="bg-white min-h-screen font-sans text-gray-800 py-5 px-3 md:px-8">
// // //       <div className="max-w-4xl mx-auto">
// // //         <div className="flex flex-col md:flex-row justify-between items-center gap-7">
// // //           <motion.div variants={fadeInUp} className="md:w-1/2">
// // //             <h1 className="text-2xl md:text-3xl font-black text-gray-900 mt-4 leading-tight">{service.name}</h1>
// // //             <div className="flex items-center gap-2 mt-3 text-gray-500 text-xs">
// // //               <motion.span initial={{ width: 0 }} animate={{ width: 21 }} transition={{ delay: 0.3, duration: 0.5 }} className="h-[2px] bg-[#00D3CD]" />
// // //               <span>Abheepay Team • 2026</span>
// // //             </div>
// // //           </motion.div>
// // //           <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="md:w-1/2 relative w-full">
// // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="absolute -top-3 -left-3 w-full h-[145px] sm:h-[185px] md:h-[210px] border-2 border-[#00D3CD] rounded-lg -z-10" />
// // //             <div className="w-full h-[145px] sm:h-[185px] md:h-[210px] overflow-hidden rounded-lg shadow-xl bg-white p-2">
// // //               <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={mainImg} alt={service.name} className="w-full h-full object-fill object-center" />
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //         <div className="grid md:grid-cols-3 gap-4 mt-8">
// // //           <div className="md:col-span-2 space-y-4">
// // //             <motion.p variants={fadeInUp} className="text-sm text-gray-600 leading-relaxed max-w-2xl">
// // //               {service.longDescription || service.description}
// // //             </motion.p>
// // //             <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
// // //               {features.map((text, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   variants={fadeInUp}
// // //                   whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.2 } }}
// // //                   className="p-3 border-b md:border-r border-gray-100 flex items-center gap-2 bg-white text-gray-900 transition-colors cursor-default"
// // //                 >
// // //                   <span className="text-[#00D3CD] font-bold text-base">→</span>
// // //                   <span className="font-bold text-sm">{text}</span>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="bg-[#00D3CD] p-4 flex flex-col min-h-[215px] shadow-lg relative overflow-hidden"
// // //           >
// // //             <h2 className="text-base font-black mb-4 tracking-tighter text-black">BENEFITS</h2>
// // //             <div className="space-y-3">
// // //               {highlights.map((benefit, index) => (
// // //                 <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
// // //                   <p className="text-black font-bold text-sm leading-tight uppercase">{benefit}</p>
// // //                   {index !== highlights.length - 1 && <div className="w-full h-[1px] bg-black/20 mt-3" />}
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //         <motion.div variants={fadeInUp} className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-4 gap-3">
// // //           <Link to="/services" className="text-xs font-bold border border-black px-4 py-1.5 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest">
// // //             — BACK TO SERVICES
// // //           </Link>
// // //         </motion.div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-white text-black">
// // //         <p className="text-base font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
// // //       </div>
// // //     );
// // //   }

// // //   return <ServiceDetail service={service} />;
// // // };

// // // export default Services;










// // // import React from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Building2,
// // //   Code2,
// // //   CreditCard,
// // //   Headphones,
// // //   Landmark,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   UsersRound,
// // //   WalletCards,
// // //   ChevronDown,
// // //   ChevronUp,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];

// // // const trustAvatars = [
// // //   { initial: "A", color: "#f97316" },
// // //   { initial: "R", color: "#0ea5e9" },
// // //   { initial: "S", color: "#22c55e" },
// // // ];

// // // const CategoryCard = ({ title, description, Icon }) => (
// // //   <a
// // //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //     className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_4px_15px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
// // //   >
// // //     <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
// // //       <Icon size={22} strokeWidth={1.6} />
// // //     </div>

// // //     <h3 className="text-sm font-bold leading-tight text-[#091d48]">
// // //       {title}
// // //     </h3>

// // //     <p className="mt-1.5 flex-1 text-xs leading-5 text-slate-500">
// // //       {description}
// // //     </p>

// // //     <div className="mt-3 flex justify-end">
// // //       <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
// // //         <ArrowRight size={13} />
// // //       </span>
// // //     </div>
// // //   </a>
// // // );

// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link
// // //       to={`/services/${service.id}`}
// // //       className="group flex flex-col gap-2 rounded-xl border border-slate-100 bg-white p-3.5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
// // //     >
// // //       <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
// // //         <Icon size={17} strokeWidth={1.7} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-sm font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
// // //       <p className="line-clamp-2 text-xs leading-5 text-slate-500">{service.description}</p>
// // //     </Link>
// // //   );
// // // };

// // // const ServiceRow = ({ group }) => {
// // //   const [showAllServices, setShowAllServices] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(
// // //     servicesData.map((service) => [service.id, service])
// // //   );

// // //   const services = group.ids
// // //     .map((id) => serviceMap.get(id))
// // //     .filter(Boolean);

// // //   return (
// // //     <section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       className="flex flex-col gap-3 border-b border-slate-100 py-4 first:pt-2 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
// // //     >
// // //       <div
// // //         className={`flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 transition-colors duration-200 lg:w-56 lg:flex-col lg:items-start lg:justify-center ${
// // //           showAllServices
// // //             ? "border-cyan-500 bg-cyan-50/60"
// // //             : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
// // //         }`}
// // //       >
// // //         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
// // //           <Icon size={18} />
// // //         </div>

// // //         <div className="flex-1 lg:flex-none">
// // //           <h2 className="text-sm font-bold text-[#09215a]">
// // //             {group.title}
// // //           </h2>

// // //           <button
// // //             type="button"
// // //             onClick={() => setShowAllServices(!showAllServices)}
// // //             className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 transition hover:text-cyan-700"
// // //           >
// // //             {showAllServices ? "View Less" : "View All"}
// // //             {showAllServices ? (
// // //               <ChevronUp size={12} />
// // //             ) : (
// // //               <ChevronDown size={12} />
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
// // //         {services.length ? (
// // //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //             <ServiceItem
// // //               key={service.id}
// // //               service={service}
// // //               index={index}
// // //             />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full flex h-24 items-center justify-center text-sm text-slate-500">
// // //             No services available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const ServiceList = () => (
// // //   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-6 font-sans text-[#0b1d45]">
// // //     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
// // //       <div className="absolute -right-16 top-6 -z-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
// // //       <div className="mx-auto grid max-w-7xl items-center gap-5 px-4 py-9 sm:px-6 md:grid-cols-2 lg:px-7 lg:py-14">
// // //         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //           <h1 className="max-w-xl text-3xl font-black leading-[1.08] tracking-tight text-[#0a2050] sm:text-4xl">
// // //             Complete Financial Ecosystem for Modern Businesses
// // //           </h1>
// // //           <p className="mt-3 max-w-lg text-sm leading-6 text-[#526783] sm:text-base">
// // //             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
// // //           </p>
// // //           <div className="mt-5 flex flex-wrap gap-2">
// // //             <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md bg-[#12afc1] px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20">
// // //               Get Started Now <ArrowRight size={12} />
// // //             </Link>
// // //             <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md border border-cyan-500 bg-white px-4 py-2.5 text-xs font-bold text-cyan-600">
// // //               Talk to Sales <Headphones size={12} />
// // //             </Link>
// // //           </div>

// // //           <div className="mt-5 flex items-center gap-3">
// // //             <div className="flex -space-x-3">
// // //               {trustAvatars.map((avatar) => (
// // //                 <span
// // //                   key={avatar.initial}
// // //                   style={{ backgroundColor: avatar.color }}
// // //                   className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white shadow"
// // //                 >
// // //                   {avatar.initial}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <p className="text-xs leading-4 text-slate-600">
// // //               Trusted by <b className="text-[#0a2050]">10,000+ businesses</b>
// // //               <br />
// // //               across India
// // //             </p>
// // //           </div>
// // //         </motion.div>
// // //         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-48 w-full max-w-sm md:block">
// // //           <div className="absolute inset-x-2 bottom-0.5 h-9 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
// // //           <div className="absolute bottom-3 left-7 h-24 w-19 -rotate-6 rounded-2xl border-2 border-slate-700 bg-white p-1.5 shadow-2xl">
// // //             <p className="text-[6px] font-bold text-[#08235a]">ABHEEPAY</p>
// // //             <div className="mt-2 grid grid-cols-4 gap-0.5">
// // //               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-2 bg-slate-900" />)}
// // //             </div>
// // //             <p className="mt-1.5 text-center text-[5px] text-slate-500">Scan & Pay</p>
// // //           </div>
// // //           <div className="absolute bottom-3 left-1/2 h-35 w-24 -translate-x-1/2 rotate-6 overflow-hidden rounded-[17px] border-[5px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-2 shadow-2xl">
// // //             <div className="h-3 w-9 rounded-full bg-[#061a43]" />
// // //             <p className="mt-5 text-[6px] text-white/70">Total Transactions</p>
// // //             <p className="text-base font-bold text-white">₹ 68,490</p>
// // //             <div className="mt-4 flex h-8 items-end gap-0.5">
// // //               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
// // //                 <span key={index} style={{ height: height * 0.67 }} className="w-2 rounded-t bg-cyan-300" />
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-3 right-4 w-24 rounded-xl bg-white p-2 shadow-xl">
// // //             <p className="text-[7px] font-bold text-slate-700">Receipts</p>
// // //             <div className="mt-1.5 space-y-1.5 text-[6px] text-slate-500">
// // //               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
// // //               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
// // //               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-2 right-19 rotate-12 rounded-xl bg-white p-1.5 shadow-xl">
// // //             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-14 w-14 object-contain" />
// // //           </div>
// // //           <div className="absolute right-4 top-8 rounded-xl bg-white px-2 py-1.5 text-[10px] font-bold text-[#0b376a] shadow-lg">
// // //             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
// // //           </div>
// // //           <div className="absolute bottom-11 left-0.5 rounded-2xl bg-cyan-500 p-2 text-white shadow-lg">
// // //             <LockKeyhole size={18} />
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>

// // //     <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-7">
// // //       <div className="mb-3 flex items-center justify-between">
// // //         <h2 className="text-base font-extrabold text-[#0b1d45] sm:text-lg">Top Service Categories</h2>
// // //         <a href="#payment-solutions" className="text-xs font-bold text-cyan-600">
// // //           Explore All Services <ArrowRight className="inline" size={12} />
// // //         </a>
// // //       </div>
// // //       <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
// // //         {groupDefinitions.map((group) => (
// // //           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
// // //         ))}
// // //       </div>

// // //       <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
// // //         {groupDefinitions.map((group) => (
// // //           <ServiceRow key={group.title} group={group} />
// // //         ))}
// // //       </div>

// // //       <section className="mt-6 grid overflow-hidden rounded-2xl bg-[#071d48] text-white sm:grid-cols-4">
// // //         {[
// // //           [UsersRound, "10,000+", "Active Merchants"],
// // //           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
// // //           [ShieldCheck, "99.99%", "System Uptime"],
// // //           [Headphones, "24×7", "Customer Support"],
// // //         ].map(([Icon, value, label]) => (
// // //           <div key={label} className="flex items-center justify-center gap-2.5 border-white/15 p-4 sm:border-r last:border-r-0">
// // //             <span className="rounded-full bg-cyan-400/10 p-2.5 text-cyan-300">
// // //               <Icon size={16} />
// // //             </span>
// // //             <span>
// // //               <b className="block text-base">{value}</b>
// // //               <small className="text-[11px] text-slate-300">{label}</small>
// // //             </span>
// // //           </div>
// // //         ))}
// // //       </section>

// // //       <section className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-4 py-6 text-white sm:px-6">
// // //         <Rocket className="absolute -bottom-4 right-7 h-19 w-19 rotate-[-20deg] text-white/25" />
// // //         <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
// // //           <div>
// // //             <h2 className="text-lg font-extrabold sm:text-xl">Ready to Transform Your Business?</h2>
// // //             <p className="mt-1.5 text-xs text-white/90 sm:text-sm">Join thousands of businesses already growing with ABHEEPAY.</p>
// // //           </div>
// // //           <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-[#10366e]">
// // //             Create Account Now <ArrowRight size={12} />
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   </main>
// // // );

// // // const ServiceDetail = ({ service }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // //   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // //   return (
// // //     <motion.div initial="hidden" animate="visible" className="bg-white min-h-screen font-sans text-gray-800 py-5 px-3 md:px-8">
// // //       <div className="max-w-4xl mx-auto">
// // //         <div className="flex flex-col md:flex-row justify-between items-center gap-7">
// // //           <motion.div variants={fadeInUp} className="md:w-1/2">
// // //             <h1 className="text-2xl md:text-3xl font-black text-gray-900 mt-4 leading-tight">{service.name}</h1>
// // //             <div className="flex items-center gap-2 mt-3 text-gray-500 text-xs">
// // //               <motion.span initial={{ width: 0 }} animate={{ width: 21 }} transition={{ delay: 0.3, duration: 0.5 }} className="h-[2px] bg-[#00D3CD]" />
// // //               <span>Abheepay Team • 2026</span>
// // //             </div>
// // //           </motion.div>
// // //           <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="md:w-1/2 relative w-full">
// // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="absolute -top-3 -left-3 w-full h-[145px] sm:h-[185px] md:h-[210px] border-2 border-[#00D3CD] rounded-lg -z-10" />
// // //             <div className="w-full h-[145px] sm:h-[185px] md:h-[210px] overflow-hidden rounded-lg shadow-xl bg-white p-2">
// // //               <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={mainImg} alt={service.name} className="w-full h-full object-fill object-center" />
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //         <div className="grid md:grid-cols-3 gap-4 mt-8">
// // //           <div className="md:col-span-2 space-y-4">
// // //             <motion.p variants={fadeInUp} className="text-sm text-gray-600 leading-relaxed max-w-2xl">
// // //               {service.longDescription || service.description}
// // //             </motion.p>
// // //             <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
// // //               {features.map((text, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   variants={fadeInUp}
// // //                   whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.2 } }}
// // //                   className="p-3 border-b md:border-r border-gray-100 flex items-center gap-2 bg-white text-gray-900 transition-colors cursor-default"
// // //                 >
// // //                   <span className="text-[#00D3CD] font-bold text-base">→</span>
// // //                   <span className="font-bold text-sm">{text}</span>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="bg-[#00D3CD] p-4 flex flex-col min-h-[215px] shadow-lg relative overflow-hidden"
// // //           >
// // //             <h2 className="text-base font-black mb-4 tracking-tighter text-black">BENEFITS</h2>
// // //             <div className="space-y-3">
// // //               {highlights.map((benefit, index) => (
// // //                 <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
// // //                   <p className="text-black font-bold text-sm leading-tight uppercase">{benefit}</p>
// // //                   {index !== highlights.length - 1 && <div className="w-full h-[1px] bg-black/20 mt-3" />}
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //         <motion.div variants={fadeInUp} className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-4 gap-3">
// // //           <Link to="/services" className="text-xs font-bold border border-black px-4 py-1.5 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest">
// // //             — BACK TO SERVICES
// // //           </Link>
// // //         </motion.div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-white text-black">
// // //         <p className="text-base font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
// // //       </div>
// // //     );
// // //   }

// // //   return <ServiceDetail service={service} />;
// // // };

// // // export default Services;







// // // import React from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Building2,
// // //   Code2,
// // //   CreditCard,
// // //   Headphones,
// // //   Landmark,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   UsersRound,
// // //   WalletCards,
// // //   ChevronDown,
// // //   ChevronUp,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];

// // // const trustAvatars = [
// // //   { initial: "A", color: "#f97316" },
// // //   { initial: "R", color: "#0ea5e9" },
// // //   { initial: "S", color: "#22c55e" },
// // // ];

// // // const CategoryCard = ({ title, description, Icon }) => (
// // //   <a
// // //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //     className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-[0_3px_12px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
// // //   >
// // //     <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
// // //       <Icon size={18} strokeWidth={1.6} />
// // //     </div>

// // //     <h3 className="text-xs font-bold leading-tight text-[#091d48]">
// // //       {title}
// // //     </h3>

// // //     <p className="mt-1 flex-1 text-[11px] leading-4 text-slate-500">
// // //       {description}
// // //     </p>

// // //     <div className="mt-2.5 flex justify-end">
// // //       <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
// // //         <ArrowRight size={11} />
// // //       </span>
// // //     </div>
// // //   </a>
// // // );

// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link
// // //       to={`/services/${service.id}`}
// // //       className="group flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
// // //     >
// // //       <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
// // //         <Icon size={14} strokeWidth={1.7} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-xs font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
// // //       <p className="line-clamp-2 text-[11px] leading-4 text-slate-500">{service.description}</p>
// // //     </Link>
// // //   );
// // // };

// // // const ServiceRow = ({ group }) => {
// // //   const [showAllServices, setShowAllServices] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(
// // //     servicesData.map((service) => [service.id, service])
// // //   );

// // //   const services = group.ids
// // //     .map((id) => serviceMap.get(id))
// // //     .filter(Boolean);

// // //   return (
// // //     <section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       className="flex flex-col gap-2.5 border-b border-slate-100 py-3 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-5"
// // //     >
// // //       <div
// // //         className={`flex shrink-0 items-center gap-2.5 rounded-lg border-l-4 p-2.5 transition-colors duration-200 lg:w-44 lg:flex-col lg:items-start lg:justify-center ${
// // //           showAllServices
// // //             ? "border-cyan-500 bg-cyan-50/60"
// // //             : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
// // //         }`}
// // //       >
// // //         <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
// // //           <Icon size={15} />
// // //         </div>

// // //         <div className="flex-1 lg:flex-none">
// // //           <h2 className="text-xs font-bold text-[#09215a]">
// // //             {group.title}
// // //           </h2>

// // //           <button
// // //             type="button"
// // //             onClick={() => setShowAllServices(!showAllServices)}
// // //             className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-600 transition hover:text-cyan-700"
// // //           >
// // //             {showAllServices ? "View Less" : "View All"}
// // //             {showAllServices ? (
// // //               <ChevronUp size={10} />
// // //             ) : (
// // //               <ChevronDown size={10} />
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
// // //         {services.length ? (
// // //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //             <ServiceItem
// // //               key={service.id}
// // //               service={service}
// // //               index={index}
// // //             />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full flex h-20 items-center justify-center text-xs text-slate-500">
// // //             No services available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const ServiceList = () => (
// // //   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-5 font-sans text-[#0b1d45]">
// // //     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
// // //       <div className="absolute -right-13 top-5 -z-10 h-51 w-51 rounded-full bg-cyan-200/30 blur-3xl" />
// // //       <div className="mx-auto grid max-w-6xl items-center gap-4 px-3 py-7 sm:px-5 md:grid-cols-2 lg:px-6 lg:py-12">
// // //         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //           <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#2DD4BF] sm:text-3xl">
// // //             Complete Financial Ecosystem for Modern Businesses
// // //           </h1>
// // //           <p className="mt-2.5 max-w-lg text-xs leading-5 text-[#526783] sm:text-sm">
// // //             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
// // //           </p>
// // //           <div className="mt-4 flex flex-wrap gap-1.5">
// // //             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md bg-[#2DD4BF] px-3 py-2 text-[11px] font-bold text-white shadow-lg shadow-cyan-500/20">
// // //               Get Started Now <ArrowRight size={10} />
// // //             </Link>
// // //             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md border border-cyan-500 bg-white px-3 py-2 text-[11px] font-bold text-cyan-600">
// // //               Talk to Sales <Headphones size={15} />
// // //             </Link>
// // //           </div>

// // //           <div className="mt-4 flex items-center gap-2.5">
// // //             <div className="flex -space-x-2.5">
// // //               {trustAvatars.map((avatar) => (
// // //                 <span
// // //                   key={avatar.initial}
// // //                   style={{ backgroundColor: avatar.color }}
// // //                   className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
// // //                 >
// // //                   {avatar.initial}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <p className="text-[11px] leading-4 text-slate-600">
// // //               Trusted by <b className="text-[#00AEB2]">10,000+ businesses</b>
// // //               <br />
// // //               across India
// // //             </p>
// // //           </div>
// // //         </motion.div>
// // //         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-38 w-full max-w-xs md:block">
// // //           <div className="absolute inset-x-1.5 bottom-0.5 h-7 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
// // //           <div className="absolute bottom-2.5 left-6 h-19 w-15 -rotate-6 rounded-xl border-2 border-slate-700 bg-white p-1 shadow-2xl">
// // //             <p className="text-[5px] font-bold text-[#08235a]">ABHEEPAY</p>
// // //             <div className="mt-1.5 grid grid-cols-4 gap-0.5">
// // //               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-1.5 bg-slate-900" />)}
// // //             </div>
// // //             <p className="mt-1 text-center text-[4px] text-slate-500">Scan & Pay</p>
// // //           </div>
// // //           <div className="absolute bottom-2.5 left-1/2 h-28 w-19 -translate-x-1/2 rotate-6 overflow-hidden rounded-[14px] border-[4px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-1.5 shadow-2xl">
// // //             <div className="h-2.5 w-7 rounded-full bg-[#061a43]" />
// // //             <p className="mt-4 text-[5px] text-white/70">Total Transactions</p>
// // //             <p className="text-sm font-bold text-white">₹ 68,490</p>
// // //             <div className="mt-3 flex h-6 items-end gap-0.5">
// // //               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
// // //                 <span key={index} style={{ height: height * 0.54 }} className="w-1.5 rounded-t bg-cyan-300" />
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-2.5 right-3 w-19 rounded-lg bg-white p-1.5 shadow-xl">
// // //             <p className="text-[6px] font-bold text-slate-700">Receipts</p>
// // //             <div className="mt-1 space-y-1 text-[5px] text-slate-500">
// // //               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
// // //               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
// // //               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-1.5 right-15 rotate-12 rounded-lg bg-white p-1 shadow-xl">
// // //             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-11 w-11 object-contain" />
// // //           </div>
// // //           <div className="absolute right-3 top-6 rounded-lg bg-white px-1.5 py-1 text-[8px] font-bold text-[#0b376a] shadow-lg">
// // //             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
// // //           </div>
// // //           <div className="absolute bottom-9 left-0.5 rounded-xl bg-cyan-500 p-1.5 text-white shadow-lg">
// // //             <LockKeyhole size={14} />
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>

// // //     <div className="mx-auto max-w-6xl px-3 py-4 sm:px-5 lg:px-6">
// // //       <div className="mb-2.5 flex items-center justify-between">
// // //         <h2 className="text-sm font-extrabold text-[#0b1d45] sm:text-base">Top Service Categories</h2>
// // //         <a href="#payment-solutions" className="text-[11px] font-bold text-cyan-600">
// // //           Explore All Services <ArrowRight className="inline" size={10} />
// // //         </a>
// // //       </div>
// // //       <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
// // //         {groupDefinitions.map((group) => (
// // //           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
// // //         ))}
// // //       </div>

// // //       <div className="mt-5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4">
// // //         {groupDefinitions.map((group) => (
// // //           <ServiceRow key={group.title} group={group} />
// // //         ))}
// // //       </div>

// // //       <section className="mt-5 grid overflow-hidden rounded-xl bg-[#071d48] text-white sm:grid-cols-4">
// // //         {[
// // //           [UsersRound, "10,000+", "Active Merchants"],
// // //           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
// // //           [ShieldCheck, "99.99%", "System Uptime"],
// // //           [Headphones, "24×7", "Customer Support"],
// // //         ].map(([Icon, value, label]) => (
// // //           <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
// // //             <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
// // //               <Icon size={13} />
// // //             </span>
// // //             <span>
// // //               <b className="block text-sm">{value}</b>
// // //               <small className="text-[9px] text-slate-300">{label}</small>
// // //             </span>
// // //           </div>
// // //         ))}
// // //       </section>

// // //       <section className="relative mt-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-3 py-5 text-white sm:px-5">
// // //         <Rocket className="absolute -bottom-3 right-6 h-15 w-15 rotate-[-20deg] text-white/25" />
// // //         <div className="relative flex flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center">
// // //           <div>
// // //             <h2 className="text-base font-extrabold sm:text-lg">Ready to Transform Your Business?</h2>
// // //             <p className="mt-1 text-[11px] text-white/90 sm:text-xs">Join thousands of businesses already growing with ABHEEPAY.</p>
// // //           </div>
// // //           <Link to="/contact" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-[#10366e]">
// // //             Join Us Now <ArrowRight size={10} />
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   </main>
// // // );



// // // // Service Details

// // // const ServiceDetail = ({ service }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // //   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // //   return (
// // //     <motion.div initial="hidden" animate="visible" className="bg-white min-h-screen font-sans text-gray-800 py-12 px-2.5 md:px-6">
// // //       <div className="max-w-3xl mx-auto">
// // //         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
// // //           <motion.div variants={fadeInUp} className="md:w-1/2">
// // //             <h1 className="text-xl md:text-2xl font-black text-gray-900 mt-3 leading-tight">{service.name}</h1>
// // //             <div className="flex items-center gap-1.5 mt-2.5 text-gray-500 text-[11px]">
// // //               <motion.span initial={{ width: 0 }} animate={{ width: 17 }} transition={{ delay: 0.3, duration: 0.5 }} className="h-[2px] bg-[#00D3CD]" />
// // //               <span>Abheepay Team • 2026</span>
// // //             </div>
// // //           </motion.div>
// // //           <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} className="md:w-1/2 relative w-full">
// // //             <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="absolute -top-2.5 -left-2.5 w-full h-[116px] sm:h-[148px] md:h-[168px] border-2 border-[#00D3CD] rounded-lg -z-10" />
// // //             <div className="w-full h-[116px] sm:h-[148px] md:h-[168px] overflow-hidden rounded-lg shadow-xl bg-white p-1.5">
// // //               <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} src={mainImg} alt={service.name} className="w-full h-full object-fill object-center" />
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //         <div className="grid md:grid-cols-3 gap-3 mt-6">
// // //           <div className="md:col-span-2 space-y-3">
// // //             <motion.p variants={fadeInUp} className="text-xs text-gray-600 leading-relaxed max-w-2xl">
// // //               {service.longDescription || service.description}
// // //             </motion.p>
// // //             <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
// // //               {features.map((text, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   variants={fadeInUp}
// // //                   whileHover={{ backgroundColor: "#000000", color: "#ffffff", transition: { duration: 0.2 } }}
// // //                   className="p-2.5 border-b md:border-r border-gray-100 flex items-center gap-1.5 bg-white text-gray-900 transition-colors cursor-default"
// // //                 >
// // //                   <span className="text-[#00D3CD] font-bold text-sm">→</span>
// // //                   <span className="font-bold text-xs">{text}</span>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="bg-[#00D3CD] p-3 flex flex-col min-h-[172px] shadow-lg relative overflow-hidden"
// // //           >
// // //             <h2 className="text-sm font-black mb-3 tracking-tighter text-black">BENEFITS</h2>
// // //             <div className="space-y-2.5">
// // //               {highlights.map((benefit, index) => (
// // //                 <motion.div key={index} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
// // //                   <p className="text-black font-bold text-xs leading-tight uppercase">{benefit}</p>
// // //                   {index !== highlights.length - 1 && <div className="w-full h-[1px] bg-black/20 mt-2.5" />}
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //         <motion.div variants={fadeInUp} className="mt-6 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-3 gap-2.5">
// // //           <Link to="/services" className="text-[11px] font-bold border border-black px-3 py-1 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest">
// // //             — BACK TO SERVICES
// // //           </Link>
// // //         </motion.div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-white text-black">
// // //         <p className="text-sm font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
// // //       </div>
// // //     );
// // //   }

// // //   return <ServiceDetail service={service} />;
// // // };

// // // export default Services;




// // // import React from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Building2,
// // //   Code2,
// // //   CreditCard,
// // //   FileText,
// // //   Headphones,
// // //   Landmark,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   UsersRound,
// // //   WalletCards,
// // //   ChevronDown,
// // //   ChevronUp,
// // //   ClipboardList,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// // // const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// // // const trustAvatars = [
// // //   { initial: "A", color: "#f97316" },
// // //   { initial: "R", color: "#0ea5e9" },
// // //   { initial: "S", color: "#22c55e" },
// // // ];

// // // const CategoryCard = ({ title, description, Icon }) => (
// // //   <a
// // //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //     className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-[0_3px_12px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
// // //   >
// // //     <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
// // //       <Icon size={18} strokeWidth={1.6} />
// // //     </div>

// // //     <h3 className="text-xs font-bold leading-tight text-[#091d48]">
// // //       {title}
// // //     </h3>

// // //     <p className="mt-1 flex-1 text-[11px] leading-4 text-slate-500">
// // //       {description}
// // //     </p>

// // //     <div className="mt-2.5 flex justify-end">
// // //       <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
// // //         <ArrowRight size={11} />
// // //       </span>
// // //     </div>
// // //   </a>
// // // );

// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link
// // //       to={`/services/${service.id}`}
// // //       className="group flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
// // //     >
// // //       <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
// // //         <Icon size={14} strokeWidth={1.7} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-xs font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
// // //       <p className="line-clamp-2 text-[11px] leading-4 text-slate-500">{service.description}</p>
// // //     </Link>
// // //   );
// // // };

// // // const ServiceRow = ({ group }) => {
// // //   const [showAllServices, setShowAllServices] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(
// // //     servicesData.map((service) => [service.id, service])
// // //   );

// // //   const services = group.ids
// // //     .map((id) => serviceMap.get(id))
// // //     .filter(Boolean);

// // //   return (
// // //     <section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       className="flex flex-col gap-2.5 border-b border-slate-100 py-3 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-5"
// // //     >
// // //       <div
// // //         className={`flex shrink-0 items-center gap-2.5 rounded-lg border-l-4 p-2.5 transition-colors duration-200 lg:w-44 lg:flex-col lg:items-start lg:justify-center ${
// // //           showAllServices
// // //             ? "border-cyan-500 bg-cyan-50/60"
// // //             : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
// // //         }`}
// // //       >
// // //         <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
// // //           <Icon size={15} />
// // //         </div>

// // //         <div className="flex-1 lg:flex-none">
// // //           <h2 className="text-xs font-bold text-[#09215a]">
// // //             {group.title}
// // //           </h2>

// // //           <button
// // //             type="button"
// // //             onClick={() => setShowAllServices(!showAllServices)}
// // //             className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-600 transition hover:text-cyan-700"
// // //           >
// // //             {showAllServices ? "View Less" : "View All"}
// // //             {showAllServices ? (
// // //               <ChevronUp size={10} />
// // //             ) : (
// // //               <ChevronDown size={10} />
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
// // //         {services.length ? (
// // //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //             <ServiceItem
// // //               key={service.id}
// // //               service={service}
// // //               index={index}
// // //             />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full flex h-20 items-center justify-center text-xs text-slate-500">
// // //             No services available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const ServiceList = () => (
// // //   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-5 font-sans text-[#0b1d45]">
// // //     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
// // //       <div className="absolute -right-13 top-5 -z-10 h-51 w-51 rounded-full bg-cyan-200/30 blur-3xl" />
// // //       <div className="mx-auto grid max-w-6xl items-center gap-4 px-3 py-7 sm:px-5 md:grid-cols-2 lg:px-6 lg:py-12">
// // //         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //           <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#2DD4BF] sm:text-3xl">
// // //             Complete Financial Ecosystem for Modern Businesses
// // //           </h1>
// // //           <p className="mt-2.5 max-w-lg text-xs leading-5 text-[#526783] sm:text-sm">
// // //             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
// // //           </p>
// // //           <div className="mt-4 flex flex-wrap gap-1.5">
// // //             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md bg-[#2DD4BF] px-3 py-2 text-[11px] font-bold text-white shadow-lg shadow-cyan-500/20">
// // //               Get Started Now <ArrowRight size={10} />
// // //             </Link>
// // //             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md border border-cyan-500 bg-white px-3 py-2 text-[11px] font-bold text-cyan-600">
// // //               Talk to Sales <Headphones size={15} />
// // //             </Link>
// // //           </div>

// // //           <div className="mt-4 flex items-center gap-2.5">
// // //             <div className="flex -space-x-2.5">
// // //               {trustAvatars.map((avatar) => (
// // //                 <span
// // //                   key={avatar.initial}
// // //                   style={{ backgroundColor: avatar.color }}
// // //                   className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
// // //                 >
// // //                   {avatar.initial}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <p className="text-[11px] leading-4 text-slate-600">
// // //               Trusted by <b className="text-[#00AEB2]">10,000+ businesses</b>
// // //               <br />
// // //               across India
// // //             </p>
// // //           </div>
// // //         </motion.div>
// // //         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-38 w-full max-w-xs md:block">
// // //           <div className="absolute inset-x-1.5 bottom-0.5 h-7 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
// // //           <div className="absolute bottom-2.5 left-6 h-19 w-15 -rotate-6 rounded-xl border-2 border-slate-700 bg-white p-1 shadow-2xl">
// // //             <p className="text-[5px] font-bold text-[#08235a]">ABHEEPAY</p>
// // //             <div className="mt-1.5 grid grid-cols-4 gap-0.5">
// // //               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-1.5 bg-slate-900" />)}
// // //             </div>
// // //             <p className="mt-1 text-center text-[4px] text-slate-500">Scan & Pay</p>
// // //           </div>
// // //           <div className="absolute bottom-2.5 left-1/2 h-28 w-19 -translate-x-1/2 rotate-6 overflow-hidden rounded-[14px] border-[4px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-1.5 shadow-2xl">
// // //             <div className="h-2.5 w-7 rounded-full bg-[#061a43]" />
// // //             <p className="mt-4 text-[5px] text-white/70">Total Transactions</p>
// // //             <p className="text-sm font-bold text-white">₹ 68,490</p>
// // //             <div className="mt-3 flex h-6 items-end gap-0.5">
// // //               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
// // //                 <span key={index} style={{ height: height * 0.54 }} className="w-1.5 rounded-t bg-cyan-300" />
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-2.5 right-3 w-19 rounded-lg bg-white p-1.5 shadow-xl">
// // //             <p className="text-[6px] font-bold text-slate-700">Receipts</p>
// // //             <div className="mt-1 space-y-1 text-[5px] text-slate-500">
// // //               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
// // //               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
// // //               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-1.5 right-15 rotate-12 rounded-lg bg-white p-1 shadow-xl">
// // //             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-11 w-11 object-contain" />
// // //           </div>
// // //           <div className="absolute right-3 top-6 rounded-lg bg-white px-1.5 py-1 text-[8px] font-bold text-[#0b376a] shadow-lg">
// // //             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
// // //           </div>
// // //           <div className="absolute bottom-9 left-0.5 rounded-xl bg-cyan-500 p-1.5 text-white shadow-lg">
// // //             <LockKeyhole size={14} />
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>

// // //     <div className="mx-auto max-w-6xl px-3 py-4 sm:px-5 lg:px-6">
// // //       <div className="mb-2.5 flex items-center justify-between">
// // //         <h2 className="text-sm font-extrabold text-[#0b1d45] sm:text-base">Top Service Categories</h2>
// // //         <a href="#payment-solutions" className="text-[11px] font-bold text-cyan-600">
// // //           Explore All Services <ArrowRight className="inline" size={10} />
// // //         </a>
// // //       </div>
// // //       <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
// // //         {groupDefinitions.map((group) => (
// // //           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
// // //         ))}
// // //       </div>

// // //       <div className="mt-5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4">
// // //         {groupDefinitions.map((group) => (
// // //           <ServiceRow key={group.title} group={group} />
// // //         ))}
// // //       </div>

// // //       <section className="mt-5 grid overflow-hidden rounded-xl bg-[#071d48] text-white sm:grid-cols-4">
// // //         {[
// // //           [UsersRound, "10,000+", "Active Merchants"],
// // //           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
// // //           [ShieldCheck, "99.99%", "System Uptime"],
// // //           [Headphones, "24×7", "Customer Support"],
// // //         ].map(([Icon, value, label]) => (
// // //           <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
// // //             <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
// // //               <Icon size={13} />
// // //             </span>
// // //             <span>
// // //               <b className="block text-sm">{value}</b>
// // //               <small className="text-[9px] text-slate-300">{label}</small>
// // //             </span>
// // //           </div>
// // //         ))}
// // //       </section>

// // //       <section className="relative mt-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-3 py-5 text-white sm:px-5">
// // //         <Rocket className="absolute -bottom-3 right-6 h-15 w-15 rotate-[-20deg] text-white/25" />
// // //         <div className="relative flex flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center">
// // //           <div>
// // //             <h2 className="text-base font-extrabold sm:text-lg">Ready to Transform Your Business?</h2>
// // //             <p className="mt-1 text-[11px] text-white/90 sm:text-xs">Join thousands of businesses already growing with ABHEEPAY.</p>
// // //           </div>
// // //           <Link to="/contact" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-[#10366e]">
// // //             Join Us Now <ArrowRight size={10} />
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   </main>
// // // );

// // // // Service Details
 
// // // const ServiceDetail = ({ service, category }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const categoryLabel = category || "Our Services";
 
// // //   const nameWords = service.name.trim().split(" ");
// // //   const lastWord = nameWords.pop();
// // //   const restName = nameWords.join(" ");
 
// // //   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // //   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };
 
// // //   return (
// // //     <div className="bg-white font-sans text-[#0b1d45]">
// // //       {/* Hero */}
// // //       <section className="border-b border-slate-100 bg-gradient-to-b from-[#f4faf9] to-white px-3 py-7 sm:px-5 md:px-7 md:py-12">
// // //         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
// // //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //             <motion.span
// // //               variants={fadeInUp}
// // //               className="inline-flex items-center gap-1 rounded-full bg-[#00D3CD]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#00A79D]"
// // //             >
// // //               <FileText size={10} /> {categoryLabel}
// // //             </motion.span>
 
// // //             <motion.h1
// // //               variants={fadeInUp}
// // //               className="mt-3 text-[1.7rem] font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-[1.95rem]"
// // //             >
// // //               {restName ? `${restName} ` : ""}
// // //               <span className="text-[#00D3CD]">{lastWord}</span>
// // //             </motion.h1>
 
// // //             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8 bg-[#00D3CD]" />
 
// // //             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5 text-slate-500">
// // //               {service.longDescription || service.description}
// // //             </motion.p>
 
// // //             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
// // //               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00D3CD]/10 text-[#00A79D]">
// // //                 <UsersRound size={10} />
// // //               </span>
// // //               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
// // //             </motion.div>
// // //           </motion.div>
 
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative mx-auto w-full max-w-sm"
// // //           >
// // //             <div className="relative overflow-hidden rounded-xl shadow-xl">
// // //               <motion.img
// // //                 whileHover={{ scale: 1.04 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 src={mainImg}
// // //                 alt={service.name}
// // //                 className="h-48 w-full object-cover sm:h-60"
// // //               />
// // //               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
// // //             </div>
 
// // //             {service.partner && (
// // //               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
// // //                 <p className="text-[8px] font-semibold text-slate-500">In Partnership with</p>
// // //                 {service.partner.logo ? (
// // //                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
// // //                 ) : (
// // //                   <p className="text-xs font-black text-[#0b1d45]">{service.partner.name}</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         </div>
// // //       </section>
 
// // //       {/* Solutions + Benefits */}
// // //       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
// // //         <div className="grid gap-6 md:grid-cols-3">
// // //           <div className="md:col-span-2">
// // //             <div className="h-[2px] w-8 bg-[#00D3CD]" />
// // //             <h2 className="mt-2 text-base font-black text-slate-900 sm:text-lg">Our {categoryLabel}</h2>
 
// // //             {features.length ? (
// // //               <motion.div
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={staggerContainer}
// // //                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
// // //               >
// // //                 {features.map((text, index) => {
// // //                   const Icon = serviceIcons[index % serviceIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       variants={fadeInUp}
// // //                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D3CD]/60 hover:shadow-md"
// // //                     >
// // //                       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00D3CD]/10 text-[#00A79D]">
// // //                         <Icon size={12} strokeWidth={1.7} />
// // //                       </div>
// // //                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug text-slate-800">{text}</p>
// // //                       <div className="mt-2 flex justify-end">
// // //                         <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#00D3CD]/40 text-[#00A79D] transition-all duration-300 group-hover:bg-[#00D3CD] group-hover:text-white">
// // //                           <ArrowRight size={9} />
// // //                         </span>
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </motion.div>
// // //             ) : (
// // //               <p className="mt-4 text-[13px] text-slate-500">More details coming soon.</p>
// // //             )}
// // //           </div>
 
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative flex flex-col overflow-hidden rounded-xl bg-[#00D3CD] p-4 text-white shadow-lg"
// // //           >
// // //             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
// // //               {Array.from({ length: 24 }).map((_, index) => (
// // //                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
// // //               ))}
// // //             </div>
 
// // //             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
// // //             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />
 
// // //             <div className="mt-3.5 space-y-3">
// // //               {highlights.length ? (
// // //                 highlights.map((benefit, index) => {
// // //                   const Icon = benefitIcons[index % benefitIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       initial={{ opacity: 0, x: -15 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ delay: index * 0.05 }}
// // //                     >
// // //                       <div className="flex items-start gap-2">
// // //                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#00A79D]">
// // //                           <Icon size={11} />
// // //                         </span>
// // //                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
// // //                       </div>
// // //                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
// // //                     </motion.div>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>
 
// // //       {/* CTA */}
// // //       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 bg-[#f7fdfc] p-4 sm:flex-row sm:p-6"
// // //         >
// // //           <div className="flex items-center gap-3 text-center sm:text-left">
// // //             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00D3CD]/10 text-[#00A79D] sm:flex">
// // //               <Landmark size={20} />
// // //             </span>
// // //             <div>
// // //               <h3 className="text-sm font-black text-slate-900 sm:text-base">Ready to grow your business?</h3>
// // //               <p className="mt-1 max-w-sm text-[13px] text-slate-500">
// // //                 Explore our services and find the right financial solution that fits your needs.
// // //               </p>
// // //             </div>
// // //           </div>
 
// // //           <Link
// // //             to="/services"
// // //             className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#00D3CD] px-3 py-2 text-[11px] font-bold text-white shadow-md shadow-[#00D3CD]/30 transition hover:bg-[#00bdb8]"
// // //           >
// // //             Back to Services <ArrowRight size={10} />
// // //           </Link>
// // //         </motion.div>
// // //       </section>
// // //     </div>
// // //   );
// // // };
 
// // // const Services = () => {
// // //   const { id } = useParams();
 
// // //   if (!id) return <ServiceList />;
 
// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-white text-black">
// // //         <p className="text-sm font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
// // //       </div>
// // //     );
// // //   }
 
// // //   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;
 
// // //   return <ServiceDetail service={service} category={category} />;
// // // };
 
// // // export default Services;









// // // import React from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Building2,
// // //   Code2,
// // //   CreditCard,
// // //   FileText,
// // //   Headphones,
// // //   Landmark,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   UsersRound,
// // //   WalletCards,
// // //   ChevronDown,
// // //   ChevronUp,
// // //   ClipboardList,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// // // const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// // // const trustAvatars = [
// // //   { initial: "A", color: "#f97316" },
// // //   { initial: "R", color: "#0ea5e9" },
// // //   { initial: "S", color: "#22c55e" },
// // // ];

// // // const CategoryCard = ({ title, description, Icon }) => (
// // //   <a
// // //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //     className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-[0_3px_12px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
// // //   >
// // //     <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
// // //       <Icon size={18} strokeWidth={1.6} />
// // //     </div>

// // //     <h3 className="text-xs font-bold leading-tight text-[#091d48]">
// // //       {title}
// // //     </h3>

// // //     <p className="mt-1 flex-1 text-[11px] leading-4 text-slate-500">
// // //       {description}
// // //     </p>

// // //     <div className="mt-2.5 flex justify-end">
// // //       <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
// // //         <ArrowRight size={11} />
// // //       </span>
// // //     </div>
// // //   </a>
// // // );

// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link
// // //       to={`/services/${service.id}`}
// // //       className="group flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
// // //     >
// // //       <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
// // //         <Icon size={14} strokeWidth={1.7} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-xs font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
// // //       <p className="line-clamp-2 text-[11px] leading-4 text-slate-500">{service.description}</p>
// // //     </Link>
// // //   );
// // // };

// // // const ServiceRow = ({ group }) => {
// // //   const [showAllServices, setShowAllServices] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(
// // //     servicesData.map((service) => [service.id, service])
// // //   );

// // //   const services = group.ids
// // //     .map((id) => serviceMap.get(id))
// // //     .filter(Boolean);

// // //   return (
// // //     <section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       className="flex flex-col gap-2.5 border-b border-slate-100 py-3 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-5"
// // //     >
// // //       <div
// // //         className={`flex shrink-0 items-center gap-2.5 rounded-lg border-l-4 p-2.5 transition-colors duration-200 lg:w-44 lg:flex-col lg:items-start lg:justify-center ${
// // //           showAllServices
// // //             ? "border-cyan-500 bg-cyan-50/60"
// // //             : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
// // //         }`}
// // //       >
// // //         <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
// // //           <Icon size={15} />
// // //         </div>

// // //         <div className="flex-1 lg:flex-none">
// // //           <h2 className="text-xs font-bold text-[#09215a]">
// // //             {group.title}
// // //           </h2>

// // //           <button
// // //             type="button"
// // //             onClick={() => setShowAllServices(!showAllServices)}
// // //             className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-600 transition hover:text-cyan-700"
// // //           >
// // //             {showAllServices ? "View Less" : "View All"}
// // //             {showAllServices ? (
// // //               <ChevronUp size={10} />
// // //             ) : (
// // //               <ChevronDown size={10} />
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
// // //         {services.length ? (
// // //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //             <ServiceItem
// // //               key={service.id}
// // //               service={service}
// // //               index={index}
// // //             />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full flex h-20 items-center justify-center text-xs text-slate-500">
// // //             No services available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const ServiceList = () => (
// // //   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-5 font-sans text-[#0b1d45]">
// // //     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
// // //       <div className="absolute -right-13 top-5 -z-10 h-51 w-51 rounded-full bg-cyan-200/30 blur-3xl" />
// // //       <div className="mx-auto grid max-w-6xl items-center gap-4 px-3 py-7 sm:px-5 md:grid-cols-2 lg:px-6 lg:py-12">
// // //         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //           <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#2DD4BF] sm:text-3xl">
// // //             Complete Financial Ecosystem for Modern Businesses
// // //           </h1>
// // //           <p className="mt-2.5 max-w-lg text-xs leading-5 text-[#526783] sm:text-sm">
// // //             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
// // //           </p>
// // //           <div className="mt-4 flex flex-wrap gap-1.5">
// // //             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md bg-[#2DD4BF] px-3 py-2 text-[11px] font-bold text-white shadow-lg shadow-cyan-500/20">
// // //               Get Started Now <ArrowRight size={10} />
// // //             </Link>
// // //             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md border border-cyan-500 bg-white px-3 py-2 text-[11px] font-bold text-cyan-600">
// // //               Talk to Sales <Headphones size={15} />
// // //             </Link>
// // //           </div>

// // //           <div className="mt-4 flex items-center gap-2.5">
// // //             <div className="flex -space-x-2.5">
// // //               {trustAvatars.map((avatar) => (
// // //                 <span
// // //                   key={avatar.initial}
// // //                   style={{ backgroundColor: avatar.color }}
// // //                   className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
// // //                 >
// // //                   {avatar.initial}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <p className="text-[11px] leading-4 text-slate-600">
// // //               Trusted by <b className="text-[#00AEB2]">10,000+ businesses</b>
// // //               <br />
// // //               across India
// // //             </p>
// // //           </div>
// // //         </motion.div>
// // //         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-38 w-full max-w-xs md:block">
// // //           <div className="absolute inset-x-1.5 bottom-0.5 h-7 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
// // //           <div className="absolute bottom-2.5 left-6 h-19 w-15 -rotate-6 rounded-xl border-2 border-slate-700 bg-white p-1 shadow-2xl">
// // //             <p className="text-[5px] font-bold text-[#08235a]">ABHEEPAY</p>
// // //             <div className="mt-1.5 grid grid-cols-4 gap-0.5">
// // //               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-1.5 bg-slate-900" />)}
// // //             </div>
// // //             <p className="mt-1 text-center text-[4px] text-slate-500">Scan & Pay</p>
// // //           </div>
// // //           <div className="absolute bottom-2.5 left-1/2 h-28 w-19 -translate-x-1/2 rotate-6 overflow-hidden rounded-[14px] border-[4px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-1.5 shadow-2xl">
// // //             <div className="h-2.5 w-7 rounded-full bg-[#061a43]" />
// // //             <p className="mt-4 text-[5px] text-white/70">Total Transactions</p>
// // //             <p className="text-sm font-bold text-white">₹ 68,490</p>
// // //             <div className="mt-3 flex h-6 items-end gap-0.5">
// // //               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
// // //                 <span key={index} style={{ height: height * 0.54 }} className="w-1.5 rounded-t bg-cyan-300" />
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-2.5 right-3 w-19 rounded-lg bg-white p-1.5 shadow-xl">
// // //             <p className="text-[6px] font-bold text-slate-700">Receipts</p>
// // //             <div className="mt-1 space-y-1 text-[5px] text-slate-500">
// // //               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
// // //               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
// // //               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-1.5 right-15 rotate-12 rounded-lg bg-white p-1 shadow-xl">
// // //             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-11 w-11 object-contain" />
// // //           </div>
// // //           <div className="absolute right-3 top-6 rounded-lg bg-white px-1.5 py-1 text-[8px] font-bold text-[#0b376a] shadow-lg">
// // //             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
// // //           </div>
// // //           <div className="absolute bottom-9 left-0.5 rounded-xl bg-cyan-500 p-1.5 text-white shadow-lg">
// // //             <LockKeyhole size={14} />
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>

// // //     <div className="mx-auto max-w-6xl px-3 py-4 sm:px-5 lg:px-6">
// // //       <div className="mb-2.5 flex items-center justify-between">
// // //         <h2 className="text-sm font-extrabold text-[#0b1d45] sm:text-base">Top Service Categories</h2>
// // //         <a href="#payment-solutions" className="text-[11px] font-bold text-cyan-600">
// // //           Explore All Services <ArrowRight className="inline" size={10} />
// // //         </a>
// // //       </div>
// // //       <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
// // //         {groupDefinitions.map((group) => (
// // //           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
// // //         ))}
// // //       </div>

// // //       <div className="mt-5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4">
// // //         {groupDefinitions.map((group) => (
// // //           <ServiceRow key={group.title} group={group} />
// // //         ))}
// // //       </div>

// // //       <section className="mt-5 grid overflow-hidden rounded-xl bg-[#071d48] text-white sm:grid-cols-4">
// // //         {[
// // //           [UsersRound, "10,000+", "Active Merchants"],
// // //           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
// // //           [ShieldCheck, "99.99%", "System Uptime"],
// // //           [Headphones, "24×7", "Customer Support"],
// // //         ].map(([Icon, value, label]) => (
// // //           <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
// // //             <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
// // //               <Icon size={13} />
// // //             </span>
// // //             <span>
// // //               <b className="block text-sm">{value}</b>
// // //               <small className="text-[9px] text-slate-300">{label}</small>
// // //             </span>
// // //           </div>
// // //         ))}
// // //       </section>

// // //       <section className="relative mt-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-3 py-5 text-white sm:px-5">
// // //         <Rocket className="absolute -bottom-3 right-6 h-15 w-15 rotate-[-20deg] text-white/25" />
// // //         <div className="relative flex flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center">
// // //           <div>
// // //             <h2 className="text-base font-extrabold sm:text-lg">Ready to Transform Your Business?</h2>
// // //             <p className="mt-1 text-[11px] text-white/90 sm:text-xs">Join thousands of businesses already growing with ABHEEPAY.</p>
// // //           </div>
// // //           <Link to="/contact" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-[#10366e]">
// // //             Join Us Now <ArrowRight size={10} />
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   </main>
// // // );

// // // // Service Details

// // // const ServiceDetail = ({ service, category }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const categoryLabel = category || "Our Services";

// // //   const nameWords = service.name.trim().split(" ");
// // //   const lastWord = nameWords.pop();
// // //   const restName = nameWords.join(" ");

// // //   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // //   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // //   return (
// // //     <div className="bg-white font-sans text-[#0b1d45]">
// // //       {/* Hero */}
// // //       <section className="border-b border-slate-100 bg-gradient-to-b from-[#f4faf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
// // //         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
// // //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //             <motion.span
// // //               variants={fadeInUp}
// // //               className="inline-flex items-center gap-1 rounded-full bg-[#00D3CD]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#00A79D]"
// // //             >
// // //               <FileText size={10} /> {categoryLabel}
// // //             </motion.span>

// // //             <motion.h1
// // //               variants={fadeInUp}
// // //               className="mt-3 text-[1.7rem] font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-[1.95rem]"
// // //             >
// // //               {restName ? `${restName} ` : ""}
// // //               <span className="text-[#00D3CD]">{lastWord}</span>
// // //             </motion.h1>

// // //             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8 bg-[#00D3CD]" />

// // //             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5 text-slate-500">
// // //               {service.longDescription || service.description}
// // //             </motion.p>

// // //             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
// // //               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00D3CD]/10 text-[#00A79D]">
// // //                 <UsersRound size={10} />
// // //               </span>
// // //               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
// // //             </motion.div>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative mx-auto w-full max-w-sm"
// // //           >
// // //             <div className="relative overflow-hidden rounded-xl shadow-xl">
// // //               <motion.img
// // //                 whileHover={{ scale: 1.04 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 src={mainImg}
// // //                 alt={service.name}
// // //                 className="h-48 w-full object-cover sm:h-60"
// // //               />
// // //               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
// // //             </div>

// // //             {service.partner && (
// // //               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
// // //                 <p className="text-[8px] font-semibold text-slate-500">In Partnership with</p>
// // //                 {service.partner.logo ? (
// // //                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
// // //                 ) : (
// // //                   <p className="text-xs font-black text-[#0b1d45]">{service.partner.name}</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Solutions + Benefits */}
// // //       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
// // //         <div className="grid gap-6 md:grid-cols-3">
// // //           <div className="md:col-span-2">
// // //             <div className="h-[2px] w-8 bg-[#00D3CD]" />
// // //             <h2 className="mt-2 text-base font-black text-slate-900 sm:text-lg">Our {categoryLabel}</h2>

// // //             {features.length ? (
// // //               <motion.div
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={staggerContainer}
// // //                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
// // //               >
// // //                 {features.map((text, index) => {
// // //                   const Icon = serviceIcons[index % serviceIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       variants={fadeInUp}
// // //                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D3CD]/60 hover:shadow-md"
// // //                     >
// // //                       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00D3CD]/10 text-[#00A79D]">
// // //                         <Icon size={12} strokeWidth={1.7} />
// // //                       </div>
// // //                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug text-slate-800">{text}</p>
// // //                       <div className="mt-2 flex justify-end">
// // //                         <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#00D3CD]/40 text-[#00A79D] transition-all duration-300 group-hover:bg-[#00D3CD] group-hover:text-white">
// // //                           <ArrowRight size={9} />
// // //                         </span>
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </motion.div>
// // //             ) : (
// // //               <p className="mt-4 text-[13px] text-slate-500">More details coming soon.</p>
// // //             )}
// // //           </div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative flex flex-col overflow-hidden rounded-xl bg-[#00D3CD] p-4 text-white shadow-lg"
// // //           >
// // //             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
// // //               {Array.from({ length: 24 }).map((_, index) => (
// // //                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
// // //               ))}
// // //             </div>

// // //             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
// // //             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />

// // //             <div className="mt-3.5 space-y-3">
// // //               {highlights.length ? (
// // //                 highlights.map((benefit, index) => {
// // //                   const Icon = benefitIcons[index % benefitIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       initial={{ opacity: 0, x: -15 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ delay: index * 0.05 }}
// // //                     >
// // //                       <div className="flex items-start gap-2">
// // //                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#00A79D]">
// // //                           <Icon size={11} />
// // //                         </span>
// // //                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
// // //                       </div>
// // //                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
// // //                     </motion.div>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 bg-[#f7fdfc] p-4 sm:flex-row sm:p-6"
// // //         >
// // //           <div className="flex items-center gap-3 text-center sm:text-left">
// // //             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00D3CD]/10 text-[#00A79D] sm:flex">
// // //               <Landmark size={20} />
// // //             </span>
// // //             <div>
// // //               <h3 className="text-sm font-black text-slate-900 sm:text-base">Ready to grow your business?</h3>
// // //               <p className="mt-1 max-w-sm text-[13px] text-slate-500">
// // //                 Explore our services and find the right financial solution that fits your needs.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <Link
// // //             to="/services"
// // //             className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#00D3CD] px-3 py-2 text-[11px] font-bold text-white shadow-md shadow-[#00D3CD]/30 transition hover:bg-[#00bdb8]"
// // //           >
// // //             Back to Services <ArrowRight size={10} />
// // //           </Link>
// // //         </motion.div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-white text-black">
// // //         <p className="text-sm font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
// // //       </div>
// // //     );
// // //   }

// // //   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

// // //   return <ServiceDetail service={service} category={category} />;
// // // };

// // // export default Services;












// // // import React from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Building2,
// // //   Code2,
// // //   CreditCard,
// // //   FileText,
// // //   Headphones,
// // //   Landmark,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   UsersRound,
// // //   WalletCards,
// // //   ChevronDown,
// // //   ChevronUp,
// // //   ClipboardList,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// // // const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// // // const trustAvatars = [
// // //   { initial: "A", color: "#f97316" },
// // //   { initial: "R", color: "#0ea5e9" },
// // //   { initial: "S", color: "#22c55e" },
// // // ];

// // // const CategoryCard = ({ title, description, Icon }) => (
// // //   <a
// // //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //     className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-[0_3px_12px_rgba(15,37,76,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
// // //   >
// // //     <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-100 via-teal-50 to-blue-100 text-[#0baec1]">
// // //       <Icon size={18} strokeWidth={1.6} />
// // //     </div>

// // //     <h3 className="text-xs font-bold leading-tight text-[#091d48]">
// // //       {title}
// // //     </h3>

// // //     <p className="mt-1 flex-1 text-[11px] leading-4 text-slate-500">
// // //       {description}
// // //     </p>

// // //     <div className="mt-2.5 flex justify-end">
// // //       <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
// // //         <ArrowRight size={11} />
// // //       </span>
// // //     </div>
// // //   </a>
// // // );

// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link
// // //       to={`/services/${service.id}`}
// // //       className="group flex flex-col gap-1.5 rounded-lg border border-slate-100 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
// // //     >
// // //       <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 text-[#13b7c8] transition-transform duration-300 group-hover:scale-110">
// // //         <Icon size={14} strokeWidth={1.7} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-xs font-bold leading-snug text-[#0b1d45]">{service.name.replaceAll("â€“", "–")}</h4>
// // //       <p className="line-clamp-2 text-[11px] leading-4 text-slate-500">{service.description}</p>
// // //     </Link>
// // //   );
// // // };

// // // const ServiceRow = ({ group }) => {
// // //   const [showAllServices, setShowAllServices] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(
// // //     servicesData.map((service) => [service.id, service])
// // //   );

// // //   const services = group.ids
// // //     .map((id) => serviceMap.get(id))
// // //     .filter(Boolean);

// // //   return (
// // //     <section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       className="flex flex-col gap-2.5 border-b border-slate-100 py-3 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-5"
// // //     >
// // //       <div
// // //         className={`flex shrink-0 items-center gap-2.5 rounded-lg border-l-4 p-2.5 transition-colors duration-200 lg:w-44 lg:flex-col lg:items-start lg:justify-center ${
// // //           showAllServices
// // //             ? "border-cyan-500 bg-cyan-50/60"
// // //             : "border-transparent hover:border-cyan-200 hover:bg-slate-50"
// // //         }`}
// // //       >
// // //         <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
// // //           <Icon size={15} />
// // //         </div>

// // //         <div className="flex-1 lg:flex-none">
// // //           <h2 className="text-xs font-bold text-[#09215a]">
// // //             {group.title}
// // //           </h2>

// // //           <button
// // //             type="button"
// // //             onClick={() => setShowAllServices(!showAllServices)}
// // //             className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-600 transition hover:text-cyan-700"
// // //           >
// // //             {showAllServices ? "View Less" : "View All"}
// // //             {showAllServices ? (
// // //               <ChevronUp size={10} />
// // //             ) : (
// // //               <ChevronDown size={10} />
// // //             )}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
// // //         {services.length ? (
// // //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //             <ServiceItem
// // //               key={service.id}
// // //               service={service}
// // //               index={index}
// // //             />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full flex h-20 items-center justify-center text-xs text-slate-500">
// // //             No services available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // const ServiceList = () => (
// // //   <main id="top" className="overflow-hidden bg-[#fbfdff] pb-5 font-sans text-[#0b1d45]">
// // //     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-r from-white via-[#f7fdff] to-[#edf3ff]">
// // //       <div className="absolute -right-13 top-5 -z-10 h-51 w-51 rounded-full bg-cyan-200/30 blur-3xl" />
// // //       <div className="mx-auto grid max-w-6xl items-center gap-4 px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:grid-cols-2 lg:px-6 lg:pb-12 lg:pt-16">
// // //         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //           <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#2DD4BF] sm:text-3xl">
// // //             Complete Financial Ecosystem for Modern Businesses
// // //           </h1>
// // //           <p className="mt-2.5 max-w-lg text-xs leading-5 text-[#526783] sm:text-sm">
// // //             Powering 10,000+ businesses with secure payments, banking, travel, insurance & technology solutions.
// // //           </p>
// // //           <div className="mt-4 flex flex-wrap gap-1.5">
// // //             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md bg-[#2DD4BF] px-3 py-2 text-[11px] font-bold text-white shadow-lg shadow-cyan-500/20">
// // //               Get Started Now <ArrowRight size={10} />
// // //             </Link>
// // //             <Link to="/contact" className="inline-flex items-center gap-1 rounded-md border border-cyan-500 bg-white px-3 py-2 text-[11px] font-bold text-cyan-600">
// // //               Talk to Sales <Headphones size={15} />
// // //             </Link>
// // //           </div>

// // //           <div className="mt-4 flex items-center gap-2.5">
// // //             <div className="flex -space-x-2.5">
// // //               {trustAvatars.map((avatar) => (
// // //                 <span
// // //                   key={avatar.initial}
// // //                   style={{ backgroundColor: avatar.color }}
// // //                   className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
// // //                 >
// // //                   {avatar.initial}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <p className="text-[11px] leading-4 text-slate-600">
// // //               Trusted by <b className="text-[#00AEB2]">10,000+ businesses</b>
// // //               <br />
// // //               across India
// // //             </p>
// // //           </div>
// // //         </motion.div>
// // //         <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto hidden h-38 w-full max-w-xs md:block">
// // //           <div className="absolute inset-x-1.5 bottom-0.5 h-7 rounded-[50%] bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 opacity-65 blur-sm" />
// // //           <div className="absolute bottom-2.5 left-6 h-19 w-15 -rotate-6 rounded-xl border-2 border-slate-700 bg-white p-1 shadow-2xl">
// // //             <p className="text-[5px] font-bold text-[#08235a]">ABHEEPAY</p>
// // //             <div className="mt-1.5 grid grid-cols-4 gap-0.5">
// // //               {Array.from({ length: 16 }).map((_, index) => <span key={index} className="h-1.5 bg-slate-900" />)}
// // //             </div>
// // //             <p className="mt-1 text-center text-[4px] text-slate-500">Scan & Pay</p>
// // //           </div>
// // //           <div className="absolute bottom-2.5 left-1/2 h-28 w-19 -translate-x-1/2 rotate-6 overflow-hidden rounded-[14px] border-[4px] border-[#082760] bg-gradient-to-b from-[#137ad6] to-[#0a2d73] p-1.5 shadow-2xl">
// // //             <div className="h-2.5 w-7 rounded-full bg-[#061a43]" />
// // //             <p className="mt-4 text-[5px] text-white/70">Total Transactions</p>
// // //             <p className="text-sm font-bold text-white">₹ 68,490</p>
// // //             <div className="mt-3 flex h-6 items-end gap-0.5">
// // //               {[20, 35, 25, 45, 35, 60, 52].map((height, index) => (
// // //                 <span key={index} style={{ height: height * 0.54 }} className="w-1.5 rounded-t bg-cyan-300" />
// // //               ))}
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-2.5 right-3 w-19 rounded-lg bg-white p-1.5 shadow-xl">
// // //             <p className="text-[6px] font-bold text-slate-700">Receipts</p>
// // //             <div className="mt-1 space-y-1 text-[5px] text-slate-500">
// // //               <p className="flex justify-between"><span>UPI Payment</span><b>₹2,450</b></p>
// // //               <p className="flex justify-between"><span>Card Payment</span><b>₹650</b></p>
// // //               <p className="flex justify-between"><span>AEPS Withdrawal</span><b>₹4,550</b></p>
// // //             </div>
// // //           </div>
// // //           <div className="absolute bottom-1.5 right-15 rotate-12 rounded-lg bg-white p-1 shadow-xl">
// // //             <img src="/assets/image/services/soundbox.png" alt="Payment sound box" className="h-11 w-11 object-contain" />
// // //           </div>
// // //           <div className="absolute right-3 top-6 rounded-lg bg-white px-1.5 py-1 text-[8px] font-bold text-[#0b376a] shadow-lg">
// // //             Successful<br />Transactions <span className="text-cyan-500">12,650</span>
// // //           </div>
// // //           <div className="absolute bottom-9 left-0.5 rounded-xl bg-cyan-500 p-1.5 text-white shadow-lg">
// // //             <LockKeyhole size={14} />
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>

// // //     <div className="mx-auto max-w-6xl px-3 py-4 sm:px-5 lg:px-6">
// // //       <div className="mb-2.5 flex items-center justify-between">
// // //         <h2 className="text-sm font-extrabold text-[#0b1d45] sm:text-base">Top Service Categories</h2>
// // //         <a href="#payment-solutions" className="text-[11px] font-bold text-cyan-600">
// // //           Explore All Services <ArrowRight className="inline" size={10} />
// // //         </a>
// // //       </div>
// // //       <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
// // //         {groupDefinitions.map((group) => (
// // //           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
// // //         ))}
// // //       </div>

// // //       <div className="mt-5 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4">
// // //         {groupDefinitions.map((group) => (
// // //           <ServiceRow key={group.title} group={group} />
// // //         ))}
// // //       </div>

// // //       <section className="mt-5 grid overflow-hidden rounded-xl bg-[#071d48] text-white sm:grid-cols-4">
// // //         {[
// // //           [UsersRound, "10,000+", "Active Merchants"],
// // //           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
// // //           [ShieldCheck, "99.99%", "System Uptime"],
// // //           [Headphones, "24×7", "Customer Support"],
// // //         ].map(([Icon, value, label]) => (
// // //           <div key={label} className="flex items-center justify-center gap-2 border-white/15 p-3 sm:border-r last:border-r-0">
// // //             <span className="rounded-full bg-cyan-400/10 p-2 text-cyan-300">
// // //               <Icon size={13} />
// // //             </span>
// // //             <span>
// // //               <b className="block text-sm">{value}</b>
// // //               <small className="text-[9px] text-slate-300">{label}</small>
// // //             </span>
// // //           </div>
// // //         ))}
// // //       </section>

// // //       <section className="relative mt-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#21c7bd] via-[#0b9ed8] to-[#1260d7] px-3 py-5 text-white sm:px-5">
// // //         <Rocket className="absolute -bottom-3 right-6 h-15 w-15 rotate-[-20deg] text-white/25" />
// // //         <div className="relative flex flex-col items-start justify-between gap-2.5 sm:flex-row sm:items-center">
// // //           <div>
// // //             <h2 className="text-base font-extrabold sm:text-lg">Ready to Transform Your Business?</h2>
// // //             <p className="mt-1 text-[11px] text-white/90 sm:text-xs">Join thousands of businesses already growing with ABHEEPAY.</p>
// // //           </div>
// // //           <Link to="/contact" className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-[11px] font-bold text-[#10366e]">
// // //             Join Us Now <ArrowRight size={10} />
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   </main>
// // // );

// // // // Service Details

// // // const ServiceDetail = ({ service, category }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const categoryLabel = category || "Our Services";

// // //   const nameWords = service.name.trim().split(" ");
// // //   const lastWord = nameWords.pop();
// // //   const restName = nameWords.join(" ");

// // //   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // //   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // //   return (
// // //     <div className="bg-white font-sans text-[#0b1d45]">
// // //       {/* Hero */}
// // //       <section className="border-b border-slate-100 bg-gradient-to-b from-[#f4faf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
// // //         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
// // //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //             <motion.span
// // //               variants={fadeInUp}
// // //               className="inline-flex items-center gap-1 rounded-full bg-[#00D3CD]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#00A79D]"
// // //             >
// // //               <FileText size={10} /> {categoryLabel}
// // //             </motion.span>

// // //             <motion.h1
// // //               variants={fadeInUp}
// // //               className="mt-3 text-[1.7rem] font-black leading-[1.1] text-slate-900 sm:text-3xl md:text-[1.95rem]"
// // //             >
// // //               {restName ? `${restName} ` : ""}
// // //               <span className="text-[#00D3CD]">{lastWord}</span>
// // //             </motion.h1>

// // //             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8 bg-[#00D3CD]" />

// // //             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5 text-slate-500">
// // //               {service.longDescription || service.description}
// // //             </motion.p>

// // //             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px] text-slate-500">
// // //               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00D3CD]/10 text-[#00A79D]">
// // //                 <UsersRound size={10} />
// // //               </span>
// // //               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
// // //             </motion.div>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative mx-auto w-full max-w-sm"
// // //           >
// // //             <div className="relative overflow-hidden rounded-xl shadow-xl">
// // //               <motion.img
// // //                 whileHover={{ scale: 1.04 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 src={mainImg}
// // //                 alt={service.name}
// // //                 className="h-48 w-full object-cover sm:h-60"
// // //               />
// // //               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
// // //             </div>

// // //             {service.partner && (
// // //               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
// // //                 <p className="text-[8px] font-semibold text-slate-500">In Partnership with</p>
// // //                 {service.partner.logo ? (
// // //                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
// // //                 ) : (
// // //                   <p className="text-xs font-black text-[#0b1d45]">{service.partner.name}</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Solutions + Benefits */}
// // //       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
// // //         <div className="grid gap-6 md:grid-cols-3">
// // //           <div className="md:col-span-2">
// // //             <div className="h-[2px] w-8 bg-[#00D3CD]" />
// // //             <h2 className="mt-2 text-base font-black text-slate-900 sm:text-lg">Our {categoryLabel}</h2>

// // //             {features.length ? (
// // //               <motion.div
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={staggerContainer}
// // //                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
// // //               >
// // //                 {features.map((text, index) => {
// // //                   const Icon = serviceIcons[index % serviceIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       variants={fadeInUp}
// // //                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00D3CD]/60 hover:shadow-md"
// // //                     >
// // //                       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#00D3CD]/10 text-[#00A79D]">
// // //                         <Icon size={12} strokeWidth={1.7} />
// // //                       </div>
// // //                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug text-slate-800">{text}</p>
// // //                       <div className="mt-2 flex justify-end">
// // //                         <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#00D3CD]/40 text-[#00A79D] transition-all duration-300 group-hover:bg-[#00D3CD] group-hover:text-white">
// // //                           <ArrowRight size={9} />
// // //                         </span>
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </motion.div>
// // //             ) : (
// // //               <p className="mt-4 text-[13px] text-slate-500">More details coming soon.</p>
// // //             )}
// // //           </div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative flex flex-col overflow-hidden rounded-xl bg-[#00D3CD] p-4 text-white shadow-lg"
// // //           >
// // //             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
// // //               {Array.from({ length: 24 }).map((_, index) => (
// // //                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
// // //               ))}
// // //             </div>

// // //             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
// // //             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />

// // //             <div className="mt-3.5 space-y-3">
// // //               {highlights.length ? (
// // //                 highlights.map((benefit, index) => {
// // //                   const Icon = benefitIcons[index % benefitIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       initial={{ opacity: 0, x: -15 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ delay: index * 0.05 }}
// // //                     >
// // //                       <div className="flex items-start gap-2">
// // //                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#00A79D]">
// // //                           <Icon size={11} />
// // //                         </span>
// // //                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
// // //                       </div>
// // //                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
// // //                     </motion.div>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 bg-[#f7fdfc] p-4 sm:flex-row sm:p-6"
// // //         >
// // //           <div className="flex items-center gap-3 text-center sm:text-left">
// // //             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00D3CD]/10 text-[#00A79D] sm:flex">
// // //               <Landmark size={20} />
// // //             </span>
// // //             <div>
// // //               <h3 className="text-sm font-black text-slate-900 sm:text-base">Ready to grow your business?</h3>
// // //               <p className="mt-1 max-w-sm text-[13px] text-slate-500">
// // //                 Explore our services and find the right financial solution that fits your needs.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <Link
// // //             to="/services"
// // //             className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#00D3CD] px-3 py-2 text-[11px] font-bold text-white shadow-md shadow-[#00D3CD]/30 transition hover:bg-[#00bdb8]"
// // //           >
// // //             Back to Services <ArrowRight size={10} />
// // //           </Link>
// // //         </motion.div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center bg-white text-black">
// // //         <p className="text-sm font-semibold border-b-2 border-[#00D3CD]">Service not found</p>
// // //       </div>
// // //     );
// // //   }

// // //   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

// // //   return <ServiceDetail service={service} category={category} />;
// // // };

// // // export default Services;











// // // import React from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import { useState } from "react";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Building2,
// // //   Code2,
// // //   CreditCard,
// // //   FileText,
// // //   Headphones,
// // //   Landmark,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   UsersRound,
// // //   WalletCards,
// // //   ChevronDown,
// // //   ChevronUp,
// // //   ClipboardList,
// // //   CheckCircle2,
// // //   BadgeCheck,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // /* ------------------------------------------------------------------ */
// // // /* Design tokens (kept local so nothing outside this file is touched) */
// // // /* ------------------------------------------------------------------ */
// // // const BRAND = "#155EEF"; // primary blue, matches reference's accent
// // // const INK = "#0B1220"; // near-black heading colour
// // // const MUTED = "#5B6B84"; // body copy grey

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// // // const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// // // const trustAvatars = [
// // //   { initial: "A", color: "#f97316" },
// // //   { initial: "R", color: "#0ea5e9" },
// // //   { initial: "S", color: "#22c55e" },
// // // ];

// // // /* ------------------------------------------------------------------ */
// // // /* Category card — flat icon tile, bold title, quiet description      */
// // // /* ------------------------------------------------------------------ */
// // // const CategoryCard = ({ title, description, Icon }) => (
// // //   <a
// // //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //     className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#155EEF]/40 hover:shadow-[0_10px_30px_rgba(21,94,239,0.10)]"
// // //   >
// // //     <div
// // //       className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
// // //       style={{ backgroundColor: "rgba(21,94,239,0.08)", color: BRAND }}
// // //     >
// // //       <Icon size={19} strokeWidth={1.8} />
// // //     </div>

// // //     <h3 className="text-[13px] font-bold leading-tight" style={{ color: INK }}>
// // //       {title}
// // //     </h3>

// // //     <p className="mt-1.5 flex-1 text-[11.5px] leading-5" style={{ color: MUTED }}>
// // //       {description}
// // //     </p>

// // //     <span
// // //       className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100"
// // //       style={{ color: BRAND }}
// // //     >
// // //       Explore <ArrowRight size={11} />
// // //     </span>
// // //   </a>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Individual service tile inside a category row                      */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link
// // //       to={`/services/${service.id}`}
// // //       className="group flex flex-col gap-1.5 rounded-xl border border-slate-100 bg-white p-3.5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#155EEF]/30 hover:shadow-md"
// // //     >
// // //       <div
// // //         className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
// // //         style={{ backgroundColor: "rgba(21,94,239,0.08)", color: BRAND }}
// // //       >
// // //         <Icon size={15} strokeWidth={1.8} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-xs font-bold leading-snug" style={{ color: INK }}>
// // //         {service.name.replaceAll("â€“", "–")}
// // //       </h4>
// // //       <p className="line-clamp-2 text-[11px] leading-4" style={{ color: MUTED }}>
// // //         {service.description}
// // //       </p>
// // //     </Link>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* One category row: sidebar label + grid of its services             */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceRow = ({ group }) => {
// // //   const [showAllServices, setShowAllServices] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(servicesData.map((service) => [service.id, service]));

// // //   const services = group.ids.map((id) => serviceMap.get(id)).filter(Boolean);

// // //   return (
// // //     <section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       className="flex flex-col gap-3 border-b border-slate-100 py-4 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
// // //     >
// // //       <div
// // //         className={`flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 transition-colors duration-200 lg:w-48 lg:flex-col lg:items-start lg:justify-center ${
// // //           showAllServices ? "border-[#155EEF] bg-[#155EEF]/5" : "border-transparent hover:border-[#155EEF]/25 hover:bg-slate-50"
// // //         }`}
// // //       >
// // //         <div
// // //           className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
// // //           style={{ backgroundColor: "rgba(21,94,239,0.10)", color: BRAND }}
// // //         >
// // //           <Icon size={16} />
// // //         </div>

// // //         <div className="flex-1 lg:flex-none">
// // //           <h2 className="text-[13px] font-extrabold" style={{ color: INK }}>
// // //             {group.title}
// // //           </h2>

// // //           <button
// // //             type="button"
// // //             onClick={() => setShowAllServices(!showAllServices)}
// // //             className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold transition"
// // //             style={{ color: BRAND }}
// // //           >
// // //             {showAllServices ? "View Less" : "View All"}
// // //             {showAllServices ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
// // //         {services.length ? (
// // //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //             <ServiceItem key={service.id} service={service} index={index} />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full flex h-20 items-center justify-center text-xs" style={{ color: MUTED }}>
// // //             No services available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Small floating info card used inside the hero illustration          */
// // // /* ------------------------------------------------------------------ */
// // // const FloatCard = ({ className, children }) => (
// // //   <div className={`absolute rounded-xl border border-slate-100 bg-white p-2.5 shadow-[0_12px_30px_rgba(15,32,79,0.12)] ${className}`}>
// // //     {children}
// // //   </div>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Services list / landing page                                        */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceList = () => (
// // //   <main id="top" className="overflow-hidden bg-[#fbfcff] pb-6 font-sans" style={{ color: INK }}>
// // //     {/* ---------------------------------------------------------------- HERO */}
// // //     <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f5f8ff] to-white">
// // //       <div className="pointer-events-none absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-[#155EEF]/10 blur-3xl" />
// // //       <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 md:grid-cols-2 lg:px-8 lg:pb-16 lg:pt-20">
// // //         <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //           <h1 className="max-w-xl text-[2rem] font-black leading-[1.12] tracking-tight sm:text-[2.5rem]" style={{ color: INK }}>
// // //             Comprehensive{" "}
// // //             <span style={{ color: BRAND }}>Payment Solutions</span> for Your Business
// // //           </h1>
// // //           <p className="mt-4 max-w-lg text-[13px] leading-6 sm:text-sm" style={{ color: MUTED }}>
// // //             Accelerate payments, verification, onboarding, and expense management to
// // //             optimise your operations with our complete financial ecosystem — ensuring
// // //             uninterrupted business growth.
// // //           </p>

// // //           <div className="mt-6 flex flex-wrap gap-2.5">
// // //             <Link
// // //               to="/contact"
// // //               className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
// // //               style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(21,94,239,0.30)" }}
// // //             >
// // //               Get Started <ArrowRight size={12} />
// // //             </Link>
// // //             <Link
// // //               to="/contact"
// // //               className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
// // //               style={{ borderColor: BRAND, color: BRAND }}
// // //             >
// // //               Contact Sales
// // //             </Link>
// // //           </div>

// // //           <div className="mt-7 flex items-center gap-3">
// // //             <div className="flex -space-x-2.5">
// // //               {trustAvatars.map((avatar) => (
// // //                 <span
// // //                   key={avatar.initial}
// // //                   style={{ backgroundColor: avatar.color }}
// // //                   className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
// // //                 >
// // //                   {avatar.initial}
// // //                 </span>
// // //               ))}
// // //             </div>
// // //             <p className="text-[11.5px] leading-4" style={{ color: MUTED }}>
// // //               Trusted by <b style={{ color: BRAND }}>10,000+ businesses</b>
// // //               <br />
// // //               across India
// // //             </p>
// // //           </div>
// // //         </motion.div>

// // //         {/* Illustration — floating verification / transaction cards */}
// // //         <motion.div
// // //           initial={{ opacity: 0, scale: 0.94 }}
// // //           animate={{ opacity: 1, scale: 1 }}
// // //           transition={{ duration: 0.55 }}
// // //           className="relative mx-auto hidden h-80 w-full max-w-sm md:block"
// // //         >
// // //           <div className="absolute inset-x-6 bottom-2 h-8 rounded-[50%] bg-[#155EEF]/20 blur-md" />

// // //           <FloatCard className="left-0 top-2 w-40">
// // //             <p className="text-[9px] font-bold" style={{ color: INK }}>Identity Verification</p>
// // //             <div className="mt-1.5 space-y-1">
// // //               {["Identity Verified", "Vehicle Verified", "Address Verified"].map((label) => (
// // //                 <p key={label} className="flex items-center gap-1 text-[8px]" style={{ color: MUTED }}>
// // //                   <CheckCircle2 size={9} className="text-emerald-500" /> {label}
// // //                 </p>
// // //               ))}
// // //             </div>
// // //           </FloatCard>

// // //           <FloatCard className="right-0 top-0 w-32 bg-[#0B1220] text-white">
// // //             <p className="text-[9px] font-semibold text-white/70">Shipping Bill</p>
// // //             <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-emerald-400">
// // //               <BadgeCheck size={10} /> Paid
// // //             </p>
// // //             <p className="text-[13px] font-black">₹2,45,413</p>
// // //           </FloatCard>

// // //           <FloatCard className="left-8 top-36 w-36">
// // //             <p className="text-[9px] font-bold" style={{ color: INK }}>Pollution Check</p>
// // //             <div className="mt-1.5 flex items-center justify-between text-[8px]" style={{ color: MUTED }}>
// // //               <span>Status</span>
// // //               <span className="font-bold text-emerald-500">Active</span>
// // //             </div>
// // //             <div className="mt-1 flex items-center justify-between text-[8px]" style={{ color: MUTED }}>
// // //               <span>Expiry</span>
// // //               <span className="font-semibold" style={{ color: INK }}>20 Oct '24</span>
// // //             </div>
// // //           </FloatCard>

// // //           <FloatCard className="bottom-2 right-2 w-36" style={undefined}>
// // //             <p className="text-[9px] font-bold" style={{ color: INK }}>Receipts</p>
// // //             <div className="mt-1.5 space-y-1 text-[8px]" style={{ color: MUTED }}>
// // //               <p className="flex justify-between"><span>UPI Payment</span><b style={{ color: INK }}>₹2,450</b></p>
// // //               <p className="flex justify-between"><span>Card Payment</span><b style={{ color: INK }}>₹650</b></p>
// // //             </div>
// // //           </FloatCard>

// // //           <div
// // //             className="absolute bottom-16 left-0 rounded-xl p-2.5 text-white shadow-lg"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             <LockKeyhole size={16} />
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>

// // //     <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
// // //       {/* ------------------------------------------------------------ WHY CHOOSE US */}
// // //       <div className="mb-4">
// // //         <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //           Why Choose Us
// // //         </p>
// // //         <div className="mt-1.5 flex items-center justify-between">
// // //           <h2 className="text-lg font-black sm:text-xl" style={{ color: INK }}>
// // //             Explore Our Service Categories
// // //           </h2>
// // //           <a href="#payment-solutions" className="hidden text-[11px] font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: BRAND }}>
// // //             Explore All Services <ArrowRight size={10} />
// // //           </a>
// // //         </div>
// // //       </div>

// // //       <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
// // //         {groupDefinitions.map((group) => (
// // //           <CategoryCard key={group.title} title={group.title} description={group.description} Icon={group.icon} />
// // //         ))}
// // //       </div>

// // //       {/* ------------------------------------------------------------ SERVICE ROWS */}
// // //       <div className="mt-6">
// // //         <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //           Unified Experience
// // //         </p>
// // //         <h2 className="mt-1.5 text-lg font-black sm:text-xl" style={{ color: INK }}>
// // //           Every Service, <span style={{ color: BRAND }}>At Your Fingertips</span>
// // //         </h2>
// // //       </div>

// // //       <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
// // //         {groupDefinitions.map((group) => (
// // //           <ServiceRow key={group.title} group={group} />
// // //         ))}
// // //       </div>

// // //       {/* ------------------------------------------------------------ STATS BAR */}
// // //       <section className="mt-6 grid overflow-hidden rounded-2xl text-white sm:grid-cols-4" style={{ backgroundColor: INK }}>
// // //         {[
// // //           [UsersRound, "10,000+", "Active Merchants"],
// // //           [WalletCards, "₹500 Cr+", "Monthly Transactions"],
// // //           [ShieldCheck, "99.99%", "System Uptime"],
// // //           [Headphones, "24×7", "Customer Support"],
// // //         ].map(([Icon, value, label]) => (
// // //           <div key={label} className="flex items-center justify-center gap-2.5 border-white/10 p-4 sm:border-r last:border-r-0">
// // //             <span className="rounded-full p-2" style={{ backgroundColor: "rgba(21,94,239,0.18)", color: "#7DA6FF" }}>
// // //               <Icon size={14} />
// // //             </span>
// // //             <span>
// // //               <b className="block text-sm">{value}</b>
// // //               <small className="text-[9px] text-slate-300">{label}</small>
// // //             </span>
// // //           </div>
// // //         ))}
// // //       </section>

// // //       {/* ------------------------------------------------------------ CTA */}
// // //       <section
// // //         className="relative mt-6 overflow-hidden rounded-2xl px-5 py-8 text-center text-white sm:px-8"
// // //         style={{ backgroundColor: INK }}
// // //       >
// // //         <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
// // //         <div
// // //           className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
// // //           style={{ backgroundColor: "rgba(21,94,239,0.18)", color: "#7DA6FF" }}
// // //         >
// // //           <Rocket size={20} />
// // //         </div>
// // //         <h2 className="text-xl font-black sm:text-2xl">Ready to Transform Your Business?</h2>
// // //         <p className="mx-auto mt-2 max-w-md text-[12px] text-white/70 sm:text-[13px]">
// // //           Join thousands of businesses already growing with our complete financial ecosystem.
// // //         </p>
// // //         <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
// // //           <Link
// // //             to="/contact"
// // //             className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             Get Started <ArrowRight size={11} />
// // //           </Link>
// // //           <Link
// // //             to="/contact"
// // //             className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
// // //           >
// // //             Contact Sales
// // //           </Link>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   </main>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Service detail page (unchanged logic, retouched palette)            */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceDetail = ({ service, category }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const categoryLabel = category || "Our Services";

// // //   const nameWords = service.name.trim().split(" ");
// // //   const lastWord = nameWords.pop();
// // //   const restName = nameWords.join(" ");

// // //   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // //   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // //   return (
// // //     <div className="bg-white font-sans" style={{ color: INK }}>
// // //       {/* Hero */}
// // //       <section className="border-b border-slate-100 bg-gradient-to-b from-[#f5f8ff] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
// // //         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
// // //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //             <motion.span
// // //               variants={fadeInUp}
// // //               className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
// // //               style={{ backgroundColor: "rgba(21,94,239,0.10)", color: BRAND }}
// // //             >
// // //               <FileText size={10} /> {categoryLabel}
// // //             </motion.span>

// // //             <motion.h1
// // //               variants={fadeInUp}
// // //               className="mt-3 text-[1.7rem] font-black leading-[1.1] sm:text-3xl md:text-[1.95rem]"
// // //               style={{ color: INK }}
// // //             >
// // //               {restName ? `${restName} ` : ""}
// // //               <span style={{ color: BRAND }}>{lastWord}</span>
// // //             </motion.h1>

// // //             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8" style={{ backgroundColor: BRAND }} />

// // //             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5" style={{ color: MUTED }}>
// // //               {service.longDescription || service.description}
// // //             </motion.p>

// // //             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
// // //               <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(21,94,239,0.10)", color: BRAND }}>
// // //                 <UsersRound size={10} />
// // //               </span>
// // //               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
// // //             </motion.div>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative mx-auto w-full max-w-sm"
// // //           >
// // //             <div className="relative overflow-hidden rounded-xl shadow-xl">
// // //               <motion.img
// // //                 whileHover={{ scale: 1.04 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 src={mainImg}
// // //                 alt={service.name}
// // //                 className="h-48 w-full object-cover sm:h-60"
// // //               />
// // //               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
// // //             </div>

// // //             {service.partner && (
// // //               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
// // //                 <p className="text-[8px] font-semibold" style={{ color: MUTED }}>In Partnership with</p>
// // //                 {service.partner.logo ? (
// // //                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
// // //                 ) : (
// // //                   <p className="text-xs font-black" style={{ color: INK }}>{service.partner.name}</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Solutions + Benefits */}
// // //       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
// // //         <div className="grid gap-6 md:grid-cols-3">
// // //           <div className="md:col-span-2">
// // //             <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
// // //             <h2 className="mt-2 text-base font-black sm:text-lg" style={{ color: INK }}>
// // //               Our {categoryLabel}
// // //             </h2>

// // //             {features.length ? (
// // //               <motion.div
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={staggerContainer}
// // //                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
// // //               >
// // //                 {features.map((text, index) => {
// // //                   const Icon = serviceIcons[index % serviceIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       variants={fadeInUp}
// // //                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
// // //                       style={{ borderColor: undefined }}
// // //                     >
// // //                       <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(21,94,239,0.10)", color: BRAND }}>
// // //                         <Icon size={12} strokeWidth={1.7} />
// // //                       </div>
// // //                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug" style={{ color: "#1e293b" }}>{text}</p>
// // //                       <div className="mt-2 flex justify-end">
// // //                         <span
// // //                           className="inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
// // //                           style={{ borderColor: "rgba(21,94,239,0.35)", color: BRAND }}
// // //                         >
// // //                           <ArrowRight size={9} />
// // //                         </span>
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </motion.div>
// // //             ) : (
// // //               <p className="mt-4 text-[13px]" style={{ color: MUTED }}>More details coming soon.</p>
// // //             )}
// // //           </div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative flex flex-col overflow-hidden rounded-xl p-4 text-white shadow-lg"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
// // //               {Array.from({ length: 24 }).map((_, index) => (
// // //                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
// // //               ))}
// // //             </div>

// // //             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
// // //             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />

// // //             <div className="mt-3.5 space-y-3">
// // //               {highlights.length ? (
// // //                 highlights.map((benefit, index) => {
// // //                   const Icon = benefitIcons[index % benefitIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       initial={{ opacity: 0, x: -15 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ delay: index * 0.05 }}
// // //                     >
// // //                       <div className="flex items-start gap-2">
// // //                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: BRAND }}>
// // //                           <Icon size={11} />
// // //                         </span>
// // //                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
// // //                       </div>
// // //                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
// // //                     </motion.div>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:p-6"
// // //           style={{ backgroundColor: "#f5f8ff" }}
// // //         >
// // //           <div className="flex items-center gap-3 text-center sm:text-left">
// // //             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex" style={{ backgroundColor: "rgba(21,94,239,0.10)", color: BRAND }}>
// // //               <Landmark size={20} />
// // //             </span>
// // //             <div>
// // //               <h3 className="text-sm font-black sm:text-base" style={{ color: INK }}>Ready to grow your business?</h3>
// // //               <p className="mt-1 max-w-sm text-[13px]" style={{ color: MUTED }}>
// // //                 Explore our services and find the right financial solution that fits your needs.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <Link
// // //             to="/services"
// // //             className="inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold text-white shadow-md transition hover:opacity-90"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             Back to Services <ArrowRight size={10} />
// // //           </Link>
// // //         </motion.div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="flex min-h-screen items-center justify-center bg-white text-black">
// // //         <p className="border-b-2 text-sm font-semibold" style={{ borderColor: BRAND }}>Service not found</p>
// // //       </div>
// // //     );
// // //   }

// // //   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

// // //   return <ServiceDetail service={service} category={category} />;
// // // };

// // // export default Services;












// // // import React, { useRef, useState } from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Building2,
// // //   Code2,
// // //   CreditCard,
// // //   FileText,
// // //   Headphones,
// // //   Landmark,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   UsersRound,
// // //   WalletCards,
// // //   ChevronDown,
// // //   ChevronUp,
// // //   ClipboardList,
// // //   CheckCircle2,
// // //   BadgeCheck,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // /* ------------------------------------------------------------------ */
// // // /* Design tokens (kept local so nothing outside this file is touched) */
// // // /* ------------------------------------------------------------------ */
// // // const BRAND = "#14B8A6"; // primary teal accent
// // // const BRAND_RGB = "20,184,166"; // rgba helper for BRAND
// // // const INK = "#0B1220"; // near-black heading colour
// // // const MUTED = "#5B6B84"; // body copy grey

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// // // const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// // // const trustAvatars = [
// // //   { initial: "A", color: "#f97316" },
// // //   { initial: "R", color: "#0ea5e9" },
// // //   { initial: "S", color: "#22c55e" },
// // // ];

// // // /* ------------------------------------------------------------------ */
// // // /* Shared scroll-reveal animation variants                            */
// // // /* ------------------------------------------------------------------ */
// // // const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // // /* ------------------------------------------------------------------ */
// // // /* Aurora Glow Background — soft, slowly-drifting teal blobs          */
// // // /* ------------------------------------------------------------------ */
// // // const AuroraGlowBackground = () => (
// // //   <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
// // //     <motion.div
// // //       className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
// // //       style={{ backgroundColor: "rgba(20,184,166,0.28)" }}
// // //       animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
// // //       transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
// // //     />
// // //     <motion.div
// // //       className="absolute -right-24 top-4 h-[22rem] w-[22rem] rounded-full blur-3xl"
// // //       style={{ backgroundColor: "rgba(45,212,191,0.22)" }}
// // //       animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
// // //       transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
// // //     />
// // //     <motion.div
// // //       className="absolute left-1/3 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full blur-3xl"
// // //       style={{ backgroundColor: "rgba(14,165,233,0.14)" }}
// // //       animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
// // //       transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
// // //     />
// // //   </div>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Mouse parallax hook — tracks pointer position within a container   */
// // // /* ------------------------------------------------------------------ */
// // // const useMouseParallax = () => {
// // //   const ref = useRef(null);
// // //   const [pos, setPos] = useState({ x: 0, y: 0 });

// // //   const handleMouseMove = (event) => {
// // //     const bounds = ref.current?.getBoundingClientRect();
// // //     if (!bounds) return;
// // //     setPos({
// // //       x: (event.clientX - bounds.left) / bounds.width - 0.5,
// // //       y: (event.clientY - bounds.top) / bounds.height - 0.5,
// // //     });
// // //   };

// // //   const handleMouseLeave = () => setPos({ x: 0, y: 0 });

// // //   return { ref, pos, handleMouseMove, handleMouseLeave };
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Category card — flat icon tile, bold title, quiet description      */
// // // /* ------------------------------------------------------------------ */
// // // const CategoryCard = ({ title, description, Icon }) => (
// // //   <a
// // //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //     className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/40 hover:shadow-[0_10px_30px_rgba(20,184,166,0.14)]"
// // //   >
// // //     <div
// // //       className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
// // //       style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
// // //     >
// // //       <Icon size={19} strokeWidth={1.8} />
// // //     </div>

// // //     <h3 className="text-[15px] font-black tracking-[-0.02em] leading-tight" style={{ color: INK }}>
// // //       {title}
// // //     </h3>

// // //     <p className="mt-1.5 flex-1 text-[12px] leading-5text-[12px] leading-5 leading-5" style={{ color: MUTED }}>
// // //       {description}
// // //     </p>

// // //     <span
// // //       className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold opacity-0 transition-opacity duration-200 group-hover:opacity-100"
// // //       style={{ color: BRAND }}
// // //     >
// // //       Explore <ArrowRight size={11} />
// // //     </span>
// // //   </a>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Individual service tile inside a category row                      */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link
// // //       to={`/services/${service.id}`}
// // //       className="group flex flex-col gap-1.5 rounded-xl border border-slate-100 bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#14B8A6]/30 hover:shadow-md"
// // //     >
// // //       <div
// // //         className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
// // //         style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
// // //       >
// // //         <Icon size={15} strokeWidth={1.8} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-[14px] font-black tracking-tight leading-snug" style={{ color: INK }}>
// // //         {service.name.replaceAll("â€“", "–")}
// // //       </h4>
// // //       <p className="line-clamp-2 text-[12px] leading-4" style={{ color: MUTED }}>
// // //         {service.description}
// // //       </p>
// // //     </Link>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* One category row: sidebar label + grid of its services             */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceRow = ({ group }) => {
// // //   const [showAllServices, setShowAllServices] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(servicesData.map((service) => [service.id, service]));

// // //   const services = group.ids.map((id) => serviceMap.get(id)).filter(Boolean);

// // //   return (
// // //     <motion.section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.2 }}
// // //       variants={fadeInUp}
// // //       className="flex flex-col gap-3 border-b border-slate-100 py-4 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
// // //     >
// // //       <div
// // //         className={`flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 transition-colors duration-200 lg:w-48 lg:flex-col lg:items-start lg:justify-center ${
// // //           showAllServices ? "border-[#14B8A6] bg-[#14B8A6]/5" : "border-transparent hover:border-[#14B8A6]/25 hover:bg-slate-50"
// // //         }`}
// // //       >
// // //         <div
// // //           className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
// // //           style={{ backgroundColor: "rgba(20,184,166,0.12)", color: BRAND }}
// // //         >
// // //           <Icon size={16} />
// // //         </div>

// // //         <div className="flex-1 lg:flex-none">
// // //           <h2 className="text-[15px] font-black tracking-tight" style={{ color: INK }}>
// // //             {group.title}
// // //           </h2>

// // //           <button
// // //             type="button"
// // //             onClick={() => setShowAllServices(!showAllServices)}
// // //             className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold transition"
// // //             style={{ color: BRAND }}
// // //           >
// // //             {showAllServices ? "View Less" : "View All"}
// // //             {showAllServices ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
// // //         {services.length ? (
// // //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //             <ServiceItem key={service.id} service={service} index={index} />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full flex h-20 items-center justify-center text-xs" style={{ color: MUTED }}>
// // //             No services available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </motion.section>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Small floating info card used inside the hero illustration          */
// // // /* Accepts a mouse-parallax offset and a depth multiplier              */
// // // /* ------------------------------------------------------------------ */
// // // const FloatCard = ({ className, children, pos, depth = 12 }) => (
// // //   <div
// // //     className={`absolute rounded-xl border border-slate-100 bg-white p-2.5 shadow-[0_12px_30px_rgba(15,32,79,0.12)] transition-transform duration-300 ease-out will-change-transform ${className}`}
// // //     style={{
// // //       transform: pos ? `translate3d(${pos.x * depth}px, ${pos.y * depth}px, 0)` : undefined,
// // //     }}
// // //   >
// // //     {children}
// // //   </div>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Services list / landing page                                        */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceList = () => {
// // //   const { ref: parallaxRef, pos, handleMouseMove, handleMouseLeave } = useMouseParallax();

// // //   return (
// // //     <main id="top" className="overflow-hidden bg-[#fbfcff] pb-6 font-sans" style={{ color: INK }}>
// // //       {/* ---------------------------------------------------------------- HERO */}
// // //       <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white">
// // //         <AuroraGlowBackground />
// // //         <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 md:grid-cols-2 lg:px-8 lg:pb-16 lg:pt-20">
// // //           <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //             <h1 className="max-w-xl text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-black tracking-[-0.04em] leading-[1.02]" ></h1><h1 className="max-w-xl text-[2rem] font-black leading-[1.12] tracking-tight sm:text-[2.5rem]" style={{ color: INK }}>
// // //               Comprehensive{" "}
// // //               <span style={{ color: BRAND }}>Payment Solutions</span> for Your Business
// // //             </h1>
// // //             <p className="mt-4 max-w-lg text-[13px] leading-6 sm:text-sm" style={{ color: MUTED }}>
// // //               Accelerate payments, verification, onboarding, and expense management to
// // //               optimise your operations with our complete financial ecosystem — ensuring
// // //               uninterrupted business growth.
// // //             </p>

// // //             <div className="mt-6 flex flex-wrap gap-2.5">
// // //               <Link
// // //                 to="/contact"
// // //                 className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
// // //                 style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(20,184,166,0.30)" }}
// // //               >
// // //                 Get Started <ArrowRight size={12} />
// // //               </Link>
// // //               <Link
// // //                 to="/contact"
// // //                 className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
// // //                 style={{ borderColor: BRAND, color: BRAND }}
// // //               >
// // //                 Contact Sales
// // //               </Link>
// // //             </div>

// // //             <div className="mt-7 flex items-center gap-3">
// // //               <div className="flex -space-x-2.5">
// // //                 {trustAvatars.map((avatar) => (
// // //                   <span
// // //                     key={avatar.initial}
// // //                     style={{ backgroundColor: avatar.color }}
// // //                     className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow"
// // //                   >
// // //                     {avatar.initial}
// // //                   </span>
// // //                 ))}
// // //               </div>
// // //               <p className="text-[12px] leading-3" style={{ color: MUTED }}>
// // //                 Trusted by <b style={{ color: BRAND }}>10,000+ businesses</b>
// // //                 <br />
// // //                 across India
// // //               </p>
// // //             </div>
// // //           </motion.div>

// // //           {/* Illustration — floating verification / transaction cards, mouse parallax enabled */}
// // //           <motion.div
// // //             ref={parallaxRef}
// // //             onMouseMove={handleMouseMove}
// // //             onMouseLeave={handleMouseLeave}
// // //             initial={{ opacity: 0, scale: 0.94 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             transition={{ duration: 0.55 }}
// // //             className="relative mx-auto hidden h-80 w-full max-w-sm md:block"
// // //           >
// // //             <div className="absolute inset-x-6 bottom-2 h-8 rounded-[50%] bg-[#14B8A6]/20 blur-md" />

// // //             <FloatCard className="left-0 top-2 w-40" pos={pos} depth={10}>
// // //               <p className="text-[9px] font-bold" style={{ color: INK }}>Identity Verification</p>
// // //               <div className="mt-1.5 space-y-1">
// // //                 {["Identity Verified", "Vehicle Verified", "Address Verified"].map((label) => (
// // //                   <p key={label} className="flex items-center gap-1 text-[8px]" style={{ color: MUTED }}>
// // //                     <CheckCircle2 size={9} className="text-emerald-500" /> {label}
// // //                   </p>
// // //                 ))}
// // //               </div>
// // //             </FloatCard>

// // //             <FloatCard className="right-0 top-0 w-32 bg-[#0B1220] text-white" pos={pos} depth={18}>
// // //               <p className="text-[9px] font-semibold text-white/70">Shipping Bill</p>
// // //               <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-emerald-400">
// // //                 <BadgeCheck size={10} /> Paid
// // //               </p>
// // //               <p className="text-[13px] font-black">₹2,45,413</p>
// // //             </FloatCard>

// // //             <FloatCard className="left-8 top-36 w-36" pos={pos} depth={8}>
// // //               <p className="text-[9px] font-bold" style={{ color: INK }}>Pollution Check</p>
// // //               <div className="mt-1.5 flex items-center justify-between text-[8px]" style={{ color: MUTED }}>
// // //                 <span>Status</span>
// // //                 <span className="font-bold text-emerald-500">Active</span>
// // //               </div>
// // //               <div className="mt-1 flex items-center justify-between text-[8px]" style={{ color: MUTED }}>
// // //                 <span>Expiry</span>
// // //                 <span className="font-semibold" style={{ color: INK }}>20 Oct '24</span>
// // //               </div>
// // //             </FloatCard>

// // //             <FloatCard className="bottom-2 right-2 w-36" pos={pos} depth={14}>
// // //               <p className="text-[9px] font-bold" style={{ color: INK }}>Receipts</p>
// // //               <div className="mt-1.5 space-y-1 text-[8px]" style={{ color: MUTED }}>
// // //                 <p className="flex justify-between"><span>UPI Payment</span><b style={{ color: INK }}>₹2,450</b></p>
// // //                 <p className="flex justify-between"><span>Card Payment</span><b style={{ color: INK }}>₹650</b></p>
// // //               </div>
// // //             </FloatCard>

// // //             <div
// // //               className="absolute bottom-16 left-0 rounded-xl p-2.5 text-white shadow-lg transition-transform duration-300 ease-out will-change-transform"
// // //               style={{ backgroundColor: BRAND, transform: `translate3d(${pos.x * 22}px, ${pos.y * 22}px, 0)` }}
// // //             >
// // //               <LockKeyhole size={16} />
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
// // //         {/* ------------------------------------------------------------ WHY CHOOSE US */}
// // //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mb-4">
// // //           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //             Why Choose Us
// // //           </p>
// // //           <div className="mt-1.5 flex items-center justify-between">
// // //             <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
// // //               Explore Our Service Categories
// // //             </h2>
// // //             <a href="#payment-solutions" className="hidden text-[11px] font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: BRAND }}>
// // //               Explore All Services <ArrowRight size={10} />
// // //             </a>
// // //           </div>
// // //         </motion.div>

// // //         <motion.div
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.15 }}
// // //           variants={staggerContainer}
// // //           className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
// // //         >
// // //           {groupDefinitions.map((group) => (
// // //             <motion.div key={group.title} variants={fadeInUp}>
// // //               <CategoryCard title={group.title} description={group.description} Icon={group.icon} />
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* ------------------------------------------------------------ SERVICE ROWS */}
// // //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mt-6">
// // //           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //             Unified Experience
// // //           </p>
// // //           <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
// // //             Every Service, <span style={{ color: BRAND }}>At Your Fingertips</span>
// // //           </h2>
// // //         </motion.div>

// // //         <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-2">
// // //           {groupDefinitions.map((group) => (
// // //             <ServiceRow key={group.title} group={group} />
// // //           ))}
// // //         </div>

// // //         {/* ------------------------------------------------------------ STATS BAR */}
// // //         <motion.section
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.3 }}
// // //           variants={fadeInUp}
// // //           className="mt-6 grid overflow-hidden rounded-2xl text-white sm:grid-cols-4"
// // //           style={{ backgroundColor: INK }}
// // //         >
// // //           {[
// // //             [UsersRound, "10,000+", "Active Merchants"],
// // //             [WalletCards, "₹500 Cr+", "Monthly Transactions"],
// // //             [ShieldCheck, "99.99%", "System Uptime"],
// // //             [Headphones, "24×7", "Customer Support"],
// // //           ].map(([Icon, value, label]) => (
// // //             <div key={label} className="flex items-center justify-center gap-2.5 border-white/10 p-4 sm:border-r last:border-r-0">
// // //               <span className="rounded-full p-2" style={{ backgroundColor: "rgba(20,184,166,0.20)", color: "#5EEAD4" }}>
// // //                 <Icon size={14} />
// // //               </span>
// // //               <span>
// // //                 <b className="block text-sm">{value}</b>
// // //                 <small className="text-[9px] text-slate-300">{label}</small>
// // //               </span>
// // //             </div>
// // //           ))}
// // //         </motion.section>

// // //         {/* ------------------------------------------------------------ CTA */}
// // //         <motion.section
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.3 }}
// // //           variants={fadeInUp}
// // //           className="relative mt-6 overflow-hidden rounded-2xl px-5 py-8 text-center text-white sm:px-8"
// // //           style={{ backgroundColor: INK }}
// // //         >
// // //           <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
// // //           <div
// // //             className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
// // //             style={{ backgroundColor: "rgba(20,184,166,0.20)", color: "#5EEAD4" }}
// // //           >
// // //             <Rocket size={20} />
// // //           </div>
// // //           <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.03em] leading-tight">Ready to Transform Your Business?</h2>
// // //           <p className="mx-auto mt-2 max-w-md text-[12px] text-white/70 sm:text-[13px]">
// // //             Join thousands of businesses already growing with our complete financial ecosystem.
// // //           </p>
// // //           <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
// // //             <Link
// // //               to="/contact"
// // //               className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
// // //               style={{ backgroundColor: BRAND }}
// // //             >
// // //               Get Started <ArrowRight size={11} />
// // //             </Link>
// // //             <Link
// // //               to="/contact"
// // //               className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
// // //             >
// // //               Contact Sales
// // //             </Link>
// // //           </div>
// // //         </motion.section>
// // //       </div>
// // //     </main>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Service detail page (unchanged logic, retouched palette)            */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceDetail = ({ service, category }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const categoryLabel = category || "Our Services";

// // //   const nameWords = service.name.trim().split(" ");
// // //   const lastWord = nameWords.pop();
// // //   const restName = nameWords.join(" ");

// // //   return (
// // //     <div className="bg-white font-sans" style={{ color: INK }}>
// // //       {/* Hero */}
// // //       <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
// // //         <AuroraGlowBackground />
// // //         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
// // //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //             <motion.span
// // //               variants={fadeInUp}
// // //               className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
// // //               style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
// // //             >
// // //               <FileText size={10} /> {categoryLabel}
// // //             </motion.span>

// // //             <motion.h1
// // //               variants={fadeInUp}
// // //               className="mt-3 text-[1.7rem] font-black leading-[1.1] sm:text-3xl md:text-[1.95rem]"
// // //               style={{ color: INK }}
// // //             >
// // //               {restName ? `${restName} ` : ""}
// // //               <span style={{ color: BRAND }}>{lastWord}</span>
// // //             </motion.h1>

// // //             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8" style={{ backgroundColor: BRAND }} />

// // //             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5" style={{ color: MUTED }}>
// // //               {service.longDescription || service.description}
// // //             </motion.p>

// // //             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
// // //               <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// // //                 <UsersRound size={10} />
// // //               </span>
// // //               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
// // //             </motion.div>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative mx-auto w-full max-w-sm"
// // //           >
// // //             <div className="relative overflow-hidden rounded-2xl shadow-xl">
// // //               <motion.img
// // //                 whileHover={{ scale: 1.04 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 src={mainImg}
// // //                 alt={service.name}
// // //                 className="h-48 w-full object-cover sm:h-60"
// // //               />
// // //               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
// // //             </div>

// // //             {service.partner && (
// // //               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
// // //                 <p className="text-[8px] font-semibold" style={{ color: MUTED }}>In Partnership with</p>
// // //                 {service.partner.logo ? (
// // //                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
// // //                 ) : (
// // //                   <p className="text-xs font-black" style={{ color: INK }}>{service.partner.name}</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Solutions + Benefits */}
// // //       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
// // //         <div className="grid gap-6 md:grid-cols-3">
// // //           <div className="md:col-span-2">
// // //             <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
// // //             <h2 className="mt-2 text-base font-black sm:text-lg" style={{ color: INK }}>
// // //               Our {categoryLabel}
// // //             </h2>

// // //             {features.length ? (
// // //               <motion.div
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={staggerContainer}
// // //                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
// // //               >
// // //                 {features.map((text, index) => {
// // //                   const Icon = serviceIcons[index % serviceIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       variants={fadeInUp}
// // //                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
// // //                       style={{ borderColor: undefined }}
// // //                     >
// // //                       <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// // //                         <Icon size={12} strokeWidth={1.7} />
// // //                       </div>
// // //                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug" style={{ color: "#1e293b" }}>{text}</p>
// // //                       <div className="mt-2 flex justify-end">
// // //                         <span
// // //                           className="inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
// // //                           style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// // //                         >
// // //                           <ArrowRight size={9} />
// // //                         </span>
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </motion.div>
// // //             ) : (
// // //               <p className="mt-4 text-[13px]" style={{ color: MUTED }}>More details coming soon.</p>
// // //             )}
// // //           </div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative flex flex-col overflow-hidden rounded-xl p-4 text-white shadow-lg"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
// // //               {Array.from({ length: 24 }).map((_, index) => (
// // //                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
// // //               ))}
// // //             </div>

// // //             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
// // //             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />

// // //             <div className="mt-3.5 space-y-3">
// // //               {highlights.length ? (
// // //                 highlights.map((benefit, index) => {
// // //                   const Icon = benefitIcons[index % benefitIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       initial={{ opacity: 0, x: -15 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ delay: index * 0.05 }}
// // //                     >
// // //                       <div className="flex items-start gap-2">
// // //                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: BRAND }}>
// // //                           <Icon size={11} />
// // //                         </span>
// // //                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
// // //                       </div>
// // //                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
// // //                     </motion.div>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:p-6"
// // //           style={{ backgroundColor: "#f2fbf9" }}
// // //         >
// // //           <div className="flex items-center gap-3 text-center sm:text-left">
// // //             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// // //               <Landmark size={20} />
// // //             </span>
// // //             <div>
// // //               <h3 className="text-xl font-black tracking-tight" style={{ color: INK }}>Ready to grow your business?</h3>
// // //               <p className="mt-1 max-w-sm text-[13px]" style={{ color: MUTED }}>
// // //                 Explore our services and find the right financial solution that fits your needs.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <Link
// // //             to="/services"
// // //             className="inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold text-white shadow-md transition hover:opacity-90"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             Back to Services <ArrowRight size={10} />
// // //           </Link>
// // //         </motion.div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="flex min-h-screen items-center justify-center bg-white text-black">
// // //         <p className="border-b-2 text-sm font-semibold" style={{ borderColor: BRAND }}>Service not found</p>
// // //       </div>
// // //     );
// // //   }

// // //   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

// // //   return <ServiceDetail service={service} category={category} />;
// // // };

// // // export default Services;







// // // import React, { useRef, useState } from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { motion } from "framer-motion";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Bell,
// // //   BadgeCheck,
// // //   BarChart3,
// // //   Building2,
// // //   CheckCircle2,
// // //   ChevronDown,
// // //   ChevronUp,
// // //   ClipboardList,
// // //   Code2,
// // //   CreditCard,
// // //   FileText,
// // //   Fingerprint,
// // //   Headphones,
// // //   Landmark,
// // //   LayoutDashboard,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   TrendingUp,
// // //   UsersRound,
// // //   WalletCards,
// // //   Zap,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // /* ------------------------------------------------------------------ */
// // // /* Design tokens (kept local so nothing outside this file is touched) */
// // // /* ------------------------------------------------------------------ */
// // // const BRAND = "#14B8A6"; // primary teal accent
// // // const BRAND_RGB = "20,184,166"; // rgba helper for BRAND
// // // const BRAND_SOFT = "rgba(20,184,166,0.10)";
// // // const INK = "#0B1220"; // near-black heading colour
// // // const MUTED = "#5B6B84"; // body copy grey

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// // // const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// // // /* ------------------------------------------------------------------ */
// // // /* Shared scroll-reveal animation variants                            */
// // // /* ------------------------------------------------------------------ */
// // // const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // // /* ------------------------------------------------------------------ */
// // // /* Aurora Glow Background — soft, slowly-drifting teal blobs          */
// // // /* NOTE: also used on the (untouched) service detail page — left as-is */
// // // /* ------------------------------------------------------------------ */
// // // const AuroraGlowBackground = () => (
// // //   <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
// // //     <motion.div
// // //       className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
// // //       style={{ backgroundColor: "rgba(20,184,166,0.28)" }}
// // //       animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
// // //       transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
// // //     />
// // //     <motion.div
// // //       className="absolute -right-24 top-4 h-[22rem] w-[22rem] rounded-full blur-3xl"
// // //       style={{ backgroundColor: "rgba(45,212,191,0.22)" }}
// // //       animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
// // //       transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
// // //     />
// // //     <motion.div
// // //       className="absolute left-1/3 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full blur-3xl"
// // //       style={{ backgroundColor: "rgba(14,165,233,0.14)" }}
// // //       animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
// // //       transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
// // //     />
// // //   </div>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Tiny inline sparkline used in the dark stats strip                 */
// // // /* ------------------------------------------------------------------ */
// // // const Sparkline = ({ points, color = "#5EEAD4" }) => {
// // //   const width = 64;
// // //   const height = 22;
// // //   const max = Math.max(...points);
// // //   const min = Math.min(...points);
// // //   const step = width / (points.length - 1);
// // //   const path = points
// // //     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min || 1)) * height).toFixed(1)}`)
// // //     .join(" ");
// // //   return (
// // //     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
// // //       <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Category card — icon tile, bold title, quiet description, cta dot  */
// // // /* ------------------------------------------------------------------ */
// // // const CategoryCard = ({ title, description, Icon }) => (
// // //   <a
// // //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //     className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/40 hover:shadow-[0_14px_34px_rgba(20,184,166,0.16)]"
// // //   >
// // //     <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //       <Icon size={18} strokeWidth={1.8} />
// // //     </div>

// // //     <h3 className="mt-3 text-[14px] font-black tracking-[-0.01em] leading-snug" style={{ color: INK }}>
// // //       {title}
// // //     </h3>

// // //     <p className="mt-1 flex-1 text-[11.5px] leading-5" style={{ color: MUTED }}>
// // //       {description}
// // //     </p>

// // //     <span
// // //       className="mt-3 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-transparent group-hover:bg-[#14B8A6] group-hover:text-white"
// // //       style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// // //     >
// // //       <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
// // //     </span>
// // //   </a>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Individual service tile inside a category row                      */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link
// // //       to={`/services/${service.id}`}
// // //       className="group flex flex-col gap-1.5 rounded-xl border border-slate-100 bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#14B8A6]/30 hover:shadow-md"
// // //     >
// // //       <div
// // //         className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
// // //         style={{ backgroundColor: BRAND_SOFT, color: BRAND }}
// // //       >
// // //         <Icon size={15} strokeWidth={1.8} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-[14px] font-black tracking-tight leading-snug" style={{ color: INK }}>
// // //         {service.name.replaceAll("â€“", "–")}
// // //       </h4>
// // //       <p className="line-clamp-2 text-[12px] leading-4" style={{ color: MUTED }}>
// // //         {service.description}
// // //       </p>
// // //     </Link>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* One category row: sidebar label + grid of its services             */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceRow = ({ group }) => {
// // //   const [showAllServices, setShowAllServices] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(servicesData.map((service) => [service.id, service]));
// // //   const services = group.ids.map((id) => serviceMap.get(id)).filter(Boolean);

// // //   return (
// // //     <motion.section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.2 }}
// // //       variants={fadeInUp}
// // //       className="flex flex-col gap-3 border-b border-slate-100 py-4 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
// // //     >
// // //       <div
// // //         className={`flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 transition-colors duration-200 lg:w-48 lg:flex-col lg:items-start lg:justify-center ${
// // //           showAllServices ? "border-[#14B8A6] bg-[#14B8A6]/5" : "border-transparent hover:border-[#14B8A6]/25 hover:bg-slate-50"
// // //         }`}
// // //       >
// // //         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(20,184,166,0.12)", color: BRAND }}>
// // //           <Icon size={16} />
// // //         </div>

// // //         <div className="flex-1 lg:flex-none">
// // //           <h2 className="text-[15px] font-black tracking-tight" style={{ color: INK }}>
// // //             {group.title}
// // //           </h2>

// // //           <button
// // //             type="button"
// // //             onClick={() => setShowAllServices(!showAllServices)}
// // //             className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold transition"
// // //             style={{ color: BRAND }}
// // //           >
// // //             {showAllServices ? "View Less" : "View All"}
// // //             {showAllServices ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
// // //         {services.length ? (
// // //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //             <ServiceItem key={service.id} service={service} index={index} />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full flex h-20 items-center justify-center text-xs" style={{ color: MUTED }}>
// // //             No services available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </motion.section>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Hero dashboard mock — merchant overview card, right of the hero    */
// // // /* ------------------------------------------------------------------ */
// // // const heroBars = [
// // //   { a: 55, b: 35 }, { a: 70, b: 50 }, { a: 45, b: 60 }, { a: 80, b: 55 }, { a: 60, b: 40 },
// // //   { a: 90, b: 65 }, { a: 50, b: 45 }, { a: 75, b: 50 }, { a: 65, b: 55 },
// // // ];

// // // const sidebarNavIcons = [LayoutDashboard, BarChart3, WalletCards, ClipboardList, FileText, UsersRound];

// // // const HeroDashboardMock = () => (
// // //   <motion.div
// // //     initial={{ opacity: 0, y: 26 }}
// // //     animate={{ opacity: 1, y: 0 }}
// // //     transition={{ duration: 0.6, delay: 0.15 }}
// // //     className="relative mx-auto w-full max-w-md"
// // //   >
// // //     <div className="flex overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
// // //       <div className="hidden w-14 shrink-0 flex-col items-center gap-4 py-4 sm:flex" style={{ backgroundColor: INK }}>
// // //         <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //           <Fingerprint size={14} />
// // //         </div>
// // //         <div className="mt-2 flex flex-col items-center gap-3">
// // //           {sidebarNavIcons.map((Icon, i) => (
// // //             <span
// // //               key={i}
// // //               className="flex h-7 w-7 items-center justify-center rounded-lg"
// // //               style={i === 0 ? { backgroundColor: BRAND, color: "#fff" } : { color: "rgba(255,255,255,0.4)" }}
// // //             >
// // //               <Icon size={13} />
// // //             </span>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div className="flex-1 p-4">
// // //         <div className="flex items-start justify-between">
// // //           <div>
// // //             <p className="text-[12px] font-black" style={{ color: INK }}>Hello, Abheepay Merchant 👋</p>
// // //             <p className="text-[9px]" style={{ color: MUTED }}>Here&apos;s what&apos;s happening today</p>
// // //           </div>
// // //           <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50" style={{ color: MUTED }}>
// // //             <Bell size={12} />
// // //           </span>
// // //         </div>

// // //         <div className="mt-3 grid grid-cols-3 gap-2">
// // //           {[
// // //             ["Total Revenue", "₹18.2 Cr", "23.5%"],
// // //             ["Transactions", "1,24,820", "18.7%"],
// // //             ["Success Rate", "99.99%", "0.6%"],
// // //           ].map(([label, value, delta]) => (
// // //             <div key={label} className="rounded-lg border border-slate-100 p-2">
// // //               <p className="text-[7.5px] font-semibold" style={{ color: MUTED }}>{label}</p>
// // //               <p className="mt-0.5 text-[11px] font-black" style={{ color: INK }}>{value}</p>
// // //               <p className="mt-0.5 text-[7.5px] font-bold text-emerald-500">↑ {delta}</p>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-[9px] font-bold" style={{ color: INK }}>Revenue Overview</p>
// // //             <div className="flex items-center gap-2 text-[7px]" style={{ color: MUTED }}>
// // //               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />This Month</span>
// // //               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-slate-300" />Last Month</span>
// // //             </div>
// // //           </div>
// // //           <div className="mt-2 flex h-14 items-end gap-1.5">
// // //             {heroBars.map((bar, i) => (
// // //               <div key={i} className="flex flex-1 items-end gap-[2px]">
// // //                 <div className="w-full rounded-sm" style={{ height: `${bar.a}%`, backgroundColor: BRAND }} />
// // //                 <div className="w-full rounded-sm bg-slate-200" style={{ height: `${bar.b}%` }} />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-[9px] font-bold" style={{ color: INK }}>Recent Settlements</p>
// // //             <span className="text-[8px] font-bold" style={{ color: BRAND }}>View All</span>
// // //           </div>
// // //           <div className="mt-1.5 space-y-1.5">
// // //             {[["₹1,24,500", "Settled · Today, 10:30 AM"], ["₹87,500", "Settled · Today, 09:15 AM"]].map(([amt, when]) => (
// // //               <div key={amt} className="flex items-center justify-between text-[8px]">
// // //                 <span className="flex items-center gap-1.5" style={{ color: INK }}>
// // //                   <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //                     <Banknote size={10} />
// // //                   </span>
// // //                   <b>{amt}</b>
// // //                 </span>
// // //                 <span style={{ color: MUTED }}>{when}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>

// // //     <div
// // //       className="absolute -bottom-4 -left-4 hidden items-center gap-1.5 rounded-xl px-3 py-2 text-white shadow-lg sm:flex"
// // //       style={{ backgroundColor: INK }}
// // //     >
// // //       <LockKeyhole size={12} />
// // //       <span className="text-[9px] font-bold">Bank-grade security</span>
// // //     </div>
// // //   </motion.div>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Trust strip — generic wordmarks (no real third-party logos)        */
// // // /* ------------------------------------------------------------------ */
// // // const trustMarks = ["Vertex Retail", "Nimbus Mart", "Orbit Foods", "Northstar Traders", "Lumen Café", "Rapidcart"];

// // // /* ------------------------------------------------------------------ */
// // // /* Dark stat strip with sparklines                                    */
// // // /* ------------------------------------------------------------------ */
// // // const statHighlights = [
// // //   { Icon: Building2, value: "10,000+", label: "Active Merchants", trend: "24% this year", points: [4, 6, 5, 8, 7, 10, 9, 12] },
// // //   { Icon: WalletCards, value: "₹500 Cr+", label: "Monthly Volume", trend: "18% vs last month", points: [5, 5, 7, 6, 9, 8, 11, 12] },
// // //   { Icon: ShieldCheck, value: "99.99%", label: "System Uptime", trend: "0.5% this month", points: [9, 9, 9, 10, 9, 10, 10, 10] },
// // //   { Icon: Headphones, value: "24×7", label: "Customer Support", trend: "Always here for you", points: [6, 7, 6, 8, 7, 9, 8, 9] },
// // // ];

// // // /* ------------------------------------------------------------------ */
// // // /* Live transactions panel data                                       */
// // // /* ------------------------------------------------------------------ */
// // // const liveTransactions = [
// // //   { method: "UPI", amount: "₹5,200", from: "Rahul Kumar", time: "2 sec ago" },
// // //   { method: "VISA", amount: "₹12,850", from: "Amazon Pay", time: "5 sec ago" },
// // //   { method: "AEPS", amount: "₹2,400", from: "Customer", time: "8 sec ago" },
// // //   { method: "UPI", amount: "₹8,950", from: "PhonePe", time: "12 sec ago" },
// // //   { method: "MC", amount: "₹1,650", from: "Credit Card", time: "15 sec ago" },
// // // ];

// // // const methodStyles = {
// // //   UPI: { bg: BRAND_SOFT, color: BRAND },
// // //   VISA: { bg: "rgba(11,18,32,0.08)", color: INK },
// // //   AEPS: { bg: "rgba(20,184,166,0.16)", color: "#0F9488" },
// // //   MC: { bg: "rgba(249,115,22,0.12)", color: "#EA580C" },
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Platform feature list                                              */
// // // /* ------------------------------------------------------------------ */
// // // const platformFeatures = [
// // //   { Icon: Zap, title: "Easy Integration", desc: "Quick setup with developer-friendly APIs" },
// // //   { Icon: BarChart3, title: "Real-time Analytics", desc: "Track performance with advanced insights" },
// // //   { Icon: ShieldCheck, title: "Secure & Compliant", desc: "Bank-grade security with RBI compliance" },
// // //   { Icon: TrendingUp, title: "Scalable Infrastructure", desc: "Built to handle billions of transactions" },
// // // ];

// // // /* ------------------------------------------------------------------ */
// // // /* Floating "Total Collection" mock beside the feature list           */
// // // /* ------------------------------------------------------------------ */
// // // const collectionBars = [30, 55, 40, 70, 50, 85, 60, 95, 65];

// // // const TotalCollectionMock = () => (
// // //   <div className="relative mx-auto hidden w-full max-w-[15rem] lg:block">
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 24, rotate: -3 }}
// // //       whileInView={{ opacity: 1, y: 0, rotate: -3 }}
// // //       viewport={{ once: true }}
// // //       transition={{ duration: 0.5 }}
// // //       className="rounded-2xl p-4 text-white shadow-xl"
// // //       style={{ backgroundColor: BRAND }}
// // //     >
// // //       <p className="text-[10px] font-semibold text-white/80">Total Collection</p>
// // //       <p className="mt-1 flex items-center gap-1 text-xl font-black">
// // //         ₹18,20,450 <span className="text-[10px] font-bold text-white/80">↑ 23.5%</span>
// // //       </p>
// // //       <div className="mt-3 flex h-14 items-end gap-1">
// // //         {collectionBars.map((h, i) => (
// // //           <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />
// // //         ))}
// // //       </div>
// // //       <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2 text-[10px]">
// // //         <span>
// // //           <b className="block text-[12px]">1,24,820</b>
// // //           <span className="text-white/70">Transactions</span>
// // //         </span>
// // //         <span className="text-right">
// // //           <b className="block text-[12px]">99.99%</b>
// // //           <span className="text-white/70">Success Rate</span>
// // //         </span>
// // //       </div>
// // //     </motion.div>

// // //     <div className="absolute -right-6 top-6 flex flex-col gap-2">
// // //       {["UPI", "VISA", "RuPay"].map((label, i) => (
// // //         <motion.span
// // //           key={label}
// // //           initial={{ opacity: 0, x: 12 }}
// // //           whileInView={{ opacity: 1, x: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: 0.15 + i * 0.08 }}
// // //           className="rounded-lg border border-slate-100 bg-white px-2.5 py-1.5 text-[9px] font-black shadow-md"
// // //           style={{ color: INK }}
// // //         >
// // //           {label}
// // //         </motion.span>
// // //       ))}
// // //     </div>
// // //   </div>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Business overview mock for the closing CTA                         */
// // // /* ------------------------------------------------------------------ */
// // // const revenueTrend = [10, 22, 16, 30, 24, 38, 32, 46, 40, 55, 48, 62];
// // // const paymentModes = [
// // //   { label: "UPI", value: 45, color: "#5EEAD4" },
// // //   { label: "Cards", value: 30, color: BRAND },
// // //   { label: "Wallets", value: 15, color: "#0F9488" },
// // //   { label: "Net Banking", value: 10, color: "#134E4A" },
// // // ];

// // // const RevenueTrendLine = () => {
// // //   const width = 220;
// // //   const height = 60;
// // //   const max = Math.max(...revenueTrend);
// // //   const min = Math.min(...revenueTrend);
// // //   const step = width / (revenueTrend.length - 1);
// // //   const path = revenueTrend
// // //     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min)) * height).toFixed(1)}`)
// // //     .join(" ");
// // //   return (
// // //     <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
// // //       <path d={path} fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );
// // // };

// // // const PaymentModesDonut = () => {
// // //   let cumulative = 0;
// // //   const stops = paymentModes
// // //     .map((mode) => {
// // //       const start = cumulative;
// // //       cumulative += mode.value;
// // //       return `${mode.color} ${start}% ${cumulative}%`;
// // //     })
// // //     .join(", ");
// // //   return (
// // //     <div className="flex items-center gap-3">
// // //       <div className="h-16 w-16 shrink-0 rounded-full" style={{ background: `conic-gradient(${stops})` }}>
// // //         <div className="m-[6px] flex h-[calc(100%-12px)] w-[calc(100%-12px)] items-center justify-center rounded-full" style={{ backgroundColor: INK }} />
// // //       </div>
// // //       <div className="space-y-1">
// // //         {paymentModes.map((mode) => (
// // //           <div key={mode.label} className="flex items-center gap-1.5 text-[9px] text-white/70">
// // //             <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: mode.color }} />
// // //             {mode.label} <span className="font-bold text-white">{mode.value}%</span>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Services list / landing page                                        */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceList = () => {
// // //   return (
// // //     <main id="top" className="overflow-hidden bg-[#fbfcff] pb-6 font-sans" style={{ color: INK }}>
// // //       {/* ---------------------------------------------------------------- HERO */}
// // //       <section className="relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white">
// // //         <AuroraGlowBackground />
// // //         <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 md:grid-cols-2 lg:px-8 lg:pb-16 lg:pt-20">
// // //           <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
// // //             <span
// // //               className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold"
// // //               style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// // //             >
// // //               <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} /> India&apos;s Trusted Payment Partner
// // //             </span>

// // //             <h1 className="mt-4 max-w-lg text-[2.1rem] font-black leading-[1.08] tracking-[-0.03em] sm:text-[2.6rem] lg:text-[2.9rem]" style={{ color: INK }}>
// // //               Powering India&apos;s
// // //               <br />
// // //               <span style={{ color: BRAND }}>Digital Payment</span>
// // //               <br />
// // //               Infrastructure
// // //             </h1>

// // //             <p className="mt-4 max-w-md text-[13px] leading-6 sm:text-sm" style={{ color: MUTED }}>
// // //               Secure, scalable and reliable payment solutions that help businesses collect,
// // //               manage and grow with confidence.
// // //             </p>

// // //             <div className="mt-6 flex flex-wrap gap-2.5">
// // //               <Link
// // //                 to="/contact"
// // //                 className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
// // //                 style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(20,184,166,0.30)" }}
// // //               >
// // //                 Get Started <ArrowRight size={12} />
// // //               </Link>
// // //               <Link
// // //                 to="/contact"
// // //                 className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
// // //                 style={{ borderColor: BRAND, color: BRAND }}
// // //               >
// // //                 Book a Demo
// // //               </Link>
// // //             </div>

// // //             <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
// // //               {[
// // //                 [Building2, "10,000+", "Active Merchants"],
// // //                 [WalletCards, "₹500 Cr+", "Monthly Volume"],
// // //                 [ShieldCheck, "99.99%", "System Uptime"],
// // //                 [Headphones, "24x7", "Customer Support"],
// // //               ].map(([Icon, value, label]) => (
// // //                 <div key={label} className="flex items-start gap-2">
// // //                   <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //                     <Icon size={12} />
// // //                   </span>
// // //                   <span>
// // //                     <b className="block text-[13px] font-black" style={{ color: INK }}>{value}</b>
// // //                     <span className="text-[10px]" style={{ color: MUTED }}>{label}</span>
// // //                   </span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </motion.div>

// // //           <HeroDashboardMock />
// // //         </div>
// // //       </section>

// // //       {/* ---------------------------------------------------------------- TRUST STRIP */}
// // //       <section className="border-b border-slate-100 bg-white py-6">
// // //         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
// // //           <p className="text-center text-[11px] font-semibold" style={{ color: MUTED }}>
// // //             Trusted by <span className="font-black" style={{ color: BRAND }}>10,000+ businesses</span> across India
// // //           </p>
// // //           <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
// // //             {trustMarks.map((name) => (
// // //               <span key={name} className="text-sm font-black tracking-tight opacity-60" style={{ color: INK }}>
// // //                 {name}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
// // //         {/* ------------------------------------------------------------ SERVICE CATEGORIES */}
// // //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mb-4">
// // //           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //             Our Services
// // //           </p>
// // //           <div className="mt-1.5 flex items-center justify-between">
// // //             <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
// // //               Explore Our Service Categories
// // //             </h2>
// // //             <a href="#payment-solutions" className="hidden text-[11px] font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: BRAND }}>
// // //               Explore All Services <ArrowRight size={10} />
// // //             </a>
// // //           </div>
// // //         </motion.div>

// // //         <motion.div
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.15 }}
// // //           variants={staggerContainer}
// // //           className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
// // //         >
// // //           {groupDefinitions.map((group) => (
// // //             <motion.div key={group.title} variants={fadeInUp}>
// // //               <CategoryCard title={group.title} description={group.description} Icon={group.icon} />
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* ------------------------------------------------------------ DARK STAT STRIP */}
// // //         <motion.section
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.3 }}
// // //           variants={fadeInUp}
// // //           className="mt-6 grid overflow-hidden rounded-2xl text-white sm:grid-cols-2 lg:grid-cols-4"
// // //           style={{ backgroundColor: INK }}
// // //         >
// // //           {statHighlights.map(({ Icon, value, label, trend, points }) => (
// // //             <div key={label} className="flex items-center justify-between gap-3 border-white/10 p-4 sm:border-r last:border-r-0">
// // //               <div className="flex items-center gap-2.5">
// // //                 <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: "#5EEAD4" }}>
// // //                   <Icon size={15} />
// // //                 </span>
// // //                 <span>
// // //                   <b className="block text-sm">{value}</b>
// // //                   <small className="text-[9px] text-slate-300">{label}</small>
// // //                 </span>
// // //               </div>
// // //               <div className="hidden flex-col items-end gap-0.5 sm:flex">
// // //                 <Sparkline points={points} />
// // //                 <span className="text-[8px] font-semibold text-emerald-400">↑ {trend}</span>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </motion.section>

// // //         {/* ------------------------------------------------------------ LIVE TRANSACTIONS + PLATFORM FEATURES */}
// // //         <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
// // //           <motion.div
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, amount: 0.2 }}
// // //             variants={fadeInUp}
// // //             className="rounded-2xl border border-slate-200 bg-white p-4"
// // //           >
// // //             <div className="flex items-center justify-between">
// // //               <h3 className="text-[13px] font-black" style={{ color: INK }}>Live Transactions</h3>
// // //               <span className="text-[10px] font-bold" style={{ color: BRAND }}>View All</span>
// // //             </div>
// // //             <div className="mt-3 divide-y divide-slate-100">
// // //               {liveTransactions.map((tx, i) => {
// // //                 const style = methodStyles[tx.method] || methodStyles.UPI;
// // //                 return (
// // //                   <div key={i} className="flex items-center justify-between gap-3 py-2.5">
// // //                     <div className="flex items-center gap-2.5">
// // //                       <span
// // //                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-black"
// // //                         style={{ backgroundColor: style.bg, color: style.color }}
// // //                       >
// // //                         {tx.method}
// // //                       </span>
// // //                       <span>
// // //                         <b className="block text-[12px]" style={{ color: INK }}>{tx.amount}</b>
// // //                         <span className="text-[10px]" style={{ color: MUTED }}>From {tx.from}</span>
// // //                       </span>
// // //                     </div>
// // //                     <span className="text-right">
// // //                       <span className="block text-[10px] font-bold text-emerald-500">Success</span>
// // //                       <span className="text-[9px]" style={{ color: MUTED }}>{tx.time}</span>
// // //                     </span>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //             <p className="mt-3 flex items-center gap-1.5 text-[10px]" style={{ color: MUTED }}>
// // //               <LockKeyhole size={10} /> All transactions are secure and encrypted
// // //             </p>
// // //           </motion.div>

// // //           <motion.div
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, amount: 0.2 }}
// // //             variants={fadeInUp}
// // //             className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]"
// // //           >
// // //             <div>
// // //               <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //                 One Platform. Endless Possibilities.
// // //               </p>
// // //               <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] leading-tight" style={{ color: INK }}>
// // //                 Everything You Need, <span style={{ color: BRAND }}>All in One Platform</span>
// // //               </h2>
// // //               <p className="mt-3 text-[13px] leading-6" style={{ color: MUTED }}>
// // //                 From payments to banking, lending to travel — manage your entire business
// // //                 financial ecosystem from a single, powerful platform.
// // //               </p>

// // //               <div className="mt-5 space-y-3.5">
// // //                 {platformFeatures.map(({ Icon, title, desc }) => (
// // //                   <div key={title} className="flex items-start gap-2.5">
// // //                     <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //                       <Icon size={13} />
// // //                     </span>
// // //                     <span>
// // //                       <b className="block text-[12.5px] font-bold" style={{ color: INK }}>{title}</b>
// // //                       <span className="text-[11.5px]" style={{ color: MUTED }}>{desc}</span>
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             <TotalCollectionMock />
// // //           </motion.div>
// // //         </div>

// // //         {/* ------------------------------------------------------------ SERVICE ROWS (real links) */}
// // //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mt-8">
// // //           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //             Unified Experience
// // //           </p>
// // //           <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
// // //             Every Service, <span style={{ color: BRAND }}>At Your Fingertips</span>
// // //           </h2>
// // //         </motion.div>

// // //         <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-2">
// // //           {groupDefinitions.map((group) => (
// // //             <ServiceRow key={group.title} group={group} />
// // //           ))}
// // //         </div>

// // //         {/* ------------------------------------------------------------ CLOSING CTA */}
// // //         <motion.section
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.3 }}
// // //           variants={fadeInUp}
// // //           className="relative mt-8 overflow-hidden rounded-2xl px-5 py-8 text-white sm:px-8"
// // //           style={{ backgroundColor: INK }}
// // //         >
// // //           <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
// // //           <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
// // //             <div>
// // //               <p className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: "#5EEAD4" }}>
// // //                 Get Started Today
// // //               </p>
// // //               <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] leading-tight sm:text-4xl">
// // //                 Ready to Transform Your Business?
// // //               </h2>
// // //               <p className="mt-2 max-w-md text-[12px] text-white/70 sm:text-[13px]">
// // //                 Join thousands of businesses already growing with our complete financial ecosystem.
// // //               </p>
// // //               <div className="mt-5 flex flex-wrap items-center gap-2.5">
// // //                 <Link
// // //                   to="/contact"
// // //                   className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
// // //                   style={{ backgroundColor: BRAND }}
// // //                 >
// // //                   Get Started <ArrowRight size={11} />
// // //                 </Link>
// // //                 <Link
// // //                   to="/contact"
// // //                   className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
// // //                 >
// // //                   Contact Sales
// // //                 </Link>
// // //               </div>
// // //             </div>

// // //             <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
// // //               <div className="flex items-center justify-between">
// // //                 <p className="text-[11px] font-bold">Business Overview</p>
// // //                 <span className="text-[9px] text-white/60">This Month</span>
// // //               </div>
// // //               <div className="mt-3 grid grid-cols-3 gap-2">
// // //                 {[
// // //                   ["Total Revenue", "₹18.2 Cr", "23.5%"],
// // //                   ["Transactions", "1,24,820", "18.7%"],
// // //                   ["Success Rate", "99.99%", "0.6%"],
// // //                 ].map(([label, value, delta]) => (
// // //                   <div key={label} className="rounded-lg border border-white/10 p-2">
// // //                     <p className="text-[8px] text-white/60">{label}</p>
// // //                     <p className="text-[11px] font-black">{value}</p>
// // //                     <p className="text-[8px] font-bold text-emerald-400">↑ {delta}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
// // //                 <p className="text-[9px] font-bold text-white/80">Revenue Trend</p>
// // //                 <div className="mt-1">
// // //                   <RevenueTrendLine />
// // //                 </div>
// // //               </div>
// // //               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
// // //                 <p className="mb-2 text-[9px] font-bold text-white/80">Top Payment Modes</p>
// // //                 <PaymentModesDonut />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </motion.section>
// // //       </div>
// // //     </main>
// // //   );
// // // };

// // // /* ==================================================================== */
// // // /* EVERYTHING BELOW THIS LINE IS UNCHANGED — the service detail page    */
// // // /* ==================================================================== */

// // // /* ------------------------------------------------------------------ */
// // // /* Service detail page (unchanged logic, retouched palette)            */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceDetail = ({ service, category }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const categoryLabel = category || "Our Services";

// // //   const nameWords = service.name.trim().split(" ");
// // //   const lastWord = nameWords.pop();
// // //   const restName = nameWords.join(" ");

// // //   return (
// // //     <div className="bg-white font-sans" style={{ color: INK }}>
// // //       {/* Hero */}
// // //       <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
// // //         <AuroraGlowBackground />
// // //         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
// // //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //             <motion.span
// // //               variants={fadeInUp}
// // //               className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
// // //               style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
// // //             >
// // //               <FileText size={10} /> {categoryLabel}
// // //             </motion.span>

// // //             <motion.h1
// // //               variants={fadeInUp}
// // //               className="mt-3 text-[1.7rem] font-black leading-[1.1] sm:text-3xl md:text-[1.95rem]"
// // //               style={{ color: INK }}
// // //             >
// // //               {restName ? `${restName} ` : ""}
// // //               <span style={{ color: BRAND }}>{lastWord}</span>
// // //             </motion.h1>

// // //             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8" style={{ backgroundColor: BRAND }} />

// // //             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5" style={{ color: MUTED }}>
// // //               {service.longDescription || service.description}
// // //             </motion.p>

// // //             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
// // //               <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// // //                 <UsersRound size={10} />
// // //               </span>
// // //               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
// // //             </motion.div>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative mx-auto w-full max-w-sm"
// // //           >
// // //             <div className="relative overflow-hidden rounded-2xl shadow-xl">
// // //               <motion.img
// // //                 whileHover={{ scale: 1.04 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 src={mainImg}
// // //                 alt={service.name}
// // //                 className="h-48 w-full object-cover sm:h-60"
// // //               />
// // //               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
// // //             </div>

// // //             {service.partner && (
// // //               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
// // //                 <p className="text-[8px] font-semibold" style={{ color: MUTED }}>In Partnership with</p>
// // //                 {service.partner.logo ? (
// // //                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
// // //                 ) : (
// // //                   <p className="text-xs font-black" style={{ color: INK }}>{service.partner.name}</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Solutions + Benefits */}
// // //       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
// // //         <div className="grid gap-6 md:grid-cols-3">
// // //           <div className="md:col-span-2">
// // //             <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
// // //             <h2 className="mt-2 text-base font-black sm:text-lg" style={{ color: INK }}>
// // //               Our {categoryLabel}
// // //             </h2>

// // //             {features.length ? (
// // //               <motion.div
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={staggerContainer}
// // //                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
// // //               >
// // //                 {features.map((text, index) => {
// // //                   const Icon = serviceIcons[index % serviceIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       variants={fadeInUp}
// // //                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
// // //                       style={{ borderColor: undefined }}
// // //                     >
// // //                       <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// // //                         <Icon size={12} strokeWidth={1.7} />
// // //                       </div>
// // //                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug" style={{ color: "#1e293b" }}>{text}</p>
// // //                       <div className="mt-2 flex justify-end">
// // //                         <span
// // //                           className="inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
// // //                           style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// // //                         >
// // //                           <ArrowRight size={9} />
// // //                         </span>
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </motion.div>
// // //             ) : (
// // //               <p className="mt-4 text-[13px]" style={{ color: MUTED }}>More details coming soon.</p>
// // //             )}
// // //           </div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative flex flex-col overflow-hidden rounded-xl p-4 text-white shadow-lg"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
// // //               {Array.from({ length: 24 }).map((_, index) => (
// // //                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
// // //               ))}
// // //             </div>

// // //             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
// // //             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />

// // //             <div className="mt-3.5 space-y-3">
// // //               {highlights.length ? (
// // //                 highlights.map((benefit, index) => {
// // //                   const Icon = benefitIcons[index % benefitIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       initial={{ opacity: 0, x: -15 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ delay: index * 0.05 }}
// // //                     >
// // //                       <div className="flex items-start gap-2">
// // //                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: BRAND }}>
// // //                           <Icon size={11} />
// // //                         </span>
// // //                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
// // //                       </div>
// // //                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
// // //                     </motion.div>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:p-6"
// // //           style={{ backgroundColor: "#f2fbf9" }}
// // //         >
// // //           <div className="flex items-center gap-3 text-center sm:text-left">
// // //             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// // //               <Landmark size={20} />
// // //             </span>
// // //             <div>
// // //               <h3 className="text-xl font-black tracking-tight" style={{ color: INK }}>Ready to grow your business?</h3>
// // //               <p className="mt-1 max-w-sm text-[13px]" style={{ color: MUTED }}>
// // //                 Explore our services and find the right financial solution that fits your needs.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <Link
// // //             to="/services"
// // //             className="inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold text-white shadow-md transition hover:opacity-90"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             Back to Services <ArrowRight size={10} />
// // //           </Link>
// // //         </motion.div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="flex min-h-screen items-center justify-center bg-white text-black">
// // //         <p className="border-b-2 text-sm font-semibold" style={{ borderColor: BRAND }}>Service not found</p>
// // //       </div>
// // //     );
// // //   }

// // //   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

// // //   return <ServiceDetail service={service} category={category} />;
// // // };

// // // export default Services;





















// // // import React, { useEffect, useRef, useState } from "react";
// // // import { Link, useParams } from "react-router-dom";
// // // import { AnimatePresence, motion, useScroll } from "framer-motion";
// // // import {
// // //   ArrowRight,
// // //   Banknote,
// // //   Bell,
// // //   BadgeCheck,
// // //   BarChart3,
// // //   Building2,
// // //   CheckCircle2,
// // //   ChevronDown,
// // //   ChevronUp,
// // //   ClipboardList,
// // //   Code2,
// // //   CreditCard,
// // //   FileText,
// // //   Fingerprint,
// // //   Headphones,
// // //   Landmark,
// // //   LayoutDashboard,
// // //   LockKeyhole,
// // //   Plane,
// // //   QrCode,
// // //   Rocket,
// // //   ShieldCheck,
// // //   Smartphone,
// // //   TrendingUp,
// // //   UsersRound,
// // //   WalletCards,
// // //   Zap,
// // // } from "lucide-react";
// // // import servicesData from "./Servicesdata.json";

// // // /* ------------------------------------------------------------------ */
// // // /* Design tokens (kept local so nothing outside this file is touched) */
// // // /* ------------------------------------------------------------------ */
// // // const BRAND = "#14B8A6"; // primary teal accent
// // // const BRAND_RGB = "20,184,166"; // rgba helper for BRAND
// // // const BRAND_SOFT = "rgba(20,184,166,0.10)";
// // // const INK = "#0B1220"; // near-black heading colour
// // // const MUTED = "#5B6B84"; // body copy grey

// // // const groupDefinitions = [
// // //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// // //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// // //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// // //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// // //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // // ];

// // // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// // // const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// // // /* ------------------------------------------------------------------ */
// // // /* Shared scroll-reveal animation variants                            */
// // // /* ------------------------------------------------------------------ */
// // // const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // // /* ------------------------------------------------------------------ */
// // // /* Aurora Glow Background — soft, slowly-drifting teal blobs          */
// // // /* NOTE: also used on the (untouched) service detail page — left as-is */
// // // /* ------------------------------------------------------------------ */
// // // const AuroraGlowBackground = () => (
// // //   <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
// // //     <motion.div
// // //       className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
// // //       style={{ backgroundColor: "rgba(20,184,166,0.28)" }}
// // //       animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
// // //       transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
// // //     />
// // //     <motion.div
// // //       className="absolute -right-24 top-4 h-[22rem] w-[22rem] rounded-full blur-3xl"
// // //       style={{ backgroundColor: "rgba(45,212,191,0.22)" }}
// // //       animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
// // //       transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
// // //     />
// // //     <motion.div
// // //       className="absolute left-1/3 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full blur-3xl"
// // //       style={{ backgroundColor: "rgba(14,165,233,0.14)" }}
// // //       animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
// // //       transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
// // //     />
// // //   </div>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Tiny inline sparkline used in the dark stats strip                 */
// // // /* ------------------------------------------------------------------ */
// // // const Sparkline = ({ points, color = "#5EEAD4" }) => {
// // //   const width = 64;
// // //   const height = 22;
// // //   const max = Math.max(...points);
// // //   const min = Math.min(...points);
// // //   const step = width / (points.length - 1);
// // //   const path = points
// // //     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min || 1)) * height).toFixed(1)}`)
// // //     .join(" ");
// // //   return (
// // //     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
// // //       <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Category card — icon tile, bold title, quiet description, cta dot  */
// // // /* ------------------------------------------------------------------ */
// // // const CategoryCard = ({ title, description, Icon }) => (
// // //   <a
// // //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// // //     className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/40 hover:shadow-[0_14px_34px_rgba(20,184,166,0.16)]"
// // //   >
// // //     <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //       <Icon size={18} strokeWidth={1.8} />
// // //     </div>

// // //     <h3 className="mt-3 text-[14px] font-black tracking-[-0.01em] leading-snug" style={{ color: INK }}>
// // //       {title}
// // //     </h3>

// // //     <p className="mt-1 flex-1 text-[11.5px] leading-5" style={{ color: MUTED }}>
// // //       {description}
// // //     </p>

// // //     <span
// // //       className="mt-3 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-transparent group-hover:bg-[#14B8A6] group-hover:text-white"
// // //       style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// // //     >
// // //       <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
// // //     </span>
// // //   </a>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Individual service tile inside a category row                      */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceItem = ({ service, index }) => {
// // //   const Icon = serviceIcons[index % serviceIcons.length];
// // //   return (
// // //     <Link
// // //       to={`/services/${service.id}`}
// // //       className="group flex flex-col gap-1.5 rounded-xl border border-slate-100 bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#14B8A6]/30 hover:shadow-md"
// // //     >
// // //       <div
// // //         className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
// // //         style={{ backgroundColor: BRAND_SOFT, color: BRAND }}
// // //       >
// // //         <Icon size={15} strokeWidth={1.8} />
// // //       </div>
// // //       <h4 className="line-clamp-2 text-[14px] font-black tracking-tight leading-snug" style={{ color: INK }}>
// // //         {service.name.replaceAll("â€“", "–")}
// // //       </h4>
// // //       <p className="line-clamp-2 text-[12px] leading-4" style={{ color: MUTED }}>
// // //         {service.description}
// // //       </p>
// // //     </Link>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* One category row: sidebar label + grid of its services             */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceRow = ({ group }) => {
// // //   const [showAllServices, setShowAllServices] = useState(false);
// // //   const Icon = group.icon;

// // //   const serviceMap = new Map(servicesData.map((service) => [service.id, service]));
// // //   const services = group.ids.map((id) => serviceMap.get(id)).filter(Boolean);

// // //   return (
// // //     <motion.section
// // //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// // //       initial="hidden"
// // //       whileInView="visible"
// // //       viewport={{ once: true, amount: 0.2 }}
// // //       variants={fadeInUp}
// // //       className="flex flex-col gap-3 border-b border-slate-100 py-4 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
// // //     >
// // //       <div
// // //         className={`flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 transition-colors duration-200 lg:w-48 lg:flex-col lg:items-start lg:justify-center ${
// // //           showAllServices ? "border-[#14B8A6] bg-[#14B8A6]/5" : "border-transparent hover:border-[#14B8A6]/25 hover:bg-slate-50"
// // //         }`}
// // //       >
// // //         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(20,184,166,0.12)", color: BRAND }}>
// // //           <Icon size={16} />
// // //         </div>

// // //         <div className="flex-1 lg:flex-none">
// // //           <h2 className="text-[15px] font-black tracking-tight" style={{ color: INK }}>
// // //             {group.title}
// // //           </h2>

// // //           <button
// // //             type="button"
// // //             onClick={() => setShowAllServices(!showAllServices)}
// // //             className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold transition"
// // //             style={{ color: BRAND }}
// // //           >
// // //             {showAllServices ? "View Less" : "View All"}
// // //             {showAllServices ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
// // //         {services.length ? (
// // //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// // //             <ServiceItem key={service.id} service={service} index={index} />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full flex h-20 items-center justify-center text-xs" style={{ color: MUTED }}>
// // //             No services available.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </motion.section>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Scroll-pinned hero story data                                      */
// // // /* Each entry drives: left copy, dashboard stats, chart, a live entry */
// // // /* list, and a notification toast — one per service category.         */
// // // /* ------------------------------------------------------------------ */
// // // const sidebarNavIcons = [LayoutDashboard, BarChart3, WalletCards, ClipboardList, FileText, UsersRound];

// // // const heroBars = [
// // //   { a: 55, b: 35 }, { a: 70, b: 50 }, { a: 45, b: 60 }, { a: 80, b: 55 }, { a: 60, b: 40 },
// // //   { a: 90, b: 65 }, { a: 50, b: 45 }, { a: 75, b: 50 }, { a: 65, b: 55 },
// // // ];

// // // const heroStories = [
// // //   {
// // //     index: 0,
// // //     icon: WalletCards,
// // //     title: "Payment Solutions",
// // //     heading: (
// // //       <>
// // //         Collect Payments <span style={{ color: BRAND }}>From Anywhere</span>
// // //       </>
// // //     ),
// // //     description: "QR codes, sound box, POS devices and payment gateways — accept money in seconds, wherever your customers are.",
// // //     dashboardSubtitle: "Here's what's happening today",
// // //     chartLabel: "Revenue Overview",
// // //     listLabel: "Recent Settlements",
// // //     stats: [
// // //       { label: "Total Revenue", value: 18.2, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "23.5%" },
// // //       { label: "Transactions", value: 124820, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "18.7%" },
// // //       { label: "Success Rate", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.6%" },
// // //     ],
// // //     chartData: heroBars,
// // //     entries: [
// // //       { icon: Banknote, title: "₹1,24,500", meta: "Settled · Today, 10:30 AM" },
// // //       { icon: Banknote, title: "₹87,500", meta: "Settled · Today, 09:15 AM" },
// // //     ],
// // //     notification: { icon: QrCode, title: "₹5,200 received via UPI", time: "Just now" },
// // //   },
// // //   {
// // //     index: 1,
// // //     icon: Landmark,
// // //     title: "Banking Services",
// // //     heading: (
// // //       <>
// // //         Banking Services, <span style={{ color: BRAND }}>Right Next Door</span>
// // //       </>
// // //     ),
// // //     description: "AEPS, Micro ATM, BBPS bill payments and cash management — bring the branch to your customer's doorstep.",
// // //     dashboardSubtitle: "Banking desk overview",
// // //     chartLabel: "AEPS Volume",
// // //     listLabel: "Recent Withdrawals",
// // //     stats: [
// // //       { label: "AEPS Volume", value: 6.4, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "15.2%" },
// // //       { label: "Bills Paid", value: 48300, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "12.4%" },
// // //       { label: "Active Kiosks", value: 2180, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "9.1%" },
// // //     ],
// // //     chartData: [
// // //       { a: 40, b: 30 }, { a: 55, b: 45 }, { a: 35, b: 50 }, { a: 65, b: 40 }, { a: 50, b: 35 },
// // //       { a: 75, b: 55 }, { a: 45, b: 40 }, { a: 60, b: 45 }, { a: 52, b: 38 },
// // //     ],
// // //     entries: [
// // //       { icon: Landmark, title: "₹2,400 withdrawn", meta: "AEPS · 2 min ago" },
// // //       { icon: Landmark, title: "₹1,150 bill paid", meta: "BBPS · 6 min ago" },
// // //     ],
// // //     notification: { icon: Fingerprint, title: "AEPS withdrawal ₹2,400 done", time: "Just now" },
// // //   },
// // //   {
// // //     index: 2,
// // //     icon: Banknote,
// // //     title: "Financial Services",
// // //     heading: (
// // //       <>
// // //         Fuel Growth With <span style={{ color: BRAND }}>Smart Lending</span>
// // //       </>
// // //     ),
// // //     description: "Business loans, personal loans and insurance — sourced and approved with fully digital onboarding.",
// // //     dashboardSubtitle: "Lending desk overview",
// // //     chartLabel: "Loans Disbursed",
// // //     listLabel: "Recent Approvals",
// // //     stats: [
// // //       { label: "Loans Disbursed", value: 42.6, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "31.2%" },
// // //       { label: "Applications", value: 8940, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "22.5%" },
// // //       { label: "Approval Rate", value: 87, format: (v) => `${v.toFixed(0)}%`, delta: "4.1%" },
// // //     ],
// // //     chartData: [
// // //       { a: 30, b: 20 }, { a: 45, b: 35 }, { a: 60, b: 40 }, { a: 50, b: 55 }, { a: 70, b: 45 },
// // //       { a: 55, b: 60 }, { a: 80, b: 50 }, { a: 65, b: 55 }, { a: 75, b: 60 },
// // //     ],
// // //     entries: [
// // //       { icon: Banknote, title: "₹2,00,000 approved", meta: "Business loan · 3 min ago" },
// // //       { icon: ShieldCheck, title: "Policy issued", meta: "Health insurance · 9 min ago" },
// // //     ],
// // //     notification: { icon: BadgeCheck, title: "Loan approved for ₹2,00,000", time: "Just now" },
// // //   },
// // //   {
// // //     index: 3,
// // //     icon: Plane,
// // //     title: "Travel Services",
// // //     heading: (
// // //       <>
// // //         Book Journeys, <span style={{ color: BRAND }}>Earn Commissions</span>
// // //       </>
// // //     ),
// // //     description: "Flights, trains, buses and hotels — a complete booking engine that pays you on every ticket.",
// // //     dashboardSubtitle: "Travel desk overview",
// // //     chartLabel: "Bookings Overview",
// // //     listLabel: "Recent Bookings",
// // //     stats: [
// // //       { label: "Bookings", value: 15720, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "19.8%" },
// // //       { label: "Commission", value: 38.5, format: (v) => `₹${v.toFixed(1)} L`, delta: "27.6%" },
// // //       { label: "Avg. Value", value: 4850, format: (v) => `₹${Math.round(v).toLocaleString("en-IN")}`, delta: "6.2%" },
// // //     ],
// // //     chartData: [
// // //       { a: 50, b: 35 }, { a: 40, b: 55 }, { a: 65, b: 45 }, { a: 55, b: 35 }, { a: 70, b: 50 },
// // //       { a: 45, b: 60 }, { a: 60, b: 40 }, { a: 80, b: 55 }, { a: 50, b: 45 },
// // //     ],
// // //     entries: [
// // //       { icon: Plane, title: "DEL → BOM booked", meta: "Flight · 1 min ago" },
// // //       { icon: Building2, title: "Hotel confirmed", meta: "Goa · 8 min ago" },
// // //     ],
// // //     notification: { icon: Plane, title: "Flight booked: DEL → BOM", time: "Just now" },
// // //   },
// // //   {
// // //     index: 4,
// // //     icon: Code2,
// // //     title: "Technology Solutions",
// // //     heading: (
// // //       <>
// // //         Build, Scale <span style={{ color: BRAND }}>and Automate</span>
// // //       </>
// // //     ),
// // //     description: "APIs, merchant dashboards and white-label platforms — the technology backbone for your business.",
// // //     dashboardSubtitle: "Developer console overview",
// // //     chartLabel: "API Traffic",
// // //     listLabel: "Recent Activity",
// // //     stats: [
// // //       { label: "API Calls/Day", value: 2.4, format: (v) => `${v.toFixed(1)}M`, delta: "34.7%" },
// // //       { label: "Uptime", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.1%" },
// // //       { label: "Integrations", value: 640, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "11.3%" },
// // //     ],
// // //     chartData: [
// // //       { a: 60, b: 40 }, { a: 75, b: 50 }, { a: 55, b: 65 }, { a: 85, b: 55 }, { a: 65, b: 45 },
// // //       { a: 90, b: 60 }, { a: 70, b: 50 }, { a: 80, b: 65 }, { a: 72, b: 52 },
// // //     ],
// // //     entries: [
// // //       { icon: Code2, title: "API key generated", meta: "Sandbox · 4 min ago" },
// // //       { icon: LayoutDashboard, title: "Dashboard deployed", meta: "White-label · 12 min ago" },
// // //     ],
// // //     notification: { icon: Zap, title: "New API key generated", time: "Just now" },
// // //   },
// // // ];

// // // /* ------------------------------------------------------------------ */
// // // /* Count-up number helper — animates from the previous value to the   */
// // // /* next whenever `value` changes (i.e. whenever the active story does)*/
// // // /* ------------------------------------------------------------------ */
// // // const useCountUp = (target, duration = 900) => {
// // //   const [display, setDisplay] = useState(target);
// // //   const fromRef = useRef(target);

// // //   useEffect(() => {
// // //     const from = fromRef.current;
// // //     const to = target;
// // //     if (from === to) return undefined;

// // //     let rafId;
// // //     let start;

// // //     const tick = (timestamp) => {
// // //       if (start === undefined) start = timestamp;
// // //       const elapsed = timestamp - start;
// // //       const progress = Math.min(elapsed / duration, 1);
// // //       const eased = 1 - Math.pow(1 - progress, 3);
// // //       setDisplay(from + (to - from) * eased);
// // //       if (progress < 1) {
// // //         rafId = requestAnimationFrame(tick);
// // //       } else {
// // //         fromRef.current = to;
// // //       }
// // //     };

// // //     rafId = requestAnimationFrame(tick);
// // //     return () => cancelAnimationFrame(rafId);
// // //   }, [target, duration]);

// // //   return display;
// // // };

// // // const AnimatedNumber = ({ value, format }) => {
// // //   const display = useCountUp(value);
// // //   return <>{format(display)}</>;
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Story-driven dashboard mock — same chrome as before, but every      */
// // // /* number, bar, list row and toast is sourced from the active story   */
// // // /* ------------------------------------------------------------------ */
// // // const StoryDashboardMock = ({ story, showNotification }) => (
// // //   <motion.div
// // //     initial={{ opacity: 0, y: 26 }}
// // //     animate={{ opacity: 1, y: 0 }}
// // //     transition={{ duration: 0.6, delay: 0.1 }}
// // //     className="relative mx-auto w-full max-w-md"
// // //   >
// // //     <div className="flex overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
// // //       <div className="hidden w-14 shrink-0 flex-col items-center gap-4 py-4 sm:flex" style={{ backgroundColor: INK }}>
// // //         <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //           <Fingerprint size={14} />
// // //         </div>
// // //         <div className="mt-2 flex flex-col items-center gap-3">
// // //           {sidebarNavIcons.map((Icon, i) => (
// // //             <span
// // //               key={i}
// // //               className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-300"
// // //               style={i === story.index ? { backgroundColor: BRAND, color: "#fff" } : { color: "rgba(255,255,255,0.4)" }}
// // //             >
// // //               <Icon size={13} />
// // //             </span>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div className="flex-1 p-4">
// // //         <div className="flex items-start justify-between">
// // //           <div>
// // //             <p className="text-[12px] font-black" style={{ color: INK }}>Hello, Abheepay Merchant 👋</p>
// // //             <p className="text-[9px]" style={{ color: MUTED }}>{story.dashboardSubtitle}</p>
// // //           </div>
// // //           <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50" style={{ color: MUTED }}>
// // //             <Bell size={12} />
// // //           </span>
// // //         </div>

// // //         <div className="mt-3 grid grid-cols-3 gap-2">
// // //           {story.stats.map((stat) => (
// // //             <div key={stat.label} className="rounded-lg border border-slate-100 p-2">
// // //               <p className="text-[7.5px] font-semibold" style={{ color: MUTED }}>{stat.label}</p>
// // //               <p className="mt-0.5 text-[11px] font-black" style={{ color: INK }}>
// // //                 <AnimatedNumber value={stat.value} format={stat.format} />
// // //               </p>
// // //               <p className="mt-0.5 text-[7.5px] font-bold text-emerald-500">↑ {stat.delta}</p>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.chartLabel}</p>
// // //             <div className="flex items-center gap-2 text-[7px]" style={{ color: MUTED }}>
// // //               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />This Month</span>
// // //               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-slate-300" />Last Month</span>
// // //             </div>
// // //           </div>
// // //           <div className="mt-2 flex h-14 items-end gap-1.5">
// // //             {story.chartData.map((bar, i) => (
// // //               <div key={i} className="flex flex-1 items-end gap-[2px]">
// // //                 <div className="w-full rounded-sm transition-all duration-700 ease-out" style={{ height: `${bar.a}%`, backgroundColor: BRAND }} />
// // //                 <div className="w-full rounded-sm bg-slate-200 transition-all duration-700 ease-out" style={{ height: `${bar.b}%` }} />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.listLabel}</p>
// // //             <span className="text-[8px] font-bold" style={{ color: BRAND }}>View All</span>
// // //           </div>
// // //           <div className="mt-1.5 space-y-1.5">
// // //             {story.entries.map((entry) => (
// // //               <div key={entry.title} className="flex items-center justify-between text-[8px]">
// // //                 <span className="flex items-center gap-1.5" style={{ color: INK }}>
// // //                   <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //                     <entry.icon size={10} />
// // //                   </span>
// // //                   <b>{entry.title}</b>
// // //                 </span>
// // //                 <span style={{ color: MUTED }}>{entry.meta}</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>

// // //     <div
// // //       className="absolute -bottom-4 -left-4 hidden items-center gap-1.5 rounded-xl px-3 py-2 text-white shadow-lg sm:flex"
// // //       style={{ backgroundColor: INK }}
// // //     >
// // //       <LockKeyhole size={12} />
// // //       <span className="text-[9px] font-bold">Bank-grade security</span>
// // //     </div>

// // //     <AnimatePresence>
// // //       {showNotification && (
// // //         <motion.div
// // //           key={story.title}
// // //           initial={{ opacity: 0, x: 18, y: -8, scale: 0.92 }}
// // //           animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
// // //           exit={{ opacity: 0, x: 18, scale: 0.92 }}
// // //           transition={{ duration: 0.35, ease: "easeOut" }}
// // //           className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:-right-8"
// // //         >
// // //           <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //             <story.notification.icon size={13} />
// // //           </span>
// // //           <span>
// // //             <b className="block text-[10px]" style={{ color: INK }}>{story.notification.title}</b>
// // //             <span className="text-[8px]" style={{ color: MUTED }}>{story.notification.time}</span>
// // //           </span>
// // //         </motion.div>
// // //       )}
// // //     </AnimatePresence>
// // //   </motion.div>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Scroll-pinned hero — the section stays fixed on screen while the   */
// // // /* user scrolls through it; every story below drives new left copy,   */
// // // /* dashboard numbers, chart bars and a notification toast.            */
// // // /* ------------------------------------------------------------------ */
// // // const ScrollStoryHero = () => {
// // //   const containerRef = useRef(null);
// // //   const [activeIndex, setActiveIndex] = useState(0);
// // //   const [showNotification, setShowNotification] = useState(false);

// // //   const { scrollYProgress } = useScroll({
// // //     target: containerRef,
// // //     offset: ["start start", "end end"],
// // //   });

// // //   useEffect(() => {
// // //     const unsubscribe = scrollYProgress.on("change", (v) => {
// // //       const raw = Math.min(v, 0.999) * heroStories.length;
// // //       const idx = Math.max(0, Math.min(heroStories.length - 1, Math.floor(raw)));
// // //       const local = raw - idx;
// // //       setActiveIndex((prev) => (prev === idx ? prev : idx));
// // //       setShowNotification(local > 0.3 && local < 0.85);
// // //     });
// // //     return unsubscribe;
// // //   }, [scrollYProgress]);

// // //   const story = heroStories[activeIndex];

// // //   return (
// // //     <div ref={containerRef} className="relative" style={{ height: `${heroStories.length * 100}vh` }}>
// // //       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
// // //         <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
// // //           <div>
// // //             <AnimatePresence mode="wait">
// // //               <motion.div
// // //                 key={story.title}
// // //                 initial={{ opacity: 0, y: 18 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 exit={{ opacity: 0, y: -18 }}
// // //                 transition={{ duration: 0.4, ease: "easeOut" }}
// // //               >
// // //                 <span
// // //                   className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold"
// // //                   style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// // //                 >
// // //                   <story.icon size={11} /> {story.title}
// // //                 </span>

// // //                 <h1
// // //                   className="mt-4 max-w-lg text-[2rem] font-black leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[2.7rem]"
// // //                   style={{ color: INK }}
// // //                 >
// // //                   {story.heading}
// // //                 </h1>

// // //                 <p className="mt-4 max-w-md text-[13px] leading-6 sm:text-sm" style={{ color: MUTED }}>
// // //                   {story.description}
// // //                 </p>
// // //               </motion.div>
// // //             </AnimatePresence>

// // //             <div className="mt-6 flex flex-wrap gap-2.5">
// // //               <Link
// // //                 to="/contact"
// // //                 className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
// // //                 style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(20,184,166,0.30)" }}
// // //               >
// // //                 Get Started <ArrowRight size={12} />
// // //               </Link>
// // //               <Link
// // //                 to="/contact"
// // //                 className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
// // //                 style={{ borderColor: BRAND, color: BRAND }}
// // //               >
// // //                 Book a Demo
// // //               </Link>
// // //             </div>

// // //             <div className="mt-8 flex items-center gap-2">
// // //               {heroStories.map((s, i) => (
// // //                 <span
// // //                   key={s.title}
// // //                   className="h-1.5 rounded-full transition-all duration-500"
// // //                   style={{ width: i === activeIndex ? 28 : 10, backgroundColor: i === activeIndex ? BRAND : "rgba(20,184,166,0.2)" }}
// // //                 />
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <StoryDashboardMock story={story} showNotification={showNotification} />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Trust strip — generic wordmarks (no real third-party logos)        */
// // // /* ------------------------------------------------------------------ */
// // // const trustMarks = ["Vertex Retail", "Nimbus Mart", "Orbit Foods", "Northstar Traders", "Lumen Café", "Rapidcart"];

// // // /* ------------------------------------------------------------------ */
// // // /* Dark stat strip with sparklines                                    */
// // // /* ------------------------------------------------------------------ */
// // // const statHighlights = [
// // //   { Icon: Building2, value: "10,000+", label: "Active Merchants", trend: "24% this year", points: [4, 6, 5, 8, 7, 10, 9, 12] },
// // //   { Icon: WalletCards, value: "₹500 Cr+", label: "Monthly Volume", trend: "18% vs last month", points: [5, 5, 7, 6, 9, 8, 11, 12] },
// // //   { Icon: ShieldCheck, value: "99.99%", label: "System Uptime", trend: "0.5% this month", points: [9, 9, 9, 10, 9, 10, 10, 10] },
// // //   { Icon: Headphones, value: "24×7", label: "Customer Support", trend: "Always here for you", points: [6, 7, 6, 8, 7, 9, 8, 9] },
// // // ];

// // // /* ------------------------------------------------------------------ */
// // // /* Live transactions panel data                                       */
// // // /* ------------------------------------------------------------------ */
// // // const liveTransactions = [
// // //   { method: "UPI", amount: "₹5,200", from: "Rahul Kumar", time: "2 sec ago" },
// // //   { method: "VISA", amount: "₹12,850", from: "Amazon Pay", time: "5 sec ago" },
// // //   { method: "AEPS", amount: "₹2,400", from: "Customer", time: "8 sec ago" },
// // //   { method: "UPI", amount: "₹8,950", from: "PhonePe", time: "12 sec ago" },
// // //   { method: "MC", amount: "₹1,650", from: "Credit Card", time: "15 sec ago" },
// // // ];

// // // const methodStyles = {
// // //   UPI: { bg: BRAND_SOFT, color: BRAND },
// // //   VISA: { bg: "rgba(11,18,32,0.08)", color: INK },
// // //   AEPS: { bg: "rgba(20,184,166,0.16)", color: "#0F9488" },
// // //   MC: { bg: "rgba(249,115,22,0.12)", color: "#EA580C" },
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Platform feature list                                              */
// // // /* ------------------------------------------------------------------ */
// // // const platformFeatures = [
// // //   { Icon: Zap, title: "Easy Integration", desc: "Quick setup with developer-friendly APIs" },
// // //   { Icon: BarChart3, title: "Real-time Analytics", desc: "Track performance with advanced insights" },
// // //   { Icon: ShieldCheck, title: "Secure & Compliant", desc: "Bank-grade security with RBI compliance" },
// // //   { Icon: TrendingUp, title: "Scalable Infrastructure", desc: "Built to handle billions of transactions" },
// // // ];

// // // /* ------------------------------------------------------------------ */
// // // /* Floating "Total Collection" mock beside the feature list           */
// // // /* ------------------------------------------------------------------ */
// // // const collectionBars = [30, 55, 40, 70, 50, 85, 60, 95, 65];

// // // const TotalCollectionMock = () => (
// // //   <div className="relative mx-auto hidden w-full max-w-[15rem] lg:block">
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 24, rotate: -3 }}
// // //       whileInView={{ opacity: 1, y: 0, rotate: -3 }}
// // //       viewport={{ once: true }}
// // //       transition={{ duration: 0.5 }}
// // //       className="rounded-2xl p-4 text-white shadow-xl"
// // //       style={{ backgroundColor: BRAND }}
// // //     >
// // //       <p className="text-[10px] font-semibold text-white/80">Total Collection</p>
// // //       <p className="mt-1 flex items-center gap-1 text-xl font-black">
// // //         ₹18,20,450 <span className="text-[10px] font-bold text-white/80">↑ 23.5%</span>
// // //       </p>
// // //       <div className="mt-3 flex h-14 items-end gap-1">
// // //         {collectionBars.map((h, i) => (
// // //           <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />
// // //         ))}
// // //       </div>
// // //       <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2 text-[10px]">
// // //         <span>
// // //           <b className="block text-[12px]">1,24,820</b>
// // //           <span className="text-white/70">Transactions</span>
// // //         </span>
// // //         <span className="text-right">
// // //           <b className="block text-[12px]">99.99%</b>
// // //           <span className="text-white/70">Success Rate</span>
// // //         </span>
// // //       </div>
// // //     </motion.div>

// // //     <div className="absolute -right-6 top-6 flex flex-col gap-2">
// // //       {["UPI", "VISA", "RuPay"].map((label, i) => (
// // //         <motion.span
// // //           key={label}
// // //           initial={{ opacity: 0, x: 12 }}
// // //           whileInView={{ opacity: 1, x: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ delay: 0.15 + i * 0.08 }}
// // //           className="rounded-lg border border-slate-100 bg-white px-2.5 py-1.5 text-[9px] font-black shadow-md"
// // //           style={{ color: INK }}
// // //         >
// // //           {label}
// // //         </motion.span>
// // //       ))}
// // //     </div>
// // //   </div>
// // // );

// // // /* ------------------------------------------------------------------ */
// // // /* Business overview mock for the closing CTA                         */
// // // /* ------------------------------------------------------------------ */
// // // const revenueTrend = [10, 22, 16, 30, 24, 38, 32, 46, 40, 55, 48, 62];
// // // const paymentModes = [
// // //   { label: "UPI", value: 45, color: "#5EEAD4" },
// // //   { label: "Cards", value: 30, color: BRAND },
// // //   { label: "Wallets", value: 15, color: "#0F9488" },
// // //   { label: "Net Banking", value: 10, color: "#134E4A" },
// // // ];

// // // const RevenueTrendLine = () => {
// // //   const width = 220;
// // //   const height = 60;
// // //   const max = Math.max(...revenueTrend);
// // //   const min = Math.min(...revenueTrend);
// // //   const step = width / (revenueTrend.length - 1);
// // //   const path = revenueTrend
// // //     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min)) * height).toFixed(1)}`)
// // //     .join(" ");
// // //   return (
// // //     <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
// // //       <path d={path} fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// // //     </svg>
// // //   );
// // // };

// // // const PaymentModesDonut = () => {
// // //   let cumulative = 0;
// // //   const stops = paymentModes
// // //     .map((mode) => {
// // //       const start = cumulative;
// // //       cumulative += mode.value;
// // //       return `${mode.color} ${start}% ${cumulative}%`;
// // //     })
// // //     .join(", ");
// // //   return (
// // //     <div className="flex items-center gap-3">
// // //       <div className="h-16 w-16 shrink-0 rounded-full" style={{ background: `conic-gradient(${stops})` }}>
// // //         <div className="m-[6px] flex h-[calc(100%-12px)] w-[calc(100%-12px)] items-center justify-center rounded-full" style={{ backgroundColor: INK }} />
// // //       </div>
// // //       <div className="space-y-1">
// // //         {paymentModes.map((mode) => (
// // //           <div key={mode.label} className="flex items-center gap-1.5 text-[9px] text-white/70">
// // //             <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: mode.color }} />
// // //             {mode.label} <span className="font-bold text-white">{mode.value}%</span>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // /* ------------------------------------------------------------------ */
// // // /* Services list / landing page                                        */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceList = () => {
// // //   return (
// // //     <main id="top" className="overflow-hidden bg-[#fbfcff] pb-6 font-sans" style={{ color: INK }}>
// // //       {/* ---------------------------------------------------------------- HERO (scroll-pinned story) */}
// // //       <section className="relative isolate border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white">
// // //         <AuroraGlowBackground />
// // //         <ScrollStoryHero />
// // //       </section>

// // //       {/* ---------------------------------------------------------------- TRUST STRIP */}
// // //       <section className="border-b border-slate-100 bg-white py-6">
// // //         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
// // //           <p className="text-center text-[11px] font-semibold" style={{ color: MUTED }}>
// // //             Trusted by <span className="font-black" style={{ color: BRAND }}>10,000+ businesses</span> across India
// // //           </p>
// // //           <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
// // //             {trustMarks.map((name) => (
// // //               <span key={name} className="text-sm font-black tracking-tight opacity-60" style={{ color: INK }}>
// // //                 {name}
// // //               </span>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
// // //         {/* ------------------------------------------------------------ SERVICE CATEGORIES */}
// // //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mb-4">
// // //           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //             Our Services
// // //           </p>
// // //           <div className="mt-1.5 flex items-center justify-between">
// // //             <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
// // //               Explore Our Service Categories
// // //             </h2>
// // //             <a href="#payment-solutions" className="hidden text-[11px] font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: BRAND }}>
// // //               Explore All Services <ArrowRight size={10} />
// // //             </a>
// // //           </div>
// // //         </motion.div>

// // //         <motion.div
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.15 }}
// // //           variants={staggerContainer}
// // //           className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
// // //         >
// // //           {groupDefinitions.map((group) => (
// // //             <motion.div key={group.title} variants={fadeInUp}>
// // //               <CategoryCard title={group.title} description={group.description} Icon={group.icon} />
// // //             </motion.div>
// // //           ))}
// // //         </motion.div>

// // //         {/* ------------------------------------------------------------ DARK STAT STRIP */}
// // //         <motion.section
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.3 }}
// // //           variants={fadeInUp}
// // //           className="mt-6 grid overflow-hidden rounded-2xl text-white sm:grid-cols-2 lg:grid-cols-4"
// // //           style={{ backgroundColor: INK }}
// // //         >
// // //           {statHighlights.map(({ Icon, value, label, trend, points }) => (
// // //             <div key={label} className="flex items-center justify-between gap-3 border-white/10 p-4 sm:border-r last:border-r-0">
// // //               <div className="flex items-center gap-2.5">
// // //                 <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: "#5EEAD4" }}>
// // //                   <Icon size={15} />
// // //                 </span>
// // //                 <span>
// // //                   <b className="block text-sm">{value}</b>
// // //                   <small className="text-[9px] text-slate-300">{label}</small>
// // //                 </span>
// // //               </div>
// // //               <div className="hidden flex-col items-end gap-0.5 sm:flex">
// // //                 <Sparkline points={points} />
// // //                 <span className="text-[8px] font-semibold text-emerald-400">↑ {trend}</span>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </motion.section>

// // //         {/* ------------------------------------------------------------ LIVE TRANSACTIONS + PLATFORM FEATURES */}
// // //         <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
// // //           <motion.div
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, amount: 0.2 }}
// // //             variants={fadeInUp}
// // //             className="rounded-2xl border border-slate-200 bg-white p-4"
// // //           >
// // //             <div className="flex items-center justify-between">
// // //               <h3 className="text-[13px] font-black" style={{ color: INK }}>Live Transactions</h3>
// // //               <span className="text-[10px] font-bold" style={{ color: BRAND }}>View All</span>
// // //             </div>
// // //             <div className="mt-3 divide-y divide-slate-100">
// // //               {liveTransactions.map((tx, i) => {
// // //                 const style = methodStyles[tx.method] || methodStyles.UPI;
// // //                 return (
// // //                   <div key={i} className="flex items-center justify-between gap-3 py-2.5">
// // //                     <div className="flex items-center gap-2.5">
// // //                       <span
// // //                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-black"
// // //                         style={{ backgroundColor: style.bg, color: style.color }}
// // //                       >
// // //                         {tx.method}
// // //                       </span>
// // //                       <span>
// // //                         <b className="block text-[12px]" style={{ color: INK }}>{tx.amount}</b>
// // //                         <span className="text-[10px]" style={{ color: MUTED }}>From {tx.from}</span>
// // //                       </span>
// // //                     </div>
// // //                     <span className="text-right">
// // //                       <span className="block text-[10px] font-bold text-emerald-500">Success</span>
// // //                       <span className="text-[9px]" style={{ color: MUTED }}>{tx.time}</span>
// // //                     </span>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //             <p className="mt-3 flex items-center gap-1.5 text-[10px]" style={{ color: MUTED }}>
// // //               <LockKeyhole size={10} /> All transactions are secure and encrypted
// // //             </p>
// // //           </motion.div>

// // //           <motion.div
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, amount: 0.2 }}
// // //             variants={fadeInUp}
// // //             className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]"
// // //           >
// // //             <div>
// // //               <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //                 One Platform. Endless Possibilities.
// // //               </p>
// // //               <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] leading-tight" style={{ color: INK }}>
// // //                 Everything You Need, <span style={{ color: BRAND }}>All in One Platform</span>
// // //               </h2>
// // //               <p className="mt-3 text-[13px] leading-6" style={{ color: MUTED }}>
// // //                 From payments to banking, lending to travel — manage your entire business
// // //                 financial ecosystem from a single, powerful platform.
// // //               </p>

// // //               <div className="mt-5 space-y-3.5">
// // //                 {platformFeatures.map(({ Icon, title, desc }) => (
// // //                   <div key={title} className="flex items-start gap-2.5">
// // //                     <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// // //                       <Icon size={13} />
// // //                     </span>
// // //                     <span>
// // //                       <b className="block text-[12.5px] font-bold" style={{ color: INK }}>{title}</b>
// // //                       <span className="text-[11.5px]" style={{ color: MUTED }}>{desc}</span>
// // //                     </span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             <TotalCollectionMock />
// // //           </motion.div>
// // //         </div>

// // //         {/* ------------------------------------------------------------ SERVICE ROWS (real links) */}
// // //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mt-8">
// // //           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// // //             Unified Experience
// // //           </p>
// // //           <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
// // //             Every Service, <span style={{ color: BRAND }}>At Your Fingertips</span>
// // //           </h2>
// // //         </motion.div>

// // //         <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-2">
// // //           {groupDefinitions.map((group) => (
// // //             <ServiceRow key={group.title} group={group} />
// // //           ))}
// // //         </div>

// // //         {/* ------------------------------------------------------------ CLOSING CTA */}
// // //         <motion.section
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true, amount: 0.3 }}
// // //           variants={fadeInUp}
// // //           className="relative mt-8 overflow-hidden rounded-2xl px-5 py-8 text-white sm:px-8"
// // //           style={{ backgroundColor: INK }}
// // //         >
// // //           <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
// // //           <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
// // //             <div>
// // //               <p className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: "#5EEAD4" }}>
// // //                 Get Started Today
// // //               </p>
// // //               <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] leading-tight sm:text-4xl">
// // //                 Ready to Transform Your Business?
// // //               </h2>
// // //               <p className="mt-2 max-w-md text-[12px] text-white/70 sm:text-[13px]">
// // //                 Join thousands of businesses already growing with our complete financial ecosystem.
// // //               </p>
// // //               <div className="mt-5 flex flex-wrap items-center gap-2.5">
// // //                 <Link
// // //                   to="/contact"
// // //                   className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
// // //                   style={{ backgroundColor: BRAND }}
// // //                 >
// // //                   Get Started <ArrowRight size={11} />
// // //                 </Link>
// // //                 <Link
// // //                   to="/contact"
// // //                   className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
// // //                 >
// // //                   Contact Sales
// // //                 </Link>
// // //               </div>
// // //             </div>

// // //             <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
// // //               <div className="flex items-center justify-between">
// // //                 <p className="text-[11px] font-bold">Business Overview</p>
// // //                 <span className="text-[9px] text-white/60">This Month</span>
// // //               </div>
// // //               <div className="mt-3 grid grid-cols-3 gap-2">
// // //                 {[
// // //                   ["Total Revenue", "₹18.2 Cr", "23.5%"],
// // //                   ["Transactions", "1,24,820", "18.7%"],
// // //                   ["Success Rate", "99.99%", "0.6%"],
// // //                 ].map(([label, value, delta]) => (
// // //                   <div key={label} className="rounded-lg border border-white/10 p-2">
// // //                     <p className="text-[8px] text-white/60">{label}</p>
// // //                     <p className="text-[11px] font-black">{value}</p>
// // //                     <p className="text-[8px] font-bold text-emerald-400">↑ {delta}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
// // //                 <p className="text-[9px] font-bold text-white/80">Revenue Trend</p>
// // //                 <div className="mt-1">
// // //                   <RevenueTrendLine />
// // //                 </div>
// // //               </div>
// // //               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
// // //                 <p className="mb-2 text-[9px] font-bold text-white/80">Top Payment Modes</p>
// // //                 <PaymentModesDonut />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </motion.section>
// // //       </div>
// // //     </main>
// // //   );
// // // };

// // // /* ==================================================================== */
// // // /* EVERYTHING BELOW THIS LINE IS UNCHANGED — the service detail page    */
// // // /* ==================================================================== */

// // // /* ------------------------------------------------------------------ */
// // // /* Service detail page (unchanged logic, retouched palette)            */
// // // /* ------------------------------------------------------------------ */
// // // const ServiceDetail = ({ service, category }) => {
// // //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// // //   const features = service.features || [];
// // //   const highlights = service.benefits || [];
// // //   const categoryLabel = category || "Our Services";

// // //   const nameWords = service.name.trim().split(" ");
// // //   const lastWord = nameWords.pop();
// // //   const restName = nameWords.join(" ");

// // //   return (
// // //     <div className="bg-white font-sans" style={{ color: INK }}>
// // //       {/* Hero */}
// // //       <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
// // //         <AuroraGlowBackground />
// // //         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
// // //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// // //             <motion.span
// // //               variants={fadeInUp}
// // //               className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
// // //               style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
// // //             >
// // //               <FileText size={10} /> {categoryLabel}
// // //             </motion.span>

// // //             <motion.h1
// // //               variants={fadeInUp}
// // //               className="mt-3 text-[1.7rem] font-black leading-[1.1] sm:text-3xl md:text-[1.95rem]"
// // //               style={{ color: INK }}
// // //             >
// // //               {restName ? `${restName} ` : ""}
// // //               <span style={{ color: BRAND }}>{lastWord}</span>
// // //             </motion.h1>

// // //             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8" style={{ backgroundColor: BRAND }} />

// // //             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5" style={{ color: MUTED }}>
// // //               {service.longDescription || service.description}
// // //             </motion.p>

// // //             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
// // //               <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// // //                 <UsersRound size={10} />
// // //               </span>
// // //               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
// // //             </motion.div>
// // //           </motion.div>

// // //           <motion.div
// // //             initial={{ opacity: 0, x: 30 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative mx-auto w-full max-w-sm"
// // //           >
// // //             <div className="relative overflow-hidden rounded-2xl shadow-xl">
// // //               <motion.img
// // //                 whileHover={{ scale: 1.04 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 src={mainImg}
// // //                 alt={service.name}
// // //                 className="h-48 w-full object-cover sm:h-60"
// // //               />
// // //               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
// // //             </div>

// // //             {service.partner && (
// // //               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
// // //                 <p className="text-[8px] font-semibold" style={{ color: MUTED }}>In Partnership with</p>
// // //                 {service.partner.logo ? (
// // //                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
// // //                 ) : (
// // //                   <p className="text-xs font-black" style={{ color: INK }}>{service.partner.name}</p>
// // //                 )}
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Solutions + Benefits */}
// // //       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
// // //         <div className="grid gap-6 md:grid-cols-3">
// // //           <div className="md:col-span-2">
// // //             <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
// // //             <h2 className="mt-2 text-base font-black sm:text-lg" style={{ color: INK }}>
// // //               Our {categoryLabel}
// // //             </h2>

// // //             {features.length ? (
// // //               <motion.div
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 viewport={{ once: true }}
// // //                 variants={staggerContainer}
// // //                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
// // //               >
// // //                 {features.map((text, index) => {
// // //                   const Icon = serviceIcons[index % serviceIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       variants={fadeInUp}
// // //                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
// // //                       style={{ borderColor: undefined }}
// // //                     >
// // //                       <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// // //                         <Icon size={12} strokeWidth={1.7} />
// // //                       </div>
// // //                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug" style={{ color: "#1e293b" }}>{text}</p>
// // //                       <div className="mt-2 flex justify-end">
// // //                         <span
// // //                           className="inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
// // //                           style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// // //                         >
// // //                           <ArrowRight size={9} />
// // //                         </span>
// // //                       </div>
// // //                     </motion.div>
// // //                   );
// // //                 })}
// // //               </motion.div>
// // //             ) : (
// // //               <p className="mt-4 text-[13px]" style={{ color: MUTED }}>More details coming soon.</p>
// // //             )}
// // //           </div>

// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.5 }}
// // //             className="relative flex flex-col overflow-hidden rounded-xl p-4 text-white shadow-lg"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
// // //               {Array.from({ length: 24 }).map((_, index) => (
// // //                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
// // //               ))}
// // //             </div>

// // //             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
// // //             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />

// // //             <div className="mt-3.5 space-y-3">
// // //               {highlights.length ? (
// // //                 highlights.map((benefit, index) => {
// // //                   const Icon = benefitIcons[index % benefitIcons.length];
// // //                   return (
// // //                     <motion.div
// // //                       key={index}
// // //                       initial={{ opacity: 0, x: -15 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       viewport={{ once: true }}
// // //                       transition={{ delay: index * 0.05 }}
// // //                     >
// // //                       <div className="flex items-start gap-2">
// // //                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: BRAND }}>
// // //                           <Icon size={11} />
// // //                         </span>
// // //                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
// // //                       </div>
// // //                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
// // //                     </motion.div>
// // //                   );
// // //                 })
// // //               ) : (
// // //                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
// // //               )}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.4 }}
// // //           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:p-6"
// // //           style={{ backgroundColor: "#f2fbf9" }}
// // //         >
// // //           <div className="flex items-center gap-3 text-center sm:text-left">
// // //             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// // //               <Landmark size={20} />
// // //             </span>
// // //             <div>
// // //               <h3 className="text-xl font-black tracking-tight" style={{ color: INK }}>Ready to grow your business?</h3>
// // //               <p className="mt-1 max-w-sm text-[13px]" style={{ color: MUTED }}>
// // //                 Explore our services and find the right financial solution that fits your needs.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           <Link
// // //             to="/services"
// // //             className="inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold text-white shadow-md transition hover:opacity-90"
// // //             style={{ backgroundColor: BRAND }}
// // //           >
// // //             Back to Services <ArrowRight size={10} />
// // //           </Link>
// // //         </motion.div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // const Services = () => {
// // //   const { id } = useParams();

// // //   if (!id) return <ServiceList />;

// // //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// // //   if (!service) {
// // //     return (
// // //       <div className="flex min-h-screen items-center justify-center bg-white text-black">
// // //         <p className="border-b-2 text-sm font-semibold" style={{ borderColor: BRAND }}>Service not found</p>
// // //       </div>
// // //     );
// // //   }

// // //   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

// // //   return <ServiceDetail service={service} category={category} />;
// // // };

// // // export default Services;











// // import React, { useEffect, useRef, useState } from "react";
// // import { Link, useParams } from "react-router-dom";
// // import { AnimatePresence, motion, useScroll } from "framer-motion";
// // import {
// //   ArrowRight,
// //   Banknote,
// //   Bell,
// //   BadgeCheck,
// //   BarChart3,
// //   Building2,
// //   CheckCircle2,
// //   ChevronDown,
// //   ChevronUp,
// //   ClipboardList,
// //   Code2,
// //   CreditCard,
// //   FileText,
// //   Fingerprint,
// //   Headphones,
// //   Landmark,
// //   LayoutDashboard,
// //   LockKeyhole,
// //   Plane,
// //   QrCode,
// //   Rocket,
// //   ShieldCheck,
// //   Smartphone,
// //   TrendingUp,
// //   UsersRound,
// //   WalletCards,
// //   Zap,
// // } from "lucide-react";
// // import servicesData from "./Servicesdata.json";

// // /* ------------------------------------------------------------------ */
// // /* Design tokens (kept local so nothing outside this file is touched) */
// // /* ------------------------------------------------------------------ */
// // const BRAND = "#14B8A6"; // primary teal accent
// // const BRAND_RGB = "20,184,166"; // rgba helper for BRAND
// // const BRAND_SOFT = "rgba(20,184,166,0.10)";
// // const INK = "#0B1220"; // near-black heading colour
// // const MUTED = "#5B6B84"; // body copy grey

// // const groupDefinitions = [
// //   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
// //   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
// //   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
// //   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
// //   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// // ];

// // const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// // const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// // /* ------------------------------------------------------------------ */
// // /* Shared scroll-reveal animation variants                            */
// // /* ------------------------------------------------------------------ */
// // const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// // const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// // /* ------------------------------------------------------------------ */
// // /* Aurora Glow Background — soft, slowly-drifting teal blobs          */
// // /* NOTE: also used on the (untouched) service detail page — left as-is */
// // /* ------------------------------------------------------------------ */
// // const AuroraGlowBackground = () => (
// //   <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
// //     <motion.div
// //       className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
// //       style={{ backgroundColor: "rgba(20,184,166,0.28)" }}
// //       animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
// //       transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
// //     />
// //     <motion.div
// //       className="absolute -right-24 top-4 h-[22rem] w-[22rem] rounded-full blur-3xl"
// //       style={{ backgroundColor: "rgba(45,212,191,0.22)" }}
// //       animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
// //       transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
// //     />
// //     <motion.div
// //       className="absolute left-1/3 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full blur-3xl"
// //       style={{ backgroundColor: "rgba(14,165,233,0.14)" }}
// //       animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
// //       transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
// //     />
// //   </div>
// // );

// // /* ------------------------------------------------------------------ */
// // /* Tiny inline sparkline used in the dark stats strip                 */
// // /* ------------------------------------------------------------------ */
// // const Sparkline = ({ points, color = "#5EEAD4" }) => {
// //   const width = 64;
// //   const height = 22;
// //   const max = Math.max(...points);
// //   const min = Math.min(...points);
// //   const step = width / (points.length - 1);
// //   const path = points
// //     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min || 1)) * height).toFixed(1)}`)
// //     .join(" ");
// //   return (
// //     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
// //       <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // };

// // /* ------------------------------------------------------------------ */
// // /* Category card — icon tile, bold title, quiet description, cta dot  */
// // /* ------------------------------------------------------------------ */
// // const CategoryCard = ({ title, description, Icon }) => (
// //   <a
// //     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
// //     className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/40 hover:shadow-[0_14px_34px_rgba(20,184,166,0.16)]"
// //   >
// //     <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// //       <Icon size={18} strokeWidth={1.8} />
// //     </div>

// //     <h3 className="mt-3 text-[14px] font-black tracking-[-0.01em] leading-snug" style={{ color: INK }}>
// //       {title}
// //     </h3>

// //     <p className="mt-1 flex-1 text-[11.5px] leading-5" style={{ color: MUTED }}>
// //       {description}
// //     </p>

// //     <span
// //       className="mt-3 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-transparent group-hover:bg-[#14B8A6] group-hover:text-white"
// //       style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// //     >
// //       <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
// //     </span>
// //   </a>
// // );

// // /* ------------------------------------------------------------------ */
// // /* Individual service tile inside a category row                      */
// // /* ------------------------------------------------------------------ */
// // const ServiceItem = ({ service, index }) => {
// //   const Icon = serviceIcons[index % serviceIcons.length];
// //   return (
// //     <Link
// //       to={`/services/${service.id}`}
// //       className="group flex flex-col gap-1.5 rounded-xl border border-slate-100 bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#14B8A6]/30 hover:shadow-md"
// //     >
// //       <div
// //         className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
// //         style={{ backgroundColor: BRAND_SOFT, color: BRAND }}
// //       >
// //         <Icon size={15} strokeWidth={1.8} />
// //       </div>
// //       <h4 className="line-clamp-2 text-[14px] font-black tracking-tight leading-snug" style={{ color: INK }}>
// //         {service.name.replaceAll("â€“", "–")}
// //       </h4>
// //       <p className="line-clamp-2 text-[12px] leading-4" style={{ color: MUTED }}>
// //         {service.description}
// //       </p>
// //     </Link>
// //   );
// // };

// // /* ------------------------------------------------------------------ */
// // /* One category row: sidebar label + grid of its services             */
// // /* ------------------------------------------------------------------ */
// // const ServiceRow = ({ group }) => {
// //   const [showAllServices, setShowAllServices] = useState(false);
// //   const Icon = group.icon;

// //   const serviceMap = new Map(servicesData.map((service) => [service.id, service]));
// //   const services = group.ids.map((id) => serviceMap.get(id)).filter(Boolean);

// //   return (
// //     <motion.section
// //       id={group.title.toLowerCase().replace(/\s+/g, "-")}
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true, amount: 0.2 }}
// //       variants={fadeInUp}
// //       className="flex flex-col gap-3 border-b border-slate-100 py-4 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
// //     >
// //       <div
// //         className={`flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 transition-colors duration-200 lg:w-48 lg:flex-col lg:items-start lg:justify-center ${
// //           showAllServices ? "border-[#14B8A6] bg-[#14B8A6]/5" : "border-transparent hover:border-[#14B8A6]/25 hover:bg-slate-50"
// //         }`}
// //       >
// //         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(20,184,166,0.12)", color: BRAND }}>
// //           <Icon size={16} />
// //         </div>

// //         <div className="flex-1 lg:flex-none">
// //           <h2 className="text-[15px] font-black tracking-tight" style={{ color: INK }}>
// //             {group.title}
// //           </h2>

// //           <button
// //             type="button"
// //             onClick={() => setShowAllServices(!showAllServices)}
// //             className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold transition"
// //             style={{ color: BRAND }}
// //           >
// //             {showAllServices ? "View Less" : "View All"}
// //             {showAllServices ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
// //           </button>
// //         </div>
// //       </div>

// //       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
// //         {services.length ? (
// //           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
// //             <ServiceItem key={service.id} service={service} index={index} />
// //           ))
// //         ) : (
// //           <div className="col-span-full flex h-20 items-center justify-center text-xs" style={{ color: MUTED }}>
// //             No services available.
// //           </div>
// //         )}
// //       </div>
// //     </motion.section>
// //   );
// // };

// // /* ------------------------------------------------------------------ */
// // /* Scroll-pinned hero story data                                      */
// // /* Each entry drives: left copy, dashboard stats, chart, a live entry */
// // /* list, and a notification toast — one per service category.         */
// // /* ------------------------------------------------------------------ */
// // const sidebarNavIcons = [LayoutDashboard, BarChart3, WalletCards, ClipboardList, FileText, UsersRound];

// // const heroBars = [
// //   { a: 55, b: 35 }, { a: 70, b: 50 }, { a: 45, b: 60 }, { a: 80, b: 55 }, { a: 60, b: 40 },
// //   { a: 90, b: 65 }, { a: 50, b: 45 }, { a: 75, b: 50 }, { a: 65, b: 55 },
// // ];

// // const heroStories = [
// //   {
// //     index: 0,
// //     icon: WalletCards,
// //     title: "Payment Solutions",
// //     heading: (
// //       <>
// //         Collect Payments <span style={{ color: BRAND }}>From Anywhere</span>
// //       </>
// //     ),
// //     description: "QR codes, sound box, POS devices and payment gateways — accept money in seconds, wherever your customers are.",
// //     dashboardSubtitle: "Here's what's happening today",
// //     chartLabel: "Revenue Overview",
// //     listLabel: "Recent Settlements",
// //     stats: [
// //       { label: "Total Revenue", value: 18.2, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "23.5%" },
// //       { label: "Transactions", value: 124820, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "18.7%" },
// //       { label: "Success Rate", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.6%" },
// //     ],
// //     chartData: heroBars,
// //     entries: [
// //       { icon: Banknote, title: "₹1,24,500", meta: "Settled · Today, 10:30 AM" },
// //       { icon: Banknote, title: "₹87,500", meta: "Settled · Today, 09:15 AM" },
// //     ],
// //     notification: { icon: QrCode, title: "₹5,200 received via UPI", time: "Just now" },
// //   },
// //   {
// //     index: 1,
// //     icon: Landmark,
// //     title: "Banking Services",
// //     heading: (
// //       <>
// //         Banking Services, <span style={{ color: BRAND }}>Right Next Door</span>
// //       </>
// //     ),
// //     description: "AEPS, Micro ATM, BBPS bill payments and cash management — bring the branch to your customer's doorstep.",
// //     dashboardSubtitle: "Banking desk overview",
// //     chartLabel: "AEPS Volume",
// //     listLabel: "Recent Withdrawals",
// //     stats: [
// //       { label: "AEPS Volume", value: 6.4, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "15.2%" },
// //       { label: "Bills Paid", value: 48300, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "12.4%" },
// //       { label: "Active Kiosks", value: 2180, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "9.1%" },
// //     ],
// //     chartData: [
// //       { a: 40, b: 30 }, { a: 55, b: 45 }, { a: 35, b: 50 }, { a: 65, b: 40 }, { a: 50, b: 35 },
// //       { a: 75, b: 55 }, { a: 45, b: 40 }, { a: 60, b: 45 }, { a: 52, b: 38 },
// //     ],
// //     entries: [
// //       { icon: Landmark, title: "₹2,400 withdrawn", meta: "AEPS · 2 min ago" },
// //       { icon: Landmark, title: "₹1,150 bill paid", meta: "BBPS · 6 min ago" },
// //     ],
// //     notification: { icon: Fingerprint, title: "AEPS withdrawal ₹2,400 done", time: "Just now" },
// //   },
// //   {
// //     index: 2,
// //     icon: Banknote,
// //     title: "Financial Services",
// //     heading: (
// //       <>
// //         Fuel Growth With <span style={{ color: BRAND }}>Smart Lending</span>
// //       </>
// //     ),
// //     description: "Business loans, personal loans and insurance — sourced and approved with fully digital onboarding.",
// //     dashboardSubtitle: "Lending desk overview",
// //     chartLabel: "Loans Disbursed",
// //     listLabel: "Recent Approvals",
// //     stats: [
// //       { label: "Loans Disbursed", value: 42.6, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "31.2%" },
// //       { label: "Applications", value: 8940, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "22.5%" },
// //       { label: "Approval Rate", value: 87, format: (v) => `${v.toFixed(0)}%`, delta: "4.1%" },
// //     ],
// //     chartData: [
// //       { a: 30, b: 20 }, { a: 45, b: 35 }, { a: 60, b: 40 }, { a: 50, b: 55 }, { a: 70, b: 45 },
// //       { a: 55, b: 60 }, { a: 80, b: 50 }, { a: 65, b: 55 }, { a: 75, b: 60 },
// //     ],
// //     entries: [
// //       { icon: Banknote, title: "₹2,00,000 approved", meta: "Business loan · 3 min ago" },
// //       { icon: ShieldCheck, title: "Policy issued", meta: "Health insurance · 9 min ago" },
// //     ],
// //     notification: { icon: BadgeCheck, title: "Loan approved for ₹2,00,000", time: "Just now" },
// //   },
// //   {
// //     index: 3,
// //     icon: Plane,
// //     title: "Travel Services",
// //     heading: (
// //       <>
// //         Book Journeys, <span style={{ color: BRAND }}>Earn Commissions</span>
// //       </>
// //     ),
// //     description: "Flights, trains, buses and hotels — a complete booking engine that pays you on every ticket.",
// //     dashboardSubtitle: "Travel desk overview",
// //     chartLabel: "Bookings Overview",
// //     listLabel: "Recent Bookings",
// //     stats: [
// //       { label: "Bookings", value: 15720, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "19.8%" },
// //       { label: "Commission", value: 38.5, format: (v) => `₹${v.toFixed(1)} L`, delta: "27.6%" },
// //       { label: "Avg. Value", value: 4850, format: (v) => `₹${Math.round(v).toLocaleString("en-IN")}`, delta: "6.2%" },
// //     ],
// //     chartData: [
// //       { a: 50, b: 35 }, { a: 40, b: 55 }, { a: 65, b: 45 }, { a: 55, b: 35 }, { a: 70, b: 50 },
// //       { a: 45, b: 60 }, { a: 60, b: 40 }, { a: 80, b: 55 }, { a: 50, b: 45 },
// //     ],
// //     entries: [
// //       { icon: Plane, title: "DEL → BOM booked", meta: "Flight · 1 min ago" },
// //       { icon: Building2, title: "Hotel confirmed", meta: "Goa · 8 min ago" },
// //     ],
// //     notification: { icon: Plane, title: "Flight booked: DEL → BOM", time: "Just now" },
// //   },
// //   {
// //     index: 4,
// //     icon: Code2,
// //     title: "Technology Solutions",
// //     heading: (
// //       <>
// //         Build, Scale <span style={{ color: BRAND }}>and Automate</span>
// //       </>
// //     ),
// //     description: "APIs, merchant dashboards and white-label platforms — the technology backbone for your business.",
// //     dashboardSubtitle: "Developer console overview",
// //     chartLabel: "API Traffic",
// //     listLabel: "Recent Activity",
// //     stats: [
// //       { label: "API Calls/Day", value: 2.4, format: (v) => `${v.toFixed(1)}M`, delta: "34.7%" },
// //       { label: "Uptime", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.1%" },
// //       { label: "Integrations", value: 640, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "11.3%" },
// //     ],
// //     chartData: [
// //       { a: 60, b: 40 }, { a: 75, b: 50 }, { a: 55, b: 65 }, { a: 85, b: 55 }, { a: 65, b: 45 },
// //       { a: 90, b: 60 }, { a: 70, b: 50 }, { a: 80, b: 65 }, { a: 72, b: 52 },
// //     ],
// //     entries: [
// //       { icon: Code2, title: "API key generated", meta: "Sandbox · 4 min ago" },
// //       { icon: LayoutDashboard, title: "Dashboard deployed", meta: "White-label · 12 min ago" },
// //     ],
// //     notification: { icon: Zap, title: "New API key generated", time: "Just now" },
// //   },
// // ];

// // /* ------------------------------------------------------------------ */
// // /* Count-up number helper — animates from the previous value to the   */
// // /* next whenever `value` changes (i.e. whenever the active story does)*/
// // /* ------------------------------------------------------------------ */
// // const useCountUp = (target, duration = 900) => {
// //   const [display, setDisplay] = useState(target);
// //   const fromRef = useRef(target);

// //   useEffect(() => {
// //     const from = fromRef.current;
// //     const to = target;
// //     if (from === to) return undefined;

// //     let rafId;
// //     let start;

// //     const tick = (timestamp) => {
// //       if (start === undefined) start = timestamp;
// //       const elapsed = timestamp - start;
// //       const progress = Math.min(elapsed / duration, 1);
// //       const eased = 1 - Math.pow(1 - progress, 3);
// //       setDisplay(from + (to - from) * eased);
// //       if (progress < 1) {
// //         rafId = requestAnimationFrame(tick);
// //       } else {
// //         fromRef.current = to;
// //       }
// //     };

// //     rafId = requestAnimationFrame(tick);
// //     return () => cancelAnimationFrame(rafId);
// //   }, [target, duration]);

// //   return display;
// // };

// // const AnimatedNumber = ({ value, format }) => {
// //   const display = useCountUp(value);
// //   return <>{format(display)}</>;
// // };

// // /* ------------------------------------------------------------------ */
// // /* Story-driven dashboard mock — same chrome as before, but every      */
// // /* number, bar, list row and toast is sourced from the active story   */
// // /* ------------------------------------------------------------------ */
// // const StoryDashboardMock = ({ story, showNotification }) => (
// //   <motion.div
// //     initial={{ opacity: 0, y: 26 }}
// //     animate={{ opacity: 1, y: 0 }}
// //     transition={{ duration: 0.6, delay: 0.1 }}
// //     className="relative mx-auto w-full max-w-md"
// //   >
// //     <div className="flex overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
// //       <div className="hidden w-14 shrink-0 flex-col items-center gap-4 py-4 sm:flex" style={{ backgroundColor: INK }}>
// //         <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// //           <Fingerprint size={14} />
// //         </div>
// //         <div className="mt-2 flex flex-col items-center gap-3">
// //           {sidebarNavIcons.map((Icon, i) => (
// //             <span
// //               key={i}
// //               className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-300"
// //               style={i === story.index ? { backgroundColor: BRAND, color: "#fff" } : { color: "rgba(255,255,255,0.4)" }}
// //             >
// //               <Icon size={13} />
// //             </span>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="flex-1 p-4">
// //         <div className="flex items-start justify-between">
// //           <div>
// //             <p className="text-[12px] font-black" style={{ color: INK }}>Hello, Abheepay Merchant 👋</p>
// //             <p className="text-[9px]" style={{ color: MUTED }}>{story.dashboardSubtitle}</p>
// //           </div>
// //           <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50" style={{ color: MUTED }}>
// //             <Bell size={12} />
// //           </span>
// //         </div>

// //         <div className="mt-3 grid grid-cols-3 gap-2">
// //           {story.stats.map((stat) => (
// //             <div key={stat.label} className="rounded-lg border border-slate-100 p-2">
// //               <p className="text-[7.5px] font-semibold" style={{ color: MUTED }}>{stat.label}</p>
// //               <p className="mt-0.5 text-[11px] font-black" style={{ color: INK }}>
// //                 <AnimatedNumber value={stat.value} format={stat.format} />
// //               </p>
// //               <p className="mt-0.5 text-[7.5px] font-bold text-emerald-500">↑ {stat.delta}</p>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
// //           <div className="flex items-center justify-between">
// //             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.chartLabel}</p>
// //             <div className="flex items-center gap-2 text-[7px]" style={{ color: MUTED }}>
// //               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />This Month</span>
// //               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-slate-300" />Last Month</span>
// //             </div>
// //           </div>
// //           <div className="mt-2 flex h-14 items-end gap-1.5">
// //             {story.chartData.map((bar, i) => (
// //               <div key={i} className="flex flex-1 items-end gap-[2px]">
// //                 <div className="w-full rounded-sm transition-all duration-700 ease-out" style={{ height: `${bar.a}%`, backgroundColor: BRAND }} />
// //                 <div className="w-full rounded-sm bg-slate-200 transition-all duration-700 ease-out" style={{ height: `${bar.b}%` }} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
// //           <div className="flex items-center justify-between">
// //             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.listLabel}</p>
// //             <span className="text-[8px] font-bold" style={{ color: BRAND }}>View All</span>
// //           </div>
// //           <div className="mt-1.5 space-y-1.5">
// //             {story.entries.map((entry) => (
// //               <div key={entry.title} className="flex items-center justify-between text-[8px]">
// //                 <span className="flex items-center gap-1.5" style={{ color: INK }}>
// //                   <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// //                     <entry.icon size={10} />
// //                   </span>
// //                   <b>{entry.title}</b>
// //                 </span>
// //                 <span style={{ color: MUTED }}>{entry.meta}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //     <div
// //       className="absolute -bottom-4 -left-4 hidden items-center gap-1.5 rounded-xl px-3 py-2 text-white shadow-lg sm:flex"
// //       style={{ backgroundColor: INK }}
// //     >
// //       <LockKeyhole size={12} />
// //       <span className="text-[9px] font-bold">Bank-grade security</span>
// //     </div>

// //     <AnimatePresence>
// //       {showNotification && (
// //         <motion.div
// //           key={story.title}
// //           initial={{ opacity: 0, x: 18, y: -8, scale: 0.92 }}
// //           animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
// //           exit={{ opacity: 0, x: 18, scale: 0.92 }}
// //           transition={{ duration: 0.35, ease: "easeOut" }}
// //           className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:-right-8"
// //         >
// //           <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// //             <story.notification.icon size={13} />
// //           </span>
// //           <span>
// //             <b className="block text-[10px]" style={{ color: INK }}>{story.notification.title}</b>
// //             <span className="text-[8px]" style={{ color: MUTED }}>{story.notification.time}</span>
// //           </span>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   </motion.div>
// // );

// // /* ------------------------------------------------------------------ */
// // /* Scroll-pinned hero — the section stays fixed on screen while the   */
// // /* user scrolls through it; every story below drives new left copy,   */
// // /* dashboard numbers, chart bars and a notification toast.            */
// // /* ------------------------------------------------------------------ */
// // const ScrollStoryHero = () => {
// //   const containerRef = useRef(null);
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const [showNotification, setShowNotification] = useState(false);

// //   const { scrollYProgress } = useScroll({
// //     target: containerRef,
// //     offset: ["start start", "end end"],
// //   });

// //   useEffect(() => {
// //     const unsubscribe = scrollYProgress.on("change", (v) => {
// //       const raw = Math.min(v, 0.999) * heroStories.length;
// //       const idx = Math.max(0, Math.min(heroStories.length - 1, Math.floor(raw)));
// //       const local = raw - idx;
// //       setActiveIndex((prev) => (prev === idx ? prev : idx));
// //       setShowNotification(local > 0.3 && local < 0.85);
// //     });
// //     return unsubscribe;
// //   }, [scrollYProgress]);

// //   const story = heroStories[activeIndex];

// //   return (
// //     <div ref={containerRef} className="relative" style={{ height: `${heroStories.length * 100}vh` }}>
// //       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
// //         <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
// //           <div>
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={story.title}
// //                 initial={{ opacity: 0, y: 18 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -18 }}
// //                 transition={{ duration: 0.4, ease: "easeOut" }}
// //               >
// //                 <span
// //                   className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold"
// //                   style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// //                 >
// //                   <story.icon size={11} /> {story.title}
// //                 </span>

// //                 <h1
// //                   className="mt-4 max-w-lg text-[2rem] font-black leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[2.7rem]"
// //                   style={{ color: INK }}
// //                 >
// //                   {story.heading}
// //                 </h1>

// //                 <p className="mt-4 max-w-md text-[13px] leading-6 sm:text-sm" style={{ color: MUTED }}>
// //                   {story.description}
// //                 </p>
// //               </motion.div>
// //             </AnimatePresence>

// //             <div className="mt-6 flex flex-wrap gap-2.5">
// //               <Link
// //                 to="/contact"
// //                 className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
// //                 style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(20,184,166,0.30)" }}
// //               >
// //                 Get Started <ArrowRight size={12} />
// //               </Link>
// //               <Link
// //                 to="/contact"
// //                 className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
// //                 style={{ borderColor: BRAND, color: BRAND }}
// //               >
// //                 Book a Demo
// //               </Link>
// //             </div>

// //             <div className="mt-8 flex items-center gap-2">
// //               {heroStories.map((s, i) => (
// //                 <span
// //                   key={s.title}
// //                   className="h-1.5 rounded-full transition-all duration-500"
// //                   style={{ width: i === activeIndex ? 28 : 10, backgroundColor: i === activeIndex ? BRAND : "rgba(20,184,166,0.2)" }}
// //                 />
// //               ))}
// //             </div>
// //           </div>

// //           <StoryDashboardMock story={story} showNotification={showNotification} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // /* ------------------------------------------------------------------ */
// // /* Trust strip — generic wordmarks (no real third-party logos)        */
// // /* ------------------------------------------------------------------ */
// // const trustMarks = ["Vertex Retail", "Nimbus Mart", "Orbit Foods", "Northstar Traders", "Lumen Café", "Rapidcart"];

// // /* ------------------------------------------------------------------ */
// // /* Dark stat strip with sparklines                                    */
// // /* ------------------------------------------------------------------ */
// // const statHighlights = [
// //   { Icon: Building2, value: "10,000+", label: "Active Merchants", trend: "24% this year", points: [4, 6, 5, 8, 7, 10, 9, 12] },
// //   { Icon: WalletCards, value: "₹500 Cr+", label: "Monthly Volume", trend: "18% vs last month", points: [5, 5, 7, 6, 9, 8, 11, 12] },
// //   { Icon: ShieldCheck, value: "99.99%", label: "System Uptime", trend: "0.5% this month", points: [9, 9, 9, 10, 9, 10, 10, 10] },
// //   { Icon: Headphones, value: "24×7", label: "Customer Support", trend: "Always here for you", points: [6, 7, 6, 8, 7, 9, 8, 9] },
// // ];

// // /* ------------------------------------------------------------------ */
// // /* Live transactions panel data                                       */
// // /* ------------------------------------------------------------------ */
// // const liveTransactions = [
// //   { method: "UPI", amount: "₹5,200", from: "Rahul Kumar", time: "2 sec ago" },
// //   { method: "VISA", amount: "₹12,850", from: "Amazon Pay", time: "5 sec ago" },
// //   { method: "AEPS", amount: "₹2,400", from: "Customer", time: "8 sec ago" },
// //   { method: "UPI", amount: "₹8,950", from: "PhonePe", time: "12 sec ago" },
// //   { method: "MC", amount: "₹1,650", from: "Credit Card", time: "15 sec ago" },
// // ];

// // const methodStyles = {
// //   UPI: { bg: BRAND_SOFT, color: BRAND },
// //   VISA: { bg: "rgba(11,18,32,0.08)", color: INK },
// //   AEPS: { bg: "rgba(20,184,166,0.16)", color: "#0F9488" },
// //   MC: { bg: "rgba(249,115,22,0.12)", color: "#EA580C" },
// // };

// // /* ------------------------------------------------------------------ */
// // /* Platform feature list                                              */
// // /* ------------------------------------------------------------------ */
// // const platformFeatures = [
// //   { Icon: Zap, title: "Easy Integration", desc: "Quick setup with developer-friendly APIs" },
// //   { Icon: BarChart3, title: "Real-time Analytics", desc: "Track performance with advanced insights" },
// //   { Icon: ShieldCheck, title: "Secure & Compliant", desc: "Bank-grade security with RBI compliance" },
// //   { Icon: TrendingUp, title: "Scalable Infrastructure", desc: "Built to handle billions of transactions" },
// // ];

// // /* ------------------------------------------------------------------ */
// // /* Floating "Total Collection" mock beside the feature list           */
// // /* ------------------------------------------------------------------ */
// // const collectionBars = [30, 55, 40, 70, 50, 85, 60, 95, 65];

// // const TotalCollectionMock = () => (
// //   <div className="relative mx-auto hidden w-full max-w-[15rem] lg:block">
// //     <motion.div
// //       initial={{ opacity: 0, y: 24, rotate: -3 }}
// //       whileInView={{ opacity: 1, y: 0, rotate: -3 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.5 }}
// //       className="rounded-2xl p-4 text-white shadow-xl"
// //       style={{ backgroundColor: BRAND }}
// //     >
// //       <p className="text-[10px] font-semibold text-white/80">Total Collection</p>
// //       <p className="mt-1 flex items-center gap-1 text-xl font-black">
// //         ₹18,20,450 <span className="text-[10px] font-bold text-white/80">↑ 23.5%</span>
// //       </p>
// //       <div className="mt-3 flex h-14 items-end gap-1">
// //         {collectionBars.map((h, i) => (
// //           <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />
// //         ))}
// //       </div>
// //       <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2 text-[10px]">
// //         <span>
// //           <b className="block text-[12px]">1,24,820</b>
// //           <span className="text-white/70">Transactions</span>
// //         </span>
// //         <span className="text-right">
// //           <b className="block text-[12px]">99.99%</b>
// //           <span className="text-white/70">Success Rate</span>
// //         </span>
// //       </div>
// //     </motion.div>

// //     <div className="absolute -right-6 top-6 flex flex-col gap-2">
// //       {["UPI", "VISA", "RuPay"].map((label, i) => (
// //         <motion.span
// //           key={label}
// //           initial={{ opacity: 0, x: 12 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.15 + i * 0.08 }}
// //           className="rounded-lg border border-slate-100 bg-white px-2.5 py-1.5 text-[9px] font-black shadow-md"
// //           style={{ color: INK }}
// //         >
// //           {label}
// //         </motion.span>
// //       ))}
// //     </div>
// //   </div>
// // );

// // /* ------------------------------------------------------------------ */
// // /* Business overview mock for the closing CTA                         */
// // /* ------------------------------------------------------------------ */
// // const revenueTrend = [10, 22, 16, 30, 24, 38, 32, 46, 40, 55, 48, 62];
// // const paymentModes = [
// //   { label: "UPI", value: 45, color: "#5EEAD4" },
// //   { label: "Cards", value: 30, color: BRAND },
// //   { label: "Wallets", value: 15, color: "#0F9488" },
// //   { label: "Net Banking", value: 10, color: "#134E4A" },
// // ];

// // const RevenueTrendLine = () => {
// //   const width = 220;
// //   const height = 60;
// //   const max = Math.max(...revenueTrend);
// //   const min = Math.min(...revenueTrend);
// //   const step = width / (revenueTrend.length - 1);
// //   const path = revenueTrend
// //     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min)) * height).toFixed(1)}`)
// //     .join(" ");
// //   return (
// //     <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
// //       <path d={path} fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //     </svg>
// //   );
// // };

// // const PaymentModesDonut = () => {
// //   let cumulative = 0;
// //   const stops = paymentModes
// //     .map((mode) => {
// //       const start = cumulative;
// //       cumulative += mode.value;
// //       return `${mode.color} ${start}% ${cumulative}%`;
// //     })
// //     .join(", ");
// //   return (
// //     <div className="flex items-center gap-3">
// //       <div className="h-16 w-16 shrink-0 rounded-full" style={{ background: `conic-gradient(${stops})` }}>
// //         <div className="m-[6px] flex h-[calc(100%-12px)] w-[calc(100%-12px)] items-center justify-center rounded-full" style={{ backgroundColor: INK }} />
// //       </div>
// //       <div className="space-y-1">
// //         {paymentModes.map((mode) => (
// //           <div key={mode.label} className="flex items-center gap-1.5 text-[9px] text-white/70">
// //             <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: mode.color }} />
// //             {mode.label} <span className="font-bold text-white">{mode.value}%</span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // /* ------------------------------------------------------------------ */
// // /* Services list / landing page                                        */
// // /* ------------------------------------------------------------------ */
// // const ServiceList = () => {
// //   return (
// //     <main id="top" className="bg-[#fbfcff] pb-6 font-sans" style={{ color: INK }}>
// //       {/* ---------------------------------------------------------------- HERO (scroll-pinned story) */}
// //       <section className="relative isolate border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white">
// //         <AuroraGlowBackground />
// //         <ScrollStoryHero />
// //       </section>

// //       {/* ---------------------------------------------------------------- TRUST STRIP */}
// //       <section className="border-b border-slate-100 bg-white py-6">
// //         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
// //           <p className="text-center text-[11px] font-semibold" style={{ color: MUTED }}>
// //             Trusted by <span className="font-black" style={{ color: BRAND }}>10,000+ businesses</span> across India
// //           </p>
// //           <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
// //             {trustMarks.map((name) => (
// //               <span key={name} className="text-sm font-black tracking-tight opacity-60" style={{ color: INK }}>
// //                 {name}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
// //         {/* ------------------------------------------------------------ SERVICE CATEGORIES */}
// //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mb-4">
// //           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// //             Our Services
// //           </p>
// //           <div className="mt-1.5 flex items-center justify-between">
// //             <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
// //               Explore Our Service Categories
// //             </h2>
// //             <a href="#payment-solutions" className="hidden text-[11px] font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: BRAND }}>
// //               Explore All Services <ArrowRight size={10} />
// //             </a>
// //           </div>
// //         </motion.div>

// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.15 }}
// //           variants={staggerContainer}
// //           className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
// //         >
// //           {groupDefinitions.map((group) => (
// //             <motion.div key={group.title} variants={fadeInUp}>
// //               <CategoryCard title={group.title} description={group.description} Icon={group.icon} />
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* ------------------------------------------------------------ DARK STAT STRIP */}
// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.3 }}
// //           variants={fadeInUp}
// //           className="mt-6 grid overflow-hidden rounded-2xl text-white sm:grid-cols-2 lg:grid-cols-4"
// //           style={{ backgroundColor: INK }}
// //         >
// //           {statHighlights.map(({ Icon, value, label, trend, points }) => (
// //             <div key={label} className="flex items-center justify-between gap-3 border-white/10 p-4 sm:border-r last:border-r-0">
// //               <div className="flex items-center gap-2.5">
// //                 <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: "#5EEAD4" }}>
// //                   <Icon size={15} />
// //                 </span>
// //                 <span>
// //                   <b className="block text-sm">{value}</b>
// //                   <small className="text-[9px] text-slate-300">{label}</small>
// //                 </span>
// //               </div>
// //               <div className="hidden flex-col items-end gap-0.5 sm:flex">
// //                 <Sparkline points={points} />
// //                 <span className="text-[8px] font-semibold text-emerald-400">↑ {trend}</span>
// //               </div>
// //             </div>
// //           ))}
// //         </motion.section>

// //         {/* ------------------------------------------------------------ LIVE TRANSACTIONS + PLATFORM FEATURES */}
// //         <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
// //           <motion.div
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.2 }}
// //             variants={fadeInUp}
// //             className="rounded-2xl border border-slate-200 bg-white p-4"
// //           >
// //             <div className="flex items-center justify-between">
// //               <h3 className="text-[13px] font-black" style={{ color: INK }}>Live Transactions</h3>
// //               <span className="text-[10px] font-bold" style={{ color: BRAND }}>View All</span>
// //             </div>
// //             <div className="mt-3 divide-y divide-slate-100">
// //               {liveTransactions.map((tx, i) => {
// //                 const style = methodStyles[tx.method] || methodStyles.UPI;
// //                 return (
// //                   <div key={i} className="flex items-center justify-between gap-3 py-2.5">
// //                     <div className="flex items-center gap-2.5">
// //                       <span
// //                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-black"
// //                         style={{ backgroundColor: style.bg, color: style.color }}
// //                       >
// //                         {tx.method}
// //                       </span>
// //                       <span>
// //                         <b className="block text-[12px]" style={{ color: INK }}>{tx.amount}</b>
// //                         <span className="text-[10px]" style={{ color: MUTED }}>From {tx.from}</span>
// //                       </span>
// //                     </div>
// //                     <span className="text-right">
// //                       <span className="block text-[10px] font-bold text-emerald-500">Success</span>
// //                       <span className="text-[9px]" style={{ color: MUTED }}>{tx.time}</span>
// //                     </span>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //             <p className="mt-3 flex items-center gap-1.5 text-[10px]" style={{ color: MUTED }}>
// //               <LockKeyhole size={10} /> All transactions are secure and encrypted
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.2 }}
// //             variants={fadeInUp}
// //             className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]"
// //           >
// //             <div>
// //               <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// //                 One Platform. Endless Possibilities.
// //               </p>
// //               <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] leading-tight" style={{ color: INK }}>
// //                 Everything You Need, <span style={{ color: BRAND }}>All in One Platform</span>
// //               </h2>
// //               <p className="mt-3 text-[13px] leading-6" style={{ color: MUTED }}>
// //                 From payments to banking, lending to travel — manage your entire business
// //                 financial ecosystem from a single, powerful platform.
// //               </p>

// //               <div className="mt-5 space-y-3.5">
// //                 {platformFeatures.map(({ Icon, title, desc }) => (
// //                   <div key={title} className="flex items-start gap-2.5">
// //                     <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
// //                       <Icon size={13} />
// //                     </span>
// //                     <span>
// //                       <b className="block text-[12.5px] font-bold" style={{ color: INK }}>{title}</b>
// //                       <span className="text-[11.5px]" style={{ color: MUTED }}>{desc}</span>
// //                     </span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <TotalCollectionMock />
// //           </motion.div>
// //         </div>

// //         {/* ------------------------------------------------------------ SERVICE ROWS (real links) */}
// //         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mt-8">
// //           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
// //             Unified Experience
// //           </p>
// //           <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
// //             Every Service, <span style={{ color: BRAND }}>At Your Fingertips</span>
// //           </h2>
// //         </motion.div>

// //         <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-2">
// //           {groupDefinitions.map((group) => (
// //             <ServiceRow key={group.title} group={group} />
// //           ))}
// //         </div>

// //         {/* ------------------------------------------------------------ CLOSING CTA */}
// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.3 }}
// //           variants={fadeInUp}
// //           className="relative mt-8 overflow-hidden rounded-2xl px-5 py-8 text-white sm:px-8"
// //           style={{ backgroundColor: INK }}
// //         >
// //           <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
// //           <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
// //             <div>
// //               <p className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: "#5EEAD4" }}>
// //                 Get Started Today
// //               </p>
// //               <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] leading-tight sm:text-4xl">
// //                 Ready to Transform Your Business?
// //               </h2>
// //               <p className="mt-2 max-w-md text-[12px] text-white/70 sm:text-[13px]">
// //                 Join thousands of businesses already growing with our complete financial ecosystem.
// //               </p>
// //               <div className="mt-5 flex flex-wrap items-center gap-2.5">
// //                 <Link
// //                   to="/contact"
// //                   className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
// //                   style={{ backgroundColor: BRAND }}
// //                 >
// //                   Get Started <ArrowRight size={11} />
// //                 </Link>
// //                 <Link
// //                   to="/contact"
// //                   className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
// //                 >
// //                   Contact Sales
// //                 </Link>
// //               </div>
// //             </div>

// //             <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
// //               <div className="flex items-center justify-between">
// //                 <p className="text-[11px] font-bold">Business Overview</p>
// //                 <span className="text-[9px] text-white/60">This Month</span>
// //               </div>
// //               <div className="mt-3 grid grid-cols-3 gap-2">
// //                 {[
// //                   ["Total Revenue", "₹18.2 Cr", "23.5%"],
// //                   ["Transactions", "1,24,820", "18.7%"],
// //                   ["Success Rate", "99.99%", "0.6%"],
// //                 ].map(([label, value, delta]) => (
// //                   <div key={label} className="rounded-lg border border-white/10 p-2">
// //                     <p className="text-[8px] text-white/60">{label}</p>
// //                     <p className="text-[11px] font-black">{value}</p>
// //                     <p className="text-[8px] font-bold text-emerald-400">↑ {delta}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
// //                 <p className="text-[9px] font-bold text-white/80">Revenue Trend</p>
// //                 <div className="mt-1">
// //                   <RevenueTrendLine />
// //                 </div>
// //               </div>
// //               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
// //                 <p className="mb-2 text-[9px] font-bold text-white/80">Top Payment Modes</p>
// //                 <PaymentModesDonut />
// //               </div>
// //             </div>
// //           </div>
// //         </motion.section>
// //       </div>
// //     </main>
// //   );
// // };

// // /* ==================================================================== */
// // /* EVERYTHING BELOW THIS LINE IS UNCHANGED — the service detail page    */
// // /* ==================================================================== */

// // /* ------------------------------------------------------------------ */
// // /* Service detail page (unchanged logic, retouched palette)            */
// // /* ------------------------------------------------------------------ */
// // const ServiceDetail = ({ service, category }) => {
// //   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
// //   const features = service.features || [];
// //   const highlights = service.benefits || [];
// //   const categoryLabel = category || "Our Services";

// //   const nameWords = service.name.trim().split(" ");
// //   const lastWord = nameWords.pop();
// //   const restName = nameWords.join(" ");

// //   return (
// //     <div className="bg-white font-sans" style={{ color: INK }}>
// //       {/* Hero */}
// //       <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
// //         <AuroraGlowBackground />
// //         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
// //           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
// //             <motion.span
// //               variants={fadeInUp}
// //               className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
// //               style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
// //             >
// //               <FileText size={10} /> {categoryLabel}
// //             </motion.span>

// //             <motion.h1
// //               variants={fadeInUp}
// //               className="mt-3 text-[1.7rem] font-black leading-[1.1] sm:text-3xl md:text-[1.95rem]"
// //               style={{ color: INK }}
// //             >
// //               {restName ? `${restName} ` : ""}
// //               <span style={{ color: BRAND }}>{lastWord}</span>
// //             </motion.h1>

// //             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8" style={{ backgroundColor: BRAND }} />

// //             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5" style={{ color: MUTED }}>
// //               {service.longDescription || service.description}
// //             </motion.p>

// //             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
// //               <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// //                 <UsersRound size={10} />
// //               </span>
// //               <span>Abheepay Team &nbsp;•&nbsp; 2026</span>
// //             </motion.div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 30 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className="relative mx-auto w-full max-w-sm"
// //           >
// //             <div className="relative overflow-hidden rounded-2xl shadow-xl">
// //               <motion.img
// //                 whileHover={{ scale: 1.04 }}
// //                 transition={{ duration: 0.3 }}
// //                 src={mainImg}
// //                 alt={service.name}
// //                 className="h-48 w-full object-cover sm:h-60"
// //               />
// //               <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-black/50 to-transparent" />
// //             </div>

// //             {service.partner && (
// //               <div className="absolute -bottom-3 right-3 flex flex-col items-center gap-0.5 rounded-lg bg-white px-3 py-2 shadow-lg">
// //                 <p className="text-[8px] font-semibold" style={{ color: MUTED }}>In Partnership with</p>
// //                 {service.partner.logo ? (
// //                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
// //                 ) : (
// //                   <p className="text-xs font-black" style={{ color: INK }}>{service.partner.name}</p>
// //                 )}
// //               </div>
// //             )}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Solutions + Benefits */}
// //       <section className="mx-auto max-w-[54rem] px-3 py-9 sm:px-5 md:px-7 md:py-12">
// //         <div className="grid gap-6 md:grid-cols-3">
// //           <div className="md:col-span-2">
// //             <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
// //             <h2 className="mt-2 text-base font-black sm:text-lg" style={{ color: INK }}>
// //               Our {categoryLabel}
// //             </h2>

// //             {features.length ? (
// //               <motion.div
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //                 variants={staggerContainer}
// //                 className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
// //               >
// //                 {features.map((text, index) => {
// //                   const Icon = serviceIcons[index % serviceIcons.length];
// //                   return (
// //                     <motion.div
// //                       key={index}
// //                       variants={fadeInUp}
// //                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
// //                       style={{ borderColor: undefined }}
// //                     >
// //                       <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// //                         <Icon size={12} strokeWidth={1.7} />
// //                       </div>
// //                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug" style={{ color: "#1e293b" }}>{text}</p>
// //                       <div className="mt-2 flex justify-end">
// //                         <span
// //                           className="inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
// //                           style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
// //                         >
// //                           <ArrowRight size={9} />
// //                         </span>
// //                       </div>
// //                     </motion.div>
// //                   );
// //                 })}
// //               </motion.div>
// //             ) : (
// //               <p className="mt-4 text-[13px]" style={{ color: MUTED }}>More details coming soon.</p>
// //             )}
// //           </div>

// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.5 }}
// //             className="relative flex flex-col overflow-hidden rounded-xl p-4 text-white shadow-lg"
// //             style={{ backgroundColor: BRAND }}
// //           >
// //             <div className="pointer-events-none absolute -right-3 -top-3 grid grid-cols-6 gap-1 opacity-25">
// //               {Array.from({ length: 24 }).map((_, index) => (
// //                 <span key={index} className="h-1 w-1 rounded-full bg-white" />
// //               ))}
// //             </div>

// //             <h2 className="text-sm font-black tracking-tight">Benefits</h2>
// //             <div className="mt-1.5 h-[2px] w-7 bg-white/70" />

// //             <div className="mt-3.5 space-y-3">
// //               {highlights.length ? (
// //                 highlights.map((benefit, index) => {
// //                   const Icon = benefitIcons[index % benefitIcons.length];
// //                   return (
// //                     <motion.div
// //                       key={index}
// //                       initial={{ opacity: 0, x: -15 }}
// //                       whileInView={{ opacity: 1, x: 0 }}
// //                       viewport={{ once: true }}
// //                       transition={{ delay: index * 0.05 }}
// //                     >
// //                       <div className="flex items-start gap-2">
// //                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: BRAND }}>
// //                           <Icon size={11} />
// //                         </span>
// //                         <p className="pt-0.5 text-[13px] font-bold leading-snug">{benefit}</p>
// //                       </div>
// //                       {index !== highlights.length - 1 && <div className="ml-8 mt-3 h-px bg-white/25" />}
// //                     </motion.div>
// //                   );
// //                 })
// //               ) : (
// //                 <p className="text-[13px] text-white/85">Benefits for this service will be listed soon.</p>
// //               )}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="mx-auto max-w-[54rem] px-3 pb-9 sm:px-5 md:px-7 md:pb-12">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.4 }}
// //           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:p-6"
// //           style={{ backgroundColor: "#f2fbf9" }}
// //         >
// //           <div className="flex items-center gap-3 text-center sm:text-left">
// //             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
// //               <Landmark size={20} />
// //             </span>
// //             <div>
// //               <h3 className="text-xl font-black tracking-tight" style={{ color: INK }}>Ready to grow your business?</h3>
// //               <p className="mt-1 max-w-sm text-[13px]" style={{ color: MUTED }}>
// //                 Explore our services and find the right financial solution that fits your needs.
// //               </p>
// //             </div>
// //           </div>

// //           <Link
// //             to="/services"
// //             className="inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold text-white shadow-md transition hover:opacity-90"
// //             style={{ backgroundColor: BRAND }}
// //           >
// //             Back to Services <ArrowRight size={10} />
// //           </Link>
// //         </motion.div>
// //       </section>
// //     </div>
// //   );
// // };

// // const Services = () => {
// //   const { id } = useParams();

// //   if (!id) return <ServiceList />;

// //   const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
// //   if (!service) {
// //     return (
// //       <div className="flex min-h-screen items-center justify-center bg-white text-black">
// //         <p className="border-b-2 text-sm font-semibold" style={{ borderColor: BRAND }}>Service not found</p>
// //       </div>
// //     );
// //   }

// //   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

// //   return <ServiceDetail service={service} category={category} />;
// // };

// // export default Services;












// import React, { useEffect, useRef, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { AnimatePresence, motion, useScroll } from "framer-motion";
// import {
//   ArrowRight,
//   Banknote,
//   Bell,
//   BadgeCheck,
//   BarChart3,
//   Building2,
//   CheckCircle2,
//   ChevronDown,
//   ChevronUp,
//   ClipboardList,
//   Code2,
//   CreditCard,
//   FileText,
//   Fingerprint,
//   Headphones,
//   Landmark,
//   LayoutDashboard,
//   LockKeyhole,
//   Plane,
//   QrCode,
//   Rocket,
//   ShieldCheck,
//   Smartphone,
//   TrendingUp,
//   UsersRound,
//   WalletCards,
//   Zap,
// } from "lucide-react";
// import servicesData from "./Servicesdata.json";

// /* ------------------------------------------------------------------ */
// /* Design tokens (kept local so nothing outside this file is touched) */
// /* ------------------------------------------------------------------ */
// const BRAND = "#14B8A6"; // primary teal accent
// const BRAND_RGB = "20,184,166"; // rgba helper for BRAND
// const BRAND_SOFT = "rgba(20,184,166,0.10)";
// const INK = "#0B1220"; // near-black heading colour
// const MUTED = "#5B6B84"; // body copy grey

// const groupDefinitions = [
//   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
//   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
//   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
//   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
//   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// ];

// const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// /* ------------------------------------------------------------------ */
// /* Shared scroll-reveal animation variants                            */
// /* ------------------------------------------------------------------ */
// const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// /* ------------------------------------------------------------------ */
// /* Aurora Glow Background — soft, slowly-drifting teal blobs          */
// /* NOTE: also used on the (untouched) service detail page — left as-is */
// /* ------------------------------------------------------------------ */
// const AuroraGlowBackground = () => (
//   <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//     <motion.div
//       className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
//       style={{ backgroundColor: "rgba(20,184,166,0.28)" }}
//       animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
//       transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//     />
//     <motion.div
//       className="absolute -right-24 top-4 h-[22rem] w-[22rem] rounded-full blur-3xl"
//       style={{ backgroundColor: "rgba(45,212,191,0.22)" }}
//       animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
//       transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//     />
//     <motion.div
//       className="absolute left-1/3 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full blur-3xl"
//       style={{ backgroundColor: "rgba(14,165,233,0.14)" }}
//       animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
//       transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
//     />
//   </div>
// );

// /* ------------------------------------------------------------------ */
// /* Tiny inline sparkline used in the dark stats strip                 */
// /* ------------------------------------------------------------------ */
// const Sparkline = ({ points, color = "#5EEAD4" }) => {
//   const width = 64;
//   const height = 22;
//   const max = Math.max(...points);
//   const min = Math.min(...points);
//   const step = width / (points.length - 1);
//   const path = points
//     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min || 1)) * height).toFixed(1)}`)
//     .join(" ");
//   return (
//     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
//       <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Category card — icon tile, bold title, quiet description, cta dot  */
// /* ------------------------------------------------------------------ */
// const CategoryCard = ({ title, description, Icon }) => (
//   <a
//     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
//     className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/40 hover:shadow-[0_14px_34px_rgba(20,184,166,0.16)]"
//   >
//     <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//       <Icon size={18} strokeWidth={1.8} />
//     </div>

//     <h3 className="mt-3 text-[14px] font-black tracking-[-0.01em] leading-snug" style={{ color: INK }}>
//       {title}
//     </h3>

//     <p className="mt-1 flex-1 text-[11.5px] leading-5" style={{ color: MUTED }}>
//       {description}
//     </p>

//     <span
//       className="mt-3 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-transparent group-hover:bg-[#14B8A6] group-hover:text-white"
//       style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
//     >
//       <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
//     </span>
//   </a>
// );

// /* ------------------------------------------------------------------ */
// /* Individual service tile inside a category row                      */
// /* ------------------------------------------------------------------ */
// const ServiceItem = ({ service, index }) => {
//   const Icon = serviceIcons[index % serviceIcons.length];
//   return (
//     <Link
//       to={`/services/${service.id}`}
//       className="group flex flex-col gap-1.5 rounded-xl border border-slate-100 bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#14B8A6]/30 hover:shadow-md"
//     >
//       <div
//         className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
//         style={{ backgroundColor: BRAND_SOFT, color: BRAND }}
//       >
//         <Icon size={15} strokeWidth={1.8} />
//       </div>
//       <h4 className="line-clamp-2 text-[14px] font-black tracking-tight leading-snug" style={{ color: INK }}>
//         {service.name.replaceAll("â€“", "–")}
//       </h4>
//       <p className="line-clamp-2 text-[12px] leading-4" style={{ color: MUTED }}>
//         {service.description}
//       </p>
//     </Link>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* One category row: sidebar label + grid of its services             */
// /* ------------------------------------------------------------------ */
// const ServiceRow = ({ group }) => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const Icon = group.icon;

//   const serviceMap = new Map(servicesData.map((service) => [service.id, service]));
//   const services = group.ids.map((id) => serviceMap.get(id)).filter(Boolean);

//   return (
//     <motion.section
//       id={group.title.toLowerCase().replace(/\s+/g, "-")}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeInUp}
//       className="flex flex-col gap-3 border-b border-slate-100 py-4 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
//     >
//       <div
//         className={`flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 transition-colors duration-200 lg:w-48 lg:flex-col lg:items-start lg:justify-center ${
//           showAllServices ? "border-[#14B8A6] bg-[#14B8A6]/5" : "border-transparent hover:border-[#14B8A6]/25 hover:bg-slate-50"
//         }`}
//       >
//         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(20,184,166,0.12)", color: BRAND }}>
//           <Icon size={16} />
//         </div>

//         <div className="flex-1 lg:flex-none">
//           <h2 className="text-[15px] font-black tracking-tight" style={{ color: INK }}>
//             {group.title}
//           </h2>

//           <button
//             type="button"
//             onClick={() => setShowAllServices(!showAllServices)}
//             className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold transition"
//             style={{ color: BRAND }}
//           >
//             {showAllServices ? "View Less" : "View All"}
//             {showAllServices ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
//           </button>
//         </div>
//       </div>

//       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//         {services.length ? (
//           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
//             <ServiceItem key={service.id} service={service} index={index} />
//           ))
//         ) : (
//           <div className="col-span-full flex h-20 items-center justify-center text-xs" style={{ color: MUTED }}>
//             No services available.
//           </div>
//         )}
//       </div>
//     </motion.section>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Scroll-pinned hero story data                                      */
// /* Each entry drives: left copy, dashboard stats, chart, a live entry */
// /* list, and a notification toast — one per service category.         */
// /* ------------------------------------------------------------------ */
// const sidebarNavIcons = [LayoutDashboard, BarChart3, WalletCards, ClipboardList, FileText, UsersRound];

// const heroBars = [
//   { a: 55, b: 35 }, { a: 70, b: 50 }, { a: 45, b: 60 }, { a: 80, b: 55 }, { a: 60, b: 40 },
//   { a: 90, b: 65 }, { a: 50, b: 45 }, { a: 75, b: 50 }, { a: 65, b: 55 },
// ];

// const heroStories = [
//   {
//     index: 0,
//     icon: WalletCards,
//     title: "Payment Solutions",
//     heading: (
//       <>
//         Collect Payments <span style={{ color: BRAND }}>From Anywhere</span>
//       </>
//     ),
//     description: "QR codes, sound box, POS devices and payment gateways — accept money in seconds, wherever your customers are.",
//     dashboardSubtitle: "Here's what's happening today",
//     chartLabel: "Revenue Overview",
//     listLabel: "Recent Settlements",
//     stats: [
//       { label: "Total Revenue", value: 18.2, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "23.5%" },
//       { label: "Transactions", value: 124820, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "18.7%" },
//       { label: "Success Rate", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.6%" },
//     ],
//     chartData: heroBars,
//     entries: [
//       { icon: Banknote, title: "₹1,24,500", meta: "Settled · Today, 10:30 AM" },
//       { icon: Banknote, title: "₹87,500", meta: "Settled · Today, 09:15 AM" },
//     ],
//     notification: { icon: QrCode, title: "₹5,200 received via UPI", time: "Just now" },
//   },
//   {
//     index: 1,
//     icon: Landmark,
//     title: "Banking Services",
//     heading: (
//       <>
//         Banking Services, <span style={{ color: BRAND }}>Right Next Door</span>
//       </>
//     ),
//     description: "AEPS, Micro ATM, BBPS bill payments and cash management — bring the branch to your customer's doorstep.",
//     dashboardSubtitle: "Banking desk overview",
//     chartLabel: "AEPS Volume",
//     listLabel: "Recent Withdrawals",
//     stats: [
//       { label: "AEPS Volume", value: 6.4, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "15.2%" },
//       { label: "Bills Paid", value: 48300, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "12.4%" },
//       { label: "Active Kiosks", value: 2180, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "9.1%" },
//     ],
//     chartData: [
//       { a: 40, b: 30 }, { a: 55, b: 45 }, { a: 35, b: 50 }, { a: 65, b: 40 }, { a: 50, b: 35 },
//       { a: 75, b: 55 }, { a: 45, b: 40 }, { a: 60, b: 45 }, { a: 52, b: 38 },
//     ],
//     entries: [
//       { icon: Landmark, title: "₹2,400 withdrawn", meta: "AEPS · 2 min ago" },
//       { icon: Landmark, title: "₹1,150 bill paid", meta: "BBPS · 6 min ago" },
//     ],
//     notification: { icon: Fingerprint, title: "AEPS withdrawal ₹2,400 done", time: "Just now" },
//   },
//   {
//     index: 2,
//     icon: Banknote,
//     title: "Financial Services",
//     heading: (
//       <>
//         Fuel Growth With <span style={{ color: BRAND }}>Smart Lending</span>
//       </>
//     ),
//     description: "Business loans, personal loans and insurance — sourced and approved with fully digital onboarding.",
//     dashboardSubtitle: "Lending desk overview",
//     chartLabel: "Loans Disbursed",
//     listLabel: "Recent Approvals",
//     stats: [
//       { label: "Loans Disbursed", value: 42.6, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "31.2%" },
//       { label: "Applications", value: 8940, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "22.5%" },
//       { label: "Approval Rate", value: 87, format: (v) => `${v.toFixed(0)}%`, delta: "4.1%" },
//     ],
//     chartData: [
//       { a: 30, b: 20 }, { a: 45, b: 35 }, { a: 60, b: 40 }, { a: 50, b: 55 }, { a: 70, b: 45 },
//       { a: 55, b: 60 }, { a: 80, b: 50 }, { a: 65, b: 55 }, { a: 75, b: 60 },
//     ],
//     entries: [
//       { icon: Banknote, title: "₹2,00,000 approved", meta: "Business loan · 3 min ago" },
//       { icon: ShieldCheck, title: "Policy issued", meta: "Health insurance · 9 min ago" },
//     ],
//     notification: { icon: BadgeCheck, title: "Loan approved for ₹2,00,000", time: "Just now" },
//   },
//   {
//     index: 3,
//     icon: Plane,
//     title: "Travel Services",
//     heading: (
//       <>
//         Book Journeys, <span style={{ color: BRAND }}>Earn Commissions</span>
//       </>
//     ),
//     description: "Flights, trains, buses and hotels — a complete booking engine that pays you on every ticket.",
//     dashboardSubtitle: "Travel desk overview",
//     chartLabel: "Bookings Overview",
//     listLabel: "Recent Bookings",
//     stats: [
//       { label: "Bookings", value: 15720, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "19.8%" },
//       { label: "Commission", value: 38.5, format: (v) => `₹${v.toFixed(1)} L`, delta: "27.6%" },
//       { label: "Avg. Value", value: 4850, format: (v) => `₹${Math.round(v).toLocaleString("en-IN")}`, delta: "6.2%" },
//     ],
//     chartData: [
//       { a: 50, b: 35 }, { a: 40, b: 55 }, { a: 65, b: 45 }, { a: 55, b: 35 }, { a: 70, b: 50 },
//       { a: 45, b: 60 }, { a: 60, b: 40 }, { a: 80, b: 55 }, { a: 50, b: 45 },
//     ],
//     entries: [
//       { icon: Plane, title: "DEL → BOM booked", meta: "Flight · 1 min ago" },
//       { icon: Building2, title: "Hotel confirmed", meta: "Goa · 8 min ago" },
//     ],
//     notification: { icon: Plane, title: "Flight booked: DEL → BOM", time: "Just now" },
//   },
//   {
//     index: 4,
//     icon: Code2,
//     title: "Technology Solutions",
//     heading: (
//       <>
//         Build, Scale <span style={{ color: BRAND }}>and Automate</span>
//       </>
//     ),
//     description: "APIs, merchant dashboards and white-label platforms — the technology backbone for your business.",
//     dashboardSubtitle: "Developer console overview",
//     chartLabel: "API Traffic",
//     listLabel: "Recent Activity",
//     stats: [
//       { label: "API Calls/Day", value: 2.4, format: (v) => `${v.toFixed(1)}M`, delta: "34.7%" },
//       { label: "Uptime", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.1%" },
//       { label: "Integrations", value: 640, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "11.3%" },
//     ],
//     chartData: [
//       { a: 60, b: 40 }, { a: 75, b: 50 }, { a: 55, b: 65 }, { a: 85, b: 55 }, { a: 65, b: 45 },
//       { a: 90, b: 60 }, { a: 70, b: 50 }, { a: 80, b: 65 }, { a: 72, b: 52 },
//     ],
//     entries: [
//       { icon: Code2, title: "API key generated", meta: "Sandbox · 4 min ago" },
//       { icon: LayoutDashboard, title: "Dashboard deployed", meta: "White-label · 12 min ago" },
//     ],
//     notification: { icon: Zap, title: "New API key generated", time: "Just now" },
//   },
// ];

// /* ------------------------------------------------------------------ */
// /* Count-up number helper — animates from the previous value to the   */
// /* next whenever `value` changes (i.e. whenever the active story does)*/
// /* ------------------------------------------------------------------ */
// const useCountUp = (target, duration = 900) => {
//   const [display, setDisplay] = useState(target);
//   const fromRef = useRef(target);

//   useEffect(() => {
//     const from = fromRef.current;
//     const to = target;
//     if (from === to) return undefined;

//     let rafId;
//     let start;

//     const tick = (timestamp) => {
//       if (start === undefined) start = timestamp;
//       const elapsed = timestamp - start;
//       const progress = Math.min(elapsed / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setDisplay(from + (to - from) * eased);
//       if (progress < 1) {
//         rafId = requestAnimationFrame(tick);
//       } else {
//         fromRef.current = to;
//       }
//     };

//     rafId = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(rafId);
//   }, [target, duration]);

//   return display;
// };

// const AnimatedNumber = ({ value, format }) => {
//   const display = useCountUp(value);
//   return <>{format(display)}</>;
// };

// /* ------------------------------------------------------------------ */
// /* Story-driven dashboard mock — same chrome as before, but every      */
// /* number, bar, list row and toast is sourced from the active story   */
// /* ------------------------------------------------------------------ */
// const StoryDashboardMock = ({ story, showNotification }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 26 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: 0.1 }}
//     className="relative mx-auto w-full max-w-md"
//   >
//     <div className="flex overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
//       <div className="hidden w-14 shrink-0 flex-col items-center gap-4 py-4 sm:flex" style={{ backgroundColor: INK }}>
//         <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//           <Fingerprint size={14} />
//         </div>
//         <div className="mt-2 flex flex-col items-center gap-3">
//           {sidebarNavIcons.map((Icon, i) => (
//             <span
//               key={i}
//               className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-300"
//               style={i === story.index ? { backgroundColor: BRAND, color: "#fff" } : { color: "rgba(255,255,255,0.4)" }}
//             >
//               <Icon size={13} />
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="flex-1 p-4">
//         <div className="flex items-start justify-between">
//           <div>
//             <p className="text-[12px] font-black" style={{ color: INK }}>Hello, Abheepay Merchant 👋</p>
//             <p className="text-[9px]" style={{ color: MUTED }}>{story.dashboardSubtitle}</p>
//           </div>
//           <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50" style={{ color: MUTED }}>
//             <Bell size={12} />
//           </span>
//         </div>

//         <div className="mt-3 grid grid-cols-3 gap-2">
//           {story.stats.map((stat) => (
//             <div key={stat.label} className="rounded-lg border border-slate-100 p-2">
//               <p className="text-[7.5px] font-semibold" style={{ color: MUTED }}>{stat.label}</p>
//               <p className="mt-0.5 text-[11px] font-black" style={{ color: INK }}>
//                 <AnimatedNumber value={stat.value} format={stat.format} />
//               </p>
//               <p className="mt-0.5 text-[7.5px] font-bold text-emerald-500">↑ {stat.delta}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
//           <div className="flex items-center justify-between">
//             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.chartLabel}</p>
//             <div className="flex items-center gap-2 text-[7px]" style={{ color: MUTED }}>
//               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />This Month</span>
//               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-slate-300" />Last Month</span>
//             </div>
//           </div>
//           <div className="mt-2 flex h-14 items-end gap-1.5">
//             {story.chartData.map((bar, i) => (
//               <div key={i} className="flex flex-1 items-end gap-[2px]">
//                 <div className="w-full rounded-sm transition-all duration-700 ease-out" style={{ height: `${bar.a}%`, backgroundColor: BRAND }} />
//                 <div className="w-full rounded-sm bg-slate-200 transition-all duration-700 ease-out" style={{ height: `${bar.b}%` }} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
//           <div className="flex items-center justify-between">
//             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.listLabel}</p>
//             <span className="text-[8px] font-bold" style={{ color: BRAND }}>View All</span>
//           </div>
//           <div className="mt-1.5 space-y-1.5">
//             {story.entries.map((entry) => (
//               <div key={entry.title} className="flex items-center justify-between text-[8px]">
//                 <span className="flex items-center gap-1.5" style={{ color: INK }}>
//                   <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//                     <entry.icon size={10} />
//                   </span>
//                   <b>{entry.title}</b>
//                 </span>
//                 <span style={{ color: MUTED }}>{entry.meta}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//     <div
//       className="absolute -bottom-4 -left-4 hidden items-center gap-1.5 rounded-xl px-3 py-2 text-white shadow-lg sm:flex"
//       style={{ backgroundColor: INK }}
//     >
//       <LockKeyhole size={12} />
//       <span className="text-[9px] font-bold">Bank-grade security</span>
//     </div>

//     <AnimatePresence>
//       {showNotification && (
//         <motion.div
//           key={story.title}
//           initial={{ opacity: 0, x: 18, y: -8, scale: 0.92 }}
//           animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//           exit={{ opacity: 0, x: 18, scale: 0.92 }}
//           transition={{ duration: 0.35, ease: "easeOut" }}
//           className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:-right-8"
//         >
//           <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//             <story.notification.icon size={13} />
//           </span>
//           <span>
//             <b className="block text-[10px]" style={{ color: INK }}>{story.notification.title}</b>
//             <span className="text-[8px]" style={{ color: MUTED }}>{story.notification.time}</span>
//           </span>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </motion.div>
// );

// /* ------------------------------------------------------------------ */
// /* Scroll-pinned hero — the section stays fixed on screen while the   */
// /* user scrolls through it; every story below drives new left copy,   */
// /* dashboard numbers, chart bars and a notification toast.            */
// /* ------------------------------------------------------------------ */
// const ScrollStoryHero = () => {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showNotification, setShowNotification] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       const raw = Math.min(v, 0.999) * heroStories.length;
//       const idx = Math.max(0, Math.min(heroStories.length - 1, Math.floor(raw)));
//       const local = raw - idx;
//       setActiveIndex((prev) => (prev === idx ? prev : idx));
//       setShowNotification(local > 0.3 && local < 0.85);
//     });
//     return unsubscribe;
//   }, [scrollYProgress]);

//   const story = heroStories[activeIndex];

//   return (
//     <div ref={containerRef} className="relative" style={{ height: `${heroStories.length * 100}vh` }}>
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
//           <div>
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={story.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -18 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//               >
//                 <span
//                   className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold"
//                   style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
//                 >
//                   <story.icon size={11} /> {story.title}
//                 </span>

//                 <h1
//                   className="mt-4 max-w-lg text-[2rem] font-black leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[2.7rem]"
//                   style={{ color: INK }}
//                 >
//                   {story.heading}
//                 </h1>

//                 <p className="mt-4 max-w-md text-[13px] leading-6 sm:text-sm" style={{ color: MUTED }}>
//                   {story.description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>

//             <div className="mt-6 flex flex-wrap gap-2.5">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
//                 style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(20,184,166,0.30)" }}
//               >
//                 Get Started <ArrowRight size={12} />
//               </Link>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
//                 style={{ borderColor: BRAND, color: BRAND }}
//               >
//                 Book a Demo
//               </Link>
//             </div>

//             <div className="mt-8 flex items-center gap-2">
//               {heroStories.map((s, i) => (
//                 <span
//                   key={s.title}
//                   className="h-1.5 rounded-full transition-all duration-500"
//                   style={{ width: i === activeIndex ? 28 : 10, backgroundColor: i === activeIndex ? BRAND : "rgba(20,184,166,0.2)" }}
//                 />
//               ))}
//             </div>
//           </div>

//           <StoryDashboardMock story={story} showNotification={showNotification} />
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Trust strip — generic wordmarks (no real third-party logos)        */
// /* ------------------------------------------------------------------ */
// const trustMarks = ["Vertex Retail", "Nimbus Mart", "Orbit Foods", "Northstar Traders", "Lumen Café", "Rapidcart"];

// /* ------------------------------------------------------------------ */
// /* Dark stat strip with sparklines                                    */
// /* ------------------------------------------------------------------ */
// const statHighlights = [
//   { Icon: Building2, value: "10,000+", label: "Active Merchants", trend: "24% this year", points: [4, 6, 5, 8, 7, 10, 9, 12] },
//   { Icon: WalletCards, value: "₹500 Cr+", label: "Monthly Volume", trend: "18% vs last month", points: [5, 5, 7, 6, 9, 8, 11, 12] },
//   { Icon: ShieldCheck, value: "99.99%", label: "System Uptime", trend: "0.5% this month", points: [9, 9, 9, 10, 9, 10, 10, 10] },
//   { Icon: Headphones, value: "24×7", label: "Customer Support", trend: "Always here for you", points: [6, 7, 6, 8, 7, 9, 8, 9] },
// ];

// /* ------------------------------------------------------------------ */
// /* Live transactions panel data                                       */
// /* ------------------------------------------------------------------ */
// const liveTransactions = [
//   { method: "UPI", amount: "₹5,200", from: "Rahul Kumar", time: "2 sec ago" },
//   { method: "VISA", amount: "₹12,850", from: "Amazon Pay", time: "5 sec ago" },
//   { method: "AEPS", amount: "₹2,400", from: "Customer", time: "8 sec ago" },
//   { method: "UPI", amount: "₹8,950", from: "PhonePe", time: "12 sec ago" },
//   { method: "MC", amount: "₹1,650", from: "Credit Card", time: "15 sec ago" },
// ];

// const methodStyles = {
//   UPI: { bg: BRAND_SOFT, color: BRAND },
//   VISA: { bg: "rgba(11,18,32,0.08)", color: INK },
//   AEPS: { bg: "rgba(20,184,166,0.16)", color: "#0F9488" },
//   MC: { bg: "rgba(249,115,22,0.12)", color: "#EA580C" },
// };

// /* ------------------------------------------------------------------ */
// /* Platform feature list                                              */
// /* ------------------------------------------------------------------ */
// const platformFeatures = [
//   { Icon: Zap, title: "Easy Integration", desc: "Quick setup with developer-friendly APIs" },
//   { Icon: BarChart3, title: "Real-time Analytics", desc: "Track performance with advanced insights" },
//   { Icon: ShieldCheck, title: "Secure & Compliant", desc: "Bank-grade security with RBI compliance" },
//   { Icon: TrendingUp, title: "Scalable Infrastructure", desc: "Built to handle billions of transactions" },
// ];

// /* ------------------------------------------------------------------ */
// /* Floating "Total Collection" mock beside the feature list           */
// /* ------------------------------------------------------------------ */
// const collectionBars = [30, 55, 40, 70, 50, 85, 60, 95, 65];

// const TotalCollectionMock = () => (
//   <div className="relative mx-auto hidden w-full max-w-[15rem] lg:block">
//     <motion.div
//       initial={{ opacity: 0, y: 24, rotate: -3 }}
//       whileInView={{ opacity: 1, y: 0, rotate: -3 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="rounded-2xl p-4 text-white shadow-xl"
//       style={{ backgroundColor: BRAND }}
//     >
//       <p className="text-[10px] font-semibold text-white/80">Total Collection</p>
//       <p className="mt-1 flex items-center gap-1 text-xl font-black">
//         ₹18,20,450 <span className="text-[10px] font-bold text-white/80">↑ 23.5%</span>
//       </p>
//       <div className="mt-3 flex h-14 items-end gap-1">
//         {collectionBars.map((h, i) => (
//           <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />
//         ))}
//       </div>
//       <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2 text-[10px]">
//         <span>
//           <b className="block text-[12px]">1,24,820</b>
//           <span className="text-white/70">Transactions</span>
//         </span>
//         <span className="text-right">
//           <b className="block text-[12px]">99.99%</b>
//           <span className="text-white/70">Success Rate</span>
//         </span>
//       </div>
//     </motion.div>

//     <div className="absolute -right-6 top-6 flex flex-col gap-2">
//       {["UPI", "VISA", "RuPay"].map((label, i) => (
//         <motion.span
//           key={label}
//           initial={{ opacity: 0, x: 12 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15 + i * 0.08 }}
//           className="rounded-lg border border-slate-100 bg-white px-2.5 py-1.5 text-[9px] font-black shadow-md"
//           style={{ color: INK }}
//         >
//           {label}
//         </motion.span>
//       ))}
//     </div>
//   </div>
// );

// /* ------------------------------------------------------------------ */
// /* Business overview mock for the closing CTA                         */
// /* ------------------------------------------------------------------ */
// const revenueTrend = [10, 22, 16, 30, 24, 38, 32, 46, 40, 55, 48, 62];
// const paymentModes = [
//   { label: "UPI", value: 45, color: "#5EEAD4" },
//   { label: "Cards", value: 30, color: BRAND },
//   { label: "Wallets", value: 15, color: "#0F9488" },
//   { label: "Net Banking", value: 10, color: "#134E4A" },
// ];

// const RevenueTrendLine = () => {
//   const width = 220;
//   const height = 60;
//   const max = Math.max(...revenueTrend);
//   const min = Math.min(...revenueTrend);
//   const step = width / (revenueTrend.length - 1);
//   const path = revenueTrend
//     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min)) * height).toFixed(1)}`)
//     .join(" ");
//   return (
//     <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
//       <path d={path} fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// };

// const PaymentModesDonut = () => {
//   let cumulative = 0;
//   const stops = paymentModes
//     .map((mode) => {
//       const start = cumulative;
//       cumulative += mode.value;
//       return `${mode.color} ${start}% ${cumulative}%`;
//     })
//     .join(", ");
//   return (
//     <div className="flex items-center gap-3">
//       <div className="h-16 w-16 shrink-0 rounded-full" style={{ background: `conic-gradient(${stops})` }}>
//         <div className="m-[6px] flex h-[calc(100%-12px)] w-[calc(100%-12px)] items-center justify-center rounded-full" style={{ backgroundColor: INK }} />
//       </div>
//       <div className="space-y-1">
//         {paymentModes.map((mode) => (
//           <div key={mode.label} className="flex items-center gap-1.5 text-[9px] text-white/70">
//             <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: mode.color }} />
//             {mode.label} <span className="font-bold text-white">{mode.value}%</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Services list / landing page                                        */
// /* ------------------------------------------------------------------ */
// const ServiceList = () => {
//   return (
//     <main id="top" className="bg-[#fbfcff] pb-6 font-sans" style={{ color: INK, zoom: 0.55 }}>
//       {/* ---------------------------------------------------------------- HERO (scroll-pinned story) */}
//       <section className="relative isolate border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white">
//         <AuroraGlowBackground />
//         <ScrollStoryHero />
//       </section>

//       {/* ---------------------------------------------------------------- TRUST STRIP */}
//       <section className="border-b border-slate-100 bg-white py-6">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <p className="text-center text-[11px] font-semibold" style={{ color: MUTED }}>
//             Trusted by <span className="font-black" style={{ color: BRAND }}>10,000+ businesses</span> across India
//           </p>
//           <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
//             {trustMarks.map((name) => (
//               <span key={name} className="text-sm font-black tracking-tight opacity-60" style={{ color: INK }}>
//                 {name}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
//         {/* ------------------------------------------------------------ SERVICE CATEGORIES */}
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mb-4">
//           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
//             Our Services
//           </p>
//           <div className="mt-1.5 flex items-center justify-between">
//             <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
//               Explore Our Service Categories
//             </h2>
//             <a href="#payment-solutions" className="hidden text-[11px] font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: BRAND }}>
//               Explore All Services <ArrowRight size={10} />
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           variants={staggerContainer}
//           className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
//         >
//           {groupDefinitions.map((group) => (
//             <motion.div key={group.title} variants={fadeInUp}>
//               <CategoryCard title={group.title} description={group.description} Icon={group.icon} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ------------------------------------------------------------ DARK STAT STRIP */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="mt-6 grid overflow-hidden rounded-2xl text-white sm:grid-cols-2 lg:grid-cols-4"
//           style={{ backgroundColor: INK }}
//         >
//           {statHighlights.map(({ Icon, value, label, trend, points }) => (
//             <div key={label} className="flex items-center justify-between gap-3 border-white/10 p-4 sm:border-r last:border-r-0">
//               <div className="flex items-center gap-2.5">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: "#5EEAD4" }}>
//                   <Icon size={15} />
//                 </span>
//                 <span>
//                   <b className="block text-sm">{value}</b>
//                   <small className="text-[9px] text-slate-300">{label}</small>
//                 </span>
//               </div>
//               <div className="hidden flex-col items-end gap-0.5 sm:flex">
//                 <Sparkline points={points} />
//                 <span className="text-[8px] font-semibold text-emerald-400">↑ {trend}</span>
//               </div>
//             </div>
//           ))}
//         </motion.section>

//         {/* ------------------------------------------------------------ LIVE TRANSACTIONS + PLATFORM FEATURES */}
//         <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={fadeInUp}
//             className="rounded-2xl border border-slate-200 bg-white p-4"
//           >
//             <div className="flex items-center justify-between">
//               <h3 className="text-[13px] font-black" style={{ color: INK }}>Live Transactions</h3>
//               <span className="text-[10px] font-bold" style={{ color: BRAND }}>View All</span>
//             </div>
//             <div className="mt-3 divide-y divide-slate-100">
//               {liveTransactions.map((tx, i) => {
//                 const style = methodStyles[tx.method] || methodStyles.UPI;
//                 return (
//                   <div key={i} className="flex items-center justify-between gap-3 py-2.5">
//                     <div className="flex items-center gap-2.5">
//                       <span
//                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-black"
//                         style={{ backgroundColor: style.bg, color: style.color }}
//                       >
//                         {tx.method}
//                       </span>
//                       <span>
//                         <b className="block text-[12px]" style={{ color: INK }}>{tx.amount}</b>
//                         <span className="text-[10px]" style={{ color: MUTED }}>From {tx.from}</span>
//                       </span>
//                     </div>
//                     <span className="text-right">
//                       <span className="block text-[10px] font-bold text-emerald-500">Success</span>
//                       <span className="text-[9px]" style={{ color: MUTED }}>{tx.time}</span>
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//             <p className="mt-3 flex items-center gap-1.5 text-[10px]" style={{ color: MUTED }}>
//               <LockKeyhole size={10} /> All transactions are secure and encrypted
//             </p>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={fadeInUp}
//             className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]"
//           >
//             <div>
//               <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
//                 One Platform. Endless Possibilities.
//               </p>
//               <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] leading-tight" style={{ color: INK }}>
//                 Everything You Need, <span style={{ color: BRAND }}>All in One Platform</span>
//               </h2>
//               <p className="mt-3 text-[13px] leading-6" style={{ color: MUTED }}>
//                 From payments to banking, lending to travel — manage your entire business
//                 financial ecosystem from a single, powerful platform.
//               </p>

//               <div className="mt-5 space-y-3.5">
//                 {platformFeatures.map(({ Icon, title, desc }) => (
//                   <div key={title} className="flex items-start gap-2.5">
//                     <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//                       <Icon size={13} />
//                     </span>
//                     <span>
//                       <b className="block text-[12.5px] font-bold" style={{ color: INK }}>{title}</b>
//                       <span className="text-[11.5px]" style={{ color: MUTED }}>{desc}</span>
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <TotalCollectionMock />
//           </motion.div>
//         </div>

//         {/* ------------------------------------------------------------ SERVICE ROWS (real links) */}
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mt-8">
//           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
//             Unified Experience
//           </p>
//           <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
//             Every Service, <span style={{ color: BRAND }}>At Your Fingertips</span>
//           </h2>
//         </motion.div>

//         <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-2">
//           {groupDefinitions.map((group) => (
//             <ServiceRow key={group.title} group={group} />
//           ))}
//         </div>

//         {/* ------------------------------------------------------------ CLOSING CTA */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="relative mt-8 overflow-hidden rounded-2xl px-5 py-8 text-white sm:px-8"
//           style={{ backgroundColor: INK }}
//         >
//           <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
//           <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
//             <div>
//               <p className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: "#5EEAD4" }}>
//                 Get Started Today
//               </p>
//               <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] leading-tight sm:text-4xl">
//                 Ready to Transform Your Business?
//               </h2>
//               <p className="mt-2 max-w-md text-[12px] text-white/70 sm:text-[13px]">
//                 Join thousands of businesses already growing with our complete financial ecosystem.
//               </p>
//               <div className="mt-5 flex flex-wrap items-center gap-2.5">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
//                   style={{ backgroundColor: BRAND }}
//                 >
//                   Get Started <ArrowRight size={11} />
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
//                 >
//                   Contact Sales
//                 </Link>
//               </div>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
//               <div className="flex items-center justify-between">
//                 <p className="text-[11px] font-bold">Business Overview</p>
//                 <span className="text-[9px] text-white/60">This Month</span>
//               </div>
//               <div className="mt-3 grid grid-cols-3 gap-2">
//                 {[
//                   ["Total Revenue", "₹18.2 Cr", "23.5%"],
//                   ["Transactions", "1,24,820", "18.7%"],
//                   ["Success Rate", "99.99%", "0.6%"],
//                 ].map(([label, value, delta]) => (
//                   <div key={label} className="rounded-lg border border-white/10 p-2">
//                     <p className="text-[8px] text-white/60">{label}</p>
//                     <p className="text-[11px] font-black">{value}</p>
//                     <p className="text-[8px] font-bold text-emerald-400">↑ {delta}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
//                 <p className="text-[9px] font-bold text-white/80">Revenue Trend</p>
//                 <div className="mt-1">
//                   <RevenueTrendLine />
//                 </div>
//               </div>
//               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
//                 <p className="mb-2 text-[9px] font-bold text-white/80">Top Payment Modes</p>
//                 <PaymentModesDonut />
//               </div>
//             </div>
//           </div>
//         </motion.section>
//       </div>
//     </main>
//   );
// };

// /* ==================================================================== */
// /* EVERYTHING BELOW THIS LINE IS UNCHANGED — the service detail page    */
// /* ==================================================================== */

// /* ------------------------------------------------------------------ */
// /* Service detail page (unchanged logic, retouched palette)            */
// /* ------------------------------------------------------------------ */
// const ServiceDetail = ({ service, category }) => {
//   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
//   const features = service.features || [];
//   const highlights = service.benefits || [];
//   const categoryLabel = category || "Our Services";

//   const nameWords = service.name.trim().split(" ");
//   const lastWord = nameWords.pop();
//   const restName = nameWords.join(" ");

//   return (
//     <div className="bg-white font-sans" style={{ color: INK }}>
//       {/* Hero */}
//       <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
//         <AuroraGlowBackground />
//         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.span
//               variants={fadeInUp}
//               className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
//               style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
//             >
//               <FileText size={10} /> {categoryLabel}
//             </motion.span>

//             <motion.h1
//               variants={fadeInUp}
//               className="mt-3 text-[1.7rem] font-black leading-[1.1] sm:text-3xl md:text-[1.95rem]"
//               style={{ color: INK }}
//             >
//               {restName ? `${restName} ` : ""}
//               <span style={{ color: BRAND }}>{lastWord}</span>
//             </motion.h1>

//             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8" style={{ backgroundColor: BRAND }} />

//             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5" style={{ color: MUTED }}>
//               {service.longDescription || service.description}
//             </motion.p>

//             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
//               <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
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
//             <div className="relative overflow-hidden rounded-2xl shadow-xl">
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
//                 <p className="text-[8px] font-semibold" style={{ color: MUTED }}>In Partnership with</p>
//                 {service.partner.logo ? (
//                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
//                 ) : (
//                   <p className="text-xs font-black" style={{ color: INK }}>{service.partner.name}</p>
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
//             <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
//             <h2 className="mt-2 text-base font-black sm:text-lg" style={{ color: INK }}>
//               Our {categoryLabel}
//             </h2>

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
//                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
//                       style={{ borderColor: undefined }}
//                     >
//                       <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
//                         <Icon size={12} strokeWidth={1.7} />
//                       </div>
//                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug" style={{ color: "#1e293b" }}>{text}</p>
//                       <div className="mt-2 flex justify-end">
//                         <span
//                           className="inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
//                           style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
//                         >
//                           <ArrowRight size={9} />
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             ) : (
//               <p className="mt-4 text-[13px]" style={{ color: MUTED }}>More details coming soon.</p>
//             )}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="relative flex flex-col overflow-hidden rounded-xl p-4 text-white shadow-lg"
//             style={{ backgroundColor: BRAND }}
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
//                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: BRAND }}>
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
//           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:p-6"
//           style={{ backgroundColor: "#f2fbf9" }}
//         >
//           <div className="flex items-center gap-3 text-center sm:text-left">
//             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
//               <Landmark size={20} />
//             </span>
//             <div>
//               <h3 className="text-xl font-black tracking-tight" style={{ color: INK }}>Ready to grow your business?</h3>
//               <p className="mt-1 max-w-sm text-[13px]" style={{ color: MUTED }}>
//                 Explore our services and find the right financial solution that fits your needs.
//               </p>
//             </div>
//           </div>

//           <Link
//             to="/services"
//             className="inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold text-white shadow-md transition hover:opacity-90"
//             style={{ backgroundColor: BRAND }}
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
//       <div className="flex min-h-screen items-center justify-center bg-white text-black">
//         <p className="border-b-2 text-sm font-semibold" style={{ borderColor: BRAND }}>Service not found</p>
//       </div>
//     );
//   }

//   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

//   return <ServiceDetail service={service} category={category} />;
// };

// export default Services;

















// import React, { useEffect, useRef, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { AnimatePresence, motion, useScroll } from "framer-motion";
// import {
//   ArrowRight,
//   Banknote,
//   Bell,
//   BadgeCheck,
//   BarChart3,
//   Building2,
//   CheckCircle2,
//   ChevronDown,
//   ChevronUp,
//   ClipboardList,
//   Code2,
//   CreditCard,
//   FileText,
//   Fingerprint,
//   Headphones,
//   Landmark,
//   LayoutDashboard,
//   LockKeyhole,
//   Plane,
//   QrCode,
//   Rocket,
//   ShieldCheck,
//   Smartphone,
//   TrendingUp,
//   UsersRound,
//   WalletCards,
//   Zap,
// } from "lucide-react";
// import servicesData from "./Servicesdata.json";

// /* ------------------------------------------------------------------ */
// /* Design tokens (kept local so nothing outside this file is touched) */
// /* ------------------------------------------------------------------ */
// const BRAND = "#14B8A6"; // primary teal accent
// const BRAND_RGB = "20,184,166"; // rgba helper for BRAND
// const BRAND_SOFT = "rgba(20,184,166,0.10)";
// const INK = "#0B1220"; // near-black heading colour
// const MUTED = "#5B6B84"; // body copy grey

// const groupDefinitions = [
//   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
//   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "aeps-cash-withdrawal-balance-inquiry-mini-statement", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
//   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
//   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
//   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// ];

// const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// /* ------------------------------------------------------------------ */
// /* Shared scroll-reveal animation variants                            */
// /* ------------------------------------------------------------------ */
// const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// /* ------------------------------------------------------------------ */
// /* Aurora Glow Background — soft, slowly-drifting teal blobs          */
// /* NOTE: also used on the (untouched) service detail page — left as-is */
// /* ------------------------------------------------------------------ */
// const AuroraGlowBackground = () => (
//   <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//     <motion.div
//       className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
//       style={{ backgroundColor: "rgba(20,184,166,0.28)" }}
//       animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
//       transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//     />
//     <motion.div
//       className="absolute -right-24 top-4 h-[22rem] w-[22rem] rounded-full blur-3xl"
//       style={{ backgroundColor: "rgba(45,212,191,0.22)" }}
//       animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
//       transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//     />
//     <motion.div
//       className="absolute left-1/3 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full blur-3xl"
//       style={{ backgroundColor: "rgba(14,165,233,0.14)" }}
//       animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
//       transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
//     />
//   </div>
// );

// /* ------------------------------------------------------------------ */
// /* Tiny inline sparkline used in the dark stats strip                 */
// /* ------------------------------------------------------------------ */
// const Sparkline = ({ points, color = "#5EEAD4" }) => {
//   const width = 64;
//   const height = 22;
//   const max = Math.max(...points);
//   const min = Math.min(...points);
//   const step = width / (points.length - 1);
//   const path = points
//     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min || 1)) * height).toFixed(1)}`)
//     .join(" ");
//   return (
//     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
//       <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Category card — icon tile, bold title, quiet description, cta dot  */
// /* ------------------------------------------------------------------ */
// const CategoryCard = ({ title, description, Icon }) => (
//   <a
//     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
//     className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/40 hover:shadow-[0_14px_34px_rgba(20,184,166,0.16)]"
//   >
//     <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//       <Icon size={18} strokeWidth={1.8} />
//     </div>

//     <h3 className="mt-3 text-[14px] font-black tracking-[-0.01em] leading-snug" style={{ color: INK }}>
//       {title}
//     </h3>

//     <p className="mt-1 flex-1 text-[11.5px] leading-5" style={{ color: MUTED }}>
//       {description}
//     </p>

//     <span
//       className="mt-3 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-transparent group-hover:bg-[#14B8A6] group-hover:text-white"
//       style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
//     >
//       <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5" />
//     </span>
//   </a>
// );

// /* ------------------------------------------------------------------ */
// /* Individual service tile inside a category row                      */
// /* ------------------------------------------------------------------ */
// const ServiceItem = ({ service, index }) => {
//   const Icon = serviceIcons[index % serviceIcons.length];
//   return (
//     <Link
//       to={`/services/${service.id}`}
//       className="group flex flex-col gap-1.5 rounded-xl border border-slate-100 bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#14B8A6]/30 hover:shadow-md"
//     >
//       <div
//         className="flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
//         style={{ backgroundColor: BRAND_SOFT, color: BRAND }}
//       >
//         <Icon size={15} strokeWidth={1.8} />
//       </div>
//       <h4 className="line-clamp-2 text-[14px] font-black tracking-tight leading-snug" style={{ color: INK }}>
//         {service.name.replaceAll("â€“", "–")}
//       </h4>
//       <p className="line-clamp-2 text-[12px] leading-4" style={{ color: MUTED }}>
//         {service.description}
//       </p>
//     </Link>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* One category row: sidebar label + grid of its services             */
// /* ------------------------------------------------------------------ */
// const ServiceRow = ({ group }) => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const Icon = group.icon;

//   const serviceMap = new Map(servicesData.map((service) => [service.id, service]));
//   const services = group.ids.map((id) => serviceMap.get(id)).filter(Boolean);

//   return (
//     <motion.section
//       id={group.title.toLowerCase().replace(/\s+/g, "-")}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeInUp}
//       className="flex flex-col gap-3 border-b border-slate-100 py-4 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
//     >
//       <div
//         className={`flex shrink-0 items-center gap-3 rounded-xl border-l-4 p-3 transition-colors duration-200 lg:w-48 lg:flex-col lg:items-start lg:justify-center ${
//           showAllServices ? "border-[#14B8A6] bg-[#14B8A6]/5" : "border-transparent hover:border-[#14B8A6]/25 hover:bg-slate-50"
//         }`}
//       >
//         <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(20,184,166,0.12)", color: BRAND }}>
//           <Icon size={16} />
//         </div>

//         <div className="flex-1 lg:flex-none">
//           <h2 className="text-[15px] font-black tracking-tight" style={{ color: INK }}>
//             {group.title}
//           </h2>

//           <button
//             type="button"
//             onClick={() => setShowAllServices(!showAllServices)}
//             className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold transition"
//             style={{ color: BRAND }}
//           >
//             {showAllServices ? "View Less" : "View All"}
//             {showAllServices ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
//           </button>
//         </div>
//       </div>

//       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//         {services.length ? (
//           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
//             <ServiceItem key={service.id} service={service} index={index} />
//           ))
//         ) : (
//           <div className="col-span-full flex h-20 items-center justify-center text-xs" style={{ color: MUTED }}>
//             No services available.
//           </div>
//         )}
//       </div>
//     </motion.section>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Scroll-pinned hero story data                                      */
// /* Each entry drives: left copy, dashboard stats, chart, a live entry */
// /* list, and a notification toast — one per service category.         */
// /* ------------------------------------------------------------------ */
// const sidebarNavIcons = [LayoutDashboard, BarChart3, WalletCards, ClipboardList, FileText, UsersRound];

// /* ------------------------------------------------------------------ */
// /* Page-wide scale. Kept as one constant so the zoom on <main> and the */
// /* pinned-hero offset below always agree with each other.             */
// /* ------------------------------------------------------------------ */
// const PAGE_ZOOM = 0.605;

// /* Real, on-screen height (in normal px, NOT affected by PAGE_ZOOM) of  */
// /* your fixed/sticky navbar that lives outside this file. The navbar   */
// /* isn't scaled by <main>'s zoom, so we convert its real height into   */
// /* the zoomed coordinate space <main> is rendering in, and use that as */
// /* the pinned hero's `top` offset so it sticks BELOW the navbar rather */
// /* than flush against the true viewport top (where it was hiding).    */
// /* Adjust NAV_HEIGHT_PX to match your navbar's actual rendered height. */
// const NAV_HEIGHT_PX = 96;
// const HERO_TOP_OFFSET = Math.round(NAV_HEIGHT_PX / PAGE_ZOOM);

// const heroBars = [
//   { a: 55, b: 35 }, { a: 70, b: 50 }, { a: 45, b: 60 }, { a: 80, b: 55 }, { a: 60, b: 40 },
//   { a: 90, b: 65 }, { a: 50, b: 45 }, { a: 75, b: 50 }, { a: 65, b: 55 },
// ];

// const heroStories = [
//   {
//     index: 0,
//     icon: WalletCards,
//     title: "Payment Solutions",
//     heading: (
//       <>
//         Collect Payments <span style={{ color: BRAND }}>From Anywhere</span>
//       </>
//     ),
//     description: "QR codes, sound box, POS devices and payment gateways — accept money in seconds, wherever your customers are.",
//     dashboardSubtitle: "Here's what's happening today",
//     chartLabel: "Revenue Overview",
//     listLabel: "Recent Settlements",
//     stats: [
//       { label: "Total Revenue", value: 18.2, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "23.5%" },
//       { label: "Transactions", value: 124820, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "18.7%" },
//       { label: "Success Rate", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.6%" },
//     ],
//     chartData: heroBars,
//     entries: [
//       { icon: Banknote, title: "₹1,24,500", meta: "Settled · Today, 10:30 AM" },
//       { icon: Banknote, title: "₹87,500", meta: "Settled · Today, 09:15 AM" },
//     ],
//     notification: { icon: QrCode, title: "₹5,200 received via UPI", time: "Just now" },
//   },
//   {
//     index: 1,
//     icon: Landmark,
//     title: "Banking Services",
//     heading: (
//       <>
//         Banking Services, <span style={{ color: BRAND }}>Right Next Door</span>
//       </>
//     ),
//     description: "AEPS, Micro ATM, BBPS bill payments and cash management — bring the branch to your customer's doorstep.",
//     dashboardSubtitle: "Banking desk overview",
//     chartLabel: "AEPS Volume",
//     listLabel: "Recent Withdrawals",
//     stats: [
//       { label: "AEPS Volume", value: 6.4, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "15.2%" },
//       { label: "Bills Paid", value: 48300, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "12.4%" },
//       { label: "Active Kiosks", value: 2180, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "9.1%" },
//     ],
//     chartData: [
//       { a: 40, b: 30 }, { a: 55, b: 45 }, { a: 35, b: 50 }, { a: 65, b: 40 }, { a: 50, b: 35 },
//       { a: 75, b: 55 }, { a: 45, b: 40 }, { a: 60, b: 45 }, { a: 52, b: 38 },
//     ],
//     entries: [
//       { icon: Landmark, title: "₹2,400 withdrawn", meta: "AEPS · 2 min ago" },
//       { icon: Landmark, title: "₹1,150 bill paid", meta: "BBPS · 6 min ago" },
//     ],
//     notification: { icon: Fingerprint, title: "AEPS withdrawal ₹2,400 done", time: "Just now" },
//   },
//   {
//     index: 2,
//     icon: Banknote,
//     title: "Financial Services",
//     heading: (
//       <>
//         Fuel Growth With <span style={{ color: BRAND }}>Smart Lending</span>
//       </>
//     ),
//     description: "Business loans, personal loans and insurance — sourced and approved with fully digital onboarding.",
//     dashboardSubtitle: "Lending desk overview",
//     chartLabel: "Loans Disbursed",
//     listLabel: "Recent Approvals",
//     stats: [
//       { label: "Loans Disbursed", value: 42.6, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "31.2%" },
//       { label: "Applications", value: 8940, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "22.5%" },
//       { label: "Approval Rate", value: 87, format: (v) => `${v.toFixed(0)}%`, delta: "4.1%" },
//     ],
//     chartData: [
//       { a: 30, b: 20 }, { a: 45, b: 35 }, { a: 60, b: 40 }, { a: 50, b: 55 }, { a: 70, b: 45 },
//       { a: 55, b: 60 }, { a: 80, b: 50 }, { a: 65, b: 55 }, { a: 75, b: 60 },
//     ],
//     entries: [
//       { icon: Banknote, title: "₹2,00,000 approved", meta: "Business loan · 3 min ago" },
//       { icon: ShieldCheck, title: "Policy issued", meta: "Health insurance · 9 min ago" },
//     ],
//     notification: { icon: BadgeCheck, title: "Loan approved for ₹2,00,000", time: "Just now" },
//   },
//   {
//     index: 3,
//     icon: Plane,
//     title: "Travel Services",
//     heading: (
//       <>
//         Book Journeys, <span style={{ color: BRAND }}>Earn Commissions</span>
//       </>
//     ),
//     description: "Flights, trains, buses and hotels — a complete booking engine that pays you on every ticket.",
//     dashboardSubtitle: "Travel desk overview",
//     chartLabel: "Bookings Overview",
//     listLabel: "Recent Bookings",
//     stats: [
//       { label: "Bookings", value: 15720, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "19.8%" },
//       { label: "Commission", value: 38.5, format: (v) => `₹${v.toFixed(1)} L`, delta: "27.6%" },
//       { label: "Avg. Value", value: 4850, format: (v) => `₹${Math.round(v).toLocaleString("en-IN")}`, delta: "6.2%" },
//     ],
//     chartData: [
//       { a: 50, b: 35 }, { a: 40, b: 55 }, { a: 65, b: 45 }, { a: 55, b: 35 }, { a: 70, b: 50 },
//       { a: 45, b: 60 }, { a: 60, b: 40 }, { a: 80, b: 55 }, { a: 50, b: 45 },
//     ],
//     entries: [
//       { icon: Plane, title: "DEL → BOM booked", meta: "Flight · 1 min ago" },
//       { icon: Building2, title: "Hotel confirmed", meta: "Goa · 8 min ago" },
//     ],
//     notification: { icon: Plane, title: "Flight booked: DEL → BOM", time: "Just now" },
//   },
//   {
//     index: 4,
//     icon: Code2,
//     title: "Technology Solutions",
//     heading: (
//       <>
//         Build, Scale <span style={{ color: BRAND }}>and Automate</span>
//       </>
//     ),
//     description: "APIs, merchant dashboards and white-label platforms — the technology backbone for your business.",
//     dashboardSubtitle: "Developer console overview",
//     chartLabel: "API Traffic",
//     listLabel: "Recent Activity",
//     stats: [
//       { label: "API Calls/Day", value: 2.4, format: (v) => `${v.toFixed(1)}M`, delta: "34.7%" },
//       { label: "Uptime", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.1%" },
//       { label: "Integrations", value: 640, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "11.3%" },
//     ],
//     chartData: [
//       { a: 60, b: 40 }, { a: 75, b: 50 }, { a: 55, b: 65 }, { a: 85, b: 55 }, { a: 65, b: 45 },
//       { a: 90, b: 60 }, { a: 70, b: 50 }, { a: 80, b: 65 }, { a: 72, b: 52 },
//     ],
//     entries: [
//       { icon: Code2, title: "API key generated", meta: "Sandbox · 4 min ago" },
//       { icon: LayoutDashboard, title: "Dashboard deployed", meta: "White-label · 12 min ago" },
//     ],
//     notification: { icon: Zap, title: "New API key generated", time: "Just now" },
//   },
// ];

// /* ------------------------------------------------------------------ */
// /* Count-up number helper — animates from the previous value to the   */
// /* next whenever `value` changes (i.e. whenever the active story does)*/
// /* ------------------------------------------------------------------ */
// const useCountUp = (target, duration = 900) => {
//   const [display, setDisplay] = useState(target);
//   const fromRef = useRef(target);

//   useEffect(() => {
//     const from = fromRef.current;
//     const to = target;
//     if (from === to) return undefined;

//     let rafId;
//     let start;

//     const tick = (timestamp) => {
//       if (start === undefined) start = timestamp;
//       const elapsed = timestamp - start;
//       const progress = Math.min(elapsed / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setDisplay(from + (to - from) * eased);
//       if (progress < 1) {
//         rafId = requestAnimationFrame(tick);
//       } else {
//         fromRef.current = to;
//       }
//     };

//     rafId = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(rafId);
//   }, [target, duration]);

//   return display;
// };

// const AnimatedNumber = ({ value, format }) => {
//   const display = useCountUp(value);
//   return <>{format(display)}</>;
// };

// /* ------------------------------------------------------------------ */
// /* Story-driven dashboard mock — same chrome as before, but every      */
// /* number, bar, list row and toast is sourced from the active story   */
// /* ------------------------------------------------------------------ */
// const StoryDashboardMock = ({ story, showNotification }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 26 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: 0.1 }}
//     className="relative mx-auto w-full max-w-md"
//   >
//     <div className="flex overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
//       <div className="hidden w-14 shrink-0 flex-col items-center gap-4 py-4 sm:flex" style={{ backgroundColor: INK }}>
//         <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//           <Fingerprint size={14} />
//         </div>
//         <div className="mt-2 flex flex-col items-center gap-3">
//           {sidebarNavIcons.map((Icon, i) => (
//             <span
//               key={i}
//               className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-300"
//               style={i === story.index ? { backgroundColor: BRAND, color: "#fff" } : { color: "rgba(255,255,255,0.4)" }}
//             >
//               <Icon size={13} />
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="flex-1 p-4">
//         <div className="flex items-start justify-between">
//           <div>
//             <p className="text-[12px] font-black" style={{ color: INK }}>Hello, Abheepay Merchant</p>
//             <p className="text-[9px]" style={{ color: MUTED }}>{story.dashboardSubtitle}</p>
//           </div>
//           <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50" style={{ color: MUTED }}>
//             <Bell size={12} />
//           </span>
//         </div>

//         <div className="mt-3 grid grid-cols-3 gap-2">
//           {story.stats.map((stat) => (
//             <div key={stat.label} className="rounded-lg border border-slate-100 p-2">
//               <p className="text-[7.5px] font-semibold" style={{ color: MUTED }}>{stat.label}</p>
//               <p className="mt-0.5 text-[11px] font-black" style={{ color: INK }}>
//                 <AnimatedNumber value={stat.value} format={stat.format} />
//               </p>
//               <p className="mt-0.5 text-[7.5px] font-bold text-emerald-500">↑ {stat.delta}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
//           <div className="flex items-center justify-between">
//             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.chartLabel}</p>
//             <div className="flex items-center gap-2 text-[7px]" style={{ color: MUTED }}>
//               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />This Month</span>
//               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-slate-300" />Last Month</span>
//             </div>
//           </div>
//           <div className="mt-2 flex h-14 items-end gap-1.5">
//             {story.chartData.map((bar, i) => (
//               <div key={i} className="flex flex-1 items-end gap-[2px]">
//                 <div className="w-full rounded-sm transition-all duration-700 ease-out" style={{ height: `${bar.a}%`, backgroundColor: BRAND }} />
//                 <div className="w-full rounded-sm bg-slate-200 transition-all duration-700 ease-out" style={{ height: `${bar.b}%` }} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
//           <div className="flex items-center justify-between">
//             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.listLabel}</p>
//             <span className="text-[8px] font-bold" style={{ color: BRAND }}>View All</span>
//           </div>
//           <div className="mt-1.5 space-y-1.5">
//             {story.entries.map((entry) => (
//               <div key={entry.title} className="flex items-center justify-between text-[8px]">
//                 <span className="flex items-center gap-1.5" style={{ color: INK }}>
//                   <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//                     <entry.icon size={10} />
//                   </span>
//                   <b>{entry.title}</b>
//                 </span>
//                 <span style={{ color: MUTED }}>{entry.meta}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//     <div
//       className="absolute -bottom-4 -left-4 hidden items-center gap-1.5 rounded-xl px-3 py-2 text-white shadow-lg sm:flex"
//       style={{ backgroundColor: INK }}
//     >
//       <LockKeyhole size={12} />
//       <span className="text-[9px] font-bold">Bank-grade security</span>
//     </div>

//     <AnimatePresence>
//       {showNotification && (
//         <motion.div
//           key={story.title}
//           initial={{ opacity: 0, x: 18, y: -8, scale: 0.92 }}
//           animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//           exit={{ opacity: 0, x: 18, scale: 0.92 }}
//           transition={{ duration: 0.35, ease: "easeOut" }}
//           className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:-right-8"
//         >
//           <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//             <story.notification.icon size={13} />
//           </span>
//           <span>
//             <b className="block text-[10px]" style={{ color: INK }}>{story.notification.title}</b>
//             <span className="text-[8px]" style={{ color: MUTED }}>{story.notification.time}</span>
//           </span>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </motion.div>
// );

// /* ------------------------------------------------------------------ */
// /* Scroll-pinned hero — the section stays fixed on screen while the   */
// /* user scrolls through it; every story below drives new left copy,   */
// /* dashboard numbers, chart bars and a notification toast.            */
// /* ------------------------------------------------------------------ */
// const ScrollStoryHero = () => {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showNotification, setShowNotification] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       const raw = Math.min(v, 0.999) * heroStories.length;
//       const idx = Math.max(0, Math.min(heroStories.length - 1, Math.floor(raw)));
//       const local = raw - idx;
//       setActiveIndex((prev) => (prev === idx ? prev : idx));
//       setShowNotification(local > 0.3 && local < 0.85);
//     });
//     return unsubscribe;
//   }, [scrollYProgress]);

//   const story = heroStories[activeIndex];

//   return (
//     <div ref={containerRef} className="relative" style={{ height: `${(heroStories.length * 100) / PAGE_ZOOM}vh` }}>
//       <div
//         className="sticky flex items-center overflow-hidden"
//         style={{
//           top: HERO_TOP_OFFSET,
//           height: `calc((100vh / ${PAGE_ZOOM}) - ${HERO_TOP_OFFSET}px)`,
//         }}
//       >
//         <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
//           <div>
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={story.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -18 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//               >
//                 <span
//                   className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold"
//                   style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
//                 >
//                   <story.icon size={11} /> {story.title}
//                 </span>

//                 <h1
//                   className="mt-4 max-w-lg text-[2rem] font-black leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[2.7rem]"
//                   style={{ color: INK }}
//                 >
//                   {story.heading}
//                 </h1>

//                 <p className="mt-4 max-w-md text-[13px] leading-6 sm:text-sm" style={{ color: MUTED }}>
//                   {story.description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>

//             <div className="mt-6 flex flex-wrap gap-2.5">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
//                 style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(20,184,166,0.30)" }}
//               >
//                 Get Started <ArrowRight size={12} />
//               </Link>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
//                 style={{ borderColor: BRAND, color: BRAND }}
//               >
//                 Book a Demo
//               </Link>
//             </div>

//             <div className="mt-8 flex items-center gap-2">
//               {heroStories.map((s, i) => (
//                 <span
//                   key={s.title}
//                   className="h-1.5 rounded-full transition-all duration-500"
//                   style={{ width: i === activeIndex ? 28 : 10, backgroundColor: i === activeIndex ? BRAND : "rgba(20,184,166,0.2)" }}
//                 />
//               ))}
//             </div>
//           </div>

//           <StoryDashboardMock story={story} showNotification={showNotification} />
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Trust strip — generic wordmarks (no real third-party logos)        */
// /* ------------------------------------------------------------------ */
// const trustMarks = ["Vertex Retail", "Nimbus Mart", "Orbit Foods", "Northstar Traders", "Lumen Café", "Rapidcart"];

// /* ------------------------------------------------------------------ */
// /* Dark stat strip with sparklines                                    */
// /* ------------------------------------------------------------------ */
// const statHighlights = [
//   { Icon: Building2, value: "10,000+", label: "Active Merchants", trend: "24% this year", points: [4, 6, 5, 8, 7, 10, 9, 12] },
//   { Icon: WalletCards, value: "₹500 Cr+", label: "Monthly Volume", trend: "18% vs last month", points: [5, 5, 7, 6, 9, 8, 11, 12] },
//   { Icon: ShieldCheck, value: "99.99%", label: "System Uptime", trend: "0.5% this month", points: [9, 9, 9, 10, 9, 10, 10, 10] },
//   { Icon: Headphones, value: "24×7", label: "Customer Support", trend: "Always here for you", points: [6, 7, 6, 8, 7, 9, 8, 9] },
// ];

// /* ------------------------------------------------------------------ */
// /* Live transactions panel data                                       */
// /* ------------------------------------------------------------------ */
// const liveTransactions = [
//   { method: "UPI", amount: "₹5,200", from: "Rahul Kumar", time: "2 sec ago" },
//   { method: "VISA", amount: "₹12,850", from: "Amazon Pay", time: "5 sec ago" },
//   { method: "AEPS", amount: "₹2,400", from: "Customer", time: "8 sec ago" },
//   { method: "UPI", amount: "₹8,950", from: "PhonePe", time: "12 sec ago" },
//   { method: "MC", amount: "₹1,650", from: "Credit Card", time: "15 sec ago" },
// ];

// const methodStyles = {
//   UPI: { bg: BRAND_SOFT, color: BRAND },
//   VISA: { bg: "rgba(11,18,32,0.08)", color: INK },
//   AEPS: { bg: "rgba(20,184,166,0.16)", color: "#0F9488" },
//   MC: { bg: "rgba(249,115,22,0.12)", color: "#EA580C" },
// };

// /* ------------------------------------------------------------------ */
// /* Platform feature list                                              */
// /* ------------------------------------------------------------------ */
// const platformFeatures = [
//   { Icon: Zap, title: "Easy Integration", desc: "Quick setup with developer-friendly APIs" },
//   { Icon: BarChart3, title: "Real-time Analytics", desc: "Track performance with advanced insights" },
//   { Icon: ShieldCheck, title: "Secure & Compliant", desc: "Bank-grade security with RBI compliance" },
//   { Icon: TrendingUp, title: "Scalable Infrastructure", desc: "Built to handle billions of transactions" },
// ];

// /* ------------------------------------------------------------------ */
// /* Floating "Total Collection" mock beside the feature list           */
// /* ------------------------------------------------------------------ */
// const collectionBars = [30, 55, 40, 70, 50, 85, 60, 95, 65];

// const TotalCollectionMock = () => (
//   <div className="relative mx-auto hidden w-full max-w-[15rem] lg:block">
//     <motion.div
//       initial={{ opacity: 0, y: 24, rotate: -3 }}
//       whileInView={{ opacity: 1, y: 0, rotate: -3 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="rounded-2xl p-4 text-white shadow-xl"
//       style={{ backgroundColor: BRAND }}
//     >
//       <p className="text-[10px] font-semibold text-white/80">Total Collection</p>
//       <p className="mt-1 flex items-center gap-1 text-xl font-black">
//         ₹18,20,450 <span className="text-[10px] font-bold text-white/80">↑ 23.5%</span>
//       </p>
//       <div className="mt-3 flex h-14 items-end gap-1">
//         {collectionBars.map((h, i) => (
//           <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />
//         ))}
//       </div>
//       <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2 text-[10px]">
//         <span>
//           <b className="block text-[12px]">1,24,820</b>
//           <span className="text-white/70">Transactions</span>
//         </span>
//         <span className="text-right">
//           <b className="block text-[12px]">99.99%</b>
//           <span className="text-white/70">Success Rate</span>
//         </span>
//       </div>
//     </motion.div>

//     <div className="absolute -right-6 top-6 flex flex-col gap-2">
//       {["UPI", "VISA", "RuPay"].map((label, i) => (
//         <motion.span
//           key={label}
//           initial={{ opacity: 0, x: 12 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15 + i * 0.08 }}
//           className="rounded-lg border border-slate-100 bg-white px-2.5 py-1.5 text-[9px] font-black shadow-md"
//           style={{ color: INK }}
//         >
//           {label}
//         </motion.span>
//       ))}
//     </div>
//   </div>
// );

// /* ------------------------------------------------------------------ */
// /* Business overview mock for the closing CTA                         */
// /* ------------------------------------------------------------------ */
// const revenueTrend = [10, 22, 16, 30, 24, 38, 32, 46, 40, 55, 48, 62];
// const paymentModes = [
//   { label: "UPI", value: 45, color: "#5EEAD4" },
//   { label: "Cards", value: 30, color: BRAND },
//   { label: "Wallets", value: 15, color: "#0F9488" },
//   { label: "Net Banking", value: 10, color: "#134E4A" },
// ];

// const RevenueTrendLine = () => {
//   const width = 220;
//   const height = 60;
//   const max = Math.max(...revenueTrend);
//   const min = Math.min(...revenueTrend);
//   const step = width / (revenueTrend.length - 1);
//   const path = revenueTrend
//     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min)) * height).toFixed(1)}`)
//     .join(" ");
//   return (
//     <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
//       <path d={path} fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// };

// const PaymentModesDonut = () => {
//   let cumulative = 0;
//   const stops = paymentModes
//     .map((mode) => {
//       const start = cumulative;
//       cumulative += mode.value;
//       return `${mode.color} ${start}% ${cumulative}%`;
//     })
//     .join(", ");
//   return (
//     <div className="flex items-center gap-3">
//       <div className="h-16 w-16 shrink-0 rounded-full" style={{ background: `conic-gradient(${stops})` }}>
//         <div className="m-[6px] flex h-[calc(100%-12px)] w-[calc(100%-12px)] items-center justify-center rounded-full" style={{ backgroundColor: INK }} />
//       </div>
//       <div className="space-y-1">
//         {paymentModes.map((mode) => (
//           <div key={mode.label} className="flex items-center gap-1.5 text-[9px] text-white/70">
//             <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: mode.color }} />
//             {mode.label} <span className="font-bold text-white">{mode.value}%</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Services list / landing page                                        */
// /* ------------------------------------------------------------------ */
// const ServiceList = () => {
//   return (
//     <main id="top" className="bg-[#fbfcff] pb-6 font-sans" style={{ color: INK, zoom: PAGE_ZOOM }}>
//       {/* ---------------------------------------------------------------- HERO (scroll-pinned story) */}
//       <section className="relative isolate border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white">
//         <AuroraGlowBackground />
//         <ScrollStoryHero />
//       </section>

//       {/* ---------------------------------------------------------------- TRUST STRIP */}
//       <section className="border-b border-slate-100 bg-white py-6">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <p className="text-center text-[11px] font-semibold" style={{ color: MUTED }}>
//             Trusted by <span className="font-black" style={{ color: BRAND }}>10,000+ businesses</span> across India
//           </p>
//           <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
//             {trustMarks.map((name) => (
//               <span key={name} className="text-sm font-black tracking-tight opacity-60" style={{ color: INK }}>
//                 {name}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
//         {/* ------------------------------------------------------------ SERVICE CATEGORIES */}
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mb-4">
//           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
//             Our Services
//           </p>
//           <div className="mt-1.5 flex items-center justify-between">
//             <h2 className="text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
//               Explore Our Service Categories
//             </h2>
//             <a href="#payment-solutions" className="hidden text-[11px] font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: BRAND }}>
//               Explore All Services <ArrowRight size={10} />
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           variants={staggerContainer}
//           className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
//         >
//           {groupDefinitions.map((group) => (
//             <motion.div key={group.title} variants={fadeInUp}>
//               <CategoryCard title={group.title} description={group.description} Icon={group.icon} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ------------------------------------------------------------ DARK STAT STRIP */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="mt-6 grid overflow-hidden rounded-2xl text-white sm:grid-cols-2 lg:grid-cols-4"
//           style={{ backgroundColor: INK }}
//         >
//           {statHighlights.map(({ Icon, value, label, trend, points }) => (
//             <div key={label} className="flex items-center justify-between gap-3 border-white/10 p-4 sm:border-r last:border-r-0">
//               <div className="flex items-center gap-2.5">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: "#5EEAD4" }}>
//                   <Icon size={15} />
//                 </span>
//                 <span>
//                   <b className="block text-sm">{value}</b>
//                   <small className="text-[9px] text-slate-300">{label}</small>
//                 </span>
//               </div>
//               <div className="hidden flex-col items-end gap-0.5 sm:flex">
//                 <Sparkline points={points} />
//                 <span className="text-[8px] font-semibold text-emerald-400">↑ {trend}</span>
//               </div>
//             </div>
//           ))}
//         </motion.section>

//         {/* ------------------------------------------------------------ LIVE TRANSACTIONS + PLATFORM FEATURES */}
//         <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={fadeInUp}
//             className="rounded-2xl border border-slate-200 bg-white p-4"
//           >
//             <div className="flex items-center justify-between">
//               <h3 className="text-[13px] font-black" style={{ color: INK }}>Live Transactions</h3>
//               <span className="text-[10px] font-bold" style={{ color: BRAND }}>View All</span>
//             </div>
//             <div className="mt-3 divide-y divide-slate-100">
//               {liveTransactions.map((tx, i) => {
//                 const style = methodStyles[tx.method] || methodStyles.UPI;
//                 return (
//                   <div key={i} className="flex items-center justify-between gap-3 py-2.5">
//                     <div className="flex items-center gap-2.5">
//                       <span
//                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-black"
//                         style={{ backgroundColor: style.bg, color: style.color }}
//                       >
//                         {tx.method}
//                       </span>
//                       <span>
//                         <b className="block text-[12px]" style={{ color: INK }}>{tx.amount}</b>
//                         <span className="text-[10px]" style={{ color: MUTED }}>From {tx.from}</span>
//                       </span>
//                     </div>
//                     <span className="text-right">
//                       <span className="block text-[10px] font-bold text-emerald-500">Success</span>
//                       <span className="text-[9px]" style={{ color: MUTED }}>{tx.time}</span>
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//             <p className="mt-3 flex items-center gap-1.5 text-[10px]" style={{ color: MUTED }}>
//               <LockKeyhole size={10} /> All transactions are secure and encrypted
//             </p>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={fadeInUp}
//             className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]"
//           >
//             <div>
//               <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
//                 One Platform. Endless Possibilities.
//               </p>
//               <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] leading-tight" style={{ color: INK }}>
//                 Everything You Need, <span style={{ color: BRAND }}>All in One Platform</span>
//               </h2>
//               <p className="mt-3 text-[13px] leading-6" style={{ color: MUTED }}>
//                 From payments to banking, lending to travel — manage your entire business
//                 financial ecosystem from a single, powerful platform.
//               </p>

//               <div className="mt-5 space-y-3.5">
//                 {platformFeatures.map(({ Icon, title, desc }) => (
//                   <div key={title} className="flex items-start gap-2.5">
//                     <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//                       <Icon size={13} />
//                     </span>
//                     <span>
//                       <b className="block text-[12.5px] font-bold" style={{ color: INK }}>{title}</b>
//                       <span className="text-[11.5px]" style={{ color: MUTED }}>{desc}</span>
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <TotalCollectionMock />
//           </motion.div>
//         </div>

//         {/* ------------------------------------------------------------ SERVICE ROWS (real links) */}
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mt-8">
//           <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
//             Unified Experience
//           </p>
//           <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-[-0.03em] leading-tight" style={{ color: INK }}>
//             Every Service, <span style={{ color: BRAND }}>At Your Fingertips</span>
//           </h2>
//         </motion.div>

//         <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-2">
//           {groupDefinitions.map((group) => (
//             <ServiceRow key={group.title} group={group} />
//           ))}
//         </div>

//         {/* ------------------------------------------------------------ CLOSING CTA */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="relative mt-8 overflow-hidden rounded-2xl px-5 py-8 text-white sm:px-8"
//           style={{ backgroundColor: INK }}
//         >
//           <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
//           <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
//             <div>
//               <p className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: "#5EEAD4" }}>
//                 Get Started Today
//               </p>
//               <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] leading-tight sm:text-4xl">
//                 Ready to Transform Your Business?
//               </h2>
//               <p className="mt-2 max-w-md text-[12px] text-white/70 sm:text-[13px]">
//                 Join thousands of businesses already growing with our complete financial ecosystem.
//               </p>
//               <div className="mt-5 flex flex-wrap items-center gap-2.5">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
//                   style={{ backgroundColor: BRAND }}
//                 >
//                   Get Started <ArrowRight size={11} />
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
//                 >
//                   Contact Sales
//                 </Link>
//               </div>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
//               <div className="flex items-center justify-between">
//                 <p className="text-[11px] font-bold">Business Overview</p>
//                 <span className="text-[9px] text-white/60">This Month</span>
//               </div>
//               <div className="mt-3 grid grid-cols-3 gap-2">
//                 {[
//                   ["Total Revenue", "₹18.2 Cr", "23.5%"],
//                   ["Transactions", "1,24,820", "18.7%"],
//                   ["Success Rate", "99.99%", "0.6%"],
//                 ].map(([label, value, delta]) => (
//                   <div key={label} className="rounded-lg border border-white/10 p-2">
//                     <p className="text-[8px] text-white/60">{label}</p>
//                     <p className="text-[11px] font-black">{value}</p>
//                     <p className="text-[8px] font-bold text-emerald-400">↑ {delta}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
//                 <p className="text-[9px] font-bold text-white/80">Revenue Trend</p>
//                 <div className="mt-1">
//                   <RevenueTrendLine />
//                 </div>
//               </div>
//               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
//                 <p className="mb-2 text-[9px] font-bold text-white/80">Top Payment Modes</p>
//                 <PaymentModesDonut />
//               </div>
//             </div>
//           </div>
//         </motion.section>
//       </div>
//     </main>
//   );
// };

// /* ==================================================================== */
// /* EVERYTHING BELOW THIS LINE IS UNCHANGED — the service detail page    */
// /* ==================================================================== */

// /* ------------------------------------------------------------------ */
// /* Service detail page (unchanged logic, retouched palette)            */
// /* ------------------------------------------------------------------ */
// const ServiceDetail = ({ service, category }) => {
//   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
//   const features = service.features || [];
//   const highlights = service.benefits || [];
//   const categoryLabel = category || "Our Services";

//   const nameWords = service.name.trim().split(" ");
//   const lastWord = nameWords.pop();
//   const restName = nameWords.join(" ");

//   return (
//     <div className="bg-white font-sans" style={{ color: INK }}>
//       {/* Hero */}
//       <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
//         <AuroraGlowBackground />
//         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.span
//               variants={fadeInUp}
//               className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
//               style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
//             >
//               <FileText size={10} /> {categoryLabel}
//             </motion.span>

//             <motion.h1
//               variants={fadeInUp}
//               className="mt-3 text-[1.7rem] font-black leading-[1.1] sm:text-3xl md:text-[1.95rem]"
//               style={{ color: INK }}
//             >
//               {restName ? `${restName} ` : ""}
//               <span style={{ color: BRAND }}>{lastWord}</span>
//             </motion.h1>

//             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8" style={{ backgroundColor: BRAND }} />

//             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5" style={{ color: MUTED }}>
//               {service.longDescription || service.description}
//             </motion.p>

//             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
//               <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
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
//             <div className="relative overflow-hidden rounded-2xl shadow-xl">
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
//                 <p className="text-[8px] font-semibold" style={{ color: MUTED }}>In Partnership with</p>
//                 {service.partner.logo ? (
//                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
//                 ) : (
//                   <p className="text-xs font-black" style={{ color: INK }}>{service.partner.name}</p>
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
//             <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
//             <h2 className="mt-2 text-base font-black sm:text-lg" style={{ color: INK }}>
//               Our {categoryLabel}
//             </h2>

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
//                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
//                       style={{ borderColor: undefined }}
//                     >
//                       <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
//                         <Icon size={12} strokeWidth={1.7} />
//                       </div>
//                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug" style={{ color: "#1e293b" }}>{text}</p>
//                       <div className="mt-2 flex justify-end">
//                         <span
//                           className="inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
//                           style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
//                         >
//                           <ArrowRight size={9} />
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             ) : (
//               <p className="mt-4 text-[13px]" style={{ color: MUTED }}>More details coming soon.</p>
//             )}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="relative flex flex-col overflow-hidden rounded-xl p-4 text-white shadow-lg"
//             style={{ backgroundColor: BRAND }}
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
//                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: BRAND }}>
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
//           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:p-6"
//           style={{ backgroundColor: "#f2fbf9" }}
//         >
//           <div className="flex items-center gap-3 text-center sm:text-left">
//             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
//               <Landmark size={20} />
//             </span>
//             <div>
//               <h3 className="text-xl font-black tracking-tight" style={{ color: INK }}>Ready to grow your business?</h3>
//               <p className="mt-1 max-w-sm text-[13px]" style={{ color: MUTED }}>
//                 Explore our services and find the right financial solution that fits your needs.
//               </p>
//             </div>
//           </div>

//           <Link
//             to="/services"
//             className="inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold text-white shadow-md transition hover:opacity-90"
//             style={{ backgroundColor: BRAND }}
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
//       <div className="flex min-h-screen items-center justify-center bg-white text-black">
//         <p className="border-b-2 text-sm font-semibold" style={{ borderColor: BRAND }}>Service not found</p>
//       </div>
//     );
//   }

//   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

//   return <ServiceDetail service={service} category={category} />;
// };

// export default Services;












// import React, { useEffect, useRef, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { AnimatePresence, motion, useScroll } from "framer-motion";
// import {
//   ArrowRight,
//   Banknote,
//   Bell,
//   BadgeCheck,
//   BarChart3,
//   Building2,
//   CheckCircle2,
//   ChevronDown,
//   ChevronUp,
//   ClipboardList,
//   Code2,
//   CreditCard,
//   FileText,
//   Fingerprint,
//   Headphones,
//   Landmark,
//   LayoutDashboard,
//   LockKeyhole,
//   Plane,
//   QrCode,
//   Rocket,
//   ShieldCheck,
//   Smartphone,
//   TrendingUp,
//   UsersRound,
//   WalletCards,
//   Zap,
// } from "lucide-react";
// import servicesData from "./Servicesdata.json";

// /* ------------------------------------------------------------------ */
// /* Design tokens (kept local so nothing outside this file is touched) */
// /* ------------------------------------------------------------------ */
// const BRAND = "#14B8A6"; // primary teal accent
// const BRAND_RGB = "20,184,166"; // rgba helper for BRAND
// const BRAND_SOFT = "rgba(20,184,166,0.10)";
// const INK = "#0B1220"; // near-black heading colour
// const MUTED = "#5B6B84"; // body copy grey

// /* ------------------------------------------------------------------ */
// /* SERVICE-SECTION-ONLY design tokens                                  */
// /* Scoped strictly to the "Explore Our Service Categories" +           */
// /* "Every Service, At Your Fingertips" blocks below, per request.      */
// /* Mirrors the reference screenshot: indigo accent, clean grotesk type,*/
// /* soft-square icon tiles, quiet bordered cards.                       */
// /* ------------------------------------------------------------------ */
// const SVC_FONT = "'Inter', 'Helvetica Neue', Arial, sans-serif";
// const SVC_BRAND = "#14B8A6"; // indigo accent (matches reference)
// const SVC_BRAND_SOFT = "rgba(79,70,229,0.10)";
// const SVC_BRAND_BORDER = "rgba(79,70,229,0.35)";
// const SVC_INK = "#0F172A";
// const SVC_MUTED = "#64748B";

// const groupDefinitions = [
//   { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
//   { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
//   { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
//   { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
//   { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
// ];

// const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
// const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

// /* ------------------------------------------------------------------ */
// /* Shared scroll-reveal animation variants                            */
// /* ------------------------------------------------------------------ */
// const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
// const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

// /* ------------------------------------------------------------------ */
// /* Aurora Glow Background — soft, slowly-drifting teal blobs          */
// /* NOTE: also used on the (untouched) service detail page — left as-is */
// /* ------------------------------------------------------------------ */
// const AuroraGlowBackground = () => (
//   <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
//     <motion.div
//       className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
//       style={{ backgroundColor: "rgba(20,184,166,0.28)" }}
//       animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
//       transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//     />
//     <motion.div
//       className="absolute -right-24 top-4 h-[22rem] w-[22rem] rounded-full blur-3xl"
//       style={{ backgroundColor: "rgba(45,212,191,0.22)" }}
//       animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
//       transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//     />
//     <motion.div
//       className="absolute left-1/3 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full blur-3xl"
//       style={{ backgroundColor: "rgba(14,165,233,0.14)" }}
//       animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
//       transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
//     />
//   </div>
// );

// /* ------------------------------------------------------------------ */
// /* Tiny inline sparkline used in the dark stats strip                 */
// /* ------------------------------------------------------------------ */
// const Sparkline = ({ points, color = "#5EEAD4" }) => {
//   const width = 64;
//   const height = 22;
//   const max = Math.max(...points);
//   const min = Math.min(...points);
//   const step = width / (points.length - 1);
//   const path = points
//     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min || 1)) * height).toFixed(1)}`)
//     .join(" ");
//   return (
//     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
//       <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Category card — icon tile, bold title, quiet description, cta dot  */
// /* Restyled to match the reference screenshot: indigo icon tile,      */
// /* Inter/grotesk type, quiet bordered card, no arrow affordance.      */
// /* ------------------------------------------------------------------ */
// const CategoryCard = ({ title, description, Icon }) => (
//   <a
//     href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
//     className="group flex h-full flex-col rounded-xl border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5"
//     style={{ fontFamily: SVC_FONT, borderColor: "#E7EAF0", boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}
//     onMouseEnter={(e) => { e.currentTarget.style.borderColor = SVC_BRAND_BORDER; e.currentTarget.style.boxShadow = "0 10px 24px rgba(79,70,229,0.12)"; }}
//     onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E7EAF0"; e.currentTarget.style.boxShadow = "0 1px 2px rgba(15,23,42,0.04)"; }}
//   >
//     <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: SVC_BRAND_SOFT, color: SVC_BRAND }}>
//       <Icon size={19} strokeWidth={1.8} />
//     </div>

//     <h3 className="mt-4 text-[18px] font-black leading-tight tracking-[-0.02em] leading-snug" style={{ color: SVC_INK, letterSpacing: "-0.01em" }}>
//       {title}
//     </h3>

//     <p className="mt-2 text-[14px] leading-4 font-medium" style={{ color: SVC_MUTED }}>
//       {description}
//     </p>
//   </a>
// );

// /* ------------------------------------------------------------------ */
// /* Individual service tile inside a category row                      */
// /* Restyled to match the reference screenshot's feature-card look.    */
// /* ------------------------------------------------------------------ */
// const ServiceItem = ({ service, index }) => {
//   const Icon = serviceIcons[index % serviceIcons.length];
//   return (
//     <Link
//       to={`/services/${service.id}`}
//       className="group flex flex-col gap-2 rounded-xl border bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
//       style={{ fontFamily: SVC_FONT, borderColor: "#E7EAF0", boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}
//       onMouseEnter={(e) => { e.currentTarget.style.borderColor = SVC_BRAND_BORDER; e.currentTarget.style.boxShadow = "0 10px 24px rgba(79,70,229,0.12)"; }}
//       onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E7EAF0"; e.currentTarget.style.boxShadow = "0 1px 2px rgba(15,23,42,0.04)"; }}
//     >
//       <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: SVC_BRAND_SOFT, color: SVC_BRAND }}>
//         <Icon size={16} strokeWidth={1.8} />
//       </div>
//       <h4 className="line-clamp-2 text-[17px] font-black leading-[1.3] tracking-[-0.02em]" style={{ color: SVC_INK, letterSpacing: "-0.01em" }}>
//         {service.name.replaceAll("â€“", "–")}
//       </h4>
//       <p className="line-clamp-2 text-[14px] leading-6 font-medium" style={{ color: SVC_MUTED }}>
//         {service.description}
//       </p>
//     </Link>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* One category row: sidebar label + grid of its services             */
// /* Restyled to match the reference screenshot's card language.        */
// /* ------------------------------------------------------------------ */
// const ServiceRow = ({ group }) => {
//   const [showAllServices, setShowAllServices] = useState(false);
//   const Icon = group.icon;

//   const serviceMap = new Map(servicesData.map((service) => [service.id, service]));
//   const services = group.ids.map((id) => serviceMap.get(id)).filter(Boolean);

//   return (
//     <motion.section
//       id={group.title.toLowerCase().replace(/\s+/g, "-")}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeInUp}
//       className="flex flex-col gap-3 border-b py-5 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
//       style={{ fontFamily: SVC_FONT, borderColor: "#EEF1F6" }}
//     >
//       <div
//         className="flex shrink-0 items-center gap-3 rounded-xl border p-3 transition-colors duration-200 lg:w-48 lg:flex-col lg:items-start lg:justify-center"
//         style={{
//           borderColor: showAllServices ? SVC_BRAND_BORDER : "transparent",
//           backgroundColor: showAllServices ? SVC_BRAND_SOFT : "transparent",
//         }}
//       >
//         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: SVC_BRAND_SOFT, color: SVC_BRAND }}>
//           <Icon size={17} />
//         </div>

//         <div className="flex-1 lg:flex-none">
//           <h2 className="text-[19px] font-black tracking-[-0.02em]" style={{ color: SVC_INK, letterSpacing: "-0.01em" }}>
//             {group.title}
//           </h2>

//           <button
//             type="button"
//             onClick={() => setShowAllServices(!showAllServices)}
//             className="mt-1 inline-flex items-center gap-1 text-[11.5px] font-bold transition"
//             style={{ color: SVC_BRAND }}
//           >
//             {showAllServices ? "View Less" : "View All"}
//             {showAllServices ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
//           </button>
//         </div>
//       </div>

//       <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
//         {services.length ? (
//           (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
//             <ServiceItem key={service.id} service={service} index={index} />
//           ))
//         ) : (
//           <div className="col-span-full flex h-20 items-center justify-center text-xs" style={{ color: SVC_MUTED, fontFamily: SVC_FONT }}>
//             No services available.
//           </div>
//         )}
//       </div>
//     </motion.section>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Scroll-pinned hero story data                                      */
// /* Each entry drives: left copy, dashboard stats, chart, a live entry */
// /* list, and a notification toast — one per service category.         */
// /* ------------------------------------------------------------------ */
// const sidebarNavIcons = [LayoutDashboard, BarChart3, WalletCards, ClipboardList, FileText, UsersRound];

// /* ------------------------------------------------------------------ */
// /* Page-wide scale. Kept as one constant so the zoom on <main> and the */
// /* pinned-hero offset below always agree with each other.             */
// /* ------------------------------------------------------------------ */
// const PAGE_ZOOM = 0.605;

// /* Real, on-screen height (in normal px, NOT affected by PAGE_ZOOM) of  */
// /* your fixed/sticky navbar that lives outside this file. The navbar   */
// /* isn't scaled by <main>'s zoom, so we convert its real height into   */
// /* the zoomed coordinate space <main> is rendering in, and use that as */
// /* the pinned hero's `top` offset so it sticks BELOW the navbar rather */
// /* than flush against the true viewport top (where it was hiding).    */
// /* Adjust NAV_HEIGHT_PX to match your navbar's actual rendered height. */
// const NAV_HEIGHT_PX = 96;
// const HERO_TOP_OFFSET = Math.round(NAV_HEIGHT_PX / PAGE_ZOOM);

// const heroBars = [
//   { a: 55, b: 35 }, { a: 70, b: 50 }, { a: 45, b: 60 }, { a: 80, b: 55 }, { a: 60, b: 40 },
//   { a: 90, b: 65 }, { a: 50, b: 45 }, { a: 75, b: 50 }, { a: 65, b: 55 },
// ];

// const heroStories = [
//   {
//     index: 0,
//     icon: WalletCards,
//     title: "Payment Solutions",
//     heading: (
//       <>
//         Collect Payments <span style={{ color: BRAND }}>From Anywhere</span>
//       </>
//     ),
//     description: "QR codes, sound box, POS devices and payment gateways — accept money in seconds, wherever your customers are.",
//     dashboardSubtitle: "Here's what's happening today",
//     chartLabel: "Revenue Overview",
//     listLabel: "Recent Settlements",
//     stats: [
//       { label: "Total Revenue", value: 18.2, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "23.5%" },
//       { label: "Transactions", value: 124820, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "18.7%" },
//       { label: "Success Rate", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.6%" },
//     ],
//     chartData: heroBars,
//     entries: [
//       { icon: Banknote, title: "₹1,24,500", meta: "Settled · Today, 10:30 AM" },
//       { icon: Banknote, title: "₹87,500", meta: "Settled · Today, 09:15 AM" },
//     ],
//     notification: { icon: QrCode, title: "₹5,200 received via UPI", time: "Just now" },
//   },
//   {
//     index: 1,
//     icon: Landmark,
//     title: "Banking Services",
//     heading: (
//       <>
//         Banking Services, <span style={{ color: BRAND }}>Right Next Door</span>
//       </>
//     ),
//     description: "AEPS, Micro ATM, BBPS bill payments and cash management — bring the branch to your customer's doorstep.",
//     dashboardSubtitle: "Banking desk overview",
//     chartLabel: "AEPS Volume",
//     listLabel: "Recent Withdrawals",
//     stats: [
//       { label: "AEPS Volume", value: 6.4, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "15.2%" },
//       { label: "Bills Paid", value: 48300, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "12.4%" },
//       { label: "Active Kiosks", value: 2180, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "9.1%" },
//     ],
//     chartData: [
//       { a: 40, b: 30 }, { a: 55, b: 45 }, { a: 35, b: 50 }, { a: 65, b: 40 }, { a: 50, b: 35 },
//       { a: 75, b: 55 }, { a: 45, b: 40 }, { a: 60, b: 45 }, { a: 52, b: 38 },
//     ],
//     entries: [
//       { icon: Landmark, title: "₹2,400 withdrawn", meta: "AEPS · 2 min ago" },
//       { icon: Landmark, title: "₹1,150 bill paid", meta: "BBPS · 6 min ago" },
//     ],
//     notification: { icon: Fingerprint, title: "AEPS withdrawal ₹2,400 done", time: "Just now" },
//   },
//   {
//     index: 2,
//     icon: Banknote,
//     title: "Financial Services",
//     heading: (
//       <>
//         Fuel Growth With <span style={{ color: BRAND }}>Smart Lending</span>
//       </>
//     ),
//     description: "Business loans, personal loans and insurance — sourced and approved with fully digital onboarding.",
//     dashboardSubtitle: "Lending desk overview",
//     chartLabel: "Loans Disbursed",
//     listLabel: "Recent Approvals",
//     stats: [
//       { label: "Loans Disbursed", value: 42.6, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "31.2%" },
//       { label: "Applications", value: 8940, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "22.5%" },
//       { label: "Approval Rate", value: 87, format: (v) => `${v.toFixed(0)}%`, delta: "4.1%" },
//     ],
//     chartData: [
//       { a: 30, b: 20 }, { a: 45, b: 35 }, { a: 60, b: 40 }, { a: 50, b: 55 }, { a: 70, b: 45 },
//       { a: 55, b: 60 }, { a: 80, b: 50 }, { a: 65, b: 55 }, { a: 75, b: 60 },
//     ],
//     entries: [
//       { icon: Banknote, title: "₹2,00,000 approved", meta: "Business loan · 3 min ago" },
//       { icon: ShieldCheck, title: "Policy issued", meta: "Health insurance · 9 min ago" },
//     ],
//     notification: { icon: BadgeCheck, title: "Loan approved for ₹2,00,000", time: "Just now" },
//   },
//   {
//     index: 3,
//     icon: Plane,
//     title: "Travel Services",
//     heading: (
//       <>
//         Book Journeys, <span style={{ color: BRAND }}>Earn Commissions</span>
//       </>
//     ),
//     description: "Flights, trains, buses and hotels — a complete booking engine that pays you on every ticket.",
//     dashboardSubtitle: "Travel desk overview",
//     chartLabel: "Bookings Overview",
//     listLabel: "Recent Bookings",
//     stats: [
//       { label: "Bookings", value: 15720, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "19.8%" },
//       { label: "Commission", value: 38.5, format: (v) => `₹${v.toFixed(1)} L`, delta: "27.6%" },
//       { label: "Avg. Value", value: 4850, format: (v) => `₹${Math.round(v).toLocaleString("en-IN")}`, delta: "6.2%" },
//     ],
//     chartData: [
//       { a: 50, b: 35 }, { a: 40, b: 55 }, { a: 65, b: 45 }, { a: 55, b: 35 }, { a: 70, b: 50 },
//       { a: 45, b: 60 }, { a: 60, b: 40 }, { a: 80, b: 55 }, { a: 50, b: 45 },
//     ],
//     entries: [
//       { icon: Plane, title: "DEL → BOM booked", meta: "Flight · 1 min ago" },
//       { icon: Building2, title: "Hotel confirmed", meta: "Goa · 8 min ago" },
//     ],
//     notification: { icon: Plane, title: "Flight booked: DEL → BOM", time: "Just now" },
//   },
//   {
//     index: 4,
//     icon: Code2,
//     title: "Technology Solutions",
//     heading: (
//       <>
//         Build, Scale <span style={{ color: BRAND }}>and Automate</span>
//       </>
//     ),
//     description: "APIs, merchant dashboards and white-label platforms — the technology backbone for your business.",
//     dashboardSubtitle: "Developer console overview",
//     chartLabel: "API Traffic",
//     listLabel: "Recent Activity",
//     stats: [
//       { label: "API Calls/Day", value: 2.4, format: (v) => `${v.toFixed(1)}M`, delta: "34.7%" },
//       { label: "Uptime", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.1%" },
//       { label: "Integrations", value: 640, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "11.3%" },
//     ],
//     chartData: [
//       { a: 60, b: 40 }, { a: 75, b: 50 }, { a: 55, b: 65 }, { a: 85, b: 55 }, { a: 65, b: 45 },
//       { a: 90, b: 60 }, { a: 70, b: 50 }, { a: 80, b: 65 }, { a: 72, b: 52 },
//     ],
//     entries: [
//       { icon: Code2, title: "API key generated", meta: "Sandbox · 4 min ago" },
//       { icon: LayoutDashboard, title: "Dashboard deployed", meta: "White-label · 12 min ago" },
//     ],
//     notification: { icon: Zap, title: "New API key generated", time: "Just now" },
//   },
// ];

// /* ------------------------------------------------------------------ */
// /* Count-up number helper — animates from the previous value to the   */
// /* next whenever `value` changes (i.e. whenever the active story does)*/
// /* ------------------------------------------------------------------ */
// const useCountUp = (target, duration = 900) => {
//   const [display, setDisplay] = useState(target);
//   const fromRef = useRef(target);

//   useEffect(() => {
//     const from = fromRef.current;
//     const to = target;
//     if (from === to) return undefined;

//     let rafId;
//     let start;

//     const tick = (timestamp) => {
//       if (start === undefined) start = timestamp;
//       const elapsed = timestamp - start;
//       const progress = Math.min(elapsed / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setDisplay(from + (to - from) * eased);
//       if (progress < 1) {
//         rafId = requestAnimationFrame(tick);
//       } else {
//         fromRef.current = to;
//       }
//     };

//     rafId = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(rafId);
//   }, [target, duration]);

//   return display;
// };

// const AnimatedNumber = ({ value, format }) => {
//   const display = useCountUp(value);
//   return <>{format(display)}</>;
// };

// /* ------------------------------------------------------------------ */
// /* Story-driven dashboard mock — same chrome as before, but every      */
// /* number, bar, list row and toast is sourced from the active story   */
// /* ------------------------------------------------------------------ */
// const StoryDashboardMock = ({ story, showNotification }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 26 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: 0.1 }}
//     className="relative mx-auto w-full max-w-md"
//   >
//     <div className="flex overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
//       <div className="hidden w-14 shrink-0 flex-col items-center gap-4 py-4 sm:flex" style={{ backgroundColor: INK }}>
//         <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//           <Fingerprint size={14} />
//         </div>
//         <div className="mt-2 flex flex-col items-center gap-3">
//           {sidebarNavIcons.map((Icon, i) => (
//             <span
//               key={i}
//               className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-300"
//               style={i === story.index ? { backgroundColor: BRAND, color: "#fff" } : { color: "rgba(255,255,255,0.4)" }}
//             >
//               <Icon size={13} />
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="flex-1 p-4">
//         <div className="flex items-start justify-between">
//           <div>
//             <p className="text-[12px] font-black" style={{ color: INK }}>Hello, Abheepay Merchant</p>
//             <p className="text-[9px]" style={{ color: MUTED }}>{story.dashboardSubtitle}</p>
//           </div>
//           <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50" style={{ color: MUTED }}>
//             <Bell size={12} />
//           </span>
//         </div>

//         <div className="mt-3 grid grid-cols-3 gap-2">
//           {story.stats.map((stat) => (
//             <div key={stat.label} className="rounded-lg border border-slate-100 p-2">
//               <p className="text-[7.5px] font-semibold" style={{ color: MUTED }}>{stat.label}</p>
//               <p className="mt-0.5 text-[11px] font-black" style={{ color: INK }}>
//                 <AnimatedNumber value={stat.value} format={stat.format} />
//               </p>
//               <p className="mt-0.5 text-[7.5px] font-bold text-emerald-500">↑ {stat.delta}</p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
//           <div className="flex items-center justify-between">
//             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.chartLabel}</p>
//             <div className="flex items-center gap-2 text-[7px]" style={{ color: MUTED }}>
//               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />This Month</span>
//               <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-slate-300" />Last Month</span>
//             </div>
//           </div>
//           <div className="mt-2 flex h-14 items-end gap-1.5">
//             {story.chartData.map((bar, i) => (
//               <div key={i} className="flex flex-1 items-end gap-[2px]">
//                 <div className="w-full rounded-sm transition-all duration-700 ease-out" style={{ height: `${bar.a}%`, backgroundColor: BRAND }} />
//                 <div className="w-full rounded-sm bg-slate-200 transition-all duration-700 ease-out" style={{ height: `${bar.b}%` }} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
//           <div className="flex items-center justify-between">
//             <p className="text-[9px] font-bold" style={{ color: INK }}>{story.listLabel}</p>
//             <span className="text-[8px] font-bold" style={{ color: BRAND }}>View All</span>
//           </div>
//           <div className="mt-1.5 space-y-1.5">
//             {story.entries.map((entry) => (
//               <div key={entry.title} className="flex items-center justify-between text-[8px]">
//                 <span className="flex items-center gap-1.5" style={{ color: INK }}>
//                   <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//                     <entry.icon size={10} />
//                   </span>
//                   <b>{entry.title}</b>
//                 </span>
//                 <span style={{ color: MUTED }}>{entry.meta}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//     <div
//       className="absolute -bottom-4 -left-4 hidden items-center gap-1.5 rounded-xl px-3 py-2 text-white shadow-lg sm:flex"
//       style={{ backgroundColor: INK }}
//     >
//       <LockKeyhole size={12} />
//       <span className="text-[9px] font-bold">Bank-grade security</span>
//     </div>

//     <AnimatePresence>
//       {showNotification && (
//         <motion.div
//           key={story.title}
//           initial={{ opacity: 0, x: 18, y: -8, scale: 0.92 }}
//           animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
//           exit={{ opacity: 0, x: 18, scale: 0.92 }}
//           transition={{ duration: 0.35, ease: "easeOut" }}
//           className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:-right-8"
//         >
//           <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//             <story.notification.icon size={13} />
//           </span>
//           <span>
//             <b className="block text-[10px]" style={{ color: INK }}>{story.notification.title}</b>
//             <span className="text-[8px]" style={{ color: MUTED }}>{story.notification.time}</span>
//           </span>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </motion.div>
// );

// /* ------------------------------------------------------------------ */
// /* Scroll-pinned hero — the section stays fixed on screen while the   */
// /* user scrolls through it; every story below drives new left copy,   */
// /* dashboard numbers, chart bars and a notification toast.            */
// /* ------------------------------------------------------------------ */
// const ScrollStoryHero = () => {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [showNotification, setShowNotification] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (v) => {
//       const raw = Math.min(v, 0.999) * heroStories.length;
//       const idx = Math.max(0, Math.min(heroStories.length - 1, Math.floor(raw)));
//       const local = raw - idx;
//       setActiveIndex((prev) => (prev === idx ? prev : idx));
//       setShowNotification(local > 0.3 && local < 0.85);
//     });
//     return unsubscribe;
//   }, [scrollYProgress]);

//   const story = heroStories[activeIndex];

//   return (
//     <div ref={containerRef} className="relative" style={{ height: `${(heroStories.length * 100) / PAGE_ZOOM}vh` }}>
//       <div
//         className="sticky flex items-center overflow-hidden"
//         style={{
//           top: HERO_TOP_OFFSET,
//           height: `calc((100vh / ${PAGE_ZOOM}) - ${HERO_TOP_OFFSET}px)`,
//         }}
//       >
//         <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
//           <div>
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={story.title}
//                 initial={{ opacity: 0, y: 18 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -18 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//               >
//                 <span
//                   className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold"
//                   style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
//                 >
//                   <story.icon size={11} /> {story.title}
//                 </span>

//                 <h1
//                   className="mt-4 max-w-lg text-[2rem] font-black leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[2.7rem]"
//                   style={{ color: INK }}
//                 >
//                   {story.heading}
//                 </h1>

//                 <p className="mt-4 max-w-md text-[13px] leading-6 sm:text-sm" style={{ color: MUTED }}>
//                   {story.description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>

//             <div className="mt-6 flex flex-wrap gap-2.5">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
//                 style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(20,184,166,0.30)" }}
//               >
//                 Get Started <ArrowRight size={12} />
//               </Link>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
//                 style={{ borderColor: BRAND, color: BRAND }}
//               >
//                 Book a Demo
//               </Link>
//             </div>

//             <div className="mt-8 flex items-center gap-2">
//               {heroStories.map((s, i) => (
//                 <span
//                   key={s.title}
//                   className="h-1.5 rounded-full transition-all duration-500"
//                   style={{ width: i === activeIndex ? 28 : 10, backgroundColor: i === activeIndex ? BRAND : "rgba(20,184,166,0.2)" }}
//                 />
//               ))}
//             </div>
//           </div>

//           <StoryDashboardMock story={story} showNotification={showNotification} />
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Trust strip — generic wordmarks (no real third-party logos)        */
// /* ------------------------------------------------------------------ */
// const trustMarks = ["Vertex Retail", "Nimbus Mart", "Orbit Foods", "Northstar Traders", "Lumen Café", "Rapidcart"];

// /* ------------------------------------------------------------------ */
// /* Dark stat strip with sparklines                                    */
// /* ------------------------------------------------------------------ */
// const statHighlights = [
//   { Icon: Building2, value: "10,000+", label: "Active Merchants", trend: "24% this year", points: [4, 6, 5, 8, 7, 10, 9, 12] },
//   { Icon: WalletCards, value: "₹500 Cr+", label: "Monthly Volume", trend: "18% vs last month", points: [5, 5, 7, 6, 9, 8, 11, 12] },
//   { Icon: ShieldCheck, value: "99.99%", label: "System Uptime", trend: "0.5% this month", points: [9, 9, 9, 10, 9, 10, 10, 10] },
//   { Icon: Headphones, value: "24×7", label: "Customer Support", trend: "Always here for you", points: [6, 7, 6, 8, 7, 9, 8, 9] },
// ];

// /* ------------------------------------------------------------------ */
// /* Live transactions panel data                                       */
// /* ------------------------------------------------------------------ */
// const liveTransactions = [
//   { method: "UPI", amount: "₹5,200", from: "Rahul Kumar", time: "2 sec ago" },
//   { method: "VISA", amount: "₹12,850", from: "Amazon Pay", time: "5 sec ago" },
//   { method: "AEPS", amount: "₹2,400", from: "Customer", time: "8 sec ago" },
//   { method: "UPI", amount: "₹8,950", from: "PhonePe", time: "12 sec ago" },
//   { method: "MC", amount: "₹1,650", from: "Credit Card", time: "15 sec ago" },
// ];

// const methodStyles = {
//   UPI: { bg: BRAND_SOFT, color: BRAND },
//   VISA: { bg: "rgba(11,18,32,0.08)", color: INK },
//   AEPS: { bg: "rgba(20,184,166,0.16)", color: "#0F9488" },
//   MC: { bg: "rgba(249,115,22,0.12)", color: "#EA580C" },
// };

// /* ------------------------------------------------------------------ */
// /* Platform feature list                                              */
// /* ------------------------------------------------------------------ */
// const platformFeatures = [
//   { Icon: Zap, title: "Easy Integration", desc: "Quick setup with developer-friendly APIs" },
//   { Icon: BarChart3, title: "Real-time Analytics", desc: "Track performance with advanced insights" },
//   { Icon: ShieldCheck, title: "Secure & Compliant", desc: "Bank-grade security with RBI compliance" },
//   { Icon: TrendingUp, title: "Scalable Infrastructure", desc: "Built to handle billions of transactions" },
// ];

// /* ------------------------------------------------------------------ */
// /* Floating "Total Collection" mock beside the feature list           */
// /* ------------------------------------------------------------------ */
// const collectionBars = [30, 55, 40, 70, 50, 85, 60, 95, 65];

// const TotalCollectionMock = () => (
//   <div className="relative mx-auto hidden w-full max-w-[15rem] lg:block">
//     <motion.div
//       initial={{ opacity: 0, y: 24, rotate: -3 }}
//       whileInView={{ opacity: 1, y: 0, rotate: -3 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="rounded-2xl p-4 text-white shadow-xl"
//       style={{ backgroundColor: BRAND }}
//     >
//       <p className="text-[10px] font-semibold text-white/80">Total Collection</p>
//       <p className="mt-1 flex items-center gap-1 text-xl font-black">
//         ₹18,20,450 <span className="text-[10px] font-bold text-white/80">↑ 23.5%</span>
//       </p>
//       <div className="mt-3 flex h-14 items-end gap-1">
//         {collectionBars.map((h, i) => (
//           <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />
//         ))}
//       </div>
//       <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2 text-[10px]">
//         <span>
//           <b className="block text-[12px]">1,24,820</b>
//           <span className="text-white/70">Transactions</span>
//         </span>
//         <span className="text-right">
//           <b className="block text-[12px]">99.99%</b>
//           <span className="text-white/70">Success Rate</span>
//         </span>
//       </div>
//     </motion.div>

//     <div className="absolute -right-6 top-6 flex flex-col gap-2">
//       {["UPI", "VISA", "RuPay"].map((label, i) => (
//         <motion.span
//           key={label}
//           initial={{ opacity: 0, x: 12 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.15 + i * 0.08 }}
//           className="rounded-lg border border-slate-100 bg-white px-2.5 py-1.5 text-[9px] font-black shadow-md"
//           style={{ color: INK }}
//         >
//           {label}
//         </motion.span>
//       ))}
//     </div>
//   </div>
// );

// /* ------------------------------------------------------------------ */
// /* Business overview mock for the closing CTA                         */
// /* ------------------------------------------------------------------ */
// const revenueTrend = [10, 22, 16, 30, 24, 38, 32, 46, 40, 55, 48, 62];
// const paymentModes = [
//   { label: "UPI", value: 45, color: "#5EEAD4" },
//   { label: "Cards", value: 30, color: BRAND },
//   { label: "Wallets", value: 15, color: "#0F9488" },
//   { label: "Net Banking", value: 10, color: "#134E4A" },
// ];

// const RevenueTrendLine = () => {
//   const width = 220;
//   const height = 60;
//   const max = Math.max(...revenueTrend);
//   const min = Math.min(...revenueTrend);
//   const step = width / (revenueTrend.length - 1);
//   const path = revenueTrend
//     .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min)) * height).toFixed(1)}`)
//     .join(" ");
//   return (
//     <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
//       <path d={path} fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// };

// const PaymentModesDonut = () => {
//   let cumulative = 0;
//   const stops = paymentModes
//     .map((mode) => {
//       const start = cumulative;
//       cumulative += mode.value;
//       return `${mode.color} ${start}% ${cumulative}%`;
//     })
//     .join(", ");
//   return (
//     <div className="flex items-center gap-3">
//       <div className="h-16 w-16 shrink-0 rounded-full" style={{ background: `conic-gradient(${stops})` }}>
//         <div className="m-[6px] flex h-[calc(100%-12px)] w-[calc(100%-12px)] items-center justify-center rounded-full" style={{ backgroundColor: INK }} />
//       </div>
//       <div className="space-y-1">
//         {paymentModes.map((mode) => (
//           <div key={mode.label} className="flex items-center gap-1.5 text-[9px] text-white/70">
//             <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: mode.color }} />
//             {mode.label} <span className="font-bold text-white">{mode.value}%</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// /* ------------------------------------------------------------------ */
// /* Services list / landing page                                        */
// /* ------------------------------------------------------------------ */
// const ServiceList = () => {
//   return (
//     <main id="top" className="bg-[#fbfcff] pb-6 font-sans" style={{ color: INK, zoom: PAGE_ZOOM }}>
//       {/* ---------------------------------------------------------------- HERO (scroll-pinned story) */}
//       <section className="relative isolate border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white">
//         <AuroraGlowBackground />
//         <ScrollStoryHero />
//       </section>

//       {/* ---------------------------------------------------------------- TRUST STRIP */}
//       <section className="border-b border-slate-100 bg-white py-6">
//         <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
//           <p className="text-center text-[11px] font-semibold" style={{ color: MUTED }}>
//             Trusted by <span className="font-black" style={{ color: BRAND }}>10,000+ businesses</span> across India
//           </p>
         
//         </div>
//       </section>

//       <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
//         {/* ------------------------------------------------------------ SERVICE CATEGORIES */}
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mb-4" style={{ fontFamily: SVC_FONT }}>
//           <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: SVC_BRAND }}>
//             Why Choose Us?
//           </p>
//           <div className="mt-1.5 flex items-center justify-between">
//             <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-black leading-[1.05] tracking-[-0.035em]" style={{ color: SVC_INK }}>
//               Explore Our Service Categories
//             </h2>
//             <a href="#payment-solutions" className="hidden text-[11.5px] font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: SVC_BRAND }}>
//               Explore All Services <ArrowRight size={10} />
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           variants={staggerContainer}
//           className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
//         >
//           {groupDefinitions.map((group) => (
//             <motion.div key={group.title} variants={fadeInUp}>
//               <CategoryCard title={group.title} description={group.description} Icon={group.icon} />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ------------------------------------------------------------ DARK STAT STRIP */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="mt-6 grid overflow-hidden rounded-2xl text-white sm:grid-cols-2 lg:grid-cols-4"
//           style={{ backgroundColor: INK }}
//         >
//           {statHighlights.map(({ Icon, value, label, trend, points }) => (
//             <div key={label} className="flex items-center justify-between gap-3 border-white/10 p-4 sm:border-r last:border-r-0">
//               <div className="flex items-center gap-2.5">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: "#5EEAD4" }}>
//                   <Icon size={15} />
//                 </span>
//                 <span>
//                   <b className="block text-sm">{value}</b>
//                   <small className="text-[9px] text-slate-300">{label}</small>
//                 </span>
//               </div>
//               <div className="hidden flex-col items-end gap-0.5 sm:flex">
//                 <Sparkline points={points} />
//                 <span className="text-[8px] font-semibold text-emerald-400">↑ {trend}</span>
//               </div>
//             </div>
//           ))}
//         </motion.section>

//         {/* ------------------------------------------------------------ LIVE TRANSACTIONS + PLATFORM FEATURES */}
//         <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={fadeInUp}
//             className="rounded-2xl border border-slate-200 bg-white p-4"
//           >
//             <div className="flex items-center justify-between">
//               <h3 className="text-[13px] font-black" style={{ color: INK }}>Live Transactions</h3>
//               <span className="text-[10px] font-bold" style={{ color: BRAND }}>View All</span>
//             </div>
//             <div className="mt-3 divide-y divide-slate-100">
//               {liveTransactions.map((tx, i) => {
//                 const style = methodStyles[tx.method] || methodStyles.UPI;
//                 return (
//                   <div key={i} className="flex items-center justify-between gap-3 py-2.5">
//                     <div className="flex items-center gap-2.5">
//                       <span
//                         className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-black"
//                         style={{ backgroundColor: style.bg, color: style.color }}
//                       >
//                         {tx.method}
//                       </span>
//                       <span>
//                         <b className="block text-[12px]" style={{ color: INK }}>{tx.amount}</b>
//                         <span className="text-[10px]" style={{ color: MUTED }}>From {tx.from}</span>
//                       </span>
//                     </div>
//                     <span className="text-right">
//                       <span className="block text-[10px] font-bold text-emerald-500">Success</span>
//                       <span className="text-[9px]" style={{ color: MUTED }}>{tx.time}</span>
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//             <p className="mt-3 flex items-center gap-1.5 text-[10px]" style={{ color: MUTED }}>
//               <LockKeyhole size={10} /> All transactions are secure and encrypted
//             </p>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={fadeInUp}
//             className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]"
//           >
//             <div>
//               <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
//                 One Platform. Endless Possibilities.
//               </p>
//               <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] leading-tight" style={{ color: INK }}>
//                 Everything You Need, <span style={{ color: BRAND }}>All in One Platform</span>
//               </h2>
//               <p className="mt-3 text-[13px] leading-6" style={{ color: MUTED }}>
//                 From payments to banking, lending to travel — manage your entire business
//                 financial ecosystem from a single, powerful platform.
//               </p>

//               <div className="mt-5 space-y-3.5">
//                 {platformFeatures.map(({ Icon, title, desc }) => (
//                   <div key={title} className="flex items-start gap-2.5">
//                     <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
//                       <Icon size={13} />
//                     </span>
//                     <span>
//                       <b className="block text-[16px] font-black tracking-[-0.015em]" style={{ color: INK }}>{title}</b>
//                       <span className="text-[14px] leading-6 font-medium" style={{ color: MUTED }}>{desc}</span>
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <TotalCollectionMock />
//           </motion.div>
//         </div>

//         {/* ------------------------------------------------------------ SERVICE ROWS (real links) */}
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mt-8" style={{ fontFamily: SVC_FONT }}>
//           <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: SVC_BRAND }}>
//             Unified Experience
//           </p>
//           <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-[-0.02em] leading-tight" style={{ color: SVC_INK }}>
//             Every Service, <span style={{ color: SVC_BRAND }}>At Your Fingertips</span>
//           </h2>
//         </motion.div>

//         <div className="mt-4 rounded-2xl border bg-white p-3 sm:p-4" style={{ borderColor: "#E7EAF0", boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}>
//           {groupDefinitions.map((group) => (
//             <ServiceRow key={group.title} group={group} />
//           ))}
//         </div>

//         {/* ------------------------------------------------------------ CLOSING CTA */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeInUp}
//           className="relative mt-8 overflow-hidden rounded-2xl px-5 py-8 text-white sm:px-8"
//           style={{ backgroundColor: INK }}
//         >
//           <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
//           <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
//             <div>
//               <p className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: "#5EEAD4" }}>
//                 Get Started Today
//               </p>
//               <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] leading-tight sm:text-4xl">
//                 Ready to Transform Your Business?
//               </h2>
//               <p className="mt-2 max-w-md text-[16px] font-black text-white/70 sm:text-[13px]">
//                 Join thousands of businesses already growing with our complete financial ecosystem.
//               </p>
//               <div className="mt-5 flex flex-wrap items-center gap-2.5">
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
//                   style={{ backgroundColor: BRAND }}
//                 >
//                   Get Started <ArrowRight size={11} />
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
//                 >
//                   Contact Sales
//                 </Link>
//               </div>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
//               <div className="flex items-center justify-between">
//                 <p className="text-[11px] font-bold">Business Overview</p>
//                 <span className="text-[9px] text-white/60">This Month</span>
//               </div>
//               <div className="mt-3 grid grid-cols-3 gap-2">
//                 {[
//                   ["Total Revenue", "₹18.2 Cr", "23.5%"],
//                   ["Transactions", "1,24,820", "18.7%"],
//                   ["Success Rate", "99.99%", "0.6%"],
//                 ].map(([label, value, delta]) => (
//                   <div key={label} className="rounded-lg border border-white/10 p-2">
//                     <p className="text-[8px] text-white/60">{label}</p>
//                     <p className="text-[11px] font-black">{value}</p>
//                     <p className="text-[8px] font-bold text-emerald-400">↑ {delta}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
//                 <p className="text-[9px] font-bold text-white/80">Revenue Trend</p>
//                 <div className="mt-1">
//                   <RevenueTrendLine />
//                 </div>
//               </div>
//               <div className="mt-3 rounded-lg border border-white/10 p-2.5">
//                 <p className="mb-2 text-[9px] font-bold text-white/80">Top Payment Modes</p>
//                 <PaymentModesDonut />
//               </div>
//             </div>
//           </div>
//         </motion.section>
//       </div>
//     </main>
//   );
// };

// /* ==================================================================== */
// /* EVERYTHING BELOW THIS LINE IS UNCHANGED — the service detail page    */
// /* ==================================================================== */

// /* ------------------------------------------------------------------ */
// /* Service detail page (unchanged logic, retouched palette)            */
// /* ------------------------------------------------------------------ */
// const ServiceDetail = ({ service, category }) => {
//   const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
//   const features = service.features || [];
//   const highlights = service.benefits || [];
//   const categoryLabel = category || "Our Services";

//   const nameWords = service.name.trim().split(" ");
//   const lastWord = nameWords.pop();
//   const restName = nameWords.join(" ");

//   return (
//     <div className="bg-white font-sans" style={{ color: INK }}>
//       {/* Hero */}
//       <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white px-3 pb-7 pt-10 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
//         <AuroraGlowBackground />
//         <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
//           <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
//             <motion.span
//               variants={fadeInUp}
//               className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
//               style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
//             >
//               <FileText size={10} /> {categoryLabel}
//             </motion.span>

//             <motion.h1
//               variants={fadeInUp}
//               className="mt-3 text-[1.7rem] font-black leading-[1.1] sm:text-3xl md:text-[1.95rem]"
//               style={{ color: INK }}
//             >
//               {restName ? `${restName} ` : ""}
//               <span style={{ color: BRAND }}>{lastWord}</span>
//             </motion.h1>

//             <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8" style={{ backgroundColor: BRAND }} />

//             <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5" style={{ color: MUTED }}>
//               {service.longDescription || service.description}
//             </motion.p>

//             <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
//               <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
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
//             <div className="relative overflow-hidden rounded-2xl shadow-xl">
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
//                 <p className="text-[8px] font-semibold" style={{ color: MUTED }}>In Partnership with</p>
//                 {service.partner.logo ? (
//                   <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
//                 ) : (
//                   <p className="text-xs font-black" style={{ color: INK }}>{service.partner.name}</p>
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
//             <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
//             <h2 className="mt-2 text-base font-black sm:text-lg" style={{ color: INK }}>
//               Our {categoryLabel}
//             </h2>

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
//                       className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
//                       style={{ borderColor: undefined }}
//                     >
//                       <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
//                         <Icon size={12} strokeWidth={1.7} />
//                       </div>
//                       <p className="mt-2 flex-1 text-[13px] font-bold leading-snug" style={{ color: "#1e293b" }}>{text}</p>
//                       <div className="mt-2 flex justify-end">
//                         <span
//                           className="inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
//                           style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
//                         >
//                           <ArrowRight size={9} />
//                         </span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             ) : (
//               <p className="mt-4 text-[13px]" style={{ color: MUTED }}>More details coming soon.</p>
//             )}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="relative flex flex-col overflow-hidden rounded-xl p-4 text-white shadow-lg"
//             style={{ backgroundColor: BRAND }}
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
//                         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: BRAND }}>
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
//           className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:p-6"
//           style={{ backgroundColor: "#f2fbf9" }}
//         >
//           <div className="flex items-center gap-3 text-center sm:text-left">
//             <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
//               <Landmark size={20} />
//             </span>
//             <div>
//               <h3 className="text-xl font-black tracking-tight" style={{ color: INK }}>Ready to grow your business?</h3>
//               <p className="mt-1 max-w-sm text-[13px]" style={{ color: MUTED }}>
//                 Explore our services and find the right financial solution that fits your needs.
//               </p>
//             </div>
//           </div>

//           <Link
//             to="/services"
//             className="inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold text-white shadow-md transition hover:opacity-90"
//             style={{ backgroundColor: BRAND }}
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
//       <div className="flex min-h-screen items-center justify-center bg-white text-black">
//         <p className="border-b-2 text-sm font-semibold" style={{ borderColor: BRAND }}>Service not found</p>
//       </div>
//     );
//   }

//   const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

//   return <ServiceDetail service={service} category={category} />;
// };

// export default Services;








import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  Bell,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Code2,
  CreditCard,
  FileText,
  Fingerprint,
  Headphones,
  Landmark,
  LayoutDashboard,
  LockKeyhole,
  Plane,
  QrCode,
  Rocket,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  UsersRound,
  WalletCards,
  Zap,
} from "lucide-react";
import servicesData from "./Servicesdata.json";

/* ------------------------------------------------------------------ */
/* Design tokens (kept local so nothing outside this file is touched) */
/* ------------------------------------------------------------------ */
const BRAND = "#14B8A6"; // primary teal accent
const BRAND_RGB = "20,184,166"; // rgba helper for BRAND
const BRAND_SOFT = "rgba(20,184,166,0.10)";
const INK = "#0B1220"; // near-black heading colour
const MUTED = "#5B6B84"; // body copy grey

/* ------------------------------------------------------------------ */
/* SERVICE-SECTION-ONLY design tokens                                  */
/* Scoped strictly to the "Explore Our Service Categories" +           */
/* "Every Service, At Your Fingertips" blocks below, per request.      */
/* Mirrors the reference screenshot: indigo accent, clean grotesk type,*/
/* soft-square icon tiles, quiet bordered cards.                       */
/* ------------------------------------------------------------------ */
const SVC_FONT = "'Inter', 'Helvetica Neue', Arial, sans-serif";
const SVC_BRAND = "#14B8A6"; // indigo accent (matches reference)
const SVC_BRAND_SOFT = "rgba(79,70,229,0.10)";
const SVC_BRAND_BORDER = "rgba(79,70,229,0.35)";
const SVC_INK = "#0F172A";
const SVC_MUTED = "#64748B";

const groupDefinitions = [
  { title: "Payment Solutions", description: "Everything you need to collect payments from anywhere", icon: WalletCards, ids: ["qr", "sound-box", "pos-devices", "online-payment-gatewayâ€“upi-cards-net-banking-wallets", "qr-based-contactless-payments"] },
  { title: "Banking Services", description: "Bring banking closer to your customers", icon: Landmark, ids: ["assisted-banking-cash-management", "micro-atm-matm-services", "bbps-electricity-gas-water-fastag", "mobile-dth-data-card-recharges", "credit-card-bill-payments"] },
  { title: "Financial Services", description: "Financial solutions that fuel your growth", icon: Banknote, ids: ["business-loans-working-capital-finance", "personal-loans-with-digital-onboarding", "credit-card-sourcing-and-lifecycle-support", "health-insurance", "life-insurance", "general-travel-insurance"] },
  { title: "Travel Services", description: "Complete travel booking solutions", icon: Plane, ids: ["flight-booking-domestic-international", "train-ticket-booking", "bus-ticket-booking", "hotel-booking", "holiday-packages", "travel-insurance"] },
  { title: "Technology Solutions", description: "Build, scale and automate your business", icon: Code2, ids: ["technology-api-services", "payment-banking-travel-wallet-apis", "Merchant-distributor-admin-dashboards", "white-label-fintech-travel-platforms", "web-infrastructure-maintenance", "ecommerce-websites", "software-development", "customised-software-development", "white-label-software-development", "app-development"] },
];

const serviceIcons = [QrCode, WalletCards, CreditCard, Smartphone, Landmark, ShieldCheck, Plane, Building2, Code2];
const benefitIcons = [Rocket, ClipboardList, ShieldCheck, Headphones, LockKeyhole];

/* Small numeric clamp helper — used by the mobile scroll-pinned hero below. */
const clampNum = (v, min, max) => Math.min(max, Math.max(min, v));

/* ------------------------------------------------------------------ */
/* Shared scroll-reveal animation variants                            */
/* ------------------------------------------------------------------ */
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } };

/* ------------------------------------------------------------------ */
/* Aurora Glow Background — soft, slowly-drifting teal blobs          */
/* NOTE: also used on the (untouched) service detail page — left as-is */
/* ------------------------------------------------------------------ */
const AuroraGlowBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full blur-3xl"
      style={{ backgroundColor: "rgba(20,184,166,0.28)" }}
      animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -right-24 top-4 h-[22rem] w-[22rem] rounded-full blur-3xl"
      style={{ backgroundColor: "rgba(45,212,191,0.22)" }}
      animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute left-1/3 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full blur-3xl"
      style={{ backgroundColor: "rgba(14,165,233,0.14)" }}
      animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

/* ------------------------------------------------------------------ */
/* Tiny inline sparkline used in the dark stats strip                 */
/* ------------------------------------------------------------------ */
const Sparkline = ({ points, color = "#5EEAD4" }) => {
  const width = 64;
  const height = 22;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const step = width / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min || 1)) * height).toFixed(1)}`)
    .join(" ");
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <path d={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* Category card — icon tile, bold title, quiet description, cta dot  */
/* Restyled to match the reference screenshot: indigo icon tile,      */
/* Inter/grotesk type, quiet bordered card, no arrow affordance.      */
/* ------------------------------------------------------------------ */
const CategoryCard = ({ title, description, Icon }) => (
  <a
    href={`#${title.toLowerCase().replaceAll(" ", "-")}`}
    className="group flex h-full flex-col rounded-xl border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5"
    style={{ fontFamily: SVC_FONT, borderColor: "#E7EAF0", boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = SVC_BRAND_BORDER; e.currentTarget.style.boxShadow = "0 10px 24px rgba(79,70,229,0.12)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E7EAF0"; e.currentTarget.style.boxShadow = "0 1px 2px rgba(15,23,42,0.04)"; }}
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: SVC_BRAND_SOFT, color: SVC_BRAND }}>
      <Icon size={19} strokeWidth={1.8} />
    </div>

    <h3 className="mt-4 text-[18px] font-black leading-tight tracking-[-0.02em] leading-snug" style={{ color: SVC_INK, letterSpacing: "-0.01em" }}>
      {title}
    </h3>

    <p className="mt-2 text-[14px] leading-4 font-medium" style={{ color: SVC_MUTED }}>
      {description}
    </p>
  </a>
);

/* ------------------------------------------------------------------ */
/* Individual service tile inside a category row                      */
/* Restyled to match the reference screenshot's feature-card look.    */
/* ------------------------------------------------------------------ */
const ServiceItem = ({ service, index }) => {
  const Icon = serviceIcons[index % serviceIcons.length];
  return (
    <Link
      to={`/services/${service.id}`}
      className="group flex flex-col gap-2 rounded-xl border bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5"
      style={{ fontFamily: SVC_FONT, borderColor: "#E7EAF0", boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = SVC_BRAND_BORDER; e.currentTarget.style.boxShadow = "0 10px 24px rgba(79,70,229,0.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E7EAF0"; e.currentTarget.style.boxShadow = "0 1px 2px rgba(15,23,42,0.04)"; }}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: SVC_BRAND_SOFT, color: SVC_BRAND }}>
        <Icon size={16} strokeWidth={1.8} />
      </div>
      <h4 className="line-clamp-2 text-[17px] font-black leading-[1.3] tracking-[-0.02em]" style={{ color: SVC_INK, letterSpacing: "-0.01em" }}>
        {service.name.replaceAll("â€“", "–")}
      </h4>
      <p className="line-clamp-2 text-[14px] leading-6 font-medium" style={{ color: SVC_MUTED }}>
        {service.description}
      </p>
    </Link>
  );
};

/* ------------------------------------------------------------------ */
/* One category row: sidebar label + grid of its services             */
/* Restyled to match the reference screenshot's card language.        */
/* ------------------------------------------------------------------ */
const ServiceRow = ({ group }) => {
  const [showAllServices, setShowAllServices] = useState(false);
  const Icon = group.icon;

  const serviceMap = new Map(servicesData.map((service) => [service.id, service]));
  const services = group.ids.map((id) => serviceMap.get(id)).filter(Boolean);

  return (
    <motion.section
      id={group.title.toLowerCase().replace(/\s+/g, "-")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="flex flex-col gap-3 border-b py-5 first:pt-1.5 last:border-b-0 lg:flex-row lg:items-start lg:gap-6"
      style={{ fontFamily: SVC_FONT, borderColor: "#EEF1F6" }}
    >
      <div
        className="flex shrink-0 items-center gap-3 rounded-xl border p-3 transition-colors duration-200 lg:w-48 lg:flex-col lg:items-start lg:justify-center"
        style={{
          borderColor: showAllServices ? SVC_BRAND_BORDER : "transparent",
          backgroundColor: showAllServices ? SVC_BRAND_SOFT : "transparent",
        }}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: SVC_BRAND_SOFT, color: SVC_BRAND }}>
          <Icon size={17} />
        </div>

        <div className="flex-1 lg:flex-none">
          <h2 className="text-[19px] font-black tracking-[-0.02em]" style={{ color: SVC_INK, letterSpacing: "-0.01em" }}>
            {group.title}
          </h2>

          <button
            type="button"
            onClick={() => setShowAllServices(!showAllServices)}
            className="mt-1 inline-flex items-center gap-1 text-[11.5px] font-bold transition"
            style={{ color: SVC_BRAND }}
          >
            {showAllServices ? "View Less" : "View All"}
            {showAllServices ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
          </button>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.length ? (
          (showAllServices ? services : services.slice(0, 3)).map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))
        ) : (
          <div className="col-span-full flex h-20 items-center justify-center text-xs" style={{ color: SVC_MUTED, fontFamily: SVC_FONT }}>
            No services available.
          </div>
        )}
      </div>
    </motion.section>
  );
};

/* ------------------------------------------------------------------ */
/* Scroll-pinned hero story data                                      */
/* Each entry drives: left copy, dashboard stats, chart, a live entry */
/* list, and a notification toast — one per service category.         */
/* ------------------------------------------------------------------ */
const sidebarNavIcons = [LayoutDashboard, BarChart3, WalletCards, ClipboardList, FileText, UsersRound];

/* ------------------------------------------------------------------ */
/* Page-wide scale. Kept as one constant so the zoom on <main> and the */
/* pinned-hero offset below always agree with each other.             */
/* ------------------------------------------------------------------ */
const PAGE_ZOOM = 0.605;

/* Real, on-screen height (in normal px, NOT affected by PAGE_ZOOM) of  */
/* your fixed/sticky navbar that lives outside this file. The navbar   */
/* isn't scaled by <main>'s zoom, so we convert its real height into   */
/* the zoomed coordinate space <main> is rendering in, and use that as */
/* the pinned hero's `top` offset so it sticks BELOW the navbar rather */
/* than flush against the true viewport top (where it was hiding).    */
/* Adjust NAV_HEIGHT_PX to match your navbar's actual rendered height. */
const NAV_HEIGHT_PX = 96;
const HERO_TOP_OFFSET = Math.round(NAV_HEIGHT_PX / PAGE_ZOOM);

const heroBars = [
  { a: 55, b: 35 }, { a: 70, b: 50 }, { a: 45, b: 60 }, { a: 80, b: 55 }, { a: 60, b: 40 },
  { a: 90, b: 65 }, { a: 50, b: 45 }, { a: 75, b: 50 }, { a: 65, b: 55 },
];

const heroStories = [
  {
    index: 0,
    icon: WalletCards,
    title: "Payment Solutions",
    heading: (
      <>
        Collect Payments <span style={{ color: BRAND }}>From Anywhere</span>
      </>
    ),
    description: "QR codes, sound box, POS devices and payment gateways — accept money in seconds, wherever your customers are.",
    dashboardSubtitle: "Here's what's happening today",
    chartLabel: "Revenue Overview",
    listLabel: "Recent Settlements",
    stats: [
      { label: "Total Revenue", value: 18.2, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "23.5%" },
      { label: "Transactions", value: 124820, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "18.7%" },
      { label: "Success Rate", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.6%" },
    ],
    chartData: heroBars,
    entries: [
      { icon: Banknote, title: "₹1,24,500", meta: "Settled · Today, 10:30 AM" },
      { icon: Banknote, title: "₹87,500", meta: "Settled · Today, 09:15 AM" },
    ],
    notification: { icon: QrCode, title: "₹5,200 received via UPI", time: "Just now" },
  },
  {
    index: 1,
    icon: Landmark,
    title: "Banking Services",
    heading: (
      <>
        Banking Services, <span style={{ color: BRAND }}>Right Next Door</span>
      </>
    ),
    description: "AEPS, Micro ATM, BBPS bill payments and cash management — bring the branch to your customer's doorstep.",
    dashboardSubtitle: "Banking desk overview",
    chartLabel: "AEPS Volume",
    listLabel: "Recent Withdrawals",
    stats: [
      { label: "AEPS Volume", value: 6.4, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "15.2%" },
      { label: "Bills Paid", value: 48300, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "12.4%" },
      { label: "Active Kiosks", value: 2180, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "9.1%" },
    ],
    chartData: [
      { a: 40, b: 30 }, { a: 55, b: 45 }, { a: 35, b: 50 }, { a: 65, b: 40 }, { a: 50, b: 35 },
      { a: 75, b: 55 }, { a: 45, b: 40 }, { a: 60, b: 45 }, { a: 52, b: 38 },
    ],
    entries: [
      { icon: Landmark, title: "₹2,400 withdrawn", meta: "AEPS · 2 min ago" },
      { icon: Landmark, title: "₹1,150 bill paid", meta: "BBPS · 6 min ago" },
    ],
    notification: { icon: Fingerprint, title: "AEPS withdrawal ₹2,400 done", time: "Just now" },
  },
  {
    index: 2,
    icon: Banknote,
    title: "Financial Services",
    heading: (
      <>
        Fuel Growth With <span style={{ color: BRAND }}>Smart Lending</span>
      </>
    ),
    description: "Business loans, personal loans and insurance — sourced and approved with fully digital onboarding.",
    dashboardSubtitle: "Lending desk overview",
    chartLabel: "Loans Disbursed",
    listLabel: "Recent Approvals",
    stats: [
      { label: "Loans Disbursed", value: 42.6, format: (v) => `₹${v.toFixed(1)} Cr`, delta: "31.2%" },
      { label: "Applications", value: 8940, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "22.5%" },
      { label: "Approval Rate", value: 87, format: (v) => `${v.toFixed(0)}%`, delta: "4.1%" },
    ],
    chartData: [
      { a: 30, b: 20 }, { a: 45, b: 35 }, { a: 60, b: 40 }, { a: 50, b: 55 }, { a: 70, b: 45 },
      { a: 55, b: 60 }, { a: 80, b: 50 }, { a: 65, b: 55 }, { a: 75, b: 60 },
    ],
    entries: [
      { icon: Banknote, title: "₹2,00,000 approved", meta: "Business loan · 3 min ago" },
      { icon: ShieldCheck, title: "Policy issued", meta: "Health insurance · 9 min ago" },
    ],
    notification: { icon: BadgeCheck, title: "Loan approved for ₹2,00,000", time: "Just now" },
  },
  {
    index: 3,
    icon: Plane,
    title: "Travel Services",
    heading: (
      <>
        Book Journeys, <span style={{ color: BRAND }}>Earn Commissions</span>
      </>
    ),
    description: "Flights, trains, buses and hotels — a complete booking engine that pays you on every ticket.",
    dashboardSubtitle: "Travel desk overview",
    chartLabel: "Bookings Overview",
    listLabel: "Recent Bookings",
    stats: [
      { label: "Bookings", value: 15720, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "19.8%" },
      { label: "Commission", value: 38.5, format: (v) => `₹${v.toFixed(1)} L`, delta: "27.6%" },
      { label: "Avg. Value", value: 4850, format: (v) => `₹${Math.round(v).toLocaleString("en-IN")}`, delta: "6.2%" },
    ],
    chartData: [
      { a: 50, b: 35 }, { a: 40, b: 55 }, { a: 65, b: 45 }, { a: 55, b: 35 }, { a: 70, b: 50 },
      { a: 45, b: 60 }, { a: 60, b: 40 }, { a: 80, b: 55 }, { a: 50, b: 45 },
    ],
    entries: [
      { icon: Plane, title: "DEL → BOM booked", meta: "Flight · 1 min ago" },
      { icon: Building2, title: "Hotel confirmed", meta: "Goa · 8 min ago" },
    ],
    notification: { icon: Plane, title: "Flight booked: DEL → BOM", time: "Just now" },
  },
  {
    index: 4,
    icon: Code2,
    title: "Technology Solutions",
    heading: (
      <>
        Build, Scale <span style={{ color: BRAND }}>and Automate</span>
      </>
    ),
    description: "APIs, merchant dashboards and white-label platforms — the technology backbone for your business.",
    dashboardSubtitle: "Developer console overview",
    chartLabel: "API Traffic",
    listLabel: "Recent Activity",
    stats: [
      { label: "API Calls/Day", value: 2.4, format: (v) => `${v.toFixed(1)}M`, delta: "34.7%" },
      { label: "Uptime", value: 99.99, format: (v) => `${v.toFixed(2)}%`, delta: "0.1%" },
      { label: "Integrations", value: 640, format: (v) => Math.round(v).toLocaleString("en-IN"), delta: "11.3%" },
    ],
    chartData: [
      { a: 60, b: 40 }, { a: 75, b: 50 }, { a: 55, b: 65 }, { a: 85, b: 55 }, { a: 65, b: 45 },
      { a: 90, b: 60 }, { a: 70, b: 50 }, { a: 80, b: 65 }, { a: 72, b: 52 },
    ],
    entries: [
      { icon: Code2, title: "API key generated", meta: "Sandbox · 4 min ago" },
      { icon: LayoutDashboard, title: "Dashboard deployed", meta: "White-label · 12 min ago" },
    ],
    notification: { icon: Zap, title: "New API key generated", time: "Just now" },
  },
];

/* ------------------------------------------------------------------ */
/* Count-up number helper — animates from the previous value to the   */
/* next whenever `value` changes (i.e. whenever the active story does)*/
/* ------------------------------------------------------------------ */
const useCountUp = (target, duration = 900) => {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);

  useEffect(() => {
    const from = fromRef.current;
    const to = target;
    if (from === to) return undefined;

    let rafId;
    let start;

    const tick = (timestamp) => {
      if (start === undefined) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(from + (to - from) * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return display;
};

const AnimatedNumber = ({ value, format }) => {
  const display = useCountUp(value);
  return <>{format(display)}</>;
};

/* ------------------------------------------------------------------ */
/* Story-driven dashboard mock — same chrome as before, but every      */
/* number, bar, list row and toast is sourced from the active story   */
/* ------------------------------------------------------------------ */
const StoryDashboardMock = ({ story, showNotification }) => (
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="relative mx-auto w-full max-w-md"
  >
    <div className="flex overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
      <div className="hidden w-14 shrink-0 flex-col items-center gap-4 py-4 sm:flex" style={{ backgroundColor: INK }}>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
          <Fingerprint size={14} />
        </div>
        <div className="mt-2 flex flex-col items-center gap-3">
          {sidebarNavIcons.map((Icon, i) => (
            <span
              key={i}
              className="flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-300"
              style={i === story.index ? { backgroundColor: BRAND, color: "#fff" } : { color: "rgba(255,255,255,0.4)" }}
            >
              <Icon size={13} />
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[12px] font-black" style={{ color: INK }}>Hello, Abheepay Merchant</p>
            <p className="text-[9px]" style={{ color: MUTED }}>{story.dashboardSubtitle}</p>
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50" style={{ color: MUTED }}>
            <Bell size={12} />
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {story.stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-slate-100 p-2">
              <p className="text-[7.5px] font-semibold" style={{ color: MUTED }}>{stat.label}</p>
              <p className="mt-0.5 text-[11px] font-black" style={{ color: INK }}>
                <AnimatedNumber value={stat.value} format={stat.format} />
              </p>
              <p className="mt-0.5 text-[7.5px] font-bold text-emerald-500">↑ {stat.delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold" style={{ color: INK }}>{story.chartLabel}</p>
            <div className="flex items-center gap-2 text-[7px]" style={{ color: MUTED }}>
              <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND }} />This Month</span>
              <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-slate-300" />Last Month</span>
            </div>
          </div>
          <div className="mt-2 flex h-14 items-end gap-1.5">
            {story.chartData.map((bar, i) => (
              <div key={i} className="flex flex-1 items-end gap-[2px]">
                <div className="w-full rounded-sm transition-all duration-700 ease-out" style={{ height: `${bar.a}%`, backgroundColor: BRAND }} />
                <div className="w-full rounded-sm bg-slate-200 transition-all duration-700 ease-out" style={{ height: `${bar.b}%` }} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-slate-100 p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold" style={{ color: INK }}>{story.listLabel}</p>
            <span className="text-[8px] font-bold" style={{ color: BRAND }}>View All</span>
          </div>
          <div className="mt-1.5 space-y-1.5">
            {story.entries.map((entry) => (
              <div key={entry.title} className="flex items-center justify-between text-[8px]">
                <span className="flex items-center gap-1.5" style={{ color: INK }}>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
                    <entry.icon size={10} />
                  </span>
                  <b>{entry.title}</b>
                </span>
                <span style={{ color: MUTED }}>{entry.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div
      className="absolute -bottom-4 -left-4 hidden items-center gap-1.5 rounded-xl px-3 py-2 text-white shadow-lg sm:flex"
      style={{ backgroundColor: INK }}
    >
      <LockKeyhole size={12} />
      <span className="text-[9px] font-bold">Bank-grade security</span>
    </div>

    <AnimatePresence>
      {showNotification && (
        <motion.div
          key={story.title}
          initial={{ opacity: 0, x: 18, y: -8, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 18, scale: 0.92 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute -right-3 top-6 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-xl sm:-right-8"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
            <story.notification.icon size={13} />
          </span>
          <span>
            <b className="block text-[10px]" style={{ color: INK }}>{story.notification.title}</b>
            <span className="text-[8px]" style={{ color: MUTED }}>{story.notification.time}</span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/* Scroll-pinned hero — the section stays fixed on screen while the   */
/* user scrolls through it; every story below drives new left copy,   */
/* dashboard numbers, chart bars and a notification toast.            */
/* ------------------------------------------------------------------ */
const ScrollStoryHero = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const raw = Math.min(v, 0.999) * heroStories.length;
      const idx = Math.max(0, Math.min(heroStories.length - 1, Math.floor(raw)));
      const local = raw - idx;
      setActiveIndex((prev) => (prev === idx ? prev : idx));
      setShowNotification(local > 0.3 && local < 0.85);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const story = heroStories[activeIndex];

  return (
    <div ref={containerRef} className="relative" style={{ height: `${(heroStories.length * 100) / PAGE_ZOOM}vh` }}>
      <div
        className="sticky flex items-center overflow-hidden"
        style={{
          top: HERO_TOP_OFFSET,
          height: `calc((100vh / ${PAGE_ZOOM}) - ${HERO_TOP_OFFSET}px)`,
        }}
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold"
                  style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
                >
                  <story.icon size={11} /> {story.title}
                </span>

                <h1
                  className="mt-4 max-w-lg text-[2rem] font-black leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[2.7rem]"
                  style={{ color: INK }}
                >
                  {story.heading}
                </h1>

                <p className="mt-4 max-w-md text-[13px] leading-6 sm:text-sm" style={{ color: MUTED }}>
                  {story.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
                style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(20,184,166,0.30)" }}
              >
                Get Started <ArrowRight size={12} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
                style={{ borderColor: BRAND, color: BRAND }}
              >
                Book a Demo
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {heroStories.map((s, i) => (
                <span
                  key={s.title}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{ width: i === activeIndex ? 28 : 10, backgroundColor: i === activeIndex ? BRAND : "rgba(20,184,166,0.2)" }}
                />
              ))}
            </div>
          </div>

          <StoryDashboardMock story={story} showNotification={showNotification} />
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Trust strip — generic wordmarks (no real third-party logos)        */
/* ------------------------------------------------------------------ */
const trustMarks = ["Vertex Retail", "Nimbus Mart", "Orbit Foods", "Northstar Traders", "Lumen Café", "Rapidcart"];

/* ------------------------------------------------------------------ */
/* Dark stat strip with sparklines                                    */
/* ------------------------------------------------------------------ */
const statHighlights = [
  { Icon: Building2, value: "10,000+", label: "Active Merchants", trend: "24% this year", points: [4, 6, 5, 8, 7, 10, 9, 12] },
  { Icon: WalletCards, value: "₹500 Cr+", label: "Monthly Volume", trend: "18% vs last month", points: [5, 5, 7, 6, 9, 8, 11, 12] },
  { Icon: ShieldCheck, value: "99.99%", label: "System Uptime", trend: "0.5% this month", points: [9, 9, 9, 10, 9, 10, 10, 10] },
  { Icon: Headphones, value: "24×7", label: "Customer Support", trend: "Always here for you", points: [6, 7, 6, 8, 7, 9, 8, 9] },
];

/* ------------------------------------------------------------------ */
/* Live transactions panel data                                       */
/* ------------------------------------------------------------------ */
const liveTransactions = [
  { method: "UPI", amount: "₹5,200", from: "Rahul Kumar", time: "2 sec ago" },
  { method: "VISA", amount: "₹12,850", from: "Amazon Pay", time: "5 sec ago" },
  { method: "AEPS", amount: "₹2,400", from: "Customer", time: "8 sec ago" },
  { method: "UPI", amount: "₹8,950", from: "PhonePe", time: "12 sec ago" },
  { method: "MC", amount: "₹1,650", from: "Credit Card", time: "15 sec ago" },
];

const methodStyles = {
  UPI: { bg: BRAND_SOFT, color: BRAND },
  VISA: { bg: "rgba(11,18,32,0.08)", color: INK },
  AEPS: { bg: "rgba(20,184,166,0.16)", color: "#0F9488" },
  MC: { bg: "rgba(249,115,22,0.12)", color: "#EA580C" },
};

/* ------------------------------------------------------------------ */
/* Platform feature list                                              */
/* ------------------------------------------------------------------ */
const platformFeatures = [
  { Icon: Zap, title: "Easy Integration", desc: "Quick setup with developer-friendly APIs" },
  { Icon: BarChart3, title: "Real-time Analytics", desc: "Track performance with advanced insights" },
  { Icon: ShieldCheck, title: "Secure & Compliant", desc: "Bank-grade security with RBI compliance" },
  { Icon: TrendingUp, title: "Scalable Infrastructure", desc: "Built to handle billions of transactions" },
];

/* ------------------------------------------------------------------ */
/* Floating "Total Collection" mock beside the feature list           */
/* ------------------------------------------------------------------ */
const collectionBars = [30, 55, 40, 70, 50, 85, 60, 95, 65];

const TotalCollectionMock = () => (
  <div className="relative mx-auto hidden w-full max-w-[15rem] lg:block">
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: -3 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl p-4 text-white shadow-xl"
      style={{ backgroundColor: BRAND }}
    >
      <p className="text-[10px] font-semibold text-white/80">Total Collection</p>
      <p className="mt-1 flex items-center gap-1 text-xl font-black">
        ₹18,20,450 <span className="text-[10px] font-bold text-white/80">↑ 23.5%</span>
      </p>
      <div className="mt-3 flex h-14 items-end gap-1">
        {collectionBars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-white/70" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-2 text-[10px]">
        <span>
          <b className="block text-[12px]">1,24,820</b>
          <span className="text-white/70">Transactions</span>
        </span>
        <span className="text-right">
          <b className="block text-[12px]">99.99%</b>
          <span className="text-white/70">Success Rate</span>
        </span>
      </div>
    </motion.div>

    <div className="absolute -right-6 top-6 flex flex-col gap-2">
      {["UPI", "VISA", "RuPay"].map((label, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.08 }}
          className="rounded-lg border border-slate-100 bg-white px-2.5 py-1.5 text-[9px] font-black shadow-md"
          style={{ color: INK }}
        >
          {label}
        </motion.span>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Business overview mock for the closing CTA                         */
/* ------------------------------------------------------------------ */
const revenueTrend = [10, 22, 16, 30, 24, 38, 32, 46, 40, 55, 48, 62];
const paymentModes = [
  { label: "UPI", value: 45, color: "#5EEAD4" },
  { label: "Cards", value: 30, color: BRAND },
  { label: "Wallets", value: 15, color: "#0F9488" },
  { label: "Net Banking", value: 10, color: "#134E4A" },
];

const RevenueTrendLine = () => {
  const width = 220;
  const height = 60;
  const max = Math.max(...revenueTrend);
  const min = Math.min(...revenueTrend);
  const step = width / (revenueTrend.length - 1);
  const path = revenueTrend
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(height - ((p - min) / (max - min)) * height).toFixed(1)}`)
    .join(" ");
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <path d={path} fill="none" stroke="#5EEAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const PaymentModesDonut = () => {
  let cumulative = 0;
  const stops = paymentModes
    .map((mode) => {
      const start = cumulative;
      cumulative += mode.value;
      return `${mode.color} ${start}% ${cumulative}%`;
    })
    .join(", ");
  return (
    <div className="flex items-center gap-3">
      <div className="h-16 w-16 shrink-0 rounded-full" style={{ background: `conic-gradient(${stops})` }}>
        <div className="m-[6px] flex h-[calc(100%-12px)] w-[calc(100%-12px)] items-center justify-center rounded-full" style={{ backgroundColor: INK }} />
      </div>
      <div className="space-y-1">
        {paymentModes.map((mode) => (
          <div key={mode.label} className="flex items-center gap-1.5 text-[9px] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: mode.color }} />
            {mode.label} <span className="font-bold text-white">{mode.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Services list / landing page                                        */
/* ------------------------------------------------------------------ */
const ServiceList = () => {
  return (
    <main id="top" className="bg-[#fbfcff] pb-6 font-sans" style={{ color: INK, zoom: PAGE_ZOOM }}>
      {/* ---------------------------------------------------------------- HERO (scroll-pinned story) */}
      <section className="relative isolate border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white">
        <AuroraGlowBackground />
        <ScrollStoryHero />
      </section>

      {/* ---------------------------------------------------------------- TRUST STRIP */}
      <section className="border-b border-slate-100 bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-semibold" style={{ color: MUTED }}>
            Trusted by <span className="font-black" style={{ color: BRAND }}>10,000+ businesses</span> across India
          </p>
         
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* ------------------------------------------------------------ SERVICE CATEGORIES */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mb-4" style={{ fontFamily: SVC_FONT }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: SVC_BRAND }}>
            Why Choose Us?
          </p>
          <div className="mt-1.5 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-black leading-[1.05] tracking-[-0.035em]" style={{ color: SVC_INK }}>
              Explore Our Service Categories
            </h2>
            <a href="#payment-solutions" className="hidden text-[11.5px] font-bold sm:inline-flex sm:items-center sm:gap-1" style={{ color: SVC_BRAND }}>
              Explore All Services <ArrowRight size={10} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
        >
          {groupDefinitions.map((group) => (
            <motion.div key={group.title} variants={fadeInUp}>
              <CategoryCard title={group.title} description={group.description} Icon={group.icon} />
            </motion.div>
          ))}
        </motion.div>

        {/* ------------------------------------------------------------ DARK STAT STRIP */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-6 grid overflow-hidden rounded-2xl text-white sm:grid-cols-2 lg:grid-cols-4"
          style={{ backgroundColor: INK }}
        >
          {statHighlights.map(({ Icon, value, label, trend, points }) => (
            <div key={label} className="flex items-center justify-between gap-3 border-white/10 p-4 sm:border-r last:border-r-0">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: "#5EEAD4" }}>
                  <Icon size={15} />
                </span>
                <span>
                  <b className="block text-sm">{value}</b>
                  <small className="text-[9px] text-slate-300">{label}</small>
                </span>
              </div>
              <div className="hidden flex-col items-end gap-0.5 sm:flex">
                <Sparkline points={points} />
                <span className="text-[8px] font-semibold text-emerald-400">↑ {trend}</span>
              </div>
            </div>
          ))}
        </motion.section>

        {/* ------------------------------------------------------------ LIVE TRANSACTIONS + PLATFORM FEATURES */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="rounded-2xl border border-slate-200 bg-white p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[13px] font-black" style={{ color: INK }}>Live Transactions</h3>
              <span className="text-[10px] font-bold" style={{ color: BRAND }}>View All</span>
            </div>
            <div className="mt-3 divide-y divide-slate-100">
              {liveTransactions.map((tx, i) => {
                const style = methodStyles[tx.method] || methodStyles.UPI;
                return (
                  <div key={i} className="flex items-center justify-between gap-3 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-black"
                        style={{ backgroundColor: style.bg, color: style.color }}
                      >
                        {tx.method}
                      </span>
                      <span>
                        <b className="block text-[12px]" style={{ color: INK }}>{tx.amount}</b>
                        <span className="text-[10px]" style={{ color: MUTED }}>From {tx.from}</span>
                      </span>
                    </div>
                    <span className="text-right">
                      <span className="block text-[10px] font-bold text-emerald-500">Success</span>
                      <span className="text-[9px]" style={{ color: MUTED }}>{tx.time}</span>
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-[10px]" style={{ color: MUTED }}>
              <LockKeyhole size={10} /> All transactions are secure and encrypted
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
                One Platform. Endless Possibilities.
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] leading-tight" style={{ color: INK }}>
                Everything You Need, <span style={{ color: BRAND }}>All in One Platform</span>
              </h2>
              <p className="mt-3 text-[13px] leading-6" style={{ color: MUTED }}>
                From payments to banking, lending to travel — manage your entire business
                financial ecosystem from a single, powerful platform.
              </p>

              <div className="mt-5 space-y-3.5">
                {platformFeatures.map(({ Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
                      <Icon size={13} />
                    </span>
                    <span>
                      <b className="block text-[16px] font-black tracking-[-0.015em]" style={{ color: INK }}>{title}</b>
                      <span className="text-[14px] leading-6 font-medium" style={{ color: MUTED }}>{desc}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <TotalCollectionMock />
          </motion.div>
        </div>

        {/* ------------------------------------------------------------ SERVICE ROWS (real links) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mt-8" style={{ fontFamily: SVC_FONT }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: SVC_BRAND }}>
            Unified Experience
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-[-0.02em] leading-tight" style={{ color: SVC_INK }}>
            Every Service, <span style={{ color: SVC_BRAND }}>At Your Fingertips</span>
          </h2>
        </motion.div>

        <div className="mt-4 rounded-2xl border bg-white p-3 sm:p-4" style={{ borderColor: "#E7EAF0", boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}>
          {groupDefinitions.map((group) => (
            <ServiceRow key={group.title} group={group} />
          ))}
        </div>

        {/* ------------------------------------------------------------ CLOSING CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative mt-8 overflow-hidden rounded-2xl px-5 py-8 text-white sm:px-8"
          style={{ backgroundColor: INK }}
        >
          <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: "#5EEAD4" }}>
                Get Started Today
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] leading-tight sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-2 max-w-md text-[16px] font-black text-white/70 sm:text-[13px]">
                Join thousands of businesses already growing with our complete financial ecosystem.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
                  style={{ backgroundColor: BRAND }}
                >
                  Get Started <ArrowRight size={11} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold">Business Overview</p>
                <span className="text-[9px] text-white/60">This Month</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["Total Revenue", "₹18.2 Cr", "23.5%"],
                  ["Transactions", "1,24,820", "18.7%"],
                  ["Success Rate", "99.99%", "0.6%"],
                ].map(([label, value, delta]) => (
                  <div key={label} className="rounded-lg border border-white/10 p-2">
                    <p className="text-[8px] text-white/60">{label}</p>
                    <p className="text-[11px] font-black">{value}</p>
                    <p className="text-[8px] font-bold text-emerald-400">↑ {delta}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg border border-white/10 p-2.5">
                <p className="text-[9px] font-bold text-white/80">Revenue Trend</p>
                <div className="mt-1">
                  <RevenueTrendLine />
                </div>
              </div>
              <div className="mt-3 rounded-lg border border-white/10 p-2.5">
                <p className="mb-2 text-[9px] font-bold text-white/80">Top Payment Modes</p>
                <PaymentModesDonut />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

/* ==================================================================== */
/* MOBILE-ONLY VERSION (md:hidden)                                       */
/*                                                                        */
/* The desktop ServiceList above is left completely untouched — it uses  */
/* a pinned/sticky scroll-story hero driven by JS scroll math, plus a    */
/* CSS `zoom: 0.605` on the whole <main> tag. Both of those techniques   */
/* are unreliable on phones: `zoom` has patchy mobile browser support    */
/* and shrinks already-small text even further, and the sticky pinned   */
/* hero's height math (`vh` divided by PAGE_ZOOM) assumes a viewport    */
/* that doesn't resize as the mobile address bar shows/hides.           */
/*                                                                        */
/* Instead of reusing that scroll-jacking approach, MobileServiceList    */
/* below reuses every existing building block (CategoryCard, ServiceRow, */
/* StoryDashboardMock, AuroraGlowBackground, stat/feature data, etc.)    */
/* but lays the hero stories out as normal, stacked, scroll-reveal cards */
/* at 1:1 scale (no zoom), which is far more robust on small screens.    */
/* ==================================================================== */

/* Per-story scroll allowance for the mobile pinned hero, in vh. Kept as   */
/* a separate constant from the desktop SLIDE_VH because the mobile hero  */
/* has no PAGE_ZOOM division and no CSS zoom applied to its ancestor.     */
const MOBILE_HERO_SLIDE_VH = 130;
const MOBILE_HERO_TRANS = 0.3;

/* Scroll-pinned mobile hero:
   1) An intro screen (normal flow) with a heading, tappable service chips,
      and a "Scroll down to see services" prompt.
   2) A pinned section — same idea as the desktop ScrollStoryHero, but the
      progress is computed from plain window scroll position (getBoundingClientRect
      + window.innerHeight), not framer's viewport-relative useScroll + CSS zoom.
      That keeps the math correct even as the mobile address bar shows/hides.
   Tapping a chip smooth-scrolls straight to that service's point in the pin,
   so "click a service button" loads it immediately; scrolling further then
   cross-fades through the rest, all inside one sticky dashboard card. */
const MobileScrollStoryHero = () => {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = null;

    const measure = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight + NAV_HEIGHT_PX;
      const scrolled = NAV_HEIGHT_PX - rect.top;
      const p = scrollable > 0 ? clampNum(scrolled / scrollable, 0, 1) : 0;
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

  const slideFloat = progress * heroStories.length;
  const activeIndex = clampNum(Math.floor(slideFloat), 0, heroStories.length - 1);
  const story = heroStories[activeIndex];
  const modalVisible = slideFloat > 0.04;

  const handleJumpTo = (index) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const currentScrollY = window.scrollY || window.pageYOffset;
    const wrapperTopAbsolute = rect.top + currentScrollY;
    const scrollable = rect.height - window.innerHeight + NAV_HEIGHT_PX;
    const targetLocal = (index + 0.5) / heroStories.length;
    const targetScrollY = wrapperTopAbsolute - NAV_HEIGHT_PX + targetLocal * scrollable;
    window.scrollTo({ top: Math.max(targetScrollY, 0), behavior: "smooth" });
  };

  return (
    <>
      {/* Intro: heading + tappable service chips + scroll prompt (normal flow) */}
      <div className="flex min-h-[78vh] flex-col items-center justify-center px-6 py-14 text-center">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: BRAND }}>
          Abheepay Platform
        </span>
        <h1 className="mt-3 max-w-sm text-[1.85rem] font-black leading-[1.15] tracking-[-0.02em]" style={{ color: INK }}>
          One Dashboard For <span style={{ color: BRAND }}>Every Service</span>
        </h1>
        <p className="mt-3 max-w-xs text-[13px] leading-6" style={{ color: MUTED }}>
          Tap a service to load it, then keep scrolling to watch your dashboard update live.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {heroStories.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => handleJumpTo(i)}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10.5px] font-bold transition"
              style={
                i === activeIndex && modalVisible
                  ? { backgroundColor: BRAND, borderColor: BRAND, color: "#fff" }
                  : { borderColor: "rgba(20,184,166,0.35)", color: BRAND }
              }
            >
              <s.icon size={11} /> {s.title}
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg transition hover:opacity-90"
            style={{ backgroundColor: BRAND, boxShadow: "0 10px 25px rgba(20,184,166,0.30)" }}
          >
            Get Started <ArrowRight size={12} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border px-5 py-2.5 text-[12px] font-bold transition hover:bg-slate-50"
            style={{ borderColor: BRAND, color: BRAND }}
          >
            Book a Demo
          </Link>
        </div>

        <motion.div
          className="mt-9 flex flex-col items-center gap-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
            Scroll down to see services
          </span>
          <ChevronDown size={16} style={{ color: BRAND }} />
        </motion.div>
      </div>

      {/* Pinned dashboard "modal" — updates as the user scrolls through it */}
      <div ref={wrapperRef} className="relative" style={{ height: `${heroStories.length * MOBILE_HERO_SLIDE_VH}vh` }}>
        <div
          className="sticky overflow-hidden"
          style={{ top: NAV_HEIGHT_PX, height: `calc(100vh - ${NAV_HEIGHT_PX}px)` }}
        >
          <div className="flex h-full flex-col justify-center gap-4 px-5 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold"
                  style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
                >
                  <story.icon size={11} /> {story.title}
                </span>
                <h2 className="mt-3 text-[1.35rem] font-black leading-[1.2] tracking-[-0.02em]" style={{ color: INK }}>
                  {story.heading}
                </h2>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={false}
              animate={{ opacity: modalVisible ? 1 : 0, y: modalVisible ? 0 : 40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <StoryDashboardMock story={story} showNotification={false} />
            </motion.div>

            <div className="flex items-center justify-center gap-1.5">
              {heroStories.map((s, i) => (
                <span
                  key={s.title}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{ width: i === activeIndex ? 22 : 8, backgroundColor: i === activeIndex ? BRAND : "rgba(20,184,166,0.2)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileServiceList = () => {
  return (
    <main className="bg-[#fbfcff] pb-6 font-sans" style={{ color: INK }}>
      {/* HERO (scroll-pinned dashboard modal) */}
      <section className="relative isolate border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white">
        <AuroraGlowBackground />
        <MobileScrollStoryHero />
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-100 bg-white py-6">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-[11px] font-semibold" style={{ color: MUTED }}>
            Trusted by <span className="font-black" style={{ color: BRAND }}>10,000+ businesses</span> across India
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* SERVICE CATEGORIES */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mb-4" style={{ fontFamily: SVC_FONT }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: SVC_BRAND }}>
            Why Choose Us?
          </p>
          <h2 className="mt-1.5 text-2xl font-black leading-[1.05] tracking-[-0.035em]" style={{ color: SVC_INK }}>
            Explore Our Service Categories
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {groupDefinitions.map((group) => (
            <motion.div key={group.title} variants={fadeInUp}>
              <CategoryCard title={group.title} description={group.description} Icon={group.icon} />
            </motion.div>
          ))}
        </motion.div>

        {/* DARK STAT STRIP */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl text-white sm:grid-cols-2"
          style={{ backgroundColor: INK }}
        >
          {statHighlights.map(({ Icon, value, label, trend, points }) => (
            <div key={label} className="flex items-center justify-between gap-3 border-b border-white/10 p-4 last:border-b-0 sm:border-b-0 sm:border-r">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: BRAND_SOFT, color: "#5EEAD4" }}>
                  <Icon size={15} />
                </span>
                <span>
                  <b className="block text-sm">{value}</b>
                  <small className="text-[9px] text-slate-300">{label}</small>
                </span>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <Sparkline points={points} />
                <span className="text-[8px] font-semibold text-emerald-400">↑ {trend}</span>
              </div>
            </div>
          ))}
        </motion.section>

        {/* LIVE TRANSACTIONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-black" style={{ color: INK }}>Live Transactions</h3>
            <span className="text-[10px] font-bold" style={{ color: BRAND }}>View All</span>
          </div>
          <div className="mt-3 divide-y divide-slate-100">
            {liveTransactions.map((tx, i) => {
              const style = methodStyles[tx.method] || methodStyles.UPI;
              return (
                <div key={i} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[8px] font-black"
                      style={{ backgroundColor: style.bg, color: style.color }}
                    >
                      {tx.method}
                    </span>
                    <span>
                      <b className="block text-[12px]" style={{ color: INK }}>{tx.amount}</b>
                      <span className="text-[10px]" style={{ color: MUTED }}>From {tx.from}</span>
                    </span>
                  </div>
                  <span className="text-right">
                    <span className="block text-[10px] font-bold text-emerald-500">Success</span>
                    <span className="text-[9px]" style={{ color: MUTED }}>{tx.time}</span>
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-[10px]" style={{ color: MUTED }}>
            <LockKeyhole size={10} /> All transactions are secure and encrypted
          </p>
        </motion.div>

        {/* PLATFORM FEATURES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mt-6"
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.14em]" style={{ color: BRAND }}>
            One Platform. Endless Possibilities.
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-[-0.02em] leading-tight" style={{ color: INK }}>
            Everything You Need, <span style={{ color: BRAND }}>All in One Platform</span>
          </h2>
          <p className="mt-3 text-[13px] leading-6" style={{ color: MUTED }}>
            From payments to banking, lending to travel — manage your entire business
            financial ecosystem from a single, powerful platform.
          </p>

          <div className="mt-5 space-y-3.5">
            {platformFeatures.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: BRAND_SOFT, color: BRAND }}>
                  <Icon size={13} />
                </span>
                <span>
                  <b className="block text-[16px] font-black tracking-[-0.015em]" style={{ color: INK }}>{title}</b>
                  <span className="text-[14px] leading-6 font-medium" style={{ color: MUTED }}>{desc}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SERVICE ROWS (real links, same ServiceRow component as desktop) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="mt-8" style={{ fontFamily: SVC_FONT }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: SVC_BRAND }}>
            Unified Experience
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] leading-tight" style={{ color: SVC_INK }}>
            Every Service, <span style={{ color: SVC_BRAND }}>At Your Fingertips</span>
          </h2>
        </motion.div>

        <div className="mt-4 rounded-2xl border bg-white p-3" style={{ borderColor: "#E7EAF0", boxShadow: "0 1px 2px rgba(15,23,42,0.04)" }}>
          {groupDefinitions.map((group) => (
            <ServiceRow key={group.title} group={group} />
          ))}
        </div>

        {/* CLOSING CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="relative mt-8 overflow-hidden rounded-2xl px-5 py-8 text-white"
          style={{ backgroundColor: INK }}
        >
          <Rocket className="pointer-events-none absolute -bottom-4 right-6 h-16 w-16 rotate-[-20deg] text-white/10" />
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em]" style={{ color: "#5EEAD4" }}>
              Get Started Today
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-2 max-w-md text-[14px] font-medium text-white/70">
              Join thousands of businesses already growing with our complete financial ecosystem.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-[12px] font-bold text-white shadow-lg"
                style={{ backgroundColor: BRAND }}
              >
                Get Started <ArrowRight size={11} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 px-5 py-2.5 text-[12px] font-bold text-white transition hover:bg-white/10"
              >
                Contact Sales
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold">Business Overview</p>
                <span className="text-[9px] text-white/60">This Month</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["Total Revenue", "₹18.2 Cr", "23.5%"],
                  ["Transactions", "1,24,820", "18.7%"],
                  ["Success Rate", "99.99%", "0.6%"],
                ].map(([label, value, delta]) => (
                  <div key={label} className="rounded-lg border border-white/10 p-2">
                    <p className="text-[8px] text-white/60">{label}</p>
                    <p className="text-[11px] font-black">{value}</p>
                    <p className="text-[8px] font-bold text-emerald-400">↑ {delta}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-lg border border-white/10 p-2.5">
                <p className="text-[9px] font-bold text-white/80">Revenue Trend</p>
                <div className="mt-1">
                  <RevenueTrendLine />
                </div>
              </div>
              <div className="mt-3 rounded-lg border border-white/10 p-2.5">
                <p className="mb-2 text-[9px] font-bold text-white/80">Top Payment Modes</p>
                <PaymentModesDonut />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

/* ==================================================================== */
/* EVERYTHING BELOW THIS LINE IS UNCHANGED — the service detail page    */
/* ==================================================================== */

/* ------------------------------------------------------------------ */
/* Service detail page (unchanged logic, retouched palette)            */
/* ------------------------------------------------------------------ */
const ServiceDetail = ({ service, category }) => {
  const mainImg = (service.imageUrl || service.image || "/assets/fallback-service.png").replace(/^public\//, "/");
  const features = service.features || [];
  const highlights = service.benefits || [];
  const categoryLabel = category || "Our Services";

  const nameWords = service.name.trim().split(" ");
  const lastWord = nameWords.pop();
  const restName = nameWords.join(" ");

  return (
    <div className="bg-white font-sans" style={{ color: INK }}>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-[#f2fbf9] to-white px-3 pb-7 pt-16 sm:px-5 sm:pt-12 md:px-7 md:pb-12 md:pt-16">
        <AuroraGlowBackground />
        <div className="mx-auto grid max-w-[54rem] items-center gap-6 md:grid-cols-2 md:gap-7">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}
            >
              <FileText size={10} /> {categoryLabel}
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="mt-3 text-[1.7rem] font-black leading-[1.1] sm:text-3xl md:text-[1.95rem]"
              style={{ color: INK }}
            >
              {restName ? `${restName} ` : ""}
              <span style={{ color: BRAND }}>{lastWord}</span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-3 h-[2px] w-8" style={{ backgroundColor: BRAND }} />

            <motion.p variants={fadeInUp} className="mt-3 max-w-sm text-[13px] leading-5" style={{ color: MUTED }}>
              {service.longDescription || service.description}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-4 flex items-center gap-1.5 text-[11px]" style={{ color: MUTED }}>
              <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
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
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
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
                <p className="text-[8px] font-semibold" style={{ color: MUTED }}>In Partnership with</p>
                {service.partner.logo ? (
                  <img src={service.partner.logo} alt={service.partner.name} className="h-3 object-contain" />
                ) : (
                  <p className="text-xs font-black" style={{ color: INK }}>{service.partner.name}</p>
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
            <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
            <h2 className="mt-2 text-base font-black sm:text-lg" style={{ color: INK }}>
              Our {categoryLabel}
            </h2>

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
                      className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      style={{ borderColor: undefined }}
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
                        <Icon size={12} strokeWidth={1.7} />
                      </div>
                      <p className="mt-2 flex-1 text-[13px] font-bold leading-snug" style={{ color: "#1e293b" }}>{text}</p>
                      <div className="mt-2 flex justify-end">
                        <span
                          className="inline-flex h-5 w-5 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
                          style={{ borderColor: "rgba(20,184,166,0.35)", color: BRAND }}
                        >
                          <ArrowRight size={9} />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <p className="mt-4 text-[13px]" style={{ color: MUTED }}>More details coming soon.</p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col overflow-hidden rounded-xl p-4 text-white shadow-lg"
            style={{ backgroundColor: BRAND }}
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
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white" style={{ color: BRAND }}>
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
          className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:p-6"
          style={{ backgroundColor: "#f2fbf9" }}
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:flex" style={{ backgroundColor: "rgba(20,184,166,0.10)", color: BRAND }}>
              <Landmark size={20} />
            </span>
            <div>
              <h3 className="text-xl font-black tracking-tight" style={{ color: INK }}>Ready to grow your business?</h3>
              <p className="mt-1 max-w-sm text-[13px]" style={{ color: MUTED }}>
                Explore our services and find the right financial solution that fits your needs.
              </p>
            </div>
          </div>

          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold text-white shadow-md transition hover:opacity-90"
            style={{ backgroundColor: BRAND }}
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

  if (!id) {
    return (
      <>
        {/* Desktop / tablet: original scroll-pinned, zoomed experience — untouched */}
        <div className="hidden md:block">
          <ServiceList />
        </div>

        {/* Mobile: normal-flow, non-scroll-jacked, 1:1-scale version */}
        <div className="md:hidden">
          <MobileServiceList />
        </div>
      </>
    );
  }

  const service = servicesData.find((item) => item.id?.toLowerCase() === id.toLowerCase());
  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-black">
        <p className="border-b-2 text-sm font-semibold" style={{ borderColor: BRAND }}>Service not found</p>
      </div>
    );
  }

  const category = groupDefinitions.find((group) => group.ids.includes(service.id))?.title;

  return <ServiceDetail service={service} category={category} />;
};

export default Services;



