import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBook, postBook } from "../Redux/App/Action";

export default function EditBook(){

    // sir ka id 
    const {id} = useParams()


    const params = useParams();
    const book = useSelector(state=>state.AppReducer.books)
    const [bookname,setBookName] = useState("")
    const [noc,setnoc] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
   

    const findBook =(p)=>{

        book.map((data)=>{
            if(data.id=== +p.id){
                setBookName(data.book_name);
                setnoc(data.no_of_chapters)
            }
        })
    }
    
    const handleUpdate=(b,n,p)=>{
const  id=+p.id
        const payload = {
           
            book_name:bookname,
            no_of_chapters:noc,
        }

        dispatch(postBook(id,payload)).then((r)=>{
            console.log(r.payload);

            // navigate("/");
            
        })
        .catch((e)=>{
            console.log(e)
        })

    }

    
    // console.log(book)

    // console.log(+params.id)

    useEffect(()=>{
        // console.log("useeffecrt")
        // dispatch(getBook())

        // sir ka
        if(book.length == 0){
            dispatch(getBook())
        }
        
    },[book.length, dispatch])


    useEffect(()=>{

        // findBook(params);

        // sir kaa
        
        if(id){
            console.log(id)
            
            // const bookById = book
            const bookById = book.find((book)=> book.id===Number(id))
            // console.log(bookById,"dlfj")
            bookById&& setBookName(bookById.book_name)
            bookById&& setnoc(bookById.no_of_chapters)
        }
    },[book])

    return(
        <div>
           Edit Books

           <div>
            <input key={"bookname"} value={bookname} onChange={(e)=>{setBookName(e.target.value)}} placeholder="book_name"/>
            <label >Enter book_name</label>
           </div>

           <div>
            <input key = {"noc"} value={noc} onChange={(e)=>{setnoc(e.target.value)}} placeholder="no_of_chapters"/>
            <label>Enter no_of_chapters</label>
           </div>
           <div>
            <button onClick={()=>{
                handleUpdate(bookname,noc,params);
            }}>Update</button>
           </div>
        </div>
    )
}