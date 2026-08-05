import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  LayoutGrid,
  Rocket,
  Zap,
  Globe,
  Users,
  CheckCircle2,
  Star,
  CreditCard,
  Smartphone,
  FileText,
  Headphones,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Overview = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Secure partner platform",
      description: "Bank-grade security, compliance-ready workflows and reliable API uptime.",
    },
    {
      icon: LayoutGrid,
      title: "Unified fintech suite",
      description: "Payments, QR, wallet services and partner dashboards in one integrated stack.",
    },
    {
      icon: Rocket,
      title: "Launch faster",
      description: "Rapid onboarding and simple integration for distributors, retailers and technology partners.",
    },
    {
      icon: Headphones,
      title: "Dedicated support",
      description: "Onboarding, technical guidance and partner care available 24/7.",
    },
  ];

  const metrics = [
    { label: "Active partners", value: "2,500+", icon: Users },
    { label: "Monthly transactions", value: "₹475 Cr+", icon: CreditCard },
    { label: "API uptime", value: "99.99%", icon: CheckCircle2 },
  ];

  const steps = [
    {
      step: "01",
      title: "Connect with our team",
      description: "Share your business goals and partner model to find the right fit.",
    },
    {
      step: "02",
      title: "Plan your integration",
      description: "Choose the API products, pricing and onboarding path that suits your channel.",
    },
    {
      step: "03",
      title: "Go live and grow",
      description: "Launch quickly, track performance and expand with AbheePay partner rewards.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white font-sans text-[#0b1d45]">
      <section className="relative overflow-hidden bg-[#071d48] text-white pt-28 pb-24 sm:pt-32 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.18),_transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-200">
                <ShieldCheck size={16} /> Partner Overview
              </span>
              <div className="space-y-5">
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                  Grow your business with a trusted <span className="text-[#2DD4BF]">AbheePay partner ecosystem</span>.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                  Discover how distributors, retailers and technology partners use AbheePay's secure payments, smart APIs and partner-first support to accelerate revenue and scale operations.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/join-as-distributor" className="inline-flex items-center justify-center rounded-full bg-[#2DD4BF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-200/60 transition hover:bg-[#14b8a6]">
                  Become a Partner <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-teal-300/40 hover:bg-white/15">
                  Talk to our team
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => {
                  const MetricIcon = metric.icon;
                  return (
                    <div key={metric.label} className="rounded-3xl bg-white/10 p-5 backdrop-blur-xl">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#2DD4BF] shadow-sm">
                        <MetricIcon size={20} />
                      </div>
                      <p className="mt-4 text-3xl font-black leading-none">{metric.value}</p>
                      <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-slate-900/20 sm:p-7">
              <div className="absolute -right-8 top-4 h-32 w-32 rounded-full bg-[#2DD4BF]/20 blur-3xl" />
              <div className="absolute -left-12 bottom-6 h-24 w-24 rounded-full bg-[#60a5fa]/20 blur-3xl" />
              <div className="relative flex flex-col gap-6 rounded-[1.75rem] bg-[#0b1d45] p-8 text-slate-100 shadow-2xl shadow-slate-950/30">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-teal-200">
                 Rapid partner growth
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-black tracking-tight">Partner products in one platform.</h2>
                  <p className="text-sm leading-7 text-slate-300">
                    Access payment gateway, QR code, wallet API, digital invoicing and merchant tools built to support distributors, retailers and channel businesses.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Payments & payouts" },
                    { label: "Wallet & QR acceptance" },
                    { label: "Merchant onboarding" },
                    { label: "Data-led reporting" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfc] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0d9488]">Why partner with AbheePay</p>
            <h2 className="mt-4 text-3xl font-black text-[#0b1d45] sm:text-4xl">Everything your channel needs to win.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Build trusted distribution, simplify merchant onboarding and scale revenues using a secure partner ecosystem with modern API and dashboard tools.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div whileHover={{ y: -6 }} key={benefit.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#e0f7f4] text-[#0d9488] shadow-sm">
                    <BenefitIcon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0b1d45]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0d9488]">Partner journey</p>
              <h2 className="mt-4 text-3xl font-black text-[#0b1d45] sm:text-4xl">Onboard, integrate and scale in three simple steps.</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                AbheePay supports every step of the partner lifecycle, from business discovery to launch and performance optimization.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {steps.map((item) => (
                <div key={item.step} className="rounded-[1.75rem] border border-slate-200 bg-[#f8fcfd] p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#2dd4bf]/10 text-[#0d9488] font-black">{item.step}</div>
                  <h3 className="mt-6 text-xl font-bold text-[#0b1d45]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071d48] py-20 sm:py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2dd4bf]">Partner rewards</p>
              <h2 className="text-3xl font-black sm:text-4xl">Drive growth with trusted partner earnings.</h2>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                From transaction commissions to recurring merchant revenues, AbheePay helps partners unlock predictable earning potential with transparent reporting.
              </p>
              <Link to="/Distributor" className="inline-flex items-center gap-2 rounded-full bg-[#2DD4BF] px-6 py-3 text-sm font-bold text-[#071d48] transition hover:bg-[#14b8a6]">
                Explore partnership plans <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Distributor onboarding", icon: Globe },
                { label: "Retailer management", icon: Users },
                { label: "Payment acceptance", icon: Zap },
                { label: "Smart reporting", icon: FileText },
              ].map((item) => (
                <div key={item.label} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#2dd4bf]/15 text-[#2dd4bf]">
                    <item.icon size={20} />
                  </div>
                  <p className="mt-6 text-lg font-bold text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Overview;
