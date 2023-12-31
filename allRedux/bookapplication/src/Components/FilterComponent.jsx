import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { getBook } from "../Redux/App/Action";

export default function FilterComponent() {
    const [searchParams,setSearchParams] = useSearchParams();
    const [category,setCategory] = useState(searchParams.getAll("category")||[]);

    const [sortBy,setSortBy]= useState(searchParams.get("sortBy")||"");
    const handleSortComp=(e)=>{
        // console.log(e.target.value)
        setSortBy(e.target.value)
    }

    const handleFilterComponent = (e)=>{
        // console.log(e.target.value)
        // setSearchParams.param(null)
        const newCategory = [...category]

        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value),1)            
        }
        else{
            newCategory.push(e.target.value);
        }
        // console.log(category)
        setCategory(newCategory)
    }


    useEffect(()=>{

       const params = {};
        category&&(params.category = category);
        sortBy&&(params.sortBy = sortBy);

         setSearchParams(params)        
    },[category,sortBy])



    return (
        <div style={{ width: "50%", border: "2px solid red" }}>

{
    // console.log(searchPara/ms)
    // console.log(sortBy)
    // console.log(params,";asdfjl;")

    // console.log(searchParams.getAll("category"))
}
            <div>
                <div>
                    <input type="checkbox" checked={category.includes("Novel")} value="Novel"  onChange={handleFilterComponent} />
                    <label > Novel</label>
                </div>
                <div>
                    <input type="checkbox" checked={category.includes("Science_Fiction")} onChange={handleFilterComponent} value="Science_Fiction" />
                    <label > Science_Fiction</label>
                </div>
                <div>
                    <input type="checkbox" checked={category.includes("Thriller")} onChange={handleFilterComponent} value="Thriller"/>
                    <label > Thriller</label>
                </div>
                <div>
                    <input type="checkbox" checked={category.includes("Motivational")}onChange={handleFilterComponent} value="Motivational" />
                    <label > Motivational</label>
                </div>
            </div>

            <div>

                <h3>Sort Comp</h3>

                <div onChange={handleSortComp}>
                    <input type="radio" value="asc" name="sortBy" defaultChecked={sortBy==="asc"} />
                    <label >Ascending</label>
                    <br />
                    <input type="radio" value="desc" name="sortBy" defaultChecked={sortBy==="desc"}/>
                    <label >Descending</label>
                    <br/>
                    <input type="radio" value="" name="sortBy" defaultChecked={sortBy===""}/>
                    <label >None</label>

                </div>

            </div>


        </div>
    )
}