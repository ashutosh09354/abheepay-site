// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   UserPlus,
//   Zap,
//   Smartphone,
//   Bell,
//   Check,
//   ShieldCheck,
//   MessageCircle,
//   Store,
//   ShoppingBag,
//   Volume2,
// } from "lucide-react";

// // Swap QR_CODE_IMAGE for your own product photo (e.g. an import from /assets)
// // when you have a real packshot of the QR stand — this is a free-to-use
// // sample in the meantime.
// const QR_CODE_IMAGE =
//   "/assets/image/services/qr_stand.png";

// const QRCodeDevice = () => (
//   <div className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center sm:max-w-[36rem]">
//     {/* ambient scan rings */}
//     <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
//     <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

//     {/* corner scan brackets */}
//     <div className="absolute left-2 top-2 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-[#00C4C7]/50"></div>
//     <div className="absolute right-2 top-2 h-6 w-6 rounded-tr-xl border-r-2 border-t-2 border-[#00C4C7]/50"></div>
//     <div className="absolute bottom-2 left-2 h-6 w-6 rounded-bl-xl border-b-2 border-l-2 border-[#00C4C7]/50"></div>
//     <div className="absolute bottom-2 right-2 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-[#00C4C7]/50"></div>

//     {/* QR code photo */}
//     <div className="relative z-10 w-full overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-[#00C4C7]/20">
//       <img
//         src={QR_CODE_IMAGE}
//         alt="QR Code payment stand for retail checkout"
//         className="w-full max-h-[34rem] rounded-[1.5rem] object-contain"
//         loading="lazy"
//       />
//     </div>

//     {/* platform */}
//     <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
//     <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
//   </div>
// );

// const QRCode = () => {
//   return (
//     <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
//         <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
//         <div className="relative mx-auto grid max-w-8xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_520px_280px] lg:items-center lg:px-8">
//           {/* Left copy */}
//           <div className="max-w-3xl">
//             <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//               Product Spotlight
//             </p>
//             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//               QR Code
//             </h1>
//             <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-xl">
//               Instant payments. Zero hardware.
//               <br />
//               Every scan counts.
//             </h2>
//             <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
//               A durable, weatherproof QR stand that lets customers pay you
//               instantly from any UPI app. No terminals, no setup fees — just
//               print, place, and start getting paid.
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
//                 to="/join-as-retailer"
//                 className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
//               >
//                 <UserPlus className="h-4 w-4" />
//                 Join as Retailer
//               </Link>
//             </div>
//           </div>

//           {/* Device */}
//           <div className="flex justify-end py-6 lg:py-0 lg:translate-x-3">
//             <QRCodeDevice />
//           </div>

//           {/* Floating cards */}
//           <div className="ml-auto flex flex-col gap-4 lg:w-[300px] lg:justify-self-end">
//             <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
//                 <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
//                 Zero hardware
//               </p>
//               <h3 className="mt-2 text-lg font-bold">Built for every counter</h3>
//               <p className="mt-3 text-sm leading-6 text-slate-200">
//                 No terminals or monthly rentals. Just a printed code that
//                 works from day one.
//               </p>
//             </div>

//             <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
//                 <Bell className="h-5 w-5 text-[#00C4C7]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//                 Instant confirmation
//               </p>
//               <h3 className="mt-2 text-lg font-bold text-slate-900">
//                 Know the moment you're paid
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Get real-time SMS and voice alerts the second a payment
//                 lands.
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
//             Why QR Code works{" "}
//             <span className="relative inline-block">
//               for your business
//               <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
//             </span>
//           </h2>
//           <p className="mt-4 text-base leading-7 text-slate-600">
//             Built for retail and small business checkout, QR Code makes
//             accepting payments simple, instant, and reliable — with nothing
//             to install and nothing to charge.
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
//                       Instant Setup
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Activate your QR code in minutes — no paperwork,
//                       installation, or waiting required.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
//                     <Zap className="h-5 w-5" />
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
//                       All-App Compatible
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Works with every UPI app, so customers can pay however
//                       they already do.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
//                     <Smartphone className="h-5 w-5" />
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
//                       Real-time Alerts
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Get instant voice and SMS confirmation the moment a
//                       payment is received.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
//                     <Bell className="h-5 w-5" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//             <h3 className="text-xl font-semibold text-slate-900">
//               QR Code highlights
//             </h3>
//             <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
//               <li className="flex items-start gap-3 py-4 first:pt-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Zero cost, zero maintenance QR stand.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Weatherproof, scratch-resistant printing that lasts.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Works with all major UPI and payment apps.</span>
//               </li>
//               <li className="flex items-start gap-3 pt-4 last:pb-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>
//                   Instant payment confirmation via SMS and voice alerts.
//                 </span>
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
//                 Designed for retail
//               </p>
//               <h2 className="text-3xl font-bold text-slate-900">
//                 Built to fit every counter
//               </h2>
//               <p className="text-sm leading-7 text-slate-600">
//                 QR Code gives your business a professional, always-on way to
//                 get paid — no matter how small the counter or how big the
//                 queue.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#F8FDFF] p-6">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
//                 <ShoppingBag className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Perfect for checkout counters
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Place it by the register so customers can scan and pay in
//                 seconds, no queueing for card machines.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#EEF9FF] p-6">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
//                 <Store className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Ideal for small stalls & carts
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Lightweight and portable, it travels with you from market
//                 stalls to pop-up events.
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
//                 Pairs with Sound Box
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Connect your QR Code to a Sound Box for an instant voice
//                 announcement every time a customer pays.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default QRCode;
















import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  UserPlus,
  Zap,
  Smartphone,
  Bell,
  Check,
  ShieldCheck,
  MessageCircle,
  Store,
  ShoppingBag,
  Volume2,
  QrCode as QrCodeIcon,
  RefreshCcw,
  LayoutDashboard,
  ListChecks,
  ShoppingCart,
  Utensils,
  Pill,
  Fuel,
  Scissors,
  Hotel,
  HeartPulse,
  Truck,
  Briefcase,
  Code2,
  BookOpen,
  FileText,
  Clock,
  LifeBuoy,
  MessageSquareText,
} from "lucide-react";

// ---------------------------------------------------------------------------
// SEO CONFIG — edit these values for your real domain / brand before deploy
// ---------------------------------------------------------------------------
const SITE_URL = "https://www.abheepay.com";
const PAGE_PATH = "/products/qr-code";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/qr-code.jpg`; // 1200x630 recommended

const SEO_TITLE = "QR Code Payment Solution for Businesses | AbheePay";
const SEO_DESCRIPTION =
  "Accept UPI payments with the AbheePay QR Code Payment Solution. Generate Static or Dynamic QR Codes, collect payments instantly, and manage transactions from one merchant dashboard.";
const SEO_KEYWORDS =
  "QR code payment, UPI QR code, static QR code, dynamic QR code, QR code for business, accept UPI payments, AbheePay QR code";

// FAQ data doubles as page content and JSON-LD FAQPage schema
const faqs = [
  {
    q: "What is an AbheePay QR Code?",
    a: "An AbheePay QR Code is a digital payment solution that allows businesses to accept UPI payments by letting customers scan a QR Code using any supported UPI app.",
  },
  {
    q: "What is the difference between a Static QR Code and a Dynamic QR Code?",
    a: "A Static QR Code is fixed and customers enter the payment amount manually. A Dynamic QR Code is generated with the payment amount already included, making it suitable for billing systems and online transactions.",
  },
  {
    q: "Which UPI apps can customers use?",
    a: "Customers can pay using any supported UPI application that scans standard QR Codes.",
  },
  {
    q: "Can I track all QR payments?",
    a: "Yes. The Merchant Dashboard provides real-time transaction history, settlement reports, and payment analytics.",
  },
  {
    q: "Can I use the QR Code at multiple business locations?",
    a: "Yes. AbheePay offers QR solutions suitable for single-location businesses as well as businesses operating across multiple outlets.",
  },
  {
    q: "How do I get started?",
    a: "Register with AbheePay, complete the merchant onboarding process, and receive your QR Code to start accepting digital payments.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "QR Code Payment Solution",
  name: "AbheePay QR Code",
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
      name: "QR Code",
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
  { icon: Scissors, label: "Salons & Spas" },
  { icon: Hotel, label: "Hotels" },
  { icon: HeartPulse, label: "Hospitals & Clinics" },
];

const qrTypes = [
  {
    icon: QrCodeIcon,
    title: "Static QR Code",
    desc: "A fixed QR Code suitable for businesses that manually enter the payment amount or receive payments of different values. Print and display it at shops, counters, offices, or service locations.",
  },
  {
    icon: RefreshCcw,
    title: "Dynamic QR Code",
    desc: "A QR Code generated with the exact payment amount for each transaction, helping reduce manual errors and improving the checkout experience — ideal for billing systems and online checkout.",
  },
];

const scanBenefits = [
  "Instant payment confirmation",
  "Contactless payment experience",
  "No cash handling",
  "Simple payment process",
  "Fast checkout for customers",
];

const dashboardItems = [
  "Live Transactions",
  "Settlement Reports",
  "Payment History",
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
    desc: "Complete the merchant verification process.",
  },
  {
    step: "3",
    title: "Activate",
    desc: "Receive your Static QR Code or activate Dynamic QR integration.",
  },
  {
    step: "4",
    title: "Display",
    desc: "Display your QR Code or integrate it into your billing system.",
  },
  {
    step: "5",
    title: "Get Paid",
    desc: "Start accepting UPI payments instantly.",
  },
];

const industries = [
  {
    icon: Store,
    title: "Retail Stores",
    desc: "Accept payments at billing counters.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    desc: "Enable quick table and takeaway payments.",
  },
  {
    icon: Pill,
    title: "Medical Stores & Clinics",
    desc: "Receive payments for medicines and healthcare services.",
  },
  {
    icon: Fuel,
    title: "Fuel Stations",
    desc: "Collect digital payments for fuel purchases.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    desc: "Accept payments for bookings and guest services.",
  },
  {
    icon: Truck,
    title: "Delivery Businesses",
    desc: "Receive payments during product delivery.",
  },
  {
    icon: Briefcase,
    title: "Service Providers",
    desc: "Collect payments at customer locations.",
  },
];

const relatedSolutions = [
  { name: "Payment Gateway", to: "/products/payment-gateway" },
  { name: "Payment Links", to: "/products/payment-links" },
  { name: "POS Machine", to: "/products/pos-machine" },
  { name: "Merchant Application", to: "/products/merchant-application" },
  { name: "Digital Invoice", to: "/products/digital-invoice" },
  { name: "Payment Gateway API", to: "/products/payment-gateway-api" },
];

// Swap QR_CODE_IMAGE for your own product photo (e.g. an import from /assets)
// when you have a real packshot of the QR stand — this is a free-to-use
// sample in the meantime.
const QR_CODE_IMAGE = "/assets/image/services/qr_stand.png0";

const QRCodeDevice = () => (
  <div className="relative mx-auto flex w-full max-w-[32rem] items-center justify-center sm:max-w-[36rem]">
    {/* ambient scan rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* corner scan brackets */}
    <div className="absolute left-2 top-2 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-[#00C4C7]/50"></div>
    <div className="absolute right-2 top-2 h-6 w-6 rounded-tr-xl border-r-2 border-t-2 border-[#00C4C7]/50"></div>
    <div className="absolute bottom-2 left-2 h-6 w-6 rounded-bl-xl border-b-2 border-l-2 border-[#00C4C7]/50"></div>
    <div className="absolute bottom-2 right-2 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-[#00C4C7]/50"></div>

    {/* QR code photo */}
    <div className="relative z-10 w-full overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-[#00C4C7]/20">
      <img
        src={QR_CODE_IMAGE}
        alt="QR Code payment stand for retail checkout"
        className="w-full max-h-[34rem] rounded-[1.5rem] object-contain"
        loading="lazy"
      />
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const QRCode = () => {
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
          <div className="relative mx-auto grid max-w-8xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_520px_280px] lg:items-center lg:px-8">
            {/* Left copy */}
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Product Spotlight
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                QR Code
              </h1>
              <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-xl">
                Accept UPI Payments with AbheePay QR Code
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
                A simple and secure way to collect digital payments. Display
                a QR Code at your shop, office, or billing counter, and
                customers can simply scan, pay, and receive instant payment
                confirmation.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
                >
                  <QrCodeIcon className="h-4 w-4" />
                  Get Your QR Code
                </Link>
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
            <div className="flex justify-end py-6 lg:py-0 lg:translate-x-3">
              <QRCodeDevice />
            </div>

            {/* Floating cards */}
            <div className="ml-auto flex flex-col gap-4 lg:w-[300px] lg:justify-self-end">
              <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                  Zero hardware
                </p>
                <h3 className="mt-2 text-lg font-bold">Built for every counter</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  No terminals or monthly rentals. Just a printed code that
                  works from day one.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                  <Bell className="h-5 w-5 text-[#00C4C7]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                  Instant confirmation
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Know the moment you're paid
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Get real-time SMS and voice alerts the second a payment
                  lands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QR payments made easy for every business */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Built for every business
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              QR Payments Made Easy for{" "}
              <span className="relative inline-block">
                Every Business
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Today's customers prefer fast and contactless payment options.
              The AbheePay QR Code allows businesses to accept payments
              using any supported UPI application without complicated
              payment processes.
            </p>
          </div>

          {/* Static vs Dynamic */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {qrTypes.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
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
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Why businesses love it
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Choose AbheePay{" "}
              <span className="relative inline-block">
                QR Code?
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Businesses need a payment solution that is easy to use,
              reliable, and built for everyday transactions.
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
                        Activate your QR code in minutes — no paperwork,
                        installation, or waiting required.
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                      <Zap className="h-5 w-5" />
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
                        All-App Compatible
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Works with every UPI app, so customers can pay
                        however they already do.
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                      <Smartphone className="h-5 w-5" />
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
                        Real-time Alerts
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Get instant voice and SMS confirmation the moment a
                        payment is received.
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                      <Bell className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <h3 className="text-xl font-semibold text-slate-900">
                QR Code highlights
              </h3>
              <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
                <li className="flex items-start gap-3 py-4 first:pt-0">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Accept instant UPI payments.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Support Static and Dynamic QR Codes.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Receive payment notifications in real time.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Track transactions from one merchant dashboard.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#FDE68A]/60 text-[#92400E]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Monitor settlements and reports.</span>
                </li>
                <li className="flex items-start gap-3 pt-4 last:pb-0">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#FBCFE8]/60 text-[#9D174D]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Reduce cash handling and improve checkout.</span>
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
              Features Built for Everyday Business Payments
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you serve customers at a counter, deliver products, or
              provide services on-site, QR payments make every transaction
              faster and more convenient.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Accept payments through any UPI app */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Smartphone className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Accept Payments Through Any UPI App
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Customers can simply scan the AbheePay QR Code using their
                preferred UPI application and complete the payment in
                seconds.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                {scanBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
                    {item}
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
                Manage every QR payment from one dashboard and get complete
                visibility into your business collections without manual
                record keeping.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 text-sm leading-6 text-slate-600">
                {dashboardItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Static & Dynamic QR (detail) */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30 lg:col-span-2">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                <QrCodeIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Static & Dynamic QR Codes
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Choose the QR solution that matches your business needs.
              </p>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#F8FDFF] p-5">
                  <p className="text-sm font-semibold text-slate-800">
                    Static QR Code
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    A permanent QR Code that businesses can print and
                    display at shops, counters, offices, or service
                    locations. Customers enter the payment amount before
                    completing the transaction.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#F8FDFF] p-5">
                  <p className="text-sm font-semibold text-slate-800">
                    Dynamic QR Code
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Generate a QR Code with a predefined payment amount for
                    every transaction. Helps reduce manual errors and
                    improve billing accuracy — ideal for billing systems or
                    online checkout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Easy Setup */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30 lg:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                Easy setup
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Getting started is simple
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

        {/* Built for retail / industries */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                  Built for every industry
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Built to fit every counter
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  No matter your business size, AbheePay QR Code helps you
                  accept payments faster while improving the customer
                  payment experience.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FDFF] p-6 lg:col-span-2">
                <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {industries.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00AEB2]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {title}
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-slate-600">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 lg:grid-cols-3">
              <div className="rounded-3xl bg-[#F8FDFF] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Perfect for checkout counters
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Place it by the register so customers can scan and pay in
                  seconds, no queueing for card machines.
                </p>
              </div>

              <div className="rounded-3xl bg-[#EEF9FF] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                  <Store className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Ideal for small stalls & carts
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Lightweight and portable, it travels with you from market
                  stalls to pop-up events.
                </p>
              </div>

              <div className="rounded-3xl bg-[#ECFDF5] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                  <Volume2 className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Pairs with Sound Box
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Connect your QR Code to a Sound Box for an instant voice
                  announcement every time a customer pays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secure payments + Easy integration */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-xl shadow-slate-900/20 lg:grid-cols-[1fr_1.2fr] lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                Secure, reliable & easy to integrate
              </p>
              <h2 className="text-3xl font-bold">
                Secure QR Payments for Your Business
              </h2>
              <p className="text-sm leading-7 text-slate-300">
                Every payment made through the AbheePay QR Code is processed
                through a secure payment platform. Need more than a
                standalone QR Code? AbheePay QR solutions can be integrated
                with your existing business systems — connect QR payments
                with billing software, websites, and mobile apps.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Code2, label: "Dynamic QR Billing Integration" },
                { icon: BookOpen, label: "Developer Hub Docs" },
                { icon: Clock, label: "Real-Time Transaction Tracking" },
                { icon: FileText, label: "Downloadable Payment Reports" },
                { icon: ShieldCheck, label: "Secure Payment Processing" },
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
              Complete your digital payment ecosystem
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
                Start Accepting QR Payments Today
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85">
                Offer your customers a fast, secure, and contactless way to
                pay. Whether you run a retail store, restaurant, pharmacy,
                fuel station, clinic, or service business, AbheePay helps
                you simplify payment collection.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-lg transition hover:bg-white/90"
                >
                  <QrCodeIcon className="h-4 w-4" />
                  Get Your QR Code
                </Link>
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

export default QRCode;