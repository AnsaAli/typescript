import React from 'react'

type PersonNameProps = {
     name :{
        firstName : string,
        lastName : string
     }
   
}
const PropsObj = (props : PersonNameProps) => {
  return (
    <div>
    <p>{props.name.firstName} && {props.name.lastName}</p>
    </div>
  )
}

export default PropsObj