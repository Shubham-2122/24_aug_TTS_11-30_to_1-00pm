import React, { useRef, useState } from 'react'

function UseRef1() {
    const refelement = useRef()
    const [name1,setname] =useState("shubham")

    const reset=()=>{
        setname("")
        refelement.current.focus()
    }
    const handelchange=()=>{
        refelement.current.style.color = "red"
        refelement.current.style.background = "blue"
        refelement.current.value = "ketan"
    }
    return (
    <div>
        
      <input ref={refelement} type="text" value={name1} onChange={(e)=>setname(e.target.value)} />
      <button onClick={reset}>reset</button>
      <button onClick={handelchange}>handlechnage</button>
    </div>
  )
}

export default UseRef1
