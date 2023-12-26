import { Actions } from "./Actionobj";
import { accessData, saveData } from "../../Utils/appLocalStorage";
const initState = {
    isAuth:accessData("isAuth")|| false,
    token: "",
    isAuthLoading: false
}

export const reducer = (oldState = initState, action) => {
    const { type, payload } = action;
    switch (type) {

        case Actions.USER_LOGIN_REQUEST:
            return {
                ...oldState, isAuthLoading: true
            }

        case Actions.USER_LOGIN_SUCCESS:
            saveData("isAuth",!oldState.isAuth)
            return {
                
                ...oldState, isAuth: true, token: payload, isAuthLoading: false
            }

        case Actions.USER_LOGIN_FAILURE:
            return{
                ...oldState,isAuth:false,token:'',isAuthLoading:false
            }

        default:
            return oldState

    }
}