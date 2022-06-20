import { useContext, useState } from 'react';
import ItemCount from "./itemCount/ItemCount";
import './itemDetail.css';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { CartContext } from '../CartContext';
import Loader from '../loader/Loader';

const ItemDetail = (props) => {

    //destructuracion
    const { name, stock, price, description, image } = props.items;

    //contexto
    const useCartcontext = useContext(CartContext);

    //funcion para agregar un producto
    const onAdd = (qty) => { //Item Count
        //mensaje de cantidad de productos
        alert(`Se agregaron ${qty} productos`);
        //pasa al estado la cantidad
        setCartState(qty);
        //pasa producto seleccionado y cantidad
        useCartcontext.addItem(props.items, qty);
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
                        <span className='item-stock'>Stock disponible: {stock}</span>
                        {cartState === 0 ?
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} className='itemcount' />
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