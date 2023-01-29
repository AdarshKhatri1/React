
import "./own.css"
export default function Button({handlechange,sign,quantity}){

    return <button disabled ={quantity===0} id="button" onClick={handlechange}>{sign}</button>
    
}