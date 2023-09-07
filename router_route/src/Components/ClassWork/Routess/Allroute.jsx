import { Route, Routes } from "react-router-dom";
import Cabout from "./Cabout";
import Chome from "./Chome";
import Ccontact from "./Ccontact";
import Cusers from "./Cusers";
import Cuser_Page from "./CuserPage";
import Cfetch from "./Cfetch";

export default function Allroute(){

    return(

        <div>
            <div> Here you will see response in blue box </div>
            <div style={{border:"5px solid blue"}}>
            <Routes >
                <Route path="/" element={<Chome />} >Home</Route>
                <Route path="/about" element={<Cabout />} >about</Route>
                <Route path="/contact" element={<Ccontact />} >contact</Route>
                <Route path="/user" element={<Cusers />} >user</Route>
                <Route path="/user/:id" element={<Cuser_Page />} >userSingePage</Route>
                <Route path="/fetch" element={<Cfetch />} >userSingePage</Route>
                
            </Routes>
            </div>
           
        </div>
    )
}