//import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export const Cart = () => {
    return (
        <div className="icono">
            <FontAwesomeIcon icon={faShoppingCart} />
        </div>
    )
}

//ReactDOM.render(element, document.body)
