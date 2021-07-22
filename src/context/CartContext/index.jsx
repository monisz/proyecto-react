import { createContext, useState, useEffect } from "react";
import { getFirestore } from '../../firebase/client';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cartWidget, setCartWidget] = useState(0);
    const [orden, setOrden] = useState({});

    console.log(carrito);
    console.log(precioTotal);
    console.log(cartWidget);
    console.log(orden)
    
    useEffect ( () => {
        const carritoEnLocal = JSON.parse(localStorage.getItem('carrito'));
        console.log(carritoEnLocal)
        if (carritoEnLocal) {
            setCarrito(carritoEnLocal);
            setCartWidget(carritoEnLocal.reduce((ac, element) =>
            ac += element.cantidad, 0))
        }

        (async () => {
            const db = getFirestore();
            const collection = db.collection("productos")
            const response = await collection.get()
            setProductos(response.docs.map( element => {
                return {id:element.id, ...element.data()}
            }));
        }) ();
    }, []);


    useEffect ( () => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarPrecioTotal();
        console.log(localStorage)
    }, [carrito]);



    /* const addItem = ({item, cantidad}) => {
        console.log(cantidad)
        console.log("entra a addItem");
        const posicion = isInCart(item.id);
        if (posicion !== -1) {
            let carritoModif = carrito;
            carritoModif[posicion] = { item, cantidad: carritoModif[posicion].cantidad + cantidad};
            setCarrito(carritoModif);
        } else {
            setCarrito([...carrito, { item, cantidad }]);
        }
        console.log(carrito)
        actualizarPrecioTotal();
        actualizarCartWidget(cantidad);
    } */

    const addItem = ({item, cantidad}) => {
        console.log(item);
        console.log(cantidad)
        if (isInCart(item.id)) {
            console.log(isInCart)
            const carritoModif = carrito.map(elemento => {
                if (elemento.item.id === item.id) {
                    return { ...elemento, cantidad: elemento.cantidad + cantidad }
                } else return elemento;
            })
            setCarrito(carritoModif);
        } else {
            setCarrito(previo => [ ...previo, { item, cantidad }]);
        }
        /* actualizarPrecioTotal(); */
        actualizarCartWidget(cantidad);
        console.log(item.stock)
        const cantidadAModificar = 0 - cantidad;
        actualizarStock({item, cantidadAModificar})
    };

    const actualizarStock = ({item, cantidadAModificar}) => {
        console.log(cantidadAModificar)
        console.log(item.stock)
        item.stock = item.stock + cantidadAModificar;
        console.log(item.stock)
        console.log(item)
    }

    /* const isInCart = (id) => {
        if (carrito.length > 0) {
            const itemEnCarrito = carrito.find((element) => element.item.id === id);
            const posicion = carrito.indexOf(itemEnCarrito);
            return posicion;
        } else {
            return -1;
        }
    } */
    
    const isInCart = id => carrito.find(element => element.item.id === id);

    const removeItem = (id) => {
        const itemEnCarrito = carrito.find((element) => element.item.id === id)
        const posicion = carrito.indexOf(itemEnCarrito)
        let carritoModif = carrito
        carritoModif.splice(posicion, 1)
        setCarrito(carritoModif)
        //actualizar total y y localStorage en agregar funciona con el useEffect y
        //en eliminar solo acá, por qué?
        actualizarPrecioTotal();
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCartWidget(-itemEnCarrito.cantidad);
        /* const cantidadAModificar = itemEnCarrito.cantidad;
        const item = carrito.find( (el) => el.id === itemEnCarrito.id)
        console.log(item)
        actualizarStock({item, cantidadAModificar}) */
    }

    const clear = () => {
        setCarrito([]);
        setPrecioTotal(0);
        setCartWidget(0);
    }

    const actualizarPrecioTotal = () => {
        console.log(carrito)
        const total = carrito.reduce((ac, element) =>
           ac += (element.item.price * element.cantidad)
        , 0);
        console.log(total)
        console.log(carrito)
        setPrecioTotal(total);
    }

    const actualizarCartWidget = (cantidad) => {
        setCartWidget(cartWidget + cantidad);
    }

    const crearOrden = (name, phone, email) => {
        let orden = { buyer:{name, phone, email}, items: carrito, fecha: new Date(), total:precioTotal}
        console.log(orden)
        
        const db = getFirestore();
        db.collection("ordenes").add(orden).then(({id}) => {
            orden = {ordenId: id, ...orden}
            console.log(orden)
            setOrden(orden);
        });
    }

    console.log(orden)

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, crearOrden, productos, carrito, precioTotal, cartWidget, orden}}>
            {children}
        </CartContext.Provider>
    )
}
