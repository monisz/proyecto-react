import { Item } from "../Item";

export const ItemList = ({productos}) => {
    
    
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