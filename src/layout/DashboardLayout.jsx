import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom'; // Agregamos Outlet para renderizar rutas anidadas
import '../styles/DashboardLayout.css'; 
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
  return (

    <div className="dashboard-container">
    
      <Sidebar />
      <main className="main-content">
        {/* Renderiza el componente de ruta anidada (Dashboard, FormularioProducto, etc.) */}
        <Outlet /> 
      </main>
    </div>
  );
};

export default DashboardLayout;