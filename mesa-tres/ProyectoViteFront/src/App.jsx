import { useState } from 'react'
import matrimonio from "/matri.jpg";
import cambio from "/cambio.jpg";
import inicio from "/inicio.jpg";
import viajes from "/viajes.jpg";
import fondo from "/girasoles.jpeg";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App read-the-docs">
      <h1>Recorriendo nuestra historia</h1>

      <div className='container' > 
        <section>
          <h2>Nuestros Inicios </h2>
          <img src={inicio} className='card' />
        </section>
        <section>
          <h2>Nuestro Mejor día</h2>
          <img src={matrimonio} className='card' />
        </section>
        <section>
          <h2>Nuestros Viajes</h2>
          <img src={viajes} className='card' />
        </section>
        <section>
          <h2>Nuestro Cambio de vida</h2>
          <img src={cambio} className='card' />
        </section>
      </div>
    </div>
  )
}

export default App
