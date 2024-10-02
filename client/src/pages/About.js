import React, { useEffect, useState } from 'react';
import './About.css';
import aboutImage from '../assets/images/about.jpg'; // Adjust path to your image
import resumePDF from '../assets/files/Anannya-Shilotri-Resume.pdf'; // Path to your resume file

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function handles the scroll event and checks the position of the About section
  const handleScroll = () => {
    const aboutSection = document.getElementById("about"); // Get the About section by ID
    const { top, bottom } = aboutSection.getBoundingClientRect(); // Get the top and bottom position of the section

    // If the section is in view (top within the viewport and bottom not above viewport)
    if (top < window.innerHeight && bottom > 0) {
      setIsVisible(true); // Make the section visible
    } else {
      setIsVisible(false); // Reset visibility when the section is out of view
    }
  };

  // useEffect to add the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen to scroll events
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup the event listener when the component unmounts
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="about-image">
        <img src={aboutImage} alt="Anannya Shilotri" />
      </div>
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
        I’m a Computer Engineering student with a love for blending fashion and technology. My journey as a developer is driven by the intersection of these two worlds, where I combine technical expertise with a creative vision to craft unique and functional digital experiences. My enthusiasm for fashion influences my approach to design, infusing my projects with an aesthetic sense that balances style, functionality, and sustainability.
        <br></br>
        <br></br>
        I’m a fast learner, adaptable to new challenges, and always eager to collaborate with teams where technology and creativity converge to make an impact.
        </p>
        {/* Centered Download Button */}
        <div className="download-button-wrapper">
          <a href={resumePDF} download="Anannya Shilotri Resume.pdf" className="download-button">
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
