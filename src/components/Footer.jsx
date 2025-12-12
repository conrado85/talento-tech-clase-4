// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Importamos los estilos

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content-grid">
                
            
                <div className="footer-column brand-info">
                    <Link to="/" className="footer-logo">TechFix</Link>
                    <p className="footer-tagline">
                        Tu socio confiable en soluciones de reparación y tecnología de vanguardia.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
                    </div>
                </div>

               
                <div className="footer-column links-column">
                    <h4>Navegación</h4>
                    <ul>
                        <li><Link to="/" className="footer-link">Inicio</Link></li>
                        <li><Link to="/servicios" className="footer-link">Servicios</Link></li>
                        <li><Link to="/productos" className="footer-link">Productos</Link></li>
                        <li><Link to="/contacto" className="footer-link">Contacto</Link></li>
                        <li><Link to="/iniciar-sesion" className="footer-link">Iniciar Sesión</Link></li>
                    </ul>
                </div>

                
                <div className="footer-column contact-column">
                    <h4>Contacto</h4>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <p>Av. Principal 123, Ciudad Tecnológica</p>
                    </div>
                    <div className="contact-item">
                        <FaPhone className="contact-icon" />
                        <p><a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a></p>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <p><a href="mailto:info@techfix.com" className="footer-link">info@techfix.com</a></p>
                    </div>
                </div>

            </div>

           
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} TechFix. Todos los derechos reservados.</p>
                <p>Diseño por Conrado Gonzalez</p>
            </div>
        </footer>
    );
};

export default Footer;