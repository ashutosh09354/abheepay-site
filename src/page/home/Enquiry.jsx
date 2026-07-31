// import React, { useState } from "react";

// const EnquirySection = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/care@abheepay.com",
//         {
//           method: "POST",
//           body: formData,
//         },
//       );

//       if (response.ok) {
//         setSubmitted(true);
//         form.reset();
//       } else {
//         console.log("Form submission failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <section className="bg-[#F6F8FC] py-12" id="bottomform">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
//           <div>
//             <h2 className="text-black text-2xl font-semibold mb-6 tracking-wide">
//               JOIN FORM
//             </h2>

//             {submitted && (
//               <p className="text-green-400 mb-4 text-sm">
//                 ✅ Your enquiry has been submitted successfully!
//               </p>
//             )}

//             <form
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 md:grid-cols-2 gap-4"
//             >
             
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />
//               <input
//                 type="hidden"
//                 name="_subject"
//                 value="New Enquiry From Website"
//               />
//               <input type="text" name="_honey" style={{ display: "none" }} />

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="FULL NAME"
//                 required
//                 className="bg-transparent border border-black/60 text-white px-3 py-2.5 text-sm outline-none placeholder-black/70"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="EMAIL ADDRESS"
//                 required
//                 className="bg-transparent border border-black/60 text-white px-3 py-2.5 text-sm outline-none placeholder-black/70"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="PHONE NUMBER"
//                 className="bg-transparent border border-black/60 text-white px-3 py-2.5 text-sm outline-none placeholder-black/70"
//               />

//               <input
//                 type="text"
//                 name="city"
//                 placeholder="CITY"
//                 className="bg-transparent border border-black/60 text-white px-3 py-2.5 text-sm outline-none placeholder-black/70"
//               />

//               <textarea
//                 name="message"
//                 placeholder="MESSAGE"
//                 rows="2"
//                 required
//                 className="bg-transparent border border-black/60 text-white px-3 py-2.5 text-sm outline-none placeholder-black/70 resize-none"
//               />

//               <div className="md:col-span-2 mt-4">
//                 <button
//                   type="submit"
//                   className="bg-[#2DD4BF] text-white px-8 py-2.5 text-sm font-semibold"
//                 >
//                   SEND NOW
//                 </button>
//               </div>
//             </form>
//           </div>

       
//           <div className="w-full h-[340px] border border-white/20">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.750984159696!2d77.0480989!3d28.5772394!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x390d1b5aa370912d%3A0x67cdd78c943f0f39!2sAbheepay!5e0!3m2!1sen!2sin!4v1770614721648!5m2!1sen!2sin"
//               className="w-full h-full border-0"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               allowFullScreen
//               title="Google Map"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EnquirySection;







// import React, { useState } from "react";
// import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

// const EnquirySection = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/care@abheepay.com",
//         {
//           method: "POST",
//           body: formData,
//         },
//       );

//       if (response.ok) {
//         setSubmitted(true);
//         form.reset();
//       } else {
//         console.log("Form submission failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <section className="bg-[#E9EAEC] py-9" id="bottomform">
//       <div className="max-w-[43rem] mx-auto px-4">
//         <h2 className="text-center text-xl md:text-2xl font-bold text-[#0F172A] mb-6">
//           Get In Touch
//         </h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
//           {/* Left: Form Card */}
//           <div className="bg-white rounded-xl shadow-sm p-5">
//             <h3 className="text-sm font-semibold text-[#0F172A] mb-3.5">
//               Send us a message
//             </h3>

//             {submitted && (
//               <p className="text-emerald-600 mb-2.5 text-xs">
//                 Your enquiry has been submitted successfully!
//               </p>
//             )}

//             <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />
//               <input
//                 type="hidden"
//                 name="_subject"
//                 value="New Enquiry From Website"
//               />
//               <input type="text" name="_honey" style={{ display: "none" }} />

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 required
//                 className="bg-white border border-gray-200 rounded-md text-[#0F172A] px-2.5 py-1.5 text-xs outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 required
//                 className="bg-white border border-gray-200 rounded-md text-[#0F172A] px-2.5 py-1.5 text-xs outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 className="bg-white border border-gray-200 rounded-md text-[#0F172A] px-2.5 py-1.5 text-xs outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors"
//               />

//               <input
//                 type="text"
//                 name="city"
//                 placeholder="City"
//                 className="bg-white border border-gray-200 rounded-md text-[#0F172A] px-2.5 py-1.5 text-xs outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors"
//               />

//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows="3"
//                 required
//                 className="bg-white border border-gray-200 rounded-md text-[#0F172A] px-2.5 py-1.5 text-xs outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors resize-none"
//               />

//               <button
//                 type="submit"
//                 className="mt-1 bg-[#2DD4BF] hover:bg-[#20B8A5] transition-colors text-white rounded-md px-5 py-2 text-xs font-semibold"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* Right: Contact Info Cards */}
//           <div className="flex flex-col gap-2.5">
//             <div className="bg-white rounded-xl shadow-sm p-3 flex items-center gap-2.5">
//               <div className="w-7 h-7 rounded-lg bg-[#2DD4BF] flex items-center justify-center shrink-0">
//                 <Phone className="w-3.5 h-3.5 text-white" />
//               </div>
//               <div>
//                 <p className="font-semibold text-[#0F172A] text-xs">
//                   Phone Number
//                 </p>
//                 <p className="text-gray-500 text-xs">+91 88600 37218</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-3 flex items-center gap-2.5">
//               <div className="w-7 h-7 rounded-lg bg-[#2DD4BF] flex items-center justify-center shrink-0">
//                 <Mail className="w-3.5 h-3.5 text-white" />
//               </div>
//               <div>
//                 <p className="font-semibold text-[#0F172A] text-xs">
//                   Email Address
//                 </p>
//                 <p className="text-gray-500 text-xs">care@abheepay.com</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-3 flex items-center gap-2.5">
//               <div className="w-7 h-7 rounded-lg bg-[#2DD4BF] flex items-center justify-center shrink-0">
//                 <MessageCircle className="w-3.5 h-3.5 text-white" />
//               </div>
//               <div>
//                 <p className="font-semibold text-[#0F172A] text-xs">
//                   WhatsApp Support
//                 </p>
//                 <p className="text-gray-500 text-xs">+91 88600 37218</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm p-3 flex items-center gap-2.5">
//               <div className="w-7 h-7 rounded-lg bg-[#2DD4BF] flex items-center justify-center shrink-0">
//                 <MapPin className="w-3.5 h-3.5 text-white" />
//               </div>
//               <div>
//                 <p className="font-semibold text-[#0F172A] text-xs">
//                   Office Address
//                 </p>
//                 <p className="text-gray-500 text-xs">Dwarka, New Delhi, India</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EnquirySection;










import React, { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

const EnquirySection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/care@abheepay.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        console.log("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="bg-[#E9EAEC] py-[50.4px]" id="bottomform">
      <div className="max-w-[963px] mx-auto px-[22.4px]">
        <h2 className="text-center text-[28px] md:text-[33.6px] font-bold text-[#0F172A] mb-[33.6px]">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[28px] items-start">
          {/* Left: Form Card */}
          <div className="bg-white rounded-[16.8px] shadow-sm p-[28px]">
            <h3 className="text-[19.6px] font-semibold text-[#0F172A] mb-[19.6px]">
              Send us a message
            </h3>

            {submitted && (
              <p className="text-emerald-600 mb-[14px] text-[16.8px]">
                Your enquiry has been submitted successfully!
              </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New Enquiry From Website"
              />
              <input type="text" name="_honey" style={{ display: "none" }} />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-white border border-gray-200 rounded-[8.4px] text-[#0F172A] px-[14px] py-[8.4px] text-[16.8px] outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-white border border-gray-200 rounded-[8.4px] text-[#0F172A] px-[14px] py-[8.4px] text-[16.8px] outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="bg-white border border-gray-200 rounded-[8.4px] text-[#0F172A] px-[14px] py-[8.4px] text-[16.8px] outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                className="bg-white border border-gray-200 rounded-[8.4px] text-[#0F172A] px-[14px] py-[8.4px] text-[16.8px] outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="bg-white border border-gray-200 rounded-[8.4px] text-[#0F172A] px-[14px] py-[8.4px] text-[16.8px] outline-none placeholder-gray-400 focus:border-[#2DD4BF] transition-colors resize-none"
              />

              <button
                type="submit"
                className="mt-[5.6px] bg-[#2DD4BF] hover:bg-[#20B8A5] transition-colors text-white rounded-[8.4px] px-[28px] py-[11.2px] text-[16.8px] font-semibold"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: Contact Info Cards */}
          <div className="flex flex-col gap-[14px]">
            <div className="bg-white rounded-[16.8px] shadow-sm p-[16.8px] flex items-center gap-[14px]">
              <div className="w-[39.2px] h-[39.2px] rounded-[11.2px] bg-[#2DD4BF] flex items-center justify-center shrink-0">
                <Phone className="w-[19.6px] h-[19.6px] text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] text-[16.8px]">
                  Phone Number
                </p>
                <p className="text-gray-500 text-[16.8px]">+91 88600 37218</p>
              </div>
            </div>

            <div className="bg-white rounded-[16.8px] shadow-sm p-[16.8px] flex items-center gap-[14px]">
              <div className="w-[39.2px] h-[39.2px] rounded-[11.2px] bg-[#2DD4BF] flex items-center justify-center shrink-0">
                <Mail className="w-[19.6px] h-[19.6px] text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] text-[16.8px]">
                  Email Address
                </p>
                <p className="text-gray-500 text-[16.8px]">care@abheepay.com</p>
              </div>
            </div>

            <div className="bg-white rounded-[16.8px] shadow-sm p-[16.8px] flex items-center gap-[14px]">
              <div className="w-[39.2px] h-[39.2px] rounded-[11.2px] bg-[#2DD4BF] flex items-center justify-center shrink-0">
                <MessageCircle className="w-[19.6px] h-[19.6px] text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] text-[16.8px]">
                  WhatsApp Support
                </p>
                <p className="text-gray-500 text-[16.8px]">+91 88600 37218</p>
              </div>
            </div>

            <div className="bg-white rounded-[16.8px] shadow-sm p-[16.8px] flex items-center gap-[14px]">
              <div className="w-[39.2px] h-[39.2px] rounded-[11.2px] bg-[#2DD4BF] flex items-center justify-center shrink-0">
                <MapPin className="w-[19.6px] h-[19.6px] text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] text-[16.8px]">
                  Office Address
                </p>
                <p className="text-gray-500 text-[16.8px]">Dwarka, New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;