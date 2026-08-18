
import React, { useEffect, useRef, useState } from 'react';
import { Building2, Check, ArrowRight } from 'lucide-react';

/* ----------------------------------------------------------------
   useReveal — small IntersectionObserver hook that flips a card
   into its "visible" state the first time it crosses into view.
   Used to drive the staggered slide-up + fade-in on scroll.
------------------------------------------------------------------ */
const useReveal = (threshold = 0.25) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
};

const PARTNERS = [
  {
    title: 'Merchant Partner',
    perks: [
      'Zero setup fee',
      'Competitive pricing',
      'Quick onboarding',
      'Marketing support',
      'Dedicated account manager',
    ],
  },
  {
    title: 'Distributor Partner',
    perks: [
      'Revenue sharing model',
      'White-label options',
      'Technical training',
      'Sales enablement',
      'Priority support',
    ],
  },
  {
    title: 'Enterprise Partner',
    perks: [
      'Custom solutions',
      'Dedicated infrastructure',
      'Volume discounts',
      'API customization',
      'Strategic planning',
    ],
  },
  {
    title: 'White Label Partner',
    perks: [
      'Full brandings controls',
      'Custom domain',
      'Flexible commission',
      'Technical support',
      'Marketing assets',
    ],
  },
];

const PartnerCard = ({ title, perks, index }) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: visible ? `${index * 120}ms` : '0ms',
      }}
      className={`group relative flex flex-col rounded-[20px] bg-white/95 backdrop-blur-sm p-[10px] max-w-[325px] w-full mx-auto
        shadow-[0_10px_18px_-14px_rgba(4,60,58,0.22)]
        ring-1 ring-white/40
        transition-all duration-700 ease-out
        hover:-translate-y-1 hover:shadow-[0_16px_28px_-14px_rgba(4,60,58,0.28)]
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
    >
      {/* Icon + Title */}
      <div className="flex flex-col items-center text-center mb-[15px]">
        {/* Icon */}
        <div className="relative mb-[15px] h-[50px] w-[50px] flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 shadow-lg shadow-teal-500/24 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 animate-[float_5s_ease-in-out_infinite]" />

          <Building2
            className="relative z-10 text-white animate-[float_5s_ease-in-out_infinite]"
            size={30}
            strokeWidth={2}
          />
        </div>

        {/* Title */}
        <h3 className="text-center text-[17.5px] sm:text-[15px] font-bold leading-tight text-slate-900">
          {title}
        </h3>
      </div>

      <ul className="mb-[15px] flex flex-col gap-[5px]">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-[10px] text-[12.5px] sm:text-[13.75px] text-slate-600">
            <span className="mt-[2.5px] flex h-[12.5px] w-[12.5px] flex-none items-center justify-center rounded-full border border-teal-400 text-teal-500">
              <Check size={7.5} strokeWidth={3} />
            </span>
            {perk}
          </li>
        ))}
      </ul>

      <a
        href="#bottomform"
        className="group/btn relative w-full overflow-hidden rounded-[10px] bg-gradient-to-r from-teal-400 to-teal-500 py-[7.5px] text-[11.25px] font-bold text-white
          shadow-sm shadow-teal-500/30 transition-all duration-300
          hover:shadow-md hover:shadow-teal-500/40 hover:scale-[1.03] active:scale-95"
      >
        <span className="relative z-10 flex items-center justify-center gap-[10px]">
          Apply Now
          <ArrowRight
            size={22.5}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </span>
        <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover/btn:translate-x-full" />
      </a>
    </div>
  );
};

const BecomePartner = () => {
  const [headingRef, headingVisible] = useReveal(0.4);

  return (
    <section className="relative w-full overflow-hidden py-5 sm:py-[25px]">
      {/* animated gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500" />

      {/* soft floating orbs for depth */}
      <div className="pointer-events-none absolute -left-[120px] top-[50px] h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -right-[100px] bottom-0 h-[400px] w-[400px] rounded-full bg-teal-600/20 blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
      <div className="pointer-events-none absolute right-1/3 top-0 h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl animate-[float_7s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-[1440px] px-[25px] sm:px-10 lg:px-[50px]">
        <h2
          ref={headingRef}
          className={`mb-[50px] text-center text-[30px] sm:text-[37.5px] font-extrabold tracking-tight text-white transition-all duration-700 ease-out sm:mb-[55px]
            ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
        >
          Become a Partnersss
        </h2>

        <div className="grid grid-cols-1 gap-[25px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[30px]">
          {PARTNERS.map((partner, i) => (
            <PartnerCard key={partner.title} index={i} {...partner} />
          ))}
        </div>
      </div>

      <style>{`\n        @keyframes float {\n          0%, 100% { transform: translateY(0px); }\n          50% { transform: translateY(-17.5px); }\n        }\n        @media (prefers-reduced-motion: reduce) {\n          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }\n        }\n      `}</style>
    </section>
  );
};

export default BecomePartner;