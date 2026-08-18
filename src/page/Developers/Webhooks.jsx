
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  RefreshCw,
  GitBranch,
  TrendingDown,
  Activity,
  Database,
  CheckCircle2,
  XCircle,
  Send,
  Receipt,
  Wallet,
  QrCode,
  Smartphone,
  Fingerprint,
  ShieldCheck,
  Copy,
  ScrollText,
  Lock,
  FileText,
  FlaskConical,
  Package,
  Terminal,
  AlertTriangle,
  LifeBuoy,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// SEO: sets document title, meta tags, canonical URL, and JSON-LD structured
// data. Implemented with a plain useEffect (no react-helmet dependency) so
// it works regardless of what's installed in the project.
// ---------------------------------------------------------------------------
const SEO = ({ title, description, canonicalUrl, jsonLd }) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const upsertMeta = (attr, key, value) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', value);
      return tag;
    };

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);

    let canonicalTag;
    if (canonicalUrl) {
      canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', canonicalUrl);
      upsertMeta('property', 'og:url', canonicalUrl);
    }

    const scripts = [];
    if (jsonLd) {
      (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).forEach((entry) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(entry);
        document.head.appendChild(script);
        scripts.push(script);
      });
    }

    return () => {
      document.title = previousTitle;
      scripts.forEach((s) => document.head.removeChild(s));
    };
  }, [title, description, canonicalUrl, jsonLd]);

  return null;
};

const Webhooks = () => {
  const benefits = [
    { text: 'Receive instant event notifications', icon: Zap },
    { text: 'Update payment status automatically', icon: RefreshCw },
    { text: 'Trigger business workflows', icon: GitBranch },
    { text: 'Reduce unnecessary API requests', icon: TrendingDown },
    { text: 'Improve application performance', icon: Activity },
    { text: 'Keep customer data synchronized', icon: Database },
  ];

  const events = [
    { name: 'Payment Success', icon: CheckCircle2 },
    { name: 'Payment Failure', icon: XCircle },
    { name: 'Refund Updates', icon: RefreshCw },
    { name: 'Payout Status', icon: Send },
    { name: 'BBPS Transaction Status', icon: Receipt },
    { name: 'Wallet Transaction Updates', icon: Wallet },
    { name: 'QR Payment Notifications', icon: QrCode },
    { name: 'Recharge Status', icon: Smartphone },
    { name: 'Aadhaar Verification Status', icon: Fingerprint },
  ];

  const steps = [
    { title: 'Configure your webhook URL', description: 'Set the endpoint where AbheePay should send event notifications.' },
    { title: 'Select the events you want to receive', description: 'Choose which event categories to subscribe to.' },
    { title: 'Receive event notifications from AbheePay', description: 'Events are delivered to your endpoint as they occur.' },
    { title: 'Verify the webhook request', description: 'Confirm the request originated from AbheePay before processing.' },
    { title: 'Process the event within your application', description: 'Update records, trigger workflows, or notify users.' },
    { title: 'Return a successful response to confirm receipt', description: 'Acknowledge the event so AbheePay knows it was delivered.' },
  ];

  const bestPractices = [
    { text: 'Always verify webhook authenticity.', icon: ShieldCheck },
    { text: 'Return HTTP success responses after processing.', icon: CheckCircle2 },
    { text: 'Handle duplicate events safely.', icon: Copy },
    { text: 'Implement retry handling.', icon: RefreshCw },
    { text: 'Log webhook events for troubleshooting.', icon: ScrollText },
    { text: 'Secure your webhook endpoint using HTTPS.', icon: Lock },
  ];

  const resources = [
    { name: 'API Documentation', icon: FileText },
    { name: 'Sandbox Environment', icon: FlaskConical },
    { name: 'SDKs', icon: Package },
    { name: 'Postman Collection', icon: Terminal },
    { name: 'Error Codes', icon: AlertTriangle },
    { name: 'Release Notes', icon: ScrollText },
    { name: 'Technical Support', icon: LifeBuoy },
  ];

  const faqs = [
    {
      question: 'What are Webhooks?',
      answer: 'Webhooks are automated HTTP notifications sent from AbheePay to your application whenever selected events occur.',
    },
    {
      question: 'Do I need Webhooks?',
      answer: 'Webhooks are recommended if your application requires real-time updates without continuously polling the API.',
    },
    {
      question: 'Can I test Webhooks?',
      answer: 'Yes. Developers can simulate webhook events using the Sandbox environment before moving to production.',
    },
    {
      question: 'Are Webhooks secure?',
      answer: 'Yes. Developers should validate incoming webhook requests and follow the security recommendations provided in the documentation.',
    },
    {
      question: 'Where can I find webhook payload examples?',
      answer: 'Sample webhook payloads, event structures, and implementation guides are available in the API Documentation.',
    },
  ];

  const pageTitle = 'Webhooks Documentation | AbheePay Developer Hub';
  const pageDescription =
    'Learn how to use AbheePay Webhooks to receive real-time API event notifications for payments, payouts, bill payments, QR transactions, and other supported services.';
  const canonicalUrl = 'https://www.abheepay.com/developer-hub/webhooks';

  return (
    <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-24">
        <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.2),_transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">
            Webhooks
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Receive Real-Time API Event Notifications
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            AbheePay Webhooks allow your application to receive real-time event notifications whenever important activities occur within our platform. Instead of repeatedly checking API endpoints, your application can automatically receive updates as events happen.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Webhooks help developers automate business workflows, update application data, and improve the overall user experience.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Whether you're integrating the Payment Gateway API, Payout API, BBPS API, Wallet API, QR API, Recharge API, or Aadhaar Verification API, webhooks provide instant notifications for supported events.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* <Link to="/developer-hub/webhooks-guide" className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#0cc9cb]">
              View Webhook Documentation
            </Link>
            <Link to="/developer-hub/api-reference" className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#0A9B9F] hover:text-[#0A9B9F]">
              View API Reference
            </Link> */}
          </div>
        </div>
      </section>

      {/* Why Use Webhooks */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Why Use Webhooks?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Webhooks eliminate the need for continuous API polling and allow your application to respond automatically to important events. Using Webhooks, you can:
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li key={benefit.text} className="flex items-start gap-3 rounded-2xl bg-[#F8FEFF] p-4">
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00C4C7]" />
                  <span className="text-sm font-medium leading-6 text-slate-700">{benefit.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Supported Events */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Supported Events</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Webhooks are available across multiple AbheePay APIs. Supported event categories include:
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <div key={event.name} className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white p-5 shadow-md shadow-slate-200/30">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#E9FEFF] text-[#0F5562]">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-slate-800">{event.name}</span>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-600">
          Additional events may be available depending on the API service being used.
        </p>
      </section>

      {/* How Webhooks Work */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">How Webhooks Work</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Getting started with Webhooks is simple.
          </p>
        </div>
        <ol className="mx-auto mt-10 max-w-3xl space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/30">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#00C4C7] text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{step.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-600">
          For complete payload formats and implementation examples, refer to the API Documentation.
        </p>
      </section>

      {/* Best Practices */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Best Practices</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            To build a reliable webhook integration:
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {bestPractices.map((practice) => {
              const Icon = practice.icon;
              return (
                <li key={practice.text} className="flex items-start gap-3 rounded-2xl bg-[#F8FEFF] p-4">
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00C4C7]" />
                  <span className="text-sm font-medium leading-6 text-slate-700">{practice.text}</span>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-sm leading-7 text-slate-600">
            Following these practices helps ensure reliable communication between your application and the AbheePay platform.
          </p>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Developer Resources</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Additional resources are available to help with webhook integration.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div key={resource.name} className="flex items-center gap-3 rounded-2xl bg-[#F8FEFF] p-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#0F5562] shadow-sm">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{resource.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-24 pt-4 text-center sm:px-8 lg:px-10">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#00C4C7] to-[#0A9B9F] px-8 py-14 shadow-xl shadow-[#00C4C7]/25">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Build Real-Time Integrations</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Use AbheePay Webhooks to automate workflows, receive instant event notifications, and keep your applications synchronized with real-time transaction updates.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* <Link to="/developer-hub/get-access" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A9B9F] transition hover:bg-white/90">
              Get Started
            </Link>
            <Link to="/developer-hub/webhooks-guide" className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View Webhook Documentation
            </Link> */}
            <Link to="/company/contact-us" className="inline-flex items-center justify-center px-2 py-3 text-sm font-semibold text-white underline underline-offset-4 transition hover:text-white/80">
              Contact Developer Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Webhooks;