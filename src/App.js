import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./moviecard";

function App() {

  const [popularMovies, setPopularMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then((res) => {
        setPopularMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716`
      )
      .then((res) => {
        setSearchedMovies(res.data.results);
      });
  }, [movieName]);

  return (
    <>
      <div className="heading">
        <h1 id="mse-heading">Movie Search Engine</h1>
        <div id="innerdiv">
          {" "}
          <input
            value={movieName}
            placeholder="search movie name"
            id="input1"
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
          />
          {/* <button
            id="btn1-styling"
            onClick={() => {
              
            }}
          >
            {" "}
            Go to wishlist{" "}
          </button> */}
        </div>
      </div>
      <div className="div-wrapper">
        {movieName === ""
          ? popularMovies.map((item, index) => {
              return (
                <MovieCard key={index}
                  poster={item.poster_path}
                  title={item.title}
                  rating={item.vote_average}
                  releaseDate={item.release_date}
                />
              );
            })
          : searchedMovies.map((item, index) => {
              return (
                <MovieCard key={index}
                  poster={item.poster_path}
                  title={item.title}
                  rating={item.vote_average}
                  releaseDate={item.release_date}
                />
              );
            })}
      </div>
    </>
  );
}

export default App;
