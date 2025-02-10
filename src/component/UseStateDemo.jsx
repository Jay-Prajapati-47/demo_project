import React, { useState } from "react";

const UseStateDemo = () => {
  const [count, setCount] = useState(0);

  const INC = () => {
    setCount(count + 1);
  };
  const DEC = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={DEC}>decreament</button>
      <h1>count = {count}</h1>
      <button onClick={INC}>increament</button>
    </div>
  );
};

export default UseStateDemo;
