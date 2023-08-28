import List from "./List"
import { CSSProperties } from "./index.css"

export default function Components({ id, label="tomato",price=1, quantity=1, handleQuantity}){


    return (
        <div id="com" >
   
                <h3 id="label" >{label}</h3>
                <p>₹ {price}</p>
                <List id={id} quantity={quantity}  handleQuantity={handleQuantity} />

        </div>
    )
}