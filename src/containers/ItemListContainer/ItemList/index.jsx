import { Item } from "./Item";

export const ItemList = ({carrito, productos}) => {
    console.log(productos)
    console.log(carrito)
    return (
        <div className="items">
            {productos.map(element => {
                return (
                    <spam key={element.id} > 
                        <Item producto={element} carrito={carrito} />
                    </spam>
                )
            })}
        </div>
    )
}