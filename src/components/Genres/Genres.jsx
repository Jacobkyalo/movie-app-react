import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Genres.css";

const Genres = () => {
  const [genres, setGenres] = useState();

  const fetchGenres = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.data.genres);
    console.log(data.data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
  }, []);

  return (
    <div className="genres">
      {genres.map((genre) => (
        <p>{genre.name}</p>
      ))}
    </div>
  );
};

export default Genres;
