import { useState, useEffect, useContext } from 'react';
import { ItemDetail } from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { LoaderComponent } from '../../components/LoaderComponent';
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {
    const context = useContext(CartContext);
    console.log(context.productos)
    const {id} = useParams();
    console.log(id)
    const [itemDetalle, setItemDetalle] = useState({});
    
    
    useEffect ( () => {
        console.log("entra al useEffect de Detcontainer")
        console.log(context.productos)
        const itemBuscado = context.productos.find ((element) => element.id === id);
            console.log(itemBuscado)
            setItemDetalle(itemBuscado)
    }, [id, context.productos]);

    console.log(itemDetalle)
    
    if (!itemDetalle) {
        return <LoaderComponent /> 
    } else {
        return (
            <div>
                <ItemDetail item={itemDetalle} />
            </div>
        )
    }
}