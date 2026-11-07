import './fruta.css'

const Fruta = ({ title }) => {
    return (
        <div>
            <h3 className='fruta'>{title}</h3>
            <p>Esta fruta es muy saludable</p>
            <button>Ver fruta</button>
        </div>
    )
}

export default Fruta