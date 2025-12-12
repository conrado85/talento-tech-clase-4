
import { useAuthContext } from '../context/AuthContext';
// Importamos el nuevo Layout
import DashboardLayout from '../layout/DashboardLayout'; 
// Ya no necesitamos Link, useNavigate ni cerrarSesion aquí, se movieron a Sidebar.jsx

export default function Dashboard() {
  const { usuario } = useAuthContext();
  // Se movieron: cerrarSesion y navigate a Sidebar.jsx

  // Obtener el token actual
  const tokenActual = localStorage.getItem('authToken');

  return (
    // Reemplazamos el div con estilos inline por el Layout
    <DashboardLayout> 
      <div className="dashboard-page-content"> 
        <h1>Dashboard Administrativo</h1>
        
        <div className="dashboard-summary-card">
          <p>
            <strong>Bienvenido/a: </strong> {usuario?.nombre || 'Cargando...'}
          </p>
          
          {/* TOKEN */}
          <div className="token-display-box">
            <strong>Token de autenticación:</strong>
            <br />
            {/* OJO: No se recomienda mostrar tokens en el dashboard, pero lo mantenemos por tu ejemplo */}
            <code className="token-code">{tokenActual}</code>
          </div>

          {/* SECCIÓN DE ACCIONES ADMIN */}
          <div className="admin-actions-section">
            <h3>Acciones Rápidas:</h3>
            <div className="admin-actions-links">
              {/* Las acciones principales se movieron al Sidebar, pero puedes dejar un acceso aquí */}
              <button 
                className="action-button-primary"
                onClick={() => console.log('Acción rápida ejecutada')}
              >
                Ver Métricas
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}