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