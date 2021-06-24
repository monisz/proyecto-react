import { Item } from "./Item";

export const ItemList = ({carrito, productos}) => {
    console.log(productos)
    console.log(carrito)
    return (
        <div>
            {productos.map(element => {
                return <Item productos={element} carrito={carrito} key={element.id} />
            })
            }
        </div>
    )
}