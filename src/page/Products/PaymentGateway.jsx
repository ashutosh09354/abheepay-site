
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  MessageSquareText,
  Code2,
  Wallet,
  Activity,
  Check,
  ShieldCheck,
  Gauge,
  Store,
  Layers,
  Volume2,
  CreditCard,
  Landmark,
  Smartphone,
  Lock,
  QrCode,
  Link2,
  FileText,
  LayoutDashboard,
  RefreshCcw,
  BookOpen,
  Webhook,
  FlaskConical,
  LifeBuoy,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Plane,
  Cpu,
  Building2,
  Briefcase,
} from "lucide-react";

// ---------------------------------------------------------------------------
// SEO CONFIG — edit these values for your real domain / brand before deploy
// ---------------------------------------------------------------------------
const SITE_URL = "https://www.abheepay.com";
const PAGE_PATH = "/products/payment-gateway";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/payment-gateway.jpg`; // 1200x630 recommended

const SEO_TITLE =
  "Online Payment Gateway for Business in India | AbheePay";
const SEO_DESCRIPTION =
  "Accept UPI, Cards, Net Banking, Wallets, Payment Links & QR Codes with AbheePay's secure Payment Gateway. Easy API integration, real-time dashboard & fast settlements.";
const SEO_KEYWORDS =
  "payment gateway, payment gateway India, online payment gateway, UPI payment gateway, payment gateway for business, merchant payment solution, payment gateway API";

const faqs = [
  {
    q: "What is a Payment Gateway?",
    a: "A Payment Gateway is a secure technology that enables businesses to accept online payments from customers through multiple digital payment methods.",
  },
  {
    q: "Which payment methods are supported?",
    a: "AbheePay supports UPI, Credit Cards, Debit Cards, Net Banking, Digital Wallets, Payment Links, and QR Code Payments.",
  },
  {
    q: "Can I integrate the Payment Gateway with my website or mobile app?",
    a: "Yes. Our APIs support integration with websites, mobile applications, e-commerce platforms, ERP systems, CRM software, and custom business solutions.",
  },
  {
    q: "Can I track transactions and settlements?",
    a: "Yes. The Merchant Dashboard provides real-time transaction tracking, settlement reports, refund management, and downloadable reports.",
  },
  {
    q: "Do I need a website to collect payments?",
    a: "No. You can collect payments using Payment Links or QR Codes without having a website.",
  },
  {
    q: "How do I get started?",
    a: "Contact our sales team or submit an enquiry through our website. Our experts will guide you through onboarding, integration, and activation.",
  },
];

// JSON-LD: Product/Service schema for the Payment Gateway offering
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Payment Gateway",
  name: "AbheePay Payment Gateway",
  description: SEO_DESCRIPTION,
  provider: {
    "@type": "Organization",
    name: "AbheePay",
    url: SITE_URL,
  },
  areaServed: "IN",
  url: PAGE_URL,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

// JSON-LD: Breadcrumb schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Products",
      item: `${SITE_URL}/products`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Payment Gateway",
      item: PAGE_URL,
    },
  ],
};


const PaymentGatewayCheckoutMockup = () => (
  <div className="relative mx-auto flex w-full max-w-sm items-center justify-center py-4 lg:min-h-[560px] lg:max-w-none lg:w-[640px]">
    <style>{`
      @keyframes floatY {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }
      @keyframes ringPulse {
        0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.5; }
        50% { transform: translate(-50%, 0) scale(1.05); opacity: 0.9; }
      }
      @media (min-width: 1024px) {
        @keyframes ringPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.9; }
        }
      }
      .float-badge { animation: floatY 5s ease-in-out infinite; }
      .float-ring { animation: ringPulse 5s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .float-badge, .float-ring { animation: none; }
      }
    `}</style>

    {/* ambient rings */}
    <div className="float-ring pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20 lg:top-1/2 lg:-translate-y-1/2"></div>
    <div
      className="float-ring pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15 lg:top-1/2 lg:-translate-y-1/2"
      style={{ animationDelay: "0.8s" }}
    ></div>

    {/* dashed connector lines — desktop only */}
    <span className="pointer-events-none absolute left-[24%] top-[28%] hidden h-px w-16 rotate-[22deg] border-t-2 border-dashed border-[#00C4C7]/50 lg:block"></span>
    <span className="pointer-events-none absolute right-[22%] top-[36%] hidden h-px w-14 rotate-[-18deg] border-t-2 border-dashed border-[#00C4C7]/50 lg:block"></span>
    <span className="pointer-events-none absolute left-[25%] bottom-[26%] hidden h-px w-16 rotate-[-20deg] border-t-2 border-dashed border-[#00C4C7]/50 lg:block"></span>

    {/* floating badge — AbheePay brand mark */}
    <div
      className="float-badge absolute left-0 top-2 z-20 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-200/70 lg:flex"
      style={{ animationDelay: "0s" }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0F172A] text-[#7EE2E6]">
        <Link2 className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-slate-800">AbheePay Verified</span>
    </div>

    {/* floating badge — PCI DSS secured */}
    <div
      className="float-badge absolute right-0 top-10 z-20 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-200/70 lg:flex"
      style={{ animationDelay: "1.2s" }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00C4C7]/10 text-[#00AEB2]">
        <Lock className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-slate-800">PCI DSS Secured</span>
    </div>

    {/* floating badge — uptime */}
    <div
      className="float-badge absolute left-0 bottom-16 z-20 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-200/70 lg:flex"
      style={{ animationDelay: "2.1s" }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00C4C7]/10 text-[#00AEB2]">
        <Activity className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-slate-800">99.9% Uptime</span>
    </div>

    {/* floating badge — developer APIs */}
    <div
      className="float-badge absolute right-0 bottom-8 z-20 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-200/70 lg:flex"
      style={{ animationDelay: "3s" }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00C4C7]/10 text-[#00AEB2]">
        <Code2 className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-slate-800">Developer APIs</span>
    </div>

    {/* floating lock, implying secure checkout — mobile only */}
    <div className="float-badge absolute -right-2 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20 lg:hidden">
      <Lock className="h-4 w-4 text-[#00C4C7]" />
    </div>
    <div
      className="float-badge absolute -left-2 bottom-20 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20 lg:hidden"
      style={{ animationDelay: "1.5s" }}
    >
      <CreditCard className="h-3.5 w-3.5 text-[#00AEB2]" />
    </div>

    {/* checkout card */}
    <div className="relative z-10 w-72 overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-[#00C4C7]/20">
      <div className="bg-[#0F172A] px-6 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7EE2E6]">
          Checkout
        </p>
        <p className="mt-1 text-2xl font-bold text-white">₹4,999.00</p>
      </div>

      <div className="space-y-3 px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Pay with
        </p>
        <div className="grid grid-cols-4 gap-2">
          <div className="flex flex-col items-center gap-1 rounded-xl border border-[#00C4C7]/40 bg-[#E9FEFF] py-2">
            <CreditCard className="h-4 w-4 text-[#0F5562]" />
            <span className="text-[9px] font-medium text-[#0F5562]">Card</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-slate-50 py-2">
            <Smartphone className="h-4 w-4 text-slate-500" />
            <span className="text-[9px] font-medium text-slate-500">UPI</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-slate-50 py-2">
            <Landmark className="h-4 w-4 text-slate-500" />
            <span className="text-[9px] font-medium text-slate-500">Bank</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-slate-50 py-2">
            <Wallet className="h-4 w-4 text-slate-500" />
            <span className="text-[9px] font-medium text-slate-500">Wallet</span>
          </div>
        </div>

        <div className="h-9 rounded-lg border border-slate-100 bg-slate-50"></div>
        <div className="flex gap-3">
          <div className="h-9 flex-1 rounded-lg border border-slate-100 bg-slate-50"></div>
          <div className="h-9 flex-1 rounded-lg border border-slate-100 bg-slate-50"></div>
        </div>

        <div className="rounded-full bg-[#00C4C7] py-2.5 text-center text-xs font-semibold text-[#0F172A]">
          Pay ₹4,999.00
        </div>
        <p className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
          <Lock className="h-3 w-3" /> Secured & encrypted checkout
        </p>
      </div>
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const suitableFor = [
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Store, label: "Retail Stores" },
  { icon: GraduationCap, label: "Education" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Plane, label: "Travel & Hospitality" },
  { icon: Cpu, label: "SaaS Platforms" },
  { icon: Briefcase, label: "Startups & MSMEs" },
  { icon: Building2, label: "Enterprises" },
];

const paymentMethods = [
  { icon: Smartphone, label: "UPI Payment Gateway" },
  { icon: CreditCard, label: "Credit Cards" },
  { icon: CreditCard, label: "Debit Cards" },
  { icon: Landmark, label: "Net Banking" },
  { icon: Wallet, label: "Digital Wallets" },
  { icon: Link2, label: "Payment Links" },
  { icon: QrCode, label: "QR Code Payments" },
  { icon: FileText, label: "EMI (with partner banks)" },
];

const industries = [
  "E-commerce & Online Stores",
  "Retail Businesses",
  "Educational Institutions",
  "Hospitals & Healthcare",
  "Travel & Hospitality",
  "SaaS & Technology Platforms",
  "Professional Services",
  "Enterprises",
];

const relatedSolutions = [
  { name: "Payment Links", to: "/products/payment-links" },
  { name: "QR & Sound Box", to: "/products/qr-sound-box" },
  { name: "POS Machine", to: "/products/pos-machine" },
  { name: "Merchant Application", to: "/products/merchant-application" },
  { name: "Digital Invoice", to: "/products/digital-invoice" },
  { name: "Payment Gateway API", to: "/products/payment-gateway-api" },
];

const PaymentGateway = () => {
  return (
    <>
      <Helmet>
        {/* Primary */}
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="AbheePay" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen w-full bg-[#F8FBFD] text-slate-900">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
          <div className="relative mx-auto grid w-full max-w-[1920px] gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_auto_1fr] lg:items-center lg:gap-10 lg:px-12 xl:px-20 2xl:px-28">
            {/* Left copy */}
            <div className="max-w-xl">
              <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Product Spotlight
              </p>
              {/* Only one H1 per page — this is it */}
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Payment Gateway
              </h1>
              <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
                Secure payments. Fast and
                <br />
                reliable, every time.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
                Simplify the way your business collects payments with the
                AbheePay Payment Gateway. Accept UPI, Credit Cards, Debit
                Cards, Net Banking, Digital Wallets, Payment Links, and QR
                Codes using one secure and easy-to-integrate platform.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
                >
                  <Phone className="h-4 w-4" />
                  Get Started
                </Link> */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Device */}
            <div className="flex justify-center py-6 lg:justify-self-center lg:py-0">
              <PaymentGatewayCheckoutMockup />
            </div>

            {/* Floating cards */}
            <div className="flex flex-col gap-4 lg:ml-auto lg:w-full lg:max-w-xs lg:justify-self-end">
              <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Gauge className="h-5 w-5 text-[#7EE2E6]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                  Built for every business
                </p>
                <h3 className="mt-2 text-lg font-bold">
                  One dashboard, every channel
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  From startups to enterprises, manage every transaction from
                  a single merchant dashboard.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                  <ShieldCheck className="h-5 w-5 text-[#00C4C7]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                  Secure by design
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Built for reliable payments
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A secure, easy-to-integrate platform for a smooth payment
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Every Business */}
        <section className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Built for every business
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              A payment gateway that{" "}
              <span className="relative inline-block">
                grows with you
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The AbheePay Online Payment Gateway is designed for businesses
              that want a simple, secure, and scalable payment solution. From
              startups and MSMEs to large enterprises, our platform supports
              businesses across different industries with flexible payment
              options and developer-friendly integration.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {suitableFor.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-md shadow-slate-200/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00AEB2]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose AbheePay */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30 lg:grid-cols-[1fr_1.2fr] lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                Why choose AbheePay
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                More than a payment gateway
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Businesses need more than just a Payment Gateway for
                Business — they need a solution that is reliable, easy to
                manage, and ready to grow with them. Whether you're looking
                for a Payment Gateway India solution or a complete Merchant
                Payment Solution, AbheePay helps you collect payments
                efficiently while delivering a better experience for your
                customers.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Multiple payment methods through one integration",
                "Secure payment processing",
                "Easy API integration for websites and mobile apps",
                "Smart merchant dashboard with real-time reports",
                "Payment Links and QR Code collections",
                "Dedicated onboarding and business support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#0F5562]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Designed for growing businesses
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The AbheePay Payment Gateway combines secure payment processing
              with simple business management. From collecting payments to
              tracking settlements, everything is available through one
              easy-to-use platform.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Accept multiple payment methods */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Wallet className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Accept Multiple Payment Methods
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Offer your customers the flexibility to pay using their
                preferred option through a single integration. By supporting
                multiple payment options, businesses can improve customer
                convenience and increase successful payment completion.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                {paymentMethods.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 text-xs font-medium text-slate-600"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#00AEB2]" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart merchant dashboard */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] text-white">
                <LayoutDashboard className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Smart Merchant Dashboard
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Monitor your payment operations in real time through a single
                dashboard, and make informed business decisions with complete
                visibility into your payment activity.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                {[
                  "Live Transaction Tracking",
                  "Settlement Reports",
                  "Payment History",
                  "Refund Management",
                  "Daily & Monthly Reports",
                  "Downloadable Statements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Easy integration */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                <Code2 className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Easy Integration
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Integrate the AbheePay Payment Gateway with your website,
                mobile application, e-commerce platform, ERP, CRM, or custom
                software using our developer-friendly APIs.
              </p>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                Our technical team provides documentation and integration
                support to help you get started quickly.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30 lg:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Getting started with AbheePay is simple
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  step: "1",
                  title: "Register",
                  desc: "Complete your merchant onboarding by submitting your business details.",
                },
                {
                  step: "2",
                  title: "Verify",
                  desc: "Our team reviews and verifies your application.",
                },
                {
                  step: "3",
                  title: "Integrate",
                  desc: "Connect the Payment Gateway using our APIs or supported integration options.",
                },
                {
                  step: "4",
                  title: "Go Live",
                  desc: "Start accepting online payments through multiple payment methods.",
                },
                {
                  step: "5",
                  title: "Manage",
                  desc: "Track transactions, settlements, refunds, and reports from your merchant dashboard.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00C4C7] text-sm font-bold text-white">
                    {step}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="text-xs leading-5 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for Every Industry */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                  Built for every industry
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  No matter your industry
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  The AbheePay Payment Gateway supports businesses across a
                  wide range of industries, helping you collect payments
                  securely, simplify operations, and deliver a seamless
                  payment experience to your customers.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FDFF] p-6 lg:col-span-2">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {industries.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 lg:grid-cols-3">
              <div className="hidden lg:block"></div>
              <div className="rounded-3xl bg-[#ECFDF5] p-6 lg:col-span-2 lg:max-w-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                  <Volume2 className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  One dashboard, every channel
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  See online payments from Payment Gateway alongside your
                  Sound Box, QR Code, and POS Machine sales in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secure, Reliable & Developer-Friendly APIs */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="grid gap-8 rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-xl shadow-slate-900/20 lg:grid-cols-[1fr_1.2fr] lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                Secure, reliable & easy to integrate
              </p>
              <h2 className="text-3xl font-bold">Developer-Friendly APIs</h2>
              <p className="text-sm leading-7 text-slate-300">
                Every online transaction matters. Whether you process a few
                payments each day or thousands every month, our platform is
                built to support your business with consistent performance.
                With clear documentation and technical assistance, your team
                can integrate and start accepting payments quickly.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Code2, label: "Payment Gateway API" },
                { icon: BookOpen, label: "API Documentation" },
                { icon: FileText, label: "SDKs" },
                { icon: Webhook, label: "Webhooks" },
                { icon: FlaskConical, label: "Sandbox Environment" },
                { icon: LifeBuoy, label: "Integration Support" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                >
                  <Icon className="h-4 w-4 text-[#7EE2E6]" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ — also feeds the FAQPage JSON-LD above, keep both in sync */}
        <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-[2rem] bg-white shadow-xl shadow-slate-200/30">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group p-6 first:rounded-t-[2rem] last:rounded-b-[2rem]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900">
                  {q}
                  <span className="ml-4 text-[#00AEB2] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related solutions */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Explore related solutions
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Expand your payment capabilities
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {relatedSolutions.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#00C4C7] hover:text-[#00AEB2]"
              >
                {name}
              </Link>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00C4C7] to-[#0F172A] px-8 py-14 text-center text-white shadow-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to accept online payments?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85">
                Empower your business with a secure, scalable, and easy-to-use
                payment solution. Whether you're a startup, MSME, or
                enterprise, AbheePay helps you collect payments faster,
                simplify operations, and support business growth.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {/* <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-lg transition hover:bg-white/90"
                >
                  <Phone className="h-4 w-4" />
                  Request a Demo
                </Link> */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PaymentGateway;