import React, { useState, useEffect } from 'react';

import projectsStyle from './styles.module.css';

import Title from '../Title/Title';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectsCover() {
    const titleData = {
        title: "Projetos",
        link: "/projects"
    }

    // const apiUrl = process.env.API_URL ?? "http://localhost:3000/api";
    const apiUrl = "https://portfolioapi.vinicioslop.com.br/api";
    const fetchOptions = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch(`${apiUrl}/projects`, fetchOptions);
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }
        fetchProjects();
    }, []);

    return (
        <div className={projectsStyle.projects_container}>
            <Title titleData={titleData} more={true} />

            <div className={projectsStyle.project_group}>
                {projects.map((project) => <ProjectCard data={project} key={project._id} />)}
            </div>
        </div>
    )
}