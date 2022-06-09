import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import './cart.css';

const Cart = () => {
    const useCartcontext = useContext(CartContext);

    return (
        <div className="cart-container">
            <div className="cart-title-container">
                <h2 className="cart-title">Carrito</h2>
                {
                    useCartcontext.cartList.length !== 0 &&
                    <button className="reset-btn" onClick={useCartcontext.clear}>Vaciar carrito</button>
                }
            </div>
            {
                useCartcontext.cartList.length === 0 ?
                    <div className="cart-title-container">
                        <h3 className="cart-msg">Tu carrito se encuentra vacio</h3>
                        <Link className="cart-back-btn" to={'/'}><button>Ver productos</button></Link>
                    </div>
                    : <>
                        <div className="items-container">{
                            useCartcontext.cartList.map(item =>
                                <div key={item.id} className='cart-item'>
                                    <img className='cart-item-img' src={item.image} alt={item.name} />
                                    <span>{item.name}</span>
                                    <span>Cantidad: {item.quantity}</span>
                                    <span>${item.price}</span>
                                    <button onClick={() => { useCartcontext.removeItem(item.id) }}>Eliminar</button>
                                </div>
                            )}
                        </div>
                        <div className="order-container">
                            <div className="order">
                                <h4>Resumen del pedido</h4>
                                <span className="order-info">Total de items: {useCartcontext.cartQty()}</span>
                                <span className="order-info">SubTotal: {useCartcontext.subTotal()}</span>
                                <span className="order-info">IVA: {useCartcontext.IVA()}</span>
                                <span className="order-info">Total: {useCartcontext.totalPrice()}</span>
                                <span className="order-buy-btn">Finalizar Compra!</span>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Cart;