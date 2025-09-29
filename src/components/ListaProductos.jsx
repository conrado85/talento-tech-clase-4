// components/ListaProductos.jsx
export default function ListaProductos({ productos, agregarAlCarrito }) {
  return (
    <section className="lista-productos">
      <h2>Productos disponibles</h2>
      <ul>
        {productos.map((p) => (
          <li key={p.id} className="tarjeta-producto">
            <h3>{p.nombre}</h3>
            <p>Precio: ${p.precio}</p>
            <button onClick={() => agregarAlCarrito(p)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
