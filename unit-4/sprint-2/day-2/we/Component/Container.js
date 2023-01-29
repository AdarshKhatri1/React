import Item from "./Item";
import React from "react";
import Total from "./Total";
import "./own.css"

export default function Container() {

    const item = [
        {
            id: 1,
            Name: "Cheese",
            price: 10,
            quantity: 1
        },
        {
            id: 2,
            Name: "Burger",
            price: 30,
            quantity: 1
        },
        {
            id: 3,
            Name: "Pasta",
            price: 90,
            quantity: 1
        }
    ]

    const [datas, setData] = React.useState(item);

    function sum(prod) {

      return prod.reduce((acc, c) => (
            acc + (c.quantity * c.price)
       ), 0)
  
    }

    function handleChange(id,amount){

     const updatedData =    datas.map((item)=>{
                if(item.id===id){
                  return  {...item,quantity:item.quantity+amount}
                }else{
                  return  item
                }
            })

            setData(updatedData)
    }


    return <div id="container">
       

        {
            datas.map((data) => (
                <Item key={data.id} id={data.id} name={data.Name} price={data.price} quantity={data.quantity}  handleChange= {handleChange}/>

            ))
            
        }

        <Total Totalprice={sum(datas)}/>



    </div>

}