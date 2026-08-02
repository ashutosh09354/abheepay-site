// // src/components/Footer.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const productLinks = [
//     { name: "Bill Payments Solution", link: "/services/bbps-electricity-gas-water-fastag" },
//     { name: "POS Machine", link: "/services/pos-devices" },
//     { name: "AEPS", link: "/services/aeps-cash-withdrawal-balance-inquiry-mini-statement" },
//     { name: "Micro ATM Services", link: "/services/micro-atm-matm-services" },
//     { name: "Credit Card", link: "/services/credit-card-bill-payments" },
//     { name: "Insurance Solutions", link: "/insurance-solutions" },
//   ];

//   return (
//     <section
//       className="relative bg-[#222836] text-white overflow-hidden"
//       style={{
//         fontFamily:
//           'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
//       }}
//     >
//       {/* ✅ TOP WAVE REMOVED (ONLY CHANGE) */}

//       <div className="mx-auto sm:px-6 lg:px-5 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 pt-10">
//           {/* Company Info - Logo centered */}
//           <div className="mt-3 text-center">
//             <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 flex justify-center items-center">
//               <img
//                 src="/assets/image/logo/logos.png"
//                 alt="logo"
//                 loading="lazy"
//                 width="60"
//                 height="60"
//                 className="w-28 h-24 object-contain"
//               />
//             </h3>
//             <p className="text-sm sm:text-base mb-3 sm:mb-4">
//               AbheePay delivers secure fintech, payments, and digital financial
//               solutions.
//             </p>
//             <Link
//               to="/about"
//               className="inline-flex items-center text-sm sm:text-base text-[#00BCB7] hover:text-[#00BCB7]/80 transition-colors font-medium group"
//             >
//               Read more
//               <svg
//                 className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </Link>
//           </div>

//           {/* Quick Links */}
//           <div className="mt-3">
//             <h3 className="text-xl font-bold mb-4 sm:text-3xl text-white sm:mb-7 flex items-center">
//               <svg
//                 className="w-5 h-5 mr-2 text-[#00BCB7]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
//                 />
//               </svg>
//               Quick link
//             </h3>
//             <ul className="space-y-2 text-sm flex flex-col gap-2">
//               {[
//                 { text: "Home", to: "/" },
//                 { text: "About Us", to: "/about" },
//                 { text: "Join as Retailer", to: "/join-as-retailer" },
//                 { text: "Join as Distributor", to: "/join-as-distributor" },
//                 { text: "Privacy Policy", to: "/privacy-policy" },
//                 { text: "Terms & Conditions", to: "/term-condition" },
//               ].map((item, index) => (
//                 <li
//                   key={index}
//                   className="border-b border-gray-500 group overflow-hidden"
//                 >
//                   <Link
//                     to={item.to}
//                     className="text-[18px] text-white flex items-center hover:text-[#00BCB7] transition-all duration-300 ease-in-out"
//                   >
//                     <span className="inline-block w-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       ➤
//                     </span>
//                     <span className="pl-4 transition-all duration-300 ease-in-out group-hover:pl-2">
//                       {item.text}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Our Products */}
//           <div className="mt-3">
//             <h3 className="text-xl font-bold mb-4 sm:text-3xl text-white sm:mb-7 flex items-center">
//               <svg
//                 className="w-5 h-5 mr-2 text-[#00BCB7]"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
//                 />
//               </svg>
//               Our Services
//             </h3>
//             <ul className="space-y-2 text-sm flex flex-col gap-2">
//               {productLinks.map((item, index) => (
//                 <li
//                   key={index}
//                   className="border-b border-gray-500 group overflow-hidden"
//                 >
//                   <Link
//                     to={item.link}
//                     className="text-[18px] text-white flex items-center hover:text-[#00BCB7] transition-all duration-300 ease-in-out"
//                   >
//                     <span className="inline-block w-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       ➤
//                     </span>
//                     <span className="pl-4 transition-all duration-300 ease-in-out group-hover:pl-2">
//                       {item.name}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info (UNCHANGED) */}
//           <div className="mt-3">
//             <h3 className="text-3xl font-semibold mb-7">Contact Us</h3>
//             <div className="space-y-3 sm:space-y-4">
//               <div className="flex items-start group">
//                 <div className="flex-shrink-0 pt-1">
//                   <svg
//                     className="w-5 h-5 text-[#00BCB7] group-hover:animate-bounce"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="ml-3">
//                   <h4 className="font-semibold text-gray-200 text-sm sm:text-base">
//                     Call Us
//                   </h4>
//                   <p className="mt-1 hover:text-[#00BCB7] transition-colors text-sm sm:text-base">
//                     <a href="tel:+918860037218">+91 88600 37218</a>
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start group">
//                 <div className="flex-shrink-0 pt-1">
//                   <svg
//                     className="w-5 h-5 text-[#00BCB7] group-hover:animate-bounce"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="ml-3">
//                   <h4 className="font-semibold text-gray-200 text-sm sm:text-base">
//                     Email Us
//                   </h4>
//                   <p className="mt-1 hover:text-[#00BCB7] transition-colors text-sm sm:text-base">
//                     <a href="mailto:care@abheepay.com">care@abheepay.com</a>
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start group">
//                 <div className="flex-shrink-0 pt-1">
//                   <svg
//                     className="w-5 h-5 text-[#00BCB7] group-hover:animate-bounce"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="ml-3">
//                   <h4 className="font-semibold text-gray-200 text-sm sm:text-base">
//                     Visit Us
//                   </h4>
//                   <p className="mt-1 text-sm sm:text-base">
//                     2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19,
//                     DWARKA, NEW DELHI- 110043
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="border-t border-gray-700 mt-4 pt-4 pb-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400 py-0.2">
//           <p>© 2025 AbheePay. All rights reserved.</p>
//         </div>
//       </div>

//       {/* WhatsApp Button (UNCHANGED) */}
//       <a
//         href="https://wa.me/918860037218"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-5 left-5 z-50 bg-[#0CC143] text-white rounded-full shadow-lg p-3 transition-transform duration-300 hover:scale-110"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           className="w-7 h-7"
//         >
//           <path d="M20.52 3.48A11.93 11.93 0 0012 0a11.93 11.93 0 00-8.52 3.48A11.93 11.93 0 000 12c0 2.1.54 4.16 1.56 5.98L0 24l6.15-1.6A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.07-1.39l-.36-.21-3.64.95.97-3.54-.24-.37A9.92 9.92 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.43-7.18c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.91-2.21-.24-.59-.48-.5-.67-.51-.17 0-.37 0-.57 0s-.52.07-.8.37c-.27.3-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
//         </svg>
//       </a>
//     </section>
//   );
// };

// export default Footer;


















// // src/common/Footer.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const productLinks = [
//     { name: "Bill Payments Solution", link: "/services/bbps-electricity-gas-water-fastag" },
//     { name: "POS Machine", link: "/services/pos-devices" },
//     // { name: "AEPS", link: "/services/aeps-cash-withdrawal-balance-inquiry-mini-statement" },
//     { name: "Micro ATM Services", link: "/services/micro-atm-matm-services" },
//     { name: "Credit Card", link: "/services/credit-card-bill-payments" },
//     { name: "Insurance Solutions", link: "/insurance-solutions" },
//   ];

//   const quickLinks = [
//     { text: "Home", to: "/" },
//     { text: "About Us", to: "/about" },
//     { text: "Join as Retailer", to: "/join-as-retailer" },
//     { text: "Join as Distributor", to: "/join-as-distributor" },
//     { text: "Privacy Policy", to: "/privacy-policy" },
//     { text: "Terms & Conditions", to: "/term-condition" },
//   ];

//   const socialLinks = [
//     {
//       name: "LinkedIn",
//       href: "https://www.linkedin.com/company/abheepay/posts/?feedView=all",
//       svg: (
//         <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.25h4.53V23H.24V8.25zM8.5 8.25h4.34v2.02h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.95V23h-4.53v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H8.5V8.25z" />
//       ),
//     },
//     {
//       name: "Twitter",
//       href: "#",
//       svg: (
//         <path d="M23.44 4.83c-.8.37-1.67.62-2.58.73.93-.56 1.64-1.44 1.98-2.5-.87.52-1.83.9-2.86 1.1A4.48 4.48 0 0016.11 3c-2.5 0-4.5 2.03-4.5 4.5 0 .35.04.7.11 1.03C7.69 8.3 4.07 6.4 1.64 3.46c-.39.67-.61 1.44-.61 2.27 0 1.56.79 2.94 2 3.75-.74-.02-1.43-.23-2.04-.56v.06c0 2.18 1.55 4 3.6 4.42-.38.1-.78.16-1.19.16-.29 0-.57-.03-.85-.08.58 1.8 2.26 3.12 4.25 3.15A9 9 0 010 19.54 12.7 12.7 0 006.92 21.5c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58a9.2 9.2 0 002.27-2.35l-.01-.01z" />
//       ),
//     },
//     {
//       name: "Facebook",
//       href: "https://www.facebook.com/p/Abheepay-61572426264287/",
//       svg: (
//         <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
//       ),
//     },
//     {
//       name: "Instagram",
//       href: "https://www.instagram.com/abheepayofficial/",
//       svg: (
//         <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.05-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 00-2.13 1.39A5.9 5.9 0 00.62 4.15c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 002.13-1.39 5.9 5.9 0 001.39-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 00-1.39-2.13A5.9 5.9 0 0019.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1012 18.16 6.16 6.16 0 0012 5.84zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.41-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
//       ),
//     },
//   ];

//   return (
//     <section
//       className="relative bg-[#0e1424] text-white overflow-hidden"
//       style={{
//         fontFamily:
//           'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
//       }}
//     >
//       <div className="md:hidden relative z-10 px-5 pt-8 pb-6">
//         <div className="flex flex-col items-start gap-4">
//           <img
//             src="/assets/image/logo/logos.png"
//             alt="logo"
//             loading="lazy"
//             width="100"
//             height="100"
//             className="h-16 w-16 object-contain"
//           />

//           <p className="text-sm leading-6 text-gray-300">
//             Powering digital payments across India with secure and reliable
//             infrastructure.
//           </p>

//           <Link
//             to="/about"
//             className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#00BCB7]"
//           >
//             Read more
//             <svg
//               className="ml-1 h-4 w-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </Link>
//         </div>

//         <div className="mt-7 grid grid-cols-2 gap-6">
//           <div>
//             <h4 className="mb-3 text-base font-bold text-white">Company</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((item) => (
//                 <li key={item.text}>
//                   <Link
//                     to={item.to}
//                     className="block text-sm leading-5 text-gray-300 hover:text-[#00BCB7]"
//                   >
//                     {item.text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="mb-3 text-base font-bold text-white">Services</h4>
//             <ul className="space-y-3">
//               {productLinks.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.link}
//                     className="block text-sm leading-5 text-gray-300 hover:text-[#00BCB7]"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
//           <h4 className="mb-4 text-base font-bold text-white">Contact Us</h4>
//           <div className="space-y-4">
//             <div>
//               <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                 Call Us
//               </p>
//               <a
//                 href="tel:+918860037218"
//                 className="text-base font-semibold text-gray-200 hover:text-[#00BCB7]"
//               >
//                 +91 88600 37218
//               </a>
//             </div>

//             <div>
//               <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                 Email Us
//               </p>
//               <a
//                 href="mailto:care@abheepay.com"
//                 className="text-base font-semibold text-gray-200 hover:text-[#00BCB7]"
//               >
//                 care@abheepay.com
//               </a>
//             </div>

//             <div>
//               <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                 Visit Us
//               </p>
//               <p className="text-sm leading-6 text-gray-300">
//                 2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19,
//                 DWARKA, NEW DELHI- 110043
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 flex items-center gap-3">
//           {socialLinks.map((social) => (
//             <a
//               key={social.name}
//               href={social.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={social.name}
//               className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gray-200 hover:bg-[#00BCB7] hover:text-white"
//             >
//               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                 {social.svg}
//               </svg>
//             </a>
//           ))}
//         </div>

//         <div className="mt-6 border-t border-gray-700/60 pt-4">
//           <p className="text-center text-xs text-gray-500">
//             &copy; 2026 AbheePay. All rights reserved.
//           </p>
//         </div>
//       </div>

//       <div className="hidden md:block mx-auto max-w-7xl px-6 lg:px-8 relative z-10 pt-8 pb-5">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           {/* Company Info */}
//           <div>

//               <img
//                 src="/assets/image/logo/logos.png"
//                 alt="logo"
//                 loading="lazy"
//                 width="100"
//                 height="100"
//                 className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
//               />

//             <p className="text-[8px] sm:text-[9px] text-gray-400 leading-relaxed mb-3 max-w-xs">
//               Powering digital payments across India with secure and reliable infrastructure.
//             </p>
//           </div>

//           {/* Company / Quick Links */}
//           <div>
//             <h4 className="text-[10px] font-semibold text-white mb-3">Company</h4>
//             <ul className="space-y-2.5">
//               {quickLinks.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.to}
//                     className="text-[8px] sm:text-[9px] text-gray-400 hover:text-[#00BCB7] transition-colors"
//                   >
//                     {item.text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Our Services */}
//           <div>
//             <h4 className="text-[10px] font-semibold text-white mb-3">Our Services</h4>
//             <ul className="space-y-2.5">
//               {productLinks.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.link}
//                     className="text-[8px] sm:text-[9px] text-gray-400 hover:text-[#00BCB7] transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h4 className="text-[10px] font-semibold text-white mb-3">Contact Us</h4>
//             <ul className="space-y-3">
//               <li>
//                 <p className="text-[8px] text-gray-500 mb-1">Call Us</p>
//                 <a
//                   href="tel:+918860037218"
//                   className="text-[11px] sm:text-xs text-gray-400 hover:text-[#00BCB7] transition-colors"
//                 >
//                   +91 88600 37218
//                 </a>
//               </li>

//               <li>
//                 <p className="text-[8px] text-gray-500 mb-1">Email Us</p>
//                 <a
//                   href="mailto:care@abheepay.com"
//                   className="text-[11px] sm:text-xs text-gray-400 hover:text-[#00BCB7] transition-colors"
//                 >
//                   care@abheepay.com
//                 </a>
//               </li>

//               <li>
//                 <p className="text-[8px] text-gray-500 mb-1">Visit Us</p>
//                 <p className="text-[8px] sm:text-[9px] text-gray-400 leading-relaxed">
//                   2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19,
//                   DWARKA, NEW DELHI- 110043
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="border-t border-gray-700/60 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <p className="text-[8px] sm:text-[9px] text-gray-500">© 2026 AbheePay. All rights reserved.</p>
//           <div className="flex items-center gap-3">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.name}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={social.name}
//                 className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-[#00BCB7] hover:text-white transition-colors"
//               >
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                   {social.svg}
//                 </svg>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* WhatsApp Button (unchanged) */}
//       <a
//         href="https://wa.me/918860037218"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-5 left-5 z-50 bg-[#0CC143] text-white rounded-full shadow-lg p-3 transition-transform duration-300 hover:scale-110"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           className="w-7 h-7"
//         >
//           <path d="M20.52 3.48A11.93 11.93 0 0012 0a11.93 11.93 0 00-8.52 3.48A11.93 11.93 0 000 12c0 2.1.54 4.16 1.56 5.98L0 24l6.15-1.6A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.07-1.39l-.36-.21-3.64.95.97-3.54-.24-.37A9.92 9.92 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.43-7.18c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.91-2.21-.24-.59-.48-.5-.67-.51-.17 0-.37 0-.57 0s-.52.07-.8.37c-.27.3-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
//         </svg>
//       </a>
//     </section>
//   );
// };

// export default Footer;










// // src/common/Footer.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const productLinks = [
//     { name: "Bill Payments Solution", link: "/services/bbps-electricity-gas-water-fastag" },
//     { name: "POS Machine", link: "/services/pos-devices" },
//     // { name: "AEPS", link: "/services/aeps-cash-withdrawal-balance-inquiry-mini-statement" },
//     { name: "Micro ATM Services", link: "/services/micro-atm-matm-services" },
//     { name: "Credit Card", link: "/services/credit-card-bill-payments" },
//     { name: "Insurance Solutions", link: "/insurance-solutions" },
//   ];

//   const quickLinks = [
//     { text: "Home", to: "/" },
//     { text: "About Us", to: "/about" },
//     { text: "Join as Retailer", to: "/join-as-retailer" },
//     { text: "Join as Distributor", to: "/join-as-distributor" },
//     { text: "Privacy Policy", to: "/privacy-policy" },
//     { text: "Terms & Conditions", to: "/term-condition" },
//   ];

//   const socialLinks = [
//     {
//       name: "LinkedIn",
//       href: "https://www.linkedin.com/company/abheepay/posts/?feedView=all",
//       svg: (
//         <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.25h4.53V23H.24V8.25zM8.5 8.25h4.34v2.02h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.95V23h-4.53v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H8.5V8.25z" />
//       ),
//     },
//     {
//       name: "Twitter",
//       href: "#",
//       svg: (
//         <path d="M23.44 4.83c-.8.37-1.67.62-2.58.73.93-.56 1.64-1.44 1.98-2.5-.87.52-1.83.9-2.86 1.1A4.48 4.48 0 0016.11 3c-2.5 0-4.5 2.03-4.5 4.5 0 .35.04.7.11 1.03C7.69 8.3 4.07 6.4 1.64 3.46c-.39.67-.61 1.44-.61 2.27 0 1.56.79 2.94 2 3.75-.74-.02-1.43-.23-2.04-.56v.06c0 2.18 1.55 4 3.6 4.42-.38.1-.78.16-1.19.16-.29 0-.57-.03-.85-.08.58 1.8 2.26 3.12 4.25 3.15A9 9 0 010 19.54 12.7 12.7 0 006.92 21.5c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58a9.2 9.2 0 002.27-2.35l-.01-.01z" />
//       ),
//     },
//     {
//       name: "Facebook",
//       href: "https://www.facebook.com/p/Abheepay-61572426264287/",
//       svg: (
//         <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
//       ),
//     },
//     {
//       name: "Instagram",
//       href: "https://www.instagram.com/abheepayofficial/",
//       svg: (
//         <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.05-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 00-2.13 1.39A5.9 5.9 0 00.62 4.15c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 002.13-1.39 5.9 5.9 0 001.39-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 00-1.39-2.13A5.9 5.9 0 0019.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1012 18.16 6.16 6.16 0 0012 5.84zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.41-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
//       ),
//     },
//   ];

//   return (
//     <>
//       {/* App download banner image — sits above the footer */}
//       <a
//         href="https://play.google.com/store/apps/details?id=com.telering.abheepaymerchant"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Download AbheePay from Google Play"
//       >
//         <img
//           src="/assets/image/banner/abheepay footer apk banner1.png"
//           alt="Download the AbheePay App"
//           loading="lazy"
//           className="w-full h-auto block cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
//         />
//       </a>

//       <section
//         className="relative bg-[#0e1424] text-white overflow-hidden"
//         style={{
//           fontFamily:
//             'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
//         }}
//       >
//         <div className="md:hidden relative z-10 px-5 pt-8 pb-6">
//           <div className="flex flex-col items-start gap-4">
//             <img
//               src="/assets/image/logo/logos.png"
//               alt="logo"
//               loading="lazy"
//               width="100"
//               height="100"
//               className="h-16 w-16 object-contain"
//             />

//             <p className="text-sm leading-6 text-gray-300">
//               Powering digital payments across India with secure and reliable
//               infrastructure.
//             </p>

//             <Link
//               to="/about"
//               className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#00BCB7]"
//             >
//               Read more
//               <svg
//                 className="ml-1 h-4 w-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </Link>
//           </div>

//           <div className="mt-7 grid grid-cols-2 gap-6">
//             <div>
//               <h4 className="mb-3 text-base font-bold text-white">Company</h4>
//               <ul className="space-y-3">
//                 {quickLinks.map((item) => (
//                   <li key={item.text}>
//                     <Link
//                       to={item.to}
//                       className="block text-sm leading-5 text-gray-300 hover:text-[#00BCB7]"
//                     >
//                       {item.text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <h4 className="mb-3 text-base font-bold text-white">Services</h4>
//               <ul className="space-y-3">
//                 {productLinks.map((item) => (
//                   <li key={item.name}>
//                     <Link
//                       to={item.link}
//                       className="block text-sm leading-5 text-gray-300 hover:text-[#00BCB7]"
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
//             <h4 className="mb-4 text-base font-bold text-white">Contact Us</h4>
//             <div className="space-y-4">
//               <div>
//                 <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Call Us
//                 </p>
//                 <a
//                   href="tel:+918860037218"
//                   className="text-base font-semibold text-gray-200 hover:text-[#00BCB7]"
//                 >
//                   +91 88600 37218
//                 </a>
//               </div>

//               <div>
//                 <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Email Us
//                 </p>
//                 <a
//                   href="mailto:care@abheepay.com"
//                   className="text-base font-semibold text-gray-200 hover:text-[#00BCB7]"
//                 >
//                   care@abheepay.com
//                 </a>
//               </div>

//               <div>
//                 <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
//                   Visit Us
//                 </p>
//                 <p className="text-sm leading-6 text-gray-300">
//                   2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19,
//                   DWARKA, NEW DELHI- 110043
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 flex items-center gap-3">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.name}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={social.name}
//                 className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gray-200 hover:bg-[#00BCB7] hover:text-white"
//               >
//                 <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                   {social.svg}
//                 </svg>
//               </a>
//             ))}
//           </div>

//           <div className="mt-6 border-t border-gray-700/60 pt-4">
//             <p className="text-center text-xs text-gray-500">
//               &copy; 2026 AbheePay. All rights reserved.
//             </p>
//           </div>
//         </div>

//         <div className="hidden md:block mx-auto max-w-7xl px-6 lg:px-8 relative z-10 pt-8 pb-5">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//             {/* Company Info */}
//             <div>

//               <img
//                 src="/assets/image/logo/logos.png"
//                 alt="logo"
//                 loading="lazy"
//                 width="100"
//                 height="100"
//                 className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
//               />

//               <p className="text-[8px] sm:text-[9px] text-gray-400 leading-relaxed mb-3 max-w-xs">
//                 Powering digital payments across India with secure and reliable infrastructure.
//               </p>
//             </div>

//             {/* Company / Quick Links */}
//             <div>
//               <h4 className="text-[10px] font-semibold text-white mb-3">Company</h4>
//               <ul className="space-y-2.5">
//                 {quickLinks.map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       to={item.to}
//                       className="text-[8px] sm:text-[9px] text-gray-400 hover:text-[#00BCB7] transition-colors"
//                     >
//                       {item.text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Our Services */}
//             <div>
//               <h4 className="text-[10px] font-semibold text-white mb-3">Our Services</h4>
//               <ul className="space-y-2.5">
//                 {productLinks.map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       to={item.link}
//                       className="text-[8px] sm:text-[9px] text-gray-400 hover:text-[#00BCB7] transition-colors"
//                     >
//                       {item.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Us */}
//             <div>
//               <h4 className="text-[10px] font-semibold text-white mb-3">Contact Us</h4>
//               <ul className="space-y-3">
//                 <li>
//                   <p className="text-[8px] text-gray-500 mb-1">Call Us</p>
//                   <a
//                     href="tel:+918860037218"
//                     className="text-[11px] sm:text-xs text-gray-400 hover:text-[#00BCB7] transition-colors"
//                   >
//                     +91 88600 37218
//                   </a>
//                 </li>

//                 <li>
//                   <p className="text-[8px] text-gray-500 mb-1">Email Us</p>
//                   <a
//                     href="mailto:care@abheepay.com"
//                     className="text-[11px] sm:text-xs text-gray-400 hover:text-[#00BCB7] transition-colors"
//                   >
//                     care@abheepay.com
//                   </a>
//                 </li>

//                 <li>
//                   <p className="text-[8px] text-gray-500 mb-1">Visit Us</p>
//                   <p className="text-[8px] sm:text-[9px] text-gray-400 leading-relaxed">
//                     2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19,
//                     DWARKA, NEW DELHI- 110043
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom bar */}
//           <div className="border-t border-gray-700/60 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
//             <p className="text-[8px] sm:text-[9px] text-gray-500">© 2026 AbheePay. All rights reserved.</p>
//             <div className="flex items-center gap-3">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.name}
//                   className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-[#00BCB7] hover:text-white transition-colors"
//                 >
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                     {social.svg}
//                   </svg>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* WhatsApp Button (unchanged) */}
//         <a
//           href="https://wa.me/918860037218"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-5 left-5 z-50 bg-[#0CC143] text-white rounded-full shadow-lg p-3 transition-transform duration-300 hover:scale-110"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             className="w-7 h-7"
//           >
//             <path d="M20.52 3.48A11.93 11.93 0 0012 0a11.93 11.93 0 00-8.52 3.48A11.93 11.93 0 000 12c0 2.1.54 4.16 1.56 5.98L0 24l6.15-1.6A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.07-1.39l-.36-.21-3.64.95.97-3.54-.24-.37A9.92 9.92 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.43-7.18c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.91-2.21-.24-.59-.48-.5-.67-.51-.17 0-.37 0-.57 0s-.52.07-.8.37c-.27.3-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
//           </svg>
//         </a>
//       </section>
//     </>
//   );
// };

// export default Footer;








// src/common/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const productLinks = [
    { name: "Bill Payments Solution", link: "/services/bbps-electricity-gas-water-fastag" },
    { name: "POS Machine", link: "/services/pos-devices" },
    // { name: "AEPS", link: "/services/aeps-cash-withdrawal-balance-inquiry-mini-statement" },
    { name: "Micro ATM Services", link: "/services/micro-atm-matm-services" },
    { name: "Credit Card", link: "/services/credit-card-bill-payments" },
    { name: "Insurance Solutions", link: "/insurance-solutions" },
  ];

  const quickLinks = [
    { text: "Home", to: "/" },
    { text: "About Us", to: "/about" },
    { text: "Join as Retailer", to: "/join-as-retailer" },
    { text: "Join as Distributor", to: "/join-as-distributor" },
    { text: "Privacy Policy", to: "/privacy-policy" },
    { text: "Terms & Conditions", to: "/term-condition" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/abheepay/posts/?feedView=all",
      svg: (
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.25h4.53V23H.24V8.25zM8.5 8.25h4.34v2.02h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.02 5.42 6.95V23h-4.53v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H8.5V8.25z" />
      ),
    },
    {
      name: "Twitter",
      href: "#",
      svg: (
        <path d="M23.44 4.83c-.8.37-1.67.62-2.58.73.93-.56 1.64-1.44 1.98-2.5-.87.52-1.83.9-2.86 1.1A4.48 4.48 0 0016.11 3c-2.5 0-4.5 2.03-4.5 4.5 0 .35.04.7.11 1.03C7.69 8.3 4.07 6.4 1.64 3.46c-.39.67-.61 1.44-.61 2.27 0 1.56.79 2.94 2 3.75-.74-.02-1.43-.23-2.04-.56v.06c0 2.18 1.55 4 3.6 4.42-.38.1-.78.16-1.19.16-.29 0-.57-.03-.85-.08.58 1.8 2.26 3.12 4.25 3.15A9 9 0 010 19.54 12.7 12.7 0 006.92 21.5c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58a9.2 9.2 0 002.27-2.35l-.01-.01z" />
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/p/Abheepay-61572426264287/",
      svg: (
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/abheepayofficial/",
      svg: (
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 01-1.38-.9 3.72 3.72 0 01-.9-1.38c-.16-.42-.36-1.05-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 00-2.13 1.39A5.9 5.9 0 00.62 4.15c-.3.76-.5 1.63-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 002.13-1.39 5.9 5.9 0 001.39-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 00-1.39-2.13A5.9 5.9 0 0019.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1012 18.16 6.16 6.16 0 0012 5.84zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.41-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      ),
    },
  ];

  return (
    <>
      {/* App download banner image — sits above the footer */}
      <a
        href="https://play.google.com/store/apps/details?id=com.telering.abheepaymerchant"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download AbheePay from Google Play"
      >
        <img
          src="/assets/image/banner/abheepay footer apk banner1.png"
          alt="Download the AbheePay App"
          loading="lazy"
          className="w-full h-auto block cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        />
      </a>

      <section
        className="relative bg-[#0e1424] text-white overflow-hidden"
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
        }}
      >
        <div className="md:hidden relative z-10 px-[31.2px] pt-[49.92px] pb-[37.44px]">
          <div className="flex flex-col items-start gap-[24.96px]">
            <img
              src="/assets/image/logo/logos.png"
              alt="logo"
              loading="lazy"
              width="156"
              height="156"
              className="h-[99.84px] w-[99.84px] object-contain"
            />

            <p className="text-[21.84px] leading-[37.44px] text-gray-300">
              Powering digital payments across India with secure and reliable
              infrastructure.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center rounded-full bg-white/10 px-[24.96px] py-[12.48px] text-[21.84px] font-semibold text-[#00BCB7]"
            >
              Read more
              <svg
                className="ml-[6.24px] h-[24.96px] w-[24.96px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="mt-[43.68px] grid grid-cols-2 gap-[37.44px]">
            <div>
              <h4 className="mb-[18.72px] text-[24.96px] font-bold text-white">Company</h4>
              <ul className="space-y-[18.72px]">
                {quickLinks.map((item) => (
                  <li key={item.text}>
                    <Link
                      to={item.to}
                      className="block text-[21.84px] leading-[31.2px] text-gray-300 hover:text-[#00BCB7]"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-[18.72px] text-[24.96px] font-bold text-white">Services</h4>
              <ul className="space-y-[18.72px]">
                {productLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.link}
                      className="block text-[21.84px] leading-[31.2px] text-gray-300 hover:text-[#00BCB7]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-[43.68px] rounded-[24.96px] border border-white/10 bg-white/5 p-[24.96px]">
            <h4 className="mb-[24.96px] text-[24.96px] font-bold text-white">Contact Us</h4>
            <div className="space-y-[24.96px]">
              <div>
                <p className="mb-[6.24px] text-[18.72px] font-semibold uppercase tracking-wide text-gray-500">
                  Call Us
                </p>
                <a
                  href="tel:+918860037218"
                  className="text-[24.96px] font-semibold text-gray-200 hover:text-[#00BCB7]"
                >
                  +91 88600 37218
                </a>
              </div>

              <div>
                <p className="mb-[6.24px] text-[18.72px] font-semibold uppercase tracking-wide text-gray-500">
                  Email Us
                </p>
                <a
                  href="mailto:care@abheepay.com"
                  className="text-[24.96px] font-semibold text-gray-200 hover:text-[#00BCB7]"
                >
                  care@abheepay.com
                </a>
              </div>

              <div>
                <p className="mb-[6.24px] text-[18.72px] font-semibold uppercase tracking-wide text-gray-500">
                  Visit Us
                </p>
                <p className="text-[21.84px] leading-[37.44px] text-gray-300">
                  2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19,
                  DWARKA, NEW DELHI- 110043
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[37.44px] flex items-center gap-[18.72px]">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-[68.64px] w-[68.64px] items-center justify-center rounded-full bg-white/10 text-gray-200 hover:bg-[#00BCB7] hover:text-white"
              >
                <svg className="h-[31.2px] w-[31.2px]" fill="currentColor" viewBox="0 0 24 24">
                  {social.svg}
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-[37.44px] border-t border-gray-700/60 pt-[24.96px]">
            <p className="text-center text-[18.72px] text-gray-500">
              &copy; 2026 AbheePay. All rights reserved.
            </p>
          </div>
        </div>

        <div className="hidden md:block mx-auto max-w-[1798px] px-[37.44px] lg:px-[49.92px] relative z-10 pt-[49.92px] pb-[31.2px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[37.44px] sm:gap-[49.92px]">
            {/* Company Info */}
            <div>

              <img
                src="/assets/image/logo/logos.png"
                alt="logo"
                loading="lazy"
                width="156"
                height="156"
                className="w-[87.36px] h-[87.36px] sm:w-[99.84px] sm:h-[99.84px] object-contain"
              />

              <p className="text-[12.48px] sm:text-[14.04px] text-gray-400 leading-relaxed mb-[18.72px] max-w-[499px]">
                Powering digital payments across India with secure and reliable infrastructure.
              </p>
            </div>

            {/* Company / Quick Links */}
            <div>
              <h4 className="text-[15.6px] font-semibold text-white mb-[18.72px]">Company</h4>
              <ul className="space-y-[15.6px]">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="text-[12.48px] sm:text-[14.04px] text-gray-400 hover:text-[#00BCB7] transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-[15.6px] font-semibold text-white mb-[18.72px]">Our Services</h4>
              <ul className="space-y-[15.6px]">
                {productLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="text-[12.48px] sm:text-[14.04px] text-gray-400 hover:text-[#00BCB7] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-[15.6px] font-semibold text-white mb-[18.72px]">Contact Us</h4>
              <ul className="space-y-[18.72px]">
                <li>
                  <p className="text-[12.48px] text-gray-500 mb-[6.24px]">Call Us</p>
                  <a
                    href="tel:+918860037218"
                    className="text-[17.16px] sm:text-[18.72px] text-gray-400 hover:text-[#00BCB7] transition-colors"
                  >
                    +91 88600 37218
                  </a>
                </li>

                <li>
                  <p className="text-[12.48px] text-gray-500 mb-[6.24px]">Email Us</p>
                  <a
                    href="mailto:care@abheepay.com"
                    className="text-[17.16px] sm:text-[18.72px] text-gray-400 hover:text-[#00BCB7] transition-colors"
                  >
                    care@abheepay.com
                  </a>
                </li>

                <li>
                  <p className="text-[12.48px] text-gray-500 mb-[6.24px]">Visit Us</p>
                  <p className="text-[12.48px] sm:text-[14.04px] text-gray-400 leading-relaxed">
                    2nd Floor, Plot No - 3, KH. NO. 33/6 AMBERHAI, SECTOR-19,
                    DWARKA, NEW DELHI- 110043
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-700/60 mt-[49.92px] pt-[24.96px] flex flex-col sm:flex-row items-center justify-between gap-[24.96px]">
            <p className="text-[12.48px] sm:text-[14.04px] text-gray-500">© 2026 AbheePay. All rights reserved.</p>
            <div className="flex items-center gap-[18.72px]">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-[56.16px] h-[56.16px] flex items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-[#00BCB7] hover:text-white transition-colors"
                >
                  <svg className="w-[24.96px] h-[24.96px]" fill="currentColor" viewBox="0 0 24 24">
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp Button (unchanged) */}
        <a
          href="https://wa.me/918860037218"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[31.2px] left-[31.2px] z-50 bg-[#0CC143] text-white rounded-full shadow-lg p-[18.72px] transition-transform duration-300 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-[43.68px] h-[43.68px]"
          >
            <path d="M20.52 3.48A11.93 11.93 0 0012 0a11.93 11.93 0 00-8.52 3.48A11.93 11.93 0 000 12c0 2.1.54 4.16 1.56 5.98L0 24l6.15-1.6A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.93 9.93 0 01-5.07-1.39l-.36-.21-3.64.95.97-3.54-.24-.37A9.92 9.92 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.43-7.18c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.91-2.21-.24-.59-.48-.5-.67-.51-.17 0-.37 0-.57 0s-.52.07-.8.37c-.27.3-1.04 1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </a>
      </section>
    </>
  );
};

export default Footer;
