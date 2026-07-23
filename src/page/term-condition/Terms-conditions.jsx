// import React, { useState } from "react";
// import {
//   FileText,
//   Scale,
//   ShieldCheck,
//   AlertCircle,
//   Mail,
//   Phone,
//   ChevronRight,
//   Globe,
//   Lock,
//   Clock,
//   Users,
//   FileCheck,
//   Award,
//   BookOpen,
//   Heart,
//   MessageCircle,
//   HelpCircle,
// } from "lucide-react";


// const TermsConditions = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const sections = [
//     {
//       title: "Acceptance of Terms",
//       icon: <FileCheck size={22} />,
//       color: "from-blue-500 to-cyan-500",
//       content:
//         "By accessing, browsing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions, along with our Privacy Policy and any other policies referenced herein. If you do not agree with any part of these Terms, please do not use our Services.",
//     },
//     {
//       title: "Eligibility",
//       icon: <Users size={22} />,
//       color: "from-purple-500 to-pink-500",
//       content:
//         "You must be legally capable of entering into a binding contract under applicable laws to use our Services. By using our Services, you confirm that you meet this requirement.",
//     },
//     {
//       title: "Service Usage",
//       icon: <Globe size={22} />,
//       color: "from-green-500 to-emerald-500",
//       content:
//         "You agree to use our Services strictly in compliance with all applicable laws, rules, and regulations. You shall not: use the Services for any illegal, fraudulent, or unauthorized purpose; attempt to gain unauthorized access to systems or data; misuse, disrupt, or interfere with the functioning of the Services; upload or transmit malicious code, viruses, or harmful content. We reserve the right to suspend or terminate your access if we believe you have violated these Terms.",
//     },
//     {
//       title: "User Responsibilities",
//       icon: <ShieldCheck size={22} />,
//       color: "from-orange-500 to-red-500",
//       content:
//         "You are solely responsible for maintaining the confidentiality of your login credentials, all activities performed through your account, and ensuring the accuracy of the information you provide. You must immediately notify us if you suspect any unauthorized use of your account or any security breach.",
//     },
//     {
//       title: "Account Management",
//       icon: <Lock size={22} />,
//       color: "from-indigo-500 to-purple-500",
//       content:
//         "We reserve the right to suspend, restrict, or terminate your account at any time without prior notice if you violate these Terms, we suspect fraudulent or suspicious activity, or required by law or regulatory authorities. Termination does not affect any rights or obligations that arose before termination.",
//     },
//     {
//       title: "Limitation of Liability",
//       icon: <AlertCircle size={22} />,
//       color: "from-yellow-500 to-orange-500",
//       content:
//         "To the maximum extent permitted by law, Abheepay and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, business interruption, or loss arising from unauthorized access. Our liability, if any, shall be limited to the amount paid by you (if applicable) for using our Services.",
//     },
//     {
//       title: "Third-Party Services",
//       icon: <Award size={22} />,
//       color: "from-pink-500 to-rose-500",
//       content:
//         "Our Services may contain links to or integrations with third-party services. We are not responsible for the content, policies, or practices of such third parties. Your use of third-party services is governed by their respective terms.",
//     },
//     {
//       title: "Intellectual Property",
//       icon: <BookOpen size={22} />,
//       color: "from-cyan-500 to-blue-500",
//       content:
//         "All content, trademarks, logos, designs, and software used in our Services are the intellectual property of Abheepay / Telering Process Private Limited. You may not copy, reproduce, distribute, or exploit any content without prior written permission.",
//     },
//     {
//       title: "Governing Law",
//       icon: <Scale size={22} />,
//       color: "from-violet-500 to-purple-500",
//       content:
//         "These Terms shall be governed by and construed in accordance with the laws of India, and courts located in India shall have exclusive jurisdiction.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:py-20 relative overflow-hidden font-sans">
//       {/* Animated background grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

//       {/* Floating orbs */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D3CD] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

//       <div className="max-w-7xl mx-auto relative">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-slate-100 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6 shadow-sm">
//             <Scale className="w-4 h-4 text-[#00D3CD]" />
//             <span className="text-xs font-medium text-slate-600 tracking-wider uppercase">
//               Legal Framework
//             </span>
//           </div>

//           <h1 className="text-5xl md:text-6xl font-bold mb-6">
//             <span className="text-slate-900">
//               Terms &
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-[#00D3CD] to-purple-600 bg-clip-text text-transparent">
//               Conditions
//             </span>
//           </h1>

//           <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
//             Welcome to <span className="font-bold text-slate-900">Abheepay</span>. 
//             By using our services, you agree to these terms which govern our digital financial ecosystem.
//           </p>

//           {/* Quick Info Bar */}
//           <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm">
//              <div className="flex items-center gap-2 text-slate-500">
//                 <Clock className="w-4 h-4 text-[#00D3CD]" />
//                 Last Updated: Jan 2025
//              </div>
//              <div className="flex items-center gap-2 text-slate-500">
//                 <ShieldCheck className="w-4 h-4 text-[#00D3CD]" />
//                 Legally Compliant
//              </div>
//              <div className="flex items-center gap-2 text-slate-500">
//                 <Globe className="w-4 h-4 text-[#00D3CD]" />
//                 Governed by Indian Law
//              </div>
//           </div>
//         </div>

//         {/* Introduction Section */}
//         <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 mb-12 shadow-sm">
//            <div className="flex items-start gap-6">
//               <div className="hidden md:flex w-14 h-14 bg-[#00D3CD]/10 rounded-2xl items-center justify-center shrink-0">
//                  <BookOpen className="w-7 h-7 text-[#00D3CD]" />
//               </div>
//               <div>
//                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
//                  <p className="text-slate-600 leading-relaxed">
//                     These Terms & Conditions ("Terms") govern your access to and use of our website, mobile application, and digital financial services (collectively referred to as the "Services"). Abheepay is a unit of <span className="font-bold text-slate-900">Telering Process Private Limited</span>. By accessing or using our Services, you agree to comply with and be legally bound by these Terms.
//                  </p>
//               </div>
//            </div>
//         </div>

//         {/* Interactive Grid */}
//         <div className="grid lg:grid-cols-3 gap-6 mb-16">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className="group relative h-full"
//               onMouseEnter={() => setActiveSection(index)}
//               onMouseLeave={() => setActiveSection(null)}
//             >
//               <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#00D3CD] to-purple-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
//               <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:bg-slate-50/50 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
//                 <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#00D3CD] mb-6 group-hover:bg-[#00D3CD] group-hover:text-white transition-all shadow-sm">
//                    {section.icon}
//                 </div>
                
//                 <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#00D3CD] transition-colors">
//                   {section.title}
//                 </h3>
                
//                 <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
//                   {section.content}
//                 </p>

//                 <div className="flex items-center gap-2 text-xs font-semibold text-[#00D3CD] opacity-0 group-hover:opacity-100 transition-opacity">
//                    GOVERNANCE SECTION <ChevronRight className="w-3 h-3" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Contact & Support Section */}
//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//             <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
//               <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
//                 <HelpCircle className="w-4 h-4 text-[#00D3CD]" />
//                 Legal Clarification
//               </h4>
//               <p className="text-sm text-slate-500 leading-relaxed mb-8">
//                 If you have any questions regarding these terms, please contact our legal compliance team.
//               </p>
              
//               <div className="space-y-4">
//                 <a href="mailto:care@abheepay.in" className="flex items-center gap-4 group cursor-pointer">
//                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#00D3CD] group-hover:text-white transition-all shadow-sm">
//                     <Mail className="w-5 h-5 text-[#00D3CD] group-hover:text-white" />
//                   </div>
//                   <div>
//                     <p className="text-[10px] text-slate-400 uppercase font-bold">Email Support</p>
//                     <p className="text-sm text-slate-900 font-semibold">care@abheepay.in</p>
//                   </div>
//                 </a>
//                 <a href="tel:8860037218" className="flex items-center gap-4 group cursor-pointer">
//                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#00D3CD] group-hover:text-white transition-all shadow-sm">
//                     <Phone className="w-5 h-5 text-[#00D3CD] group-hover:text-white" />
//                   </div>
//                   <div>
//                     <p className="text-[10px] text-slate-400 uppercase font-bold">Phone Support</p>
//                     <p className="text-sm text-slate-900 font-semibold">+91 88600 37218</p>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* Updates Banner */}
//             <div className="bg-gradient-to-br from-[#00D3CD] to-[#008B88] rounded-3xl p-8 relative overflow-hidden group shadow-lg text-white">
//                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
//                   <FileText className="w-32 h-32" />
//                </div>
//                <div className="relative z-10">
//                   <h4 className="text-xl font-bold mb-4">Updates to Terms</h4>
//                   <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-sm">
//                      We reserve the right to modify these Terms. Material changes will be communicated via email or through our website.
//                   </p>
//                   <button className="bg-white text-[#008B88] font-bold py-3 px-8 rounded-xl hover:shadow-xl transition-all active:scale-95 text-sm">
//                      Stay Informed
//                   </button>
//                </div>
//             </div>
//         </div>

//         {/* Footer Note */}
//         <div className="text-center text-slate-400 text-[11px] italic">
//            © 2025 Abheepay | Telering Process Private Limited. All rights reserved.
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob { animation: blob 7s infinite; }
//         .animation-delay-2000 { animation-delay: 2s; }
//       `}</style>
//     </div>

//   );
// };

// export default TermsConditions;





import React, { useState, useRef } from "react";
import {
  FileText,
  Scale,
  ShieldCheck,
  AlertCircle,
  Mail,
  Phone,
  ChevronRight,
  Globe,
  Lock,
  Clock,
  Users,
  FileCheck,
  Award,
  BookOpen,
  Headphones,
  ArrowRight,
} from "lucide-react";

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState(1);
  const sectionRefs = useRef({});

  const sections = [
    {
      id: 1,
      icon: <FileCheck className="w-5 h-5" />,
      title: "Acceptance of Terms",
      subtitle: "What using our Services means",
      content:
        "By accessing, browsing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions, along with our Privacy Policy and any other policies referenced herein. If you do not agree with any part of these Terms, please do not use our Services.",
    },
    {
      id: 2,
      icon: <Users className="w-5 h-5" />,
      title: "Eligibility",
      subtitle: "Who can use our Services",
      content:
        "You must be legally capable of entering into a binding contract under applicable laws to use our Services. By using our Services, you confirm that you meet this requirement.",
    },
    {
      id: 3,
      icon: <Globe className="w-5 h-5" />,
      title: "Service Usage",
      subtitle: "Acceptable use of the platform",
      content: [
        "You agree to use our Services strictly in compliance with all applicable laws, rules, and regulations. You shall not:",
        "Use the Services for any illegal, fraudulent, or unauthorized purpose.",
        "Attempt to gain unauthorized access to systems or data.",
        "Misuse, disrupt, or interfere with the functioning of the Services.",
        "Upload or transmit malicious code, viruses, or harmful content.",
        "We reserve the right to suspend or terminate your access if we believe you have violated these Terms.",
      ],
    },
    {
      id: 4,
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "User Responsibilities",
      subtitle: "Keeping your account secure",
      content:
        "You are solely responsible for maintaining the confidentiality of your login credentials, all activities performed through your account, and ensuring the accuracy of the information you provide. You must immediately notify us if you suspect any unauthorized use of your account or any security breach.",
    },
    {
      id: 5,
      icon: <Lock className="w-5 h-5" />,
      title: "Account Management",
      subtitle: "Suspension and termination",
      content:
        "We reserve the right to suspend, restrict, or terminate your account at any time without prior notice if you violate these Terms, we suspect fraudulent or suspicious activity, or required by law or regulatory authorities. Termination does not affect any rights or obligations that arose before termination.",
    },
    {
      id: 6,
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Limitation of Liability",
      subtitle: "What we are and aren't liable for",
      content:
        "To the maximum extent permitted by law, Abheepay and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, business interruption, or loss arising from unauthorized access. Our liability, if any, shall be limited to the amount paid by you (if applicable) for using our Services.",
    },
    {
      id: 7,
      icon: <Award className="w-5 h-5" />,
      title: "Third-Party Services",
      subtitle: "Links and integrations",
      content:
        "Our Services may contain links to or integrations with third-party services. We are not responsible for the content, policies, or practices of such third parties. Your use of third-party services is governed by their respective terms.",
    },
    {
      id: 8,
      icon: <BookOpen className="w-5 h-5" />,
      title: "Intellectual Property",
      subtitle: "Ownership of content and branding",
      content:
        "All content, trademarks, logos, designs, and software used in our Services are the intellectual property of Abheepay / Telering Process Private Limited. You may not copy, reproduce, distribute, or exploit any content without prior written permission.",
    },
    {
      id: 9,
      icon: <Scale className="w-5 h-5" />,
      title: "Governing Law",
      subtitle: "Jurisdiction for disputes",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of India, and courts located in India shall have exclusive jurisdiction.",
    },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ zoom: 0.67 }}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#081C2E] via-[#0B2A44] to-[#0E3A56]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00D3CD] opacity-10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20 relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00D3CD]/10 border border-[#00D3CD]/30 rounded-full px-3 py-1.5 mb-6">
              <Scale className="w-3.5 h-3.5 text-[#00D3CD]" />
              <span className="text-[11px] font-semibold text-[#5EEAE3] tracking-widest">
                LEGAL FRAMEWORK
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 tracking-tight">
              Terms & Conditions
            </h1>

            <p className="text-slate-300 text-lg mb-4">
              By using our services, you agree to these terms which govern
              our digital financial ecosystem.
            </p>

            <p className="text-slate-400 leading-relaxed max-w-xl mb-6">
              Welcome to Abheepay. These Terms & Conditions govern your
              access to and use of our website, mobile application, and
              digital financial services.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-[#00D3CD]" />
                Last Updated: Jan 2025
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#00D3CD]" />
                Legally Compliant
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-[#00D3CD]" />
                Governed by Indian Law
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full border border-[#00D3CD]/20" />
              <div className="absolute inset-6 rounded-full border border-[#00D3CD]/15" />
              <div className="absolute inset-12 rounded-full bg-[#00D3CD]/5 backdrop-blur-sm flex items-center justify-center">
                <Scale className="w-24 h-24 text-[#00D3CD]" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-4 order-2 lg:order-1">
            <nav className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 tracking-widest px-2 mb-2">
                POLICY SECTIONS
              </h3>
              <div className="max-h-[520px] overflow-y-auto pr-1">
                {sections.map((section) => {
                  const active = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-left transition-colors ${
                        active ? "bg-[#00A79D]/8" : "hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={
                            active ? "text-[#00A79D]" : "text-slate-400"
                          }
                        >
                          {section.icon}
                        </span>
                        <span
                          className={`text-sm truncate ${
                            active
                              ? "text-[#00A79D] font-semibold"
                              : "text-slate-600"
                          }`}
                        >
                          {section.title}
                        </span>
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 ${
                          active ? "text-[#00A79D]" : "text-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </nav>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#00A79D]/10 flex items-center justify-center mb-3">
                <Headphones className="w-5 h-5 text-[#00A79D]" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">
                Legal Clarification
              </h4>
              <p className="text-xs text-slate-500 mb-3">
                Questions about these terms? Reach our compliance team.
              </p>
              <a
                href="mailto:care@abheepay.in"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#00A79D]"
              >
                Contact Us <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-5 order-1 lg:order-2">
            <div className="bg-gradient-to-br from-[#00A79D] to-[#0B7268] rounded-2xl p-7 sm:p-8 relative overflow-hidden shadow-sm">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
              <div className="relative flex items-start gap-4">
                <div className="bg-white/15 p-3 rounded-xl">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1.5">
                    Agreement to Terms
                  </h2>
                  <p className="text-white/85 text-sm leading-relaxed max-w-2xl">
                    These Terms & Conditions ("Terms") govern your access to
                    and use of our website, mobile application, and digital
                    financial services (collectively referred to as the
                    "Services"). Abheepay is a unit of Telering Process
                    Private Limited. By accessing or using our Services, you
                    agree to comply with and be legally bound by these
                    Terms.
                  </p>
                </div>
              </div>
            </div>

            {sections.map((section) => (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#00A79D]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#00A79D]">{section.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900">
                      {section.id}. {section.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-[#00A79D] rounded-full my-1.5" />
                    <p className="text-sm text-slate-400">
                      {section.subtitle}
                    </p>
                  </div>
                  <span className="hidden sm:block text-4xl font-extrabold text-slate-100 leading-none">
                    {String(section.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="space-y-3">
                  {Array.isArray(section.content) ? (
                    section.content.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A79D] mt-2 shrink-0" />
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#00A79D]" />
                Updates to These Terms
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                We reserve the right to modify these Terms. Material changes
                will be communicated via email or through our website.{" "}
                <span className="italic text-slate-400">
                  Please review this page periodically.
                </span>
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 bg-[#00A79D]/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#00A79D]" />
                    </div>
                    <span className="text-xs text-slate-400">
                      Email Support
                    </span>
                  </div>
                  <a
                    href="mailto:care@abheepay.in"
                    className="text-slate-900 font-semibold hover:text-[#00A79D] transition-colors"
                  >
                    care@abheepay.in
                  </a>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 bg-[#00A79D]/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#00A79D]" />
                    </div>
                    <span className="text-xs text-slate-400">
                      Phone Support
                    </span>
                  </div>
                  <a
                    href="tel:8860037218"
                    className="text-slate-900 font-semibold hover:text-[#00A79D] transition-colors"
                  >
                    +91 88600 37218
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-7 pt-6 border-t border-slate-100">
                {[
                  [ShieldCheck, "Legally Compliant"],
                  [Scale, "Indian Jurisdiction"],
                  [Clock, "Updated Jan 2025"],
                  [Lock, "Secure Platform"],
                ].map(([Icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 text-slate-400"
                  >
                    <Icon className="w-4 h-4 text-[#00A79D]" />
                    <span className="text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <p className="text-center text-slate-400 text-xs italic pt-2">
              © 2025 Abheepay | Telering Process Private Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;