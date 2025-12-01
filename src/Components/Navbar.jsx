import React, { useState, useEffect, useRef, useContext } from "react";
import "./Navbar.css";
import myResume from '../assets/resume.pdf';
import { ThemeContext } from '../App';
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const modalRef = useRef(null);
  const location = useLocation();
const isHomePage = location.pathname === "/" || location.pathname === "/Portfolio/";

  
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'work', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showResumeModal) {
        setShowResumeModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showResumeModal]);

  const navItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👤" },
    { name: "Work", href: "#work", icon: "💼" },
    { name: "Contact", href: "#contact", icon: "📞" },
  ];

  const handleNavClick = (href, name) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(name.toLowerCase());
  };

  const handleDownload = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    setDownloadProgress(0);
    
    const progressInterval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 15;
      });
    }, 120);
    
    try {
      const response = await fetch(myResume);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Suryasnata_Parhi_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setDownloadProgress(100);
      
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadProgress(0);
      }, 1500);
      
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  const handleMobileDownload = () => {
    setShowResumeModal(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="nav-container">
        <div 
          className="nav-logo" 
          onClick={() => window.location.href = "/Portfolio/"} 
          style={{ cursor: "pointer" }}
        >
          <div className="logo-wrapper">
            <span className="logo-text">SP</span>
            <div className="logo-glow"></div>
          </div>
          <span className="logo-subtitle">Suryasnata Parhi</span>
        </div>

<ul className="nav-links">
  {isHomePage && navItems.map((item, index) => (
              <li key={item.name} className="nav-item">
                <a 
                  href={item.href}
                  className={`nav-link ${activeSection === item.name.toLowerCase() ? 'active' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.name);
                  }}
                >
                  <span className="link-icon">{item.icon}</span>
                  <span className="link-text">{item.name}</span>
                  <span className="link-underline"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {/* Theme Toggle Button */}
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDarkTheme ? '☀️' : '🌙'}
            </button>
            
            <button className="download-btn" onClick={() => setShowResumeModal(true)}>
              <span>Resume</span>
              <span className="download-icon">📄</span>
            </button>
          </div>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <span>SP</span>
              </div>
              <button 
                className="mobile-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            
<ul className="mobile-nav-links">
  {isHomePage && navItems.map((item) => (
                <li key={item.name} className="mobile-nav-item">
                  <a 
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.name.toLowerCase() ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.name);
                    }}
                  >
                    <span className="mobile-link-icon">{item.icon}</span>
                    <span className="mobile-link-text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-menu-actions">
              <button 
                className="mobile-theme-toggle" 
                onClick={toggleTheme}
              >
                <span className="mobile-theme-icon">
                  {isDarkTheme ? '☀️' : '🌙'}
                </span>
                <span className="mobile-theme-text">
                  {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
              
              <button className="mobile-download-btn" onClick={handleMobileDownload}>
                <span>View Resume</span>
                <span className="download-icon">📄</span>
              </button>
            </div>
          </div>

          <div 
            className={`mobile-backdrop ${isMobileMenuOpen ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </nav>

      {/* Enhanced Resume Modal */}
      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div 
            className="resume-modal" 
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <div className="modal-header">
              <div className="modal-title-section">
                <div className="title-icon-wrapper">
                  <span className="title-icon">📄</span>
                </div>
                <div className="title-content">
                  <h3 className="modal-title">My Resume</h3>
                  <p className="modal-subtitle">Professional Experience & Skills</p>
                </div>
              </div>
              <button 
                className="close-btn" 
                onClick={() => setShowResumeModal(false)}
                aria-label="Close modal"
              >
                <span className="close-icon">✕</span>
              </button>
            </div>

            <div className="pdf-viewer-section">
              <div className="pdf-container">
                <div className="pdf-placeholder">
                  <div className="pdf-icon">📄</div>
                  <h4>Resume Preview</h4>
                  <p>Click download to get the complete resume</p>
                </div>
                <div className="pdf-actions">
                  <button className="preview-btn" onClick={handleDownload}>
                    <span className="preview-icon">👁️</span>
                    Preview Full PDF
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div className="download-info-section">
                <div className="file-details">
                  <div className="file-icon">📊</div>
                  <div className="file-info">
                    <span className="file-name">Suryasnata_Parhi_Resume.pdf</span>
                    <span className="file-meta">PDF • 2.1 MB • Updated recently</span>
                  </div>
                </div>
                
                <div className="download-action">
                  {isDownloading ? (
                    <div className="download-progress">
                      <div className="progress-container">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${downloadProgress}%` }}
                          ></div>
                        </div>
                        <span className="progress-text">
                          {downloadProgress === 100 ? '✅ Download Complete!' : `Downloading ${downloadProgress}%`}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button 
                      className="download-main-btn"
                      onClick={handleDownload}
                    >
                      <span className="download-btn-icon">⬇️</span>
                      <span className="download-btn-text">Download Resume</span>
                      <div className="download-wave"></div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}