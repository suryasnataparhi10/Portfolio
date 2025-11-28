import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Hide loading after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-container">
      <div className="loading-content">
        {/* Animated Logo/Icon */}
        <div className="loading-logo">
          <div className="logo-orbital">
            <div className="orbital-ring ring-1"></div>
            <div className="orbital-ring ring-2"></div>
            <div className="orbital-ring ring-3"></div>
            <div className="central-sphere"></div>
          </div>
        </div>

        {/* Animated Text */}
        <div className="loading-text">
          <span className="text-char">L</span>
          <span className="text-char">o</span>
          <span className="text-char">a</span>
          <span className="text-char">d</span>
          <span className="text-char">i</span>
          <span className="text-char">n</span>
          <span className="text-char">g</span>
          <span className="text-dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>

        {/* Floating Particles */}
        <div className="particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;