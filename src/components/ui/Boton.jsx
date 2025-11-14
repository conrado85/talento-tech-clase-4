import React, { useState } from 'react'

export default function Boton() {

   const [contador, setContador] = useState(0);

  return (
    <div>
        <p>Valor del contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Contador: {contador}
      </button>
    </div>
  )
}
