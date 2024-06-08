import React, { useState } from 'react'

function Usecounter() {
    const [count,setcount] = useState(0)

    const add=()=>{
        setcount(count+1)
    }

    const remove=()=>{
        setcount(count-1)
    }

    const zero=()=>{
        setcount(count*0)
    }
  return [count,add,remove,zero]
}

export default Usecounter
