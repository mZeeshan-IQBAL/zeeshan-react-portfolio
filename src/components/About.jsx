import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        Hello! I’m Muhammad Zeeshan Iqbal, a passionate front-end web developer
        from Pakistan. I specialize in building fast, responsive, and scalable
        websites and applications using modern technologies like React.js,
        JavaScript, and CSS.
      </p>

      <h3>Skills</h3>
      <ul className="skills-list">
        <li>React.js (Class & Functional Components)</li>
        <li>JavaScript (ES6+)</li>
        <li>CSS Modules / Styled Components</li>
        <li>Responsive Design</li>
        <li>State Management (Context API, Redux - Optional)</li>
        <li>API Integration</li>
      </ul>

      <h3>Services</h3>
      <ul className="services-list">
        <li>Custom Web Application Development</li>
        <li>React Component Architecture</li>
        <li>Front-End Optimization</li>
        <li>Single Page Applications (SPA)</li>
      </ul>
    </section>
  );
}
