import Item from "./Item";
import React from "react";
import './itemList.css';

const ItemList = ({ items }) => {
    return (
        <div className="item-container">
            {
                items.length > 0
                    ? items.map(item =>
                        <Item key={item.id} name={item.name} stock={item.stock} price={item.price} description={item.description}
                            image={item.image} />
                    )
                    : <p>Loading . . . </p>
            }
        </div>
    )
}

export default ItemList;