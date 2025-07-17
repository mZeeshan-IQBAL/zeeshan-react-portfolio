import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A responsive personal portfolio built with React.js to showcase my work and skills using modern component-based architecture.",
    tech: "React.js, CSS Modules, Responsive Design",
  },
  {
    title: "E-Commerce Product Page",
    desc: "A fully responsive e-commerce product page built with React.js featuring image zoom, cart functionality, and product filtering.",
    tech: "React.js, Context API, CSS, Bootstrap",
  },
  {
    title: "Weather Dashboard",
    desc: "A weather app built with React.js that fetches real-time weather data using an API and displays it with a clean, modern UI.",
    tech: "React.js, Fetch API, CSS",
  },
  {
    title: "Todo App with React",
    desc: "A simple but powerful To-Do app built with React.js that allows users to add, edit, and delete tasks with local storage support.",
    tech: "React.js, Hooks (useState, useEffect), LocalStorage",
  },
  {
    title: "Restaurant Landing Page",
    desc: "A visually appealing landing page for a fictional restaurant built with React.js, including smooth animations and mobile responsiveness.",
    tech: "React.js, GSAP Animation, CSS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <div className="tech">Technologies: {project.tech}</div>
          <div className="links">
            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            |
            <a href="#" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
