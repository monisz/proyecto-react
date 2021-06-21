import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export const Cart = ({cantidadCarrito}) => {
    return (
        <div className="carrito">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>({cantidadCarrito})</p>
        </div>
    )
}
