import { createContext, useContext, useState } from "react";

export const AuthContext= createContext();
    
export const AuthProvider = ({children})=>{
    const [isLoggedIn,setLoggedIn] = useState(false);
    const [mode,setMode] = useState('dark')
    const [User,setUser] = useState()

    
    const storeToken = (token)=>{
        return localStorage.setItem("token",token)
    }
    const getToken = ()=>{
        return localStorage.getItem("token")
    }
    return <AuthContext.Provider value={{storeToken,getToken,setLoggedIn,setMode,setUser,User}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth=()=>{
    return useContext(AuthContext)
}