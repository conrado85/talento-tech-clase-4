# 📱 TechFix: Soluciones y Venta de Tecnología

**TechFix** es una plataforma web completa de **e-commerce y servicios técnicos** especializada en la venta de celulares, accesorios y la gestión de reparaciones. El proyecto fue desarrollado como parte del desafío del curso **Talento Tech**, demostrando habilidades en desarrollo front-end moderno, manejo de estado global y consumo de APIs simuladas.

## 🚀 Características Principales del Proyecto

* **Doble Enfoque:** Combina la venta de productos (E-commerce de celulares) con la oferta de servicios técnicos (Reparación).
* **Carrito de Compras Completo:** Permite a los usuarios añadir, gestionar y ver el resumen total de los productos antes de realizar la compra.
* **Sistema de Autenticación y Administración:** Diferencia entre usuarios normales y administradores, protegiendo rutas sensibles.
* **Dashboard Administrativo 🛡️:** Interfaz dedicada para que el administrador pueda gestionar productos (Agregar, Ver, Editar, Eliminar) de forma centralizada.
* **Diseño Modular y Reutilizable:** Implementación de componentes de React para facilitar la escalabilidad y el mantenimiento.

## 🛠️ Tecnologías y Dependencias

Este proyecto fue construido utilizando un *stack* de tecnologías modernas de front-end:

| Categoría | Tecnología | Uso Principal |
| :--- | :--- | :--- |
| **Framework/Builder** | **React** (con **Vite**) | Construcción de la interfaz de usuario de alto rendimiento. |
| **Estilo y Diseño** | **CSS3** (Puro) y **Styled-Components** | Aplicación de estilos modulares, *responsive* y manejo de *media queries*. |
| **Navegación** | **React Router DOM** | Gestión de rutas dinámicas y navegación entre páginas (`/productos`, `/dashboard`, etc.). |
| **Gestión de Estado** | **Context API** (React Context) | Manejo centralizado del estado del usuario (`AuthContext`), carrito de compras (`CartContext`) y productos (`ProductsContext`). |
| **Almacenamiento de Datos** | **MockAPI** | Simulación de una base de datos back-end para el CRUD de productos y la simulación de *login*. |
| **Utilidades** | **React Toastify** | Muestra notificaciones y alertas atractivas al usuario (ej: Producto añadido, Sesión iniciada). |
| **Estilos Adicionales** | **Bootstrap** | Uso puntual para elementos de *layout* o clases predefinidas. |

## 🌟 Estructura y Estilo (¡Con Mucha Onda!)

Se prestó especial atención al diseño y la experiencia de usuario (*UX*):

* **Diseño Responsive:** La aplicación es totalmente adaptable, optimizada para vistas de PC y móvil.
    * **Desktop:** Se implementó un `DashboardLayout` con un **menú lateral (`Sidebar`)** para la navegación administrativa.
    * **Móvil:** El menú administrativo se transforma en una **barra de navegación inferior** con solo iconos, maximizando el espacio de contenido.
* **Componentes Modulares:** Estructuras como el `Navbar`, `Footer`, `Sidebar` y los `Layouts` fueron diseñados para ser reutilizables y consistentes en toda la aplicación.
* **Landing Page de Alto Impacto:** Creación de una página de inicio (`LandingPage.jsx`) con secciones dedicadas a *Hero*, *Servicios*, y *Contacto*, utilizando los estilos de marca de TechFix.

## ⚙️ Guía de Instalación y Uso

Sigue estos pasos para levantar el proyecto en tu máquina local:

### 1. Requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/en/) y [npm] (o yarn/pnpm).

### 2. Clonar el Repositorio

```bash
git clone https://github.com/conrado85/talento-tech-clase-4.git
cd talento-tech-clase-4


Rol,Nombre de Usuario,Email/Contraseña,Ruta
Administrador,admin,1234@admin,/dashboard
Usuario Estándar,Cualquier otro nombre,Cualquier email,/productos o /pagar