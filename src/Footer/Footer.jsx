import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current?.querySelectorAll(
          ".footer-brand, .footer-column"
        ) ?? [],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer" role="contentinfo">
      {/* Glow */}
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <p className="footer-logo" aria-label="Hadi Anjum">
            Hadi<span aria-hidden="true">.</span>
          </p>
          <p className="footer-tagline">
            Design + Development for Ambitious Brands
          </p>
        </div>

        {/* Links */}
        <nav className="footer-links" aria-label="Footer navigation">
          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>
            <a href="#portfolio">Graphic Design</a>
            <a href="#portfolio">Web Development</a>
            <a href="#portfolio">Brand Strategy</a>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Contact</h3>
            <a href="mailto:Hadi@nexgenbyte.com" aria-label="Send email to Hadi Anjum">
              Hadi@nexgenbyte.com
            </a>
            <a
              href="https://linkedin.com/in/hadianjum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hadi Anjum on LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/hadianjum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hadi Anjum on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://behance.net/hadianjum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hadi Anjum on Behance"
            >
              Behance
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 Hadi Anjum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;