import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGenres } from "../../Action";

function FilterGenres() {
  const dispatch = useDispatch();
  const [, setCurrentPage] = useState(1);
  const [, setFilterGenre] = useState("");
  const genres = useSelector((state) => state.genres);

  function handleFilterGenres(event) {
    dispatch(filterGenres(event.target.value));
    setCurrentPage(1);
    setFilterGenre("Order" + event.target.value);
  }
  return (
    <div style={{ height: "100px" }}>
      <select defaultValue={''} onChange={(event) => handleFilterGenres(event)}>
      <option value='' disabled>Filter by Genres</option>
        <option value="All">All</option>
        {genres &&
          genres.map((g) => {
            return (
              <option key={g.id} value={g.name}>
                {g.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default FilterGenres;
