import React, { useContext } from 'react'
import { data } from './A'

function D() {
    const {name,setname} = useContext(data)
  return (
    <div>
       <h1>hello D</h1>
       <h2>hello....{name}</h2>
       <button onClick={()=>setname("natvar")}>click</button>
    </div>
  )
}

export default D
