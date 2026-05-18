import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const partners = [
  { name: "Axis Bank", img: "/assets/image/partner/Axis-Bank.png" },
  { name: "HDFC", img: "/assets/image/partner/hdfc.webp" },
  { name: "Pine Labs", img: "/assets/image/partner/Pine_Labs.jpg" },
  { name: "Razorpay", img: "/assets/image/partner/Razorpay.webp" },
  { name: "Instant Mudra", img: "/assets/image/partner/Instant-Mudra.jpg" },
  { name: "Dogma", img: "/assets/image/partner/dogma.png" },
  { name: "Yes Bank", img: "/assets/image/partner/yesbank.avif" },
  { name: "Cashfree", img: "/assets/image/partner/cashfree.png" },
  { name: "Paytm", img: "/assets/image/partner/Paytm.png" },
  { name: "BranchX", img: "/assets/image/partner/branchx.jpg" },
  { name: "Bill Avenue", img: "/assets/image/partner/bill-avenue.jpg" },
  { name: "Digitap", img: "/assets/image/partner/digitap.png" },
  { name: "InstantPay", img: "/assets/image/partner/instantpay.jpeg" },
  { name: "Paysprint", img: "/assets/image/partner/paysprint.jpeg" },
];

export default function OurPartners() {
  return (
    <section className="w-full bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase mb-2">
            OUR TRUSTED NETWORK
          </h2>
          <h3 className="text-3xl font-bold text-slate-900">
            Strategic Partnerships
          </h3>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="pb-10"
        >
          {partners.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-32 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center p-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-20 w-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/image/partner/fallback.png";
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Color */}
      <style>{`
        .swiper-pagination-bullet-active {
          background: #14b8a6 !important;
        }
      `}</style>
    </section>
  );
}