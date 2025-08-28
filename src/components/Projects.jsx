import React from "react";
import EcommerceImage from "../assets/Ecommerce-product-page.png";

const projects = [
  {
    title: "E-Commerce Product Page",
    desc: "A fully responsive e-commerce product detail page built with React.js, featuring image gallery, cart integration, and mobile-first design.",
    tech: "React.js, Tailwind CSS, Responsive Design",
    image: EcommerceImage,
    alt: "E-Commerce Product Page",
    link: "https://mzeeshan-iqbal.github.io/Ecommerce-product-page/",
  },
  
  {
    title: "Weather Dashboard",
    desc: "A weather app built with React.js that fetches real-time weather data using an API and displays it with a clean, modern UI.",
    tech: "React.js, Fetch API, CSS",
    image: "/assets/weather-dashboard-preview.png", // Placeholder path
    alt: "Weather Dashboard App",
    link: "https://your-weather-app-demo.netlify.app",
  },
  {
    title: "Todo App with React",
    desc: "A simple but powerful To-Do app built with React.js that allows users to add, edit, and delete tasks with local storage support.",
    tech: "React.js, Hooks (useState, useEffect), LocalStorage",
    image: "/assets/todo-app-preview.png",
    alt: "To-Do App",
    link: "https://your-todo-app-demo.netlify.app",
  },
  {
    title: "Restaurant Landing Page",
    desc: "A visually appealing landing page for a fictional restaurant built with React.js, including smooth animations and mobile responsiveness.",
    tech: "React.js, GSAP Animation, CSS",
    image: "/assets/restaurant-landing-preview.png",
    alt: "Restaurant Landing Page",
    link: "https://your-restaurant-site.netlify.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <p className="tech"><strong>Technologies:</strong> {project.tech}</p>
          <div className="links">
           
          </div>
          {project.image && (
            <div className="projects-image">
              <img src={project.image} alt={project.alt} style={{ maxWidth: "100%", borderRadius: "8px", marginTop:"5px ",}} />
              <br/>
              <br/>
               <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="projects-link"
            >
             For Live Demo Click Here!
            </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}