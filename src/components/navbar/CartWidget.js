import { AiOutlineShoppingCart } from 'react-icons/ai';


const CartWidget = () => {
    return (
        <div className="cart-widget">
            <div className="cart-icon"><AiOutlineShoppingCart /></div>
            <span className="cart-num">4</span>
        </div>
    )
}

export default CartWidget;