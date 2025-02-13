import React from "react";
import { useParams } from "react-router-dom";

const PlayMovie = () => {
  const name = useParams().id;
  return (
    <div>
      <h1>This is Playing Component</h1>
      <h1>{name} is Playing... </h1>
    </div>
  );
};

export default PlayMovie;
