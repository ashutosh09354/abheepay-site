import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Briefcase,
  TrendingUp,
  Users,
  Lightbulb,
  GraduationCap,
  Code2,
  Layers,
  LineChart,
  Headset,
  Building2,
  ChevronDown,
  CheckCircle2,
  FileText,
  UserCheck,
  MessagesSquare,
  ClipboardCheck,
  Award,
  Handshake,
} from "lucide-react";

const WHY_WORK = [
  {
    icon: Award,
    title: "Meaningful work",
    body: "Build products that help businesses across India succeed in the digital economy.",
  },
  {
    icon: TrendingUp,
    title: "Room to grow",
    body: "Take on new challenges and develop your skills as the company grows.",
  },
  {
    icon: Lightbulb,
    title: "Real ownership",
    body: "Bring your ideas to payment technology, APIs, and enterprise products people use.",
  },
];

const LIFE_VALUES = [
  "Collaboration",
  "Innovation",
  "Transparency",
  "Accountability",
  "Customer focus",
  "Continuous learning",
  "Respect for every individual",
];

const TEAMS = [
  {
    icon: Code2,
    title: "Technology",
    roles: ["Frontend", "Backend", "Full stack", "Mobile", "QA & testing", "DevOps"],
  },
  {
    icon: Layers,
    title: "Product",
    roles: ["Product management", "Business analysis", "UI/UX design", "Product operations"],
  },
  {
    icon: LineChart,
    title: "Business & growth",
    roles: ["Sales", "Business development", "Growth marketing", "Partnerships", "Merchant success"],
  },
  {
    icon: Headset,
    title: "Operations",
    roles: ["Customer support", "Business operations", "Project coordination", "Implementation"],
  },
  {
    icon: Building2,
    title: "Corporate functions",
    roles: ["Human resources", "Finance & accounts", "Administration", "Legal & compliance"],
  },
];

const HIRING_STEPS = [
  { title: "Submit your application", icon: FileText },
  { title: "Resume screening", icon: UserCheck },
  { title: "Initial interview", icon: MessagesSquare },
  { title: "Role-specific assessment", icon: ClipboardCheck },
  { title: "Final interview", icon: Users },
  { title: "Offer & onboarding", icon: Handshake },
];

const JOB_CATEGORIES = [
  "Software Engineering",
  "Product Management",
  "Sales & Business Development",
  "Marketing",
  "Customer Success",
  "Operations",
  "Finance",
  "Human Resources",
];

const INTERNSHIP_AREAS = [
  "Software Development",
  "Product Management",
  "Marketing",
  "Operations",
  "Business Development",
  "Design",
];

const BENEFITS = [
  "Professional development opportunities",
  "Learning & training programs",
  "Performance-based growth",
  "Flexible working environment (where applicable)",
  "Collaborative work culture",
  "Modern tools & technology",
];

const FAQS = [
  {
    q: "How can I apply for a job?",
    a: "Browse our open positions and submit your application through the Careers page or send your resume to our recruitment team.",
  },
  {
    q: "Do you offer internships?",
    a: "Yes. Internship opportunities are available for selected roles based on business requirements.",
  },
  {
    q: "Can fresh graduates apply?",
    a: "Yes. We encourage applications from both experienced professionals and talented fresh graduates.",
  },
  {
    q: "How long does the recruitment process take?",
    a: "The timeline depends on the role, application volume, and interview process.",
  },
  {
    q: "Will I receive updates on my application?",
    a: "Yes. Shortlisted candidates will be contacted by our recruitment team.",
  },
];

const SectionEyebrow = ({ children, dark }) => (
  <span
    className={`inline-block rounded-full px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest sm:px-4 ${
      dark ? "bg-teal-500/15 text-teal-400" : "bg-teal-50 text-teal-600"
    }`}
  >
    {children}
  </span>
);

const FaqItem = ({ q, a, isOpen, onToggle }) => (
  <div className="w-full rounded-2xl border border-slate-100 bg-white shadow-sm">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
    >
      <span className="font-semibold text-slate-900 text-sm sm:text-base">{q}</span>
      <ChevronDown
        className={`h-5 w-5 shrink-0 text-teal-500 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <div className="px-4 pb-4 text-sm text-slate-600 sm:px-6 sm:pb-5">{a}</div>
    )}
  </div>
);

const Careers = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [roleTab, setRoleTab] = useState("fulltime");
  const [expandedTeam, setExpandedTeam] = useState(null);

  const roleList =
    roleTab === "fulltime"
      ? JOB_CATEGORIES.map((label) => ({ label, icon: Briefcase }))
      : INTERNSHIP_AREAS.map((label) => ({ label, icon: GraduationCap }));

  return (
    <main className="w-full max-w-[100vw] overflow-x-hidden pt-20 sm:pt-24 bg-white text-slate-900">
      <Helmet>
        <title>Careers at AbheePay | Join Our Team</title>
        <meta
          name="description"
          content="Explore career opportunities at AbheePay. Join our team and help build digital payment solutions, APIs, and business technology that empower businesses across India."
        />
      </Helmet>

      {/* ---------------- Hero ---------------- */}
      <section className="relative w-full overflow-hidden border-b border-slate-100 bg-gradient-to-b from-teal-50/60 to-white px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(#14B8A6 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 55% 55% at 50% 0%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 55% 55% at 50% 0%, black, transparent)",
          }}
        />

        <div className="relative mx-auto w-full max-w-3xl text-center">
          <SectionEyebrow>Careers at AbheePay</SectionEyebrow>
          <h1 className="mt-5 text-[clamp(1.9rem,7vw,3.5rem)] font-black leading-[1.1] tracking-tight text-slate-900">
            Build the future of <span className="text-teal-500">business technology</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
            We're a team across technology, product, design, operations, sales, and support —
            building payments and business tools used across India. If that sounds like your
            kind of work, we'd love to hear from you.
          </p>
          {/* <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button className="w-full rounded-lg bg-teal-500 px-6 py-3 font-bold text-white transition hover:bg-teal-600 sm:w-auto">
              View open positions
            </button>
            <button className="w-full rounded-lg border-2 border-teal-500 px-6 py-3 font-bold text-teal-600 transition hover:bg-teal-50 sm:w-auto">
              Submit your resume
            </button>
          </div> */}
        </div>
      </section>

      {/* ---------------- Why work here (merged: reasons + culture + benefits) ---------------- */}
      <section className="w-full px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* left: the pitch, as prose + a short reasons list, not boxed cards */}
          <div>
            <SectionEyebrow>Why AbheePay</SectionEyebrow>
            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.25rem)] font-black tracking-tight text-slate-900">
              Learn, build, and see your work matter
            </h2>
            <p className="mt-4 max-w-lg text-sm text-slate-600 sm:text-base">
              A positive work environment leads to better ideas — so we keep the culture simple:
              collaborate openly, ship things that help real businesses, and keep learning.
            </p>

            <div className="mt-8 space-y-6">
              {WHY_WORK.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <Icon className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {LIFE_VALUES.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-teal-100 bg-teal-50/70 px-3.5 py-1.5 text-xs font-medium text-teal-700"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* right: benefits, as a single quiet panel instead of a whole separate section */}
          <div className="w-full self-start rounded-2xl border border-slate-100 bg-slate-50/70 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              What you get
            </p>
            <ul className="mt-5 space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                  <span className="text-sm text-slate-700 sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Teams you can join ---------------- */}
      <section className="w-full bg-slate-50 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <SectionEyebrow>Teams you can join</SectionEyebrow>
            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.25rem)] font-black tracking-tight text-slate-900">
              Talented people across every function
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAMS.map(({ icon: Icon, title, roles }) => {
              const isOpen = expandedTeam === title;
              const shown = isOpen ? roles : roles.slice(0, 3);
              const hiddenCount = roles.length - shown.length;
              return (
                <div key={title} className="w-full rounded-2xl border border-slate-100 bg-white p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex rounded-xl bg-teal-50 p-2.5">
                      <Icon className="h-5 w-5 text-teal-500" />
                    </div>
                    <h3 className="font-bold text-slate-900">{title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {shown.map((role) => (
                      <span
                        key={role}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {role}
                      </span>
                    ))}
                    {hiddenCount > 0 && (
                      <button
                        onClick={() => setExpandedTeam(title)}
                        className="rounded-full px-3 py-1 text-xs font-semibold text-teal-600 hover:text-teal-700"
                      >
                        +{hiddenCount} more
                      </button>
                    )}
                    {isOpen && roles.length > 3 && (
                      <button
                        onClick={() => setExpandedTeam(null)}
                        className="rounded-full px-3 py-1 text-xs font-semibold text-slate-400 hover:text-slate-600"
                      >
                        Show less
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Hiring process — an actual timeline, since it's a real sequence ---------------- */}
      <section className="w-full px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <SectionEyebrow>How hiring works</SectionEyebrow>
            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.25rem)] font-black tracking-tight text-slate-900">
              Six steps, start to finish
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              The process may vary a little depending on the role.
            </p>
          </div>

          <div className="relative mt-12">
            {/* connecting line: vertical on mobile, horizontal on desktop */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 lg:left-0 lg:right-0 lg:top-6 lg:bottom-auto lg:h-px lg:w-auto" />
            <ol className="relative grid grid-cols-1 gap-8 lg:grid-cols-6 lg:gap-4">
              {HIRING_STEPS.map(({ title, icon: Icon }, i) => (
                <li key={title} className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-white shadow-sm">
                    {i + 1}
                  </div>
                  <div className="pt-2.5 lg:pt-0">
                    <Icon className="mx-auto mb-2 hidden h-5 w-5 text-teal-500 lg:block" />
                    <p className="text-sm font-semibold text-slate-800">{title}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------- Open roles — merged full-time + internship into one tabbed list ---------------- */}
      <section className="w-full bg-slate-50 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <SectionEyebrow>Open roles</SectionEyebrow>
            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.25rem)] font-black tracking-tight text-slate-900">
              Find where you fit
            </h2>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
              <button
                onClick={() => setRoleTab("fulltime")}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                  roleTab === "fulltime" ? "bg-teal-500 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Full-time
              </button>
              <button
                onClick={() => setRoleTab("intern")}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                  roleTab === "intern" ? "bg-teal-500 text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Internships
              </button>
            </div>
          </div>

          <div className="mt-8 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            {roleList.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-slate-50 sm:px-6"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-teal-500" />
                  <span className="text-sm font-semibold text-slate-800 sm:text-base">{label}</span>
                </div>
                <span className="text-xs font-medium text-slate-400">
                  {roleTab === "fulltime" ? "Full-time" : "Internship"}
                </span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-slate-500">
            {roleTab === "fulltime"
              ? "Connect this list to your live careers portal or applicant tracking system as your hiring grows."
              : "Internship openings depend on current business needs and are open to students and recent graduates."}
          </p>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="w-full px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <SectionEyebrow>Frequently asked questions</SectionEyebrow>
            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.25rem)] font-black tracking-tight text-slate-900">
              Have questions?
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <section className="w-full border-t border-slate-100 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-4xl rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-7 text-center text-white shadow-lg sm:p-10 lg:p-14">
          <h2 className="text-[clamp(1.6rem,5vw,2.25rem)] font-black tracking-tight">Join our journey</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-teal-50 sm:text-base">
            We're building more than products — we're building a team that's passionate about
            innovation, technology, and helping businesses succeed.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
  {/* <Link
    to="/careers"
    className="w-full rounded-lg bg-white px-6 py-3 text-center font-bold text-teal-600 transition hover:bg-teal-50 sm:w-auto"
  >
    View open positions
  </Link> */}

  <a
    href="mailto:careers@abheepay.com?subject=Resume Submission - Job Application"
    className="w-full rounded-lg border-2 border-white px-6 py-3 text-center font-bold text-white transition hover:bg-white/10 sm:w-auto"
  >
    Share your resume
  </a>
</div>
        </div>
      </section>
    </main>
  );
};

export default Careers;