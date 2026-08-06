import React from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";

// Swap DIGITAL_INVOICE_IMAGE for your own product screenshot (e.g. an
// import from /assets) when you have one — this is a free-to-use sample
// photo in the meantime.
const DIGITAL_INVOICE_IMAGE =
  "/assets/image/services/digitalinvoice.png";

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

const DigitalInvoice = () => {
  return (
    <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
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
              Professional invoices.
              <br />
              Sent, tracked, paid — in minutes.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
              Create branded invoices in seconds and send them by email,
              WhatsApp, or SMS. Customers pay directly from the invoice, and
              you get notified the moment they do.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
              >
                <Phone className="h-4 w-4" />
                Talk to Sales
              </Link>
              <Link
                to="/join-as-retailer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
              >
                <UserPlus className="h-4 w-4" />
                Join as Retailer
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
                Add your logo, business details, and GST info to every
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
                <span>Branded, GST-ready invoice templates.</span>
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

      {/* Built for business */}
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
    </main>
  );
};

export default DigitalInvoice;