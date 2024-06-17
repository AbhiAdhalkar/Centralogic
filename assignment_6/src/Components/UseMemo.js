import React, { useMemo, useState } from 'react'
import '../Style/UseMemo.css'

function UseMemo() {
  const [num1,setnum1]=useState('');
  const [num2, setnum2]=useState('');
  const [operation, setOperation]=useState(null);

  const result = useMemo(()=>{
    if (num1 ==='' || num2 ==='') return null;
    const n1=parseFloat(num1);
    const n2=parseFloat(num2);

    switch(operation){
      case 'add':
        return n1+n2;
      case 'subtraction':
        return n1-n2;
      case 'multiplication':
        return n1*n2;
      case 'division':
        return n1/n2;
      default: return null;
    }
  },[num1,num2,operation]);



  return (
    <div>
      <h1>Arithmetic Operations</h1>
      <div>
      <input type='number' value={num1} placeholder='Enter First Number ' onChange={(e)=>setnum1(e.target.value)} />
      <input type='number' value={num2} placeholder='Enter Second Number' onChange={(e)=>setnum2(e.target.value)}/>
      </div>
      <div>
        <button onClick={()=>setOperation('add')}>Add</button>
        <button onClick={()=>setOperation('subtraction')}>Subtraction</button>
        <button onClick={()=>setOperation('multiplication')}>Multiply</button>
        <button onClick={()=>setOperation('division')}>Division</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  )
}

export default UseMemo;