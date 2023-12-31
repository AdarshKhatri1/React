
import { Link, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Books from "../Pages/Books"
import SingleBook from "../Pages/SingleBook"
import EditBook from "../Pages/EditBook"
import Login from "../Pages/Login"

export default function Navbar() {


  return (
    <Div>

      <Link to="/">Book</Link>
      <Link to="/books/:id">Single Book</Link>
      <Link to="/books/:id/edit">EditBook</Link>
      <Link to="/login">Login</Link>

    </Div>
  )
}

const Div = styled.div`
  color :red;
  
  display:flex;
  gap:20px;

 
  `