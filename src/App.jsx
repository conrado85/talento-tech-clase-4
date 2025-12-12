
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/DetalleProdutos";
import Pagar from "./pages/Pagar";
import RutaProtegida from "./routes/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import Dashboard from "./pages/Dashboard";
import FormularioProducto from './components/FormularioProducto';
import EliminarProducto from './components/EliminarProducto';
import PublicLayout from "./layout/PublicLayout"; // <--- IMPORTAR EL NUEVO LAYOUT
import DashboardLayout from "./layout/DashboardLayout"; // <--- ASEGÚRATE DE IMPORTARLO

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 



function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <Routes>
              {/* ---------------------------------------------------- */}
              {/* 1. RUTAS PÚBLICAS (Usando PublicLayout) */}
              {/* Estas rutas tendrán Navbar y Footer */}
              <Route element={<PublicLayout />}> 
                <Route path="/" element={<Inicio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/:id" element={<ProductoDetalle />} />
                <Route path="/productos/:categoria/:id" element={<ProductoDetalle />} />
                <Route path="/iniciar-sesion" element={<IniciarSesion />} />
                <Route path="/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>
              </Route>
              
              {/* ---------------------------------------------------- */}
              {/* 2. RUTAS DE ADMINISTRACIÓN (Usando DashboardLayout) */}
              {/* Estas rutas NO tendrán Navbar ni Footer, solo Sidebar */}
              <Route element={<RutaProtegida soloAdmin={true}><DashboardLayout /></RutaProtegida>}>
                {/* La ruta principal del dashboard */}
                <Route path="/dashboard" element={<Dashboard />} /> 
                
                {/* Rutas anidadas de administración */}
                <Route path="/formulario-producto" element={<FormularioProducto />} />
                <Route path="/eliminar-producto" element={<EliminarProducto />} />
              </Route>
              
              {/* ---------------------------------------------------- */}
              {/* 3. Redirección por defecto y manejo de 404 */}
              <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
            {/* El ToastContainer puede quedarse aquí, ya que es un portal global */}
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              closeOnClick
              draggable
              pauseOnHover
            />
          </ProductsProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
} export default App;
