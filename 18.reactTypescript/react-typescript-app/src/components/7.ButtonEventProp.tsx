import React from 'react'

type ButtonProp = {
    handleButton : ()=> void;
    children ? : React.ReactNode
}
const ButtonEventProp = (props : ButtonProp) => {
  return (
   <div>
    <button style={{padding : "10px"}} onClick ={props.handleButton}>{props.children || "Click Me"}</button>
   </div>
  )
}

export default ButtonEventProp