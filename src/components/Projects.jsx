import React from "react";
import EcommerceImage from "../assets/Ecommerce-product-page.png";
import ShopMeImage from "../assets/shopme-preview.png";
import PortfolioImage from "../assets/portfolio.png";

const projects = [
  {
    title: "1. React Portfolio Website",
    desc: "A modern, fully responsive personal portfolio website built with React.js, showcasing my journey, skills, certificates, and projects.",
    tech: "React.js, JavaScript, CSS, FontAwesome, Framer Motion, React Hooks",
    features: [
      "Dark mode with smooth toggle",
      "Certificates showcase with hover effects",
      "Smooth scrolling navigation",
      "Responsive design optimized for mobile and desktop",
      "Elegant UI with  CSS"
    ],
    image: PortfolioImage,
    alt: "React Portfolio Website",
    link: "http://localhost:5173/zeeshan-react-portfolio/"
  },
  {
    title: "2. E-Commerce Product Page",
    desc: "A fully responsive e-commerce product detail page built with React.js, featuring image gallery, cart integration, and mobile-first design.",
    tech: "React.js, Tailwind CSS, React Components, React-Icons, React-Slick",
    features: [
      "Product image gallery with carousel",
      "Add-to-cart functionality",
      "Responsive mobile-first layout",
      "Styled with Tailwind for modern UI",
      "Interactive buttons and hover effects"
    ],
    image: EcommerceImage,
    alt: "E-Commerce Product Page",
    link: "https://mzeeshan-iqbal.github.io/Ecommerce-product-page/"
  },
  {
    title: "3. ShopMe - Full-Stack E-Commerce Platform",
    desc: "A complete fashion e-commerce platform with React frontend, Node.js backend, MongoDB, and admin dashboard.",
    tech: "React.js, Node.js, Express.js, Tailwind CSS, MongoDB Atlas, JWT, Cloudinary, Railway, Vercel, Nodemailer",
    features: [
      "User authentication & JWT security",
      "Admin dashboard with CRUD operations",
      "Cart & order management system",
      "Real-time order status updates",
      "Image storage with Cloudinary"
    ],
    image: ShopMeImage,
    alt: "ShopMe E-Commerce Platform",
    link: "https://shopme-frontend-zeta.vercel.app/"
  },
  {
    title: "4. Weather Dashboard",
    desc: "A weather app built with React.js that fetches real-time weather data using an API and displays it with a clean, modern UI.",
    tech: "React.js, Fetch API, CSS",
    features: [
      "Fetch real-time weather data via API",
      "Search by city and country",
      "Displays temperature, humidity, and condition icons",
      "Responsive UI for all devices",
      "Clean and minimal styling"
    ],
    image: "/assets/weather-dashboard-preview.png",
    alt: "Weather Dashboard App",
    link: "https://your-weather-app-demo.netlify.app/"
  },
  {
    title: "5. Todo App with React",
    desc: "A simple but powerful To-Do app built with React.js that allows users to add, edit, and delete tasks with local storage support.",
    tech: "React.js, Hooks (useState, useEffect), LocalStorage",
    features: [
      "Add, edit, and delete tasks",
      "Persistent data with LocalStorage",
      "Task completion toggle",
      "Simple, user-friendly design",
      "Lightweight and fast performance"
    ],
    image: "/assets/todo-app-preview.png",
    alt: "To-Do App",
    link: "https://your-todo-app-demo.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">My Projects</h2>

      {projects.map((project, i) => {
        const techItems = project.tech.split(",").map((t) => t.trim());
        const featureItems = project.features;

        return (
          <div key={i} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            {/* Technologies */}
            <div className="tech">
              <strong>Technologies:</strong>
              <ul className="tech-list">
                {techItems.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="features">
              <strong>Features:</strong>
              <ul className="features-list">
                {featureItems.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            {project.image && (
              <div className="projects-image">
                <img src={project.image} alt={project.alt} />
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
        );
      })}
    </section>
  );
}