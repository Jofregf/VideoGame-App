import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ name, image, genres, id }) {
  return (
    <div className="card-container">
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
