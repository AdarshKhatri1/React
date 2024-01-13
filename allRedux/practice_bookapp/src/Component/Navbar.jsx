import { Link } from "react-router-dom";
import styled from "styled-components";



export default function Navbar() {

    return (
        <Div>
            <div>
                <Link className="link" to="/" >Books</Link>
            </div>
            <div>
                <Link to="/books/:id">SingleBook</Link>
            </div>
            <div>
                <Link to="/books/:id/edit">EditBook</Link>
            </div>
            <div>
                <Link to="/login" >Login</Link>
            </div>
        </Div>
    )
}

const Div = styled.div`
display:flex;
gap:1rem;
`