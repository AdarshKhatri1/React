import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Filter(){
    const [searchParams,setSearchParams] = useSearchParams();
    const [sortBy,setSortBy] = useState(searchParams.get("sortBy")||"")
    const [category,setCategory] = useState(searchParams.getAll("category")||[]);

    // console.log(searchParams)

    const handleChange=(e)=>{
        // console.log("Enter")
        const val = e.target.value
        const newCategory = [...category];

        !newCategory.includes(val)?setCategory(()=>{
            newCategory.push(val)
            return newCategory;
        }):setCategory(()=>{
            newCategory.splice(newCategory.indexOf(val),1);
            return newCategory;
        })
        
    }

    const handleSortChange=(e)=>{
        console.log(e.target.value)
        setSortBy(e.target.value)
    }

    useEffect(()=>{
        const params = {}
        category && (params.category=category)
        sortBy && (params.sortBy=sortBy)

        setSearchParams(params)
    },[category,sortBy])

    return(
        <div style={{width:"30%",border:"1px solid red"}}>
{/* {console.log(sortBy,"sore")} */}
            <h3>Filter Component</h3>

            <div style={{textAlign:"start"}}>
                <div>
                    <input checked={category.includes("Novel")} type="checkbox" value="Novel" onChange={handleChange}/>
                    <label>Novel</label>
                </div>
                <div>
                    <input checked={category.includes("Science_Fiction")} type="checkbox" value="Science_Fiction" onChange={handleChange}/>
                    <label>Science_Fiction</label>
                </div>
                <div>
                    <input checked={category.includes("Thriller")} type="checkbox" value="Thriller" onChange={handleChange}/>
                    <label>Thriller</label>
                </div>
                <div>
                    <input checked={category.includes("Motivational")} type="checkbox" value="Motivational" onChange={handleChange}/>
                    <label>Motivational</label>
                </div>
            </div>

                <h3>Sort Component</h3>
                <div onChange={handleSortChange}>

                    <input name="sortBy" type="radio" value="asc" defaultChecked={sortBy==="asc"} /> 
                    <label>Ascending</label>
                    <br/>
                    <input name="sortBy" type="radio" value="desc" defaultChecked={sortBy==="desc"}/> 
                    <label>Desending</label>

                </div>

        </div>
    )
}