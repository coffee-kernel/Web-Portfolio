import React from "react";
import { FaReact, FaJsSquare, FaCss3, FaHtml5, FaPhp, FaPython, FaDatabase, FaRobot, FaBrain } from "react-icons/fa";

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li><FaReact /> ReactJS</li>
                    <li><FaJsSquare /> JavaScript</li>
                    <li><FaCss3 /> CSS</li>
                    <li><FaHtml5 /> HTML5</li>
                    <li><FaPhp /> PHP</li>
                    <li><FaPython /> Python</li>
                    <li><FaDatabase /> SQL Database</li>
                    <li><FaRobot /> AI</li>
                    <li><FaBrain /> Machine Learning</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;