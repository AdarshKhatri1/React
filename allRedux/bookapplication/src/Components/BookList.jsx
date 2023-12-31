import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBook } from "../Redux/App/Action"
import BookCard from "./BookCard"
import styled from "styled-components"
import { useLocation, useSearchParams } from "react-router-dom"

export default function BookList() {

    const book = useSelector(state => state.AppReducer.books)
    // console.log(book)
    const dispatch = useDispatch()
    const location = useLocation();
    const [searchParams,setSearchParams] = useSearchParams();

    const sortBy = searchParams.get("sortBy")||'';
    const category = searchParams.getAll("category")||'';
    // console.log(location)
    // console.log(book, "book")

    useEffect(() => {
        
        let bookparams={
            params:{
                category :category,
                _sort:sortBy&& "release_year",
                _order:sortBy
            }

                // category && (params.category = category);
                // sortBy && (params.sortBy=sortBy)
            

        };
        

            
        // console.log(bookparams,"params book")

        dispatch(getBook(bookparams))



    }, [location.search])

    return (
        <Wrap >
            {/* {console.log(searchParams.getAll("sortBy"), "ldkjf")} */}
            
            {book.map((item)=>{
                // console.log(item)
                    return <BookCard key={item.id} data={item}/>
           })}
        </Wrap>
    )
}

const Wrap = styled.div`
border:2px solid blue;
width:80%;
color:black;
display:grid;
grid-template-columns: repeat(3,20%);
grid-template-row:repeat(autofit);
overflow:hidden;
grid-gap:20px;
justify-content:center;
 
 `