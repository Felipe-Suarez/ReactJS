import React from "react";

import ItemDetail from "./ItemDetail";

import { useEffect, useState } from "react";
import promiseFunction from "../../utils/promiseFunction";
import { products } from '../../utils/products';

const ItemDetailContainer = () => {

    const [productsDetail, setProductsDetail] = useState([]);

    useEffect(() => {
        promiseFunction(2000, products[5])
            .then(result => setProductsDetail(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ItemDetail items={productsDetail} />
        </>
    )
}

export default ItemDetailContainer;