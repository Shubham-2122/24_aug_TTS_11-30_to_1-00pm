import React, { useReducer, useState } from 'react'


const initialvalue = 0

export const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'zero':
            return initialvalue
        default:
            return state
    }
}

function Usereducer() {
    // const [name,setname] = useState(0)
    const [count,dispatch] = useReducer(reducer,initialvalue)
  return (
    <div>
      <h1>hello</h1>
      <h1>{count}</h1>
      <button onClick={()=>dispatch("increment")}>add</button>
      <button onClick={()=>dispatch("decrement")}>remove</button>
      <button onClick={()=>dispatch("zero")}>zero</button>
    </div>
  )
}

export default Usereducer
