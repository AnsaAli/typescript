import React from 'react'
import {useState} from 'react'

const UseStateCom: React.FC = () => {
    const [log, setlog] = useState(false)
    const handleLogin = ()=>{
        setlog(true)

    }
    const handleLogout = ()=>{
        setlog(false)

    }
  return (
    <div>
        <button onClick={handleLogin}>log in</button>
        <button onClick={handleLogout}>log out</button>
        <p>{log ? 'login' : 'logout'}</p>
    </div>
  )
}

export default UseStateCom