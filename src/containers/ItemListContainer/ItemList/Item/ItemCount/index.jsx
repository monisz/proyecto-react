import { useState } from "react";
import "./styles.css";

export const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial);

    function onAdd() {
        if (contador < props.stock) {
            setContador(parseInt(contador) + 1);
        } else {
            alert(`el stock disponible es de ${props.stock}`);
        }
    }

    function onSubstract() {
        if (contador > 1) {
            setContador(parseInt(contador) - 1);
        } else {
            alert("no puede ser menor de 1");
        }
    }

    return (
        <div className="item-count">
            <div className="item-count-b">
                <button type="button" className="btn boton-contador" onClick={onSubstract}> - </button>
                <input className="contador" type="text" value={contador} />
                <button type="button" className="btn boton-contador" onClick={onAdd}> + </button>
            </div>
        </div>
    );
};
