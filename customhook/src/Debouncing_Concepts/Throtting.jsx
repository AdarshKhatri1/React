import { useEffect, useRef, useState } from "react"


export default function Throtting() {
    const [val, setValue] = useState(0);
    let id =useRef(false) ;

    const throt = () => {

        
        if(!id.current){
            id.current= true
                setTimeout(() => {
                id.current=false
                setValue(l=>l+1)                
            }, 1000);
        }

    }

    useEffect(() => {

        window.addEventListener("scroll", () => {
            // setValue(prev=>prev+1)
            throt()
            // return deb()
        })


        return window.removeEventListener("scroll", () => {
            // setValue(prev=>prev+1)

            throt()

        })

    })

    return (
        <div style={{ height: "1000vh", background: "red" }}>
            <div style={{ position: "sticky", top: "20px" }}>

                <h1 > Throtting</h1>
                <div> {val}</div>

            </div>
        </div>
    )
}