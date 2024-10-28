// src/components/Header.js
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header> 
        <section id="header" className="header">
            <div className="overlay"></div>
            <div className={`header-content ${isShrunk ? 'shrink' : ''}`}>
                <h1>
                    <span className="first-name">Anannya </span> 
                    <span className="last-name">Shilotri</span>
                </h1>
            </div>
        </section>
        </header>
    );
};

export default Header;
