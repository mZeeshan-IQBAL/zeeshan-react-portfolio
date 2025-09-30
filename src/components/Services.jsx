import React from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "I create complete websites from scratch using core web technologies. From structure to styling and interactivity.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "Front-End Development",
      description:
        "I develop clean, responsive, and interactive user interfaces using modern front-end practices.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "API Integration",
      description:
        "I connect websites with external services using APIs to fetch and send data dynamically.",
      technologies: ["JavaScript (fetch)", "React.js"],
    },
    {
      title: "Responsive Design",
      description:
        "I ensure that web pages look good on all devices, from desktops to smartphones.",
      technologies: ["CSS", "Media Queries", "Flexbox"],
    },
  ];

  const process = [
    {
      id: "1",
      title: "Discovery",
      description:
        "I begin by understanding your goals, audience, and vision for the project.",
    },
    {
      id: "2",
      title: "Planning",
      description:
        "Based on your needs, I create a clear roadmap with timelines, milestones, and deliverables.",
    },
    {
      id: "3",
      title: "Design",
      description: "Wireframes and mockups are created for your approval.",
    },
    {
      id: "4",
      title: "Development",
      description:
        "Your project is built using the latest technologies, ensuring quality and performance.",
    },
    {
      id: "5",
      title: "Testing",
      description:
        "Thorough testing ensures everything works as expected across all devices and browsers.",
    },
    {
      id: "6",
      title: "Launch",
      description:
        "Your website goes live, and I remain available for support to ensure everything runs perfectly.",
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
