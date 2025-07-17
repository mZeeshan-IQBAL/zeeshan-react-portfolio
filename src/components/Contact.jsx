import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
      {messageSent && (
        <p className="success-message">
          Thank you! Your message has been sent.
        </p>
      )}

      <div className="socials">
        <h3>Connect With Me</h3>
        <ul>
          <li>
            <a
              href="https://github.com/mZeeshan-IQBAL "
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-zeeshan-iqbal-0a7744349 "
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:zeshansos507@gmail.com">
              <FaEnvelope /> Email
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/itx_z33shan "
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
