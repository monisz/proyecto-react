import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    console.log(carrito);

    const addItem = ({item, contador}) => {
        const cantidad = Number(contador)
        const posicion = isInCart(item.id)
        if (posicion !== -1) {
            let carritoModif = carrito
            carritoModif[posicion] = { item, cantidad: carritoModif[posicion].cantidad + cantidad}
            setCarrito(carritoModif)
        } else {
            setCarrito([...carrito, { item, cantidad }])
        }
    }

    const isInCart = (id) => {
        if (carrito.length > 0) {
            const itemEnCarrito = carrito.find((element) => element.item.id === id);
            const posicion = carrito.indexOf(itemEnCarrito);
            return posicion;
        } else {
            return -1;
        }
    }

    const removeItem = (id) => {
        console.log("estoy en remove")
        const itemEnCarrito = carrito.find((element) => element.item.id === id)
        const posicion = carrito.indexOf(itemEnCarrito)
        let carritoModif = carrito
        carritoModif.splice(posicion, 1)
        setCarrito(carritoModif)
    }

    const clear = () => {
        setCarrito([]);
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, carrito}}>
            {children}
        </CartContext.Provider>
    )
}