import { useEffect } from "react"
import Header from "../components/Header"
import { useCart } from '../hooks/useCart'
import { useProductStore } from "../stores/useProductStore"

export default function Confirmation() {

  const { setProducts } = useProductStore()

  const { cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart()


  const getProducts = async () => {
    const baseURL = 'http://localhost:3300/';
    const res = await fetch(`${baseURL}product`);
    const data = await res.json();
    console.log(data);
    
    setProducts(data)
  };
  console.log("Desde confirmación")

  useEffect(()=>{
    getProducts()
  }, [])

  return (
    <>
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

        <main className="container-xl mt-5">
            <h2 className="text-center">Gracias por tu compra!!</h2>

            <div className="alert alert-success mt-4" role="alert">
                ¡Compra finalizada! Por favor, continúa con los siguientes pasos:
                <ul>
                    <li>Abre WhatsApp y envía el mensaje de pedido al propietario.</li>
                    <li>Contacta al propietario para coordinar el pago y la entrega.</li>
                    <li>Gracias por comprar en GuitarLA.</li>
                </ul>
            </div>
        </main>
    </>
  )
}
