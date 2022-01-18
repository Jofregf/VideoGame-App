import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { getVideoGames, order, getGenres} from "../../Action/index";
import Paged from "../Paged/Paged";
import SearchBar from "../SearchBar/SearchBar";
import FilterDbOrApi from "../Filter/FilterDBorAPI";
import FilterGenres from "../Filter/FilterGenres";
import FilterYear from "../Filter/FilterYear";
import Spinner from '../Spinner/Spinner'
import "./Home.css";

// export  const sreb = ['Mature', 'Everyone 10+', 'Teen', 'Adults Only', 'null', 'Rating Pending', 'Everyone']

function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.videogames);
  const loading = useSelector((state) => state.LOADING);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);
  const lasIndexGame = currentPage * gamesPerPage;
  const firstIndexGame = lasIndexGame - gamesPerPage;
  const currentGames = videogames.slice(firstIndexGame, lasIndexGame);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getVideoGames());
  }

  //!--------- FILTROS ----------------------------------

  const [, setOrderAlph] = useState("");

  function handleAlpha(event) {
    dispatch(order(event.target.value));
    setCurrentPage(1);
    setOrderAlph("Order" + event.target.value);
  }

  const [, setOrderRating] = useState("");

  function handleRating(event) {
    dispatch(order(event.target.value));
    setCurrentPage(1);
    setOrderRating("Order" + event.target.value);
  }

  const Page = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // function handleFilterSreb (event) {
  //   dispatch(filterBySREB(event.target.value))
  // }

  // const [,setRating] = useState('');
  // function filterByRating(event) {
  //   dispatch(filterRating(event.target.value));
  //   setCurrentPage(1)
  //   setRating('FilterRating' + event.target.value);
  // }

  useEffect(() => {
    dispatch(getVideoGames());
    dispatch(getGenres());
  }, [dispatch, loading]);

  return (
    <div className="body-home">
      <div className="upperContainer">
        <span className="HomeReloadDiv">
          <Link style={{ textDecoration: "none" }} to="/home" className="bn31">
            <button
              className="bn31span"
              onClick={(event) => {
                handleClick(event);
              }}
            >
              Reload
            </button>
          </Link>
        </span>
        <span className="home-search">
          <SearchBar />
        </span>
        <span className="HomeCreateDiv">
          <Link
            style={{ textDecoration: "none" }}
            to="/create"
            className="bn31"
          >
            <button className="bn31span">Create</button>
          </Link>
        </span>
      </div>

      <div className="FiltersHome">
        <FilterDbOrApi />
        <FilterGenres />
        <FilterYear />

        <div style={{ height: "100px" }}>
          <select defaultValue={''} onChange={(event) => handleAlpha(event)}>
            

          <option value='' disabled>Filter Alphabetic</option>
            <option value="asc">a-z</option>
            <option value="desc">z-a</option>
          </select>
        </div>

        <div style={{ height: "100px" }}>
          <select defaultValue={''} onChange={(event) => handleRating(event)}>
          <option value='' disabled>Filter by Rating</option>
            <option value="rat-asc">asc</option>
            <option value="rat-desc">desc</option>
          </select>
        </div>
      </div>
      <div className="home-details">
        {currentGames.length > 0 ? (
          currentGames.map((el) => (
            <Card
              key={el.id}
              image={el.image}
              name={el.name}
              genres={
                !el.createdInDb
                  ? el.genres.map((el, i) => (
                      <li style={{ listStyle: "none" }} key={i}>
                        {el}
                      </li>
                    ))
                  : el.genres.map((el, i) => (
                      <li style={{ listStyle: "none" }} key={i}>
                        {el.name}
                      </li>
                    ))
              }
              id={el.id}
            />
          ))
        ) : (
          
          <Spinner />
        )}
      </div>
      {/* <button onClick={(event) => filterByRating(event)}>filtrar</button> */}
      <Paged
        gamesPerPage={gamesPerPage}
        gamesLength={videogames.length}
        Page={Page}
      />
    </div>
  );
}

export default Home;
