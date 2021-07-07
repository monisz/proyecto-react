import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ItemListContainer} from './containers/ItemListContainer';
import { ContactContainer} from './containers/ContactContainer';
import { Nav } from './components/NavBar';
import { useState } from 'react';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { CartComponent } from './components/CartComponent';

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <BrowserRouter>
      <nav>
        <Nav cantidadCarrito={carrito.length}/>
      </nav>
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/contacto" component={ContactContainer} />
        <Route path="/detalle/:id_producto" component={ItemDetailContainer} />
        <Route path="/categoria/:cat" component={ItemListContainer} />
        <Route path="/cart" component={CartComponent} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
