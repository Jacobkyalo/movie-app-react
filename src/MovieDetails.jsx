import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { image_url, no_poster_img } from "./config/config";
import GoBackButton from "./components/GoBackButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
import "./MovieDetails.css";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [video, setVideo] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const fetchMovieDetails = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMovie(data.data);
  };

  const fetchTopCasts = async () => {
    const credits = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(credits.data.cast);
  };

  // const fetchTrailer = async () => {
  //   const video = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  //   );
  //   setVideo(video.data.results[2]?.key);
  // };
  useEffect(() => {
    fetchMovieDetails();
    fetchTopCasts();
    //fetchTrailer();
  }, []);

  //trailer options from react-youtube
  const opts = {
    height: "300",
    width: "5500",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const playTrailer = (movie) => {
    if (video) {
      setVideo("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setVideo(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      {movie && (
        <div className="modal">
          <div className="modal__content" key={movie.id}>
            <div className="btn" onClick={() => navigate(-1)}>
              <GoBackButton text={<KeyboardBackspaceIcon />} />
            </div>
            <div className="modal__upper">
              <div className="poster__modal">
                <img
                  src={
                    movie.poster_path
                      ? `${image_url}${movie.poster_path}`
                      : `${no_poster_img}`
                  }
                  alt={movie?.title || movie?.original_title || movie?.name}
                  className={"poster"}
                  id={"details__poster"}
                />
              </div>
              <div className="other__modal__content">
                <h1>{movie.title}</h1>
                <h2>{movie.release_date}</h2>
                <p className="tagline">{movie.tagline}</p>
                <div className="runtime__rating">
                  <p className="vote" title="rating">
                    {movie.vote_average} / 10
                  </p>
                  <p className="runtime">
                    <span>{movie.runtime}min / </span>
                    <span>{movie.release_date} / </span>
                    <span>{movie.original_language}</span>
                  </p>
                </div>
                <div className="genres">
                  <>
                    {movie.genres && (
                      <ul className="genres__lists">
                        {movie.genres.map((genre) => (
                          <li key={genre.id} className="genre__list">
                            {genre.name}
                          </li>
                        ))}
                      </ul>
                    )}{" "}
                  </>
                </div>

                <div className="trailer">
                  <Button onClick={()=>playTrailer(video)}>
                    <YouTubeIcon sx={{ fontSize: 40, color: "#fff" }} />
                  </Button>
                </div>
              </div>
            </div>
            {video&&<YouTube videoId={video} opts={opts} />}
            <div className="overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div className="actors">
              <h3>Top Casts</h3>
              <ul className="casts">
                {credits &&
                  credits.map((credit) => (
                    <div className="cast">
                      <div className="cast__details" key={credit.id}>
                        <div className="img">
                          <img
                            src={
                              credit.profile_path
                                ? `${image_url}${credit.profile_path}`
                                : `${no_poster_img}`
                            }
                            alt={credit.namesss}
                            className="profile"
                          />
                        </div>
                        <li className="name">{credit.name}</li>
                        <li className="character">{credit.character}</li>
                      </div>
                    </div>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
