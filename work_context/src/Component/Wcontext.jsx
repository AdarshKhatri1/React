import { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";


export default function Wcontext(){

    const value = useContext(Appcontext)
    console.log(value,"value")
const [isAuth,toggleAuth]= value;
    return(
        <div>

            <h1> {isAuth?"True":"False"}</h1>
            <button onClick={toggleAuth}>Toggle</button>

        </div>
    )


}