// import React, { useState, useEffect } from "react";
// import {
//   CheckCircle,
//   Users,
//   Briefcase,
//   Lock,
//   Globe,
//   MoveRight,
//   Shield,
//   Zap,
// } from "lucide-react";
// import Ourclient from "../home/Ourclient";

// const AnimatedNumber = ({ value }) => {
//   const [count, setCount] = useState(0);

//   const target = parseInt(value.replace(/[^0-9]/g, ""));
//   const symbol = value.replace(/[0-9]/g, "");

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = target / (duration / 16);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(timer);
//   }, [target]);

//   return (
//     <>
//       {count}
//       {symbol}
//     </>
//   );
// };

// const AboutPage = () => {
//   const [activeTab, setActiveTab] = useState("mission");

//   const tabData = {
//     mission: {
//       quote:
//         "To build a secure, intelligent, and inclusive digital ecosystem that enables financial services for all.",
//       desc: "Our mission is to build a secure, intelligent, and inclusive digital ecosystem that seamlessly enables payments, banking, credit, insurance, travel, and API-driven financial services. We focus on creating technology-led solutions that are reliable, compliant, and easy to use, empowering both businesses and individuals to access essential financial services. By simplifying complex financial processes and ensuring trust at every level, we help our partners, merchants, and users grow with confidence and long-term stability in an evolving digital economy.",
//     },
//     vision: {
//       quote: "To become a trusted digital financial backbone for India.",
//       desc: "Our vision is to become a trusted digital financial backbone for India by delivering secure, scalable, and compliant fintech and service platforms. We aim to support the nation’s growing digital economy by enabling sustainable financial access for businesses, merchants, and individuals across urban and rural regions alike. Through innovation, strong infrastructure, and long-term impact-driven solutions, we strive to contribute to inclusive economic growth and build lasting trust in digital financial services.",
//     },
//   };

//   const values = [
//     {
//       title: "Security First",
//       desc: "Bank-grade security protocols ensuring safe transactions",
//       icon: <Shield className="w-6 h-6 text-white" />,
//       style: "bg-slate-50 text-slate-800",
//       iconBg: "bg-[#2DD4BF]",
//     },
//     {
//       title: "Innovation",
//       desc: "Cutting-edge technology driving financial solutions",
//       icon: <Zap className="w-6 h-6 text-white" />,
//       style: "bg-slate-50 text-slate-800",
//       iconBg: "bg-[#2DD4BF]",
//     },
//     {
//       title: "Customer Focus",
//       desc: "Dedicated to retailer success and satisfaction",
//       icon: <Users className="w-6 h-6 text-white" />,
//       style: "bg-slate-50 text-slate-800",
//       iconBg: "bg-[#2DD4BF]",
//     },
//   ];

//   return (
//     <div className="font-sans text-gray-800 min-h-screen">
    
//       <section
//         className="relative h-[320px] sm:h-[500px] flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative text-center text-white z-10 px-4">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-2">About Us</h1>
//         </div>
//       </section>

    
//       <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
         
//           <div className="relative mx-auto md:mx-0 max-w-md md:max-w-none">
//             <div className="w-full sm:w-10/12 overflow-hidden rounded-[40px] shadow-lg mx-auto md:mx-0">
//               <img
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//                 alt="Digital financial services"
//                 className="w-full h-[380px] sm:h-[450px] object-cover"
//               />
//             </div>

//             <div className="absolute -bottom-8 sm:-bottom-10 right-4 sm:right-1 w-8/12 sm:w-6/12 rounded-[40px] overflow-hidden shadow-md">
//               <img
//                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
//                 alt="Merchant empowerment"
//                 className="w-full h-48 sm:h-64 object-cover"
//               />
//             </div>

//             <div
//               className="absolute top-6 sm:top-10 right-2 sm:right-4 bg-[#00D3CD] text-white p-5 sm:p-8 rounded-2xl shadow-lg min-w-[120px] sm:min-w-[150px] text-center"
//               style={{
//                 clipPath: "polygon(0 0, 100% 0, 100% 82%, 18% 100%, 0 100%)",
//               }}
//             >
//               <h3 className="text-3xl sm:text-4xl font-bold">30K+</h3>
//               <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
//                 Active <br /> Partners
//               </p>
//             </div>
//           </div>

//           <div className="space-y-6 sm:space-y-8 text-center md:text-left mt-12 md:mt-0">
//             <div>
//               <h4 className="text-[#00D3CD] font-bold tracking-[0.2em] uppercase text-xs mb-3 sm:mb-4">
//                 About AbheePay
//               </h4>
//               <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-medium leading-tight sm:leading-[1.1] text-slate-800">
//                 Powering Digital Finance for <br className="hidden sm:block" />
//                 <span className="font-bold">Modern Indian Businesses</span>
//               </h2>
//             </div>

//             <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-base">
//               AbheePay is a technology-driven fintech and digital financial
//               services company delivering secure, scalable, and compliance-ready
//               solutions across India.
//             </p>

//             <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-base">
//               Designed to serve merchants, MSMEs, enterprises, partners, and
//               consumers, AbheePay combines robust financial infrastructure with
//               innovation-led technology to simplify transactions and enable
//               sustainable business growth.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//               {[
//                 "Secure & Scalable Payment Solutions",
//                 "Banking, Credit & Insurance Services",
//                 "API-Led Financial Infrastructure",
//                 "Trusted Platform for MSMEs & Enterprises",
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
//                   <CheckCircle className="text-[#00D3CD] w-5 h-5 flex-shrink-0" />
//                   <span className="text-sm font-semibold text-gray-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#00D3CD] py-10 sm:py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-white text-center">
//             {[
//               { icon: <Briefcase />, count: "1000+", label: "Partner Retailers" },
//               { icon: <Globe />, count: "50+", label: "Cities Covered" },
//               { icon: <Users />, count: "10k", label: "Happy Customers" },
//               { icon: <Lock />, count: "100%", label: "Secure Transactions" },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 border-b sm:border-r border-white/20 last:border-0 pb-6 sm:pb-0"
//               >
//                 <div className="bg-black/10 p-3 rounded-full shrink-0">
//                   {stat.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-2xl sm:text-3xl font-bold">
//                     <AnimatedNumber value={stat.count} />
//                   </h3>
//                   <p className="text-[10px] sm:text-xs text-[#feffff] uppercase mt-1">
//                     {stat.label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

 
//       <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
//           <div className="space-y-6 text-center md:text-left">
//             <h4 className="text-[#00D3CD] font-bold uppercase text-sm tracking-wide">
//               Our Mission & Vision
//             </h4>
//             <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
//               Our Main Goal to Satisfied Local & Global Clients
//             </h2>

//             <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 my-6">
//               <button
//                 onClick={() => setActiveTab("mission")}
//                 className={`px-5 sm:px-6 py-2 rounded-full text-sm font-semibold transition ${
//                   activeTab === "mission"
//                     ? "bg-[#00D3CD] text-white shadow-md"
//                     : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 Our Mission
//               </button>
//               <button
//                 onClick={() => setActiveTab("vision")}
//                 className={`px-5 sm:px-6 py-2 rounded-full text-sm font-semibold transition ${
//                   activeTab === "vision"
//                     ? "bg-[#00D3CD] text-white shadow-md"
//                     : "bg-gray-100 hover:bg-gray-200"
//                 }`}
//               >
//                 Our Vision
//               </button>
//             </div>

//             <p className="text-gray-600 italic text-base max-w-xl mx-auto md:mx-0">
//               {tabData[activeTab].quote}
//             </p>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
//               {tabData[activeTab].desc}
//             </p>
//           </div>

//           <div className="mt-8 md:mt-0">
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
//               alt="Global Office"
//               className="rounded-2xl shadow-2xl w-full h-auto aspect-[4/3] object-cover"
//             />
//           </div>
//         </div>
//       </section>

     
//       <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10 sm:mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
//               Our Core Values
//             </h2>
//             <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
//               Built on the foundation of trust, innovation, and excellence
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {values.map((item, i) => (
//               <div
//                 key={i}
//                 className={`relative p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-sm ${item.style}`}
//               >
//                 <div
//                   className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 sm:mb-8 shadow-sm`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
//                 <p className="text-sm leading-relaxed text-slate-500">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Ourclient />
//     </div>
//   );
// };

// export default AboutPage;





















import React, { useState, useEffect } from "react";
import {
  CheckCircle,
  Users,
  Briefcase,
  Lock,
  Globe,
  MoveRight,
  Shield,
  Zap,
} from "lucide-react";
import Ourclient from "../home/Ourclient";

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  const target = parseInt(value.replace(/[^0-9]/g, ""));
  const symbol = value.replace(/[0-9]/g, "");

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {symbol}
    </>
  );
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabData = {
    mission: {
      quote:
        "To build a secure, intelligent, and inclusive digital ecosystem that enables financial services for all.",
      desc: "Our mission is to build a secure, intelligent, and inclusive digital ecosystem that seamlessly enables payments, banking, credit, insurance, travel, and API-driven financial services. We focus on creating technology-led solutions that are reliable, compliant, and easy to use, empowering both businesses and individuals to access essential financial services. By simplifying complex financial processes and ensuring trust at every level, we help our partners, merchants, and users grow with confidence and long-term stability in an evolving digital economy.",
    },
    vision: {
      quote: "To become a trusted digital financial backbone for India.",
      desc: "Our vision is to become a trusted digital financial backbone for India by delivering secure, scalable, and compliant fintech and service platforms. We aim to support the nation’s growing digital economy by enabling sustainable financial access for businesses, merchants, and individuals across urban and rural regions alike. Through innovation, strong infrastructure, and long-term impact-driven solutions, we strive to contribute to inclusive economic growth and build lasting trust in digital financial services.",
    },
  };

  const values = [
    {
      title: "Security First",
      desc: "Bank-grade security protocols ensuring safe transactions",
      icon: <Shield className="w-5 h-5 text-white" />,
      style: "bg-slate-50 text-slate-800",
      iconBg: "bg-[#2DD4BF]",
    },
    {
      title: "Innovation",
      desc: "Cutting-edge technology driving financial solutions",
      icon: <Zap className="w-5 h-5 text-white" />,
      style: "bg-slate-50 text-slate-800",
      iconBg: "bg-[#2DD4BF]",
    },
    {
      title: "Customer Focus",
      desc: "Dedicated to retailer success and satisfaction",
      icon: <Users className="w-5 h-5 text-white" />,
      style: "bg-slate-50 text-slate-800",
      iconBg: "bg-[#2DD4BF]",
    },
  ];

  return (
    <div className="font-sans text-gray-800 min-h-screen text-[13px] overflow-x-hidden">
      <style>{`
        @keyframes ap-fadeUp {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ap-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ap-pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(0, 211, 205, 0.45); }
          70% { box-shadow: 0 0 0 10px rgba(0, 211, 205, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 211, 205, 0); }
        }
        @keyframes ap-shimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes ap-drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.08); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .ap-fade-up { animation: ap-fadeUp 0.7s ease-out both; }
        .ap-fade-up-1 { animation: ap-fadeUp 0.7s 0.08s ease-out both; }
        .ap-fade-up-2 { animation: ap-fadeUp 0.7s 0.16s ease-out both; }
        .ap-fade-up-3 { animation: ap-fadeUp 0.7s 0.24s ease-out both; }
        .ap-float { animation: ap-float 4s ease-in-out infinite; }
        .ap-pulse-ring { animation: ap-pulseRing 2.4s ease-out infinite; }
        .ap-drift { animation: ap-drift 8s ease-in-out infinite; }
        .ap-card:hover .ap-card-glow { opacity: 1; }
        .ap-card-glow {
          opacity: 0;
          transition: opacity 0.35s ease;
          background: linear-gradient(135deg, rgba(0,211,205,0.18), rgba(45,212,191,0) 60%);
        }
        .ap-shine {
          position: absolute;
          top: 0; left: 0; height: 100%; width: 40%;
          background: linear-gradient(115deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: ap-shimmer 3.2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero */}
      <section className="relative min-h-[120px] sm:min-h-[170px] flex items-center bg-gray-50 pt-16 sm:pt-20 pb-4 sm:pb-6 overflow-hidden">
        <div
          className="absolute -top-10 left-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-[#00D3CD]/20 blur-3xl ap-drift"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-16 left-1/3 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[#2DD4BF]/15 blur-3xl ap-drift"
          style={{ animationDelay: "1.2s" }}
          aria-hidden="true"
        />
        <div className="relative text-left text-slate-800 z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full ap-fade-up">
          <h1 className="text-xl sm:text-2xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-8 items-center">

          <div className="relative mx-auto md:mx-0 max-w-sm md:max-w-none ap-fade-up">
            <div className="w-full sm:w-10/12 overflow-hidden rounded-xl shadow-md mx-auto md:mx-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Digital financial services"
                className="w-full h-[160px] sm:h-[200px] object-cover"
              />
            </div>

            <div className="absolute -bottom-4 sm:-bottom-5 right-4 sm:right-1 w-9/12 sm:w-5/12 rounded-xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
                alt="Merchant empowerment"
                className="w-full h-20 sm:h-28 object-cover"
              />
            </div>

            <div
              className="absolute top-3 sm:top-4 right-2 sm:right-4 bg-[#00D3CD] text-white p-2 sm:p-3 rounded-lg shadow-md min-w-[80px] sm:min-w-[100px] text-center ap-float ap-pulse-ring"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 82%, 18% 100%, 0 100%)",
              }}
            >
              <h3 className="text-base sm:text-lg font-bold">30K+</h3>
              <p className="text-[8px] font-bold uppercase tracking-[0.1em] mt-0.5">
                Active <br /> Partners
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left mt-8 md:mt-0 ap-fade-up-1">
            <div>
              <h4 className="text-[#00D3CD] font-bold tracking-[0.18em] uppercase text-[10px] mb-1.5">
                About AbheePay
              </h4>
              <h2 className="text-xl sm:text-2xl lg:text-[26px] font-serif font-medium leading-tight sm:leading-[1.15] text-slate-800">
                Powering Digital Finance for{" "}
                <span className="font-bold">Modern Indian Businesses</span>
              </h2>
            </div>

            <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-xs">
              AbheePay is a technology-driven fintech and digital financial
              services company delivering secure, scalable, and compliance-ready
              solutions across India.
            </p>

            <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-xs">
              Designed to serve merchants, MSMEs, enterprises, partners, and
              consumers, AbheePay combines robust financial infrastructure with
              innovation-led technology to simplify transactions and enable
              sustainable business growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
              {[
                "Secure & Scalable Payment Solutions",
                "Banking, Credit & Insurance Services",
                "API-Led Financial Infrastructure",
                "Trusted Platform for MSMEs & Enterprises",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 justify-center md:justify-start transition-transform duration-200 hover:translate-x-1">
                  <CheckCircle className="text-[#00D3CD] w-3.5 h-3.5 flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative bg-[#00D3CD] py-4 sm:py-5 overflow-hidden">
        <div className="ap-shine" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 text-white text-center">
            {[
              { icon: <Briefcase className="w-4 h-4" />, count: "1000+", label: "Partner Retailers" },
              { icon: <Globe className="w-4 h-4" />, count: "50+", label: "Cities Covered" },
              { icon: <Users className="w-4 h-4" />, count: "10k", label: "Happy Customers" },
              { icon: <Lock className="w-4 h-4" />, count: "100%", label: "Secure Transactions" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 border-b sm:border-r border-white/20 last:border-0 pb-3 sm:pb-0"
              >
                <div className="bg-white/15 backdrop-blur-sm ring-1 ring-white/25 p-2 rounded-full shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    <AnimatedNumber value={stat.count} />
                  </h3>
                  <p className="text-[8px] sm:text-[9px] text-[#feffff] uppercase mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 items-center">
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-[#00D3CD] font-bold uppercase text-[10px] tracking-wide">
              Our Mission & Vision
            </h4>
            <h2 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
              Our Main Goal to Satisfied Local & Global Clients
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 my-2">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-3.5 sm:px-4 py-1 rounded-full text-[11px] font-semibold transition ${
                  activeTab === "mission"
                    ? "bg-[#00D3CD] text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-3.5 sm:px-4 py-1 rounded-full text-[11px] font-semibold transition ${
                  activeTab === "vision"
                    ? "bg-[#00D3CD] text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Our Vision
              </button>
            </div>

            <p className="text-gray-600 italic text-xs max-w-xl mx-auto md:mx-0">
              {tabData[activeTab].quote}
            </p>
            <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed max-w-xl mx-auto md:mx-0">
              {tabData[activeTab].desc}
            </p>
          </div>

          <div className="mt-4 md:mt-0 relative group">
            <div className="absolute -inset-1.5 rounded-xl bg-gradient-to-br from-[#00D3CD]/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Global Office"
              className="relative rounded-xl shadow-lg w-full h-auto aspect-[16/10] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4 sm:mb-5">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">
              Our Core Values
            </h2>
            <p className="text-slate-500 text-[11px] sm:text-xs max-w-2xl mx-auto">
              Built on the foundation of trust, innovation, and excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {values.map((item, i) => (
              <div
                key={i}
                className={`ap-card relative overflow-hidden p-3 sm:p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-sm border border-transparent hover:border-[#00D3CD]/40 ${item.style}`}
              >
                <div className="ap-card-glow absolute inset-0 pointer-events-none" aria-hidden="true" />
                <div
                  className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${item.iconBg} flex items-center justify-center mb-3 sm:mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>
                <h3 className="relative text-sm sm:text-base font-bold mb-1">{item.title}</h3>
                <p className="relative text-[11px] leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ourclient />
    </div>
  );
};

export default AboutPage;