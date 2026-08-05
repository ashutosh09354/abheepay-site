// import React from "react";
// import { Link } from "react-router-dom";

// const SoundBox = () => {
//   return (
//     <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
//       <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
//         <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
//         <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
//           <div className="max-w-2xl">
//             <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
//               Product Spotlight
//             </p>
//             <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
//               Sound Box
//             </h1>
//             <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
//               Powerful audio engineered for business. Deliver clear announcements, music, and customer engagement across stores with a premium, portable soundbox designed for modern retailers.
//             </p>
//             <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
//               >
//                 Talk to Sales
//               </Link>
//               <Link
//                 to="/join-as-retailer"
//                 className="inline-flex items-center justify-center rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
//               >
//                 Join as Retailer
//               </Link>
//             </div>
//           </div>

//           <div className="grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
//             <div className="rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
//               <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">Audio quality</p>
//               <h2 className="mt-4 text-2xl font-bold text-slate-900">Crystal-clear sound</h2>
//               <p className="mt-3 text-sm leading-6 text-slate-600">
//                 High-fidelity drivers deliver balanced midrange and crisp treble for announcements, music, and alerts.
//               </p>
//             </div>
//             <div className="rounded-[2rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
//               <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">Retail ready</p>
//               <h2 className="mt-4 text-2xl font-bold">Business-grade build</h2>
//               <p className="mt-3 text-sm leading-6 text-slate-200">
//                 Rugged, portable design with long battery life and multi-device connectivity for every store environment.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
//           <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
//             <h2 className="text-3xl font-bold text-slate-900">Why Sound Box works for your business</h2>
//             <p className="mt-4 text-base leading-7 text-slate-600">
//               Designed for retail and small business workflows, Sound Box makes staff communication, ambient music, and customer announcements simple and reliable.
//             </p>
//             <div className="mt-8 space-y-6">
//               <div className="flex gap-4 rounded-3xl bg-[#F0FEFF] p-5">
//                 <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#00C4C7] text-xl font-bold">1</span>
//                 <div>
//                   <h3 className="font-semibold text-slate-900">Instant pairing</h3>
//                   <p className="mt-2 text-sm leading-6 text-slate-600">Connect with POS, mobile, and staff devices in seconds using Bluetooth and wireless audio support.</p>
//                 </div>
//               </div>
//               <div className="flex gap-4 rounded-3xl bg-[#F5FBFF] p-5">
//                 <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-white text-xl font-bold">2</span>
//                 <div>
//                   <h3 className="font-semibold text-slate-900">Smart volume control</h3>
//                   <p className="mt-2 text-sm leading-6 text-slate-600">Adaptive audio ensures announcements stay audible without disturbing customers.</p>
//                 </div>
//               </div>
//               <div className="flex gap-4 rounded-3xl bg-[#ECFDF5] p-5">
//                 <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10B981] text-white text-xl font-bold">3</span>
//                 <div>
//                   <h3 className="font-semibold text-slate-900">Plug-and-play setup</h3>
//                   <p className="mt-2 text-sm leading-6 text-slate-600">Set it up in minutes with USB-C charging and easy pairing for every location.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rounded-[2rem] bg-gradient-to-br from-[#E9FCFF] via-white to-[#F3F9FF] p-8 shadow-xl shadow-slate-200/30">
//             <div className="rounded-[2rem] border border-white bg-white p-6 shadow-sm">
//               <h3 className="text-xl font-semibold text-slate-900">Sound Box highlights</h3>
//               <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-600">
//                 <li className="flex items-start gap-3">
//                   <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562] font-bold">✓</span>
//                   <span>Clear 100W audio with custom EQ tuning.</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#0F172A] text-white font-bold">✓</span>
//                   <span>Multi-device support for paired phones, tablets, and POS systems.</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46] font-bold">✓</span>
//                   <span>Premium retail-ready finish with a compact, easy-carry form factor.</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1] font-bold">✓</span>
//                   <span>Long-lasting battery life and fast charging support.</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
//         <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
//           <div className="grid gap-8 lg:grid-cols-3">
//             <div className="space-y-3">
//               <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">Designed for retail</p>
//               <h2 className="text-3xl font-bold text-slate-900">Built to boost store engagement</h2>
//               <p className="text-sm leading-7 text-slate-600">
//                 Sound Box gives your business professional audio tools that look premium and fit seamlessly into your store layout.
//               </p>
//             </div>
//             <div className="rounded-3xl bg-[#F8FDFF] p-6">
//               <h3 className="text-lg font-semibold text-slate-900">Perfect for announcements</h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">Deliver crisp, audible announcements for promotions, events, and customer greetings without echo or distortion.</p>
//             </div>
//             <div className="rounded-3xl bg-[#EEF9FF] p-6">
//               <h3 className="text-lg font-semibold text-slate-900">Ideal for ambient music</h3>
//               <p className="mt-3 text-sm leading-6 text-slate-600">Create a welcoming retail atmosphere with rich audio that stays balanced at low and high volumes.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default SoundBox;







import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  UserPlus,
  Bluetooth,
  Volume2,
  Cable,
  Check,
  ShieldCheck,
  Volume1,
  Megaphone,
  Music2,
  Store,
} from "lucide-react";

// Swap SOUND_BOX_IMAGE for your own product photo (e.g. an import from /assets)
// when you have real packshots — this is a free-to-use sample in the meantime.
const SOUND_BOX_IMAGE =
  "https://images.unsplash.com/photo-1542483381-41a479b1fb88?fm=jpg&q=80&w=900&auto=format&fit=crop";

const SoundBoxDevice = () => (
  <div className="relative mx-auto flex w-full max-w-sm items-center justify-center">
    {/* ambient sound rings */}
    <div className="pointer-events-none absolute -top-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#00C4C7]/20"></div>
    <div className="pointer-events-none absolute top-4 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border border-[#00C4C7]/15"></div>

    {/* left sound bars */}
    <div className="absolute left-0 top-1/2 flex -translate-y-1/2 items-end gap-1">
      {[10, 18, 26, 34, 22, 14].map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-[#00C4C7]/40"
          style={{ height: `${h}px` }}
        ></span>
      ))}
    </div>
    {/* right sound bars */}
    <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-end gap-1">
      {[16, 28, 20, 32, 12, 8].map((h, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-[#00C4C7]/40"
          style={{ height: `${h}px` }}
        ></span>
      ))}
    </div>

    {/* device photo */}
    <div className="relative z-10 w-72 overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-[#00C4C7]/20">
      <img
        src={SOUND_BOX_IMAGE}
        alt="Sound Box portable speaker for retail"
        className="aspect-square w-full rounded-[1.5rem] object-cover"
        loading="lazy"
      />
    </div>

    {/* platform */}
    <div className="absolute -bottom-6 left-1/2 h-6 w-64 -translate-x-1/2 rounded-[50%] bg-slate-200/70 blur-[2px]"></div>
    <div className="absolute -bottom-4 left-1/2 h-3 w-52 -translate-x-1/2 rounded-[50%] bg-white shadow-md"></div>
  </div>
);

const SoundBox = () => {
  return (
    <main className="min-h-screen bg-[#F8FBFD] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E8FEFF] via-white to-[#F6FBFF] py-20">
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(0,196,199,0.25),_transparent_55%)]"></div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-8">
          {/* Left copy */}
          <div className="max-w-xl">
            <p className="mb-4 inline-flex rounded-full border border-[#00C4C7]/20 bg-[#E9FEFF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
              Product Spotlight
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Sound Box
            </h1>
            <h2 className="mt-4 text-xl font-bold leading-snug text-[#00AEB2] sm:text-2xl">
              Crystal-clear announcements.
              <br />
              Every payment. Every time.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Powerful audio engineered for business. Deliver clear
              announcements, music, and customer engagement across stores
              with a premium, portable soundbox.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00C4C7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00C4C7]/20 transition hover:bg-[#14d0d4]"
              >
                <Phone className="h-4 w-4" />
                Talk to Sales
              </Link>
              <Link
                to="/join-as-retailer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#00C4C7] bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:border-[#00AEB2] hover:text-[#00AEB2]"
              >
                <UserPlus className="h-4 w-4" />
                Join as Retailer
              </Link>
            </div>
          </div>

          {/* Device */}
          <div className="flex justify-center py-6 lg:py-0">
            <SoundBoxDevice />
          </div>

          {/* Floating cards */}
          <div className="flex flex-col gap-4 lg:max-w-xs">
            <div className="rounded-[1.5rem] border border-white/60 bg-[#0F172A] p-6 text-white shadow-xl shadow-slate-900/20">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck className="h-5 w-5 text-[#7EE2E6]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7EE2E6]">
                Retail ready
              </p>
              <h3 className="mt-2 text-lg font-bold">Business-grade build</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Rugged, portable design with long battery life and
                multi-device connectivity for every store environment.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00C4C7]/10">
                <Volume1 className="h-5 w-5 text-[#00C4C7]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F5562]">
                Audio quality
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">
                Crystal-clear sound
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                High-fidelity drivers deliver balanced and crisp audio for
                music and alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
            Why businesses love it
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Sound Box works{" "}
            <span className="relative inline-block">
              for your business
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-[#00C4C7]"></span>
            </span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Designed for retail and small business workflows, Sound Box
            makes staff communication, payment notifications, and customer
            announcements simple and reliable.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <div className="divide-y divide-slate-100">
              <div className="flex gap-4 pb-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7] text-lg font-bold text-white">
                  1
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Instant Pairing
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Connect with POS, mobile, and staff devices in seconds
                      using Bluetooth and wireless audio support.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7] sm:inline-flex">
                    <Bluetooth className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="flex gap-4 py-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-lg font-bold text-white">
                  2
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Smart Volume Control
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Adaptive audio ensures announcements stay audible
                      without disturbing customers.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 sm:inline-flex">
                    <Volume2 className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#10B981] text-lg font-bold text-white">
                  3
                </span>
                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Plug-and-Play Setup
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Set it up in minutes with USB-C charging and easy
                      pairing for every location.
                    </p>
                  </div>
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] sm:inline-flex">
                    <Cable className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/30">
            <h3 className="text-xl font-semibold text-slate-900">
              Sound Box highlights
            </h3>
            <ul className="mt-6 divide-y divide-slate-100 text-sm leading-6 text-slate-600">
              <li className="flex items-start gap-3 py-4 first:pt-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#00C4C7]/10 text-[#0F5562]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Clear 100W audio with custom EQ tuning.</span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>
                  Multi-device support for paired phones, tablets, and POS
                  systems.
                </span>
              </li>
              <li className="flex items-start gap-3 py-4">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#A7F3D0] text-[#065F46]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>
                  Premium retail-ready finish with a compact, easy-carry
                  form factor.
                </span>
              </li>
              <li className="flex items-start gap-3 pt-4 last:pb-0">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0369A1]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span>Long-lasting battery life and fast charging support.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Built for retail */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/30">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#00C4C7]">
                Designed for retail
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                Built to boost store engagement
              </h2>
              <p className="text-sm leading-7 text-slate-600">
                Sound Box gives your business professional audio tools that
                look premium and fit seamlessly into your store layout.
              </p>
            </div>

            <div className="rounded-3xl bg-[#F8FDFF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#00C4C7]/10 text-[#00C4C7]">
                <Megaphone className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Perfect for announcements
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Deliver crisp, audible announcements for promotions, events,
                and customer greetings without echo or distortion.
              </p>
            </div>

            <div className="rounded-3xl bg-[#EEF9FF] p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#DBEAFE] text-[#2563EB]">
                <Music2 className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Ideal for ambient music
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Create a welcoming retail atmosphere with rich audio that
                stays balanced at low and high volumes.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-8 border-t border-slate-100 pt-8 lg:grid-cols-3">
            <div className="hidden lg:block"></div>
            <div className="rounded-3xl bg-[#ECFDF5] p-6 lg:col-span-2 lg:max-w-sm">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D1FAE5] text-[#059669]">
                <Store className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Seamless store integration
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Connects effortlessly with POS and payment systems to
                announce every successful transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SoundBox;