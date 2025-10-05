import React, { useState, useEffect } from "react";

export default function Hero() {
  const [typedName, setTypedName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const fullName = "Muhammad Zeeshan Iqbal";

  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [ "Full-Stack Developer", "UI/UX Designer", "React Specialist", "MERN-Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // ⌨️ Typing effect for name
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setTypedName(fullName.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex, fullName]);

  // ⌨️ Typing effect for role (starts after name is done)
  useEffect(() => {
    if (nameIndex === fullName.length) {
      const currentRole = roles[currentRoleIndex];
      if (roleIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setTypedRole(currentRole.slice(0, roleIndex + 1));
          setRoleIndex(roleIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setRoleIndex(0);
          setTypedRole("");
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [roleIndex, currentRoleIndex, roles, nameIndex]);

  const smoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-greeting">Hi, I'm</h1>

          {/* Typing Name */}
          <h1 id="hero-name" className="hero-name typing">
            {typedName}
          </h1>

          {/* Typing Role */}
          {nameIndex === fullName.length && (
            <h3 className="hero-role">
              <span className="typing-text">{typedRole}</span>
              <span className="cursor">|</span>
            </h3>
          )}

          <p className="hero-description">
            Crafting digital experiences with modern technologies and
            innovative solutions. I design and animate user interfaces that
            are not only visually appealing but also user-friendly with
            advanced 3D animations and interactive elements. I specialize in
            creating responsive and accessible web applications that provide a
            seamless user experience across all devices.
          </p>
        </div>

        <div className="hero-buttons">
          <button
            onClick={() => smoothScroll("projects")}
            className="work-btn"
          >
            View My Work
           <span>  →</span>
          </button>
        
        </div>
      </div>
    </section>
  );
}
