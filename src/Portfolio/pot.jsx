// import React from 'react'
// import './Port.css'


// const Pot = () => {
//     const projects = [
//     {
//       title: "Astra SaaS Platform",
//       category: "Web Development",
//       description:
//         "High-converting SaaS platform designed to increase demo bookings and improve retention.",
//       metric: "+214% Conversion Rate",
//       image:
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
//     },
//     {
//       title: "Nova Branding System",
//       category: "Branding",
//       description:
//         "Luxury visual identity system crafted for a modern digital-first startup.",
//       metric: "+78% Brand Recognition",
//       image:
//         "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
//     },
//     {
//       title: "Velocity Dashboard",
//       category: "UI/UX",
//       description:
//         "Data-heavy dashboard redesigned for better usability and cleaner workflows.",
//       metric: "-43% User Friction",
//       image:
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//     },
//     {
//       title: "Monarch Commerce",
//       category: "Graphic Design",
//       description:
//         "Premium visual campaign system for an e-commerce fashion brand.",
//       metric: "+162% Engagement",
//       image:
//         "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
//     },
//     {
//       title: "Pulse Creative Studio",
//       category: "Web Development",
//       description:
//         "Agency website focused on storytelling, motion, and conversion optimization.",
//       metric: "+98% Qualified Leads",
//       image:
//         "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
//     },
//     {
//       title: "Orbit Mobile Experience",
//       category: "UI/UX",
//       description:
//         "Minimal mobile-first interface system with advanced interaction design.",
//       metric: "+4.8 App Rating",
//       image:
//         "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
//     },
//   ];
//   return (
//     <>
   
//     <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8B5CF6]/20 blur-[140px] rounded-full"></div>

//       {/* HERO */}
//       <section className=" r relative z-10 w-[90%] mx-auto pt-36 pb-28 text-center">
//         <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#3B82F6]/10 blur-[80px]"></div>
//         <div className="absolute bottom-0 right-20 w-52 h-52 rounded-full bg-[#10B981]/10 blur-[90px]"></div>

//         <p className="uppercase tracking-[0.3em] text-[#10B981] text-sm mb-6 font-medium">
//           Portfolio Showcase
//         </p>

//         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] font-[Space_Grotesk] max-w-6xl mx-auto">
//           Selected Work &
//           <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">
//             {" "}
//             Case Studies
//           </span>
//         </h1>

//         <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-400 leading-relaxed">
//           Strategic design and development projects built to elevate brands,
//           improve conversions, and create premium digital experiences.
//         </p>
//       </section>

//       {/* FILTERS */}
//       <section className="relative z-10 w-[90%] mx-auto pb-20">
//         <div className="flex flex-wrap items-center justify-center gap-5">
//           {[
//             "All",
//             "Web Development",
//             "Graphic Design",
//             "Branding",
//             "UI/UX",
//           ].map((item, index) => (
//             <button
//               key={index}
//               className={`px-7 py-3 rounded-full border transition-all duration-300 text-sm font-medium hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] ${
//                 index === 0
//                   ? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] border-transparent"
//                   : "border-white/10 bg-white/5 hover:border-[#8B5CF6]/40"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* PROJECT GRID */}
//       <section className="relative z-10 w-[90%] mx-auto pb-36">
//         <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl break-inside-avoid"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-[240px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#3B82F6]/10 via-[#8B5CF6]/10 to-[#10B981]/10"></div>

//               <div className="absolute bottom-0 left-0 w-full p-8 z-10">
//                 <span className="inline-flex px-4 py-2 rounded-full text-xs font-medium bg-white/10 border border-white/10 mb-5 backdrop-blur-xl">
//                   {project.category}
//                 </span>

//                 <h2 className="text-3xl font-bold mb-3 font-[Space_Grotesk]">
//                   {project.title}
//                 </h2>

//                 <p className="text-gray-300 leading-relaxed mb-5">
//                   {project.description}
//                 </p>

//                 <div className="flex items-center justify-between gap-5 flex-wrap">
//                   <p className="text-[#10B981] font-semibold text-sm tracking-wide">
//                     {project.metric}
//                   </p>

//                   <button className="px-5 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-sm font-medium hover:scale-105 transition duration-300">
//                     View Case Study
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CASE STUDY SECTION */}
//       <section className="r relative z-10 w-[90vw] mx-auto pb-36">
//         <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-[#131018] to-[#202226] overflow-hidden">
//           <div className="grid lg:grid-cols-2 gap-16 p-10 lg:p-20 items-center">
//             <div>
//               <p className="uppercase tracking-[0.3em] text-[#10B981] text-sm mb-6">
//                 Featured Case Study
//               </p>

//               <h2 className="text-5xl font-bold leading-tight mb-8 font-[Space_Grotesk]">
//                 Building a Premium Digital Experience For Modern Brands
//               </h2>

//               <div className="space-y-10">
//                 <div>
//                   <h3 className="text-2xl font-semibold mb-3">Project Overview</h3>
//                   <p className="text-gray-400 leading-relaxed">
//                     A high-performance website and branding ecosystem designed
//                     to improve credibility, engagement, and lead conversion.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold mb-3">Challenge</h3>
//                   <p className="text-gray-400 leading-relaxed">
//                     The client struggled with inconsistent branding, low
//                     engagement, and an outdated online presence.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold mb-3">Solution</h3>
//                   <p className="text-gray-400 leading-relaxed">
//                     We created a fully responsive premium website with modern
//                     UI/UX principles, motion design, and conversion-focused
//                     layouts.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold mb-3">Results & Metrics</h3>
//                   <div className="grid grid-cols-2 gap-6 mt-5">
//                     <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
//                       <h4 className="text-4xl font-bold text-[#3B82F6] mb-2">
//                         +214%
//                       </h4>
//                       <p className="text-gray-400">Conversion Growth</p>
//                     </div>

//                     <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
//                       <h4 className="text-4xl font-bold text-[#10B981] mb-2">
//                         4.8s
//                       </h4>
//                       <p className="text-gray-400">Average Engagement</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
//                 alt="case study"
//                 className="rounded-[32px] border border-white/10"
//               />

//               <div className="absolute -bottom-10 -left-10 p-8 rounded-3xl bg-[#111111]/80 backdrop-blur-xl border border-white/10 max-w-xs">
//                 <p className="text-gray-300 leading-relaxed italic mb-4">
//                   “The final experience exceeded every expectation. The design
//                   feels premium, fast, and incredibly polished.”
//                 </p>

//                 <div>
//                   <h4 className="font-semibold">Sarah Mitchell</h4>
//                   <p className="text-sm text-gray-500">
//                     Marketing Director
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Gallery */}
//           <div className="grid md:grid-cols-3 gap-6 p-10 lg:px-20 lg:pb-20">
//             {[1, 2, 3].map((item) => (
//               <img
//                 key={item}
//                 src={`https://picsum.photos/800/60${item}`}
//                 alt="gallery"
//                 className="rounded-3xl border border-white/10 h-[280px] object-cover w-full hover:scale-[1.02] transition duration-500"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative z-10 w-[90%] mx-auto pb-32">
//         <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#131018] via-[#15171d] to-[#111111] p-12 lg:p-20 text-center">
//           <div className="absolute top-0 left-0 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-[100px]"></div>
//           <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#10B981]/10 rounded-full blur-[100px]"></div>

//           <div className="relative z-10 max-w-4xl mx-auto">
//             <p className="uppercase tracking-[0.3em] text-[#10B981] text-sm mb-6">
//               Start Your Project
//             </p>

//             <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8 font-[Space_Grotesk]">
//               Ready To Create Your Next Digital Experience?
//             </h2>

//             <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
//               Let’s build a premium digital presence that elevates your brand,
//               improves conversions, and creates unforgettable user experiences.
//             </p>

//             <div className="flex flex-wrap items-center justify-center gap-5">
//               <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] font-medium hover:scale-105 transition duration-300 shadow-[0_0_40px_rgba(139,92,246,0.25)]">
//                 Start Your Project
//               </button>

//               <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-medium hover:bg-white/10 transition duration-300">
//                 View More Work
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
  


//     </>
//   )
// }

// export default Pot
