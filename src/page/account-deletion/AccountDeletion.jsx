import React, { useState } from "react";
import {
  UserX,
  Mail,
  Smartphone,
  User,
  Building2,
  Hash,
  MessageSquare,
  ShieldAlert,
  Trash2,
  FileSearch,
  Clock,
  History,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Info,
  ClipboardList,
  Lock,
  PhoneCall
} from "lucide-react";



const AccountDeletion = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    mobile: "",
    email: "",
    merchantId: "",
    reason: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.mobile.trim()) {
      setError("Please provide your full name and registered mobile number.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const requiredFields = [
    {
      id: "fullName",
      label: "Full Name",
      icon: <User className="w-4 h-4" />,
      placeholder: "As per your merchant account",
      required: true,
      type: "text"
    },
    {
      id: "businessName",
      label: "Business Name (Optional)",
      icon: <Building2 className="w-4 h-4" />,
      placeholder: "Registered business name",
      required: false,
      type: "text"
    },
    {
      id: "mobile",
      label: "Registered Mobile Number",
      icon: <Smartphone className="w-4 h-4" />,
      placeholder: "10-digit mobile number",
      required: true,
      type: "tel"
    },
    {
      id: "email",
      label: "Registered Email Address (Optional)",
      icon: <Mail className="w-4 h-4" />,
      placeholder: "you@example.com",
      required: false,
      type: "email"
    },
    {
      id: "merchantId",
      label: "Merchant ID (Optional)",
      icon: <Hash className="w-4 h-4" />,
      placeholder: "Found on your dashboard",
      required: false,
      type: "text"
    }
  ];

  const processSteps = [
    {
      title: "Verify your identity",
      desc: "We confirm the request came from the registered account owner.",
      icon: <ShieldAlert className="w-5 h-5" />
    },
    {
      title: "Review your merchant account",
      desc: "Our team reviews your account status and history.",
      icon: <FileSearch className="w-5 h-5" />
    },
    {
      title: "Check outstanding items",
      desc: "We check for pending settlements, disputes, or regulatory holds.",
      icon: <ClipboardList className="w-5 h-5" />
    },
    {
      title: "Process the deletion",
      desc: "Once all requirements are met, your account is deleted.",
      icon: <Trash2 className="w-5 h-5" />
    },
    {
      title: "Confirm completion",
      desc: "You'll be notified once the deletion process is complete.",
      icon: <CheckCircle2 className="w-5 h-5" />
    }
  ];

  const deletionData = [
    { name: "Merchant profile information", icon: <User className="w-4 h-4" /> },
    { name: "Login credentials", icon: <Lock className="w-4 h-4" /> },
    { name: "Account preferences and settings", icon: <CheckCircle2 className="w-4 h-4" /> },
    { name: "Device associations", icon: <Smartphone className="w-4 h-4" /> },
    { name: "Marketing communication preferences", icon: <Mail className="w-4 h-4" /> },
    { name: "Other personal information linked to your account", icon: <Info className="w-4 h-4" /> }
  ];

  const retainedData = [
    { name: "Transaction history", icon: <History className="w-4 h-4" /> },
    { name: "Settlement records", icon: <History className="w-4 h-4" /> },
    { name: "KYC and verification records", icon: <FileSearch className="w-4 h-4" /> },
    { name: "Financial records", icon: <ClipboardList className="w-4 h-4" /> },
    { name: "Audit logs", icon: <FileSearch className="w-4 h-4" /> },
    { name: "Security logs", icon: <ShieldAlert className="w-4 h-4" /> },
    { name: "Information required by regulatory authorities", icon: <ShieldAlert className="w-4 h-4" /> }
  ];

  const preChecklist = [
    "All pending settlements have been completed.",
    "There are no unresolved disputes or chargebacks.",
    "You've downloaded any reports or transaction records you want to keep.",
    "All outstanding obligations have been fulfilled."
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:py-20 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D3CD] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <header className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-red-50 backdrop-blur-sm border border-red-100 rounded-full px-4 py-2 mb-6">
            <UserX className="w-4 h-4 text-red-500" />
            <span className="text-xs font-medium text-red-600 tracking-wider uppercase">
              Account Management
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900">Delete Your AbheePay</span>
            <br />
            <span className="bg-gradient-to-r from-[#00D3CD] to-purple-600 bg-clip-text text-transparent">
              Merchant Account
            </span>
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            At AbheePay, we respect your privacy and your right to control your personal
            information. If you no longer wish to use your AbheePay Merchant Account, you
            can request the permanent deletion of your account at any time.
          </p>
          <p className="text-slate-400 text-sm mt-4">
            Effective Date: <time dateTime="2026-08-01">01 August 2026</time>
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Account Deletion Request Form */}
            <section
              aria-labelledby="deletion-form-heading"
              className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 relative overflow-hidden group shadow-sm"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ClipboardList className="w-24 h-24 text-slate-900" />
              </div>

              <h2
                id="deletion-form-heading"
                className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3"
              >
                <div className="p-2 bg-[#00D3CD]/10 rounded-lg">
                  <ClipboardList className="w-6 h-6 text-[#00D3CD]" />
                </div>
                Request Account Deletion
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Submit an account deletion request using the form below. Fields marked
                required help us verify and process your request faster.
              </p>

              {submitted ? (
                <div className="flex items-start gap-3 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-emerald-800 font-semibold mb-1">
                      Request received
                    </p>
                    <p className="text-sm text-emerald-700/80 leading-relaxed">
                      Thank you, {form.fullName.split(" ")[0] || "there"}. Our support
                      team will verify your identity and follow up using your
                      registered contact details.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    {requiredFields.map((field) => (
                      <div
                        key={field.id}
                        className={field.id === "reason" ? "md:col-span-2" : ""}
                      >
                        <label
                          htmlFor={field.id}
                          className="text-xs font-medium text-slate-500 mb-2 flex items-center gap-2"
                        >
                          <span className="text-[#00D3CD]">{field.icon}</span>
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          value={form[field.id]}
                          onChange={handleChange(field.id)}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D3CD] focus:border-transparent transition-all"
                        />
                      </div>
                    ))}

                    <div className="md:col-span-2">
                      <label
                        htmlFor="reason"
                        className="text-xs font-medium text-slate-500 mb-2 flex items-center gap-2"
                      >
                        <span className="text-[#00D3CD]">
                          <MessageSquare className="w-4 h-4" />
                        </span>
                        Reason for Account Deletion (Optional)
                      </label>
                      <textarea
                        id="reason"
                        value={form.reason}
                        onChange={handleChange("reason")}
                        placeholder="Let us know why you're leaving — it helps us improve"
                        rows={3}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D3CD] focus:border-transparent transition-all resize-none"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-red-600 mt-4 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" /> {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="mt-6 w-full md:w-auto bg-[#00D3CD] hover:bg-[#00B5B0] text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00D3CD]/20"
                  >
                    Submit Account Deletion Request
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-700/80">
                  Our support team may contact you to verify your identity before
                  processing your request for security purposes.
                </p>
              </div>
            </section>

            {/* Alternative Method */}
            <section
              aria-labelledby="alt-method-heading"
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
            >
              <h2
                id="alt-method-heading"
                className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3"
              >
                <Mail className="w-5 h-5 text-[#00D3CD]" />
                Alternative Method
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                If you're unable to submit the online form, you can request deletion
                by emailing our support team with the subject line{" "}
                <span className="text-[#00D3CD] font-semibold">
                  "Account Deletion Request."
                </span>{" "}
                Our team may request additional information to verify your identity
                before processing your request.
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Send email to:</p>
                  <a
                    href="mailto:care@abheepay.com"
                    className="text-xl font-bold text-slate-900 hover:text-[#00D3CD] transition-colors flex items-center gap-2"
                  >
                    care@abheepay.com
                    <Sparkles className="w-4 h-4 text-[#00D3CD]" />
                  </a>
                </div>
                <a
                  href="mailto:care@abheepay.com?subject=Account Deletion Request"
                  className="bg-[#00D3CD] hover:bg-[#00B5B0] text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00D3CD]/20"
                >
                  Email Support
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </section>

            {/* What Happens After */}
            <section
              aria-labelledby="after-request-heading"
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
            >
              <h2
                id="after-request-heading"
                className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3"
              >
                <ClipboardList className="w-5 h-5 text-purple-600" />
                What Happens After Your Request?
              </h2>
              <ol className="space-y-4">
                {processSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#00D3CD] shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <p className="text-slate-900 font-medium text-sm">
                        {i + 1}. {step.title}
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Data Deletion & Retention Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <section
                aria-labelledby="deleted-data-heading"
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#00D3CD]/30 transition-colors shadow-sm"
              >
                <h2
                  id="deleted-data-heading"
                  className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                  Data That Will Be Deleted
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Once your request is approved, we'll delete or deactivate personal
                  information no longer required for legal or operational purposes,
                  including:
                </p>
                <ul className="space-y-3">
                  {deletionData.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <span className="text-[#00D3CD]">{item.icon}</span>
                      <span className="text-sm text-slate-700">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                aria-labelledby="retained-data-heading"
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-purple-300 transition-colors shadow-sm"
              >
                <h2
                  id="retained-data-heading"
                  className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3"
                >
                  <ShieldAlert className="w-5 h-5 text-purple-600" />
                  Data That May Be Retained
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Certain information may be retained where required for legal,
                  regulatory, fraud-prevention, dispute-resolution, taxation,
                  accounting, or security purposes, including:
                </p>
                <ul className="space-y-3">
                  {retainedData.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 p-3 bg-slate-50/50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <span className="text-purple-500">{item.icon}</span>
                      <span className="text-sm text-slate-700">{item.name}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-slate-400 mt-6 leading-relaxed">
                  *Retained data is securely stored and used only for legal,
                  compliance, security, and regulatory purposes, and deleted after the
                  legally required retention period.
                </p>
              </section>
            </div>

            {/* Before You Delete */}
            <section
              aria-labelledby="before-delete-heading"
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
            >
              <h2
                id="before-delete-heading"
                className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Before You Delete Your Account
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Before submitting your request, please make sure that:
              </p>
              <ul className="space-y-3 mb-6">
                {preChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00D3CD] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-6">
                Please note that deleting your account may permanently remove access
                to the Merchant App, dashboard, reports, and related services.
              </p>
            </section>
          </div>

          {/* Right Column: Timeline & Info */}
          <aside className="space-y-8">
            {/* Timeline Card */}
            <div className="bg-gradient-to-br from-[#00D3CD] to-[#008B88] rounded-3xl p-8 relative overflow-hidden group shadow-lg">
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <Clock className="w-32 h-32 text-white" />
              </div>
              <div className="relative">
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Processing Time
                </h2>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  Eligible requests are processed after successful identity
                  verification and completion of the required review, typically
                  within:
                </p>
                <div className="text-4xl font-black text-white flex items-baseline gap-2">
                  7-15
                  <span className="text-lg font-medium opacity-80">
                    Business Days
                  </span>
                </div>
                <p className="text-white/80 text-xs mt-4">
                  If additional information is required, our support team will
                  contact you using your registered contact details.
                </p>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h2 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#00D3CD]" />
                Need Assistance?
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                If you have questions about deleting your account or need help
                submitting your request, our team is happy to help.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:care@abheepay.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#00D3CD] transition-all shadow-sm">
                    <Mail className="w-5 h-5 text-[#00D3CD] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">
                      Support Email
                    </p>
                    <p className="text-sm text-slate-900 font-semibold">
                      care@abheepay.com
                    </p>
                  </div>
                </a>
                <a href="tel:+918860037218" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-[#00D3CD] transition-all shadow-sm">
                    <PhoneCall className="w-5 h-5 text-[#00D3CD] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">
                      Phone Support
                    </p>
                    <p className="text-sm text-slate-900 font-semibold">
                      +91 8860037218
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Privacy Matters */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h2 className="text-slate-900 font-bold mb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#00D3CD]" />
                Your Privacy Matters
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                AbheePay is committed to protecting your personal information and
                handling account deletion requests responsibly. We process all
                requests in accordance with our{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#00D3CD] font-medium hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                and applicable legal and regulatory requirements.
              </p>
            </div>

            {/* Legal Notice */}
            <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-[11px] text-slate-500 leading-relaxed italic">
                Disclaimer: Account deletion is irreversible once processed. Any
                remaining balance or credits should be settled prior to the request.
              </p>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default AccountDeletion;
