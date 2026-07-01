// import React from 'react';

// const steps = [
//   { 
//     id: 1, 
//     title: 'Prospect', 
//     color: 'bg-[#2DD4BF]',    
//     border: 'border-[#2DD4BF]', 
//     img: '/assets/image/logo/logos.png' 
//   },
//   { 
//     id: 2, 
//     title: 'Approach', 
//     color: 'bg-[#519ABA]',
//     border: 'border-[#519ABA]', 
//     img: 'https://www.instantmudra.net/apps/home/media/images/image-temp.jpg' 
//   },
//   { 
//     id: 3, 
//     title: 'KYC Collection', 
//     color: 'bg-[#F3924D]',
//     border: 'border-[#F3924D]', 
//     img: 'https://www.instantmudra.net/apps/home/media/images/about-temp2.jpg' 
//   },
//   { 
//     id: 4, 
//     title: 'KYC Validation', 
//     color: 'bg-[#66D2A3]',
//     border: 'border-[#66D2A3]', 
//     img: 'https://www.instantmudra.net/apps/home/media/images/intro-video.jpg' 
//   },
//   { 
//     id: 5, 
//     title: 'Account Setup', 
//     color: 'bg-[#7E7389]',
//     border: 'border-[#7E7389]', 
//     img: 'https://www.instantmudra.net/apps/home/media/images/case-study1.jpg' 
//   },
//   { 
//     id: 6, 
//     title: 'Let Start', 
//     color: 'bg-[#D26FA5]',
//     border: 'border-[#D26FA5]', 
//     img: 'https://i.pinimg.com/1200x/cc/87/d0/cc87d05cac84c6f7de24486693900a6e.jpg' 
//   },
// ];

// const Journey = () => {
//   return (
//     <div className="py-12 bg-white font-sans">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//         Let the Journey Begins...
//         <div className="w-12 h-0.5 bg-[#2dd4bf] mx-auto mt-2"></div>
//       </h2>

//       <div className="flex flex-wrap justify-center gap-4 px-4">
//         {steps.map((step) => (
//           <div key={step.id} className="flex flex-col items-center w-40">
           
//             <div className={`relative p-2 rounded-full border-4 ${step.border} mb-4 shadow-lg`}>
//               <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center">
//                 <img 
//                   src={step.img}
//                   alt={step.title} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             <div className="w-full text-center">
//               <p className="font-bold text-gray-800 mb-2 h-10 flex items-center justify-center">
//                 {step.title}
//               </p>
//               <div className={`${step.color} text-white py-1 rounded-sm text-sm font-semibold`}>
//                 Step{step.id}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Journey;













// import React, { useEffect, useRef, useState } from 'react';
// import { Search, MessagesSquare, FileCheck2, ShieldCheck, UserCog, Rocket } from 'lucide-react';

// const steps = [
//   {
//     id: 1,
//     title: 'Prospect',
//     desc: 'You bring the opportunity, we make it possible.',
//     icon: Search,
//   },
//   {
//     id: 2,
//     title: 'Approach',
//     desc: 'We connect with you and understand your business needs.',
//     icon: MessagesSquare,
//   },
//   {
//     id: 3,
//     title: 'KYC Collection',
//     desc: 'We collect necessary documents and information securely.',
//     icon: FileCheck2,
//   },
//   {
//     id: 4,
//     title: 'KYC Validation',
//     desc: 'Our team validates your documents and details.',
//     icon: ShieldCheck,
//   },
//   {
//     id: 5,
//     title: 'Account Setup',
//     desc: 'We set up your account and enable you to transact.',
//     icon: UserCog,
//   },
//   {
//     id: 6,
//     title: 'Let Start',
//     desc: "You're all set! Start transacting with confidence.",
//     icon: Rocket,
//   },
// ];

// const Journey = () => {
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden py-24 px-4"
//       style={{
//         background:
//           'radial-gradient(circle at 15% 20%, rgba(45,212,191,0.10), transparent 45%), radial-gradient(circle at 85% 80%, rgba(45,212,191,0.08), transparent 45%), #f7fafb',
//       }}
//     >
//       {/* ambient floating blobs */}
//       <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-300/20 blur-3xl animate-[float_9s_ease-in-out_infinite]" />
//       <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-teal-400/20 blur-3xl animate-[float_11s_ease-in-out_infinite_reverse]" />

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(20px) translateX(10px); }
//         }
//         @keyframes dashFlow {
//           to { stroke-dashoffset: -20; }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(28px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes popIn {
//           from { opacity: 0; transform: scale(0.6); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         @keyframes ringPulse {
//           0% { box-shadow: 0 0 0 0 rgba(45,212,191,0.35); }
//           70% { box-shadow: 0 0 0 14px rgba(45,212,191,0); }
//           100% { box-shadow: 0 0 0 0 rgba(45,212,191,0); }
//         }
//         .journey-card {
//           opacity: 0;
//         }
//         .journey-card.show {
//           animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
//         }
//         .journey-badge.show {
//           animation: popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards;
//         }
//         .icon-ring:hover {
//           transform: translateY(-6px) scale(1.05);
//           box-shadow: 0 20px 40px -12px rgba(20,184,166,0.35);
//         }
//       `}</style>

//       <div className="relative max-w-6xl mx-auto text-center mb-20">
//         <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
//           Let the <span className="text-teal-500">Journey</span> Begins&hellip;
//         </h2>
//         <div className="w-14 h-1 rounded-full bg-teal-400 mx-auto mt-5" />
//       </div>

//       <div className="relative max-w-6xl mx-auto">
//         {/* connector line behind icons, desktop only */}
//         <div className="hidden md:block absolute top-14 left-0 right-0 px-20">
//           <svg width="100%" height="4" className="overflow-visible">
//             <line
//               x1="0"
//               y1="2"
//               x2="100%"
//               y2="2"
//               stroke="#5eead4"
//               strokeWidth="2"
//               strokeDasharray="6 8"
//               style={{ animation: visible ? 'dashFlow 1.2s linear infinite' : 'none' }}
//             />
//           </svg>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-14 gap-x-4 relative">
//           {steps.map((step, i) => {
//             const Icon = step.icon;
//             return (
//               <div
//                 key={step.id}
//                 className={`journey-card ${visible ? 'show' : ''} flex flex-col items-center text-center px-2`}
//                 style={{ animationDelay: `${i * 130}ms` }}
//               >
//                 {/* number badge */}
//                 <div
//                   className={`journey-badge ${visible ? 'show' : ''} relative z-10 -mb-4 w-8 h-8 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center shadow-md shadow-teal-500/40`}
//                   style={{ animationDelay: `${i * 130 + 250}ms` }}
//                 >
//                   0{step.id}
//                 </div>

//                 {/* icon circle - glassmorphic */}
//                 <div
//                   className="icon-ring group relative w-28 h-28 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-out"
//                   style={{
//                     background: 'rgba(255,255,255,0.55)',
//                     backdropFilter: 'blur(12px)',
//                     WebkitBackdropFilter: 'blur(12px)',
//                     border: '1.5px solid rgba(45,212,191,0.55)',
//                     boxShadow: '0 8px 24px -8px rgba(20,184,166,0.25)',
//                     animation: visible ? 'ringPulse 2.4s ease-out 1' : 'none',
//                     animationDelay: `${i * 130 + 400}ms`,
//                   }}
//                 >
//                   <Icon
//                     className="w-9 h-9 text-teal-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
//                     strokeWidth={1.75}
//                   />
//                 </div>

//                 <h3 className="mt-5 font-bold text-slate-900 text-lg">{step.title}</h3>
//                 <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-[160px]">
//                   {step.desc}
//                 </p>

//                 <div
//                   className="mt-4 px-4 py-1.5 rounded-full text-sm font-semibold text-teal-700"
//                   style={{
//                     background: 'rgba(45,212,191,0.14)',
//                     border: '1px solid rgba(45,212,191,0.3)',
//                   }}
//                 >
//                   Step {step.id}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Journey;
















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
const ICON_SIZE = 72;
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
      className="relative overflow-hidden py-16 px-4"
      style={{
        background:
          'radial-gradient(circle at 15% 20%, rgba(45,212,191,0.10), transparent 45%), radial-gradient(circle at 85% 80%, rgba(45,212,191,0.08), transparent 45%), #f7fafb',
      }}
    >
      {/* ambient floating blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-teal-300/20 blur-3xl animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-400/20 blur-3xl animate-[float_11s_ease-in-out_infinite_reverse]" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(16px) translateX(8px); }
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
          50% { transform: translateY(-5px) rotate(-4deg); }
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
          transform: translateY(-4px) scale(1.06);
          box-shadow: 0 16px 30px -10px rgba(20,184,166,0.35);
        }
      `}</style>

      <div className="relative max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900">
          Let the <span className="text-teal-500">Journey</span> Begins&hellip;
        </h2>
        <div className="w-12 h-1 rounded-full bg-teal-400 mx-auto mt-3" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* connector line — centered on the icon circles */}
        <div
          className="hidden md:block absolute left-0 right-0 px-16"
          style={{ top: ICON_SIZE / 2 }}
        >
          <svg width="100%" height="2" className="overflow-visible block">
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#5eead4"
              strokeWidth="2"
              strokeDasharray="6 8"
              style={{ animation: visible ? 'dashFlow 1.2s linear infinite' : 'none' }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-3 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={`journey-card ${visible ? 'show' : ''} flex flex-col items-center text-center px-1`}
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
                    border: '1.5px solid rgba(45,212,191,0.55)',
                    boxShadow: '0 6px 18px -8px rgba(20,184,166,0.25)',
                    zIndex: 10,
                    animation: visible ? 'ringPulse 2.2s ease-out 1' : 'none',
                    animationDelay: `${i * ICON_STAGGER + 350}ms`,
                  }}
                >
                  <Icon
                    className="icon-float w-6 h-6 text-teal-600 transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.75}
                    style={{ animationDelay: `${i * ICON_STAGGER + 450}ms` }}
                  />

                  <div
                    className={`journey-badge ${visible ? 'show' : ''} absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-teal-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm shadow-teal-500/40`}
                    style={{ animationDelay: `${i * ICON_STAGGER + 200}ms` }}
                  >
                    {step.id}
                  </div>
                </div>

                <h3 className="mt-3 font-bold text-slate-900 text-sm">{step.title}</h3>
                <div
                  className="mt-2.5 px-3 py-1 rounded-full text-[11px] font-semibold text-teal-700"
                  style={{
                    background: 'rgba(45,212,191,0.14)',
                    border: '1px solid rgba(45,212,191,0.3)',
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