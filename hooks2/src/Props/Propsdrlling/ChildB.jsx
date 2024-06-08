import React from 'react'
import ChildC from './ChildC'

function ChildB({name,setname}) {
  return (
    <div>
      <h1>Child B</h1>
      <h2>hello..{name}</h2>
      <ChildC name={name} setname={setname} />
    </div>
  )
}

export default ChildB
