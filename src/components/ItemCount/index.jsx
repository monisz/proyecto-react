import { useState, useEffect } from "react";
import "./styles.css";

export const ItemCount = ({stock, initial, onAdd, from, cartAdd, item}) => {
    const [contador, setContador] = useState(initial);

    useEffect ( () => {
        setContador(initial)
    }, [initial, item]);

    function sumar() {
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
                    <button className="btn btn-danger boton btn-modificar"
                        onClick={() => {cartAdd({contador, initial, item})}}>Modificar cantidad
                    </button>
                </div> 
                :  <div>
                        <button className="btn btn-danger boton" 
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