import { useState } from 'react'
import Fruta from './components/fruta/Fruta'

const Lista = () => {
    const [lista, setLista] = useState(["Manzana", "Pera", "Sandía"])

    return (
        <>
            <h1>Hola</h1>
            <h3>titulo independiente</h3>
            {
                lista.map(fruta => <Fruta title={fruta} />)
            }
        </>
    )
}

export default Lista