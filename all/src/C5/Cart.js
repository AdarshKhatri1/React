import { useCallback, useState } from "react";
import Components from "./Components";

const list = [

    {
        id:1,
        label:"Noodels",
        quantity:1,
        Price:30,

    },{
        id:2,
        label:"Biriyani",
        quantity:1,
        Price:90,

    },{
        id:3,
        label:"Chips",
        quantity:1,
        Price:10,

    },
]

export default function Cart(){
    const[data,setData] = useState(list)


    function handleQuantity(val,id){
        console.log(id,val)

        const updateData = data.map((item)=>(
            item.id===id?{...item,quantity:item.quantity+val}:item
        ))

        setData(updateData)
        
    }

    function calculateTotal(data){
        // console.log(data,data[0].price)
        // console.log(data[0].quantity)
        // for(var i = 0;i<data.length;i++){

        //     console.log(data[i])
        //    }
        return data.reduce((acc,c)=>(
                acc+(c.quantity*c.Price)
        ),0)
        
        
    }

    return(
        <div>
            {console.log(calculateTotal(data))}
           {
            data.map((item)=>(
                <Components id={item.id} label={item.label} price={item.Price} quantity={item.quantity} handleQuantity={handleQuantity} />                               
            ))
           }

           <h1>Total:- {calculateTotal(data)}</h1>
        </div>
    )

}