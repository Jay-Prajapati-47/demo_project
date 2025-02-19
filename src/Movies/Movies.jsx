import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movieData, setmovieData] = useState([]);
  const [query, setquery] = useState("");

  const searchMovie = async () => {
    const data = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=61c12fb1&s=" + query
    );

    console.log(data.data);
    console.log(data.data.Search);
    setmovieData(data.data.Search);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div className="container mt-4">
        <h2 className="mb-4">Movies List</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search movies..."
          onChange={(e) => setquery(e.target.value)}
        />
        <button onClick={searchMovie}>Search</button>
        <div className="row">
          {movieData.map((movie) => (
            <div className="col-md-4 mb-3">
              <Link to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster} alt="" style={{ height: "300px" }} />
              </Link>
              <div className="card p-3">
                <h5>{movie.Title}</h5>
                <p>Year: {movie.Year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
