import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sto.css";

gsap.registerPlugin(ScrollTrigger);

const Sto = () => {
  const sectionRef = useRef(null);
  const leftRef    = useRef(null);
  const rightRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Left text slides in from left */
      gsap.fromTo(
        leftRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      /* Right card slides in from right with stagger on children */
      gsap.fromTo(
        rightRef.current?.querySelectorAll(".feature-item") ?? [],
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.15, duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title:    "Dual Expertise",
      desc:     "A unique combination of creative design and technical development under one roof.",
      color:    "#3B82F6",
    },
    {
      title:    "Speed",
      desc:     "Faster project delivery without sacrificing quality or attention to detail.",
      color:    "white",
    },
    {
      title:    "Conversion Focus",
      desc:     "Every project is built with user behavior, engagement, and business goals in mind.",
      color:    "white",
    },
    {
      title:    "True Partnership",
      desc:     "Clear communication, collaboration, and long-term support throughout every stage.",
      color:    "#8B5CF6",
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="story"
      aria-label="Why work with Hadi Anjum"
    >
      {/* Left — story paragraphs */}
      <div ref={leftRef} className="story-left">
        <p className="story-para">
          I noticed a common problem in the industry — designers and developers often
          work separately, leading to delays, inconsistent results, and missed opportunities.
        </p>
        <p className="story-para story-muted">
          By combining strong visual design skills with modern web development expertise,
          I help brands move faster while maintaining a premium, consistent identity.
        </p>
        <p className="story-para">
          Today, my mission is simple — create high-performing digital experiences that
          not only look exceptional but also drive measurable business growth.
        </p>
      </div>

      {/* Right — feature grid */}
      <div ref={rightRef} className="story-right">
        <h2 className="story-right-title">Why Work With Me</h2>
        <div className="features-grid">
          {features.map(({ title, desc, color }) => (
            <div key={title} className="feature-item">
              <h3 style={{ color }}>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sto;
