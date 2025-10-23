import React from "react";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <h2>Hello! I'm Joshua</h2>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="about" smooth={true} duration={500}>About Me</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;