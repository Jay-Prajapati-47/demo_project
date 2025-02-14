import React from "react";
import { useForm } from "react-hook-form";

export const FormTask1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "Name is required",
      },
    },
    phoneNoValidation: {
      required: {
        value: true,
        message: "Password is required*",
      },
      minLength: {
        value: 10,
        message: "Min Length is 10",
      },
      maxLength: {
        value: 10,
        message: "Max Length is 10",
      },
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h1 style={{ marginBottom: "20px" }}>Home Finder</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            {...register("Name", validationSchema.nameValidator)}
          />
          <span style={{ color: "red" }}>{errors.Name?.message}</span>
        </div>
        <div>
          <label>Contact No:</label>
          <input
            type="text"
            {...register("ContactNo", validationSchema.phoneNoValidation)}
          />
          <span style={{ color: "red" }}>{errors.ContactNo?.message}</span>
        </div>
        <div>
          <label>Select Area:</label>
          <div>
            <label>
              Bapunagar{" "}
              <input
                type="radio"
                {...register("area")}
                name="area"
                value="Bapunagar"
              />
            </label>
            <label>
              Navrangpura{" "}
              <input
                type="radio"
                {...register("area")}
                name="area"
                value="Navrangpura"
              />
            </label>
            <label>
              Motera{" "}
              <input
                type="radio"
                {...register("area")}
                name="area"
                value="Motera"
              />
            </label>
            <label>
              Amdavadi{" "}
              <input
                type="radio"
                {...register("area")}
                name="area"
                value="Amdavadi"
              />
            </label>
          </div>
        </div>
        <div>
          <label>Home Type:</label>
          <div>
            <label>
              1BHK{" "}
              <input type="radio" {...register("ht")} name="ht" value="1BHK" />
            </label>
            <label>
              2BHK{" "}
              <input type="radio" {...register("ht")} name="ht" value="2BHK" />
            </label>
            <label>
              3BHK{" "}
              <input type="radio" {...register("ht")} name="ht" value="3BHK" />
            </label>
          </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
