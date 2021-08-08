import { useState, useEffect, useContext,  } from 'react';
import { ItemList } from '../../components/ItemList';
import "./styles.css";
import { LoaderComponent } from '../../components/LoaderComponent';
import { CartContext } from '../../context/CartContext';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const context = useContext(CartContext);
    const {cat} = useParams();
    const [productosXCategoria, setProductosXCategoria] = useState([]);
    
    useEffect ( () => {
        const productosFiltrado = context.productos.filter ( (element) => element.category === cat);
        setProductosXCategoria(productosFiltrado);
    }, [cat, context.productos]);

    let productosAMostrar = [];
    cat ? productosAMostrar = productosXCategoria : productosAMostrar = context.productos;
    
    if (!productosAMostrar.length) return <LoaderComponent />;

    return (
        <div className="App fondo">
            <h3>Bienvenido a tu Tienda Beauty</h3>
            <ItemList productos={productosAMostrar}/>
        </div>
    )
}