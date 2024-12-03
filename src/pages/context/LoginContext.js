import React,{ createContext,useState} from "react";
//create context
export const LoginContext = createContext();
export const LoginProvider = ({children})=>{

    const [user,setUser] = useState(null);

    return(
        <LoginContext.Provider value={{user,setUser}}>
            {children}
        </LoginContext.Provider>
    )
}