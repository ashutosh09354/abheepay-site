import React from 'react';
import { Link } from 'react-router-dom';
import { Link2, ShieldCheck, Zap, Server } from 'lucide-react';

const Webhooks = () => {
  const cards = [
    {
      title: 'Event Delivery',
      description: 'Receive real-time updates for payments, settlements, and refunds.',
      icon: Zap,
    },
    {
      title: 'Secure Signing',
      description: 'Validate payloads using HMAC signatures with your webhook secret.',
      icon: ShieldCheck,
    },
    {
      title: 'Retry Policies',
      description: 'Handle temporary failures with intelligent retry and backoff logic.',
      icon: Server,
    },
    {
      title: 'Endpoint Management',
      description: 'Configure and test webhook URLs directly from the Developer Hub.',
      icon: Link2,
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
                Webhooks that keep your systems in sync.
              </h1>
              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Get instant notifications for payment and account events, with secure signing and retry support built in.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/developers/documentation" className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#0cc9cb]">
                  Webhooks Guide
                </Link>
                <Link to="/developers/support" className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#0A9B9F] hover:text-[#0A9B9F]">
                  Support
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
          <h2 className="text-2xl font-bold text-slate-900">Webhook essentials</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-[#F8FEFF] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Fast delivery</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">Receive events within seconds of every transaction update.</p>
            </div>
            <div className="rounded-3xl bg-[#F8FEFF] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Signed payloads</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">Protect your endpoints with HMAC verification on every message.</p>
            </div>
            <div className="rounded-3xl bg-[#F8FEFF] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Retry support</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">Never miss an event thanks to intelligent retry handling.</p>
            </div>
            <div className="rounded-3xl bg-[#F8FEFF] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Event catalog</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">All webhook event types documented for payments, refunds, and settlements.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Webhooks;
