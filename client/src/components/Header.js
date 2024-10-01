// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the CSS for styling

const Header = () => {
    return (
        <header className="header">
            <div className="overlay"></div>
            <div className="header-content">
                <h1>Anannya Shilotri</h1>
                {/* <p>Where style meets innovation</p> */}
            </div>
        </header>
    );
};

export default Header;
