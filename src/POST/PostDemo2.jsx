import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PostDemo2 = () => {
  const { register, handleSubmit } = useForm();

  //   const datas = async (data) => {
  //     const res = await axios.post("https://node5.onrender.com/user/user", data);
  //   };

  const submitHandler = async (data) => {
    const res = await axios.post("https://node5.onrender.com/user/user", data);

    console.log(res);
    if (res.status === 201) {
      alert("user saved successfully");
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Post Demo 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" {...register("age")} />
        </div>
        <div>
          <label htmlFor="age">Status</label>
          <input type="text" {...register("status")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default PostDemo2;
