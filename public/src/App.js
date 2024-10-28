// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/styled-components/Navbar';
import Header from './components/styled-components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import './components/styled-components/Scrollbar.css'; // Import the custom scrollbar styles
import './App.css'; // Import global styles for dark/light mode

const App = () => {
    return (
        <div className="App"> {/* Added a wrapper div for the light mode */}
            <Router>
                <Navbar />
                <Header /> {/* Added Header component here */}
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
