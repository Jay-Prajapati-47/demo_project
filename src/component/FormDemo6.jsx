import React from "react";
import { useForm } from "react-hook-form";

const FormDemo6 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  const validatorSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "Name is required",
      },
    },
    emailValidator: {
      required: { value: true, message: "Email is required" },
    },
    otpValidator1: {
      required: { value: true, message: "otp number is required" },
    },
    otpValidator2: {
      required: { value: true, message: "otp number is required" },
    },
    otpValidator3: {
      required: { value: true, message: "otp number is required" },
    },
    otpValidator4: {
      required: { value: true, message: "otp number is required" },
    },
    brandValidator: {
      required: { value: true, message: "Brand is required" },
    },
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <u>Data Flow</u>
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register("name1", validatorSchema.nameValidator)}
          />
          <span style={{ color: "red" }}>{errors.name1?.message}</span>
          <br />

          <label>Email:</label>
          <input
            type="email"
            {...register("email", validatorSchema.emailValidator)}
          />
          <span style={{ color: "red" }}>{errors.email?.message}</span>
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
          <input
            maxlength="1"
            {...register("otp1", validatorSchema.otpValidator1)}
          />
          <input
            maxlength="1"
            {...register("otp2", validatorSchema.otpValidator2)}
          />
          <input
            maxlength="1"
            {...register("otp3", validatorSchema.otpValidator3)}
          />
          <input
            maxlength="1"
            {...register("otp4", validatorSchema.otpValidator4)}
          />
          <span style={{ color: "red" }}>{errors.otp1?.message}</span>
          <br />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormDemo6;
