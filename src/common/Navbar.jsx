// import React, { useState, useEffect, useRef } from "react";
// import { Banknote, ChevronDown, ChevronUp, Code2, Landmark, Menu, Plane, Search, WalletCards, X } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import LanguageSwitcher from "../components/LanguageSwitcher";

// const Navbar = () => {
//   const [openSearch, setOpenSearch] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false); // mobile
//   const [scrolled, setScrolled] = useState(false);

//   // Desktop services dropdown control
//   const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//   const [activeSolution, setActiveSolution] = useState("Payment Solutions");
//   const timeoutRef = useRef(null);

//   // Search logic states
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // POORA ORIGINAL DATA (Kuch bhi nahi hataya)
//   const allServices = [
//     {
//       name: "Digital Payment Solutions",
//       keywords: ["digital", "payment", "upi", "qr", "gateway"],
//       items: [
//         {
//           name: "Online Payment Gateway – UPI, Cards, Net Banking, Wallets",
//           path: "/services/online-payment-gateway–upi-cards-net-banking-wallets",
//         },
//         { name: "POS & Android POS Devices", path: "/services/pos-devices" },
//         { name: "QR-Based Contactless Payments", path: "/services/qr-based-contactless-payments" },
//         { name: "QR Code Solutions", path: "/services/qr" },
//         { name: "Sound Box Services", path: "/services/sound-box" },
//         // { name: "Smart routing with high success rates", path: "/services/Smart-routing-with-high-success-rates" },
//         // {
//         //   name: "Real-time monitoring and PCI-DSS compliant architecture",
//         //   path: "/services/real-time-monitoring-and-pci-dss-compliant-architecture",
//         // },
//       ],
//     },
//     {
//       name: "Assisted Banking & Cash Management",
//       path: "/services/assisted-banking-cash-management",
//       keywords: ["banking", "cash", "matm", "aeps"],
//       items: [
//         // {
//         //   name: "AEPS – Cash withdrawal, balance inquiry, mini statement",
//         //   path: "/services/aeps-cash-withdrawal-balance-inquiry-mini-statement",
//         // },
//         { name: "Micro ATM (mATM) services", path: "/services/micro-atm-matm-services" },
//         // { name: "Domestic Money Transfer (DMT)", path: "/services/domestic-money-transfer" },
//       ],
//     },
//     {
//       name: "BBPS, Recharge & Bill Payments",
//       keywords: ["bbps", "bill", "payment", "recharge", "dth", "mobile", "bill"],
//       items: [
//         // {
//         //   name: "Utility bill payments – electricity, gas, water, FASTag",
//         //   path: "/services/utility-bill-payments-electricity-gas-water-fastag",
//         // },
//         { name: "Mobile, DTH & data card recharges", path: "/services/mobile-dth-data-card-recharges" },
//         { name: "Credit card bill payments", path: "/services/credit-card-bill-payments" },
//       ],
//     },
//     {
//       name: "Lending & Credit Solutions",
//       keywords: ["loan", "credit", "finance", "lending"],
//       items: [
//         { name: "Business loans & working capital finance", path: "/services/business-loans-working-capital-finance" },
//         { name: "Personal loans with digital onboarding", path: "/services/personal-loans-with-digital-onboarding" },
//         { name: "Credit card sourcing and lifecycle support", path: "/services/credit-card-sourcing-and-lifecycle-support" },
//       ],
//     },
//     // {
//     //   name: "Insurance Solutions",
//     //   keywords: ["insurance", "policy", "lic"],
//     //   items: [
//     //     { name: "Health insurance", path: "/services/health-insurance" },
//     //     { name: "Life insurance", path: "/services/life-insurance" },
//     //     { name: "General & travel insurance", path: "/services/general-travel-insurance" },
//     //   ],
//     // },
//     {
//       name: "Travel APIs & Travel Services",
//       keywords: ["travel", "flight", "hotel", "api"],
//       items: [
//         { name: "Flight booking (Domestic & International)", path: "/services/flight-booking-domestic-international" },
//         { name: "Bus ticket booking", path: "/services/bus-ticket-booking" },
//         { name: "Train ticket booking", path: "/services/train-ticket-booking" },
//         { name: "Hotel booking", path: "/services/hotel-booking" },
//         { name: "Holiday packages", path: "/services/holiday-packages" },
//         // { name: "Travel insurance integration", path: "/services/travel-insurance-integration" },
//         // { name: "Commission-based travel services", path: "/services/commission-based-travel-services" },
//       ],
//     },
//     {
//       name: "Technology & API Services",
//       path: "/services/technology-api-services",
//       keywords: ["technology", "api", "integration"],
//       items: [
//         { name: "Payment, banking, travel & wallet APIs", path: "/services/payment-banking-travel-wallet-apis" },
//         // { name: "Settlement & reconciliation systems", path: "/services/settlement-reconciliation-systems" },
//         { name: "Merchant, distributor & admin dashboards", path: "/services/Merchant-distributor-admin-dashboards" },
//         { name: "White-label fintech & travel platforms", path: "/services/white-label-fintech-travel-platforms" },
//       ],
//     },
//     {
//       name: "Web Infrastructure & Maintenance",
//       path: "/services/web-infrastructure-maintenance",
//       keywords: ["web", "maintenance", "hosting", "server"],
//     },
//     {
//       name: "Ecommerece websites",
//       path: "/services/ecommerce-websites",
//       keywords: ["ecommerce", "shop", "website"],
//     },
//     // {
//     //   name: "software development",
//     //   path: "/services/software-development",
//     //   keywords: ["software", "app", "development"],
//     // },
//     // {
//     //   name: "Customised  software development",
//     //   path: "/services/customised-software-development",
//     //   keywords: ["software", "custom", "tailored", "solution"],
//     // },
//     // {
//     //   name: "White label software development",
//     //   path: "/services/white-label-software-development",
//     //   keywords: ["white label", "resell", "software", "branding"],
//     // },
//     // {
//     //   name: "App development",
//     //   path: "/services/app-development",
//     //   keywords: ["android", "ios", "mobile", "app", "development"],
//     // },
//   ];

//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setSuggestions([]);
//     } else {
//       const filtered = allServices.filter(
//         (s) =>
//           s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           s.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
//       );
//       setSuggestions(filtered);
//     }
//   }, [searchQuery]);

//   const handleSearchNav = (path) => {
//     navigate(path);
//     setOpenSearch(false);
//     setSearchQuery("");
//   };

//   // Desktop dropdown hover handlers with delay on leave
//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setServicesDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setServicesDropdownOpen(false);
//     }, 200);
//   };

//   const solutionCategories = [
//     { name: "Payment Solutions", description: "Accept payments seamlessly", icon: WalletCards, target: "payment-solutions", services: allServices.slice(0, 1).flatMap((service) => service.items || [service]) },
//     { name: "Banking Services", description: "Banking closer to customers", icon: Landmark, target: "banking-services", services: allServices.slice(1, 3).flatMap((service) => service.items || [service]) },
//     { name: "Financial Services", description: "Grow with smart finance", icon: Banknote, target: "financial-services", services: allServices.slice(3, 5).flatMap((service) => service.items || [service]) },
//     { name: "Travel Services", description: "Flights, buses, trains & hotels", icon: Plane, target: "travel-services", services: allServices.slice(5, 6).flatMap((service) => service.items || [service]) },
//     { name: "Technology Solutions", description: "Build, scale and automate", icon: Code2, target: "technology-solutions", services: allServices.slice(6).flatMap((service) => service.items || [service]) },
//   ];
//   const activeSolutionCategory = solutionCategories.find((category) => category.name === activeSolution) || solutionCategories[0];

//   return (
//     <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm transition-all duration-300 overflow-visible">
//       <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6 ">
//         <div className="flex items-center justify-between h-12">
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img src="/assets/image/logo/logos.png" alt="AbheePay" className="h-10 w-20 object-contain" />
//             </Link>
//           </div>

//           <nav className="hidden lg:flex flex-1 justify-center items-center gap-5 text-gray-700">
//             <Link to="/services" className="text-xs font-semibold transition-colors hover:text-[#00C4C7]">
//               Services
//             </Link>
//             <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//               <Link
//                 to="/services"
//                 className="flex items-center gap-1 text-xs font-semibold transition-colors hover:text-[#00C4C7]"
//               >
//                 Solutions <ChevronDown size={15} strokeWidth={2.5} />
//               </Link>

//               {/* ✅ CHANGE #1: absolute → fixed (live clipping issue fix) */}
//               <div
//                 className={`fixed top-16 left-1/2 -translate-x-1/2 w-[600px] max-w-[95vw] transition-all duration-200 ease-out z-[9999] lg:block
//                   ${servicesDropdownOpen
//                     ? "opacity-100 visible translate-y-0"
//                     : "opacity-0 invisible -translate-y-2 pointer-events-none"
//                   }`}
//               >
//                 <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-2xl">
//                   <div className="grid grid-cols-5 gap-1.5">
//                     {solutionCategories.map(({ name, icon: Icon, target }) => (
//                       <Link
//                         key={name}
//                         to={`/services#${target}`}
//                         onMouseEnter={() => setActiveSolution(name)}
//                         onClick={() => setServicesDropdownOpen(false)}
//                         className="group rounded-lg bg-[#f5f7fb] p-2 transition hover:-translate-y-0.5 hover:bg-[#e7f6ff]"
//                       >
//                         <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#2DD4BF] shadow-sm transition group-hover:scale-105">
//                           <Icon size={17} strokeWidth={2.8} />
//                         </span>
//                         <span className="block text-[8px] font-bold leading-3 text-[#111827]">{name}</span>
//                       </Link>
//                     ))}
//                   </div>
//                   <div className="mt-2 max-h-16 overflow-y-auto rounded-lg bg-[#f7f9fc] px-2 py-2">
//                     <p className="mb-1 text-[8px] font-bold uppercase tracking-wide text-[#40617d]">{activeSolutionCategory.name}</p>
//                     <div className="grid grid-cols-3 gap-x-2 gap-y-0">
//                       {activeSolutionCategory.services.map((service) => (
//                         <Link
//                           key={service.path || service.name}
//                           to={service.path || "/services"}
//                           onClick={() => setServicesDropdownOpen(false)}
//                           className="truncate py-0.5 text-[8px] font-medium text-slate-600 transition hover:text-[#00aeb2]"
//                           title={service.name}
//                         >
//                           <span className="mr-1 text-cyan-500">•</span>{service.name}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="mt-2 flex overflow-hidden rounded-lg">
//                     <Link to="/contact" onClick={() => setServicesDropdownOpen(false)} className="flex flex-1 items-center justify-between bg-[#d9f0ff] px-3 py-2 text-[8px] font-medium text-[#25466f] hover:bg-[#c8e8fc]">Contact Sales <span>→</span></Link>
//                     <Link to="/join-as-retailer" onClick={() => setServicesDropdownOpen(false)} className="flex flex-1 items-center justify-between bg-[#7489c5] px-3 py-2 text-[8px] font-medium text-white hover:bg-[#6378b5]">Get Started <span>→</span></Link>
//                   </div>
//                 </div>
//                 <div className="hidden">
//                   <div className="grid grid-cols-3 gap-5 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-h-[85vh] overflow-y-auto">
//                     {/* API COLUMN */}
//                     <div className="bg-[#F6FAFF] rounded-xl p-5">
//                       <div className="w-full flex justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">API</h3>
//                       </div>
//                       <div className="space-y-3">
//                         {allServices.slice(0, 7).map((s, i) => (
//                           <div key={i} className="group/item">
//                             <Link
//                               to={s.path}
//                               className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
//                               onClick={() => setServicesDropdownOpen(false)}
//                             >

//                               <p className="font-semibold text-gray-900 leading-tight">{s.name}</p>
//                             </Link>

//                             {s.items?.length > 0 && (
//                               <div className="ml-10 mt-2 hidden group-hover/item:block">
//                                 <ul className="space-y-1 text-sm text-gray-700">
//                                   {s.items.map((it, idx) => (
//                                     <li key={idx}>
//                                       <Link
//                                         to={it.path}
//                                         className="flex gap-2 hover:text-[#00D3CD] py-0.5"
//                                         onClick={() => setServicesDropdownOpen(false)}
//                                       >
//                                         <span className="text-[#00D3CD]">•</span>
//                                         <span>{it.name}</span>
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* BANKING COLUMN */}
//                     <div className="bg-[#F5FBF6] rounded-xl p-5">
//                       <div className="w-full flex justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">Banking</h3>
//                       </div>
//                       <div className="space-y-3">
//                         {allServices.slice(0, 7).map((s, i) => (
//                           <div key={i} className="group/item">
//                             <Link
//                               to={s.path}
//                               className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
//                               onClick={() => setServicesDropdownOpen(false)}
//                             >

//                               <p className="font-semibold text-gray-900 leading-tight">{s.name}</p>
//                             </Link>

//                             {s.items?.length > 0 && (
//                               <div className="ml-10 mt-2 hidden group-hover/item:block">
//                                 <ul className="space-y-1 text-sm text-gray-700">
//                                   {s.items.map((it, idx) => (
//                                     <li key={idx}>
//                                       <Link
//                                         to={it.path}
//                                         className="flex gap-2 hover:text-[#00D3CD] py-0.5"
//                                         onClick={() => setServicesDropdownOpen(false)}
//                                       >
//                                         <span className="text-[#00D3CD]">•</span>
//                                         <span>{it.name}</span>
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* DEVELOPMENT COLUMN */}
//                     <div className="bg-[#FFF7ED] rounded-xl p-5">
//                       <div className="w-full flex justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">Development</h3>
//                       </div>
//                       <div className="space-y-3">
//                         {allServices.slice(7).map((s, i) => (
//                           <div key={i} className="group/item">
//                             <Link
//                               to={s.path}
//                               className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
//                               onClick={() => setServicesDropdownOpen(false)}
//                             >

//                               <p className="font-semibold text-gray-900 leading-tight">{s.name}</p>
//                             </Link>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="flex items-center gap-1 text-xs font-semibold transition-colors hover:text-[#00C4C7]">
//                 Partner
//                 <ChevronDown size={14} strokeWidth={2.5} />
//               </button>

//               <div className="absolute left-0 top-full mt-2 w-52 rounded-xl border border-gray-200 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//                 <Link
//                   to="/join-as-distributor"
//                   className="block px-4 py-3 text-xs font-medium text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6] rounded-t-xl"
//                 >
//                   Join as Distributor
//                 </Link>

//                 <Link
//                   to="/join-as-retailer"
//                   className="block px-4 py-3 text-xs font-medium text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6] rounded-b-xl"
//                 >
//                   Join as Retailer
//                 </Link>
//               </div>
//             </div>
//             <Link to="/about" className="text-xs font-semibold transition-colors hover:text-[#00C4C7]">
//               About Us
//             </Link>
//             <Link to="/contact" className="text-xs font-semibold transition-colors hover:text-[#00C4C7]">
//               Contact
//             </Link>
//           </nav>

//           <div className="flex items-center gap-3">
//             <LanguageSwitcher />
//             <a
//               href="https://partner.abheepay.com/backend/customer/login"
//               className="hidden sm:inline-flex items-center justify-center rounded-lg border-2 border-[#00C4C7] px-2 py-0.5 text-xs font-semibold text-[#00AEB2] transition-colors hover:bg-[#00C4C7] hover:text-white"
//             >
//               Login
//             </a>
//             <Link
//               to="/join-as-retailer"
//               className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#00C4C7] px-2 py-1 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#00AEB2]"
//             >
//               Get Started
//             </Link>
//             <button
//               onClick={() => setOpenSearch(true)}
//               className="hidden p-2 rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#00C4C7]"
//             >
//               <Search size={20} />
//             </button>
//             <button
//               className="lg:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         className={`lg:hidden fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//           } bg-[#0F172A] text-white`}
//       >
//         <div className="h-full flex flex-col overflow-y-auto">
//           <div className="p-6 border-b border-gray-700">
//             <Link to="/" onClick={() => setMobileMenuOpen(false)}>
//               <img src="/assets/image/logo/logos.png" alt="Logo" className="h-20 w-20 object-contain" />
//             </Link>
//           </div>
//           <div className="px-6 py-8 flex flex-col gap-6">
//             <Link to="/" onClick={() => setMobileMenuOpen(false)}>
//               HOME
//             </Link>
//             <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
//               ABOUT US
//             </Link>

//             <div>
//               <button
//                 className="w-full flex justify-between items-center font-semibold"
//                 onClick={() => setServicesOpen(!servicesOpen)}
//               >
//                 <span>SERVICES</span> {servicesOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
//               </button>

//               {servicesOpen && (
//                 <div className="mt-4 pl-5 flex flex-col gap-4 border-l-2 border-[#00D3CD]/30">
//                   {allServices.map((s, i) => (
//                     <div key={i}>
//                       <Link
//                         to={s.path}
//                         className="block font-bold text-[#00D3CD]"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         {s.name}
//                       </Link>
//                       {s.items?.map((it, idx) => (
//                         <Link
//                           key={idx}
//                           to={it.path}
//                           className="block text-xs text-gray-400 mt-2"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           - {it.name}
//                         </Link>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link to="/join-as-retailer" onClick={() => setMobileMenuOpen(false)}>
//               JOIN AS RETAILER
//             </Link>

//             <Link to="/join-as-distributor" onClick={() => setMobileMenuOpen(false)}>
//               JOIN AS DISTRIBUTOR
//             </Link>

//             <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
//               BLOGS
//             </Link>
//             <Link to="/account-delete" onClick={() => setMobileMenuOpen(false)}>
//               ACCOUNT DELETE
//             </Link>

//             <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
//               CONTACT US
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* SEARCH BAR */}
//       {openSearch && (
//         <div className="absolute top-full left-0 w-full bg-[#222836] border-t border-gray-700 shadow-xl z-50">
//           <div className="max-w-7xl mx-auto px-6 py-5 relative">
//             <div className="flex items-center gap-4 text-white">
//               <Search className="text-gray-400" />
//               <input
//                 type="text"
//                 autoFocus
//                 className="w-full text-lg bg-transparent outline-none"
//                 placeholder="Search services..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && suggestions[0] && handleSearchNav(suggestions[0].path)}
//               />
//               <button
//                 onClick={() => {
//                   setOpenSearch(false);
//                   setSearchQuery("");
//                 }}
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {suggestions.length > 0 && (
//               <div className="absolute left-6 right-6 top-full bg-[#1a1f2b] border border-gray-700 rounded-b-lg shadow-2xl overflow-hidden max-w-lg">
//                 {suggestions.map((s, i) => (
//                   <div
//                     key={i}
//                     onClick={() => handleSearchNav(s.path)}
//                     className="px-4 py-3 hover:bg-[#00D3CD]/10 cursor-pointer text-white border-b border-gray-800 last:border-none"
//                   >
//                     {s.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {mobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setMobileMenuOpen(false)} />}
//     </header>
//   );
// };

// export default Navbar;











import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Banknote, BookOpen, ChevronDown, ChevronUp, Code2, CreditCard, FileText, Headphones, Landmark, Link2, Menu, Plane, QrCode, RefreshCcw, Search, Server, Send, ShieldCheck, Smartphone, Speaker, WalletCards, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile
  const [scrolled, setScrolled] = useState(false);

  // Desktop services dropdown control
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [developerHubOpen, setDeveloperHubOpen] = useState(false);
  const [developerApiPanelOpen, setDeveloperApiPanelOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Search logic states
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  // POORA ORIGINAL DATA (Kuch bhi nahi hataya)
  const allServices = [
    {
      name: "Digital Payment Solutions",
      keywords: ["digital", "payment", "upi", "qr", "gateway"],
      items: [
        {
          name: "Online Payment Gateway – UPI, Cards, Net Banking, Wallets",
          path: "/services/online-payment-gateway–upi-cards-net-banking-wallets",
        },
        { name: "POS & Android POS Devices", path: "/services/pos-devices" },
        { name: "QR-Based Contactless Payments", path: "/services/qr-based-contactless-payments" },
        { name: "QR Code Solutions", path: "/services/qr" },
        { name: "Sound Box Services", path: "/services/sound-box" },
        // { name: "Smart routing with high success rates", path: "/services/Smart-routing-with-high-success-rates" },
        // {
        //   name: "Real-time monitoring and PCI-DSS compliant architecture",
        //   path: "/services/real-time-monitoring-and-pci-dss-compliant-architecture",
        // },
      ],
    },
    {
      name: "Assisted Banking & Cash Management",
      path: "/services/assisted-banking-cash-management",
      keywords: ["banking", "cash", "matm", "aeps"],
      items: [
        // {
        //   name: "AEPS – Cash withdrawal, balance inquiry, mini statement",
        //   path: "/services/aeps-cash-withdrawal-balance-inquiry-mini-statement",
        // },
        { name: "Connected Banking Solution", path: "/services/Connected-Banking-Solution" },
        // { name: "Domestic Money Transfer (DMT)", path: "/services/domestic-money-transfer" },
      ],
    },
    {
      name: "BBPS, Recharge & Bill Payments",
      keywords: ["bbps", "bill", "payment", "recharge", "dth", "mobile", "bill"],
      items: [
        // {
        //   name: "Utility bill payments – electricity, gas, water, FASTag",
        //   path: "/services/utility-bill-payments-electricity-gas-water-fastag",
        // },
        // { name: "Mobile, DTH & data card recharges", path: "/services/mobile-dth-data-card-recharges" },
        // { name: "Credit card bill payments", path: "/services/credit-card-bill-payments" },
      ],
    },
    {
      name: "Lending & Credit Solutions",
      keywords: ["loan", "credit", "finance", "lending"],
      items: [
        // { name: "Business loans & working capital finance", path: "/services/business-loans-working-capital-finance" },
        // { name: "Personal loans with digital onboarding", path: "/services/personal-loans-with-digital-onboarding" },
        // { name: "Credit card sourcing and lifecycle support", path: "/services/credit-card-sourcing-and-lifecycle-support" },
      ],
    },
    // {
    //   name: "Insurance Solutions",
    //   keywords: ["insurance", "policy", "lic"],
    //   items: [
    //     { name: "Health insurance", path: "/services/health-insurance" },
    //     { name: "Life insurance", path: "/services/life-insurance" },
    //     { name: "General & travel insurance", path: "/services/general-travel-insurance" },
    //   ],
    // },
    {
      name: "Travel APIs & Travel Services",
      keywords: ["travel", "flight", "hotel", "api"],
      items: [
        // { name: "Flight booking (Domestic & International)", path: "/services/flight-booking-domestic-international" },
        // { name: "Bus ticket booking", path: "/services/bus-ticket-booking" },
        // { name: "Train ticket booking", path: "/services/train-ticket-booking" },
        // { name: "Hotel booking", path: "/services/hotel-booking" },
        // { name: "Holiday packages", path: "/services/holiday-packages" },
        // { name: "Travel insurance integration", path: "/services/travel-insurance-integration" },
        // { name: "Commission-based travel services", path: "/services/commission-based-travel-services" },
      ],
    },
    {
      name: "Technology & API Services",
      path: "/services/technology-api-services",
      keywords: ["technology", "api", "integration"],
      items: [
        { name: "Payment, banking, travel & wallet APIs", path: "/services/payment-banking-travel-wallet-apis" },
        { name: "Merchant, distributor & admin dashboards", path: "/services/Merchant-distributor-admin-dashboards" },
        { name: "White-label fintech & travel platforms", path: "/services/white-label-fintech-travel-platforms" },
      ],
    },
    {
      name: "API Services",
      path: "/services/payment-banking-travel-wallet-apis",
      keywords: ["web", "maintenance", "hosting", "server"],
    },
    // {
    //   name: "Ecommerece websites",
    //   path: "/services/ecommerce-websites",
    //   keywords: ["ecommerce", "shop", "website"],
    // },
    // {
    //   name: "software development",
    //   path: "/services/software-development",
    //   keywords: ["software", "app", "development"],
    // },
    // {
    //   name: "Customised  software development",
    //   path: "/services/customised-software-development",
    //   keywords: ["software", "custom", "tailored", "solution"],
    // },
    // {
    //   name: "White label software development",
    //   path: "/services/white-label-software-development",
    //   keywords: ["white label", "resell", "software", "branding"],
    // },
    // {
    //   name: "App development",
    //   path: "/services/app-development",
    //   keywords: ["android", "ios", "mobile", "app", "development"],
    // },
  ];

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = allServices.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setSuggestions(filtered);
    }
  }, [searchQuery]);

  const handleSearchNav = (path) => {
    navigate(path);
    setOpenSearch(false);
    setSearchQuery("");
  };

  // Desktop dropdown hover handlers with delay on leave
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handleDeveloperHubEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDeveloperHubOpen(true);
    setDeveloperPanel("marketplace");
  };

  const handleDeveloperHubLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDeveloperHubOpen(false);
      setDeveloperPanel(null);
    }, 200);
  };

  const developerApiItems = [
    { title: "Payment Gateway API", description: "Accept UPI, cards and net banking", icon: WalletCards, to: "/api/payment-gateway" },
    { title: "BBPS API", description: "Bill payments and merchant billing workflows", icon: FileText, to: "/api/bbps" },
    { title: "Payout API", description: "Automated vendor and partner disbursements", icon: Send, to: "/api/payout" },
    { title: "QR API", description: "Generate QR codes for instant payments", icon: QrCode, to: "/api/qr" },
    { title: "Wallet API", description: "Digital wallet balance and transfers", icon: CreditCard, to: "/api/wallet" },
    { title: "Aadhaar Verification API", description: "Authenticate users with Aadhaar data", icon: ShieldCheck, to: "/api/aadhaar" },
    { title: "Recharge API", description: "Mobile and DTH recharge integration", icon: RefreshCcw, to: "/api/recharge" },
  ];

  // Developer Hub quick links
  const developerHubItems = [
    {
      name: "Documentation",
      description: "Complete API reference and guides",
      icon: FileText,
      path: "/developers/documentation",
    },
    {
      name: "SDK",
      description: "Official SDKs for integration",
      icon: Code2,
      path: "/developers/sdk",
    },
    {
      name: "Soundbox",
      description: "Test your APIs safely",
      icon: Server,
      path: "/developers/soundbox",
    },
    {
      name: "Webhooks",
      description: "Receive real-time events",
      icon: Link2,
      path: "/developers/webhooks",
    },
    {
      name: "Postman",
      description: "Ready-to-use API collections",
      icon: Send,
      path: "/developers/postman",
    },
    {
      name: "Release Notes",
      description: "Latest updates and changes",
      icon: BookOpen,
      path: "/developers/release-notes",
    },
    {
      name: "Support",
      description: "Get technical assistance",
      icon: Headphones,
      path: "/developers/support",
    },
  ];

  const [developerPanel, setDeveloperPanel] = useState(null); // 'marketplace' | 'developer' | null

  // Products list for dropdown
  const products = [
    { name: "Payment Gateway", path: "/products/payment-gateway", icon: WalletCards },
    { name: "Payment Links", path: "/products/payment-links", icon: Link2 },
    { name: "QR Code", path: "/products/qr-code", icon: QrCode },
    { name: "Sound Box", path: "/products/sound-box", icon: Speaker },
    { name: "POS Machine", path: "/products/pos-machine", icon: CreditCard },
    { name: "Merchant App", path: "/products/merchant-app", icon: Smartphone },
    { name: "Digital Invoice", path: "/products/digital-invoice", icon: FileText },
  ];

  // solutionCategories and activeSolutionCategory removed — products render directly in the dropdown

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[100]
  overflow-visible
  transition-all duration-300
  ${scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg"
          : "bg-white/75 backdrop-blur-lg"
        }`}
    >




      <div className="max-w-8xl mx-auto px-3 sm:px-5 lg:px-6 ">
        <div className="flex h-14 items-center justify-between lg:h-20">


          {/* <div className="flex-shrink-0">
  <Link to="/">
    <img
      src="/assets/image/logo/logos.png"
      alt="AbheePay"
      className="h-5 w-auto object-contain"
    />
  </Link>
</div> */}




          {/* Logo */}

          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div
                className="rounded-xl px-2 py-2 bg-gradient-to-r from-[#081C33] via-[#0B2545] to-[#081C33] border border-[#16C7C9]/20 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(22,199,201,0.25)] "
              >
                <img
                  src="/assets/image/logo/logos.png"
                  alt="AbheePay"
                  className="h-7 w-auto max-w-[120px] object-contain transition-transform duration-300 hover:scale-105 sm:max-w-none"
                />
              </div>
            </Link>
          </div>





          <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 text-gray-700">
            {/* <Link to="/services" className="text-[20px] font-bold transition-colors hover:text-[#00C4C7]">
              Services
            </Link> */}
            <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                to="#"
                className="flex items-center gap-1 text-[20px] font-bold transition-colors hover:text-[#00C4C7]"
              >
                Products <ChevronDown size={21} strokeWidth={2.5} />
              </Link>

              {/* ✅ CHANGE #1: absolute → fixed (live clipping issue fix) */}
              <div
                className={`fixed top-14 left-1/2 -translate-x-1/2 w-[600px] max-w-[100vw] transition-all duration-200 ease-out z-[9999] lg:block
                  ${servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
              >
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xl">
                  <div className="grid grid-cols-5 gap-1.5">
                    {products.map((p) => {
                      const Icon = p.icon;
                      return (
                        <Link
                          key={p.path}
                          to={p.path}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group flex flex-col items-center rounded-lg bg-[#f5f7fb] p-3 text-center transition hover:-translate-y-0.5 hover:bg-[#e7f6ff]"
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#2DD4BF] shadow-sm transition group-hover:scale-110">
                            {Icon ? <Icon size={20} /> : null}
                          </div>
                          <span className="text-[12px] font-bold leading-5 text-[#111827]">{p.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-1.5 flex overflow-hidden rounded-lg">
                    <Link to="/contact" onClick={() => setServicesDropdownOpen(false)} className="flex flex-1 items-center justify-between bg-[#d9f0ff] px-2.5 py-1.5 text-[7px] font-medium text-[#25466f] hover:bg-[#c8e8fc]">Contact Sales <span>→</span></Link>
                    <Link to="/join-as-retailer" onClick={() => setServicesDropdownOpen(false)} className="flex flex-1 items-center justify-between bg-[#7489c5] px-2.5 py-1.5 text-[7px] font-medium text-white hover:bg-[#6378b5]">Get Started <span>→</span></Link>
                  </div>
                </div>
                <div className="hidden">
                  <div className="grid grid-cols-3 gap-5 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-h-[85vh] overflow-y-auto">
                    {/* API COLUMN */}
                    <div className="bg-[#F6FAFF] rounded-xl p-5">
                      <div className="w-full flex justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">API</h3>
                      </div>
                      <div className="space-y-3">
                        {allServices.slice(0, 7).map((s, i) => (
                          <div key={i} className="group/item">
                            <Link
                              to={s.path}
                              className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
                              onClick={() => setServicesDropdownOpen(false)}
                            >

                              <p className="font-semibold text-gray-900 leading-tight">{s.name}</p>
                            </Link>

                            {s.items?.length > 0 && (
                              <div className="ml-10 mt-2 hidden group-hover/item:block">
                                <ul className="space-y-1 text-sm text-gray-700">
                                  {s.items.map((it, idx) => (
                                    <li key={idx}>
                                      <Link
                                        to={it.path}
                                        className="flex gap-2 hover:text-[#00D3CD] py-0.5"
                                        onClick={() => setServicesDropdownOpen(false)}
                                      >
                                        <span className="text-[#00D3CD]">•</span>
                                        <span>{it.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BANKING COLUMN */}
                    <div className="bg-[#F5FBF6] rounded-xl p-5">
                      <div className="w-full flex justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">Banking</h3>
                      </div>
                      <div className="space-y-3">
                        {allServices.slice(0, 7).map((s, i) => (
                          <div key={i} className="group/item">
                            <Link
                              to={s.path}
                              className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
                              onClick={() => setServicesDropdownOpen(false)}
                            >

                              <p className="font-semibold text-gray-900 leading-tight">{s.name}</p>
                            </Link>

                            {s.items?.length > 0 && (
                              <div className="ml-10 mt-2 hidden group-hover/item:block">
                                <ul className="space-y-1 text-sm text-gray-700">
                                  {s.items.map((it, idx) => (
                                    <li key={idx}>
                                      <Link
                                        to={it.path}
                                        className="flex gap-2 hover:text-[#00D3CD] py-0.5"
                                        onClick={() => setServicesDropdownOpen(false)}
                                      >
                                        <span className="text-[#00D3CD]">•</span>
                                        <span>{it.name}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* DEVELOPMENT COLUMN */}
                    <div className="bg-[#FFF7ED] rounded-xl p-5">
                      <div className="w-full flex justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">Development</h3>
                      </div>
                      <div className="space-y-3">
                        {allServices.slice(7).map((s, i) => (
                          <div key={i} className="group/item">
                            <Link
                              to={s.path}
                              className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
                              onClick={() => setServicesDropdownOpen(false)}
                            >

                              <p className="font-semibold text-gray-900 leading-tight">{s.name}</p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative inline-block"
              onMouseEnter={handleDeveloperHubEnter}
              onMouseLeave={handleDeveloperHubLeave}
            >
              <Link
                to="#"
                className={`flex items-center gap-1 text-[20px] font-bold transition-colors hover:text-[#00C4C7] ${developerHubOpen ? "text-[#00C4C7]" : ""}`}
                aria-expanded={developerHubOpen}
              >
                API Hub <ChevronDown size={21} strokeWidth={2.5} className={developerHubOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </Link>

              <div
                className={`absolute left-1/2 top-full z-[9999] mt-4 -translate-x-[230px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-200 ease-out ${developerPanel === 'developer' ? "w-[1100px]" : "w-[1000px]"}
                  ${developerHubOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"}`}
              >
                <div className={developerPanel ? "grid min-h-[360px] grid-cols-[230px_1fr]" : "min-h-[360px]"}>
                  <div className="relative flex min-h-[360px] flex-col bg-[#f5f7fc] p-5 pb-[112px]">
                    <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#4d75c9]">API Hub</p>
                    <button
                      onClick={() => setDeveloperPanel('marketplace')}
                      onMouseEnter={() => setDeveloperPanel('marketplace')}
                      className={`mt-5 rounded-xl px-4 py-3 text-[15px] font-bold transition ${developerPanel === 'marketplace' ? "bg-white text-[#213b75] shadow-sm" : "text-slate-700 hover:bg-white"}`}
                    >
                      API Marketplace
                    </button>
                    <button
                      onClick={() => setDeveloperPanel('developer')}
                      onMouseEnter={() => setDeveloperPanel('developer')}
                      className={`mt-2 rounded-xl px-4 py-3 text-[15px] font-bold transition ${developerPanel === 'developer' ? "bg-white text-[#213b75] shadow-sm" : "text-slate-700 hover:bg-white"}`}
                    >
                      Developer Hub
                    </button>
                    <div className="absolute bottom-5 left-5 right-5 overflow-hidden rounded-xl border border-[#b8d4ec]">
                      <Link to="/contact" onClick={() => setDeveloperHubOpen(false)} className="flex items-center justify-between bg-[#d8edff] px-4 py-3 text-[13px] font-bold text-[#17457a] transition hover:bg-[#c6e4fb]">
                        Contact Sales <span aria-hidden="true">→</span>
                      </Link>
                      <Link to="/join-as-retailer" onClick={() => setDeveloperHubOpen(false)} className="block bg-[#7184bb] px-4 py-3 text-[13px] font-bold text-white transition hover:bg-[#6074ac]">
                        Get Started
                      </Link>
                    </div>
                  </div>

                  {/* Marketplace panel */}
                  {developerPanel === 'marketplace' && (
                    <div className="max-h-[430px] overflow-y-auto bg-white p-5">
                      <p className="text-[16px] font-bold text-slate-900">API Marketplace</p>
                      <p className="mt-1 text-[12px] text-slate-500">Browse available APIs to integrate payments and services.</p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        {developerApiItems.map((api) => (
                          <Link
                            key={api.title}
                            to={api.to}
                            onClick={() => setDeveloperHubOpen(false)}
                            className="group rounded-xl bg-[#f5f7fc] p-4 transition hover:-translate-y-0.5 hover:bg-[#eaf3ff] hover:shadow-md"
                          >
                            <div className="flex items-start gap-4">
                              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#00bfc2] shadow-sm">{React.createElement(api.icon, { size: 18, strokeWidth: 2.2 })}</span>
                              <div>
                                <div className="text-[14px] font-bold text-slate-800">{api.title}</div>
                                <div className="mt-1 text-[11px] leading-4 text-slate-500">{api.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Developer Hub panel */}
                  {developerPanel === 'developer' && (
                    <div className="max-h-[430px] overflow-y-auto bg-white p-5">
                      <p className="text-[16px] font-bold text-slate-900">Developer Hub</p>
                      <p className="mt-1 text-[12px] text-slate-500">Tools and docs for building with AbheePay.</p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        {developerHubItems.map((d) => {
                          const Icon = d.icon;
                          return (
                            <Link
                              key={d.path}
                              to={d.path}
                              onClick={() => setDeveloperHubOpen(false)}
                              className="group rounded-xl bg-[#f5f7fc] p-4 transition hover:-translate-y-0.5 hover:bg-[#eaf3ff] hover:shadow-md"
                            >
                              <div className="flex items-start gap-4">
                                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#2DD4BF] shadow-sm">
                                  {Icon ? <Icon size={18} /> : null}
                                </span>
                                <div>
                                  <div className="text-[14px] font-bold text-slate-900">{d.name}</div>
                                  <p className="mt-1 text-xs text-slate-900">{d.description}</p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center gap-1 text-[20px] font-bold transition-colors hover:text-[#00C4C7]">
                Partner Program
                <ChevronDown size={21} strokeWidth={2.5} />
              </button>

              <div className="absolute left-0 top-full mt-1.5 w-44 rounded-xl border border-gray-200 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                <Link
                  to="/overview"
                  className="block px-3 py-2 text-[11px] font-medium text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6] rounded-t-xl"
                >
                  Overview
                </Link>

                <Link
                  to="/Distributor"
                  className="block px-3 py-2 text-[11px] font-medium text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6] rounded-t-xl"
                >
                  Distributor Program
                </Link>

                <Link
                  to="/Retailer"
                  className="block px-3 py-2 text-[11px] font-medium text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6] rounded-b-xl"
                >
                  Retailer Program
                </Link>

                <Link
                  to="/whiteLabel"
                  className="block px-3 py-2 text-[11px] font-medium text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6] rounded-b-xl"
                >
                  White Label Program
                </Link>

                <Link
                  to="/Enterprise"
                  className="block px-3 py-2 text-[11px] font-medium text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6] rounded-b-xl"
                >
                  Enterprise Program
                </Link>

              </div>
            </div>
            <Link to="/about" className="text-[20px] font-bold transition-colors hover:text-[#00C4C7]">
              About Us
            </Link>
            <Link to="/blog" className="text-[20px] font-bold transition-colors hover:text-[#00C4C7]">
              Blog
            </Link>
            {/* <Link to="/contact" className="text-[20px] font-bold transition-colors hover:text-[#00C4C7]">
              Contact
            </Link> */}
          </nav>

          {/* <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <a
              href="https://partner.abheepay.com/backend/customer/login"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg border-2 border-[#00C4C7] px-4 text-[16px] font-semibold text-[#00AEB2] transition-colors hover:bg-[#00C4C7] hover:text-white"
            >
              Login
            </a>
            <Link
              to="/join-as-retailer"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-[#00C4C7] px-4 text-[16px] font-semibold text-white shadow-sm transition-colors hover:bg-[#00AEB2]"
            >
              Get Started
            </Link>
            <button
              onClick={() => setOpenSearch(true)}
              className="hidden p-1.5 rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#00C4C7]"
            >
              <Search size={16} />
            </button>
            <button
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-gray-800 hover:bg-gray-100 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div> */}



          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <div
              className="
      flex items-center gap-2
      rounded-2xl
      bg-gradient-to-r
      from-[#081C33]
      via-[#0B2545]
      to-[#081C33]
      border border-[#16C7C9]/20
      shadow-lg
      p-2
    "
            >
              <a
                href="https://partner.abheepay.com/backend/customer/login"
                className="
inline-flex
items-center
justify-center
h-10
px-5
rounded-xl
bg-[#18C7C9]
text-white
font-semibold
leading-none
whitespace-nowrap
transition
"
              >
                Login
              </a>

              <Link
                to="/join-as-retailer"
                className="
inline-flex
items-center
justify-center
h-10
px-5
rounded-xl
bg-[#18C7C9]
text-white
font-semibold
leading-none
whitespace-nowrap
transition
"
              >
                Get Started
              </Link>
            </div>
          </div>







        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && createPortal(
        <div className="lg:hidden fixed inset-0 z-[1000]">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside
            className="absolute inset-y-0 left-0 z-10 flex h-[100dvh] w-[85vw] max-w-sm flex-col overflow-hidden bg-[#0F172A] text-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div className="p-5 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/assets/image/logo/logos.png" alt="Logo" className="h-16 w-16 object-contain" />
                  </Link>
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    className="rounded-md p-2 text-white transition-colors hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>
              <div className="px-5 py-6 flex flex-col gap-5">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  HOME
                </Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                  ABOUT US
                </Link>

                <div>
                  <button
                    className="w-full flex justify-between items-center font-semibold"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span>SERVICES</span> {servicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {servicesOpen && (
                    <div className="mt-3 pl-4 flex flex-col gap-3 border-l-2 border-[#14B8A6]/30">
                      {allServices.map((s, i) => (
                        <div key={i}>
                          <Link
                            to={s.path}
                            className="block font-bold text-[#14B8A6]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {s.name}
                          </Link>
                          {s.items?.map((it, idx) => (
                            <Link
                              key={idx}
                              to={it.path}
                              className="block text-xs text-gray-400 mt-2"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              - {it.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/join-as-retailer" onClick={() => setMobileMenuOpen(false)}>
                  RETAILER PROGRAM
                </Link>

                <Link to="/Distributor" onClick={() => setMobileMenuOpen(false)}>
                  DISTRIBUTOR PROGRAM
                </Link>

                <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
                  BLOGS
                </Link>
                <Link to="/account-delete" onClick={() => setMobileMenuOpen(false)}>
                  ACCOUNT DELETE
                </Link>

                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT US
                </Link>
              </div>
            </div>
          </aside>
        </div>,
        document.body
      )}

      {/* SEARCH BAR */}
      {openSearch && (
        <div className="absolute top-full left-0 w-full bg-[#222836] border-t border-gray-700 shadow-xl z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 relative">
            <div className="flex items-center gap-4 text-white">
              <Search className="text-gray-400" size={18} />
              <input
                type="text"
                autoFocus
                className="w-full text-base bg-transparent outline-none"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && suggestions[0] && handleSearchNav(suggestions[0].path)}
              />
              <button
                onClick={() => {
                  setOpenSearch(false);
                  setSearchQuery("");
                }}
              >
                <X size={18} />
              </button>
            </div>

            {suggestions.length > 0 && (
              <div className="absolute left-6 right-6 top-full bg-[#1a1f2b] border border-gray-700 rounded-b-lg shadow-2xl overflow-hidden max-w-lg">
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => handleSearchNav(s.path)}
                    className="px-4 py-2.5 hover:bg-[#00D3CD]/10 cursor-pointer text-white border-b border-gray-800 last:border-none"
                  >
                    {s.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
