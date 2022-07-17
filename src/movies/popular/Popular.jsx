import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../MovieCard";
import "../../movies/trending/Trending.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setPopular(res.data.results);
    //console.log(res.data.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <section className="movie">
      <h2>Popular</h2>
      <div className="movie__content">
        {popular &&
          popular.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </section>
  );
};

export default Popular;
