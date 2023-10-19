// // -------------------------------------------------------------------------------------------------------
// const reducer = (state,action) =>state;

// class Store{
//     constructor(reducer,initState){
//         this.reducer = reducer;
//         this.state = initState;
//     }

//     getState(){
//         return this.state
//     }
// }
// var store = new Store(reducer,{counter:0})
// console.log(store.getState())
// // Output
// // PS D:\Adarsh\ReactProject> cd redux
// // PS D:\Adarsh\ReactProject\redux> cd src
// // PS D:\Adarsh\ReactProject\redux\src> cd P1
// // PS D:\Adarsh\ReactProject\redux\src\P1> node redux.js
// // { counter: 0 }
// console.log(reducer('value'))
// // Output
// // PS D:\Adarsh\ReactProject\redux\src\P1> node redux.js
// // { counter: 0 }
// // value
// // -------------------------------------------------------------------------------------------------------





// // -------------------------------------------------------------------------------------------------------
// const reducer = (state,action) =>({
//     ...state, ...action.payload
// })

// const initState = {
//     counter:0
// }

// class Store{
//     constructor(reducer,initState){
//         this.reducer = reducer;
//         this.state = initState;
//     }

//     getState(){
//         return this.state
//     }
    
// }

// var store = new Store(reducer,{counter:0})


// console.log(store.getState())


// console.log(reducer(initState,{type:'UPDAte',payload:{couter:10}}))



// // -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
const reducer = (state,action) =>({
    ...state, ...action.payload
})

const initState = {
    counter:0
}

class Store{
    constructor(reducer,initState){
        this.reducer = reducer;
        this.state = initState;
    }

    getState(){
        return this.state
    }
    dispatch(action){
        this.state = this.reducer(this.state,action)
    }
    
}

var store = new Store(reducer,{counter:0})


console.log(store.getState())


store.dispatch({type:'UPDAte',payload:{couter:10}})
console.log(store.getState())
console.log(reducer(initState,{type:32,payload:12}), "reducer calling")


// -------------------------------------------------------------------------------------------------------