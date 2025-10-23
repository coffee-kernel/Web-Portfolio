import React from "react";

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Sample 1',
            link: '',
            image: ''
        },
        {
            title: 'Project 1',
            description: 'Sample 1',
            link: '',
            image: ''
        },
        {
            title: 'Project 1',
            description: 'Sample 1',
            link: '',
            image: ''
        },
        {
            title: 'Project 1',
            description: 'Sample 1',
            link: '',
            image: ''
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
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}>View on Github</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;