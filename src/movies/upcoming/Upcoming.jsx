import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../MovieCard";
import "../../movies/trending/Trending.css";

const Upcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  const fetchUpcoming = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setUpcoming(res.data.results);
    //console.log(res.data.results);
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <section className="movie">
      <h2>Upcoming</h2>
      <div className="movie__content">
        {upcoming &&
          upcoming.map((movie, index, backdrop, title) => (
            <MovieCard
              movie={movie}
              key={index}
              backdrop={backdrop}
              title={title}
            />
          ))}
      </div>
    </section>
  );
};

export default Upcoming;
