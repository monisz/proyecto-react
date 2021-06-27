import { Nav } from '../../components/NavBar';
import { Saludo } from './saludo';
import { Card } from './CardComponent';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import "./styles.css";
import { fetchData } from '../../utils/funciones';

export const Home = () => {
    const usuario = {name: "NN"};
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos] = useState([]);
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
            console.log(await fetchData(categoria))
            const results = await fetchData(categoria);
            setProductos(results)
        }
        esperarDatos()
        console.log(productos)
    }, [])

    return (
        <div className="App">
            <body>
                <header>
                    <Nav cantidadCarrito={carrito.length}/>
                    <h3 style= {{display: 'flex', justifyContent: 'center'}} >
                        PRACTICA 6/7
                    </h3>
                    <Saludo dataUsuario={usuario} title={'Bienvenido '}/>
                </header>
                <main>  
                    <ItemList carrito={carrito} productos={productos} />
                    {/* <Card title={'Lápiz labial'} price={700} carrito={carrito}/> */}
                    <button className="btn btn-primary" onClick={() => {setCarrito([...carrito, {id: 1, name: 'Lápiz labial'}])}}>Agregar al carrito</button>
                </main>    
            </body>
        </div>
    )
}