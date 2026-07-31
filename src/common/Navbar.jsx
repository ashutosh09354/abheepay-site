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
import { Banknote, ChevronDown, ChevronUp, Code2, Landmark, Menu, Plane, Search, WalletCards, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile
  const [scrolled, setScrolled] = useState(false);

  // Desktop services dropdown control
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState("Payment Solutions");
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
        // { name: "Payment, banking, travel & wallet APIs", path: "/services/payment-banking-travel-wallet-apis" },
        // // { name: "Settlement & reconciliation systems", path: "/services/settlement-reconciliation-systems" },
        // { name: "Merchant, distributor & admin dashboards", path: "/services/Merchant-distributor-admin-dashboards" },
        // { name: "White-label fintech & travel platforms", path: "/services/white-label-fintech-travel-platforms" },
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

  const solutionCategories = [
    { name: "Payment Solutions", description: "Accept payments seamlessly", icon: WalletCards, target: "payment-solutions", services: allServices.slice(0, 1).flatMap((service) => service.items || [service]) },
    { name: "Banking Services", description: "Banking closer to customers", icon: Landmark, target: "banking-services", services: allServices.slice(1, 3).flatMap((service) => service.items || [service]) },
    { name: "Financial Services", description: "Grow with smart finance", icon: Banknote, target: "financial-services", services: allServices.slice(3, 5).flatMap((service) => service.items || [service]) },
    { name: "Travel Services", description: "Flights, buses, trains & hotels", icon: Plane, target: "travel-services", services: allServices.slice(5, 6).flatMap((service) => service.items || [service]) },
    { name: "Technology Solutions", description: "Build, scale and automate", icon: Code2, target: "technology-solutions", services: allServices.slice(6).flatMap((service) => service.items || [service]) },
  ];
  const activeSolutionCategory = solutionCategories.find((category) => category.name === activeSolution) || solutionCategories[0];

  return (
    // <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm transition-all duration-300 overflow-visible">

    <header className="fixed top-0 left-0 right-0 w-full z-[100] overflow-visible bg:linear-gradient( 180deg,#FFFFFF 0%, #F8FBFD 45%, #EEF7FA 100%
);
  backdrop-blur-xl
  border-b border-white/10
  shadow-2xl
  transition-all duration-500"
    >




      <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-5 ">
        <div className="flex h-14 items-center justify-between lg:h-10">


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
                className="
        rounded-xl
        px-2
        py-1
        bg-gradient-to-r
        from-[#081C33]
        via-[#0B2545]
        to-[#081C33]
        border
        border-[#16C7C9]/20
        shadow-lg
        transition-all
        duration-300
        hover:shadow-[0_0_30px_rgba(22,199,201,0.25)]
      "
              >
                <img
                  src="/assets/image/logo/logos.png"
                  alt="AbheePay"
                  className="h-4 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
          </div>





          <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 text-gray-700">
            <Link to="/services" className="text-[11px] font-semibold transition-colors hover:text-[#00C4C7]">
              Services
            </Link>
            <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                to="/services"
                className="flex items-center gap-1 text-[11px] font-semibold transition-colors hover:text-[#00C4C7]"
              >
                Solutions <ChevronDown size={12} strokeWidth={2.5} />
              </Link>

              {/* ✅ CHANGE #1: absolute → fixed (live clipping issue fix) */}
              <div
                className={`fixed top-14 left-1/2 -translate-x-1/2 w-[480px] max-w-[95vw] transition-all duration-200 ease-out z-[9999] lg:block
                  ${servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
              >
                <div className="rounded-xl border border-slate-100 bg-white p-1.5 shadow-2xl">
                  <div className="grid grid-cols-5 gap-1">
                    {solutionCategories.map(({ name, icon: Icon, target }) => (
                      <Link
                        key={name}
                        to={`/services#${target}`}
                        onMouseEnter={() => setActiveSolution(name)}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group rounded-lg bg-[#f5f7fb] p-1.5 transition hover:-translate-y-0.5 hover:bg-[#e7f6ff]"
                      >
                        <span className="mb-1.5 flex h-6 w-6 items-center justify-center rounded-lg bg-white text-[#2DD4BF] shadow-sm transition group-hover:scale-105">
                          <Icon size={13} strokeWidth={2.8} />
                        </span>
                        <span className="block text-[7px] font-bold leading-3 text-[#111827]">{name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-1.5 max-h-14 overflow-y-auto rounded-lg bg-[#f7f9fc] px-1.5 py-1.5">
                    <p className="mb-1 text-[7px] font-bold uppercase tracking-wide text-[#40617d]">{activeSolutionCategory.name}</p>
                    <div className="grid grid-cols-3 gap-x-2 gap-y-0">
                      {activeSolutionCategory.services.map((service) => (
                        <Link
                          key={service.path || service.name}
                          to={service.path || "/services"}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="truncate py-0.5 text-[7px] font-medium text-slate-600 transition hover:text-[#00aeb2]"
                          title={service.name}
                        >
                          <span className="mr-1 text-cyan-500">•</span>{service.name}
                        </Link>
                      ))}
                    </div>
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

            <div className="relative group">
              <button className="flex items-center gap-1 text-[11px] font-semibold transition-colors hover:text-[#00C4C7]">
                Partner
                <ChevronDown size={11} strokeWidth={2.5} />
              </button>

              <div className="absolute left-0 top-full mt-1.5 w-44 rounded-xl border border-gray-200 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  to="/join-as-distributor"
                  className="block px-3 py-2 text-[11px] font-medium text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6] rounded-t-xl"
                >
                  Join as Distributor
                </Link>

                <Link
                  to="/join-as-retailer"
                  className="block px-3 py-2 text-[11px] font-medium text-gray-700 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6] rounded-b-xl"
                >
                  Join as Retailer
                </Link>
              </div>
            </div>
            <Link to="/about" className="text-[11px] font-semibold transition-colors hover:text-[#00C4C7]">
              About Us
            </Link>
            <Link to="/contact" className="text-[11px] font-semibold transition-colors hover:text-[#00C4C7]">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <LanguageSwitcher />
            <a
              href="https://partner.abheepay.com/backend/customer/login"
              className="hidden sm:inline-flex items-center justify-center rounded-lg border-2 border-[#00C4C7] px-2 py-0.5 text-[11px] font-semibold text-[#00AEB2] transition-colors hover:bg-[#00C4C7] hover:text-white"
            >
              Login
            </a>
            <Link
              to="/join-as-retailer"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#00C4C7] px-2 py-0.5 text-[11px] font-semibold text-white shadow-sm transition-colors hover:bg-[#00AEB2]"
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
              className="lg:hidden text-gray-800 p-1.5 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
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
                    <div className="mt-3 pl-4 flex flex-col gap-3 border-l-2 border-[#00D3CD]/30">
                      {allServices.map((s, i) => (
                        <div key={i}>
                          <Link
                            to={s.path}
                            className="block font-bold text-[#00D3CD]"
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
                  JOIN AS RETAILER
                </Link>

                <Link to="/join-as-distributor" onClick={() => setMobileMenuOpen(false)}>
                  JOIN AS DISTRIBUTOR
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
