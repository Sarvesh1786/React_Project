import React from 'react'
import EuseCustomehook from './EuseCustomehook'

export default function EuseCustom() {

const data = EuseCustomehook();
const data1 = EuseCustomehook();



  return (
   <React.Fragment>
    <h1> Count to Up  : {data.count}</h1>
    <button type='button' onClick={data.handlerIncriment}>Increment</button>

    <h1> Count to Up  : {data1.count}</h1>
    <button type='button' onClick={data1.handlerIncriment}>Increment</button>

   </React.Fragment>
  )
}
