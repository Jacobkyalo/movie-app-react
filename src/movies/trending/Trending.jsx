import React, { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrending(res.data.results);
    console.log(res.data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return <div>Trending</div>;
};

export default Trending;
