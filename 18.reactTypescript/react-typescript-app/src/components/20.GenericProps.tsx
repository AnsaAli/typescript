import React from 'react'


type ListProps<T> = {
  items: T[]
  onClick:(value : T)=>void
}
// type ListProps = {
//   items: string[]
//   onClick:(value : string)=>void
// }
const GenericProps = <T extends {}>({items,onClick}: ListProps<T>) => {
  return (
    <div>
      <p>List of items</p>
      {items.map((item,indx)=>{
        return(
          <div key={indx} onClick={()=>onClick(item)}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default GenericProps



