import styled from "styled-components";
import BookList from "../Components/BookList";
import FilterComponent from "../Components/FilterComponent";

export default function Books(){
    
    

    return(
        <Div>
            
            <FilterComponent/>
            <BookList/>
        </Div>
       
    )
}

const Div = styled.div`
    color:red;
    display:flex;
    

    `