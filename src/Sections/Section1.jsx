import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./section.css";

const Section1 = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const trustRef = useRef(null);
  const btnRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2, 
      });

      /* Glow pulse */
      gsap.fromTo(
        glowRef.current,
        { scale: 0.8, opacity: 0, xPercent: -50, yPercent: -50 },
        { scale: 1, opacity: 1, xPercent: -50, yPercent: -50, duration: 1.5, ease: "power2.out" }
      );

      /* Hero text cascade */
      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          paraRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          trustRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          btnRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBtnEnter = (e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2, ease: "power2.out" });
  };
  const handleBtnLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.out" });
  };

  return (
    <section 
      ref={sectionRef} 
      className="Hero w-[100vw] min-h-[90vh] h-auto flex items-center justify-center relative overflow-hidden py-20 lg:py-0"
    >
      <div ref={glowRef} className="gradient-effect absolute"></div>

      <div className="t-1 w-[90%] md:w-[80%] lg:w-[70%] text-center relative z-10 flex flex-col items-center">
        <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Digital Experiences That Turn Visitors Into Customers
        </h1>
        
        <div ref={paraRef} className="p w-[95%] md:w-[80%] lg:w-[65%] mt-6">
          <p className="text-lg md:text-xl lg:text-1.5xl text-white/70">
            for brands that refuse to blend in. From scroll-stopping visuals to{" "}
            <span className="text-xl md:text-2xl font-semibold text-white/90">
              conversion-optimized websites—all under one roof.
            </span>
          </p>
        </div>

        {/* Trust Section */}
        <div ref={trustRef} className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 w-[90%] lg:w-[60%]">
          {/* Profile Circles */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden -ml-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden -ml-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] overflow-hidden -ml-4">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-wrap justify-center items-center gap-2 text-white/70 text-base md:text-lg">
            <span className="font-bold text-[#3B82F6]">Trusted by</span>
            <span className="font-light">Industry Leaders Worldwide</span>
          </div>
        </div>

        <div className="btn mt-10">
          <button 
            ref={btnRef}
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
            className="bg-[#8B5CF6] text-white px-5 py-3 rounded-lg text-lg font-semibold h-12 w-60 shadow-lg shadow-[#8B5CF6]/30"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
