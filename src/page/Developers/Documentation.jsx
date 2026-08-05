import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, Code2, ShieldCheck } from 'lucide-react';

const Documentation = () => {
  const cards = [
    {
      title: 'API Reference',
      description: 'Detailed request and response examples for every AbheePay endpoint.',
      icon: FileText,
    },
    {
      title: 'Quick Start',
      description: 'Authenticate, make your first payment, and test flows in minutes.',
      icon: BookOpen,
    },
    {
      title: 'Best Practices',
      description: 'Secure integration patterns, retry logic, and reconciliation workflows.',
      icon: ShieldCheck,
    },
    {
      title: 'SDK Guides',
      description: 'Code samples for Node, Python, mobile, and frontend integrations.',
      icon: Code2,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-24">
        <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.2),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="max-w-2xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">
                Developer Hub
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Developer documentation for every AbheePay integration.
              </h1>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Explore comprehensive guides, endpoint details, authentication flow, and examples for payments, wallets, QR, payouts, and Aadhaar.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/developers/sdk" className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#0cc9cb]">
                  View SDK Guides
                </Link>
                <Link to="/developers/support" className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#0A9B9F] hover:text-[#0A9B9F]">
                  Contact Support
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="rounded-[1.75rem] border border-white/80 bg-white p-7 shadow-xl shadow-slate-200/40">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E9FEFF] text-[#0F5562]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-6 text-xl font-bold text-slate-900">{card.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">What you’ll find here</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-[#F8FEFF] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Authentication</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">API key setup, sandbox tokens, and secure request signing.</p>
            </div>
            <div className="rounded-3xl bg-[#F8FEFF] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Endpoints</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">Payment, wallet, QR, payout, and Aadhaar endpoint usage explained.</p>
            </div>
            <div className="rounded-3xl bg-[#F8FEFF] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Examples</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">Request payloads and sample responses for real-world flows.</p>
            </div>
            <div className="rounded-3xl bg-[#F8FEFF] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Error handling</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">Troubleshoot common issues with retry and response guidance.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Documentation;
