import axios from "axios";
import React, { useEffect, useState } from "react";
import { image_url } from "../config/config";
import { no_poster_img } from "../config/config";

const GenresCard = ({ title, fetchURL }) => {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    const data = await axios.get(fetchURL);
    setGenres(data.data.results);
    //console.log(data.data.results);
  };

  useEffect(() => {
    fetchGenres();
  }, [fetchURL]);

  return (
    <section>
      <h2 className="genre__title">{title}</h2>
      <div className="genre__card">
        {genres &&
          genres.map((genre) => (
            <img
              src={
                genre.poster_path
                  ? `${image_url}${genre.poster_path}`
                  : `${no_poster_img}`
              }
              alt={
                genre?.original_title ||
                genre?.title ||
                genre?.original_name ||
                genre?.name
              }
              className="poster"
              key={genre.id}
            />
          ))}
      </div>
    </section>
  );
};

export default GenresCard;
