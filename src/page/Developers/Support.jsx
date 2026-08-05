const Support = () => {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <span className="inline-flex items-center rounded-full bg-[#f0f9ff] px-4 py-2 text-sm font-semibold text-[#0c4a6e]">
          Developer Hub
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Developer Support</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Need help integrating AbheePay? Access support resources for API troubleshooting, onboarding, and production readiness.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Contact</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Reach out to our developer support team for technical integration questions and API issues.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Resources</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Browse troubleshooting guides, sample code, and common integration FAQs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
