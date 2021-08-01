import { createContext, useState, useEffect } from "react";
import { getFirestore } from '../../firebase/client';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cartWidget, setCartWidget] = useState(0);
    const [orden, setOrden] = useState({});

    useEffect ( () => {
        (async () => {
            const db = getFirestore();
            const collection = db.collection("productos")
            const response = await collection.get()
            console.log("esta cargando productos firestore")
            setProductos(response.docs.map( element => {
                return {id:element.id, ...element.data()}
            }));
        }) ();  

        const carritoEnLocal = JSON.parse(localStorage.getItem('carrito'));
        console.log(carritoEnLocal)
        if (carritoEnLocal) {
            setCarrito(carritoEnLocal);
            setCartWidget(carritoEnLocal.reduce((ac, element) =>
            ac += element.cantidad, 0));
        }
    }, []);
    
    console.log(carrito);
    console.log(precioTotal);
    console.log(cartWidget);
    console.log(orden)
    console.log(productos)

    useEffect ( () => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarPrecioTotal();
        console.log(localStorage)
    }, [carrito]);


    const addItem = ({item, cantidad}) => {
        console.log(item);
        console.log(cantidad)
        if (isInCart(item.id)) {
            const carritoModif = carrito.map(elemento => {
                if (elemento.item.id === item.id) {
                    return { ...elemento, cantidad: elemento.cantidad + cantidad }
                } else return elemento;
            })
            setCarrito(carritoModif);
        } else {
            setCarrito(previo => [ ...previo, { item, cantidad }]);
        }
        actualizarCartWidget(cantidad);
    };
    
    const isInCart = id => carrito.find(element => element.item.id === id);
    
    const removeItem = (id) => {
        console.log(isInCart(id).item.id)
        actualizarCartWidget(-isInCart(id).cantidad);
        let carritoModif = [];
        carrito.map(elemento => {
            if (elemento.item.id !== isInCart(id).item.id) {
                carritoModif.push(elemento);
            }
        })
        setCarrito(carritoModif);
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

    const generarPago = async () => {
        const carritoAPagar = carrito.map((element) => {
            const ordenAPagar = {
                title: element.item.name,
                description: "",
                picture_url: "",
                category_id: element.item.id,
                quantity: Number(element.cantidad),
                currency_id: "ARS",
                unit_price: Number(element.item.price),
            };
            return ordenAPagar;
        });
        console.log(carritoAPagar);
        const response = await fetch("https://api.mercadopago.com/checkout/preferences",{
            method: "POST",
            headers: {
                Authorization: "Bearer TEST-4559372510592656-052123-aff869a0f602f03b3b82c52239cf67db-80359143",
            },
            body: JSON.stringify({
                items: carritoAPagar,
            }),
        });
        const data = await response.json();
        window.open(data.init_point, "_blank");
        console.log(data)
        clear();
    }

    console.log(orden)

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, crearOrden, generarPago, productos, carrito, precioTotal, cartWidget, orden}}>
            {children}
        </CartContext.Provider>
    )
}
