import { useState } from 'react'
import Nosotros from './Nosotros'
import './app.css'

function App() {
  const [nombre, setNombre] = useState("Donatto")

  // Las páginas o componentes, solo deben devolver un solo hijo
  return (
    // Fragmento. Solo sirve para envolver, cuando se va al 
    // navegador deja de existir
    <>
      {/* Para colocar clases se usa className en vez de class */}
      <h1 className='ejemplo'>Soy el mejor de todos</h1>
      <h2>Hola {nombre}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, at.</p>
      <Nosotros />
    </>
  )
}

export default App
