import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Section.css";

const Section1 = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const trustRef = useRef(null);
  const btnRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        delay: 0.15,
      });

      // Background glow
      gsap.fromTo(
        glowRef.current,
        {
          scale: 0.65,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
        }
      );

      // Hero entrance
      tl.fromTo(
        badgeRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        }
      )
        .fromTo(
          headingRef.current,
          {
            y: 55,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.25"
        )
        .fromTo(
          paraRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
          },
          "-=0.55"
        )
        .fromTo(
          trustRef.current,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
          },
          "-=0.45"
        )
        .fromTo(
          btnRef.current,
          {
            y: 20,
            scale: 0.92,
            opacity: 0,
          },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBtnEnter = () => {
    gsap.to(btnRef.current, {
      y: -3,
      scale: 1.04,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleBtnLeave = () => {
    gsap.to(btnRef.current, {
      y: 0,
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  return (
    <section ref={sectionRef} className="Hero">
      {/* Background */}
      <div ref={glowRef} className="gradient-effect"></div>

      <div className="hero-grid"></div>

      {/* Main Content */}
      <div className="hero-content">

        {/* Badge */}
        {/* <div ref={badgeRef} className="hero-badge">
          <span className="badge-dot"></span>
          Web Design · Development · Digital Experiences
        </div> */}

        {/* Heading */}
        <h1 ref={headingRef} className="hero-heading">
          Digital Experiences
          <br />
          <span className="hero-gradient">
            Built to Make an Impact.
          </span>
        </h1>

        {/* Description */}
        <div ref={paraRef} className="hero-para">
          <p>
            I design and develop modern websites and web applications
            that combine{" "}
            <span className="hero-highlight">
              strong visual design, performance, and real business functionality.
            </span>
          </p>
        </div>

        {/* Trust / Experience */}
        <div ref={trustRef} className="hero-trust">
          <div className="trust-line"></div>

          <div className="trust-text">
            <span className="trust-bold">Built for real businesses.</span>
            <span className="trust-light">
              Designed to stand out. Developed to perform.
            </span>
          </div>

          <div className="trust-line"></div>
        </div>

        {/* CTA */}
        <div className="hero-btn-wrap">
          <a
            ref={btnRef}
            href="https://calendly.com/hadianjum278/new-meeting-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
          >
            <span>Let's Talk</span>
            <span className="cta-arrow">↗</span>
          </a>
        </div>

        {/* Small supporting text */}
        <p className="hero-note">
          Have an idea, business, or project in mind?
        </p>
      </div>

      {/* Bottom visual indicator */}
      {/* <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div> */}
    </section>
  );
};

export default Section1;