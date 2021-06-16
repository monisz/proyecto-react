import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Saludo } from './ItemListContainer';
import { Nav } from './components/NavBar';


function App() {
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
  );
}

export default App;
