import React, { useState } from "react";
import {
  UserX,
  Mail,
  Smartphone,
  User,
  ShieldAlert,
  Trash2,
  FileSearch,
  Clock,
  History,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Info
} from "lucide-react";

const AccountDeletion = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Registered Mobile Number",
      icon: <Smartphone className="w-5 h-5" />,
      desc: "Provide the primary mobile number linked to your merchant account."
    },
    {
      id: 2,
      title: "Merchant Name",
      icon: <User className="w-5 h-5" />,
      desc: "Legal or business name as registered in our records."
    },
    {
      id: 3,
      title: "Registered Email Address",
      icon: <Mail className="w-5 h-5" />,
      desc: "If applicable, include the email address used for account communications."
    }
  ];

  const deletionData = [
    { name: "Merchant profile information", icon: <User className="w-4 h-4" /> },
    { name: "Business details", icon: <Info className="w-4 h-4" /> },
    { name: "KYC documents uploaded by you", icon: <FileSearch className="w-4 h-4" /> },
    { name: "QR code settings and configurations", icon: <Trash2 className="w-4 h-4" /> },
    { name: "Saved preferences and account settings", icon: <CheckCircle2 className="w-4 h-4" /> }
  ];

  const retainedData = [
    { name: "Transaction records", icon: <History className="w-4 h-4" /> },
    { name: "Settlement records", icon: <History className="w-4 h-4" /> },
    { name: "Audit logs", icon: <FileSearch className="w-4 h-4" /> },
    { name: "Information required under laws", icon: <ShieldAlert className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D3CD] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 backdrop-blur-sm border border-red-100 rounded-full px-4 py-2 mb-6">
            <UserX className="w-4 h-4 text-red-500" />
            <span className="text-xs font-medium text-red-600 tracking-wider uppercase">
              Account Management
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900">
              Delete Your AbheePay
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00D3CD] to-purple-600 bg-clip-text text-transparent">
              Merchant Account
            </span>
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            At AbheePay, we respect your privacy and provide users with the ability 
            to request deletion of their account and associated personal data.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Instructions */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* How to Request Card */}
            <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Mail className="w-24 h-24 text-slate-900" />
              </div>
              
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-[#00D3CD]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#00D3CD]" />
                </div>
                How to Request Account Deletion
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                To request deletion of your AbheePay Merchant account, please send an email to our support team with the subject line <span className="text-[#00D3CD] font-semibold">"Account Deletion Request"</span>.
              </p>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Send email to:</p>
                    <a href="mailto:care@abheepay.com" className="text-xl font-bold text-slate-900 hover:text-[#00D3CD] transition-colors flex items-center gap-2">
                      care@abheepay.com
                      <Sparkles className="w-4 h-4 text-[#00D3CD]" />
                    </a>
                  </div>
                  <a 
                    href="mailto:care@abheepay.com?subject=Account Deletion Request" 
                    className="bg-[#00D3CD] hover:bg-[#00B5B0] text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00D3CD]/20"
                  >
                    Send Request Now
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-slate-900 font-semibold mb-4">Required Details:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {steps.map((step) => (
                  <div 
                    key={step.id}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`p-5 rounded-2xl border transition-all duration-300 ${
                      activeStep === step.id 
                      ? "bg-white border-[#00D3CD] translate-y-[-4px] shadow-md" 
                      : "bg-slate-50/50 border-slate-100"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      activeStep === step.id ? "bg-[#00D3CD] text-white" : "bg-white text-[#00D3CD] shadow-sm"
                    }`}>
                      {step.icon}
                    </div>
                    <h4 className="text-slate-900 font-medium mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-700/80">
                  Our support team may contact you to verify your identity before processing your request for security purposes.
                </p>
              </div>
            </div>

            {/* Data Deletion & Retention Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* What Will Be Deleted */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#00D3CD]/30 transition-colors shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Trash2 className="w-5 h-5 text-red-500" />
                  What Will Be Deleted
                </h3>
                <p className="text-sm text-slate-500 mb-6">Once verified, the following will be permanently removed:</p>
                <div className="space-y-3">
                  {deletionData.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100 group cursor-default hover:bg-white hover:shadow-sm transition-all">
                      <div className="text-[#00D3CD]">{item.icon}</div>
                      <span className="text-sm text-slate-700">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Retained */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-purple-300 transition-colors shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <ShieldAlert className="w-5 h-5 text-purple-600" />
                  Data That May Be Retained
                </h3>
                <p className="text-sm text-slate-500 mb-6">Retained for legal, regulatory, or tax compliance:</p>
                <div className="space-y-3">
                  {retainedData.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100 group cursor-default hover:bg-white hover:shadow-sm transition-all">
                      <div className="text-purple-500">{item.icon}</div>
                      <span className="text-sm text-slate-700">{item.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-6 leading-relaxed">
                  *Such retained data will be securely stored and deleted after the legally required retention period.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Timeline & Info */}
          <div className="space-y-8">
            
            {/* Timeline Card */}
            <div className="bg-gradient-to-br from-[#00D3CD] to-[#008B88] rounded-3xl p-8 relative overflow-hidden group shadow-lg">
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <Clock className="w-32 h-32 text-white" />
              </div>
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Deletion Timeline</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  After successful verification, your account deletion request will be processed within:
                </p>
                <div className="text-4xl font-black text-white flex items-baseline gap-2">
                  7-15
                  <span className="text-lg font-medium opacity-80">Business Days</span>
                </div>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h4 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#00D3CD]" />
                Need Help?
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                If you have any questions regarding the account deletion process or our privacy practices, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#00D3CD] group-hover:text-white transition-all shadow-sm">
                    <Mail className="w-5 h-5 text-[#00D3CD] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">Support Email</p>
                    <p className="text-sm text-slate-900 font-semibold">care@abheepay.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#00D3CD] group-hover:text-white transition-all shadow-sm">
                    <Smartphone className="w-5 h-5 text-[#00D3CD] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">Phone Support</p>
                    <p className="text-sm text-slate-900 font-semibold">+91 8860037218</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-[11px] text-slate-500 leading-relaxed italic">
                Disclaimer: Account deletion is irreversible once processed. Any remaining balance or credits should be settled prior to the request.
              </p>
            </div>

          </div>

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

export default AccountDeletion;
