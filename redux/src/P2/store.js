import { addTOdo, toggle_todo } from "./action.js";
import reducer from "./reducer.js";

const initState = {
    todo: []
}

class Store {
    constructor(reducer, initState) {
        this.reducer = reducer;
        this.state = initState;
    }

    getState() {
        return this.state
    }
    dispatch(action) {
        this.state = this.reducer(this.state, action)
    }

}

var store = new Store(reducer, initState)

console.log(store.getState())

store.dispatch(addTOdo("Add Milk"))
console.log(store.getState())

store.dispatch(addTOdo("Add Curd"))
console.log(store.getState())

store.dispatch(toggle_todo("Add Curd"))
console.log(store.getState())