import React from "react";
import { TextField } from "@mui/material";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <button>Search</button>
    </div>
  );
};

export default SearchBox;
