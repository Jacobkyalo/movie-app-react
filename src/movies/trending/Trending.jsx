import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../MovieCard";
import "./Trending.css";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrending(res.data.results);
    //console.log(res.data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <section className="trending">
      <h2 className="title" style={{ padding: "0" }}>
        Trending
      </h2>
      <div className="trending__content">
        {trending &&
          trending.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
      </div>
    </section>
  );
};

export default Trending;
