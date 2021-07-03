import { ItemCount } from "./ItemCount";
import { ItemDetailContainer } from "../../../ItemDetailContainer";
import { Link } from "react-router-dom";

export const Item = ({producto}) => {
    if (producto.title && producto.price) {
        return (
            <div >
                <div className="card" style= {{width: "15rem"}} >
                    {//DETALLE PARA PRODUCTOS PROPIOS
                    /* <img src={productos.pictureURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{productos.title}</h5>
                        <p className="card-text">{productos.description}</p>
                        <h5 className="card-title">$ {productos.price}</h5>
                        <ItemCount stock={productos.stock} initial="1" /> */}
                    <img src={producto.thumbnail} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">{producto.title}</p>
                        <h5 className="card-title">$ {producto.price}</h5>
                        <ItemCount stock={producto.available_quantity} initial="1" />
                        <button><Link to={`/detalle/${producto.id}`}>Ver detalle</Link></button>  
                    </div>
                </div>
            </div>
        )
    }
}