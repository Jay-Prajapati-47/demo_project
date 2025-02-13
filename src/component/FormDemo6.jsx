import React from "react";
import { useForm } from "react-hook-form";

const FormDemo6 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <u>Data Flow</u>
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name:</label>
          <input type="text" required {...register("name")} />
          <br />

          <label>Email:</label>
          <input type="email" required {...register("email")} />
          <br />
        </div>

        <div>
          <label>Upload Profile Picture:</label>
          <input type="file" id="fileInput" {...register("image")} />
          <img id="previewImg" />
        </div>

        <div>
          <label>Choose Value:</label>
          <input
            type="range"
            min="0"
            max="100"
            id="rangeValue"
            {...register("range")}
          />
          <span id="rangeDisplay">50</span>
        </div>

        <div>
          <label>Enter OTP:</label>
          <input maxlength="1" {...register("otp1")} />
          <input maxlength="1" {...register("otp2")} />
          <input maxlength="1" {...register("otp3")} />
          <input maxlength="1" {...register("otp4")} />
          <br />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormDemo6;
