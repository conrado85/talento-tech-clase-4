// src/pages/DashboardHome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaPlus, FaCheckCircle, FaUsers, FaTools } from 'react-icons/fa';
import { useAuthContext } from '../context/AuthContext';
import styled from 'styled-components';

// --- STYLED COMPONENTS para Dashboard Home ---

const HomeContainer = styled.div`
    padding: 30px;
    background-color: #f4f7f9;
    min-height: 100vh;
`;

const WelcomeHeader = styled.div`
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    margin-bottom: 30px;
    border-left: 5px solid #007bff;
`;

const Title = styled.h2`
    color: #2c3e50;
    font-size: 2em;
    margin-bottom: 10px;
`;

const Subtitle = styled.p`
    color: #6c757d;
    font-size: 1.1em;
    line-height: 1.6;
`;

const CardGrid = styled.div`
    display: grid;
    gap: 30px;
    /* Ajuste responsivo: 3 columnas en desktop, 2 en tablet, 1 en móvil */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
`;

const ActionCard = styled.div`
    background-color: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    border-top: 5px solid ${(props) => props.color || '#007bff'};
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    }
`;

const CardIcon = styled.div`
    font-size: 2.5em;
    color: ${(props) => props.color || '#007bff'};
    margin-bottom: 15px;
`;

const CardTitle = styled.h4`
    color: #34495e;
    font-size: 1.3em;
    margin-bottom: 5px;
`;

const CardDescription = styled.p`
    color: #95a5a6;
    font-size: 0.9em;
`;


export default function DashboardHome() {
    const navigate = useNavigate();
    const { authUser } = useAuthContext(); // Asumo que authUser contiene la información del usuario logueado

    const userName = authUser?.nombre || 'Administrador';

    // Definición de las tarjetas de acción
    const actionCards = [
        {
            title: "Añadir Producto",
            description: "Registra un nuevo celular o accesorio al catálogo de TechFix.",
            icon: FaPlus,
            color: "#28a745", // Verde
            path: "/dashboard/formulario-producto"
        },
        {
            title: "Gestionar Stock",
            description: "Edita, elimina o actualiza la información de los productos existentes.",
            icon: FaEdit,
            color: "#007bff", // Azul
            path: "/dashboard/productos" // Redirige a la vista principal de productos para editar
        },
        {
            title: "Confirmar Compra",
            description: "Revisa y gestiona las órdenes de compra pendientes de los clientes.",
            icon: FaCheckCircle,
            color: "#ffc107", // Amarillo
            path: "/dashboard/pagar"
        },
        {
            title: "Revisar Servicios",
            description: "Visualiza y asigna solicitudes de reparación pendientes.",
            icon: FaTools,
            color: "#dc3545", // Rojo
            path: "/dashboard/servicios-tecnicos"
        }
    ];

    return (
        <HomeContainer>
            <WelcomeHeader>
                <Title>👋 Bienvenido, {userName}!</Title>
                <Subtitle>
                    Tu centro de control para **TechFix**. Desde aquí gestionas el catálogo de celulares, controlas el stock y monitoreas las ventas. Nuestra misión es mantener a nuestros clientes conectados y sus dispositivos operativos.
                </Subtitle>
            </WelcomeHeader>

            <h3>Tareas de Acceso Rápido</h3>
            <CardGrid>
                {actionCards.map((card, index) => (
                    <ActionCard 
                        key={index} 
                        color={card.color} 
                        onClick={() => navigate(card.path)}
                    >
                        <CardIcon color={card.color}>
                            <card.icon />
                        </CardIcon>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                    </ActionCard>
                ))}
            </CardGrid>

        </HomeContainer>
    );
}