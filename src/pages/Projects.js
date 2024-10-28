import React, { useState, useEffect } from 'react';
import './Projects.css';

// Sample project data
const projects = [
    {
      title: 'E-Commerce Website',
      description: 'An e-commerce platform with a sleek UI and dynamic product listing.',
      liveDemo: 'https://your-live-demo-link.com',
      repository: 'https://github.com/your-repo-link',
      image: require('../assets/images/header.jpeg'), // Add your new image path here
    },
    {
      title: 'AR Application',
      description: 'An augmented reality app that enhances real-world experiences.',
      liveDemo: 'https://your-live-demo-link.com',
      repository: 'https://github.com/your-repo-link',
      image: require('../assets/images/header.jpeg'), // Add your new image path here
    },
    {
      title: 'To-Do List App',
      description: 'A web application for managing tasks with a user-friendly interface.',
      liveDemo: 'https://your-live-demo-link.com',
      repository: 'https://github.com/your-repo-link',
      image: require('../assets/images/header.jpeg'), // Add your new image path here
    },
  ];
  

  const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
  
    // Fade-in effect based on scroll position
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      const { top, bottom } = projectsSection.getBoundingClientRect();
  
      if (top < window.innerHeight && bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Handle touch start
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX); // Set starting touch position
      setIsDragging(true); // Set dragging state
      e.preventDefault(); // Prevent default touch behavior
    };
  
    // Handle touch move
    const handleTouchMove = (e) => {
      if (!isDragging) return; // Only handle move if dragging
      const currentX = e.touches[0].clientX; // Get current touch position
      const diffX = startX - currentX; // Calculate the difference
  
      // Slide to the next project if swiped left
      if (diffX > 50) {
        handleNext();
        setIsDragging(false); // Reset dragging state after swipe
      } 
      // Slide to the previous project if swiped right
      else if (diffX < -50) {
        handlePrev();
        setIsDragging(false); // Reset dragging state after swipe
      }
    };
  
    // Handle touch end
    const handleTouchEnd = (e) => {
      setIsDragging(false); // Reset dragging state on touch end
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };
  
    return (
      <section 
        id="projects" 
        className={`projects-section ${isVisible ? 'visible' : ''}`} 
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove} 
        onTouchEnd={handleTouchEnd}
      >
        <h2 className="projects-title">Projects</h2>
        <div className="carousel">
          <button className="carousel-btn left" onClick={handlePrev}>
            &lt;
          </button>
          <div className="carousel-slide">
            <img src={projects[currentIndex].image} alt={projects[currentIndex].title} className="project-thumbnail" />
            <div className="project-details">
              <h3 className="project-title">{projects[currentIndex].title}</h3>
              <p className="project-description">{projects[currentIndex].description}</p>
              <div className="project-buttons">
                <a href={projects[currentIndex].liveDemo} className="project-btn">Live Demo</a>
                <a href={projects[currentIndex].repository} className="project-btn">Repository</a>
              </div>
            </div>
          </div>
          <button className="carousel-btn right" onClick={handleNext}>
            &gt;
          </button>
        </div>
  
        {/* Slide indicators (bubbles) */}
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;