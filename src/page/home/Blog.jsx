import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';


const BlogSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const blogs = [
    {
      id: 1,
      author: "Abheepay Team",
      date: "2025",
      title: "How the Right Insurance Plan Builds Long-Term Financial Security",
      img: "/assets/image/services/Blog.png",
      url: "/blog/how-the-right-insurance-plan-builds-long-term-financial-security"
    },
    {
      id: 2,
      author: "Abheepay Team",
      date: "2025",
      title: "Why Digital Credit Card Bill Payments are Safer Than Cash",
      img: "/assets/image/services/Blog.png",
      url: "/blog/why-digital-credit-card-bill-payments-are-safer-than-cash"
    },
    {
      id: 3,
      author: "Abheepay Team",
      date: "2025",
      title: "Digital Banking Solutions Empowering Small Businesses",
      img: "/assets/image/services/Blog.png",
      url: "/blog/digital-banking-solutions-empowering-small-businesses"
    },
    {
      id: 4,
      author: "Abheepay Team",
      date: "2025",
      title: "Smart Cash Flow Management for Growing Retailers",
      img: "/assets/image/services/Blog.png",
      url: "/blog/smart-cash-flow-management-for-growing-retailers"
    },
    {
      id: 5,
      author: "Abheepay Team",
      date: "2025",
      title: "Domestic Money Transfer Made Simple with Digital Platforms",
      img: "/assets/image/services/Blog.png",
      url: "/blog/domestic-money-transfer-made-simple-with-digital-platforms"
    },
    {
      id: 6,
      author: "Abheepay Team",
      date: "2024",
      title: "Utility Bill Payments: A Convenient Digital Experience",
      img: "/assets/image/services/Blog.png",
      url: "/blog/utility-bill-payments-a-convenient-digital-experience"
    },
    {
      id: 7,
      author: "Abheepay Team",
      date: "2024",
      title: "How Digital Loan Services Help Businesses Scale Faster",
      img: "/assets/image/services/Blog.png",
      url: "/blog/how-digital-loan-services-help-businesses-scale-faster"
    },
    {
      id: 8,
      author: "Abheepay Team",
      date: "2024",
      title: "How Digital Financial Services Increase Retail Store Footfall",
      img: "/assets/image/services/Blog.png",
      url: "/blog/how-digital-financial-services-increase-retail-store-footfall"
    }
  ];

  // Derive initials for the avatar circle from the author name
  const getInitials = (name) =>
    name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="bg-white py-[35.64px] px-[23.76px] font-sans">
      <div className="container mx-auto max-w-[1331px]">

        <div className="flex flex-col md:flex-row justify-between items-end mb-[23.76px] gap-[11.88px]">
          <div>
            <h2 className="text-[26.73px] font-bold text-[#1a1a2e] mb-[5.94px]">
              Latest Insights
            </h2>
            <p className="text-gray-500 text-[16.34px] max-w-[856px]">
              Discover insights, updates, and stories that inspire growth and impact.
            </p>
          </div>

          <div className="flex gap-[8.91px]">
            <button
              ref={prevRef}
              className="bg-white p-[8.91px] rounded-full hover:bg-[#2DD4BF] hover:text-white transition-all duration-300 shadow-sm border border-gray-200"
            >
              <svg width="19.31" height="19.31" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              ref={nextRef}
              className="bg-white p-[8.91px] rounded-full hover:bg-[#2DD4BF] hover:text-white transition-all duration-300 shadow-sm border border-gray-200"
            >
              <svg width="19.31" height="19.31" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>


        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={37}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-[29.7px]"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="max-w-[446px] mx-auto bg-white rounded-[11.88px] overflow-hidden shadow-[0_1px_10px_rgba(0,0,0,0.08)] border border-gray-100 h-full flex flex-col group cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">

                {/* Image with category-style badge */}
                <div className="relative h-[148.5px] overflow-hidden">
                  <img
                    // src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-[11.88px] left-[11.88px] bg-[#2DD4BF] text-white text-[11.88px] px-[8.91px] py-[2.97px] rounded-[5.94px] font-semibold tracking-wide">
                    {blog.author}
                  </span>
                </div>

                {/* Content */}
                <div className="p-[17.82px] flex flex-col flex-1">
                  <h3 className="text-[#1a1a2e] text-[17.82px] font-bold leading-snug mb-[11.88px] flex-1 group-hover:text-[#2DD4BF] transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <div className="flex items-center gap-[8.91px] mb-[11.88px]">
                    <div className="w-[29.7px] h-[29.7px] rounded-full bg-[#3b4b94] text-white flex items-center justify-center text-[11.88px] font-bold flex-shrink-0">
                      {getInitials(blog.author)}
                    </div>
                    <div className="leading-tight">
                      <p className="text-[14.85px] font-semibold text-[#1a1a2e]">{blog.author}</p>
                      <p className="text-[13.37px] text-gray-400">{blog.date}</p>
                    </div>
                  </div>

                  <a
                    href={blog.url}
                    className="text-[#2DD4BF] text-[14.85px] font-semibold no-underline hover:underline inline-flex items-center gap-[5.94px] w-fit"
                  >
                    Read More
                    <svg width="14.85" height="14.85" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-300">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default BlogSection;