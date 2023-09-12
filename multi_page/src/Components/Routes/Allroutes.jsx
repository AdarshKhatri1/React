
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Page1 from "../Pages/Page1"
import Page2 from "../Pages/Page2"



export default function Allroutes(){


    return(
        <div>
           <Routes>

                <Route element={<Home />} path="/" />
                <Route element={<Page1 />} path="/page1" />
                <Route element={<Page2 />} path="/page2" />
                

           </Routes>

           
        </div>
    )
}