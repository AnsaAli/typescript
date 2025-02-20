import React from 'react'

type ChildreProp = {
    children : React.ReactNode
}
const ChildrenProp: React.Fc<ChildreProp> = (props) => {
  return (
    <div>{props.children}</div>
  )
}

export default ChildrenProp