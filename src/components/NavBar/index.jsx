import { Cart } from '../CartWidget/cart';
import { Link } from 'react-router-dom';
import './styles.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const menu = ['Home', 'Cuidado del cabello', 'Make-up', 'Contacto']

export const Nav = (props) => {
    const context = useContext(CartContext);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light barraNavegacion">
            <div className="container-fluid">
                <img className="logo" src="/imagenes/logo-beauty2.png" alt="logo" />
                <Link to="/" class="navbar-brand nombreTienda">Tienda Beauty</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active" aria-current="page">{menu[0]}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/categoria/${menu[1]}`} className="nav-link">{menu[1]}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/categoria/${menu[2]}`} className="nav-link">{menu[2]}</Link>
                        </li>                                                              
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link">{menu[3]}</Link>
                        </li>
                    </ul>
                </div>
                { context.cartWidget > 0 ? <Cart /> : console.log(context.cartWidget) }
                {/* <Cart /> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                        
            </div>
        </nav>
    )
}