import { useContext } from "react";
import { CartContext } from "../CartContext";
import './cart.css';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <>
            <h2>Carrito</h2>
            {
                test.cartList.length === 0 ? <h3>Tu carrito se encuentra vacio</h3>
                    : test.cartList.map(item =>
                        <div key={item.id} className='cart-item'>
                            <img className='cart-item-img' src={item.image} alt={item.name} />
                            <span>{item.name}</span>
                            <span>Cantidad: {item.quantity}</span>
                            <span>${item.price}</span>
                            <button onClick={() => { test.removeItem(item.id) }}>Eliminar</button>
                        </div>
                    )
            }
            <button onClick={test.clear}>Vaciar carrito</button>
        </>
    )
}

export default Cart;