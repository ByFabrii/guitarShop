import { useEffect } from "react"
import Guitar from "../components/Guitar"
import Header from "../components/Header"
import { useCart } from '../hooks/useCart'
import { useProductStore } from "../stores/useProductStore" 
import { Footer } from "../components/Footer"

export default function Store() {

  const { products, setProducts } = useProductStore()

  const { cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart()


  const getProducts = async () => {
    const baseURL = 'http://localhost:3300/';
    const res = await fetch(`${baseURL}product`);
    const data = await res.json();
    console.log(data);
    
    setProducts(data)
  };

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
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
              {products.map((guitar) => (
                  <Guitar 
                    key={guitar.id}
                    guitar={guitar}
                    addToCart={addToCart}
                  />
              ))}
              
          </div>
      </main>


      <Footer />
    </>
  )
}
