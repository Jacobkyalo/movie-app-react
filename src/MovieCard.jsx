import React from "react";
import { image_url } from "./config/config";
import { no_poster_img } from "./config/config";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <>
      {movie && (
        <div className="card__content">
          <img
            src={
              movie.poster_path
                ? `${image_url}/${movie.poster_path}`
                : `${no_poster_img}`
            }
            alt={movie?.title || movie?.original_title || movie?.name}
            className="poster"
          />
        </div>
      )}
    </>
  );
};

export default MovieCard;
