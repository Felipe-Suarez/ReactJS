import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { id, name, stock, price, description, image } = props;
    return (
        <div className='item'>
            <span>{name}: ${price}</span>
            <img className='item-img' src={image} alt={name} />
            <span>Stock disponible: {stock}</span>
            <p>{description}</p>
            <Link to={`/item/${id}`}><button>Detalle</button></Link>
        </div>
    )
}

export default Item;