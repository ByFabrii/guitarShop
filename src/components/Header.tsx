import { useState } from 'react';
import type { CartItem, Guitar } from "../types";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';

type HeaderProps = {
    cart: CartItem[];
    removeFromCart: (id: Guitar['id']) => void;
    decreaseQuantity: (id: Guitar['id']) => void;
    increaseQuantity: (id: Guitar['id']) => void;
    clearCart: () => void;
    isEmpty: boolean;
    cartTotal: number;
};

export default function Header({
        cart, 
        removeFromCart, 
        decreaseQuantity, 
        increaseQuantity, 
        clearCart,
        isEmpty, 
        cartTotal
    }: HeaderProps) {

    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false); // Estado para la alerta

    const handleWhatsAppOrder = () => {
        if (isEmpty) {
            // Mostrar alerta si el carrito está vacío
            setShowAlert(true);
            return; // No continuar con el proceso de compra
        }

        const phoneNumber = "+523171122571"; // Reemplaza con el número del propietario de la tienda
        const orderSummary = cart.map(item => `${item.quantity}x ${item.name}`).join(", ");
        const message = `Hola, quiero realizar un pedido: ${orderSummary}. Total: $${cartTotal}.`;
    
        // Abrir WhatsApp en una nueva pestaña
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    
        // Limpiar el carrito
        clearCart();
    
        // Redirigir a la página de confirmación
        navigate('/confirmation');
    };

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="/">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">

                        <nav className="navbar">
                            <div className="navbar-container">
                                <ul className="navbar-menu">
                                <li className="navbar-item">
                                    <Link to="/" className="navbar-link">Inicio</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/Store" className="navbar-link">Catálogo</Link>
                                </li>
                                
                                </ul>
                            </div>
                            <div className="carrito">
                                <div className="carritoIcono">
                                    <p className="puntito">{cart.length}</p>
                                    <img className="img-fluid carritoIcon" src="/img/carrito.png" alt="imagen carrito" />
                                </div>

                                <div id="carrito" className="bg-white p-3">
                                    {isEmpty ? (
                                        <p className="text-center text-black">El carrito esta vacio</p>
                                    ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(guitar => (
                                                    <tr key={guitar.id}>
                                                        <td>
                                                            <img 
                                                                className="img-fluid" 
                                                                src={`/img/${guitar.imagen}.jpg`}
                                                                alt="imagen guitarra" 
                                                            />
                                                        </td>
                                                        <td>{guitar.name}</td>
                                                        <td className="fw-bold">
                                                            ${guitar.price}
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => decreaseQuantity(guitar.id)}
                                                            >
                                                                -
                                                            </button>
                                                            {guitar.quantity}
                                                            <button
                                                                type="button"
                                                                className="btn btn-dark"
                                                                onClick={() => increaseQuantity(guitar.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={() => removeFromCart(guitar.id)}
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        <p className="text-end text-black">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                                    </>
                                    )}

                                    <button 
                                        className="btn btn-dark w-100 mt-3 p-2"
                                        onClick={handleWhatsAppOrder}
                                    >
                                        Finalizar Compra
                                    </button>

                                    <button 
                                        className="btn btn-success w-100 mt-3 p-2"
                                        onClick={clearCart}
                                    >
                                        Vaciar Carrito
                                    </button>

                                    {/* Mostrar la alerta si el carrito está vacío */}
                                    {showAlert && (
                                        <Stack sx={{ width: '100%' }} spacing={2} className="mt-3">
                                            <Alert severity="error" onClose={() => setShowAlert(false)}>El carrito está vacío. Por favor, añade productos antes de finalizar la compra.</Alert>
                                        </Stack>
                                    )}
                                </div>
                            </div>
                            
                        </nav>
                    </nav>
                    
                </div>
            </div>

            {/* <Navbar/> */}
        </header>
    );
    
}
