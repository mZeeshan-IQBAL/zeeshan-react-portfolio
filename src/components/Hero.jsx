import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Muhammad Zeeshan Iqbal</h1>
        <p>A Passionate Front-End Developer | Expert in React.js</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
      <img src="/profile.jpg" alt="Profile Picture" className="profile-img" />
    </section>
  );
}
