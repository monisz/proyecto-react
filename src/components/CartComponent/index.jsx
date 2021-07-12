import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartComponent = (props) => {
    const context = useContext(CartContext);

    if (context.carrito.length === 0) { 
        return (
            <>
            <h1>El carrito está vacío</h1>
            </>
            )
    } else {
        return (
            <div>
                <h1>Hola soy Cart</h1>
                <h2>Detalle del carrito</h2>
                {context.carrito.map((elemento) =>{
                    return (
                        <div>
                            <img src={elemento.item.thumbnail} alt={elemento.item.title} />
                            <h4>{elemento.item.title}</h4>
                            <p>{elemento.cantidad}</p>
                            <h4>{elemento.item.price}</h4> 
                            <button onClick={() => {context.removeItem(elemento.item.id)}}>
                                <Link to={"/cart"}>Eliminar producto</Link>
                            </button>
                        </div>
                    )
                })}
                <button onClick={() => {context.clear()}}>
                    <Link to={"/cart"}>Vaciar carrito</Link>
                </button>
            </div>
        )
    }
}
