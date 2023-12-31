import useCustomhook from "./useCustomhook"


export default function Third(){

    const text= useCustomhook();

    return (
        <div>
            <h1> Hello Three</h1>
            {text && <p>{text}</p>}
        </div>
    )
}