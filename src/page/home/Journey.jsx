import React, { useEffect, useRef, useState } from 'react';
import { Search, MessagesSquare, FileCheck2, ShieldCheck, UserCog, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Prospect',
    desc: 'You bring the opportunity, we make it possible.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Approach',
    desc: 'We connect with you and understand your business needs.',
    icon: MessagesSquare,
  },
  {
    id: 3,
    title: 'KYC Collection',
    desc: 'We collect necessary documents and information securely.',
    icon: FileCheck2,
  },
  {
    id: 4,
    title: 'KYC Validation',
    desc: 'Our team validates your documents and details.',
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: 'Account Setup',
    desc: 'We set up your account and enable you to transact.',
    icon: UserCog,
  },
  {
    id: 6,
    title: 'Let Start',
    desc: "You're all set! Start transacting with confidence.",
    icon: Rocket,
  },
];

// Icon circle diameter in px — the connector line is centered against this value.
const ICON_SIZE = 90;
const ICON_STAGGER = 667; // six icons appear sequentially across ~4 seconds

const Journey = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 px-5"
      style={{
        background:
          'radial-gradient(circle at 15% 20%, rgba(45,212,191,0.10), transparent 45%), radial-gradient(circle at 85% 80%, rgba(45,212,191,0.08), transparent 45%), #f7fafb',
      }}
    >
      {/* ambient floating blobs */}
      <div className="pointer-events-none absolute -top-[120px] -left-[120px] w-[400px] h-[400px] rounded-full bg-teal-300/20 blur-3xl animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-[120px] -right-[120px] w-[400px] h-[400px] rounded-full bg-teal-400/20 blur-3xl animate-[float_11s_ease-in-out_infinite_reverse]" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(10px); }
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -20; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.6); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes ringPulse {
          0% { box-shadow: 0 0 0 0 rgba(45,212,191,0.35); }
          70% { box-shadow: 0 0 0 10px rgba(45,212,191,0); }
          100% { box-shadow: 0 0 0 0 rgba(45,212,191,0); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6.25px) rotate(-4deg); }
        }
        .journey-card {
          opacity: 0;
        }
        .journey-card.show {
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .journey-badge.show {
          animation: popIn 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .icon-float {
          animation: iconFloat 2.6s ease-in-out infinite;
        }
        .icon-ring:hover {
          transform: translateY(-5px) scale(1.06);
          box-shadow: 0 16px 30px -10px rgba(20,184,166,0.35);
        }
      `}</style>

      <div className="relative max-w-[1280px] mx-auto text-center mb-[60px]">
        <h2 className="text-[22.5px] md:text-[25px] font-extrabold tracking-tight text-slate-900">
          Let the <span className="text-teal-500">Journey</span> Begins&hellip;
        </h2>
        <div className="w-[60px] h-[5px] rounded-full bg-teal-400 mx-auto mt-[15px]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto">
        {/* connector line — centered on the icon circles */}
        <div
          className="hidden md:block absolute left-0 right-0 px-20"
          style={{ top: ICON_SIZE / 2 }}
        >
          <svg width="100%" height="2.5" className="overflow-visible block">
            <line
              x1="0"
              y1="1.25"
              x2="100%"
              y2="1.25"
              stroke="#5eead4"
              strokeWidth="2.5"
              strokeDasharray="7.5 10"
              style={{ animation: visible ? 'dashFlow 1.2s linear infinite' : 'none' }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-[15px] relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={`journey-card ${visible ? 'show' : ''} flex flex-col items-center text-center px-[5px]`}
                style={{ animationDelay: `${i * ICON_STAGGER}ms` }}
              >
                {/* icon circle with overlapping step-number badge */}
                <div
                  className="icon-ring group relative flex items-center justify-center cursor-pointer transition-all duration-500 ease-out rounded-full"
                  style={{
                    width: ICON_SIZE,
                    height: ICON_SIZE,
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1.875px solid rgba(45,212,191,0.55)',
                    boxShadow: '0 6px 18px -8px rgba(20,184,166,0.25)',
                    zIndex: 10,
                    animation: visible ? 'ringPulse 2.2s ease-out 1' : 'none',
                    animationDelay: `${i * ICON_STAGGER + 350}ms`,
                  }}
                >
                  <Icon
                    className="icon-float w-[30px] h-[30px] text-teal-600 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.75}
                    style={{ animationDelay: `${i * ICON_STAGGER + 450}ms` }}
                  />

                  <div
                    className={`journey-badge ${visible ? 'show' : ''} absolute -top-[7.5px] -right-[7.5px] w-[25px] h-[25px] rounded-full bg-teal-500 text-white text-[12.5px] font-bold flex items-center justify-center shadow-sm shadow-teal-500/40`}
                    style={{ animationDelay: `${i * ICON_STAGGER + 200}ms` }}
                  >
                    {step.id}
                  </div>
                </div>

                <h3 className="mt-[15px] font-bold text-slate-900 text-[17.5px]">{step.title}</h3>
                <div
                  className="mt-[12.5px] px-[15px] py-[5px] rounded-full text-[13.75px] font-semibold text-teal-700"
                  style={{
                    background: 'rgba(45,212,191,0.14)',
                    border: '1.25px solid rgba(45,212,191,0.3)',
                  }}
                >
                  Step {step.id}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;