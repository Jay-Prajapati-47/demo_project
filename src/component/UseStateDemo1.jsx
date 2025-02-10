import React, { useState } from "react";

const UseStateDemo1 = () => {
  const [isLoading, setisLoading] = useState(true);
  const loading = async () => {
    const demo = setisLoading(false);
    demo();
    if (!demo) return setisLoading(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>DEMO !</h1>
      {isLoading === true ? "Loading..." : ""}
      <button onClick={loading}>stop</button>
    </div>
  );
};

export default UseStateDemo1;
