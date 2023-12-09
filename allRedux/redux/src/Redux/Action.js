import { Add_todo } from "./Actiontype"

export const Add_todo_Creator=payload=>{
    return {
        type:Add_todo,
        payload
    }
}