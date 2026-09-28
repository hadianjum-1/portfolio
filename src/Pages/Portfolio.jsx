import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import '../Sections/Section.css'; // For shared hero styles

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "NexGen HVAC Leads",
    category: "Web Development",
    description: "A high-conversion landing page and backend system designed specifically for HVAC contractors to generate qualified leads.",
    metric: "215% Increase in Leads",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    fullDetails: {
      challenge: "The client was struggling to generate high-quality leads through their outdated website.",
      solution: "We rebuilt the site from the ground up focusing on speed, clear CTAs, and trust signals.",
      results: "The new site generated a 215% increase in leads within the first 30 days."
    }
  },
  {
    id: 2,
    title: "Aura Brand Identity",
    category: "Branding",
    description: "Complete visual identity overhaul for a modern wellness brand, including logo, typography, and packaging guidelines.",
    metric: "Award-winning Design",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    fullDetails: {
      challenge: "Aura's previous branding felt outdated and didn't reflect their premium product line.",
      solution: "We developed a minimalist, sophisticated identity that appeals to their target demographic.",
      results: "Brand perception improved significantly, allowing for a 30% increase in product pricing."
    }
  },
  {
    id: 3,
    title: "FinTech Dashboard UI",
    category: "UI/UX",
    description: "A complex financial dashboard simplified into an intuitive, user-friendly interface with real-time data visualization.",
    metric: "40% Faster Task Completion",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    fullDetails: {
      challenge: "Users were overwhelmed by the density of data in the existing application.",
      solution: "We restructured the information architecture and introduced clear, modular UI components.",
      results: "Task completion time decreased by 40% and user satisfaction scores doubled."
    }
  },
  {
    id: 4,
    title: "EcoStore E-Commerce",
    category: "Web Development",
    description: "A headless Shopify build with a custom React frontend, delivering lightning-fast shopping experiences.",
    metric: "1.2s Page Load Time",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    fullDetails: {
      challenge: "The client's standard Shopify theme was slow and hurting conversion rates.",
      solution: "We migrated them to a headless architecture using React and Shopify Storefront API.",
      results: "Load times dropped to 1.2s and mobile conversion rate increased by 45%."
    }
  }
];

const categories = ["All", "Web Development", "UI/UX", "Branding"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        '.portfolio-hero-elem',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      // Grid Animation
      gsap.fromTo(
        '.project-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
        }
      );

      // CTA Animation
      gsap.fromTo(
        '.port-cta-elem',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Re-animate grid on filter change
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        '.project-card',
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [activeFilter]);

  return (
    <div className="pt-20 bg-[#0A0A0A] min-h-screen text-white font-space-grotesk">
      
      {/* 1. Portfolio Hero Section */}
      <section ref={heroRef} className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,rgba(16,185,129,0.1)_40%,transparent_70%)] blur-[80px] rounded-full pointer-events-none"></div>
        
        <h1 className="portfolio-hero-elem text-5xl md:text-7xl font-bold mb-6 relative z-10">
          Selected Work & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Case Studies</span>
        </h1>
        <p className="portfolio-hero-elem text-lg text-gray-400 max-w-2xl mx-auto mb-16 relative z-10">
          A showcase of digital experiences engineered for growth, engagement, and conversion.
        </p>

        {/* 2. Filter Tabs */}
        <div className="portfolio-hero-elem flex flex-wrap justify-center gap-3 relative z-10 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Projects Grid Section */}
      <section ref={gridRef} className="py-12 px-6 max-w-7xl mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group cursor-pointer rounded-2xl overflow-hidden bg-[#111111] border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container with Hover Effect */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-blue-300 border border-white/10">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col relative bg-[#111111]">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                  <span className="text-sm font-semibold text-green-400">{project.metric}</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    View Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Portfolio CTA Section */}
      <section ref={ctaRef} className="py-32 px-6 relative overflow-hidden text-center mt-12 bg-gradient-to-b from-[#0A0A0A] to-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.15)_0%,transparent_60%)] pointer-events-none"></div>
        <h2 className="port-cta-elem text-4xl md:text-5xl font-bold mb-8 relative z-10">Ready To Create Your Next <br/><span className="text-blue-400">Digital Experience?</span></h2>
        <div className="port-cta-elem relative z-10">
          <a href="#/contact" className="hero-cta">Let's Talk</a>
        </div>
      </section>

      {/* 5. Individual Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer animate-[fadeIn_0.3s_ease-out]"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-[#0d0d0d] rounded-2xl border border-white/10 shadow-2xl animate-[slideUp_0.4s_ease-out] scrollbar-hide">
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} className="text-white" />
            </button>

            {/* Modal Hero Image */}
            <div className="relative h-[300px] md:h-[400px] w-full">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent"></div>
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-bold mb-4 inline-block">
                  {selectedProject.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white">{selectedProject.title}</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 md:p-12 space-y-12">
              {/* Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-white/10">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4 text-gray-200">Project Overview</h3>
                  <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-200">Key Metric</h3>
                  <div className="text-2xl font-bold text-green-400">{selectedProject.metric}</div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
                  <p className="text-gray-400 leading-relaxed bg-white/5 p-6 rounded-xl border border-white/5">
                    {selectedProject.fullDetails.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Solution</h3>
                  <p className="text-gray-400 leading-relaxed bg-white/5 p-6 rounded-xl border border-white/5">
                    {selectedProject.fullDetails.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4 text-white">The Results</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedProject.fullDetails.results}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global styles for modal animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Portfolio;
