import axios from 'axios'
import React, { useState, useEffect } from 'react';

const Projects = () => {
const[projects , setProjects] = useState([]);
useEffect(() => {
    axios.get('http://localhost:8000/api/projects')
        .then(response => {
            setProjects(response.data);
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
        });
},[]);

    return (
        <>
            <section id="projects" className="py-20 bg-gray-100 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Projects</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map(project => (
                            <div key={project.id} className="bg-white p-6 rounded shadow">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 mt-2 inline-block">View Project</a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
};
export default Projects;