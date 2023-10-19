import { addTOdo, toggle_todo } from "./action";
import reducer from "./reducer";
import {createStore} from 'redux'

const initState = {
    todo: []
}



var store = createStore(reducer, initState)

console.log(store.getState())

store.dispatch(addTOdo("Add Milk"))
console.log(store.getState())

store.dispatch(addTOdo("Add Curd"))
console.log(store.getState())

store.dispatch(toggle_todo("Add Curd"))
console.log(store.getState())