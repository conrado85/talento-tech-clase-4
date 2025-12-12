
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; // Asumo que esta ruta es correcta
import { FiHome, FiPackage, FiLogOut, FiPlusSquare, FiEdit2 } from 'react-icons/fi';

const Sidebar = () => {
  const { usuario, cerrarSesion } = useAuthContext();

  const navItems = [
    { name: 'Inicio', icon: FiHome, link: '/', action: null },
    { name: 'Añadir Producto', icon: FiPlusSquare, link: '/formulario-producto', action: null },
    { name: 'Gestionar Productos', icon: FiEdit2, link: '/productos', action: null },
    // El botón de cerrar sesión se manejará aparte para la lógica de la función
  ];

  return (
    <nav className="sidebar-nav">
      <div className="sidebar-header">
        {/* Solo se muestra en PC */}
        <span className="nav-text">Admin Panel</span>
      </div>
      
      {/* ITEMS DE NAVEGACIÓN */}
      {navItems.map((item) => (
        <Link key={item.name} to={item.link} className="nav-item">
          <item.icon className="nav-icon" />
          <span className="nav-text">{item.name}</span>
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