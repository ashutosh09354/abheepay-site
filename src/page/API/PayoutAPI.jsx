import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  QrCode, BarChart3, ShieldCheck, Boxes, SlidersHorizontal, Puzzle,
  Settings2, Code2, Headphones, Rocket, ArrowRight, Lock, Webhook,
  Infinity as InfinityIcon, Database, Fingerprint, ScanLine
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const FontLoader = () => (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
  />
);

const qrCells = [
  1,1,1,1,1,0,1,0,1,1,1,1,1,
  1,0,0,0,1,0,0,0,1,0,0,0,1,
  1,0,1,0,1,1,0,1,0,1,1,0,1,
  1,0,1,0,1,0,1,0,1,0,1,0,1,
  1,0,0,0,1,1,0,0,1,1,0,0,1,
  1,1,1,1,1,0,1,1,0,1,1,1,1,
  0,0,0,0,0,1,0,1,1,0,0,0,0,
  1,1,0,1,1,0,1,0,0,1,1,0,1,
  1,0,1,0,0,1,0,1,1,0,0,1,1,
  1,0,1,1,1,0,1,0,1,1,1,0,1,
  1,0,0,0,1,1,0,1,0,0,0,1,1,
  1,0,1,0,1,0,1,0,1,1,0,0,1,
  1,1,1,1,1,0,1,1,0,1,1,1,1,
];

const PayoutAPI = () => {
  const services = [
    { title: "Bulk Payouts", desc: "Send mass payouts with templated requests.", icon: <QrCode size={26} /> },
    { title: "Scheduled Disbursements", desc: "Automate salary, commission and vendor payouts.", icon: <BarChart3 size={26} /> },
    { title: "KYC Aware Routing", desc: "Route payouts based on KYC and bank profiles.", icon: <Puzzle size={26} /> },
    { title: "Secure Authorization", desc: "Two-factor and role-based approvals for disbursements.", icon: <ShieldCheck size={26} /> },
  ];

  const whyChoose = [
    { title: "Fast Settlements", desc: "Near real-time clearing and reconciliation.", icon: <Boxes size={20} /> },
    { title: "Developer SDKs", desc: "SDKs and sample code for quick integration.", icon: <Code2 size={20} /> },
    { title: "Audit & Logs", desc: "Complete traceability for each payout.", icon: <Database size={20} /> },
    { title: "Support for Scale", desc: "Built for high-volume disbursement flows.", icon: <Headphones size={20} /> },
  ];

  const more = [
    { title: "Retry & Safe-guards", desc: "Automatic retries and limit checks.", icon: <Lock size={22} /> },
    { title: "Webhook Notifications", desc: "Instant callbacks for payout events.", icon: <Webhook size={22} /> },
    { title: "High Throughput", desc: "Designed for batch and real-time payouts.", icon: <InfinityIcon size={22} /> },
    { title: "Detailed Reports", desc: "Exportable settlement reports and ledgers.", icon: <Database size={22} /> },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden text-[1.215rem]" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      <FontLoader />
      <section className="px-[0.912rem] sm:px-[1.518rem] pt-[7rem] sm:pt-[8rem] pb-[2rem] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(20,184,166,0.22), transparent 24%), radial-gradient(circle at 80% 10%, rgba(20,184,166,0.14), transparent 20%), radial-gradient(circle at 10% 85%, rgba(20,184,166,0.08), transparent 24%)" }}></div>
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.8rem] items-stretch">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-[0.5rem] bg-white border border-slate-200 rounded-full px-[0.912rem] py-[0.38rem] text-[0.8rem] font-bold tracking-[0.08em] text-slate-500 mb-[1.518rem]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#14B8A6]"></span>
                API SERVICES
              </span>

              <h1 className="text-[3.2rem] sm:text-[3.8rem] font-extrabold leading-[1.02] tracking-[-0.02em] mb-[1rem]">
                <span className="text-slate-900">Payout</span>{" "}
                <span className="text-[#14B8A6]">API</span>
              </h1>

              <p className="text-[1.15rem] font-bold text-slate-800 leading-snug mb-[1.2rem]">
                Secure, scalable disbursements for payroll, commissions and payouts.
              </p>

              <p className="text-[0.98rem] text-slate-500 leading-relaxed mb-[1.6rem] max-w-[26rem]">
                AbheePay Payout API makes mass and scheduled disbursements simple with secure routing and reporting.
              </p>

              <div className="flex items-center gap-[0.608rem]">
                <div className="w-[2.126rem] h-[2.126rem] rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
                  <QrCode size={16} />
                </div>
                <p className="text-[0.9rem] text-slate-500">
                  <span className="font-semibold text-slate-700">Abheepay Team</span> &nbsp;•&nbsp; 2026
                </p>
              </div>
            </motion.div>

            <div className="flex items-center justify-center">
              <img src="/assets/image/services/ApiServices.png" alt="API services" className="w-full max-w-[560px] rounded-[14px] shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[3.5rem] px-[0.912rem] sm:px-[1.518rem] bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[1.8rem] items-start">
          <div>
            <div className="w-[2.2rem] h-[3px] bg-[#14B8A6] mb-[0.8rem] rounded-full"></div>
            <h2 className="text-[1.6rem] sm:text-[1.85rem] font-extrabold text-slate-900 mb-[1.5rem]">Payout Capabilities</h2>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem]">
              {services.map((s, i) => (
                <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="group bg-white border border-slate-200 rounded-[18px] p-[1.4rem] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:border-[#14B8A6]/40 hover:shadow-[0_10px_30px_rgba(20,184,166,0.1)] transition-all duration-300">
                  <div className="w-[2.9rem] h-[2.9rem] rounded-[12px] bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center mb-[0.9rem] group-hover:bg-[#14B8A6] group-hover:text-white transition-all duration-300">{s.icon}</div>
                  <h3 className="font-bold text-[1.03rem] text-slate-900 mb-[0.4rem] leading-snug">{s.title}</h3>
                  <p className="text-slate-500 text-[0.9rem] leading-relaxed mb-[0.9rem]">{s.desc}</p>
                  <span className="inline-flex items-center justify-center w-[2rem] h-[2rem] rounded-full border border-slate-200 text-slate-400 group-hover:border-[#14B8A6] group-hover:text-[#14B8A6] transition-colors"><ArrowRight size={15} /></span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-gradient-to-br from-[#14B8A6] to-[#0D9488] rounded-[22px] p-[1.6rem] sm:p-[1.9rem] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "18px 18px" }}></div>

            <h3 className="relative z-10 text-white text-[1.35rem] font-extrabold mb-[1.3rem]">Why use Payout API?</h3>

            <div className="relative z-10 space-y-[1.15rem]">
              {whyChoose.map((w, i) => (
                <div key={i} className="flex items-start gap-[0.75rem]">
                  <span className="w-[2.3rem] h-[2.3rem] shrink-0 rounded-full bg-white/15 text-white flex items-center justify-center">{w.icon}</span>
                  <div>
                    <p className="text-white font-bold text-[0.95rem] leading-snug mb-[0.15rem]">{w.title}</p>
                    <p className="text-white/75 text-[0.82rem] leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-[0.912rem] sm:px-[1.518rem] pb-[3rem]">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative rounded-[20px] bg-slate-50 border border-slate-100 px-[1.5rem] sm:px-[2rem] py-[1.6rem] flex flex-col sm:flex-row items-center justify-between gap-[1.2rem] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: "radial-gradient(#14B8A6 0.7px, transparent 0.7px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(to right, transparent 60%, black 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 60%, black 100%)" }}></div>
            <div className="relative z-10 flex items-center gap-[1rem] text-center sm:text-left flex-col sm:flex-row">
              <span className="w-[3rem] h-[3rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center"><Rocket size={22} /></span>
              <div>
                <h3 className="font-extrabold text-[1.15rem] text-slate-900 mb-[0.2rem]">Launch payouts with confidence</h3>
                <p className="text-slate-500 text-[0.92rem]">Automate payrolls, commissions and vendor payouts at scale.</p>
              </div>
            </div>
            <Link to="/docs" className="relative z-10 shrink-0"><button className="inline-flex items-center gap-[0.5rem] px-[1.4rem] py-[0.75rem] bg-[#14B8A6] text-white rounded-lg font-semibold hover:bg-[#0D9488] transition text-[0.92rem]">View API Documentation<ArrowRight size={16} /></button></Link>
          </div>
        </div>
      </section>

      <section className="px-[0.912rem] sm:px-[1.518rem] pb-[4rem]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-[2.2rem]"><h2 className="text-[1.35rem] font-extrabold text-slate-900 mb-[0.5rem]">Payout Features</h2><div className="w-[2.6rem] h-[3px] bg-[#14B8A6] mx-auto rounded-full"></div></div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
            {more.map((m, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-[0.75rem]">
                <span className="w-[2.9rem] h-[2.9rem] shrink-0 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">{m.icon}</span>
                <div>
                  <p className="font-bold text-[0.95rem] text-slate-900 mb-[0.3rem]">{m.title}</p>
                  <p className="text-slate-500 text-[0.85rem] leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PayoutAPI;
