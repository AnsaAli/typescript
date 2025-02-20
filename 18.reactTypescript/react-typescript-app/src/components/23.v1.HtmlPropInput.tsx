import React from 'react'

type InputProp =React.ComponentProps<'input'>
const HtmlPropInput = (props: InputProp) => {
  return (
   <input {...props}/>
  )
}

export default HtmlPropInput