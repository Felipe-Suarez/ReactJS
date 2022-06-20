import { createContext, useState } from "react";

//crea el contexto
export const CartContext = createContext();

//componente del contexto con el provider
const CartContextProvider = ({ children }) => {

    //estado de los productos que se van a agregar al carrito
    const [cartList, setCartList] = useState([]);

    //funciones en el contexto
    //agregar producto
    const addItem = (item, qty) => {
        //busca por id en el estado si ya esta el producto que se esta agregando
        const found = cartList.find(element => element.id === item.id)

        //si la cantidad no existe la crea
        if (!item.quantity) {
            item.quantity = qty;
        }

        //busca el elemento que se esta agregando en el carrito y le agrega la cantidad
        const findDuplicated = (found, cartList) => {
            cartList.forEach(element => {
                if (found.id === element.id) {
                    return element.quantity += qty;
                }
            });
        }

        //si ya esta ejecuta la funcion y actualiza para que se muestra en el cartWidget, sino, lo agrega
        if (found) { findDuplicated(found, cartList); setCartList([...cartList]) } else { setCartList([...cartList, item]) }
    }

    //remover el item
    const removeItem = (id) => {
        //crea y establece un nuevo array con todos los elemetos menos el que tiene el id que se elimina
        const newCartList = cartList.filter(item => item.id !== id);
        setCartList(newCartList);
    }

    //vacia el array
    const clear = () => setCartList([]);

    //verifica si ya esta en el array
    const isInCart = (item) => {
        return (
            cartList.find(element => element.id === item.id)
        )
    }

    //cantidad total de productos para el cartWidget
    const cartQty = () => {
        let total = cartList.map(item => item.quantity);
        return total.reduce(((a, b) => a + b), 0);
    }

    //suma el precio de todos los productos
    const subTotal = () => {
        let total = cartList.map(item => item.price * item.quantity);
        return total.reduce(((a, b) => a + b), 0);

    }

    //calcula el impuesto
    const IVA = () => {
        return subTotal() * 0.21
    }

    //suma el impuesto
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