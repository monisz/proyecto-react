import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ItemCount } from '../ItemCount';

export const CartComponent = (props) => {
    const context = useContext(CartContext);
    let cantidad = 0;

    function cartAdd ({contador, initial, item}) {
        console.log(item, contador, initial)
        if (contador > initial) {
            cantidad = contador - initial
        } else { cantidad = -(initial - contador) }   
        console.log(cantidad)
        context.addItem({item, cantidad})
    }


    if (context.carrito.length === 0) { 
        return (
            <>
                <h1 className="carrito-titulo">Tu carrito está vacío</h1>
                <button className="btn btn-primary">
                    <Link className="botones-detail"  to={"/"}>Volver a la lista de productos</Link>
                </button>
            </>
            )
    } else {
        return (
            <>
                <h3 className="carrito-titulo">Detalle del carrito</h3>
                {context.carrito.map((elemento) => {
                    return (
                        <div className="detalle-carrito" key={elemento.item.id}>
                            <img className="detalle-carrito-imagen" src={elemento.item.img} alt={elemento.item.name} />
                            <h5 className="detalle-carrito-nombre">{elemento.item.name}</h5>
                            <p className="detalle-carrito-cantidad">{elemento.cantidad}</p>
                            <h6 className="detalle-carrito-precio">PU: $ {elemento.item.price}</h6> 
                            <div className="carrito-itemCount">
                                <ItemCount stock={elemento.item.stock} initial={elemento.cantidad} cartAdd={cartAdd} from={"CartComponent"} item={elemento.item} />
                            </div>
                            <h6 className="detalle-carrito-subtotal">Subtotal: $ {elemento.item.price*elemento.cantidad}</h6> 
                            <button className="btn-eliminar-item" onClick={() => {context.removeItem(elemento.item.id)}}>
                                <Link className="carrito-eliminar-item" to={"/cart"}> <FontAwesomeIcon icon={faTrashAlt} /></Link>
                            </button>       
                        </div>
                    )
                })}
                <h5 className="carrito-total">Total del carrito: $ {context.precioTotal}</h5>
                <div className="botones-carrito">
                    <button className="btn btn-primary">
                        <Link className="botones-detail" to={"/"}>Seguir comprando</Link>
                    </button>
                    <button className="btn btn-primary" onClick={() => {context.clear()}}>
                        <Link className="botones-detail" to={"/cart"}>Vaciar carrito</Link>
                    </button>
                    <button className="btn btn-primary">
                        <Link className="botones-detail" to={"/checkout"}>Terminar compra</Link>
                    </button>
                </div>
            </> 
        )
    }
}