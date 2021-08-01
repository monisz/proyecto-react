import { React, useContext, useState, useEffect } from 'react'; 
import { CartContext } from '../../context/CartContext';
import { LoaderComponent } from '../LoaderComponent';
import "./styles.css";

export const Checkout = () => {
    const context = useContext(CartContext);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    console.log("volvio a entrar en checkout")
    const [acepto, setAcepto] = useState(false);
    console.log(acepto)

    useEffect(() => {
        setAcepto(false)
    }, [context.orden])

    return (
        <div>
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
            <div className="datos">
                <div className="ingresos">
                    <h5 className="titulo-ingresos" >Ingrese sus datos para continuar</h5>
                    <div className="detalle-ingresos">
                        <input type="text" className="form-control input" value={name} onChange={(el) => {setName(el.target.value)}} placeholder="Nombre/s y apellido"/>
                        <input type="tel" className="form-control input" value={phone} onInput={(el) => {setPhone(el.target.value)}} placeholder="Número de teléfono"  />
                        <input type="email" className="form-control input" value={email} onInput={(el) => {setEmail(el.target.value)}} placeholder="nombre@example.com"/>
                    </div>
                </div>
                <div className="aceptar">
                    { name !== "" && phone !== "" && email !== "" ?
                        <button className="btn btn-primary" onClick={() => {
                            context.crearOrden(name, phone, email)
                            setAcepto(true)
                            }}>Aceptar
                        </button>
                    : console.log("esperando carga de datos")}
                </div>
                    <div className="orden">
                        { acepto ? <LoaderComponent />
                        : console.log("todavia no acepto")}
                        {(Object.keys(context.orden).length !== 0) ?
                            <div>
                                <p>Su número de orden es: {context.orden.ordenId}</p>
                                <button className="btn btn-primary" onClick={() => { 
                                    context.generarPago()}}>Confirmar reserva y pagar
                                </button>
                            </div>
                        : console.log("esperando orden")} 
                    </div>
            </div>
        </div>
    )
}