import React, { useState } from "react";
import {
  FaTelegram,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarker,
} from "react-icons/fa";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-heading">Let's Work Together</h2>
      <p className="contact-description">
         Have a project in mind or just want to say hello? Send me a message and let's create something amazing together!
      </p>
    <section id="connect" className="connect-section">
      <div className="socials">
        <div className="socials-form">
          <h2>Get in Touch</h2>
          <p className="socials-description">
            I'm always excited to take on new challenges and collaborate with
            amazing people.
          </p>
          <div className="socials-details">
            <div className="socials-item">
              <FaEnvelope className="contact-icon" />
              <div className="contact-info">
                <strong>Email</strong>
                <p>Send me an email anytime</p>
                <a href="mailto:zeshansos600@gmail.com">
                  zeshansos600@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <div className="contact-info">
                <strong>Phone</strong>
                <p>Mainly active from 9am to 5pm</p>
                <a href="https://wa.me/923146032673">+92 314 6032673</a>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarker className="contact-icon" />
              <div className="contact-info">
                <strong>Location</strong>
                <p>Available for remote work</p>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
            <div className="available"><h4>Currently Available for new Projects</h4>
            <p>Currently booking for 08 2025</p></div>
          </div>
        </div>
      </div>
      <div className="messages-section">
        <h2>
          {" "}
          <FaTelegram className="contact-icon telegram-icon" /> Send me a
          message{" "}
        </h2>
        <div className="messages">
          <p className="messages-description">
            Fill out the form and I will get back to you within 24 hours
          </p>
          <form onSubmit={handleSubmit} className="messages-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <select required>
              <option value="">Select Budget Range</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000-2500">$1000 - $2500</option>
              <option value="2500-5000">$2500 - $5000</option>
              <option value="5000+">$5000+</option>
              <option value="Not sure">Not sure yet</option>
            </select>
            <select required>
              <option value="">Select Timeline</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="2-3 months">2-3 months</option>
              <option value="3+ months">3+ months</option>
              <option value="Flexible">Flexible</option>
            </select>
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message
            </button>
          </form>
          {messageSent && (
            <p className="success-message">
              Thank you! Your message has been sent.
            </p>
          )}
        </div>
      </div>
    </section>
    </div>
  );
}
