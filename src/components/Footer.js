import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp, FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-text">
                        <p>&copy; 2025 All rights reserved.</p>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/coffee-kernel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook />
                        </a>
                    </div>
                    <Link to="about" smooth={true} duration={500} className="back-to-top">
                        <FaArrowUp /> Back to Top {/* Add icon before text */}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;