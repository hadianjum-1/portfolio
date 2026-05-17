import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./testi.css";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    d: "What impressed me most was the combination of creativity and technical skill. Instead of hiring separate designers and developers, everything was handled seamlessly in one process.",
    n: "David Chen",
    r: "Founder, SaaS Startup",
    im: "https://randomuser.me/api/portraits/men/32.jpg",
    alt: "David Chen — Founder of a SaaS Startup",
  },
  {
    d: "Working with Hadi completely transformed our online presence. The website feels premium, loads incredibly fast, and our lead inquiries increased within the first few weeks after launch.",
    n: "Sarah Mitchell",
    r: "Marketing Director, Aljera Real Estate",
    im: "https://randomuser.me/api/portraits/women/44.jpg",
    alt: "Sarah Mitchell — Marketing Director",
  },
  {
    d: "The branding and website perfectly captured our vision. Communication was smooth, revisions were fast, and the final result exceeded our expectations.",
    n: "Jessica Alvarez",
    r: "CEO, E-commerce Monto",
    im: "https://randomuser.me/api/portraits/women/68.jpg",
    alt: "Jessica Alvarez — CEO",
  },
  {
    d: "We needed a modern website that actually converted visitors into customers—not just something that looked good. The results have been incredible so far.",
    n: "Michael Roberts",
    r: "Owner, Fitness Coaching Business",
    im: "https://randomuser.me/api/portraits/men/75.jpg",
    alt: "Michael Roberts — Fitness Business Owner",
  },
  {
    d: "Professional, reliable, and genuinely focused on results. Every detail—from the design to the user experience—was carefully thought out.",
    n: "Emma Williams",
    r: "Creative Director, Lifestyle Brand",
    im: "https://randomuser.me/api/portraits/women/21.jpg",
    alt: "Emma Williams — Creative Director",
  },
  {
    d: "Our old website felt outdated and slow. After the redesign, our business immediately looked more credible and we started receiving better-quality client inquiries.",
    n: "Daniel Carter",
    r: "Founder, Consulting Agency",
    im: "https://randomuser.me/api/portraits/men/54.jpg",
    alt: "Daniel Carter — Consulting Agency Founder",
  },
];

const Testimonail = () => {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const sliderRef   = useRef(null);
  const tweenRef    = useRef(null);

  /* ── Section heading fade-up ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Infinite marquee scroll ── */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    /* Wait one frame so layout is computed */
    const id = requestAnimationFrame(() => {
      const totalWidth = slider.scrollWidth / 2; // we duplicate cards

      tweenRef.current = gsap.to(slider, {
        x: -totalWidth,
        duration: 28,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    });

    /* Pause on hover */
    const pause  = () => tweenRef.current?.pause();
    const resume = () => tweenRef.current?.resume();
    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(id);
      tweenRef.current?.kill();
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", resume);
    };
  }, []);

  const allCards = [...testimonials, ...testimonials]; // duplicate for seamless loop

  return (
    <section
      ref={sectionRef}
      className="testi"
      aria-label="Client testimonials"
    >
      {/* Heading */}
      <div ref={headingRef} className="i">
        <h2 className="testi-title">Trusted by Brands That Expect Results</h2>
        <p className="testi-sub">
          Real feedback from businesses and founders who transformed their
          digital presence through strategy-driven design and development.
        </p>
      </div>

      {/* Slider */}
      <div className="slider-outer" aria-hidden="true">
        <div ref={sliderRef} className="slider-track">
          {allCards.map((card, i) => (
            <Card
              key={i}
              d={card.d}
              n={card.n}
              r={card.r}
              im={card.im}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonail;
