import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) => {
        const found = cartList.find(element => element.id === item.id)

        if (!item.quantity) {
            item.quantity = qty;
        }

        const findDuplicated = (found, cartList) => {
            cartList.forEach(element => {
                if (found.id === element.id) {
                    return element.quantity += qty;
                }
            });
        }

        if (found) { findDuplicated(found, cartList); setCartList([...cartList]) } else { setCartList([...cartList, item]) }
    }

    const removeItem = (id) => {
        const newCartList = cartList.filter(item => item.id !== id);
        setCartList(newCartList);
    }

    const clear = () => setCartList([]);

    const isInCart = (item) => {
        return (
            cartList.find(element => element.id === item.id)
        )
    }

    const cartQty = () => {
        let total = cartList.map(item => item.quantity);
        return total.reduce(((a, b) => a + b), 0);
    }

    const subTotal = () => {
        let total = cartList.map(item => item.price * item.quantity);
        return total.reduce(((a, b) => a + b), 0);

    }

    const IVA = () => {
        return subTotal() * 0.21
    }

    const totalPrice = () => {
        return subTotal() + IVA()
    }

    return (
        <>
            <CartContext.Provider value={{ cartList, addItem, removeItem, clear, isInCart, cartQty, subTotal, IVA, totalPrice }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;