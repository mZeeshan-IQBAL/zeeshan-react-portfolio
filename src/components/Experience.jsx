// Experience.jsx
import React from "react";
import {
  ExternalLink,
  Calendar,
  MapPin,
  School,
  Key,
  Wrench,
  GitBranch,
  Hammer,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Educator | Teaching English & Islamiyat",
    date: "2023 – 2024",
    organization: {
      name: "Oxbridge International School System",
      link: "https://www.oxbridgeinternationalschool.com",
    },
    location: "Mtn, Punjab, Pakistan",
    description:
      "Worked as an English and Islamiyat teacher at Oxbridge International School System (2023–2024), focusing on effective subject delivery and student development. Created an engaging, student-centered environment using interactive lessons, activities, and diverse teaching strategies.",
    achievements: [
      "Taught English & Islamiyat with clear, structured lesson plans",
      "Created an engaging and supportive classroom environment",
      "Contributed to curriculum and team methods",
    ],
    tools: ["Lesson Planning", "Classroom Activities", "Student Assessment", "Teamwork"],
    iconSection: { achievements: Key, tools: Wrench },
  },
  {
    id: 2,
    role: "Started My Coding Journey",
    date: "2024 – Present",
    organization: { name: "Comsats University Islamabad", link: null },
    location: "Comsats University Islamabad",
    description:
      "Began learning programming fundamentals, HTML, CSS, and JavaScript. Built small projects to understand core concepts. Gained hands-on experience with DOM manipulation, Git, and basic version control. Developed a strong foundation in web development through online courses and personal experimentation.",
    achievements: [
      "Learned HTML, CSS, JavaScript, and programming fundamentals",
      "Practiced DOM manipulation and basic interactivity",
      "Used Git for version control and hosted projects on GitHub",
      "Completed online tutorials and coding challenges",
    ],
    tools: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    iconSection: { achievements: GitBranch, tools: Wrench },
  },
  {
    id: 3,
    role: "Senior Frontend Web Developer",
    date: "2025",
    organization: {
      name: "utecho",
      link: "https://www.utecho.com",
    },
    location: "Mtn, Punjab, Pakistan",
    description:
      "Worked as a Senior Frontend Developer at The ACE Solutions, where I focused on enhancing my frontend skills through real-world practice and internal collaboration. My role involved exploring modern UI techniques, improving code quality, and contributing to internal features and components.",
    achievements: [
      "Refactored several reusable UI components",
      "Improved business performance through modernized interfaces",
      "Collaborated with teams to streamline development and design systems",
    ],
    tools: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
    iconSection: { achievements: Key, tools: Wrench },
  },
  {
    id: 4,
    role: "Freelance & Personal Projects",
    date: "2025 – Present",
    organization: { name: "Remote", link: null },
    location: "Remote",
    description:
      "Currently working on freelance projects and personal web apps to sharpen my skills. Focused on building dynamic, responsive interfaces using React.js, CSS frameworks, and JavaScript. Developed portfolio websites, landing pages, and dashboards. Continuously learning best practices, optimization techniques, and exploring new libraries/tools in the React ecosystem.",
    achievements: [
      "Built portfolio websites and interactive landing pages",
      "Created dashboards with reusable React components",
      "Practiced API integration, animations, and responsive layouts",
    ],
    tools: ["React.js", "JavaScript", "Tailwind CSS", "Bootstrap", "GitHub"],
    iconSection: { achievements: Hammer, tools: Wrench },
  },
];

const Experience = () => {
  const smoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="experience">
      <div className="experience-main-heading">My Journey</div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-section">
              <h2>{exp.role}</h2>

              <p>
                <Calendar className="icon" size={16} /> 🗕️ {exp.date}
              </p>

              {exp.organization?.name && (
                <p>
                  {exp.organization.link ? (
                    <a
                      href={exp.organization.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.organization.name}
                    </a>
                  ) : (
                    exp.organization.name
                  )}
                </p>
              )}

              <p>
                <MapPin className="icon" size={16} /> {exp.location}
              </p>

              <p>{exp.description}</p>

              <h3>
                <exp.iconSection.achievements className="icon" size={16} /> Key
                Achievements
              </h3>
              <ul>
                {exp.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>
                <exp.iconSection.tools className="icon" size={16} /> Tools &
                Technologies
              </h3>
              <div className="tools-used">
                {exp.tools.map((tool, index) => (
                  <span key={index} className="tool">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-container">
        <p>Like what you see? Let's work together on your next project.</p>
        <button
          className="get-in-touch-btn"
          onClick={() => smoothScroll("contact")}
        >
          Get In Touch <ExternalLink className="link-icon" size={16} />
        </button>
      </div>
    </section>
  );
};

export default Experience;
