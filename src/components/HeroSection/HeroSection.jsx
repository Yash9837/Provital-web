import React from 'react';
import SearchBar from './SearchBar';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Text Content - First on mobile */}
        <div className="hero-content-overlay">
          <div className="hero-text">
            <h1 className="hero-title">
              Book an appointment with{' '}
              <span className="highlight">lifestyle medicine</span>{' '}
              experts
            </h1>
            <p className="hero-subtitle">
              Optimize your lifestyle and reverse chronic diseases.
            </p>
          </div>
        </div>

        {/* Search Bar - Second on mobile */}
        <div className="hero-search-overlay">
          <SearchBar />
        </div>

        {/* Images - Third on mobile, horizontal scrolling */}
        <div className="hero-images-container">
          <div className="hero-images">
            {/* Left Column - Moving Down on desktop, part of horizontal scroll on mobile */}
            <div className="image-column column-left">
              <img src="/images/image1.png" alt="Healthy cooking" className="hero-image" />
              <img src="/images/image2.png" alt="Meditation" className="hero-image" />
              <img src="/images/image3.png" alt="Outdoor activities" className="hero-image" />
              <img src="/images/image4.png" alt="Wellness activity" className="hero-image" />
              {/* Duplicate for seamless loop */}
              <img src="/images/image1.png" alt="Healthy cooking" className="hero-image" />
              <img src="/images/image2.png" alt="Meditation" className="hero-image" />
              <img src="/images/image3.png" alt="Outdoor activities" className="hero-image" />
              <img src="/images/image4.png" alt="Wellness activity" className="hero-image" />
            </div>
            
            {/* Right Column - Moving Up on desktop, part of horizontal scroll on mobile */}
            <div className="image-column column-right">
              <img src="/images/image5.png" alt="Yoga practice" className="hero-image" />
              <img src="/images/image6.png" alt="Doctor consultation" className="hero-image" />
              <img src="/images/image7.png" alt="Wellness" className="hero-image" />
              <img src="/images/image8.png" alt="Healthy lifestyle" className="hero-image" />
              {/* Duplicate for seamless loop */}
              <img src="/images/image5.png" alt="Yoga practice" className="hero-image" />
              <img src="/images/image6.png" alt="Doctor consultation" className="hero-image" />
              <img src="/images/image7.png" alt="Wellness" className="hero-image" />
              <img src="/images/image8.png" alt="Healthy lifestyle" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;