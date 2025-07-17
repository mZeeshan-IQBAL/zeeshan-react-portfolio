import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="navbar">
      <div className="logo">Zeeshan Iqbal</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="social-icons">
        <a
          href="https://github.com/mZeeshan-IQBAL "
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-zeeshan-iqbal-0a7744349 "
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/itx_z33shan "
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
