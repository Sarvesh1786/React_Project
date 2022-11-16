import React, { useState, useEffect } from "react";

export default function EHooks_useState() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1001);

  const handlerIncriment = () => {
    setCount(count + 1);
  };

  const handlerDecriment = () => {
    setCount1(count1 - 1);
  };

  useEffect(() => {
    console.log(" useEffect is Called ");
  },[count]);

  return (
    <React.Fragment>
      <h1> Example for : useEffect In Incriment </h1>
      <h1>Count Up : {count}</h1>
      <button onClick={handlerIncriment}> Incriment </button>

      <h1> Example for : useEffect In Decriment </h1>
      <h1>Count Down : {count1}</h1>
      <button onClick={handlerDecriment}> Decriment </button>
    </React.Fragment>
  );
}
