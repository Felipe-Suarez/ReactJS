import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { id, name, price, image } = props;
    return (
        <div style={{ position: 'relative' }}>
            <div className='item'>
                <span>{name}: ${price}</span>
                <img className='item-list-img' src={image} alt={name} />
            </div>
            <Link to={`/item/${id}`}><button className='item-list-detail'>Detalle</button></Link>
        </div>
    )
}

export default Item;