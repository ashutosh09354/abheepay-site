// import React, { useState } from "react";

// const ContactUs = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);

//     const indiaTime = new Date().toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       hour12: true,
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//     formData.append("Submitted At (IST)", indiaTime);

//     try {
//       const response = await fetch("https://formsubmit.co/care@abheepay.com", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("✅ Submitted successfully!");
//         e.target.reset();
//       } else {
//         alert("❌ Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       alert("⚠️ Something went wrong. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">


//       <div
//         className="relative w-full py-16 sm:py-24 md:py-32 lg:py-48 overflow-hidden bg-cover bg-no-repeat hidden md:block"
//         style={{
//           backgroundImage:
//             "url('https://www.polypackenterprises.com/assets/new-images/images/banner/new-contact-us.jpg')",
//           backgroundPosition: "14% center",
//         }}
//       />

//       <div
//         className="relative w-full py-36 sm:py-16 md:py-20 overflow-hidden bg-cover bg-no-repeat block md:hidden"
//         style={{
//           backgroundImage:
//             "url('https://www.polypackenterprises.com/assets/new-images/images/banner/mobile-view-contact-us.jpg')", // ← change this URL
//           backgroundPosition: "center center",
//         }}
//       />


//       <div className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">

//           <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100 order-1 lg:order-1">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
//               Send a message
//             </h2>
//             <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
//               Fill in the details below and we'll get back to you within 24
//               hours.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />

//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Full name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Phone number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                   placeholder="Enter your number"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-semibold text-gray-700 mb-1"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows={5}
//                   className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition resize-none"
//                   placeholder="How can we assist you?"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#2dd4bf] text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center text-base sm:text-lg"
//               >
//                 {loading ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       />
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   "Send Message"
//                 )}
//               </button>
//             </form>
//           </div>


//           <div className="space-y-6 md:space-y-8 order-2 lg:order-2">
//             <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-5">
//                 Contact Details
//               </h3>

//               <div className="space-y-5 sm:space-y-6">

//                 <div className="flex items-start space-x-3 sm:space-x-4">
//                   <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#2dd4bf]">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs sm:text-sm font-medium text-gray-500">
//                       Office Address
//                     </p>
//                     <p className="text-sm sm:text-base text-gray-800 mt-0.5 leading-relaxed">
//                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
//                       <br />
//                       SECTOR-19, DWARKA, NEW DELHI- 110043
//                     </p>
//                   </div>
//                 </div>


//                 <div className="flex items-start space-x-3 sm:space-x-4">
//                   <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#2dd4bf]">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502L19 14.28V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs sm:text-sm font-medium text-gray-500">
//                       Call us
//                     </p>
//                     <a
//                       href="tel:+918860037218"
//                       className="text-sm sm:text-base text-[#2dd4bf] font-medium hover:underline"
//                     >
//                       +91 88600 37218
//                     </a>
//                   </div>
//                 </div>


//                 <div className="flex items-start space-x-3 sm:space-x-4">
//                   <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#2dd4bf]">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs sm:text-sm font-medium text-gray-500">
//                       Email us
//                     </p>
//                     <a
//                       href="mailto:care@abheepay.com"
//                       className="text-sm sm:text-base text-[#2dd4bf] font-medium hover:underline"
//                     >
//                       care@abheepay.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>


//             <div className="bg-white rounded-3xl shadow-xl p-1.5 sm:p-2 border border-gray-100 overflow-hidden">
//               <div className="rounded-2xl overflow-hidden h-56 sm:h-64 md:h-72 lg:h-64 w-full">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Abheepay Location on Google Maps"
//                 ></iframe>
//               </div>
//             </div>

//             <p className="text-xs sm:text-sm text-gray-500 text-center lg:text-left">
//               We typically reply within one business day.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;













// import React, { useState } from "react";

// const ContactUs = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);

//     const indiaTime = new Date().toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       hour12: true,
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//     formData.append("Submitted At (IST)", indiaTime);

//     try {
//       const response = await fetch("https://formsubmit.co/care@abheepay.com", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("✅ Submitted successfully!");
//         e.target.reset();
//       } else {
//         alert("❌ Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       alert("⚠️ Something went wrong. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">


//       <div className="px-4 sm:px-8 lg:px-8 max-w-3xl mx-auto pt-20 py-4">
//         <h1 className="text-3xl sm:text-4xl md:text-2xl font-bold text-gray-900">
//           Contact Us
//         </h1>
//       </div>

//       <div className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-6 items-start">

//           <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 border border-gray-100 order-1 lg:order-1">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
//               Send a message
//             </h2>
//             <p className="text-gray-500 mb-4 sm:mb-5 text-xs sm:text-sm">
//               Fill in the details below and we'll get back to you within 24
//               hours.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />

//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-xs font-semibold text-gray-700 mb-1"
//                 >
//                   Full name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-xs font-semibold text-gray-700 mb-1"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-xs font-semibold text-gray-700 mb-1"
//                 >
//                   Phone number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                   placeholder="Enter your number"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-xs font-semibold text-gray-700 mb-1"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   rows={4}
//                   className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition resize-none"
//                   placeholder="How can we assist you?"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#2dd4bf] text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center text-sm sm:text-base"
//               >
//                 {loading ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       />
//                     </svg>
//                     Sending...
//                   </>
//                 ) : (
//                   "Send Message"
//                 )}
//               </button>
//             </form>
//           </div>


//           <div className="space-y-4 md:space-y-5 order-2 lg:order-2">
//             <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-5 border border-gray-100">
//               <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
//                 Contact Details
//               </h3>

//               <div className="space-y-3 sm:space-y-4">

//                 <div className="flex items-start space-x-2.5 sm:space-x-3">
//                   <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#2dd4bf]">
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs font-medium text-gray-500">
//                       Office Address
//                     </p>
//                     <p className="text-xs sm:text-sm text-gray-800 mt-0.5 leading-relaxed">
//                       2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
//                       <br />
//                       SECTOR-19, DWARKA, NEW DELHI- 110043
//                     </p>
//                   </div>
//                 </div>


//                 <div className="flex items-start space-x-2.5 sm:space-x-3">
//                   <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#2dd4bf]">
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502L19 14.28V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs font-medium text-gray-500">
//                       Call us
//                     </p>
//                     <a
//                       href="tel:+918860037218"
//                       className="text-xs sm:text-sm text-[#2dd4bf] font-medium hover:underline"
//                     >
//                       +91 88600 37218
//                     </a>
//                   </div>
//                 </div>


//                 <div className="flex items-start space-x-2.5 sm:space-x-3">
//                   <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#2dd4bf]">
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7H3v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-xs font-medium text-gray-500">
//                       Email us
//                     </p>
//                     <a
//                       href="mailto:care@abheepay.com"
//                       className="text-xs sm:text-sm text-[#2dd4bf] font-medium hover:underline"
//                     >
//                       care@abheepay.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>


//             <div className="bg-white rounded-2xl shadow-lg p-1 sm:p-1.5 border border-gray-100 overflow-hidden">
//               <div className="rounded-xl overflow-hidden h-40 sm:h-48 md:h-52 lg:h-44 w-full">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Abheepay Location on Google Maps"
//                 ></iframe>
//               </div>
//             </div>

//             <p className="text-xs text-gray-500 text-center lg:text-left">
//               We typically reply within one business day.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;











// import React, { useState, useEffect, useRef } from "react";
// import {
//   Headphones,
//   Briefcase,
//   Handshake,
//   ShieldAlert,
//   MapPin,
//   Phone,
//   Mail,
//   X,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";

// const CHANNELS = {
//   support: {
//     title: "Customer Support",
//     subtitle: "Tell us what's going on and we'll sort it out.",
//     queryLabel: "What do you need help with?",
//     queryPlaceholder: "Describe the issue you're facing...",
//   },
//   sales: {
//     title: "Contact Sales",
//     subtitle: "Tell us about your business and we'll take it from there.",
//     queryLabel: "What are you looking for?",
//     queryPlaceholder: "Tell us about your business banking needs...",
//   },
//   partnership: {
//     title: "Partner With Us",
//     subtitle: "Tell us about the opportunity you have in mind.",
//     queryLabel: "What kind of partnership?",
//     queryPlaceholder: "Tell us a bit about your organisation and the idea...",
//   },
// };

// const OFFICES = [
//   {
//     city: "New Delhi",
//     address: (
//       <>
//         2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
//         <br />
//         SECTOR-19, DWARKA, NEW DELHI - 110043
//       </>
//     ),
//   },
// ];

// function ContactModal({ channel, onClose }) {
//   const [status, setStatus] = useState("idle"); // idle | sending | sent | error
//   const dialogRef = useRef(null);
//   const firstFieldRef = useRef(null);
//   const meta = CHANNELS[channel];

//   useEffect(() => {
//     firstFieldRef.current?.focus();
//     const onKey = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [onClose]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const formData = new FormData(e.target);
//     const indiaTime = new Date().toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       hour12: true,
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//     formData.append("Submitted At (IST)", indiaTime);
//     formData.append("Enquiry Type", meta.title);

//     try {
//       const response = await fetch("https://formsubmit.co/care@abheepay.com", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         setStatus("sent");
//         e.target.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="contact-modal-title"
//     >
//       {/* backdrop */}
//       <button
//         aria-label="Close dialog"
//         onClick={onClose}
//         className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-default"
//       />

//       <div
//         ref={dialogRef}
//         className="relative w-full sm:max-w-md h-full sm:h-auto sm:max-h-[90vh] bg-white sm:rounded-2xl shadow-2xl overflow-y-auto animate-[fadeIn_.15s_ease-out]"
//       >
//         {/* header */}
//         <div className="sticky top-0 z-10 flex items-start justify-between gap-4 bg-white px-5 sm:px-6 pt-6 pb-4 border-b border-gray-100">
//           <div>
//             <p className="text-[11px] font-semibold tracking-wide text-[#0f9c8c] uppercase mb-1">
//               {meta.title}
//             </p>
//             <h3
//               id="contact-modal-title"
//               className="text-xl font-bold text-gray-900"
//             >
//               Get in touch
//             </h3>
//             <p className="text-xs text-gray-500 mt-1">{meta.subtitle}</p>
//           </div>
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] transition"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         {/* body */}
//         {status === "sent" ? (
//           <div className="px-5 sm:px-6 py-10 flex flex-col items-center text-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
//               <Handshake className="w-6 h-6" />
//             </div>
//             <h4 className="text-base font-bold text-gray-900">
//               Message sent
//             </h4>
//             <p className="text-sm text-gray-500 max-w-xs">
//               Thanks for reaching out. Our {meta.title.toLowerCase()} team
//               typically replies within one business day.
//             </p>
//             <button
//               onClick={onClose}
//               className="mt-2 text-sm font-semibold text-[#0f9c8c] hover:underline"
//             >
//               Close
//             </button>
//           </div>
//         ) : (
//           <form
//             onSubmit={handleSubmit}
//             className="px-5 sm:px-6 py-5 space-y-3.5"
//           >
//             <input type="hidden" name="_captcha" value="false" />
//             <input type="hidden" name="_template" value="table" />

//             <div>
//               <label
//                 htmlFor="modal-name"
//                 className="block text-xs font-semibold text-gray-700 mb-1"
//               >
//                 Full name
//               </label>
//               <input
//                 ref={firstFieldRef}
//                 id="modal-name"
//                 name="name"
//                 type="text"
//                 required
//                 placeholder="Enter your name"
//                 className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="modal-company"
//                 className="block text-xs font-semibold text-gray-700 mb-1"
//               >
//                 Company name
//               </label>
//               <input
//                 id="modal-company"
//                 name="company"
//                 type="text"
//                 placeholder="Enter your company name"
//                 className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <div>
//                 <label
//                   htmlFor="modal-email"
//                   className="block text-xs font-semibold text-gray-700 mb-1"
//                 >
//                   Email ID
//                 </label>
//                 <input
//                   id="modal-email"
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="you@company.com"
//                   className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="modal-mobile"
//                   className="block text-xs font-semibold text-gray-700 mb-1"
//                 >
//                   Mobile
//                 </label>
//                 <input
//                   id="modal-mobile"
//                   name="phone"
//                   type="tel"
//                   required
//                   placeholder="10-digit number"
//                   className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="modal-query"
//                 className="block text-xs font-semibold text-gray-700 mb-1"
//               >
//                 {meta.queryLabel}
//               </label>
//               <textarea
//                 id="modal-query"
//                 name="message"
//                 rows={4}
//                 required
//                 placeholder={meta.queryPlaceholder}
//                 className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition resize-none"
//               />
//             </div>

//             {status === "error" && (
//               <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
//                 Something went wrong. Please try again.
//               </p>
//             )}

//             <button
//               type="submit"
//               disabled={status === "sending"}
//               className="w-full bg-[#2dd4bf] text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-sm"
//             >
//               {status === "sending" ? (
//                 <>
//                   <Loader2 className="w-4 h-4 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   Submit query
//                   <ArrowRight className="w-4 h-4" />
//                 </>
//               )}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// function ChannelCard({ icon: Icon, title, description, cta, onClick }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm hover:shadow-md p-5 sm:p-6 border border-gray-100 transition-shadow flex flex-col">
//       <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#2dd4bf]/10 rounded-xl flex items-center justify-center text-[#0f9c8c] mb-4">
//         <Icon className="w-5 h-5" />
//       </div>
//       <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
//         {title}
//       </h3>
//       <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-5 flex-1">
//         {description}
//       </p>
//       <button
//         onClick={onClick}
//         className="w-full sm:w-auto self-start inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-100 hover:bg-[#2dd4bf] hover:text-white rounded-lg px-4 py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
//       >
//         {cta}
//         <ArrowRight className="w-3.5 h-3.5" />
//       </button>
//     </div>
//   );
// }

// const ContactUs = () => {
//   const [activeChannel, setActiveChannel] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* hero */}
//       <div className="bg-gradient-to-b from-[#2dd4bf]/10 to-transparent">
//         <div className="px-4 sm:px-8 max-w-5xl mx-auto pt-16 sm:pt-20 pb-8 sm:pb-10 text-center">
//           <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#0f9c8c] uppercase mb-3">
//             Get in touch
//           </p>
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
//             We'd love to hear from you
//           </h1>
//           <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-xl mx-auto">
//             Whether it's support, a sales question, or a partnership idea —
//             pick a team below and we'll get back to you within a day.
//           </p>
//         </div>
//       </div>

//       <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-14 sm:pb-16 -mt-2">
//         {/* channel cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
//           <ChannelCard
//             icon={Headphones}
//             title="Customer Support"
//             description="Get help with any issues or questions about our services through our dedicated support team."
//             cta="Get Support"
//             onClick={() => setActiveChannel("support")}
//           />
//           <ChannelCard
//             icon={Briefcase}
//             title="Sales"
//             description="Our sales team is ready to discuss how our services can meet your business banking needs."
//             cta="Contact Sales"
//             onClick={() => setActiveChannel("sales")}
//           />
//           <ChannelCard
//             icon={Handshake}
//             title="Partnership"
//             description="Let's explore partnership opportunities to grow and innovate together in digital banking."
//             cta="Partner Now"
//             onClick={() => setActiveChannel("partnership")}
//           />
//         </div>

//         {/* report fraud strip */}
//         <div className="mt-4 sm:mt-5 bg-amber-50 border border-amber-100 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between">
//           <div className="flex items-start gap-3">
//             <div className="flex-shrink-0 w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
//               <ShieldAlert className="w-4.5 h-4.5" />
//             </div>
//             <div>
//               <p className="text-sm font-bold text-gray-900">Report fraud</p>
//               <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
//                 Report any suspicious activity or unusual transactions
//                 immediately.
//               </p>
//             </div>
//           </div>
//           <a
//             href="mailto:care@abheepay.com?subject=Fraud%20Report"
//             className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-800 bg-white border border-amber-200 hover:bg-amber-100 rounded-lg px-4 py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
//           >
//             Report here
//             <ArrowRight className="w-3.5 h-3.5" />
//           </a>
//         </div>

//         {/* office + map */}
//         <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
//           <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 border border-gray-100">
//             <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
//               Our office
//             </h2>
//             {OFFICES.map((office) => (
//               <div key={office.city} className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <div className="flex-shrink-0 w-8 h-8 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#0f9c8c]">
//                     <MapPin className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold text-gray-500">
//                       {office.city}
//                     </p>
//                     <p className="text-xs sm:text-sm text-gray-800 mt-0.5 leading-relaxed">
//                       {office.address}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="flex-shrink-0 w-8 h-8 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#0f9c8c]">
//                     <Phone className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold text-gray-500">
//                       Call us
//                     </p>
//                     <a
//                       href="tel:+918860037218"
//                       className="text-xs sm:text-sm text-[#0f9c8c] font-semibold hover:underline"
//                     >
//                       +91 88600 37218
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="flex-shrink-0 w-8 h-8 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#0f9c8c]">
//                     <Mail className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <p className="text-xs font-semibold text-gray-500">
//                       Email us
//                     </p>
//                     <a
//                       href="mailto:care@abheepay.com"
//                       className="text-xs sm:text-sm text-[#0f9c8c] font-semibold hover:underline"
//                     >
//                       care@abheepay.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white rounded-2xl shadow-sm p-1.5 border border-gray-100 overflow-hidden">
//             <div className="rounded-xl overflow-hidden h-48 sm:h-60 lg:h-64 w-full">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Abheepay location on Google Maps"
//               />
//             </div>
//           </div>
//         </div>

//         <p className="text-xs text-gray-400 text-center mt-6">
//           We typically reply within one business day.
//         </p>
//       </div>

//       {activeChannel && (
//         <ContactModal
//           channel={activeChannel}
//           onClose={() => setActiveChannel(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactUs;








// import React, { useState, useEffect, useRef } from "react";
// import {
//   Headphones,
//   Briefcase,
//   Handshake,
//   ShieldAlert,
//   MapPin,
//   Phone,
//   Mail,
//   X,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";

// const CHANNELS = {
//   support: {
//     title: "Customer Support",
//     subtitle: "Tell us what's going on and we'll sort it out.",
//     queryLabel: "What do you need help with?",
//     queryPlaceholder: "Describe the issue you're facing...",
//   },
//   sales: {
//     title: "Contact Sales",
//     subtitle: "Tell us about your business and we'll take it from there.",
//     queryLabel: "What are you looking for?",
//     queryPlaceholder: "Tell us about your business banking needs...",
//   },
//   partnership: {
//     title: "Partner With Us",
//     subtitle: "Tell us about the opportunity you have in mind.",
//     queryLabel: "What kind of partnership?",
//     queryPlaceholder: "Tell us a bit about your organisation and the idea...",
//   },
// };

// const OFFICES = [
//   {
//     city: "New Delhi",
//     address: (
//       <>
//         2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
//         <br />
//         SECTOR-19, DWARKA, NEW DELHI - 110043
//       </>
//     ),
//   },
// ];

// function ContactModal({ channel, onClose }) {
//   const [status, setStatus] = useState("idle"); // idle | sending | sent | error
//   const dialogRef = useRef(null);
//   const firstFieldRef = useRef(null);
//   const meta = CHANNELS[channel];

//   useEffect(() => {
//     firstFieldRef.current?.focus();
//     const onKey = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [onClose]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const formData = new FormData(e.target);
//     const indiaTime = new Date().toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       hour12: true,
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//     formData.append("Submitted At (IST)", indiaTime);
//     formData.append("Enquiry Type", meta.title);

//     try {
//       const response = await fetch("https://formsubmit.co/care@abheepay.com", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         setStatus("sent");
//         e.target.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-0 sm:p-3"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="contact-modal-title"
//     >
//       {/* backdrop */}
//       <button
//         aria-label="Close dialog"
//         onClick={onClose}
//         className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-default"
//       />

//       <div
//         ref={dialogRef}
//         className="relative w-full sm:max-w-sm h-full sm:h-auto sm:max-h-[85vh] bg-white sm:rounded-xl shadow-2xl overflow-y-auto animate-[fadeIn_.15s_ease-out]"
//       >
//         {/* header */}
//         <div className="sticky top-0 z-10 flex items-start justify-between gap-3 bg-white px-4 pt-4 pb-2.5 border-b border-gray-100">
//           <div>
//             <p className="text-[9px] font-semibold tracking-wide text-[#0f9c8c] uppercase mb-0.5">
//               {meta.title}
//             </p>
//             <h3
//               id="contact-modal-title"
//               className="text-base font-bold text-gray-900"
//             >
//               Get in touch
//             </h3>
//             <p className="text-[11px] text-gray-500 mt-0.5">{meta.subtitle}</p>
//           </div>
//           <button
//             onClick={onClose}
//             aria-label="Close"
//             className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] transition"
//           >
//             <X className="w-3 h-3" />
//           </button>
//         </div>

//         {/* body */}
//         {status === "sent" ? (
//           <div className="px-4 py-6 flex flex-col items-center text-center gap-2">
//             <div className="w-8 h-8 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
//               <Handshake className="w-4 h-4" />
//             </div>
//             <h4 className="text-sm font-bold text-gray-900">
//               Message sent
//             </h4>
//             <p className="text-xs text-gray-500 max-w-xs">
//               Thanks for reaching out. Our {meta.title.toLowerCase()} team
//               typically replies within one business day.
//             </p>
//             <button
//               onClick={onClose}
//               className="mt-1 text-xs font-semibold text-[#0f9c8c] hover:underline"
//             >
//               Close
//             </button>
//           </div>
//         ) : (
//           <form
//             onSubmit={handleSubmit}
//             className="px-4 py-3.5 space-y-2.5"
//           >
//             <input type="hidden" name="_captcha" value="false" />
//             <input type="hidden" name="_template" value="table" />

//             <div>
//               <label
//                 htmlFor="modal-name"
//                 className="block text-[11px] font-semibold text-gray-700 mb-0.5"
//               >
//                 Full name
//               </label>
//               <input
//                 ref={firstFieldRef}
//                 id="modal-name"
//                 name="name"
//                 type="text"
//                 required
//                 placeholder="Enter your name"
//                 className="w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="modal-company"
//                 className="block text-[11px] font-semibold text-gray-700 mb-0.5"
//               >
//                 Company name
//               </label>
//               <input
//                 id="modal-company"
//                 name="company"
//                 type="text"
//                 placeholder="Enter your company name"
//                 className="w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-2">
//               <div>
//                 <label
//                   htmlFor="modal-email"
//                   className="block text-[11px] font-semibold text-gray-700 mb-0.5"
//                 >
//                   Email ID
//                 </label>
//                 <input
//                   id="modal-email"
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="you@company.com"
//                   className="w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="modal-mobile"
//                   className="block text-[11px] font-semibold text-gray-700 mb-0.5"
//                 >
//                   Mobile
//                 </label>
//                 <input
//                   id="modal-mobile"
//                   name="phone"
//                   type="tel"
//                   required
//                   placeholder="10-digit number"
//                   className="w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="modal-query"
//                 className="block text-[11px] font-semibold text-gray-700 mb-0.5"
//               >
//                 {meta.queryLabel}
//               </label>
//               <textarea
//                 id="modal-query"
//                 name="message"
//                 rows={3}
//                 required
//                 placeholder={meta.queryPlaceholder}
//                 className="w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition resize-none"
//               />
//             </div>

//             {status === "error" && (
//               <p className="text-[11px] text-red-600 bg-red-50 border border-red-100 rounded-md px-2.5 py-1.5">
//                 Something went wrong. Please try again.
//               </p>
//             )}

//             <button
//               type="submit"
//               disabled={status === "sending"}
//               className="w-full bg-[#2dd4bf] text-white font-semibold py-2 px-3 rounded-md shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-1.5 text-xs"
//             >
//               {status === "sending" ? (
//                 <>
//                   <Loader2 className="w-3.5 h-3.5 animate-spin" />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   Submit query
//                   <ArrowRight className="w-3.5 h-3.5" />
//                 </>
//               )}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// function ChannelCard({ icon: Icon, title, description, cta, onClick }) {
//   return (
//     <div className="bg-white rounded-xl shadow-sm hover:shadow-md p-3.5 sm:p-4 border border-gray-100 transition-shadow flex flex-col">
//       <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#2dd4bf]/10 rounded-lg flex items-center justify-center text-[#0f9c8c] mb-2.5">
//         <Icon className="w-3.5 h-3.5" />
//       </div>
//       <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
//         {title}
//       </h3>
//       <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed mb-3 flex-1">
//         {description}
//       </p>
//       <button
//         onClick={onClick}
//         className="w-full sm:w-auto self-start inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-gray-800 bg-gray-100 hover:bg-[#2dd4bf] hover:text-white rounded-md px-2.5 py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
//       >
//         {cta}
//         <ArrowRight className="w-3 h-3" />
//       </button>
//     </div>
//   );
// }

// const ContactUs = () => {
//   const [activeChannel, setActiveChannel] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* hero */}
//       <div className="bg-gradient-to-b from-[#2dd4bf]/10 to-transparent">
//         <div className="px-3 sm:px-5 max-w-4xl mx-auto pt-10 sm:pt-12 pb-5 sm:pb-6 text-center">
//           <p className="text-[9px] sm:text-[11px] font-semibold tracking-widest text-[#0f9c8c] uppercase mb-2">
//             Get in touch
//           </p>
//           <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
//             We'd love to hear from you
//           </h1>
//           <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-lg mx-auto">
//             Whether it's support, a sales question, or a partnership idea —
//             pick a team below and we'll get back to you within a day.
//           </p>
//         </div>
//       </div>

//       <div className="px-3 sm:px-4 lg:px-5 max-w-4xl mx-auto pb-9 sm:pb-10 -mt-1">
//         {/* channel cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
//           <ChannelCard
//             icon={Headphones}
//             title="Customer Support"
//             description="Get help with any issues or questions about our services through our dedicated support team."
//             cta="Get Support"
//             onClick={() => setActiveChannel("support")}
//           />
//           <ChannelCard
//             icon={Briefcase}
//             title="Sales"
//             description="Our sales team is ready to discuss how our services can meet your business banking needs."
//             cta="Contact Sales"
//             onClick={() => setActiveChannel("sales")}
//           />
//           <ChannelCard
//             icon={Handshake}
//             title="Partnership"
//             description="Let's explore partnership opportunities to grow and innovate together in digital banking."
//             cta="Partner Now"
//             onClick={() => setActiveChannel("partnership")}
//           />
//         </div>

//         {/* report fraud strip */}
//         <div className="mt-2.5 sm:mt-3 bg-amber-50 border border-amber-100 rounded-xl p-2.5 sm:p-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 justify-between">
//           <div className="flex items-start gap-2">
//             <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-md flex items-center justify-center text-amber-600">
//               <ShieldAlert className="w-3 h-3" />
//             </div>
//             <div>
//               <p className="text-xs font-bold text-gray-900">Report fraud</p>
//               <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
//                 Report any suspicious activity or unusual transactions
//                 immediately.
//               </p>
//             </div>
//           </div>
//           <a
//             href="mailto:care@abheepay.com?subject=Fraud%20Report"
//             className="flex-shrink-0 inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs font-semibold text-amber-800 bg-white border border-amber-200 hover:bg-amber-100 rounded-md px-2.5 py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
//           >
//             Report here
//             <ArrowRight className="w-3 h-3" />
//           </a>
//         </div>

//         {/* office + map */}
//         <div className="mt-6 sm:mt-7 grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3.5 items-start">
//           <div className="bg-white rounded-xl shadow-sm p-3.5 sm:p-4 border border-gray-100">
//             <h2 className="text-sm sm:text-base font-bold text-gray-900 mb-2.5">
//               Our office
//             </h2>
//             {OFFICES.map((office) => (
//               <div key={office.city} className="space-y-2.5">
//                 <div className="flex items-start gap-2">
//                   <div className="flex-shrink-0 w-6 h-6 bg-[#2dd4bf]/10 rounded-md flex items-center justify-center text-[#0f9c8c]">
//                     <MapPin className="w-3 h-3" />
//                   </div>
//                   <div>
//                     <p className="text-[11px] font-semibold text-gray-500">
//                       {office.city}
//                     </p>
//                     <p className="text-[11px] sm:text-xs text-gray-800 mt-0.5 leading-relaxed">
//                       {office.address}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <div className="flex-shrink-0 w-6 h-6 bg-[#2dd4bf]/10 rounded-md flex items-center justify-center text-[#0f9c8c]">
//                     <Phone className="w-3 h-3" />
//                   </div>
//                   <div>
//                     <p className="text-[11px] font-semibold text-gray-500">
//                       Call us
//                     </p>
//                     <a
//                       href="tel:+918860037218"
//                       className="text-[11px] sm:text-xs text-[#0f9c8c] font-semibold hover:underline"
//                     >
//                       +91 88600 37218
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <div className="flex-shrink-0 w-6 h-6 bg-[#2dd4bf]/10 rounded-md flex items-center justify-center text-[#0f9c8c]">
//                     <Mail className="w-3 h-3" />
//                   </div>
//                   <div>
//                     <p className="text-[11px] font-semibold text-gray-500">
//                       Email us
//                     </p>
//                     <a
//                       href="mailto:care@abheepay.com"
//                       className="text-[11px] sm:text-xs text-[#0f9c8c] font-semibold hover:underline"
//                     >
//                       care@abheepay.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white rounded-xl shadow-sm p-1 border border-gray-100 overflow-hidden">
//             <div className="rounded-lg overflow-hidden h-32 sm:h-40 lg:h-42 w-full">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Abheepay location on Google Maps"
//               />
//             </div>
//           </div>
//         </div>

//         <p className="text-[11px] text-gray-400 text-center mt-4">
//           We typically reply within one business day.
//         </p>
//       </div>

//       {activeChannel && (
//         <ContactModal
//           channel={activeChannel}
//           onClose={() => setActiveChannel(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactUs;













// import React, { useState, useEffect, useRef } from "react";
// import {
//   Headphones,
//   Briefcase,
//   Handshake,
//   ShieldAlert,
//   MapPin,
//   Phone,
//   Mail,
//   X,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";

// const CHANNELS = {
//   support: {
//     title: "Customer Support",
//     subtitle: "Tell us what's going on and we'll sort it out.",
//     queryLabel: "What do you need help with?",
//     queryPlaceholder: "Describe the issue you're facing...",
//   },
//   sales: {
//     title: "Contact Sales",
//     subtitle: "Tell us about your business and we'll take it from there.",
//     queryLabel: "What are you looking for?",
//     queryPlaceholder: "Tell us about your business banking needs...",
//   },
//   partnership: {
//     title: "Partner With Us",
//     subtitle: "Tell us about the opportunity you have in mind.",
//     queryLabel: "What kind of partnership?",
//     queryPlaceholder: "Tell us a bit about your organisation and the idea...",
//   },
// };

// const OFFICES = [
//   {
//     city: "New Delhi",
//     address: (
//       <>
//         2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
//         <br />
//         SECTOR-19, DWARKA, NEW DELHI - 110043
//       </>
//     ),
//   },
// ];

// function ContactModal({ channel, onClose }) {
//   const [status, setStatus] = useState("idle"); // idle | sending | sent | error
//   const [visible, setVisible] = useState(false);
//   const firstFieldRef = useRef(null);
//   const meta = CHANNELS[channel];

//   useEffect(() => {
//     // trigger slide-in on mount
//     const raf = requestAnimationFrame(() => setVisible(true));
//     firstFieldRef.current?.focus();
//     const onKey = (e) => {
//       if (e.key === "Escape") handleClose();
//     };
//     document.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       cancelAnimationFrame(raf);
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleClose = () => {
//     setVisible(false);
//     setTimeout(onClose, 200);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const formData = new FormData(e.target);
//     const indiaTime = new Date().toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       hour12: true,
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//     formData.append("Submitted At (IST)", indiaTime);
//     formData.append("Enquiry Type", meta.title);

//     try {
//       const response = await fetch("https://formsubmit.co/care@abheepay.com", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         setStatus("sent");
//         e.target.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-[9999]"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="contact-modal-title"
//     >
//       {/* backdrop */}
//       <button
//         aria-label="Close dialog"
//         onClick={handleClose}
//         className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-default transition-opacity duration-200 ${
//           visible ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* right-side drawer */}
//       <div
//         className={`absolute top-0 right-0 h-full w-full sm:w-[480px] lg:w-[520px] bg-white shadow-2xl flex flex-col transition-transform duration-200 ease-out ${
//           visible ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* header */}
//         <div className="flex items-center justify-between px-3.5 sm:px-3.5 pt-3.5 pb-2 flex-shrink-0 border-b border-gray-100">
//           <h3
//             id="contact-modal-title"
//             className="text-[13px] sm:text-sm font-bold text-gray-900"
//           >
//             Get in Touch
//           </h3>
//           <button
//             onClick={handleClose}
//             aria-label="Close"
//             className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] transition"
//           >
//             <X className="w-2.5 h-2.5" />
//           </button>
//         </div>

//         {/* body */}
//         <div className="flex-1 overflow-y-auto px-3.5 sm:px-3.5 pb-3.5">
//           {status === "sent" ? (
//             <div className="h-full flex flex-col items-center justify-center text-center gap-1 py-5">
//               <div className="w-7 h-7 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
//                 <Handshake className="w-3.5 h-3.5" />
//               </div>
//               <h4 className="text-xs font-bold text-gray-900">
//                 Message sent
//               </h4>
//               <p className="text-[11px] text-gray-500 max-w-xs">
//                 Thanks for reaching out. Our {meta.title.toLowerCase()} team
//                 typically replies within one business day.
//               </p>
//               <button
//                 onClick={handleClose}
//                 className="mt-1 text-[11px] font-semibold text-[#0f9c8c] hover:underline"
//               >
//                 Close
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-2 pt-2.5">
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />

//               <input
//                 ref={firstFieldRef}
//                 name="name"
//                 type="text"
//                 required
//                 placeholder="Full Name"
//                 aria-label="Full Name"
//                 className="w-full px-2.5 py-1 text-[11px] rounded-[10px] border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="company"
//                 type="text"
//                 placeholder="Company Name"
//                 aria-label="Company Name"
//                 className="w-full px-2.5 py-1 text-[11px] rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="email"
//                 type="email"
//                 required
//                 placeholder="Email ID"
//                 aria-label="Email ID"
//                 className="w-full px-2.5 py-1 text-[11px] rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="phone"
//                 type="tel"
//                 required
//                 placeholder="Mobile"
//                 aria-label="Mobile"
//                 className="w-full px-2.5 py-1 text-[11px] rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <textarea
//                 name="message"
//                 rows={2}
//                 required
//                 placeholder="Query"
//                 aria-label="Query"
//                 className="w-full px-2.5 py-1 text-[11px] rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition resize-none"
//               />

//               {status === "error" && (
//                 <p className="text-[10px] text-red-600 bg-red-50 border border-red-100 rounded-lg px-2 py-1">
//                   Something went wrong. Please try again.
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 disabled={status === "sending"}
//                 className="w-full bg-[#2dd4bf] text-white font-semibold py-1.5 px-3 rounded-lg shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-1.5 text-[11px]"
//               >
//                 {status === "sending" ? (
//                   <>
//                     <Loader2 className="w-3 h-3 animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   "Next"
//                 )}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ChannelCard({ icon: Icon, title, description, cta, onClick }) {
//   return (
//     <div className="group bg-white rounded-none p-2 sm:p-2.5 flex flex-col shadow-[3px_3px_0_0_#0f9c8c] hover:shadow-[5px_5px_0_0_#0f9c8c] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150">
//       <div className="w-5 h-5 bg-[#2dd4bf] rounded-none flex items-center justify-center text-white mb-1.5">
//         <Icon className="w-2.5 h-2.5" />
//       </div>
//       <h3 className="text-[11px] sm:text-xs font-bold text-gray-900 mb-0.5">
//         {title}
//       </h3>
//       <p className="text-[9px] sm:text-[10px] text-gray-500 leading-snug mb-1.5 flex-1">
//         {description}
//       </p>
//       <button
//         onClick={onClick}
//         className="w-full sm:w-auto self-start inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-bold text-white bg-gray-900 hover:bg-[#2dd4bf] rounded-none px-1.5 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
//       >
//         {cta}
//         <ArrowRight className="w-2 h-2" />
//       </button>
//     </div>
//   );
// }

// const ContactUs = () => {
//   const [activeChannel, setActiveChannel] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-50 pt-6 sm:pt-10">
//       {/* hero */}
//       <div className="bg-gradient-to-b from-[#2dd4bf]/10 to-transparent">
//         <div className="px-1.5 sm:px-2.5 max-w-[42rem] mx-auto pt-4 sm:pt-5 pb-2 sm:pb-2.5 text-center">
//           <p className="text-[6px] sm:text-[7px] font-semibold tracking-widest text-[#0f9c8c] uppercase mb-0.5">
//             Get in touch
//           </p>
//           <h1 className="text-[13px] sm:text-sm font-bold text-gray-900 leading-tight">
//             We'd love to hear from you
//           </h1>
//           <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 max-w-xs mx-auto">
//             Whether it's support, a sales question, or a partnership idea —
//             pick a team below and we'll get back to you within a day.
//           </p>
//         </div>
//       </div>

//       <div className="px-1.5 sm:px-2 lg:px-2.5 max-w-[42rem] mx-auto pb-4 sm:pb-5 -mt-1">
//         {/* channel cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2 mt-1">
//           <ChannelCard
//             icon={Headphones}
//             title="Customer Support"
//             description="Get help with any issues or questions about our services through our dedicated support team."
//             cta="Get Support"
//             onClick={() => setActiveChannel("support")}
//           />
//           <ChannelCard
//             icon={Briefcase}
//             title="Sales"
//             description="Our sales team is ready to discuss how our services can meet your business banking needs."
//             cta="Contact Sales"
//             onClick={() => setActiveChannel("sales")}
//           />
//           <ChannelCard
//             icon={Handshake}
//             title="Partnership"
//             description="Let's explore partnership opportunities to grow and innovate together in digital banking."
//             cta="Partner Now"
//             onClick={() => setActiveChannel("partnership")}
//           />
//         </div>

//         {/* report fraud strip */}
//         <div className="mt-1.5 sm:mt-2 bg-amber-50 border border-amber-100 rounded-lg p-1.5 sm:p-1.5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-1.5 justify-between">
//           <div className="flex items-start gap-2">
//             <div className="flex-shrink-0 w-4 h-4 bg-amber-100 rounded-md flex items-center justify-center text-amber-600">
//               <ShieldAlert className="w-2 h-2" />
//             </div>
//             <div>
//               <p className="text-[10px] font-bold text-gray-900">Report fraud</p>
//               <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">
//                 Report any suspicious activity or unusual transactions
//                 immediately.
//               </p>
//             </div>
//           </div>
//           <a
//             href="mailto:care@abheepay.com?subject=Fraud%20Report"
//             className="flex-shrink-0 inline-flex items-center justify-center gap-0.5 text-[9px] sm:text-[10px] font-semibold text-amber-800 bg-white border border-amber-200 hover:bg-amber-100 rounded-md px-1.5 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
//           >
//             Report here
//             <ArrowRight className="w-2 h-2" />
//           </a>
//         </div>

//         {/* office + map */}
//         <div className="mt-2.5 sm:mt-3.5 grid grid-cols-1 lg:grid-cols-2 gap-1.5 sm:gap-2 items-start">
//           <div className="bg-white rounded-lg shadow-sm p-2 sm:p-2.5 border border-gray-100">
//             <h2 className="text-[11px] sm:text-xs font-bold text-gray-900 mb-1.5">
//               Our office
//             </h2>
//             {OFFICES.map((office) => (
//               <div key={office.city} className="space-y-1.5">
//                 <div className="flex items-start gap-2">
//                   <div className="flex-shrink-0 w-4 h-4 bg-[#2dd4bf]/10 rounded-md flex items-center justify-center text-[#0f9c8c]">
//                     <MapPin className="w-2 h-2" />
//                   </div>
//                   <div>
//                     <p className="text-[9px] font-semibold text-gray-500">
//                       {office.city}
//                     </p>
//                     <p className="text-[9px] sm:text-[10px] text-gray-800 mt-0.5 leading-snug">
//                       {office.address}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <div className="flex-shrink-0 w-4 h-4 bg-[#2dd4bf]/10 rounded-md flex items-center justify-center text-[#0f9c8c]">
//                     <Phone className="w-2 h-2" />
//                   </div>
//                   <div>
//                     <p className="text-[9px] font-semibold text-gray-500">
//                       Call us
//                     </p>
//                     <a
//                       href="tel:+918860037218"
//                       className="text-[9px] sm:text-[10px] text-[#0f9c8c] font-semibold hover:underline"
//                     >
//                       +91 88600 37218
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-2">
//                   <div className="flex-shrink-0 w-4 h-4 bg-[#2dd4bf]/10 rounded-md flex items-center justify-center text-[#0f9c8c]">
//                     <Mail className="w-2 h-2" />
//                   </div>
//                   <div>
//                     <p className="text-[9px] font-semibold text-gray-500">
//                       Email us
//                     </p>
//                     <a
//                       href="mailto:care@abheepay.com"
//                       className="text-[9px] sm:text-[10px] text-[#0f9c8c] font-semibold hover:underline"
//                     >
//                       care@abheepay.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white rounded-lg shadow-sm p-1 border border-gray-100 overflow-hidden">
//             <div className="rounded-md overflow-hidden h-16 sm:h-20 lg:h-24 w-full">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Abheepay location on Google Maps"
//               />
//             </div>
//           </div>
//         </div>

//         <p className="text-[8px] text-gray-400 text-center mt-2">
//           We typically reply within one business day.
//         </p>
//       </div>

//       {activeChannel && (
//         <ContactModal
//           channel={activeChannel}
//           onClose={() => setActiveChannel(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactUs;













// import React, { useState, useEffect, useRef } from "react";
// import {
//   Headphones,
//   Briefcase,
//   Handshake,
//   BellRing,
//   MapPin,
//   Phone,
//   Mail,
//   X,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";

// const CHANNELS = {
//   support: {
//     title: "Customer Support",
//     subtitle: "Tell us what's going on and we'll sort it out.",
//     queryLabel: "What do you need help with?",
//     queryPlaceholder: "Describe the issue you're facing...",
//   },
//   sales: {
//     title: "Contact Sales",
//     subtitle: "Tell us about your business and we'll take it from there.",
//     queryLabel: "What are you looking for?",
//     queryPlaceholder: "Tell us about your business banking needs...",
//   },
//   partnership: {
//     title: "Partner With Us",
//     subtitle: "Tell us about the opportunity you have in mind.",
//     queryLabel: "What kind of partnership?",
//     queryPlaceholder: "Tell us a bit about your organisation and the idea...",
//   },
// };

// const CARDS = [
//   {
//     channel: "support",
//     icon: Headphones,
//     title: "Customer Support",
//     description:
//       "Get help with any issues or questions about our services through our dedicated 24/7 customer support.",
//     cta: "Get Support",
//   },
//   {
//     channel: "sales",
//     icon: Briefcase,
//     title: "Sales",
//     description:
//       "Our sales team is ready to discuss how our services can meet your business banking needs.",
//     cta: "Contact Sales",
//   },
//   {
//     channel: "partnership",
//     icon: Handshake,
//     title: "Partnership",
//     description:
//       "Let's explore partnership opportunities to grow and innovate together in digital banking.",
//     cta: "Partner Now",
//   },
// ];

// const OFFICES = [
//   {
//     city: "New Delhi",
//     address: (
//       <>
//         2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
//         <br />
//         SECTOR-19, DWARKA, NEW DELHI - 110043
//       </>
//     ),
//   },
// ];

// function ContactModal({ channel, onClose }) {
//   const [status, setStatus] = useState("idle"); // idle | sending | sent | error
//   const [visible, setVisible] = useState(false);
//   const firstFieldRef = useRef(null);
//   const meta = CHANNELS[channel];

//   useEffect(() => {
//     const raf = requestAnimationFrame(() => setVisible(true));
//     firstFieldRef.current?.focus();
//     const onKey = (e) => {
//       if (e.key === "Escape") handleClose();
//     };
//     document.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       cancelAnimationFrame(raf);
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleClose = () => {
//     setVisible(false);
//     setTimeout(onClose, 200);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const formData = new FormData(e.target);
//     const indiaTime = new Date().toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       hour12: true,
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//     formData.append("Submitted At (IST)", indiaTime);
//     formData.append("Enquiry Type", meta.title);

//     try {
//       const response = await fetch("https://formsubmit.co/care@abheepay.com", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         setStatus("sent");
//         e.target.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-[9999]"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="contact-modal-title"
//     >
//       <button
//         aria-label="Close dialog"
//         onClick={handleClose}
//         className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-default transition-opacity duration-200 ${
//           visible ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       <div
//         className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl flex flex-col transition-transform duration-200 ease-out ${
//           visible ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0 border-b border-gray-100">
//           <h3 id="contact-modal-title" className="text-xl font-bold text-gray-900">
//             Get in Touch
//           </h3>
//           <button
//             onClick={handleClose}
//             aria-label="Close"
//             className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] transition"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto px-6 pb-6">
//           {status === "sent" ? (
//             <div className="h-full flex flex-col items-center justify-center text-center gap-2 py-14">
//               <div className="w-12 h-12 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
//                 <Handshake className="w-6 h-6" />
//               </div>
//               <h4 className="text-base font-bold text-gray-900">Message sent</h4>
//               <p className="text-sm text-gray-500 max-w-xs">
//                 Thanks for reaching out. Our {meta.title.toLowerCase()} team
//                 typically replies within one business day.
//               </p>
//               <button
//                 onClick={handleClose}
//                 className="mt-2 text-sm font-semibold text-[#0f9c8c] hover:underline"
//               >
//                 Close
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4 pt-4">
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />

//               <input
//                 ref={firstFieldRef}
//                 name="name"
//                 type="text"
//                 required
//                 placeholder="Full Name"
//                 aria-label="Full Name"
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="company"
//                 type="text"
//                 placeholder="Company Name"
//                 aria-label="Company Name"
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="email"
//                 type="email"
//                 required
//                 placeholder="Email ID"
//                 aria-label="Email ID"
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="phone"
//                 type="tel"
//                 required
//                 placeholder="Mobile"
//                 aria-label="Mobile"
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <textarea
//                 name="message"
//                 rows={4}
//                 required
//                 placeholder="Query"
//                 aria-label="Query"
//                 className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition resize-none"
//               />

//               {status === "error" && (
//                 <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
//                   Something went wrong. Please try again.
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 disabled={status === "sending"}
//                 className="w-full bg-[#2dd4bf] text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-sm"
//               >
//                 {status === "sending" ? (
//                   <>
//                     <Loader2 className="w-4 h-4 animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   "Next"
//                 )}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const ContactUs = () => {
//   const [activeChannel, setActiveChannel] = useState(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#2dd4bf]/[0.06] to-white pt-8 sm:pt-12">
//       {/* hero */}
//       <div className="px-4 sm:px-8 max-w-4xl mx-auto pb-10 sm:pb-14 text-center">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//           We'd love to <span className="text-[#0f9c8c]">hear</span> from you
//         </h1>
//         <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-lg mx-auto">
//           Whether it's support, a sales question, or a partnership idea — pick a
//           team below and we'll get back to you within a day.
//         </p>
//       </div>

//       <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-16 sm:pb-20">
//         {/* channels + report fraud — single bordered container like the reference */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
//             {CARDS.map(({ channel, icon: Icon, title, description, cta }) => (
//               <div key={channel} className="p-6 sm:p-8 flex flex-col">
//                 <Icon className="w-8 h-8 text-gray-900 mb-4" strokeWidth={1.75} />
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
//                   {title}
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
//                   {description}
//                 </p>
//                 <button
//                   onClick={() => setActiveChannel(channel)}
//                   className="self-start inline-flex items-center gap-2 text-sm font-semibold text-gray-800 bg-gray-100 hover:bg-[#2dd4bf] hover:text-white rounded-lg px-4 py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
//                 >
//                   {cta}
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* report fraud row */}
//           <div className="border-t border-gray-100 px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
//             <div className="flex items-start gap-3">
//               <BellRing className="w-6 h-6 text-gray-900 flex-shrink-0" strokeWidth={1.75} />
//               <div>
//                 <p className="text-base font-bold text-gray-900">Report Fraud</p>
//                 <p className="text-sm text-gray-500 mt-0.5">
//                   Report any suspicious activity or unusual transactions
//                   immediately.
//                 </p>
//               </div>
//             </div>
//             <a
//               href="mailto:care@abheepay.com?subject=Fraud%20Report"
//               className="flex-shrink-0 inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
//             >
//               Report Here
//               <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>
//         </div>

//         {/* our office */}
//         <div className="mt-14 sm:mt-16">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8">
//             Our <span className="text-[#0f9c8c]">Office</span>
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
//             <div className="space-y-4">
//               {OFFICES.map((office) => (
//                 <div
//                   key={office.city}
//                   className="bg-gray-50 rounded-xl border-l-4 border-[#2dd4bf] p-5"
//                 >
//                   <div className="flex items-center gap-2 mb-2">
//                     <MapPin className="w-4 h-4 text-[#0f9c8c]" />
//                     <p className="font-bold text-gray-900">{office.city}</p>
//                   </div>
//                   <p className="text-sm text-gray-900 leading-relaxed">
//                     {office.address}
//                   </p>
//                 </div>
//               ))}

//               <div className="flex flex-col sm:flex-row gap-4 pt-1">
//                 <a
//                   href="tel:+918860037218"
//                   className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0f9c8c] transition"
//                 >
//                   <Phone className="w-4 h-4 text-[#0f9c8c]" />
//                   +91 88600 37218
//                 </a>
//                 <a
//                   href="mailto:care@abheepay.com"
//                   className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#0f9c8c] transition"
//                 >
//                   <Mail className="w-4 h-4 text-[#0f9c8c]" />
//                   care@abheepay.com
//                 </a>
//               </div>
//             </div>

//             <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-64 lg:h-72">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Abheepay location on Google Maps"
//               />
//             </div>
//           </div>
//         </div>

//         <p className="text-xs text-gray-400 text-center mt-10">
//           We typically reply within one business day.
//         </p>
//       </div>

//       {activeChannel && (
//         <ContactModal
//           channel={activeChannel}
//           onClose={() => setActiveChannel(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactUs;












// import React, { useState, useEffect, useRef } from "react";
// import {
//   Headphones,
//   Briefcase,
//   Handshake,
//   BellRing,
//   MapPin,
//   Phone,
//   Mail,
//   X,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";

// const CHANNELS = {
//   support: {
//     title: "Customer Support",
//     subtitle: "Tell us what's going on and we'll sort it out.",
//     queryLabel: "What do you need help with?",
//     queryPlaceholder: "Describe the issue you're facing...",
//   },
//   sales: {
//     title: "Contact Sales",
//     subtitle: "Tell us about your business and we'll take it from there.",
//     queryLabel: "What are you looking for?",
//     queryPlaceholder: "Tell us about your business banking needs...",
//   },
//   partnership: {
//     title: "Partner With Us",
//     subtitle: "Tell us about the opportunity you have in mind.",
//     queryLabel: "What kind of partnership?",
//     queryPlaceholder: "Tell us a bit about your organisation and the idea...",
//   },
// };

// const CARDS = [
//   {
//     channel: "support",
//     icon: Headphones,
//     title: "Customer Support",
//     description:
//       "Get help with any issues or questions about our services through our dedicated 24/7 customer support.",
//     cta: "Get Support",
//   },
//   {
//     channel: "sales",
//     icon: Briefcase,
//     title: "Sales",
//     description:
//       "Our sales team is ready to discuss how our services can meet your business banking needs.",
//     cta: "Contact Sales",
//   },
//   {
//     channel: "partnership",
//     icon: Handshake,
//     title: "Partnership",
//     description:
//       "Let's explore partnership opportunities to grow and innovate together in digital banking.",
//     cta: "Partner Now",
//   },
// ];

// const OFFICES = [
//   {
//     city: "New Delhi",
//     address: (
//       <>
//         2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
//         <br />
//         SECTOR-19, DWARKA, NEW DELHI - 110043
//       </>
//     ),
//   },
// ];

// function ContactModal({ channel, onClose }) {
//   const [status, setStatus] = useState("idle"); // idle | sending | sent | error
//   const [visible, setVisible] = useState(false);
//   const firstFieldRef = useRef(null);
//   const meta = CHANNELS[channel];

//   useEffect(() => {
//     const raf = requestAnimationFrame(() => setVisible(true));
//     firstFieldRef.current?.focus();
//     const onKey = (e) => {
//       if (e.key === "Escape") handleClose();
//     };
//     document.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       cancelAnimationFrame(raf);
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleClose = () => {
//     setVisible(false);
//     setTimeout(onClose, 200);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const formData = new FormData(e.target);
//     const indiaTime = new Date().toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       hour12: true,
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//     formData.append("Submitted At (IST)", indiaTime);
//     formData.append("Enquiry Type", meta.title);

//     try {
//       const response = await fetch("https://formsubmit.co/care@abheepay.com", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         setStatus("sent");
//         e.target.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-[9999]"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="contact-modal-title"
//     >
//       <button
//         aria-label="Close dialog"
//         onClick={handleClose}
//         className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-default transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"
//           }`}
//       />

//       <div
//         className={`absolute top-0 right-0 h-full w-full sm:w-[350px] bg-white shadow-2xl flex flex-col transition-transform duration-200 ease-out ${visible ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         <div className="flex items-center justify-between px-3 pt-3 pb-2 flex-shrink-0 border-b border-gray-100">
//           <h3 id="contact-modal-title" className="text-xs font-bold text-gray-900">
//             Get in Touch
//           </h3>
//           <button
//             onClick={handleClose}
//             aria-label="Close"
//             className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] transition"
//           >
//             <X className="w-2.5 h-2.5" />
//           </button>
//         </div>

//         <div className="flex-1 overflow-hidden px-3 pb-3">
//           {status === "sent" ? (
//             <div className="h-full flex flex-col items-center justify-center text-center gap-1 py-6">
//               <div className="w-6 h-6 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
//                 <Handshake className="w-3 h-3" />
//               </div>
//               <h4 className="text-[11px] font-bold text-gray-900">Message sent</h4>
//               <p className="text-[10px] text-gray-500 max-w-xs">
//                 Thanks for reaching out. Our {meta.title.toLowerCase()} team
//                 typically replies within one business day.
//               </p>
//               <button
//                 onClick={handleClose}
//                 className="mt-1 text-[10px] font-semibold text-[#0f9c8c] hover:underline"
//               >
//                 Close
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-2 pt-2">
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />

//               <input
//                 ref={firstFieldRef}
//                 name="name"
//                 type="text"
//                 required
//                 placeholder="Full Name"
//                 aria-label="Full Name"
//                 className="w-full px-2.5 py-1 text-[11px] rounded border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="company"
//                 type="text"
//                 placeholder="Company Name"
//                 aria-label="Company Name"
//                 className="w-full px-2.5 py-1 text-[11px] rounded border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="email"
//                 type="email"
//                 required
//                 placeholder="Email ID"
//                 aria-label="Email ID"
//                 className="w-full px-2.5 py-1 text-[11px] rounded border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="phone"
//                 type="tel"
//                 required
//                 placeholder="Mobile"
//                 aria-label="Mobile"
//                 className="w-full px-2.5 py-1 text-[11px] rounded border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <textarea
//                 name="message"
//                 rows={2}
//                 required
//                 placeholder="Query"
//                 aria-label="Query"
//                 className="w-full px-2.5 py-3.5 text-[11px] rounded border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition resize-none"
//               />

//               {status === "error" && (
//                 <p className="text-[9px] text-red-600 bg-red-50 border border-red-100 rounded-lg px-1.5 py-1">
//                   Something went wrong. Please try again.
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 disabled={status === "sending"}
//                 className="w-full bg-[#2dd4bf] text-white font-semibold py-1.5 px-2.5 rounded shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-1 text-[11px]"
//               >
//                 {status === "sending" ? (
//                   <>
//                     <Loader2 className="w-3 h-3 animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   "Next"
//                 )}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const ContactUs = () => {
//   const [activeChannel, setActiveChannel] = useState(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#2dd4bf]/[0.06] to-white pt-24 sm:pt-28">
//       {/* hero */}
//       <div className="px-2.5 sm:px-4 max-w-xl mx-auto pb-6 sm:pb-6 text-center">
//         <h1 className="text-[1.5rem] sm:text-[1.5rem] lg:text-[2rem] font-black tracking-[-0.04em] leading-[1.05] text-slate-900">
//           We'd love to <span className="text-[#14B8A6]">hear</span> from you
//         </h1>
//       </div>

//       <div className="px-2.5 sm:px-3 lg:px-4 max-w-2xl mx-auto pb-8 sm:pb-9">
//         {/* channels + report fraud — single bordered container like the reference */}
//         <div className="bg-white rounded shadow-[0_20px_50px_rgba(15,23,42,.08)] hover:shadow-[0_30px_60px_rgba(20,184,166,.12)] border border-gray-200 overflow-hidden">
//           <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
//             {CARDS.map(({ channel, icon: Icon, title, description, cta }) => (
//               <div key={channel} className="p-5 sm:p-3.5 flex flex-col">
//                 <Icon className="w-4 h-4 text-gray-900 mb-2" strokeWidth={1.75} />
//                 <h3 className="text-[16px] font-black tracking-[-0.02em] text-slate-900 text-gray-900 mb-1">
//                   {title}
//                 </h3>
//                 <p className="text-[11px] text-gray-600 leading-4 mb-2.5 flex-1">
//                   {description}
//                 </p>
//                 <button
//                   onClick={() => setActiveChannel(channel)}
//                   className="self-start w-36 inline-flex items-center justify-center gap-1 text-[10px] font-semibold text-gray-800 bg-gray-100 hover:bg-[#2dd4bf] hover:text-white rounded-xl px-3 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
//                 >
//                   {cta}
//                   <ArrowRight className="w-2.5 h-2.5" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* report fraud row */}
//           <div className="border-t border-gray-100 px-3 sm:px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
//             <div className="flex items-start gap-3">
//               <BellRing className="w-3.5 h-3.5 text-gray-900 flex-shrink-0" strokeWidth={1.75} />
//               <div>
//                 <p className="text-lg font-black tracking-tight text-gray-900">Report Fraud</p>
//                 <p className="text-sm leading-6 text-slate-500 text-gray-600 mt-0.5">
//                   Report any suspicious activity or unusual transactions
//                   immediately.
//                 </p>
//               </div>
//             </div>
//             <a
//               href="mailto:care@abheepay.com?subject=Fraud%20Report"
//               className="flex-shrink-0 inline-flex items-center justify-center gap-1 text-[10px] font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg px-2.5 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
//             >
//               Report Here
//               <ArrowRight className="w-2.5 h-2.5" />
//             </a>
//           </div>
//         </div>

//         {/* our office */}
//         <div className="mt-6 sm:mt-7">
//           <h2 className="text-3xl font-black tracking-[-0.03em] font-extrabold text-gray-900 mb-2.5 sm:mb-3">
//             Our <span className="text-[#0f9c8c]">Office</span>
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 items-start">
//             <div className="space-y-2">
//               {OFFICES.map((office) => (
//                 <div
//                   key={office.city}
//                   className="bg-white rounded-3xl border-l-4 border-[#2dd4bf] p-5"
//                 >
//                   <div className="flex items-center gap-1 mb-1">
//                     <MapPin className="w-2.5 h-2.5 text-[#0f9c8c]" />
//                     <p className="text-[11px] font-bold text-gray-900">{office.city}</p>
//                   </div>
//                   <p className="text-[10px] text-gray-900 leading-relaxed">
//                     {office.address}
//                   </p>
//                 </div>
//               ))}

//               <div className="flex flex-col sm:flex-row gap-2 pt-1">
//                 <a
//                   href="tel:+918860037218"
//                   className="flex items-center gap-1 text-[11px] text-gray-700 hover:text-[#0f9c8c] transition"
//                 >
//                   <Phone className="w-2.5 h-2.5 text-[#0f9c8c]" />
//                   +91 88600 37218
//                 </a>
//                 <a
//                   href="mailto:care@abheepay.com"
//                   className="flex items-center gap-1 text-[11px] text-gray-700 hover:text-[#0f9c8c] transition"
//                 >
//                   <Mail className="w-2.5 h-2.5 text-[#0f9c8c]" />
//                   care@abheepay.com
//                 </a>
//               </div>
//             </div>

//             <div className="rounded-3xl border border-gray-200 shadow-md hover:shadow-xl overflow-hidden h-32 lg:h-36">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Abheepay location on Google Maps"
//               />
//             </div>
//           </div>
//         </div>

//         <p className="text-[9px] text-gray-400 text-center mt-4">
//           We typically reply within one business day.
//         </p>
//       </div>

//       {activeChannel && (
//         <ContactModal
//           channel={activeChannel}
//           onClose={() => setActiveChannel(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactUs;












// import React, { useState, useEffect, useRef } from "react";
// import {
//   Headphones,
//   Briefcase,
//   Handshake,
//   BellRing,
//   MapPin,
//   Phone,
//   Mail,
//   X,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";

// const CHANNELS = {
//   support: {
//     title: "Customer Support",
//     subtitle: "Tell us what's going on and we'll sort it out.",
//     queryLabel: "What do you need help with?",
//     queryPlaceholder: "Describe the issue you're facing...",
//   },
//   sales: {
//     title: "Contact Sales",
//     subtitle: "Tell us about your business and we'll take it from there.",
//     queryLabel: "What are you looking for?",
//     queryPlaceholder: "Tell us about your business banking needs...",
//   },
//   partnership: {
//     title: "Partner With Us",
//     subtitle: "Tell us about the opportunity you have in mind.",
//     queryLabel: "What kind of partnership?",
//     queryPlaceholder: "Tell us a bit about your organisation and the idea...",
//   },
// };

// const CARDS = [
//   {
//     channel: "support",
//     icon: Headphones,
//     title: "Customer Support",
//     description:
//       "Get help with any issues or questions about our services through our dedicated 24/7 customer support.",
//     cta: "Get Support",
//   },
//   {
//     channel: "sales",
//     icon: Briefcase,
//     title: "Sales",
//     description:
//       "Our sales team is ready to discuss how our services can meet your business banking needs.",
//     cta: "Contact Sales",
//   },
//   {
//     channel: "partnership",
//     icon: Handshake,
//     title: "Partnership",
//     description:
//       "Let's explore partnership opportunities to grow and innovate together in digital banking.",
//     cta: "Partner Now",
//   },
// ];

// const OFFICES = [
//   {
//     city: "New Delhi",
//     address: (
//       <>
//         2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
//         <br />
//         SECTOR-19, DWARKA, NEW DELHI - 110043
//       </>
//     ),
//   },
// ];

// function ContactModal({ channel, onClose }) {
//   const [status, setStatus] = useState("idle"); // idle | sending | sent | error
//   const [visible, setVisible] = useState(false);
//   const firstFieldRef = useRef(null);
//   const meta = CHANNELS[channel];

//   useEffect(() => {
//     const raf = requestAnimationFrame(() => setVisible(true));
//     firstFieldRef.current?.focus();
//     const onKey = (e) => {
//       if (e.key === "Escape") handleClose();
//     };
//     document.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       cancelAnimationFrame(raf);
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleClose = () => {
//     setVisible(false);
//     setTimeout(onClose, 200);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const formData = new FormData(e.target);
//     const indiaTime = new Date().toLocaleString("en-IN", {
//       timeZone: "Asia/Kolkata",
//       hour12: true,
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//     });
//     formData.append("Submitted At (IST)", indiaTime);
//     formData.append("Enquiry Type", meta.title);

//     try {
//       const response = await fetch("https://formsubmit.co/care@abheepay.com", {
//         method: "POST",
//         body: formData,
//       });
//       if (response.ok) {
//         setStatus("sent");
//         e.target.reset();
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 z-[9999]"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="contact-modal-title"
//     >
//       <button
//         aria-label="Close dialog"
//         onClick={handleClose}
//         className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-default transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"
//           }`}
//       />

//       <div
//         className={`absolute top-0 right-0 h-full w-full sm:w-[525px] bg-white shadow-2xl flex flex-col transition-transform duration-200 ease-out ${visible ? "translate-x-0" : "translate-x-full"
//           }`}
//       >
//         <div className="flex items-center justify-between px-[18px] pt-[18px] pb-3 flex-shrink-0 border-b border-gray-100">
//           <h3 id="contact-modal-title" className="text-[18px] font-bold text-gray-900">
//             Get in Touch
//           </h3>
//           <button
//             onClick={handleClose}
//             aria-label="Close"
//             className="flex-shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] transition"
//           >
//             <X className="w-[15px] h-[15px]" />
//           </button>
//         </div>

//         <div className="flex-1 overflow-hidden px-[18px] pb-[18px]">
//           {status === "sent" ? (
//             <div className="h-full flex flex-col items-center justify-center text-center gap-[6px] py-9">
//               <div className="w-9 h-9 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
//                 <Handshake className="w-[18px] h-[18px]" />
//               </div>
//               <h4 className="text-[16.5px] font-bold text-gray-900">Message sent</h4>
//               <p className="text-[15px] text-gray-500 max-w-xs">
//                 Thanks for reaching out. Our {meta.title.toLowerCase()} team
//                 typically replies within one business day.
//               </p>
//               <button
//                 onClick={handleClose}
//                 className="mt-[6px] text-[15px] font-semibold text-[#0f9c8c] hover:underline"
//               >
//                 Close
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-3 pt-3">
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />

//               <input
//                 ref={firstFieldRef}
//                 name="name"
//                 type="text"
//                 required
//                 placeholder="Full Name"
//                 aria-label="Full Name"
//                 className="w-full px-[15px] py-[6px] text-[16.5px] rounded-[6px] border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="company"
//                 type="text"
//                 placeholder="Company Name"
//                 aria-label="Company Name"
//                 className="w-full px-[15px] py-[6px] text-[16.5px] rounded-[6px] border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="email"
//                 type="email"
//                 required
//                 placeholder="Email ID"
//                 aria-label="Email ID"
//                 className="w-full px-[15px] py-[6px] text-[16.5px] rounded-[6px] border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <input
//                 name="phone"
//                 type="tel"
//                 required
//                 placeholder="Mobile"
//                 aria-label="Mobile"
//                 className="w-full px-[15px] py-[6px] text-[16.5px] rounded-[6px] border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition"
//               />

//               <textarea
//                 name="message"
//                 rows={3}
//                 required
//                 placeholder="Query"
//                 aria-label="Query"
//                 className="w-full px-[15px] py-[21px] text-[16.5px] rounded-[6px] border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition resize-none"
//               />

//               {status === "error" && (
//                 <p className="text-[13.5px] text-red-600 bg-red-50 border border-red-100 rounded-[12px] px-[9px] py-[6px]">
//                   Something went wrong. Please try again.
//                 </p>
//               )}

//               <button
//                 type="submit"
//                 disabled={status === "sending"}
//                 className="w-full bg-[#2dd4bf] text-white font-semibold py-[9px] px-[15px] rounded-[6px] shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-[6px] text-[16.5px]"
//               >
//                 {status === "sending" ? (
//                   <>
//                     <Loader2 className="w-[18px] h-[18px] animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   "Next"
//                 )}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const ContactUs = () => {
//   const [activeChannel, setActiveChannel] = useState(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#2dd4bf]/[0.06] to-white pt-36 sm:pt-[168px]">
//       {/* hero */}
//       <div className="px-[15px] sm:px-6 max-w-[864px] mx-auto pb-9 sm:pb-9 text-center">
//         <h1 className="text-[36px] sm:text-[36px] lg:text-[48px] font-black tracking-[-0.04em] leading-[1.05] text-slate-900">
//           We'd love to <span className="text-[#14B8A6]">hear</span> from you
//         </h1>
//       </div>

//       <div className="px-[15px] sm:px-[18px] lg:px-6 max-w-[1008px] mx-auto pb-12 sm:pb-[54px]">
//         {/* channels + report fraud — single bordered container like the reference */}
//         <div className="bg-white rounded-[6px] shadow-[0_20px_50px_rgba(15,23,42,.08)] hover:shadow-[0_30px_60px_rgba(20,184,166,.12)] border border-gray-200 overflow-hidden">
//           <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
//             {CARDS.map(({ channel, icon: Icon, title, description, cta }) => (
//               <div key={channel} className="p-[30px] sm:p-[21px] flex flex-col">
//                 <Icon className="w-6 h-6 text-gray-900 mb-3" strokeWidth={1.75} />
//                 <h3 className="text-[24px] font-black tracking-[-0.02em] text-slate-900 text-gray-900 mb-[6px]">
//                   {title}
//                 </h3>
//                 <p className="text-[16.5px] text-gray-600 leading-6 mb-[15px] flex-1">
//                   {description}
//                 </p>
//                 <button
//                   onClick={() => setActiveChannel(channel)}
//                   className="self-start w-[216px] inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-gray-800 bg-gray-100 hover:bg-[#2dd4bf] hover:text-white rounded-[18px] px-[18px] py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
//                 >
//                   {cta}
//                   <ArrowRight className="w-[15px] h-[15px]" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* report fraud row */}
//           <div className="border-t border-gray-100 px-[18px] sm:px-[21px] py-[15px] flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
//             <div className="flex items-start gap-[18px]">
//               <BellRing className="w-[21px] h-[21px] text-gray-900 flex-shrink-0" strokeWidth={1.75} />
//               <div>
//                 <p className="text-[27px] font-black tracking-tight text-gray-900">Report Fraud</p>
//                 <p className="text-[21px] leading-9 text-slate-500 text-gray-600 mt-[3px]">
//                   Report any suspicious activity or unusual transactions
//                   immediately.
//                 </p>
//               </div>
//             </div>
//             <a
//               href="mailto:care@abheepay.com?subject=Fraud%20Report"
//               className="flex-shrink-0 inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-[12px] px-[15px] py-[6px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
//             >
//               Report Here
//               <ArrowRight className="w-[15px] h-[15px]" />
//             </a>
//           </div>
//         </div>

//         {/* our office */}
//         <div className="mt-9 sm:mt-[42px]">
//           <h2 className="text-[45px] font-black tracking-[-0.03em] font-extrabold text-gray-900 mb-[15px] sm:mb-[18px]">
//             Our <span className="text-[#0f9c8c]">Office</span>
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] items-start">
//             <div className="space-y-3">
//               {OFFICES.map((office) => (
//                 <div
//                   key={office.city}
//                   className="bg-white rounded-[36px] border-l-[6px] border-[#2dd4bf] p-[30px]"
//                 >
//                   <div className="flex items-center gap-[6px] mb-[6px]">
//                     <MapPin className="w-[15px] h-[15px] text-[#0f9c8c]" />
//                     <p className="text-[16.5px] font-bold text-gray-900">{office.city}</p>
//                   </div>
//                   <p className="text-[15px] text-gray-900 leading-relaxed">
//                     {office.address}
//                   </p>
//                 </div>
//               ))}

//               <div className="flex flex-col sm:flex-row gap-3 pt-[6px]">
//                 <a
//                   href="tel:+918860037218"
//                   className="flex items-center gap-[6px] text-[16.5px] text-gray-700 hover:text-[#0f9c8c] transition"
//                 >
//                   <Phone className="w-[15px] h-[15px] text-[#0f9c8c]" />
//                   +91 88600 37218
//                 </a>
//                 <a
//                   href="mailto:care@abheepay.com"
//                   className="flex items-center gap-[6px] text-[16.5px] text-gray-700 hover:text-[#0f9c8c] transition"
//                 >
//                   <Mail className="w-[15px] h-[15px] text-[#0f9c8c]" />
//                   care@abheepay.com
//                 </a>
//               </div>
//             </div>

//             <div className="rounded-[36px] border border-gray-200 shadow-md hover:shadow-xl overflow-hidden h-48 lg:h-[216px]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Abheepay location on Google Maps"
//               />
//             </div>
//           </div>
//         </div>

//         <p className="text-[13.5px] text-gray-400 text-center mt-6">
//           We typically reply within one business day.
//         </p>
//       </div>

//       {activeChannel && (
//         <ContactModal
//           channel={activeChannel}
//           onClose={() => setActiveChannel(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactUs;















import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async"; // swap to "react-helmet" if that's what you have installed
import {
  Headphones,
  Briefcase,
  Handshake,
  BellRing,
  MapPin,
  Phone,
  Mail,
  Clock,
  Plug,
  Building2,
  LifeBuoy,
  ChevronDown,
  X,
  ArrowRight,
  Loader2,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SEO CONSTANTS                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.abheepay.com"; // update if this differs from your production domain
const PAGE_PATH = "/company/contact-us";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const SEO_TITLE = "Contact AbheePay | Sales, Support & Business Enquiries";
const SEO_DESCRIPTION =
  "Contact AbheePay for sales enquiries, partnership opportunities, API integration, enterprise solutions, or customer support. Our team is ready to help.";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                             */
/* ------------------------------------------------------------------ */

const CHANNELS = {
  sales: {
    title: "Sales Enquiry",
    subtitle: "Tell us about your business and we'll show you the right fit.",
    queryLabel: "What are you looking for?",
    queryPlaceholder: "Tell us about your business and payment needs...",
  },
  enterprise: {
    title: "Enterprise Solutions",
    subtitle: "Tell us about the project or infrastructure you're planning.",
    queryLabel: "What are you building?",
    queryPlaceholder: "Tell us about your enterprise requirements...",
  },
  api: {
    title: "API Sales",
    subtitle: "Tell us which API you're interested in and your use case.",
    queryLabel: "Which API do you need?",
    queryPlaceholder: "Payment Gateway API, Payout API, BBPS API, Wallet API...",
  },
  partner: {
    title: "Partner Program",
    subtitle: "Tell us about your business and the partnership you have in mind.",
    queryLabel: "What kind of partnership?",
    queryPlaceholder: "Tell us a bit about your organisation and the idea...",
  },
  support: {
    title: "Technical Support",
    subtitle: "Tell us what's going on and we'll help you sort it out.",
    queryLabel: "What do you need help with?",
    queryPlaceholder: "Describe the issue you're facing...",
  },
};

const CARDS = [
  {
    channel: "sales",
    icon: Briefcase,
    title: "Sales Enquiry",
    description:
      "Learn more about our products and services, including Payment Gateway, QR Solutions, POS Machine, Merchant App, Business Banking Solutions, and Digital Invoice.",
    cta: "Talk to Sales",
  },
  {
    channel: "enterprise",
    icon: Building2,
    title: "Enterprise Solutions",
    description:
      "Discuss custom technology projects, payment infrastructure, API integration, and enterprise business requirements with our solution experts.",
    cta: "Discuss Your Project",
  },
  {
    channel: "api",
    icon: Plug,
    title: "API Sales",
    description:
      "Connect with our API specialists to learn more about the Payment Gateway API, Payout API, BBPS API, Wallet API, QR API, Recharge API, and Aadhaar Verification API.",
    cta: "Explore API Access",
  },
  {
    channel: "partner",
    icon: Handshake,
    title: "Partner Program",
    description:
      "Interested in becoming a Retailer, Distributor, White Label Partner, or Enterprise Partner? Our partnership team will guide you through the onboarding process.",
    cta: "Become a Partner",
  },
  {
    channel: "support",
    icon: LifeBuoy,
    title: "Technical Support",
    description:
      "Need help with integration, onboarding, or an existing service? Our technical support team is available to assist you.",
    cta: "Get Support",
  },
];

const OFFICES = [
  {
    city: "New Delhi",
    address: (
      <>
        2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI,
        <br />
        SECTOR-19, DWARKA, NEW DELHI - 110043
      </>
    ),
  },
];

const BUSINESS_TYPES = [
  "Retailer",
  "Distributor",
  "White Label Partner",
  "Enterprise",
  "Individual / Merchant",
  "Other",
];

const PRODUCTS_INTERESTED = [
  "Payment Gateway",
  "QR Solutions",
  "POS Machine",
  "Merchant App",
  "Business Banking Solutions",
  "Digital Invoice",
  "API Integration",
  "Other",
];

const FAQS = [
  {
    q: "How quickly will I receive a response?",
    a: "Our team aims to respond to enquiries as quickly as possible during business hours, typically within one business day.",
  },
  {
    q: "Can I request a product demonstration?",
    a: "Yes. You can schedule a product demonstration by selecting \"Schedule a Demo\" or mentioning your request in the enquiry form.",
  },
  {
    q: "I need help choosing the right solution.",
    a: "No problem. Share your business requirements in the enquiry form, and our team will recommend the most suitable products and services.",
  },
  {
    q: "Can I enquire about partnerships?",
    a: "Yes. We welcome enquiries for the Retailer Program, Distributor Program, White Label Program, and Enterprise Program.",
  },
  {
    q: "How do I contact technical support?",
    a: "Existing customers can contact our technical support team using the phone number and email address provided on this page.",
  },
];

/* ------------------------------------------------------------------ */
/*  SHARED FORM FIELD STYLES                                           */
/* ------------------------------------------------------------------ */

const inputClass =
  "w-full px-[15px] py-[9px] text-[15px] rounded-[6px] border border-gray-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#2dd4bf] focus:ring-2 focus:ring-[#2dd4bf]/30 outline-none transition";

/* ------------------------------------------------------------------ */
/*  QUICK-ENQUIRY MODAL (opened from the "How Can We Help" cards)      */
/* ------------------------------------------------------------------ */

function ContactModal({ channel, onClose }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [visible, setVisible] = useState(false);
  const firstFieldRef = useRef(null);
  const meta = CHANNELS[channel];

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    firstFieldRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const indiaTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    formData.append("Submitted At (IST)", indiaTime);
    formData.append("Enquiry Type", meta.title);

    try {
      const response = await fetch("https://formsubmit.co/care@abheepay.com", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button
        aria-label="Close dialog"
        onClick={handleClose}
        className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm cursor-default transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-[525px] bg-white shadow-2xl flex flex-col transition-transform duration-200 ease-out ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-[18px] pt-[18px] pb-3 flex-shrink-0 border-b border-gray-100">
          <div>
            <h3 id="contact-modal-title" className="text-[18px] font-bold text-gray-900">
              {meta.title}
            </h3>
            <p className="text-[13.5px] text-gray-500 mt-[2px]">{meta.subtitle}</p>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="flex-shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf] transition"
          >
            <X className="w-[15px] h-[15px]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-[18px] pb-[18px]">
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-[6px] py-9">
              <div className="w-9 h-9 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
                <Handshake className="w-[18px] h-[18px]" />
              </div>
              <h4 className="text-[16.5px] font-bold text-gray-900">Message sent</h4>
              <p className="text-[15px] text-gray-500 max-w-xs">
                Thanks for reaching out. Our {meta.title.toLowerCase()} team
                typically replies within one business day.
              </p>
              <button
                onClick={handleClose}
                className="mt-[6px] text-[15px] font-semibold text-[#0f9c8c] hover:underline"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 pt-3">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                ref={firstFieldRef}
                name="name"
                type="text"
                required
                placeholder="Full Name"
                aria-label="Full Name"
                className={inputClass}
              />

              <input
                name="company"
                type="text"
                placeholder="Company Name"
                aria-label="Company Name"
                className={inputClass}
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Business Email Address"
                aria-label="Business Email Address"
                className={inputClass}
              />

              <input
                name="phone"
                type="tel"
                required
                placeholder="Mobile Number"
                aria-label="Mobile Number"
                className={inputClass}
              />

              <textarea
                name="message"
                rows={3}
                required
                placeholder={meta.queryPlaceholder}
                aria-label={meta.queryLabel}
                className={`${inputClass} resize-none`}
              />

              {status === "error" && (
                <p className="text-[13.5px] text-red-600 bg-red-50 border border-red-100 rounded-[12px] px-[9px] py-[6px]">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#2dd4bf] text-white font-semibold py-[9px] px-[15px] rounded-[6px] shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-[6px] text-[16.5px]"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-[18px] h-[18px] animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Enquiry"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN INLINE ENQUIRY FORM ("Send Us a Message" section)             */
/* ------------------------------------------------------------------ */

function MainEnquiryForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const indiaTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    formData.append("Submitted At (IST)", indiaTime);
    formData.append("Enquiry Type", "General Enquiry");

    try {
      const response = await fetch("https://formsubmit.co/care@abheepay.com", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-[24px] border border-gray-200 shadow-sm p-[36px] text-center flex flex-col items-center gap-[6px]">
        <div className="w-10 h-10 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center text-[#0f9c8c]">
          <Handshake className="w-5 h-5" />
        </div>
        <h3 className="text-[19.5px] font-bold text-gray-900">Enquiry sent</h3>
        <p className="text-[15px] text-gray-500 max-w-sm">
          Thanks for reaching out. Our team typically replies within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-[6px] text-[15px] font-semibold text-[#0f9c8c] hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[24px] border border-gray-200 shadow-sm p-[24px] sm:p-[30px] space-y-3"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="name" type="text" required placeholder="Full Name" aria-label="Full Name" className={inputClass} />
        <input name="company" type="text" placeholder="Company Name" aria-label="Company Name" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          name="email"
          type="email"
          required
          placeholder="Business Email Address"
          aria-label="Business Email Address"
          className={inputClass}
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Mobile Number"
          aria-label="Mobile Number"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="city" type="text" placeholder="City" aria-label="City" className={inputClass} />
        <input name="state" type="text" placeholder="State" aria-label="State" className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select name="business_type" defaultValue="" aria-label="Business Type" className={inputClass}>
          <option value="" disabled>
            Business Type
          </option>
          {BUSINESS_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          name="product_interested"
          defaultValue=""
          aria-label="Product or Service Interested In"
          className={inputClass}
        >
          <option value="" disabled>
            Product or Service Interested In
          </option>
          {PRODUCTS_INTERESTED.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        rows={4}
        required
        placeholder="Tell us more about your requirement..."
        aria-label="Message"
        className={`${inputClass} resize-none`}
      />

      {status === "error" && (
        <p className="text-[13.5px] text-red-600 bg-red-50 border border-red-100 rounded-[12px] px-[9px] py-[6px]">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-[#2dd4bf] text-white font-semibold py-[10px] px-[27px] rounded-[6px] shadow-md hover:shadow-lg hover:bg-[#22bfab] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-[6px] text-[16px]"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-[18px] h-[18px] animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <ArrowRight className="w-[15px] h-[15px]" />
          </>
        )}
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ ACCORDION                                                       */
/* ------------------------------------------------------------------ */

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-gray-100 bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-3 text-left px-[21px] py-[18px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2dd4bf]"
            >
              <span className="text-[16px] font-semibold text-gray-900">{item.q}</span>
              <ChevronDown
                className={`w-[18px] h-[18px] text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#0f9c8c]" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-[21px] pb-[18px] text-[15px] text-gray-600 leading-6">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

const ContactUs = () => {
  const [activeChannel, setActiveChannel] = useState(null);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: PAGE_URL,
    mainEntity: {
      "@type": "Organization",
      name: "AbheePay",
      email: "care@abheepay.com",
      telephone: "+91-88600-37218",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19, DWARKA",
        addressLocality: "New Delhi",
        postalCode: "110043",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+91-88600-37218",
          email: "care@abheepay.com",
          areaServed: "IN",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+91-88600-37218",
          email: "care@abheepay.com",
          areaServed: "IN",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2dd4bf]/[0.06] to-white pt-36 sm:pt-[168px]">
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="AbheePay" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* ---------------- HERO ---------------- */}
      <div className="px-[15px] sm:px-6 max-w-[864px] mx-auto pb-9 sm:pb-[42px] text-center">
        <h1 className="text-[36px] sm:text-[36px] lg:text-[48px] font-black tracking-[-0.04em] leading-[1.05] text-slate-900">
          Let's <span className="text-[#14B8A6]">Connect</span>
        </h1>
        <p className="mt-[15px] text-[18px] font-semibold text-gray-800">
          Whether you're looking for payment solutions, API integration, enterprise technology, or
          partnership opportunities, our team is here to help.
        </p>
        <p className="mt-[9px] text-[15px] text-gray-600 leading-6 max-w-[720px] mx-auto">
          At AbheePay, we believe every conversation is an opportunity to build lasting business
          relationships. Reach out to us with your questions, project requirements, or business
          enquiries, and we'll connect you with the right team.
        </p>

        <div className="mt-[21px] flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setActiveChannel("sales")}
            className="inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-white bg-[#2dd4bf] hover:bg-[#22bfab] rounded-[18px] px-[21px] py-3 shadow-md hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
          >
            Contact Sales
            <ArrowRight className="w-[15px] h-[15px]" />
          </button>
          <button
            onClick={() => setActiveChannel("sales")}
            className="inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-[18px] px-[21px] py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
          >
            Schedule a Demo
          </button>
        </div>
      </div>

      <div className="px-[15px] sm:px-[18px] lg:px-6 max-w-[1008px] mx-auto pb-12 sm:pb-[54px] space-y-[54px]">
        {/* ---------------- HOW CAN WE HELP ---------------- */}
        <section>
          <div className="text-center mb-[21px]">
            <h2 className="text-[32px] sm:text-[36px] font-black tracking-[-0.03em] text-gray-900">
              How Can We <span className="text-[#0f9c8c]">Help?</span>
            </h2>
            <p className="text-[15px] text-gray-600 mt-[6px]">
              Choose the option that best matches your requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px]">
            {CARDS.map(({ channel, icon: Icon, title, description, cta }) => (
              <div
                key={channel}
                className="bg-white rounded-[6px] shadow-[0_20px_50px_rgba(15,23,42,.08)] hover:shadow-[0_30px_60px_rgba(20,184,166,.12)] border border-gray-200 p-[24px] flex flex-col transition-shadow"
              >
                <Icon className="w-6 h-6 text-gray-900 mb-3" strokeWidth={1.75} />
                <h3 className="text-[19.5px] font-black tracking-[-0.02em] text-gray-900 mb-[6px]">
                  {title}
                </h3>
                <p className="text-[14.5px] text-gray-600 leading-6 mb-[15px] flex-1">
                  {description}
                </p>
                <button
                  onClick={() => setActiveChannel(channel)}
                  className="self-start inline-flex items-center justify-center gap-[6px] text-[14px] font-semibold text-gray-800 bg-gray-100 hover:bg-[#2dd4bf] hover:text-white rounded-[18px] px-[18px] py-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
                >
                  {cta}
                  <ArrowRight className="w-[14px] h-[14px]" />
                </button>
              </div>
            ))}

            {/* report fraud card, styled to match */}
            <div className="bg-white rounded-[6px] border border-gray-200 p-[24px] flex flex-col">
              <BellRing className="w-6 h-6 text-gray-900 mb-3" strokeWidth={1.75} />
              <h3 className="text-[19.5px] font-black tracking-[-0.02em] text-gray-900 mb-[6px]">
                Report Fraud
              </h3>
              <p className="text-[14.5px] text-gray-600 leading-6 mb-[15px] flex-1">
                Report any suspicious activity or unusual transactions immediately.
              </p>
              <a
                href="mailto:care@abheepay.com?subject=Fraud%20Report"
                className="self-start inline-flex items-center justify-center gap-[6px] text-[14px] font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-[18px] px-[18px] py-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              >
                Report Here
                <ArrowRight className="w-[14px] h-[14px]" />
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- SEND US A MESSAGE ---------------- */}
        <section ref={formRef}>
          <div className="text-center mb-[21px]">
            <h2 className="text-[32px] sm:text-[36px] font-black tracking-[-0.03em] text-gray-900">
              Send Us a <span className="text-[#0f9c8c]">Message</span>
            </h2>
            <p className="text-[15px] text-gray-600 mt-[6px]">
              Complete the enquiry form, and our team will contact you as soon as possible.
            </p>
          </div>

          <div className="max-w-[720px] mx-auto">
            <MainEnquiryForm />
          </div>
        </section>

        {/* ---------------- BUSINESS INFORMATION ---------------- */}
        <section>
          <div className="mb-[18px]">
            <h2 className="text-[32px] sm:text-[36px] font-black tracking-[-0.03em] text-gray-900 mb-[6px]">
              Business <span className="text-[#0f9c8c]">Information</span>
            </h2>
            <p className="text-[15px] text-gray-600">
              You can also reach us through the following contact details.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] items-start">
            <div className="space-y-3">
              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="bg-white rounded-[24px] border-l-[6px] border-[#2dd4bf] p-[24px] shadow-sm"
                >
                  <div className="flex items-center gap-[6px] mb-[6px]">
                    <MapPin className="w-[15px] h-[15px] text-[#0f9c8c]" />
                    <p className="text-[15px] font-bold text-gray-900">Corporate Office — {office.city}</p>
                  </div>
                  <p className="text-[14.5px] text-gray-700 leading-relaxed">{office.address}</p>
                </div>
              ))}

              <div className="bg-white rounded-[24px] border border-gray-200 p-[24px] shadow-sm">
                <div className="flex items-center gap-[6px] mb-[6px]">
                  <Clock className="w-[15px] h-[15px] text-[#0f9c8c]" />
                  <p className="text-[15px] font-bold text-gray-900">Business Hours</p>
                </div>
                <p className="text-[14.5px] text-gray-700 leading-relaxed">
                  Monday – Saturday
                  <br />
                  9:30 AM – 6:30 PM
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-[3px]">
                <a
                  href="tel:+918860037218"
                  className="flex items-center gap-[6px] text-[15px] text-gray-700 hover:text-[#0f9c8c] transition"
                >
                  <Phone className="w-[15px] h-[15px] text-[#0f9c8c]" />
                  +91 88600 37218
                </a>
                <a
                  href="mailto:care@abheepay.com"
                  className="flex items-center gap-[6px] text-[15px] text-gray-700 hover:text-[#0f9c8c] transition"
                >
                  <Mail className="w-[15px] h-[15px] text-[#0f9c8c]" />
                  care@abheepay.com
                </a>
              </div>
            </div>

            <div className="rounded-[24px] border border-gray-200 shadow-md hover:shadow-xl overflow-hidden h-64 lg:h-full lg:min-h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770615620221!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AbheePay corporate office location on Google Maps"
              />
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section>
          <div className="mb-[18px]">
            <h2 className="text-[32px] sm:text-[36px] font-black tracking-[-0.03em] text-gray-900">
              Frequently Asked <span className="text-[#0f9c8c]">Questions</span>
            </h2>
          </div>
          <FAQAccordion />
        </section>

        {/* ---------------- BOTTOM CTA ---------------- */}
        <section className="bg-white rounded-[24px] border border-gray-200 shadow-sm p-[30px] sm:p-[42px] text-center">
          <h2 className="text-[27px] sm:text-[32px] font-black tracking-[-0.02em] text-gray-900 mb-[9px]">
            Connect with <span className="text-[#0f9c8c]">AbheePay</span>
          </h2>
          <p className="text-[15px] text-gray-600 max-w-[600px] mx-auto mb-[21px]">
            Whether you're exploring our products, planning a new project, or looking for a
            long-term technology partner, we're here to help. Let's discuss how AbheePay can
            support your business with secure payment solutions, enterprise technology, and
            innovative digital services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setActiveChannel("sales")}
              className="inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-white bg-[#2dd4bf] hover:bg-[#22bfab] rounded-[18px] px-[21px] py-3 shadow-md hover:shadow-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
            >
              Contact Sales
              <ArrowRight className="w-[15px] h-[15px]" />
            </button>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-[6px] text-[15px] font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-[18px] px-[21px] py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              Schedule a Demo
            </button>
          </div>
        </section>

        <p className="text-[13.5px] text-gray-400 text-center">
          We typically reply within one business day.
        </p>
      </div>

      {activeChannel && (
        <ContactModal channel={activeChannel} onClose={() => setActiveChannel(null)} />
      )}
    </div>
  );
};

export default ContactUs;