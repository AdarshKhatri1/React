import { useEffect, useState } from "react"
import axios from "axios";


const useFetch =(val)=>{
val&& console.log(val)
    const [data,setData] = useState([]);
    const [isloading,setisLoading] = useState(false);
    const [isError,setIsError] = useState(false);
    // console.log(" fetch Enter")

    const fff =()=>{
        console.log("En")
    setisLoading(true)
        return axios.get("https://dummyjson.com/products")
        .then((r)=>{
           setData(r.data.products)
           setisLoading(false)
           setIsError(false)
           
        })
        .catch((e)=>{
            setIsError(true)        
        })
    }

    useEffect(()=>{
        // console.log("use effect in fetch")
fff()
    },[])

    return {data,isError,isloading}
}

export default useFetch;