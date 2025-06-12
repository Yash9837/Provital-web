import React from 'react';
import { usePillar } from '../../context/PillarContext';
import { tabsData } from '../../data/pillarsData';
import './Tabs.css';

const Tabs = () => {
  const { activeTab, setActivePillar } = usePillar();

  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActivePillar(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
