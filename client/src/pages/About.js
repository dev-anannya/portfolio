import React, { useEffect, useState } from 'react';
import './About.css';
import aboutImage from '../assets/images/about.jpg'; // Adjust the path

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const { top } = aboutSection.getBoundingClientRect();
      if (top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="about-image">
        <img src={aboutImage} alt="Anannya Shilotri" />
      </div>
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hi! I'm Anannya Shilotri, a passionate developer and software engineer with a love for blending fashion and technology. I have expertise in full-stack development, creative design, and innovation. My mission is to create sleek and innovative digital experiences that resonate with style and functionality.
        </p>
      </div>
    </section>
  );
};

export default About;
