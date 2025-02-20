import React from 'react'
import PropsObj from './2.PropsObj'

//we can extract the type from another component
const ExtractCompoProp = (props : React.ComponentProps<typeof PropsObj>) => {
  return (
    <div>ExtractCompoProp {props}</div>
  )
}

export default ExtractCompoProp