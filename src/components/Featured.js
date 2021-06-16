import React, { useEffect, useState } from "react";
import "./styles/Featured.scss";
// import axios from "axios";
// import { ReactComponent as ArrowLeft } from "../images/arrow-left.svg";
// import { ReactComponent as ArrowRight } from "../images/arrow-right.svg";
// import { Carousel } from "./Carousel";

// import { ReactComponent as Star } from "../images/star.svg";
// import { Link } from "react-router-dom";
// import { ReactComponent as FeaturedBG } from "../images/feature-background.svg";

export function Featured(props) {
  // const handleDragStart = (e) => e.preventDefault();

  // const items = [
  //   <img src={props.img} onDragStart={handleDragStart} alt="" />,
  //   // <img src="path-to-img" onDragStart={handleDragStart} alt="" />,
  //   // <img src="path-to-img" onDragStart={handleDragStart} alt="" />,
  // ];

  // const responsive = {
  //   0: { items: 1 },
  //   568: { items: 2 },
  //   1024: { items: 3 },
  // };

  return (
    <div className="background-image">
      {/* <Carousel mouseTracking items={items} /> */}

      {/* <div className="feature-container">
        <div className="carrousel">
          <ArrowLeft className="arrow-left" />
          <div className="grid-movies">
            <Link className="movie-card">
              <img className="movie-image" src={props.img} alt={props.title} />
              <h4 className="movie-title">{props.title}</h4>
              <p className="movie-genre">{props.genres}</p>
              <p className="movie-rate">
                <Star className="star" />
                {props.average}
              </p>
            </Link>
          </div>

          <ArrowRight className="arrow-right" />
        </div>
      </div> */}

      {/* <img src="../images/feature-background.png" alt="" /> */}
      {/* <FeaturedBG className="background-image" /> */}
    </div>
  );
}
