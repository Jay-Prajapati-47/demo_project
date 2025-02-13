import React from "react";
import { useForm } from "react-hook-form";

const FormDemo5 = () => {
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
    phoneValidator: {
      required: { value: true, message: "Phone number is required" },
    },
    brandValidator: {
      required: { value: true, message: "Brand is required" },
    },
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h1>
          <u>Regalia Form</u>
        </h1>
        <div>
          <label>Fullname</label>
          <input
            type="text"
            placeholder="Full name"
            {...register("name", validatorSchema.nameValidator)}
          />
          <span style={{ color: "red" }}>{errors.name?.message}</span>
        </div>
        <br />
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", validatorSchema.emailValidator)}
          />
          <span style={{ color: "red" }}>{errors.email?.message}</span>
        </div>
        <br />
        <div>
          <label>Phone</label>
          <input
            type="tel"
            placeholder="phone"
            {...register("phone", validatorSchema.phoneValidator)}
          />
          <span style={{ color: "red" }}>{errors.phone?.message}</span>
        </div>
        <br />
        <div>
          <label>Contact Mode</label>
          <br />
          <input
            type="radio"
            name="mode"
            value="telphone"
            {...register("abc")}
          />
          Phone
          <input
            type="radio"
            name="mode"
            value="telwhatsapp"
            {...register("abc")}
          />
          WhatsApp
          <input
            type="radio"
            name="mode"
            value="telemail"
            {...register("abc")}
          />
          Email
        </div>
        <br />
        <div>
          <label htmlFor="date">Preffered Date and time</label>
          <input type="date" {...register("date")} />
        </div>
        <br />
        <div>
          <label htmlFor="category">categories</label>
          <br />
          Luxury Car :
          <input type="checkbox" name="Luxuy-car" {...register("Luxuy-car")} />
          Luxury Watch :
          <input
            type="checkbox"
            name="Luxuy-Watch"
            {...register("Luxuy-Watch")}
          />
          Luxury Jwellery :{" "}
          <input
            type="checkbox"
            name="Luxuy-Jwellery"
            {...register("Luxuy-Jwellery")}
          />
        </div>
        <br />

        <div>
          <label htmlFor="brand">Preffered brand</label>
          <input
            type="text"
            {...register("brand", validatorSchema.brandValidator)}
          />
          <span style={{ color: "red" }}>{errors.brand?.message}</span>
        </div>
        <br />
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default FormDemo5;
