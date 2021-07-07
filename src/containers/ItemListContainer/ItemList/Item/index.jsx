import { Link } from "react-router-dom";
import "./styles.css";

export const Item = ({ producto }) => {
    if (producto.title && producto.price) {
        return (
            <div className="card item">
                <div className="contenedor-imagen">
                    <img src={producto.thumbnail} className="card-img-top imagen" alt="imagen ML" />
                </div>
                <div className="card-body cuerpo">
                    <h6 className="card-title titulo">{producto.title}</h6>
                    <h5 className="card-title precio">$ {producto.price}</h5>
                    <button className="btn btn-danger">
                        <Link className="btn-verDetalle" 
                        to={`/detalle/${producto.id}`}>Ver detalle</Link>
                    </button>
                </div>
            </div>
        )
    }
} 
