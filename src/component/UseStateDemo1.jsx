import React, { useState } from "react";

const UseStateDemo1 = () => {
  const [isLoading, setisLoading] = useState(true);
  const loading = () => {
    setisLoading(false);
  };
  return (
    <div>
      <h1>DEMO !</h1>
      {isLoading === true ? "Loading..." : ""}
      <button onClick={loading}>stop</button>
    </div>
  );
};

export default UseStateDemo1;
