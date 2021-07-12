import { Saludo } from '../../components/saludo';
import { useState, useEffect } from 'react';
import { ItemList } from '../../components/ItemList';
import "./styles.css";
import { fetchData } from '../../utils/funciones';
import { useParams } from 'react-router-dom';
import { LoaderComponent } from '../../components/LoaderComponent';

export const ItemListContainer = () => {
    const {cat} = useParams();
    const usuario = {name: "NN"};
    const [productos, setProductos] = useState([]);
    let categoria = "";
    cat ? categoria = `sites/MLA/search?q=${cat}` : categoria = `sites/MLA/search?q=Belleza`;

//Mejorado con recomend. de React - fech a json propio
    /* useEffect ( () => {
        async function fetchData() {
            const response = await fetch("./productos/productos.json");
            const json = await response.json();
            setProductos(json);
        }
        fetchData();
    }, []) */

//Cambio a productos ML, con función importada de utils
    useEffect ( () => {
        (async () => {
            console.log(await fetchData(categoria))
            const results = await fetchData(categoria)
            console.log(results)
            setProductos(results.results)
        })() 
    }, [categoria])

    
    if (!productos.length) return <LoaderComponent />;

    return (
        <div className="App">
            <h5>
                DESAFIO CLASE 10
            </h5>
            <Saludo dataUsuario={usuario} title={'Bienvenido '}/>
            <ItemList productos={productos} />
        </div>
    )
}