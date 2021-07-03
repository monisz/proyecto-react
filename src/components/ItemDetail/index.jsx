import { ItemCount } from "../../containers/ItemListContainer/ItemList/Item/ItemCount"
import './styles.css';

export const ItemDetail = ({item}) => {
  console.log(item)
  return (
      <div className="detalle-producto">
          <img src={item.thumbnail} className="detalle-imagen" alt="..." />
          <div className="detalle-info">
            <h5 className="detalle-title">{item.title}</h5>
            <p className="detalle-text">{item.description || "Descripción del producto"}</p>
            <h5 className="detalle-precio">$ {item.price}</h5>
            <ItemCount stock={item.available_quantity} initial="1" />
          </div>
      </div>
    )
}