import { Action } from "./Action";

const initState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}

const Reducer = (oldState=initState,Actions)=>{

    const {type,payload} = Actions;


    switch(type){
        case (Action.GET_AUTH_REQUEST):{
            return{
                ...oldState,isLoading:true
            }
        }
        case (Action.GET_AUTH_SUCCESS):{
            return{
                ...oldState,isLoading:false,isError:false,token:payload,isAuth:true
            }
        }
        case(Action.GET_AUTH_FAILURE):{
            return{
                ...oldState,isError:true
            }
        }

        default:return oldState;
        
    }

}

export {Reducer}