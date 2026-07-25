// // BlogPage.jsx (React JSX + Tailwind CSS) ✅ FULL UPDATED
// import React from "react";
// import { Link } from "react-router-dom";
// import posts from "./Blogdata.json";

// export default function BlogPage() {
//   return (
//     <div className="bg-white">
//       <div className="relative w-full">
//         <img
//           src="public/assets/image/blog/banner.jpg"
//           alt="Blog Banner"
//           className="w-full h-[500px] object-cover hidden sm:block"
//         />
//         <img
//           src="public/assets/image/blog/banner.jpg"
//           alt="Blog Banner Mobile"
//           className="w-full object-cover h-[300px] sm:hidden"
//         />
//         <div className="absolute inset-0 bg-black/50"></div>
        
//       </div>

  
//       <div className="py-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {posts.map((post, index) => (
//               <div
//                 key={post.id || index}
//                 className="bg-white border border-black/10 rounded-md shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
//               >
              
//                 <img
//                   src={post.img}
//                   alt={post.title}
//                   className="w-full h-48 object-cover"
//                 />

              
//                 <div className="p-4 flex flex-col flex-1">
                 
//                   <div className="flex items-center gap-4 text-[10px] text-black/60 mb-2">
//                     <span className="flex items-center gap-1">⏳ {post.time}</span>
//                     <span className="flex items-center gap-1">
//                       💬 {post.comments}
//                     </span>
//                   </div>

                  
//                   <p className="text-[11px] font-bold text-[#00D3CD] uppercase tracking-wide">
//                     {post.tag}
//                   </p>

//                   <h3 className="text-sm font-semibold text-black leading-5 mt-1 mb-3 flex-1">
//                     {post.title}
//                   </h3>

             
//                   <div className="flex items-center gap-6 text-xs text-black/70 mb-4">
//                     <span className="flex items-center gap-1">
//                       👤 {post.author}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       📅 {post.date}
//                     </span>
//                   </div>

                
//                   <Link
//                     to={`/blog/${post.id}`}
//                     className="mt-auto text-center bg-black text-white text-sm font-medium py-2 px-4 rounded hover:bg-[#00D3CD] hover:text-black transition-colors"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// // BlogPage.jsx (React JSX + Tailwind CSS) ✅ FULL UPDATED
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import posts from "./Blogdata.json";

// // ---- Design tokens (same "statement / ticket" system as BlogDetails.jsx) ----
// // ink: #0B1420   paper: #F7F7F4   teal: #00D3CD   line: #D8DCE1
// const FONT_DISPLAY = "'Space Grotesk', 'Helvetica Neue', sans-serif";
// const FONT_BODY = "'Inter', 'Helvetica Neue', sans-serif";
// const FONT_MONO = "'JetBrains Mono', 'Courier New', monospace";

// function useGoogleFonts() {
//   useEffect(() => {
//     const id = "abheepay-blog-fonts";
//     if (document.getElementById(id)) return;
//     const link = document.createElement("link");
//     link.id = id;
//     link.rel = "stylesheet";
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap";
//     document.head.appendChild(link);
//   }, []);
// }

// // Perforated "ticket" notch, matches the card corner cut used on BlogDetails.
// function Notch({ side }) {
//   const pos = side === "left" ? { left: "-9px" } : { right: "-9px" };
//   return (
//     <span
//       aria-hidden="true"
//       className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F7F7F4] border border-[#D8DCE1] z-20"
//       style={pos}
//     />
//   );
// }

// export default function BlogPage() {
//   useGoogleFonts();

//   return (
//     <div className="bg-[#F7F7F4]" style={{ fontFamily: FONT_BODY }}>
//       {/* ---------- Banner ---------- */}
//       <div className="relative w-full">
//         <img
//           src="public/assets/image/blog/banner.jpg"
//           alt="Blog Banner"
//           className="w-full h-[500px] object-cover grayscale hidden sm:block"
//         />
//         <img
//           src="public/assets/image/blog/banner.jpg"
//           alt="Blog Banner Mobile"
//           className="w-full object-cover h-[300px] grayscale sm:hidden"
//         />
//         <div className="absolute inset-0 bg-[#0B1420]/70"></div>

//         <div className="absolute inset-0 flex flex-col items-start justify-end px-6 sm:px-10 pb-10 max-w-7xl mx-auto left-0 right-0">
//           <span
//             className="text-[#00D3CD] text-xs tracking-[0.3em] mb-4"
//             style={{ fontFamily: FONT_MONO }}
//           >
//             ABHEEPAY // JOURNAL
//           </span>
//           <h1
//             className="text-white text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]"
//             style={{ fontFamily: FONT_DISPLAY }}
//           >
//             Notes on Digital Payments
//           </h1>
//         </div>
//       </div>

//       {/* ---------- Post grid ---------- */}
//       <div className="py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-4 mb-10">
//             <span
//               className="text-xs tracking-[0.25em] text-[#8A9099]"
//               style={{ fontFamily: FONT_MONO }}
//             >
//               {String(posts.length).padStart(2, "0")} ENTRIES
//             </span>
//             <div className="flex-1 border-t border-dashed border-[#D8DCE1]" />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {posts.map((post, index) => (
//               <div
//                 key={post.id || index}
//                 className="relative bg-white border border-[#D8DCE1] flex flex-col p-2 hover:-translate-y-1 transition-transform duration-300"
//               >
//                 <Notch side="left" />
//                 <Notch side="right" />

//                 <img
//                   src={post.img}
//                   alt={post.title}
//                   className="w-full h-48 object-cover"
//                 />

//                 <div className="p-3 flex flex-col flex-1">
//                   {/* meta row */}
//                   <div
//                     className="flex items-center gap-4 text-[10px] text-[#8A9099] mb-3 tracking-wide"
//                     style={{ fontFamily: FONT_MONO }}
//                   >
//                     <span className="flex items-center gap-1">⏳ {post.time}</span>
//                     <span className="flex items-center gap-1">
//                       💬 {post.comments}
//                     </span>
//                   </div>

//                   {/* tag */}
//                   <p
//                     className="text-[10px] font-medium text-[#00A9A4] uppercase tracking-[0.2em]"
//                     style={{ fontFamily: FONT_MONO }}
//                   >
//                     {post.tag}
//                   </p>

//                   {/* title */}
//                   <h3
//                     className="text-base font-semibold text-[#0B1420] leading-snug mt-2 mb-4 flex-1"
//                     style={{ fontFamily: FONT_DISPLAY }}
//                   >
//                     {post.title}
//                   </h3>

//                   {/* dashed divider, ticket totals line */}
//                   <div className="border-t border-dashed border-[#D8DCE1] mb-4" />

//                   <div
//                     className="flex items-center gap-5 text-xs text-[#5B6270] mb-5"
//                     style={{ fontFamily: FONT_MONO }}
//                   >
//                     <span className="flex items-center gap-1">
//                       👤 {post.author}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       📅 {post.date}
//                     </span>
//                   </div>

//                   <Link
//                     to={`/blog/${post.id}`}
//                     className="mt-auto text-center border border-[#0B1420] text-[#0B1420] text-xs font-medium uppercase tracking-[0.15em] py-3 px-4 hover:bg-[#0B1420] hover:text-[#00D3CD] transition-colors"
//                     style={{ fontFamily: FONT_MONO }}
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// // BlogPage.jsx (React JSX + Tailwind CSS) ✅ FULL UPDATED — redesigned to match brand reference
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import posts from "./Blogdata.json";

// // ---- Design tokens ----
// // teal: #00B8A9 (brand accent)   ink: #0B1622 (headings / hero)   paper: #F7F9FA (page bg)
// // muted: #6B7280 (meta text)     line: #E7EAEE (card border)
// const FONT_DISPLAY = "'Poppins', 'Helvetica Neue', sans-serif";
// const FONT_BODY = "'Inter', 'Helvetica Neue', sans-serif";

// function useGoogleFonts() {
//   useEffect(() => {
//     const id = "abheepay-blog-fonts";
//     if (document.getElementById(id)) return;
//     const link = document.createElement("link");
//     link.id = id;
//     link.rel = "stylesheet";
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap";
//     document.head.appendChild(link);
//   }, []);
// }

// // Small pill badge used for the category tag, floated over the card image.
// function TagBadge({ children }) {
//   return (
//     <span
//       className="inline-block bg-[#00B8A9] text-white text-[8px] font-semibold uppercase tracking-[0.1em] px-1.5 py-0.5 rounded shadow-sm"
//       style={{ fontFamily: FONT_BODY }}
//     >
//       {children}
//     </span>
//   );
// }

// // Reusable meta chip (icon + value) for read-time / comments / author / date rows.
// function MetaChip({ icon, children }) {
//   return (
//     <span className="inline-flex items-center gap-1.5 text-[#6B7280]">
//       <span aria-hidden="true" className="text-[10px] leading-none">
//         {icon}
//       </span>
//       {children}
//     </span>
//   );
// }

// const PAGE_SIZE = 8;

// export default function BlogPage() {
//   useGoogleFonts();
//   const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

//   const visiblePosts = posts.slice(0, visibleCount);
//   const hasMore = visibleCount < posts.length;

//   return (
//     <div className="bg-[#F7F9FA] min-h-screen" style={{ fontFamily: FONT_BODY }}>
//       {/* ---------- Hero banner ---------- */}
//       <div className="max-w-7xl mx-auto px-4 pt-4 sm:pt-5">
//         <div className="relative w-full rounded-2xl overflow-hidden">
//           <img
//             src="public/assets/image/blog/banner.jpg"
//             alt="Blog Banner"
//             className="w-full h-[200px] sm:h-[250px] object-cover hidden sm:block"
//           />
//           <img
//             src="public/assets/image/blog/banner.jpg"
//             alt="Blog Banner Mobile"
//             className="w-full object-cover h-[200px] sm:hidden"
//           />
//           {/* Dark gradient scrim so white type stays legible over any photo */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0B1622]/95 via-[#0B1622]/80 to-[#0B1622]/40" />

//           <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-6">
//             <span
//               className="text-[#00B8A9] text-[10px] font-semibold tracking-[0.2em] mb-2"
//               style={{ fontFamily: FONT_BODY }}
//             >
//               ABHEEPAY JOURNAL
//             </span>
//             <h1
//               className="text-white text-xl sm:text-2xl font-bold tracking-tight leading-[1.1] max-w-xl"
//               style={{ fontFamily: FONT_DISPLAY }}
//             >
//               Notes on Digital Payments
//             </h1>
//             <p className="text-[#C7CDD6] text-xs mt-2 max-w-md leading-relaxed">
//               Insights, trends and tips on digital payments, financial
//               services and business growth.
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* ---------- Post grid ---------- */}
//       <div className="py-7 sm:py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-2 mb-4">
//             <h2
//               className="text-sm font-semibold text-[#0B1622]"
//               style={{ fontFamily: FONT_DISPLAY }}
//             >
//               Latest Articles
//             </h2>
//             <span className="text-[10px] font-medium text-[#6B7280] bg-white border border-[#E7EAEE] rounded-full px-2 py-0.5">
//               {posts.length} entries
//             </span>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
//             {visiblePosts.map((post, index) => (
//               <div
//                 key={post.id || index}
//                 className="group bg-white border border-[#E7EAEE] rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col overflow-hidden"
//               >
//                 {/* image with tag badge floating on top */}
//                 <div className="relative">
//                   <img
//                     src={post.img}
//                     alt={post.title}
//                     className="w-full h-22 object-cover"
//                     style={{ height: "88px" }}
//                   />
//                   <div className="absolute left-1.5 bottom-1.5">
//                     <TagBadge>{post.tag}</TagBadge>
//                   </div>
//                 </div>

//                 <div className="p-2.5 flex flex-col flex-1">
//                   {/* read time / comments */}
//                   <div className="flex items-center gap-2 text-[10px] mb-1.5">
//                     <MetaChip icon="⏳">{post.time}</MetaChip>
//                     <MetaChip icon="💬">{post.comments}</MetaChip>
//                   </div>

//                   {/* title */}
//                   <h3
//                     className="text-xs font-semibold text-[#0B1622] leading-snug mb-2 flex-1 group-hover:text-[#00B8A9] transition-colors"
//                     style={{ fontFamily: FONT_DISPLAY }}
//                   >
//                     {post.title}
//                   </h3>

//                   {/* author / date */}
//                   <div className="flex items-center gap-2 text-[10px] mb-2 pt-2 border-t border-[#E7EAEE]">
//                     <MetaChip icon="👤">{post.author}</MetaChip>
//                     <MetaChip icon="📅">{post.date}</MetaChip>
//                   </div>

//                   <Link
//                     to={`/blog/${post.id}`}
//                     className="mt-auto inline-flex items-center gap-1 text-[#00B8A9] text-[11px] font-semibold hover:gap-1.5 transition-all"
//                   >
//                     Read More <span aria-hidden="true">→</span>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {hasMore && (
//             <div className="flex justify-center mt-6">
//               <button
//                 type="button"
//                 onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
//                 className="inline-flex items-center gap-1.5 border border-[#00B8A9] text-[#00B8A9] text-xs font-semibold rounded-full px-4 py-1.5 hover:bg-[#00B8A9] hover:text-white transition-colors"
//               >
//                 Load More Articles <span aria-hidden="true">↻</span>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }











// BlogPage.jsx (React JSX + Tailwind CSS) ✅ FULL UPDATED — redesigned to match brand reference
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import posts from "./Blogdata.json";

// ---- Design tokens ----
// teal: #00B8A9 (brand accent)   ink: #0B1622 (headings / hero)   paper: #F7F9FA (page bg)
// muted: #6B7280 (meta text)     line: #E7EAEE (card border)
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
    // ✅ FIX: pt-16 sm:pt-20 reserves space for the fixed navbar so the hero
    // banner no longer renders underneath it. Adjust these values to match
    // your navbar's actual rendered height if it differs (e.g. pt-[72px]).
    <div className="bg-[#F7F9FA] min-h-screen pt-16 sm:pt-20" style={{ fontFamily: FONT_BODY }}>
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