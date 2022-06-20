import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    //muestra el valor 1 como inicial que se pasa como parametro
    const [value, setValue] = useState(initial);

    //funcion que establece el estado con una unidad mas
    const increment = () => {
        if (value < stock) setValue(value + 1);
    }

    //funcion que establece el estado con una unidad menos
    const decrement = () => {
        if (value > initial) setValue(value - 1);
    }

    return (
        //estructura del contador
        <div className='item-count'>
            <div className="item-count-container">
                <button onClick={increment} className="increment-btn">+</button>
                <span className="item-count-span">{value}</span>
                <button onClick={decrement} className="decrement-btn">-</button>
            </div>
            <span onClick={() => onAdd(value)} className='add-on'>Agregar al carrito</span>
        </div>
    )
}

export default ItemCount;