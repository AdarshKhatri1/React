

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
        const newState = this.#updater(this.#state,action)        
        this.#state = newState;
    }
}

const store = new Store({count:1},fn);


console.log(store.state)
store.dispatch({type:"INCREMENT_AMOUNT"})
console.log(store.state)
store.dispatch({type:"DECREMENT_AMOUNT"})
console.log(store.state)