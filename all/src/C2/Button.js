import { CSSProperties } from "../index.css";



export default function Button({handleClick}){

    return(
        <button onClick={handleClick} >Clickme</button>
    )

}