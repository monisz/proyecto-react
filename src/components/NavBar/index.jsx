import { Cart } from './CartWidget/cart';
import './styles.css';
const menu = ['Cuidado del cabello', 'Cuidado de la piel', 'Make-up']

export const Nav = ({cantidadCarrito}) => {
    console.log(cantidadCarrito);
    return (
        <nav className="navbar navbar-expand-lg navbar-light barraNavegacion">
            <div className="container-fluid">
                <img className="logo" src="/imagenes/logo-beauty2.png" alt="logo" />
                <a class="navbar-brand nombreTienda" href="#">Tienda Beauty</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                        
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">{menu[0]}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{menu[1]}</a>
                        </li>                               
                        <li className="nav-item">
                            <a className="nav-link" href="#">{menu[2]}</a>
                        </li>
                    </ul>
                </div>
                <Cart cantidadCarrito={cantidadCarrito}/>
            </div>
        </nav>
    )
}