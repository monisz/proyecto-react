import { React, useContext } from 'react'; 
import { CartContext } from '../../context/CartContext';
import "./styles.css";

export const DetalleCompra = () => {
    const context = useContext(CartContext);

    return (
        <div className="checkout">
                <div className="ch-detalle">
                    <h5 className="ch-detalle-titulo"> Detalle de su orden</h5>
                    <table className="ch-detalle-tabla">
                        <thead>
                            <tr className="ch-detalle-renglones">
                                <th className="ch-detalle-producto">Producto</th>
                                <th className="ch-detalle-cantidad">Cantidad</th>
                                <th className="ch-detalle-precio">Precio unitario</th>
                                <th className="ch-detalle-subtotal">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {context.carrito.map((elemento) => {
                                return (
                                    <tr className="ch-detalle-renglones" key={elemento.item.id}>
                                        <td className="ch-detalle-producto">{elemento.item.name}</td>
                                        <td className="ch-detalle-cantidad">{elemento.cantidad}</td>
                                        <td className="ch-detalle-precio">{elemento.item.price}</td>
                                        <td className="ch-detalle-subtotal">{elemento.item.price*elemento.cantidad}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>    
                    <h5 className="total">Total $ {context.precioTotal}</h5>
                </div>
            </div>
    )
}
