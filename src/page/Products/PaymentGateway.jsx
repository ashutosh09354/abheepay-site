import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  KeyRound,
  Code2,
  Wallet,
  Activity,
  Check,
  ShieldCheck,
  Gauge,
  Store,
  Layers,
  Volume2,
  CreditCard,
  Landmark,
  Smartphone,
  Lock,
} from "lucide-react";

// Payment Gateway has no physical product, so the hero uses a checkout
// mockup UI instead of a packshot photo — showing what a customer sees at
// the moment of paying. Swap the copy/amount below for a real product
// screenshot whenever you have one.
const PaymentGatewayCheckoutMockup = () => (
  <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
    {/* ambient rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* floating lock, implying secure checkout */}
    <div className="absolute -right-2 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
      <Lock className="h-4 w-4 text-[#00C4C7]" />
    </div>
    <div className="absolute -left-2 bottom-20 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg shadow-[#00C4C7]/20">
      <CreditCard className="h-3.5 w-3.5 text-[#00AEB2]" />
    </div>

    {/* checkout card */}
    <div className="relative z-10 w-72 overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-[#00C4C7]/20">
      <div className="bg-[#0F172A] px-6 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7EE2E6]">
          Checkout
        </p>
        <p className="mt-1 text-2xl font-bold text-white">₹4,999.00</p>
      </div>

      <div className="space-y-3 px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Pay with
        </p>
        <div className="grid grid-cols-4 gap-2">
          <div className="flex flex-col items-center gap-1 rounded-xl border border-[#00C4C7]/40 bg-[#E9FEFF] py-2">
            <CreditCard className="h-4 w-4 text-[#0F5562]" />
            <span className="text-[9px] font-medium text-[#0F5562]">Card</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-slate-50 py-2">
            <Smartphone className="h-4 w-4 text-slate-500" />
            <span className="text-[9px] font-medium text-slate-500">UPI</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-slate-50 py-2">
            <Landmark className="h-4 w-4 text-slate-500" />
            <span className="text-[9px] font-medium text-slate-500">Bank</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-100 bg-slate-50 py-2">
            <Wallet className="h-4 w-4 text-slate-500" />
            <span className="text-[9px] font-medium text-slate-500">Wallet</span>
          </div>
        </div>

        <div className="h-9 rounded-lg border border-slate-100 bg-slate-50"></div>
        <div className="flex gap-3">
          <div className="h-9 flex-1 rounded-lg border border-slate-100 bg-slate-50"></div>
          <div className="h-9 flex-1 rounded-lg border border-slate-100 bg-slate-50"></div>
        </div>

        <div className="rounded-full bg-[#00C4C7] py-2.5 text-center text-xs font-semibold text-[#0F172A]">
          Pay ₹4,999.00
        </div>
        <p className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
          <Lock className="h-3 w-3" /> Secured & PCI DSS compliant
        </p>
      </div>
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const PaymentGateway = () => {
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
              Payment Gateway
            </h1>
            <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
              One integration. Every payment
              <br />
              method your customers use.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Accept cards, UPI, net banking, and wallets on your website or
              app with a single API. Built-in fraud checks and instant
              settlements, so you can focus on selling.
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
                to="/get-api-keys"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
              >
                <KeyRound className="h-4 w-4" />
                Get API Keys
              </Link>
            </div>
          </div>

          {/* Device */}
          <div className="flex justify-center py-6 lg:py-0">
            <PaymentGatewayCheckoutMockup />
          </div>

          {/* Floating cards */}
          <div className="flex flex-col gap-4 lg:max-w-xs">
            <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Gauge className="h-5 w-5 text-[#7EE2E6]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                Built for scale
              </p>
              <h3 className="mt-2 text-lg font-bold">99.9% uptime</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Reliable infrastructure that keeps processing payments
                through your biggest traffic spikes.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                <ShieldCheck className="h-5 w-5 text-[#00C4C7]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Bank-grade security
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                PCI DSS Level 1 compliant
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                End-to-end encryption and built-in fraud detection on every
                transaction.
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
            Why Payment Gateway works{" "}
            <span className="relative inline-block">
              for your business
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Built for websites and apps, Payment Gateway makes accepting
            payments, reconciling transactions, and going live simple and
            reliable — at any scale.
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
                      Quick Integration
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Go live with plug-and-play SDKs and plugins for web,
                      iOS, Android, and popular platforms.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                    <Code2 className="h-5 w-5" />
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
                      Every Payment Method
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Accept cards, UPI, net banking, wallets, and EMIs
                      through a single checkout flow.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                    <Wallet className="h-5 w-5" />
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
                      Real-time Settlements
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Track every transaction live and get funds settled to
                      your account on schedule.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                    <Activity className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <h3 className="text-xl font-semibold text-slate-900">
              Payment Gateway highlights
            </h3>
            <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
              <li className="flex items-start gap-3 py-4 first:pt-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Accepts 100+ payment methods including cards, UPI, and net banking.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>PCI DSS Level 1 certified security on every transaction.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Plug-and-play SDKs for web, iOS, and Android.</span>
              </li>
              <li className="flex items-start gap-3 pt-4 last:pb-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Real-time dashboard with detailed analytics and reporting.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Built for online business */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                Designed for online business
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Built to power every checkout
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Payment Gateway gives your business a fast, secure way to
                get paid online — from a single product page to a
                full-scale storefront.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8FDFF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Store className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Perfect for e-commerce checkout
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Reduce drop-offs with a fast, familiar checkout that
                supports every major payment method.
              </p>
            </div>

            <div className="rounded-3xl bg-[#EEF9FF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                <Layers className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Ideal for subscription billing
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Automate recurring charges with retries and smart dunning
                built in.
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
                One dashboard, every channel
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                See online payments from Payment Gateway alongside your
                Sound Box, QR Code, and POS Machine sales in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaymentGateway;