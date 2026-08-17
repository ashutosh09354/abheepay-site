// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Send, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

// const Postman = () => {
//   const cards = [
//     {
//       title: 'Ready Collections',
//       description: 'Import prebuilt AbheePay collections and start testing instantly.',
//       icon: Send,
//     },
//     {
//       title: 'Environment Variables',
//       description: 'Use sandbox credentials and environment variables for fast setup.',
//       icon: FileText,
//     },
//     {
//       title: 'API Examples',
//       description: 'Explore payment, wallet, QR, and Aadhaar requests with sample payloads.',
//       icon: ArrowRight,
//     },
//     {
//       title: 'Security Notes',
//       description: 'Learn how to protect your API key and validate responses securely.',
//       icon: ShieldCheck,
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-24">
//         <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.2),_transparent_55%)]" />
//         <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
//           <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
//             <div className="max-w-2xl space-y-6">
//               <span className="inline-flex items-center gap-2 rounded-full bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">
//                 Developer Hub
//               </span>
//               <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
//                 Postman collections for every AbheePay flow.
//               </h1>
//               <p className="text-base leading-8 text-slate-600 sm:text-lg">
//                 Test your integration with preconfigured requests, environments, and documentation right inside Postman.
//               </p>
//               <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
//                 <Link to="/developers/documentation" className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#0cc9cb]">
//                   View API Docs
//                 </Link>
//                 <Link to="/developers/support" className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#0A9B9F] hover:text-[#0A9B9F]">
//                   Need Help
//                 </Link>
//               </div>
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               {cards.map((card) => {
//                 const Icon = card.icon;
//                 return (
//                   <div key={card.title} className="rounded-[1.75rem] border border-white/80 bg-white p-7 shadow-xl shadow-slate-200/40">
//                     <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#E9FEFF] text-[#0F5562]">
//                       <Icon className="h-5 w-5" />
//                     </div>
//                     <h2 className="mt-6 text-xl font-bold text-slate-900">{card.title}</h2>
//                     <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
//         <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
//           <h2 className="text-2xl font-bold text-slate-900">Developer-ready collections</h2>
//           <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//             <div className="rounded-3xl bg-[#F8FEFF] p-6">
//               <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Sandbox setup</p>
//               <p className="mt-4 text-sm leading-7 text-slate-600">Load environment variables and sandbox keys for safe testing.</p>
//             </div>
//             <div className="rounded-3xl bg-[#F8FEFF] p-6">
//               <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Prebuilt flows</p>
//               <p className="mt-4 text-sm leading-7 text-slate-600">Use ready-made requests for payments, refunds, and payouts.</p>
//             </div>
//             <div className="rounded-3xl bg-[#F8FEFF] p-6">
//               <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Response examples</p>
//               <p className="mt-4 text-sm leading-7 text-slate-600">See sample success and error payloads as you test.</p>
//             </div>
//             <div className="rounded-3xl bg-[#F8FEFF] p-6">
//               <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Sharing</p>
//               <p className="mt-4 text-sm leading-7 text-slate-600">Share collections with teammates for consistent integration work.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Postman;


























import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Code2,
  CheckCircle2,
  KeyRound,
  GitBranch,
  Compass,
  CreditCard,
  Send,
  Receipt,
  Wallet,
  QrCode,
  Smartphone,
  Fingerprint,
  Settings2,
  FileText,
  BookOpen,
  FlaskConical,
  Webhook,
  AlertTriangle,
  Lock,
  Layers,
  ShieldCheck,
  RefreshCw,
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

const Postman = () => {
  const benefits = [
    { text: 'Test API endpoints quickly', icon: Zap },
    { text: 'Send requests without writing code', icon: Code2 },
    { text: 'Validate API responses', icon: CheckCircle2 },
    { text: 'Verify authentication', icon: KeyRound },
    { text: 'Test business workflows', icon: GitBranch },
    { text: 'Explore supported API features', icon: Compass },
  ];

  const apis = [
    { name: 'Payment Gateway API', icon: CreditCard },
    { name: 'Payout API', icon: Send },
    { name: 'BBPS API', icon: Receipt },
    { name: 'Wallet API', icon: Wallet },
    { name: 'QR API', icon: QrCode },
    { name: 'Recharge API', icon: Smartphone },
    { name: 'Aadhaar Verification API', icon: Fingerprint },
  ];

  const steps = [
    { title: 'Download the AbheePay Postman Collection', description: 'Grab the latest collection file from the Developer Hub.' },
    { title: 'Import the collection into Postman', description: 'Load it into your Postman workspace in a few clicks.' },
    { title: 'Configure your API credentials and environment variables', description: 'Add your Sandbox or Production keys to the environment.' },
    { title: 'Select the required API request', description: 'Pick the endpoint you want to test from the collection.' },
    { title: 'Send the request and review the response', description: 'Run the call and inspect the returned data.' },
    { title: 'Continue testing your application before moving to production', description: 'Repeat across flows until you\'re confident in the integration.' },
  ];

  const includedResources = [
    { name: 'Environment Variables', icon: Settings2 },
    { name: 'Sample API Requests', icon: Code2 },
    { name: 'Sample API Responses', icon: FileText },
    { name: 'Authentication Examples', icon: KeyRound },
    { name: 'API Documentation', icon: BookOpen },
    { name: 'Sandbox Environment', icon: FlaskConical },
    { name: 'Webhook Testing', icon: Webhook },
    { name: 'Error Code Reference', icon: AlertTriangle },
  ];

  const bestPractices = [
    { text: 'Use Sandbox credentials while testing.', icon: FlaskConical },
    { text: 'Store API credentials securely.', icon: Lock },
    { text: 'Configure separate Sandbox and Production environments.', icon: Layers },
    { text: 'Test all success and failure scenarios.', icon: CheckCircle2 },
    { text: 'Validate response data before deployment.', icon: ShieldCheck },
    { text: 'Keep your Postman Collection updated with the latest API version.', icon: RefreshCw },
  ];

  const faqs = [
    {
      question: 'What is the AbheePay Postman Collection?',
      answer: 'It is a ready-to-use collection of API requests that allows developers to test AbheePay APIs directly within Postman.',
    },
    {
      question: 'Do I need programming knowledge to use it?',
      answer: 'Basic understanding of APIs and Postman is recommended, but the collection is designed to simplify testing with pre-configured requests.',
    },
    {
      question: 'Can I test all AbheePay APIs?',
      answer: 'Yes. Separate requests are available for supported APIs, including Payment Gateway, Payout, BBPS, Wallet, QR, Recharge, and Aadhaar Verification.',
    },
    {
      question: 'Can I use the Postman Collection with the Sandbox?',
      answer: 'Yes. The collection is fully compatible with the Sandbox environment for testing before production.',
    },
    {
      question: 'Where can I get help?',
      answer: 'If you need assistance, refer to the API Documentation or contact the AbheePay Developer Support team.',
    },
  ];

  const pageTitle = 'Postman Collection | AbheePay Developer Hub';
  const pageDescription =
    'Download the AbheePay Postman Collection to test Payment Gateway, Payout, BBPS, Wallet, QR, Recharge, and Aadhaar Verification APIs quickly and efficiently.';
  const canonicalUrl = 'https://www.abheepay.com/developer-hub/postman-collection';

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
            Postman Collection
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Test AbheePay APIs with Postman
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            The AbheePay Postman Collection helps developers test and explore our APIs without writing application code. Import the collection into Postman, configure your API credentials, and start sending requests to the Sandbox or Production environment.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Whether you are integrating the Payment Gateway API, Payout API, BBPS API, Wallet API, QR API, Recharge API, or Aadhaar Verification API, the Postman Collection provides a fast and convenient way to validate your API integration.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* <Link to="/developer-hub/postman-download" className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#0cc9cb]">
              Download Postman Collection
            </Link>
            <Link to="/developer-hub/documentation" className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#0A9B9F] hover:text-[#0A9B9F]">
              View Documentation
            </Link> */}
          </div>
        </div>
      </section>

      {/* Why Use the Postman Collection */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Why Use the Postman Collection?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The AbheePay Postman Collection simplifies API testing and reduces development time. With the collection, you can:
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
          <p className="mt-8 text-sm leading-7 text-slate-600">
            It is ideal for developers during the planning, testing, and integration stages.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What's Included?</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            The Postman Collection includes ready-to-use requests for supported AbheePay APIs. Available collections include:
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apis.map((api) => {
            const Icon = api.icon;
            return (
              <div key={api.name} className="rounded-[1.5rem] border border-white/80 bg-white p-6 shadow-xl shadow-slate-200/40">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E9FEFF] text-[#0F5562]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{api.name}</h3>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-600">
          Each collection contains pre-configured requests to help you start testing immediately.
        </p>
      </section>

      {/* Getting Started */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Getting Started</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Follow these simple steps to begin testing.
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
      </section>

      {/* Included Resources */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Included Resources</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            The Postman Collection works alongside other developer resources. You'll also have access to:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {includedResources.map((resource) => {
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
          <p className="mt-8 text-sm leading-7 text-slate-600">
            Together, these resources help streamline development and testing.
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Best Practices</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            For the best development experience:
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Start Testing with Postman</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Download the AbheePay Postman Collection and accelerate your API integration with ready-to-use requests, sample responses, and developer-friendly testing tools.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/company/contact-us" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A9B9F] transition hover:bg-white/90">
              Get Started
            </Link>
            {/* <Link to="/developer-hub/postman-download" className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Download Postman Collection
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

export default Postman;
