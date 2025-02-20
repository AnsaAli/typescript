import React from 'react'

type HorizontalPosition= 'left' | 'center' | 'right'
type VerticalPosition =  'top' | 'center' | "bottom"

//if we want to exclude some postion we can use Exclude
type ToastProps={
    position :Exclude<`${HorizontalPosition} - ${VerticalPosition}`, 'center-center'> | 'center'
}
const TemperalLiteral = ({position}) => {
  return (
    <div>Toast notification position {position}</div>
  )
}

export default TemperalLiteral