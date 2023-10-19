
import { createStore } from "redux";
//fn is called reducer (just a function don't worry with reducer )
const fn = (currentState,action)=>{

    if(action?.type === "INCREMENT_AMOUNT"){
        return{
            ...currentState,
            count:currentState.count+1
        }
    }
    else if(action?.type === "DECREMENT_AMOUNT"){
        return{
            ...currentState,
            count:currentState.count-1
        }
    }
    else{
        return currentState;
    }
}



export const store = createStore(fn,{count:1});
store.subscribe(()=>{
    console.log("store has got updated")
    console.log(store.state)
})



store.dispatch({type:"INCREMENT_AMOUNT"})
store.dispatch({type:"INCREMENT_AMOUNT"})
store.dispatch({type:"INCREMENT_AMOUNT"})
store.dispatch({type:"INCREMENT_AMOUNT"})
store.dispatch({type:"DECREMENT_AMOUNT"})

