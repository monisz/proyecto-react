import {useState} from "react";
import './styles.css';

export const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial);

    function onAdd() {
        if (contador < props.stock) {
            setContador(parseInt(contador)+1)
        }
    }

    function onSubstract() {
        if (contador > 1) {
            setContador(parseInt(contador)-1)
        } else {
            alert("no puede ser menor de 0")
        }
    }

    return (
        <div className="item-count">
            <button type="button" className="btn boton-contador"  onClick={onSubstract}>-</button>
            <input className="contador" type="text" value={contador} />
            <button type="button" className="btn boton-contador" onClick={onAdd}>+</button>
        </div>
    )
}
