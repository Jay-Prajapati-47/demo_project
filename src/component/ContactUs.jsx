import React from "react";

const ContactUs = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10em 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          backgroundColor: "lightblue",
          border: "2px solid blue",
          width: "350px",
        }}
      >
        <div style={{ marginTop: "14px" }}>
          <label htmlFor="name" style={{ margin: "0px 5px" }}>
            Name*
          </label>
          <input
            type="text"
            placeholder="Enter name"
            style={{
              fontSize: "15px",
              padding: "12px 5px",
              border: "2px solid gray",
              outline: "none",
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email" style={{ margin: "0px 5px" }}>
            Email*
          </label>
          <input
            type="email"
            placeholder="Enter email"
            style={{
              fontSize: "15px",
              padding: "12px 5px",
              border: "2px solid gray",
              outline: "none",
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password" style={{ margin: "0px 5px" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Entr password"
            style={{
              fontSize: "15px",
              padding: "12px 5px",
              border: "2px solid gray",
              outline: "none",
            }}
          />
        </div>
        <br />
        <button
          type="submit"
          style={{
            fontSize: "15px",
            padding: "8px 18px",
            border: "1.5px solid blue",
            outline: "none",
            margin: "10px 0",
            borderRadius: "5px",
            background: "transparent",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
