// src/components/ContactSection.jsx
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/ContactSection.css'; // Importamos los estilos

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // NOTA: Aquí iría la lógica real para enviar el formulario (ej: a una API o a un servicio de correo)
        console.log('Datos del formulario enviados:', formData);
        alert(`Mensaje enviado por ${formData.name}. Nos pondremos en contacto pronto.`);
        // Resetear formulario
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contacto" className="contact-section-container">
            <h2 className="contact-heading">¿Tienes Preguntas? Contáctanos</h2>
            <p className="contact-subheading">
                Estamos listos para ayudarte con tus problemas tecnológicos.
            </p>

            <div className="contact-content-grid">
                
                {/* Bloque 1: Formulario de Contacto */}
                <div className="contact-form-wrapper">
                    <h3>Envíanos un Mensaje Rápido</h3>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu Nombre Completo"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu Email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Describe tu solicitud o problema..."
                            className="form-textarea"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="btn btn-submit-contact">
                            Enviar Consulta
                        </button>
                    </form>
                </div>

                {/* Bloque 2: Información de Contacto */}
                <div className="contact-info-wrapper">
                    <h3>Nuestra Información</h3>
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon location-icon" />
                        <p>
                            **TechFix Central** <br />
                            Av. Principal 123, Ciudad Tecnológica, País
                        </p>
                    </div>
                    <div className="info-item">
                        <FaPhone className="info-icon" />
                        <p>
                            **Teléfono:** <a href="tel:+1234567890">+1 (234) 567-890</a> <br />
                            Lunes a Viernes, 9:00 AM - 6:00 PM
                        </p>
                    </div>
                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <p>
                            **Email:** <a href="mailto:soporte@techfix.com">soporte@techfix.com</a>
                        </p>
                    </div>
                    
                    {/* Placeholder para mapa */}
                    <div className="map-placeholder">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}