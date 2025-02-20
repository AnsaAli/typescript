import React from 'react'
import Login from './19.v1login.tsx';
import {ProfileProps} from './19.v2profile.tsx'

type ParaProps= {
    isLoggedIn : boolean
    component : React.ComponentType<ProfileProps>
}

const ComponentProp: React.FC = ({isLoggedIn, component : Component} : ParaProps) => {
    if(isLoggedIn){
        return <Component name= 'Ansa'/>
    }else{
        return <Login/>
    }
 
}

export default ComponentProp