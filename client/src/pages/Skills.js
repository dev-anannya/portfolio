import React, { useState, useEffect } from 'react';
import './Skills.css';

// Import logos for each skill
import cLogo from '../assets/images/c.svg';
import javaLogo from '../assets/images/java.svg';
import jsLogo from '../assets/images/javascript.svg';
import pythonLogo from '../assets/images/python.svg';
import reactLogo from '../assets/images/react.svg';
import sqlLogo from '../assets/images/sql.svg';
import gitLogo from '../assets/images/git.svg';
import netlifyLogo from '../assets/images/netlify.svg';
import herokuLogo from '../assets/images/heroku.svg';
import postmanLogo from '../assets/images/postman.svg';
import unityLogo from '../assets/images/unity.svg';
import blenderLogo from '../assets/images/blender.svg';
import figmaLogo from '../assets/images/figma.svg';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This function handles the scroll event and checks the position of the Skills section
  const handleScroll = () => {
    const skillsSection = document.getElementById("skills"); // Get the Skills section by ID
    const { top, bottom } = skillsSection.getBoundingClientRect(); // Get the top and bottom position of the section

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
    <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <h2 className="skills-title">Skills</h2>
      <div className="dropdowns">
        <div className="dropdown">
          <h3 className="dropdown-title">Programming Languages</h3>
          <ul className="dropdown-list">
            <li>
              C <img src={cLogo} alt="C logo" className="skill-logo" />
            </li>
            <li>
              Java <img src={javaLogo} alt="Java logo" className="skill-logo" />
            </li>
            <li>
              JavaScript <img src={jsLogo} alt="JavaScript logo" className="skill-logo" />
            </li>
            <li>
              Python <img src={pythonLogo} alt="Python logo" className="skill-logo" />
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <h3 className="dropdown-title">Frontend Development</h3>
          <ul className="dropdown-list">
            <li>
              React.js <img src={reactLogo} alt="React logo" className="skill-logo" />
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <h3 className="dropdown-title">Backend Development</h3>
          <ul className="dropdown-list">
            <li>
              SQL <img src={sqlLogo} alt="SQL logo" className="skill-logo" />
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <h3 className="dropdown-title">Other Tools</h3>
          <ul className="dropdown-list">
            <li>
              Git <img src={gitLogo} alt="Git logo" className="skill-logo" />
            </li>
            <li>
              Netlify <img src={netlifyLogo} alt="Netlify logo" className="skill-logo" />
            </li>
            <li>
              Heroku <img src={herokuLogo} alt="Heroku logo" className="skill-logo" />
            </li>
            <li>
              Postman <img src={postmanLogo} alt="Postman logo" className="skill-logo" />
            </li>
            <li>
              Unity <img src={unityLogo} alt="Unity logo" className="skill-logo" />
            </li>
            <li>
              Blender <img src={blenderLogo} alt="Blender logo" className="skill-logo" />
            </li>
            <li>
              Figma <img src={figmaLogo} alt="Figma logo" className="skill-logo" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
