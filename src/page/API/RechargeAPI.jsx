import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Zap, ShieldCheck, CheckCircle2, Globe, Lock } from 'lucide-react';

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

const RechargeAPI = () => {
  const features = [
    {
      title: 'Mobile & DTH top-up',
      desc: 'Recharge mobile, DTH and data plans with instant API calls.',
      icon: <Smartphone size={24} />,
    },
    {
      title: 'Retry-safe flows',
      desc: 'Automatic retry logic for failed recharge requests.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Flexible operator coverage',
      desc: 'Support for major telecom, DTH and digital service providers.',
      icon: <Globe size={24} />,
    },
    {
      title: 'Secure authorization',
      desc: 'Safe payment and recharge authorization with audit trails.',
      icon: <Lock size={24} />,
    },
  ];

  const benefits = [
    {
      title: 'Fast fulfillment',
      desc: 'Low latency recharge execution across operator networks.',
      icon: <Zap size={20} />,
    },
    {
      title: 'Dedicated integrations',
      desc: 'Custom recharge workflows for retail and distribution channels.',
      icon: <CheckCircle2 size={20} />,
    },
    {
      title: 'Secured API access',
      desc: 'Token-based authentication and encrypted request handling.',
      icon: <ShieldCheck size={20} />,
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <FontLoader />
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f0fdf4] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#166534]">
                Recharge API
              </span>
              <div className="space-y-5">
                <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Create instant recharge experiences for consumers and retailers.</h1>
                <p className="max-w-2xl text-base leading-8 text-slate-600">
                  AbheePay Recharge API handles mobile, DTH and digital service top-ups with fast authorization, retry-safe execution and verified operator payouts.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#166534] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#14532d]">
                  Start integration <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
                  View services
                </Link>
              </div>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="rounded-[2rem] border border-slate-200 bg-[#f3fdf7] p-8 shadow-sm">
              <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-[#166534]">Recharge capabilities</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {['Instant top-up', 'Network coverage', 'Retry logic'].map((item) => (
                    <div key={item} className="rounded-3xl bg-[#dcfce7] p-4 text-sm font-semibold text-[#166534]">{item}</div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#dcfce7] text-[#166534]">{feature.icon}</div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <section className="mt-20 rounded-[2rem] border border-slate-200 bg-[#effaf5] p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl bg-white p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#dcfce7] text-[#166534]">{benefit.icon}</div>
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

export default RechargeAPI;
