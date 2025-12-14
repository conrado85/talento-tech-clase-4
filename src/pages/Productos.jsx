// src/pages/Productos.jsx
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";
import { useState } from "react";
// Importar los componentes estilizados
import {
  CardContainer, CardImage, CardBody, CardTitle, CardText, CardPrice,
  DetailLink, AddToCartButton, AdminActionsContainer, AdminButton, CartIcon
} from "../components/ProductCardStyles";


export default function Productos() {
  const { productos, cargando, error } = useProducts();
  const { agregarAlCarrito } = useCartContext();
  const { esAdmin } = useAuthContext();
  const navigate = useNavigate();

  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const productosPorPagina = 6;

  // ... (Toda la lógica de paginación y filtrado se mantiene igual)

  const manejarEliminar = (producto) => {
    navigate("/dashboard/eliminar-producto", { state: { producto } });
  };

  const manejarEditar = (producto) => {
    navigate("/dashboard/formulario-producto", { state: { producto } });
  };

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      (producto.categoria &&
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase()))
  );

  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosActuales = productosFiltrados.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );

  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
    setPaginaActual(1);
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="container mt-4">
        {/* Barra de búsqueda (se mantiene el estilo Bootstrap) */}
        <div className="row mb-4">
          <div className="col-12 col-md-6">
            <label className="form-label fw-bold">Buscar productos</label>
            <input
              type="text"
              placeholder="Buscar por nombre o categoría..."
              className="form-control"
              value={busqueda}
              onChange={manejarBusqueda}
            />
            {busqueda && (
              <small className="text-muted">
                Mostrando {productosFiltrados.length} de {productos.length}{" "}
                productos
              </small>
            )}
          </div>
        </div>

        {/* Grid de productos */}
        <div className="row">
          {productosActuales.map((producto) => (
            <div key={producto.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <CardContainer> {/* Componente estilizado */}
                <CardImage 
                  src={producto.avatar}
                  alt={producto.nombre}
                />

                <CardBody> {/* Componente estilizado */}
                  <CardTitle>{producto.nombre}</CardTitle>
                  <CardText>{producto.descripcion}</CardText>
                  
                  <CardPrice>
                    ${Number(producto.precio).toFixed(3)}
                  </CardPrice>

                  <div className="d-grid gap-2">
                    <DetailLink
                      to={
                        esAdmin
                          ? `/dashboard/productos/${producto.id}`
                          : `/productos/${producto.id}`
                        }
                        state={{ producto }}
                    >
                      Ver detalles
                    </DetailLink>
                    <AddToCartButton
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      <CartIcon /> Agregar al carrito
                    </AddToCartButton>
                  </div>

                  {/* Botones de admin */}
                  {esAdmin && (
                    <AdminActionsContainer> {/* Componente estilizado */}
                      <AdminButton
                        onClick={() => manejarEditar(producto)}
                      >
                        Editar
                      </AdminButton>
                      <AdminButton
                        onClick={() => manejarEliminar(producto)}
                      >
                        Eliminar
                      </AdminButton>
                    </AdminActionsContainer>
                  )}
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>

        {/* Paginador (se mantiene el estilo Bootstrap) */}
        {productosFiltrados.length > productosPorPagina && (
          <div className="d-flex justify-content-center my-4">
            {Array.from({ length: totalPaginas }, (_, index) => (
              <button
                key={index + 1}
                className={`btn mx-1 ${
                  paginaActual === index + 1
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => cambiarPagina(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        {/* Información de la página actual */}
        {productosFiltrados.length > 0 && (
          <div className="text-center text-muted mt-2">
            <small>
              Mostrando {productosActuales.length} productos (página{" "}
              {paginaActual} de {totalPaginas})
            </small>
          </div>
        )}
      </div>
    </>
  );
}