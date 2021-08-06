import { React, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { DetalleCompra } from '../DetalleCompra';
import { LoaderComponent } from '../LoaderComponent';
import "./styles.css";
import { Link } from 'react-router-dom';

export const Ordenes = () => {
    const context = useContext(CartContext);
    console.log(context.pagoGenerado)
    
    if (Object.keys(context.orden).length === 0) {
        return ( <LoaderComponent /> )
    } else {
        return ( 
            <div className="ordenes">
                <h4>ORDENES</h4>
                <div className="orden">
                    <p className="orden-numero"><span className="orden-titulo">ORDEN Nº: </span>{context.orden.ordenId}</p>
                    <p><span className="orden-datos">Nombre:</span> {context.orden.buyer.name}</p>
                    <p><span className="orden-datos">Teléfono:</span> {context.orden.buyer.phone}</p>
                    <p><span className="orden-datos">Email:</span> {context.orden.buyer.email}</p>
                    <p><span className="orden-datos">Fecha:</span> {context.orden.fecha}</p>
                    <div className="orden-detalle">
                        <DetalleCompra />  
                    </div>
                    <div className="btn-pagar">
                    {console.log(context.pagoGenerado)}
                        {!context.pagoGenerado ? 
                        <button className="btn btn-primary" onClick={() => { 
                            context.generarPago()}}>Confirmar reserva y pagar
                        </button>
                        :   <button className="btn btn-primary">
                                <Link className="botones-detail" to={"/"}>Seguir comprando</Link>
                            </button>
                        }
                    </div>
                </div>   
            </div>
        )
    }          
}

/* {console.log(context.cambioDB)}
                        {!context.cambioDB ? 
                        <button className="btn btn-primary" onClick={() => { 
                            context.generarPago()}}>Confirmar reserva y pagar
                        </button>
                        : <button className="btn btn-primary">
                            <Link className="botones-detail" to={"/"}>Seguir comprando</Link>
                            </button>
                        } */