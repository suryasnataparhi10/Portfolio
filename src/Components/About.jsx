import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import profileImage from "../assets/me2.jpeg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 8,
    projects: 0,
    pages: 0,
    engagement: 0
  });
  const [activeTab, setActiveTab] = useState("skills");
  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounterAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounterAnimation = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const counters = {
      experience: 8,
      projects: 2,
      pages: 10,
      engagement: 30
    };

    Object.keys(counters).forEach(key => {
      let current = 0;
      const increment = counters[key] / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= counters[key]) {
          current = counters[key];
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  const skills = {
    "Languages": ["JavaScript (ES6+)", "Node.js", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["React.js", "React Native", "Express.js", "Bootstrap"],
    "Database": ["MongoDB"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman"],
    "Other": ["RESTful APIs", "JWT Auth", "Responsive Design"]
  };

  const education = [
    { 
      degree: "Master of Computer Applications (MCA)",
      institution: "Trident Academy of Technology, Bhubaneswar",
      period: "2023 – 2025"
    }
  ];

  const certifications = [
    "Cloud Computing and Distributed Systems (NPTEL) - IIT Kanpur",
    "Oracle Cloud Infrastructure 2024 Foundations Associate (1Z0-1085-24)",
    "Industry 4.0 and Industrial Internet of Things (NPTEL) - IIT Kharagpur"
  ];

  const experience = [
    {
      role: "Mernstack Developer",
      company: "Visital Technologies Pvt. Ltd., Bhubaneswar, India",
      period: "Feb 2025 – Present",
    }
  ];

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <div className="section-header">
              <h2 className="section-title">
                About <span className="highlight">Me</span>
              </h2>
              <div className="title-underline"></div>
            </div>

            <div className="intro-text">
              <h3 className="intro-title">
                MERN Stack Developer with{" "}
                <span className="experience-highlight">
                  {animatedStats.experience}+ Months
                </span>{" "}
                of Experience
              </h3>
              
              <p className="description">
                Enthusiastic MERN Stack Developer with hands-on experience in building scalable, 
                responsive, and user-focused web applications. Skilled in <strong>React.js, Node.js, 
                Express, and MongoDB</strong> with real-world project experience in ERP systems and 
                fitness platforms.
              </p>

              <p className="description">
                Currently expanding expertise in <strong>React Native</strong> to strengthen cross-platform 
                and backend capabilities. Passionate about clean code, modern UI/UX, and solving 
                real-world problems through technology.
              </p>
            </div>

            {/* Tab Section */}
            <div className="tab-section">
              <div className="tab-buttons">
                <button 
                  className={`tab-button ${activeTab === "skills" ? "active" : ""}`}
                  onClick={() => setActiveTab("skills")}
                >
                  Skills
                </button>
                <button 
                  className={`tab-button ${activeTab === "education" ? "active" : ""}`}
                  onClick={() => setActiveTab("education")}
                >
                  Education
                </button>
                <button 
                  className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </button>
              </div>

              <div className="tab-content">
                {activeTab === "skills" && (
                  <div className="skills-section">
                    <div className="skills-categories">
                      {Object.entries(skills).map(([category, items], index) => (
                        <div key={category} className="skill-category">
                          <h4 className="category-title">{category}</h4>
                          <div className="skills-list">
                            {items.map((skill, skillIndex) => (
                              <span key={skillIndex} className="skill-tag">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="education-section">
                    <div className="education-list">
                      {education.map((edu, index) => (
                        <div key={index} className="education-item">
                          <div className="education-header">
                            <h4 className="education-degree">{edu.degree}</h4>
                            <span className="education-period">{edu.period}</span>
                          </div>
                          <p className="education-institution">{edu.institution}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="certifications-section">
                      <h4 className="certifications-title">Certifications</h4>
                      <div className="certifications-list">
                        {certifications.map((cert, index) => (
                          <div key={index} className="certification-item">
                            <span className="certification-badge">🏆</span>
                            <span className="certification-text">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="experience-section">
                    <div className="experience-list">
                      {experience.map((exp, index) => (
                        <div key={index} className="experience-item">
                          <div className="experience-header">
                            <h4 className="experience-role">{exp.role}</h4>
                            <span className="experience-period">{exp.period}</span>
                          </div>
                          <p className="experience-company">{exp.company}</p>
                          {/* <ul className="experience-achievements">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="achievement-item">
                                {achievement}
                              </li>
                            ))}
                          </ul> */}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Call to Action */}
            <div className="about-actions">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
                <span className="btn-icon">🚀</span>
              </button>
            </div>
          </div>
          <div className={`about-image ${isVisible ? 'visible' : ''}`}>
            <div className="image-container">
              <img 
                src={profileImage} 
                alt="Suryasnata Parhi - MERN Stack Developer" 
                className="profile-img"
              />
              <div className="image-glow"></div>
              <div className="floating-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express</span>
              </div>
            </div>
            
            {/* Animated Stats */}
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">
                  {animatedStats.experience}+
                </div>
                <div className="stat-label">Months Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  {animatedStats.projects}+
                </div>
                <div className="stat-label">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="about-bg-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
}