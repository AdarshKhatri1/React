import axios from "axios";
import { Action } from "./Action"




const Get_Book = (params) => (dispatch) => {

    // console.log(params,"paramse")

    dispatch({ type: Action.GET_DATA_REQUEST })
    // console.log(d,"d")

    return axios("http://localhost:8080/books",{params})
        .then((r) => {
         dispatch({ type: Action.GET_DATA_SUCCESS, payload: r.data })

        })
        .catch((e) => {
            dispatch({ type: Action.GET_DATA_FAILURE })
            console.log(e);
        })


}

const Patch_Book = (id,payload)=>(dispatch)=>{

    dispatch({type:Action.PATCH_DATA_REQUEST})

    return axios.patch(`http://localhost:8080/books/${id}`,payload)
            .then((r)=>{
               return dispatch({type:Action.PATCH_DATA_SUCCESS,payload:r.data})
            })
            .catch((e)=>{
                dispatch({type:Action.PATCH_DATA_FAILURE})
            })

}
export { Get_Book,Patch_Book }