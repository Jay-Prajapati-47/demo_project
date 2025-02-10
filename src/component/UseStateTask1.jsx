import React, { useState } from "react";

const UseStateTask1 = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [group, setGroup] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Blood Donation Form</h2>
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

        <label for="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          required
          onChange={(e) => setNumber(e.target.value)}
        />

        <br />
        <label for="blood-group">Blood Group</label>
        <input
          type="text"
          placeholder="enter group"
          onChange={(e) => setGroup(e.target.value)}
        />
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
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Submit</button>
      </form>

      <h1>
        The Given Information is ={name},{number},{group},{email},{phone},{addr}
      </h1>
    </div>
  );
};

export default UseStateTask1;
