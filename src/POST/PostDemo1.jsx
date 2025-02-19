import axios from "axios";
import React, { useEffect } from "react";

const PostDemo1 = () => {
  const datas = async () => {
    const userObj = {
      name: "Jay",
      age: "21",
      email: "jay@gmail.com",
      isActive: "true",
    };
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );

    console.log(res);

    if (res.status == 201) {
      alert("data saved successfully");
    }
  };

  useEffect(() => {
    datas();
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Post Demo 1</h1>
      {/* <button onClick={datas}>POST</button> */}
    </div>
  );
};

export default PostDemo1;
