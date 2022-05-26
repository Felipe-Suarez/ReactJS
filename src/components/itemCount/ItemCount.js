import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [value, setValue] = useState(initial);

    const increment = () => {
        if (value < stock) setValue(value + 1);
    }

    const decrement = () => {
        if (value > initial) setValue(value - 1);
    }

    return (
        <div className='item-count'>
            <div className="item-container">
                <button onClick={increment} className="increment-btn">+</button>
                <span className="item-count-span">{value}</span>
                <button onClick={decrement} className="decrement-btn">-</button>
            </div>
            <span onClick={onAdd} className='add-on'>Agregar al carrito</span>
        </div>
    )
}

export default ItemCount;