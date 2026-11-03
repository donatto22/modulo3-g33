import { useState } from 'react'
import Fruta from './Fruta'

const Lista = () => {
    const [lista, setLista] = useState(["Manzana", "Pera", "Sandía"])

    return (
        <>
            <h1>Hola</h1>

            {
                lista.map(fruta => <Fruta title={fruta} />)
            }
        </>
    )
}

export default Lista