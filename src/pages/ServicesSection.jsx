// src/components/ServicesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptop, FaMobileAlt, FaTools, FaCloud, FaServer, FaShieldAlt } from 'react-icons/fa';
import '../styles/ServicesSection.css'; // Importamos los estilos

const servicesList = [
    {
        icon: FaLaptop,
        title: "Reparación de PC y Laptops",
        description: "Diagnóstico completo, reparación de hardware (pantallas, teclados, baterías) y solución de problemas de software."
    },
    {
        icon: FaMobileAlt,
        title: "Soporte para Dispositivos Móviles",
        description: "Reparación de pantallas, cambio de baterías, solución de fallas de carga y soporte técnico para smartphones y tablets."
    },
    {
        icon: FaTools,
        title: "Mantenimiento Preventivo",
        description: "Limpieza interna profunda, optimización del sistema operativo y desinstalación de software malicioso o innecesario."
    },
    {
        icon: FaServer,
        title: "Redes y Servidores",
        description: "Instalación, configuración y mantenimiento de redes (cableadas e inalámbricas) y soporte básico para servidores locales."
    },
    {
        icon: FaCloud,
        title: "Servicios en la Nube y Copias de Seguridad",
        description: "Configuración de soluciones de almacenamiento en la nube y creación de sistemas de respaldo (backup) automáticos."
    },
    {
        icon: FaShieldAlt,
        title: "Seguridad Digital y Antivirus",
        description: "Instalación y configuración de software antivirus/anti-malware y asesoría en protección de datos personales y empresariales."
    }
];

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="service-card">
        <div className="service-icon-wrapper">
            <Icon className="service-icon" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/contacto" className="service-link">
            Saber Más →
        </Link>
    </div>
);

export default function ServicesSection() {
    return (
        <section className="services-section-container">
            <h2 className="services-heading">Nuestros Servicios de Soporte Tecnológico</h2>
            <p className="services-subheading">
                Soluciones rápidas y efectivas para que nunca te detengas.
            </p>
            
            <div className="services-grid">
                {servicesList.map((service, index) => (
                    <ServiceCard 
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
            
            <div className="services-cta-bottom">
                <Link to="/contacto" className="btn-secondary-service-cta">
                    Solicita un Diagnóstico Gratuito
                </Link>
            </div>
        </section>
    );
}