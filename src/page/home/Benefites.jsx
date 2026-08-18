
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

/* ---------------- config ---------------- */
const NUM_SLIDES = 5;
const SLIDE_VH = 160;
const TRANS = 0.3;
const NAV_HEIGHT = 80; // adjust to match your site's fixed navbar height in px

const ACCENT = "#0D9488"; // teal-600, single professional accent throughout
const ACCENT_SOFT = "#CCFBF1";
const INK = "#0F172A"; // slate-900

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function countUp(from, to, t, decimals = 0) {
  const eased = easeOutCubic(clamp(t, 0, 1));
  const val = from + (to - from) * eased;
  return decimals > 0
    ? val.toFixed(decimals)
    : Math.round(val).toLocaleString();
}

const slideMeta = [
  { key: "01", label: "Faster Settlement" },
  { key: "02", label: "Infrastructure" },
  { key: "03", label: "Better Support" },
  { key: "04", label: "Scalable Platform" },
  { key: "05", label: "Easy Onboarding" },
];

/* ---------------- reusable chart primitives ---------------- */

function ProgressBar({ label, value, display, suffix, max, delay, t, invert }) {
  const localT = clamp((t - delay) / 0.55, 0, 1);
  const pct = invert ? 100 - (value / max) * 100 : (value / max) * 100;
  const width = pct * localT;
  return (
    <div style={{ opacity: clamp(localT * 2, 0, 1) }}>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-xs font-medium text-slate-500">{label}</span>
        <span
          className="text-base font-bold tabular-nums"
          style={{ color: INK }}
        >
          {display}
          <span className="text-xs font-semibold text-slate-400">
            {suffix}
          </span>
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${clamp(width, 0, 100)}%`, backgroundColor: ACCENT }}
        />
      </div>
    </div>
  );
}

function MiniBarChart({ values, labels, t, delay = 0 }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-2.5 h-24">
      {values.map((v, i) => {
        const barT = clamp((t - delay - i * 0.08) / 0.4, 0, 1);
        const h = (v / max) * 100 * easeOutCubic(barT);
        return (
          <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
            <div className="w-full h-20 flex items-end">
              <div
                className="w-full rounded-t-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === values.length - 1 ? ACCENT : "#99F6E4",
                }}
              />
            </div>
            <span className="text-[10px] text-slate-400 font-medium">
              {labels[i]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Sparkline({ t, delay = 0 }) {
  const points = [8, 22, 18, 34, 30, 46, 42, 58, 54, 70, 66, 82];
  const w = 220;
  const h = 70;
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => [i * step, h - (p / 100) * h]);
  const path = coords
    .map((c, i) => `${i === 0 ? "M" : "L"}${c[0].toFixed(1)},${c[1].toFixed(1)}`)
    .join(" ");

  const localT = clamp((t - delay) / 0.6, 0, 1);
  const dashLen = 420;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
      <path
        d={path}
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashLen}
        strokeDashoffset={dashLen * (1 - localT)}
      />
      {localT > 0.95 && (
        <circle
          cx={coords[coords.length - 1][0]}
          cy={coords[coords.length - 1][1]}
          r="3.5"
          fill={ACCENT}
        />
      )}
    </svg>
  );
}

/* ---------------- slide layout shell ---------------- */

function SlideShell({ index, t, eyebrow, title, children }) {
  const headingT = clamp(t / 0.35, 0, 1);
  return (
    <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-11 items-center">
      <div
        style={{
          opacity: headingT,
          transform: `translateY(${(1 - headingT) * 16}px)`,
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-xs font-bold tracking-widest"
            style={{ color: ACCENT }}
          >
            {String(index + 1).padStart(2, "0")} / 05
          </span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>
        <h3 className="text-xl md:text-3xl font-bold text-slate-900 leading-tight">
          {title}
        </h3>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
        {children}
      </div>
    </div>
  );
}

/* ---------------- 5 slides ---------------- */

function SettlementSlide({ t }) {
  const hrs = countUp(48, 1, clamp((t - 0.15) / 0.6, 0, 1), 0);
  const settlements = [
    { amount: "₹2.4L", date: "Jan 15" },
    { amount: "₹1.8L", date: "Jan 14" },
    { amount: "₹3.1L", date: "Jan 13" },
    { amount: "₹2.7L", date: "Jan 12" },
  ];
  return (
    <SlideShell
      index={0}
      t={t}
      title={
        <>
          Payouts settle in
          <span style={{ color: ACCENT }}> hours, not days.</span>
        </>
      }
    >
      <div className="mb-5">
        <p className="text-xs text-slate-500 mb-1">Avg. settlement time</p>
        <p className="text-3xl font-black tabular-nums" style={{ color: INK }}>
          {hrs}
          <span className="text-base font-semibold text-slate-400"> hr</span>
          <span className="text-sm font-medium text-slate-400 ml-2">
            was 48 hr
          </span>
        </p>
      </div>
      <div className="space-y-2">
        {settlements.map((s, i) => {
          const rowT = clamp((t - 0.3 - i * 0.1) / 0.3, 0, 1);
          const done = rowT > 0.6;
          return (
            <div
              key={i}
              className="flex items-center justify-between border-t border-slate-100 pt-2 first:border-t-0 first:pt-0"
              style={{ opacity: clamp(rowT + 0.25, 0, 1) }}
            >
              <div>
                <p className="text-sm font-semibold text-slate-800 tabular-nums">
                  {s.amount}
                </p>
                <p className="text-[10px] text-slate-400">{s.date}</p>
              </div>
              <span
                className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-full px-2 py-0.5"
                style={{
                  backgroundColor: done ? ACCENT_SOFT : "#FEF3C7",
                  color: done ? "#0F766E" : "#B45309",
                }}
              >
                <CheckCircle2 className="w-3 h-3" />
                {done ? "Instant" : "Processing"}
              </span>
            </div>
          );
        })}
      </div>
    </SlideShell>
  );
}

function InfraSlide({ t }) {
  const uptime = countUp(90, 99.99, clamp((t - 0.2) / 0.6, 0, 1), 2);
  const latency = countUp(400, 80, clamp((t - 0.35) / 0.6, 0, 1), 0);
  return (
    <SlideShell
      index={1}
      t={t}
      title={
        <>
          Built on
          <span style={{ color: ACCENT }}> infrastructure that doesn't blink.</span>
        </>
      }
    >
      <div className="mb-6">
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-xs font-medium text-slate-500">
            Platform uptime
          </span>
          <span className="text-xl font-black tabular-nums" style={{ color: INK }}>
            {uptime}
            <span className="text-xs font-semibold text-slate-400">%</span>
          </span>
        </div>
        <Sparkline t={t} delay={0.15} />
      </div>
      <ProgressBar
        label="API response time"
        value={Number(latency)}
        display={latency}
        suffix=" ms"
        max={400}
        delay={0.4}
        t={t}
        invert
      />
    </SlideShell>
  );
}

function SupportSlide({ t }) {
  const response = countUp(30, 2, clamp((t - 0.2) / 0.6, 0, 1), 0);
  const resolution = countUp(70, 98, clamp((t - 0.35) / 0.6, 0, 1), 0);
  return (
    <SlideShell
      index={2}
      t={t}
      title={
        <>
          Support that
          <span style={{ color: ACCENT }}> answers before you finish typing.</span>
        </>
      }
    >
      <div className="space-y-6">
        <ProgressBar
          label="Avg. response time"
          value={Number(response)}
          display={response}
          suffix=" min"
          max={30}
          delay={0.15}
          t={t}
          invert
        />
        <ProgressBar
          label="First-contact resolution"
          value={Number(resolution)}
          display={resolution}
          suffix="%"
          max={100}
          delay={0.35}
          t={t}
        />
      </div>
    </SlideShell>
  );
}

function ScaleSlide({ t }) {
  const merchants = countUp(8234, 52000, clamp((t - 0.2) / 0.6, 0, 1), 0);
  const tps = countUp(120, 4800, clamp((t - 0.35) / 0.6, 0, 1), 0);
  return (
    <SlideShell
      index={3}
      t={t}
      title={
        <>
          One platform,
          <span style={{ color: ACCENT }}> built to scale with you.</span>
        </>
      }
    >
      <div className="mb-5">
        <p className="text-xs text-slate-500 mb-2">Merchants onboarded / quarter</p>
        <MiniBarChart
          values={[12, 18, 27, 41, 63, 100]}
          labels={["Q1", "Q2", "Q3", "Q4", "Q5", "Now"]}
          t={t}
          delay={0.1}
        />
      </div>
      <div className="flex items-end justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs text-slate-500">Active merchants</p>
          <p className="text-xl font-black tabular-nums" style={{ color: INK }}>
            {merchants}
            <span className="text-xs font-semibold text-slate-400">+</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">Transactions / sec</p>
          <p className="text-xl font-black tabular-nums" style={{ color: ACCENT }}>
            {tps}
          </p>
        </div>
      </div>
    </SlideShell>
  );
}

function OnboardingSlide({ t }) {
  const minutes = countUp(0, 15, clamp((t - 0.15) / 0.5, 0, 1), 0);
  const steps = ["Sign up online", "Verify KYC instantly", "Get API keys", "Go live"];
  const lineT = clamp((t - 0.25) / 0.6, 0, 1);
  return (
    <SlideShell
      index={4}
      t={t}
      title={
        <>
          Go live
          <span style={{ color: ACCENT }}> in minutes, not weeks.</span>
        </>
      }
    >
      <div className="mb-6">
        <p className="text-xs text-slate-500 mb-1">Time to go live</p>
        <p className="text-3xl font-black tabular-nums" style={{ color: INK }}>
          {minutes}
          <span className="text-base font-semibold text-slate-400"> min</span>
        </p>
      </div>

      <div className="relative pl-4">
        <div className="absolute left-[6px] top-1 bottom-1 w-px bg-slate-100" />
        <div
          className="absolute left-[6px] top-1 w-px"
          style={{
            height: `calc(${lineT * 100}% - 4px)`,
            backgroundColor: ACCENT,
          }}
        />
        <div className="space-y-4">
          {steps.map((s, i) => {
            const st = clamp((t - 0.3 - i * 0.15) / 0.25, 0, 1);
            const active = st > 0.5;
            return (
              <div
                key={i}
                className="flex items-center gap-3 relative"
                style={{ opacity: clamp(st + 0.3, 0, 1) }}
              >
                <span
                  className="w-3 h-3 rounded-full border-2 flex-shrink-0 -ml-[3px] z-10"
                  style={{
                    borderColor: active ? ACCENT : "#CBD5E1",
                    backgroundColor: active ? ACCENT : "#fff",
                  }}
                />
                <p className="text-sm font-medium text-slate-700">{s}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

function renderSlide(index, t) {
  switch (index) {
    case 0:
      return <SettlementSlide t={t} />;
    case 1:
      return <InfraSlide t={t} />;
    case 2:
      return <SupportSlide t={t} />;
    case 3:
      return <ScaleSlide t={t} />;
    case 4:
      return <OnboardingSlide t={t} />;
    default:
      return null;
  }
}

/* ---------------- main component ---------------- */

const Benefits = () => {
  const wrapperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = null;

    const measure = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight + NAV_HEIGHT;
      const scrolled = NAV_HEIGHT - rect.top;
      const p = scrollable > 0 ? clamp(scrolled / scrollable, 0, 1) : 0;
      setProgress(p);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        measure();
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const slideFloat = progress * NUM_SLIDES;
  const activePct = Math.round(progress * 100);

  return (
    <section style={{ zoom: 1.3, transformOrigin: 'top' }} className="relative bg-white text-slate-800">
      {/* Intro (100vh, normal scroll) */}
      <div className="h-screen flex flex-col items-center justify-center px-6 bg-[#F8FAFC]">
        <span
          className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
          style={{ color: ACCENT }}
        >
          Abheepay Platform
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-3 max-w-xl">
          A powerful dashboard behind every transaction
        </h2>
        <p className="text-slate-500 text-xs md:text-sm mb-8 text-center max-w-sm">
          Scroll to see the metrics that keep merchants running.
        </p>
        <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
      </div>

      {/* Pinned scroll-driven section */}
      <div
        ref={wrapperRef}
        style={{ height: `calc(${NUM_SLIDES * SLIDE_VH}vh + 100vh - ${NAV_HEIGHT}px)` }}
        className="relative"
      >
        <div
          className="sticky overflow-hidden bg-[#F8FAFC]"
          style={{ top: NAV_HEIGHT, height: `calc(100vh - ${NAV_HEIGHT}px)` }}
        >
          {/* top progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 z-40">
            <div
              className="h-full"
              style={{ width: `${progress * 100}%`, backgroundColor: ACCENT }}
            />
          </div>

          {/* slide label + counter, top-left */}
          <div className="absolute top-6 left-6 md:left-10 flex items-center gap-3 z-30 pointer-events-none">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400">
              {slideMeta[clamp(Math.floor(slideFloat), 0, NUM_SLIDES - 1)].label}
            </span>
          </div>

          {/* progress rail, right */}
          <div className="hidden md:flex flex-col gap-4 absolute right-6 top-1/2 -translate-y-1/2 z-30">
            {[0, 20, 40, 60, 80, 100].map((pct) => {
              const isActive = Math.abs(activePct - pct) < 10;
              return (
                <div key={pct} className="flex items-center gap-2 justify-end">
                  <span
                    className={`text-[10px] font-semibold tabular-nums transition-colors ${isActive ? "" : "text-slate-300"
                      }`}
                    style={isActive ? { color: ACCENT } : undefined}
                  >
                    {pct}
                  </span>
                  <span
                    className="w-4 h-px transition-all"
                    style={{
                      backgroundColor: isActive ? ACCENT : "#CBD5E1",
                      width: isActive ? "20px" : "16px",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {slideMeta.map((meta, i) => {
            const local = slideFloat - i;
            const isLast = i === NUM_SLIDES - 1;
            let opacity;
            let translateY;

            if (local < -TRANS) {
              opacity = 0;
              translateY = 20;
            } else if (local < 0) {
              const tt = (local + TRANS) / TRANS;
              opacity = clamp(tt, 0, 1);
              translateY = (1 - opacity) * 20;
            } else if (isLast || local < 1 - TRANS) {
              opacity = 1;
              translateY = 0;
            } else if (local < 1) {
              const tt = (1 - local) / TRANS;
              opacity = clamp(tt, 0, 1);
              translateY = -(1 - opacity) * 20;
            } else {
              opacity = 0;
              translateY = -20;
            }

            const localT = clamp(local, 0, 1);

            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center px-6"
                style={{
                  opacity,
                  transform: `translateY(${translateY}px)`,
                  zIndex: 10 + i,
                  pointerEvents: opacity > 0.5 ? "auto" : "none",
                }}
              >
                {renderSlide(i, localT)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Outro */}
      <div className="h-[48vh] flex flex-col items-center justify-center px-6 bg-white border-t border-slate-100">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 text-center">
          Ready to power your business?
        </h3>
        <p className="text-slate-500 text-xs mb-5 text-center max-w-sm">
          Join thousands of merchants growing with Abheepay's payment
          infrastructure.
        </p>
        <Link to="/contact">
          <button
            className="text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-opacity hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Benefits;