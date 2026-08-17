// const ReleaseNotes = () => {
//   return (
//     <div className="font-sans text-slate-900 bg-white min-h-screen px-5 py-20 sm:px-8">
//       <div className="mx-auto max-w-6xl">
//         <span className="inline-flex items-center rounded-full bg-[#fff7ed] px-4 py-2 text-sm font-semibold text-[#c2410c]">
//           Developer Hub
//         </span>
//         <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Release Notes</h1>
//         <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
//           Keep up with the latest updates to the AbheePay API platform, SDK releases, and developer tooling improvements.
//         </p>
//         <div className="mt-12 space-y-6">
//           {[
//             { title: 'New SDK version', detail: 'Updated Node.js SDK with retry support and improved logging.' },
//             { title: 'Webhook improvements', detail: 'Added event delivery status reporting and faster retries.' },
//             { title: 'Sandbox enhancements', detail: 'Expanded test flows for UPI and wallet payments.' },
//           ].map((item) => (
//             <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
//               <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
//               <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReleaseNotes;















import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  TrendingUp,
  Rocket,
  ShieldCheck,
  Bug,
  GitBranch,
  FileText,
  Megaphone,
  Hash,
  Calendar,
  ScrollText,
  ArrowRightLeft,
  Eye,
  FlaskConical,
  RefreshCw,
  Map,
  Bell,
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

const ReleaseNotes = () => {
  const topics = [
    { name: 'New API Features', icon: Sparkles },
    { name: 'Product Enhancements', icon: TrendingUp },
    { name: 'Performance Improvements', icon: Rocket },
    { name: 'Security Updates', icon: ShieldCheck },
    { name: 'Bug Fixes', icon: Bug },
    { name: 'API Version Releases', icon: GitBranch },
    { name: 'Documentation Updates', icon: FileText },
    { name: 'Platform Announcements', icon: Megaphone },
  ];

  const latestUpdates = [
    {
      title: 'New Features',
      description: 'Learn about newly introduced APIs, capabilities, and platform enhancements.',
      icon: Sparkles,
    },
    {
      title: 'Improvements',
      description: 'Discover updates that improve performance, reliability, and the developer experience.',
      icon: TrendingUp,
    },
    {
      title: 'Bug Fixes',
      description: 'Review resolved issues and fixes that improve API stability.',
      icon: Bug,
    },
    {
      title: 'Documentation Updates',
      description: 'Find changes to API documentation, sample requests, SDKs, and implementation guides.',
      icon: FileText,
    },
    {
      title: 'API Version Changes',
      description: 'Stay informed about new API versions, deprecated endpoints, and migration recommendations.',
      icon: GitBranch,
    },
  ];

  const releaseProcess = [
    { title: 'Development', description: 'New features and fixes are built and reviewed internally.' },
    { title: 'Internal Testing', description: 'Changes are validated against internal quality and stability checks.' },
    { title: 'Sandbox Release', description: 'Updates are made available in the Sandbox for developer testing.' },
    { title: 'Production Release', description: 'Changes are rolled out to the live production environment.' },
    { title: 'Documentation Update', description: 'API docs, guides, and examples are updated to reflect the release.' },
    { title: 'Release Announcement', description: 'The update is published here and communicated to developers.' },
  ];

  const versionDetails = [
    { name: 'Version Number', icon: Hash },
    { name: 'Release Date', icon: Calendar },
    { name: 'Summary of Changes', icon: ScrollText },
    { name: 'New Features', icon: Sparkles },
    { name: 'Improvements', icon: TrendingUp },
    { name: 'Bug Fixes', icon: Bug },
    { name: 'Migration Notes (if applicable)', icon: ArrowRightLeft },
  ];

  const bestPractices = [
    { text: 'Review Release Notes regularly.', icon: Eye },
    { text: 'Test new features in the Sandbox environment.', icon: FlaskConical },
    { text: 'Update SDKs when new versions are released.', icon: RefreshCw },
    { text: 'Follow migration guides for API version changes.', icon: Map },
    { text: 'Subscribe to release notifications for important platform updates.', icon: Bell },
  ];

  const faqs = [
    {
      question: 'What are Release Notes?',
      answer: 'Release Notes provide information about new features, bug fixes, API improvements, and important platform updates.',
    },
    {
      question: 'How often are Release Notes updated?',
      answer: 'Release Notes are updated whenever new platform features, API enhancements, or maintenance releases are published.',
    },
    {
      question: 'Will I be notified about major API changes?',
      answer: 'Yes. Significant updates and important announcements will be communicated through official developer channels.',
    },
    {
      question: 'Where can I test new features?',
      answer: 'New features should be tested in the Sandbox environment before they are used in production.',
    },
    {
      question: 'Where can I find previous releases?',
      answer: 'Previous Release Notes remain available in the version history for reference.',
    },
  ];

  const pageTitle = 'API Release Notes | AbheePay Developer Hub';
  const pageDescription =
    'Stay updated with the latest AbheePay API releases, feature updates, improvements, bug fixes, and platform announcements.';
  const canonicalUrl = 'https://www.abheepay.com/developer-hub/release-notes';

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
            Release Notes
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Stay Updated with the Latest API Changes
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            The AbheePay Release Notes provide information about new API features, improvements, bug fixes, performance updates, and important platform announcements.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Developers can use this page to stay informed about changes that may affect their applications and to take advantage of new capabilities as they become available.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* <Link to="/developer-hub/release-notes/latest" className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#0cc9cb]">
              View Latest Release
            </Link>
            <Link to="/developer-hub/subscribe" className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#0A9B9F] hover:text-[#0A9B9F]">
              Subscribe for Updates
            </Link> */}
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What You'll Find</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Our Release Notes include updates across the entire AbheePay platform. Topics include:
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div key={topic.name} className="rounded-[1.5rem] border border-white/80 bg-white p-6 shadow-xl shadow-slate-200/40">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E9FEFF] text-[#0F5562]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{topic.name}</h3>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-slate-600">
          We recommend reviewing the Release Notes regularly to keep your integrations up to date.
        </p>
      </section>

      {/* Latest Updates */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Latest Updates</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Every release includes important information such as:
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {latestUpdates.map((item) => {
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

      {/* Release Process */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Release Process</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            AbheePay follows a structured release process to ensure platform stability. Our release cycle includes:
          </p>
        </div>
        <ol className="mx-auto mt-10 max-w-3xl space-y-4">
          {releaseProcess.map((step, index) => (
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
          This process helps developers prepare for upcoming changes before they reach the production environment.
        </p>
      </section>

      {/* Version History */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Version History</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Release Notes are organised by version and release date, making it easy to track platform changes over time. Each release includes:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {versionDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.name} className="flex items-center gap-3 rounded-2xl bg-[#F8FEFF] p-4">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#0F5562] shadow-sm">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{detail.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/20">
          <h2 className="text-2xl font-bold text-slate-900">Best Practices</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            To maintain a stable integration, we recommend that developers:
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Stay Up to Date</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Follow the AbheePay Release Notes to keep your applications compatible with the latest platform improvements, security updates, and API enhancements.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/company/contact-us" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A9B9F] transition hover:bg-white/90">
              Get Started
            </Link>
            {/* <Link to="/developer-hub/release-notes/latest" className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View Latest Release
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

export default ReleaseNotes;