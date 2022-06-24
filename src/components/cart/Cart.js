import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import db from "../../utils/firebaseConfig";
import { CartContext } from "../CartContext";
import './cart.css';
import { MdDelete } from 'react-icons/md';
import { BsFillCartXFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';
import './mediaQuerys.css';

const Cart = () => {

    //contexto
    const useCartcontext = useContext(CartContext);

    //guarda orden en firebase
    const createOrder = () => {

        //guarda en un objeto los productos en el carrito al momento de ejecutarse en nuevos objetos
        const newOrder = useCartcontext.cartList.map(item => ({
            id: item.id,
            price: item.price,
            title: item.name,
            qty: item.quantity

        }))

        //estructura del objeto que se va a enviar
        let dataOrder = {

            //informacion del comprador de prueba
            buyer: {
                name: 'Felipe',
                email: 'felipeS@gmail.com',
                phone: '12345667'
            },

            //fecha con funcion de firebase
            date: serverTimestamp(),

            //establece el precio total del carrito y el array recien creado
            total: useCartcontext.totalPrice(),
            items: newOrder
        }

        //envia el objeto de orden
        const pushOrder = async () => {

            //busca la coleccion con nombre orders, si no esta la crea
            const collectionOrder = doc(collection(db, 'orders'));

            //envia el documento
            await setDoc(collectionOrder, dataOrder);

            //retorna la orden para el alert
            return collectionOrder
        }

        //se ejecuta la funcion
        pushOrder()

            //si se cumple muestra el id del documento en la coleccion 
            .then(result => alertify.alert(`Tu orden se realizo con exito! ID: ${result.id}`)
                .set('movable', false))

            //si no se cumple muestra el error
            .catch(err => console.log(err))

        //actualiza el stock
        useCartcontext.cartList.forEach(async element => {

            //busca en la coleccion los productos que tengan el id de cada producto del carrito
            const findItem = doc(db, 'products', element.id)

            //resta la cantidad de productos pedidos del stock
            await updateDoc(findItem, {
                stock: increment(-element.quantity)
            })
        });

        //luego de pedir la orden se borra el carrito
        useCartcontext.clear();
    }

    return (

        //estructura del carrito
        <div className="cart-container">
            <h1 className="cart-title">Carrito</h1>

            {   //si el carrito esta vacio muestra un mensaje y boton para volver a comprar
                useCartcontext.cartList.length === 0 ?
                    <>
                        <h2 className="cart-msg">Tu carrito se encuentra vacio</h2>
                        <Link to={'/'}><button className="cart-back-btn"><BsFillArrowLeftCircleFill className="cart-back-icon" /> Ver productos</button></Link>
                    </>

                    : <> {/*si el carrito no esta vacio*/}

                        {/*boton para vaciar carrito*/}
                        <button className="cart-delete" onClick={useCartcontext.clear}>
                            <BsFillCartXFill className="cart-delete-icon" />
                            <span className="cart-delete-text">Vaciar carrito</span>
                        </button>

                        {/*productos*/}
                        <div className="items-container">{
                            useCartcontext.cartList.map(item =>
                                <div key={item.id} className='cart-item'>
                                    <img className='cart-item-img' src={item.image} alt={item.name} />
                                    <span className="cart-item-info">{item.name}</span>
                                    <span className="cart-item-info">Cantidad: {item.quantity}</span>
                                    <span className="cart-item-info">${item.price}</span>
                                    <button className="remove-btn" onClick={() => { useCartcontext.removeItem(item.id) }}><MdDelete /></button>
                                </div>
                            )}
                        </div>

                        {/*informacion de la orden*/}
                        <div className="order-container">
                            <div className="order">
                                <h3>Resumen del pedido</h3>
                                <span className="order-info">Cantidad de productos: {useCartcontext.cartQty()}</span>
                                <span className="order-info">SubTotal: $ {useCartcontext.subTotal()}</span>
                                <span className="order-info">IVA 21%: $ {useCartcontext.IVA()}</span>
                                <span className="order-info">Total: $ {useCartcontext.totalPrice()}</span>
                                <div className="order-buy-bg">
                                    <span onClick={createOrder} className="order-buy-btn">Finalizar Compra!</span>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div >
    )
}

export default Cart;