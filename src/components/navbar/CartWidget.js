import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    return (
        <div className="cart-widget">
            <div className='cart-container'>
                <Link to='/cart'><AiOutlineShoppingCart className='cart-icon' /></Link>
                <span className="cart-num">4</span>
            </div>
        </div>
    )
}

export default CartWidget;