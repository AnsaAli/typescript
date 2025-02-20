import React from 'react'

type PersonArrayName = {
    arrayName: {
        first : string,
        last : string
    }[]
}
const PropsArray = (props : PersonArrayName) => {
  return (
    <div>{props.arrayName.map((names,index)=><p key={index}>{names.first} && {names.last}</p>)}</div>
  )
}

export default PropsArray