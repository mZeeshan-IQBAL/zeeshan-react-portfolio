import React from "react";
import Certificates from "./Certificates";
import {
  FaUser,
  FaCode,
  FaPaintBrush,
  FaLaptopCode,
  FaMugHot,
  FaHeart,
  FaLightbulb,
} from "react-icons/fa";

const whatILoveItems = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    description: "Writing maintainable, scalable code",
  },
  {
    icon: <FaPaintBrush />,
    title: "Design",
    description: "Creating beautiful user interfaces",
  },
  {
    icon: <FaLaptopCode />,
    title: "Development",
    description: "Building interactive web experiences",
  },
  {
    icon: <FaMugHot />,
    title: "Coffee",
    description: "Fuel for late-night coding sessions",
  },
  {
    icon: <FaHeart />,
    title: "Open Source",
    description: "Contributing to the community",
  },
  {
    icon: <FaLightbulb />,
    title: "Creativity",
    description: "Bringing ideas to life with code",
  },
];

export default function About() {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="about-section">
        <h1 className="about-me">About Me</h1>
        <p className="about-subline">Get to know me better</p>

        <div className="about-content">
          {/* My Story */}
          <div className="my-story">
            <h3 className="about-title">
              <FaUser className="icon" /> My Story
            </h3>
            <p>
              I began my front-end development journey in 2023 with a strong
              passion for creating user-friendly and visually appealing web
              interfaces. To solidify my foundation, I enrolled in a
              comprehensive course offered by{" "}
              <b>Board Infinity on Coursera</b>, where I mastered HTML, CSS,
              JavaScript, and React.js. Through hands-on projects, I gained a
              deep understanding of responsive design, component-based
              architecture, and modern UI/UX principles. This learning
              experience laid the groundwork for my freelance work and personal
              projects that followed.
            </p>
          </div>

          {/* Skills */}
          <div className="skills-paragraph">
            <h3>
              <FaLaptopCode className="icon" /> Skills
            </h3>
            <ul className="skills-list">
              <li>React.js (Class & Functional Components)</li>
              <li>JavaScript (ES6+)</li>
              <li>Cascading Style Sheets (CSS)</li>
              <li>User Interface (UI)</li>
              <li>Programming Principles</li>
              <li>Front-End Web Development</li>
              <li>HTML5</li>
              <li>State Management (Context API, Redux - Optional)</li>
            </ul>
          </div>
        </div>
      </section> {/* ✅ Closed the About section */}
<Certificates/>
      {/* What I Love Section */}
      <section className="what-i-love-section">
        <h2 className="love-section-title">What I Love</h2>
        <div className="love-items-grid">
          {whatILoveItems.map((item, index) => (
            <div className="love-item-card" key={index}>
              <div className="love-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="facts-section">
        <div className="quick-facts">
          <h2>Quick Facts</h2>
          <div className="facts-container">
            <div className="fact-item">
              <span className="fact-number">20+</span>
              <span className="fact-label">Projects</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">2+</span>
              <span className="fact-label">Years</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">15+</span>
              <span className="fact-label">Clients</span>
            </div>
            <div className="fact-item">
              <span className="fact-number">100%</span>
              <span className="fact-label">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}