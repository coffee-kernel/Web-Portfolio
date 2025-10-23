import React from "react";
import { FaReact, FaJsSquare, FaCss3 } from "react-icons/fa";

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li><FaReact /> ReactJS</li>
                    <li><FaJsSquare /> JavaScript</li>
                    <li><FaCss3 /> CSS</li>
                    {/* Add more skills later */}
                </ul>
            </div>
        </section>
    );
};

export default Skills;