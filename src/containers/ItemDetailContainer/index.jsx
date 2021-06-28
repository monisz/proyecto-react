import { Nav } from '../../components/NavBar';
import { Saludo } from '../../components/saludo';
import { useState, useEffect } from 'react';
//import { ItemList } from './ItemList';
import "../ItemListContainer/styles.css";
import { fetchData } from '../../utils/funciones';
import { ItemDetail } from '../../components/ItemDetail';

export const Home = () => {
    const usuario = {name: "NN"};
    const [carrito, setCarrito] = useState([]);
    //const [productos, setProductos] = useState([]);
    const [item, setItem] = useState([]);
    const categoria = "make-up";

//Primer intento de fetch
    /* useEffect ( async () => {
        const response = await fetch("./productos/productos.json");
        const json = await response.json();  
        setProductos(json);
    }, []) */

//Mejorado con recomend. de React
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
        const esperarDatos = async () => {
            const results = await fetchData(categoria);
            console.log(results);
            setItem(results[3]);
        }
        esperarDatos()
    }, [])
    

    return (
        <div className="App">
            <body>
                <header>
                    <Nav cantidadCarrito={carrito.length}/>
                    <h5 style= {{display: 'flex', justifyContent: 'center'}} >
                        DESAFIO CLASE 7
                    </h5>
                    <Saludo dataUsuario={usuario} title={'Bienvenido '}/>
                </header>
                <main>
                    <ItemDetail item={item} />
                    {/* <ItemList carrito={carrito} productos={productos} /> */}
                    <div className="boton-agregar" >
                        <button className="btn btn-primary boton-agregar" onClick={() => {setCarrito([...carrito, {id: 1, name: 'Lápiz labial'}])}}>Agregar al carrito</button>
                    </div>
                </main>    
            </body>
        </div>
    )
}