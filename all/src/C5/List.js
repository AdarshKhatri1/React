
export default function List({id,quantity,handleQuantity}){


    return (
        <div id="but">

            <button disabled={quantity==1} onClick={()=>{
                handleQuantity(-1,id)
            }}>-</button>
            <p>{quantity}</p>
            <button onClick={()=>(
                handleQuantity(1,id)
            )}>+</button>
        </div>
    )
}