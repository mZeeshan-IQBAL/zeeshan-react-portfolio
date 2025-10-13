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
  FaDatabase,
  FaLock,
  FaCreditCard,
  FaGlobe,
  FaMapMarkedAlt,
  FaShieldAlt,
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
              I am a passionate MERN‑Stack developer with experience in MongoDB, Express.js, React.js, and Node.js. I specialize in developing dynamic and static web applications using modern technologies and frameworks. With experience across front‑end, back‑end, database management, and API integrations, I build applications that are scalable, responsive, and user‑friendly. I’ve worked on projects from small‑scale to large‑scale and understand the full software development life cycle.
            </p>
          </div>

          {/* Skills */}
          <div className="skills-paragraph">
            <h3 className="about-title">
              <FaLaptopCode className="icon" /> Skills
            </h3>
            {/** Structured skills list with icons */}
            <ul className="skills-list">
              {[
                { icon: <FaCode />, label: "Languages", detail: "HTML5, CSS3, JavaScript" },
                { icon: <FaLaptopCode />, label: "Frameworks", detail: "React, Next.js, Node.js, Express, Redux" },
                { icon: <FaDatabase />, label: "Databases", detail: "MongoDB" },
                { icon: <FaLock />, label: "Authentication", detail: "JWT, NextAuth" },
                { icon: <FaCreditCard />, label: "Payments", detail: "Stripe, PayPal, Razorpay" },
                { icon: <FaGlobe />, label: "Social integrations", detail: "Google, Facebook, Twitter" },
                { icon: <FaMapMarkedAlt />, label: "Maps", detail: "Google Maps" },
                { icon: <FaShieldAlt />, label: "Security", detail: "CSP headers" },
              ].map((s, i) => (
                <li key={i} className="skill-row">
                  <span className="skill-icon">{s.icon}</span>
                  <span className="skill-label">{s.label}:</span>
                  <span className="skill-detail">{s.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* ✅ Closed the About section */}
      <Certificates />
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
