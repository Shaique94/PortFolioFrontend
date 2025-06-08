import axios from 'axios'
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import React, { useState, useEffect } from 'react';

const Projects = () => {
const { isDarkMode } = useContext(ThemeContext);

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
            <section id="projects" className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} min-h-screen flex items-center justify-center px-4 pt-24`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}py-20`}>Projects</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map(project => (
                            <div key={project.id} className="bg-white p-6 rounded shadow">
                                <h3 className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}py-20`}>{project.title}</h3>
                                <p className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}py-20`}>{project.description}</p>
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