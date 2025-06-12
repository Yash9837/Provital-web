import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="ProVital" className="logo" />
              <span className="brand-text">ProVital</span>
            </div>
            <p className="footer-description">
              Transforming healthcare through lifestyle medicine and personalized care.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>For Patients</h4>
              <ul>
                <li><a href="#find-doctors">Find Doctors</a></li>
                <li><a href="#book-appointment">Book Appointment</a></li>
                <li><a href="#health-plans">Health Plans</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>For Doctors</h4>
              <ul>
                <li><a href="#list-practice">List Your Practice</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#continuing-education">Continuing Education</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ProVital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
