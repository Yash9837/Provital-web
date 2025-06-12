import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="container">
        <div style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1>About ProVital</h1>
          <p>Learn more about our mission to transform healthcare through lifestyle medicine.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
