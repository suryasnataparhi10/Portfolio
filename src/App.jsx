import React, { useState, useEffect } from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Loading from './Components/Loading';
import About from './Components/About';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Components/Footer';

// Create Theme Context
export const ThemeContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Check user's system preference or saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    } else {
      setIsDarkTheme(systemPrefersDark);
    }
  }, []);

  // Save theme preference and apply to document
  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        <Navbar/>
        <Hero/>
        <About/>
        <MyWork/>
        <Contact/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;