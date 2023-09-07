import { Actions } from "./Hgithub_action";

const { createContext, useReducer } = require("react");

const initialState = {
    isLoading:true,
    isError:false,
    isSuccess:false,
    data:[]
}



 function reducer(state,action){
    // console.log(action)

    switch(action.type){

        case (Actions.Github_is_loading):{
            return{

                ...state,isLoading:true
            }
        }
        case (Actions.Github_is_success):{
            return{
                ...state,isLoading:false,data:action.payload
            }
        }
        case(Actions.Github_is_error):{
            return{
                ...state,isError:true,isLoading:false
            }
        }
        default:return state;
    }

}
export const Github_context = createContext();

export function Hgithub_context_Provider({children}){
    const [state,dispatch]= useReducer(reducer,initialState)
    return(
        <Github_context.Provider value={[state,dispatch]}>
            {children}
        </Github_context.Provider>
    )
}
