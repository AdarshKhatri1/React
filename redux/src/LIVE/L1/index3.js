

const fn = (currentState,action)=>{

    if(action.type === "INCREMENT_AMOUNT"){
        return{
            ...currentState,
            count:currentState.count+1
        }
    }
    else if(action.type === "DECREMENT_AMOUNT"){
        return{
            ...currentState,
            count:currentState.count-1
        }
    }
    else{
        return currentState;
    }
}

class Store{
    #state;
    #updater;
    #listenCallback;
    constructor (initState,updaterfn){
        this.#state = initState
        this.#updater = updaterfn
    }

    getState(){
        return this.#state;
    }
    get state(){
        return this.#state;
    }

    dispatch(action){
        //you get a new state
        const currentState = this.#state;
        const newState = this.#updater(this.#state,action)        
        this.#state = newState;
        if(currentState===newState){
            return
        }
        else{
            if(this.#listenCallback){
                this.#listenCallback()
            }
        }
    }
    subscribe(callback){
        this.#listenCallback= callback;
    }
    selectState(selector){
        return selector(this.#state)
    }
}

const store = new Store({count:1},fn);
store.subscribe(()=>{
    console.log("store has got updated")
    console.log(store.state)
})



store.dispatch({type:"INCREMENT_AMOUNT"})
store.dispatch({type:"INCREMENT_AMOUNT"})
store.dispatch({type:"INCREMENT_AMOUNT"})
store.dispatch({type:"INCREMENT_AMOUNT"})
store.dispatch({type:"DECREMENT_AMOUNT"})

// output
// PS D:\Adarsh\ReactProject\redux\src\LIVE\L1> node index3.js
// store has got updated
// { count: 2 }
// store has got updated
// { count: 3 }
// store has got updated
// { count: 4 }
// store has got updated
// { count: 5 }
// store has got updated
// { count: 4 }


// selectState ka use

let count = store.selectState(state=>state.count);
console.log(count)