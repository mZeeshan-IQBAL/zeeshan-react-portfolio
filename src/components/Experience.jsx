import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Started My Coding Journey",
      period: "2023 – Present",
      description:
        "Began learning programming fundamentals, HTML, CSS, and JavaScript. Built small projects to understand core concepts. Gained hands-on experience with DOM manipulation, Git, and basic version control. Developed a strong foundation in web development through online courses and personal experimentation.",
    },
    {
      title: "Front-End Web Development Intern",
      period: "2023 – 2024",
      description:
        "Completed a front-end internship where I collaborated with a team on real-world projects. Gained practical experience in React.js, API integration, component-based design, and responsive UI development. Contributed to bug fixing and code reviews while improving my problem-solving and team communication skills.",
    },
    {
      title: "Freelance & Personal Projects",
      period: "2025 – Present",
      description:
        "Currently working on freelance projects and personal web apps to sharpen my skills. Focused on building dynamic, responsive interfaces using React.js, CSS frameworks, and JavaScript. Developed portfolio websites, landing pages, and dashboards. Continuously learning best practices, optimization, and new libraries/tools in the React ecosystem.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-heading">My Journey</h2>
      <ul className="experience-list">
        {experiences.map((exp, index) => (
          <li key={index} className="experience-item">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-period">{exp.period}</p>
            <p className="experience-description">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
