import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import posts from "./Blogdata.json";

// ---- Design tokens (fintech "statement / ticket" direction) ----
// ink:   #0B1420   paper: #F7F7F4   teal: #00D3CD   amber: #FFB020   line: #D8DCE1
const FONT_DISPLAY = "'Space Grotesk', 'Helvetica Neue', sans-serif";
const FONT_BODY = "'Inter', 'Helvetica Neue', sans-serif";
const FONT_MONO = "'JetBrains Mono', 'Courier New', monospace";

function useGoogleFonts() {
  useEffect(() => {
    const id = "abheepay-blog-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

// Perforated "ticket" notch — a small circle cut into an edge, matching the
// page background so it reads as a hole punched through the card.
function Notch({ side }) {
  const pos =
    side === "left" ? { left: "-7px" } : { right: "-7px" };
  return (
    <span
      aria-hidden="true"
      className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#F7F7F4] border border-[#D8DCE1] z-20"
      style={pos}
    />
  );
}

export default function BlogDetails() {
  const { id } = useParams();
  useGoogleFonts();

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
      <div
        className="flex items-center justify-center min-h-screen bg-[#F7F7F4]"
        style={{ fontFamily: FONT_BODY }}
      >
        <Link
          to="/blog"
          className="text-[#00D3CD] font-semibold border-b-2 border-[#00D3CD] pb-1"
          style={{ fontFamily: FONT_MONO }}
        >
          ← BACK TO BLOG
        </Link>
      </div>
    );
  }

  return (
    <div
      className="bg-[#F7F7F4] min-h-screen text-[#0B1420] pb-16"
      style={{ fontFamily: FONT_BODY }}
    >
      {/* ---------- Header / statement strip ---------- */}
      <div className="max-w-6xl mx-auto pt-9 md:pt-14 px-4">
        <div
          className={`flex items-center gap-2 mb-4 transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ fontFamily: FONT_MONO }}
        >
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#0B1420] text-[#00D3CD] text-[10px] font-medium uppercase tracking-widest rounded-sm">
            {post.tag}
          </span>
          <span className="text-[10px] text-[#8A9099] tracking-widest">
            DOC NO. {String(postIndex + 1).padStart(3, "0")}-{id?.toUpperCase()}
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-7 items-end">
          <div
            className={`md:col-span-7 space-y-4 transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h1
              className="text-3xl md:text-[2.3rem] leading-[1.05] tracking-tight font-bold"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              {post.title}
            </h1>

            <div
              className="flex items-center gap-2 text-xs text-[#5B6270]"
              style={{ fontFamily: FONT_MONO }}
            >
              <span>{post.author}</span>
              <span className="text-[#00D3CD]">·</span>
              <span>{post.date}</span>
            </div>
          </div>

          {/* dashed statement rule, mirrors a receipt's totals line */}
          <div className="md:col-span-5 hidden md:block">
            <div className="border-t-2 border-dashed border-[#D8DCE1]" />
          </div>
        </div>
      </div>

      {/* ---------- Hero image, styled as a ticket stub ---------- */}
      <div className="max-w-6xl mx-auto px-4 mt-7">
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
          }`}
        >
          <div className="relative border border-[#D8DCE1] bg-white p-1.5 md:p-2">
            <Notch side="left" />
            <Notch side="right" />
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-[214px] md:h-[295px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div
              className="absolute left-2 right-2 md:left-3 md:right-3 top-full -translate-y-4 flex justify-between text-[9px] tracking-widest text-white px-3 py-1.5 bg-[#0B1420]"
              style={{ fontFamily: FONT_MONO }}
            >
              <span>ABHEEPAY // FIELD NOTES</span>
              <span>VALID: {post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Body ---------- */}
      <div className="max-w-6xl mx-auto mt-16 px-4 grid lg:grid-cols-12 gap-9">
        <div className="lg:col-span-8 space-y-5">
          {post.content?.map((para, i) => (
            <p
              key={i}
              className="text-base md:text-lg leading-relaxed text-[#2B3140] font-light"
            >
              {para}
            </p>
          ))}

          {post.whyChoose && (
            <div className="mt-11">
              <div
                className="text-[10px] tracking-[0.25em] text-[#8A9099] mb-3"
                style={{ fontFamily: FONT_MONO }}
              >
                WHY IT WORKS
              </div>
              <div className="border-t border-[#D8DCE1]">
                {post.whyChoose.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 py-3.5 border-b border-[#D8DCE1] group"
                  >
                    <span
                      className="text-[#00D3CD] text-xs shrink-0"
                      style={{ fontFamily: FONT_MONO }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-[#0B1420] group-hover:text-[#00A9A4] transition-colors">
                      {item}
                    </span>
                    <span className="ml-auto text-[#00D3CD] opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ---------- Sidebar: statement summary card ---------- */}
        <div className="lg:col-span-4">
          <div className="sticky top-7 space-y-3.5">
            <div className="bg-[#0B1420] text-white p-5 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 text-[8px] tracking-widest text-[#00D3CD] px-2 py-0.5 border-l border-b border-white/10"
                style={{ fontFamily: FONT_MONO }}
              >
                SUMMARY
              </div>
              <h2
                className="text-lg mb-5 uppercase tracking-wide font-semibold"
                style={{ fontFamily: FONT_DISPLAY }}
              >
                Highlights
              </h2>

              <div className="space-y-4">
                {post.highlights?.map((f, i) => (
                  <div
                    key={i}
                    className="flex gap-3 border-b border-white/10 pb-3.5 last:border-0 last:pb-0"
                  >
                    <span
                      className="text-[#00D3CD] text-[10px] mt-1 shrink-0"
                      style={{ fontFamily: FONT_MONO }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-xs uppercase tracking-wide mb-1">
                        {f.title}
                      </h3>
                      <p className="text-white/60 text-xs leading-snug">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/blog"
              className="flex items-center justify-center gap-2 w-full py-3 border border-[#0B1420] font-medium hover:bg-[#0B1420] hover:text-[#00D3CD] transition-all uppercase text-[10px] tracking-[0.2em]"
              style={{ fontFamily: FONT_MONO }}
            >
              ← All blogs
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- Related, styled as ticket stubs ---------- */}
      {post.related && (
        <div className="max-w-6xl mx-auto mt-20 px-4">
          <div className="flex items-center gap-3 mb-7">
            <h2
              className="text-xl md:text-2xl font-bold tracking-tight"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              More to Read
            </h2>
            <div className="flex-1 border-t border-dashed border-[#D8DCE1]" />
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {post.related.map((idx) => (
              <Link
                key={idx}
                to={`/blog/${posts[idx].id}`}
                className="group block border border-[#D8DCE1] bg-white p-2 relative"
              >
                <Notch side="left" />
                <Notch side="right" />
                <div className="relative overflow-hidden mb-3.5">
                  <img
                    src={posts[idx].img}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={posts[idx].title}
                  />
                  <div className="absolute inset-0 bg-[#00D3CD]/0 group-hover:bg-[#00D3CD]/10 transition-colors" />
                </div>

                <div
                  className="text-[9px] tracking-widest text-[#8A9099] mb-1.5 px-1"
                  style={{ fontFamily: FONT_MONO }}
                >
                  {posts[idx].tag || "ARTICLE"}
                </div>

                <h3
                  className="text-lg font-semibold px-1 pb-2 group-hover:text-[#00A9A4] transition-colors"
                  style={{ fontFamily: FONT_DISPLAY }}
                >
                  {posts[idx].title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}