import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  UserPlus,
  Link2,
  Share2,
  Zap,
  Check,
  ShieldCheck,
  Eye,
  Store,
  Users,
  Volume2,
  Send,
} from "lucide-react";

// Payment Links has no physical product, so the hero uses a phone-mockup UI
// instead of a packshot photo — showing what a customer actually sees when
// a link lands in their chat. Swap the copy/amount below for real product
// screenshots whenever you have them.
const PaymentLinkPhoneMockup = () => (
  <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
    {/* ambient rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* send icon drifting off to the side, implying the link being shared */}
    <div className="absolute -right-2 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
      <Send className="h-4 w-4 text-[#00C4C7]" />
    </div>
    <div className="absolute -left-2 bottom-16 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
      <Link2 className="h-3.5 w-3.5 text-[#00AEB2]" />
    </div>

    {/* phone frame */}
    <div className="relative z-10 w-64 overflow-hidden rounded-[2.5rem] border-[6px] border-[#0F172A] bg-white shadow-2xl shadow-[#00C4C7]/20">
      {/* status bar */}
      <div className="flex items-center justify-between bg-[#0F172A] px-5 pb-2 pt-3 text-[10px] font-medium text-white/70">
        <span>9:41</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
      </div>

      {/* chat thread */}
      <div className="flex flex-col gap-3 bg-[#F1F8FA] px-4 py-5">
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[11px] leading-5 text-slate-600 shadow-sm">
          Hi! Here's your payment link for the order 🙂
        </div>

        <div className="ml-auto w-[85%] rounded-2xl rounded-tr-sm bg-[#0F172A] p-4 text-white shadow-lg">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7EE2E6]">
            Payment request
          </p>
          <p className="mt-2 text-2xl font-bold">₹1,250</p>
          <p className="mt-1 text-[11px] text-slate-300">Order #4821 · Expires in 24h</p>
          <div className="mt-3 rounded-full bg-[#00C4C7] px-4 py-2 text-center text-xs font-semibold text-[#0F172A]">
            Pay now
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1 pr-1 text-[10px] text-[#00AEB2]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00C4C7]"></span>
          Paid
        </div>
      </div>
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-56 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-44 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const PaymentLinks = () => {
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
              Payment Links
            </h1>
            <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
              One link. Every way to pay.
              <br />
              No storefront required.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Create a secure payment link in seconds and share it over
              WhatsApp, SMS, or email. Customers pay with any card or UPI
              app, no website or checkout page needed.
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
            <PaymentLinkPhoneMockup />
          </div>

          {/* Floating cards */}
          <div className="flex flex-col gap-4 lg:max-w-xs">
            <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                No storefront needed
              </p>
              <h3 className="mt-2 text-lg font-bold">Sell from anywhere</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Take orders and payments over chat, social media, or email —
                no website or POS required.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                <Eye className="h-5 w-5 text-[#00C4C7]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Real-time tracking
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                See every link's status
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Know instantly when a link is viewed, paid, or has expired.
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
            Why Payment Links work{" "}
            <span className="relative inline-block">
              for your business
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Built for sellers without a storefront, Payment Links makes
            requesting, sharing, and collecting payments simple and
            reliable — wherever the conversation happens.
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
                      Create in Seconds
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Set an amount and description, and generate a secure
                      payment link instantly.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                    <Link2 className="h-5 w-5" />
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
                      Share Anywhere
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Send it over WhatsApp, SMS, email, or social media —
                      wherever your customer already is.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                    <Share2 className="h-5 w-5" />
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
                      Get Paid Instantly
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Customers pay with any card or UPI app, and funds
                      settle straight to your account.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                    <Zap className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <h3 className="text-xl font-semibold text-slate-900">
              Payment Links highlights
            </h3>
            <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
              <li className="flex items-start gap-3 py-4 first:pt-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>No website or app required to start selling.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Works across WhatsApp, SMS, email, and social media.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Track every link: viewed, paid, or expired.</span>
              </li>
              <li className="flex items-start gap-3 pt-4 last:pb-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Auto-expiring links keep every payment secure.</span>
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
                Designed for sellers
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Built to sell without a storefront
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Payment Links gives your business a fast, professional way
                to get paid — no matter where the conversation with your
                customer starts.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8FDFF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Perfect for social sellers
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Take orders on Instagram or WhatsApp and send a payment link
                right in the chat.
              </p>
            </div>

            <div className="rounded-3xl bg-[#EEF9FF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                <Store className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Ideal for service businesses
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Freelancers, salons, and consultants can invoice and get
                paid without any hardware.
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
                Works alongside your other devices
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Pair Payment Links with your Sound Box or QR Code to get a
                voice announcement for every payment, in-store or online.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaymentLinks;