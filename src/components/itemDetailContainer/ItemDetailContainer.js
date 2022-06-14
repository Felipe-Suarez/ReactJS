import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from '../../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [productsDetail, setProductsDetail] = useState([]);

    const { id } = useParams();

    const firebaseFetch = async (idItem) => {
        const docRef = doc(db, "products", idItem);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: idItem,
                ...docSnap.data()
            }
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
        firebaseFetch(id)
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