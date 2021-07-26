import { ItemCount } from "../ItemCount"
import './styles.css';
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item}) => {
  const context = useContext(CartContext);
  const [nuevoStock, setNuevoStock] = useState(0);
  
  useEffect ( () => {
    console.log("entra al useEffect")
    console.log("setea con stock del item")
    setNuevoStock(item.stock)
    if (context.carrito.length > 0) {
      console.log("entra al hay algo en carrito");
      context.carrito.forEach((elemento) => {
        if (elemento.item.id === item.id) {
          console.log("entra al id igual") 
          setNuevoStock(item.stock - elemento.cantidad) 
          console.log("setea son stock - cantidad del carrito")
        } 
      })
    }
  }, [item, context.carrito]);

  function onAdd (contador) {
    console.log(item, contador)
    const cantidad = Number(contador)
    console.log(cantidad)
    context.addItem({item, cantidad})
  }

  return (
    <div className="detalle">
      <div className="detalle-producto">
        <img src={item.img} className="detalle-imagen" alt="..." />
        <div className="detalle-info">
          <h5 className="detalle-title">{item.name}</h5>
          <p className="detalle-text">{item.description || "Descripción del producto"}</p>
          <h5 className="detalle-precio">$ {item.price}</h5>
          <ItemCount stock={nuevoStock} initial="1" onAdd={onAdd}/>
          <p>Stock disponible: {nuevoStock}</p>
        </div>
      <div className="botones-detalle">
          <button className="btn btn-primary btn-detail">
            <Link className="botones-detail" to={"/"}>Seguir comprando</Link>
          </button>
          <button className="btn btn-primary btn-detail">
            <Link className="botones-detail" to={"/cart"}>Terminar compra</Link>
          </button>
      </div>
      </div>
    </div>
  )
}
