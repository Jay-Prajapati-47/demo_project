import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        backgroundColor: "#66B2FF",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1 style={{ color: "Green", fontSize: "45px" }}>LOGO</h1>
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            listStyle: "none",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
        <input
          type="text"
          placeholder="search"
          style={{
            outline: "none",
            border: "1px solid black",
            width: "15%",
            borderRadius: "3px",
            padding: "8px",
            fontSize: "15px",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
