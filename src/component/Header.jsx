import React from "react";
import { Link } from "react-router-dom";

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
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/play"}>Movies</Link>
          </li>
          <li>
            <Link to={"/form1"}>Form1</Link>
          </li>
          <li>
            <Link to={"/form2"}>Form2</Link>
          </li>
          <li>
            <Link to={"/form3"}>Form3</Link>
          </li>
          <li>
            <Link to={"/form4"}>Form4</Link>
          </li>
          <li>
            <Link to={"/formdemo5"}>Form5</Link>
          </li>
          <li>
            <Link to={"/form6"}>Form6</Link>
          </li>
          <li>
            <Link to={"/form7"}>Form7</Link>
          </li>
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
