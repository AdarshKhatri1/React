import { Auth_Action } from "./Actionstype";

const initState = {

    isAuth:false,
    token:'',
    isLoading:false,
    isError:false
}

export const reducer = (oldState=initState,actions)=>{

    const {type,payload} = actions;

    switch(type){

        case Auth_Action.GET_AUTH_REQUEST:
            return{
                ...oldState,isLoading:true
            }

        case Auth_Action.GET_AUTH_SUCCESS:
            return{
                ...oldState,isLoading:false,isError:false,token:payload,isAuth:true
            }

        case Auth_Action.GET_AUTH_FAILURE:
            return{
                ...oldState,isError:true,token:'',isAuth:false
            }
        default:
            return oldState
    }
}