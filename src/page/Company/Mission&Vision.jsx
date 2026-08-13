import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, Lightbulb, ShieldCheck, Lock, Award, Handshake, ArrowRight } from "lucide-react";

const VALUES = [
  {
    icon: Users,
    title: "Customer First",
    body: "Every solution we build begins with understanding our customers' needs. Their success is our greatest measure of achievement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We continuously improve our products, technology, and services to meet the changing needs of modern businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "We believe in honesty, transparency, and accountability in every relationship we build.",
  },
  {
    icon: Lock,
    title: "Security",
    body: "Protecting customer data and maintaining secure technology remains a priority in everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    body: "We are committed to delivering high-quality products, reliable services, and continuous improvement across our business.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    body: "Strong partnerships create stronger businesses. We work closely with customers, partners, and our team to achieve shared success.",
  },
];

const MISSION_POINTS = [
  "Simplifying digital payment acceptance",
  "Making business technology more accessible",
  "Supporting digital transformation for businesses",
  "Delivering reliable and secure technology",
  "Helping businesses improve operational efficiency",
  "Building long-term customer relationships through trusted solutions",
];

const COMMITMENT_POINTS = [
  "Reliable digital payment infrastructure",
  "Continuous product innovation",
  "Secure technology and data protection",
  "Simple and developer-friendly integrations",
  "Responsive customer and technical support",
  "Long-term business partnerships",
];

const Checklist = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
        <span className="text-slate-700">{item}</span>
      </li>
    ))}
  </ul>
);

const SectionEyebrow = ({ children }) => (
  <span className="inline-block rounded-full bg-teal-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-teal-600">
    {children}
  </span>
);

const MissionVision = () => {
  useEffect(() => {
    document.title = "Mission & Vision | AbheePay";
  }, []);

  return (
    <main className="pt-24 bg-white text-slate-900">
      <Helmet>
        <title>Mission &amp; Vision | AbheePay</title>
        <meta
          name="description"
          content="Learn about AbheePay's mission, vision, and core values. Discover our commitment to building secure digital payment and business technology solutions that help businesses grow."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-teal-50/60 to-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>Driven by Purpose</SectionEyebrow>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Mission &amp; <span className="text-teal-500">Vision</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            At AbheePay, we believe technology should make business simpler, faster, and more
            connected. Every product we build and every solution we deliver is guided by a clear
            purpose&mdash;to help businesses grow through secure digital payments and innovative
            technology.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Our mission, vision, and values shape every decision we make and every partnership we
            build.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionEyebrow>Our Mission</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Empowering Businesses Through Technology
            </h2>
            <p className="mt-5 text-slate-600">
              Our mission is to help businesses of every size succeed by providing secure,
              reliable, and easy-to-use digital payment and business technology solutions.
            </p>
            <p className="mt-4 font-semibold text-slate-800">
              We believe technology should solve business challenges, not create them.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm">
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">
              We are committed to
            </p>
            <Checklist items={MISSION_POINTS} />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-teal-500/15 p-3">
                <ArrowRight className="h-6 w-6 text-teal-400" />
              </div>
              <p className="text-slate-200">
                We aim to create a connected business ecosystem where organisations can manage
                payments, technology, and business operations through one reliable platform.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full bg-teal-500/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-teal-400">
              Our Vision
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Building the Future of Business Technology
            </h2>
            <p className="mt-5 text-slate-300">
              Our vision is to become one of India&apos;s most trusted business technology
              companies by delivering innovative payment infrastructure and digital solutions
              that support businesses across every industry.
            </p>
            <p className="mt-4 text-slate-300">
              As businesses continue to evolve, we will continue investing in innovation,
              security, and scalable technology that supports long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Our Purpose</SectionEyebrow>
          <p className="mt-6 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
            To help businesses focus on growth while we simplify the technology behind it.
          </p>
          <p className="mt-6 text-slate-600">
            Whether it&apos;s accepting digital payments, integrating APIs, developing custom
            software, or modernising business operations, we want technology to become an
            advantage for every organisation we serve.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <SectionEyebrow>Our Core Values</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              How We Work, Innovate &amp; Serve
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3">
                  <Icon className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm">
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500">
              Our commitment includes
            </p>
            <Checklist items={COMMITMENT_POINTS} />
          </div>
          <div>
            <SectionEyebrow>Our Commitment</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Built for Long-Term Value
            </h2>
            <p className="mt-5 text-slate-600">
              We are committed to building solutions that create long-term value for our
              customers. Every improvement we make is focused on helping businesses operate more
              efficiently and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 p-10 text-center text-white shadow-lg sm:p-14">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Looking Ahead</h2>
          <p className="mx-auto mt-5 max-w-2xl text-teal-50">
            The future of business is digital, connected, and powered by technology. AbheePay
            will continue expanding its payment solutions, API platform, business services, and
            enterprise technology to meet the evolving needs of businesses across India.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-semibold text-white">
            As technology changes, our commitment remains the same&mdash;to build solutions that
            help businesses innovate, compete, and grow.
          </p>
        </div>
      </section>

      {/* Join Us / CTA */}
      <section className="border-t border-slate-100 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Join Us on Our Journey
          </h2>
          <p className="mt-5 text-slate-600">
            Our mission and vision are more than statements&mdash;they are the foundation of
            everything we build. Whether you&apos;re a retailer, distributor, startup, developer,
            or enterprise, we invite you to grow with AbheePay and become part of a future driven
            by innovation, trust, and technology.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="rounded-lg bg-teal-500 px-6 py-3 font-bold text-white transition hover:bg-teal-600">
              Contact Sales
            </Link>
            <Link to="/overview" className="rounded-lg border-2 border-teal-500 px-6 py-3 font-bold text-teal-600 transition hover:bg-teal-50">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MissionVision;
