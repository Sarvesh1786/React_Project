import React, { useState } from "react";

export default function EuseCustomehook() {
  const [count, setCount] = useState(0);
  const handlerIncriment = () => {
    setCount(count +1);
  };

  return {
    count,
    handlerIncriment,
  };
}
