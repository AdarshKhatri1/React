//  TOGGLE_TODO toggle status of todo

const reducer = (state, { type, payload }) => {

    switch (type) {
        case "ADD_TODO": {
            return {
                ...state, todo: [...state.todo, payload]
            }
        }
        case "TOGGLE_TODO":{
            return{
                ...state, todo:state.todo.map((item)=>(item.title===payload?{...item,status:!item.status}:item))
            }
        }
        default: return state;
    }

}

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

store.dispatch({
    type: 'ADD_TODO', payload: {
        title: "Buy Milk",
        status: false
    }
})
console.log(store.getState())

store.dispatch({
    type: 'ADD_TODO', payload: {
        title: "Buy Curd",
        status: false
    }
})
console.log(store.getState())

store.dispatch({
    type: 'TOGGLE_TODO', payload: "Buy Curd"
})
console.log(store.getState())


