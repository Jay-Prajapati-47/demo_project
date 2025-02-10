import React, { useState } from "react";

const UseStateTask2 = () => {
  const [name, setName] = useState("");
  const [jayesh, setJayesh] = useState("");
  const [number, setNumber] = useState("");
  const [group, setGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Admission Form</h2>
      <form action="#" method="POST">
        <label for="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label for="dob">Date of Birth</label>
        <input
          type="text"
          id="dob"
          name="dob"
          required
          onChange={(jay) => setJayesh(jay.target.value)}
        />
        <br />
        <label for="gender">Gender</label>
        <input type="text" onChange={(e) => setGroup(e.target.value)} />
        <br />
        <label for="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(r) => setEmail(r.target.value)}
        />
        <br />
        <label for="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          onChange={(e) => setAddr(e.target.value)}
        />
        <br />
        <label for="course">Course Applying For</label>
        <input
          type="text"
          id="course"
          name="course"
          required
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>
        The Given Informaqtion is ={name}, {jayesh}, {number}, {group}, {phone},{" "}
        {email}, {addr}
      </h1>
    </div>
  );
};

export default UseStateTask2;
