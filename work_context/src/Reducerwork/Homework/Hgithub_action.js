
export const Actions = {
    Github_is_loading:"github_is_loading",
    Github_is_error:"github_is_error",
    Github_is_success:"github_is_success"

}

export function FetchUserbyid(dispatch,id){

    dispatch({type:Actions.Github_is_loading})

    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${id}`)
    .then((res)=>{
       return res.json()
    })
    .then((res)=>(
        // console.log(res,"res")
        dispatch({type:Actions.Github_is_success,payload:res})
    ))
    .catch((err)=>{
        console.log(err,"eeeeeeeeeeeeeeeeee")
        dispatch({type:Actions.Github_is_error})
})

}