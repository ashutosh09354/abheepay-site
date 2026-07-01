import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal, { ScrollRevealGroup } from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

/**
 * Pattern reference for the rest of the site:
 * - The section is `sticky` while the next section scrolls up over it,
 *   creating the "layer opening on top" effect.
 * - The heading area has its own parallax drift, slower than scroll.
 * - Cards stagger-reveal and overlap with negative margins + elevation.
 * - Numbers count up once they enter the viewport.
 */
const stats = [
  { value: 25000, suffix: "+", label: "Active Retail Partners" },
  { value: 2.4, decimals: 1, prefix: "₹", suffix: "Cr+", label: "Daily Transaction Volume" },
  { value: 99.2, decimals: 1, suffix: "%", label: "Platform Uptime" },
  { value: 40, suffix: "+", label: "Cities Covered" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="sticky top-0 z-0 w-full bg-gradient-to-b from-white to-cyan-50 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12">
        <motion.div style={{ y: headingY }} className="max-w-2xl">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 border border-cyan-100 px-4 py-1.5 text-xs sm:text-sm font-medium text-cyan-700">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Trusted at Scale
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Numbers that show why retailers choose AbheePay
            </h2>
          </ScrollReveal>
        </motion.div>

        {/* overlapping card row: negative top margin pulls it up over the heading's bottom edge */}
        <ScrollRevealGroup className="mt-10 sm:mt-12 -mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px rgba(6,182,212,0.25)" }}
              className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl px-6 py-8 shadow-lg shadow-cyan-900/5"
            >
              <AnimatedCounter
                value={stat.value}
                decimals={stat.decimals || 0}
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
                className="text-3xl sm:text-4xl text-gray-900"
              />
              <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
};

export default StatsSection;