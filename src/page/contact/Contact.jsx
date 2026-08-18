import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async"; // swap to "react-helmet" if that's what you have installed
import {
  Headphones,
  Briefcase,
  Handshake,
  BellRing,
  MapPin,
  Phone,
  Mail,
  Clock,
  Plug,
  Building2,
  LifeBuoy,
  ChevronDown,
  X,
  ArrowRight,
  Loader2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO CONSTANTS                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.abheepay.com"; // update if this differs from your production domain
const PAGE_PATH = "/company/contact-us";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const SEO_TITLE = "Contact AbheePay | Sales, Support & Business Enquiries";
const SEO_DESCRIPTION =
  "Contact AbheePay for sales enquiries, partnership opportunities, API integration, enterprise solutions, or customer support. Our team is ready to help.";



const CHANNELS = {
  sales: {
    title: "Sales Enquiry",
    subtitle: "Tell us about your business and we'll show you the right fit.",
    queryLabel: "What are you looking for?",
    queryPlaceholder: "Tell us about your business and payment needs...",
  },
  enterprise: {
    title: "Enterprise Solutions",
    subtitle: "Tell us about the project or infrastructure you're planning.",
    queryLabel: "What are you building?",
    queryPlaceholder: "Tell us about your enterprise requirements...",
  },
  api: {
    title: "API Sales",
    subtitle: "Tell us which API you're interested in and your use case.",
    queryLabel: "Which API do you need?",
    queryPlaceholder: "Payment Gateway API, Payout API, BBPS API, Wallet API...",
  },
  partner: {
    title: "Partner Program",
    subtitle: "Tell us about your business and the partnership you have in mind.",
    queryLabel: "What kind of partnership?",
    queryPlaceholder: "Tell us a bit about your organisation and the idea...",
  },
  support: {
    title: "Technical Support",
    subtitle: "Tell us what's going on and we'll help you sort it out.",
    queryLabel: "What do you need help with?",
    queryPlaceholder: "Describe the issue you're facing...",
  },
};

const CARDS = [
  {
    channel: "sales",
    icon: Briefcase,
    title: "Sales Enquiry",
    description:
      "Learn more about our products and services, including Payment Gateway, QR Solutions, POS Machine, Merchant App, Business Banking Solutions, and Digital Invoice.",
    cta: "Talk to Sales",
  },
  {
    channel: "enterprise",
    icon: Building2,
    title: "Enterprise Solutions",
    description:
      "Discuss custom technology projects, payment infrastructure, API integration, and enterprise business requirements with our solution experts.",
    cta: "Discuss Your Project",
  },
  {
    channel: "api",
    icon: Plug,
    title: "API Sales",
    description:
      "Connect with our API specialists to learn more about the Payment Gateway API, Payout API, BBPS API, Wallet API, QR API, Recharge API, and Aadhaar Verification API.",
    cta: "Explore API Access",
  },
  {
    channel: "partner",
    icon: Handshake,
    title: "Partner Program",
    description:
      "Interested in becoming a Retailer, Distributor, White Label Partner, or Enterprise Partner? Our partnership team will guide you through the onboarding process.",
    cta: "Become a Partner",
  },
  {
    channel: "support",
    icon: LifeBuoy,
    title: "Technical Support",
    description:
      "Need help with integration, onboarding, or an existing service? Our technical support team is available to assist you.",
    cta: "Get Support",
  },
];

const OFFICES = [
  {
    city: "New Delhi",
    address: (
      <>
        2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
        <br />
        SECTOR-19, DWARKA, NEW DELHI - 110043
      </>
    ),
  },
];

const BUSINESS_TYPES = [
  "Retailer",
  "Distributor",
  "White Label Partner",
  "Enterprise",
  "Individual / Merchant",
  "Other",
];

const PRODUCTS_INTERESTED = [
  "Payment Gateway",
  "QR Solutions",
  "POS Machine",
  "Merchant App",
  "Business Banking Solutions",
  "Digital Invoice",
  "API Integration",
  "Other",
];

const FAQS = [
  {
    q: "How quickly will I receive a response?",
    a: "Our team aims to respond to enquiries as quickly as possible during business hours, typically within one business day.",
  },
  {
    q: "Can I request a product demonstration?",
    a: "Yes. You can schedule a product demonstration by selecting \"Schedule a Demo\" or mentioning your request in the enquiry form.",
  },
  {
    q: "I need help choosing the right solution.",
    a: "No problem. Share your business requirements in the enquiry form, and our team will recommend the most suitable products and services.",
  },
  {
    q: "Can I enquire about partnerships?",
    a: "Yes. We welcome enquiries for the Retailer Program, Distributor Program, White Label Program, and Enterprise Program.",
  },
  {
    q: "How do I contact technical support?",
    a: "Existing customers can contact our technical support team using the phone number and email address provided on this page.",
  },
];

/* ------------------------------------------------------------------ */
/*  SHARED FORM FIELD STYLES                                           */
/* ------------------------------------------------------------------ */

const inputClass =
  "w-full px-[15px] py-[9px] text-[15px] rounded-[6px] border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition";

/* ------------------------------------------------------------------ */
/*  QUICK-ENQUIRY MODAL (opened from the "How Can We Help" cards)      */
/* ------------------------------------------------------------------ */

function ContactModal({ channel, onClose }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [visible, setVisible] = useState(false);
  const firstFieldRef = useRef(null);
  const meta = CHANNELS[channel];

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    firstFieldRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const indiaTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    formData.append("Submitted At (IST)", indiaTime);
    formData.append("Enquiry Type", meta.title);

    try {
      const response = await fetch("https://formsubmit.co/care@abheepay.com", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button
        aria-label="Close dialog"
        onClick={handleClose}
        className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-default transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-[525px] bg-white shadow-2xl flex flex-col transition-transform duration-200 ease-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-[18px] pt-[18px] pb-3 flex-shrink-0 border-b border-gray-100">
          <div>
            <h3 id="contact-modal-title" className="text-[18px] font-bold text-gray-900">
              {meta.title}
            </h3>
            <p className="text-[13.5px] text-gray-500 mt-[2px]">{meta.subtitle}</p>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="flex-shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] transition"
          >
            <X className="w-[15px] h-[15px]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-[18px] pb-[18px]">
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-[6px] py-9">
              <div className="w-9 h-9 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
                <Handshake className="w-[18px] h-[18px]" />
              </div>
              <h4 className="text-[16.5px] font-bold text-gray-900">Message sent</h4>
              <p className="text-[15px] text-gray-500 max-w-xs">
                Thanks for reaching out. Our {meta.title.toLowerCase()} team
                typically replies within one business day.
              </p>
              <button
                onClick={handleClose}
                className="mt-[6px] text-[15px] font-semibold text-[#0f9c8c] hover:underline"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 pt-3">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                ref={firstFieldRef}
                name="name"
                type="text"
                required
                placeholder="Full Name"
                aria-label="Full Name"
                className={inputClass}
              />

              <input
                name="company"
                type="text"
                placeholder="Company Name"
                aria-label="Company Name"
                className={inputClass}
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Business Email Address"
                aria-label="Business Email Address"
                className={inputClass}
              />

              <input
                name="phone"
                type="tel"
                required
                placeholder="Mobile Number"
                aria-label="Mobile Number"
                className={inputClass}
              />

              <textarea
                name="message"
                rows={3}
                required
                placeholder={meta.queryPlaceholder}
                aria-label={meta.queryLabel}
                className={`${inputClass} resize-none`}
              />

              {status === "error" && (
                <p className="text-[13.5px] text-red-600 bg-red-50 border border-red-100 rounded-[12px] px-[9px] py-[6px]">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#2dd4bf] text-white font-semibold py-[9px] px-[15px] rounded-[6px] shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-[6px] text-[16.5px]"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-[18px] h-[18px] animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Enquiry"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN INLINE ENQUIRY FORM ("Send Us a Message" section)             */
/* ------------------------------------------------------------------ */

function MainEnquiryForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const indiaTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    formData.append("Submitted At (IST)", indiaTime);
    formData.append("Enquiry Type", "General Enquiry");

    try {
      const response = await fetch("https://formsubmit.co/care@abheepay.com", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm p-[36px] text-center flex flex-col items-center gap-[6px]">
        <div className="w-10 h-10 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
          <Handshake className="w-5 h-5" />
        </div>
        <h3 className="text-[19.5px] font-bold text-gray-900">Enquiry sent</h3>
        <p className="text-[15px] text-gray-500 max-w-sm">
          Thanks for reaching out. Our team typically replies within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-[6px] text-[15px] font-semibold text-[#0f9c8c] hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[24px] border border-gray-200 shadow-sm p-[24px] sm:p-[30px] space-y-3"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="name" type="text" required placeholder="Full Name" aria-label="Full Name" className={inputClass} />
        <input name="company" type="text" placeholder="Company Name" aria-label="Company Name" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="email"
          type="email"
          required
          placeholder="Business Email Address"
          aria-label="Business Email Address"
          className={inputClass}
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Mobile Number"
          aria-label="Mobile Number"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="city" type="text" placeholder="City" aria-label="City" className={inputClass} />
        <input name="state" type="text" placeholder="State" aria-label="State" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select name="business_type" defaultValue="" aria-label="Business Type" className={inputClass}>
          <option value="" disabled>
            Business Type
          </option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          name="product_interested"
          defaultValue=""
          aria-label="Product or Service Interested In"
          className={inputClass}
        >
          <option value="" disabled>
            Product or Service Interested In
          </option>
          {PRODUCTS_INTERESTED.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        rows={4}
        required
        placeholder="Tell us more about your requirement..."
        aria-label="Message"
        className={`${inputClass} resize-none`}
      />

      {status === "error" && (
        <p className="text-[13.5px] text-red-600 bg-red-50 border border-red-100 rounded-[12px] px-[9px] py-[6px]">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-[#2dd4bf] text-white font-semibold py-[10px] px-[27px] rounded-[6px] shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-[6px] text-[16px]"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-[18px] h-[18px] animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <ArrowRight className="w-[15px] h-[15px]" />
          </>
        )}
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ ACCORDION                                                       */
/* ------------------------------------------------------------------ */

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-gray-100 bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-3 text-left px-[21px] py-[18px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2dd4bf]"
            >
              <span className="text-[16px] font-semibold text-gray-900">{item.q}</span>
              <ChevronDown
                className={`w-[18px] h-[18px] text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#0f9c8c]" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-[21px] pb-[18px] text-[15px] text-gray-600 leading-6">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

const ContactUs = () => {
  const [activeChannel, setActiveChannel] = useState(null);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: PAGE_URL,
    mainEntity: {
      "@type": "Organization",
      name: "AbheePay",
      email: "care@abheepay.com",
      telephone: "+91-88600-37218",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA",
        addressLocality: "New Delhi",
        postalCode: "110043",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+91-88600-37218",
          email: "care@abheepay.com",
          areaServed: "IN",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+91-88600-37218",
          email: "care@abheepay.com",
          areaServed: "IN",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2dd4bf]/[0.06] to-white pt-36 sm:pt-[168px]">
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="AbheePay" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ---------------- HERO ---------------- */}
      <div className="px-[15px] sm:px-6 max-w-[864px] mx-auto pb-9 sm:pb-[42px] text-center">
        <h1 className="text-[36px] sm:text-[36px] lg:text-[48px] font-black tracking-[-0.04em] leading-[1.05] text-slate-900">
          Let's <span className="text-[#14B8A6]">Connect</span>
        </h1>
        <p className="mt-[15px] text-[18px] font-semibold text-gray-800">
          Whether you're looking for payment solutions, API integration, enterprise technology, or
          partnership opportunities, our team is here to help.
        </p>
        <p className="mt-[9px] text-[15px] text-gray-600 leading-6 max-w-[720px] mx-auto">
          At AbheePay, we believe every conversation is an opportunity to build lasting business
          relationships. Reach out to us with your questions, project requirements, or business
          enquiries, and we'll connect you with the right team.
        </p>

        <div className="mt-[21px] flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setActiveChannel("sales")}
            className="inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-white bg-[#2dd4bf] hover:bg-[#22bfab] rounded-[18px] px-[21px] py-3 shadow-md hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
          >
            Contact Sales
            <ArrowRight className="w-[15px] h-[15px]" />
          </button>
          <button
            onClick={() => setActiveChannel("sales")}
            className="inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-[18px] px-[21px] py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
          >
            Schedule a Demo
          </button>
        </div>
      </div>

      <div className="px-[15px] sm:px-[18px] lg:px-6 max-w-[1008px] mx-auto pb-12 sm:pb-[54px] space-y-[54px]">
        {/* ---------------- HOW CAN WE HELP ---------------- */}
        <section>
          <div className="text-center mb-[21px]">
            <h2 className="text-[32px] sm:text-[36px] font-black tracking-[-0.03em] text-gray-900">
              How Can We <span className="text-[#0f9c8c]">Help?</span>
            </h2>
            <p className="text-[15px] text-gray-600 mt-[6px]">
              Choose the option that best matches your requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px]">
            {CARDS.map(({ channel, icon: Icon, title, description, cta }) => (
              <div
                key={channel}
                className="bg-white rounded-[6px] shadow-[0_20px_50px_rgba(15,23,42,.08)] hover:shadow-[0_30px_60px_rgba(20,184,166,.12)] border border-gray-200 p-[24px] flex flex-col transition-shadow"
              >
                <Icon className="w-6 h-6 text-gray-900 mb-3" strokeWidth={1.75} />
                <h3 className="text-[19.5px] font-black tracking-[-0.02em] text-gray-900 mb-[6px]">
                  {title}
                </h3>
                <p className="text-[14.5px] text-gray-600 leading-6 mb-[15px] flex-1">
                  {description}
                </p>
                <button
                  onClick={() => setActiveChannel(channel)}
                  className="self-start inline-flex items-center justify-center gap-[6px] text-[14px] font-semibold text-gray-800 bg-gray-100 hover:bg-[#2dd4bf] hover:text-white rounded-[18px] px-[18px] py-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
                >
                  {cta}
                  <ArrowRight className="w-[14px] h-[14px]" />
                </button>
              </div>
            ))}

            {/* report fraud card, styled to match */}
            <div className="bg-white rounded-[6px] border border-gray-200 p-[24px] flex flex-col">
              <BellRing className="w-6 h-6 text-gray-900 mb-3" strokeWidth={1.75} />
              <h3 className="text-[19.5px] font-black tracking-[-0.02em] text-gray-900 mb-[6px]">
                Report Fraud
              </h3>
              <p className="text-[14.5px] text-gray-600 leading-6 mb-[15px] flex-1">
                Report any suspicious activity or unusual transactions immediately.
              </p>
              <a
                href="mailto:care@abheepay.com?subject=Fraud%20Report"
                className="self-start inline-flex items-center justify-center gap-[6px] text-[14px] font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-[18px] px-[18px] py-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              >
                Report Here
                <ArrowRight className="w-[14px] h-[14px]" />
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- SEND US A MESSAGE ---------------- */}
        <section ref={formRef}>
          <div className="text-center mb-[21px]">
            <h2 className="text-[32px] sm:text-[36px] font-black tracking-[-0.03em] text-gray-900">
              Send Us a <span className="text-[#0f9c8c]">Message</span>
            </h2>
            <p className="text-[15px] text-gray-600 mt-[6px]">
              Complete the enquiry form, and our team will contact you as soon as possible.
            </p>
          </div>

          <div className="max-w-[720px] mx-auto">
            <MainEnquiryForm />
          </div>
        </section>

        {/* ---------------- BUSINESS INFORMATION ---------------- */}
        <section>
          <div className="mb-[18px]">
            <h2 className="text-[32px] sm:text-[36px] font-black tracking-[-0.03em] text-gray-900 mb-[6px]">
              Business <span className="text-[#0f9c8c]">Information</span>
            </h2>
            <p className="text-[15px] text-gray-600">
              You can also reach us through the following contact details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] items-start">
            <div className="space-y-3">
              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="bg-white rounded-[24px] border-l-[6px] border-[#2dd4bf] p-[24px] shadow-sm"
                >
                  <div className="flex items-center gap-[6px] mb-[6px]">
                    <MapPin className="w-[15px] h-[15px] text-[#0f9c8c]" />
                    <p className="text-[15px] font-bold text-gray-900">Corporate Office — {office.city}</p>
                  </div>
                  <p className="text-[14.5px] text-gray-700 leading-relaxed">{office.address}</p>
                </div>
              ))}

              <div className="bg-white rounded-[24px] border border-gray-200 p-[24px] shadow-sm">
                <div className="flex items-center gap-[6px] mb-[6px]">
                  <Clock className="w-[15px] h-[15px] text-[#0f9c8c]" />
                  <p className="text-[15px] font-bold text-gray-900">Business Hours</p>
                </div>
                <p className="text-[14.5px] text-gray-700 leading-relaxed">
                  Monday – Saturday
                  <br />
                  9:30 AM – 6:30 PM
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-[3px]">
                <a
                  href="tel:+918860037218"
                  className="flex items-center gap-[6px] text-[15px] text-gray-700 hover:text-[#0f9c8c] transition"
                >
                  <Phone className="w-[15px] h-[15px] text-[#0f9c8c]" />
                  +91 88600 37218
                </a>
                <a
                  href="mailto:care@abheepay.com"
                  className="flex items-center gap-[6px] text-[15px] text-gray-700 hover:text-[#0f9c8c] transition"
                >
                  <Mail className="w-[15px] h-[15px] text-[#0f9c8c]" />
                  care@abheepay.com
                </a>
              </div>
            </div>

            <div className="rounded-[24px] border border-gray-200 shadow-md hover:shadow-xl overflow-hidden h-64 lg:h-full lg:min-h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AbheePay corporate office location on Google Maps"
              />
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section>
          <div className="mb-[18px]">
            <h2 className="text-[32px] sm:text-[36px] font-black tracking-[-0.03em] text-gray-900">
              Frequently Asked <span className="text-[#0f9c8c]">Questions</span>
            </h2>
          </div>
          <FAQAccordion />
        </section>

        {/* ---------------- BOTTOM CTA ---------------- */}
        <section className="bg-white rounded-[24px] border border-gray-200 shadow-sm p-[30px] sm:p-[42px] text-center">
          <h2 className="text-[27px] sm:text-[32px] font-black tracking-[-0.02em] text-gray-900 mb-[9px]">
            Connect with <span className="text-[#0f9c8c]">AbheePay</span>
          </h2>
          <p className="text-[15px] text-gray-600 max-w-[600px] mx-auto mb-[21px]">
            Whether you're exploring our products, planning a new project, or looking for a
            long-term technology partner, we're here to help. Let's discuss how AbheePay can
            support your business with secure payment solutions, enterprise technology, and
            innovative digital services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setActiveChannel("sales")}
              className="inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-white bg-[#2dd4bf] hover:bg-[#22bfab] rounded-[18px] px-[21px] py-3 shadow-md hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
            >
              Contact Sales
              <ArrowRight className="w-[15px] h-[15px]" />
            </button>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-[18px] px-[21px] py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              Schedule a Demo
            </button>
          </div>
        </section>

        <p className="text-[13.5px] text-gray-400 text-center">
          We typically reply within one business day.
        </p>
      </div>

      {activeChannel && (
        <ContactModal channel={activeChannel} onClose={() => setActiveChannel(null)} />
      )}
    </div>
  );
};

export default ContactUs;