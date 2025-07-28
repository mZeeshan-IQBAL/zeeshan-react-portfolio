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

      {/* Timeline Container */}
      <div className="timeline-container">
        {/* Timeline Line */}
        <div className="timeline-line"></div>

        {/* Experience 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="experience-section">
            <h2>Educator | Teaching English & Islamiyat</h2>
            <p>
              <Calendar className="icon" size={16} />
              🗕️ 2023 – 2024
            </p>
            <p>
              <School className="icon" size={16} />{" "}
              <a
                href="https://www.oxbridgeinternationalschool.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oxbridge International School System
              </a>
            </p>
            <p>
              {" "}
              <MapPin className="icon" size={16} /> Mtn,Punjab,Pakistan
            </p>
            <p>
              Worked as an English and Islamiyat teacher at Oxbridge
              International School System (2023–2024), focusing on effective
              subject delivery and student development. Created an engaging,
              student-centered environment using interactive lessons,
              activities, and diverse teaching strategies.
            </p>
            <h3>
              <Key className="icon" size={16} /> Key Achievements
            </h3>
            <ul>
              <li>
                Taught English & Islamiyat with clear, structured lesson plans
              </li>
              <li>Created an engaging and supportive classroom environment</li>
              <li>Contributed to curriculum and team methods</li>
            </ul>
            <h3>
              <Wrench className="icon" size={16} /> Tools & Methods
            </h3>
            <div className="tools-used">
              <span className="tool">Lesson Planning</span>
              <span className="tool">Classroom Activities</span>
              <span className="tool">Student Assessment</span>
              <span className="tool">Teamwork</span>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="experience-section">
            <h2>Started My Coding Journey</h2>
            <p>
              <Calendar className="icon" size={16} />
              🗕️ 2023 – Present
            </p>
            <p>
              {" "}
              <MapPin className="icon" size={16} /> Comsats University Islamabad
            </p>
            <p></p>
            <p>
              Began learning programming fundamentals, HTML, CSS, and
              JavaScript. Built small projects to understand core concepts.
              Gained hands-on experience with DOM manipulation, Git, and basic
              version control. Developed a strong foundation in web development
              through online courses and personal experimentation.
            </p>
            <h3>
              <GitBranch className="icon" size={16} /> Key Highlights
            </h3>
            <ul>
              <li>
                Learned HTML, CSS, JavaScript, and programming fundamentals
              </li>
              <li>Practiced DOM manipulation and basic interactivity</li>
              <li>
                Used Git for version control and hosted projects on GitHub
              </li>
              <li>Completed online tutorials and coding challenges</li>
            </ul>
            <h3>
              <Wrench className="icon" size={16} /> Tools & Technologies
            </h3>
            <div className="tools-used">
              <span className="tool">HTML</span>
              <span className="tool">CSS</span>
              <span className="tool">JavaScript</span>
              <span className="tool">Git</span>
              <span className="tool">GitHub</span>
            </div>
          </div>
        </div>

        {/* Experience 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="experience-section">
            <h2>Senior Frontend Web Developer</h2>
            <p>
              <a
                href="https://www.theacesolutions.com"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </p>
            <p>
              <Calendar className="icon" size={16} />
              🗕️ 2023
            </p>
            <p>
              {" "}
              <a
                href="https://www.utecho.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                utecho
              </a>
            </p>
            <p>
              {" "}
              <MapPin className="icon" size={16} /> Mtn,Punjab, Pakistan
            </p>
            <p></p>
            <p>
              Worked as a Senior Frontend Developer at The ACE Solutions, where
              I focused on enhancing my frontend skills through real-world
              practice and internal collaboration. My role involved exploring
              modern UI techniques, improving code quality, and contributing to
              internal features and components.
            </p>
            <h3>
              <Key className="icon" size={16} /> Key Achievements
            </h3>
            <ul>
              <li>Refactored several reusable UI components</li>
              <li>
                Improved business performance through modernized interfaces
              </li>
              <li>
                Collaborated with teams to streamline development and design
                systems
              </li>
            </ul>
            <h3>
              <Wrench className="icon" size={16} /> Technologies Used
            </h3>
            <div className="tech-stack">
              <span className="tech">React</span>
              <span className="tech">JavaScript</span>
              <span className="tech">HTML</span>
              <span className="tech">CSS</span>
              <span className="tech">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Experience 4 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="experience-section">
            <h2>Freelance & Personal Projects</h2>
            <p>
              <Calendar className="icon" size={16} />
              🗕️ 2025 – Present
            </p>
            <p>
              {" "}
              <MapPin className="icon" size={16} /> Remote
            </p>
            <p>
              Currently working on freelance projects and personal web apps to
              sharpen my skills. Focused on building dynamic, responsive
              interfaces using React.js, CSS frameworks, and JavaScript.
              Developed portfolio websites, landing pages, and dashboards.
              Continuously learning best practices, optimization techniques, and
              exploring new libraries/tools in the React ecosystem.
            </p>
            <h3>
              <Hammer className="icon" size={16} /> Project Highlights
            </h3>
            <ul>
              <li>Built portfolio websites and interactive landing pages</li>
              <li>Created dashboards with reusable React components</li>
              <li>
                Practiced API integration, animations, and responsive layouts
              </li>
            </ul>
            <h3>
              {" "}
              <Wrench className="icon" size={16} />
              Tools & Technologies
            </h3>
            <div className="tools-used">
              <span className="tool">React.js</span>
              <span className="tool">JavaScript</span>
              <span className="tool">Tailwind CSS</span>
              <span className="tool">Bootstrap</span>
              <span className="tool">GitHub</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
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
