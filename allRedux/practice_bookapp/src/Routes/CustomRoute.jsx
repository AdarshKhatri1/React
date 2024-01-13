import { Route, Routes } from "react-router-dom";
import Books from "../Pages/Books";
import SingleBook from "../Pages/SingleBook";
import EditBook from "../Pages/EditBook";
import Login from "../Pages/Login";
import PrivateFeild from "../Component/PrivateFeild";


export default function CustomRoute() {


    return (
        <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books/:id" element={<SingleBook />} />

            
            {/* <Route path="/books/:id/edit" element={<PrivateFeild><EditBook /></PrivateFeild>} /> */}
            <Route path="/books/:id/edit" element={<EditBook />} />
    
            
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    )
}