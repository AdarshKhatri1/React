import { useContext, useState } from "react"
import { Appcontext } from "../Context/AppContext"
import { useNavigate } from "react-router-dom";

export default function Page1(){
    const {data,setData,handleChange} = useContext(Appcontext)
    const navigate = useNavigate()
    const [name,setName] = useState(data.name||"");
    const [price,setPrice] = useState(data.price||"");
    // const [name,setName] = useState(data.name||"");
    // const [price,setPrice] = useState(data.price||"");

    // console.log(name && price,"asdlfj")
    // console.log(!data.name && !data.price,"asdlfj")

    function handleSubmit(e){
        e.preventDefault()
        console.log("handleSubmit")
        handleChange(name,price)
        navigate("/page2")
    }

    function handleGoto(){
        navigate("/page2")
    }

    return(
        <div>
            page 1

            {name}
            {price}

            <form onSubmit={handleSubmit}>

                <div>
                    <input value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }}  placeholder="product name"/>
                </div>
                <div>
                    <input value={price} type="number"  onChange={(e)=>{
                       setPrice(e.target.value)
                    }}  placeholder="product price"/>
                </div>
                <div>
                    <input disabled={!name || !price} type="submit" value={"Save"}/> 
                    {/* || or operator ka use kiye taki jab tak sara data fill na ho jaye disable rahe */}
                </div>
            </form>
            <div>
                <button disabled={!data.name && !data.price} onClick={handleGoto} > Go to 2nd page</button>
            </div>
        </div>
    )
}