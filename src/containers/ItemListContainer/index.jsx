import { Saludo } from '../../components/saludo';
import { useState, useEffect, useContext,  } from 'react';
import { ItemList } from '../../components/ItemList';
import "./styles.css";
import { LoaderComponent } from '../../components/LoaderComponent';
import { CartContext } from '../../context/CartContext';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const context = useContext(CartContext);
    console.log(context.productos)
    const {cat} = useParams();
    const [productosXCategoria, setProductosXCategoria] = useState([]);
    const usuario = {name: "NN"};
    
    useEffect ( () => {
        const productosFiltrado = context.productos.filter ( (element) => element.category === cat)
        setProductosXCategoria(productosFiltrado);
    }, [cat]);

    let productosAMostrar = [];
    cat ? productosAMostrar = productosXCategoria : productosAMostrar = context.productos;
    
    if (!productosAMostrar.length) return <LoaderComponent />;

    console.log(cat)
    return (
        <div className="App">
            <h5>
                DESAFIO CLASE 12
            </h5>
            <Saludo dataUsuario={usuario} title={'Bienvenido '}/>
            <ItemList productos={productosAMostrar}/>
        </div>
    )
}