import { AiOutlineShoppingCart } from 'react-icons/ai';


const CartWidget = () => {
    return (
        <div className="cart-widget">
            <div className='cart-container'>
                <AiOutlineShoppingCart className='cart-icon' />
                <span className="cart-num">4</span>
            </div>
        </div>
    )
}

export default CartWidget;