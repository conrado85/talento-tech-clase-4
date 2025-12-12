import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'; // Necesario para rutas anidadas

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content-public">
        {/* Aquí se renderizará el contenido de la ruta pública */}
        <Outlet /> 
      </div>
      <Footer />
    </>
  );
};

export default PublicLayout;