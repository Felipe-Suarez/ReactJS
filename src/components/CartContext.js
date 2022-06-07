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
                    return element.quantity = qty + element.quantity
                }
            });
        }

        if (found) { findDuplicated(found, cartList) } else { setCartList([...cartList, item]) }
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

    return (
        <>
            <CartContext.Provider value={{ cartList, addItem, removeItem, clear, isInCart }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;