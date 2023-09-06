import { createContext, useReducer } from "react"
 export const initialState ={
    count:0
}

export const Actions= {
    Increment:"increment",
    Decrement:"decrement"
}
export const  reducer= (state,action)=>{
    switch(action.type){
        case Actions.Increment:
        return{
            ...state,count:state.count+action.payload
        }
        case Actions.Decrement:
            return{
                ...state,count:state.count-action.payload
            }
            default:{
                return state
            }
    }       
}

export const reducerContext = createContext();

export default function ReducerContextProvider({children}){

    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <reducerContext.Provider value={{state,dispatch}} >
            {children}
        </reducerContext.Provider>
    )

}
