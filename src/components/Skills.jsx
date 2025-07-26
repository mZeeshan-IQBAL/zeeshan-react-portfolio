import React from "react";
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaBootstrap,
  FaFigma,
  FaDatabase
} from "react-icons/fa";
import { 
  SiRedux, 
  SiVite, 
  SiTailwindcss, 
  SiTypescript,
  SiNextdotjs
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend Technologies",
    skills: [
      { name: "React.js", level: 90, icon: <FaReact /> },
      { name: "JavaScript (ES6+)", level: 85, icon: <FaJs /> },
      { name: "HTML5", level: 95, icon: <FaHtml5 /> },
      { name: "CSS3", level: 90, icon: <FaCss3Alt /> },
      { name: "TypeScript", level: 75, icon: <SiTypescript /> },
      { name: "Next.js", level: 70, icon: <SiNextdotjs /> }
    ]
  },
  {
    category: "State Management & Tools",
    skills: [
      { name: "Redux", level: 80, icon: <SiRedux /> },
      { name: "Context API", level: 85, icon: <FaReact /> },
      { name: "Git & GitHub", level: 85, icon: <FaGitAlt /> },
      { name: "Vite", level: 80, icon: <SiVite /> }
    ]
  },
  {
    category: "UI/UX & Styling",
    skills: [
      { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },
      { name: "Bootstrap", level: 80, icon: <FaBootstrap /> },
      { name: "Figma", level: 70, icon: <FaFigma /> },
      { name: "Responsive Design", level: 90, icon: <FaCss3Alt /> }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js Basics", level: 60, icon: <FaDatabase /> },
      { name: "REST APIs", level: 75, icon: <FaDatabase /> },
      { name: "MongoDB Basics", level: 55, icon: <FaDatabase /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <p className="skills-subline">Technologies I work with</p>
      
      <div className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
