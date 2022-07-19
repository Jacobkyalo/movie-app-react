import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovie(data.data);
      //console.log(data.data);
    };
    fetchMovieDetails();
  });

  return (
    <div>
      <header className="header">
        <Header />
        <SearchBox />
      </header>
      {movie && (
        <div className="modal">
          <div className="modal__content">
            <h2>{movie.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
