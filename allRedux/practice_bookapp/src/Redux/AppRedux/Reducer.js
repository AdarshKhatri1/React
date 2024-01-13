import { Action } from "./Action";

const initState = {
    books: [],
    isLoading: false,
    isError: false,
};


const Reducer = (oldState = initState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case (Action.GET_DATA_REQUEST): {
            return {
                ...oldState, isLoading: !oldState.isLoading
            }
        }
        case (Action.GET_DATA_SUCCESS): {
            return {
                ...oldState, books: payload, isLoading: false, isError: false
            }
        }
        case (Action.GET_DATA_FAILURE): {
            return {
                ...oldState, isError: true
            }
        }
        default: return oldState
    }
}

export {Reducer}