import { FaLaptopCode, FaWrench, FaShieldAlt, FaRocket } from 'react-icons/fa';
import '../styles/LandingPage.css'; // Importamos los estilos
import PhoneCarousel from '../components/PhoneCarousel';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            
            { /* HERO  */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>TechFix: Soluciones Tecnológicas Rápidas y Confiables</h1>
                    <p className="hero-tagline">
                        Reparación de equipos, mantenimiento preventivo y venta de productos de alta tecnología. 
                        Tu socio digital, siempre cerca.
                    </p>
                    <a href="#contacto" className="btn btn-primary-cta">
                        ¡Contáctanos Ahora!
                    </a>
                </div>
            </section>
            
            {/* SECCIÓN DE SERVICIOS / CARACTERÍSTICAS */}
            <section className="features-section">
                <h2 className="section-heading">Nuestra Promesa Tecnológica</h2>
                <div className="features-grid">
                    <FeatureCard 
                        icon={FaWrench}
                        title="Reparación Exprés"
                        description="Diagnóstico y reparación de hardware y software en tiempo récord. Devolvemos la vida a tus dispositivos."
                    />
                    <FeatureCard 
                        icon={FaLaptopCode}
                        title="Mantenimiento Preventivo"
                        description="Optimización de sistemas, limpieza de virus y actualización de componentes para un rendimiento máximo."
                    />
                    <FeatureCard 
                        icon={FaShieldAlt}
                        title="Garantía Extendida"
                        description="Ofrecemos garantía real en todos nuestros servicios y productos. Tu tranquilidad es nuestra prioridad."
                    />
                    <FeatureCard 
                        icon={FaRocket}
                        title="Tecnología de Vanguardia"
                        description="Accede a los últimos productos del mercado y componentes de alto rendimiento para gaming y profesional."
                    />
                </div>
            </section>

            <section className="phone-carousel-section">
                <PhoneCarousel
                    autoPlay={true}
                    interval={4000}
                />

            </section>   

            {/* SECCIÓN TESTIMONIOS */}
            <section className="testimonials-section">
                <h2 className="section-heading">Lo que Dicen Nuestros Clientes</h2>
                <div className="testimonials-grid">
                    <TestimonialCard 
                        quote="Mi laptop revivió. El servicio fue rápido y el técnico súper profesional. ¡Muy recomendados!"
                        author="— Ana M., Diseñadora"
                    />
                    <TestimonialCard 
                        quote="Compré un nuevo disco duro y la instalación fue perfecta. La mejor tienda de tecnología en la zona."
                        author="— Carlos R., Estudiante"
                    />
                </div>
            </section>

            {/*  SECCIÓN CTA FINAL */}
            <section id="contacto" className="cta-section">
                <h2 className="cta-heading">¿Listo para Arreglar o Actualizar tu Equipo?</h2>
                <p className="cta-text">
                    Haz clic aquí para obtener una cotización gratuita y sin compromiso.
                </p>
                <a href="mailto:contacto@techfix.com" className="btn btn-secondary-cta">
                    Solicitar Cotización Gratis
                </a>
            </section>

        </div>
    );
}

// Componentes Reutilizables para limpiar el código
const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="feature-card">
        <Icon className="feature-icon" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const TestimonialCard = ({ quote, author }) => (
    <div className="testimonial-card">
        <p className="quote">"{quote}"</p>
        <p className="author">{author}</p>
    </div>
);

export default LandingPage;