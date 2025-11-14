// App.jsx
import { useState, useEffect } from "react";
import ListaProductos from "../components/ListaProductos";
import Carrito from "../components/Carrito";
import "../App.css";


function HomePage() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch("https://fakestoreapi.com/products");
        const datos = await respuesta.json();
        setProductos(datos);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const aumentarCantidad = (idProducto) => {
    setCarrito(
      carrito.map((item) =>
        item.id === idProducto
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const disminuirCantidad = (idProducto) => {
    setCarrito(
      carrito
        .map((item) =>
          item.id === idProducto
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const eliminarProducto = (idProducto) => {
    setCarrito(carrito.filter((item) => item.id !== idProducto));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <ListaProductos
          productos={productos}
          agregarAlCarrito={agregarAlCarrito}
        />
      )}
      <Carrito
        carrito={carrito}
        vaciarCarrito={vaciarCarrito}
        aumentarCantidad={aumentarCantidad}
        disminuirCantidad={disminuirCantidad}
        eliminarProducto={eliminarProducto}
      />
    </>
  );
}

export default HomePage;
