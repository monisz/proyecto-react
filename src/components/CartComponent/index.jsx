import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const CartComponent = (props) => {
    const context = useContext(CartContext);

    if (context.carrito.length === 0) { 
        return (
            <>
            <h1 className="carrito-titulo">Tu carrito está vacío</h1>
            <button>
                    <Link to={"/"}>Volver a la lista de productos</Link>
            </button>
            </>
            )
    } else {
        return (
            <>
                <h2 className="carrito-titulo">Detalle del carrito</h2>
                {context.carrito.map((elemento) =>{
                    return (
                        <div className="detalle-carrito">
                            <img src={elemento.item.thumbnail} alt={elemento.item.title} />
                            <h5 className="detalle-carrito-titulo">{elemento.item.title}</h5>
                            <p className="detalle-carrito-cantidad">{elemento.cantidad}</p>
                            <h5 className="detalle-carrito-precio">$ {elemento.item.price}</h5> 
                            <button className="btn-eliminar-item" onClick={() => {context.removeItem(elemento.item.id)}}>
                                <Link className="carrito-eliminar-item" to={"/cart"}> <FontAwesomeIcon icon={faTrashAlt} /></Link>
                            </button>       
                        </div>
                    )
                })}
                <h4 className="carrito-total">Total del carrito: $ {context.precioTotal}</h4>
                <button>
                    <Link to={"/"}>Seguir comprando</Link>
                </button>
                <button onClick={() => {context.clear()}}>
                    <Link to={"/cart"}>Vaciar carrito</Link>
                </button>
            </>
        )
    }
}

<i class="fas fa-trash-alt"></i>
