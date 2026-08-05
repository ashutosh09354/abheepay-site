const ReleaseNotes = () => {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <span className="inline-flex items-center rounded-full bg-[#fff7ed] px-4 py-2 text-sm font-semibold text-[#c2410c]">
          Developer Hub
        </span>
        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Release Notes</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Keep up with the latest updates to the AbheePay API platform, SDK releases, and developer tooling improvements.
        </p>
        <div className="mt-12 space-y-6">
          {[
            { title: 'New SDK version', detail: 'Updated Node.js SDK with retry support and improved logging.' },
            { title: 'Webhook improvements', detail: 'Added event delivery status reporting and faster retries.' },
            { title: 'Sandbox enhancements', detail: 'Expanded test flows for UPI and wallet payments.' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReleaseNotes;
