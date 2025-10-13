import React from "react";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "I build complete, scalable, and high-performance web applications using the MERN stack — from database to deployment.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      title: "Front-End Engineering",
      description:
        "I craft interactive, visually engaging, and accessible user interfaces with smooth animations and responsive layouts.",
      technologies: ["React.js", "JavaScript", "CSS3", "Framer Motion"],
    },
    {
      title: "API Design & Integration",
      description:
        "I design and integrate secure, efficient APIs that enable seamless communication between the front-end and back-end.",
      technologies: ["RESTful APIs", "Node.js", "Express.js", "Axios"],
    },
    {
      title: "Responsive & Adaptive Design",
      description:
        "I ensure every website looks and functions flawlessly across all devices with modern CSS techniques and frameworks.",
      technologies: ["Tailwind CSS", "Flexbox", "Grid", "Media Queries"],
    },
    {
      title: "Web Security Implementation",
      description:
        "I integrate essential security best practices — including authentication, validation, and secure data handling — to safeguard users and data.",
      technologies: ["JWT", "bcrypt.js", "Helmet.js", "Validation"],
    },
  ];

  const process = [
    {
      id: "1",
      title: "Discovery",
      description:
        "We start by exploring your goals, target users, and project vision to define a clear direction.",
    },
    {
      id: "2",
      title: "Planning",
      description:
        "I structure a detailed roadmap outlining architecture, features, tech stack, and development milestones.",
    },
    {
      id: "3",
      title: "Design",
      description:
        "I create wireframes and visual mockups that capture your brand identity and user experience goals.",
    },
    {
      id: "4",
      title: "Development",
      description:
        "Using modern full-stack technologies, I bring designs to life with clean, optimized, and scalable code.",
    },
    {
      id: "5",
      title: "Testing & Security",
      description:
        "Rigorous testing and security checks ensure performance, reliability, and data protection across all platforms.",
    },
    {
      id: "6",
      title: "Launch & Support",
      description:
        "Once deployed, I provide ongoing support, optimization, and updates to keep your application running flawlessly.",
    },
  ];

  return (
    <section id="services" className="service-section">
      <h2 className="services-heading">What I Offer</h2>
      <div className="service-list">
        {services.map((service, i) => (
          <div key={i} className="service-item">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <strong>Technologies:</strong>
            <ul className="technology-list">
              {service.technologies.map((tech, j) => (
                <li key={j} className="technology-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="process-section">
        <h2 className="process-heading">My Process</h2>
        <div className="process-steps">
          {process.map((step, index) => (
            <div key={step.id} className="process-step">
              <div className="process-step-number">{step.id}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
