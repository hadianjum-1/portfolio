import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import {
  X,
  ExternalLink,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

import "./Port.css";

import expenseImg from "../assets/expense.jpg";

// Replace these paths with your actual project images if your filenames differ.
import northTacticalImg from "../assets/thenorthtactical.jpg";
import romanaImg from "../assets/romana.jpg";
import parksideImg from "../assets/parkside.jpg";
import meridianImg from "../assets/meridian .jpg";
import voltaImg from "../assets/volta.jpg";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: "the-north-tactical",
    title: "TheNorthTactical",
    category: "E-Commerce",
    featured: true,

    description:
      "A custom tactical accessories e-commerce platform designed for product discovery, secure ordering and scalable store management.",

    metric: "Custom E-Commerce Platform",

    image: northTacticalImg,

    overview:
      "TheNorthTactical is a custom e-commerce experience built for a Pakistan-based tactical accessories brand. The platform focuses on product discovery, responsive shopping, order management and a scalable technical foundation for a growing catalog.",

    problem:
      "The project required more flexibility than a simple product catalog. The store needed to support a growing number of products, multiple purchasing options, shipping rules, customer interactions and future administrative functionality.",

    solution:
      "We designed and developed a modern e-commerce architecture with a responsive storefront, product organization, customer-focused shopping flows and a foundation for advanced store management.",

    features: [
      "Responsive E-Commerce Storefront",
      "Product Catalog",
      "Product Variations",
      "Shopping Cart",
      "Wishlist",
      "Customer Reviews",
      "Order Management",
      "Discount & Bundle Support",
      "Shipping Logic",
      "Admin Dashboard Architecture",
    ],

    tech: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],

      backend: [
        "Node.js",
        "PostgreSQL",
        "Prisma",
      ],

      tools: [
        "Cloudinary",
        "Neon",
        "Responsive UI",
        "SEO Architecture",
      ],
    },

    liveDemo: "https://thenorthtactical.com",
    github: null,

    results:
      "A scalable custom e-commerce foundation designed around the brand's products, customers and long-term growth requirements.",
  },

  {
    id: "dr-romana-durrani",
    title: "Dr. Romana Durrani",
    category: "Healthcare",

    description:
      "A professional medical website designed to establish trust, communicate expertise and make patient information easier to access.",

    metric: "Healthcare Website",

    image: romanaImg,

    overview:
      "A professional healthcare website concept for Dr. Romana Durrani, Consultant Pain Medicine. The design uses a clean medical visual language with structured information, clear calls to action and a patient-focused experience.",

    problem:
      "Healthcare websites need to communicate credibility and medical information without overwhelming visitors. The project required a professional interface that felt trustworthy while keeping important information easy to find.",

    solution:
      "Created a clean responsive experience focused on medical credibility, service presentation, doctor information, patient communication and straightforward navigation.",

    features: [
      "Responsive Medical Website",
      "Doctor Profile",
      "Medical Services",
      "Patient-Focused Navigation",
      "Contact Information",
      "Location & Map Integration",
      "Social Media Integration Ready",
      "Mobile Optimization",
    ],

    tech: {
      frontend: [
        "React",
        "Responsive CSS",
        "Modern UI Design",
      ],

      backend: [
        "Frontend-Focused Implementation",
      ],

      tools: [
        "Google Maps",
        "SEO Structure",
        "Responsive Design",
      ],
    },

    liveDemo: "https://hadianjum-1.github.io/websiteMedical/",
    github: null,

    results:
      "A polished healthcare presence designed to make professional information more accessible while strengthening online credibility.",
  },

  {
    id: "parkside-dental",
    title: "Parkside Dental",
    category: "Healthcare",

    description:
      "A modern dental website concept focused on patient trust, service discovery and conversion-focused presentation.",

    metric: "Dental Website",

    image: parksideImg,

    overview:
      "Parkside Dental is a modern dental website concept created to demonstrate how a healthcare practice can combine professional branding, clear service communication and a more approachable digital experience.",

    problem:
      "Dental practices need to quickly communicate their services, credibility and next steps to prospective patients. A cluttered or outdated website can make that journey unnecessarily difficult.",

    solution:
      "Designed a modern dental experience with strong visual hierarchy, responsive layouts, clear service sections and conversion-focused calls to action.",

    features: [
      "Responsive Dental Website",
      "Service Sections",
      "Appointment CTA",
      "Patient-Focused UX",
      "Modern Healthcare Branding",
      "Mobile-First Layout",
      "Performance-Focused Structure",
      "SEO-Friendly Page Structure",
    ],

    tech: {
      frontend: [
        "React",
        "Tailwind CSS",
        "Responsive UI",
      ],

      backend: [
        "Frontend Architecture",
      ],

      tools: [
        "SEO Structure",
        "Performance Optimization",
        "Responsive Design",
      ],
    },

    liveDemo: "https://gleeful-tarsier-efbbb8.netlify.app/",
    github: null,

    results:
      "A modern dental web experience designed around trust, clarity and patient conversion.",
  },

  {
    id: "meridian",
    title: "Meridian",
    category: "Web Development",

    description:
      "A premium modern website concept combining strong visual direction with responsive frontend development.",

    metric: "Modern Business Website",

    image: meridianImg,

    overview:
      "Meridian is a modern business website concept developed to demonstrate a premium visual system, responsive layouts and interactive frontend experiences.",

    problem:
      "Modern brands need websites that feel distinctive without sacrificing usability, responsiveness or performance.",

    solution:
      "Created a structured visual system with responsive sections, strong typography, modern spacing and interactive UI elements.",

    features: [
      "Premium Landing Page",
      "Responsive Design",
      "Modern Typography",
      "Interactive Sections",
      "Mobile Optimization",
      "Conversion-Focused Layout",
    ],

    tech: {
      frontend: [
        "React",
        "Vite",
        "CSS",
      ],

      backend: [
        "Frontend Architecture",
      ],

      tools: [
        "Responsive Design",
        "Performance Optimization",
      ],
    },

    liveDemo:
      "https://joyful-madeleine-74fb0e.netlify.app/",
    github: null,

    results:
      "A polished responsive website concept demonstrating NexGenByte's approach to premium frontend development.",
  },

  {
    id: "volta",
    title: "Volta",
    category: "Web Development",

    description:
      "A visually focused responsive web experience built around modern interface design and smooth presentation.",

    metric: "Responsive Web Experience",

    image: voltaImg,

    overview:
      "Volta is a modern web design and development project created to explore premium layouts, responsive behavior and a more engaging digital presentation.",

    problem:
      "Businesses increasingly need websites that work seamlessly across devices while maintaining a strong visual identity.",

    solution:
      "Built a responsive interface with structured content sections, modern visual hierarchy and optimized layouts for desktop and mobile users.",

    features: [
      "Responsive Website",
      "Modern UI",
      "Mobile Optimization",
      "Structured Content",
      "Premium Visual Direction",
      "Interactive Sections",
    ],

    tech: {
      frontend: [
        "React",
        "Vite",
        "CSS",
      ],

      backend: [
        "Frontend Architecture",
      ],

      tools: [
        "Responsive Design",
        "Performance Optimization",
      ],
    },

    liveDemo:
      "https://jazzy-sprinkles-bc170a.netlify.app/",
    github: null,

    results:
      "A responsive digital experience focused on modern design, usability and cross-device presentation.",
  },

  {
    id: "expense-tracker",
    title: "Expense Tracker Pro",
    category: "Full-Stack",

    description:
      "A full-stack personal finance application with secure authentication, financial analytics and exportable reports.",

    metric: "Full-Stack Web Application",

    image: expenseImg,

    overview:
      "Expense Tracker Pro is a full-stack finance management application built with React, Node.js, Express, MongoDB and JWT authentication. It allows users to manage income and expenses, organize categories and visualize financial data.",

    problem:
      "Personal finance tracking can become difficult when information is spread across spreadsheets or basic tracking tools. Users need a clear interface for recording transactions and understanding their financial activity.",

    solution:
      "Built a responsive finance dashboard with authentication, income and expense management, interactive charts, dynamic categories and downloadable financial reports.",

    features: [
      "User Authentication",
      "OTP Email Verification",
      "Password Reset",
      "JWT Authentication",
      "Income & Expense CRUD",
      "Dynamic Categories",
      "Dashboard Analytics",
      "Interactive Charts",
      "PDF / Excel / CSV Export",
      "Dark & Light Mode",
    ],

    tech: {
      frontend: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
      ],

      backend: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
      ],

      tools: [
        "Axios",
        "Nodemailer",
        "jsPDF",
        "XLSX",
        "bcrypt",
        "Helmet",
      ],
    },

    liveDemo:
      "https://hadianjum-1.github.io/frontendExpensetracker/login",
    github: null,

    results:
      "A functional full-stack application combining secure authentication, financial CRUD operations, analytics and reporting.",
  },
];

const tabs = [
  "All",
  "E-Commerce",
  "Healthcare",
  "Web Development",
  "Full-Stack",
];

function CaseStudyModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        modalRef.current,
        {
          y: 35,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
        }
      );
    }, modalRef);

    const handleKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <div className="modal-wrapper">
      <div
        className="modal-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="modal-content premium"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} case study`}
      >
        <button
          onClick={onClose}
          className="close-btn"
          aria-label="Close case study"
        >
          <X size={21} />
        </button>

        <div className="modal-hero">
          <div className="modal-image-wrapper">
            <img
              src={project.image}
              alt={`${project.title} website project`}
              className="modal-image"
            />
          </div>

          <div className="modal-hero-info">
            <span className="project-badge">
              {project.category}
            </span>

            <h2>{project.title}</h2>

            <p className="short-desc">
              {project.description}
            </p>

            <div className="hero-cta">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <GitBranch size={16} />
                  GitHub
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={16} />
                  Live Project
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <section className="case-section">
            <span className="case-label">
              Overview
            </span>

            <h3>About The Project</h3>

            <p>{project.overview}</p>
          </section>

          <section className="case-section two-col">
            <div className="case-box">
              <span className="case-label">
                The Challenge
              </span>

              <h4>The Problem</h4>

              <p>{project.problem}</p>
            </div>

            <div className="case-box">
              <span className="case-label">
                The Approach
              </span>

              <h4>The Solution</h4>

              <p>{project.solution}</p>
            </div>
          </section>

          <section className="case-section">
            <span className="case-label">
              Functionality
            </span>

            <h4>Key Features</h4>

            <ul className="features-list">
              {project.features?.map((feature, index) => (
                <li key={index}>
                  <span className="feature-dot"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="case-section">
            <span className="case-label">
              Development
            </span>

            <h4>Technology Stack</h4>

            <div className="stack-columns">
              <div>
                <h5>Frontend</h5>

                <p>
                  {project.tech?.frontend?.join(", ")}
                </p>
              </div>

              <div>
                <h5>Backend</h5>

                <p>
                  {project.tech?.backend?.join(", ")}
                </p>
              </div>

              <div>
                <h5>Tools & Other</h5>

                <p>
                  {project.tech?.tools?.join(", ")}
                </p>
              </div>
            </div>
          </section>

          <section className="case-section result-section">
            <span className="case-label">
              Project Outcome
            </span>

            <h4>Results</h4>

            <p>{project.results}</p>
          </section>

          <div className="modal-bottom-cta">
            <div>
              <strong>Interested in a similar project?</strong>

              <span>
                Let's discuss your requirements.
              </span>
            </div>

            <Link to="/contact" onClick={onClose}>
              Start a Project
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Por() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(null);

  const containerRef = useRef(null);

  const projects =
    active === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === active
        );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-fade",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [active]);

  return (
    <main
      className="portfolio-page"
      ref={containerRef}
    >
      {/* HERO */}

      <section className="portfolio-hero portfolio-fade">
        <span className="hero-label">
          NexGenByte · Selected Work
        </span>

        <h1>
          Real Projects.
          <br />
          <span>Real Digital Experiences.</span>
        </h1>

        <p className="hero-text">
          Explore websites, e-commerce platforms and full-stack applications
          designed and developed by NexGenByte for real-world use cases.
        </p>
      </section>

      {/* FILTERS */}

      <section className="filters-section portfolio-fade">
        <div className="filters-inner">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`filter-btn ${
                active === tab
                  ? "active-filter"
                  : ""
              }`}
              aria-pressed={active === tab}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${
                project.featured
                  ? "featured"
                  : ""
              }`}
              onClick={() => setOpen(project)}
              tabIndex={0}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  setOpen(project);
                }
              }}
            >
              <div className="image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} - NexGenByte ${project.category} project`}
                  loading={
                    index === 0
                      ? "eager"
                      : "lazy"
                  }
                />
              </div>

              <div className="project-overlay"></div>

              {project.featured && (
                <span className="featured-ribbon">
                  Featured Project
                </span>
              )}

              <div className="project-content">
                <span className="project-badge">
                  {project.category}
                </span>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="project-footer">
                  <span>
                    {project.metric}
                  </span>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpen(project);
                    }}
                  >
                    View Case Study
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="empty-state">
            <h3>No projects in this category yet.</h3>

            <button
              onClick={() => setActive("All")}
            >
              View All Projects
            </button>
          </div>
        )}
      </section>

      {/* CTA */}

      <section className="cta-section portfolio-fade">
        <div className="cta-box">
          <span className="hero-label">
            Have a project in mind?
          </span>

          <h2>
            Your Next Project Could
            <br />
            <span>Be Here.</span>
          </h2>

          <p>
            Whether you need a business website, e-commerce platform or custom
            web application, NexGenByte can help turn your idea into a polished
            digital product.
          </p>

          <div className="cta-buttons">
            <Link
              to="/contact"
              className="primary-btn"
            >
              Start Your Project
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/about"
              className="secondary-btn"
            >
              About NexGenByte
            </Link>
          </div>
        </div>
      </section>

      {open && (
        <CaseStudyModal
          project={open}
          onClose={() => setOpen(null)}
        />
      )}
    </main>
  );
}

export default Por;