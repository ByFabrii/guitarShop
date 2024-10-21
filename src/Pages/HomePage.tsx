import { useEffect } from "react"
import Header from "../components/Header"
import { useCart } from '../hooks/useCart'
import { useProductStore } from "../stores/useProductStore"
import Featured from "../components/FeaturedProducts"
import { About } from "../components/About"
import { Testimonials } from "../components/Testimonials"
import { Footer } from "../components/Footer"

export default function HomePage() {

    const { products, setProducts } = useProductStore()

    const { cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart()


    const getProducts = async () => {
        const baseURL = 'https://product-api-liart.vercel.app/';
        const res = await fetch(`${baseURL}product`);
        const data = await res.json();
        console.log(data);

        setProducts(data)
    };

    useEffect(() => {
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

            <main className="container-xl mt-5 container-main">
                <About/>

                {/* Sección "Productos Destacados" */}
                <div className="container-xl mt-5">
                    <h3 className="text-center text-secondary">Productos Destacados</h3>
                    <div className="row">
                        {products.length > 0 ? (
                            products.slice(0, 4).map(product => (
                                <div key={product.id} className="col-md-3">
                                    <Featured
                                        key={product.id}
                                        guitar={product}
                                        addToCart={addToCart}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No hay productos disponibles en este momento.</p>
                        )}
                    </div>
                </div>

                <hr className="my-5" />

                <Testimonials/>
            </main>

            <Footer />
        </>
    )
}
