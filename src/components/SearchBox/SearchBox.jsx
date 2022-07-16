import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search">
      <div className="search__area">
        <input type="text" className="search__box" />
        <Button variant="contained" sx={{ marginLeft: "3px" }}>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
