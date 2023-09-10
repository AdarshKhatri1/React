import { Route, Routes } from "react-router-dom";
import Cabout from "./Cabout";
import Chome from "./Chome";
import Ccontact from "./Ccontact";
import Cusers from "./Cusers";
import Cuser_Page from "./CuserPage";
import Cfetch from "./Cfetch";
import Login from "../../7_July_Classwork/C1/Login";
import User2 from "../../7_July_Classwork/C2/User2";
import User_W_H_V from "../../7_July_Classwork/C1/User_With_Hardcore_value";
import User_W_C_V from "../../7_July_Classwork/C1/User_with_Context_value";
import Login2 from "../../7_July_Classwork/C2/Login2";
import User2_single_page from "../../7_July_Classwork/C2/User2_single_page";
import PrivateRoute from "../../7_July_Classwork/C2/Privateroute";

export default function Allroute() {

    return (

        <div>
            <div> Here you will see response in blue box </div>
            <div style={{ border: "5px solid blue" }}>
                <Routes >
                    <Route path="/" element={<Chome />} >Home</Route>
                    <Route path="/about" element={<Cabout />} >about</Route>
                    <Route path="/contact" element={<Ccontact />} >contact</Route>
                    <Route path="/user" element={<Cusers />} >user</Route>
                    <Route path="/user/:id" element={<Cuser_Page />} >user Single Page</Route>
                    <Route path="/fetch" element={<Cfetch />} >fetch page</Route>
                    <Route path="/login" element={<Login />}>Login page</Route>
                    <Route path="/User_W_H_V" element={<User_W_H_V />}>user with hard core value </Route>
                    <Route path="/User_W_C_V" element={<User_W_C_V />}>user with context value </Route>
                    <Route path="/Login2" element={<Login2 />}>user with context value </Route>
                    <Route path="/User2" element={
                        <PrivateRoute>
                            <User2 />
                        </PrivateRoute>
                    }>user with context value </Route>
                    <Route path="/User2_single_page/:id" element={

                        <PrivateRoute>
                            <User2_single_page />
                        </PrivateRoute>
                    }>user with context value </Route>
                </Routes>
            </div>

        </div>
    )
}