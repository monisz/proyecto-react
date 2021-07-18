import { Item } from "../Item";

export const ItemList = ({productos}) => {
    console.log(productos)

    return (
        <div className="items">
            {productos.map(element => {
                return (
                    <spam key={element.id} > 
                        <Item producto={element} />
                    </spam>
                )
            })}
        </div>
    )
}