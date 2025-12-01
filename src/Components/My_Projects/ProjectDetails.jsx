import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectDetails.css";

// Import all project images
import bridgit from "../../assets/briidgit.png";
import erp from "../../assets/erp.png";
import portfolio from "../../assets/portfolio.png";
import ageCalculator from "../../assets/age-calcultor.png";
import digitalClock from "../../assets/digital-clock.png";

export default function ProjectDetails() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const allProjects = [
    // Original projects
    {
      id: 1,
      title: "Bridgit - Fitness Platform",
      category: "MERN Stack",
      description: "A comprehensive fitness platform connecting trainers and clients for online/offline sessions with real-time features.",
      shortDescription: "Fitness platform with real-time booking & payments",
      image: bridgit,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Razorpay", "Agora SDK"],
      features: [
        "Slot booking with availability tracking",
        "Razorpay payment integration",
        "Real-time video calls (Agora SDK)",
        "OTP-based session validation",
        "JWT role-based authentication",
        "Fully responsive UI",
      ],
      liveLink: "https://briidgit.com/",
      githubLink: "https://github.com/yourusername/bridgit",
      featured: true
    },
    {
      id: 2,
      title: "ERP System",
      category: "Enterprise",
      description: "A role-based ERP platform handling accounting, fund management, and site-level operations with comprehensive reporting.",
      shortDescription: "Enterprise resource planning system",
      image: erp,
      technologies: ["React.js", "Node.js", "MongoDB", "Bootstrap", "JWT", "REST API"],
      features: [
        "Accounting module with wallet system",
        "Fund request workflow management",
        "GST-based purchase/work orders",
        "Financial reports & dashboards",
        "Role-based access control",
        "Expense tracking & audit trails",
      ],
      liveLink: "https://erpfrontend.vnvision.in/",
      githubLink: "https://github.com/yourusername/erp-system",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "React.js",
      description: "A modern, responsive portfolio website showcasing skills, projects, and professional journey as a MERN stack developer.",
      shortDescription: "Modern responsive portfolio",
      image: portfolio,
      technologies: ["React.js", "CSS3", "JavaScript", "Animations", "Responsive Design"],
      features: [
        "Modern and responsive design",
        "Smooth animations & interactions",
        "Project showcase gallery",
        "Contact form integration",
        "Optimized for performance",
        "Cross-browser compatibility",
      ],
      liveLink: "https://suryasnataparhi10.github.io/Portfolio/",
      githubLink: "https://github.com/suryasnataparhi10/Portfolio",
      featured: true
    },
    // New projects with live links
    {
      id: 4,
      title: "Age Calculator",
      category: "JavaScript",
      description: "A modern age calculator with beautiful animations that calculates exact age in years, months, and days with precision.",
      shortDescription: "Calculate age with beautiful animations",
      image: ageCalculator,
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
      features: [
        "Precise age calculation",
        "Smooth animations using GSAP",
        "Dark/Light theme toggle",
        "Responsive design",
        "Real-time validation",
        "Beautiful UI/UX"
      ],
      liveLink: "https://suryasnataparhi10.github.io/My-projects/Age_Calculator/",
      githubLink: "https://github.com/suryasnataparhi10/Age-Calculator",
      featured: false
    },
    {
      id: 5,
      title: "Digital Clock",
      category: "JavaScript",
      description: "An elegant digital clock with multiple timezone support, weather integration, and stunning visual effects.",
      shortDescription: "Elegant clock with multiple timezones",
      image: digitalClock,
      technologies: ["JavaScript", "CSS3", "Local Storage"],
      features: [
        "Multiple timezone support",
        "Weather integration",
        "Customizable themes",
        "Alarm functionality",
        "Smooth animations",
        "Offline capability"
      ],
      liveLink: "https://suryasnataparhi10.github.io/My-projects/Digital_Clock/",
      githubLink: "https://github.com/suryasnataparhi10/Digital-Clock",
      featured: false
    }
  ];

  const categories = ["All", "MERN Stack", "Enterprise", "React.js", "JavaScript"];

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category.includes(selectedCategory));

  return (
    <div className="project-details-page" ref={sectionRef}>
      {/* Enhanced Animated Background */}
      <div className="animated-bg">
        <div className="project-floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              animationDelay: `${Math.random() * 5}s`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Enhanced Header */}
        <header className="projects-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <span className="back-arrow">←</span>
            Back to Home
          </button>
          <div className="header-content">
            <h1 className="main-title">
              My <span className="gradient-text">Projects</span>
              <div className="title-underline"></div>
            </h1>
            <p className="header-subtitle">
              Explore my collection of projects showcasing various technologies and creative solutions
            </p>
          </div>
        </header>

        {/* Enhanced Category Filter */}
        <div className="category-filter">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
              <span className="filter-dot"></span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Projects Counter */}
        <div className="projects-counter">
          <div className="counter-badge">
            <span className="counter-number">{filteredProjects.length}</span>
            <span className="counter-text">Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Project Card Component with 3D Effects
const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const rotateX = ((mousePosition.y - 150) / 150) * 8;
  const rotateY = ((mousePosition.x - 150) / 150) * -8;

  const handleLiveDemo = (e) => {
    e.stopPropagation();
    if (project.liveLink && project.liveLink !== "#") {
      window.open(project.liveLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewCode = (e) => {
    e.stopPropagation();
    if (project.githubLink && project.githubLink !== "#") {
      window.open(project.githubLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      ref={cardRef}
      className={`project-card-3d ${isFlipped ? 'flipped' : ''} ${isHovered ? 'hovered' : ''}`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-face card-front">
          <div className="card-bg-3d"></div>
          
          <div className="card-header">
            {project.featured && <div className="featured-badge">
              <span className="featured-star">⭐</span>
              Featured
            </div>}
            <div className="category-tag">{project.category}</div>
          </div>

          <div className="project-image-container">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-image"
            />
            <div className="image-overlay"></div>
            <div className="image-shine"></div>
          </div>

          <div className="card-content-front">
            <h3 className="project-title-3d">{project.title}</h3>
            <p className="project-desc-short">{project.shortDescription}</p>
            
            <div className="tech-stack">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
              {project.technologies.length > 3 && (
                <span className="tech-tag-more">+{project.technologies.length - 3}</span>
              )}
            </div>

            {/* Quick Actions on Front */}
            <div className="quick-actions">
              <button 
                className="flip-btn"
                onClick={() => setIsFlipped(true)}
              >
                <span>View Details</span>
                <span className="flip-icon">⟳</span>
              </button>
              
              {project.liveLink && project.liveLink !== "#" && (
                <button 
                  className="quick-demo-btn"
                  onClick={handleLiveDemo}
                >
                  <span>Live Demo</span>
                  <span className="btn-icon">🚀</span>
                </button>
              )}
            </div>
          </div>

          <div className="card-glow-3d"></div>
          <div className="card-sparkles">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="sparkle" style={{
                animationDelay: `${i * 0.3}s`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}></div>
            ))}
          </div>
        </div>

        {/* Back Side */}
        <div className="card-face card-back">
          <div className="card-bg-3d back"></div>
          
          <div className="back-content">
            <button 
              className="close-flip"
              onClick={() => setIsFlipped(false)}
            >
              ×
            </button>

            <h4 className="back-title">{project.title}</h4>
            <p className="back-description">{project.description}</p>
            
            <div className="features-list">
              <h5>Key Features:</h5>
              <ul>
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="technologies-grid">
              <h5>Technologies Used:</h5>
              <div className="tech-grid">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-grid-item">{tech}</span>
                ))}
              </div>
            </div>

            <div className="action-buttons">
              {project.liveLink && project.liveLink !== "#" && (
                <button 
                  className="demo-btn enhanced"
                  onClick={handleLiveDemo}
                >
                  <span>Live Demo</span>
                  <span className="btn-icon">🚀</span>
                  <div className="btn-glow"></div>
                </button>
              )}
              
              {project.githubLink && project.githubLink !== "#" && (
                <button 
                  className="code-btn enhanced"
                  onClick={handleViewCode}
                >
                  <span>View Code</span>
                  <span className="btn-icon">💻</span>
                  <div className="btn-glow"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element el-1"></div>
        <div className="floating-element el-2"></div>
        <div className="floating-element el-3"></div>
      </div>
    </div>
  );
};