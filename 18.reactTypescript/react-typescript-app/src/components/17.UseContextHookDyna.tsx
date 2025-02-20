import React,{useContext} from 'react';
import {UserContext} from './17.v1useContext.tsx'

const UseContextHookDyna = () => {
const userContext = useContext(UserContext)
    const handleLogin = ()=>{
        if(userContext){
            userContext.setUser({
                name : 'Ansa',
                email: 'email@'
            })
        }
    }
    const handleLogout = ()=>{
        if(userContext){
            userContext.setUser(null)
        }
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>User email {userContext?.user?.email}</p>
        <p>User name  {userContext?.user?.name}</p>
    </div>
  )
}

export default UseContextHookDyna