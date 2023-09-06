import { createContext, useReducer } from "react"

export const Haction={
    Increase:"Increase",
    Decrease:"Decrease"
}

const initialState= {
    amount:0
}

const Reducer_For_use_reducer = (state,action)=>{

    switch(action.type){

        case Haction.Increase:{
            return {
                ...state, amount:state.amount+action.payload
            }
        }
        case Haction.Decrease:{

            return{
                ...state,amount:state.amount-action.payload
            }

        }
        default:return state
    }

    console.log(action,"action")
    console.log(state)

    return state;
}

export const HReducerContext = createContext();

export default function HReducerContextProvider({children}){
    const[state,dispatch]= useReducer(Reducer_For_use_reducer,initialState);

    // console.log(dispatch)
    return(
        <HReducerContext.Provider value={{state,dispatch}}>        
        {children}
        </HReducerContext.Provider>
    )


}