import React from 'react';
import Usecounter from './Usecounter';
// import Usecount from './Usecounter';

function Usecount() {
  const [count,add,remove,zero] = Usecounter()
  return (
    <div>
        <h1>asdjghku</h1>
        <h1>{count}</h1>
        <button className='btn border-2 border-black bg-slate-500' onClick={add}>add</button>
        <button onClick={remove}>remove</button>
        <button onClick={zero}>zero</button>
    </div>
  )
}

export default Usecount
