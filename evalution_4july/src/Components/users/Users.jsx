import { useEffect, useState } from "react";
import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";

function Users() {

  const [data,setData]= useState([]);
  const [totalpage,setTotalpage]=useState(0);
  const [page,setPage] = useState(1);
  const [perpage,setPerpage] =useState(5);
  // const [fobj,setFobj] = useState({})
  const [asc,setAsc] = useState("asc");
  

  function handleAsc(val){
    val?setAsc("asc"):setAsc("desc")
  }

  function handlePerPage(val){
    console.log(val)
    setPerpage(val)
  }

  function fetchData(obj){
   
     fakeFetch(obj).then(
    (res)=>{
      console.log(res,"hell0")
      setTotalpage(res.totalPages)
      return setData(res.data)
     
    }
   )
  
  }

  function paginationSet(val){
    console.log("pagination set")

    setPage(val)


  }

  // function fakeFetch({ page = 1, limit = 5, orderBy = "asc" }) {



  useEffect(()=>(
    fetchData({page, limit:perpage, orderBy:asc})
  ),[page,perpage,asc])

  return (
    <div>
      <h1> {totalpage}</h1>
      <div data-testid="loading-indicator">...loading</div>
      <div data-testid="error-indicator">Error: Something went wrong</div>

      <button onClick={fetchData}>fetch</button>

      
      {
        data.map((item)=>(
          <UserCard name={item.name} src = {item.avatar} />
        ))
       
      } 

      
    
      <Filters handleperpage={handlePerPage} handleasc={handleAsc}/>
      

      <Pagination  onChange={paginationSet} total={totalpage} current={page} />

      


    </div>
  );
}

export default Users;
