import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Genres.css";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <>
      <h2 className="title">Genres</h2>
      {genres && (
        <section className="genres">
          <ul className="genres__list">
            {genres.map((genre) => (
              <li className="genre" key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Genres;
