import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((number) => number + 1);
    console.log("+1");
  };

  const onDecrease = () => {
    if (number <= 0) return;
    setNumber((number) => number - 1);
    console.log("-1");
  };

  return (
    <div className="counter">
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
