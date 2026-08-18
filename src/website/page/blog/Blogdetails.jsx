
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import posts from "./Blogdata.json";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Search,
  Plus,
  Mail,
  ChevronUp,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static site-wide data (nav, sidebar, footer) — not per-post data   */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Go to Instantpay", href: "/" },
  { label: "Verification", href: "/verification" },
  { label: "Payments", href: "/payments" },
  { label: "API Banking", href: "/api-banking" },
  { label: "Use Cases", href: "/use-cases", hasDropdown: true },
  { label: "Trending", href: "/trending" },
];

const CATEGORIES = [
  "API",
  "Banking",
  "Business Banking",
  "Collection",
  "eCommerce",
  "Expense Card",
  "FinTech",
  "Gift Card",
  "Identity Verification and Security",
  "Inclusive Banking",
  "Insurance",
  "Insurtech",
  "Loans",
  "Payments",
  "Personal Banking",
  "SAAS",
  "Solutions",
  "Technology",
  "Uncategorized",
  "What's New",
];

const ARCHIVES = [
  "April 2026", "March 2026", "February 2026", "August 2024", "July 2024",
  "June 2024", "May 2024", "April 2024", "March 2024", "February 2024",
  "January 2024", "December 2023", "November 2023",
];

/* ------------------------------------------------------------------ */

export default function BlogDetails() {
  const { id } = useParams();

  const postIndex = posts.findIndex(
    (p) => p.id?.toLowerCase() === id?.toLowerCase()
  );
  const post = postIndex !== -1 ? posts[postIndex] : null;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <Link
          to="/blog"
          className="text-[#1e56a0] font-bold border-b-2 border-[#1e56a0]"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  // Recent posts for the sidebar — fall back to related posts, else siblings
  const recentPosts =
    post.recentPosts ||
    (post.related || []).map((idx) => posts[idx]).filter(Boolean).slice(0, 5);

  // Table of contents — use post.tableOfContents if provided, else derive
  // a simple one from post.sections headings
  const toc =
    post.tableOfContents ||
    (post.sections || []).map((s) => ({ label: s.heading, anchor: slugify(s.heading) }));

  return (
    <div className={`bg-white min-h-screen text-black ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 pt-10">
        {/* ---------- Category tag ---------- */}
        {post.tag && (
          <span className="inline-block bg-[#1e56a0] text-white text-xs font-bold uppercase tracking-wide px-3 py-1 mb-4">
            {post.tag}
          </span>
        )}

        {/* ---------- Title ---------- */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
          {post.title}
        </h1>

        {/* ---------- Date ---------- */}
        {post.date && (
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-5">
            {post.date}
          </p>
        )}

        {/* ---------- Share row ---------- */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <ShareButton
            icon={<Facebook size={16} fill="white" />}
            label="Share on Facebook"
            className="bg-[#3b5998] hover:bg-[#33497e]"
          />
          <ShareButton
            icon={<Twitter size={16} fill="white" />}
            label="Share on Twitter"
            className="bg-[#4aa8e0] hover:bg-[#3d94c8]"
          />
          <button
            aria-label="More share options"
            className="w-9 h-9 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            <Plus size={16} />
          </button>
        </div>
{/* 
        ---------- Featured image ----------
        {post.img && (
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-auto object-cover mb-2"
          />
        )} */}
      </article>

      {/* ================= Content + sidebars ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-10 grid lg:grid-cols-12 gap-10">
        {/* ---------- Sticky share rail ---------- */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-4 sticky top-24 h-fit">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">
            SHARE
          </p>
          <RailIcon icon={<Facebook size={16} />} />
          <RailIcon icon={<Twitter size={16} />} />
          <RailIcon icon={<span className="text-sm font-bold">P</span>} />
          <RailIcon icon={<Mail size={16} />} />
        </div>

        {/* ---------- Main content ---------- */}
        <div className="lg:col-span-7 space-y-6">
          {(post.content || []).map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-gray-800">
              {para}
            </p>
          ))}

          {/* CTA button */}
          {post.ctaLabel && (
            <div className="flex justify-center py-4">
              <a
                href={post.ctaHref || "#"}
                className="bg-[#1d4ed8] hover:bg-[#1a43b8] text-white text-sm font-semibold px-6 py-3 rounded-md text-center"
              >
                {post.ctaLabel}
              </a>
            </div>
          )}

          {/* Table of contents */}
          {toc.length > 0 && (
            <div className="bg-gray-100 p-5 rounded">
              <p className="font-bold text-sm mb-3">Table of contents</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                {toc.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.anchor}`}
                      className="text-[#1e56a0] hover:underline"
                    >
                      {item.label}
                    </a>
                    {item.children && item.children.length > 0 && (
                      <ol className="list-decimal list-inside ml-5 mt-1 space-y-1 text-gray-600">
                        {item.children.map((child, j) => (
                          <li key={j}>
                            <a
                              href={`#${child.anchor}`}
                              className="text-[#1e56a0] hover:underline"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* ---------- Body sections ---------- */}
          {(post.sections || []).map((section, i) => (
            <section key={i} id={slugify(section.heading)} className="pt-4">
              <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>

              {section.image && (
                <figure className="mb-4">
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="w-full h-auto object-cover"
                  />
                  {section.imageCaption && (
                    <figcaption className="text-xs text-gray-500 mt-2">
                      {section.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}

              {(section.paragraphs || []).map((para, j) => (
                <p key={j} className="text-base leading-relaxed text-gray-800 mb-4">
                  {para}
                </p>
              ))}

              {(section.subsections || []).map((sub, k) => (
                <div key={k} id={slugify(sub.heading)} className="mb-5">
                  <h3 className="font-bold text-base mb-2">{sub.heading}</h3>
                  {(sub.paragraphs || []).map((p, l) => (
                    <p key={l} className="text-base leading-relaxed text-gray-800 mb-2">
                      {p}
                    </p>
                  ))}
                  {sub.solution && (
                    <p className="text-base leading-relaxed text-gray-800">
                      <span className="font-bold">The solution: </span>
                      {sub.solution}
                    </p>
                  )}
                </div>
              ))}

              {section.callout && (
                <div className="bg-gray-100 border-l-4 border-black/70 p-4 my-4">
                  <p className="font-bold text-sm mb-1">{section.callout.title}</p>
                  <p className="text-sm text-gray-700">{section.callout.body}</p>
                </div>
              )}

              {(section.bullets || []).length > 0 && (
                <ul className="space-y-2 mb-4">
                  {section.bullets.map((b, m) => (
                    <li key={m} className="text-base text-gray-800">
                      <span className="font-bold">{b.term}: </span>
                      {b.description}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Legacy "why choose" grid support */}
          {post.whyChoose && (
            <div className="grid sm:grid-cols-2 gap-0 border border-black mt-10">
              {post.whyChoose.map((item, i) => (
                <div
                  key={i}
                  className="p-5 border border-gray-100 flex items-start gap-3 bg-white"
                >
                  <span className="text-[#1e56a0] font-bold">→</span>
                  <span className="font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* ---------- Did you know ---------- */}
          {post.didYouKnow && (
            <div className="bg-gray-100 border-l-4 border-black/70 p-4 my-4">
              <p className="font-bold text-sm mb-1">Did You Know?</p>
              <p className="text-sm text-gray-700">{post.didYouKnow}</p>
            </div>
          )}

          {/* ---------- Final thoughts ---------- */}
          {post.finalThoughts && (
            <section id="final-thoughts" className="pt-4">
              <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
              {post.finalThoughts.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-gray-800 mb-4">
                  {p}
                </p>
              ))}
            </section>
          )}

          {post.bottomCta && (
            <a
              href={post.bottomCta.href || "#"}
              className="block bg-[#1d4ed8] text-white rounded-md p-6 my-4"
            >
              <p className="font-bold">{post.bottomCta.title}</p>
              <p className="text-sm text-white/80">{post.bottomCta.subtitle}</p>
            </a>
          )}

          {/* ---------- FAQs ---------- */}
          {post.faqs && post.faqs.length > 0 && (
            <section id="faqs" className="pt-6">
              <h2 className="text-2xl font-bold mb-4">FAQs</h2>
              <div className="space-y-6">
                {post.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-base mb-2">
                      {i + 1}. {faq.question}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-800">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ---------- Bottom tag + share ---------- */}
          <div className="flex items-center justify-between border-t pt-6 mt-8">
            {post.tag && (
              <span className="border border-gray-300 text-xs font-bold uppercase tracking-wide px-3 py-1">
                {post.tag}
              </span>
            )}
            <div className="flex items-center gap-3 text-gray-500">
              <RailIcon icon={<Facebook size={14} />} small />
              <RailIcon icon={<Twitter size={14} />} small />
              <RailIcon icon={<Linkedin size={14} />} small />
            </div>
          </div>

          {/* ---------- Author bio ---------- */}
          {post.author && (
            <div className="flex items-start gap-4 bg-gray-50 p-5 mt-8">
              {post.authorImg && (
                <img
                  src={post.authorImg}
                  alt={post.author}
                  className="w-14 h-14 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-bold text-sm">{post.author}</p>
                {post.authorBio && (
                  <p className="text-sm text-gray-600 mt-1">{post.authorBio}</p>
                )}
              </div>
            </div>
          )}

          {/* ---------- Related posts ---------- */}
          {post.related && post.related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-bold mb-6">Related Posts</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {post.related.map((idx) => {
                  const rp = posts[idx];
                  if (!rp) return null;
                  return (
                    <Link key={idx} to={`/blog/${rp.id}`} className="group block">
                      <img
                        src={rp.img}
                        alt={rp.title}
                        className="w-full h-24 object-cover mb-2"
                      />
                      <p className="text-sm font-semibold group-hover:underline">
                        {rp.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* ---------- Comment form ---------- */}
          <div className="mt-14">
            <h2 className="text-lg font-bold mb-6 border-b pb-3">Write A Comment</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e56a0]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e56a0]"
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e56a0]"
                />
              </div>
              <textarea
                placeholder="Enter your comment here.."
                rows={5}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1e56a0]"
              />
              <label className="flex items-center gap-2 text-xs text-gray-500">
                <input type="checkbox" />
                Save my name, email, and website in this browser for the next time I comment.
              </label>
              <button
                type="submit"
                className="bg-black text-white text-sm font-semibold uppercase tracking-wide px-6 py-3"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* ---------- Right sidebar ---------- */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="sticky top-24 space-y-10">
            {recentPosts.length > 0 && (
              <div>
                <h3 className="font-bold text-base mb-4 pb-2 border-b">Recent Posts</h3>
                <ul className="space-y-3">
                  {recentPosts.map((rp, i) => (
                    <li key={i} className="text-sm">
                      <Link to={`/blog/${rp.id}`} className="text-gray-800 hover:text-[#1e56a0]">
                        {rp.title}
                      </Link>{" "}
                      <span className="text-gray-400">{rp.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="font-bold text-base mb-4 pb-2 border-b">Categories</h3>
              <ul className="space-y-2 text-sm">
                {CATEGORIES.map((c) => (
                  <li key={c}>
                    <a href="#" className="text-gray-700 hover:text-[#1e56a0]">
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-4 pb-2 border-b">Search</h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder=""
                  className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none"
                />
                <button className="bg-gray-800 text-white text-xs font-semibold px-4">
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function ShareButton({ icon, label, className }) {
  return (
    <button
      className={`flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded ${className}`}
    >
      {icon}
      {label}
    </button>
  );
}

function RailIcon({ icon, small }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1e56a0] hover:text-white transition-colors ${
        small ? "w-7 h-7" : "w-9 h-9"
      }`}
    >
      {icon}
    </span>
  );
}

function slugify(str = "") {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function SiteHeader() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold tracking-tight">
          Blogbytes
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href} className="hover:text-[#1e56a0] flex items-center gap-1">
              {link.label}
              {link.hasDropdown && <span className="text-[10px]">▾</span>}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-gray-600">
          <Facebook size={16} className="hover:text-[#1e56a0] cursor-pointer" />
          <Twitter size={16} className="hover:text-[#1e56a0] cursor-pointer" />
          <Instagram size={16} className="hover:text-[#1e56a0] cursor-pointer" />
          <Youtube size={16} className="hover:text-[#1e56a0] cursor-pointer" />
          <Linkedin size={16} className="hover:text-[#1e56a0] cursor-pointer" />
          <span className="w-px h-4 bg-gray-300" />
          <Search size={16} className="hover:text-[#1e56a0] cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-gray-50 mt-20 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-sm mb-4">Archives</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
            {ARCHIVES.map((a) => (
              <li key={a}>
                <a href="#" className="hover:text-[#1e56a0]">{a}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4">Categories</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
            {CATEGORIES.map((c) => (
              <li key={c}>
                <a href="#" className="hover:text-[#1e56a0]">{c}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
          <span
            key={i}
            className="w-9 h-9 rounded-full bg-[#1e56a0] text-white flex items-center justify-center"
          >
            <Icon size={16} />
          </span>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        © 2019 THEMESPHERE. DESIGNED BY <a href="#" className="underline">THEMESPHERE</a>.
      </p>

      <div className="flex justify-center mt-4">
        <a href="#top" className="text-gray-400 hover:text-[#1e56a0]">
          <ChevronUp size={18} />
        </a>
      </div>
    </footer>
  );
}