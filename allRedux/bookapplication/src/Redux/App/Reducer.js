import { BookAction } from "./Actiontype";

const initState = {
    books:[],
    isLoading:false,
    isError:false
}

export const reducer = (oldState = initState,actions)=>{
    const {type,payload} = actions

    switch(type){

        case BookAction.GetBookRequest:
            return{
                ...oldState,isLoading:true
            }
        
        case BookAction.GetBookSuccess:

            return{
                ...oldState,
                    books:payload,
                    isLoading:false,
                    isError:false
                }
            
        
        case BookAction.GetBookFailure:
            return {
                ...oldState,
                books:[],
                isError:true
            }
        

        default:
            return oldState;
    }
}