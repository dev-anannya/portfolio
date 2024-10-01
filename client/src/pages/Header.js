import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  padding: 50px 0; /* Space for the header */
  background-color: #444; /* Optional: Background color for header */
  margin: 0; /* Ensure no margin */
`;

const HeaderImage = styled.img`
  max-width: 100%; /* Responsive image */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px; /* Optional: Rounded corners for the image */
`;

const Home = () => {
  return (
    <div className="page">
      <Header id="home"> {/* Added ID for navigation */}
        <HeaderImage src="path/to/your/image.jpg" alt="Your Name" /> {/* Link your image here */}
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage where I showcase my work.</p>
      </Header>

      {/* Additional sections can follow */}
      <section id="about">
        <h1>About Me</h1>
        <p>Information about me goes here.</p>
      </section>

      <section id="projects">
        <h1>My Projects</h1>
        <p>Details about my projects go here.</p>
        <ul>
          <li>Project 1: Description</li>
          <li>Project 2: Description</li>
          <li>Project 3: Description</li>
        </ul>
      </section>

      <section id="resume">
        <h1>My Resume</h1>
        <p>You can download my resume <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
      </section>

      <section id="contact">
        <h1>Contact Me</h1>
        <p>Contact information goes here. You can reach me at [your email address].</p>
      </section>
    </div>
  );
};

export default Home;
