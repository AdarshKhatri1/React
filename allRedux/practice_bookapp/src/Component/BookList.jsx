import { Link } from "react-router-dom"
import styled from "styled-components"

export default function BookList({Item}){
// console.log(Item)
    return(
        <Div>

            <div>
                <img src={Item.img}/>
            </div>
            <div>author:{Item.author}</div>
            <div>Category:{Item.category}</div>
            <div>no_of_chap:{Item.no_of_chapters}</div>
            <div>Release Year:- {Item.release_year}</div>
            <div> <Link to = {`/books/${Item.id}/edit`}><button>Edit</button></Link></div>

        </Div>
    )
}

const Div = styled.div`

border:1px solid blue;

 img{
    width:100%;
    height:50%
    
}

`