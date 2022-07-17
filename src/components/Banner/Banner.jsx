import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banner.css";

const Banner = () => {
  const [banner, setBanner] = useState();

  const fetchBannerDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=28`
    );
    setBanner(
      res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
    );
    //console.log(res.data.results);
  };

  useEffect(() => {
    fetchBannerDetails();
  }, []);

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${banner?.backdrop_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {banner && (
        <div className="banner__content">
          <h3 className="banner__title">
            {banner?.original_title ||
              banner?.title ||
              banner?.original_name ||
              banner?.name}
          </h3>
          <p className="banner__overview">{banner.overview}</p>
        </div>
      )}
    </section>
  );
};

export default Banner;
