import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./faq.css";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What's your typical turnaround time?",
    answer:
      "Project timelines depend on scope, but most branding and website projects are completed within 2–6 weeks.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, I work remotely with businesses and brands worldwide.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Ongoing support and revisions are available to ensure your project continues performing at its best.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Flexible payment structures can be discussed depending on project size and requirements.",
  },
  {
    question: "Can you work with my existing brand or website?",
    answer:
      "Absolutely. I can improve, redesign, or expand existing assets while maintaining brand consistency.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "A clear understanding of your goals, target audience, and project requirements is the perfect starting point.",
  },
];

const Faqs = () => {
  const [active, setActive] = useState(null);
  const sectionRef   = useRef(null);
  const headingRef   = useRef(null);
  const containerRef = useRef(null);

  const toggleFaq = (index) => {
    setActive(active === index ? null : index);
  };

  /* ── ScrollTrigger entrance ── */
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

      gsap.fromTo(
        containerRef.current?.querySelectorAll(".faq-card") ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.12, duration: 0.75, ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="faq"
      aria-label="Frequently asked questions"
    >
      {/* Heading */}
      <div ref={headingRef} className="i faq-head">
        <h2 className="faq-title">
          Frequently Asked
          <span className="ui"> Questions</span>
        </h2>
        <p className="faq-sub">
          Everything you need to know before we start building.
        </p>
      </div>

      {/* FAQ cards */}
      <div
        ref={containerRef}
        className="faq-container"
        role="list"
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${active === index ? "active" : ""}`}
            role="listitem"
          >
            <button
              className="faq-question"
              onClick={() => toggleFaq(index)}
              aria-expanded={active === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-btn-${index}`}
            >
              <h3 className="faq-q-text">{faq.question}</h3>
              <span aria-hidden="true">
                {active === index ? <Minus size={22} /> : <Plus size={22} />}
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`faq-answer ${active === index ? "show" : ""}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;