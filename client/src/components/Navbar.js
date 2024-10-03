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
  background-color: black; /* Default dark background */
  color: white;
  position: fixed; /* Fixed position */
  width: 100%; /* Full width */
  top: 0; /* Aligns it to the top of the page */
  z-index: 1000; /* Stays above other elements */
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2); /* White shadow in dark mode */
  letter-spacing: 1px;

  /* Light Mode Styles */
  &.light-mode {
    background-color: white; /* Change background to white in light mode */
    color: black; /* Change text color to black */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Lighter shadow in light mode */
  }
`;

const NameButton = styled.a`
  margin-left: 50px; /* Shift the name 2cm (approx. 20px) to the right */
  font-size: 15px; /* Font size for name */
  font-family: 'Poppins', sans-serif;
  text-decoration: none; /* Remove underline */
  color: white; /* Default text color as white */

  /* Light Mode Styles */
  ${NavbarContainer}.light-mode & {
    color: black; /* Change text color to black in light mode */
  }
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
    font-size: 15px; /* Increased font size for links */
    font-family: 'Poppins', sans-serif;
    position: relative; /* Required for the hover effect */
    letter-spacing: 1px;

    /* Hover Effect */
    &:hover::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: white;
      position: absolute;
      bottom: -2px;
      left: 0;
      transform: scaleX(0);
      transition: transform 0.3s ease;
      transform: scaleX(1); /* Hover transition */
    }

    &:hover {
      color: white; /* Ensures the color stays white on hover */
    }

    /* Light Mode Styles */
    ${NavbarContainer}.light-mode & {
      color: black; /* Change text color to black in light mode */
    }
  }
`;

const ToggleButton = styled.button`
  background: none; /* No background */
  border: none; /* No border */
  color: white; /* Default icon color */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 1rem; /* Size of the icon */
  width: 40px; /* Fixed width */
  height: 40px; /* Fixed height */

  &:focus {
    outline: none; /* Remove focus outline */
  }

  /* Light Mode Styles */
  ${NavbarContainer}.light-mode & {
    color: black; /* Change icon color to black in light mode */
  }
`;

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // State to track mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode'); // Toggle light mode class
    // Also toggle the navbar light mode class
    document.querySelector('nav').classList.toggle('light-mode');
  };

  return (
    <NavbarContainer className={isDarkMode ? '' : 'light-mode'}>
      <NameButton href="#header">Anannya Shilotri</NameButton> {/* Turn name into a button */}
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
