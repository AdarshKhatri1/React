import { legacy_createStore,applyMiddleware} from "redux"
import { Reducer } from "./Reducer"

const logger = state=>next=>action=>{
    console.log("action", action, "funcition is sthie",typeof action)

    // console.log(state)
    if(typeof (action) === "function")
        return action(state.dispatch)

return next(action)
}
export const Store = legacy_createStore(Reducer,applyMiddleware(logger))