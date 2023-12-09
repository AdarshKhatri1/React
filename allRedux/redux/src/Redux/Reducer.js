import { Add_todo } from "./Actiontype";

const initstate = {
     todos :[
        {
            id:1,
            title:"learn React",
            status:false
        }
     ]
}
const Reducer = (state = initstate, {type,payload})=>{
    switch(type){
        case Add_todo:{
            return {...state,todos:[...state.todos,payload]}
        }
        default :{
            return initstate;
        }
    }
}
export {Reducer}