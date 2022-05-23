import React from 'react';

const Item = (props) => {
    const { key, name, stock, price, description, image } = props;
    return (
        <div className='item'>
            <span>{key}</span>
            <span>{name}: ${price}</span>
            <img className='item-img' src={image} alt={name} />
            <span>Stock disponible: {stock}</span>
            <p>{description}</p>
        </div>
    )
}

export default Item;