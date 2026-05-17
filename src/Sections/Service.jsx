import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ser.css';
import SeCo from './SeCo';

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const cardsRef   = useRef(null);
  const btnRef     = useRef(null);

  const servicesGraphic = [
    'Brand Identity & Logo Design',
    'Social Media Graphics',
    'Marketing Materials',
    'Brand Style Guides & Print/Digital Collateral',
  ];
  const servicesWeb = [
    'Custom Website Design',
    'Responsive Development',
    'E-commerce Solutions',
    'Content Management Systems',
  ];
  const includesGraphic = [
    'Strategy-driven concepts',
    '✓ Optimized files',
    '✓ Unlimited revisions',
    '✓ Source files included',
  ];
  const includesWeb = [
    '<2s load times',
    'Conversion-optimized',
    'Clean code',
    'Easy CMS',
    'Analytics setup',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      ).fromTo(
        cardsRef.current?.querySelectorAll('.bi') ?? [],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.9 },
        '-=0.4'
      ).fromTo(
        btnRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBtnEnter = (e) =>
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.22, ease: 'power2.out' });
  const handleBtnLeave = (e) =>
    gsap.to(e.currentTarget, { scale: 1, duration: 0.22, ease: 'power2.out' });

  return (
    <section
      ref={sectionRef}
      className="ser"
      aria-label="Services offered by Hadi Anjum"
    >
      <div ref={headRef}>
        <div className="he" aria-hidden="true">Services</div>
        <div className="e">
          <h2 className="ser-main-heading">
            Comprehensive Digital Solutions For Modern Brands
          </h2>
          <p>Everything you need to establish, elevate, and optimize your digital presence.</p>
        </div>
      </div>

      <div ref={cardsRef} className="serc">
        <SeCo
          t="Brand & Graphic Design"
          d="Visual Identity That Demands Attention"
          w="What You Get"
          l={servicesGraphic}
          p={includesGraphic}
        />
        <SeCo
          t="Web Development"
          d="Websites That Work As Hard As You Do"
          w="What You Get"
          l={servicesWeb}
          p={includesWeb}
        />
      </div>

      <div className="pyn">
        <a
          ref={btnRef}
          href="#contact"
          className="iu"
          onMouseEnter={handleBtnEnter}
          onMouseLeave={handleBtnLeave}
          aria-label="Get started with Hadi Anjum's services"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Service;
