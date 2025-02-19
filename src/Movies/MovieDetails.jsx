// import axios from "axios";
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// const MovieDetails = () => {
//   const id = useParams().id;
//   const [details, setdetails] = useState({});

//   const getDetails = async () => {
//     const detail = await axios.get(
//       "http://www.omdbapi.com/?i=tt3896198&apikey=61c12fb1&i=" + id
//     );

//     console.log(detail);
//     setdetails(detail.data);
//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Movies details : {id}</h1>
//       <button onClick={getDetails}>Get Data</button>
//       {details.Country}
//     </div>
//   );
// };

// export default MovieDetails;

// import axios from "axios";
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// export const MovieDetails = () => {
//   const id = useParams().id;
//   const [detail, setdetail] = useState({});

//   const getDetail = async () => {
//     const res = await axios.get(
//       "http://www.omdbapi.com/?apikey=61c12fb1&i=" + id
//     );
//     console.log(res.data);
//     setdetail(res.data);
//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>MOVIE DETAIL - {id}</h1>
//       <button
//         onClick={() => {
//           getDetail();
//         }}
//       >
//         detail
//       </button>
//       {/* <h1>COUNTRY {detail?.Country}</h1> */}
//       <div className="col-md-6 mb-4 mt-4">
//         <div className="card d-flex flex-row p-3 shadow-sm">
//           <img
//             src={detail?.Poster}
//             className="img-thumbnail me-3"
//             alt={detail?.Title}
//             style={{ width: "180px", height: "auto" }}
//           />
//           <div className="card-body">
//             <h5 className="card-title">
//               {detail?.title} ({detail?.Actors})
//             </h5>
//             <p className="card-text">
//               <strong>Awards:</strong> {detail?.Awards}
//             </p>
//             <p className="card-text">
//               <strong>Language:</strong> {detail?.Language}
//             </p>
//             <p className="card-text">{detail?.Writer}</p>
//             <div className="badge bg-warning text-dark">
//               ⭐ {detail?.imdbRating}
//             </div>
//             <br />
//             <div>{detail?.Year}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=61c12fb1&i=${id}`
        );
        setDetail(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    getDetails();

    // Auto-generate bubbles every 3 seconds
    const interval = setInterval(createBubbles, 3000);

    return () => clearInterval(interval); // Cleanup
  }, [id]);

  const createBubbles = () => {
    const container = document.querySelector(".bubble-container");
    if (!container) return;

    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 6 + 3}s`;
      container.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 8000);
    }
  };

  if (!detail) {
    return <h2 style={styles.loading}>Loading...</h2>;
  }

  return (
    <div style={styles.movieDetail}>
      {/* Stars & Bubbles */}
      <div className="stars"></div>
      <div className="bubble-container"></div>

      {/* Background Blur Poster */}
      <div
        style={{
          ...styles.backgroundPoster,
          backgroundImage: `url(${detail.Poster})`,
        }}
      />

      <div style={styles.movieContent}>
        <img
          src={detail.Poster}
          alt={detail.Title}
          style={styles.moviePoster}
        />

        <div style={styles.movieInfo}>
          <h1>
            {detail.Title} <span>({detail.Year})</span>
          </h1>
          <p style={styles.genre}>
            {detail.Genre} | {detail.Runtime} | {detail.Released}
          </p>

          <div style={styles.rating}>
            ⭐ <strong>{detail.imdbRating}</strong> / 10
          </div>

          <p style={styles.plot}>{detail.Plot}</p>

          <p>
            <strong>Director:</strong> {detail.Director}
          </p>
          <p>
            <strong>Stars:</strong> {detail.Actors}
          </p>
          <p>
            <strong>Country:</strong> {detail.Country}
          </p>

          <div style={styles.buttons}>
            <button style={styles.watchTrailer}>🎬 Watch Trailer</button>
            <button style={styles.addWatchlist}>⭐ Add to Watchlist</button>
          </div>
        </div>
      </div>

      {/* Stars & Bubbles CSS */}
      <style>
        {`
          /* Twinkling Golden Stars */
          .stars {
            position: fixed;
            width: 100%;
            height: 100vh;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 30%);
            background-size: 400px 400px;
            animation: twinkle 10s infinite alternate;
            z-index: -1;
          }

          @keyframes twinkle {
            0% { opacity: 0.4; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
          }

          /* Golden Glitter Stars */
          .stars:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://image.shutterstock.com/image-illustration/golden-sparkles-glitter-streaks-texture-260nw-2204284846.jpg') repeat;
            animation: glitter 3s infinite linear;
            z-index: -2;
          }

          @keyframes glitter {
            0% { background-position: 0 0; }
            100% { background-position: 100% 100%; }
          }

          /* Floating Bubbles */
          .bubble-container {
            position: fixed;
            width: 100%;
            height: 100vh;
            pointer-events: none;
            overflow: hidden;
          }

          .bubble {
            position: absolute;
            bottom: -50px;
            width: 15px;
            height: 15px;
            background-color: rgba(255, 215, 0, 0.5); /* Gold color for bubbles */
            border-radius: 50%;
            animation: floatUp ease-in infinite;
            box-shadow: 0px 0px 10px rgba(255, 215, 0, 0.8);
          }

          @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 0.7; }
            100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default MovieDetails;

/* Styles */
const styles = {
  movieDetail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    backgroundColor: "#0a0a0a",
    minHeight: "100vh",
    paddingTop: "50px",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  backgroundPoster: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "40vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(10px)",
    opacity: 0.15,
    zIndex: -1,
  },

  movieContent: {
    display: "flex",
    gap: "30px",
    maxWidth: "900px",
    backgroundColor: "#1a1a1a",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },

  moviePoster: {
    width: "250px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)",
    transition: "transform 0.3s",
  },

  movieInfo: {
    flex: 1,
    textAlign: "left",
  },

  genre: {
    fontSize: "18px",
    color: "#ddd",
    marginBottom: "10px",
    fontWeight: "bold",
  },

  rating: {
    fontSize: "22px",
    margin: "10px 0",
    color: "#ff9800",
    fontWeight: "bold",
  },

  plot: {
    fontSize: "16px",
    color: "#ccc",
    marginBottom: "15px",
    lineHeight: "1.6",
  },

  buttons: {
    marginTop: "20px",
  },

  watchTrailer: {
    fontSize: "16px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    marginRight: "10px",
    backgroundColor: "#007bff",
    color: "white",
    transition: "0.3s",
  },

  addWatchlist: {
    fontSize: "16px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: "#ff5722",
    color: "white",
    transition: "0.3s",
  },

  loading: {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "24px",
    color: "#fff",
  },
};
