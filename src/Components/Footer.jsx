// Footer.jsx
import React, { useEffect, useRef } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const canvasRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const width = canvas.width;
      const height = canvas.height;
      
      // Primary wave
      ctx.beginPath();
      ctx.moveTo(0, height * 0.7);
      
      for (let x = 0; x <= width; x += 10) {
        const y = height * 0.7 + 
          Math.sin(x * 0.01 + time) * 15 +
          Math.cos(x * 0.005 + time * 0.7) * 10;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      const gradient1 = ctx.createLinearGradient(0, height * 0.7, 0, height);
      gradient1.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      gradient1.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
      ctx.fillStyle = gradient1;
      ctx.fill();

      // Secondary wave
      ctx.beginPath();
      ctx.moveTo(0, height * 0.8);
      
      for (let x = 0; x <= width; x += 10) {
        const y = height * 0.8 + 
          Math.sin(x * 0.008 + time * 1.3) * 12 +
          Math.cos(x * 0.003 + time * 0.5) * 8;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      const gradient2 = ctx.createLinearGradient(0, height * 0.8, 0, height);
      gradient2.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      gradient2.addColorStop(1, 'rgba(255, 255, 255, 0.02)');
      ctx.fillStyle = gradient2;
      ctx.fill();

      // Third wave
      ctx.beginPath();
      ctx.moveTo(0, height * 0.9);
      
      for (let x = 0; x <= width; x += 10) {
        const y = height * 0.9 + 
          Math.sin(x * 0.006 + time * 1.7) * 8 +
          Math.cos(x * 0.002 + time * 0.3) * 6;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      const gradient3 = ctx.createLinearGradient(0, height * 0.9, 0, height);
      gradient3.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      gradient3.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
      ctx.fillStyle = gradient3;
      ctx.fill();

      time += 0.02;
      animationFrameId = requestAnimationFrame(drawWaves);
    };

    resizeCanvas();
    drawWaves();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-content">

          {/* Brand Section */}
          <div className="footer-brand" data-aos="fade-up">
            <h3 className="brand-name">@Suryasnata</h3>
            <p className="brand-tagline">
              Creating amazing digital experiences with passion and innovation.
            </p>

            <div className="footer-social">
              <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
            <h4 className="links-title">Quick Links</h4>
            <ul className="links-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links" data-aos="fade-up" data-aos-delay="200">
            <h4 className="links-title">Services</h4>
            <ul className="links-list">
              <li><a href="#" className="footer-link">Web Development</a></li>
              <li><a href="#" className="footer-link">UI/UX Design</a></li>
              {/* <li><a href="#" className="footer-link">Mobile Apps</a></li> */}
              {/* <li><a href="#" className="footer-link">Consulting</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact" data-aos="fade-up" data-aos-delay="300">
            <h4 className="links-title">Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:suryasnataparhi10@gmail.com">suryasnataparhi10@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+916371668962">+91 6371668962</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <a 
                  href="https://www.google.com/maps/place/Bhubaneswar,+Odisha" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Bhubaneswar, India
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} @Suryasnata. All rights reserved.
            </p>

            {/* Back to Top Button */}
            <button 
              className="back-to-top" 
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <i className="fas fa-chevron-up"></i>
            </button>
          </div>
        </div>

      </div>

      {/* Enhanced Background Animation */}
      <div className="footer-background">
        <canvas 
          ref={canvasRef} 
          className="footer-canvas"
        />
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;