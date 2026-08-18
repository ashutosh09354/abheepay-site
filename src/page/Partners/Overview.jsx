
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  LayoutGrid,
  Zap,
  Users,
  CheckCircle2,
  CreditCard,
  Headphones,
  Store,
  Network,
  Tag,
  Building2,
  QrCode,
  Banknote,
  Code2,
  GraduationCap,
  Layers,
} from "lucide-react";



const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const SEO = {
  title: "Partner Program | Grow Your Digital Payment Business with AbheePay",
  description:
    "Join the AbheePay Partner Program and grow your business with digital payment solutions, QR Code, Sound Box, Payment Gateway, APIs, and business banking services.",
  path: "/partner-program",
};

function useSEO({ title, description, path }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property="([^"]+)"/)[1]);
        } else {
          el.setAttribute("name", selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}${path}`);

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, path]);
}

const partnershipModels = [
  {
    key: "retailer",
    icon: Store,
    title: "Retailer Program",
    description:
      "Offer digital payment and business banking services to your local customers using the AbheePay platform. Accept QR payments, provide BBPS services, recharge, and other merchant solutions through one account.",
    bestFor: [
      "Retail Shops",
      "Kirana Stores",
      "Mobile Shops",
      "Cyber Cafés",
      "Service Centres",
      "Small Businesses",
    ],
    buttonLabel: "Retailer",
    to: "/retailer",
  },
  {
    key: "distributor",
    icon: Network,
    title: "Distributor Program",
    description:
      "Build and manage your own retailer network while providing AbheePay products and services to merchants across different locations. Manage retailer onboarding, support, and business growth through one centralized platform.",
    bestFor: [
      "Distributors",
      "Regional Business Partners",
      "Merchant Aggregators",
      "Business Networks",
    ],
    buttonLabel: "Distributor",
    to: "/Distributor",
  },
  {
    key: "white-label",
    icon: Tag,
    title: "White Label Program",
    description:
      "Launch your own branded payment business using AbheePay's technology infrastructure. Offer QR Code, Sound Box, Merchant App, APIs, and payment services under your own brand while we manage the technology platform.",
    bestFor: ["Fintech Startups", "Payment Companies", "Enterprises", "Business Groups"],
    buttonLabel: "White Label",
    to: "/whiteLabel",
  },
  {
    key: "enterprise",
    icon: Building2,
    title: "Enterprise Program",
    description:
      "Build custom payment and business solutions for your organisation using AbheePay's APIs, payment infrastructure, and technology services. Ideal for businesses that require enterprise-grade integrations and tailored solutions.",
    bestFor: [
      "Enterprises",
      "Banks",
      "NBFCs",
      "Large Organisations",
      "Technology Companies",
    ],
    buttonLabel: "Enterprise",
    to: "/Enterprise",
  },
];



const whatYouGet = [
  { label: "Digital Payment Solutions", icon: CreditCard },
  { label: "QR Code & Sound Box", icon: QrCode },
  { label: "Payment Gateway", icon: Zap },
  { label: "Business Banking Services", icon: Banknote },
  { label: "API Integrations", icon: Code2 },
  { label: "Merchant Management Platform", icon: LayoutGrid },
  { label: "Training & Onboarding", icon: GraduationCap },
  { label: "Dedicated Business Support", icon: Headphones },
  { label: "Scalable Technology Platform", icon: Layers },
];

const Overview = () => {
  useSEO(SEO);

  const [showMore, setShowMore] = useState(false);

  const metrics = [
    { label: "Active partners", value: "2,500+", icon: Users },
    { label: "Monthly transactions", value: "₹475 Cr+", icon: CreditCard },
    { label: "API uptime", value: "99.99%", icon: CheckCircle2 },
  ];

  return (
    <main className="overflow-hidden bg-white font-sans text-[#0b1d45]">
      {/* Hero */}
      <section className="relative overflow-hidden text-[#0b1d45] pt-28 pb-24 sm:pt-32 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.14),_transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                <ShieldCheck size={16} /> Partner Program
              </span>
             <div className="space-y-5">
  <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
    Grow Your Business with the{" "}
    <span className="text-[#0d9488]">AbheePay Partner Program</span>
  </h1>

  <p className="max-w-2xl text-base font-semibold text-teal-700 sm:text-lg">
    Build, Expand &amp; Scale Your Business with AbheePay
  </p>

  {/* First paragraph - always visible */}
  <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
    The AbheePay Partner Program is designed for entrepreneurs, retailers,
    distributors, fintech companies, and enterprises looking to grow their
    business through digital payment and business solutions.
  </p>

  {/* Second paragraph - hidden initially */}
  {showMore && (
    <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
      Whether you want to offer payment services, build your own merchant
      network, launch a branded payment business, or integrate financial
      services into your platform, AbheePay provides the products,
      technology, and support you need to succeed. Choose the partnership
      model that best fits your business goals and grow with a trusted
      technology partner.
    </p>
  )}

  {/* Read More */}
  <button
    type="button"
    onClick={() => setShowMore(!showMore)}
    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0d9488] transition-colors hover:text-[#0f766e]"
  >
    {showMore ? "Read Less" : "Read More"}

    {showMore ? (
      <ChevronUp size={18} />
    ) : (
      <ChevronDown size={18} />
    )}
  </button>
</div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/Distributor"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DD4BF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-200/60 transition hover:bg-[#14b8a6]"
                >
                  Become a Partner <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-7 py-3.5 text-sm font-semibold text-[#0b1d45] transition hover:border-teal-300/60 hover:bg-teal-50"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => {
                  const MetricIcon = metric.icon;
                  return (
                    <div key={metric.label} className="rounded-3xl border border-slate-200 bg-[#f7fbfc] p-5">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0d9488] shadow-sm">
                        <MetricIcon size={20} />
                      </div>
                      <p className="mt-4 text-3xl font-black leading-none text-[#0b1d45]">{metric.value}</p>
                      <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7fbfc] p-5 shadow-2xl shadow-slate-200/60 sm:p-7">
              <div className="absolute -right-8 top-4 h-32 w-32 rounded-full bg-[#2DD4BF]/20 blur-3xl" />
              <div className="absolute -left-12 bottom-6 h-24 w-24 rounded-full bg-[#60a5fa]/20 blur-3xl" />
              <div className="relative flex flex-col gap-6 rounded-[1.75rem] bg-[#0b1d45] p-8 text-slate-100 shadow-2xl shadow-slate-950/30">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-teal-200">
                  Four ways to partner
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-black tracking-tight">Pick the model that fits your business.</h2>
                  <p className="text-sm leading-7 text-slate-300">
                    Retailer, Distributor, White Label, or Enterprise — every program is
                    built on the same secure payments infrastructure and partner support.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {partnershipModels.map((model) => (
                    <a
                      key={model.key}
                      href={`#${model.key}`}
                      className="rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-teal-300/40 hover:bg-white/10"
                    >
                      <p className="text-sm font-semibold text-slate-100">{model.title.replace(" Program", "")}</p>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="bg-[#f7fbfc] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0d9488]">Partnership Models</p>
            <h2 className="mt-4 text-3xl font-black text-[#0b1d45] sm:text-4xl">
              Choose the program that matches your business.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {partnershipModels.map((model) => {
              const ModelIcon = model.icon;
              return (
                <motion.div
                  id={model.key}
                  whileHover={{ y: -6 }}
                  key={model.key}
                  className="flex flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#e0f7f4] text-[#0d9488] shadow-sm">
                    <ModelIcon size={22} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0b1d45]">{model.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{model.description}</p>

                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Best For</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {model.bestFor.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#f0f9ff] px-3 py-1.5 text-xs font-semibold text-[#0c4a6e]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={model.to}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0b1d45] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#132a63]"
                  >
                    {model.buttonLabel} Program <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0d9488]">Why Partner with AbheePay?</p>
              <h2 className="mt-4 text-3xl font-black text-[#0b1d45] sm:text-4xl">
                A complete business ecosystem, built for growth.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                When you join the AbheePay Partner Program, you gain access to a complete
                business ecosystem designed to support your growth. Whether you're
                starting a new business or expanding an existing one, AbheePay provides
                the technology, products, and support to help you grow with confidence.
              </p>
              <Link
                to="/Distributor"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2DD4BF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-200/40 transition hover:bg-[#14b8a6]"
              >
                Become a Partner <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {whatYouGet.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-[1.75rem] border border-slate-200 bg-[#f8fcfd] p-6 shadow-sm"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2dd4bf]/10 text-[#0d9488]">
                      <ItemIcon size={20} />
                    </div>
                    <p className="mt-4 text-sm font-semibold leading-6 text-[#0b1d45]">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Find the right partnership + Final CTA */}
      <section className="bg-[#071d48] py-20 sm:py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2dd4bf]">Ready to Partner with AbheePay?</p>
              <h2 className="text-3xl font-black sm:text-4xl">
                Find the right partnership for your business.
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                Every business has different goals. That's why AbheePay offers flexible
                partnership models to suit entrepreneurs, retailers, distributors,
                fintech companies, and enterprises. Explore each program to discover the
                benefits, requirements, and opportunities available.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/Distributor"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2DD4BF] px-7 py-3.5 text-sm font-bold text-[#071d48] transition hover:bg-[#14b8a6]"
                >
                  Become a Partner <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {partnershipModels.map((model) => {
                const ModelIcon = model.icon;
                return (
                  <Link
                    to={model.to}
                    key={model.key}
                    className="group rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-lg transition hover:border-teal-300/40 hover:bg-white/15"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#2dd4bf]/15 text-[#2dd4bf]">
                      <ModelIcon size={20} />
                    </div>
                    <p className="mt-6 text-lg font-bold text-white">{model.buttonLabel}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-teal-200">
                      Explore program
                      <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Overview;