
search param ke liye kya kya use kiye hai niche dekhle

user2 me search param ke liye page,text use kiye hai
==========================================================================================================================================
POINTS: - 

 http://localhost:3000/user2?page=1&q=adarsh new tab pe copy karo aur maro dekhna input box automatic adarsh likha jayega

==========================================================================================================================================


==========================================================================================================================================

ADDED SECTION

 const [page,setPage] = useState(searchParams.get("page")||1);
 const [text,setText] = useState(searchParams.get("q")||"");

    
    
    <button disabled={page===1} onClick={()=>(setPage(1))}>1</button>
    <button disabled={page===2} onClick={()=>(setPage(2))}>2</button>
    <br />
    <input  value={text} onChange={(e)=>(
        // console.log(e.target.value)
        setText(e.target.value)
    )} placeholder="Write Something"/>
==========================================================================================================================================





==========================================================================================================================================

SOME CHANGES SECTION

export default function Auth_Context_Provider2({children}){

    const [auth,setAuth] = useState({
        isAuth:true, (((((yaha pe false tha search param ke liye true kiye hai)))))
        token:null
    });


    const [searchParams,setSearchParams] = useSearchParams();
    const [page,setPage] = useState(2);


before   fetch("https://reqres.in/api/users")
after    fetch(`https://reqres.in/api/users?${page}`)


==========================================================================================================================================



