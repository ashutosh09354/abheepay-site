
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  UserPlus,
  Bluetooth,
  Volume2,
  Cable,
  Check,
  ShieldCheck,
  Volume1,
  Megaphone,
  Music2,
  Store,
  QrCode,
  Mic,
  LayoutDashboard,
  ShoppingCart,
  Utensils,
  Pill,
  Fuel,
  Scissors,
  Hotel,
  Building2,
  Truck,
  Wrench,
  Clock,
  FileText,
  MapPin,
  LifeBuoy,
  MessageSquareText,
} from "lucide-react";

// ---------------------------------------------------------------------------
// SEO CONFIG — edit these values for your real domain / brand before deploy
// ---------------------------------------------------------------------------
const SITE_URL = "https://www.abheepay.com";
const PAGE_PATH = "/products/sound-box";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/sound-box.jpg`; // 1200x630 recommended

const SEO_TITLE = "QR Sound Box for Businesses | Instant Payment Alerts | AbheePay";
const SEO_DESCRIPTION =
  "Accept UPI payments with the AbheePay QR Sound Box. Receive instant voice payment confirmations, reduce payment errors, and manage transactions from one merchant dashboard.";
const SEO_KEYWORDS =
  "QR sound box, payment sound box, UPI voice alert device, sound box for shop, instant payment confirmation, AbheePay sound box";

// FAQ data doubles as page content and JSON-LD FAQPage schema
const faqs = [
  {
    q: "What is a QR Sound Box?",
    a: "A QR Sound Box is a payment device that announces successful UPI payments through a voice notification, allowing merchants to confirm payments instantly.",
  },
  {
    q: "How does the Sound Box work?",
    a: "Customers scan your AbheePay QR Code using a supported UPI app. Once the payment is successful, the Sound Box announces the received amount through a voice alert.",
  },
  {
    q: "Does the Sound Box work without checking my phone?",
    a: "Yes. The Sound Box provides instant voice confirmation, so you don't need to unlock your mobile phone to verify every payment.",
  },
  {
    q: "Can I track payments online?",
    a: "Yes. All transactions are available in your AbheePay Merchant Dashboard, where you can view payment history, settlements, and downloadable reports.",
  },
  {
    q: "Who can use the AbheePay Sound Box?",
    a: "The Sound Box is ideal for retail stores, restaurants, grocery shops, pharmacies, fuel stations, supermarkets, service centres, and other businesses that receive regular customer payments.",
  },
  {
    q: "How do I get a Sound Box?",
    a: "Contact the AbheePay sales team or register through our website. After merchant verification, our team will help you with device activation and setup.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AbheePay QR Sound Box",
  description: SEO_DESCRIPTION,
  brand: {
    "@type": "Organization",
    name: "AbheePay",
    url: SITE_URL,
  },
  url: PAGE_URL,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    areaServed: "IN",
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
      name: "Sound Box",
      item: PAGE_URL,
    },
  ],
};

const suitableFor = [
  { icon: Store, label: "Retail Stores" },
  { icon: ShoppingCart, label: "Grocery Shops" },
  { icon: Utensils, label: "Restaurants & Cafes" },
  { icon: Pill, label: "Medical Stores" },
  { icon: Fuel, label: "Petrol Pumps" },
  { icon: Scissors, label: "Salons" },
  { icon: Hotel, label: "Hotels" },
  { icon: Building2, label: "Supermarkets" },
];

const voiceAlertBenefits = [
  "Instant payment confirmation",
  "No need to check your phone",
  "Faster customer checkout",
  "Reduced payment confusion",
  "Better customer service during busy hours",
];

const dashboardItems = [
  "Live Transactions",
  "Payment History",
  "Settlement Reports",
  "Daily Collections",
  "Monthly Reports",
  "Downloadable Statements",
];

const setupSteps = [
  {
    step: "1",
    title: "Register",
    desc: "Register your business with AbheePay.",
  },
  {
    step: "2",
    title: "Verify",
    desc: "Complete merchant verification.",
  },
  {
    step: "3",
    title: "Activate",
    desc: "Receive and activate your QR Sound Box.",
  },
  {
    step: "4",
    title: "Display",
    desc: "Display your QR Code at your payment counter.",
  },
  {
    step: "5",
    title: "Get Paid",
    desc: "Start accepting UPI payments with instant voice confirmations.",
  },
];

const idealFor = [
  { icon: Store, label: "Retail Stores" },
  { icon: ShoppingCart, label: "Grocery Shops" },
  { icon: Utensils, label: "Restaurants & Cafes" },
  { icon: Pill, label: "Medical Stores" },
  { icon: Fuel, label: "Petrol Pumps" },
  { icon: Building2, label: "Supermarkets" },
  { icon: Scissors, label: "Salons & Spas" },
  { icon: Hotel, label: "Hotels" },
  { icon: Wrench, label: "Service Centres" },
  { icon: Truck, label: "Food Delivery Counters" },
];

const relatedSolutions = [
  { name: "Payment Gateway API", to: "/api/payment-gateway" },
  { name: "Payout API", to: "/api/payout" },
  { name: "BBPS API", to: "/api/bbps" },
  { name: "Wallet API", to: "/api/wallet" },
  { name: "QR API", to: "/products/qr-code" },
  { name: "Recharge API", to: "/api/recharge" },
  { name: "Aadhaar Verification API", to: "/api/aadhaar" },
];

// Swap SOUND_BOX_IMAGE for your own product photo (e.g. an import from /assets)
// when you have real packshots — this is a free-to-use sample in the meantime.
const SOUND_BOX_IMAGE = "/assets/image/services/soundbox.png0";

const SoundBoxDevice = () => (
  <div className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center sm:max-w-[36rem]">
    {/* ambient sound rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* left sound bars */}
    <div className="absolute left-0 top-1/2 flex -translate-y-1/2 items-end gap-1">
      {[10, 18, 26, 34, 22, 14].map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-[#00C4C7]/40"
          style={{ height: `${h}px` }}
        ></span>
      ))}
    </div>
    {/* right sound bars */}
    <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-end gap-1">
      {[16, 28, 20, 32, 12, 8].map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-[#00C4C7]/40"
          style={{ height: `${h}px` }}
        ></span>
      ))}
    </div>

    {/* device photo */}
    <div className="relative z-10 w-full overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-[#00C4C7]/20">
      <img
        src={SOUND_BOX_IMAGE}
        alt="AbheePay QR Sound Box payment device for retail"
        className="w-full max-h-[34rem] rounded-[1.5rem] object-contain"
        loading="lazy"
      />
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const SoundBox = () => {
  return (
    <>
      <Helmet>
        {/* Primary */}
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta name="robots" content="index, follow" />
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

      <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
          <div className="relative mx-auto grid max-w-8xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-8">
            {/* Left copy */}
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Product Spotlight
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Sound Box
              </h1>
              <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
                Receive Instant Voice
                <br />
                Payment Confirmation
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
                The AbheePay QR Sound Box announces the received amount for
                every successful UPI payment, so merchants can verify
                transactions without checking their mobile phone. Reduce
                payment confusion and speed up checkout.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
                >
                  <Volume2 className="h-4 w-4" />
                  Get Sound Box
                </Link>
                {/* <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Contact Sales
                </Link> */}
              </div>
            </div>

            {/* Device */}
            <div className="flex justify-end py-6 lg:py-0 lg:translate-x-16">
              <SoundBoxDevice />
            </div>

            {/* Floating cards */}
            <div className="ml-auto flex flex-col gap-4 lg:w-[300px]">
              <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                  Built for high volume
                </p>
                <h3 className="mt-2 text-lg font-bold">
                  Never miss a payment
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  Announces every successful payment instantly, so staff
                  can focus on customers, not notifications.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                  <Mic className="h-5 w-5 text-[#00C4C7]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                  Clear voice alerts
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Hear every payment amount
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A clear voice notification confirms the exact amount
                  received, every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Built for high-volume businesses */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Built for every business
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Built for{" "}
              <span className="relative inline-block">
                High-Volume Businesses
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              When your business serves many customers throughout the day,
              checking every payment manually can slow down operations. The
              AbheePay QR Sound Box announces successful payments instantly.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
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

        {/* Why it works */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Why businesses love it
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Choose AbheePay{" "}
              <span className="relative inline-block">
                Sound Box?
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The AbheePay Sound Box is designed to make payment collection
              faster and more convenient for both merchants and customers.
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
                        Instant Setup
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Simple setup and activation — register, verify, and
                        start using your Sound Box within minutes.
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                      <Bluetooth className="h-5 w-5" />
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
                        Works with UPI QR Payments
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Linked directly to your business QR Code for a
                        smooth, contactless payment experience.
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                      <QrCode className="h-5 w-5" />
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
                        Real-Time Tracking
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Every transaction is available in the Merchant
                        Dashboard for reconciliation and reporting.
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                      <LayoutDashboard className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <h3 className="text-xl font-semibold text-slate-900">
                Sound Box highlights
              </h3>
              <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
                <li className="flex items-start gap-3 py-4 first:pt-0">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Instant voice payment alerts.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Works with UPI QR payments.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Clear payment confirmation, every time.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Reduced manual verification.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#FDE68A]/60 text-[#92400E]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Faster customer checkout.</span>
                </li>
                <li className="flex items-start gap-3 pt-4 last:pb-0">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#FBCFE8]/60 text-[#9D174D]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Real-time transaction tracking through the dashboard.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Smart Features for Everyday Business
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The AbheePay QR Sound Box provides instant payment
              confirmation through voice alerts, helping merchants verify
              payments without checking their mobile phones.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Instant voice payment alerts */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Mic className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Instant Voice Payment Alerts
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                As soon as a customer completes a UPI payment, the Sound
                Box announces the payment amount through a clear voice
                notification.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                {voiceAlertBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Works with QR payments */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] text-white">
                <QrCode className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Works with QR Payments
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The AbheePay Sound Box is linked to your business QR Code.
                Customers simply scan the QR Code using their preferred UPI
                app, complete the payment, and the Sound Box announces the
                successful transaction — a smooth, contactless experience
                for both merchants and customers.
              </p>
            </div>

            {/* Smart merchant dashboard */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30 lg:col-span-2">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                <LayoutDashboard className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Smart Merchant Dashboard
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Manage your payment activity from one central dashboard.
                Stay informed with real-time payment insights and simplify
                business reconciliation.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-3 text-sm leading-6 text-slate-600">
                {dashboardItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Easy Installation & Activation */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30 lg:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                Easy installation & activation
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Getting started is quick and simple
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {setupSteps.map(({ step, title, desc }) => (
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

        {/* Built for every business */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                  Built for every business
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Ideal for daily, high-frequency payments
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  Whether you operate a single store or multiple business
                  locations, the AbheePay Sound Box helps improve payment
                  efficiency, reduce manual verification, and create a
                  faster checkout experience.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FDFF] p-6 lg:col-span-2">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {idealFor.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700"
                    >
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00AEB2]">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 lg:grid-cols-3">
              <div className="rounded-3xl bg-[#F8FDFF] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                  <Megaphone className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Perfect for announcements
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Deliver crisp, audible payment confirmations that cut
                  through counter noise without echo or distortion.
                </p>
              </div>

              <div className="rounded-3xl bg-[#EEF9FF] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Speeds up checkout
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Staff can serve the next customer immediately instead of
                  waiting to confirm each payment manually.
                </p>
              </div>

              <div className="rounded-3xl bg-[#ECFDF5] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                  <Store className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Seamless store integration
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Connects effortlessly with your AbheePay QR Code to
                  announce every successful transaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reliable notifications + Easy to manage */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-xl shadow-slate-900/20 lg:grid-cols-[1fr_1.2fr] lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                Reliable, every transaction
              </p>
              <h2 className="text-3xl font-bold">
                Easy to Manage, One Merchant Account
              </h2>
              <p className="text-sm leading-7 text-slate-300">
                Every Sound Box is connected to your merchant account,
                making it easy to monitor payment activity from one
                platform. As your business grows, expand your payment
                ecosystem with Payment Gateway, Payment Links, POS
                Machines, and other AbheePay business solutions.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Clock, label: "View Payment History" },
                { icon: FileText, label: "Track Settlements" },
                { icon: FileText, label: "Download Transaction Reports" },
                { icon: LayoutDashboard, label: "Monitor Business Collections" },
                { icon: MapPin, label: "Manage Multiple Locations" },
                { icon: LifeBuoy, label: "Dedicated Support" },
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
        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
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
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Explore related products
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Complete your digital payment setup
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
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
        <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00C4C7] to-[#0F172A] px-8 py-14 text-center text-white shadow-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to Upgrade Your Payment Experience?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85">
                Reduce manual payment verification and provide a faster
                checkout experience with instant voice confirmation,
                real-time transaction tracking, and simple business
                management.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

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

export default SoundBox;