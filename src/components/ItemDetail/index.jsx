import { ItemCount } from "../../containers/ItemListContainer/ItemList/Item/ItemCount"
import './styles.css';
import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({item}) => {
  console.log(item)
  const [pedido, setPedido] = useState(false);
  console.log(pedido)
  
  function onAdd (contador) {
    setPedido(true)
    console.log(contador)
  }

  
  return (
    <div className="detalle">
      <div className="detalle-producto">
        <img src={item.thumbnail} className="detalle-imagen" alt="..." />
        <div className="detalle-info">
          <h5 className="detalle-title">{item.title}</h5>
          <p className="detalle-text">{item.description || "Descripción del producto"}</p>
          <h5 className="detalle-precio">$ {item.price}</h5>
          {!pedido ? <ItemCount stock={item.available_quantity} initial="1" onAdd={onAdd}/>
                    : <button className="btn btn-primary btn-terminar"><Link className="terminar" to={"/cart"}>Terminar compra</Link></button>}
        </div>
      </div>
    </div>
  )
}
