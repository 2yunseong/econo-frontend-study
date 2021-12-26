import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남 ");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐. 현재의 카운트 값:");
    };
  }, [count]);
  console.log("rendering. 현재 카운트 값 : ");

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter Example</h1>
      {count}
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default UseEffectExample;
