//Passing props in custom hook

import useCustomhook from "./useCustomhook";
import useCustomhook1 from "./useCustomhook1";

export default function Four(){

    const [text] = useCustomhook1("Four",2000);


    return(
        <div>
            
            <h1> I am Four</h1>
            {text&& <p>{text}</p>}

        </div>
    )
}