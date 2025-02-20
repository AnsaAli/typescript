import React from 'react'
type StatusProps={
    status: "loading" | "pending" | "cancel"
}
const PropsDynamicStatusType = (props : StatusProps) => {
    let message ;
if(props.status === 'cancel'){
    message = 'Canceled'
}else if(props.status==='loading'){
    message= 'Loading...'
}else if(props.status==='pending'){
    message= 'Pending..'
}
  return (
    <div>
     
        <p style={{color: "white"}}>{message}</p>
    </div>
  )
}

export default PropsDynamicStatusType