
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import posts from "./Blogdata.json";

// export default function BlogDetails() {
//   const { id } = useParams();

//   const postIndex = posts.findIndex(
//     (p) => p.id?.toLowerCase() === id?.toLowerCase()
//   );
//   const post = postIndex !== -1 ? posts[postIndex] : null;

//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!post) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-white">
//         <Link
//           to="/blog"
//           className="text-[#00D3CD] font-bold border-b-2 border-[#00D3CD]"
//         >
//           Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#fafafa] min-h-screen font-sans text-black pb-20">
     
//       <div className="max-w-6xl mx-auto pt-10 md:pt-20 px-6">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <div
//             className={`space-y-6 transition-all duration-1000 ${
//               visible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-tighter">
//               {post.tag}
//             </div>

//             <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter">
//               {post.title}
//             </h1>

//             <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
//               <span className="w-10 h-[2px] bg-[#00D3CD]"></span>
//               <span>{post.author}</span>
//               <span>•</span>
//               <span>{post.date}</span>
//             </div>
//           </div>

//           <div
//             className={`relative transition-all duration-1000 delay-300 ${
//               visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//           >
//             <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[#00D3CD] z-0"></div>
//             <img
//               src={post.img}
//               alt={post.title}
//               className="relative z-10 w-full h-[300px] md:h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto mt-20 px-6 grid lg:grid-cols-12 gap-12">
//         <div className="lg:col-span-8 space-y-8">
//           {post.content?.map((para, i) => (
//             <p
//               key={i}
//               className="text-xl leading-relaxed text-gray-800 font-light"
//             >
//               {para}
//             </p>
//           ))}

      
//           {post.whyChoose && (
//             <div className="grid sm:grid-cols-2 gap-0 border-2 border-black mt-16">
//               {post.whyChoose.map((item, i) => (
//                 <div
//                   key={i}
//                   className="p-6 border border-gray-100 flex items-start gap-4 bg-white group hover:bg-black transition-colors duration-300"
//                 >
//                   <span className="text-[#00D3CD] text-2xl font-black group-hover:translate-x-1 transition-transform">
//                     →
//                   </span>
//                   <span className="font-bold group-hover:text-white">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

    
//         <div className="lg:col-span-4">
//           <div className="sticky top-10 space-y-6">
//             <div className="bg-[#00D3CD] p-8 transform md:rotate-2">
//               <h2 className="text-black font-black text-2xl mb-6 uppercase">
//                 Highlights
//               </h2>

//               <div className="space-y-8">
//                 {post.highlights?.map((f, i) => (
//                   <div
//                     key={i}
//                     className="border-b border-black/10 pb-4 last:border-0"
//                   >
//                     <h3 className="font-black text-sm uppercase mb-2">
//                       {f.title}
//                     </h3>
//                     <p className="text-black/70 text-sm leading-snug">
//                       {f.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

      
//             <Link
//               to="/blog"
//               className="flex items-center justify-center gap-2 w-full py-4 border-2 border-black font-bold hover:bg-black hover:text-white transition-all uppercase text-sm tracking-widest"
//             >
//               ← All blogs
//             </Link>
//           </div>
//         </div>
//       </div>

      
//       {post.related && (
//         <div className="max-w-6xl mx-auto mt-32 px-6">
//           <h2 className="text-3xl font-black mb-10 tracking-tighter">
//             More to Read
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12">
//             {post.related.map((idx) => (
//               <Link
//                 key={idx}
//                 to={`/blog/${posts[idx].id}`}
//                 className="group block"
//               >
//                 <div className="relative overflow-hidden mb-6">
//                   <img
//                     src={posts[idx].img}
//                     className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
//                     alt={posts[idx].title}
//                   />
//                   <div className="absolute inset-0 bg-[#00D3CD]/10 group-hover:bg-transparent transition-colors"></div>
//                 </div>

//                 <h3 className="text-2xl font-black group-hover:underline decoration-[#00D3CD] decoration-4 underline-offset-4">
//                   {posts[idx].title}
//                 </h3>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }







// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import posts from "./Blogdata.json";

// // ---- Design tokens (fintech "statement / ticket" direction) ----
// // ink:   #0B1420   paper: #F7F7F4   teal: #00D3CD   amber: #FFB020   line: #D8DCE1
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

// // Perforated "ticket" notch — a small circle cut into an edge, matching the
// // page background so it reads as a hole punched through the card.
// function Notch({ side }) {
//   const pos =
//     side === "left" ? { left: "-10px" } : { right: "-10px" };
//   return (
//     <span
//       aria-hidden="true"
//       className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#F7F7F4] border border-[#D8DCE1] z-20"
//       style={pos}
//     />
//   );
// }

// export default function BlogDetails() {
//   const { id } = useParams();
//   useGoogleFonts();

//   const postIndex = posts.findIndex(
//     (p) => p.id?.toLowerCase() === id?.toLowerCase()
//   );
//   const post = postIndex !== -1 ? posts[postIndex] : null;

//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!post) {
//     return (
//       <div
//         className="flex items-center justify-center min-h-screen bg-[#F7F7F4]"
//         style={{ fontFamily: FONT_BODY }}
//       >
//         <Link
//           to="/blog"
//           className="text-[#00D3CD] font-semibold border-b-2 border-[#00D3CD] pb-1"
//           style={{ fontFamily: FONT_MONO }}
//         >
//           ← BACK TO BLOG
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="bg-[#F7F7F4] min-h-screen text-[#0B1420] pb-24"
//       style={{ fontFamily: FONT_BODY }}
//     >
//       {/* ---------- Header / statement strip ---------- */}
//       <div className="max-w-6xl mx-auto pt-14 md:pt-20 px-6">
//         <div
//           className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
//             visible ? "opacity-100" : "opacity-0"
//           }`}
//           style={{ fontFamily: FONT_MONO }}
//         >
//           <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B1420] text-[#00D3CD] text-xs font-medium uppercase tracking-widest rounded-sm">
//             {post.tag}
//           </span>
//           <span className="text-xs text-[#8A9099] tracking-widest">
//             DOC NO. {String(postIndex + 1).padStart(3, "0")}-{id?.toUpperCase()}
//           </span>
//         </div>

//         <div className="grid md:grid-cols-12 gap-10 items-end">
//           <div
//             className={`md:col-span-7 space-y-6 transition-all duration-1000 ${
//               visible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <h1
//               className="text-4xl md:text-[3.4rem] leading-[1.05] tracking-tight font-bold"
//               style={{ fontFamily: FONT_DISPLAY }}
//             >
//               {post.title}
//             </h1>

//             <div
//               className="flex items-center gap-3 text-sm text-[#5B6270]"
//               style={{ fontFamily: FONT_MONO }}
//             >
//               <span>{post.author}</span>
//               <span className="text-[#00D3CD]">·</span>
//               <span>{post.date}</span>
//             </div>
//           </div>

//           {/* dashed statement rule, mirrors a receipt's totals line */}
//           <div className="md:col-span-5 hidden md:block">
//             <div className="border-t-2 border-dashed border-[#D8DCE1]" />
//           </div>
//         </div>
//       </div>

//       {/* ---------- Hero image, styled as a ticket stub ---------- */}
//       <div className="max-w-6xl mx-auto px-6 mt-10">
//         <div
//           className={`relative transition-all duration-1000 delay-200 ${
//             visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
//           }`}
//         >
//           <div className="relative border border-[#D8DCE1] bg-white p-2 md:p-3">
//             <Notch side="left" />
//             <Notch side="right" />
//             <img
//               src={post.img}
//               alt={post.title}
//               className="w-full h-[320px] md:h-[440px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
//             />
//             <div
//               className="absolute left-3 right-3 md:left-4 md:right-4 top-full -translate-y-6 flex justify-between text-[10px] tracking-widest text-white px-4 py-2 bg-[#0B1420]"
//               style={{ fontFamily: FONT_MONO }}
//             >
//               <span>ABHEEPAY // FIELD NOTES</span>
//               <span>VALID: {post.date}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Body ---------- */}
//       <div className="max-w-6xl mx-auto mt-24 px-6 grid lg:grid-cols-12 gap-14">
//         <div className="lg:col-span-8 space-y-7">
//           {post.content?.map((para, i) => (
//             <p
//               key={i}
//               className="text-lg md:text-xl leading-relaxed text-[#2B3140] font-light"
//             >
//               {para}
//             </p>
//           ))}

//           {post.whyChoose && (
//             <div className="mt-16">
//               <div
//                 className="text-xs tracking-[0.25em] text-[#8A9099] mb-4"
//                 style={{ fontFamily: FONT_MONO }}
//               >
//                 WHY IT WORKS
//               </div>
//               <div className="border-t border-[#D8DCE1]">
//                 {post.whyChoose.map((item, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-5 py-5 border-b border-[#D8DCE1] group"
//                   >
//                     <span
//                       className="text-[#00D3CD] text-sm shrink-0"
//                       style={{ fontFamily: FONT_MONO }}
//                     >
//                       {String(i + 1).padStart(2, "0")}
//                     </span>
//                     <span className="font-medium text-[#0B1420] group-hover:text-[#00A9A4] transition-colors">
//                       {item}
//                     </span>
//                     <span className="ml-auto text-[#00D3CD] opacity-0 group-hover:opacity-100 transition-opacity">
//                       →
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* ---------- Sidebar: statement summary card ---------- */}
//         <div className="lg:col-span-4">
//           <div className="sticky top-10 space-y-5">
//             <div className="bg-[#0B1420] text-white p-8 relative overflow-hidden">
//               <div
//                 className="absolute top-0 right-0 text-[9px] tracking-widest text-[#00D3CD] px-3 py-1 border-l border-b border-white/10"
//                 style={{ fontFamily: FONT_MONO }}
//               >
//                 SUMMARY
//               </div>
//               <h2
//                 className="text-xl mb-7 uppercase tracking-wide font-semibold"
//                 style={{ fontFamily: FONT_DISPLAY }}
//               >
//                 Highlights
//               </h2>

//               <div className="space-y-6">
//                 {post.highlights?.map((f, i) => (
//                   <div
//                     key={i}
//                     className="flex gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0"
//                   >
//                     <span
//                       className="text-[#00D3CD] text-xs mt-1 shrink-0"
//                       style={{ fontFamily: FONT_MONO }}
//                     >
//                       {String(i + 1).padStart(2, "0")}
//                     </span>
//                     <div>
//                       <h3 className="font-semibold text-sm uppercase tracking-wide mb-1.5">
//                         {f.title}
//                       </h3>
//                       <p className="text-white/60 text-sm leading-snug">
//                         {f.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <Link
//               to="/blog"
//               className="flex items-center justify-center gap-2 w-full py-4 border border-[#0B1420] font-medium hover:bg-[#0B1420] hover:text-[#00D3CD] transition-all uppercase text-xs tracking-[0.2em]"
//               style={{ fontFamily: FONT_MONO }}
//             >
//               ← All blogs
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Related, styled as ticket stubs ---------- */}
//       {post.related && (
//         <div className="max-w-6xl mx-auto mt-28 px-6">
//           <div className="flex items-center gap-4 mb-10">
//             <h2
//               className="text-2xl md:text-3xl font-bold tracking-tight"
//               style={{ fontFamily: FONT_DISPLAY }}
//             >
//               More to Read
//             </h2>
//             <div className="flex-1 border-t border-dashed border-[#D8DCE1]" />
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {post.related.map((idx) => (
//               <Link
//                 key={idx}
//                 to={`/blog/${posts[idx].id}`}
//                 className="group block border border-[#D8DCE1] bg-white p-3 relative"
//               >
//                 <Notch side="left" />
//                 <Notch side="right" />
//                 <div className="relative overflow-hidden mb-5">
//                   <img
//                     src={posts[idx].img}
//                     className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
//                     alt={posts[idx].title}
//                   />
//                   <div className="absolute inset-0 bg-[#00D3CD]/0 group-hover:bg-[#00D3CD]/10 transition-colors" />
//                 </div>

//                 <div
//                   className="text-[10px] tracking-widest text-[#8A9099] mb-2 px-1"
//                   style={{ fontFamily: FONT_MONO }}
//                 >
//                   {posts[idx].tag || "ARTICLE"}
//                 </div>

//                 <h3
//                   className="text-xl font-semibold px-1 pb-3 group-hover:text-[#00A9A4] transition-colors"
//                   style={{ fontFamily: FONT_DISPLAY }}
//                 >
//                   {posts[idx].title}
//                 </h3>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }









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