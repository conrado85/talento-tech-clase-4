//pages
import Inicio from "./pages/Inicio";
import Servicios from "./pages/ServicesSection";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/DetalleProdutos";
import Pagar from "./pages/Pagar";
import LandingPage from "./pages/LandingPage";
import IniciarSesion from "./pages/IniciarSesion";
import ContactSection from "./pages/ContactSection";

//routes
import RutaProtegida from "./routes/RutaProtegida";

//context
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";

//components
import FormularioProducto from './components/FormularioProducto';
import EliminarProducto from './components/EliminarProducto';

//layouts
import PublicLayout from "./layout/PublicLayout";
import DashboardLayout from "./layout/DashboardLayout"; 

// Importar estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Importar React Toastify para notificaciones
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 



function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <ProductsProvider>
            <Routes>
              {/* RUTAS PÚBLICAS (Usando PublicLayout) */}
              {/* Estas rutas tendrán Navbar y Footer */}
              <Route element={<PublicLayout />}> 
                <Route path="/" element={<LandingPage />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/:id" element={<ProductoDetalle />} />
                <Route path="/productos/:categoria/:id" element={<ProductoDetalle />} />
                <Route path="/iniciar-sesion" element={<IniciarSesion />} />
                <Route path="/contacto" element={<ContactSection />} />
               
              </Route>
              {/* RUTAS DE ADMINISTRACIÓN (Usando DashboardLayout) */}
              {/* Estas rutas NO tendrán Navbar ni Footer, solo Sidebar */}
              <Route element={<RutaProtegida soloAdmin={true}><DashboardLayout /></RutaProtegida>}>
                {/* La ruta principal del dashboard */}
                <Route path="/dashboard" element={<DashboardLayout />} /> 
                <Route path="/dashboard/productos" element={<Productos />} />
                <Route path="/dashboard/productos/:id" element={<ProductoDetalle />} />
                <Route path="/dashboard/formulario-producto" element={<FormularioProducto />} />
                <Route path="/dashboard/eliminar-producto" element={<EliminarProducto />} />
                <Route path="/dashboard/pagar" element={<RutaProtegida><Pagar /></RutaProtegida>}/>
              </Route>
               {/* Redirección por defecto y manejo de 404 */}
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
