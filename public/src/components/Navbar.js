import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 40px;
  background-color: black;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
  letter-spacing: 1px;

  &.light-mode {
    background-color: white;
    color: black;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const NameButton = styled.a`
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  color: white;

  ${NavbarContainer}.light-mode & {
    color: black;
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;
  margin-right: 70px;

  a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    position: relative;
    letter-spacing: 1px;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: white;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }

    ${NavbarContainer}.light-mode & {
      color: black;

      &::after {
        background: black;
      }
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide navbar links on mobile */
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  width: 40px;
  height: 40px;
  position: absolute; /* Ensure it's positioned */
  right: 50px; /* Align to the right */
  top: 10px; /* Align to the top */

  &:focus {
    outline: none;
  }

  ${NavbarContainer}.light-mode & {
    color: black;
    background: transparent;
  }

  @media (max-width: 768px) {
    display: block; /* Make it visible on small screens */
  }
`;

const HamburgerIcon = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.5rem;

    ${NavbarContainer}.light-mode & {
      color: black;
    }
  }
`;

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: black;
  color: white;
  padding-top: 60px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1001;

  &.open {
    transform: translateX(0);
  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    display: block;
  }

  ${NavbarContainer}.light-mode & {
    background-color: white;
    color: black;

    a {
      color: black;
    }
  }
`;

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
    document.querySelector('nav').classList.toggle('light-mode');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close side menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.side-menu') && !event.target.closest('.hamburger-icon')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <NavbarContainer className={isDarkMode ? '' : 'light-mode'}>
      <HamburgerIcon onClick={toggleMenu} className="hamburger-icon">
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </HamburgerIcon>
      <NameButton href="#header">Anannya Shilotri</NameButton>
      <NavbarLinks className="navbar-links">
        <a href="#header">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </NavbarLinks>

      {/* Side Menu */}
      <SideMenu className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#header" onClick={toggleMenu}>Home</a>
        <a href="#about" onClick={toggleMenu}>About Me</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact Me</a>
      </SideMenu>

      {/* Toggle Button for small screens */}
      <ToggleButton onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
      </ToggleButton>
    </NavbarContainer>
  );
};

export default Navbar;
