// import { Link } from "react-router-dom";

// const Support = () => {
//   return (
//     <div className="font-sans text-slate-900 bg-white min-h-screen px-5 py-20 sm:px-8">
//       <div className="mx-auto max-w-6xl">
//         <span className="inline-flex items-center rounded-full bg-[#f0f9ff] px-4 py-2 text-sm font-semibold text-[#0c4a6e]">
//           Developer Hub
//         </span>
//         <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Developer Support</h1>
//         <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
//           Need help integrating AbheePay? Access support resources for API troubleshooting, onboarding, and production readiness.
//         </p>
//         <div className="mt-12 grid gap-6 lg:grid-cols-2">
//           <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
//             <h2 className="text-xl font-bold text-slate-900">Contact</h2>
//             <p className="mt-3 text-sm leading-7 text-slate-600">Reach out to our developer support team for technical integration questions and API issues.</p>
//             <Link to="/contact" className="mt-6 inline-flex rounded-full bg-[#14B8A6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#14B8A6]/20 transition hover:bg-[#0e9a8d]">
//               Contact Us
//             </Link>
//           </div>
//           <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
//             <h2 className="text-xl font-bold text-slate-900">Resources</h2>
//             <p className="mt-3 text-sm leading-7 text-slate-600">Browse troubleshooting guides, sample code, and common integration FAQs.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Support;














import { useEffect } from "react";
import { Link } from "react-router-dom";

const SEO = {
  title: "Developer Support | AbheePay Developer Hub",
  description:
    "Get technical support for AbheePay API integration. Contact our developer support team for API onboarding, troubleshooting, documentation, and integration assistance.",
  path: "/developer-hub/support",
};

const helpTopics = [
  {
    title: "API Onboarding",
    description:
      "Get guidance on selecting the right API, obtaining API credentials, and preparing your application for integration.",
  },
  {
    title: "Technical Integration",
    description:
      "Receive assistance with API requests, authentication, endpoints, webhooks, SDKs, and implementation best practices.",
  },
  {
    title: "Sandbox Support",
    description:
      "Resolve issues while testing your application in the Sandbox environment before moving to production.",
  },
  {
    title: "Production Assistance",
    description:
      "Get help with production activation, API configuration, deployment, and post-launch support.",
  },
  {
    title: "Troubleshooting",
    description:
      "Our team can help identify and resolve common integration issues, API errors, webhook delivery problems, and configuration questions.",
  },
];

const resources = [
  "API Documentation",
  "SDK Downloads",
  "Sandbox Environment",
  "Webhooks Guide",
  "Postman Collection",
  "Release Notes",
  "API Marketplace",
];

const beforeContacting = [
  "Company Name",
  "Registered Email Address",
  "API Name",
  "Environment (Sandbox or Production)",
  "Request ID or Transaction ID (if available)",
  "Error Message or Response Code",
  "Brief Description of the Issue",
];

const processSteps = [
  { step: "Step 1", text: "Review the API Documentation." },
  { step: "Step 2", text: "Test your integration in the Sandbox environment." },
  { step: "Step 3", text: "Gather the required technical details." },
  { step: "Step 4", text: "Submit your support request." },
  { step: "Step 5", text: "Our technical team will review the issue and provide guidance." },
];

const faqs = [
  {
    q: "Who can contact Developer Support?",
    a: "Developer Support is available for businesses and developers integrating AbheePay APIs.",
  },
  {
    q: "Can I get help during Sandbox testing?",
    a: "Yes. Our team can assist with Sandbox setup, API testing, and integration-related questions.",
  },
  {
    q: "Does Developer Support help with production issues?",
    a: "Yes. We provide support for both Sandbox and Production environments.",
  },
  {
    q: "Where can I find API documentation?",
    a: "Complete documentation, SDKs, Postman collections, webhooks, and integration guides are available in the Developer Hub.",
  },
  {
    q: "How can I speed up issue resolution?",
    a: "Include your API name, environment, request details, and any relevant error messages when contacting support.",
  },
];

function useSEO({ title, description, path }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.includes("property=")) {
          el.setAttribute("property", selector.match(/property="([^"]+)"/)[1]);
        } else {
          el.setAttribute("name", selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "website");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      `${window.location.origin}${path}`
    );

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, path]);
}

const Support = () => {
  useSEO(SEO);

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      {/* Hero */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex items-center rounded-full bg-[#f0f9ff] px-4 py-2 text-sm font-semibold text-[#0c4a6e]">
            Developer Hub
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Developer Support
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold text-slate-800">
            We're Here to Help You Build
          </p>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
            The AbheePay Developer Support team is available to help businesses and
            developers integrate our APIs successfully. Whether you are getting started
            with your first API or troubleshooting an existing integration, our
            technical team is ready to assist.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
            From API onboarding to production deployment, we aim to make your
            integration experience simple, reliable, and efficient.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-[#14B8A6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#14B8A6]/20 transition hover:bg-[#0e9a8d]"
            >
              Contact Developer Support
            </Link>
            <Link
              to="/developers/documentation"
              className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How We Can Help
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Our support team can assist you throughout your integration journey.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {helpTopics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{topic.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Support Resources
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Developers also have access to a complete set of self-service resources.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {resources.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#14B8A6]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-slate-600">
              These resources provide step-by-step guidance for successful integration.
            </p>
          </div>
        </div>
      </section>

      {/* Before Contacting Support */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-[#f0f9ff] p-8">
            <h2 className="text-2xl font-bold text-[#0c4a6e] sm:text-3xl">
              Before Contacting Support
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
              To help us resolve your issue quickly, please include the following
              information when submitting a support request:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {beforeContacting.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0c4a6e]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-slate-700">
              Providing complete information helps our technical team investigate and
              respond more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Support Process
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Our developer support process is simple.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((item) => (
              <li
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-[#14B8A6]">
                  {item.step}
                </span>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 divide-y divide-slate-200 rounded-3xl border border-slate-200">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6">
                <h3 className="text-base font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 p-10 text-center sm:p-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need Technical Assistance?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Whether you're integrating your first API or maintaining a production
            application, the AbheePay Developer Support team is here to help. Explore
            our documentation, test your integration, and reach out whenever you need
            technical guidance.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-[#14B8A6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#14B8A6]/20 transition hover:bg-[#0e9a8d]"
            >
              Contact Developer Support
            </Link>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;