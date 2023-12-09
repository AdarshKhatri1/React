// import { createContext } from "react";


// export const Appcontext = createContext();

// export default function Appcontext_Provider({children,store}){

//     return(
//         <Appcontext.Provider value={store}>
//         {children}
//         </Appcontext.Provider>
//     )
// }

import { createContext } from "react";


export const Appcontext = createContext();

export default function Appcontext_Provider({children,store}){
    // console.log(store,"stror")

    const{dispatch,getState} = store;
    const value = {dispatch,getState}

    return(
        <Appcontext.Provider value={value}>
        {children}
        </Appcontext.Provider>
    )
}