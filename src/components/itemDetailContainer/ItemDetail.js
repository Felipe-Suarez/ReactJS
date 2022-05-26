import React from 'react';
import ItemCount from "../itemCount/ItemCount";
import './itemDetail.css';

const onAdd = () => { //Item Count
    alert('Compra realizada');
}

const ItemDetail = (props) => {
    const { key, name, stock, price, description, image } = props.items;
    return (
        image ? <div className='item' >
            <span>{key}</span>
            <span>{name}: ${price}</span>
            <img className='item-img' src={image} alt={name} />
            <span>Stock disponible: {stock}</span>
            <p>{description}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd} className='itemcount' />
        </div>
            : <p>Loading . . . </p>

    )
}

export default ItemDetail;