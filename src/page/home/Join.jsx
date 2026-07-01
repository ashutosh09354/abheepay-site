// import React from 'react';

// const Join = () => {
//   return (
//     <div className="relative w-full h-[420px] sm:h-[380px] md:h-[300px] lg:h-[380px] overflow-hidden">

//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//       </div>


//       <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 flex items-center">
//         <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0">

//           <div className="text-white space-y-3 md:space-y-4 w-full md:w-auto text-center md:text-left">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide">
//               Come...Grow With Us...
//             </h2>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight">
//               Become an Abheepay Retailer and Grow Your Income
//               <br className="hidden md:block" />
//               upto Rs.50,000/- to Rs.1,00,000/- per month
//             </h1>
//           </div>


//           <div className="flex items-center justify-center md:justify-end w-full md:w-auto">

//             <div className="hidden md:block h-28 lg:h-32 w-[1px] bg-gray-400/50 mx-8 lg:mx-12"></div>


//             <a
//               href="#bottomform"
//               className="bg-[#2DD4BF] text-white font-bold py-3.5 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-300 shadow-lg inline-block hover:bg-[#2cc8b5] active:scale-95"
//             >
//               Join Us
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Join;




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
      className={`group relative flex flex-col rounded-2xl bg-white/95 backdrop-blur-sm p-2 max-w-[260px] w-full mx-auto
        shadow-[0_10px_18px_-14px_rgba(4,60,58,0.22)]
        ring-1 ring-white/40
        transition-all duration-700 ease-out
        hover:-translate-y-1 hover:shadow-[0_16px_28px_-14px_rgba(4,60,58,0.28)]
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
    >
      {/* Icon + Title */}
      <div className="flex flex-col items-center text-center mb-3">
        {/* Icon */}
        <div className="relative mb-3 h-10 w-10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 shadow-lg shadow-teal-500/24 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 animate-[float_5s_ease-in-out_infinite]" />

          <Building2
            className="relative z-10 text-white animate-[float_5s_ease-in-out_infinite]"
            size={24}
            strokeWidth={2}
          />
        </div>

        {/* Title */}
        <h3 className="text-center text-sm sm:text-[12px] font-bold leading-tight text-slate-900">
          {title}
        </h3>
      </div>

      <ul className="mb-3 flex flex-col gap-1">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 text-[10px] sm:text-[11px] text-slate-600">
            <span className="mt-0.5 flex h-2.5 w-2.5 flex-none items-center justify-center rounded-full border border-teal-400 text-teal-500">
              <Check size={6} strokeWidth={3} />
            </span>
            {perk}
          </li>
        ))}
      </ul>

      <a
        href="#bottomform"
        className="group/btn relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 py-1.5 text-[9px] font-bold text-white
          shadow-sm shadow-teal-500/30 transition-all duration-300
          hover:shadow-md hover:shadow-teal-500/40 hover:scale-[1.03] active:scale-95"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Apply Now
          <ArrowRight
            size={18}
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
    <section className="relative w-full overflow-hidden py-4 sm:py-5">
      {/* animated gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500" />

      {/* soft floating orbs for depth */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-600/20 blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
      <div className="pointer-events-none absolute right-1/3 top-0 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-[float_7s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <h2
          ref={headingRef}
          className={`mb-10 text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-white transition-all duration-700 ease-out sm:mb-11
            ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}
        >
          Become a Partner
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {PARTNERS.map((partner, i) => (
            <PartnerCard key={partner.title} index={i} {...partner} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </section>
  );
};

export default BecomePartner;