import React, { useState, useEffect } from "react";
import "./Hero.css";
import avatarImg from "../assets/me.jpeg";
import { animate } from "framer-motion";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const titleLines = [
    "Judges a book",
    "by its cover…"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let currentIndex = 0;
    const currentLineText = titleLines[currentLine];
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentLineText.length) {
        setTypedText(currentLineText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentLine(1);
          setTypedText("");
          startSecondLine();
        }, 1000);
      }
    }, 100);

    const startSecondLine = () => {
      let secondIndex = 0;
      const secondLineText = titleLines[1];
      const secondTypingInterval = setInterval(() => {
        if (secondIndex <= secondLineText.length) {
          setTypedText(secondLineText.slice(0, secondIndex));
          secondIndex++;
        } else {
          clearInterval(secondTypingInterval);
        }
      }, 100);
    };

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        {/* LEFT SIDE IMAGE WITH ENHANCED EFFECTS */}
        <div className={`hero-avatar ${isVisible ? 'visible' : ''}`}>
          <div className="glow"></div>
          <div className="pulse-ring"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
          <div className="avatar-container">
            <img 
              src={avatarImg} 
              alt="Suryasnata Parhi - Developer" 
              className="avatar-img" 
            />
          </div>
        </div>

        {/* RIGHT SIDE TEXT WITH ENHANCED ANIMATIONS */}
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>

          {/* Hello Text + Arrow with hover effect */}
          <div className="hello-line">
            <div className="hello-content">
              <span className="hello-wave">👋</span>
              <p>Hello! I am <span className="name">Suryasnata Parhi</span></p>
            </div>
            <div className="arrow-container">
              <div className="arrow">
                <div className="arrow-line"></div>
                <div className="arrow-head"></div>
              </div>
            </div>
          </div>

          {/* Main Heading with typing animation */}
          <div className="title-container">
            <p className="designer-small">A Developer who</p>
            
            <h1 className="big-title">
              <span className="title-line">{currentLine === 0 ? typedText : titleLines[0]}</span>
              <span className="title-line">
                {currentLine === 1 ? (
                  <>
                    {typedText.slice(0, 6)}
                    <span className="highlight-wrapper">
                      <span className="highlight">{typedText.slice(6)}</span>
                    </span>
                  </>
                ) : (
                  "by its cover…"
                )}
              </span>
              <span className="typing-cursor">|</span>
            </h1>

            <p className="sub-text">
              Because if the cover does not impress you what else can?
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => {
                const section = document.getElementById("work");
                if (!section) return;

                const top = section.getBoundingClientRect().top + window.scrollY;

                animate(window.scrollY, top, {
                  duration: 1,
                  onUpdate: latest => window.scrollTo(0, latest),
                  ease: "easeInOut"
                });
              }}
            >
              <span className="btn-text">View My Work</span>
              <span className="btn-arrow">→</span>
              <div className="btn-glow"></div>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Connect
              <div className="btn-hover-effect"></div>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-line">
              <div className="scroll-dot"></div>
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>

      </div>
      
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  );
}