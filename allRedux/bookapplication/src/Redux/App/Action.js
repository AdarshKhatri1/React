import axios from "axios"
import { BookAction } from "./Actiontype"


// const GetBookRequest=()=>{

//     return({type:BookAction.GetBookRequest})
// }
// const GetBookSuccess=(payload)=>{

//     return({type:BookAction.GetBookSuccess,payload})
// }
// const GetBookFailure=()=>{

//     return({type:BookAction.GetBookFailure})
// }

 const getBook= (bookparams)=> (dispatch)=>{

    dispatch({type:BookAction.GetBookRequest})
    return axios.get("http://localhost:8080/books",bookparams)
    .then((r)=>{

        dispatch({type:BookAction.GetBookSuccess,payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:BookAction.GetBookFailure})
    })
}

const postBook= (id,payload) =>(dispatch) =>{
    dispatch({type:BookAction.PatchBookRequest})
    return axios.patch(`http://localhost:8080/books/${id}`,payload)
                .then((r)=>{
                  return dispatch({type:BookAction.PatchBookSuccess,payload:r.data})
                })
                .catch((e)=>{
                    // console.log(e)
                    dispatch({type:BookAction.PatchBookFailure})
                })
}


export {getBook,postBook}