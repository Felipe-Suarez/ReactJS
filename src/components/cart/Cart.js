import { async } from "@firebase/util";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import db from "../../utils/firebaseConfig";
import { CartContext } from "../CartContext";
import './cart.css';

const Cart = () => {
    const useCartcontext = useContext(CartContext);

    const createOrder = () => {
        const newOrder = useCartcontext.cartList.map(item => ({
            id: item.id,
            price: item.price,
            title: item.name,
            qty: item.quantity
        }))

        let dataOrder = {
            buyer: {
                name: 'Felipe',
                email: 'felipeS@gmail.com',
                phone: '12345667'
            },
            date: serverTimestamp(),
            total: useCartcontext.totalPrice(),
            items: newOrder
        }

        const pushOrder = async () => {
            const collectionOrder = doc(collection(db, 'orders'));
            await setDoc(collectionOrder, dataOrder);
            return collectionOrder
        }

        pushOrder()
            .then(result => alert(`Tu orden se realizo con exito! ID: ${result.id}`))
            .catch(err => console.log(err))

        useCartcontext.cartList.forEach(async element => {
            const findItem = doc(db, 'products', element.id)
            await updateDoc(findItem, {
                stock: increment(-element.quantity)
            })
        });

        useCartcontext.clear();
    }

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
                                <span className="order-info">Cantidad de productos: {useCartcontext.cartQty()}</span>
                                <span className="order-info">SubTotal: $ {useCartcontext.subTotal()}</span>
                                <span className="order-info">IVA 21%: $ {useCartcontext.IVA()}</span>
                                <span className="order-info">Total: $ {useCartcontext.totalPrice()}</span>
                                <span onClick={createOrder} className="order-buy-btn">Finalizar Compra!</span>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Cart;