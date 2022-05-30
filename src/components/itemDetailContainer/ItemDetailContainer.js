import React from "react";

import ItemDetail from "./ItemDetail";

import { useEffect, useState } from "react";
import promiseFunction from "../../utils/promiseFunction";
import { products } from '../../utils/products';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [productsDetail, setProductsDetail] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        promiseFunction(2000, products.find(item => item.id === parseInt(id)))
            .then(result => setProductsDetail(result))
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            <ItemDetail items={productsDetail} />
        </>
    )
}

export default ItemDetailContainer;