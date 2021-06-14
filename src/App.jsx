import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Nav } from './components/NavBar';


function App() {
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
        </header>
      </body>
    </div>
  );
}

export default App;
