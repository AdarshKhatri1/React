import { Link } from "react-router-dom";

export default function BookCard({data}){

    return (
        <div style={{border:"1px solid grey"}}>
            <img style={{width:"100%"}} src={data.img} alt="book"/>
            <div>{data.book_name}</div>
            <div>{data.category}</div>
            <div>noc:{data.no_of_chapters}</div>
            <div style={{display:"flex"}}>
                <div style={{flex:1, border:"1px solid red",background:"grey"}}>

                {data.release_year}
                </div>
                {/* {console.log(data.id)} */}
                <Link to={`/books/${data.id}/edit`}>
                <button>Edit</button>
                </Link>
                
                </div>
        </div>
    )
}