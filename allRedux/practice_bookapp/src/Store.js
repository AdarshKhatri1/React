import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Reducer as AppReducer } from "./Redux/AppRedux/Reducer";
import { Reducer as AuthReducer } from "./Redux/AuthRedux/Reducer";


const CustomReducer = combineReducers({AppReducer,AuthReducer})


const Store = legacy_createStore(CustomReducer,applyMiddleware(thunk))

export {Store}