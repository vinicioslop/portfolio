import React, { useState, useEffect } from 'react';

import servicesStyle from './styles.module.css';

import Title from '@/app/Components/DefaultComponents/Title/Title';
import ServiceCard from '@/app/Components/DefaultComponents/ServiceCard/ServiceCard';

export default function ServicesCover() {
    const titleData = {
        title: "Serviços",
        link: "/"
    }

    const serviceData = [
        {
            id: 1,
            name: "Manutenção de Computadores",
            description: "Realizo a análise e resolução de problemas técnicos em computadores de mesa e laptops.",
            imageUrl: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            imageAlt: "Foto de <a href='https://unsplash.com/@jeshoots?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>JESHOOTS.COM</a> na <a href='https://unsplash.com/pt-br/fotografias/sMKUYIasyDM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
        },
        {
            id: 2,
            name: "Orçamento para melhorias de sistemas",
            description: "Realizo a análise e orçamento de possíveis melhorias para sistemas, computador de mesa ou laptop, além de orçamento para montagem de computadores completos.",
            imageUrl: "https://images.unsplash.com/photo-1661347561635-58eff5e23f3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=862&q=80",
            imageAlt: "Foto de <a href='https://unsplash.com/@samsungmemory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Samsung Memory</a> na <a href='https://unsplash.com/pt-br/fotografias/gAQyWMntC5w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
        },
        {
            id: 3,
            name: "Desenvolvimento de Sites e Aplicativos",
            description: "Realizo o desenvolvimento de sites e aplicações para os mais diversos objetivos, como: pessoais, vitrine de empresas, blogs entre outros.",
            imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            imageAlt: "Foto de <a href='https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Fotis Fotopoulos</a> na <a href='https://unsplash.com/pt-br/fotografias/DuHKoV44prg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
        }
    ];

    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchServices() {
            try {
                // const response = await fetch(`${apiUrl}/services`, fetchOptions);
                // const data = await response.json();
                setServices(serviceData);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        }
        fetchServices();
    }, []);

    return (
        <div className={servicesStyle.services_container}>
            <Title titleData={titleData} more={false} />

            <div className={servicesStyle.services_group}>
                {services.map((service) => <ServiceCard key={service.id} serviceInformation={service} />)}
            </div>
        </div>
    )
}