import { useContext, useState } from 'react';
import ItemCount from "./itemCount/ItemCount";
import './itemDetail.css';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { CartContext } from '../CartContext';
import Loader from '../loader/Loader';
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';

const ItemDetail = (props) => {

    //destructuracion
    const { name, stock, price, description, image } = props.items;

    //contexto
    const useCartcontext = useContext(CartContext);

    //funcion que evita agregar mas productos de los que hay
    const actualStock = () => {
        if (!useCartcontext.isInCart(props.items)) {
            return stock
        } else {
            return stock - useCartcontext.isInCart(props.items).quantity
        }
    }

    //funcion para agregar un producto

    const onAdd = (qty) => { //Item Count

        if (stock > 0 && qty > 0) {//si no hay sotck no se muestra la alarma

            //mensaje de cantidad de productos
            alertify.alert(`Se agregaron ${qty} productos`).set('movable', false)

            //pasa al estado la cantidad
            setCartState(qty);

            //pasa producto seleccionado y cantidad
            useCartcontext.addItem(props.items, qty);
        }
    }

    //estado de cantidad de producto
    const [cartState, setCartState] = useState(0);

    return (

        //estructuracion del detalle que se muestra si la imagen existe
        image ?
            <div className='item-detail-container'>
                <div className='item-detail-left' >
                    <img className='item-detail-img' src={image} alt={name} />
                    <p className='item-description'>Descripcion: <br /><br />{description}</p>
                </div>
                <div className='item-detail-right'>
                    <div>
                        <h1 className='item-name'>{name}</h1>
                        <span className='item-price'>${price}</span>
                    </div>
                    <div>
                        {stock === 0 ?
                            <span className='item-stock'>Stock no disponible</span>
                            : <span className='item-stock'>Stock disponible: {actualStock()}</span>}
                        {cartState === 0 ?
                            <ItemCount stock={actualStock()} initial={0} onAdd={onAdd} className='itemcount' />
                            : <Link to='/cart'><ItemCart /></Link>
                        }
                    </div>
                </div>
            </div>

            //si no carga se muestra un loader
            : <Loader />

    )
}

export default ItemDetail;