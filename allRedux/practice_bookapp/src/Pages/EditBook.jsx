import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { Get_Book, Patch_Book } from "../Redux/AppRedux/Actiontype";

export default function EditBook(){

    const book = useSelector(state=>state.AppReducer.books)
    const [chapter,setChapter] = useState();
    const [release,setRelease] = useState();
    const navigate = useNavigate()
    const dispatch = useDispatch()
     
       

    const id = useParams();
    // console.log(id)


    const handleUpdate=(Id)=>{
        const id = +Id.id
        const payload = {
            no_of_chapters:chapter,
            release_year:release
        }
        console.log(payload)
        dispatch(Patch_Book(id,payload)).then(()=>{
            navigate("/")
        })
    }

    useEffect(()=>{
            if(book.length==0){
            dispatch(Get_Book())
            }
    },[])



    useEffect(()=>{

        if(id){
            
            const bookById= book.find((book)=> book.id===1)
            // console.log(bookById,"d")
            // bookById && console.log("changers")
            bookById && setChapter(bookById.no_of_chapters)
            bookById && setRelease(bookById.release_year)
        }

    },[book])

    return (
        <div>
            {/* {console.log(chapter,"sdf")} */}
            
            <div>EditBook Page</div>


            <div>
                <input key={1} value={chapter} onChange={(e)=>{
                    setChapter(e.target.value)
                }} />
                <label >change number of chapter</label>
            </div>
            <div>
                <input key={2} onChange={(e)=>{
                    setRelease(e.target.value)
                }} value={release} />
                <label >change number of Release Year</label>
            </div>
            <div>
                <button onClick={()=>{
                    handleUpdate(id)
                }} > Updates</button>
            </div>

            
            
            </div>
    )
}