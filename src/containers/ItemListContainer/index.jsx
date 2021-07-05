import { Saludo } from '../../components/saludo';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import "./styles.css";
import { fetchData } from '../../utils/funciones';
import { useParams } from 'react-router-dom';

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

    return (
        <div className="App">
            <h5>
                PRIMERA ENTREGA PROYECTO FINAL
            </h5>
            <Saludo dataUsuario={usuario} title={'Bienvenido '}/>
            <ItemList productos={productos} />
            <div className="boton-agregar" >
                <button className="btn btn-primary boton-agregar" onClick={() => 
                    /* {setCarrito([...carrito, {id: 1, name: 'Lápiz labial'}])} */
                    console.log("esperando que se pueda resolver el carrito")
                    }>Agregar al carrito
                </button>
            </div>
        </div>
    )
}