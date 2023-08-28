import React from "react"

const initialData = {

    name: "",
    gender: "",
    role: "",
    mst: true



}

export default function Form() {

    const [data, setData] = React.useState(initialData);

function handleChange(e){
    console.log(e.target.value,e.target.checked)
    const{name,value,type,checked} = e.target;

    const updatedata = type=="checkbox"?checked:value;
    setData({...data,[name]:updatedata})
}


function handleSubmit(e){
    e.preventDefault()
    console.log(data)
    
}


    return (
        <div  >

            <form onSubmit={handleSubmit}>


                <input name="name" value={data.name} type="text" onChange={handleChange} placeholder="name" />
                <div>
                <label>Select Gender</label>
                    <select name="gender"  onChange={handleChange}  >

                        <option  hidden = {true}>Gender</option>
                        <option value="male" >Male</option>
                        <option value="female" >Female</option>

                    </select>
                   
                </div>

                <div>
                <label>Select Role</label>
                    <select name="role" onChange={handleChange} >
                    
                            <option hidden >Role</option>
                            <option value="fsd" >FSD</option>
                            <option value="hsd" >HSD</option>

                    </select>
                </div>

                <div>
                    <input name="mst" checked={data.mst} onChange={handleChange} type="checkbox" />
                    <label>Marriage</label>
                </div>
                <input type="submit" />
            </form>

            <div>
                    <p>name :- {data.name}</p>
                    <p>gender :- {data.gender}</p>
                    <p>role :- {data.role}</p>
                    <p>marriage status :- {data.mst?"yes":"no"}</p>

            </div>
        </div>
    )
}