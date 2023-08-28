import { CSSProperties } from "../index.css";
import Button from "./Button";

export default function Condition(){

    const cond = true;
    const hidename= true;


    return (

        <div className="jj">

            {!cond?"Details are hidden":<img className="im" src="https://stat4.bollywoodhungama.in/wp-content/uploads/2019/06/Box-Office-Ajay-Devgn-is-a-lambi-race-ka-ghoda-and-here-is-the-proof.jpg" alt="img" />}

            {

                !hidename?<h1>names are hidden</h1>:<h1>Ajay devgan</h1>
            }



        </div>

    )
}