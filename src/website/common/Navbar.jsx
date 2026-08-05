import React, { useState, useEffect, useRef } from "react";
import { Search, X, Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // mobile
  const [scrolled, setScrolled] = useState(false);

  // Desktop services dropdown control
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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

  const products = [
    { name: "Payment Gateway", path: "/products/payment-gateway" },
    { name: "Payment Links", path: "/products/payment-links" },
    { name: "QR Code", path: "/products/qr-code" },
    { name: "Sound Box", path: "/products/sound-box" },
    { name: "POS Machine", path: "/products/pos-machine" },
    { name: "Merchant App", path: "/products/merchant-app" },
    { name: "Digital Invoice", path: "/products/digital-invoice" },
  ];

  const apiMarketplace = [
    { name: "Payment Gateway API", path: "/api/payment-gateway" },
    { name: "Payout API", path: "/api/payout" },
    { name: "BBPS API", path: "/api/bbps" },
    { name: "Wallet API", path: "/api/wallet" },
    { name: "QR API", path: "/api/qr" },
    { name: "Aadhaar Verification API", path: "/api/aadhaar" },
    { name: "Recharge API", path: "/api/recharge" },
  ];

  const developerHub = [
    { name: "Documentation", path: "/developers/docs" },
    { name: "SDK", path: "/developers/sdk" },
    { name: "Sandbox", path: "/developers/sandbox" },
    { name: "Webhooks", path: "/developers/webhooks" },
    { name: "Postman", path: "/developers/postman" },
    { name: "Release Notes", path: "/developers/releases" },
    { name: "Support", path: "/developers/support" },
  ];

  const partners = [
    { name: "Overview", path: "/partners" },
    { name: "Retailer Program", path: "/partners/retailer" },
    { name: "Distributor Program", path: "/partners/distributor" },
    { name: "White Label Program", path: "/partners/white-label" },
    { name: "Enterprise Program", path: "/partners/enterprise" },
  ];

  const allServices = [...products, ...apiMarketplace, ...developerHub, ...partners];

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = allServices.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase())
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

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white border-b border-gray-100 shadow-sm transition-all duration-300 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/assets/image/logo/logos.png" alt="AbheePay" className="h-12 w-36 object-contain" />
            </Link>
          </div>

          <nav className="hidden lg:flex flex-1 justify-center items-center gap-8 text-gray-700">
            <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                to="/services"
                className="text-sm font-semibold transition-colors hover:text-[#00C4C7]"
              >
                Services
              </Link>

              {/* ✅ CHANGE #1: absolute → fixed (live clipping issue fix) */}
              <div
                className={`fixed top-16 left-1/2 -translate-x-1/2  w-[950px] max-w-[95vw] transition-all duration-200 ease-out z-[9999] lg:block
                  ${servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
              >
                {/* Extra padding-top to create safe hover area between link and dropdown */}
                <div>
                  <div className="grid grid-cols-4 gap-5 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 max-h-[85vh] overflow-y-auto">
                    <div className="bg-[#F6FAFF] rounded-xl p-5">
                      <div className="w-full flex justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">Products</h3>
                      </div>
                      <div className="space-y-3">
                        {products.map((product, index) => (
                          <div key={index} className="group/item">
                            <Link
                              to={product.path}
                              className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <p className="font-semibold text-gray-900 leading-tight">{product.name}</p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#F5FBF6] rounded-xl p-5">
                      <div className="w-full flex justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">API Marketplace</h3>
                      </div>
                      <div className="space-y-3">
                        {apiMarketplace.map((api, index) => (
                          <div key={index} className="group/item">
                            <Link
                              to={api.path}
                              className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <p className="font-semibold text-gray-900 leading-tight">{api.name}</p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#FFF7ED] rounded-xl p-5">
                      <div className="w-full flex justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">Developer Hub</h3>
                      </div>
                      <div className="space-y-3">
                        {developerHub.map((item, index) => (
                          <div key={index} className="group/item">
                            <Link
                              to={item.path}
                              className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <p className="font-semibold text-gray-900 leading-tight">{item.name}</p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#EFF6FF] rounded-xl p-5">
                      <div className="w-full flex justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#00C6C9]">Partners</h3>
                      </div>
                      <div className="space-y-3">
                        {partners.map((partner, index) => (
                          <div key={index} className="group/item">
                            <Link
                              to={partner.path}
                              className="flex items-center gap-4 transition-all hover:translate-x-1.5 hover:text-[#00D3CD]"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <p className="font-semibold text-gray-900 leading-tight">{partner.name}</p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/join-as-retailer"
              className="relative text-sm font-semibold tracking-wide after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#00D3CD] after:transition-all after:duration-300 hover:after:w-full hover:text-[#00D3CD]"
            >
              JOIN AS RETAILER
            </Link>
            <Link
              to="/join-as-distributor"
              className="relative text-sm font-semibold tracking-wide after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#00D3CD] after:transition-all after:duration-300 hover:after:w-full hover:text-[#00D3CD]"
            >
              JOIN AS DISTRIBUTOR
            </Link>
            <Link to="/blog" className="relative text-sm font-semibold tracking-wide hover:text-[#00D3CD]">
              BLOGS
            </Link>
            <Link to="/contact" className="relative text-sm font-semibold tracking-wide hover:text-[#00D3CD]">
              CONTACT US
            </Link>
            <a href="https://partner.abheepay.com/backend/customer/login" className="relative text-sm font-semibold tracking-wide hover:text-[#00D3CD]">
              LOGIN
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpenSearch(true)}
              className="p-2 rounded-full hover:bg-gray-700/50 text-white transition-colors"
            >
              <Search size={20} />
            </button>
            <button
              className="lg:hidden text-white p-2 rounded-md hover:bg-gray-700/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } bg-[#0F172A] text-white`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <div className="p-6 border-b border-gray-700">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/assets/image/logo/logos.png" alt="Logo" className="h-20 w-20 object-contain" />
            </Link>
          </div>
          <div className="px-6 py-8 flex flex-col gap-6">
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
                <span>SERVICES</span> {servicesOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </button>

              {servicesOpen && (
                <div className="mt-4 pl-5 flex flex-col gap-4 border-l-2 border-[#00D3CD]/30">
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
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      {openSearch && (
        <div className="absolute top-full left-0 w-full bg-[#222836] border-t border-gray-700 shadow-xl z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 relative">
            <div className="flex items-center gap-4 text-white">
              <Search className="text-gray-400" />
              <input
                type="text"
                autoFocus
                className="w-full text-lg bg-transparent outline-none"
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
                <X size={20} />
              </button>
            </div>

            {suggestions.length > 0 && (
              <div className="absolute left-6 right-6 top-full bg-[#1a1f2b] border border-gray-700 rounded-b-lg shadow-2xl overflow-hidden max-w-lg">
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => handleSearchNav(s.path)}
                    className="px-4 py-3 hover:bg-[#00D3CD]/10 cursor-pointer text-white border-b border-gray-800 last:border-none"
                  >
                    {s.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {mobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setMobileMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
