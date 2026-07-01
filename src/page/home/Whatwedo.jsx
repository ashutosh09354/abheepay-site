// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const Whatwedo = () => {
//   const services = [
//     {
//       id: 2,
//       title: "UPI, Cards, Net Banking, Wallet",
//       image:
//         "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
//       link: "/services/online-payment-gateway–upi-cards-net-banking-wallets",
//     },
//     {
//       id: 3,
//       title: " POS & Android POS Devices",
//       image:
//         "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
//       link: "/services/pos-android-pos-devices",
//     },
//     {
//       id: 4,
//       title: "QR-Based Contactless Payments",
//       image: "https://assets-160c6.kxcdn.com/wp-content/uploads/2023/11/2023-11-21-de-en-1.jpg",
//       link: "/services/qr-based-contactless-payments",
//     },
//     {
//       id: 7,
//       title: "Assisted Banking & Cash Management",
//       image:
//         "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202505/682b17b7c169f-cash-in-vogue-currency-in-circulation-hits-rs-372-lakh-crore-in-fy25-vs-rs-145-lakh-crore-in-fy15-193618865-16x9.jpg",
//       link: "/services/assisted-banking-cash-management",
//     },
//     {
//       id: 8,
//       title: " AEPS – Cash withdrawal, balance inquiry, mini statement",
//       image:
//         "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80",
//       link: "/services/aeps-cash-withdrawal-balance-inquiry-mini-statement",
//     },
//     {
//       id: 9,
//       title: " Micro ATM (mATM) services",
//       image: "https://www.smplraj.in/Content/front/services/Micro%20ATM.png",
//       link: "/services/micro-atm-matm-services",
//     },
//     // {
//     //   id: 10,
//     //   title: "Domestic Money Transfer (DMT)",
//     //   image:
//     //     "https://i.pinimg.com/736x/80/8a/29/808a2962331deef5a5e681abf03270da.jpg",
//     //   link: "/services/domestic-money-transfer",
//     // },
//     {
//       id: 11,
//       title: "BBPS, Recharge & Bill Payments",
//       image:
//         "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&w=800&q=80",
//       link: "/services/bbps-recharge-bill-payments",
//     },
//     {
//       id: 13,
//       title: " Mobile, DTH & data card recharges",
//       image:
//         "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
//       link: "/services/mobile-dth-data-card-recharges",
//     },
//     {
//       id: 14,
//       title: "Credit card bill payments",
//       image:
//         "https://i.pinimg.com/736x/92/ad/b6/92adb64c53082c7c1ab80cd981488763.jpg",
//       link: "/services/credit-card-bill-payments",
//     },
//     {
//       id: 15,
//       title: "Lending & Credit Solutions",
//       image:
//         "https://i.pinimg.com/1200x/ed/bf/60/edbf60cc0e00a1cdae23f114957c8777.jpg",
//       link: "/services/lending-credit-solutions",
//     },
//     {
//       id: 16,
//       title: "Business loans & working capital finance",
//       image:
//         "https://i.pinimg.com/736x/4a/c8/8a/4ac88a04b4c466e16f8aa077a38ac027.jpg",
//       link: "/services/business-loans-working-capital-finance",
//     },
//     {
//       id: 17,
//       title: "Personal loans with digital onboarding",
//       image:
//         "https://i.pinimg.com/1200x/95/5f/13/955f137993310b5d346434f529558048.jpg",
//       link: "/services/personal-loans-with-digital-onboarding",
//     },
//     {
//       id: 18,
//       title: "Credit card sourcing and lifecycle support",
//       image:
//         "https://i.pinimg.com/736x/22/0e/08/220e08aa2fa0a4e92575773e826cba0f.jpg",
//       link: "/services/credit-card-sourcing-and-lifecycle-support",
//     },
//     {
//       id: 20,
//       title: "Health insurance",
//       image:
//         "https://i.pinimg.com/1200x/af/61/b8/af61b867229116f342e411c33c6b3911.jpg",
//       link: "/services/health-insurance",
//     },
//     {
//       id: 21,
//       title: "Life insurance",
//       image:
//         "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=800&q=80",
//       link: "/services/life-insurance",
//     },
//     {
//       id: 22,
//       title: "General & travel insurance",
//       image:
//         "https://i.pinimg.com/736x/bb/9e/0f/bb9e0f2c3ce9db7780ca496d0aecbcc3.jpg",
//       link: "/services/general-travel-insurance",
//     },
//     {
//       id: 23,
//       title: "Travel APIs & Travel Services",
//       image:
//         "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
//       link: "/services/travel-apis-travel-services",
//     },
//     {
//       id: 24,
//       title: " Flight booking (Domestic & International)",
//       image:
//         "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos125503370xl-1718329782038.jpg",
//       link: "/services/flight-booking-domestic-international",
//     },
//     {
//       id: 25,
//       title: "Bus ticket booking",
//       image:
//         "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
//       link: "/services/bus-ticket-booking",
//     },
//     {
//       id: 26,
//       title: "Hotel booking",
//       image:
//         "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
//       link: "/services/hotel-booking",
//     },
//     {
//       id: 27,
//       title: "Travel insurance integration",
//       image:
//         "https://i.pinimg.com/1200x/a2/91/a5/a291a55a2854dba3645ce0fa6d98f9c4.jpg",
//       link: "/services/travel-insurance-integration",
//     },
//     {
//       id: 29,
//       title: "Technology & API Services",
//       image:
//         "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
//       link: "/services/technology-api-services",
//     },
//     {
//       id: 30,
//       title: " Payment, banking, travel & wallet APIs",
//       image:
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
//       link: "/services/payment-banking-travel-wallet-apis",
//     },
//     {
//       id: 32,
//       title: " Merchant, distributor & admin dashboards",
//       image:
//         "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
//       link: "/services/Merchant-distributor-admin-dashboards",
//     },
//     {
//       id: 33,
//       title: "White-label fintech & travel platforms",
//       image:
//         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
//       link: "/services/white-label-fintech-travel-platforms",
//     },
//   ];

//   return (
//     <section className="py-6 bg-white font-sans">
//       <div className="container mx-auto px-6 md:px-32 text-center relative">
     
//         <div className="mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             What we do?
//           </h2>
//           <div className="w-12 h-0.5 bg-[#2dd4bf] mx-auto"></div>
//         </div>

        
//         <style
//           dangerouslySetInnerHTML={{
//             __html: `
//             .swiper-container-wrapper {
//               position: relative;
//             }
//             .custom-nav {
//               display: flex;
//               justify-content: center;
//               gap: 20px;
//               margin-top: 10px;
//             }
//             .nav-btn {
//               width: 45px;
//               height: 45px;
//               border-radius: 50%;
//               background: #fff;
//               border: 2px solid #2dd4bf;
//               color: #2dd4bf;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               cursor: pointer;
//               transition: all 0.3s ease;
//               font-weight: bold;
//             }
//             .nav-btn:hover {
//               background: #2dd4bf;
//               color: #fff;
//             }
//             /* Swiper default arrows hide karne ke liye */
//             .swiper-button-next, .swiper-button-prev {
//               display: none !important;
//             }
//           `,
//           }}
//         />

//         <div className="swiper-container-wrapper">
//           <Swiper
//             modules={[Autoplay, Navigation]}
//             navigation={{
//               nextEl: ".btn-next",
//               prevEl: ".btn-prev",
//             }}
//             spaceBetween={20}
//             slidesPerView={2}
//             loop={true}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             breakpoints={{
//               640: { slidesPerView: 3 },
//               1024: { slidesPerView: 5 },
//             }}
//           >
//             {services.map((service) => (
//               <SwiperSlide key={service.id}>
//                 <div className="flex flex-col items-center group cursor-pointer">
//                   <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#2dd4bf] overflow-hidden mb-4 mt-2 transition-transform duration-500 ease-in-out origin-center group-hover:scale-105 shadow-md">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-[#2dd4bf]/90 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    
//                       <h3 className="text-white text-xs md:text-base font-normal mb-3 leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
//                         {service.title}
//                       </h3>

                    
//                       <a
//                         href={service.link}
//                         className="bg-white text-[#2dd4bf] px-2 py-0.5 rounded-full text-[10px] md:text-sm whitespace-nowrap shadow-lg hover:bg-gray-100 transition-colors"
//                       >
//                         View More
//                       </a>
//                     </div>
//                   </div>
//                   <h3 className="text-sm md:text-base font-bold text-gray-800 leading-tight transition-opacity duration-300 group-hover:opacity-0">
//                     {service.title}
//                   </h3>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

        
//           <div className="custom-nav">
//             <div className="nav-btn btn-prev">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 19.5L8.25 12l7.5-7.5"
//                 />
//               </svg>
//             </div>
//             <div className="nav-btn btn-next">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Whatwedo;







import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Whatwedo = () => {
  const services = [
    {
      id: 2,
      title: "UPI, Cards, Net Banking, Wallet",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      link: "/services/online-payment-gateway–upi-cards-net-banking-wallets",
    },
    {
      id: 3,
      title: "POS & Android POS Devices",
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
      link: "/services/pos-android-pos-devices",
    },
    {
      id: 4,
      title: "QR-Based Contactless Payments",
      image: "https://assets-160c6.kxcdn.com/wp-content/uploads/2023/11/2023-11-21-de-en-1.jpg",
      link: "/services/qr-based-contactless-payments",
    },
    {
      id: 7,
      title: "Assisted Banking & Cash Management",
      image:
        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202505/682b17b7c169f-cash-in-vogue-currency-in-circulation-hits-rs-372-lakh-crore-in-fy25-vs-rs-145-lakh-crore-in-fy15-193618865-16x9.jpg",
      link: "/services/assisted-banking-cash-management",
    },
    {
      id: 8,
      title: "AEPS – Cash withdrawal, balance inquiry, mini statement",
      image:
        "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80",
      link: "/services/aeps-cash-withdrawal-balance-inquiry-mini-statement",
    },
    {
      id: 9,
      title: "Micro ATM (mATM) services",
      image: "https://www.smplraj.in/Content/front/services/Micro%20ATM.png",
      link: "/services/micro-atm-matm-services",
    },
    {
      id: 11,
      title: "BBPS, Recharge & Bill Payments",
      image:
        "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?auto=format&fit=crop&w=800&q=80",
      link: "/services/bbps-recharge-bill-payments",
    },
    {
      id: 13,
      title: "Mobile, DTH & data card recharges",
      image:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
      link: "/services/mobile-dth-data-card-recharges",
    },
    {
      id: 14,
      title: "Credit card bill payments",
      image:
        "https://i.pinimg.com/736x/92/ad/b6/92adb64c53082c7c1ab80cd981488763.jpg",
      link: "/services/credit-card-bill-payments",
    },
    {
      id: 15,
      title: "Lending & Credit Solutions",
      image:
        "https://i.pinimg.com/1200x/ed/bf/60/edbf60cc0e00a1cdae23f114957c8777.jpg",
      link: "/services/lending-credit-solutions",
    },
    {
      id: 16,
      title: "Business loans & working capital finance",
      image:
        "https://i.pinimg.com/736x/4a/c8/8a/4ac88a04b4c466e16f8aa077a38ac027.jpg",
      link: "/services/business-loans-working-capital-finance",
    },
    {
      id: 17,
      title: "Personal loans with digital onboarding",
      image:
        "https://i.pinimg.com/1200x/95/5f/13/955f137993310b5d346434f529558048.jpg",
      link: "/services/personal-loans-with-digital-onboarding",
    },
    {
      id: 18,
      title: "Credit card sourcing and lifecycle support",
      image:
        "https://i.pinimg.com/736x/22/0e/08/220e08aa2fa0a4e92575773e826cba0f.jpg",
      link: "/services/credit-card-sourcing-and-lifecycle-support",
    },
    {
      id: 20,
      title: "Health insurance",
      image:
        "https://i.pinimg.com/1200x/af/61/b8/af61b867229116f342e411c33c6b3911.jpg",
      link: "/services/health-insurance",
    },
    {
      id: 21,
      title: "Life insurance",
      image:
        "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=800&q=80",
      link: "/services/life-insurance",
    },
    {
      id: 22,
      title: "General & travel insurance",
      image:
        "https://i.pinimg.com/736x/bb/9e/0f/bb9e0f2c3ce9db7780ca496d0aecbcc3.jpg",
      link: "/services/general-travel-insurance",
    },
    {
      id: 23,
      title: "Travel APIs & Travel Services",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      link: "/services/travel-apis-travel-services",
    },
    {
      id: 24,
      title: "Flight booking (Domestic & International)",
      image:
        "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos125503370xl-1718329782038.jpg",
      link: "/services/flight-booking-domestic-international",
    },
    {
      id: 25,
      title: "Bus ticket booking",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      link: "/services/bus-ticket-booking",
    },
    {
      id: 26,
      title: "Hotel booking",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      link: "/services/hotel-booking",
    },
    {
      id: 27,
      title: "Travel insurance integration",
      image:
        "https://i.pinimg.com/1200x/a2/91/a5/a291a55a2854dba3645ce0fa6d98f9c4.jpg",
      link: "/services/travel-insurance-integration",
    },
    {
      id: 29,
      title: "Technology & API Services",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      link: "/services/technology-api-services",
    },
    {
      id: 30,
      title: "Payment, banking, travel & wallet APIs",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "/services/payment-banking-travel-wallet-apis",
    },
    {
      id: 32,
      title: "Merchant, distributor & admin dashboards",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      link: "/services/Merchant-distributor-admin-dashboards",
    },
    {
      id: 33,
      title: "White-label fintech & travel platforms",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      link: "/services/white-label-fintech-travel-platforms",
    },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 overflow-hidden font-sans"
      style={{
        background:
          "linear-gradient(135deg, #0b1120 0%, #0f1e2e 45%, #10241f 100%)",
      }}
    >
      {/* Ambient animated gradient orbs — the glass backdrop */}
      <div className="wwd-orb wwd-orb-1" />
      <div className="wwd-orb wwd-orb-2" />
      <div className="wwd-orb wwd-orb-3" />
      <div className="wwd-noise" />

      <div className="container mx-auto px-6 md:px-20 text-center relative z-10">
        <div
          className={`mb-6 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* <span className="inline-block text-[#4DD9DB] tracking-[0.3em] text-xs font-semibold uppercase mb-3">
            Our Ecosystem
          </span> */}
          <h2 className="text-xl md:text-xl font-bold text-white mb-1">
            What we do
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-[8px] md:text-xs leading-relaxed">
            One connected platform for payments, banking, travel and lending —
            built for merchants and distributors.
          </p>
          <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[#00C4C7] to-[#4DD9DB] mx-auto mt-3" />
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes wwd-float-1 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(40px, -30px) scale(1.08); }
            }
            @keyframes wwd-float-2 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(-35px, 25px) scale(1.05); }
            }
            @keyframes wwd-float-3 {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(20px, 35px) scale(1.1); }
            }
            @keyframes wwd-shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            @keyframes wwd-pop-in {
              0% { opacity: 0; transform: translateY(24px) scale(0.96); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }

            .wwd-orb {
              position: absolute;
              border-radius: 9999px;
              filter: blur(70px);
              opacity: 0.55;
              pointer-events: none;
              z-index: 0;
            }
            .wwd-orb-1 {
              width: 420px; height: 420px;
              top: -120px; left: -100px;
              background: radial-gradient(circle, rgba(0,196,199,0.55), transparent 70%);
              animation: wwd-float-1 14s ease-in-out infinite;
            }
            .wwd-orb-2 {
              width: 360px; height: 360px;
              bottom: -140px; right: -80px;
              background: radial-gradient(circle, rgba(0,196,199,0.35), transparent 70%);
              animation: wwd-float-2 18s ease-in-out infinite;
            }
            .wwd-orb-3 {
              width: 300px; height: 300px;
              top: 30%; right: 20%;
              background: radial-gradient(circle, rgba(251,191,36,0.28), transparent 70%);
              animation: wwd-float-3 16s ease-in-out infinite;
            }
            .wwd-noise {
              position: absolute;
              inset: 0;
              background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
              background-size: 22px 22px;
              pointer-events: none;
              z-index: 0;
            }

            .swiper-container-wrapper { position: relative; z-index: 1; }
            .swiper-button-next, .swiper-button-prev { display: none !important; }

            .wwd-card {
              position: relative;
              display: flex;
              flex-direction: column;
              height: 190px;
              border-radius: 18px;
              overflow: hidden;
              background: rgba(255, 255, 255, 0.06);
              backdrop-filter: blur(18px);
              -webkit-backdrop-filter: blur(18px);
              border: 1px solid rgba(255, 255, 255, 0.14);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
              transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
                          box-shadow 0.45s ease,
                          border-color 0.45s ease;
              opacity: 0;
              animation: wwd-pop-in 0.7s ease forwards;
            }
            .wwd-card:hover {
              transform: translateY(-10px) scale(1.02);
              border-color: rgba(0, 196, 199, 0.55);
              box-shadow: 0 20px 45px rgba(0, 196, 199, 0.25);
            }
            .wwd-card::before {
              content: "";
              position: absolute;
              inset: 0;
              padding: 1px;
              border-radius: 22px;
              background: linear-gradient(120deg, rgba(77,217,219,0) 20%, rgba(77,217,219,0.6) 50%, rgba(77,217,219,0) 80%);
              background-size: 200% 100%;
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              opacity: 0;
              transition: opacity 0.4s ease;
              pointer-events: none;
            }
            .wwd-card:hover::before {
              opacity: 1;
              animation: wwd-shimmer 2.5s linear infinite;
            }

            .wwd-card-img {
              width: 100%;
              height: 90px;
              flex-shrink: 0;
              object-fit: cover;
              display: block;
              transition: transform 0.6s ease, filter 0.6s ease;
            }
            .wwd-card-body {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 14px;
            }
            .wwd-card-title-clamp {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .wwd-card:hover .wwd-card-img {
              transform: scale(1.12);
              filter: brightness(0.55);
            }

            .wwd-card-glass-overlay {
              position: absolute;
              inset: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 14px;
              background: rgba(15, 30, 46, 0.55);
              backdrop-filter: blur(6px);
              -webkit-backdrop-filter: blur(6px);
              opacity: 0;
              transform: translateY(8px);
              transition: opacity 0.4s ease, transform 0.4s ease;
            }
            .wwd-card:hover .wwd-card-glass-overlay {
              opacity: 1;
              transform: translateY(0);
            }

            .wwd-view-more {
              background: rgba(255,255,255,0.9);
              color: #00787A;
              font-weight: 600;
              border-radius: 9999px;
              padding: 5px 16px;
              font-size: 11px;
              box-shadow: 0 4px 14px rgba(0,0,0,0.25);
              transition: background 0.3s ease, transform 0.3s ease;
            }
            .wwd-view-more:hover {
              background: #00C4C7;
              color: #fff;
              transform: scale(1.06);
            }

            .nav-btn {
              width: 38px;
              height: 38px;
              border-radius: 50%;
              background: rgba(255,255,255,0.06);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid rgba(255,255,255,0.18);
              color: #4DD9DB;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .nav-btn:hover {
              background: #00C4C7;
              color: #0b1120;
              border-color: #00C4C7;
              transform: scale(1.08);
              box-shadow: 0 0 20px rgba(0,196,199,0.5);
            }

            @media (prefers-reduced-motion: reduce) {
              .wwd-orb, .wwd-card, .wwd-card::before, .wwd-card-img { animation: none !important; transition: none !important; }
            }
          `,
          }}
        />

        <div className="swiper-container-wrapper">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            spaceBetween={14}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {services.map((service, i) => (
              <SwiperSlide key={service.id}>
                <div
                  className="wwd-card"
                  style={{ animationDelay: `${(i % 8) * 0.06}s` }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="wwd-card-img"
                  />
                  <div className="wwd-card-body">
                    <h3 className="wwd-card-title-clamp text-white text-xs md:text-sm font-semibold leading-snug text-center">
                      {service.title}
                    </h3>
                  </div>

                  <div className="wwd-card-glass-overlay">
                    <h3 className="text-white text-[10px] md:text-xs font-medium mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <a href={service.link} className="wwd-view-more">
                      View More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-3 mt-5">
            <div className="nav-btn btn-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="nav-btn btn-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatwedo;