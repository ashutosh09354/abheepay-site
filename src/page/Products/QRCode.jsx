import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  UserPlus,
  Zap,
  Smartphone,
  Bell,
  Check,
  ShieldCheck,
  MessageCircle,
  Store,
  ShoppingBag,
  Volume2,
} from "lucide-react";

// Swap QR_CODE_IMAGE for your own product photo (e.g. an import from /assets)
// when you have a real packshot of the QR stand — this is a free-to-use
// sample in the meantime.
const QR_CODE_IMAGE =
  "https://images.unsplash.com/photo-1550482768-88b710a445fd?fm=jpg&q=80&w=900&auto=format&fit=crop";

const QRCodeDevice = () => (
  <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
    {/* ambient scan rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* corner scan brackets */}
    <div className="absolute left-2 top-2 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-[#00C4C7]/50"></div>
    <div className="absolute right-2 top-2 h-6 w-6 rounded-tr-xl border-r-2 border-t-2 border-[#00C4C7]/50"></div>
    <div className="absolute bottom-2 left-2 h-6 w-6 rounded-bl-xl border-b-2 border-l-2 border-[#00C4C7]/50"></div>
    <div className="absolute bottom-2 right-2 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-[#00C4C7]/50"></div>

    {/* QR code photo */}
    <div className="relative z-10 w-72 overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-[#00C4C7]/20">
      <img
        src={QR_CODE_IMAGE}
        alt="QR Code payment stand for retail checkout"
        className="aspect-square w-full rounded-[1.5rem] object-cover"
        loading="lazy"
      />
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const QRCode = () => {
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
              QR Code
            </h1>
            <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
              Instant payments. Zero hardware.
              <br />
              Every scan counts.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              A durable, weatherproof QR stand that lets customers pay you
              instantly from any UPI app. No terminals, no setup fees — just
              print, place, and start getting paid.
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

          {/* Device */}
          <div className="flex justify-center py-6 lg:py-0">
            <QRCodeDevice />
          </div>

          {/* Floating cards */}
          <div className="flex flex-col gap-4 lg:max-w-xs">
            <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                Zero hardware
              </p>
              <h3 className="mt-2 text-lg font-bold">Built for every counter</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                No terminals or monthly rentals. Just a printed code that
                works from day one.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                <Bell className="h-5 w-5 text-[#00C4C7]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Instant confirmation
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Know the moment you're paid
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Get real-time SMS and voice alerts the second a payment
                lands.
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
            Why QR Code works{" "}
            <span className="relative inline-block">
              for your business
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Built for retail and small business checkout, QR Code makes
            accepting payments simple, instant, and reliable — with nothing
            to install and nothing to charge.
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
                      Instant Setup
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Activate your QR code in minutes — no paperwork,
                      installation, or waiting required.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                    <Zap className="h-5 w-5" />
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
                      All-App Compatible
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Works with every UPI app, so customers can pay however
                      they already do.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                    <Smartphone className="h-5 w-5" />
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
                      Real-time Alerts
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Get instant voice and SMS confirmation the moment a
                      payment is received.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                    <Bell className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <h3 className="text-xl font-semibold text-slate-900">
              QR Code highlights
            </h3>
            <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
              <li className="flex items-start gap-3 py-4 first:pt-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Zero cost, zero maintenance QR stand.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Weatherproof, scratch-resistant printing that lasts.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Works with all major UPI and payment apps.</span>
              </li>
              <li className="flex items-start gap-3 pt-4 last:pb-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>
                  Instant payment confirmation via SMS and voice alerts.
                </span>
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
                Designed for retail
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Built to fit every counter
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                QR Code gives your business a professional, always-on way to
                get paid — no matter how small the counter or how big the
                queue.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8FDFF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Perfect for checkout counters
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Place it by the register so customers can scan and pay in
                seconds, no queueing for card machines.
              </p>
            </div>

            <div className="rounded-3xl bg-[#EEF9FF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                <Store className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Ideal for small stalls & carts
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Lightweight and portable, it travels with you from market
                stalls to pop-up events.
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
                Pairs with Sound Box
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Connect your QR Code to a Sound Box for an instant voice
                announcement every time a customer pays.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QRCode;