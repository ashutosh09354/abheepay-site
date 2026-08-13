// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   UserPlus,
//   CreditCard,
//   Wifi,
//   Receipt,
//   Check,
//   ShieldCheck,
//   BatteryCharging,
//   Store,
//   ShoppingBag,
//   Volume2,
// } from "lucide-react";

// // Swap POS_MACHINE_IMAGE for your own product photo (e.g. an import from
// // /assets) when you have a real packshot of the terminal — this is a
// // free-to-use sample in the meantime.
// const POS_MACHINE_IMAGE =
//   "/assets/image/services/Pos.png";

// const PosMachineDevice = () => (
//   <div className="relative mx-auto flex w-full max-w-[28rem] items-center justify-center">
//     {/* ambient signal rings */}
//     <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
//     <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

//     {/* tap-to-pay signal waves */}
//     <div className="absolute right-2 top-6 flex flex-col items-end gap-1.5">
//       <span className="h-3 w-3 rounded-full border-2 border-[#00C4C7]/60"></span>
//       <span className="h-5 w-5 rounded-full border-2 border-[#00C4C7]/40"></span>
//       <span className="h-7 w-7 rounded-full border-2 border-[#00C4C7]/25"></span>
//     </div>

//     {/* device photo */}
//     <div className="relative z-10 w-full max-w-[28rem] overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-[#00C4C7]/20">
//       <img
//         src={POS_MACHINE_IMAGE}
//         alt="POS Machine card payment terminal for retail checkout"
//         className="w-full rounded-[1.5rem] object-contain"
//         loading="lazy"
//       />
//     </div>

//     {/* platform */}
//     <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
//     <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
//   </div>
// );

// const PosMachine = () => {
//   return (
//     <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
//         <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
//         <div className="relative mx-auto grid max-w-8xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-8">
//           {/* Left copy */}
//           <div className="max-w-2xl">
//             <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//               Product Spotlight
//             </p>
//             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//               POS Machine
//             </h1>
//             <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
//               Every card. Every tap.
//               <br />
//               Every sale, sorted.
//             </h2>
//             <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
//               A fast, reliable card machine built for retail checkout.
//               Accept chip, swipe, and contactless payments with instant
//               settlement and a battery that keeps up with your busiest day.
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
//           <div className="flex justify-end py-2 lg:py-0 lg:translate-x-40">
//             <PosMachineDevice />
//           </div>

//           {/* Floating cards */}
//           <div className="flex flex-col gap-4 lg:w-[280px] lg:justify-self-end">
//             <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-4 text-white shadow-xl shadow-slate-900/20">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
//                 <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
//                 Secure by design
//               </p>
//               <h3 className="mt-2 text-lg font-bold">Bank-grade encryption</h3>
//               <p className="mt-3 text-sm leading-6 text-slate-200">
//                 PCI-compliant, end-to-end encrypted transactions on every
//                 chip, swipe, and tap.
//               </p>
//             </div>

//             <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
//                 <BatteryCharging className="h-5 w-5 text-[#00C4C7]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//                 All-day battery
//               </p>
//               <h3 className="mt-2 text-lg font-bold text-slate-900">
//                 Built for busy counters
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 A full shift on a single charge, with fast top-ups when you
//                 need them.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why it works */}
//       <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//             Why businesses love it
//           </p>
//           <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
//             Why POS Machine works{" "}
//             <span className="relative inline-block">
//               for your business
//               <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
//             </span>
//           </h2>
//           <p className="mt-4 text-base leading-7 text-slate-600">
//             Built for retail and small business checkout, POS Machine makes
//             accepting cards, settling payments, and tracking sales simple
//             and dependable.
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
//                       All Cards Accepted
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Take chip, swipe, and contactless payments from every
//                       major card network in seconds.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
//                     <CreditCard className="h-5 w-5" />
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
//                       Fast Wireless Connectivity
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Stay online with reliable Wi-Fi and SIM connectivity,
//                       so transactions never stall.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
//                     <Wifi className="h-5 w-5" />
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
//                       Instant Digital Receipts
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Print or send receipts by SMS, keeping every sale
//                       recorded and easy to reconcile.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
//                     <Receipt className="h-5 w-5" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//             <h3 className="text-xl font-semibold text-slate-900">
//               POS Machine highlights
//             </h3>
//             <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
//               <li className="flex items-start gap-3 py-4 first:pt-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Accepts chip, swipe, and contactless cards.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Next-day settlement straight to your bank account.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>
//                   Compact, portable design that fits any checkout counter.
//                 </span>
//               </li>
//               <li className="flex items-start gap-3 pt-4 last:pb-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>All-day battery life with fast charging support.</span>
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
//                 Built to keep checkout moving
//               </h2>
//               <p className="text-sm leading-7 text-slate-600">
//                 POS Machine gives your business a dependable way to take
//                 card payments, keep queues short, and track every sale in
//                 one place.
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
//                 Handle chip, swipe, and tap payments quickly so lines move
//                 fast even at peak hours.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#EEF9FF] p-6">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
//                 <Store className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Ideal for on-the-go selling
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Wireless and portable, it goes wherever the sale happens —
//                 markets, deliveries, or pop-ups.
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
//                 Connect your POS Machine to a Sound Box for an instant voice
//                 announcement every time a card payment succeeds.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default PosMachine;






















import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  UserPlus,
  CreditCard,
  Wifi,
  Receipt,
  Check,
  ShieldCheck,
  BatteryCharging,
  Store,
  ShoppingBag,
  Volume2,
  QrCode,
  Smartphone,
  LayoutDashboard,
  RefreshCcw,
  ChevronDown,
  Building2,
  Utensils,
  Pill,
  Hotel,
  Fuel,
  Briefcase,
  ArrowRight,
} from "lucide-react";

// Swap POS_MACHINE_IMAGE for your own product photo (e.g. an import from
// /assets) when you have a real packshot of the terminal — this is a
// free-to-use sample in the meantime.
const POS_MACHINE_IMAGE = "/assets/image/services/Pos.png";

const PosMachineDevice = () => (
  <div className="relative mx-auto flex w-full max-w-[28rem] items-center justify-center">
    {/* ambient signal rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* tap-to-pay signal waves */}
    <div className="absolute right-2 top-6 flex flex-col items-end gap-1.5">
      <span className="h-3 w-3 rounded-full border-2 border-[#00C4C7]/60"></span>
      <span className="h-5 w-5 rounded-full border-2 border-[#00C4C7]/40"></span>
      <span className="h-7 w-7 rounded-full border-2 border-[#00C4C7]/25"></span>
    </div>

    {/* device photo */}
    <div className="relative z-10 w-full max-w-[28rem] overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-[#00C4C7]/20">
      <img
        src={POS_MACHINE_IMAGE}
        alt="AbheePay POS Machine card and UPI payment terminal for retail checkout"
        className="w-full rounded-[1.5rem] object-contain"
        loading="lazy"
      />
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const PAYMENT_METHODS = [
  { icon: CreditCard, label: "Credit Cards" },
  { icon: CreditCard, label: "Debit Cards" },
  { icon: Smartphone, label: "UPI Payments" },
  { icon: QrCode, label: "QR Code Payments" },
  { icon: Wifi, label: "Contactless (Tap & Pay)" },
  { icon: Wifi, label: "NFC Enabled Payments" },
];

const INDUSTRIES = [
  {
    icon: Store,
    title: "Retail Stores",
    copy: "Fast billing and secure payment collection at the counter.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafés",
    copy: "Accept payments at the counter or right at the table.",
  },
  {
    icon: ShoppingBag,
    title: "Supermarkets",
    copy: "Process high-volume customer transactions efficiently.",
  },
  {
    icon: Pill,
    title: "Medical Stores & Clinics",
    copy: "Collect healthcare and pharmacy payments with ease.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    copy: "Accept guest payments and service charges smoothly.",
  },
  {
    icon: Fuel,
    title: "Fuel Stations",
    copy: "Enable quick and convenient fuel payments.",
  },
  {
    icon: Briefcase,
    title: "Service Businesses",
    copy: "Receive secure payments for professional services.",
  },
  {
    icon: Building2,
    title: "Startups & MSMEs",
    copy: "Simple onboarding built for growing businesses.",
  },
];

const SETUP_STEPS = [
  {
    title: "Register your business",
    copy: "Complete merchant verification to get started.",
  },
  {
    title: "Receive your POS Machine",
    copy: "Your device is shipped straight to your business.",
  },
  {
    title: "Activate the device",
    copy: "Our support team helps you get set up in minutes.",
  },
  {
    title: "Start accepting payments",
    copy: "Take digital and card payments right away.",
  },
  {
    title: "Monitor everything",
    copy: "Track transactions and settlements from your dashboard.",
  },
];

const FAQS = [
  {
    q: "What is a POS Machine?",
    a: "A POS (Point of Sale) Machine is a payment device that allows businesses to accept card and digital payments from customers securely.",
  },
  {
    q: "Which payment methods are supported?",
    a: "The AbheePay POS Machine supports Credit Cards, Debit Cards, UPI, QR Code Payments, and contactless card payments on supported devices.",
  },
  {
    q: "Is the POS Machine suitable for small businesses?",
    a: "Yes. It is designed for startups, MSMEs, retail stores, restaurants, pharmacies, hotels, and enterprises.",
  },
  {
    q: "Can I track transactions and settlements?",
    a: "Yes. All transactions, settlements, and reports are available through the Merchant Dashboard.",
  },
  {
    q: "Can I use multiple POS Machines for my business?",
    a: "Yes. Businesses operating multiple outlets can manage multiple POS devices and monitor payment activity from one platform.",
  },
  {
    q: "How do I apply for an AbheePay POS Machine?",
    a: "Contact our sales team or submit an enquiry through our website. Our team will guide you through merchant onboarding, verification, device allocation, and activation.",
  },
];

const RELATED_PRODUCTS = [
  { label: "Payment Gateway", to: "/products/payment-gateway" },
  { label: "Payment Links", to: "/products/payment-links" },
  { label: "QR Payment Solution", to: "/products/qr-payment-solution" },
  { label: "QR Sound Box", to: "/products/sound-box" },
  { label: "Merchant Application", to: "/products/merchant-application" },
  { label: "Digital Invoice", to: "/products/digital-invoice" },
];

const FaqItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#00AEB2] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-6 text-slate-600">{a}</p>
      )}
    </div>
  );
};

const PosMachine = () => {
  return (
    <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
      <Helmet>
        <title>
          POS Machine for Businesses | Accept Card & Digital Payments | AbheePay
        </title>
        <meta
          name="description"
          content="Accept card and digital payments with the AbheePay POS Machine. Support Credit Cards, Debit Cards, UPI, QR Payments, and contactless transactions through one smart payment device."
        />
        <link rel="canonical" href="https://www.abheepay.com/products/pos-machine" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="POS Machine for Businesses | Accept Card & Digital Payments | AbheePay"
        />
        <meta
          property="og:description"
          content="Accept card and digital payments with the AbheePay POS Machine. Support Credit Cards, Debit Cards, UPI, QR Payments, and contactless transactions through one smart payment device."
        />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.abheepay.com/products/pos-machine" />
        <meta property="og:image" content="https://www.abheepay.com/assets/image/services/Pos.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="POS Machine for Businesses | Accept Card & Digital Payments | AbheePay"
        />
        <meta
          name="twitter:description"
          content="Accept card and digital payments with the AbheePay POS Machine. Support Credit Cards, Debit Cards, UPI, QR Payments, and contactless transactions through one smart payment device."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
        <div className="relative mx-auto grid max-w-8xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-8">
          {/* Left copy */}
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
              Product Spotlight
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Smart POS Machine for Modern Businesses
            </h1>
            <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
              Accept Card, UPI & Digital Payments
              <br />
              with One Device
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              The AbheePay POS Machine helps businesses accept payments
              through Credit Cards, Debit Cards, UPI, QR Codes, and
              contactless methods using one smart device — built for retail
              stores, restaurants, pharmacies, supermarkets, hotels, fuel
              stations, and service businesses alike.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
              >
                <Phone className="h-4 w-4" />
                Get POS Machine
              </Link>
              <Link
                to="/join-as-retailer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
              >
                <UserPlus className="h-4 w-4" />
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Device */}
          <div className="flex justify-end py-2 lg:py-0 lg:translate-x-40">
            <PosMachineDevice />
          </div>

          {/* Floating cards */}
          <div className="flex flex-col gap-4 lg:w-[280px] lg:justify-self-end">
            <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-4 text-white shadow-xl shadow-slate-900/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                Secure by design
              </p>
              <h3 className="mt-2 text-lg font-bold">Bank-grade encryption</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Every transaction is processed through a secure payment
                platform, encrypted end to end.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                <BatteryCharging className="h-5 w-5 text-[#00C4C7]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                All-day battery
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Built for busy counters
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A full shift on a single charge, with fast top-ups when you
                need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            One device, every payment
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Accept Multiple Payment Methods
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Give your customers the freedom to pay using their preferred
            option. Accepting more payment methods means fewer lost sales
            at checkout.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PAYMENT_METHODS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-[1.5rem] border border-slate-100 bg-white p-5 text-center shadow-sm shadow-slate-200/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00AEB2]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Why businesses love it
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Choose{" "}
            <span className="relative inline-block">
              AbheePay POS Machine
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Built to simplify payment collection while supporting the
            growing needs of modern businesses.
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
                      All Cards & UPI Accepted
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Take chip, swipe, UPI, QR, and contactless payments
                      from every major network in seconds.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                    <CreditCard className="h-5 w-5" />
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
                      Fast, Secure Processing
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Stay online with reliable connectivity and easy
                      merchant onboarding, so transactions never stall.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                    <Wifi className="h-5 w-5" />
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
                      Real-Time Transaction Tracking
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Digital receipts and a smart merchant dashboard keep
                      every sale recorded and easy to reconcile.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                    <Receipt className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <h3 className="text-xl font-semibold text-slate-900">
              POS Machine highlights
            </h3>
            <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
              <li className="flex items-start gap-3 py-4 first:pt-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Accept multiple payment methods from one device.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Easy merchant onboarding and quick activation.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Smart merchant dashboard with real-time reports.</span>
              </li>
              <li className="flex items-start gap-3 pt-4 last:pb-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Reliable business support, wherever you operate.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Smart Android POS + Merchant Dashboard */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00AEB2]">
              <Smartphone className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Smart Android POS Machine
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Combines payment acceptance with business management
              features in one device — simple enough that staff need
              minimal training.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-700">
              {[
                "Fast payment processing",
                "Touchscreen interface",
                "Digital payment receipts",
                "QR code display",
                "Transaction history",
                "Merchant login",
                "Automatic software updates",
                "Easy device management",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00AEB2]" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A]/5 text-[#0F172A]">
              <LayoutDashboard className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Merchant Dashboard
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Monitor your payment activity from one central dashboard,
              across a single outlet or many.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-700">
              {[
                "Live transactions",
                "Settlement reports",
                "Payment history",
                "Daily & monthly collections",
                "Refund status",
                "Downloadable reports",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00AEB2]" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quick setup */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Get started
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Quick Setup & Activation
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Getting started with the AbheePay POS Machine is simple.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SETUP_STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7] text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.copy}
              </p>
              {i < SETUP_STEPS.length - 1 && (
                <ArrowRight className="pointer-events-none absolute -right-4 top-8 hidden h-4 w-4 text-slate-300 lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Built for retail / industries */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Designed for every industry
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Built for Every Business
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Whether you're a small business or a growing enterprise, the
              AbheePay POS Machine simplifies payment collection and
              improves checkout speed.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-3xl bg-[#F8FDFF] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sound box pairing */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#ECFDF5] p-8 shadow-xl shadow-slate-200/30 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div className="sm:max-w-xl">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
              <Volume2 className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              Pairs with Sound Box
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Connect your POS Machine to a Sound Box for an instant voice
              announcement every time a card or UPI payment succeeds.
            </p>
          </div>
          <Link
            to="/products/sound-box"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#059669]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#059669] transition hover:bg-[#059669] hover:text-white sm:mt-0"
          >
            Explore Sound Box
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Easy integration */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A]/5 text-[#0F172A]">
                <RefreshCcw className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Easy Integration with Your Business
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                The AbheePay POS Machine works as part of your complete
                payment ecosystem, integrating with the workflows and
                systems your business already runs on.
              </p>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-slate-700">
              {[
                "Accept card and digital payments from one device",
                "Track transactions and settlements in real time",
                "Download payment reports",
                "Manage multiple POS devices",
                "Access technical support through the Developer Hub for integrations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10 rounded-[2rem] bg-white px-6 shadow-xl shadow-slate-200/30 sm:px-8">
          {FAQS.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* Related products */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <h2 className="text-2xl font-bold text-slate-900">
            Explore Related Products
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Build a complete payment ecosystem with other AbheePay
            solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {RELATED_PRODUCTS.map((p) => (
              <Link
                key={p.label}
                to={p.to}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#F8FBFD] px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#00C4C7] hover:text-[#00AEB2]"
              >
                {p.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#0F172A] to-[#0B2E31] px-8 py-14 text-center text-white shadow-2xl shadow-slate-900/30">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Accept Payments Anywhere?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Give your customers the freedom to pay using cards, UPI, QR
            codes, and contactless payment methods with the AbheePay POS
            Machine — and manage it all with confidence.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/30 transition hover:bg-[#14d0d4]"
            >
              <Phone className="h-4 w-4" />
              Request a POS Machine
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <UserPlus className="h-4 w-4" />
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PosMachine;