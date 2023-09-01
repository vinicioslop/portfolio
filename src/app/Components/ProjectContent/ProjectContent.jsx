import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';

import ProjectCard from '@/app/Components/ProjectCard/ProjectCard';

export default function ProjectsContent() {
    const apiUrl = process.env.API_URL ?? "http://localhost:3000/api";
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

    const completeProjects = projects.filter(project => project.projectType == "complete-project");
    const smallProjects = projects.filter(project => project.projectType == "small-project");

    return (
        <div className={styles.container}>
            <div className={styles.title_desc}>
                <h2 className={styles.title}>Projetos</h2>
                <p className={styles.description}>
                    Lista dos meus projetos
                </p>
            </div>
            <div className={styles.project_section}>
                <h3>Projetos completos</h3>
                <div className={styles.project_group}>
                    {completeProjects.map((project) => <ProjectCard data={project} key={project._id} />)}
                </div>
            </div>
            <div className={styles.project_section}>
                <h3>Pequenos projetos</h3>
                <div className={styles.project_group}>
                    {smallProjects.map((project) => <ProjectCard data={project} key={project._id} />)}
                </div>
            </div>
        </div>
    )
}