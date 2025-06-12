import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PillarProvider } from './context/PillarContext';
import Home from './pages/Home';
import About from './pages/About';
import './styles/index.css';import './styles/index.css';
import './styles/variables.css';

function App() {
  return (
    <PillarProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </PillarProvider>
  );
}

export default App;
