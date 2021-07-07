import { useState } from "react";
import "./styles.css";

export const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    function sumar() {
        if (contador < stock) {
            setContador(parseInt(contador) + 1);
        } else {
            alert(`el stock disponible es de ${stock}`);
        }
    }

    function restar() {
        if (contador > 1) {
            setContador(parseInt(contador) - 1);
        } else {
            alert("no puede ser menor de 1");
        }
    }

    return (
        <>
        <div className="item-count">
            <div className="item-count-b">
                <button type="button" className="btn boton-contador" onClick={restar}> - </button>
                <input className="contador" type="text" value={contador} />
                <button type="button" className="btn boton-contador" onClick={sumar}> + </button>
            </div>
        </div>
        <div>
            <button className="btn btn-primary btn-agregar" 
                onClick={() => {onAdd(contador)}}>Agregar al carrito
            </button>
        </div>
        </>
    )
}