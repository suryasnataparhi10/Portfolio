// Contact.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef(null);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;

    const whatsappNumber = "916371668962"; 

    const text = `New message from your portfolio:%0A%0AName: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setIsSubmitting(false);
    }, 500);
  };

  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log("Downloading CV...");
  };

  const handleSocialClick = (platform) => {
    const socialLinks = {
      linkedin: "https://www.linkedin.com/in/suryasnataparhi/",
      github: "https://github.com/suryasnataparhi10",
      instagram: "https://www.instagram.com/suryasnata.parhi/",
      facebook: "https://facebook.com/yourprofile"
    };
    window.open(socialLinks[platform], '_blank');
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="contact-glow"></div>
      <div className="floating-shapes">
        <div className="shape s1"></div>
        <div className="shape s2"></div>
        <div className="shape s3"></div>
        <div className="shape s4"></div>
        <div className="shape s5"></div>
      </div>

      <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's create something amazing together. I'm always open to discussing 
            new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-left" data-aos="fade-right">
            <div className="contact-info-card">
              <h1 className="contact-title">
                Let's Talk About <span className="highlight">Your Project</span>
              </h1>
              
              <p className="contact-description">
                I'm interested in freelance opportunities – especially ambitious or 
                large projects. However, if you have other request or question, 
                don't hesitate to contact me.
              </p>

              <div className="info-items">
                <div className="info-item" data-aos="fade-up" data-aos-delay="100">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-content">
                    <h4>Email Me</h4>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=suryasnataparhi10@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clickable-contact"
                    >
                      suryasnataparhi10@gmail.com
                    </a>
                  </div>
                </div>
                <div className="info-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info-content">
                    <h4>Call Me</h4>
                    <a 
                      href="tel:+916371668962"
                      className="clickable-contact"
                    >
                      +91 6371668962
                    </a>
                  </div>
                </div>
                <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <span>Odisha, India</span>
                  </div>
                </div>
              </div>
              <div className="social-section" data-aos="fade-up" data-aos-delay="400">
                <h4>Follow Me</h4>
                <div className="contact-social-icons">
                  <a 
                    className="contact-social-icon" 
                    onClick={() => handleSocialClick('linkedin')}
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a 
                    className="contact-social-icon" 
                    onClick={() => handleSocialClick('github')}
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    className="contact-social-icon" 
                    onClick={() => handleSocialClick('instagram')}
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              {/* <button 
                className="download-btn" 
                onClick={handleDownloadCV}
                data-aos="fade-up" 
                data-aos-delay="500"
              >
                <i className="fas fa-download"></i>
                Download CV
              </button> */}
            </div>
          </div>

          <div className="contact-right" data-aos="fade-left">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <h3 className="form-title">Send Me a Message</h3>
              
              <div className="form-group" data-aos="fade-up" data-aos-delay="100">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <label className="form-label">Your Name</label>
                <div className="input-underline"></div>
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="150">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <label className="form-label">Your Email</label>
                <div className="input-underline"></div>
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <label className="form-label">Subject</label>
                <div className="input-underline"></div>
              </div>

              <div className="form-group" data-aos="fade-up" data-aos-delay="250">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="form-input textarea"
                ></textarea>
                <label className="form-label">Your Message</label>
                <div className="input-underline"></div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
                data-aos="fade-up" 
                data-aos-delay="300"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div> 
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="success-msg" data-aos="fade-up">
                  <i className="fas fa-check-circle"></i> 
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;