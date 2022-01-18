import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import logoPS from "../Image/logoPS.png";

function Landing() {
  return (
    <div className="main-container">
      <div className="bg-6">
        <div className="glitch" data-text="Welcome to VideoGames App">
          Welcome to VideoGames App
        </div>
      </div>
      <div className="container-landing">
        <div>
          <div className="containerl1r1">
            <div className="btn l1"></div>
            <div className="btn l2"></div>
          </div>
          <div className="over"></div>
          <div className="o1">
            <div className="line4"></div>
            <div className="line5"></div>
            <div className="line6"></div>
            <div className="cosito"></div>
            <div className="column2">
              <div className="button">
                <div className="triangle"></div>
              </div>
              <div className="button">
                <div className="cross">X</div>
              </div>
            </div>
            <div className="row2">
              <div className="button">
                <div className="square"></div>
              </div>
              <div className="button">
                <div className="circle-btn"></div>
              </div>
            </div>
          </div>
          <div className="o2"></div>
          <div className="touch-pad"></div>

          <div className="touch-pad2"></div>

          <div className="touch-pad3"></div>
          <div className="over-touch">
            <div className="line"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="cosito two"></div>
            <div className="arrow">
              <div className="tb"></div>
            </div>
            <div className="arrow2">
              <div className="tb"></div>
            </div>
            <div className="arrow3">
              <div className="tb"></div>
            </div>
            <div className="arrow4">
              <div className="tb"></div>
            </div>
          </div>
          <div className="touch-pad4"></div>
          <div className="touch-pad5">
            <div className="container-ps">
              <div className="p"></div>
              <div className="p1"></div>
              <div className="p2"></div>
              <div className="p3"></div>
              <div className="p4"></div>
              <div className="p5"></div>
              <div className="p6"></div>
              <div className="p7"></div>
              <div className="p8"></div>
              <div className="p9"></div>
            </div>
            <div className="circles">
              <img
                className="imglanding"
                src={logoPS}
                width="40"
                alt="alternative history playstation png logo"
              />
              <div className="down"></div>
              <div className="border">
                <div className="backcircle">
                  <div className="circle">
                    <Link to="/home">
                      <div className="circle-in"></div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border1">
                <div className="backcircle1">
                  <div className="circle1">
                    <Link to="/home">
                      <div className="circle-in"></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="s1"></div>
          <div className="s1-2"></div>
          <div className="s2"></div>
        </div>
        <div className="s2-2"></div>
      </div>
    </div>
  );
}

export default Landing;
