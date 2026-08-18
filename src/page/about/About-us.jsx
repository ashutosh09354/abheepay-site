import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Shield,
  Zap,
  Users,
  Landmark,
  Globe,
  Lock,
  Briefcase,
  Star,
  Wallet,
  HeartPulse,
  Laptop,
  Car,
  Baby,
  PartyPopper,
  Headphones,
  Lightbulb,
  Gift,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  CheckCircle2,
  CreditCard,
  Code2,
  Building2,
  Layers,
  Smartphone,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/* ---------------------------------------------------
   Animated counter — ticks up once the stat is on screen
--------------------------------------------------- */
const AnimatedStat = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  const numeric = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");
  const isDecimal = value.includes(".");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1400;
          const stepTime = 16;
          const steps = duration / stepTime;
          const increment = numeric / steps;
          const timer = setInterval(() => {
            start += increment;
            if (start >= numeric) {
              setCount(numeric);
              clearInterval(timer);
            } else {
              setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [numeric, isDecimal]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutPage = () => {
  const teamRows = [
    [
      { name: "XYZ", role: "Founder & CEO" },
      { name: "XYZ", role: "Co-founder & CTO" },

    ],

    [
      { name: "XYZ", role: "Associate Director | HR" },
      { name: "XYZ", role: "Associate Director | Compliance" },
      { name: "XYZ", role: "Associate Director | Marketing" },
      { name: "XYZ", role: "Associate Director | Finance" },
      { name: "XYZ", role: "Developer | IT" },

    ],

  ];

  const values = [
    {
      title: "Sharp & Focused",
      desc: "We articulate our thinking with precision, always simplifying complex financial ideas so partners can act on them fast.",
      shade: "bg-[#14B8A6]",
      text: "text-white",
    },
    {
      title: "Resourceful Innovation",
      desc: "We dig deep to understand every challenge and build with what's available — staying open to new ideas at every level.",
      shade: "bg-[#0F9E90]",
      text: "text-white",
    },
    {
      title: "Resolute Commitment",
      desc: "Our perseverance doesn't waver. We back each other, celebrate wins together, and stay locked on the bigger goal.",
      shade: "bg-[#CCF5F0]",
      text: "text-slate-800",
    },
    {
      title: "Empowered To Act",
      desc: "We equip merchants and partners with the insight and confidence to make bold decisions and seize new opportunity.",
      shade: "bg-[#5EEAD4]",
      text: "text-slate-900",
    },
    {
      title: "Bold Vision",
      desc: "We take pioneering, well-reasoned risks — every choice is strategic and built for long-term impact.",
      shade: "bg-[#0B2A33]",
      text: "text-white",
    },
    {
      title: "Being Humble",
      desc: "Despite our progress, we stay grounded. Humility keeps us listening, learning, and growing alongside our partners.",
      shade: "bg-[#E6FFFB]",
      text: "text-slate-800",
    },
  ];

  const benefits = [
    { icon: <Wallet className="w-5 h-5" />, label: "Employee Provident Fund" },
    { icon: <Shield className="w-5 h-5" />, label: "Health Insurance" },
    { icon: <Gift className="w-5 h-5" />, label: "Gratuity Benefits" },
    { icon: <HeartPulse className="w-5 h-5" />, label: "Wellness Time-off" },
    { icon: <Users className="w-5 h-5" />, label: "Work Socials" },
    { icon: <Zap className="w-5 h-5" />, label: "Performance Incentives" },
    { icon: <Laptop className="w-5 h-5" />, label: "Remote Work Friendly" },
    { icon: <Car className="w-5 h-5" />, label: "Free Cab Rides" },
    { icon: <Baby className="w-5 h-5" />, label: "Paid Parental Leave" },
    { icon: <PartyPopper className="w-5 h-5" />, label: "Annual Retreats" },
    { icon: <Headphones className="w-5 h-5" />, label: "Employee Assistance Programs" },
    { icon: <Lightbulb className="w-5 h-5" />, label: "Cultural & Learning Events" },
  ];

  // "What We Do"
  const whatWeDo = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment Solutions",
      desc: "Accept and manage digital payments with products built for businesses of every size.",
      items: ["Payment Gateway", "Payment Links", "QR Payment Solution", "QR Sound Box", "POS Machine", "Merchant App", "Digital Invoice"],
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "API Platform",
      desc: "Integrate secure financial services into your applications using developer-friendly APIs.",
      items: ["Payment Gateway API", "Payout API", "BBPS API", "Wallet API", "QR API", "Recharge API", "Aadhaar Verification API"],
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Enterprise Technology",
      desc: "Support business growth with custom technology solutions.",
      items: ["Website Development", "Mobile Application Development", "Custom Software Development", "API Integration Services", "Business Banking Solutions", "White Label Payment Solutions"],
    },
  ];

  // "Why Choose AbheePay?"
  const whyChoose = [
    { icon: <Layers className="w-5 h-5" />, title: "Complete Business Ecosystem", desc: "Access payment solutions, APIs, enterprise technology, and merchant services from one trusted provider." },
    { icon: <Shield className="w-5 h-5" />, title: "Secure & Reliable Platform", desc: "Our solutions are built to support secure transactions, reliable performance, and long-term business growth." },
    { icon: <Briefcase className="w-5 h-5" />, title: "Built for Every Business", desc: "Whether you're a small retailer, a growing startup, or a large enterprise, our products are designed to scale with your business." },
    { icon: <Code2 className="w-5 h-5" />, title: "Easy Integration", desc: "Developer-friendly APIs and implementation support make it easy to connect AbheePay services with your website, mobile application, or business platform." },
    { icon: <Headphones className="w-5 h-5" />, title: "Dedicated Support", desc: "From onboarding to implementation and ongoing assistance, our team works with you to help you achieve your business goals." },
  ];


  const [showMore, setShowMore] = useState(false);
  // "Business Highlights" — categories from the brief; figures are illustrative placeholders
  const businessHighlights = [
    { label: "Payment & Business Solutions", value: "15+" },
    { label: "Business APIs", value: "7+" },
    { label: "Partner Network", value: "100+" },
    { label: "Merchant Network", value: "10K+" },
    { label: "Enterprise Solutions", value: "13+" },
    { label: "Growing Customer Base", value: "50K+" },
  ];

  // "Industries We Serve"
  const industries = [
    "Retail", "E-commerce", "Banking & Financial Services", "Fintech", "Healthcare",
    "Education", "Hospitality", "Logistics", "Travel", "Professional Services",
    "Government Projects", "Enterprises",
  ];

  // "Explore Our Company"
  const companyLinks = [
    { title: "Our Story", desc: "Discover how AbheePay was founded, the challenges we set out to solve, and the journey that continues to shape our business.", cta: "Explore Our Story", to: "/company/our-story" },
    { title: "Mission & Vision", desc: "Learn about our mission, vision, and the values that guide every product, partnership, and business decision.", cta: "View Mission & Vision", to: "/company/mission-vision" },
    { title: "Leadership Team", desc: "Meet the people leading AbheePay and driving innovation across payment technology and enterprise solutions.", cta: "Meet Our Leadership", to: "/company/leadership-team" },
    { title: "Careers", desc: "Join a team that's building technology to shape the future of digital business.", cta: "Explore Careers", to: "/company/careers" },
    { title: "News & Updates", desc: "Stay informed with the latest product launches, company announcements, partnerships, and business updates.", cta: "Read Latest News", to: "/company/news-updates" },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white text-[13px] pt-16">
      <style>{`
        @keyframes fadeUp { 0% { opacity:0; transform: translateY(16px);} 100% { opacity:1; transform: translateY(0);} }
        .fade-up { animation: fadeUp 0.7s ease-out both; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease-out both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.2s ease-out both; }
      `}</style>

      <Helmet>
        <title>About AbheePay | Digital Payment & Business Technology Company</title>
        <meta
          name="description"
          content="Learn about AbheePay, a business technology company helping businesses grow with digital payment solutions, APIs, enterprise technology, and business banking services."
        />
        <link rel="canonical" href="/about-us" />
        <meta property="og:title" content="About AbheePay | Digital Payment & Business Technology Company" />
        <meta
          property="og:description"
          content="Learn about AbheePay, a business technology company helping businesses grow with digital payment solutions, APIs, enterprise technology, and business banking services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/about-us" />
      </Helmet>

      {/* ---------------- HERO ---------------- */}
      <section className="bg-[#0A1122] text-white pt-12 pb-16 px-5 sm:px-8 relative overflow-hidden">
        <div className="absolute top-10 left-4 w-16 h-16 border border-[#14B8A6]/25 rounded-lg hidden sm:block" />
        <div className="absolute top-16 right-6 w-20 h-20 border border-[#14B8A6]/25 rounded-lg hidden sm:block" />

        <div className="max-w-6xl mx-auto text-center relative">
          <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#5EEAD4] border border-[#14B8A6]/40 rounded-full px-4 py-1 mb-5 fade-up">
            About Us
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight fade-up-1">
            Building Smarter Business Solutions
            <br />
            <span className="text-[#14B8A6]">for a Digital World</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-[12.5px] sm:text-[13.5px] leading-relaxed text-slate-300 fade-up-1">
            AbheePay is a business technology company focused on helping businesses simplify
            payments, improve operations, and grow through digital innovation. Our mission is to
            make business technology simple, secure, and accessible so organisations can focus on
            growth instead of complexity.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 fade-up-1">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6] hover:bg-[#0F9E90] transition text-white text-[12px] font-semibold px-5 py-2.5">
              Contact Sales
            </Link>
            <Link to="/overview" className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:bg-white/10 transition text-white text-[12px] font-semibold px-5 py-2.5">
              Become a Partner
            </Link>
          </div>

          <div className="relative mt-10 rounded-2xl overflow-hidden max-w-4xl mx-auto fade-up-2 shadow-2xl">
            <img
              src="/assets/image/banner/joinourteam.png"
              alt="AbheePay team"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1122]/70 via-transparent to-transparent" />
            <span className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[28px] sm:text-[56px] font-black tracking-tight text-white/25 whitespace-nowrap select-none">
              #ABHEEPAY
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- MODERN BUSINESS BANKING ---------------- */}
      <section className="px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Modern Business <span className="text-[#14B8A6]">Banking</span>
            </h2>

            <p className="text-[12px] font-semibold text-slate-500 mt-2">
              Empowering Startups, SME's & Enterprises
            </p>
          </div>

          <div className="text-[12.5px] leading-relaxed text-slate-600">

            {/* First paragraph - Always visible */}
            <p>
              We provide secure payment solutions, business banking services, API integrations,
              and enterprise technology that support businesses at every stage of their journey —
              from API banking solutions, payouts, collections, and expense management, to gift
              cards, identity verification, and enterprise utility payments.
            </p>

            {/* Remaining paragraphs - Hidden initially */}
            {showMore && (
              <div className="space-y-4 mt-4">

                <p>
                  Our platform is designed for{" "}
                  <span className="font-bold text-slate-800">
                    retailers, distributors, startups, enterprises, developers, and financial institutions
                  </span>{" "}
                  looking for reliable technology and modern payment infrastructure. Whether you need to
                  accept online payments, manage merchants, integrate APIs, or build a custom business
                  solution, AbheePay delivers practical technology backed by dedicated support.
                </p>

                <p>
                  <span className="font-bold text-slate-800">
                    Trust is our foundation,
                  </span>{" "}
                  maintained through the highest standards of integrity and transparency. We use
                  state-of-the-art security to protect every transaction and keep customer data secure.
                </p>

                <p>
                  <span className="font-bold text-slate-800">
                    Join us
                  </span>{" "}
                  on our journey to transform the financial landscape of India, making it more
                  inclusive, sustainable, efficient, and forward-thinking.
                </p>

              </div>
            )}

            {/* Read More / Read Less */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 inline-flex items-center gap-1.5 text-[#14B8A6] font-semibold text-[12.5px] hover:text-[#0f9f91] transition-colors"
            >
              {showMore ? "Read Less" : "Read More"}

              {showMore ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

          </div>
        </div>
      </section>

      {/* ---------------- WHAT WE DO ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 bg-[#F7FDFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#14B8A6] mb-2">What We Do</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              A Complete Ecosystem of Digital <span className="text-[#14B8A6]">Payment & Business Technology</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {whatWeDo.map((block, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-[#14B8A6]/10 text-[#0F9E90] flex items-center justify-center mb-4">
                  {block.icon}
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2">{block.title}</h3>
                <p className="text-[12px] leading-relaxed text-slate-500 mb-4">{block.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11.5px] text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] mt-[1px] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE ABHEEPAY ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#14B8A6] mb-2">Why AbheePay</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Choose <span className="text-[#14B8A6]">AbheePay?</span>
            </h2>
            <p className="text-[12.5px] text-slate-500 mt-3 leading-relaxed">
              Businesses trust AbheePay because we combine technology, payments, and business
              expertise into one integrated platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#14B8A6]/40 hover:shadow-sm transition">
                <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 text-[#0F9E90] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-[13.5px] font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-[11.5px] leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BUSINESS HIGHLIGHTS ---------------- */}
      <section className="bg-[#0A1122] text-white px-5 sm:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Business <span className="text-[#14B8A6]">Highlights</span>
            </h2>
            <p className="text-[11px] text-slate-400 max-w-sm">
              AbheePay continues to build solutions that support businesses across India.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
            {businessHighlights.map((s, i) => (
              <div key={i} className="border-l border-white/15 pl-4">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <AnimatedStat value={s.value} />
                </h3>
                <p className="text-[10px] uppercase tracking-wide text-slate-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-500 italic mt-8">
            Figures shown are illustrative — update with your live business numbers as they grow.
          </p>
        </div>
      </section>



      {/* ---------------- INDUSTRIES WE SERVE ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 bg-[#F7FDFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#14B8A6] mb-2">Industries We Serve</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our solutions support businesses <span className="text-[#14B8A6]">across multiple industries.</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span
                key={ind}
                className="bg-white border border-slate-200 rounded-full px-4 py-2 text-[11.5px] font-semibold text-slate-700"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EXPLORE OUR COMPANY ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#14B8A6] mb-2">Explore Our Company</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Learn More About <span className="text-[#14B8A6]">AbheePay</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {companyLinks.map((link) => (
              <Link
                key={link.title}
                to={link.to}
                className="group bg-white border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-[#14B8A6]/40 hover:shadow-sm transition"
              >
                <h3 className="text-[14px] font-bold text-slate-900 mb-2">{link.title}</h3>
                <p className="text-[11.5px] leading-relaxed text-slate-500 mb-5">{link.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-[#0F9E90]">
                  {link.cta}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* <section className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12">
            One <span className="text-[#14B8A6]">TEAM.</span> One VISION.
          </h2>
          <div className="space-y-10">
            {teamRows.map((row, ri) => (
              <div key={ri} className="flex flex-wrap justify-center gap-8 sm:gap-12">
                {row.map((person, pi) => {
                  const initials = person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("");
                  return (
                    <div key={pi} className="w-28 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-[#E6FFFB] border-2 border-[#14B8A6]/30 flex items-center justify-center text-[#0F9E90] font-bold text-lg mb-3">
                        {initials}
                      </div>
                      <p className="font-semibold text-slate-900 text-[12px] leading-snug">
                        {person.name}
                      </p>
                      <p className="text-[10.5px] text-slate-500 mt-0.5">{person.role}</p>
                      <Linkedin className="w-3.5 h-3.5 text-[#14B8A6] mt-1.5" />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ---------------- OUR VALUES ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20 bg-[#F7FDFC]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className={`${values[0].shade} ${values[0].text} rounded-2xl p-6 flex flex-col justify-between min-h-[170px]`}>
              <p className="text-[12px] leading-relaxed opacity-90">{values[0].desc}</p>
              <h3 className="text-lg font-bold mt-4">{values[0].title}</h3>
            </div>
            <div className={`${values[1].shade} ${values[1].text} rounded-2xl p-6 flex flex-col justify-between min-h-[170px]`}>
              <p className="text-[12px] leading-relaxed opacity-90">{values[1].desc}</p>
              <h3 className="text-lg font-bold mt-4">{values[1].title}</h3>
            </div>

            <div className={`${values[2].shade} ${values[2].text} rounded-2xl p-6 sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-h-[110px]`}>
              <h3 className="text-lg font-bold">{values[2].title}</h3>
              <p className="text-[12px] leading-relaxed opacity-80 sm:max-w-xl">{values[2].desc}</p>
            </div>

            <div className={`${values[3].shade} ${values[3].text} rounded-2xl p-6 flex flex-col justify-between min-h-[170px] sm:col-span-1`}>
              <p className="text-[12px] leading-relaxed opacity-90">{values[3].desc}</p>
              <h3 className="text-lg font-bold mt-4">{values[3].title}</h3>
            </div>
            <div className={`${values[4].shade} ${values[4].text} rounded-2xl p-6 flex flex-col justify-between min-h-[170px]`}>
              <p className="text-[12px] leading-relaxed opacity-90">{values[4].desc}</p>
              <h3 className="text-lg font-bold mt-4">{values[4].title}</h3>
            </div>

            <div className={`${values[5].shade} ${values[5].text} rounded-2xl p-6 sm:col-span-2 min-h-[110px]`}>
              <h3 className="text-lg font-bold mb-2">{values[5].title}</h3>
              <p className="text-[12px] leading-relaxed opacity-80">{values[5].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CULTURE ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img
              src="#"
              alt="Team working"
              className="rounded-xl object-cover h-40 sm:h-52 w-full"
            />
            <div className="flex flex-col gap-3">
              <div className="bg-[#0A1122] rounded-xl h-16 sm:h-24 flex items-center justify-center text-white font-bold tracking-wide text-[11px]">
                abheepay
              </div>
              <img
                src="#"
                alt="Team celebration"
                className="rounded-xl object-cover h-24 sm:h-24 w-full"
              />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#14B8A6] mb-2">
              Our Culture
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Collaborate, Create &amp; Succeed <span className="text-[#14B8A6]">Together</span>
            </h2>
            <p className="text-[12.5px] text-slate-600 leading-relaxed mt-4 max-w-md">
              We're a team of builders, bankers, and problem-solvers who believe great financial
              products come from people who trust each other enough to challenge, support, and grow
              together every day.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- BENEFITS ---------------- */}
      <section className="bg-[#0A1122] text-white px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Benefits</h2>
          <p className="text-[12px] text-slate-400 mt-1 mb-10">
            We Care about our <span className="text-[#14B8A6] font-semibold">Team</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
            {benefits.map((b, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center">
                  {b.icon}
                </div>
                <p className="text-[11.5px] font-medium text-slate-200 leading-snug">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LET'S BUILD THE FUTURE TOGETHER ---------------- */}
      <section className="px-5 sm:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-to-br from-[#0A1122] to-[#0F9E90] px-8 py-12 sm:py-16 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
            Let's Build the <span className="text-[#5EEAD4]">Future Together</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[12.5px] leading-relaxed text-slate-200">
            Whether you're looking for payment solutions, enterprise technology, APIs, or a
            trusted business partner, we're here to help you build with confidence.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6] hover:bg-[#0F9E90] transition text-white text-[12px] font-semibold px-5 py-2.5">
              Contact Sales <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/overview" className="inline-flex items-center gap-2 rounded-full border border-white/25 hover:bg-white/10 transition text-white text-[12px] font-semibold px-5 py-2.5">
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="grid sm:grid-cols-2">
        <img
          src="#"
          alt="Team outdoors"
          className="w-full h-56 sm:h-72 object-cover"
        />
        <div className="bg-gradient-to-br from-[#0A1122] to-[#0F9E90] flex flex-col justify-center px-8 py-10 sm:py-0">
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            Join Our
            <br />
            Growing Team
          </h2>
          <Link
            to="/company/careers"
            className="mt-5 inline-block w-fit bg-[#14B8A6] hover:bg-[#0F9E90] transition text-white text-[12px] font-semibold rounded-full px-5 py-2"
          >
            Find your calling
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
