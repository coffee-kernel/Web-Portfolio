import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
            <img src='/images/logo/logo_top_2.gif' alt='logo-image' className='logo-img' />
            <h2>Hello, I'm Joshua Quintanar</h2>
        </div>
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;