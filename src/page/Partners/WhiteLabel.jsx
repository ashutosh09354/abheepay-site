// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   BarChart3,
//   Blocks,
//   Building2,
//   CheckCircle2,
//   Code2,
//   Headphones,
//   PlugZap,
//   Rocket,
//   ShieldCheck,
//   Workflow,
// } from "lucide-react";

// const MotionDiv = motion.div;
// const MotionArticle = motion.article;

// const fadeUp = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
// };

// const partnerBenefits = [
//   { icon: PlugZap, title: "Powerful API suite", description: "Connect payment, banking and collection capabilities through reliable APIs." },
//   { icon: ShieldCheck, title: "Built for trust", description: "Security-first workflows and dependable infrastructure for every integration." },
//   { icon: BarChart3, title: "Grow together", description: "Create scalable revenue opportunities for your platform and customers." },
//   { icon: Headphones, title: "Dedicated support", description: "Work with a team that supports your integration journey from launch to scale." },
// ];

// const integrationSteps = [
//   { icon: Building2, step: "01", title: "Tell us about your business", description: "Share your product, use case and partnership goals." },
//   { icon: Workflow, step: "02", title: "Plan your integration", description: "Our team helps identify the right APIs and commercial model." },
//   { icon: Code2, step: "03", title: "Build and launch", description: "Integrate, test and take your fintech solution to market." },
// ];

// const WhiteLabel = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState("");

//   const submitApplication = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setSubmitError("");

//     const formData = new FormData(event.currentTarget);
//     const application = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch("https://formsubmit.co/ajax/care@abheepay.com", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           ...application,
//           _subject: "New Technology Partner Application",
//           _template: "table",
//         }),
//       });

//       if (!response.ok) throw new Error("Unable to submit application");
//       setSubmitted(true);
//     } catch {
//       setSubmitError("We could not submit your application right now. Please try again or contact us directly.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main className="overflow-hidden bg-[#f7fbfc] pt-14 font-sans text-[#0b1d45] lg:pt-20">
//       <section className="relative isolate overflow-hidden bg-[#071d48] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
//         <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(89,220,214,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(89,220,214,0.18) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
//         <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#14b8a6]/25 blur-3xl" />
//         <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//           <MotionDiv initial="hidden" animate="visible" variants={fadeUp}>
//             <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-200">
//               <Blocks size={15} /> Technology Partner Program
//             </span>
//             <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
//               Build the future of <span className="text-[#2dd4bf]">digital finance</span> with us.
//             </h1>
//             <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
//               Power your applications with AbheePay's secure payment, banking, and fintech APIs—built for seamless integration, scalability, and reliability.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <a href="#partner-application" className="inline-flex items-center gap-2 rounded-xl bg-[#14b8a6] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-950/40 transition hover:bg-[#0ea99b]">
//                 Become a Partner <ArrowRight size={17} />
//               </a>
//               <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
//                 Talk to our team
//               </Link>
//             </div>
//             <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
//               {["Fast onboarding", "API-first platform", "Partner-led support"].map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2dd4bf]" />{item}</span>)}
//             </div>
//           </MotionDiv>

//           <MotionDiv initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto w-full max-w-xl">
//             <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
//               <div className="rounded-2xl bg-[#f7fbfc] p-5 text-[#0b1d45] sm:p-7">
//                 <div className="flex items-center justify-between"><span className="text-sm font-black">Partner Console</span><span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">Connected</span></div>
//                 <div className="mt-6 grid grid-cols-2 gap-3">
//                   {[['API uptime', '99.99%'], ['Monthly volume', '₹500 Cr+']].map(([label, value]) => <div key={label} className="rounded-xl bg-white p-4 shadow-sm"><p className="text-xs text-slate-500">{label}</p><p className="mt-2 text-xl font-black">{value}</p></div>)}
//                 </div>
//                 <div className="mt-4 rounded-xl bg-[#071d48] p-5 text-white">
//                   <div className="flex items-center justify-between text-xs text-slate-300"><span>Integration health</span><span className="font-bold text-[#2dd4bf]">Excellent</span></div>
//                   <div className="mt-5 flex h-20 items-end gap-2">{[35, 55, 44, 76, 61, 90, 72, 96].map((height, index) => <span key={index} className="flex-1 rounded-t bg-[#2dd4bf]" style={{ height: `${height}%`, opacity: 0.55 + index * 0.05 }} />)}</div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 text-[#0b1d45] shadow-xl sm:block"><p className="mt-2 text-xs font-black">Launch faster</p><p className="text-xs text-slate-500">with one integration</p></div>
//           </MotionDiv>
//         </div>
//       </section>

//       <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto max-w-7xl">
//           <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Why partner with us</p><h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Everything you need to create a better fintech experience.</h2></div>
//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//             {partnerBenefits.map((benefit) => <MotionArticle key={benefit.title} whileHover={{ y: -6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#14b8a6]">{React.createElement(benefit.icon, { size: 23 })}</span><h3 className="mt-5 text-lg font-black text-[#0b1d45]">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{benefit.description}</p></MotionArticle>)}
//           </div>
//         </div>
//       </section>

//       <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto max-w-7xl"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Simple process</p><h2 className="mt-3 text-3xl font-black text-[#0b1d45] sm:text-4xl">From idea to integration in three steps.</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{integrationSteps.map((item) => <div key={item.step} className="relative rounded-2xl border border-slate-200 p-7"><span className="text-5xl font-black text-slate-100">{item.step}</span><span className="absolute right-7 top-7 text-[#14b8a6]">{React.createElement(item.icon, { size: 30 })}</span><h3 className="mt-7 text-xl font-black text-[#0b1d45]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p></div>)}</div></div>
//       </section>

//       <section id="partner-application" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#0b1d45] shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
//           <div className="p-8 text-white sm:p-12"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#5eead4]">Let's build together</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">Start your technology partnership.</h2><p className="mt-5 leading-7 text-slate-300">Tell us about your platform. Our partnership team will be in touch to discuss the best path forward.</p><div className="mt-10 space-y-4 text-sm text-slate-200"><p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Built for fintech platforms, ISVs and solution providers</p><p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Commercial models designed for sustainable growth</p></div></div>
//           <form onSubmit={submitApplication} className="bg-white p-8 sm:p-12">
//             {submitted ? <div className="flex min-h-[300px] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-[#14b8a6]"><CheckCircle2 size={30} /></span><h3 className="mt-5 text-2xl font-black text-[#0b1d45]">Thanks for your interest!</h3><p className="mt-2 max-w-sm text-sm text-slate-500">Our technology partnership team will contact you shortly.</p></div> : <><h3 className="text-2xl font-black text-[#0b1d45]">Partner application</h3><div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm font-bold text-slate-600">Full name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your name" /></label><label className="text-sm font-bold text-slate-600">Work email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="you@company.com" /></label><label className="text-sm font-bold text-slate-600 sm:col-span-2">Company name<input required name="company" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your company" /></label><label className="text-sm font-bold text-slate-600 sm:col-span-2">How can we partner?<textarea required name="message" rows="4" className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Tell us about your product and use case" /></label></div>{submitError && <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{submitError}</p>}<button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0ea99b] disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Submitting..." : <>Submit application <ArrowRight size={17} /></>}</button></>}
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default WhiteLabel;










// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import {
//   ArrowRight,
//   Blocks,
//   Boxes,
//   Building2,
//   CheckCircle2,
//   ChevronDown,
//   Code2,
//   CreditCard,
//   Cpu,
//   Headphones,
//   Layers,
//   LayoutDashboard,
//   Link2,
//   Network,
//   Palette,
//   PlugZap,
//   QrCode,
//   Rocket,
//   Smartphone,
//   Store,
//   TrendingUp,
//   Users,
//   Volume2,
//   Zap,
// } from "lucide-react";

// const MotionDiv = motion.div;
// const MotionArticle = motion.article;

// const fadeUp = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
// };

// // "Build Your Own Payment Business" — white label solutions
// const whiteLabelSolutions = [
//   { icon: QrCode, title: "White Label QR Code", description: "Branded static and dynamic QR codes for merchant collections." },
//   { icon: Volume2, title: "White Label QR Sound Box", description: "Branded payment confirmation devices for offline merchants." },
//   { icon: Smartphone, title: "White Label Merchant App", description: "A fully branded app for merchant onboarding and transactions." },
//   { icon: CreditCard, title: "White Label Payment Gateway", description: "Accept online payments under your own checkout experience." },
//   { icon: Link2, title: "White Label Payment Links", description: "Shareable, branded payment links for quick collections." },
//   { icon: LayoutDashboard, title: "White Label Business Portal", description: "A branded dashboard for merchants to manage their business." },
//   { icon: Code2, title: "White Label API Platform", description: "Expand your own product using AbheePay's API infrastructure." },
// ];

// // "Why Choose the AbheePay White Label Program?"
// const partnerBenefits = [
//   { icon: Palette, title: "Your own brand", description: "Launch products with your own company name, logo, colours, and brand identity." },
//   { icon: Zap, title: "Faster time to market", description: "Reduce development time and launch your business more quickly with our ready-to-deploy platform." },
//   { icon: TrendingUp, title: "Scalable technology", description: "Support your business as your merchant network and transaction volume grow." },
//   { icon: Users, title: "Merchant management", description: "Onboard merchants, monitor performance, and manage services from one platform." },
//   { icon: PlugZap, title: "API integration", description: "Expand your platform with Payment Gateway, Payout, BBPS, Wallet, QR, Recharge and verification APIs." },
//   { icon: Headphones, title: "Business support", description: "Get onboarding guidance, technical assistance and ongoing business support from our team." },
// ];

// // "Who Can Join?"
// const whoCanJoin = [
//   { icon: Rocket, title: "Fintech Startups" },
//   { icon: CreditCard, title: "Payment Service Providers" },
//   { icon: Building2, title: "Enterprises" },
//   { icon: Cpu, title: "Technology Companies" },
//   { icon: Network, title: "Distributor Networks" },
//   { icon: Boxes, title: "Business Groups" },
//   { icon: Store, title: "Digital Service Providers" },
//   { icon: Layers, title: "Software Companies" },
// ];

// // "How It Works" — a real 5-step sequence
// const integrationSteps = [
//   { step: "01", title: "Discuss requirements", description: "Discuss your business requirements with our team." },
//   { step: "02", title: "Choose your solutions", description: "Choose the White Label solutions you need." },
//   { step: "03", title: "Onboarding & verification", description: "Complete onboarding and business verification." },
//   { step: "04", title: "Configure your brand", description: "Configure your branding and business settings." },
//   { step: "05", title: "Launch & onboard merchants", description: "Launch your branded payment platform and start onboarding merchants." },
// ];

// const faqs = [
//   { q: "What is a White Label Program?", a: "A White Label Program allows businesses to offer products and services under their own brand while using AbheePay's technology and infrastructure." },
//   { q: "Can I use my own logo and branding?", a: "Yes. Eligible White Label solutions can be customized with your company logo, brand name, and visual identity." },
//   { q: "Which products are available as White Label solutions?", a: "White Label options are available for QR Code, QR Sound Box, Merchant App, Payment Gateway, Payment Links, Business Portal, and selected API services." },
//   { q: "Is technical support included?", a: "Yes. Our team provides onboarding assistance, technical guidance, and ongoing support throughout your partnership." },
//   { q: "How do I get started?", a: "Contact our partnership team to discuss your business goals and the White Label solutions that best fit your requirements." },
// ];

// const WhiteLabel = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState("");
//   const [openFaq, setOpenFaq] = useState(0);

//   const submitApplication = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setSubmitError("");

//     const formData = new FormData(event.currentTarget);
//     const application = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch("https://formsubmit.co/ajax/care@abheepay.com", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           ...application,
//           _subject: "New White Label Program Application",
//           _template: "table",
//         }),
//       });

//       if (!response.ok) throw new Error("Unable to submit application");
//       setSubmitted(true);
//     } catch {
//       setSubmitError("We could not submit your application right now. Please try again or contact us directly.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main className="overflow-hidden bg-[#f7fbfc] pt-14 font-sans text-[#0b1d45] lg:pt-20">
//       <Helmet>
//         <title>White Label Payment Solutions | Launch Your Own Fintech Brand | AbheePay</title>
//         <meta
//           name="description"
//           content="Launch your own branded payment business with the AbheePay White Label Program. Offer QR Code, Sound Box, Merchant App, APIs, and business solutions under your own brand."
//         />
//         <link rel="canonical" href="/partner-program/white-label" />
//         <meta property="og:title" content="White Label Payment Solutions | Launch Your Own Fintech Brand | AbheePay" />
//         <meta
//           property="og:description"
//           content="Launch your own branded payment business with the AbheePay White Label Program. Offer QR Code, Sound Box, Merchant App, APIs, and business solutions under your own brand."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="/partner-program/white-label" />
//       </Helmet>

//       {/* ---------------- Hero ---------------- */}
//       <section className="relative isolate overflow-hidden bg-[#071d48] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
//         <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(89,220,214,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(89,220,214,0.18) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
//         <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#14b8a6]/25 blur-3xl" />
//         <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//           <MotionDiv initial="hidden" animate="visible" variants={fadeUp}>
//             <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-200">
//               <Blocks size={15} /> White Label Program
//             </span>
//             <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
//               Launch your own <span className="text-[#2dd4bf]">fintech brand</span> with AbheePay.
//             </h1>
//             <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
//               Your Brand. Our Technology. Offer payment solutions, merchant services, and business
//               applications under your own company name, logo, and brand identity — without building
//               the technology from scratch.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <a href="#partner-application" className="inline-flex items-center gap-2 rounded-xl bg-[#14b8a6] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-950/40 transition hover:bg-[#0ea99b]">
//                 Launch Your Brand <ArrowRight size={17} />
//               </a>
//               <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
//                 Contact Sales
//               </Link>
//             </div>
//             <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
//               {["Your name, your logo", "Ready-to-deploy platform", "Dedicated business support"].map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2dd4bf]" />{item}</span>)}
//             </div>
//           </MotionDiv>

//           <MotionDiv initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto w-full max-w-xl">
//             <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
//               <div className="rounded-2xl bg-[#f7fbfc] p-5 text-[#0b1d45] sm:p-7">
//                 <div className="flex items-center justify-between"><span className="text-sm font-black">Your Brand Console</span><span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">Live</span></div>
//                 <div className="mt-6 grid grid-cols-2 gap-3">
//                   {[['Your brand', 'Fully custom'], ['Time to launch', '4-6 weeks']].map(([label, value]) => <div key={label} className="rounded-xl bg-white p-4 shadow-sm"><p className="text-xs text-slate-500">{label}</p><p className="mt-2 text-xl font-black">{value}</p></div>)}
//                 </div>
//                 <div className="mt-4 rounded-xl bg-[#071d48] p-5 text-white">
//                   <div className="flex items-center justify-between text-xs text-slate-300"><span>Merchant network</span><span className="font-bold text-[#2dd4bf]">Growing</span></div>
//                   <div className="mt-5 flex h-20 items-end gap-2">{[35, 55, 44, 76, 61, 90, 72, 96].map((height, index) => <span key={index} className="flex-1 rounded-t bg-[#2dd4bf]" style={{ height: `${height}%`, opacity: 0.55 + index * 0.05 }} />)}</div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 text-[#0b1d45] shadow-xl sm:block"><p className="mt-2 text-xs font-black">Launch faster</p><p className="text-xs text-slate-500">under your own brand</p></div>
//           </MotionDiv>
//         </div>
//       </section>

//       {/* ---------------- Build Your Own Payment Business ---------------- */}
//       <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto max-w-7xl">
//           <div className="max-w-2xl">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">What you can offer</p>
//             <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Build your own payment business.</h2>
//             <p className="mt-4 text-base leading-7 text-slate-500">A complete digital payment ecosystem you can customize with your brand — deliver a consistent branded experience across your products and services.</p>
//           </div>
//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {whiteLabelSolutions.map((item) => (
//               <MotionArticle key={item.title} whileHover={{ y: -6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
//                 <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#14b8a6]">{React.createElement(item.icon, { size: 23 })}</span>
//                 <h3 className="mt-5 text-lg font-black text-[#0b1d45]">{item.title}</h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
//               </MotionArticle>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Why Choose the Program ---------------- */}
//       <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto max-w-7xl">
//           <div className="max-w-2xl">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Why partner with us</p>
//             <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Why choose the AbheePay White Label Program.</h2>
//             <p className="mt-4 text-base leading-7 text-slate-500">Launching a fintech platform requires technology, infrastructure, security and ongoing maintenance. We provide the foundation so you can focus on growing your business.</p>
//           </div>
//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {partnerBenefits.map((benefit) => (
//               <MotionArticle key={benefit.title} whileHover={{ y: -6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
//                 <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#14b8a6]">{React.createElement(benefit.icon, { size: 23 })}</span>
//                 <h3 className="mt-5 text-lg font-black text-[#0b1d45]">{benefit.title}</h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">{benefit.description}</p>
//               </MotionArticle>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Who Can Join ---------------- */}
//       <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto max-w-7xl">
//           <div className="max-w-2xl">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Who can join</p>
//             <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Built for businesses ready to grow.</h2>
//             <p className="mt-4 text-base leading-7 text-slate-500">Whether you're launching a new fintech business or expanding your existing services, the White Label Program provides the technology and flexibility to support your growth.</p>
//           </div>
//           <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//             {whoCanJoin.map((item) => (
//               <div key={item.title} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f7fbfc] p-4">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#14b8a6]">{React.createElement(item.icon, { size: 20 })}</span>
//                 <span className="text-sm font-bold text-[#0b1d45]">{item.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- How It Works ---------------- */}
//       <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto max-w-7xl">
//           <div className="text-center">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Getting started</p>
//             <h2 className="mt-3 text-3xl font-black text-[#0b1d45] sm:text-4xl">How it works.</h2>
//           </div>
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
//             {integrationSteps.map((item) => (
//               <div key={item.step} className="relative rounded-2xl border border-slate-200 bg-white p-6">
//                 <span className="text-4xl font-black text-slate-100">{item.step}</span>
//                 <h3 className="mt-5 text-base font-black text-[#0b1d45]">{item.title}</h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- FAQ ---------------- */}
//       <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto max-w-3xl">
//           <h2 className="text-center text-3xl font-black text-[#0b1d45] sm:text-4xl">Frequently asked questions.</h2>
//           <div className="mt-10 space-y-3">
//             {faqs.map((f, i) => {
//               const isOpen = openFaq === i;
//               return (
//                 <div key={f.q} className="overflow-hidden rounded-2xl border border-slate-200">
//                   <button
//                     onClick={() => setOpenFaq(isOpen ? -1 : i)}
//                     className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
//                   >
//                     <span className="text-sm font-bold text-[#0b1d45] sm:text-base">{f.q}</span>
//                     <ChevronDown size={20} className={`shrink-0 text-[#14b8a6] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
//                   </button>
//                   {isOpen && (
//                     <p className="px-6 pb-4 text-sm leading-6 text-slate-500">{f.a}</p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Partner Application ---------------- */}
//       <section id="partner-application" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#0b1d45] shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
//           <div className="p-8 text-white sm:p-12">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#5eead4]">Let's build together</p>
//             <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">Start your White Label journey.</h2>
//             <p className="mt-5 leading-7 text-slate-300">Tell us about your business. Our partnership team will be in touch to discuss the White Label solutions that best fit your requirements.</p>
//             <div className="mt-10 space-y-4 text-sm text-slate-200">
//               <p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Built for fintech startups, PSPs, enterprises and distributors</p>
//               <p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Your own name, logo and brand identity from day one</p>
//             </div>
//           </div>
//           <form onSubmit={submitApplication} className="bg-white p-8 sm:p-12">
//             {submitted ? (
//               <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
//                 <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-[#14b8a6]"><CheckCircle2 size={30} /></span>
//                 <h3 className="mt-5 text-2xl font-black text-[#0b1d45]">Thanks for your interest!</h3>
//                 <p className="mt-2 max-w-sm text-sm text-slate-500">Our partnership team will contact you shortly to discuss your White Label launch.</p>
//               </div>
//             ) : (
//               <>
//                 <h3 className="text-2xl font-black text-[#0b1d45]">White Label application</h3>
//                 <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                   <label className="text-sm font-bold text-slate-600">Full name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your name" /></label>
//                   <label className="text-sm font-bold text-slate-600">Work email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="you@company.com" /></label>
//                   <label className="text-sm font-bold text-slate-600 sm:col-span-2">Company name<input required name="company" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your company" /></label>
//                   <label className="text-sm font-bold text-slate-600 sm:col-span-2">Which White Label solutions do you need?<textarea required name="message" rows="4" className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Tell us about your business and the solutions you're interested in" /></label>
//                 </div>
//                 {submitError && <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{submitError}</p>}
//                 <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0ea99b] disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Submitting..." : <>Submit application <ArrowRight size={17} /></>}</button>
//               </>
//             )}
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default WhiteLabel;















// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import {
//   ArrowRight,
//   Blocks,
//   Boxes,
//   Building2,
//   CheckCircle2,
//   ChevronDown,
//   Code2,
//   CreditCard,
//   Cpu,
//   Headphones,
//   Layers,
//   LayoutDashboard,
//   Link2,
//   Network,
//   Palette,
//   PlugZap,
//   QrCode,
//   Rocket,
//   Smartphone,
//   Store,
//   TrendingUp,
//   Users,
//   Volume2,
//   Zap,
// } from "lucide-react";

// const MotionDiv = motion.div;
// const MotionArticle = motion.article;

// const fadeUp = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
// };

// // "Build Your Own Payment Business" — white label solutions
// const whiteLabelSolutions = [
//   { icon: QrCode, title: "White Label QR Code", description: "Branded static and dynamic QR codes for merchant collections." },
//   { icon: Volume2, title: "White Label QR Sound Box", description: "Branded payment confirmation devices for offline merchants." },
//   { icon: Smartphone, title: "White Label Merchant App", description: "A fully branded app for merchant onboarding and transactions." },
//   { icon: CreditCard, title: "White Label Payment Gateway", description: "Accept online payments under your own checkout experience." },
//   { icon: Link2, title: "White Label Payment Links", description: "Shareable, branded payment links for quick collections." },
//   { icon: LayoutDashboard, title: "White Label Business Portal", description: "A branded dashboard for merchants to manage their business." },
//   { icon: Code2, title: "White Label API Platform", description: "Expand your own product using AbheePay's API infrastructure." },
// ];

// // "Why Choose the AbheePay White Label Program?"
// const partnerBenefits = [
//   { icon: Palette, title: "Your own brand", description: "Launch products with your own company name, logo, colours, and brand identity." },
//   { icon: Zap, title: "Faster time to market", description: "Reduce development time and launch your business more quickly with our ready-to-deploy platform." },
//   { icon: TrendingUp, title: "Scalable technology", description: "Support your business as your merchant network and transaction volume grow." },
//   { icon: Users, title: "Merchant management", description: "Onboard merchants, monitor performance, and manage services from one platform." },
//   { icon: PlugZap, title: "API integration", description: "Expand your platform with Payment Gateway, Payout, BBPS, Wallet, QR, Recharge and verification APIs." },
//   { icon: Headphones, title: "Business support", description: "Get onboarding guidance, technical assistance and ongoing business support from our team." },
// ];

// // "Who Can Join?"
// const whoCanJoin = [
//   { icon: Rocket, title: "Fintech Startups" },
//   { icon: CreditCard, title: "Payment Service Providers" },
//   { icon: Building2, title: "Enterprises" },
//   { icon: Cpu, title: "Technology Companies" },
//   { icon: Network, title: "Distributor Networks" },
//   { icon: Boxes, title: "Business Groups" },
//   { icon: Store, title: "Digital Service Providers" },
//   { icon: Layers, title: "Software Companies" },
// ];

// // "How It Works" — a real 5-step sequence
// const integrationSteps = [
//   { step: "01", title: "Discuss requirements", description: "Discuss your business requirements with our team." },
//   { step: "02", title: "Choose your solutions", description: "Choose the White Label solutions you need." },
//   { step: "03", title: "Onboarding & verification", description: "Complete onboarding and business verification." },
//   { step: "04", title: "Configure your brand", description: "Configure your branding and business settings." },
//   { step: "05", title: "Launch & onboard merchants", description: "Launch your branded payment platform and start onboarding merchants." },
// ];

// const faqs = [
//   { q: "What is a White Label Program?", a: "A White Label Program allows businesses to offer products and services under their own brand while using AbheePay's technology and infrastructure." },
//   { q: "Can I use my own logo and branding?", a: "Yes. Eligible White Label solutions can be customized with your company logo, brand name, and visual identity." },
//   { q: "Which products are available as White Label solutions?", a: "White Label options are available for QR Code, QR Sound Box, Merchant App, Payment Gateway, Payment Links, Business Portal, and selected API services." },
//   { q: "Is technical support included?", a: "Yes. Our team provides onboarding assistance, technical guidance, and ongoing support throughout your partnership." },
//   { q: "How do I get started?", a: "Contact our partnership team to discuss your business goals and the White Label solutions that best fit your requirements." },
// ];

// const WhiteLabel = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState("");
//   const [openFaq, setOpenFaq] = useState(0);

//   const submitApplication = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setSubmitError("");

//     const formData = new FormData(event.currentTarget);
//     const application = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch("https://formsubmit.co/ajax/care@abheepay.com", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           ...application,
//           _subject: "New White Label Program Application",
//           _template: "table",
//         }),
//       });

//       if (!response.ok) throw new Error("Unable to submit application");
//       setSubmitted(true);
//     } catch {
//       setSubmitError("We could not submit your application right now. Please try again or contact us directly.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <main className="w-full min-h-screen overflow-x-hidden bg-[#f7fbfc] pt-14 font-sans text-[#0b1d45] lg:pt-20">
//       <Helmet>
//         <title>White Label Payment Solutions | Launch Your Own Fintech Brand | AbheePay</title>
//         <meta
//           name="description"
//           content="Launch your own branded payment business with the AbheePay White Label Program. Offer QR Code, Sound Box, Merchant App, APIs, and business solutions under your own brand."
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
//         <link rel="canonical" href="/partner-program/white-label" />
//         <meta property="og:title" content="White Label Payment Solutions | Launch Your Own Fintech Brand | AbheePay" />
//         <meta
//           property="og:description"
//           content="Launch your own branded payment business with the AbheePay White Label Program. Offer QR Code, Sound Box, Merchant App, APIs, and business solutions under your own brand."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="/partner-program/white-label" />
//       </Helmet>

//       {/* ---------------- Hero ---------------- */}
//       <section className="relative isolate w-full overflow-hidden bg-[#f7fbfc] px-5 py-16 text-[#0b1d45] sm:px-8 lg:px-12 lg:py-24">
//         <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(20,184,166,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.12) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
//         <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#14b8a6]/15 blur-3xl" />
//         <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

//         <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
//           <MotionDiv initial="hidden" animate="visible" variants={fadeUp}>
//             <span className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
//               <Blocks size={15} /> White Label Program
//             </span>
//             <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
//               Launch your own <span className="text-[#14b8a6]">fintech brand</span> with AbheePay.
//             </h1>
//             <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
//               Your Brand. Our Technology. Offer payment solutions, merchant services, and business
//               applications under your own company name, logo, and brand identity — without building
//               the technology from scratch.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <a href="#partner-application" className="inline-flex items-center gap-2 rounded-xl bg-[#14b8a6] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-950/10 transition hover:bg-[#0ea99b]">
//                 Launch Your Brand <ArrowRight size={17} />
//               </a>
//               <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-[#0b1d45] transition hover:bg-slate-100">
//                 Contact Sales
//               </Link>
//             </div>
//             <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
//               {["Your name, your logo", "Ready-to-deploy platform", "Dedicated business support"].map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#14b8a6]" />{item}</span>)}
//             </div>
//           </MotionDiv>

//           <MotionDiv initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto w-full max-w-xl">
//             <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl sm:p-6">
//               <div className="rounded-2xl bg-[#f7fbfc] p-5 text-[#0b1d45] sm:p-7">
//                 <div className="flex items-center justify-between"><span className="text-sm font-black">Your Brand Console</span><span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">Live</span></div>
//                 <div className="mt-6 grid grid-cols-2 gap-3">
//                   {[['Your brand', 'Fully custom'], ['Time to launch', '4-6 weeks']].map(([label, value]) => <div key={label} className="rounded-xl bg-white p-4 shadow-sm"><p className="text-xs text-slate-500">{label}</p><p className="mt-2 text-xl font-black">{value}</p></div>)}
//                 </div>
//                 <div className="mt-4 rounded-xl bg-[#0b1d45] p-5 text-white">
//                   <div className="flex items-center justify-between text-xs text-slate-300"><span>Merchant network</span><span className="font-bold text-[#2dd4bf]">Growing</span></div>
//                   <div className="mt-5 flex h-20 items-end gap-2">{[35, 55, 44, 76, 61, 90, 72, 96].map((height, index) => <span key={index} className="flex-1 rounded-t bg-[#2dd4bf]" style={{ height: `${height}%`, opacity: 0.55 + index * 0.05 }} />)}</div>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 text-[#0b1d45] shadow-xl border border-slate-200 sm:block"><p className="mt-2 text-xs font-black">Launch faster</p><p className="text-xs text-slate-500">under your own brand</p></div>
//           </MotionDiv>
//         </div>
//       </section>

//       {/* ---------------- Build Your Own Payment Business ---------------- */}
//       <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto w-full max-w-7xl">
//           <div className="max-w-2xl">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">What you can offer</p>
//             <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Build your own payment business.</h2>
//             <p className="mt-4 text-base leading-7 text-slate-500">A complete digital payment ecosystem you can customize with your brand — deliver a consistent branded experience across your products and services.</p>
//           </div>
//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {whiteLabelSolutions.map((item) => (
//               <MotionArticle key={item.title} whileHover={{ y: -6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
//                 <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#14b8a6]">{React.createElement(item.icon, { size: 23 })}</span>
//                 <h3 className="mt-5 text-lg font-black text-[#0b1d45]">{item.title}</h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
//               </MotionArticle>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Why Choose the Program ---------------- */}
//       <section className="w-full px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto w-full max-w-7xl">
//           <div className="max-w-2xl">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Why partner with us</p>
//             <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Why choose the AbheePay White Label Program.</h2>
//             <p className="mt-4 text-base leading-7 text-slate-500">Launching a fintech platform requires technology, infrastructure, security and ongoing maintenance. We provide the foundation so you can focus on growing your business.</p>
//           </div>
//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {partnerBenefits.map((benefit) => (
//               <MotionArticle key={benefit.title} whileHover={{ y: -6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
//                 <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#14b8a6]">{React.createElement(benefit.icon, { size: 23 })}</span>
//                 <h3 className="mt-5 text-lg font-black text-[#0b1d45]">{benefit.title}</h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">{benefit.description}</p>
//               </MotionArticle>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Who Can Join ---------------- */}
//       <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto w-full max-w-7xl">
//           <div className="max-w-2xl">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Who can join</p>
//             <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Built for businesses ready to grow.</h2>
//             <p className="mt-4 text-base leading-7 text-slate-500">Whether you're launching a new fintech business or expanding your existing services, the White Label Program provides the technology and flexibility to support your growth.</p>
//           </div>
//           <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//             {whoCanJoin.map((item) => (
//               <div key={item.title} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f7fbfc] p-4">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#14b8a6]">{React.createElement(item.icon, { size: 20 })}</span>
//                 <span className="text-sm font-bold text-[#0b1d45]">{item.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- How It Works ---------------- */}
//       <section className="w-full px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto w-full max-w-7xl">
//           <div className="text-center">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Getting started</p>
//             <h2 className="mt-3 text-3xl font-black text-[#0b1d45] sm:text-4xl">How it works.</h2>
//           </div>
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
//             {integrationSteps.map((item) => (
//               <div key={item.step} className="relative rounded-2xl border border-slate-200 bg-white p-6">
//                 <span className="text-4xl font-black text-slate-100">{item.step}</span>
//                 <h3 className="mt-5 text-base font-black text-[#0b1d45]">{item.title}</h3>
//                 <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- FAQ ---------------- */}
//       <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto w-full max-w-3xl">
//           <h2 className="text-center text-3xl font-black text-[#0b1d45] sm:text-4xl">Frequently asked questions.</h2>
//           <div className="mt-10 space-y-3">
//             {faqs.map((f, i) => {
//               const isOpen = openFaq === i;
//               return (
//                 <div key={f.q} className="overflow-hidden rounded-2xl border border-slate-200">
//                   <button
//                     onClick={() => setOpenFaq(isOpen ? -1 : i)}
//                     className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
//                   >
//                     <span className="text-sm font-bold text-[#0b1d45] sm:text-base">{f.q}</span>
//                     <ChevronDown size={20} className={`shrink-0 text-[#14b8a6] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
//                   </button>
//                   {isOpen && (
//                     <p className="px-6 pb-4 text-sm leading-6 text-slate-500">{f.a}</p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Partner Application ---------------- */}
//       <section id="partner-application" className="w-full px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
//         <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-[2rem] bg-[#0b1d45] shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
//           <div className="p-8 text-white sm:p-12">
//             <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#5eead4]">Let's build together</p>
//             <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">Start your White Label journey.</h2>
//             <p className="mt-5 leading-7 text-slate-300">Tell us about your business. Our partnership team will be in touch to discuss the White Label solutions that best fit your requirements.</p>
//             <div className="mt-10 space-y-4 text-sm text-slate-200">
//               <p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Built for fintech startups, PSPs, enterprises and distributors</p>
//               <p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Your own name, logo and brand identity from day one</p>
//             </div>
//           </div>
//           <form onSubmit={submitApplication} className="bg-white p-8 sm:p-12">
//             {submitted ? (
//               <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
//                 <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-[#14b8a6]"><CheckCircle2 size={30} /></span>
//                 <h3 className="mt-5 text-2xl font-black text-[#0b1d45]">Thanks for your interest!</h3>
//                 <p className="mt-2 max-w-sm text-sm text-slate-500">Our partnership team will contact you shortly to discuss your White Label launch.</p>
//               </div>
//             ) : (
//               <>
//                 <h3 className="text-2xl font-black text-[#0b1d45]">White Label application</h3>
//                 <div className="mt-6 grid gap-4 sm:grid-cols-2">
//                   <label className="text-sm font-bold text-slate-600">Full name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your name" /></label>
//                   <label className="text-sm font-bold text-slate-600">Work email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="you@company.com" /></label>
//                   <label className="text-sm font-bold text-slate-600 sm:col-span-2">Company name<input required name="company" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your company" /></label>
//                   <label className="text-sm font-bold text-slate-600 sm:col-span-2">Which White Label solutions do you need?<textarea required name="message" rows="4" className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Tell us about your business and the solutions you're interested in" /></label>
//                 </div>
//                 {submitError && <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{submitError}</p>}
//                 <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0ea99b] disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Submitting..." : <>Submit application <ArrowRight size={17} /></>}</button>
//               </>
//             )}
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default WhiteLabel;











import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Blocks,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronDown,
  Code2,
  CreditCard,
  Cpu,
  Headphones,
  Layers,
  LayoutDashboard,
  Link2,
  Network,
  Palette,
  PlugZap,
  QrCode,
  Rocket,
  Smartphone,
  Store,
  TrendingUp,
  Users,
  Volume2,
  Zap,
} from "lucide-react";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

// "Build Your Own Payment Business" — white label solutions
const whiteLabelSolutions = [
  { icon: QrCode, title: "White Label QR Code", description: "Branded static and dynamic QR codes for merchant collections." },
  { icon: Volume2, title: "White Label QR Sound Box", description: "Branded payment confirmation devices for offline merchants." },
  { icon: Smartphone, title: "White Label Merchant App", description: "A fully branded app for merchant onboarding and transactions." },
  { icon: CreditCard, title: "White Label Payment Gateway", description: "Accept online payments under your own checkout experience." },
  { icon: Link2, title: "White Label Payment Links", description: "Shareable, branded payment links for quick collections." },
  { icon: LayoutDashboard, title: "White Label Business Portal", description: "A branded dashboard for merchants to manage their business." },
  { icon: Code2, title: "White Label API Platform", description: "Expand your own product using AbheePay's API infrastructure." },
];

// "Why Choose the AbheePay White Label Program?"
const partnerBenefits = [
  { icon: Palette, title: "Your own brand", description: "Launch products with your own company name, logo, colours, and brand identity." },
  { icon: Zap, title: "Faster time to market", description: "Reduce development time and launch your business more quickly with our ready-to-deploy platform." },
  { icon: TrendingUp, title: "Scalable technology", description: "Support your business as your merchant network and transaction volume grow." },
  { icon: Users, title: "Merchant management", description: "Onboard merchants, monitor performance, and manage services from one platform." },
  { icon: PlugZap, title: "API integration", description: "Expand your platform with Payment Gateway, Payout, BBPS, Wallet, QR, Recharge and verification APIs." },
  { icon: Headphones, title: "Business support", description: "Get onboarding guidance, technical assistance and ongoing business support from our team." },
];

// "Who Can Join?"
const whoCanJoin = [
  { icon: Rocket, title: "Fintech Startups" },
  { icon: CreditCard, title: "Payment Service Providers" },
  { icon: Building2, title: "Enterprises" },
  { icon: Cpu, title: "Technology Companies" },
  { icon: Network, title: "Distributor Networks" },
  { icon: Boxes, title: "Business Groups" },
  { icon: Store, title: "Digital Service Providers" },
  { icon: Layers, title: "Software Companies" },
];

// "How It Works" — a real 5-step sequence
const integrationSteps = [
  { step: "01", title: "Discuss requirements", description: "Discuss your business requirements with our team." },
  { step: "02", title: "Choose your solutions", description: "Choose the White Label solutions you need." },
  { step: "03", title: "Onboarding & verification", description: "Complete onboarding and business verification." },
  { step: "04", title: "Configure your brand", description: "Configure your branding and business settings." },
  { step: "05", title: "Launch & onboard merchants", description: "Launch your branded payment platform and start onboarding merchants." },
];

const faqs = [
  { q: "What is a White Label Program?", a: "A White Label Program allows businesses to offer products and services under their own brand while using AbheePay's technology and infrastructure." },
  { q: "Can I use my own logo and branding?", a: "Yes. Eligible White Label solutions can be customized with your company logo, brand name, and visual identity." },
  { q: "Which products are available as White Label solutions?", a: "White Label options are available for QR Code, QR Sound Box, Merchant App, Payment Gateway, Payment Links, Business Portal, and selected API services." },
  { q: "Is technical support included?", a: "Yes. Our team provides onboarding assistance, technical guidance, and ongoing support throughout your partnership." },
  { q: "How do I get started?", a: "Contact our partnership team to discuss your business goals and the White Label solutions that best fit your requirements." },
];

const WhiteLabel = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const submitApplication = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);
    const application = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/care@abheepay.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...application,
          _subject: "New White Label Program Application",
          _template: "table",
        }),
      });

      if (!response.ok) throw new Error("Unable to submit application");
      setSubmitted(true);
    } catch {
      setSubmitError("We could not submit your application right now. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#f7fbfc] pt-14 font-sans text-[#0b1d45] lg:pt-20">
      <Helmet>
        <title>White Label Payment Solutions | Launch Your Own Fintech Brand | AbheePay</title>
        <meta
          name="description"
          content="Launch your own branded payment business with the AbheePay White Label Program. Offer QR Code, Sound Box, Merchant App, APIs, and business solutions under your own brand."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="/partner-program/white-label" />
        <meta property="og:title" content="White Label Payment Solutions | Launch Your Own Fintech Brand | AbheePay" />
        <meta
          property="og:description"
          content="Launch your own branded payment business with the AbheePay White Label Program. Offer QR Code, Sound Box, Merchant App, APIs, and business solutions under your own brand."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/partner-program/white-label" />
      </Helmet>

      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate w-full overflow-hidden bg-[#f7fbfc] px-5 py-16 text-[#0b1d45] sm:px-8 lg:px-12 lg:py-24 xl:px-20 2xl:px-28">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(20,184,166,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.12) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#14b8a6]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-[1920px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionDiv initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
              <Blocks size={15} /> White Label Program
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Launch your own <span className="text-[#14b8a6]">fintech brand</span> with AbheePay.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Your Brand. Our Technology. Offer payment solutions, merchant services, and business
              applications under your own company name, logo, and brand identity — without building
              the technology from scratch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#partner-application" className="inline-flex items-center gap-2 rounded-xl bg-[#14b8a6] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-950/10 transition hover:bg-[#0ea99b]">
                Launch Your Brand <ArrowRight size={17} />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-[#0b1d45] transition hover:bg-slate-100">
                Contact Sales
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
              {["Your name, your logo", "Ready-to-deploy platform", "Dedicated business support"].map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#14b8a6]" />{item}</span>)}
            </div>
          </MotionDiv>

          <MotionDiv initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl sm:p-6">
              <div className="rounded-2xl bg-[#f7fbfc] p-5 text-[#0b1d45] sm:p-7">
                <div className="flex items-center justify-between"><span className="text-sm font-black">Your Brand Console</span><span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">Live</span></div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[['Your brand', 'Fully custom'], ['Time to launch', '4-6 weeks']].map(([label, value]) => <div key={label} className="rounded-xl bg-white p-4 shadow-sm"><p className="text-xs text-slate-500">{label}</p><p className="mt-2 text-xl font-black">{value}</p></div>)}
                </div>
                <div className="mt-4 rounded-xl bg-[#0b1d45] p-5 text-white">
                  <div className="flex items-center justify-between text-xs text-slate-300"><span>Merchant network</span><span className="font-bold text-[#2dd4bf]">Growing</span></div>
                  <div className="mt-5 flex h-20 items-end gap-2">{[35, 55, 44, 76, 61, 90, 72, 96].map((height, index) => <span key={index} className="flex-1 rounded-t bg-[#2dd4bf]" style={{ height: `${height}%`, opacity: 0.55 + index * 0.05 }} />)}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 text-[#0b1d45] shadow-xl border border-slate-200 sm:block"><p className="mt-2 text-xs font-black">Launch faster</p><p className="text-xs text-slate-500">under your own brand</p></div>
          </MotionDiv>
        </div>
      </section>

      {/* ---------------- Build Your Own Payment Business ---------------- */}
      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-20 2xl:px-28">
        <div className="mx-auto w-full max-w-[1920px]">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">What you can offer</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Build your own payment business.</h2>
            <p className="mt-4 text-base leading-7 text-slate-500">A complete digital payment ecosystem you can customize with your brand — deliver a consistent branded experience across your products and services.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {whiteLabelSolutions.map((item) => (
              <MotionArticle key={item.title} whileHover={{ y: -6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#14b8a6]">{React.createElement(item.icon, { size: 23 })}</span>
                <h3 className="mt-5 text-lg font-black text-[#0b1d45]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
              </MotionArticle>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why Choose the Program ---------------- */}
      <section className="w-full px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-20 2xl:px-28">
        <div className="mx-auto w-full max-w-[1920px]">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Why partner with us</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Why choose the AbheePay White Label Program.</h2>
            <p className="mt-4 text-base leading-7 text-slate-500">Launching a fintech platform requires technology, infrastructure, security and ongoing maintenance. We provide the foundation so you can focus on growing your business.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map((benefit) => (
              <MotionArticle key={benefit.title} whileHover={{ y: -6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#14b8a6]">{React.createElement(benefit.icon, { size: 23 })}</span>
                <h3 className="mt-5 text-lg font-black text-[#0b1d45]">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{benefit.description}</p>
              </MotionArticle>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Who Can Join ---------------- */}
      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-20 2xl:px-28">
        <div className="mx-auto w-full max-w-[1920px]">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Who can join</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Built for businesses ready to grow.</h2>
            <p className="mt-4 text-base leading-7 text-slate-500">Whether you're launching a new fintech business or expanding your existing services, the White Label Program provides the technology and flexibility to support your growth.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8">
            {whoCanJoin.map((item) => (
              <div key={item.title} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f7fbfc] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-[#14b8a6]">{React.createElement(item.icon, { size: 20 })}</span>
                <span className="text-sm font-bold text-[#0b1d45]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- How It Works ---------------- */}
      <section className="w-full px-5 py-16 sm:px-8 lg:px-12 lg:py-24 xl:px-20 2xl:px-28">
        <div className="mx-auto w-full max-w-[1920px]">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Getting started</p>
            <h2 className="mt-3 text-3xl font-black text-[#0b1d45] sm:text-4xl">How it works.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {integrationSteps.map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-4xl font-black text-slate-100">{item.step}</span>
                <h3 className="mt-5 text-base font-black text-[#0b1d45]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="text-center text-3xl font-black text-[#0b1d45] sm:text-4xl">Frequently asked questions.</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="overflow-hidden rounded-2xl border border-slate-200">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="text-sm font-bold text-[#0b1d45] sm:text-base">{f.q}</span>
                    <ChevronDown size={20} className={`shrink-0 text-[#14b8a6] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-4 text-sm leading-6 text-slate-500">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Partner Application ---------------- */}
      <section id="partner-application" className="w-full px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b1d45] shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-8 text-white sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#5eead4]">Let's build together</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">Start your White Label journey.</h2>
            <p className="mt-5 leading-7 text-slate-300">Tell us about your business. Our partnership team will be in touch to discuss the White Label solutions that best fit your requirements.</p>
            <div className="mt-10 space-y-4 text-sm text-slate-200">
              <p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Built for fintech startups, PSPs, enterprises and distributors</p>
              <p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Your own name, logo and brand identity from day one</p>
            </div>
          </div>
          <form onSubmit={submitApplication} className="bg-white p-8 sm:p-12">
            {submitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-[#14b8a6]"><CheckCircle2 size={30} /></span>
                <h3 className="mt-5 text-2xl font-black text-[#0b1d45]">Thanks for your interest!</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-500">Our partnership team will contact you shortly to discuss your White Label launch.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-[#0b1d45]">White Label application</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-bold text-slate-600">Full name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your name" /></label>
                  <label className="text-sm font-bold text-slate-600">Work email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="you@company.com" /></label>
                  <label className="text-sm font-bold text-slate-600 sm:col-span-2">Company name<input required name="company" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your company" /></label>
                  <label className="text-sm font-bold text-slate-600 sm:col-span-2">Which White Label solutions do you need?<textarea required name="message" rows="4" className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Tell us about your business and the solutions you're interested in" /></label>
                </div>
                {submitError && <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{submitError}</p>}
                <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0ea99b] disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Submitting..." : <>Submit application <ArrowRight size={17} /></>}</button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default WhiteLabel;