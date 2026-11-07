// SIEMPRE DEBEN DE DEVOLVER UN HTML

import type { FC } from 'react'

// un valor que tenga signo de interrogación "title?" implica que ese valor
// será opcional. El elemento papá no está obligado a pasar ese valor
interface NosotrosProps {
    title?: string
    text: string
    btnText: string
    negrita?: boolean
}

const Nosotros: FC<NosotrosProps> = ({ title = "Noticia", text, btnText, negrita = false }) => {
    return (
        <div>
            <h1>{title}</h1>
            {
                negrita == true ?
                    <p>
                        <b>{text}</b>
                    </p>
                    :
                    <p>{text}</p>
            }
            <hr />
            <button>{btnText}</button>
        </div>
    )
}

export default Nosotros