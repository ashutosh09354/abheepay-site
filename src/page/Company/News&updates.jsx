// import { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import {
//   Rocket,
//   Megaphone,
//   Handshake,
//   RefreshCw,
//   CalendarDays,
//   Newspaper,
//   Rss,
//   Bell,
//   Mail,
//   ArrowRight,
//   ChevronDown,
// } from "lucide-react";

// const WHAT_YOU_FIND = [
//   {
//     icon: Rocket,
//     title: "Product Launches",
//     body: "Learn about new products, features, and enhancements across the AbheePay platform.",
//     examples: ["New payment solutions", "API enhancements", "Merchant App updates", "QR & Sound Box improvements", "Business banking features"],
//   },
//   {
//     icon: Megaphone,
//     title: "Company Announcements",
//     body: "Stay informed about important company milestones and business developments.",
//     examples: ["Business expansion", "New office locations", "Team growth", "Leadership announcements", "Strategic initiatives"],
//   },
//   {
//     icon: Handshake,
//     title: "Partnerships",
//     body: "Read about collaborations that help us deliver better products and services.",
//     examples: ["Technology partnerships", "Business collaborations", "Merchant partnerships", "Enterprise projects", "Industry associations"],
//   },
//   {
//     icon: RefreshCw,
//     title: "Platform Updates",
//     body: "Discover improvements that enhance security, performance, and user experience.",
//     examples: ["Performance improvements", "Security enhancements", "New integrations", "Dashboard improvements", "API updates"],
//   },
//   {
//     icon: CalendarDays,
//     title: "Events & Activities",
//     body: "Follow our participation in industry events and community initiatives.",
//     examples: ["Industry conferences", "Business events", "Product demonstrations", "Webinars", "Customer workshops"],
//   },
// ];

// const FEATURED_UPDATES = [
//   {
//     category: "Product Updates",
//     title: "[Article Title]",
//     summary: "[Short summary of the announcement goes here — one or two sentences.]",
//     date: "[Publication Date]",
//   },
//   {
//     category: "Partnerships",
//     title: "[Article Title]",
//     summary: "[Short summary of the announcement goes here — one or two sentences.]",
//     date: "[Publication Date]",
//   },
//   {
//     category: "Company News",
//     title: "[Article Title]",
//     summary: "[Short summary of the announcement goes here — one or two sentences.]",
//     date: "[Publication Date]",
//   },
// ];

// const CATEGORIES = [
//   "Product Updates",
//   "Company News",
//   "Partnerships",
//   "API Updates",
//   "Business Insights",
//   "Events",
//   "Press Releases",
// ];

// const FAQS = [
//   {
//     q: "How often is the News & Updates page updated?",
//     a: "We publish updates whenever there are important product releases, company announcements, partnerships, or platform improvements.",
//   },
//   {
//     q: "Can I subscribe to updates?",
//     a: "Yes. You can subscribe to receive the latest AbheePay news and announcements.",
//   },
//   {
//     q: "What type of updates are published?",
//     a: "We share product launches, API updates, company news, partnerships, business milestones, and event announcements.",
//   },
//   {
//     q: "Where can I find product updates?",
//     a: "Product-related announcements are available under the Product Updates category.",
//   },
//   {
//     q: "How can I contact AbheePay for media enquiries?",
//     a: "Please use the Contact Us page to reach our team for media or business enquiries.",
//   },
// ];

// const SectionEyebrow = ({ children, dark }) => (
//   <span
//     className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${
//       dark ? "bg-teal-500/15 text-teal-400" : "bg-teal-50 text-teal-600"
//     }`}
//   >
//     {children}
//   </span>
// );

// const FaqItem = ({ q, a, isOpen, onToggle }) => (
//   <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
//     <button
//       onClick={onToggle}
//       className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
//     >
//       <span className="font-semibold text-slate-900">{q}</span>
//       <ChevronDown
//         className={`h-5 w-5 shrink-0 text-teal-500 transition-transform duration-200 ${
//           isOpen ? "rotate-180" : ""
//         }`}
//       />
//     </button>
//     {isOpen && <div className="px-6 pb-5 text-sm text-slate-600">{a}</div>}
//   </div>
// );

// const NewsUpdates = () => {
//   const [openFaq, setOpenFaq] = useState(0);
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     if (!email) return;
//     setSubscribed(true);
//   };

//   return (
//     <main className="pt-24 bg-white text-slate-900">
//       <Helmet>
//         <title>News &amp; Updates | AbheePay</title>
//         <meta
//           name="description"
//           content="Stay updated with the latest news from AbheePay, including product launches, partnerships, company announcements, business insights, and platform updates."
//         />
//       </Helmet>

//       {/* Hero with news-themed background elements */}
//       <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-teal-50/60 to-white px-6 py-20 sm:py-28">
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.35]"
//           style={{
//             backgroundImage: "radial-gradient(#14B8A6 1px, transparent 1px)",
//             backgroundSize: "28px 28px",
//             maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
//             WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
//           }}
//         />
//         <Newspaper className="pointer-events-none absolute left-[8%] top-16 h-10 w-10 text-teal-500/20 sm:h-14 sm:w-14" />
//         <Rss className="pointer-events-none absolute right-[10%] top-24 h-11 w-11 text-teal-500/20 sm:h-14 sm:w-14" />
//         <Bell className="pointer-events-none absolute bottom-10 left-[14%] h-10 w-10 text-teal-500/20 sm:h-12 sm:w-12" />
//         <Megaphone className="pointer-events-none absolute bottom-16 right-[16%] h-10 w-10 text-teal-500/20 sm:h-12 sm:w-12" />

//         <div className="relative mx-auto max-w-4xl text-center">
//           <SectionEyebrow>News &amp; Updates</SectionEyebrow>
//           <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl">
//             Stay Connected with What&apos;s Happening at{" "}
//             <span className="text-teal-500">AbheePay</span>
//           </h1>
//           <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
//             Welcome to the AbheePay News &amp; Updates page, your source for the latest company
//             announcements, product launches, partnerships, business achievements, and platform
//             improvements.
//           </p>
//           <p className="mx-auto mt-3 max-w-2xl text-slate-500">
//             Whether you&apos;re an existing customer or exploring AbheePay for the first time,
//             this page helps you stay up to date with our latest developments.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//             <button className="rounded-lg bg-teal-500 px-6 py-3 font-bold text-white transition hover:bg-teal-600">
//               View Latest Updates
//             </button>
//             <button className="rounded-lg border-2 border-teal-500 px-6 py-3 font-bold text-teal-600 transition hover:bg-teal-50">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* What You'll Find */}
//       <section className="px-6 py-20">
//         <div className="mx-auto max-w-6xl">
//           <div className="text-center">
//             <SectionEyebrow>What You&apos;ll Find</SectionEyebrow>
//             <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
//               Updates Across Every Part of Our Business
//             </h2>
//           </div>
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {WHAT_YOU_FIND.map(({ icon: Icon, title, body, examples }) => (
//               <div
//                 key={title}
//                 className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//               >
//                 <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3">
//                   <Icon className="h-6 w-6 text-teal-500" />
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900">{title}</h3>
//                 <p className="mt-2 text-sm text-slate-600">{body}</p>
//                 <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
//                   {examples.map((ex) => (
//                     <li key={ex} className="flex items-start gap-2 text-xs text-slate-500">
//                       <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
//                       {ex}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Updates */}
//       <section className="bg-slate-50 px-6 py-20">
//         <div className="mx-auto max-w-6xl">
//           <div className="text-center">
//             <SectionEyebrow>Featured Updates</SectionEyebrow>
//             <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
//               Our Latest Announcements
//             </h2>
//             <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
//               Sample card layout &mdash; replace with your live announcements as they publish.
//             </p>
//           </div>
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {FEATURED_UPDATES.map((item, i) => (
//               <div
//                 key={i}
//                 className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//               >
//                 <div className="flex h-40 items-center justify-center bg-gradient-to-br from-teal-400 to-teal-600">
//                   <Newspaper className="h-10 w-10 text-white/70" />
//                 </div>
//                 <div className="p-6">
//                   <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-teal-600">
//                     {item.category}
//                   </span>
//                   <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
//                   <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
//                   <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
//                     <span className="text-xs text-slate-400">{item.date}</span>
//                     <span className="flex items-center gap-1 text-sm font-semibold text-teal-600">
//                       Read More <ArrowRight className="h-3.5 w-3.5" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="px-6 py-20">
//         <div className="mx-auto max-w-4xl text-center">
//           <SectionEyebrow>Categories</SectionEyebrow>
//           <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
//             Browse by Category
//           </h2>
//           <p className="mx-auto mt-4 max-w-xl text-slate-600">
//             Organise updates into easy-to-browse categories, making it easier for visitors to
//             find the information that interests them.
//           </p>
//           <div className="mt-8 flex flex-wrap justify-center gap-3">
//             {CATEGORIES.map((cat) => (
//               <button
//                 key={cat}
//                 className="rounded-full border border-teal-200 bg-teal-50 px-5 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-100"
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Media & Press */}
//       <section className="bg-slate-950 px-6 py-16 text-white">
//         <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
//           <div className="inline-flex rounded-xl bg-teal-500/15 p-3">
//             <Rss className="h-6 w-6 text-teal-400" />
//           </div>
//           <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Media &amp; Press</h2>
//           <p className="max-w-2xl text-slate-300">
//             If you&apos;re a journalist, business partner, or media representative, this section
//             provides official company announcements and information about AbheePay. For media
//             enquiries, please contact our communications team through the Contact Us page.
//           </p>
//         </div>
//       </section>

//       {/* Subscribe */}
//       <section className="px-6 py-20">
//         <div className="mx-auto max-w-3xl rounded-3xl border border-teal-100 bg-teal-50/60 p-10 text-center sm:p-14">
//           <div className="mx-auto mb-4 inline-flex rounded-xl bg-white p-3 shadow-sm">
//             <Mail className="h-6 w-6 text-teal-500" />
//           </div>
//           <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
//             Subscribe for Updates
//           </h2>
//           <p className="mx-auto mt-4 max-w-xl text-slate-600">
//             Want to stay informed? Subscribe to receive updates about new products, platform
//             improvements, partnerships, and company announcements directly from AbheePay.
//           </p>

//           {subscribed ? (
//             <p className="mt-6 font-semibold text-teal-600">
//               Thanks for subscribing! You&apos;re on the list.
//             </p>
//           ) : (
//             <form
//               onSubmit={handleSubscribe}
//               className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
//             >
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
//               />
//               <button
//                 type="submit"
//                 className="shrink-0 rounded-lg bg-teal-500 px-6 py-3 font-bold text-white transition hover:bg-teal-600"
//               >
//                 Subscribe
//               </button>
//             </form>
//           )}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="bg-slate-50 px-6 py-20">
//         <div className="mx-auto max-w-3xl">
//           <div className="text-center">
//             <SectionEyebrow>Frequently Asked Questions</SectionEyebrow>
//             <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
//               Have Questions?
//             </h2>
//           </div>
//           <div className="mt-10 space-y-3">
//             {FAQS.map((faq, i) => (
//               <FaqItem
//                 key={faq.q}
//                 q={faq.q}
//                 a={faq.a}
//                 isOpen={openFaq === i}
//                 onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stay Informed / Final CTA */}
//       <section className="border-t border-slate-100 px-6 py-20">
//         <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-10 text-center text-white shadow-lg sm:p-14">
//           <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
//             Stay Informed with AbheePay
//           </h2>
//           <p className="mx-auto mt-5 max-w-2xl text-teal-50">
//             Innovation never stands still, and neither do we. Follow the AbheePay News &amp;
//             Updates page to stay informed about the latest products, technology, partnerships,
//             and business developments.
//           </p>
//           <p className="mx-auto mt-4 max-w-2xl font-semibold text-white">
//             Whether you&apos;re a customer, partner, developer, or enterprise, you&apos;ll always
//             find the latest updates from our team here.
//           </p>
//           <p className="mt-6 text-sm font-bold uppercase tracking-widest text-teal-100">
//             Stay Connected
//           </p>
//           <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
//             <button className="rounded-lg bg-white px-6 py-3 font-bold text-teal-600 transition hover:bg-teal-50">
//               View Latest Updates
//             </button>
//             <button className="rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white/10">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default NewsUpdates;








import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Rocket,
  Megaphone,
  Handshake,
  RefreshCw,
  CalendarDays,
  Newspaper,
  Rss,
  Bell,
  Mail,
  ChevronDown,
} from "lucide-react";

/* ============================================================================
 * SECTION 1: STATIC DATA
 * All page copy/content lives here, grouped by the section that uses it.
 * Edit content here — the components below only handle layout/rendering.
 * ==========================================================================*/

// Used by: "What You'll Find" section
const WHAT_YOU_FIND = [
  {
    icon: Rocket,
    title: "Product Launches",
    body: "Learn about new products, features, and enhancements across the AbheePay platform.",
    examples: ["New payment solutions", "API enhancements", "Merchant App updates", "QR & Sound Box improvements", "Business banking features"],
  },
  {
    icon: Megaphone,
    title: "Company Announcements",
    body: "Stay informed about important company milestones and business developments.",
    examples: ["Business expansion", "New office locations", "Team growth", "Leadership announcements", "Strategic initiatives"],
  },
  {
    icon: Handshake,
    title: "Partnerships",
    body: "Read about collaborations that help us deliver better products and services.",
    examples: ["Technology partnerships", "Business collaborations", "Merchant partnerships", "Enterprise projects", "Industry associations"],
  },
  {
    icon: RefreshCw,
    title: "Platform Updates",
    body: "Discover improvements that enhance security, performance, and user experience.",
    examples: ["Performance improvements", "Security enhancements", "New integrations", "Dashboard improvements", "API updates"],
  },
  {
    icon: CalendarDays,
    title: "Events & Activities",
    body: "Follow our participation in industry events and community initiatives.",
    examples: ["Industry conferences", "Business events", "Product demonstrations", "Webinars", "Customer workshops"],
  },
];

// Used by: "Browse by Category" section
const CATEGORIES = [
  "Product Updates",
  "Company News",
  "Partnerships",
  "API Updates",
  "Business Insights",
  "Events",
  "Press Releases",
];

// Used by: "FAQ" section
const FAQS = [
  {
    q: "How often is the News & Updates page updated?",
    a: "We publish updates whenever there are important product releases, company announcements, partnerships, or platform improvements.",
  },
  {
    q: "Can I subscribe to updates?",
    a: "Yes. You can subscribe to receive the latest AbheePay news and announcements.",
  },
  {
    q: "What type of updates are published?",
    a: "We share product launches, API updates, company news, partnerships, business milestones, and event announcements.",
  },
  {
    q: "Where can I find product updates?",
    a: "Product-related announcements are available under the Product Updates category.",
  },
  {
    q: "How can I contact AbheePay for media enquiries?",
    a: "Please use the Contact Us page to reach our team for media or business enquiries.",
  },
];

/* ============================================================================
 * SECTION 2: SMALL SHARED UI HELPERS
 * ==========================================================================*/

const SectionEyebrow = ({ children, dark }) => (
  <span
    className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${
      dark ? "bg-teal-500/15 text-teal-400" : "bg-teal-50 text-teal-600"
    }`}
  >
    {children}
  </span>
);

const FaqItem = ({ q, a, isOpen, onToggle }) => (
  <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
    >
      <span className="font-semibold text-slate-900">{q}</span>
      <ChevronDown
        className={`h-5 w-5 shrink-0 text-teal-500 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && <div className="px-6 pb-5 text-sm text-slate-600">{a}</div>}
  </div>
);

/* ============================================================================
 * SECTION 3: PAGE SECTIONS
 * Each block of the page is its own named component, in the order it
 * appears on screen. This makes the final <NewsUpdates> layout read like
 * a table of contents.
 * ==========================================================================*/

// --- Head metadata (SEO title/description) -------------------------------
const PageHead = () => (
  <Helmet>
    <title>News &amp; Updates | AbheePay</title>
    <meta
      name="description"
      content="Stay updated with the latest news from AbheePay, including product launches, partnerships, company announcements, business insights, and platform updates."
    />
  </Helmet>
);

// --- 1. Hero banner --------------------------------------------------------
const HeroSection = () => (
  <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-teal-50/60 to-white px-6 py-20 sm:py-28">
    {/* Decorative dotted background */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: "radial-gradient(#14B8A6 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
        WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
      }}
    />
    {/* Decorative floating icons */}
    <Newspaper className="pointer-events-none absolute left-[8%] top-16 h-10 w-10 text-teal-500/20 sm:h-14 sm:w-14" />
    <Rss className="pointer-events-none absolute right-[10%] top-24 h-11 w-11 text-teal-500/20 sm:h-14 sm:w-14" />
    <Bell className="pointer-events-none absolute bottom-10 left-[14%] h-10 w-10 text-teal-500/20 sm:h-12 sm:w-12" />
    <Megaphone className="pointer-events-none absolute bottom-16 right-[16%] h-10 w-10 text-teal-500/20 sm:h-12 sm:w-12" />

    <div className="relative mx-auto max-w-4xl text-center">
      <SectionEyebrow>News &amp; Updates</SectionEyebrow>
      <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl">
        Stay Connected with What&apos;s Happening at{" "}
        <span className="text-teal-500">AbheePay</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
        Welcome to the AbheePay News &amp; Updates page, your source for the latest company
        announcements, product launches, partnerships, business achievements, and platform
        improvements.
      </p>
      <p className="mx-auto mt-3 max-w-2xl text-slate-500">
        Whether you&apos;re an existing customer or exploring AbheePay for the first time,
        this page helps you stay up to date with our latest developments.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button className="rounded-lg bg-teal-500 px-6 py-3 font-bold text-white transition hover:bg-teal-600">
          View Latest Updates
        </button>
        <button className="rounded-lg border-2 border-teal-500 px-6 py-3 font-bold text-teal-600 transition hover:bg-teal-50">
          Contact Us
        </button>
      </div>
    </div>
  </section>
);

// --- 2. "What You'll Find" category cards ----------------------------------
const WhatYouFindSection = () => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <SectionEyebrow>What You&apos;ll Find</SectionEyebrow>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Updates Across Every Part of Our Business
        </h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHAT_YOU_FIND.map(({ icon: Icon, title, body, examples }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3">
              <Icon className="h-6 w-6 text-teal-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{body}</p>
            <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
              {examples.map((ex) => (
                <li key={ex} className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-400" />
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 3. Category filter pills ----------------------------------------------
const CategoriesSection = () => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-4xl text-center">
      <SectionEyebrow>Categories</SectionEyebrow>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        Browse by Category
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-slate-600">
        Organise updates into easy-to-browse categories, making it easier for visitors to
        find the information that interests them.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className="rounded-full border border-teal-200 bg-teal-50 px-5 py-2 text-sm font-semibold text-teal-700 transition hover:bg-teal-100"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  </section>
);

// --- 5. Media & Press callout -----------------------------------------------
const MediaPressSection = () => (
  <section className="bg-slate-950 px-6 py-16 text-white">
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
      <div className="inline-flex rounded-xl bg-teal-500/15 p-3">
        <Rss className="h-6 w-6 text-teal-400" />
      </div>
      <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Media &amp; Press</h2>
      <p className="max-w-2xl text-slate-300">
        If you&apos;re a journalist, business partner, or media representative, this section
        provides official company announcements and information about AbheePay. For media
        enquiries, please contact our communications team through the Contact Us page.
      </p>
    </div>
  </section>
);

// --- 6. Email subscribe form -------------------------------------------------
// Owns its own local state (email input + subscribed flag) since that
// state is only relevant to this section.
const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-teal-100 bg-teal-50/60 p-10 text-center sm:p-14">
        <div className="mx-auto mb-4 inline-flex rounded-xl bg-white p-3 shadow-sm">
          <Mail className="h-6 w-6 text-teal-500" />
        </div>
        <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Subscribe for Updates
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Want to stay informed? Subscribe to receive updates about new products, platform
          improvements, partnerships, and company announcements directly from AbheePay.
        </p>

        {subscribed ? (
          <p className="mt-6 font-semibold text-teal-600">
            Thanks for subscribing! You&apos;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-teal-500 px-6 py-3 font-bold text-white transition hover:bg-teal-600"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

// --- 7. FAQ accordion ---------------------------------------------------------
// Owns its own local state (which FAQ is expanded) since that state is
// only relevant to this section.
const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <SectionEyebrow>Frequently Asked Questions</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Have Questions?
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 8. Final "Stay Informed" call-to-action ---------------------------------
const FinalCtaSection = () => (
  <section className="border-t border-slate-100 px-6 py-20">
    <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-10 text-center text-white shadow-lg sm:p-14">
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
        Stay Informed with AbheePay
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-teal-50">
        Innovation never stands still, and neither do we. Follow the AbheePay News &amp;
        Updates page to stay informed about the latest products, technology, partnerships,
        and business developments.
      </p>
      <p className="mx-auto mt-4 max-w-2xl font-semibold text-white">
        Whether you&apos;re a customer, partner, developer, or enterprise, you&apos;ll always
        find the latest updates from our team here.
      </p>
      <p className="mt-6 text-sm font-bold uppercase tracking-widest text-teal-100">
        Stay Connected
      </p>
    </div>
  </section>
);

/* ============================================================================
 * SECTION 4: PAGE ASSEMBLY
 * The final page is just a readable list of its sections, in visual order.
 * ==========================================================================*/

const NewsUpdates = () => {
  return (
    <main className="pt-24 bg-white text-slate-900">
      <PageHead />
      <HeroSection />
      <WhatYouFindSection />
      <CategoriesSection />
      <MediaPressSection />
      <FaqSection />
      <SubscribeSection />
      <FinalCtaSection />
    </main>
  );
};

export default NewsUpdates;
