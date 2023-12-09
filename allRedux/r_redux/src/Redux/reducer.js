import { Actions } from "./Actionobj";

const initstate = {
    count: 12,
    todos: [],
    isLoading: false,
    isError: false
}

const reducer = (oldState = initstate, action) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.Add:
            // case Actions.Add://inplace of String add, we can use this one too
            return { ...oldState, count: oldState.count + payload }
        case Actions.Reduce:
            return { ...oldState, count: oldState.count - payload }
        case Actions.TodoRequest:
            return{...oldState, isLoading:true}
        case Actions.TodoSuccess:
            return{...oldState,isLoading:false,todos:payload}
        case Actions.TodoFailure:
            return{...oldState,isLoading:false,isError:true,todos:[]}
        default: return oldState;
    }
}
export { reducer };