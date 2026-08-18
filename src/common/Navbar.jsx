import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Award, BadgeCheck, Banknote, Briefcase, Building2, BookOpen, ChevronDown, ChevronRight, ChevronsRight, ChevronUp, Code2, CreditCard, FileText, Flag, Headphones, Landmark, LayoutGrid, Link2, Menu, Newspaper, Phone, Plane, QrCode, RefreshCcw, Search, Server, Send, ShieldCheck, ShoppingBag, Smartphone, Speaker, Store, User, Users, WalletCards, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile
  const [scrolled, setScrolled] = useState(false);

  // Desktop services dropdown control
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [partnerDropdownOpen, setPartnerDropdownOpen] = useState(false);
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

      ],
    },
    {
      name: "Assisted Banking & Cash Management",
      path: "/services/assisted-banking-cash-management",
      keywords: ["banking", "cash", "matm", "aeps"],
      items: [

        { name: "Connected Banking Solution", path: "/services/Connected-Banking-Solution" },

      ],
    },
    {
      name: "BBPS, Recharge & Bill Payments",
      keywords: ["bbps", "bill", "payment", "recharge", "dth", "mobile", "bill"],
      items: [

      ],
    },
    {
      name: "Lending & Credit Solutions",
      keywords: ["loan", "credit", "finance", "lending"],
      items: [

      ],
    },

    {
      name: "Travel APIs & Travel Services",
      keywords: ["travel", "flight", "hotel", "api"],
      items: [

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

  const companyLinks = [
    { name: "About Us", path: "/company/about-us", icon: Building2 },
    { name: "Leadership Team", path: "/company/leadership-team", icon: Users },
    { name: "Careers", path: "/company/careers", icon: Briefcase },
    { name: "News & Updates", path: "/company/news-updates", icon: Newspaper },
    { name: "Blog", path: "/company/blog", icon: BookOpen },
    { name: "Contact Us", path: "/company/contact-us", icon: Phone },
    { name: "Our Story", path: "/company/our-story", icon: Flag },
  ];

  const partnerLinks = [
    { name: "Overview", path: "/overview", icon: User },
    { name: "Distributor Program", path: "/Distributor", icon: Store },
    { name: "Retailer Program", path: "/Retailer", icon: ShoppingBag },
    { name: "White Label Program", path: "/whiteLabel", icon: Award },
    { name: "Enterprise Program", path: "/Enterprise", icon: BadgeCheck },
  ];

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
    { title: "Payment Gateway API", description: "Accept UPI, cards and net banking", icon: CreditCard, to: "/api/payment-gateway" },
    { title: "BBPS API", description: "Bill payments and merchant billing workflows", icon: FileText, to: "/api/bbps" },
    { title: "Payout API", description: "Automated vendor and partner disbursements", icon: Send, to: "/api/payout" },
    { title: "QR API", description: "Generate QR codes for instant payments", icon: QrCode, to: "/api/qr" },
    { title: "Wallet API", description: "Digital wallet balance and transfers", icon: WalletCards, to: "/api/wallet" },
    { title: "Aadhaar Verification API", description: "Authenticate users with Aadhaar data", icon: ShieldCheck, to: "/api/aadhaar" },
    { title: "Recharge API", description: "Mobile and DTH recharge integration", icon: Smartphone, to: "/api/recharge" },
    // { title: "Account Verification API", description: "Verify bank account and IFSC details", icon: Landmark, to: "/api/account-verification" },
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
    { name: "Payment Links", path: "/products/payment-links", icon: Link2 },
    { name: "QR Code", path: "/products/qr-code", icon: QrCode },
    { name: "Sound Box", path: "/products/sound-box", icon: Speaker },
    { name: "POS Machine", path: "/products/pos-machine", icon: CreditCard },
    { name: "Merchant App", path: "/products/merchant-app", icon: Smartphone },
    { name: "Digital Invoice", path: "/products/digital-invoice", icon: FileText },
    { name: "Payment Gateway", path: "/products/payment-gateway", icon: WalletCards },

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

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/image/logo/logos.png"
              alt="AbheePay"
              className="h-8 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 text-gray-700">
            <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                to="#"
                className="flex items-center gap-1 text-[20px] font-bold transition-colors hover:text-[#00C4C7]"
              >
                Products <ChevronDown size={21} strokeWidth={2.5} />
              </Link>

              {/* Products mega dropdown — anchored under the trigger, 4-column icon grid */}
              <div
                className={`absolute left-0 top-full mt-4 w-[540px] max-w-[90vw] transition-all duration-200 ease-out z-[9999]
                  ${servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
              >
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl">
                  <div className="grid grid-cols-4 gap-3">
                    {products.map((p) => {
                      const Icon = p.icon;
                      return (
                        <Link
                          key={p.path}
                          to={p.path}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group flex flex-col items-center gap-3 rounded-xl bg-[#f2f5f9] px-4 py-5 text-center transition hover:-translate-y-0.5 hover:bg-[#e6faf9]"
                        >
                          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#18C7C9] shadow-sm transition group-hover:scale-110">
                            {Icon ? <Icon size={22} strokeWidth={1.8} /> : null}
                          </span>
                          <span className="text-[13px] font-semibold leading-tight text-[#111827]">
                            {p.name}
                          </span>
                        </Link>
                      );
                    })}
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
                className={`absolute left-0 top-full z-[9999] mt-4 w-[880px] max-w-[92vw] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl transition-all duration-200 ease-out
                  ${developerHubOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"}`}
              >
                <div className="grid min-h-[420px] grid-cols-[220px_1fr]">
                  {/* Sidebar */}
                  <div className="flex min-h-[420px] flex-col bg-[#f5f7fc] p-6">
                    <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#0f172a]">
                      API Hub
                    </p>
                    <span className="mt-2 h-[3px] w-8 rounded-full bg-[#18C7C9]" />

                    <button
                      onClick={() => setDeveloperPanel('marketplace')}
                      onMouseEnter={() => setDeveloperPanel('marketplace')}
                      className={`mt-6 flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-left text-[14px] font-bold transition ${developerPanel === 'marketplace' ? "bg-white text-[#0f172a] shadow-sm" : "text-slate-600 hover:bg-white/60"}`}
                    >
                      <LayoutGrid size={18} className="text-[#18C7C9]" strokeWidth={2.2} />
                      API Marketplace
                    </button>
                    <button
                      onClick={() => setDeveloperPanel('developer')}
                      onMouseEnter={() => setDeveloperPanel('developer')}
                      className={`mt-1.5 flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-left text-[14px] font-bold transition ${developerPanel === 'developer' ? "bg-white text-[#0f172a] shadow-sm" : "text-slate-600 hover:bg-white/60"}`}
                    >
                      <Code2 size={18} className={developerPanel === 'developer' ? "text-[#18C7C9]" : "text-slate-400"} strokeWidth={2.2} />
                      Developer Hub
                    </button>

                    {/* Decorative illustration */}
                    <div className="mt-auto flex items-center justify-center pt-10">
                      <svg width="120" height="112" viewBox="0 0 120 112" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="60,6 108,30 60,54 12,30" fill="#CFEFEF" />
                        <polygon points="12,30 60,54 60,98 12,74" fill="#8FDBDD" />
                        <polygon points="108,30 60,54 60,98 108,74" fill="#18C7C9" />
                        <text x="60" y="47" textAnchor="middle" fontSize="13" fontWeight="800" fill="#0f172a">API</text>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-h-[480px] overflow-y-auto p-6">
                    {developerPanel === 'marketplace' && (
                      <div className="grid grid-cols-3 gap-4">
                        {developerApiItems.map((api) => (
                          <Link
                            key={api.title}
                            to={api.to}
                            onClick={() => setDeveloperHubOpen(false)}
                            className="group flex flex-col items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-6 text-center transition hover:-translate-y-0.5 hover:border-[#18C7C9]/40 hover:shadow-md"
                          >
                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f8f8] text-[#18C7C9] transition group-hover:scale-110">
                              {React.createElement(api.icon, { size: 20, strokeWidth: 1.8 })}
                            </span>
                            <span className="text-[13px] font-bold leading-tight text-[#111827]">{api.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}

                    {developerPanel === 'developer' && (
                      <div className="grid grid-cols-3 gap-4">
                        {developerHubItems.map((d) => {
                          const Icon = d.icon;
                          return (
                            <Link
                              key={d.path}
                              to={d.path}
                              onClick={() => setDeveloperHubOpen(false)}
                              className="group flex flex-col items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-6 text-center transition hover:-translate-y-0.5 hover:border-[#18C7C9]/40 hover:shadow-md"
                            >
                              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f8f8] text-[#18C7C9] transition group-hover:scale-110">
                                {Icon ? <Icon size={20} strokeWidth={1.8} /> : null}
                              </span>
                              <span className="text-[13px] font-bold leading-tight text-[#111827]">{d.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setPartnerDropdownOpen(true)}
              onMouseLeave={() => setPartnerDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-[20px] font-bold transition-colors ${partnerDropdownOpen ? "text-[#18C7C9]" : "text-gray-700 hover:text-[#00C4C7]"}`}
                aria-expanded={partnerDropdownOpen}
              >
                Partner Program
                <ChevronDown size={21} strokeWidth={2.5} className={partnerDropdownOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              <span
                className={`absolute left-1/2 -bottom-2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#18C7C9] transition-opacity duration-200 ${partnerDropdownOpen ? "opacity-100" : "opacity-0"}`}
              />

              <div
                className={`absolute left-1/2 top-full z-50 mt-5 w-72 -translate-x-1/2 transition-all duration-200 ease-out
                  ${partnerDropdownOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"}`}
              >
                <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-sm border-l border-t border-slate-100 bg-white" />
                <div className="relative rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl">
                  {partnerLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setPartnerDropdownOpen(false)}
                        className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[#e6f8f8]"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f8f8] text-[#18C7C9] transition group-hover:bg-[#18C7C9] group-hover:text-white">
                            <Icon size={17} strokeWidth={2} />
                          </span>
                          <span className="text-[14px] font-bold text-[#0f172a]">{item.name}</span>
                        </span>
                        <ChevronRight size={16} className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#18C7C9]" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link to="/about" className="text-[20px] font-bold transition-colors hover:text-[#00C4C7]">
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-[20px] font-bold transition-colors ${companyDropdownOpen ? "text-[#18C7C9]" : "text-gray-700 hover:text-[#00C4C7]"}`}
                aria-expanded={companyDropdownOpen}
              >
                Company
                <ChevronDown size={21} strokeWidth={2.5} className={companyDropdownOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              <span
                className={`absolute left-1/2 -bottom-2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#18C7C9] transition-opacity duration-200 ${companyDropdownOpen ? "opacity-100" : "opacity-0"}`}
              />

              <div
                className={`absolute right-0 top-full z-50 mt-5 w-72 transition-all duration-200 ease-out
                  ${companyDropdownOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"}`}
              >
                <span className="absolute -top-2 right-6 h-4 w-4 rotate-45 rounded-sm border-l border-t border-slate-100 bg-white" />
                <div className="relative rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl">
                  {companyLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setCompanyDropdownOpen(false)}
                        className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[#e6f8f8]"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f8f8] text-[#18C7C9] transition group-hover:bg-[#18C7C9] group-hover:text-white">
                            <Icon size={17} strokeWidth={2} />
                          </span>
                          <span className="text-[14px] font-bold text-[#0f172a]">{item.name}</span>
                        </span>
                        <ChevronRight size={16} className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#18C7C9]" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <a
              href="https://partner.abheepay.com/backend/customer/login" className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-xl bg-[#18C7C9] text-white font-semibold leading-none whitespace-nowrap transition hover:bg-[#14B8BA]"
            >
              Login
            </a>

            {/* Mobile burger button - visible only on small screens */}
            <button
              className="sm:hidden p-2 rounded-md text-gray-800 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open navigation menu"
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
                <div className="border-y border-white/10 py-4">
                  <p className="mb-3 font-semibold text-[#18C7C9]">COMPANY</p>
                  <div className="flex flex-col gap-3 pl-3 text-sm">
                    {companyLinks.map((item) => (
                      <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                        {item.name.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/Retailer" onClick={() => setMobileMenuOpen(false)}>
                  RETAILER PROGRAM
                </Link>

                <Link to="/Distributor" onClick={() => setMobileMenuOpen(false)}>
                  DISTRIBUTOR PROGRAM
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