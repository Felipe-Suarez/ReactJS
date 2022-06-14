import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const ItemListContainer = ({ greeting }) => {

    const [productsList, setProductsList] = useState([]);

    const { categoryId } = useParams();

    const firebaseFetch = async (categoryId) => {
        let q;
        if (categoryId) {
            q = query(collection(db, 'products'), where('category', '==', parseInt(categoryId)));
        } else {
            q = query(collection(db, 'products'));
        }
        const querySnapshot = await getDocs(q);
        const dataFirebase = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return dataFirebase
    }

    useEffect(() => {
        firebaseFetch(categoryId)
            .then(result => setProductsList(result))
            .catch(err => console.log(err))
    }, [categoryId])

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList items={productsList} />
        </>
    )
}

export default ItemListContainer;