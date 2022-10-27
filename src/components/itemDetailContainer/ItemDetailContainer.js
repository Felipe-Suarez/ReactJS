import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from '../../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';

//Funcion que pide documento a firebase

const firebaseFetchItem = async (idItem) => {

    //pide documento de la coleccion productos con el id de parametro
    const docRef = doc(db, "products", idItem);

    //trae documento 
    const docSnap = await getDoc(docRef);

    //si el documento existe lo retorna en un objeto
    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    }
}

//componente
const ItemDetailContainer = () => {

    //estado del producto
    const [productsDetail, setProductsDetail] = useState([]);

    //id de la ruta
    const { id } = useParams();

    //se ejecuta el fetch cada vez que se cambia el id de la ruta
    useEffect(() => {

        //pide el producto con el id
        firebaseFetchItem(id)

            //si encuentra el producto lo muestra sino vuelve al inicio y muestra una alerta
            .then(result => {
                if (result) {
                    setProductsDetail(result)
                } else {
                    alertify.alert('Oop! No hemos podido encontrar tu producto')
                        .set('movable', false);
                }
            })

            //si no se cumple, muestra el error
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            <ItemDetail items={productsDetail} />
        </>
    )
}

export default ItemDetailContainer;