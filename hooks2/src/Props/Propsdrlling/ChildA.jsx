import React, { useState } from 'react'
import ChildB from './ChildB'

function ChildA() {
    const [name,setname] = useState("Vedant")
  return (
    <div>
        {/* {name} */}
      <h1>Child A</h1>
      <ChildB name={name} setname={setname} />
    </div>
  )
}

export default ChildA
