import type { Guitar } from '../types'


type GuitarProps = {
    guitar : Guitar, 
    addToCart : (item: Guitar) => void
}

export default function Featured({    guitar, addToCart} : GuitarProps) {

    const { name, imagen, description, price } = guitar

    return (
        <div className="col-md-12 col-lg-12 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${imagen}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}
