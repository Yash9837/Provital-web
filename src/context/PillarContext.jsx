import React, { createContext, useContext, useState } from 'react';
import { pillarsData } from '../data/pillarsData';

const PillarContext = createContext();

export const usePillar = () => {
  const context = useContext(PillarContext);
  if (!context) {
    throw new Error('usePillar must be used within a PillarProvider');
  }
  return context;
};

export const PillarProvider = ({ children }) => {
  const [pillars, setPillars] = useState(pillarsData);
  const [activeTab, setActiveTab] = useState('Nutrition');

  const setActivePillar = (pillarName) => {
    setActiveTab(pillarName);
    setPillars(prev => 
      prev.map(pillar => ({
        ...pillar,
        active: pillar.title === pillarName
      }))
    );
  };

  const value = {
    pillars,
    activeTab,
    setActivePillar
  };

  return (
    <PillarContext.Provider value={value}>
      {children}
    </PillarContext.Provider>
  );
};
