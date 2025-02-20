import React,{createContext, useState} from 'react'

export type AuthUser={
    name : 'string'
    email : 'string'
}

type UserContextType ={
    user : AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

//create the conponent that provide the userConrext value, below is the prop type, line after 12 is the component
type UserContextProviderProps = {
    children : React.ReactNode
}
//create a new context
export const UserContext = createContext<UserContextType >(null) //null : not sure the value initially

//componet
export const UserContextProvider :  React.FC<UserContextProviderProps>=({children} : UserContextProviderProps)=>{
 const [user, setUser] =useState<AuthUser | null>(null);

 return <UserContext.Provider value ={{user, setUser}}>{children}</UserContext.Provider>
}