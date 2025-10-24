import React from "react";

const Projects = () => {
    const projects = [
        {
            title: 'AOI Project',
            description: 'Detects PCB defects using python opencv',
            link: 'https://github.com/coffee-kernel/AOI-Project.git',
            image: '/images/projects/1.jpg'
        },
        {
            title: 'Visual Inspection Project 1',
            description: 'Detects the Not Good components via comparison algorithm',
            link: 'https://github.com/coffee-kernel/Visual-Inspection-DRAFT-.git',
            image: '/images/projects/2.jpg'
        },
        {
            title: 'Visual Inspection Project 2',
            description: 'Detects the Not Good components via comparison algorithm',
            link: 'https://github.com/coffee-kernel/Per_Location_AOI.git',
            image: '/images/projects/3.jpg'
        },
        {
            title: 'ChatBot (TALKS)',
            description: 'Created a simple chatbot using Meta Llama',
            link: 'https://github.com/coffee-kernel/Chatbot_Using_Llama.git',
            image: '/images/projects/4.jpg'
        },
        {
            title: 'Login and Sign Up Page',
            description: 'Created basic login and sign up page using ReactJS',
            link: 'https://github.com/coffee-kernel/basic-login-app.git',
            image: '/images/projects/5.jpg'
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <div className="card-content">
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <a href={project.link}>View on GitHub</a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;