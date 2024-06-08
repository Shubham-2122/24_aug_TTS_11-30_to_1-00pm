import React, { useMemo, useState } from 'react'

function Usememo() {
    const [count,setcount] = useState(0)
    const [minius,setminus] = useState(100)

    const mutliplication=useMemo(function multi(){
        return count*10
    },[count])
  return (
    <div>
        {mutliplication}
        <h1>{count}</h1>
        <button onClick={()=>setcount(count + 1)}>add</button>
        <h2>{minius}</h2>
        <button onClick={()=>setminus(minius - 1)}>remove</button>
    </div>
  )
}

export default Usememo
