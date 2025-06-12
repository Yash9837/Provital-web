import React from 'react';
import './HeroSection.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-field">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="#999" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" stroke="#999" strokeWidth="2"/>
        </svg>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Condition, procedure, specialty..."
        />
      </div>
      <div className="search-field">
        <svg className="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#999" strokeWidth="2"/>
          <circle cx="12" cy="10" r="3" stroke="#999" strokeWidth="2"/>
        </svg>
        <input 
          type="text" 
          className="location-input" 
          placeholder="City, state, or zipcode"
        />
      </div>
      <div className="search-field">
        <svg className="insurance-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z" stroke="#999" strokeWidth="2"/>
        </svg>
        <input 
          type="text" 
          className="insurance-input" 
          placeholder="Insurance carrier"
        />
      </div>
      <button className="search-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2"/>
        </svg>
        Find now
      </button>
    </div>
  );
};

export default SearchBar;