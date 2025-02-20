import React,{useState, useRef, useEffect} from 'react'

const UseRefMutable = () => {
 const [timer, setTimer] = useState(0);

 //for mutable referece specify the appropriate type
 //ex: setTimeout, setInterval type is number
 const interValRef= useRef<number | undefined>(null);

 const stopTimer = ()=>{
  window.clearInterval(interValRef.current)
 }
 useEffect(()=>{
  interValRef.current= window.setInterval(()=>{
    setTimer((timer)=> timer+1)
  }, 1000)
return ()=>{
  stopTimer()
}
 },[])
  return (
    <div>
      Timer - {timer}
      <button onClick ={()=> stopTimer()}>Stop Timer</button>
    </div>
  )
}

export default UseRefMutable