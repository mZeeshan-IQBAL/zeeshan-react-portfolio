import React from "react";

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Technologies I Use</h2>
      <div className="skill-tags">
        {[
          "React.js",
          "JavaScript (ES6+)",
          "CSS Modules",
          "Responsive Design",
          "Git/GitHub",
          "Hooks & Context API",
          "REST APIs",
        ].map((skill, i) => (
          <span key={i} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
