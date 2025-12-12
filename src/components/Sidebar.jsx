
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Asumo que esta ruta es correcta
import { FiHome, FiPackage, FiLogOut, FiPlusSquare, FiEdit2 } from 'react-icons/fi';
import { useCartContext } from '../context/CartContext';
const Sidebar = () => {
  const { usuario, cerrarSesion } = useAuthContext();
  const { vaciarCarrito, carrito } = useCartContext();
  const totalItemsCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);


  const navItems = [
    { name: 'Inicio', icon: FiHome, link: '/dashboard', action: null },
    { name: 'Añadir Producto', icon: FiPlusSquare, link: '/dashboard/formulario-producto', action: null },
    { name: 'Gestionar Productos', icon: FiEdit2, link: '/dashboard/productos', action: null },
    { name: 'Gestionar compra', icon: FiPackage, link: '/dashboard/pagar', action: null },
  ];

  return (
    <nav className="sidebar-nav">
      <div className="sidebar-header">
        <span className="nav-text">TechFix</span>
      </div>
      
      {/* ITEMS DE NAVEGACIÓN */}
      {navItems.map((item) => (
        <Link key={item.name} to={item.link} className="nav-item">
          <item.icon className="nav-icon" />
          <span className="nav-text">{item.name}</span>
          {item.name === 'Gestionar compra' && (
            <span className="cart-badge">{totalItemsCarrito}</span>
          )}
        </Link>
      ))}

      {/* BOTÓN CERRAR SESIÓN (Adaptado para móvil/PC) */}
      <button 
        onClick={cerrarSesion} 
        className="nav-item logout-button"
      >
        <FiLogOut className="nav-icon" />
        <span className="nav-text">Cerrar Sesión</span>
      </button>

      {/* Info de usuario (Solo PC) */}
      <div className="user-info-pc">
        <p>Sesión: **{usuario?.nombre || 'Admin'}**</p>
      </div>
    </nav>
  );
};

export default Sidebar;