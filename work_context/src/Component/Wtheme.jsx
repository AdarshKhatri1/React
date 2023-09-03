import { useContext } from "react"
import { Themecontext } from "../Context/Themecontext"

export default function (){

    
    const styles = {
        dark:{
            color:"white",
            background:"black"
        },
        light:{
            color:"black",
            background:"white"
        }
    }
    const value = useContext(Themecontext)
    const[theme, toggleTheme]= value
    
    console.log(theme)

    return(
        <div>
                i am Wtheme

                <div>

                    <h1 style={{color:"white",background:"black"}} >Theme Changing</h1>
                    <h1 style={styles[theme]} >Theme Changing</h1>
                    <button onClick={toggleTheme}>Toggle Theme</button>

                </div>
        </div>
    )
}