// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Phone,
//   UserPlus,
//   Link2,
//   Share2,
//   Zap,
//   Check,
//   ShieldCheck,
//   Eye,
//   Store,
//   Users,
//   Volume2,
//   Send,
// } from "lucide-react";

// // Payment Links has no physical product, so the hero uses a phone-mockup UI
// // instead of a packshot photo — showing what a customer actually sees when
// // a link lands in their chat. Swap the copy/amount below for real product
// // screenshots whenever you have them.
// const PaymentLinkPhoneMockup = () => (
//   <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
//     {/* ambient rings */}
//     <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
//     <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

//     {/* send icon drifting off to the side, implying the link being shared */}
//     <div className="absolute -right-2 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
//       <Send className="h-4 w-4 text-[#00C4C7]" />
//     </div>
//     <div className="absolute -left-2 bottom-16 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
//       <Link2 className="h-3.5 w-3.5 text-[#00AEB2]" />
//     </div>

//     {/* phone frame */}
//     <div className="relative z-10 w-64 overflow-hidden rounded-[2.5rem] border-[6px] border-[#0F172A] bg-white shadow-2xl shadow-[#00C4C7]/20">
//       {/* status bar */}
//       <div className="flex items-center justify-between bg-[#0F172A] px-5 pb-2 pt-3 text-[10px] font-medium text-white/70">
//         <span>9:41</span>
//         <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
//       </div>

//       {/* chat thread */}
//       <div className="flex flex-col gap-3 bg-[#F1F8FA] px-4 py-5">
//         <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[11px] leading-5 text-slate-600 shadow-sm">
//           Hi! Here's your payment link for the order 🙂
//         </div>

//         <div className="ml-auto w-[85%] rounded-2xl rounded-tr-sm bg-[#0F172A] p-4 text-white shadow-lg">
//           <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7EE2E6]">
//             Payment request
//           </p>
//           <p className="mt-2 text-2xl font-bold">₹1,250</p>
//           <p className="mt-1 text-[11px] text-slate-300">Order #4821 · Expires in 24h</p>
//           <div className="mt-3 rounded-full bg-[#00C4C7] px-4 py-2 text-center text-xs font-semibold text-[#0F172A]">
//             Pay now
//           </div>
//         </div>

//         <div className="ml-auto flex items-center gap-1 pr-1 text-[10px] text-[#00AEB2]">
//           <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
//           Paid
//         </div>
//       </div>
//     </div>

//     {/* platform */}
//     <div className="absolute -bottom-6 left-1/2 h-6 w-56 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
//     <div className="absolute -bottom-4 left-1/2 h-3 w-44 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
//   </div>
// );

// const PaymentLinks = () => {
//   return (
//     <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
//       {/* Hero */}
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
//         <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
//         <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-8">
//           {/* Left copy */}
//           <div className="max-w-xl">
//             <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//               Product Spotlight
//             </p>
//             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//               Payment Links
//             </h1>
//             <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
//               One link. Every way to pay.
//               <br />
//               No storefront required.
//             </h2>
//             <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
//               Create a secure payment link in seconds and share it over
//               WhatsApp, SMS, or email. Customers pay with any card or UPI
//               app, no website or checkout page needed.
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
//           <div className="flex justify-center py-6 lg:py-0">
//             <PaymentLinkPhoneMockup />
//           </div>

//           {/* Floating cards */}
//           <div className="flex flex-col gap-4 lg:max-w-xs">
//             <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
//                 <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
//                 No storefront needed
//               </p>
//               <h3 className="mt-2 text-lg font-bold">Sell from anywhere</h3>
//               <p className="mt-3 text-sm leading-6 text-slate-200">
//                 Take orders and payments over chat, social media, or email —
//                 no website or POS required.
//               </p>
//             </div>

//             <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
//               <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
//                 <Eye className="h-5 w-5 text-[#00C4C7]" />
//               </div>
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//                 Real-time tracking
//               </p>
//               <h3 className="mt-2 text-lg font-bold text-slate-900">
//                 See every link's status
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Know instantly when a link is viewed, paid, or has expired.
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
//             Why Payment Links work{" "}
//             <span className="relative inline-block">
//               for your business
//               <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
//             </span>
//           </h2>
//           <p className="mt-4 text-base leading-7 text-slate-600">
//             Built for sellers without a storefront, Payment Links makes
//             requesting, sharing, and collecting payments simple and
//             reliable — wherever the conversation happens.
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
//                       Create in Seconds
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Set an amount and description, and generate a secure
//                       payment link instantly.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
//                     <Link2 className="h-5 w-5" />
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
//                       Share Anywhere
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Send it over WhatsApp, SMS, email, or social media —
//                       wherever your customer already is.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
//                     <Share2 className="h-5 w-5" />
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
//                       Get Paid Instantly
//                     </h3>
//                     <p className="mt-2 text-sm leading-6 text-slate-600">
//                       Customers pay with any card or UPI app, and funds
//                       settle straight to your account.
//                     </p>
//                   </div>
//                   <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
//                     <Zap className="h-5 w-5" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//             <h3 className="text-xl font-semibold text-slate-900">
//               Payment Links highlights
//             </h3>
//             <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
//               <li className="flex items-start gap-3 py-4 first:pt-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>No website or app required to start selling.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Works across WhatsApp, SMS, email, and social media.</span>
//               </li>
//               <li className="flex items-start gap-3 py-4">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Track every link: viewed, paid, or expired.</span>
//               </li>
//               <li className="flex items-start gap-3 pt-4 last:pb-0">
//                 <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
//                   <Check className="h-4 w-4" strokeWidth={3} />
//                 </span>
//                 <span>Auto-expiring links keep every payment secure.</span>
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
//                 Designed for sellers
//               </p>
//               <h2 className="text-3xl font-bold text-slate-900">
//                 Built to sell without a storefront
//               </h2>
//               <p className="text-sm leading-7 text-slate-600">
//                 Payment Links gives your business a fast, professional way
//                 to get paid — no matter where the conversation with your
//                 customer starts.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#F8FDFF] p-6">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
//                 <Users className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Perfect for social sellers
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Take orders on Instagram or WhatsApp and send a payment link
//                 right in the chat.
//               </p>
//             </div>

//             <div className="rounded-3xl bg-[#EEF9FF] p-6">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
//                 <Store className="h-5 w-5" />
//               </span>
//               <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                 Ideal for service businesses
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Freelancers, salons, and consultants can invoice and get
//                 paid without any hardware.
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
//                 Works alongside your other devices
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Pair Payment Links with your Sound Box or QR Code to get a
//                 voice announcement for every payment, in-store or online.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default PaymentLinks;











// import React from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import {
//   Phone,
//   UserPlus,
//   Link2,
//   Share2,
//   Zap,
//   Check,
//   ShieldCheck,
//   Eye,
//   Store,
//   Users,
//   Volume2,
//   Send,
//   Smartphone,
//   CreditCard,
//   Landmark,
//   Wallet,
//   QrCode,
//   MessageCircle,
//   Mail,
//   MessagesSquare,
//   LayoutDashboard,
//   Clock,
//   RefreshCcw,
//   FileText,
//   ShoppingCart,
//   GraduationCap,
//   HeartPulse,
//   Plane,
//   CalendarCheck,
//   Briefcase,
//   Home,
//   Code2,
//   BookOpen,
//   Webhook,
//   LifeBuoy,
//   MessageSquareText,
// } from "lucide-react";

// // ---------------------------------------------------------------------------
// // SEO CONFIG — edit these values for your real domain / brand before deploy
// // ---------------------------------------------------------------------------
// const SITE_URL = "https://www.abheepay.com";
// const PAGE_PATH = "/products/payment-links";
// const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
// const OG_IMAGE = `${SITE_URL}/og/payment-links.jpg`; // 1200x630 recommended

// const SEO_TITLE =
//   "Payment Links for Businesses | Collect Online Payments | AbheePay";
// const SEO_DESCRIPTION =
//   "Collect online payments without a website using AbheePay Payment Links. Create secure payment links, share them instantly, and receive payments through UPI, Cards, Net Banking, and Wallets.";
// const SEO_KEYWORDS =
//   "payment links, online payment link, collect payments without website, payment link generator, UPI payment link, share payment link, AbheePay payment links";

// // FAQ data doubles as page content and JSON-LD FAQPage schema
// const faqs = [
//   {
//     q: "What are Payment Links?",
//     a: "Payment Links are secure URLs that allow businesses to collect online payments without building a website or payment page.",
//   },
//   {
//     q: "Which payment methods are supported?",
//     a: "Customers can pay using UPI, Credit Cards, Debit Cards, Net Banking, Digital Wallets, and other supported payment methods.",
//   },
//   {
//     q: "Do I need a website to use Payment Links?",
//     a: "No. You can create and share payment links through WhatsApp, SMS, Email, or any messaging platform.",
//   },
//   {
//     q: "Can I track payments?",
//     a: "Yes. The Merchant Dashboard provides real-time payment status, settlement reports, and transaction history.",
//   },
//   {
//     q: "Can I create payment links for different amounts?",
//     a: "Yes. Businesses can generate payment links for products, services, invoices, bookings, subscriptions, and custom payment requests.",
//   },
//   {
//     q: "How do I get started?",
//     a: "Contact our sales team or register with AbheePay. Once your merchant account is activated, you can start creating and sharing payment links.",
//   },
// ];

// const productSchema = {
//   "@context": "https://schema.org",
//   "@type": "Service",
//   serviceType: "Payment Links",
//   name: "AbheePay Payment Links",
//   description: SEO_DESCRIPTION,
//   provider: {
//     "@type": "Organization",
//     name: "AbheePay",
//     url: SITE_URL,
//   },
//   areaServed: "IN",
//   url: PAGE_URL,
//   offers: {
//     "@type": "Offer",
//     availability: "https://schema.org/InStock",
//   },
// };

// const faqSchema = {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   mainEntity: faqs.map(({ q, a }) => ({
//     "@type": "Question",
//     name: q,
//     acceptedAnswer: {
//       "@type": "Answer",
//       text: a,
//     },
//   })),
// };

// const breadcrumbSchema = {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   itemListElement: [
//     { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//     {
//       "@type": "ListItem",
//       position: 2,
//       name: "Products",
//       item: `${SITE_URL}/products`,
//     },
//     {
//       "@type": "ListItem",
//       position: 3,
//       name: "Payment Links",
//       item: PAGE_URL,
//     },
//   ],
// };

// const suitableFor = [
//   { icon: Store, label: "Retail Stores" },
//   { icon: Home, label: "Home Businesses" },
//   { icon: Users, label: "Freelancers" },
//   { icon: Briefcase, label: "Consultants" },
//   { icon: GraduationCap, label: "Educational Institutions" },
//   { icon: HeartPulse, label: "Hospitals & Clinics" },
//   { icon: Plane, label: "Travel Agencies" },
//   { icon: CalendarCheck, label: "Event Organisers" },
// ];

// const paymentMethods = [
//   { icon: Smartphone, label: "UPI" },
//   { icon: CreditCard, label: "Credit Cards" },
//   { icon: CreditCard, label: "Debit Cards" },
//   { icon: Landmark, label: "Net Banking" },
//   { icon: Wallet, label: "Digital Wallets" },
//   { icon: QrCode, label: "QR Code Payments" },
// ];

// const shareChannels = [
//   { icon: MessageCircle, label: "WhatsApp" },
//   { icon: Smartphone, label: "SMS" },
//   { icon: Mail, label: "Email" },
//   { icon: MessagesSquare, label: "Facebook Messenger" },
//   { icon: Send, label: "Telegram" },
//   { icon: Share2, label: "Any Social Media" },
// ];

// const customRequests = [
//   { icon: ShoppingCart, label: "Product Orders" },
//   { icon: Briefcase, label: "Service Payments" },
//   { icon: CalendarCheck, label: "Advance Bookings" },
//   { icon: Users, label: "Membership Fees" },
//   { icon: GraduationCap, label: "Tuition Fees" },
//   { icon: HeartPulse, label: "Medical Bills" },
//   { icon: Plane, label: "Travel Bookings" },
//   { icon: CalendarCheck, label: "Event Registrations" },
// ];

// const industries = [
//   {
//     title: "Retail Businesses",
//     desc: "Collect payments for products and customer orders.",
//   },
//   {
//     title: "Freelancers & Consultants",
//     desc: "Receive service fees without a website.",
//   },
//   {
//     title: "Education",
//     desc: "Collect admission fees, tuition fees, and course payments.",
//   },
//   {
//     title: "Healthcare",
//     desc: "Accept consultation fees, hospital payments, and diagnostic charges.",
//   },
//   {
//     title: "Travel & Hospitality",
//     desc: "Receive booking and reservation payments.",
//   },
//   {
//     title: "Professional Services",
//     desc: "Collect advance payments, invoices, and project fees.",
//   },
//   {
//     title: "Startups & MSMEs",
//     desc: "Simplify payment collection with a professional payment solution.",
//   },
// ];

// const relatedSolutions = [
//   { name: "Payment Gateway", to: "/products/payment-gateway" },
//   { name: "QR", to: "/products/qr-code" },
//   { name: "POS Machine", to: "/products/pos-machine" },
//   { name: "Merchant Application", to: "/products/merchant-app" },
//   { name: "Digital Invoice", to: "/products/digital-invoice" },
//   { name: "Sound Box", to: "/products/sound-box" },
// ];

// // Payment Links has no physical product, so the hero uses a phone-mockup UI
// // instead of a packshot photo — showing what a customer actually sees when
// // a link lands in their chat. Swap the copy/amount below for real product
// // screenshots whenever you have them.
// const PaymentLinkPhoneMockup = () => (
//   <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
//     {/* ambient rings */}
//     <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
//     <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

//     {/* send icon drifting off to the side, implying the link being shared */}
//     <div className="absolute -right-2 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
//       <Send className="h-4 w-4 text-[#00C4C7]" />
//     </div>
//     <div className="absolute -left-2 bottom-16 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
//       <Link2 className="h-3.5 w-3.5 text-[#00AEB2]" />
//     </div>

//     {/* phone frame */}
//     <div className="relative z-10 w-64 overflow-hidden rounded-[2.5rem] border-[6px] border-[#0F172A] bg-white shadow-2xl shadow-[#00C4C7]/20">
//       {/* status bar */}
//       <div className="flex items-center justify-between bg-[#0F172A] px-5 pb-2 pt-3 text-[10px] font-medium text-white/70">
//         <span>9:41</span>
//         <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
//       </div>

//       {/* chat thread */}
//       <div className="flex flex-col gap-3 bg-[#F1F8FA] px-4 py-5">
//         <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[11px] leading-5 text-slate-600 shadow-sm">
//           Hi! Here's your payment link for the order 🙂
//         </div>

//         <div className="ml-auto w-[85%] rounded-2xl rounded-tr-sm bg-[#0F172A] p-4 text-white shadow-lg">
//           <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7EE2E6]">
//             Payment request
//           </p>
//           <p className="mt-2 text-2xl font-bold">₹1,250</p>
//           <p className="mt-1 text-[11px] text-slate-300">Order #4821 · Expires in 24h</p>
//           <div className="mt-3 rounded-full bg-[#00C4C7] px-4 py-2 text-center text-xs font-semibold text-[#0F172A]">
//             Pay now
//           </div>
//         </div>

//         <div className="ml-auto flex items-center gap-1 pr-1 text-[10px] text-[#00AEB2]">
//           <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
//           Paid
//         </div>
//       </div>
//     </div>

//     {/* platform */}
//     <div className="absolute -bottom-6 left-1/2 h-6 w-56 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
//     <div className="absolute -bottom-4 left-1/2 h-3 w-44 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
//   </div>
// );

// const PaymentLinks = () => {
//   return (
//     <>
//       <Helmet>
//         {/* Primary */}
//         <title>{SEO_TITLE}</title>
//         <meta name="description" content={SEO_DESCRIPTION} />
//         <meta name="keywords" content={SEO_KEYWORDS} />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={PAGE_URL} />

//         {/* Open Graph */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content={SEO_TITLE} />
//         <meta property="og:description" content={SEO_DESCRIPTION} />
//         <meta property="og:url" content={PAGE_URL} />
//         <meta property="og:image" content={OG_IMAGE} />
//         <meta property="og:site_name" content="AbheePay" />
//         <meta property="og:locale" content="en_IN" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={SEO_TITLE} />
//         <meta name="twitter:description" content={SEO_DESCRIPTION} />
//         <meta name="twitter:image" content={OG_IMAGE} />

//         {/* Structured data */}
//         <script type="application/ld+json">
//           {JSON.stringify(productSchema)}
//         </script>
//         <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
//         <script type="application/ld+json">
//           {JSON.stringify(breadcrumbSchema)}
//         </script>
//       </Helmet>

//       <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
//         {/* Hero */}
//         <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
//           <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
//           <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-8">
//             {/* Left copy */}
//             <div className="max-w-xl">
//               <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//                 Product Spotlight
//               </p>
//               <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//                 Payment Links
//               </h1>
//               <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
//                 Accept Payments Anywhere.
//                 <br />
//                 Share a Link. Get Paid.
//               </h2>
//               <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
//                 The AbheePay Payment Links solution makes it easy to collect
//                 online payments without building a website or app. Create a
//                 secure payment link in seconds and share it through WhatsApp,
//                 SMS, Email, or Social Media.
//               </p>
//               <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
//                 <Link
//                   to="/get-started"
//                   className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
//                 >
//                   <Link2 className="h-4 w-4" />
//                   Create Payment Link
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
//                 >
//                   <MessageSquareText className="h-4 w-4" />
//                   Contact Sales
//                 </Link>
//               </div>
//             </div>

//             {/* Device */}
//             <div className="flex justify-center py-6 lg:py-0">
//               <PaymentLinkPhoneMockup />
//             </div>

//             {/* Floating cards */}
//             <div className="flex flex-col gap-4 lg:max-w-xs">
//               <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
//                 <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
//                   <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
//                 </div>
//                 <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
//                   No storefront needed
//                 </p>
//                 <h3 className="mt-2 text-lg font-bold">Sell from anywhere</h3>
//                 <p className="mt-3 text-sm leading-6 text-slate-200">
//                   Take orders and payments over chat, social media, or email —
//                   no website or POS required.
//                 </p>
//               </div>

//               <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
//                 <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
//                   <Eye className="h-5 w-5 text-[#00C4C7]" />
//                 </div>
//                 <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//                   Real-time tracking
//                 </p>
//                 <h3 className="mt-2 text-lg font-bold text-slate-900">
//                   See every link's status
//                 </h3>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">
//                   Know instantly when a link is viewed, paid, or has expired.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* A simple payment collection solution for every business */}
//         <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//               Built for every business
//             </p>
//             <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
//               A simple payment collection solution for{" "}
//               <span className="relative inline-block">
//                 every business
//                 <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
//               </span>
//             </h2>
//             <p className="mt-4 text-base leading-7 text-slate-600">
//               Not every business needs a website to accept digital payments.
//               Generate a unique payment link, share it with your customer,
//               and receive payments through multiple digital payment methods
//               — no complete online checkout system required.
//             </p>
//           </div>

//           <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
//             {suitableFor.map(({ icon: Icon, label }) => (
//               <div
//                 key={label}
//                 className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-md shadow-slate-200/40"
//               >
//                 <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00AEB2]">
//                   <Icon className="h-5 w-5" />
//                 </span>
//                 <span className="text-sm font-medium text-slate-700">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Why it works */}
//         <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//               Why businesses love it
//             </p>
//             <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
//               Why Choose AbheePay{" "}
//               <span className="relative inline-block">
//                 Payment Links?
//                 <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
//               </span>
//             </h2>
//             <p className="mt-4 text-base leading-7 text-slate-600">
//               Businesses choose AbheePay because payment collection should
//               be simple, secure, and convenient for both merchants and
//               customers.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-8">
//             <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//               <div className="divide-y divide-slate-100">
//                 <div className="flex gap-4 pb-6">
//                   <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7] text-lg font-bold text-white">
//                     1
//                   </span>
//                   <div className="flex flex-1 items-center justify-between gap-4">
//                     <div>
//                       <h3 className="font-semibold text-slate-900">
//                         Create in Seconds
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-slate-600">
//                         Set an amount and description, and generate a secure
//                         payment link instantly.
//                       </p>
//                     </div>
//                     <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
//                       <Link2 className="h-5 w-5" />
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 py-6">
//                   <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-lg font-bold text-white">
//                     2
//                   </span>
//                   <div className="flex flex-1 items-center justify-between gap-4">
//                     <div>
//                       <h3 className="font-semibold text-slate-900">
//                         Share Anywhere
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-slate-600">
//                         Send it over WhatsApp, SMS, email, or social media —
//                         wherever your customer already is.
//                       </p>
//                     </div>
//                     <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
//                       <Share2 className="h-5 w-5" />
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 pt-6">
//                   <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#10B981] text-lg font-bold text-white">
//                     3
//                   </span>
//                   <div className="flex flex-1 items-center justify-between gap-4">
//                     <div>
//                       <h3 className="font-semibold text-slate-900">
//                         Get Paid Instantly
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-slate-600">
//                         Customers pay with any card or UPI app, and funds
//                         settle straight to your account.
//                       </p>
//                     </div>
//                     <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
//                       <Zap className="h-5 w-5" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//               <h3 className="text-xl font-semibold text-slate-900">
//                 Payment Links highlights
//               </h3>
//               <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
//                 <li className="flex items-start gap-3 py-4 first:pt-0">
//                   <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
//                     <Check className="h-4 w-4" strokeWidth={3} />
//                   </span>
//                   <span>Create payment links in seconds.</span>
//                 </li>
//                 <li className="flex items-start gap-3 py-4">
//                   <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
//                     <Check className="h-4 w-4" strokeWidth={3} />
//                   </span>
//                   <span>Share links through WhatsApp, SMS, Email, and Social Media.</span>
//                 </li>
//                 <li className="flex items-start gap-3 py-4">
//                   <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
//                     <Check className="h-4 w-4" strokeWidth={3} />
//                   </span>
//                   <span>Accept UPI, Cards, Net Banking, and Wallet payments.</span>
//                 </li>
//                 <li className="flex items-start gap-3 py-4">
//                   <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
//                     <Check className="h-4 w-4" strokeWidth={3} />
//                   </span>
//                   <span>Track payment status in real time.</span>
//                 </li>
//                 <li className="flex items-start gap-3 py-4">
//                   <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#FDE68A]/60 text-[#92400E]">
//                     <Check className="h-4 w-4" strokeWidth={3} />
//                   </span>
//                   <span>View settlements and reports from one dashboard.</span>
//                 </li>
//                 <li className="flex items-start gap-3 pt-4 last:pb-0">
//                   <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#FBCFE8]/60 text-[#9D174D]">
//                     <Check className="h-4 w-4" strokeWidth={3} />
//                   </span>
//                   <span>Reduce manual payment follow-ups.</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* Features */}
//         <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//               Features
//             </p>
//             <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
//               Features that make payment collection simple
//             </h2>
//             <p className="mt-4 text-base leading-7 text-slate-600">
//               Create, share, and track every payment from one easy-to-use
//               platform — no complex setup required.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-8 lg:grid-cols-2">
//             {/* Accept multiple payment methods */}
//             <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
//                 <Wallet className="h-5 w-5" />
//               </span>
//               <h3 className="mt-5 text-lg font-semibold text-slate-900">
//                 Accept Multiple Payment Methods
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Every payment link supports multiple payment options, giving
//                 customers the flexibility to choose how they pay — improving
//                 convenience and successful payment completion.
//               </p>
//               <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
//                 {paymentMethods.map(({ icon: Icon, label }) => (
//                   <li
//                     key={label}
//                     className="flex items-center gap-2 text-xs font-medium text-slate-600"
//                   >
//                     <Icon className="h-3.5 w-3.5 text-[#00AEB2]" />
//                     {label}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Create and share in seconds */}
//             <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] text-white">
//                 <Share2 className="h-5 w-5" />
//               </span>
//               <h3 className="mt-5 text-lg font-semibold text-slate-900">
//                 Create and Share in Seconds
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Generate a secure payment link and share it instantly. Your
//                 customer simply opens the link, completes the payment, and
//                 receives payment confirmation.
//               </p>
//               <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
//                 {shareChannels.map(({ icon: Icon, label }) => (
//                   <li
//                     key={label}
//                     className="flex items-center gap-2 text-xs font-medium text-slate-600"
//                   >
//                     <Icon className="h-3.5 w-3.5 text-[#00AEB2]" />
//                     {label}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Smart merchant dashboard */}
//             <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
//                 <LayoutDashboard className="h-5 w-5" />
//               </span>
//               <h3 className="mt-5 text-lg font-semibold text-slate-900">
//                 Smart Merchant Dashboard
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Manage every payment from one dashboard. Stay updated with
//                 real-time payment information and simplify reconciliation.
//               </p>
//               <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
//                 {[
//                   "Payment Status",
//                   "Successful Transactions",
//                   "Pending Payments",
//                   "Settlement Reports",
//                   "Payment History",
//                   "Downloadable Reports",
//                 ].map((item) => (
//                   <li key={item} className="flex items-start gap-2">
//                     <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Custom payment requests */}
//             <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//               <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
//                 <FileText className="h-5 w-5" />
//               </span>
//               <h3 className="mt-5 text-lg font-semibold text-slate-900">
//                 Custom Payment Requests
//               </h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 Create payment links for different business needs, based on
//                 the amount and purpose of the transaction.
//               </p>
//               <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
//                 {customRequests.map(({ icon: Icon, label }) => (
//                   <li
//                     key={label}
//                     className="flex items-center gap-2 text-xs font-medium text-slate-600"
//                   >
//                     <Icon className="h-3.5 w-3.5 text-[#00AEB2]" />
//                     {label}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* How it works */}
//         <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//           <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30 lg:p-10">
//             <div className="max-w-2xl">
//               <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//                 How it works
//               </p>
//               <h2 className="mt-3 text-3xl font-bold text-slate-900">
//                 Getting started with AbheePay Payment Links is quick and
//                 simple
//               </h2>
//             </div>

//             <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
//               {[
//                 {
//                   step: "1",
//                   title: "Sign Up",
//                   desc: "Complete merchant onboarding to get started.",
//                 },
//                 {
//                   step: "2",
//                   title: "Create",
//                   desc: "Create a payment link by entering the amount and customer details.",
//                 },
//                 {
//                   step: "3",
//                   title: "Share",
//                   desc: "Share the payment link through your preferred communication channel.",
//                 },
//                 {
//                   step: "4",
//                   title: "Get Paid",
//                   desc: "Your customer completes the payment using their preferred method.",
//                 },
//                 {
//                   step: "5",
//                   title: "Track",
//                   desc: "Track payment status, settlements, and reports from your dashboard.",
//                 },
//               ].map(({ step, title, desc }) => (
//                 <div key={step} className="flex flex-col gap-3">
//                   <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00C4C7] text-sm font-bold text-white">
//                     {step}
//                   </span>
//                   <h3 className="text-sm font-semibold text-slate-900">
//                     {title}
//                   </h3>
//                   <p className="text-xs leading-5 text-slate-600">{desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Built for retail / industries */}
//         <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//           <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
//             <div className="grid gap-8 lg:grid-cols-3">
//               <div className="space-y-3">
//                 <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//                   Built for every industry
//                 </p>
//                 <h2 className="text-3xl font-bold text-slate-900">
//                   Sell without a storefront
//                 </h2>
//                 <p className="text-sm leading-7 text-slate-600">
//                   Whether you sell products, provide services, or manage
//                   customer bookings, AbheePay Payment Links help you receive
//                   payments quickly and securely across industries.
//                 </p>
//               </div>

//               <div className="rounded-3xl bg-[#F8FDFF] p-6 lg:col-span-2">
//                 <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
//                   {industries.map(({ title, desc }) => (
//                     <div key={title} className="flex items-start gap-2">
//                       <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
//                       <div>
//                         <p className="text-sm font-semibold text-slate-800">
//                           {title}
//                         </p>
//                         <p className="mt-0.5 text-xs leading-5 text-slate-600">
//                           {desc}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 lg:grid-cols-3">
//               <div className="hidden lg:block"></div>
//               <div className="rounded-3xl bg-[#ECFDF5] p-6 lg:col-span-2 lg:max-w-sm">
//                 <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
//                   <Volume2 className="h-5 w-5" />
//                 </span>
//                 <h3 className="mt-4 text-lg font-semibold text-slate-900">
//                   Works alongside your other devices
//                 </h3>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">
//                   Pair Payment Links with your Sound Box or QR Code to get a
//                   voice announcement for every payment, in-store or online.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Secure collection + Easy integration */}
//         <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//           <div className="grid gap-8 rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-xl shadow-slate-900/20 lg:grid-cols-[1fr_1.2fr] lg:p-10">
//             <div className="space-y-4">
//               <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
//                 Secure by design, easy to integrate
//               </p>
//               <h2 className="text-3xl font-bold">
//                 Secure Payment Collection with Every Link
//               </h2>
//               <p className="text-sm leading-7 text-slate-300">
//                 Every payment link created through AbheePay provides a safe
//                 and reliable payment experience. Already using a website,
//                 mobile app, CRM, ERP, or custom software? Payment Links can
//                 be integrated into your existing workflow through our APIs
//                 — generate links, send requests automatically, and track
//                 status in real time.
//               </p>
//             </div>
//             <ul className="grid gap-4 sm:grid-cols-2">
//               {[
//                 { icon: Code2, label: "Payment Links API" },
//                 { icon: BookOpen, label: "Developer Hub Docs" },
//                 { icon: RefreshCcw, label: "Automated Payment Requests" },
//                 { icon: Clock, label: "Real-Time Status Tracking" },
//                 { icon: FileText, label: "Settlements & Reports" },
//                 { icon: LifeBuoy, label: "Integration Support" },
//               ].map(({ icon: Icon, label }) => (
//                 <li
//                   key={label}
//                   className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
//                 >
//                   <Icon className="h-4 w-4 text-[#7EE2E6]" />
//                   {label}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* FAQ — also feeds the FAQPage JSON-LD above, keep both in sync */}
//         <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//               FAQ
//             </p>
//             <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
//               Frequently asked questions
//             </h2>
//           </div>

//           <div className="mt-10 divide-y divide-slate-200 rounded-[2rem] bg-white shadow-xl shadow-slate-200/30">
//             {faqs.map(({ q, a }) => (
//               <details
//                 key={q}
//                 className="group p-6 first:rounded-t-[2rem] last:rounded-b-[2rem]"
//               >
//                 <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900">
//                   {q}
//                   <span className="ml-4 text-[#00AEB2] transition group-open:rotate-45">
//                     +
//                   </span>
//                 </summary>
//                 <p className="mt-3 text-sm leading-6 text-slate-600">{a}</p>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* Related solutions */}
//         <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
//               Explore related products
//             </p>
//             <h2 className="mt-3 text-3xl font-bold text-slate-900">
//               Expand your payment capabilities
//             </h2>
//           </div>
//           <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
//             {relatedSolutions.map(({ name, to }) => (
//               <Link
//                 key={name}
//                 to={to}
//                 className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#00C4C7] hover:text-[#00AEB2]"
//               >
//                 {name}
//               </Link>
//             ))}
//           </div>
//         </section>

//         {/* Closing CTA */}
//         <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
//           <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#00C4C7] to-[#0F172A] px-8 py-14 text-center text-white shadow-2xl">
//             <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]"></div>
//             <div className="relative">
//               <h2 className="text-3xl font-bold sm:text-4xl">
//                 Ready to Start Collecting Payments?
//               </h2>
//               <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85">
//                 Whether you're collecting payments for products, services,
//                 bookings, or invoices, AbheePay Payment Links provide a fast,
//                 secure, and convenient way to receive money online.
//               </p>
//               <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
//                 <Link
//                   to="/get-started"
//                   className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-lg transition hover:bg-white/90"
//                 >
//                   <Link2 className="h-4 w-4" />
//                   Create Payment Link
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
//                 >
//                   <MessageSquareText className="h-4 w-4" />
//                   Contact Sales
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default PaymentLinks;















import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  UserPlus,
  Link2,
  Share2,
  Zap,
  Check,
  ShieldCheck,
  Eye,
  Store,
  Users,
  Volume2,
  Send,
  Smartphone,
  CreditCard,
  Landmark,
  Wallet,
  QrCode,
  MessageCircle,
  Mail,
  MessagesSquare,
  LayoutDashboard,
  Clock,
  RefreshCcw,
  FileText,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Plane,
  CalendarCheck,
  Briefcase,
  Home,
  Code2,
  BookOpen,
  Webhook,
  LifeBuoy,
  MessageSquareText,
} from "lucide-react";

// ---------------------------------------------------------------------------
// SEO CONFIG — edit these values for your real domain / brand before deploy
// ---------------------------------------------------------------------------
const SITE_URL = "https://www.abheepay.com";
const PAGE_PATH = "/products/payment-links";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og/payment-links.jpg`; // 1200x630 recommended

const SEO_TITLE =
  "Payment Links for Businesses | Collect Online Payments | AbheePay";
const SEO_DESCRIPTION =
  "Collect online payments without a website using AbheePay Payment Links. Create secure payment links, share them instantly, and receive payments through UPI, Cards, Net Banking, and Wallets.";
const SEO_KEYWORDS =
  "payment links, online payment link, collect payments without website, payment link generator, UPI payment link, share payment link, AbheePay payment links";

// FAQ data doubles as page content and JSON-LD FAQPage schema
const faqs = [
  {
    q: "What are Payment Links?",
    a: "Payment Links are secure URLs that allow businesses to collect online payments without building a website or payment page.",
  },
  {
    q: "Which payment methods are supported?",
    a: "Customers can pay using UPI, Credit Cards, Debit Cards, Net Banking, Digital Wallets, and other supported payment methods.",
  },
  {
    q: "Do I need a website to use Payment Links?",
    a: "No. You can create and share payment links through WhatsApp, SMS, Email, or any messaging platform.",
  },
  {
    q: "Can I track payments?",
    a: "Yes. The Merchant Dashboard provides real-time payment status, settlement reports, and transaction history.",
  },
  {
    q: "Can I create payment links for different amounts?",
    a: "Yes. Businesses can generate payment links for products, services, invoices, bookings, subscriptions, and custom payment requests.",
  },
  {
    q: "How do I get started?",
    a: "Contact our sales team or register with AbheePay. Once your merchant account is activated, you can start creating and sharing payment links.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Payment Links",
  name: "AbheePay Payment Links",
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
      name: "Payment Links",
      item: PAGE_URL,
    },
  ],
};

const suitableFor = [
  { icon: Store, label: "Retail Stores" },
  { icon: Home, label: "Home Businesses" },
  { icon: Users, label: "Freelancers" },
  { icon: Briefcase, label: "Consultants" },
  { icon: GraduationCap, label: "Educational Institutions" },
  { icon: HeartPulse, label: "Hospitals & Clinics" },
  { icon: Plane, label: "Travel Agencies" },
  { icon: CalendarCheck, label: "Event Organisers" },
];

const paymentMethods = [
  { icon: Smartphone, label: "UPI" },
  { icon: CreditCard, label: "Credit Cards" },
  { icon: CreditCard, label: "Debit Cards" },
  { icon: Landmark, label: "Net Banking" },
  { icon: Wallet, label: "Digital Wallets" },
  { icon: QrCode, label: "QR Code Payments" },
];

const shareChannels = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Smartphone, label: "SMS" },
  { icon: Mail, label: "Email" },
  { icon: MessagesSquare, label: "Facebook Messenger" },
  { icon: Send, label: "Telegram" },
  { icon: Share2, label: "Any Social Media" },
];

const customRequests = [
  { icon: ShoppingCart, label: "Product Orders" },
  { icon: Briefcase, label: "Service Payments" },
  { icon: CalendarCheck, label: "Advance Bookings" },
  { icon: Users, label: "Membership Fees" },
  { icon: GraduationCap, label: "Tuition Fees" },
  { icon: HeartPulse, label: "Medical Bills" },
  { icon: Plane, label: "Travel Bookings" },
  { icon: CalendarCheck, label: "Event Registrations" },
];

const industries = [
  {
    title: "Retail Businesses",
    desc: "Collect payments for products and customer orders.",
  },
  {
    title: "Freelancers & Consultants",
    desc: "Receive service fees without a website.",
  },
  {
    title: "Education",
    desc: "Collect admission fees, tuition fees, and course payments.",
  },
  {
    title: "Healthcare",
    desc: "Accept consultation fees, hospital payments, and diagnostic charges.",
  },
  {
    title: "Travel & Hospitality",
    desc: "Receive booking and reservation payments.",
  },
  {
    title: "Professional Services",
    desc: "Collect advance payments, invoices, and project fees.",
  },
  {
    title: "Startups & MSMEs",
    desc: "Simplify payment collection with a professional payment solution.",
  },
];

const relatedSolutions = [
  { name: "Payment Gateway", to: "/products/payment-gateway" },
  { name: "QR", to: "/products/qr-code" },
  { name: "POS Machine", to: "/products/pos-machine" },
  { name: "Merchant Application", to: "/products/merchant-app" },
  { name: "Digital Invoice", to: "/products/digital-invoice" },
  { name: "Sound Box", to: "/products/sound-box" },
];

// Payment Links has no physical product, so the hero uses a phone-mockup UI
// instead of a packshot photo — showing what a customer actually sees when
// a link lands in their chat. Swap the copy/amount below for real product
// screenshots whenever you have them.
const PaymentLinkPhoneMockup = () => (
  <div className="relative mx-auto flex w-full max-w-sm items-center justify-center py-4 lg:min-h-[560px] lg:max-w-none lg:w-[640px]">
    <style>{`
      @keyframes floatY {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }
      @keyframes floatYSoft {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
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
      .float-phone { animation: floatYSoft 6s ease-in-out infinite; }
      .float-ring { animation: ringPulse 5s ease-in-out infinite; }
      @media (prefers-reduced-motion: reduce) {
        .float-badge, .float-phone, .float-ring { animation: none; }
      }
    `}</style>

    {/* ambient rings */}
    <div className="float-ring pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20 lg:top-1/2 lg:-translate-y-1/2"></div>
    <div
      className="float-ring pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15 lg:top-1/2 lg:-translate-y-1/2"
      style={{ animationDelay: "0.8s" }}
    ></div>

    {/* dashed connector lines — desktop only */}
    <span className="pointer-events-none absolute left-[26%] top-[30%] hidden h-px w-16 rotate-[24deg] border-t-2 border-dashed border-[#00C4C7]/50 lg:block"></span>
    <span className="pointer-events-none absolute right-[24%] top-[38%] hidden h-px w-14 rotate-[-18deg] border-t-2 border-dashed border-[#00C4C7]/50 lg:block"></span>
    <span className="pointer-events-none absolute left-[27%] bottom-[24%] hidden h-px w-16 rotate-[-20deg] border-t-2 border-dashed border-[#00C4C7]/50 lg:block"></span>

    {/* floating badge — AbheePay brand mark */}
    <div
      className="float-badge absolute left-0 top-2 z-20 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-200/70 lg:flex"
      style={{ animationDelay: "0s" }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0F172A] text-[#7EE2E6]">
        <Link2 className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-slate-800">AbheePay Secured</span>
    </div>

    {/* floating badge — UPI */}
    <div
      className="float-badge absolute right-0 top-10 z-20 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-200/70 lg:flex"
      style={{ animationDelay: "1.2s" }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00C4C7]/10 text-[#00AEB2]">
        <Smartphone className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-slate-800">UPI Ready</span>
    </div>

    {/* floating badge — WhatsApp share */}
    <div
      className="float-badge absolute left-0 bottom-16 z-20 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-200/70 lg:flex"
      style={{ animationDelay: "2.1s" }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00C4C7]/10 text-[#00AEB2]">
        <MessageCircle className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-slate-800">Share on WhatsApp</span>
    </div>

    {/* floating badge — instant payouts */}
    <div
      className="float-badge absolute right-0 bottom-8 z-20 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-200/70 lg:flex"
      style={{ animationDelay: "3s" }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00C4C7]/10 text-[#00AEB2]">
        <Zap className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold text-slate-800">Instant Payouts</span>
    </div>

    {/* send icon drifting off to the side, implying the link being shared */}
    <div className="float-badge absolute -right-2 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20 lg:hidden">
      <Send className="h-4 w-4 text-[#00C4C7]" />
    </div>
    <div
      className="float-badge absolute -left-2 bottom-16 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20 lg:hidden"
      style={{ animationDelay: "1.5s" }}
    >
      <Link2 className="h-3.5 w-3.5 text-[#00AEB2]" />
    </div>

    {/* phone frame */}
    <div className="relative z-10 w-64 overflow-hidden rounded-[2.5rem] border-[6px] border-[#0F172A] bg-white shadow-2xl shadow-[#00C4C7]/20">
      {/* status bar */}
      <div className="flex items-center justify-between bg-[#0F172A] px-5 pb-2 pt-3 text-[10px] font-medium text-white/70">
        <span>9:41</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
      </div>

      {/* chat thread */}
      <div className="flex flex-col gap-3 bg-[#F1F8FA] px-4 py-5">
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[11px] leading-5 text-slate-600 shadow-sm">
          Hi! Here's your payment link for the order 🙂
        </div>

        <div className="ml-auto w-[85%] rounded-2xl rounded-tr-sm bg-[#0F172A] p-4 text-white shadow-lg">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7EE2E6]">
            Payment request
          </p>
          <p className="mt-2 text-2xl font-bold">₹1,250</p>
          <p className="mt-1 text-[11px] text-slate-300">Order #4821 · Expires in 24h</p>
          <div className="mt-3 rounded-full bg-[#00C4C7] px-4 py-2 text-center text-xs font-semibold text-[#0F172A]">
            Pay now
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1 pr-1 text-[10px] text-[#00AEB2]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
          Paid
        </div>
      </div>
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-56 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-44 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const PaymentLinks = () => {
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
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Payment Links
              </h1>
              <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
                Accept Payments Anywhere.
                <br />
                Share a Link. Get Paid.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
                The AbheePay Payment Links solution makes it easy to collect
                online payments without building a website or app. Create a
                secure payment link in seconds and share it through WhatsApp,
                SMS, Email, or Social Media.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
                >
                  <Link2 className="h-4 w-4" />
                  Create Payment Link
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
              <PaymentLinkPhoneMockup />
            </div>

            {/* Floating cards */}
            <div className="flex flex-col gap-4 lg:ml-auto lg:w-full lg:max-w-xs lg:justify-self-end">
              <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                  No storefront needed
                </p>
                <h3 className="mt-2 text-lg font-bold">Sell from anywhere</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  Take orders and payments over chat, social media, or email —
                  no website or POS required.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                  <Eye className="h-5 w-5 text-[#00C4C7]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                  Real-time tracking
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  See every link's status
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Know instantly when a link is viewed, paid, or has expired.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A simple payment collection solution for every business */}
        <section className="mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Built for every business
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              A simple payment collection solution for{" "}
              <span className="relative inline-block">
                every business
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Not every business needs a website to accept digital payments.
              Generate a unique payment link, share it with your customer,
              and receive payments through multiple digital payment methods
              — no complete online checkout system required.
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

        {/* Why it works */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Why businesses love it
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Why Choose AbheePay{" "}
              <span className="relative inline-block">
                Payment Links?
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
              </span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Businesses choose AbheePay because payment collection should
              be simple, secure, and convenient for both merchants and
              customers.
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
                        Create in Seconds
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Set an amount and description, and generate a secure
                        payment link instantly.
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                      <Link2 className="h-5 w-5" />
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
                        Share Anywhere
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Send it over WhatsApp, SMS, email, or social media —
                        wherever your customer already is.
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                      <Share2 className="h-5 w-5" />
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
                        Get Paid Instantly
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Customers pay with any card or UPI app, and funds
                        settle straight to your account.
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                      <Zap className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <h3 className="text-xl font-semibold text-slate-900">
                Payment Links highlights
              </h3>
              <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
                <li className="flex items-start gap-3 py-4 first:pt-0">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Create payment links in seconds.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Share links through WhatsApp, SMS, Email, and Social Media.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Accept UPI, Cards, Net Banking, and Wallet payments.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Track payment status in real time.</span>
                </li>
                <li className="flex items-start gap-3 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#FDE68A]/60 text-[#92400E]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>View settlements and reports from one dashboard.</span>
                </li>
                <li className="flex items-start gap-3 pt-4 last:pb-0">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#FBCFE8]/60 text-[#9D174D]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>Reduce manual payment follow-ups.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Features that make payment collection simple
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Create, share, and track every payment from one easy-to-use
              platform — no complex setup required.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 2xl:grid-cols-4">
            {/* Accept multiple payment methods */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Wallet className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Accept Multiple Payment Methods
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Every payment link supports multiple payment options, giving
                customers the flexibility to choose how they pay — improving
                convenience and successful payment completion.
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

            {/* Create and share in seconds */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] text-white">
                <Share2 className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Create and Share in Seconds
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Generate a secure payment link and share it instantly. Your
                customer simply opens the link, completes the payment, and
                receives payment confirmation.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                {shareChannels.map(({ icon: Icon, label }) => (
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
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981]">
                <LayoutDashboard className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Smart Merchant Dashboard
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Manage every payment from one dashboard. Stay updated with
                real-time payment information and simplify reconciliation.
              </p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                {[
                  "Payment Status",
                  "Successful Transactions",
                  "Pending Payments",
                  "Settlement Reports",
                  "Payment History",
                  "Downloadable Reports",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom payment requests */}
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <FileText className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                Custom Payment Requests
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Create payment links for different business needs, based on
                the amount and purpose of the transaction.
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                {customRequests.map(({ icon: Icon, label }) => (
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
                Getting started with AbheePay Payment Links is quick and
                simple
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  step: "1",
                  title: "Sign Up",
                  desc: "Complete merchant onboarding to get started.",
                },
                {
                  step: "2",
                  title: "Create",
                  desc: "Create a payment link by entering the amount and customer details.",
                },
                {
                  step: "3",
                  title: "Share",
                  desc: "Share the payment link through your preferred communication channel.",
                },
                {
                  step: "4",
                  title: "Get Paid",
                  desc: "Your customer completes the payment using their preferred method.",
                },
                {
                  step: "5",
                  title: "Track",
                  desc: "Track payment status, settlements, and reports from your dashboard.",
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

        {/* Built for retail / industries */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                  Built for every industry
                </p>
                <h2 className="text-3xl font-bold text-slate-900">
                  Sell without a storefront
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  Whether you sell products, provide services, or manage
                  customer bookings, AbheePay Payment Links help you receive
                  payments quickly and securely across industries.
                </p>
              </div>

              <div className="rounded-3xl bg-[#F8FDFF] p-6 lg:col-span-2">
                <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {industries.map(({ title, desc }) => (
                    <div key={title} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C4C7]"></span>
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
              <div className="hidden lg:block"></div>
              <div className="rounded-3xl bg-[#ECFDF5] p-6 lg:col-span-2 lg:max-w-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                  <Volume2 className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  Works alongside your other devices
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Pair Payment Links with your Sound Box or QR Code to get a
                  voice announcement for every payment, in-store or online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secure collection + Easy integration */}
        <section className="mx-auto w-full max-w-[1920px] px-4 pb-16 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="grid gap-8 rounded-[2rem] bg-[#0F172A] p-8 text-white shadow-xl shadow-slate-900/20 lg:grid-cols-[1fr_1.2fr] lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                Secure by design, easy to integrate
              </p>
              <h2 className="text-3xl font-bold">
                Secure Payment Collection with Every Link
              </h2>
              <p className="text-sm leading-7 text-slate-300">
                Every payment link created through AbheePay provides a safe
                and reliable payment experience. Already using a website,
                mobile app, CRM, ERP, or custom software? Payment Links can
                be integrated into your existing workflow through our APIs
                — generate links, send requests automatically, and track
                status in real time.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Code2, label: "Payment Links API" },
                { icon: BookOpen, label: "Developer Hub Docs" },
                { icon: RefreshCcw, label: "Automated Payment Requests" },
                { icon: Clock, label: "Real-Time Status Tracking" },
                { icon: FileText, label: "Settlements & Reports" },
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
              Explore related products
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
                Ready to Start Collecting Payments?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/85">
                Whether you're collecting payments for products, services,
                bookings, or invoices, AbheePay Payment Links provide a fast,
                secure, and convenient way to receive money online.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {/* <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-lg transition hover:bg-white/90"
                >
                  <Link2 className="h-4 w-4" />
                  Create Payment Link
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

export default PaymentLinks;