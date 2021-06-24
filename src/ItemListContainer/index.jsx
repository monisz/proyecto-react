import { Nav } from '../components/NavBar';
import { Saludo } from './saludo';
import { Card } from './CardComponent';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import "./styles.css";

export const Home = () => {
    const usuario = {name: "NN"};
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos] = useState([]);

    useEffect ( async () => {
        const response = await fetch("./productos/productos.json");
        const json = await response.json();  
        setProductos(json);
        console.log(productos)
    }, [])

    console.log(productos)
    return (
        <div className="App">
            <body>
                <header>
                    <Nav cantidadCarrito={carrito.length}/>
                    <h3 style= {{display: 'flex', justifyContent: 'center'}} >
                        DESAFIO CLASE 6
                    </h3>
                    <Saludo dataUsuario={usuario} title={'Bienvenido '}/>
                </header>
                <main>
                    <div className="card">
                        <ItemList carrito={carrito} productos={productos} />
                        {/* <Card title={'Lápiz labial'} price={700} carrito={carrito}/> */}
                    </div>
                    <button className="btn btn-primary" onClick={() => {setCarrito([...carrito, {id: 1, name: 'Lápiz labial'}])}}>Agregar al carrito</button>
                </main>    
            </body>
        </div>
    )
}