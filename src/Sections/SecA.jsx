import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './A.css';

gsap.registerPlugin(ScrollTrigger);

const SecA = () => {
  const sectionRef = useRef(null);
  const imgRef     = useRef(null);
  const textRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="About"
      aria-label="About Hadi Anjum"
    >
      <div className="about-inner">
        {/* Profile image */}
        <div ref={imgRef} className="about-img-wrap po-1" role="img" aria-label="Portrait of Hadi Anjum" />

        {/* Text */}
        <div ref={textRef} className="about-text po-2">
          <h2 className="about-name">I'm Hadi Anjum,</h2>
          <p className="about-bio">
            a full-stack creative helping ambitious brands stand out, scale faster,
            and create meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecA;
