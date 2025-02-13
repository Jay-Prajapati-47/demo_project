import React from "react";
import { Link } from "react-router-dom";
// import PlayMovie from "./PlayMovie";

const Movies = () => {
  const Moviess = [
    { id: 1, name: "jay" },
    { id: 2, name: "harshil" },
    { id: 3, name: "amit" },
  ];
  return (
    <div>
      <h1>This is a Movies page.</h1>
      <h1>Movies :</h1>

      {/* <ul>
        <li>
          <Link to="/play/moneyheist">Money Heist</Link>
          <br />
          <Link to="/play/devra">Devra</Link>
        </li>
      </ul> */}

      {Moviess.map((i) => {
        return (
          <>
            <Link to={`/play/${i.name}`}>
              <h1>{i.name}</h1>
            </Link>
            <h1>{i.name}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Movies;
