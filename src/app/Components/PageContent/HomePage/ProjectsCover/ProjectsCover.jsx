import React, { useState, useEffect } from 'react';

import projectsStyle from './styles.module.css';

import Title from '@/app/Components/DefaultComponents/Title/Title';
import ProjectCard from '@/app/Components/DefaultComponents/ProjectCard/ProjectCard';

export default function ProjectsCover() {
    const titleData = {
        title: "Projetos",
        link: "/projects"
    }

    const projectsData = [
        {
            id: 1,
            name: "Buyge Frontend",
            description: "Marketplace de venda de produtos do segmento Geek.",
            technologies: ["HTML", "CSS", "JavaScript"],
            imageUrl: "https://i.pinimg.com/564x/5e/a0/56/5ea056c9d765ef8ede2e8ef78ec94d7d.jpg",
            imageAlt: "Exemplo de tela inicial do projeto Buyge",
            githubUrl: "https://github.com/vinicioslop/buyge-frontend",
            liveUrl: "",
            projectType: "complete-project",
            working: false
        },
        {
            id: 2,
            name: "Portfólio",
            description: "Projeto de Portfolio para disponibilizar outros projetos desenvolvidos po mim.",
            technologies: ["Next.js", "React", "HTML", "CSS", "JavaScript"],
            imageUrl: "https://i.pinimg.com/564x/4e/24/e8/4e24e8534d875d5c92ca2fb589c23f44.jpg",
            imageAlt: "Exemplo de tela inicial do projeto Portfolio",
            githubUrl: "https://github.com/vinicioslop/portfolio",
            liveUrl: "https://portfolio.vinicioslop.com.br",
            projectType: "complete-project",
            working: true
        },
        {
            id: 3,
            name: "Social Tree",
            description: "Projeto inspitado no Linktree, aplicação onde é possível divulgar links de acesso a redes sociais e contato pessoal.",
            technologies: ["Next.js", "React", "HTML", "CSS", "JavaScript"],
            imageUrl: "https://i.pinimg.com/564x/9d/9d/68/9d9d680a1643224382fbf253a9f38e9b.jpg",
            imageAlt: "Exemplo de tela inicial do projeto Social Tree",
            githubUrl: "https://github.com/vinicioslop/social-tree",
            liveUrl: "https://social.vinicioslop.com.br",
            projectType: "small-project",
            working: false
        }
    ];

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                // const response = await fetch(`${apiUrl}/projects`, fetchOptions);
                // const data = await response.json();

                setProjects(projectsData);
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
                {projects.map((project) => <ProjectCard data={project} key={`${project.projectType}${project.id}`} />)}
            </div>
        </div>
    )
}