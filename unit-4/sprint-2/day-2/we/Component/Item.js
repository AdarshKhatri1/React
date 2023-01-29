import Button from "./Button"
import Label from "./Label"
import "./own.css"

export default function Item({name,price,id,quantity,handleChange}){

  return  <div id="cart">

        <Label name = {name} price = {price}/>
        <div id ="cart2">
            <Button quantity={quantity} handlechange={()=>handleChange(id,-1)}  sign= "-"/>
            <h2>{quantity}</h2>
            <Button  handlechange={()=>handleChange(id,+1) } sign = "+"/>
        </div>
    </div>
    
}