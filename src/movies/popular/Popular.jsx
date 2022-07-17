import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../MovieCard";
import "./Popular.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/popular/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setPopular(res.data.results);
    //console.log(res.data.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <section className="popular">
      <h2 className="title" style={{ padding: "0" }}>
        popular
      </h2>
      <div className="popular__content">
        {popular &&
          popular.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </section>
  );
};

export default Popular;
