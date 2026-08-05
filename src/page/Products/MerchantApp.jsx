import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Download,
  BarChart3,
  Users,
  FileText,
  Check,
  ShieldCheck,
  BellRing,
  Store,
  Briefcase,
  Volume2,
  TrendingUp,
  QrCode,
  CreditCard,
} from "lucide-react";

// Merchant App has no physical product, so the hero uses a phone-dashboard
// mockup UI instead of a packshot photo — showing what the owner actually
// sees when they open the app. Swap the numbers/copy below for a real
// product screenshot whenever you have one.
const MerchantAppPhoneMockup = () => (
  <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
    {/* ambient rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* floating notification bubble */}
    <div className="absolute -right-3 top-10 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg shadow-[#00C4C7]/20">
      <BellRing className="h-3.5 w-3.5 text-[#00C4C7]" />
      <span className="text-[10px] font-semibold text-[#0F5562]">+ ₹850</span>
    </div>
    <div className="absolute -left-2 bottom-16 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
      <TrendingUp className="h-3.5 w-3.5 text-[#00AEB2]" />
    </div>

    {/* phone frame */}
    <div className="relative z-10 w-64 overflow-hidden rounded-[2.5rem] border-[6px] border-[#0F172A] bg-white shadow-2xl shadow-[#00C4C7]/20">
      {/* status bar */}
      <div className="flex items-center justify-between bg-[#0F172A] px-5 pb-2 pt-3 text-[10px] font-medium text-white/70">
        <span>9:41</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
      </div>

      {/* dashboard */}
      <div className="bg-[#0F172A] px-5 pb-6 pt-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7EE2E6]">
          Today's sales
        </p>
        <p className="mt-1 text-2xl font-bold text-white">₹18,420</p>
        <p className="mt-1 text-[10px] text-slate-300">↑ 12% vs yesterday</p>

        {/* mini bar chart */}
        <div className="mt-4 flex h-14 items-end gap-1.5">
          {[8, 14, 10, 20, 16, 26, 22].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t-sm bg-[#00C4C7]/70 last:bg-[#00C4C7]"
              style={{ height: `${h * 2}px` }}
            ></span>
          ))}
        </div>
      </div>

      {/* recent transactions */}
      <div className="space-y-3 bg-[#F1F8FA] px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Recent
        </p>
        <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#0F5562]">
              <QrCode className="h-3.5 w-3.5" />
            </span>
            <span className="text-[11px] font-medium text-slate-700">QR Code</span>
          </div>
          <span className="text-[11px] font-semibold text-[#065F46]">+ ₹1,250</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
              <CreditCard className="h-3.5 w-3.5" />
            </span>
            <span className="text-[11px] font-medium text-slate-700">POS Machine</span>
          </div>
          <span className="text-[11px] font-semibold text-[#065F46]">+ ₹4,999</span>
        </div>
      </div>
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-56 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-44 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const MerchantApp = () => {
  return (
    <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-8">
          {/* Left copy */}
          <div className="max-w-xl">
            <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
              Product Spotlight
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Merchant App
            </h1>
            <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
              Your whole business,
              <br />
              in your pocket.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Track every sale, settlement, and staff login from one app.
              See payments from your Sound Box, QR Code, POS Machine, and
              Payment Gateway the moment they land.
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
                to="/download-app"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
              >
                <Download className="h-4 w-4" />
                Download App
              </Link>
            </div>
          </div>

          {/* Device */}
          <div className="flex justify-center py-6 lg:py-0">
            <MerchantAppPhoneMockup />
          </div>

          {/* Floating cards */}
          <div className="flex flex-col gap-4 lg:max-w-xs">
            <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                All devices, one app
              </p>
              <h3 className="mt-2 text-lg font-bold">Every payment, unified</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Monitor your Sound Box, QR Code, POS Machine, and Payment
                Gateway from a single dashboard.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                <BellRing className="h-5 w-5 text-[#00C4C7]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Instant notifications
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Never miss a payment
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Get a ping the moment any payment comes in, day or night.
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
            Why Merchant App works{" "}
            <span className="relative inline-block">
              for your business
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Built for owners on the move, Merchant App makes tracking
            sales, managing staff, and reconciling settlements simple and
            reliable — from anywhere.
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
                      Real-time Dashboard
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Watch sales roll in as they happen, with a live view
                      across every payment device.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                    <BarChart3 className="h-5 w-5" />
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
                      Manage Your Team
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Add staff logins with custom roles and permissions
                      for every counter.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                    <Users className="h-5 w-5" />
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
                      Settlements & Reports
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Download detailed statements anytime for easy
                      reconciliation and filing.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                    <FileText className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <h3 className="text-xl font-semibold text-slate-900">
              Merchant App highlights
            </h3>
            <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
              <li className="flex items-start gap-3 py-4 first:pt-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Track sales across every payment device in one place.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Instant push notifications for every transaction.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Add and manage staff access with custom roles.</span>
              </li>
              <li className="flex items-start gap-3 pt-4 last:pb-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Download settlement reports anytime, anywhere.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Built for retail */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                Designed for owners
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Built to run your business from anywhere
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Merchant App gives you a complete, real-time view of your
                business — whether you're behind the counter or on the go.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8FDFF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Store className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Perfect for multi-counter stores
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                See sales from every counter and device roll up into one
                unified view.
              </p>
            </div>

            <div className="rounded-3xl bg-[#EEF9FF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Ideal for owners on the move
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Check in on sales, staff, and settlements without ever
                needing to be in-store.
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
                Works with your whole toolkit
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Sound Box, QR Code, POS Machine, Payment Links, and Payment
                Gateway all report into Merchant App automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MerchantApp;