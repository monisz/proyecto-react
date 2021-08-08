import { useState, useEffect, useContext } from 'react';
import { ItemDetail } from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { LoaderComponent } from '../../components/LoaderComponent';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const context = useContext(CartContext);
    const {id} = useParams();
    const [itemDetalle, setItemDetalle] = useState({});
    
    useEffect ( () => {
        const itemBuscado = context.productos.find ((element) => element.id === id)
        if (context.productos.length !== 0) {
            !itemBuscado ? setItemDetalle("no existe")
                : setItemDetalle(itemBuscado)
        }    
    }, [id, context.productos]);
    

    if (Object.keys(itemDetalle).length === 0) {
        return <LoaderComponent />
    } else {
        if (itemDetalle === "no existe") {
            return (
                <div className="carrito-vacio">
                    <h2 className="carrito-titulo">El producto no existe</h2>
                    <button className="btn btn-danger">
                        <Link className="boton"  to={"/"}>Volver a la lista de productos</Link>
                    </button>
                </div>
                )
        } else {
            return (      
            <div>
                <ItemDetail item={itemDetalle} />
            </div>
            )
        }
    }
}