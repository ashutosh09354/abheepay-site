import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnquiryPopup = forwardRef(({ autoOpen = false, delay = 8000 }, ref) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    message: "",
  });

  useImperativeHandle(ref, () => ({
    openPopup: () => setShowPopup(true),
    closePopup: () => setShowPopup(false),
  }));

  useEffect(() => {
    if (!autoOpen) return;
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [autoOpen, delay]);

  const handleClose = () => {
    setShowPopup(false);
    setFormData({ name: "", company: "", email: "", mobile: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    setTimeout(() => {
      setFormData({ name: "", company: "", email: "", mobile: "", message: "" });
    }, 500);
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Yahan z-50 ko z-[9999] kar diya hai taaki ye Navbar ke upar aaye
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[9999] p-2"
        >
          <motion.div className="absolute inset-0" onClick={handleClose} />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-[300px] overflow-hidden border border-gray-200"
          >
            <div className="h-0.5 w-full bg-gradient-to-r from-[#00BBB5] to-[#00E0D0]" />

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClose}
              className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 hover:text-[#00BBB5] transition-all duration-200 z-10 shadow-sm text-[9px]"
            >
              X
            </motion.button>

            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center px-3 pt-0.5 pb-0.5"
            >
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                className="w-7 h-7 bg-gradient-to-br from-[#00BBB5] to-[#00E0D0] rounded-full flex items-center justify-center mx-auto mb-0.5 shadow-md"
              >
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </motion.div>

              <h2 className="text-xs font-bold bg-gradient-to-r from-gray-800 to-[#00BBB5] bg-clip-text text-transparent leading-tight">
                Enquiry
              </h2>
              <p className="text-gray-600 text-[7px] leading-tight">
                We'd love to hear from you.
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/care@abheepay.com"
              method="POST"
              target="_blank"
              className="px-3 pb-1 space-y-0.5"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Enquiry Received" />

              <div>
                <label className="block text-[8px] font-semibold text-gray-700 leading-tight">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-gray-300 rounded-md py-0.5 pr-2 pl-7 text-[9px] leading-tight focus:ring-2 focus:ring-[#00BBB5] outline-none"
                  />
                  <svg
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-[8px] font-semibold text-gray-700 leading-tight">
                  City Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your city name"
                    className="w-full border border-gray-300 rounded-md py-0.5 pr-2 pl-7 text-[9px] leading-tight focus:ring-2 focus:ring-[#00BBB5] outline-none"
                  />
                  <svg
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7h18M3 12h18M3 17h18"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-[8px] font-semibold text-gray-700 leading-tight">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border border-gray-300 rounded-md py-0.5 pr-2 pl-7 text-[9px] leading-tight focus:ring-2 focus:ring-[#00BBB5] outline-none"
                  />
                  <svg
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-[8px] font-semibold text-gray-700 leading-tight">
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    required
                    className="w-full border border-gray-300 rounded-md py-0.5 pr-2 pl-7 text-[9px] leading-tight focus:ring-2 focus:ring-[#00BBB5] outline-none"
                  />
                  <svg
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h2l3.6 7.59a1 1 0 00.93.61H19a1 1 0 010 2H9a1 1 0 00-.93.63L6 21H3V5z"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <label className="block text-[8px] font-semibold text-gray-700 leading-tight">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    rows={1}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    required
                    className="w-full border border-gray-300 rounded-md py-0.5 pr-2 pl-7 text-[9px] leading-tight focus:ring-2 focus:ring-[#00BBB5] outline-none resize-none"
                  />
                  <svg
                    className="absolute left-2 top-1.5 w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00BBB5] to-[#00E0D0] hover:from-[#009c99] hover:to-[#00c2b8] text-white py-0.5 rounded-md text-[9px] font-semibold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1"
              >
                Send
                <motion.svg
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default EnquiryPopup;
