import React, { useState, useEffect } from 'react';

import servicesStyle from './styles.module.css';

import Title from '../Title/Title';
import ServiceCard from '../ServiceCard/ServiceCard';

export default function Services() {
    const titleData = {
        title: "Serviços",
        link: "/"
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
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function fetchServices() {
            try {
                const response = await fetch(`${apiUrl}/services`, fetchOptions);
                const data = await response.json();
                setServices(data);
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
                {services.map((service) => <ServiceCard key={service._id} serviceInformation={service} />)}
            </div>
        </div>
    )
}