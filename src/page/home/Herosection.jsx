
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useInView,
  animate,
} from "framer-motion";
import { BarChart3, CheckCircle2, Users, Building2, Coins, Headphones } from "lucide-react";

/* ---------------------------------------------------------
   AnimatedStat — counts a stat value ("100,000+", "99.9%", "24x7")
   up from 0 the moment it scrolls into view, then re-appends
   whatever non-numeric suffix/format the original string had.
--------------------------------------------------------- */
const AnimatedStat = ({ value, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    const match = value.match(/^([\d,]*\.?\d+)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const raw = match[1];
    const suffix = value.slice(match[0].length);
    const hasComma = raw.includes(",");
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const target = parseFloat(raw.replace(/,/g, ""));

    if (!inView) {
      setDisplay(`${decimals ? (0).toFixed(decimals) : 0}${suffix}`);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const num = decimals ? v.toFixed(decimals) : Math.round(v);
        const formatted = hasComma ? Number(num).toLocaleString("en-IN") : num;
        setDisplay(`${formatted}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <p ref={ref} className={className}>
      {display ?? value}
    </p>
  );
};

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlideMobile, setActiveSlideMobile] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  /* ---------------- Mouse-driven parallax ---------------- */
  // Raw pointer position as a 0..1 fraction of the section box.
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  // Springs smooth the motion so every layer glides instead of snapping.
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 22, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 22, mass: 0.4 });

  const handlePointerMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };
  const handlePointerLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Layer speeds — nearer/"lighter" elements move most, background least.
  const glowX = useTransform(smoothX, [0, 1], [-62.5, 62.5]);
  const glowY = useTransform(smoothY, [0, 1], [-43.75, 43.75]);

  const circleSlowX = useTransform(smoothX, [0, 1], [-22.5, 22.5]);
  const circleSlowY = useTransform(smoothY, [0, 1], [-22.5, 22.5]);

  const circleMedX = useTransform(smoothX, [0, 1], [32.5, -32.5]);
  const circleMedY = useTransform(smoothY, [0, 1], [22.5, -22.5]);

  const decorFastX = useTransform(smoothX, [0, 1], [-68.75, 68.75]);
  const decorFastY = useTransform(smoothY, [0, 1], [-56.25, 56.25]);

  const decorFast2X = useTransform(smoothX, [0, 1], [50, -50]);
  const decorFast2Y = useTransform(smoothY, [0, 1], [-37.5, 37.5]);

  const dashboardRotateY = useTransform(smoothX, [0, 1], [5, -5]);
  const dashboardRotateX = useTransform(smoothY, [0, 1], [-5, 5]);
  const dashboardX = useTransform(smoothX, [0, 1], [-10, 10]);

  const slides = [
    {
      eyebrow: "Micro ATM Network",
      titleMain: "Powering India's",
      titleAccent: "Digital Payment Ecosystem",
      desc: "Secure, scalable and reliable payment infrastructure for merchants, businesses and enterprises.",
      link: "#",
      dashboard: {
        revenue: "\u20b912.5Cr",
        revenueGrowth: "+23.5% this month",
        successRate: "99.5%",
        successNote: "8,234 transactions",
        chart: [55, 70, 80, 50, 90, 100, 85],
      },
    },
    {
      eyebrow: "Card Payment Infrastructure",
      titleMain: "Accept Payments Anywhere with",
      titleAccent: "POS Solutions",
      desc: "Fast, secure, and reliable POS machines built for high-volume retail businesses.",
      link: "/products/pos-machine",
      dashboard: {
        revenue: "\u20b98.1Cr",
        revenueGrowth: "+15.2% this month",
        successRate: "98.9%",
        successNote: "5,410 transactions",
        chart: [40, 65, 60, 75, 55, 95, 80],
      },
    },
    {
      eyebrow: "Bill Payment Platform",
      titleMain: "One Platform for",
      titleAccent: "BBPS & Recharge Services",
      desc: "Electricity, water, gas, mobile, and DTH bill payments, all under one platform.",
      link: "/services/bbps-recharge-bill-payments",
      dashboard: {
        revenue: "\u20b94.6Cr",
        revenueGrowth: "+9.8% this month",
        successRate: "99.1%",
        successNote: "12,980 transactions",
        chart: [60, 50, 70, 85, 65, 75, 90],
      },
    },
    {
      eyebrow: "Credit & Collections",
      titleMain: "Grow Faster with",
      titleAccent: "Loan & Collection Services",
      desc: "Credit card sourcing, loan assistance, and payment collection solutions for retail growth.",
      link: "/services/credit-card-sourcing-and-lifecycle-support",
      dashboard: {
        revenue: "\u20b96.3Cr",
        revenueGrowth: "+18.4% this month",
        successRate: "99.2%",
        successNote: "3,150 transactions",
        chart: [45, 55, 95, 70, 60, 80, 65],
      },
    },
  ];

  const stats = [
    { icon: Users, value: "100,000+", label: "Merchants" },
    { icon: Building2, value: "500+", label: "Partners" },
    { icon: Coins, value: "99.9%", label: "Uptime" },
    { icon: Headphones, value: "24x7", label: "Support" },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative w-full overflow-hidden bg-white font-sans pt-[100px] lg:pt-[80px]"
    >
      {/* ============ PARALLAX AMBIENT LAYER ============ */}
      {/* dark ambient glow, top right — fastest-feeling, closest layer */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute top-[30px] right-0 h-[360px] w-[360px] rounded-full bg-gray-900/10 blur-[138px] will-change-transform"
      >
        <motion.div
          className="h-full w-full"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* slow background circle, lower-left */}
      <motion.div
        aria-hidden="true"
        style={{ x: circleSlowX, y: circleSlowY }}
        className="pointer-events-none absolute -bottom-[480px] -left-[480px] h-[480px] w-[480px] rounded-full bg-[#14B8A6]/10 blur-[125px] will-change-transform"
      />

      {/* medium-speed circle, mid-right */}
      <motion.div
        aria-hidden="true"
        style={{ x: circleMedX, y: circleMedY }}
        className="pointer-events-none absolute top-1/3 right-1/4 h-[280px] w-[280px] rounded-full bg-[#2DD4BF]/10 blur-[113px] will-change-transform"
      />

      {/* floating decoration: teal ring, moves fastest */}
      <motion.div
        aria-hidden="true"
        style={{ x: decorFastX, y: decorFastY }}
        className="pointer-events-none absolute top-[120px] left-[8%] h-20 w-20 rounded-full border-2 border-[#14B8A6]/20 hidden lg:block will-change-transform"
        animate={{ y: [0, -17.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* floating decoration: soft dot cluster */}
      <motion.div
        aria-hidden="true"
        style={{ x: decorFast2X, y: decorFast2Y }}
        className="pointer-events-none absolute bottom-[140px] right-[12%] h-[15px] w-[15px] rounded-full bg-[#14B8A6]/30 hidden lg:block will-change-transform"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* ======================= DESKTOP / TABLET ======================= */}
      <div className="hidden md:block relative z-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          autoHeight
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="relative w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full max-w-[1600px] mx-auto px-[30px] sm:px-10 md:px-[50px] lg:px-[60px] pt-[70px] sm:pt-20 md:pt-[100px] pb-[50px] sm:pb-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-[70px] lg:gap-[100px] items-center">
                  {/* left: heading + copy + ctas */}
                  <motion.div
                    style={{ opacity: fade }}
                    className={`transition-all duration-500 ease-out ${activeSlide === index
                        ? "opacity-100 translate-y-0 blur-0"
                        : "opacity-0 translate-y-10 blur-sm"
                      }`}
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 24 }}
                      animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      style={{
                        fontSize: "clamp(3rem, 2rem + 2.5vw, 4rem)",
                        lineHeight: 1.1,
                      }}
                      className="font-black tracking-[-0.04em] text-slate-900 max-w-2xl"
                    >
                      {slide.titleMain}{" "}
                      <span className="text-[#14B8A6]">{slide.titleAccent}</span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-[10px] text-[12px] sm:text-[16px] text-slate-600 font-medium leading-[25px] max-w-[560px]"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeSlide === index ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-[25px] flex flex-wrap items-center gap-[15px]"
                    >
                      <Link to={slide.link}>
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            y: -3,
                            boxShadow: "0 16px 32px -10px rgba(20,184,166,0.55)",
                          }}
                          whileTap={{ scale: 0.97, y: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="rounded-[15px] bg-[#14B8A6] px-[15px] py-[15px] text-[18px] font-bold tracking-wide text-white shadow-md shadow-[0_12px_30px_rgba(20,184,166,.25)]"
                        >
                          Get Started
                        </motion.button>
                      </Link>
                      <Link to="/contact">
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            y: -3,
                            backgroundColor: "rgb(240 253 250)",
                            boxShadow: "0 12px 24px -12px rgba(20,184,166,0.35)",
                          }}
                          whileTap={{ scale: 0.97, y: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="rounded-[15px] border border-[#14B8A6] px-[15px] py-[15px] text-[18px] tracking-wide font-bold text-[#14B8A6] bg-white"
                        >
                          Book Demo
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* right: floating glassmorphic dashboard card */}
                  <motion.div
                    style={{
                      y: cardY,
                      x: dashboardX,
                      rotateX: dashboardRotateX,
                      rotateY: dashboardRotateY,
                      transformPerspective: 1000,
                    }}
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={
                      activeSlide === index
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 40, scale: 0.96 }
                    }
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                    whileHover={{
                      y: -8,
                      scale: 1.015,
                      boxShadow: "0 30px 60px -18px rgba(20,184,166,0.35)",
                    }}
                    className="relative w-full max-w-[500px] lg:ml-auto rounded-[20px] bg-white/80 backdrop-blur-2xl p-[15px] shadow-[0_30px_80px_rgba(15,23,42,.12)] shadow-gray-900/10 border border-slate-200 border border-white/60 will-change-transform"
                  >
                    <div className="grid grid-cols-2 gap-[10px]">
                      <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px -8px rgba(15,20,20,0.3)" }}
                        transition={{ duration: 0.3 }}
                        className="rounded-[10px] bg-[#14B8A6]/90 backdrop-blur-md p-[14px] min-h-[150px] text-white"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/20">
                          <BarChart3 className="h-[10px] w-[10px]" />
                        </div>
                        <p className="mt-[5px] text-[9px] text-white/500 whitespace-nowrap">Total Revenue</p>
                        <p className="mt-[2.5px] text-[15px] font-bold text-white/500 whitespace-nowrap">{slide.dashboard.revenue}</p>
                        <p className="mt-[2.5px] text-[9px] text-white/500 whitespace-nowrap">
                          &#8599; {slide.dashboard.revenueGrowth}
                        </p>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px -8px rgba(20,184,166,0.2)" }}
                        transition={{ duration: 0.3 }}
                        className="rounded-[10px] border border-white/60 bg-white/50 backdrop-blur-md p-[14px] min-h-[140px]"
                      >
                        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#F0FDFA]">
                          <CheckCircle2 className="h-[10px] w-[10px] text-[#14B8A6]" />
                        </div>
                        <p className="mt-[5px] text-[9px] text-white/200 whitespace-nowrap">Success Rate</p>
                        <p className="mt-[2.5px] text-[15px] font-bold text-gray-900 whitespace-nowrap">
                          {slide.dashboard.successRate}
                        </p>
                        <p className="mt-[2.5px] text-[9px] text-gray-900 whitespace-nowrap">{slide.dashboard.successNote}</p>
                      </motion.div>
                    </div>

                    <div className="mt-[10px] rounded-[10px] border border-white/60 bg-white/50 backdrop-blur-md p-[12.5px]">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-semibold text-gray-800">Transaction Analytics</p>
                        <span className="text-[9px] text-gray-400">Last 7 days</span>
                      </div>
                      <div className="mt-[10px] flex items-end justify-between gap-[7.5px] h-[220px]">
                        {slide.dashboard.chart.map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={activeSlide === index ? { height: `${h}%` } : { height: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
                            whileHover={{ scaleY: 1.06 }}
                            className="flex-1 rounded-sm bg-[#14B8A6] max-w-[50px] origin-bottom"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* bottom stats strip */}
        <div className="relative z-10 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <div className="max-w-[1600px] mx-auto px-[30px] sm:px-10 md:px-[50px] lg:px-[60px] py-[25px] sm:py-[30px] grid grid-cols-2 sm:grid-cols-4 gap-[25px] sm:gap-[30px]">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                    boxShadow: "0 16px 30px -14px rgba(20,184,166,0.4)",
                  }}
                  className="text-center rounded-xl py-[10px] cursor-default"
                  style={{ transitionDuration: "350ms" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.12, backgroundColor: "#CCFBF1" }}
                    transition={{ duration: 0.3 }}
                    className="mx-auto flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#F0FDFA]"
                  >
                    <Icon className="h-5 w-5 text-[#14B8A6]" />
                  </motion.div>
                  <AnimatedStat
                    value={stat.value}
                    className="mt-[12.5px] text-[25px] sm:text-[30px] font-bold text-gray-900 tabular-nums"
                  />
                  <p className="mt-[5px] text-[12.5px] sm:text-[13.75px] text-gray-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ======================= MOBILE VERSION ======================= */}
      <div className="block md:hidden relative z-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          autoHeight
          onSlideChange={(swiper) => setActiveSlideMobile(swiper.realIndex)}
          className="relative w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`m-${index}`}>
              <div className="relative w-full px-5 pt-20 pb-[25px]">
                {/* heading + copy */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={activeSlideMobile === index ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h1
                    style={{ lineHeight: 1.25 }}
                    className="text-[37.5px] font-extrabold text-gray-900"
                  >
                    {slide.titleMain}{" "}
                    <span className="text-[#14B8A6]">{slide.titleAccent}</span>
                  </h1>

                  <p className="mt-[15px] text-[16.25px] text-gray-500 leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="mt-[25px] flex items-center gap-[12.5px]">
                    <Link to={slide.link} className="flex-1">
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                        className="w-full rounded-[10px] bg-[#14B8A6] px-5 py-[15px] text-[16.25px] font-semibold text-white"
                      >
                        Get Started
                      </motion.button>
                    </Link>
                    <Link to="/contact" className="flex-1">
                      <motion.button
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                        className="w-full rounded-[10px] border border-[#14B8A6] px-5 py-[15px] text-[16.25px] font-semibold text-[#14B8A6] bg-white"
                      >
                        Book Demo
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>

                {/* glassmorphic dashboard card
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={activeSlideMobile === index ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 w-full max-w-[290px] mx-auto rounded-lg bg-white/70 backdrop-blur-xl p-2 shadow-xl shadow-gray-900/10 border border-white/60"
                >
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="rounded-md bg-[#14B8A6]/90 backdrop-blur-md p-1.5 text-white">
                      <div className="flex h-3.5 w-3.5 items-center justify-center rounded-md bg-white/20">
                        <BarChart3 className="h-2 w-2" />
                      </div>
                      <p className="mt-1 text-[6px] text-white/85 whitespace-nowrap">Total Revenue</p>
                      <p className="mt-0.5 text-xs font-bold whitespace-nowrap">{slide.dashboard.revenue}</p>
                      <p className="mt-0.5 text-[6px] text-white/85 whitespace-nowrap">
                        &#8599; {slide.dashboard.revenueGrowth}
                      </p>
                    </div>
                    <div className="rounded-md border border-white/60 bg-white/50 backdrop-blur-md p-1.5">
                      <div className="flex h-3.5 w-3.5 items-center justify-center rounded-md bg-[#F0FDFA]">
                        <CheckCircle2 className="h-2 w-2 text-[#14B8A6]" />
                      </div>
                      <p className="mt-1 text-[6px] text-gray-500 whitespace-nowrap">Success Rate</p>
                      <p className="mt-0.5 text-xs font-bold text-gray-900 whitespace-nowrap">
                        {slide.dashboard.successRate}
                      </p>
                      <p className="mt-0.5 text-[6px] text-gray-400 whitespace-nowrap">{slide.dashboard.successNote}</p>
                    </div>
                  </div>

                  <div className="mt-1.5 rounded-md border border-white/60 bg-white/50 backdrop-blur-md p-2">
                    <div className="flex items-center justify-between">
                      <p className="text-[7px] font-semibold text-gray-800">Transaction Analytics</p>
                      <span className="text-[6px] text-gray-400">Last 7 days</span>
                    </div>
                    <div className="mt-1.5 flex items-end justify-between gap-1.5 h-16">
                      {slide.dashboard.chart.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={activeSlideMobile === index ? { height: `${h}%` } : { height: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: "easeOut" }}
                          className="flex-1 rounded-sm bg-[#2DD4BF] max-w-[20px]"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* dot pagination */}
                <div className="mt-[30px] flex items-center justify-center gap-[7.5px]">
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      className={`h-[7.5px] rounded-full transition-all duration-300 ${activeSlideMobile === i ? "w-[25px] bg-[#14B8A6]" : "w-[7.5px] bg-gray-300"
                        }`}
                    ></span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* stats strip, 2x2 on mobile */}
        <div className="relative z-10 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <div className="px-5 py-10 grid grid-cols-2 gap-[30px]">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#F0FDFA]">
                    <Icon className="h-5 w-5 text-[#14B8A6]" />
                  </div>
                  <AnimatedStat value={stat.value} className="mt-[10px] text-[25px] font-bold text-gray-900 tabular-nums" />
                  <p className="mt-[2.5px] text-[13.75px] text-gray-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;