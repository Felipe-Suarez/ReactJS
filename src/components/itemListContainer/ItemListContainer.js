import React from "react";

import ItemList from "./ItemList";
import ItemCount from "../itemCount/ItemCount";

import { useEffect, useState } from "react";
import promiseFunction from "../../utils/promiseFunction";
import { products } from '../../utils/products';

const ItemListContainer = ({ greeting }) => {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        promiseFunction(2000, products)
            .then(result => setProductsList(result))
            .catch(err => console.log(err))
    }, [])

    const onAdd = () => { //Item Count
        alert('Compra realizada');
    }

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList items={productsList} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;