import React, { createContext, useState } from 'react'
import D from './D'

export const data = createContext()
function A() {
    const [name,setname] = useState("ketan")
  return (
    <div>
      <h1>hello A</h1>
      <data.Provider value={{name,setname}} >
        <D />
      </data.Provider>
    </div>
  )
}

export default A
