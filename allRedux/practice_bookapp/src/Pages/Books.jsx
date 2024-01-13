import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Get_Book } from "../Redux/AppRedux/Actiontype";
import BookList from "../Component/BookList";
import styled from "styled-components";
import Filter from "../Component/Filter";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function Books() {


    const books = useSelector(state => state.AppReducer.books);
    const dispatch = useDispatch();
    const [searchParams,setSearchParams]= useSearchParams();
    const category = searchParams.getAll("category")||[];
    const sortBy = searchParams.get("sortBy")||"";

    const location = useLocation();
    // console.log(location)
    
    

    useEffect(() => {
        // console.log("inside useeffect")
        const param = {}
        category && (param.category= category);
        sortBy&& (param._sort="release_year")
        sortBy && (param._order=sortBy)

        dispatch(Get_Book(param))


    },[location.search])

    return (
        <div style={{display:"flex"}}>
            {/* {console.log(category)} */}
            <Filter/>
            <Div>
                {
                    books.map((item) => {
                        return <BookList key={item.id} Item={item} />
                    })
                }
            </Div>

        </div>
    )
}

const Div = styled.div`

display:grid;
border:1px solid red;
grid-gap:10px;
// grid-template-rows:repeat(3,200px);
grid-template-columns:repeat(1,200px);


`