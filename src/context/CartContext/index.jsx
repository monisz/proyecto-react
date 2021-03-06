import { createContext, useState, useEffect } from "react";
import { getFirestore } from '../../firebase/client';

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cartWidget, setCartWidget] = useState(0);
    const [orden, setOrden] = useState({});
    const [cambioDB, setCambioDB] = useState(false);
    const [pagoGenerado, setPagoGenerado] = useState(false);

    useEffect ( () => {
        setCambioDB(false);
        (async () => {
            const db = getFirestore();
            const collection = db.collection("productos");
            const soloConStock = collection.where('stock', '>', 0);
            const response = await soloConStock.get();
            setProductos(response.docs.map( element => {
                return {id:element.id, ...element.data()}
            }));
        }) ();
    }, [cambioDB]);

    useEffect ( () => {
        const carritoEnLocal = JSON.parse(localStorage.getItem('carrito'));
        if (carritoEnLocal) {
            setCarrito(carritoEnLocal);
            setCartWidget(carritoEnLocal.reduce((ac, element) =>
            ac += element.cantidad, 0));
        }
    }, []);

    useEffect ( () => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        const total = carrito.reduce((ac, element) =>
           ac += (element.item.price * element.cantidad)
        , 0);
        setPrecioTotal(total);
    }, [carrito]);


    const addItem = ({item, cantidad}) => {
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
        actualizarCartWidget(-isInCart(id).cantidad);
        let carritoModif = [];
        carrito.forEach( (elemento) => {
            if (elemento.item.id !== isInCart(id).item.id) {
                carritoModif.push(elemento);
            }
        })
        setCarrito(carritoModif);
    }

    const clear = () => {
        setCarrito([]);
        setCartWidget(0);
    }

    const actualizarCartWidget = (cantidad) => {
        setCartWidget(cartWidget + cantidad);
    }

    //prob?? Timestamp pero igual necesitaba una fx para
    //poder mostrarlo, as?? que me qued?? con la m??a
    const crearOrden = (name, phone, email) => {
        setPagoGenerado(false);
        let orden = { buyer:{name, phone, email}, 
            items: carrito, 
            fecha: formatearFecha(),
            total: precioTotal,
            estado: "generada"};
        
        const db = getFirestore();
        db.collection("ordenes").add(orden).then(({id}) => {
            orden = {ordenId: id, ...orden};
            setOrden(orden);
        });
    }

    const formatearFecha = () => {
        const hoy = new Date()
        const hoyModificado = hoy.toISOString();
        const fecha = hoyModificado.slice(0, 10);
        const yyyy = fecha.slice(0, 4);
        const mm = fecha.slice(5, 7);
        const dd = fecha.slice(8);
        const fechaFormat = dd + "-" + mm + "-" + yyyy;
        return fechaFormat;
    }

    const generarPago = async () => {
        const carritoAPagar = carrito.map((element) => {
            const ordenAPagar = {
                title: element.item.name,
                description: "",
                picture_url: "",
                id: element.item.id,
                quantity: Number(element.cantidad),
                currency_id: "ARS",
                unit_price: Number(element.item.price),
            };
            return ordenAPagar;
        });
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
        actualizarStock();
        setPagoGenerado(true);
        clear();
    }
    
    const actualizarStock = () => {
        const db = getFirestore();
        let productoAModificar = db.collection("productos");           
        const batch = db.batch();
        carrito.forEach( (el) => {
            batch.update(productoAModificar.doc(el.item.id), { stock: el.item.stock - el.cantidad});
        })
        batch.commit().then(setCambioDB(true));
    }
    
    return (
        <CartContext.Provider value={{addItem, removeItem, clear, crearOrden, generarPago, productos, carrito, precioTotal, cartWidget, orden, pagoGenerado}}>
            {children}
        </CartContext.Provider>
    )
}
