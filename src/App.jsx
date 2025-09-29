import { useState } from "react";
import Layout from "./components/Layout";
import ListaProductos from "./components/ListaProductos";
import Carrito from "./components/Carrito";

import "./App.css";


function App() {
  
  const [carrito, setCarrito] = useState([]);
  const vaciarCarrito = () => {
  setCarrito([]);
};

  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Auriculares", precio: 150 },
    { id: 3, nombre: "Mouse Gamer", precio: 80 },
  ];



  const agregarAlCarrito = (producto) => {
    // Verificar si ya existe en el carrito
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      // Incrementar cantidad
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Agregar nuevo con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  return (
    <Layout>
      <ListaProductos productos={productos} agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />
    </Layout>

  );
}

export default App;
