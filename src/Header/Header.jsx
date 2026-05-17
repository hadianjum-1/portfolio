import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  /* ── Navbar entrance animation ── */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 }
    )
      .fromTo(
        logoRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6 },
        "-=0.5"
      )
      .fromTo(
        navRef.current?.querySelectorAll("li") ?? [],
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
        "-=0.4"
      );
  }, []);

  /* ── Scroll-based glass effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on resize ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Animate hamburger icon lines ── */
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
    <header
      ref={headerRef}
      className={`site-header ${scrolled ? "scrolled" : ""}`}
      role="banner"
    >
      {/* Logo */}
      <div ref={logoRef} className="header-logo" aria-label="Hadi Anjum — Home">
        <a href="#hero">
          <span className="logo-text">Hadi</span>
          <span className="logo-dot">.</span>
        </a>
      </div>

      {/* Desktop Nav */}
      <nav
        ref={navRef}
        className="header-nav"
        aria-label="Primary navigation"
        role="navigation"
      >
        <ul>
          <li><a href="#about"     className="nav-link">About me</a></li>
          <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          <li><a href="#contact"   className="nav-link">Contact</a></li>
        </ul>
      </nav>

      {/* Hamburger (mobile) */}
      <button
        ref={hamburgerRef}
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>

    {/* Mobile Drawer (placed outside header to avoid transform/backdrop-filter containing block issues) */}
    <nav
      id="mobile-menu"
      className={`mobile-nav ${menuOpen ? "open" : ""}`}
      aria-label="Mobile navigation"
      role="navigation"
    >
      <ul>
        <li><a href="#about"     onClick={() => setMenuOpen(false)}>About me</a></li>
        <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
        <li><a href="#contact"   onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
    </>
  );
};

export default Header;
