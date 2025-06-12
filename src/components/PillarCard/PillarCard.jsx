import React from 'react';
import './PillarCard.css';

const PillarCard = ({ pillar }) => {
  return (
    <div className="pillar-card">
      <div className="pillar-image-container">
        <img 
          src={pillar.image} 
          alt={pillar.title}
          className="pillar-image"
        />
        {/* Overlay Badge PNG */}
        {pillar.badge && (
          <img
            src={pillar.badge}
            alt={`${pillar.title} badge`}
            className="pillar-badge"
          />
        )}
      </div>
      <div className="pillar-content">
        <h3 className="pillar-title">{pillar.title}</h3>
        <p className="pillar-description">{pillar.description}</p>
      </div>
    </div>
  );
};

export default PillarCard;
