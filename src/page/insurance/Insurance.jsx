// import React from 'react';
// import { Shield, Phone, ArrowRight, CheckCircle, Home, Heart, Briefcase, Users } from 'lucide-react';

// const InsurancePage = () => {
//   return (
//     <div className="bg-white font-sans text-gray-900">
      
//       {/* --- TOP BANNER (Updated Image Container) --- */}
//       <div className="overflow-hidden">
//         <img
//           src="https://static.vecteezy.com/system/resources/thumbnails/025/074/876/small/protection-and-insurance-concept-car-home-and-health-preventing-and-evaluating-potential-business-investment-benefits-life-insurance-protect-your-family-and-loved-ones-from-accidents-free-photo.jpg"   
//           alt="Featured Insurance"
//           className="w-full h-[380px] md:h-[480px] lg:h-[420px] object-cover"
//         />
//       </div>

//       {/* --- HERO SECTION --- */}
//       <section className="relative bg-[#00CCC7]/5 py-16 md:py-10 px-6 mb-6 md:px-20 overflow-hidden">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//           <div className="md:w-1/2 z-10">
//             <div className="w-24 h-1 bg-[#00CCC7] mb-6"></div>
//             <h1 className="text-5xl md:text-5xl font-black leading-tight mb-6 text-black">
//               Insurance <br />
//               <span className="text-gray-800">for the better</span> <br />
//               <span className="text-[#00CCC7]">family life.</span>
//             </h1>
//             <p className="text-gray-500 text-lg mb-8 max-w-md font-medium">
//               Protecting your loved ones starts with the right plan. We provide comprehensive coverage tailored to your needs.
//             </p>
            
//           </div>
          
//           <div className="md:w-1/2 mt-12 md:mt-0 relative">
//             <img 
//               src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" 
//               alt="Happy Family" 
//               className="rounded-3xl shadow-2xl relative z-10 grayscale-[20%]"
//             />
//             <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#00CCC7]/20 rounded-full blur-3xl opacity-50"></div>
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURE CARDS --- */}
//       <section className="max-w-7xl mx-auto px-6 relative z-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             { id: '01', title: 'Safe your money', icon: <Shield className="w-10 h-10 text-white" /> },
//             { id: '02', title: 'Get free quote', icon: <Users className="w-10 h-10 text-white" /> },
//             { id: '03', title: 'Fast & reliable', icon: <Home className="w-10 h-10 text-white" /> },
//           ].map((item) => (
//             <div 
//               key={item.id} 
//               className="relative bg-white pt-16 pb-10 px-8 rounded-3xl overflow-hidden border-b-4 border-[#00CCC7] "
//             >
//               <div 
//                 className="absolute top-0 left-0 w-36 h-28 bg-[#00CCC7]  flex items-center justify-center pt-2 pr-4 transition-colors duration-300"
//                 style={{ 
//                     clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0% 100%)', 
//                     borderRadius: '0 0 100% 0' 
//                 }}
//               >
//                 <div className="mb-4 mr-4">
//                   {item.icon}
//                 </div>
//               </div>

//               <div className="absolute top-8 right-10">
//                 <span 
//                   className="text-6xl font-black opacity-10 select-none"
//                   style={{ 
//                     WebkitTextStroke: '2px #00CCC7', 
//                     color: 'transparent' 
//                   }}
//                 >
//                   {item.id}
//                 </span>
//               </div>

//               <div className="mt-8">
//                 <h3 className="text-2xl font-black text-black mb-4">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed font-medium">
//                   Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- ABOUT SECTION --- */}
//       <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center gap-20">
          
//           <div className="lg:w-1/2 relative">
//             <div className="relative w-full max-w-md">
//               <img 
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
//                 alt="Team Work" 
//                 className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover"
//               />
              
//               <div className="absolute -bottom-12 -left-12 w-2/3 border-[12px] border-white rounded-[2rem] shadow-2xl hidden md:block overflow-hidden">
//                 <img 
//                   src="https://img.freepik.com/premium-photo/creative-business-meeting-professionals-brainstorming-ideas-collaborative-boardroom_1267411-113.jpg" 
//                   alt="Office discussion" 
//                   className="w-full h-44 object-cover"
//                 />
//               </div>

//               <div className="absolute bottom-6 right-6 bg-[#00CCC7] text-white p-6 rounded-2xl shadow-xl border-2 border-dashed border-white flex items-center gap-3">
//                 <span className="text-5xl font-black italic text-white">30</span>
//                 <div className="text-sm font-bold leading-tight">
//                   Years of <br /> Experience
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="lg:w-1/2">
            
            
//             <h2 className="text-5xl font-black text-black mt-2 mb-8 leading-[1.1]">
//               We provide the best <br /> insurance policy
//             </h2>
            
//             <p className="text-gray-600 text-lg italic font-semibold mb-8 border-l-4 border-[#00CCC7] pl-5 leading-relaxed">
//               "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu nulla pariatur."
//             </p>
            
//             <ul className="space-y-5 mb-12">
//               {[
//                 'Delivering to get results a personal touch.',
//                 'Dedicated and professional team members.',
//                 'Work with modern and secure equipment.'
//               ].map((text, i) => (
//                 <li key={i} className="flex items-center gap-4 text-gray-700 font-bold group">
//                   <div className="bg-[#00CCC7]/10 p-1 rounded-full group-hover:bg-[#00CCC7] transition-all">
//                     <CheckCircle className="text-[#00CCC7] w-5 h-5 group-hover:text-white" />
//                   </div>
//                   {text}
//                 </li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap items-center gap-10">
             
              
//               <div className="flex items-center gap-4">
//                 <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg text-black">
//                   <Phone className="w-6 h-6 fill-current text-[#00CCC7]" />
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Call Anytime</div>
//                   <div className="font-black text-black text-lg">+91 8860037218</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- SERVICES GRID --- */}
//       <section className="py-14 bg-gray-50 px-6 md:px-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16">
//             <div className="md:w-1/2">
//               <span className="text-[#00CCC7] font-black uppercase tracking-widest text-sm">Our Services</span>
//               <h2 className="text-4xl font-black mt-4 text-black">We're covering all the <br /> insurance fields</h2>
//             </div>
//             <p className="md:w-1/3 text-gray-500 mt-4 md:mt-0 font-medium border-l-2 border-black pl-4">
//               Providing a wide range of insurance products to protect what matters most to you and your future.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { title: 'Business Insurance', icon: <Briefcase />, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300' },
//               { title: 'Life Insurance', icon: <Users />, img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300' },
//               { title: 'Home Insurance', icon: <Home />, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=300' },
//               { title: 'Health Insurance', icon: <Heart />, img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=300' },
//             ].map((service, idx) => (
//               <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
//                 <div className="h-48 overflow-hidden relative">
//                   <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500 grayscale-[30%] group-hover:grayscale-0" />
//                   <div className="absolute bottom-4 right-4 bg-black p-3 rounded-xl shadow-lg text-white group-hover:bg-[#00CCC7] group-hover:text-white transition-colors">
//                     {service.icon}
//                   </div>
//                 </div>
//                 <div className="p-8">
//                   <h4 className="font-black text-xl mb-3 text-black">{service.title}</h4>
//                   <p className="text-gray-400 text-sm mb-4 font-medium">Protect your assets with our premium coverage plans.</p>
//                   <div className="w-10 h-1 bg-[#00CCC7] rounded-full group-hover:w-full transition-all duration-300"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default InsurancePage;










import React from 'react';
import {
  Shield,
  Phone,
  ArrowRight,
  CheckCircle,
  Home,
  Heart,
  Car,
  Users,
  Umbrella,
  Plane,
  Calendar,
  Clock,
} from 'lucide-react';

const TEAL = '#00CCC7';

const InsurancePage = () => {
  return (
    <div className="bg-white font-sans text-gray-900 text-[13px]">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-[#0A2A2E]">
        {/* background photo */}
        <img
          src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=1600"
          alt="Family in a field at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* dark gradient overlay so left side reads as solid, photo shows through on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #0A2A2E 0%, #0A2A2E 38%, rgba(10,42,46,0.75) 55%, rgba(10,42,46,0.15) 75%, rgba(10,42,46,0.05) 100%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-3 md:px-8 py-10 md:py-14">
          <div className="max-w-[18rem]">
            <div className="inline-flex items-center gap-1 bg-white/10 border border-white/10 rounded-full px-2 py-0.5 mb-3">
              <Shield className="w-2 h-2" style={{ color: TEAL }} />
              <span className="text-[6px] font-bold tracking-widest uppercase" style={{ color: TEAL }}>
                Secure today, protect tomorrow
              </span>
            </div>

            <h1 className="text-xl md:text-3xl font-black leading-[1.05] mb-3 text-white">
              Insurance for
              <br />
              the better
              <br />
              <span style={{ color: TEAL }}>family life.</span>
            </h1>

            <p className="text-gray-300 text-[11px] md:text-sm mb-4 max-w-[15rem] font-medium">
              We offer a wide range of insurance solutions to protect what matters most to you and your loved ones.
            </p>

            <button
              className="inline-flex items-center gap-1 text-white font-bold px-3.5 py-1.5 rounded-full transition-transform hover:scale-[1.03] text-xs"
              style={{ backgroundColor: TEAL }}
            >
              Explore Policies
              <ArrowRight className="w-2 h-2" />
            </button>
          </div>
        </div>

        {/* floating icon orbit, right side (desktop only) */}
        <div className="hidden lg:block absolute right-[22%] top-1/2 -translate-y-1/2">
          <svg width="45" height="190" viewBox="0 0 90 380" className="overflow-visible">
            <path
              d="M 45 10 C 90 60, 90 320, 45 370"
              fill="none"
              stroke={TEAL}
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />
            <circle cx="45" cy="10" r="4" fill={TEAL} />
            <circle cx="45" cy="370" r="4" fill={TEAL} />
          </svg>
          <div className="absolute inset-0 flex flex-col justify-between py-0.5">
            {[Heart, Home, Car, Users, Umbrella].map((Icon, i) => (
              <div
                key={i}
                className="rounded-full bg-white/10 backdrop-blur-sm border border-white/25 flex items-center justify-center"
                style={{ width: '22px', height: '22px' }}
              >
                <Icon className="w-2.5 h-2.5 text-white" strokeWidth={1.75} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURE STRIP --- */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-3 md:px-8 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {[
              {
                icon: Shield,
                title: 'Safe your money',
                desc: 'Reliable coverage that protects your savings and future.',
              },
              {
                icon: Users,
                title: 'Get free quote',
                desc: 'Quick, easy and 100% free insurance quotes online.',
              },
              {
                icon: Home,
                title: 'Fast & reliable',
                desc: 'Hassle-free process with quick claim settlement.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 py-2 sm:py-0 px-0 sm:px-4 ${
                  i !== 0 ? 'sm:border-l border-gray-200' : ''
                }`}
              >
                <div
                  className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: TEAL }}
                >
                  <item.icon className="w-3 h-3 text-white" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-black text-sm text-black mb-0.5">{item.title}</h3>
                  <p className="text-gray-500 text-[11px] font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-10 px-3 md:px-8" style={{ backgroundColor: '#EFF7F7' }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* image collage */}
          <div className="lg:w-1/2 relative w-full max-w-[13rem] mx-auto lg:mx-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
              alt="Hands protecting a family"
              className="rounded-xl shadow-xl w-full h-28 object-cover"
            />

            <div className="mt-3 flex items-end gap-2">
              <div
                className="text-white rounded-xl shadow-xl p-3 w-20 shrink-0"
                style={{ backgroundColor: TEAL }}
              >
                <div className="text-xl font-black">30+</div>
                <div className="text-[11px] font-bold leading-tight mt-0.5">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                alt="Team meeting"
                className="rounded-xl shadow-xl h-20 flex-1 object-cover"
              />
            </div>
          </div>

          {/* copy */}
          <div className="lg:w-1/2">
            <span
              className="inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-2"
              style={{ backgroundColor: 'rgba(0,204,199,0.12)', color: '#00A19C' }}
            >
              Why choose us
            </span>

            <h2 className="text-lg md:text-xl font-black text-black leading-[1.15] mb-2.5">
              We provide the best
              <br />
              <span style={{ color: TEAL }}>insurance policy</span>
            </h2>

            <p className="text-gray-500 font-medium mb-4 max-w-[15rem] text-[11px]">
              Our policies are designed to give you peace of mind with comprehensive coverage and trusted support.
            </p>

            <ul className="space-y-2 mb-4">
              {[
                'Delivering to get results a personal touch.',
                'Dedicated and professional team members.',
                'Work with modern and secure equipment.',
                'Transparent policies with no hidden charges.',
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-1.5 text-gray-700 font-bold text-[11px]">
                  <CheckCircle className="w-2.5 h-2.5 shrink-0" style={{ color: TEAL }} />
                  {text}
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-2 bg-white rounded-full pl-1 pr-3 py-1 shadow-sm border border-gray-100">
              <div className="rounded-full bg-white shadow-md flex items-center justify-center" style={{ width: '22px', height: '22px' }}>
                <Phone className="w-2.5 h-2.5" style={{ color: TEAL }} />
              </div>
              <div>
                <div className="text-[7px] text-gray-400 font-bold uppercase tracking-widest">Call Anytime</div>
                <div className="font-black text-black text-[11px]">+91 88600 37218</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-10 px-3 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-7 gap-3">
            <div>
              <span className="font-black uppercase tracking-widest text-[10px]" style={{ color: TEAL }}>
                Our services
              </span>
              <h2 className="text-lg md:text-xl font-black mt-1.5 text-black leading-tight">
                We're covering all
                <br />
                the <span style={{ color: TEAL }}>insurance fields</span>
              </h2>
            </div>
            <p className="md:w-1/3 text-gray-500 font-medium border-l-2 border-black pl-2 text-[11px]">
              Providing a wide range of insurance products to protect what matters most to you and your future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                title: 'Life Insurance',
                icon: Users,
                desc: "Secure your family's future and dreams and the right plan.",
              },
              {
                title: 'Health Insurance',
                icon: Heart,
                desc: 'Quality healthcare without financial stress.',
              },
              {
                title: 'Motor Insurance',
                icon: Car,
                desc: 'Complete protection for you and your vehicle.',
              },
              {
                title: 'Travel Insurance',
                icon: Plane,
                desc: 'Travel worry-free anywhere in the world.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="border border-gray-100 rounded-xl p-3.5 hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: 'rgba(0,204,199,0.12)' }}
                >
                  <service.icon className="w-3.5 h-3.5" style={{ color: TEAL }} strokeWidth={1.75} />
                </div>
                <h4 className="font-black text-sm mb-1 text-black">{service.title}</h4>
                <p className="text-gray-500 text-[11px] mb-2.5 font-medium leading-relaxed">{service.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 font-bold text-[11px]"
                  style={{ color: TEAL }}
                >
                  Learn More
                  <ArrowRight className="w-2 h-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INSURANCE INSIGHTS --- */}
      <section className="py-10 px-3 md:px-8" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-3">
            <div>
              <span className="font-black uppercase tracking-widest text-[10px]" style={{ color: TEAL }}>
                Insurance insights
              </span>
              <h2 className="text-lg md:text-xl font-black mt-1.5 text-black leading-tight">
                Stay informed with
                <br />
                the latest tips and updates
              </h2>
            </div>
            <button className="inline-flex items-center gap-1 font-bold text-[11px] border-2 rounded-full px-3 py-1.5" style={{ borderColor: TEAL, color: TEAL }}>
              View All Articles
              <ArrowRight className="w-2 h-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                tag: 'Health',
                title: '5 Reasons Why Health Insurance is Essential',
                date: 'May 12, 2025',
                read: '3 min read',
                img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400',
              },
              {
                tag: 'Life Insurance',
                title: "How Life Insurance Secures Your Family's Future",
                date: 'May 10, 2025',
                read: '4 min read',
                img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400',
              },
              {
                tag: 'Motor Insurance',
                title: 'Motor Insurance Claim Process Explained',
                date: 'May 8, 2025',
                read: '2 min read',
                img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400',
              },
              {
                tag: 'Travel',
                title: 'Top Benefits of Travel Insurance for International Trips',
                date: 'May 5, 2025',
                read: '2 min read',
                img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400',
              },
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <img src={post.img} alt={post.title} className="w-full object-cover" style={{ height: '72px' }} />
                <div className="p-2.5">
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: TEAL }}>
                    {post.tag}
                  </span>
                  <h4 className="font-black text-black mt-1 mb-2 leading-snug text-[11px]">{post.title}</h4>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                    <span className="flex items-center gap-0.5">
                      <Calendar className="w-2 h-2" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Clock className="w-2 h-2" />
                      {post.read}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsurancePage;