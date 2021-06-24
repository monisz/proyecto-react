import { ItemCount } from "./ItemCount";

export const Item = ({productos, carrito}) => {
    console.log(productos, "en item solito");
    console.log(carrito);
    if (productos.title && productos.price) {
        return (
            <div >
                <div>
                    <img src={productos.pictureURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{productos.title}</h5>
                        <p className="card-text">{productos.description}</p>
                        <h5 className="card-title">$ {productos.price}</h5>
                        <ItemCount stock={productos.stock} initial="1" />
                    </div>
                </div>
            </div>
        )
    }
}