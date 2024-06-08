import React from 'react'

function ChildC({name,setname}) {
  return (
    <div>
      <h1>Child C</h1>
      <h2>hello...{name}</h2>
      <button onClick={()=>setname("bharat")}>click</button>
    </div>
  )
}

export default ChildC
