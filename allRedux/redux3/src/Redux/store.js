import {combineReducers, legacy_createStore,applyMiddleware} from "redux";
import {reducer as appReducer} from "./AppReducer/reducer"
import {reducer as authReducer} from "./AuthReducer/reducer"

const root_reducer = combineReducers({appReducer,authReducer})

const logger1 = (store)=>(next)=>(action)=>{

    // console.log(store,"Store")
    // console.log(next,"Next")
    // console.log(action,"action")
    console.log("Inside 1-a");
    // next(action)
    const temp = next(action)
    console.log("After 1-b")
    return temp;
}

const logger2= (store)=>(next)=>(action)=>{
    console.log("Inside 2-a");
    const temp = next(action)
    console.log("After 2-b")
    return temp;
}

const store = legacy_createStore(root_reducer,applyMiddleware(logger1,logger2));
// const store = legacy_createStore(appReducer,applyMiddleware(logger1,logger2));


export{store};