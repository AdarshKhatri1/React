
import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducer as AppReducer } from "./App/Reducer";
import { reducer as AuthReducer} from "./Auth/Reducer";

const customReducer = combineReducers({AppReducer,AuthReducer});

const Store = legacy_createStore(customReducer,applyMiddleware(thunk))
export {Store};
