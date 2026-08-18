import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  UserPlus,
  FileText,
  Send,
  BellRing,
  Check,
  ShieldCheck,
  Repeat,
  Store,
  Briefcase,
  Volume2,
  Clock,
  Mail,
  MessageCircle,
  Smartphone,
  Download,
  Link2,
  CreditCard,
  Wallet,
  Landmark,
  QrCode,
  Building2,
  GraduationCap,
  Stethoscope,
  Plane,
  Rocket,
  ChevronDown,
  ArrowRight,
} from "lucide-react";


const DIGITAL_INVOICE_IMAGE =
  "/assets/image/services/digitalinvoice.png0";

const DigitalInvoiceVisual = () => (
  <div className="relative mx-auto flex w-full max-w-[44rem] items-center justify-center">
    {/* ambient rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* floating badges */}
    <div className="absolute -right-3 top-8 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg shadow-[#00C4C7]/20">
      <Send className="h-3.5 w-3.5 text-[#00C4C7]" />
      <span className="text-[10px] font-semibold text-[#0F5562]">Sent</span>
    </div>
    <div className="absolute -left-2 bottom-16 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
      <FileText className="h-3.5 w-3.5 text-[#00AEB2]" />
    </div>

    {/* real photo */}
    <div className="relative z-10 w-full max-w-[42rem] overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-[#00C4C7]/20">
      <img
        src={DIGITAL_INVOICE_IMAGE}
        alt="Business owner creating and sending a digital invoice from a laptop"
        className="w-full h-auto rounded-[1.5rem] object-contain"
        loading="lazy"
      />
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const INVOICE_FIELDS = [
  "Business Name & Logo",
  "Customer Information",
  "Invoice Number",
  "Invoice Date",
  "Product or Service Details",
  "Quantity & Price",
  "Tax Details",
  "Total Amount",
  "Payment Due Date",
  "Notes & Terms",
];

const SHARE_OPTIONS = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Mail, label: "Email" },
  { icon: Smartphone, label: "SMS" },
  { icon: Download, label: "PDF Download" },
  { icon: Link2, label: "Copy Invoice Link" },
];

const STATUS_TYPES = [
  "Draft Invoices",
  "Sent Invoices",
  "Paid Invoices",
  "Pending Payments",
  "Overdue Invoices",
  "Payment History",
];

const PAYMENT_METHODS = [
  { icon: QrCode, label: "UPI" },
  { icon: CreditCard, label: "Credit Cards" },
  { icon: CreditCard, label: "Debit Cards" },
  { icon: Landmark, label: "Net Banking" },
  { icon: Wallet, label: "Digital Wallets" },
  { icon: Link2, label: "Payment Links" },
];

const INDUSTRIES = [
  {
    icon: Store,
    title: "Retail Businesses",
    copy: "Generate invoices for daily sales.",
  },
  {
    icon: Briefcase,
    title: "Service Providers",
    copy: "Bill customers for professional services.",
  },
  {
    icon: UserPlus,
    title: "Freelancers & Consultants",
    copy: "Create and share invoices with clients.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    copy: "Generate fee invoices and payment requests.",
  },
  {
    icon: Stethoscope,
    title: "Hospitals & Clinics",
    copy: "Prepare invoices for consultations and healthcare services.",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    copy: "Invoice customers for bookings and travel packages.",
  },
  {
    icon: Rocket,
    title: "Startups & Enterprises",
    copy: "Manage business invoicing with one digital platform.",
  },
  {
    icon: Building2,
    title: "Startups & MSMEs",
    copy: "Simple invoicing that scales with your business.",
  },
];

const FAQS = [
  {
    q: "What is AbheePay Digital Invoice?",
    a: "AbheePay Digital Invoice is an online invoicing solution that helps businesses create, send, manage, and track professional digital invoices from one platform.",
  },
  {
    q: "Can I collect payments through my invoices?",
    a: "Yes. Customers can pay directly from the invoice using supported online payment methods such as UPI, Cards, Net Banking, Wallets, or Payment Links.",
  },
  {
    q: "Can I download my invoices?",
    a: "Yes. Invoices can be downloaded and shared in PDF format for record keeping and customer communication.",
  },
  {
    q: "Can I track invoice payments?",
    a: "Yes. You can monitor invoice status, payment history, pending invoices, and completed payments from your dashboard.",
  },
  {
    q: "Is Digital Invoice suitable for small businesses?",
    a: "Yes. It is designed for freelancers, retailers, service providers, startups, MSMEs, and enterprises that want a simple and professional invoicing solution.",
  },
  {
    q: "How do I get started?",
    a: "Contact our sales team or register with AbheePay to start creating and managing digital invoices for your business.",
  },
];

const RELATED_PRODUCTS = [
  { label: "Payment Gateway", to: "/products/payment-gateway" },
  { label: "Payment Links", to: "/products/payment-links" },
  { label: "QR Payment Solution", to: "/products/qr-payment-solution" },
  { label: "QR Sound Box", to: "/products/sound-box" },
  { label: "POS Machine", to: "/products/pos-machine" },
  { label: "Abheepay Merchant App", to: "/products/merchant-app" },
];

const FaqItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#00AEB2] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="pb-5 text-sm leading-6 text-slate-600">{a}</p>}
    </div>
  );
};

const DigitalInvoice = () => {
  return (
    <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
      <Helmet>
        <title>Digital Invoice Software for Businesses | AbheePay</title>
        <meta
          name="description"
          content="Create and share professional digital invoices with AbheePay. Generate invoices, send payment requests, track invoice status, and receive online payments from one platform."
        />
        <link
          rel="canonical"
          href="https://www.abheepay.com/products/digital-invoice"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Digital Invoice Software for Businesses | AbheePay"
        />
        <meta
          property="og:description"
          content="Create and share professional digital invoices with AbheePay. Generate invoices, send payment requests, track invoice status, and receive online payments from one platform."
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:url"
          content="https://www.abheepay.com/products/digital-invoice"
        />
        <meta
          property="og:image"
          content="https://www.abheepay.com/assets/image/services/digitalinvoice.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digital Invoice Software for Businesses | AbheePay"
        />
        <meta
          name="twitter:description"
          content="Create and share professional digital invoices with AbheePay. Generate invoices, send payment requests, track invoice status, and receive online payments from one platform."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
        <div className="relative mx-auto grid max-w-8xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_560px_300px] lg:items-center lg:px-8">
          {/* Left copy */}
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
              Product Spotlight
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Digital Invoice
            </h1>
            <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
              Create & Share Digital Invoices
              <br />
              with Ease
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
              Generate professional invoices in minutes, share them with
              customers by email, WhatsApp, or SMS, and collect payments
              through secure online payment options — from one platform.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
              >
                <FileText className="h-4 w-4" />
                Create Digital Invoice
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
              >
                <Phone className="h-4 w-4" />
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-end py-6 lg:py-0 lg:translate-x-10">
            <DigitalInvoiceVisual />
          </div>

          {/* Floating cards */}
          <div className="ml-auto flex flex-col gap-4 lg:w-[280px]">
            <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                Look professional
              </p>
              <h3 className="mt-2 text-lg font-bold">Branded from the start</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Add your logo, business details, and tax info to every
                invoice automatically.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                <BellRing className="h-5 w-5 text-[#00C4C7]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Instant confirmation
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Know the moment you're paid
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Get notified as soon as a customer opens and pays an
                invoice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Create professional invoices */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Built for billing
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Create Professional Invoices
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Generate digital invoices in just a few steps with all the
            important business and customer details, in a clean format
            that's easy for customers to understand.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INVOICE_FIELDS.map((field) => (
            <div
              key={field}
              className="flex items-start gap-3 rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/40"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-slate-700">
                {field}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Why businesses love it
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Digital Invoice works{" "}
            <span className="relative inline-block">
              for your business
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Built for businesses that bill customers directly, Digital
            Invoice makes creating, sending, and getting paid simple and
            reliable — without any paperwork.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <div className="divide-y divide-slate-100">
              <div className="flex gap-4 pb-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7] text-lg font-bold text-white">
                  1
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Create in Minutes
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Add line items, taxes, and due dates to a branded
                      invoice template instantly.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                    <FileText className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="flex gap-4 py-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-lg font-bold text-white">
                  2
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Send & Remind Automatically
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Share invoices by email, SMS, or WhatsApp, with
                      automatic reminders before they're due.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                    <Send className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#10B981] text-lg font-bold text-white">
                  3
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Recurring Billing
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Set up repeat invoices for regular customers and let
                      them go out on autopilot.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                    <Repeat className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <h3 className="text-xl font-semibold text-slate-900">
              Digital Invoice highlights
            </h3>
            <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
              <li className="flex items-start gap-3 py-4 first:pt-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Branded, tax-ready invoice templates.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Built-in "Pay now" link on every invoice.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Automatic due-date reminders to reduce late payments.</span>
              </li>
              <li className="flex items-start gap-3 pt-4 last:pb-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Track status: sent, viewed, paid, or overdue.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Share instantly + Track status */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00AEB2]">
              <Send className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Share Invoices Instantly
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Share invoices with customers through their preferred
              channel, helping you deliver faster and reduce delays in
              payment collection.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-700">
              {SHARE_OPTIONS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 shrink-0 text-[#00AEB2]" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A]/5 text-[#0F172A]">
              <Clock className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Track Invoice Status
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Real-time tracking from one dashboard helps you follow up
              with customers and improve cash flow.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-700">
              {STATUS_TYPES.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00AEB2]" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Collect payments online */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Get paid faster
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Collect Payments Online
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Customers can pay directly from the invoice using supported
            online payment options — combining invoicing with payment
            collection in one step.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PAYMENT_METHODS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-[1.5rem] border border-slate-100 bg-white p-5 text-center shadow-sm shadow-slate-200/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00AEB2]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-slate-800">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Built for every business */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
              Designed for every industry
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Built for Every Business
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Whether you issue a few invoices each month or manage
              high-volume billing, AbheePay helps you create, send, and
              track invoices with ease.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-3xl bg-[#F8FDFF] p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for business + tracked in merchant app */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                Designed for billing
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Built to get you paid on time
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Digital Invoice gives your business a fast, professional
                way to bill customers and follow up, without spreadsheets
                or paper trails.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8FDFF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Perfect for service businesses
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Freelancers and consultants can bill clients and track
                payments without any hardware.
              </p>
            </div>

            <div className="rounded-3xl bg-[#EEF9FF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Ideal for recurring clients
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Automate monthly or weekly billing so nothing slips
                through the cracks.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 lg:grid-cols-3">
            <div className="hidden lg:block"></div>
            <div className="rounded-3xl bg-[#ECFDF5] p-6 lg:col-span-2 lg:max-w-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                <Volume2 className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Tracked in your Merchant App
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Every invoice payment shows up alongside your Sound Box, QR
                Code, and POS Machine sales automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Easy integration */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A]/5 text-[#0F172A]">
                <Repeat className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Easy Integration with Your Business
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                AbheePay Digital Invoice can work alongside your existing
                business processes and payment solutions, giving customers
                a seamless payment experience directly from their invoices.
              </p>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-slate-700">
              {[
                "Generate invoices with online payment options",
                "Track invoice status and payment history",
                "Download invoice reports",
                "Integrate invoicing into your business workflow",
                "Connect with other AbheePay payment solutions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10 rounded-[2rem] bg-white px-6 shadow-xl shadow-slate-200/30 sm:px-8">
          {FAQS.map((faq, i) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* Related products */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <h2 className="text-2xl font-bold text-slate-900">
            Explore Related Solutions
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Build a complete business payment ecosystem with other
            AbheePay products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {RELATED_PRODUCTS.map((p) => (
              <Link
                key={p.label}
                to={p.to}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#F8FBFD] px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#00C4C7] hover:text-[#00AEB2]"
              >
                {p.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#0F172A] to-[#0B2E31] px-8 py-14 text-center text-white shadow-2xl shadow-slate-900/30">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Simplify Your Business Billing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Create professional invoices, collect payments online, and
            track every invoice from one platform with AbheePay Digital
            Invoice.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/30 transition hover:bg-[#14d0d4]"
            >
              <FileText className="h-4 w-4" />
              Create Digital Invoice
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalInvoice;