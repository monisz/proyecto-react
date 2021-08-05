import { React, useContext, useState } from 'react'; 
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./styles.css";
import { DetalleCompra } from '../DetalleCompra';

export const Checkout = () => {
    const context = useContext(CartContext);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="checkout-container">
            <div className="checkout-detalle">

            <DetalleCompra />
            </div>
            <div className="datos">
                <div className="ingresos">
                    <h5 className="titulo-ingresos" >Ingrese sus datos para continuar</h5>
                    <div className="detalle-ingresos">
                        <input type="text" className="form-control input" value={name} onChange={(el) => {setName(el.target.value)}} placeholder="Nombre/s y apellido"/>
                        <input type="tel" className="form-control input" value={phone} onInput={(el) => {setPhone(el.target.value)}} placeholder="Número de teléfono"  />
                        <input type="email" className="form-control input" value={email} onInput={(el) => {setEmail(el.target.value)}} placeholder="nombre@example.com"/>
                    </div>
                    <div className="aceptar">
                        { name !== "" && phone !== "" && email !== "" ?
                            <Link to={"/ordenes"} className="btn btn-primary" onClick={() => {
                                context.crearOrden(name, phone, email)
                            }}>Continuar</Link>
                        : console.log("esperando carga de datos")}
                    </div>
                </div>
            </div>
        </div>
    )
}