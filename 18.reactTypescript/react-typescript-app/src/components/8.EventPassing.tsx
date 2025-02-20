import React from 'react'

type EventProps = {
    handleEvent : (event : React.MouseEvent<HTMLButtonElement>, id:number)=>void;
   
}
const EventPassing = (props : EventProps) => {
  return (
    <div>
        <button style={{padding : "10px"}} onClick={(event)=>props.handleEvent(event,1)}>Click</button>
    </div>
  )
}

export default EventPassing