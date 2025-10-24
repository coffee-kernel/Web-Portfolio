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
            <p>With a keen eye for user-centric design, I thrive on turning complex ideas into seamless, intuitive experiences that delight users and drive results. 
                Outside of coding, I'm always exploring emerging tech trends and collaborating on open-source projects to push the boundaries of what's possible. 
                Let's connect and create something impactful together!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;