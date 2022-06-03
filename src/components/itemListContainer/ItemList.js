import Item from "./Item";
import React from "react";
import './itemList.css';

const ItemList = ({ items }) => {
    return (
        <div className="item-list-container">
            {
                items.length > 0
                    ? items.map(item =>
                        <Item key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
                    )
                    : <p>Loading . . . </p>
            }
        </div>
    )
}

export default ItemList;