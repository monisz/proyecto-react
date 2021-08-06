import { useState, useEffect } from "react";
import "./styles.css";

export const ItemCount = ({stock, initial, onAdd, from, cartAdd, item}) => {
    const [contador, setContador] = useState(initial);
    console.log(contador)
    console.log(stock)

    useEffect ( () => {
        setContador(initial)
    }, [initial, item]);

    function sumar() {
        /* if (from === "CartComponent") {
            stock = stock + initial
            console.log(stock)
        } */
        if (contador < stock) {
            setContador(parseInt(contador) + 1);
        }
    }

    function restar() {
        if (contador > 1) {
            setContador(parseInt(contador) - 1);
        }
    }

    return (
        <div className="cantidades">
            <div className="item-count">
                <div className="item-count-b">
                    <button type="button" className="btn boton-contador" onClick={restar}> - </button>
                    <input className="contador" type="text" value={contador} />
                    <button type="button" className="btn boton-contador" onClick={sumar}> + </button>
                </div>
            </div>

            {stock > 0 ? from === "CartComponent" ? 
                <div className="stock-boton">
                    <p className="stock">Stock disponible: {stock - contador}</p>
                    <button className="btn btn-primary btn-agregar btn-modificar"
                        onClick={() => {cartAdd({contador, initial, item})}}>Modificar cantidad
                    </button>
                </div> 
                :  <div>
                        <button className="btn btn-primary btn-agregar" 
                            onClick={() => {onAdd(contador)}}>Agregar al carrito
                        </button>
                    </div>       
            :   <div>
                    <p>No hay más stock disponible</p>
                </div>    
            }
        </div>
    )
}

/* return (
    <div className="cantidades">
        <div className="item-count">
            <div className="item-count-b">
                <button type="button" className="btn boton-contador" onClick={restar}> - </button>
                <input className="contador" type="text" value={contador} />
                <button type="button" className="btn boton-contador" onClick={sumar}> + </button>
            </div>
        </div>
    { from === "CartComponent" ? 
        <div className="stock-boton">
            <p className="stock">Stock disponible: {stock + initial - contador}</p>
            <button className="btn btn-primary btn-agregar btn-modificar"
                onClick={() => {cartAdd({contador, initial, item})}}>Modificar cantidad
            </button>
        </div> 
        : stock > 0 ?    
            <div>
                <button className="btn btn-primary btn-agregar" 
                    onClick={() => {onAdd(contador)}}>Agregar al carrito
                </button>
            </div>       
            : console.log("pide total del stock")
    }
    </div>
) */


/* return (
    <div className="cantidades">
        <div className="item-count">
            <div className="item-count-b">
                <button type="button" className="btn boton-contador" onClick={restar}> - </button>
                <input className="contador" type="text" value={contador} />
                <button type="button" className="btn boton-contador" onClick={sumar}> + </button>
            </div>
        </div>


        {stock > 0 ? from === "CartComponent" ? 
            <div className="stock-boton">
                <p className="stock">Stock disponible: {stock - contador}</p>
                <button className="btn btn-primary btn-agregar btn-modificar"
                    onClick={() => {cartAdd({contador, initial, item})}}>Modificar cantidad
                </button>
            </div> 
            :  <div>
                    <button className="btn btn-primary btn-agregar" 
                        onClick={() => {onAdd(contador)}}>Agregar al carrito
                    </button>
                </div>       
        : context.carrito.lenght !== 0 ?
                <div>
                    <p>Máximo stock disponible</p>
                </div>
                : console.log("carrito vacío")
        }
    </div>
) */
