import React from 'react'

type StyleProps = {
    style : React.CSSProperties
}
const StyleProps = (props : StyleProps) => {
  return (
    <div style={props.style}>IThis one styling using the style prips</div>
  )
}

export default StyleProps