import React, { useState } from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";

const SearchBox = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <div className="search">
      <div className="search__area">
        {showSearchBox && (
          <div>
            <input type="text" className="search__box" />
            <Button variant="contained" sx={{ marginLeft: "10px" }}>
              Search
            </Button>
          </div>
        )}
        <SearchIcon
          sx={{
            fontSize: "35px",
            alignItems: "center",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={() => setShowSearchBox(!showSearchBox)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
