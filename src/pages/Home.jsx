import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import Tabs from '../components/Tabs/Tabs';
import HorizontalScrollSlider from '../components/HorizontalScrollSlider/HorizontalScrollSlider';
import { usePillar } from '../context/PillarContext';

const Home = () => {
  const { pillars } = usePillar();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <div className="dividertest"></div>
      
      <section className="lifestyle-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-subtitle">HOW IT WORKS</h2>
            <div className="title-container">
              <h3 className="section-title">
                <span className="lifestyle-text">Lifestyle as medicine:</span>
                <span className="pillars-text">The six pillars</span>
              </h3>
              {!isMobile && (
                <div className="navigation-arrows">
                  <button className="nav-arrow nav-arrow-left">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M16 12H8"/>
                      <path d="M12 8l-4 4 4 4"/>
                    </svg>
                  </button>
                  <button className="nav-arrow nav-arrow-right">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M8 12h8"/>
                      <path d="M12 8l4 4-4 4"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {!isMobile && <Tabs />}
          <HorizontalScrollSlider pillars={pillars} />
        </div>
      </section>
    </div>
  );
};

export default Home;