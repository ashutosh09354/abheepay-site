import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedCounter = ({
  value,
  duration = 1.6,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = React.useState("0");

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, value, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
    return unsub;
  }, [spring, decimals]);

  return (
    <div ref={ref} className={className}>
      <motion.span className="tabular-nums font-bold">
        {prefix}
        {display}
        {suffix}
      </motion.span>
      {label && <p className="mt-1 text-sm text-gray-500">{label}</p>}
    </div>
  );
};

export default AnimatedCounter;