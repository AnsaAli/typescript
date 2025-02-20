import React,{useRef, useEffect} from 'react'

const UseRefHook:React.FC = () => {
  //for dom elements specify the type HTMLInputElement
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(()=>{
inputRef.current.focus()
    },[])
  return (
    <div>
        <input type='text' ref={inputRef}/>
    </div>
  )
}

export default UseRefHook