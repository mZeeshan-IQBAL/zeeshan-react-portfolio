// Certificates.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faExternalLinkAlt,
  faGraduationCap,
  faCode,
  faLayerGroup,
  faDatabase,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const certificates = [
  {
    id: "1",
    title: "Web Development Mastery: HTML, CSS & JavaScript Fundamentals",
    subtitle: "Board Infinity via Coursera",
    duration: "4 Months (approximately)",
    grade: "98.50%",
    description:
      "Acquired skills in modern UI development, CSS techniques, JavaScript interactivity, and responsive design.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
      "User Interface (UI)",
      "Web Development",
      "Front-End Web Development",
      "Responsive Web Design",
    ],
    pdf: `${import.meta.env.BASE_URL}Certificates/frontend1.pdf`,
    link: "https://www.coursera.org/account/accomplishments/verify/OVZBYPSMU8CZ",
    icon: faCode, // ✅ Just store the icon definition
  },
  {
    id: "2",
    title: "Frontend Development using React",
    subtitle: "Board Infinity via Coursera",
    duration: "3 Months (approximately)",
    grade: "93.21%",
    description:
      "Gained skills in React.js, UI development, responsive design, and modern frontend technologies.",
    skills: [
      "React.js",
      "React Hooks",
      "UI",
      "Programming Principles",
      "Front-End",
      "JavaScript",
      "Tailwind CSS",
    ],
    pdf: `${import.meta.env.BASE_URL}Certificates/frontend2.pdf`,
    link: "https://www.coursera.org/account/accomplishments/verify/3EHHRJ4N0BAW",
    icon: faLayerGroup,
  },
  {
    id: "3",
    title: "Backend Development: Node.js, Express, MongoDB & REST APIs",
    subtitle: "Board Infinity via Coursera",
    duration: "3 Months (approximately)",
    grade: "95.50%",
    description:
      "Learned to create robust backend applications, implement databases, and design RESTful APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Nodemailer",
      "Server Side",
      "Authentications",
      "NoSQL",
      "Database Design",
      "Software Architecture",
      "Database Management",
      "Node.JS",
      "Full-Stack",
    ],
    pdf: `${import.meta.env.BASE_URL}Certificates/backend.pdf`,
    link: "https://www.coursera.org/account/accomplishments/verify/A6KGJEX3DEAI",
    icon: faDatabase,
  },
];

const CertificatesTimeline = () => {
  return (
    <section id="certificates" className="certificates-timeline-section">
      <h2 className="experience-main-heading">
        <FontAwesomeIcon icon={faGraduationCap} /> Certificates
      </h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {certificates.map((cert) => (
          <div key={cert.id} className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-section certificate-card">
              <h2>
                <FontAwesomeIcon icon={cert.icon} /> {cert.title}
              </h2>
              <h3>{cert.subtitle}</h3>

              <p>
                <strong>
                  <FontAwesomeIcon icon={faClock} /> Duration:
                </strong>{" "}
                {cert.duration}
              </p>
              <p>
                <strong>
                  <FontAwesomeIcon icon={faStar} /> Grade Achieved:
                </strong>{" "}
                {cert.grade}
              </p>
              <p>{cert.description}</p>

              <div className="tech-stack">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="tech">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="certificate-buttons">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn view-btn"
                >
                  <FontAwesomeIcon icon={faFilePdf} /> View Certificate
                </a>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-btn verify-btn"
                  title="Opens Coursera verification page"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Verify
                </a>
              </div>

              <p className="certificate-note">
                <small>
                  * The Coursera verification page may show "Loading..." — it's
                  still valid.
                </small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesTimeline;
