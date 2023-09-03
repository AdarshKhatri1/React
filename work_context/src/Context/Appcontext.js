
const { createContext, useState } = require("react");


export const Appcontext = createContext()


export default function AppcontextProvider({children}){

    const [isAuth, setIsAuth] = useState(false)
    // console.log(isAuth)

    function toggleIsAuth(){

        console.log("inside is Auth")
        setIsAuth(!isAuth)
    }

    return(
        <Appcontext.Provider value={[isAuth,toggleIsAuth]} >
            {children}
        </Appcontext.Provider>
    )
}

