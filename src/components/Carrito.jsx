

export default function Carrito({ carrito, vaciarCarrito }) {
  const total = carrito.reduce(
    (acumulado, item) => acumulado + item.precio * item.cantidad,
    0
  );

  return (
    <aside className="carrito">
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {carrito.map((item) => (
              <li key={item.id}>
                {item.nombre} - ${item.precio} x {item.cantidad} = $
                {item.precio * item.cantidad}
              </li>
            ))}
          </ul>
          <p className="total">Total de compra: ${total}</p>
          <button className="btn-vaciar" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
          <button className="btn-comprar" onClick={() => alert("Compra realizada por un total de: $" + total)}>Comprar</button>
        </>
      )}
    </aside>
  );
}
