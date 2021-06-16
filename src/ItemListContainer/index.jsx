//import { Nav } from "react-bootstrap"
import { Nav } from '../components/NavBar';
import { Saludo } from "./saludo"

export const Home = () => {
    const usuario = {name: "Franco"}
    return (
        <div className="App">
            <body>
                <header>
                    <Nav />
                    <br />
                    <br />
                    <h1 style= {{display: 'flex', justifyContent: 'center'}} >
                        DESAFIO CLASE 4
                    </h1>
                    <Saludo dataUsuario={usuario} title={'Bienvenido'}/>
                </header>
            </body>
        </div>
    )
}