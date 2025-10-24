import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content"> {/* New: Flex wrapper */}
          <img src="/images/aboutme/WIN_20250816_09_17_57_Pro.jpg" alt="Profile" className="profile-img" />
          <div className="about-text"> {/* New: Text wrapper */}
            <p>I'm a passionate developer with experience in React, JavaScript, and more. I love building interactive web apps that solve real problems.</p>
            {/* Add more paragraphs or bio here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;