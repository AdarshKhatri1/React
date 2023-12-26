import { Actions } from "./Actionobj";
import { Get_Todo_Request_obj } from "./Actions";

const initState ={
    todos:[],
    isLoading :false, 
    isError:false
}

export const Reducer = (oldState= initState, action)=>{
    const {type, payload } = action;
    switch(type){
        case Actions.Get_Todo_Request:{
             return {...oldState, isLoading:true};
        }
        case Actions.Get_Todo_Success:{
                return {...oldState, todos:payload,isLoading:false,isError:false}
        }
        case Actions.Get_Todo_Failure:{
            return {...oldState,isError:true,isLoading:false}
        }

        case Actions.Post_Todo_Request:{
             return {...oldState, isLoading:true};
        }
        case Actions.Post_Todo_Success:{
                return {
                    ...oldState, 
                    todos:[...oldState.todos,payload],
                    isLoading:false,isError:false
                    }
        }
        case Actions.Post_Todo_Failure:{
            return {...oldState,isError:true}
        }

        default:
            return oldState;
    }
}