import React, { useState, useRef } from "react";
import "../styles/input.css";
function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [apellido, setApellido] = useState("");

  const formRef = useRef(null);

  function manejarEnvio(evento) {
    evento.preventDefault();
    alert(
      "Formulario enviado por " +
        nombre +
        " " +
        apellido +
        " con el email: " +
        email
    );
    setNombre("");
    setApellido("");
    setEmail("");
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <section id="formulario">
      <h2>Formulario de Talento Tech</h2>
      <form ref={formRef} onSubmit={manejarEnvio}>
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          required={true}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Apellido:</label>
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          required={true}
          onChange={(e) => setApellido(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Formulario;
