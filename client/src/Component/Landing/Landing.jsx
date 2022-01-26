import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="body-landing">
      <div className='welcome-container'>
        <h1 className='mensaje'>Welcome to VideoGames App</h1>
      </div>
      <div >
        <div className= 'btn-landing'>
          <div className='btn-contan' >
          <Link to="/home">
            <button className= 'btn-btn'>Entrar</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
