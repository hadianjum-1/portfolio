import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import {
  Palette,
  Code2,
  Server,
  Search,
  Zap,
  ShoppingCart,
} from "lucide-react";

import "./Bout.css";
import hi from "../assets/45.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef(null);
  const storyRef = useRef(null);
  const skillsRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        ".about-hero-text",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
        }
      );

      // Story animation
      gsap.fromTo(
        ".story-element",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 78%",
          },
        }
      );

      // Expertise animation
      gsap.fromTo(
        ".skill-card",
        {
          y: 45,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 78%",
          },
        }
      );

      // Approach animation
      gsap.fromTo(
        ".approach-item",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".approach-section",
            start: "top 78%",
          },
        }
      );

      // Stats animation
      const stats = document.querySelectorAll(".stat-number");

      stats.forEach((stat) => {
        const target = parseFloat(stat.dataset.target);
        const suffix = stat.dataset.suffix || "";

        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.8,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              once: true,
            },
            onUpdate() {
              const value = Math.ceil(Number(stat.innerText));
              stat.innerText = `${value}${suffix}`;
            },
          }
        );
      });

      // CTA animation
      gsap.fromTo(
        ".cta-element",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    {
      icon: <Palette size={27} />,
      title: "UI/UX & Web Design",
      desc: "I design clean, modern interfaces that communicate a brand clearly while keeping the user experience simple and intuitive.",
    },
    {
      icon: <Code2 size={27} />,
      title: "Frontend Development",
      desc: "I build responsive and interactive websites using React, Next.js, Tailwind CSS and modern frontend technologies.",
    },
    {
      icon: <Server size={27} />,
      title: "Full-Stack Development",
      desc: "I develop complete web applications with secure APIs, authentication, databases and reliable backend architecture.",
    },
    {
      icon: <ShoppingCart size={27} />,
      title: "E-Commerce Development",
      desc: "I create custom e-commerce experiences with product management, orders, payments, shipping and scalable admin functionality.",
    },
    {
      icon: <Search size={27} />,
      title: "Technical SEO",
      desc: "I structure websites for better search visibility through technical SEO, clean architecture, metadata and performance optimization.",
    },
    {
      icon: <Zap size={27} />,
      title: "Performance Optimization",
      desc: "I focus on fast loading times, responsive interactions and smooth experiences across desktop, tablet and mobile devices.",
    },
  ];

  const stats = [
    {
      num: 6,
      suffix: "+",
      label: "Projects Built",
    },
    {
      num: 3,
      suffix: "+",
      label: "Development Areas",
    },
    {
      num: 100,
      suffix: "%",
      label: "Custom Development",
    },
    {
      num: 1,
      suffix: "",
      label: "Dedicated Developer",
    },
  ];

  return (
    <main ref={pageRef} className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge about-hero-text">
              Hadi Anjum · Web Developer & Designer
            </span>

            <h1 className="about-hero-text">
              I Design & Build
              <br />
              <span className="gradient-text">
                Digital Experiences.
              </span>
            </h1>

            <p className="hero-description about-hero-text">
              I'm Hadi Anjum, a web developer and designer focused on building
              modern, responsive and high-performance websites and web
              applications that combine strong visual design with practical
              technology.
            </p>

            <div className="hero-actions about-hero-text">
              <Link to="/contact" className="primary-btn">
                Start a Project
              </Link>

              <Link to="/portfolio" className="secondary-btn">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section ref={storyRef} className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image story-element">
              <div className="story-image-box">
                <img
                  src={hi}
                  alt="Hadi Anjum - Web Developer and Designer"
                  loading="lazy"
                />

                <div className="image-glow"></div>
              </div>
            </div>

            <div className="story-content">
              <span className="section-eyebrow story-element">
                About Me
              </span>

              <h2 className="story-element">
                More Than Just
                <span className="gradient-text">
                  {" "}Writing Code
                </span>
              </h2>

              <p className="story-element">
                I'm Hadi Anjum, a web developer and designer who enjoys working
                at the intersection of design, technology and business. I
                started with a strong interest in visual design and gradually
                expanded into frontend and full-stack development.
              </p>

              <p className="story-element">
                Today, I work across the complete website development process —
                from planning and UI/UX design to frontend development,
                backend systems, databases, deployment and optimization.
              </p>

              <p className="story-element">
                I believe a good website should do more than look impressive.
                It should communicate clearly, work reliably, load quickly and
                give visitors a reason to take action.
              </p>

              <div className="story-highlight story-element">
                <span className="highlight-line"></span>

                <p>
                  <strong>Design with purpose.</strong>
                  <br />
                  <span>
                    Code with clarity. Build for real-world results.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section ref={skillsRef} className="expertise-section">
        <div className="container">
          <div className="skills-header">
            <span className="section-eyebrow">
              My Expertise
            </span>

            <h2>
              Design, Development &
              <br />
              <span className="gradient-text">
                Technical Expertise
              </span>
            </h2>

            <p>
              I combine design thinking and software development to create
              complete digital experiences instead of focusing on just one
              part of a project.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article key={index} className="skill-card">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span className="skill-number">
                  0{index + 1}
                </span>

                <h3>{skill.title}</h3>

                <p>{skill.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section">
        <div className="container">
          <div className="approach-header">
            <span className="section-eyebrow">
              How I Work
            </span>

            <h2>
              From Idea To
              <span className="gradient-text">
                {" "}Launch
              </span>
            </h2>

            <p>
              I keep the development process structured, transparent and
              focused on building something that actually fits the project.
            </p>
          </div>

          <div className="approach-grid">
            <div className="approach-item">
              <span>01</span>

              <h3>Understand</h3>

              <p>
                I start by understanding the business, target audience,
                project goals and technical requirements.
              </p>
            </div>

            <div className="approach-item">
              <span>02</span>

              <h3>Design</h3>

              <p>
                I create a visual direction and responsive interface focused
                on usability, clarity and a strong brand presence.
              </p>
            </div>

            <div className="approach-item">
              <span>03</span>

              <h3>Develop</h3>

              <p>
                I turn the approved design into responsive, maintainable and
                production-ready code.
              </p>
            </div>

            <div className="approach-item">
              <span>04</span>

              <h3>Launch</h3>

              <p>
                I test the final product, fix issues, optimize performance and
                help prepare it for real users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>
                  <span
                    className="stat-number"
                    data-target={stat.num}
                    data-suffix={stat.suffix}
                  >
                    0
                  </span>
                </h3>

                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="about-cta">
        <div className="container">
          <div className="cta-inner">
            <span className="section-eyebrow cta-element">
              Have a Project in Mind?
            </span>

            <h2 className="cta-element">
              Let's Build Something
              <br />
              <span className="gradient-text">
                Worth Building.
              </span>
            </h2>

            <p className="cta-description cta-element">
              Whether you need a business website, e-commerce platform or
              custom web application, let's turn your idea into a professional
              digital experience.
            </p>

            <div className="cta-buttons cta-element">
              <Link to="/contact" className="primary-btn">
                Start a Project
              </Link>

              <Link to="/portfolio" className="secondary-btn">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

