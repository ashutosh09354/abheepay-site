import React from "react";
import { motion } from "framer-motion";

const Whychooseus = () => {
  const features = [
    {
      title: "Instant Settlement",
      description: "Get your funds within 30 minutes of transaction completion",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      ),
    },
    {
      title: "High Success Rate",
      description: "Industry-leading 99.5% payment success rate with smart routing",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <path
            d="M8 12.5 10.8 15.3 16 9.5"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Enterprise Security",
      description: "PCI-DSS compliant infrastructure with 256-bit encryption",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path
            d="M7 11V7a5 5 0 0 1 10 0v4"
            stroke="currentColor"
            strokeWidth="2.2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Reports",
      description: "Comprehensive analytics and insights at your fingertips",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M4 3v17a1 1 0 0 0 1 1h16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="7" y="13" width="3" height="6" rx="0.5" />
          <rect x="12" y="9" width="3" height="10" rx="0.5" />
          <rect x="17" y="6" width="3" height="13" rx="0.5" />
        </svg>
      ),
    },
    {
      title: "Smart Dashboard",
      description: "Intuitive interface for managing all your payment operations",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="4" width="18" height="12" rx="1.5" />
          <rect x="9" y="19" width="6" height="1.6" rx="0.8" fill="currentColor" />
          <rect x="10.5" y="16" width="3" height="3" fill="currentColor" />
          <rect x="6" y="7" width="12" height="1.6" fill="#fff" />
        </svg>
      ),
    },
    {
      title: "Fraud Protection",
      description: "AI-powered fraud detection and prevention systems",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 4 5v6c0 5 3.4 8.9 8 11 4.6-2.1 8-6 8-11V5l-8-3z" />
          <path
            d="M8.3 12.2 10.8 14.7 15.7 9.3"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Easy Integration",
      description: "Simple APIs and plugins for quick implementation",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 3h3v2.5a1.5 1.5 0 0 0 3 0V3h3a1 1 0 0 1 1 1v3h-2.5a1.5 1.5 0 0 0 0 3H19v3a1 1 0 0 1-1 1h-3v-2.5a1.5 1.5 0 0 0-3 0V14H9a1 1 0 0 1-1-1v-3H5.5a1.5 1.5 0 0 1 0-3H8V4a1 1 0 0 1 1-1z" />
        </svg>
      ),
    },
    {
      title: "Dedicated Support",
      description: "24×7 expert support team ready to assist you",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M4 13v-1a8 8 0 0 1 16 0v1"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <rect x="3" y="12" width="4" height="6" rx="2" fill="currentColor" />
          <rect x="17" y="12" width="4" height="6" rx="2" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full flex items-center justify-center font-sans py-[50px] sm:py-[70px] overflow-hidden bg-[#F4FBFA]">
      {/* Ambient gradient blobs — parallax on scroll */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -top-[160px] -left-[160px] w-[525px] h-[525px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(20,200,192,0.35) 0%, rgba(20,200,192,0) 70%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute -bottom-[200px] -right-[120px] w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.3) 0%, rgba(45,212,191,0) 70%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 22.5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 left-1/2 w-[120px] h-[120px] rounded-full blur-2xl opacity-40"
        style={{ background: "rgba(20,200,192,0.4)" }}
      />

      {/* ============ DESKTOP / TABLET VERSION (original, untouched) ============ */}
      <div className="hidden md:block relative max-w-[1440px] w-full px-5 sm:px-[30px] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-5 sm:mb-[30px]"
        >
          <h2 className="text-[37.5px] sm:text-[45px] lg:text-[30px] font-black tracking-[-0.03em] leading-tight text-slate-900">
            Why Businesses Trust Abheepay

          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.09, delayChildren: 0.05 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px] sm:gap-[25px]"
        >
          {features.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.94, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative flex flex-col items-start text-left p-[10px] sm:p-[15px] rounded-[30px] overflow-hidden min-h-[125px] sm:min-h-[125px]
                bg-white/85 backdrop-blur-xl border border-white/60
                shadow-[0_20px_50px_rgba(15,23,42,.08)]
                hover:shadow-[0_30px_60px_rgba(20,184,166,.15)]
                hover:border-[#14C8C0]/40
                transition-shadow transition-colors duration-300"
            >
              {/* glass sheen */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 45%)",
                }}
              />
              {/* soft glow blob that grows on hover */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -top-[50px] -right-[50px] w-[140px] h-[140px] rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(20,200,192,0.35) 0%, rgba(20,200,192,0) 70%)",
                }}
                transition={{ duration: 0.4 }}
              />

              <div className="flex flex-col items-center text-center w-full">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative z-10 w-[50px] h-[50px] flex items-center justify-center mb-[25px] text-[#0EA89F] drop-shadow-[0_2px_6px_rgba(20,200,192,0.35)]"
                >
                  {card.icon}
                </motion.div>

                <h3 className="w-full text-[17.5px] font-bold tracking-tight leading-[25px] text-slate-900 text-center mb-[10px] group-hover:text-[#14B8A6] transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="w-full text-[10px] text-gray-600 text-center leading-[20px]">
                  {card.description}
                </p>
              </div>
              {/* bottom accent line that draws in on hover */}
              <span className="relative z-10 mt-[20px] h-[2.5px] w-10 bg-[#14C8C0] rounded-full origin-left scale-x-100 group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ============ MOBILE VERSION (independent markup, own sizing) ============ */}
      <div className="block md:hidden relative max-w-[1440px] w-full px-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-[25px]"
        >
          <h2 className="text-[22.5px] font-bold text-gray-900">
            Why Businesses Trust AbheePay
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08, delayChildren: 0.05 },
            },
          }}
          className="grid grid-cols-2 gap-[15px]"
        >
          {features.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex flex-col items-center text-center p-5 rounded-[20px] overflow-hidden min-h-[187.5px]
                bg-white/40 backdrop-blur-xl border border-white/60
                shadow-[0_8px_32px_rgba(15,55,52,0.08)]
                active:shadow-[0_16px_40px_rgba(20,200,192,0.18)]
                active:border-[#14C8C0]/40
                transition-shadow transition-colors duration-300"
            >
              {/* glass sheen */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 45%)",
                }}
              />

              <div className="relative z-10 w-[45px] h-[45px] flex items-center justify-center mb-[15px] text-[#0EA89F] drop-shadow-[0_2px_6px_rgba(20,200,192,0.35)]">
                {card.icon}
              </div>

              <h3 className="w-full text-[15px] font-semibold text-gray-900 text-center mb-[7.5px]">
                {card.title}
              </h3>

              <p className="w-full text-[12.5px] text-gray-600 text-center leading-[20px]">
                {card.description}
              </p>

              <span className="relative z-10 mt-[15px] h-[2.5px] w-10 bg-[#14C8C0] rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Whychooseus;