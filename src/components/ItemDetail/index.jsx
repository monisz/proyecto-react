import { ItemCount } from "../ItemCount";
import './styles.css';
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item}) => {
  const context = useContext(CartContext);
  const [stockDisponible, setStockDisponible] = useState(0);
  
  useEffect ( () => {
    setStockDisponible(item.stock)
    if (context.carrito.length > 0) {
      context.carrito.forEach((elemento) => {
        if (elemento.item.id === item.id) {
          setStockDisponible(item.stock - elemento.cantidad)
        } 
      })
    }
  }, [item, context.carrito]);

  function onAdd (contador) {
    const cantidad = Number(contador);
    context.addItem({item, cantidad});
  }

  return (
    <div className="detalle">
      <div className="detalle-producto">
        <img src={item.img} className="detalle-imagen" alt="..." />
        <div className="detalle-info">
          <h5 className="detalle-title">{item.name}</h5>
          <p className="detalle-text">{item.description || "Descripción del producto"}</p>
          <h5 className="detalle-precio">$ {item.price}</h5>
          <ItemCount stock={stockDisponible} initial="1" onAdd={onAdd} from={"ItemDetail"}/>
          {<p>Stock disponible: {stockDisponible}</p>}
        </div>
        <div className="botones-detalle">
          <button className="btn btn-danger btn-detail">
            <Link className="boton" to={"/"}>Seguir comprando</Link>
          </button>
          <button className="btn btn-danger btn-detail">
            <Link className="boton" to={"/cart"}>Ir al carrito</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
