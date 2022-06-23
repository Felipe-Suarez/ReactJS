import { Link } from 'react-router-dom';

const Item = (props) => {
    //destructuracion
    const { id, name, price, image } = props;
    return (
        //estructuracion del producto
        <div style={{ position: 'relative' }}>
            <div className='item'>
                <span>{name}</span>
                <div>
                    <span className='price-icon'>$ </span>{price}
                </div>
                <img className='item-list-img' src={image} alt={name} />
            </div>
            <Link to={`/item/${id}`}><button className='item-list-detail'>Detalle</button></Link>
        </div>
    )
}

export default Item;