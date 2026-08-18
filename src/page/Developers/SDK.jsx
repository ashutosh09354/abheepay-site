
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileCode2,
  Coffee,
  Code2,
  Terminal,
  Box,
  Smartphone,
  Tablet,
  CreditCard,
  Send,
  Receipt,
  Wallet,
  QrCode,
  Fingerprint,
  ListChecks,
  KeyRound,
  AlertTriangle,
  GitBranch,
  RefreshCw,
  CheckCircle2,
  FileText,
  FlaskConical,
  Webhook,
  Package,
  ScrollText,
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

const SDK = () => {
  const sdks = [
    { name: 'PHP SDK', icon: FileCode2 },
    { name: 'Java SDK', icon: Coffee },
    { name: 'Node.js SDK', icon: Code2 },
    { name: 'Python SDK', icon: Terminal },
    { name: '.NET SDK', icon: Box },
    { name: 'Android SDK', icon: Smartphone },
    { name: 'iOS SDK', icon: Tablet },
  ];

  const supportedApis = [
    { name: 'Payment Gateway API', icon: CreditCard },
    { name: 'Payout API', icon: Send },
    { name: 'BBPS API', icon: Receipt },
    { name: 'Wallet API', icon: Wallet },
    { name: 'QR API', icon: QrCode },
    { name: 'Recharge API', icon: Smartphone },
    { name: 'Aadhaar Verification API', icon: Fingerprint },
  ];

  const included = [
    {
      title: 'Installation Guide',
      description: 'Step-by-step instructions to install and configure the SDK.',
      icon: ListChecks,
    },
    {
      title: 'Sample Code',
      description: 'Ready-to-use examples for common API requests and responses.',
      icon: Code2,
    },
    {
      title: 'Authentication Support',
      description: 'Built-in methods for secure API authentication.',
      icon: KeyRound,
    },
    {
      title: 'Error Handling',
      description: 'Standard response handling and error management examples.',
      icon: AlertTriangle,
    },
    {
      title: 'Version Compatibility',
      description: 'Information about supported SDK versions and API compatibility.',
      icon: GitBranch,
    },
    {
      title: 'Regular Updates',
      description: 'SDKs are updated to support new features, improvements, and API enhancements.',
      icon: RefreshCw,
    },
  ];

  const benefits = [
    'Reduce development time',
    'Simplify API integration',
    'Follow recommended implementation practices',
    'Improve application reliability',
    'Maintain compatibility with future API updates',
  ];

  const faqs = [
    {
      question: 'What is an SDK?',
      answer: 'A Software Development Kit (SDK) is a collection of libraries, tools, and sample code that helps developers integrate APIs more efficiently.',
    },
    {
      question: 'Do I have to use an SDK?',
      answer: 'No. You can integrate directly using REST APIs. SDKs are provided to simplify development and reduce coding effort.',
    },
    {
      question: 'Which programming languages are supported?',
      answer: 'AbheePay provides SDKs for supported programming languages and platforms. Please check the latest availability in the Developer Hub.',
    },
    {
      question: 'Are sample projects included?',
      answer: 'Yes. SDK packages include sample code and implementation examples to help developers get started.',
    },
    {
      question: 'How do I get technical support?',
      answer: 'Our developer support team is available to assist with SDK installation, API integration, and troubleshooting.',
    },
  ];

  const resources = [
    { name: 'API Documentation', icon: FileText },
    { name: 'Sandbox Environment', icon: FlaskConical },
    { name: 'Webhooks', icon: Webhook },
    { name: 'Postman Collection', icon: Package },
    { name: 'Release Notes', icon: ScrollText },
    { name: 'Developer Support', icon: LifeBuoy },
  ];

  const pageTitle = 'API SDKs for Faster Integration | AbheePay Developer Hub';
  const pageDescription =
    'Download AbheePay SDKs to integrate Payment Gateway, Payout, BBPS, Wallet, QR, Recharge, and Aadhaar Verification APIs into your applications quickly and efficiently.';
  const canonicalUrl = 'https://www.abheepay.com/developer-hub/sdk';

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
            SDKs for Faster API Integration
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Build Faster with AbheePay SDKs
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            The AbheePay SDKs help developers integrate our APIs into websites, mobile applications, and enterprise software with less development effort. Instead of building API requests from scratch, use our SDKs to simplify authentication, request handling, and response processing.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Our SDKs are designed to accelerate development while maintaining security and reliability.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* <Link to="/developer-hub/sdk-downloads" className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#0cc9cb]">
              Download SDK
            </Link>
            <Link to="/developer-hub/documentation" className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#0A9B9F] hover:text-[#0A9B9F]">
              View Documentation
            </Link> */}
          </div>
        </div>
      </section>

      {/* Available SDKs */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Available SDKs</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Choose the SDK that matches your development environment.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sdks.map((sdk) => {
            const Icon = sdk.icon;
            return (
              <div key={sdk.name} className="rounded-[1.5rem] border border-white/80 bg-white p-6 shadow-xl shadow-slate-200/40">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E9FEFF] text-[#0F5562]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{sdk.name}</h3>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-600">
          We regularly update our SDKs to support new features and API improvements.
        </p>
      </section>

      {/* Supported APIs */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Supported APIs</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The AbheePay SDKs support integration with:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportedApis.map((api) => {
              const Icon = api.icon;
              return (
                <div key={api.name} className="flex items-center gap-3 rounded-2xl bg-[#F8FEFF] p-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#0F5562] shadow-sm">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{api.name}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-sm leading-7 text-slate-600">
            Each SDK includes methods that simplify common API operations and reduce development time.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What's Included</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Every SDK package contains everything needed to begin integration.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {included.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/30">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#E9FEFF] text-[#0F5562]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0F5562]">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Use an SDK */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Why Use an SDK?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Using an SDK helps developers:</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 rounded-2xl bg-[#F8FEFF] p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00C4C7]" />
                <span className="text-sm font-medium leading-6 text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-7 text-slate-600">
            Whether you are building a startup application or an enterprise platform, SDKs make integration faster and easier.
          </p>
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

      {/* Explore Developer Resources */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Explore Developer Resources</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Continue your integration with additional developer resources:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-24 pt-4 text-center sm:px-8 lg:px-10">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#00C4C7] to-[#0A9B9F] px-8 py-14 shadow-xl shadow-[#00C4C7]/25">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Start Integrating with AbheePay SDKs</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Download the SDK for your preferred platform and start building secure payment and business solutions with AbheePay APIs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/company/contact-us" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A9B9F] transition hover:bg-white/90">
              Get Started
            </Link>
            {/* <Link to="/developer-hub/sdk-downloads" className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Download SDK
            </Link>
            <Link to="/developer-hub/support" className="inline-flex items-center justify-center px-2 py-3 text-sm font-semibold text-white underline underline-offset-4 transition hover:text-white/80">
              Contact Developer Support
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SDK;