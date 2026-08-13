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
    title: "Meaningful Work",
    body: "Build products and solutions that help businesses across India succeed in the digital economy.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    body: "Take on new challenges, develop your skills, and grow with a company that values continuous learning.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    body: "Work alongside passionate professionals who believe in teamwork, knowledge sharing, and mutual respect.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "Bring your ideas to life by working on payment technology, APIs, enterprise solutions, and digital products.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    body: "We encourage continuous improvement through practical experience, mentorship, and professional development.",
  },
];

const LIFE_VALUES = [
  "Collaboration",
  "Innovation",
  "Transparency",
  "Accountability",
  "Customer Focus",
  "Continuous Learning",
  "Respect for Every Individual",
];

const TEAMS = [
  {
    icon: Code2,
    title: "Technology",
    roles: ["Frontend Development", "Backend Development", "Full Stack Development", "Mobile App Development", "QA & Testing", "DevOps"],
  },
  {
    icon: Layers,
    title: "Product",
    roles: ["Product Management", "Business Analysis", "UI/UX Design", "Product Operations"],
  },
  {
    icon: LineChart,
    title: "Business & Growth",
    roles: ["Sales", "Business Development", "Growth Marketing", "Partnerships", "Merchant Success"],
  },
  {
    icon: Headset,
    title: "Operations",
    roles: ["Customer Support", "Business Operations", "Project Coordination", "Implementation"],
  },
  {
    icon: Building2,
    title: "Corporate Functions",
    roles: ["Human Resources", "Finance & Accounts", "Administration", "Legal & Compliance"],
  },
];

const HIRING_STEPS = [
  { title: "Submit your application", icon: FileText },
  { title: "Resume screening", icon: UserCheck },
  { title: "Initial interview", icon: MessagesSquare },
  { title: "Technical or role-specific assessment", icon: ClipboardCheck },
  { title: "Final interview", icon: Users },
  { title: "Offer and onboarding", icon: Handshake },
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
  "Professional Development Opportunities",
  "Learning & Training Programs",
  "Performance-Based Growth",
  "Flexible Working Environment (where applicable)",
  "Collaborative Work Culture",
  "Modern Tools & Technology",
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
    className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${
      dark ? "bg-teal-500/15 text-teal-400" : "bg-teal-50 text-teal-600"
    }`}
  >
    {children}
  </span>
);

const FaqItem = ({ q, a, isOpen, onToggle }) => (
  <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
    >
      <span className="font-semibold text-slate-900">{q}</span>
      <ChevronDown
        className={`h-5 w-5 shrink-0 text-teal-500 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <div className="px-6 pb-5 text-sm text-slate-600">{a}</div>
    )}
  </div>
);

const Careers = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="pt-24 bg-white text-slate-900">
      <Helmet>
        <title>Careers at AbheePay | Join Our Team</title>
        <meta
          name="description"
          content="Explore career opportunities at AbheePay. Join our team and help build digital payment solutions, APIs, and business technology that empower businesses across India."
        />
      </Helmet>

      {/* Hero with career-themed background elements */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-teal-50/60 to-white px-6 py-20 sm:py-28">
        {/* Decorative dot-grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(#14B8A6 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
          }}
        />
        {/* Floating career icons */}
        <Briefcase className="pointer-events-none absolute left-[8%] top-16 h-10 w-10 text-teal-500/20 sm:h-14 sm:w-14" />
        <GraduationCap className="pointer-events-none absolute right-[10%] top-24 h-12 w-12 text-teal-500/20 sm:h-16 sm:w-16" />
        <TrendingUp className="pointer-events-none absolute bottom-10 left-[14%] h-10 w-10 text-teal-500/20 sm:h-14 sm:w-14" />
        <Handshake className="pointer-events-none absolute bottom-16 right-[16%] h-10 w-10 text-teal-500/20 sm:h-12 sm:w-12" />
        <Lightbulb className="pointer-events-none absolute right-[30%] top-10 hidden h-9 w-9 text-teal-500/20 sm:block" />

        <div className="relative mx-auto max-w-4xl text-center">
          <SectionEyebrow>Careers at AbheePay</SectionEyebrow>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Build the Future of <span className="text-teal-500">Business Technology</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            At AbheePay, we&apos;re building technology that helps businesses simplify payments,
            improve operations, and grow with confidence. Behind every product is a team of
            passionate professionals working across technology, product, design, operations,
            sales, marketing, and customer success.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            If you&apos;re looking for meaningful work, exciting challenges, and opportunities to
            grow your career, we&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-lg bg-teal-500 px-6 py-3 font-bold text-white transition hover:bg-teal-600">
              View Open Positions
            </button>
            <button className="rounded-lg border-2 border-teal-500 px-6 py-3 font-bold text-teal-600 transition hover:bg-teal-50">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Why Work at AbheePay */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionEyebrow>Why Work at AbheePay?</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Learn, Innovate &amp; Make a Real Impact
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {WHY_WORK.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3">
                  <Icon className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at AbheePay */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow dark>Life at AbheePay</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            A Positive Workplace, Built for Better Ideas
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            We believe that a positive work environment leads to better ideas and stronger
            results. Our workplace is built on:
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {LIFE_VALUES.map((value) => (
              <span
                key={value}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100"
              >
                {value}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Together, we work to create technology that solves real business challenges.
          </p>
        </div>
      </section>

      {/* Teams You Can Join */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionEyebrow>Teams You Can Join</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Talented Professionals Across Every Function
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAMS.map(({ icon: Icon, title, roles }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-teal-50 p-3">
                    <Icon className="h-5 w-5 text-teal-500" />
                  </div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionEyebrow>Our Hiring Process</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Transparent &amp; Straightforward
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {HIRING_STEPS.map(({ title, icon: Icon }, i) => (
              <div key={title} className="relative rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <Icon className="mx-auto mb-2 h-8 w-8 text-teal-500" />
                <p className="text-sm font-semibold text-slate-800">{title}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Our recruitment process may vary depending on the position.
          </p>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionEyebrow>Current Opportunities</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Browse Our Latest Openings
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JOB_CATEGORIES.map((category) => (
              <div
                key={category}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-sm transition hover:border-teal-200 hover:shadow-md"
              >
                <span className="font-semibold text-slate-800">{category}</span>
                <Briefcase className="h-4 w-4 text-teal-500" />
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
            Connect this section to your live careers portal or applicant tracking system as your
            hiring grows.
          </p>
        </div>
      </section>

      {/* Internships */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow>Internship Opportunities</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              For Students &amp; Recent Graduates
            </h2>
            <p className="mt-5 text-slate-600">
              We welcome students and recent graduates who are eager to learn and build practical
              experience.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm">
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">
              Internship opportunities may be available in
            </p>
            <div className="flex flex-wrap gap-2">
              {INTERNSHIP_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionEyebrow>Employee Benefits</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Grow Personally &amp; Professionally
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <ul className="grid gap-3 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-400">
              Only list benefits that your company actually provides.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <SectionEyebrow>Frequently Asked Questions</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Have Questions?
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

      {/* Join Our Journey / Final CTA */}
      <section className="border-t border-slate-100 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-10 text-center text-white shadow-lg sm:p-14">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Join Our Journey</h2>
          <p className="mx-auto mt-5 max-w-2xl text-teal-50">
            At AbheePay, we&apos;re building more than products&mdash;we&apos;re building a team
            that&apos;s passionate about innovation, technology, and helping businesses succeed.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-semibold text-white">
            If you&apos;re ready to learn, grow, and make an impact, we&apos;d love to welcome you
            to our team.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-teal-100">
            Start Your Career with AbheePay
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-lg bg-white px-6 py-3 font-bold text-teal-600 transition hover:bg-teal-50">
              View Open Positions
            </button>
            <button className="rounded-lg border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-white/10">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;