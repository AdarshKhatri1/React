// Action creators 
// 1.const addTOdo
// 2.const toggle_todo 

// ye sab create karna hai function se
//  store.dispatch({
//     type: 'ADD_TODO', payload: {
//         title: "Buy Milk",
//         status: false
//     }
// })

const addTOdo = (payload) => ({
    type: "ADD_TODO",
    payload: {
        title: payload,
        status: false
    }
})

const toggle_todo = payload=>(
    {
        type:"TOGGLE_TODO",
        payload
    }
)

const reducer = (state, { type, payload }) => {

    switch (type) {
        case "ADD_TODO": {
            return {
                ...state, todo: [...state.todo, payload]
            }
        }
        case "TOGGLE_TODO": {
            return {
                ...state, todo: state.todo.map((item) => (item.title === payload ? { ...item, status: !item.status } : item))
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

store.dispatch(addTOdo("Add Milk"))
console.log(store.getState())

store.dispatch(addTOdo("Add Curd"))
console.log(store.getState())

store.dispatch(toggle_todo("Add Curd"))
console.log(store.getState())


