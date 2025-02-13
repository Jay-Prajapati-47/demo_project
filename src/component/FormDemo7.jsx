import React from "react";
import { useForm } from "react-hook-form";

const FormDemo7 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
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
          required
          {...register("name")}
        />

        <label>Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          oninput="validateEmail()"
          required
          {...register("email")}
        />
        <div class="error" id="emailError"></div>

        <label>Phone:</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter phone number"
          oninput="validatePhone()"
          required
          {...register("phone")}
        />
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
            {...register("university")}
          />
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
