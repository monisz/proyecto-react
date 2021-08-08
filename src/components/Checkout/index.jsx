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
    const [email2, setEmail2] = useState("");


    return (
        <div className="checkout-container">
            <div className="checkout-detalle">
                <DetalleCompra />
            </div>
            <div className="datos">
                <div className="ingresos">
                    <h5 className="titulo-ingresos" >Ingrese sus datos para continuar</h5>
                    <div className="detalle-ingresos">
                        <input type="text" className="form-control input-datos" value={name} 
                            onInput={(el) => {setName(el.target.value)}} placeholder="Nombre/s y apellido"/>
                        <input type="tel" className="form-control input-datos" value={phone} 
                            onInput={(el) => {
                                if (!isNaN(el.target.value)) {setPhone(el.target.value)}
                            }} placeholder="Número de teléfono (solo números)" />
                        <input type="email" className="form-control input-datos" value={email} 
                            onInput={(el) => {setEmail(el.target.value)}} placeholder="nombre@example.com"/>
                        <input type="email" className="form-control input-datos" value={email2} 
                            onInput={(el) => {setEmail2(el.target.value)}} placeholder="confirme su email"/>
                        
                        {email !== "" ?
                            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) ? <p>Debe ingresar un email válido</p>
                                : email !== email2 ? <p>Ambos emails deben coincidir para continuar</p>
                                    : <div className="aceptar">
                                        {name !== "" && phone !== "" ?
                                        <Link to={"/ordenes"} className="btn btn-danger botom" 
                                            onClick={() => {context.crearOrden(name, phone, email)
                                            }}>Realizar compra
                                        </Link>
                                        : <p>Debe completar todos los campos</p>}
                                    </div>
                            :<p>Debe completar todos los campos</p> 
                        }    
                    </div>
                </div>
            </div>
        </div>
    )
}