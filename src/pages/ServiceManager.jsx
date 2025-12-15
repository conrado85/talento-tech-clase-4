// src/pages/ServiceManager.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaWrench,FaTools, FaClock, FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

// --- ESTILOS ---

const ManagerContainer = styled.div`
    padding: 30px;
    background-color: #f4f7f9;
    min-height: 100vh;
`;

const Header = styled.h2`
    color: #2c3e50;
    margin-bottom: 25px;
    border-bottom: 2px solid #e0e6ed;
    padding-bottom: 10px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const TableHead = styled.thead`
    background-color: #3498db;
    color: white;
    & th {
        padding: 15px;
        text-align: left;
        font-weight: 600;
    }
`;

const TableRow = styled.tr`
    border-bottom: 1px solid #ecf0f1;
    transition: background-color 0.2s;
    &:nth-child(even) {
        background-color: #fcfcfc;
    }
    &:hover {
        background-color: #f9f9f9;
    }
`;

const TableCell = styled.td`
    padding: 15px;
    color: #34495e;
    vertical-align: middle;
`;

const StatusPill = styled.span`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 700;
    background-color: ${(props) => {
        switch (props.status) {
            case 'Completado': return '#28a745'; // Verde
            case 'En Proceso': return '#ffc107'; // Amarillo
            default: return '#dc3545'; // Rojo (Pendiente)
        }
    }};
    color: white;
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    color: #007bff;
    font-size: 1.1em;
    transition: color 0.2s;
    
    &:hover {
        color: #0056b3;
    }
`;

const SelectStatus = styled.select`
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
`;

// --- DATOS MOCK DE EJEMPLO ---
const mockServices = [
    {
        id: 'S001',
        cliente: 'Juan Pérez',
        dispositivo: 'iPhone 11',
        problema: 'Pantalla rota y batería agotada',
        fechaSolicitud: '2025-12-10',
        estado: 'Pendiente',
    },
    {
        id: 'S002',
        cliente: 'María López',
        dispositivo: 'Samsung S21',
        problema: 'Error de software, no enciende',
        fechaSolicitud: '2025-12-11',
        estado: 'En Proceso',
    },
    {
        id: 'S003',
        cliente: 'Carlos Ruiz',
        dispositivo: 'Xiaomi Redmi Note 9',
        problema: 'Reemplazo de cámara trasera',
        fechaSolicitud: '2025-12-05',
        estado: 'Completado',
    },
];

// --- COMPONENTE PRINCIPAL ---

export default function ServiceManager() {
    const [services, setServices] = useState(mockServices);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // En una aplicación real, aquí harías tu useEffect para fetch de mockapi
    /*
    useEffect(() => {
        // Lógica de fetch de servicios
    }, []);
    */

    const updateServiceStatus = (id, newStatus) => {
        const updatedServices = services.map(service => 
            service.id === id ? { ...service, estado: newStatus } : service
        );
        setServices(updatedServices);
        toast.success(`Servicio ${id} actualizado a: ${newStatus}`);
    };

    const handleDelete = (id) => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar el servicio ${id}?`)) {
            const filteredServices = services.filter(service => service.id !== id);
            setServices(filteredServices);
            toast.info(`Servicio ${id} eliminado.`);
        }
    };

    const renderStatusIcon = (status) => {
        switch (status) {
            case 'Completado': return <FaCheckCircle color="#28a745" />;
            case 'En Proceso': return <FaWrench color="#ffc107" />;
            default: return <FaClock color="#dc3545" />;
        }
    };

    if (loading) return <ManagerContainer>Cargando servicios...</ManagerContainer>;
    if (error) return <ManagerContainer>Error al cargar: {error}</ManagerContainer>;

    return (
        <ManagerContainer>
            <Header>
                <FaTools style={{ marginRight: '10px' }} />
                Gestión de Servicios Técnicos
            </Header>
            
            <Table>
                <TableHead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Dispositivo</th>
                        <th>Problema Reportado</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </TableHead>
                <tbody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell>{service.id}</TableCell>
                            <TableCell>{service.cliente}</TableCell>
                            <TableCell>{service.dispositivo}</TableCell>
                            <TableCell>{service.problema}</TableCell>
                            <TableCell>{service.fechaSolicitud}</TableCell>
                            <TableCell>
                                <StatusPill status={service.estado}>
                                    {renderStatusIcon(service.estado)} {service.estado}
                                </StatusPill>
                            </TableCell>
                            <TableCell>
                                <SelectStatus 
                                    value={service.estado}
                                    onChange={(e) => updateServiceStatus(service.id, e.target.value)}
                                >
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="En Proceso">En Proceso</option>
                                    <option value="Completado">Completado</option>
                                </SelectStatus>
                                <ActionButton 
                                    onClick={() => handleDelete(service.id)} 
                                    title="Eliminar Servicio"
                                >
                                    <FaTrashAlt color="#dc3545" />
                                </ActionButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            {services.length === 0 && (
                <p style={{ textAlign: 'center', marginTop: '30px', color: '#6c757d' }}>
                    No hay solicitudes de servicio pendientes.
                </p>
            )}
        </ManagerContainer>
    );
}