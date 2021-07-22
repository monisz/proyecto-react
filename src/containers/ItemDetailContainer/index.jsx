import { useState, useEffect, useContext } from 'react';
import { ItemDetail } from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { LoaderComponent } from '../../components/LoaderComponent';
import { CartContext } from '../../context/CartContext';

export const ItemDetailContainer = () => {
    const context = useContext(CartContext);
    const { id } = useParams();
    console.log(id)
    const [itemDetalle, setItemDetalle] = useState({});
    console.log(id)

    useEffect ( () => {
        const itemBuscado = context.productos.find ((element) => element.id === id);
            console.log(itemBuscado)
            setItemDetalle(itemBuscado);
    }, [id])

    console.log(itemDetalle)
    return (
        <div>
            {(Object.keys(itemDetalle).length === 0) ?
                <LoaderComponent />                   
                : <ItemDetail item={itemDetalle} />}
        </div>
    )
}