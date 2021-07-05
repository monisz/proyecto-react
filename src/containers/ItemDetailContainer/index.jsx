import { useState, useEffect } from 'react';
import { fetchData } from '../../utils/funciones';
import { ItemDetail } from '../../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { LoaderComponent } from '../../components/LoaderComponent';

export const ItemDetailContainer = () => {
    const { id_producto } = useParams();
    console.log(id_producto)
    const categoria = `items/${id_producto}`;
    const [itemDetalle, setItemDetalle] = useState({});
    console.log(id_producto)

    useEffect ( () => {
        (async () => {
            const result = await fetchData(categoria);
            console.log(result)
            setItemDetalle(result)
        })()
    }, [id_producto])

    console.log(itemDetalle)
    return (
        <div>
            {(Object.keys(itemDetalle).length === 0) ?
                <LoaderComponent />                   
                : <ItemDetail item={itemDetalle} /> }
        </div>
    )
}