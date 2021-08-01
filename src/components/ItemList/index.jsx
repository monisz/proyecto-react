import { Item } from "../Item";

export const ItemList = ({productos}) => {
    console.log(productos)

    return (
        <div className="items">
            {productos.map(element => {
                return (
                    <div key={element.id} > 
                        <Item producto={element} />
                    </div>
                )
            })}
        </div>
    )
}