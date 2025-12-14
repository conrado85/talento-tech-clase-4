// src/components/ProductCardStyles.js
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa'; // Icono para el botón de compra
import { Link } from 'react-router-dom';

// Colores de la marca TechFix
const COLORS = {
    primary: '#007bff',
    secondary: '#2f376bff', // El color que usaste para el carrito
    textDark: '#333333',
    textMuted: '#6c757d',
    backgroundLight: '#f8f9fa',
    white: '#ffffff',
};





// 1. Contenedor de la Tarjeta
export const CardContainer = styled.div`
    background: ${COLORS.white};
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    height: 100%;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    }
`;

// 2. Imagen del Producto
export const CardImage = styled.img`
    width: 100%;
    height: 200px; /* Un poco más de altura para impacto visual */
    object-fit: cover;
    border-bottom: 1px solid ${COLORS.backgroundLight};
`;

// 3. Cuerpo de la Tarjeta
export const CardBody = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

// 4. Título
export const CardTitle = styled.h5`
    font-size: 1.4em;
    font-weight: 700;
    color: ${COLORS.textDark};
    margin-bottom: 8px;
`;

// 5. Descripción
export const CardText = styled.p`
    font-size: 0.95em;
    color: ${COLORS.textMuted};
    margin-bottom: 15px;
    flex-grow: 1; /* Ocupa el espacio restante para unificiar la altura de las tarjetas */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limita a 3 líneas */
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

// 6. Precio
export const CardPrice = styled.p`
    font-size: 1.6em;
    font-weight: 900;
    color: ${COLORS.primary};
    margin-bottom: 15px;
    text-align: right;
    width: 100%;
    padding-top: 10px;
    border-top: 1px dashed ${COLORS.backgroundLight};
`;

// 7. Botones de Acción (General)
export const ActionButton = styled.button`
    padding: 10px 15px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s, border 0.2s;
    border: 1px solid transparent;
    width: 100%;
`;

// 8. Botón Primario (Agregar al Carrito)
export const AddToCartButton = styled(ActionButton)`
    background-color: ${COLORS.secondary};
    color: ${COLORS.white};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
        background-color: #1e244b; /* Tono más oscuro */
    }
`;

// 9. Botón Secundario (Ver Detalles)
export const DetailLink = styled(Link)`
    ${ActionButton};
    background-color: ${COLORS.white};
    color: ${COLORS.primary};
    border-color: ${COLORS.primary};
    padding: 10px 15px;
    border-radius: 20px;
    text-decoration: none;
    text-align: center;
    
    &:hover {
        background-color: ${COLORS.primary};
        color: ${COLORS.white};
    }
`;

// 10. Contenedor de Botones de Admin
export const AdminActionsContainer = styled.div`
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid ${COLORS.backgroundLight};
    display: flex;
    gap: 10px;
`;

// 11. Botón de Admin
export const AdminButton = styled(ActionButton)`
    background-color: ${COLORS.backgroundLight};
    color: ${COLORS.textDark};
    padding: 8px 10px;
    font-size: 0.9em;
    flex: 1;
    
    &:hover {
        background-color: #e9ecef;
        color: ${COLORS.primary};
    }
`;

// 12. Icono de Carrito para el botón
export const CartIcon = styled(FaShoppingCart)`
    font-size: 1em;
`;