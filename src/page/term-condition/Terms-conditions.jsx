import React, { useState } from "react";
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
  Heart,
  MessageCircle,
  HelpCircle,
} from "lucide-react";


const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <FileCheck size={22} />,
      color: "from-blue-500 to-cyan-500",
      content:
        "By accessing, browsing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions, along with our Privacy Policy and any other policies referenced herein. If you do not agree with any part of these Terms, please do not use our Services.",
    },
    {
      title: "Eligibility",
      icon: <Users size={22} />,
      color: "from-purple-500 to-pink-500",
      content:
        "You must be legally capable of entering into a binding contract under applicable laws to use our Services. By using our Services, you confirm that you meet this requirement.",
    },
    {
      title: "Service Usage",
      icon: <Globe size={22} />,
      color: "from-green-500 to-emerald-500",
      content:
        "You agree to use our Services strictly in compliance with all applicable laws, rules, and regulations. You shall not: use the Services for any illegal, fraudulent, or unauthorized purpose; attempt to gain unauthorized access to systems or data; misuse, disrupt, or interfere with the functioning of the Services; upload or transmit malicious code, viruses, or harmful content. We reserve the right to suspend or terminate your access if we believe you have violated these Terms.",
    },
    {
      title: "User Responsibilities",
      icon: <ShieldCheck size={22} />,
      color: "from-orange-500 to-red-500",
      content:
        "You are solely responsible for maintaining the confidentiality of your login credentials, all activities performed through your account, and ensuring the accuracy of the information you provide. You must immediately notify us if you suspect any unauthorized use of your account or any security breach.",
    },
    {
      title: "Account Management",
      icon: <Lock size={22} />,
      color: "from-indigo-500 to-purple-500",
      content:
        "We reserve the right to suspend, restrict, or terminate your account at any time without prior notice if you violate these Terms, we suspect fraudulent or suspicious activity, or required by law or regulatory authorities. Termination does not affect any rights or obligations that arose before termination.",
    },
    {
      title: "Limitation of Liability",
      icon: <AlertCircle size={22} />,
      color: "from-yellow-500 to-orange-500",
      content:
        "To the maximum extent permitted by law, Abheepay and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of data, business interruption, or loss arising from unauthorized access. Our liability, if any, shall be limited to the amount paid by you (if applicable) for using our Services.",
    },
    {
      title: "Third-Party Services",
      icon: <Award size={22} />,
      color: "from-pink-500 to-rose-500",
      content:
        "Our Services may contain links to or integrations with third-party services. We are not responsible for the content, policies, or practices of such third parties. Your use of third-party services is governed by their respective terms.",
    },
    {
      title: "Intellectual Property",
      icon: <BookOpen size={22} />,
      color: "from-cyan-500 to-blue-500",
      content:
        "All content, trademarks, logos, designs, and software used in our Services are the intellectual property of Abheepay / Telering Process Private Limited. You may not copy, reproduce, distribute, or exploit any content without prior written permission.",
    },
    {
      title: "Governing Law",
      icon: <Scale size={22} />,
      color: "from-violet-500 to-purple-500",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of India, and courts located in India shall have exclusive jurisdiction.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:py-20 relative overflow-hidden font-sans">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D3CD] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-100 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <Scale className="w-4 h-4 text-[#00D3CD]" />
            <span className="text-xs font-medium text-slate-600 tracking-wider uppercase">
              Legal Framework
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900">
              Terms &
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00D3CD] to-purple-600 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Welcome to <span className="font-bold text-slate-900">Abheepay</span>. 
            By using our services, you agree to these terms which govern our digital financial ecosystem.
          </p>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm">
             <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-4 h-4 text-[#00D3CD]" />
                Last Updated: Jan 2025
             </div>
             <div className="flex items-center gap-2 text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#00D3CD]" />
                Legally Compliant
             </div>
             <div className="flex items-center gap-2 text-slate-500">
                <Globe className="w-4 h-4 text-[#00D3CD]" />
                Governed by Indian Law
             </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 mb-12 shadow-sm">
           <div className="flex items-start gap-6">
              <div className="hidden md:flex w-14 h-14 bg-[#00D3CD]/10 rounded-2xl items-center justify-center shrink-0">
                 <BookOpen className="w-7 h-7 text-[#00D3CD]" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
                 <p className="text-slate-600 leading-relaxed">
                    These Terms & Conditions ("Terms") govern your access to and use of our website, mobile application, and digital financial services (collectively referred to as the "Services"). Abheepay is a unit of <span className="font-bold text-slate-900">Telering Process Private Limited</span>. By accessing or using our Services, you agree to comply with and be legally bound by these Terms.
                 </p>
              </div>
           </div>
        </div>

        {/* Interactive Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative h-full"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#00D3CD] to-purple-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:bg-slate-50/50 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#00D3CD] mb-6 group-hover:bg-[#00D3CD] group-hover:text-white transition-all shadow-sm">
                   {section.icon}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#00D3CD] transition-colors">
                  {section.title}
                </h3>
                
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                  {section.content}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#00D3CD] opacity-0 group-hover:opacity-100 transition-opacity">
                   GOVERNANCE SECTION <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Support Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#00D3CD]" />
                Legal Clarification
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                If you have any questions regarding these terms, please contact our legal compliance team.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:care@abheepay.in" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#00D3CD] group-hover:text-white transition-all shadow-sm">
                    <Mail className="w-5 h-5 text-[#00D3CD] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Email Support</p>
                    <p className="text-sm text-slate-900 font-semibold">care@abheepay.in</p>
                  </div>
                </a>
                <a href="tel:8860037218" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#00D3CD] group-hover:text-white transition-all shadow-sm">
                    <Phone className="w-5 h-5 text-[#00D3CD] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold">Phone Support</p>
                    <p className="text-sm text-slate-900 font-semibold">+91 88600 37218</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Updates Banner */}
            <div className="bg-gradient-to-br from-[#00D3CD] to-[#008B88] rounded-3xl p-8 relative overflow-hidden group shadow-lg text-white">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <FileText className="w-32 h-32" />
               </div>
               <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">Updates to Terms</h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-sm">
                     We reserve the right to modify these Terms. Material changes will be communicated via email or through our website.
                  </p>
                  <button className="bg-white text-[#008B88] font-bold py-3 px-8 rounded-xl hover:shadow-xl transition-all active:scale-95 text-sm">
                     Stay Informed
                  </button>
               </div>
            </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-slate-400 text-[11px] italic">
           © 2025 Abheepay | Telering Process Private Limited. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>

  );
};

export default TermsConditions;