import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './pro.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num:   '01',
    title: 'Discovery',
    desc:  'Understanding your goals, audience, and vision to create a clear strategy.',
    color: '#1D4ED8',
  },
  {
    num:   '02',
    title: 'Design',
    desc:  'Creating a visually appealing and user-friendly interface.',
    color: 'white',
  },
  {
    num:   '03',
    title: 'Development',
    desc:  'Building a performant, clean, and scalable codebase that meets your objectives.',
    color: '#8B5CF6',
  },
  {
    num:   '04',
    title: 'Launch',
    desc:  'Bringing your project to life and making it available to your audience.',
    color: 'white',
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const leftRef    = useRef(null);
  const stepsRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(
        leftRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 }
      ).fromTo(
        stepsRef.current?.querySelectorAll('.po2') ?? [],
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.15, duration: 0.7 },
        '-=0.6'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="process"
      aria-label="Work process — four phases"
    >
      {/* Left heading */}
      <div ref={leftRef} className="p01 process-left">
        <h2 className="ui process-title">Process</h2>
        <p className="process-sub">From Brief to Launch in 4 Simple Phases</p>
      </div>

      {/* Right steps */}
      <div ref={stepsRef} className="p01 process-right">
        {steps.map(({ num, title, desc, color }) => (
          <div key={num} className="po2">
            <h3 style={{ color }} className="step-heading">
              {num}. {title}
            </h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
