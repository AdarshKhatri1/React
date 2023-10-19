import { ADD_TODO, TOGGLE_TODO } from "./actionType"

export const addTOdo = (payload) => ({
    type: ADD_TODO,
    payload: {
        title: payload,
        status: false
    }
})

export const toggle_todo = payload=>(
    {
        type:TOGGLE_TODO,
        payload
    }
)