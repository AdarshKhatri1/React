import { useEffect, useRef, useState } from "react"


export default function Debounce() {
    const [val, setValue] = useState(0);
    let id =useRef() ;

    const deb = () => {

        id.current && clearTimeout(id.current);
        id.current = setTimeout(() => {
            // setValue(val+1)
            setValue(l=>l+1)

        }, 1000);

    }

    useEffect(() => {

        window.addEventListener("scroll", () => {
            // setValue(prev=>prev+1)
            deb()
            // return deb()
        })


        return window.removeEventListener("scroll", () => {
            // setValue(prev=>prev+1)

            deb()

        })

    })

    return (
        <div style={{ height: "1000vh", background: "red" }}>
            <div style={{ position: "sticky", top: "20px" }}>

                <h1 > Debounce</h1>
                <div> {val}</div>

            </div>
        </div>
    )
}