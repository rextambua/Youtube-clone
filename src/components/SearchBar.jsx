import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
      />
      <IconButton
        type="submit"
        aria-label="search"
        sx={{ p: "10px", color: "red" }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
