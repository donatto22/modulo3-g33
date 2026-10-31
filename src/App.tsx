import { useState } from 'react'
import Nosotros from './Nosotros'
import './app.css'

function App() {
  // nombre - es la variable que useState nos crea
  // setNombre - es la acción que permitirá cambiar la variable
  // puedes colocar un valor dentro de los paréntesis que será el valor inicial
  // de la variable
  // Por estandar, la acción toma el nombre de [set + nombre de la variable]

  // opcional: typescript
  // podemos "tipar" el useState, para declarar que solo vamos
  // a recibir y trabajar con cierto tipo de dato
  // <string>
  const [numero, setNumero] = useState<number>(0)
  const [numero2, setNumero2] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  // Las páginas o componentes, solo deben devolver un solo hijo
  return (
    // Fragmento. Solo sirve para envolver, cuando se va al 
    // navegador deja de existir
    <>
      {/* Para colocar clases se usa className en vez de class */}
      <h1 className='ejemplo'>Soy el mejor de todos</h1>
      <h2>Primer Número: {numero}</h2>
      <button onClick={() => { setNumero(prev => prev + 1) }}>Sumar 1</button>
      <button onClick={() => { setNumero(prev => prev - 1) }}>Restar 1</button>
      <button onClick={() => { setNumero(prev => prev ** 2) }}>Al Cuadrado</button>
      <button onClick={() => { setNumero(prev => prev ** 0.5) }}>Raiz Cuadrada</button>
      <button onClick={() => { setNumero(0) }}>AC</button>

      <hr />
      <h2>Segundo Número: {numero2}</h2>
      <button onClick={() => { setNumero2(prev => prev + 1) }}>Sumar 1</button>
      <button onClick={() => { setNumero2(prev => prev - 1) }}>Restar 1</button>
      <button onClick={() => { setNumero2(prev => prev ** 2) }}>Al Cuadrado</button>
      <button onClick={() => { setNumero2(prev => prev ** 0.5) }}>Raiz Cuadrada</button>
      <button onClick={() => { setNumero2(0) }}>AC</button>

      <hr />
      <h2>Total: {total}</h2>
      <button onClick={() => { setTotal(numero + numero2) }}>Suma</button>
      {/* <Nosotros /> */}
    </>
  )
}

export default App
