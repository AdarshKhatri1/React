import "./own.css"

export default function Label({ name, price }) {

    return <>
        <div>{name}</div>
        <div>₹ {price}</div>

    </>
}