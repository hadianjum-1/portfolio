import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [state, handleSubmit] = useForm("mkoenzdl");
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
      gsap.fromTo(
        rightRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section id="contact" ref={sectionRef} className="contact-section relative py-20 px-6 lg:px-12 w-full">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10 w-full items-center lg:items-stretch">
        
        {/* Left Side: Info */}
        <div ref={leftRef} className="flex-1 flex flex-col justify-center w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium text-blue-400 mb-6 backdrop-blur-md w-fit">
            Get In Touch
          </div>
          
          <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold mb-6 tracking-tight text-white leading-[1.12] font-space-grotesk">
            Let's Build Something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Exceptional</span>
          </h2>
          
          <p className="text-gray-400 mb-10 text-[clamp(1rem,1.8vw,1.15rem)] leading-relaxed max-w-xl">
            I'm currently available for freelance projects. Whether you have a specific project in mind or just want to explore possibilities, I'll respond within 24 hours.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="p-3.5 bg-[#111] border border-white/5 rounded-xl text-blue-400 group-hover:scale-105 group-hover:bg-blue-500/10 transition-all duration-300">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 mb-0.5 tracking-wider uppercase">Email Me</p>
                <p className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">hadi@nexgenbyte.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="p-3.5 bg-[#111] border border-white/5 rounded-xl text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500/10 transition-all duration-300">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 mb-0.5 tracking-wider uppercase">Call Me</p>
                <p className="text-base font-semibold text-white group-hover:text-emerald-400 transition-colors">+92 315 971 1237</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 group cursor-pointer">
              <div className="p-3.5 bg-[#111] border border-white/5 rounded-xl text-purple-400 group-hover:scale-105 group-hover:bg-purple-500/10 transition-all duration-300">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 mb-0.5 tracking-wider uppercase">Location</p>
                <p className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">Remote / Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div ref={rightRef} className="flex-1 w-full max-w-xl mx-auto lg:max-w-xl lg:mt-0 mt-8">
          <div className="relative group w-full">
            {/* Animated glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative p-5 sm:p-6 md:p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden">
              
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_40px_rgba(16,185,129,0.2)] mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 text-lg max-w-sm mx-auto">
                    Thanks for reaching out. I've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-5 pi" onSubmit={handleSubmit}>
                  <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                      <input type="text" id="name" name="name" required className="contact-input" placeholder="John Doe" />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    <div className="input-group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                      <input type="email" id="email" name="email" required className="contact-input" placeholder="john@example.com" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                  </div>
                  
                  <div className="pi grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="input-group">
                        <label htmlFor="project" className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                        <select id="project" name="project" required defaultValue="" className="contact-input select-input">
                          <option value="" disabled>Select a service</option>
                          <option value="web">Web Development</option>
                          <option value="design">UI/UX Design</option>
                          <option value="branding">Branding</option>
                          <option value="other">Other</option>
                        </select>
                      <ValidationError prefix="Project Type" field="project" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    <div className="input-group">
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">Budget Range</label>
                      <select id="budget" name="budget" required defaultValue="" className="contact-input select-input">
                        <option value="" disabled>Select budget</option>
                        <option value="1-5k">$1,000 - $5,000</option>
                        <option value="5-10k">$5,000 - $10,000</option>
                        <option value="10k+">$10,000+</option>
                      </select>
                      <ValidationError prefix="Budget Range" field="budget" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                    <textarea id="message" name="message" required rows="4" className="contact-input resize-none" placeholder="Tell me about your project goals, timeline, and requirements..."></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className={`w-full relative overflow-hidden rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 mt-4 h-[60px] ${
                      state.submitting 
                        ? 'bg-blue-600/50 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1'
                    }`}
                    aria-busy={state.submitting}
                  >
                    <span className="relative z-10 text-lg">{state.submitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
