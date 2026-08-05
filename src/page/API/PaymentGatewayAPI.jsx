import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CreditCard, Banknote, Zap, Globe, CheckCircle2, Code2 } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const FontLoader = () => (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
  />
);

const PaymentGatewayAPI = () => {
  const features = [
    {
      title: 'Unified checkout API',
      desc: 'Accept UPI, cards, wallets and net banking through a single integration.',
      icon: <CreditCard size={24} />,
    },
    {
      title: 'Smart routing & retry',
      desc: 'High success rates with intelligent gateway routing and automatic retries.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Instant settlement insights',
      desc: 'View transaction status, payouts and reconciliations in real time.',
      icon: <Banknote size={24} />,
    },
    {
      title: 'Global-ready payments',
      desc: 'Accept payments across India with UPI, cards and local wallets.',
      icon: <Globe size={24} />,
    },
  ];

  const benefits = [
    {
      title: 'PCI-compliant systems',
      desc: 'Secure payment flows with tokenization and fraud protection.',
      icon: <ShieldCheck size={20} />,
    },
    {
      title: 'Developer-first docs',
      desc: 'REST APIs, SDKs and sandbox keys to launch quickly.',
      icon: <Code2 size={20} />,
    },
    {
      title: 'Fast reconciliation',
      desc: 'Detailed reporting, settlements and chargebacks in one dashboard.',
      icon: <CheckCircle2 size={20} />,
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <FontLoader />
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#dbf7f2] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                Payment Gateway API
              </span>
              <div className="space-y-5">
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Power payments with one reliable integration.</h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600">
                  AbheePay Payment Gateway API lets businesses accept UPI, cards, wallets and net banking through a single, secure endpoint with intelligent routing, fraud controls and fast settlements.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0d9488]">
                  Talk to sales <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
                  Explore services
                </Link>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="rounded-[2rem] border border-slate-200 bg-[#f8fdfa] p-8 shadow-sm">
              <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-[#14b8a6]">Gateway performance</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {['99.99% Uptime', 'Instant settlement', 'One API'].map((item) => (
                    <div key={item} className="rounded-3xl bg-[#ecfdf5] p-4 text-sm font-semibold text-[#0f766e]">{item}</div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#dcf6ef] text-[#0f766e]">{feature.icon}</div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <section className="mt-20 rounded-[2rem] border border-slate-200 bg-[#f8fcfd] p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl bg-white p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#e6f7f2] text-[#0f766e]">{benefit.icon}</div>
                  <h4 className="mt-5 text-lg font-bold text-slate-900">{benefit.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default PaymentGatewayAPI;
