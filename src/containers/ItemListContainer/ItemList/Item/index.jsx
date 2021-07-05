import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import "./styles.css";

export const Item = ({ producto }) => {
    if (producto.title && producto.price) {
        return (
            <div className="card item">
                <div className="contenedor-imagen">
                    <img src={producto.thumbnail} className="card-img-top imagen" alt="imagen ML" />
                </div>
                <div className="card-body">
                    <h6 className="card-title titulo">{producto.title}</h6>
                    <h5 className="card-title">$ {producto.price}</h5>
                    <ItemCount stock={producto.available_quantity} initial="1" />
                    <button className="btn btn-danger ">
                        <Link className="boton-verDetalle" 
                        to={`/detalle/${producto.id}`}>Ver detalle</Link>
                    </button>
                </div>
            </div>
        )
    }
}
