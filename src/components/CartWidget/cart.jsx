import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = (props) => {
    const context = useContext(CartContext);

    return (
        <div className="carrito">
            <button className="btn-icono-carrito">
                <Link className="icono-carrito" to={"/cart"}> <FontAwesomeIcon icon={faShoppingCart} /></Link>
            </button>
            <div className="numero-carrito">
                <span className="cantidad-carrito">{context.cartWidget}</span>
            </div>
        </div>
    )
}