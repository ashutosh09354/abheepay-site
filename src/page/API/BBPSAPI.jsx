import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Zap, ShieldCheck, CheckCircle2, Globe, HelpCircle, CreditCard } from 'lucide-react';

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

const BBPSAPI = () => {
  const features = [
    {
      title: 'Wide bill coverage',
      desc: 'Pay utility, broadband, gas, electricity and more from a single API.',
      icon: <FileText size={24} />,
    },
    {
      title: 'Scheduled & recurring',
      desc: 'Set up future payments and subscription-style bill collections.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Easy reconciliation',
      desc: 'Track every bill transaction with clear reference numbers and reports.',
      icon: <CheckCircle2 size={24} />,
    },
    {
      title: 'Merchant billing',
      desc: 'Embed bill payment capabilities inside merchant and distributor apps.',
      icon: <Globe size={24} />,
    },
  ];

  const benefits = [
    {
      title: 'Fast API onboarding',
      desc: 'Quick setup with sandbox flows and sample integrations.',
      icon: <HelpCircle size={20} />,
    },
    {
      title: 'Reliable settlement',
      desc: 'Get clear confirmations for every bill payment instruction.',
      icon: <ShieldCheck size={20} />,
    },
    {
      title: 'Multiple payment modes',
      desc: 'Accept UPI, wallet, net banking and card-based bill payments.',
      icon: <CreditCard size={20} />,
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <FontLoader />
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#eef9ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0f5484]">
                BBPS API
              </span>
              <div className="space-y-5">
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Build reliable bill payment experiences.</h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600">
                  AbheePay BBPS API connects your application to the Bharat Bill Payment System with fast bill presentment, payment initiation and settlement tracking.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0f5484] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0d4b7a]">
                  Request demo <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
                  Explore services
                </Link>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="rounded-[2rem] border border-slate-200 bg-[#f4faff] p-8 shadow-sm">
              <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-[#0f5484]">Bill payment speed</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {['Instant bill fetch', 'Recurring schedule', 'Utility support'].map((item) => (
                    <div key={item} className="rounded-3xl bg-[#eef6ff] p-4 text-sm font-semibold text-[#0f5484]">{item}</div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#e7f2ff] text-[#0f5484]">{feature.icon}</div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <section className="mt-20 rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl bg-white p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#eef6ff] text-[#0f5484]">{benefit.icon}</div>
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

export default BBPSAPI;
