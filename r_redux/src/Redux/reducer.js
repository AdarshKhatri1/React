import { Actions } from "./Actionobj";

const reducer = (oldState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "Add":
        // case Actions.Add://inplace of String add, we can use this one too
            return { ...oldState, count: oldState.count + payload }
        case "Reduce":
            return { ...oldState, count: oldState.count - payload }

        default: return oldState;
    }
}
export { reducer };