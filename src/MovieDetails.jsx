import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import { useParams } from "react-router-dom";
import { image_url } from "./config/config";
import { no_poster_img } from "./config/config";
import { no_backdrop_img } from "./config/config";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const params = useParams();

  const fetchMovieDetails = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMovie(data.data);
    //console.log(data.data);
  };

  const fetchTopCast = async () => {
    const credits = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(credits.data.cast);
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchTopCast();
  }, []);

  return (
    <div>
      <header className="header">
        <Header />
        <SearchBox />
      </header>
      {movie && (
        <div className="modal">
          <div className="modal__content">
            <div className="poster__modal">
              <img
                src={
                  movie.poster_path
                    ? `${image_url}${movie.poster_path}`
                    : `${no_poster_img}`
                }
                alt={movie?.title || movie?.original_title || movie?.name}
                className={"poster"}
              />
            </div>
            <div className="other__modal__content">
              <h1>{movie.title}</h1>
              <h2>{movie.release_date}</h2>
              <p className="tagline">{movie.tagline}</p>
              <div className="runtime__rating">
                <p className="vote">{movie.vote_average}</p>
                <p className="runtime">
                  <span>{movie.runtime}min</span>
                  <span>{movie.release_date}</span>
                  <span>{movie.original_language}</span>
                </p>
              </div>
              {/* <div className="genres">
                <ul className="genres__lists">
                  {movie.genres.map((genre) => (
                    <li key={genre.id} className="genre__list">
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="overview">
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
              <div className="cast">
                <h3>Top Cast</h3>
                <ul>
                  {credits &&
                    credits.map((credit) => (
                      <li key={credit.id}>{credit.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
