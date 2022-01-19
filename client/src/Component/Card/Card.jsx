import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
// import { useDispatch} from "react-redux";
// import { useState } from "react";
// import { deleteVideoGame } from "../../Action/index";

export default function Card({ name, image, genres, id }) {
  // const dispatch = useDispatch();
  
  // const [, setDelete] = useState("");

  // function deleteGame(id) {
  //   dispatch(deleteVideoGame(id));
  //   setDelete("Delete" + id);
  //   // console.log("Deleted " + id)
  // }

  return (
   
      <div className="card-container">
      {/* <div className="delete">
        <button onClick={(id) => deleteGame(id)}>X</button>
      </div> */}
        <Link to={`/videogames/${id}`} className="link-card">
          <h3 className="card-title">{name}</h3>
          <img className="card-image" src={`${image}`} alt={name} />
          <div>
            <ul className="card-genres">{genres}</ul>
          </div>
        </Link>
      </div>
    
  );
}
