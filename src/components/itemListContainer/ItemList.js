import Item from "./Item";
import './itemList.css';
import Loader from '../loader/Loader';

const ItemList = ({ items }) => {
    return (
        <div className="item-list-container">
            {
                //si el array que se pasa tiene un objeto minimo se muestra
                items.length > 0

                    //por cada objeto del array se muestran las propiedades en otro componente
                    ? items.map(item =>
                        <Item key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
                    )

                    //mientras carga el array se muestra un loader
                    : <Loader />
            }
        </div>
    )
}

export default ItemList;