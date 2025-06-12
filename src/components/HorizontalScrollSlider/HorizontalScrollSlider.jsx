import React from "react";
import PillarCard from "../PillarCard/PillarCard";
import "./HorizontalScrollSlider.css";

const HorizontalScrollSlider = ({ pillars }) => (
  <div className="horizontal-scroll-outer">
    <div className="horizontal-scroll-slider">
      <div className="slider-track">
        {pillars.map((pillar, idx) => (
          <div
            className="slider-card-wrapper"
            key={pillar.id}
            style={{ marginRight: idx === pillars.length - 1 ? 0 : 23 }}
          >
            <PillarCard pillar={pillar} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HorizontalScrollSlider;
