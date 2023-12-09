//store
//1. holds state
//2. read the state
//3. dispatch(action )=> update your state
//4. inform you when state is update

class Store{
    #state;

    constructor (initState){
        this.#state = initState
    }

    getState(){
        return this.#state;
    }
    //or
    get state(){
        return this.#state;
    }
}

const store = new Store({count:1});
// console.log(store.state)
// PS D:\Adarsh\ReactProject\redux\src\LIVE\L1> node index.js
// undefined  because state is private field

// console.log(store.#state)  can't access in this way also

console.log(store.getState())

// if you want to call store.state and print value then get state1 (){}
console.log(store.state)
