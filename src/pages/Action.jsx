import React from "react";
import GenresCard from "./GenresCard";
import genresRequests from "../GenresRequests/GenresRequests";

const Action = () => {
  return (
    <div className="action">
      <GenresCard
        title={"Action Movies"}
        fetchURL={genresRequests.fetchAction}
      />
    </div>
  );
};

export default Action;
