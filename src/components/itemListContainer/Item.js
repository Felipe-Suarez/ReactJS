import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { id, name, price, image } = props;
    return (
        <div className='item'>
            <span>{name}: ${price}</span>
            <img className='item-img' src={image} alt={name} />
            <Link to={`/item/${id}`}><button>Detalle</button></Link>
        </div>
    )
}

export default Item;