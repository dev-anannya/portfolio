import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* Adjust padding for navbar */
  height: 40px; /* Increased height of the navbar */
  background-color: #333; /* Dark background */
  color: white;
  position: fixed; /* Fixed position */
  width: 100%; /* Full width */
  top: 0; /* Aligns it to the top of the page */
  z-index: 1000; /* Stays above other elements */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

const NameContainer = styled.div`
  margin-left: 50px; /* Shift the name 2cm (approx. 20px) to the right */
  font-size: 15px; /* Font size for name */
  font-family: 'Poppins', sans-serif;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 15px; /* Space between links */
  margin-left: 20px; /* Shift the buttons 1cm (approx. 10px) to the right */
  margin-right: 70px; /* Add margin-right to create 2cm space */

  a {
    color: white; /* White text color for links */
    text-decoration: none; /* Remove underline */
    padding: 5px; /* Add padding to links */
    transition: background-color 0.3s; /* Smooth transition */
    font-size: 15px; /* Increased font size for links */
    font-family: 'Poppins', sans-serif;
    
    &:hover {
      background-color: #444; /* Darker background on hover */
      border-radius: 5px; /* Rounded corners on hover */
    }
  }
`;

const ToggleButton = styled.button`
  background: none; /* No background */
  border: none; /* No border */
  color: white; /* White icon color */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 1rem; /* Size of the icon */
  width: 40px; /* Fixed width */
  height: 40px; /* Fixed height */

  &:focus {
    outline: none; /* Remove focus outline */
  }
`;

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // State to track mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add functionality to switch between dark and light mode here
    document.body.classList.toggle('light-mode'); // Toggle light mode class
  };

  return (
    <NavbarContainer>
      <NameContainer>Anannya Shilotri</NameContainer>
      <NavbarLinks>
        <a href="#header">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
        <ToggleButton onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        </ToggleButton>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
