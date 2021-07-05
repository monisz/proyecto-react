import { ItemCount } from "../../containers/ItemListContainer/ItemList/Item/ItemCount"
import './styles.css';

export const ItemDetail = ({item}) => {
  console.log(item)
  return (
    <div className="detalle">
      <div className="detalle-producto">
        <img src={item.thumbnail} className="detalle-imagen" alt="..." />
        <div className="detalle-info">
          <h5 className="detalle-title">{item.title}</h5>
          <p className="detalle-text">{item.description || "Descripción del producto"}</p>
          <h5 className="detalle-precio">$ {item.price}</h5>
          <ItemCount stock={item.available_quantity} initial="1" />
          <div className="boton-agregar">
            <button className="btn btn-primary boton-agregar" onClick={() => {
              /* {setCarrito([...carrito, {id: 1, name: 'Lápiz labial'}])} */
              console.log("esperando que se pueda resolver el carrito")
              }}>Agregar al carrito</button>
          <div/>
        </div>
      </div>
    </div>
    </div>
  )
}
