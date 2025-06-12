import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  // Determine if the viewport is mobile (≤ 900px, matching the CSS breakpoint)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (dropdownOpen || menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen, menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/images/logo.png"
          alt="ProVital"
          className="navbar-logo"
        />
        <span className="navbar-brand">ProVital</span>
      </div>

      {/* Hamburger/Cross Menu Toggle for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <div className="cross-icon">
            <span className="cross-line cross-line-1"></span>
            <span className="cross-line cross-line-2"></span>
          </div>
        ) : (
          <>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </>
        )}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`} ref={menuRef}>
        {/* Dropdown Menu at the Top in Mobile View */}
        {isMobile && (
          <li className="mobile-dropdown">
            <div className="dropdown-menu">
              <div className="dropdown-row">
                <span className="dropdown-label">Doctor</span>
                <a href="/doctor-login" className="dropdown-link">
                  Login
                </a>
                <a href="/doctor-signup" className="dropdown-link">
                  Sign up
                </a>
              </div>
              <div className="dropdown-row">
                <span className="dropdown-label">Patients</span>
                <a href="/patient-login" className="dropdown-link">
                  Login
                </a>
                <a href="/patient-signup" className="dropdown-link">
                  Sign up
                </a>
              </div>
            </div>
          </li>
        )}

        {/* Other Navbar Items */}
        <li onClick={() => setMenuOpen(false)}>
          Doctors
          <span className="navbar-arrow">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 12h8"/>
              <path d="M12 8l4 4-4 4"/>
            </svg>
          </span>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          List your practice
          <span className="navbar-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 12h8"/>
              <path d="M12 8l4 4-4 4"/>
            </svg>
          </span>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          For Employers
          <span className="navbar-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 12h8"/>
              <path d="M12 8l4 4-4 4"/>
            </svg>
          </span>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          Courses
          <span className="navbar-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 12h8"/>
              <path d="M12 8l4 4-4 4"/>
            </svg>
          </span>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          Books
          <span className="navbar-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 12h8"/>
              <path d="M12 8l4 4-4 4"/>
            </svg>
          </span>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          Speakers
          <span className="navbar-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 12h8"/>
              <path d="M12 8l4 4-4 4"/>
            </svg>
          </span>
        </li>

        {/* Dropdown for Desktop View */}
        {!isMobile && (
          <li className="navbar-dropdown desktop-only" ref={dropdownRef}>
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              Login / Signup <span className="navbar-caret">▼</span>
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <span className="dropdown-label">Doctor</span>
                  <a href="/doctor-login" className="dropdown-link">
                    Login
                  </a>
                  <a href="/doctor-signup" className="dropdown-link">
                    Sign up
                  </a>
                </div>
                <div className="dropdown-row">
                  <span className="dropdown-label">Patients</span>
                  <a href="/patient-login" className="dropdown-link">
                    Login
                  </a>
                  <a href="/patient-signup" className="dropdown-link">
                    Sign up
                  </a>
                </div>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;