import React, { useState } from "react";

const UseStateTask3 = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [group, setGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");
  const [date, setDate] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Ticket booking</h2>
      <form action="#" method="POST">
        <label for="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label for="dob">Date of Birth</label>
        <input
          type="text"
          id="dob"
          name="dob"
          required
          onChange={(e) => setDate(e.target.value)}
        />

        <label for="gender">Gender</label>
        <input type="text" onChange={(e) => setGroup(e.target.value)} />

        <label for="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          onChange={(e) => setAddr(e.target.value)}
        />

        <label for="course">Course Applying For</label>
        <input
          type="text"
          id="course"
          name="course"
          required
          onChange={(e) => setNumber(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <h1>
        {name}
        {number}
        {group}
        {phone}
        {email}
        {addr}
        {date}
      </h1>
    </div>
  );
};

export default UseStateTask3;
