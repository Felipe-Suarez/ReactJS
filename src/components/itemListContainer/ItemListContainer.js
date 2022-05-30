import React from "react";

import ItemList from "./ItemList";

import { useEffect, useState } from "react";
import promiseFunction from "../../utils/promiseFunction";
import { products } from '../../utils/products';
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {

    const [productsList, setProductsList] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId) {
            promiseFunction(2000, products)
                .then(result => setProductsList(result))
                .catch(err => console.log(err))
        } else {
            promiseFunction(2000, products)
                .then(result => setProductsList(result.filter(item => item.category === parseInt(categoryId))))
                .catch(err => console.log(err))
        }
    }, [categoryId])

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList items={productsList} />
        </>
    )
}

export default ItemListContainer;