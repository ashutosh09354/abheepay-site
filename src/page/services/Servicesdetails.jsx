import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import servicesData from "./Servicesdata.json";

const ServicesDetail = () => {
  const { id } = useParams();

  const service = servicesData.find(
    (s) => s.id?.toLowerCase() === id?.toLowerCase()
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <p className="text-lg font-semibold border-b-2 border-[#00D3CD]">
          Service not found
        </p>
      </div>
    );
  }

  // ✅ IMAGE FIX (public/ auto remove)
  const mainImg = (service.imageUrl ||
    service.image ||
    "/assets/fallback-service.png"
  ).replace(/^public\//, "/");

  const features = service.features || [];
  const highlights = service.benefits || [];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-white min-h-screen font-sans text-gray-800 py-8 px-4 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <motion.div variants={fadeInUp} className="md:w-1/2">
            {/* ❌ Category removed */}

            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mt-6 leading-tight">
              {service.name}
            </h1>

            <div className="flex items-center gap-3 mt-4 text-gray-500 text-sm">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h-[2px] bg-[#00D3CD]"
              />
              <span>Abheepay Team • 2026</span>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5 },
              },
            }}
            className="md:w-1/2 relative w-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute -top-4 -left-4 w-full h-[220px] sm:h-[280px] md:h-[320px] border-2 border-[#00D3CD] rounded-lg -z-10"
            />

            {/* IMAGE BOX */}
            <div className="w-full h-[220px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-lg shadow-xl bg-white p-3">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={mainImg}
                alt={service.name}
                className="w-full h-full object-fill object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="md:col-span-2 space-y-6">
            <motion.p
              variants={fadeInUp}
              className="text-base text-gray-600 leading-relaxed max-w-2xl"
            >
              {service.longDescription || service.description}
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 border border-gray-200"
            >
              {features.map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    transition: { duration: 0.2 },
                  }}
                  className="p-4 border-b md:border-r border-gray-100 flex items-center gap-3 bg-white text-gray-900 transition-colors cursor-default"
                >
                  <span className="text-[#00D3CD] font-bold text-xl">→</span>
                  <span className="font-bold text-lg">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* BENEFITS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#00D3CD] p-6 flex flex-col min-h-[320px] shadow-lg relative overflow-hidden"
          >
            <h2 className="text-xl font-black mb-6 tracking-tighter text-black">
              BENEFITS
            </h2>

            <div className="space-y-5">
              {highlights.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <p className="text-black font-bold text-base leading-tight uppercase">
                    {benefit}
                  </p>

                  {idx !== highlights.length - 1 && (
                    <div className="w-full h-[1px] bg-black/20 mt-4" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FOOTER CTA */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 gap-4"
        >
          <Link
            to="/services"
            className="text-sm font-bold border border-black px-6 py-2 hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest"
          >
            — BACK TO SERVICES
          </Link>

        </motion.div>
      </div>

    </motion.div>
  );
};

export default ServicesDetail;
