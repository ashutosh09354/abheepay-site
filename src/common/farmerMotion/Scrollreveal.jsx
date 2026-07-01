import React from "react";
import { motion } from "framer-motion";

/**
 * Wrap any section, card, or element to make it fade + slide in as it
 * scrolls into view. Reuse this everywhere instead of writing custom
 * scroll-trigger logic per section.
 *
 * Usage:
 *   <ScrollReveal><YourSection /></ScrollReveal>
 *   <ScrollReveal delay={0.15} direction="left"><Card /></ScrollReveal>
 */
const directionOffsets = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { y: 0, x: 48 },
  right: { y: 0, x: -48 },
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  className = "",
}) => {
  const offset = directionOffsets[direction] || directionOffsets.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger a group of children (e.g. a row of cards) so each one reveals
 * slightly after the last, instead of all at once.
 *
 * Usage:
 *   <ScrollRevealGroup className="grid grid-cols-3 gap-6">
 *     <Card /><Card /><Card />
 *   </ScrollRevealGroup>
 */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const ScrollRevealGroup = ({ children, className = "", amount = 0.15 }) => (
  <motion.div
    className={className}
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount }}
  >
    {React.Children.map(children, (child) => (
      <motion.div variants={itemVariants}>{child}</motion.div>
    ))}
  </motion.div>
);

export default ScrollReveal;