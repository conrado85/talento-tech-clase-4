// src/pages/Pagar.jsx
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import '../styles/Pagar.css'; 

export default function Pagar() {
  const { usuario, cerrarSesion } = useAuthContext();
  const { carrito, total, vaciarCarrito } = useCartContext();
  const navigate = useNavigate();

  const tokenActual = localStorage.getItem('authToken');

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); 
    navigate("/dashboard/productos"); // Mejor navegar a la lista de productos
  };

  return (
    <div className="payment-page-container">
      
      {/* 1. Información del Usuario y Sesión */}
      <section className="user-info-section">
        <h2 className="user-greeting">Hola, {usuario.nombre}</h2>
        <p className="user-email">Email: {usuario.email}</p>
        
        <div className="token-display-box">
          <strong>Token de sesión:</strong> 
          <code className="token-code">{tokenActual}</code>
        </div>
        
        <div className="session-actions">
          <button onClick={cerrarSesion} className="btn btn-secondary-outline">
            Cerrar sesión
          </button>
        </div>
      </section>

      {/* 2. Resumen del Carrito */}
      <section className="cart-summary-section">
        <h2 className="section-title">Resumen de tu compra:</h2>

        {carrito.length > 0 ? (
          <>
            <div className="cart-items-list">
              {carrito.map((producto) => {
                const cantidad = Number(producto.cantidad || 1);
                const precioUnitario = Number(producto.precio || 0);
                const subtotal = cantidad * precioUnitario;
                
                return (
                  <div key={producto.id} className="cart-item-card">
                    <img src={producto.avatar} alt={producto.nombre} className="item-image"/>
                    <div className="item-details">
                      <div className="item-name">{producto.nombre}</div>
                      <div className="item-price-unit">Precio unidad: ${Number(precioUnitario).toFixed(3)}</div>
                      <div className="item-quantity">Cantidad: {cantidad}</div>
                      <div className="item-subtotal"><strong>Subtotal: ${Number(subtotal).toFixed(3)}</strong></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 3. Total y Botones de Acción */}
            <div className="checkout-actions">
              <h3 className="total-amount">Total a pagar: <span>${Number(total).toFixed(3)}</span></h3>

              <div className="action-buttons-group">
                <button 
                  onClick={vaciarCarrito} 
                  className="btn btn-warning-outline"
                >
                  Vaciar Carrito
                </button>
                
                <button 
                  onClick={() => navigate("/dashboard/productos")} 
                  className="btn btn-secondary"
                >
                  {carrito.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
                </button>
                
                {carrito.length > 0 && (
                  <button onClick={comprar} className="btn btn-primary">
                    Confirmar y Pagar
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <p className="empty-cart-message">No hay productos en el carrito. ¡Agrega algo para continuar!</p>
        )}
      </section>
    </div>
  );
}