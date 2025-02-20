import React from 'react'


type VarientProp={
    varient : 'primary' | 'secondary'
}& React.ComponentProps<'button'>//this will help to add the html children, when we use these
//can also use omit 
//ex: Omit< React.ComponentProps<'button'>, 'children'>

const HtmlProp = ({varient, children, ...rest} : VarientProp) => {
  return (
    <di>
<button className={`class-with-${varient}`} {...rest}>{children}</button>
    </di>
  )
}

export default HtmlProp