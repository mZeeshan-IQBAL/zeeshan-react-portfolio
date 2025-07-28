import React from "react";
import profileImage from "./profileImage.png";
import {
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBriefcase,
  FaCog,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
export default function Navbar({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="sidebar-navbar">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Zeeshan Iqbal"
            className="profile-image"
          />
        </div>
        <h2 className="profile-name">Muhammad Zeeshan Iqbal</h2>
        <p className="profile-subtitle">(Web Developer)</p>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <ul className="nav-links">
          <li>
            <a href="#hero" className="nav-item">
              <FaHome className="nav-icon" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item">
              <FaUser className="nav-icon" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-item">
              <FaProjectDiagram className="nav-icon" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-item">
              <FaBriefcase className="nav-icon" />
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a href="#services" className="nav-item ">
              <FaCog className="nav-icon" />
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-item">
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="sidebar-bottom">
        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://www.tiktok.com/@itx_z33shan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTiktok/>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-zeeshan-iqbal-0a7744349"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/itx_z33shan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? <FaSun /> : <FaMoon />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </div>
  );
}
