import React, { useState, useEffect, useRef } from "react";
import "./MyWork.css";
import bridgit from "../assets/briidgit.png"; 
import erp from "../assets/erp.png";
import portfolio from "../assets/portfolio.png";
import { useNavigate } from "react-router-dom";

export default function MyWork() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

const projects = [
  {
    id: 1,
    title: "Bridgit - Fitness Platform",
    category: "MERN Stack",
    description:
      "A comprehensive fitness platform connecting trainers and clients for online/offline sessions with real-time features.",
    shortDescription: "Fitness platform with real-time booking & payments",
    image: bridgit,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Razorpay",
      "Agora SDK",
    ],
    features: [
      "Slot booking with availability tracking",
      "Razorpay payment integration",
      "Real-time video calls (Agora SDK)",
      "OTP-based session validation",
      "JWT role-based authentication",
      "Fully responsive UI",
    ],
    liveLink: "https://briidgit.com/",   // ✅ Added here
    githubLink: "#",
  },
  {
    id: 2,
    title: "ERP System",
    category: "Enterprise Resource Planning",
    description:
      "A role-based ERP platform handling accounting, fund management, and site-level operations with comprehensive reporting.",
    shortDescription: "Enterprise resource planning system",
    image: erp,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "JWT",
      "REST API",
    ],
    features: [
      "Accounting module with wallet system",
      "Fund request workflow management",
      "GST-based purchase/work orders",
      "Financial reports & dashboards",
      "Role-based access control",
      "Expense tracking & audit trails",
    ],
    liveLink: "https://erpfrontend.vnvision.in/", // ✅ Added here
    githubLink: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "React.js Development",
    description:
      "A modern, responsive portfolio website showcasing skills, projects, and professional journey as a MERN stack developer.",
    shortDescription: "Modern responsive portfolio",
    image: portfolio,
    technologies: [
      "React.js",
      "CSS3",
      "JavaScript",
      "Animations",
      "Responsive Design",
    ],
    features: [
      "Modern and responsive design",
      "Smooth animations & interactions",
      "Project showcase gallery",
      "Contact form integration",
      "Optimized for performance",
      "Cross-browser compatibility",
    ],
    // liveLink: "https://suryasnataparhi10.github.io/Portfolio/", // ✅ Added here
    githubLink: "#",
  },
];


  return (
    <section className="my-work" id="work" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Work</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Here are some of my featured projects that showcase my expertise in MERN stack development
          </p>
        </div>

        {/* Projects Grid - 3 Cards Side by Side */}
        <div className="projects-showcase">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'visible' : ''} ${
                activeCard === project.id ? 'active' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveCard(project.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Background */}
              <div className="card-bg">
                <div className="bg-gradient"></div>
<div className="card-logo">
  <img
    src={project.image}
    alt={project.title}
    className="project-logo"
  />
  {/* <div className="project-badge">{project.category}</div> */}
</div>

              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="content-main">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-short-desc">{project.shortDescription}</p>
                  
                  <div className="tech-pills">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="card-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">Project Details</h4>
                    <p className="overlay-description">{project.description}</p>
                    
                    <div className="overlay-features">
                      <h5>Key Features:</h5>
                      <ul>
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="overlay-actions">
                      <a href={project.liveLink} className="action-btn primary">
                        <span>Live Demo</span>
                        <span className="btn-icon">🚀</span>
                      </a>
                      <a href={project.githubLink} className="action-btn secondary">
                        <span>View Code</span>
                        <span className="btn-icon">💻</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className={`view-more ${isVisible ? 'visible' : ''}`}>
          <button className="btn btn-secondary viewallprojects" onClick={() => navigate('/projectdetails')}>
            View All Projects
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="work-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  );
}