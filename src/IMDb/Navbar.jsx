import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        className="nav"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          //   alignItems: "center",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            //   alignItems: "center",
          }}
        >
          <li>
            <Link to={"/"}>IMDb</Link>
          </li>
          <li>
            <Link to={"/"}>Menu</Link>
          </li>
          <li>
            <button>All</button>
            <input type="text" />
          </li>
          <li>
            <Link to={"/watchlist"}>Watchlist</Link>
          </li>
          <li>
            <Link to={"/signin"}>Signin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
