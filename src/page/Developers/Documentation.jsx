// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FileText, BookOpen, Code2, ShieldCheck } from 'lucide-react';

// const Documentation = () => {
//   const cards = [
//     {
//       title: 'API Reference',
//       description: 'Detailed request and response examples for every AbheePay endpoint.',
//       icon: FileText,
//     },
//     {
//       title: 'Quick Start',
//       description: 'Authenticate, make your first payment, and test flows in minutes.',
//       icon: BookOpen,
//     },
//     {
//       title: 'Best Practices',
//       description: 'Secure integration patterns, retry logic, and reconciliation workflows.',
//       icon: ShieldCheck,
//     },
//     {
//       title: 'SDK Guides',
//       description: 'Code samples for Node, Python, mobile, and frontend integrations.',
//       icon: Code2,
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
//                 Developer documentation for every AbheePay integration.
//               </h1>
//               <p className="text-base leading-8 text-slate-600 sm:text-lg">
//                 Explore comprehensive guides, endpoint details, authentication flow, and examples for payments, wallets, QR, payouts, and Aadhaar.
//               </p>
//               <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
//                 <Link to="/developers/sdk" className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#0cc9cb]">
//                   View SDK Guides
//                 </Link>
//                 <Link to="/developers/support" className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#0A9B9F] hover:text-[#0A9B9F]">
//                   Contact Support
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
//           <h2 className="text-2xl font-bold text-slate-900">What you’ll find here</h2>
//           <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//             <div className="rounded-3xl bg-[#F8FEFF] p-6">
//               <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Authentication</p>
//               <p className="mt-4 text-sm leading-7 text-slate-600">API key setup, sandbox tokens, and secure request signing.</p>
//             </div>
//             <div className="rounded-3xl bg-[#F8FEFF] p-6">
//               <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Endpoints</p>
//               <p className="mt-4 text-sm leading-7 text-slate-600">Payment, wallet, QR, payout, and Aadhaar endpoint usage explained.</p>
//             </div>
//             <div className="rounded-3xl bg-[#F8FEFF] p-6">
//               <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Examples</p>
//               <p className="mt-4 text-sm leading-7 text-slate-600">Request payloads and sample responses for real-world flows.</p>
//             </div>
//             <div className="rounded-3xl bg-[#F8FEFF] p-6">
//               <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0F5562]">Error handling</p>
//               <p className="mt-4 text-sm leading-7 text-slate-600">Troubleshoot common issues with retry and response guidance.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Documentation;
















import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CreditCard,
  Send,
  Receipt,
  Wallet,
  QrCode,
  Smartphone,
  Fingerprint,
  KeyRound,
  Route,
  Code2,
  AlertTriangle,
  Webhook,
  Package,
  FlaskConical,
  FileText,
  Download,
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

const Documentation = () => {
  const apis = [
    { name: 'Payment Gateway API', icon: CreditCard },
    { name: 'Payout API', icon: Send },
    { name: 'BBPS API', icon: Receipt },
    { name: 'Wallet API', icon: Wallet },
    { name: 'QR API', icon: QrCode },
    { name: 'Recharge API', icon: Smartphone },
    { name: 'Aadhaar Verification API', icon: Fingerprint },
  ];

  const docIncludes = [
    {
      title: 'Authentication',
      description: 'Learn how to authenticate API requests securely using your API credentials.',
      icon: KeyRound,
    },
    {
      title: 'API Endpoints',
      description: 'View available endpoints for each API, supported methods, and required parameters.',
      icon: Route,
    },
    {
      title: 'Request & Response Examples',
      description: 'Understand request formats and expected responses with practical examples.',
      icon: Code2,
    },
    {
      title: 'Error Codes',
      description: 'Review common error codes, validation messages, and recommended handling methods.',
      icon: AlertTriangle,
    },
    {
      title: 'Webhooks',
      description: 'Receive real-time event notifications for payments, payouts, bill payments, and other supported services.',
      icon: Webhook,
    },
    {
      title: 'SDKs',
      description: 'Speed up development using available SDKs and integration libraries.',
      icon: Package,
    },
    {
      title: 'Sandbox Environment',
      description: 'Test your integration safely before moving to production.',
      icon: FlaskConical,
    },
  ];

  const integrationSteps = [
    { title: 'Register for API access', description: 'Sign up for an AbheePay developer account to get started.' },
    { title: 'Receive your API credentials', description: 'Get your soundbox and production API keys.' },
    { title: 'Review the API documentation', description: 'Read through endpoints, auth, and examples for your chosen API.' },
    { title: 'Integrate your chosen API', description: 'Build the integration using our docs, SDKs, and sample code.' },
    { title: 'Test in the Sandbox environment', description: 'Validate your implementation safely before going live.' },
    { title: 'Go live after verification', description: 'Move to production once testing and verification are complete.' },
  ];

const resources = [
  {
    name: 'API Documentation',
    icon: FileText,
    link: '/developers/documentation',
  },
  {
    name: 'SDK Downloads',
    icon: Download,
    link: '/developers/sdk',
  },
  {
    name: 'Soundbox Environment',
    icon: FlaskConical,
    link: '/developers/soundbox',
  },
  {
    name: 'Webhooks Guide',
    icon: Webhook,
    link: '/developers/webhooks',
  },
  {
    name: 'Postman Collection',
    icon: Package,
    link: '/developers/postman',
  },
  {
    name: 'Release Notes',
    icon: ScrollText,
    link: '/developers/release-notes',
  },
  {
    name: 'Technical Support',
    icon: LifeBuoy,
    link: '/developers/support',
  },
];

  const faqs = [
    {
      question: 'Who can access the API documentation?',
      answer: 'API documentation is available for businesses and developers who are integrating AbheePay services.',
    },
    {
      question: 'Do I need API credentials?',
      answer: 'Yes. API credentials are required to authenticate requests and access production APIs.',
    },
    {
      question: 'Is a Sandbox environment available?',
      answer: 'Yes. Developers can test all supported APIs in the Sandbox environment before moving to production.',
    },
    {
      question: 'Are sample requests available?',
      answer: 'Yes. The documentation includes sample requests, response examples, and integration guidance for each API.',
    },
    {
      question: 'Where can I get technical support?',
      answer: 'Our technical support team is available to assist with integration questions, troubleshooting, and onboarding.',
    },
  ];

  const pageTitle = 'API Documentation | AbheePay Developer Hub';
  const pageDescription =
    'Access the AbheePay API documentation to integrate Payment Gateway, Payout, BBPS, Wallet, QR, Recharge, and Aadhaar Verification APIs into your applications.';
  const canonicalUrl = 'https://www.abheepay.com/developer-hub/documentation';

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
            API Documentation
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Everything You Need to Build with AbheePay APIs
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Welcome to the AbheePay Developer Hub. Our API documentation provides the resources you need to integrate AbheePay services into your website, mobile application, SaaS platform, ERP system, or custom software.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Whether you're integrating a Payment Gateway, Payout API, BBPS API, Wallet API, QR API, Recharge API, or Aadhaar Verification API, you'll find clear documentation, sample requests, and implementation guides to help you get started.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* <Link to="/developer-hub/api-reference" className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#0cc9cb]">
              View API Reference
            </Link> */}
            <Link to="/company/contact-us" className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#0A9B9F] hover:text-[#0A9B9F]">
              Get API Access
            </Link>
          </div>
        </div>
      </section>

      {/* Available APIs */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Available APIs</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Explore our API products and choose the service that fits your business requirements.
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
          Each API includes detailed documentation, request and response formats, authentication methods, and integration examples.
        </p>
      </section>

      {/* Documentation Includes */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Documentation Includes</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Our documentation is designed to help developers integrate quickly and efficiently.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {docIncludes.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl bg-[#F8FEFF] p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#0F5562] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0F5562]">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Integration Process</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Getting started with AbheePay APIs is simple.
          </p>
        </div>
        <ol className="mx-auto mt-10 max-w-3xl space-y-4">
          {integrationSteps.map((step, index) => (
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

      {/* Developer Resources */}
{/* Developer Resources */}
<section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
  <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
    <h2 className="text-2xl font-bold text-slate-900">
      Developer Resources
    </h2>

    <p className="mt-3 text-sm leading-7 text-slate-600">
      The Developer Hub provides additional resources to support your integration.
    </p>

    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {resources.map((resource) => {
        const Icon = resource.icon;

        return (
          <Link
            key={resource.name}
            to={resource.link}
            className="group flex items-center gap-3 rounded-2xl bg-[#F8FEFF] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md hover:ring-1 hover:ring-[#14B8A6]/30"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#0F5562] shadow-sm transition-colors duration-300 group-hover:bg-[#14B8A6] group-hover:text-white">
              <Icon className="h-4 w-4" />
            </span>

            <span className="text-sm font-semibold text-slate-800 transition-colors duration-300 group-hover:text-[#0D9488]">
              {resource.name}
            </span>

            <ArrowRight
              className="ml-auto h-4 w-4 text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#14B8A6] group-hover:opacity-100"
            />
          </Link>
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Start Building with AbheePay APIs</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Build secure payment, payout, billing, recharge, QR, wallet, and verification solutions using the AbheePay API platform. Explore our documentation, test your integration, and launch your application with confidence.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/company/contact-us" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A9B9F] transition hover:bg-white/90">
              Get Started
            </Link>
            {/* <Link to="/developer-hub/documentation" className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View API Documentation
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

export default Documentation;