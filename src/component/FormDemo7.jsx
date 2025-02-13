import React from "react";
import { useForm } from "react-hook-form";

const FormDemo7 = () => {
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
    universityValidator: {
      required: {
        value: true,
        message: "university is required",
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
      <h2>
        <u>SmartEntry</u>
      </h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          {...register("name", validatorSchema.nameValidator)}
        />
        <span style={{ color: "red" }}>{errors.name?.message}</span>

        <label>Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          oninput="validateEmail()"
          {...register("email", validatorSchema.emailValidator)}
        />
        <span style={{ color: "red" }}>{errors.email?.message}</span>
        <div class="error" id="emailError"></div>

        <label>Phone:</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter phone number"
          oninput="validatePhone()"
          {...register("phone", validatorSchema.phoneValidator)}
        />
        <span style={{ color: "red" }}>{errors.phone?.message}</span>
        <div class="error" id="phoneError"></div>

        <label>Are you a Student or a Professional?</label>
        <select id="userType" {...register("select")}>
          <option>Select...</option>
          <option value="student">Student</option>
          <option value="professional">Professional</option>
        </select>

        <div id="studentFields" class="hidden">
          <label>University Name:</label>
          <input
            type="text"
            id="university"
            placeholder="Enter your university"
            {...register("university", validatorSchema.universityValidator)}
          />
          <span style={{ color: "red" }}>{errors.university?.message}</span>
        </div>

        <div id="professionalFields" class="hidden">
          <label>Company Name:</label>
          <input
            type="text"
            id="company"
            placeholder="Enter your company"
            {...register("company")}
          />
        </div>

        <button onclick="submitForm()">Submit</button>
      </form>
    </div>
  );
};

export default FormDemo7;
