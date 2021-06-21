import { Nav } from '../components/NavBar';
import { Saludo } from './saludo';
import { Card } from './CardComponent';
import { useState } from 'react';


export const Home = () => {
    const usuario = {name: "NN"};
    const [carrito, setCarrito] = useState([]);
    console.log(carrito);
    console.log(carrito.length)
    return (
        <div className="App">
            <body>
                <header>
                    <Nav cantidadCarrito={carrito.length}/>
                    <h3 style= {{display: 'flex', justifyContent: 'center'}} >
                        DESAFIO CLASE 5
                    </h3>
                    <Saludo dataUsuario={usuario} title={'Bienvenido '}/>
                </header>
                <main>
                    <Card title={'Lápiz labial'} price={700} carrito={carrito}/>
                    <button className="btn btn-primary" onClick={() => {setCarrito([...carrito, {id: 1, name: 'Lápiz labial'}])}}>Agregar al carrito</button>
                </main>    
            </body>
        </div>
    )
}