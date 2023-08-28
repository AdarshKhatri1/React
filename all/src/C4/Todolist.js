import Todoitem from "./Todoitem";

export default function Todolist({data,handleToggle,handleDelete}){


    return (

        <div>

        {
            data.map((item)=>(

                <Todoitem id={item.id} title={item.title} status={item.status} handleToggle={handleToggle} handleDelete={handleDelete} />
            ))
        }

        </div>
    )

}