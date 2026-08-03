import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Building2,
  CheckCircle2,
  Code2,
  Headphones,
  PlugZap,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const MotionDiv = motion.div;
const MotionArticle = motion.article;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const partnerBenefits = [
  { icon: PlugZap, title: "Powerful API suite", description: "Connect payment, banking and collection capabilities through reliable APIs." },
  { icon: ShieldCheck, title: "Built for trust", description: "Security-first workflows and dependable infrastructure for every integration." },
  { icon: BarChart3, title: "Grow together", description: "Create scalable revenue opportunities for your platform and customers." },
  { icon: Headphones, title: "Dedicated support", description: "Work with a team that supports your integration journey from launch to scale." },
];

const integrationSteps = [
  { icon: Building2, step: "01", title: "Tell us about your business", description: "Share your product, use case and partnership goals." },
  { icon: Workflow, step: "02", title: "Plan your integration", description: "Our team helps identify the right APIs and commercial model." },
  { icon: Code2, step: "03", title: "Build and launch", description: "Integrate, test and take your fintech solution to market." },
];

const TechnologyPartner = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
          _subject: "New Technology Partner Application",
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
    <main className="overflow-hidden bg-[#f7fbfc] pt-14 font-sans text-[#0b1d45] lg:pt-20">
      <section className="relative isolate overflow-hidden bg-[#071d48] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(89,220,214,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(89,220,214,0.18) 1px, transparent 1px)", backgroundSize: "52px 52px" }} />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#14b8a6]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionDiv initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-200">
              <Blocks size={15} /> Technology Partner Program
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Build the future of <span className="text-[#2dd4bf]">digital finance</span> with us.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Power your applications with AbheePay's secure payment, banking, and fintech APIs—built for seamless integration, scalability, and reliability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#partner-application" className="inline-flex items-center gap-2 rounded-xl bg-[#14b8a6] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-950/40 transition hover:bg-[#0ea99b]">
                Become a Partner <ArrowRight size={17} />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">
                Talk to our team
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
              {["Fast onboarding", "API-first platform", "Partner-led support"].map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-[#2dd4bf]" />{item}</span>)}
            </div>
          </MotionDiv>

          <MotionDiv initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
              <div className="rounded-2xl bg-[#f7fbfc] p-5 text-[#0b1d45] sm:p-7">
                <div className="flex items-center justify-between"><span className="text-sm font-black">Partner Console</span><span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-700">Connected</span></div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[['API uptime', '99.99%'], ['Monthly volume', '₹500 Cr+']].map(([label, value]) => <div key={label} className="rounded-xl bg-white p-4 shadow-sm"><p className="text-xs text-slate-500">{label}</p><p className="mt-2 text-xl font-black">{value}</p></div>)}
                </div>
                <div className="mt-4 rounded-xl bg-[#071d48] p-5 text-white">
                  <div className="flex items-center justify-between text-xs text-slate-300"><span>Integration health</span><span className="font-bold text-[#2dd4bf]">Excellent</span></div>
                  <div className="mt-5 flex h-20 items-end gap-2">{[35, 55, 44, 76, 61, 90, 72, 96].map((height, index) => <span key={index} className="flex-1 rounded-t bg-[#2dd4bf]" style={{ height: `${height}%`, opacity: 0.55 + index * 0.05 }} />)}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 text-[#0b1d45] shadow-xl sm:block"><p className="mt-2 text-xs font-black">Launch faster</p><p className="text-xs text-slate-500">with one integration</p></div>
          </MotionDiv>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Why partner with us</p><h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1d45] sm:text-4xl">Everything you need to create a better fintech experience.</h2></div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerBenefits.map((benefit) => <MotionArticle key={benefit.title} whileHover={{ y: -6 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#14b8a6]">{React.createElement(benefit.icon, { size: 23 })}</span><h3 className="mt-5 text-lg font-black text-[#0b1d45]">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{benefit.description}</p></MotionArticle>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14b8a6]">Simple process</p><h2 className="mt-3 text-3xl font-black text-[#0b1d45] sm:text-4xl">From idea to integration in three steps.</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{integrationSteps.map((item) => <div key={item.step} className="relative rounded-2xl border border-slate-200 p-7"><span className="text-5xl font-black text-slate-100">{item.step}</span><span className="absolute right-7 top-7 text-[#14b8a6]">{React.createElement(item.icon, { size: 30 })}</span><h3 className="mt-7 text-xl font-black text-[#0b1d45]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p></div>)}</div></div>
      </section>

      <section id="partner-application" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#0b1d45] shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-8 text-white sm:p-12"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#5eead4]">Let's build together</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">Start your technology partnership.</h2><p className="mt-5 leading-7 text-slate-300">Tell us about your platform. Our partnership team will be in touch to discuss the best path forward.</p><div className="mt-10 space-y-4 text-sm text-slate-200"><p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Built for fintech platforms, ISVs and solution providers</p><p className="flex gap-3"><CheckCircle2 className="shrink-0 text-[#2dd4bf]" size={19} />Commercial models designed for sustainable growth</p></div></div>
          <form onSubmit={submitApplication} className="bg-white p-8 sm:p-12">
            {submitted ? <div className="flex min-h-[300px] flex-col items-center justify-center text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-[#14b8a6]"><CheckCircle2 size={30} /></span><h3 className="mt-5 text-2xl font-black text-[#0b1d45]">Thanks for your interest!</h3><p className="mt-2 max-w-sm text-sm text-slate-500">Our technology partnership team will contact you shortly.</p></div> : <><h3 className="text-2xl font-black text-[#0b1d45]">Partner application</h3><div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm font-bold text-slate-600">Full name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your name" /></label><label className="text-sm font-bold text-slate-600">Work email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="you@company.com" /></label><label className="text-sm font-bold text-slate-600 sm:col-span-2">Company name<input required name="company" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Your company" /></label><label className="text-sm font-bold text-slate-600 sm:col-span-2">How can we partner?<textarea required name="message" rows="4" className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-[#14b8a6]" placeholder="Tell us about your product and use case" /></label></div>{submitError && <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{submitError}</p>}<button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#14b8a6] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0ea99b] disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Submitting..." : <>Submit application <ArrowRight size={17} /></>}</button></>}
          </form>
        </div>
      </section>
    </main>
  );
};

export default TechnologyPartner;
