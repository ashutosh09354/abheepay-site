
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import posts from "./Blogdata.json";

const FONT_DISPLAY = "'Poppins', 'Helvetica Neue', sans-serif";
const FONT_BODY = "'Inter', 'Helvetica Neue', sans-serif";

function useGoogleFonts() {
  useEffect(() => {
    const id = "abheepay-blog-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
}

// Small pill badge used for the category tag, floated over the card image.
function TagBadge({ children }) {
  return (
    <span
      className="inline-block bg-[#00B8A9] text-white text-[8px] font-semibold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded shadow-sm"
      style={{ fontFamily: FONT_BODY }}
    >
      {children}
    </span>
  );
}

// Reusable meta chip (icon + value) for read-time / comments / author / date rows.
function MetaChip({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[#6B7280]">
      <span aria-hidden="true" className="text-[10px] leading-none">
        {icon}
      </span>
      {children}
    </span>
  );
}

const PAGE_SIZE = 8;

export default function BlogPage() {
  useGoogleFonts();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (

    <div className="bg-[#F7F9FA] min-h-screen pt-16 sm:pt-20 overflow-x-hidden" style={{ fontFamily: FONT_BODY, zoom: 1.2 }}>
      {/* ---------- Hero banner ---------- */}
      <div className="max-w-7xl mx-auto px-4 pt-4 sm:pt-5">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <img
            src="public/assets/image/blog/banner.jpg"
            alt="Blog Banner"
            className="w-full h-[200px] sm:h-[250px] object-cover hidden sm:block"
          />
          <img
            src="public/assets/image/blog/banner.jpg"
            alt="Blog Banner Mobile"
            className="w-full object-cover h-[200px] sm:hidden"
          />
          {/* Dark gradient scrim so white type stays legible over any photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1622]/95 via-[#0B1622]/80 to-[#0B1622]/40" />

          <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-6">
            <span
              className="text-[#00B8A9] text-[10px] font-semibold tracking-[0.2em] mb-2"
              style={{ fontFamily: FONT_BODY }}
            >
              ABHEEPAY JOURNAL
            </span>
            <h1
              className="text-white text-xl sm:text-2xl font-bold tracking-tight leading-[1.1] max-w-xl"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Notes on Digital Payments
            </h1>
            <p className="text-[#C7CDD6] text-xs mt-2 max-w-md leading-relaxed">
              Insights, trends and tips on digital payments, financial
              services and business growth.
            </p>
          </div>

        </div>
      </div>

      {/* ---------- Post grid ---------- */}
      <div className="py-7 sm:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <h2
              className="text-sm font-semibold text-[#0B1622]"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Latest Articles
            </h2>
            <span className="text-[10px] font-medium text-[#6B7280] bg-white border border-[#E7EAEE] rounded-full px-2 py-0.5">
              {posts.length} entries
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {visiblePosts.map((post, index) => (
              <div
                key={post.id || index}
                className="group bg-white border border-[#E7EAEE] rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* image with tag badge floating on top */}
                <div className="relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-22 object-cover"
                    style={{ height: "88px" }}
                  />
                  <div className="absolute left-1.5 bottom-1.5">
                    <TagBadge>{post.tag}</TagBadge>
                  </div>
                </div>

                <div className="p-2.5 flex flex-col flex-1">
                  {/* read time / comments */}
                  <div className="flex items-center gap-2 text-[10px] mb-1.5">
                    <MetaChip icon="⏳">{post.time}</MetaChip>
                    <MetaChip icon="💬">{post.comments}</MetaChip>
                  </div>

                  {/* title */}
                  <h3
                    className="text-xs font-semibold text-[#0B1622] leading-snug mb-2 flex-1 group-hover:text-[#00B8A9] transition-colors"
                    style={{ fontFamily: FONT_DISPLAY }}
                  >
                    {post.title}
                  </h3>

                  {/* author / date */}
                  <div className="flex items-center gap-2 text-[10px] mb-2 pt-2 border-t border-[#E7EAEE]">
                    <MetaChip icon="👤">{post.author}</MetaChip>
                    <MetaChip icon="📅">{post.date}</MetaChip>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-auto inline-flex items-center gap-1 text-[#00B8A9] text-[11px] font-semibold hover:gap-1.5 transition-all"
                  >
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center gap-1.5 border border-[#00B8A9] text-[#00B8A9] text-xs font-semibold rounded-full px-4 py-1.5 hover:bg-[#00B8A9] hover:text-white transition-colors"
              >
                Load More Articles <span aria-hidden="true">↻</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}