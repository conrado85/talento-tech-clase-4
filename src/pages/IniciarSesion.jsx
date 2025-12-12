// src/pages/IniciarSesion.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import '../styles/IniciarSesion.css'; // <--- Importamos el nuevo CSS

export default function IniciarSesion() {
  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();
  const ubicacion = useLocation();

  const [formulario, setFormulario] = useState({ nombre: "", email: "" });

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    // ... (Tu lógica de autenticación se mantiene sin cambios)
    if (formulario.nombre === "admin" && formulario.email === "1234@admin") {
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion("admin", formulario.email);
      navigate("/dashboard");
    }
    else if (
      formulario.nombre &&
      formulario.email &&
      formulario.nombre !== "admin"
    ) {
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion(formulario.nombre, formulario.email);

      if (ubicacion.state?.carrito) {
        navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate("/productos");
      }
    } else {
      alert(
        "Credenciales de administrador incorrectas. Usa: admin / 1234@admin"
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Inicia Sesión</h1>
        <p className="login-subtitle">Continúa para acceder a tu cuenta.</p>
        
        <form onSubmit={manejarEnvio} className="login-form">
          <input
            className="form-input"
            type="text"
            placeholder="Nombre completo"
            value={formulario.nombre}
            onChange={(e) =>
              setFormulario({ ...formulario, nombre: e.target.value })
            }
            required
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={formulario.email}
            onChange={(e) =>
              setFormulario({ ...formulario, email: e.target.value })
            }
            required
          />
          
          <div className="button-group">
            <button type="submit" className="btn btn-primary-login">
              Iniciar Sesión
            </button>
            <button 
              type="button" 
              onClick={() => navigate("/productos")} 
              className="btn btn-cancel-login"
            >
              Cancelar
            </button>
          </div>
        </form>
        
        <div className="test-credentials-box">
          <strong>Credenciales de prueba para Administrador:</strong>
          <p>Nombre: <code>admin</code></p>
          <p>Email: <code>1234@admin</code></p>
        </div>
      </div>
    </div>
  );
}