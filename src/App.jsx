import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ItemListContainer} from './containers/ItemListContainer';
import { ContactContainer} from './containers/ContactContainer';
import { Nav } from './components/NavBar';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { CartComponent } from './components/CartComponent';
import { CartComponentContext } from './context/CartContext';
import { Checkout } from './components/Checkout';

function App() {

  return (
    <CartComponentContext>
      <BrowserRouter>
        <nav>
          <Nav />
        </nav>
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/contacto"> <ContactContainer /> </Route>
          <Route path="/detalle/:id" component={ItemDetailContainer} />
          <Route path="/categoria/:cat" component={ItemListContainer} />
          <Route path="/cart" component={CartComponent} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    </CartComponentContext>
  )
}

export default App;
