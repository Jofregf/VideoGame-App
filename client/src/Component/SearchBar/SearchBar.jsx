import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../Action/index";
import "./SearchBar.css";

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // const[, setCurrentPage] = useState(0)

  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value.toLowerCase());
    // setCurrentPage(0)
    //console.log(name, 'HandleChange')
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getVideogamesByName(name));
    // setCurrentPage(0);
    setName("");
    //console.log(name, 'HandleSubmit')
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="inputSearchBar"
      >
        <input
          id="form"
          value={name}
          type="text"
          placeholder="Search Videogame..."
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="inputSearchBar"
        />
        <button className="bn6" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
