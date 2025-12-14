// src/components/PhoneCarousel.jsx
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/PhoneCarousel.css';

// Datos de ejemplo para el carrusel
const slides = [
    {
        id: 1,
        src: "data:image/webp;base64,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", // Asegúrate de reemplazar estas URLs
        alt: "iPhone 15 Pro Max - Ultra Power",
        caption: "iPhone 15 Pro: Potencia y diseño inigualable"
    },
    {
        id: 2,
        src: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbc0dh4qmCWzT5jzLuFdRM2aUnasd2rwH8rHCJrInU7wRseFM_Tl9m9gugSbuRi0rIa0ygIig6mKL-41HXRPHMQaPJJSt84T7AcW6skEXKkra-if00KMS28qpXMgrm0QfGDtSw0rg&usqp=CAc",
        alt: "Samsung Galaxy S24 Ultra - IA Integrada",
        caption: "Galaxy S24 Ultra: La IA redefine la fotografía"
    },
    {
        id: 3,
        src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS37ynicuGsgVdV3F0jHZy09ZDhHrUjtrK0DZ8-ZxP0PMsBThoHhRY-ORDDdRlCyEtOe2PI5Xm2nJEFxZ4OudTOSJEdKs6HsjekrZgzzudN7--zuRFAEpRgysFYCdM1oAt6vLKe7A&usqp=CAc",
        alt: "Xiaomi 14 Pro - Carga Rápida",
        caption: "Xiaomi 14: Velocidad extrema en carga y rendimiento"
    },
];

const PhoneCarousel = ({ autoPlay = true, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex === 0 ? slides.length - 1 : prevIndex - 1)
        );
    };

    // Efecto para el auto-play
    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            goToNext();
        }, interval);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(timer);
    }, [interval, autoPlay]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                
                {slides.map((slide) => (
                    <div key={slide.id} className="carousel-slide">
                        <img src={slide.src} alt={slide.alt} className="slide-image"  />
                        <div className="slide-caption">
                            {slide.caption}
                        </div>
                    </div>
                ))}
            </div>

            {/* Controles de navegación */}
            <button className="carousel-control prev" onClick={goToPrevious} aria-label="Anterior">
                <FaChevronLeft />
            </button>
            <button className="carousel-control next" onClick={goToNext} aria-label="Siguiente">
                <FaChevronRight />
            </button>

            {/* Indicadores de diapositiva */}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ir a la diapositiva ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhoneCarousel;