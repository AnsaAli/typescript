import React from 'react'

type OnchangeEventProp={
    value : string;
    handleOnChnage : (event : React.ChangeEvent<HTMLInputElement>)=>void
}
const OnChangeEvent = (props : OnchangeEventProp) => {
  //can also write
  const handleOnChnage = (event : React.ChangeEvent<HTMLInputElement>)=>{
    console.log('Event')
  }
  
  return (
    <div>
        <input value= {props.value} OnChange={props.handleOnChnage}/>
    </div>
  )
}

export default OnChangeEvent