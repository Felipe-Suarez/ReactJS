import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../utils/firebaseConfig';
import './mediaQuerys.css';

//fetch que pide a firestore los productos
const firebaseFetch = async (categoryId) => {
    let q;
    if (categoryId) {

        //productos filtrados
        q = query(collection(db, 'products'), where('category', '==', parseInt(categoryId)));
    } else {

        //todos los productos
        q = query(collection(db, 'products'));
    }

    //trae los documentos de la coleccion
    const querySnapshot = await getDocs(q);
    //por cada documento creo un objeto y lo retorno

    const dataFirebase = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return dataFirebase
}

//componente
const ItemListContainer = ({ greeting }) => {

    //estado de la lista de productos
    const [productsList, setProductsList] = useState([]);

    //ruta de categoria
    const { categoryId } = useParams();

    //el codigo se ejecuta cada vez que se actualiza categoryId
    useEffect(() => {

        //pide productos
        firebaseFetch(categoryId)

            //si se cumple los establece al estado
            .then(result => setProductsList(result))

            //si no se cumple muestra el error
            .catch(err => console.log(err))

    }, [categoryId])

    //variable para mostrar la categoria en el DOM
    let categoryName = categoryId;

    //si no hay categoria se borra el undefined
    if (!categoryName) {
        categoryName = '';
    }

    return (
        <>
            <h1>{greeting + ' ' + categoryName}</h1>
            <ItemList items={productsList} />
        </>
    )
}

export default ItemListContainer;