import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const contactSection = document.getElementById("contact"); // Get the Contact section by ID
    const { top, bottom } = contactSection.getBoundingClientRect(); // Get the top and bottom position of the section

    // If the section is in view
    if (top < window.innerHeight && bottom > 0) {
      setIsVisible(true); // Make the section visible
    } else {
      setIsVisible(false); // Reset visibility when out of view
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen to scroll events
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  return (
    <section id="contact" className={`contact-section ${isVisible ? 'visible' : ''}`}>
      <h2 className="contact-title">Let's Connect</h2>
      <p>I would love to hear from you!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      <div className="contact-info">
        <div className="social-links">
        <a href="mailto:anannyashilotri@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
          <a href="https://www.linkedin.com/in/anannyashilotri

" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/dev-anannya" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
