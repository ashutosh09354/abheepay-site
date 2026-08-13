import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  Briefcase,
  Cpu,
  LayoutGrid,
  Settings,
  TrendingUp,
} from "lucide-react";

const PHILOSOPHY_POINTS = [
  "Customer-first thinking",
  "Innovation through technology",
  "Responsible business practices",
  "Secure and reliable solutions",
  "Long-term partnerships",
  "Continuous improvement",
];

const LEADERS = [
  {
    role: "Founder & Chief Executive Officer (CEO)",
    name: "[Full Name]",
    icon: Briefcase,
    bio: "The Founder & CEO leads the company's vision, business strategy, and long-term growth. Working closely with customers, partners, and the leadership team, the CEO focuses on expanding AbheePay's digital payment ecosystem and enterprise technology solutions.",
    focus: ["Business Strategy", "Partnerships", "Product Vision", "Business Growth", "Corporate Leadership"],
  },
  {
    role: "Chief Technology Officer (CTO)",
    name: "[Full Name]",
    icon: Cpu,
    bio: "The CTO leads technology strategy, platform architecture, product engineering, and innovation. The technology team focuses on building secure, scalable, and reliable payment infrastructure for businesses.",
    focus: ["Platform Architecture", "API Platform", "Information Security", "Engineering", "Product Development"],
  },
  {
    role: "Head of Product",
    name: "[Full Name]",
    icon: LayoutGrid,
    bio: "The Head of Product works closely with customers and engineering teams to develop products that solve real business challenges. From product planning to feature delivery, the focus remains on creating practical solutions that improve customer experiences.",
    focus: ["Product Strategy", "User Experience", "Product Roadmap", "Market Research", "Customer Feedback"],
  },
  {
    role: "Head of Operations",
    name: "[Full Name]",
    icon: Settings,
    bio: "The Operations team ensures smooth day-to-day business execution, merchant onboarding, service delivery, and customer support. The goal is to provide businesses with a reliable and efficient experience.",
    focus: ["Business Operations", "Merchant Success", "Service Delivery", "Operational Excellence", "Customer Support"],
  },
  {
    role: "Head of Business Development",
    name: "[Full Name]",
    icon: TrendingUp,
    bio: "The Business Development team focuses on building strategic partnerships, expanding merchant networks, and identifying new growth opportunities across industries.",
    focus: ["Strategic Partnerships", "Merchant Network Growth", "Enterprise Sales", "Channel Development", "Market Expansion"],
  },
];

const getInitials = (role) =>
  role
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter((w) => w[0] === w[0]?.toUpperCase() && /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const SectionEyebrow = ({ children, dark }) => (
  <span
    className={`inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest ${
      dark ? "bg-teal-500/15 text-teal-400" : "bg-teal-50 text-teal-600"
    }`}
  >
    {children}
  </span>
);

const LeadershipTeam = () => {
  useEffect(() => {
    document.title = "Leadership Team | Meet the People Behind AbheePay";
  }, []);

  return (
    <main className="pt-24 bg-white text-slate-900">
      <Helmet>
        <title>Leadership Team | Meet the People Behind AbheePay</title>
        <meta
          name="description"
          content="Meet the leadership team behind AbheePay. Learn about the people driving innovation in digital payments, business technology, APIs, and enterprise solutions."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-teal-50/60 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>Leadership Team</SectionEyebrow>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Meet the People Driving <span className="text-teal-500">AbheePay</span> Forward
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            At AbheePay, our leadership team brings together experience in business, technology,
            product development, operations, and customer success. Together, we are committed to
            building secure digital payment solutions and business technology that help
            organisations grow with confidence.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Our focus is not only on creating innovative products but also on building long-term
            relationships with customers, partners, and businesses across India.
          </p>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow dark>Our Leadership Philosophy</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Teams That Listen, Learn &amp; Innovate
            </h2>
            <p className="mt-5 text-slate-300">
              We believe great businesses are built by teams that listen, learn, and innovate.
              Our leadership team is guided by a shared commitment to the values below.
            </p>
            <p className="mt-4 text-slate-300">
              Every decision we make is focused on creating lasting value for our customers and
              partners.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <ul className="space-y-3">
              {PHILOSOPHY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-slate-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Team cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionEyebrow>Leadership Team</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              The People Behind the Platform
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERS.map(({ role, name, icon: Icon, bio, focus }) => (
              <div
                key={role}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-500 text-lg font-bold text-white">
                    {getInitials(role)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{name}</p>
                    <p className="text-sm text-teal-600">{role}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600">{bio}</p>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                  <Icon className="h-4 w-4 shrink-0 text-teal-500" />
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Key Focus Areas
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Together */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Working Together for Our Customers</SectionEyebrow>
          <p className="mt-6 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
            One shared objective&mdash;helping businesses succeed.
          </p>
          <p className="mt-6 text-slate-600">
            Our leadership team works across every department to ensure that AbheePay delivers
            technology that is reliable, scalable, and aligned with customer needs. From product
            development and engineering to operations and customer support, every team shares a
            common objective&mdash;to help businesses succeed through practical technology and
            trusted partnerships.
          </p>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-10 text-center text-white shadow-lg sm:p-14">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Join Our Team</h2>
          <p className="mx-auto mt-5 max-w-2xl text-teal-50">
            We&apos;re always looking for talented professionals who are passionate about
            technology, innovation, and building products that make a difference.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-semibold text-white">
            Explore career opportunities and become part of a team that&apos;s shaping the future
            of digital payments and business technology.
          </p>
          <div className="mt-8">
            <button className="rounded-lg bg-white px-6 py-3 font-bold text-teal-600 transition hover:bg-teal-50">
              Explore Careers
            </button>
          </div>
        </div>
      </section>

      {/* Connect With Leadership / CTA */}
      <section className="border-t border-slate-100 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Connect With Our Leadership
          </h2>
          <p className="mt-5 text-slate-600">
            Interested in partnering with AbheePay or learning more about our solutions? Our team
            is ready to discuss how we can support your business with secure payment
            infrastructure, enterprise technology, and digital transformation solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button  to="/company/contact-us" className="rounded-lg bg-teal-500 px-6 py-3 font-bold text-white transition hover:bg-teal-600">
              Contact Sales
            </button>

          </div>
        </div>
      </section>
    </main>
  );
};

export default LeadershipTeam;