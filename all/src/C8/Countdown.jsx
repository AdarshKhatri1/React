import { useEffect, useReducer, useRef, useState } from "react"


export default function Countdown(){

    const[count,setCount] = useState(0);
    const tim = useRef(null);

    function startTimer(){

        if(tim.current!== null) return;

        tim.current= setInterval(() => {
            console.log(count)
            
            setCount(count =>count+1)
        }, 1000);
       

    }
    function stopTimer(){
        clearInterval(tim.current)
        tim.current= null;
    }
    function resetTimer(){
        stopTimer()
        setCount(0)
    }

    useEffect(()=>{
        startTimer()

        return ()=>{
            stopTimer()
        }
    },[])


    return(

        <div>

            <h1>Count is :- {count}</h1>
            <div style={{display:"flex"}}>

                <button onClick={startTimer} >Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>

            </div>

        </div>
    )
}