import "../estilo/listaProducto.css";

export default function ListaProductos({ productos, agregarAlCarrito }) {
  return (
    <section className="lista-productos">
      <h2>Productos disponibles</h2>
      <ul>
        {productos.map((p) => (
          <li key={p.id} className="tarjeta-producto">
            <img src={p.image} alt={p.title} className="imagen-producto" />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <button onClick={() => agregarAlCarrito(p)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
