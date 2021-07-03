import { Item } from "./Item";

export const ItemList = ({carrito, productos}) => {
    console.log(productos)
    console.log(carrito)
    return (
        <div className="items">
            {productos.map(element => {
                return <Item producto={element} carrito={carrito} /* key={element.id} */ />
            })
            }
        </div>
    )
}