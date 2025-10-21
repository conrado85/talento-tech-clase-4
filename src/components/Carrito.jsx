import "../estilo/carrito.css";
export default function Carrito({
  carrito = [],
  vaciarCarrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
}) {
  const total = carrito.reduce(
    (acumulado, item) => acumulado + item.price * item.cantidad,
    0
  );

  return (
    <aside className="carrito">
      <h2>🛒 Carrito de compras</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <table className="tabla-carrito">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td className="col-producto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="imagen-tabla"
                    />
                    {/* <span>{item.title}</span> */}
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="controles-cantidad">
                      <button onClick={() => disminuirCantidad(item.id)}>-</button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => aumentarCantidad(item.id)}>+</button>
                    </div>
                  </td>
                  <td>${(item.price * item.cantidad).toFixed(2)}</td>
                  <td>
                    <button
                      
                      onClick={() => eliminarProducto(item.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total-carrito">
            <p>Total general: <strong>${total.toFixed(2)}</strong></p>
            <button className="btn-vaciar" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
