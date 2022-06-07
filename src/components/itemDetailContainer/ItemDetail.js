import { useContext, useState } from 'react';
import ItemCount from "./itemCount/ItemCount";
import './itemDetail.css';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { CartContext } from '../CartContext';

const ItemDetail = (props) => {
    const { name, stock, price, description, image } = props.items;
    const test = useContext(CartContext);

    const onAdd = (qty) => { //Item Count
        alert(`Se agregaron ${qty} productos`);
        setCartState(qty);
        test.addItem(props.items, qty);
    }

    const [cartState, setCartState] = useState(0);

    return (
        image ?
            <div className='item-detail-container'>
                <div className='item-detail-left' >
                    <img className='item-img' src={image} alt={name} />
                    <p className='item-description'>{description}</p>
                </div>
                <div className='item-detail-right'>
                    <div>
                        <h2 className='item-name'>{name}</h2>
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
            : <p>Loading . . . </p>
    )
}

export default ItemDetail;