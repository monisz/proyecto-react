import { ItemCount } from "../ItemCount"
import './styles.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item}) => {
  const context = useContext(CartContext);
  
  console.log(item)
  
  function onAdd (contador) {
    console.log(item, contador)
    context.addItem({item, contador})
  }

  
  return (
    <div className="detalle">
      <div className="detalle-producto">
        <img src={item.thumbnail} className="detalle-imagen" alt="..." />
        <div className="detalle-info">
          <h5 className="detalle-title">{item.title}</h5>
          <p className="detalle-text">{item.description || "Descripción del producto"}</p>
          <h5 className="detalle-precio">$ {item.price}</h5>
          <ItemCount stock={item.available_quantity} initial="1" onAdd={onAdd}/>
          <button className="btn btn-primary btn-terminar"><Link className="terminar" to={"/cart"}>Terminar compra</Link></button>
        </div>
      </div>
    </div>
  )
}
