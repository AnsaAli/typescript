import React from 'react'



//WITH ONLY BELOW TYPE WE CAN SEPCIFY ALL IN A COMPONENT
//EX: RestrictingProps value={20} isNegative isPositive isZero/>, SO TO RESTRIC THIS WE CAN SPECIFY THE TYPES AS pOSITIVE tYPES, NEGATIVE TYPES, RANDONnUMBER TYPES AND SO ON.
// type RandomNumProps={
//     value : number
//     isPositive? : boolean
//     isNegative? : boolean
//     isZero? : boolean
// }

type ValueType={
    value : number
}
type PositiveType =ValueType & {
    isPositive : boolean
    isNegative?: never
    isZero ?: never
}
type NegativeType = ValueType & {
    isNegative : boolean
    isPositive? : never
    isZero ?: never
}
type ZeroType=ValueType & {
    isZero : boolean 
    isNegative? : never
    isPositive? : never
}

type RandomNumProps=PositiveType | NegativeType | ZeroType
const RestrictingProps = ({value, isPositive, isNegative, isZero} : RandomNumProps) => {
  return (
    <div>
        {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'Zero'}
    </div>
  )
}

export default RestrictingProps