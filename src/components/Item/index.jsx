import { Link } from "react-router-dom";
import "./styles.css";

export const Item = ({ producto }) => {
    if (producto.name && producto.price) {
        return (
            <div className="card item">
                <div className="contenedor-imagen">
                    <img src={producto.img} className="card-img-top imagen" alt="imagen ML" />
                </div>
                <div className="card-body cuerpo">
                    <h5 className="titulo">{producto.name}</h5>
                    <p className="descripcion">{producto.description}</p>
                    <h5 className="card-title precio">$ {producto.price}</h5>
                    <button className="btn btn-danger ">
                        <Link className="boton" to={`/detalle/${producto.id}`}>Ver detalle</Link>
                    </button>
                </div>
            </div>
        )
    }
} 
