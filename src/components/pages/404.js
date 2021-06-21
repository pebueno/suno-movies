import React from "react";
import Lottie from "react-lottie";
import "../styles/NotFound.scss";
import movieClapper from "../../images/movie-clapper-board.json";
import { Link } from "react-router-dom";

function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: movieClapper,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div id="page-mask"></div>
      <div className="container">
        <div className="info">
          <Lottie
            className="movieClapper"
            options={defaultOptions}
            width="100"
            height="100"
          />
          <h1 id="oops">Oops ...</h1>
          <h1 id="sinto-muito">
            Sinto muito, não foi possível encontrar essa página!
          </h1>
          <div className="go-back">
            <Link to={"../"} style={{ textDecoration: "none" }}>
              <button>voltar</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
