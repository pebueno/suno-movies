import React from "react";
// import "./styles/Catalogo.scss";
import "./styles/Movie.scss";

import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../images/star.svg";

export default function MovieMobile(props) {
  return (
    <Link
      className="movie-card"
      to={"movie/" + props.id}
      key={props.id}
      id={props.id}
    >
      <section className="background-image" style={{ marginBottom: "9rem" }}>
        <div className="container">
          <div className="info">
            <div className="info-top">
              <img className="image" src={props.img_url} alt={props.title} />{" "}
              <div className="info-text">
                <p className="title">
                  {props.title.length >= 12
                    ? props.title.substring(0, 12) + "..."
                    : props.title}
                </p>
                <div className="upper-text">
                  <p className="genre">{props.genre}</p>
                  <p className="rate">
                    <Star className="star" />
                    {props.vote_average}
                  </p>
                </div>
                <div className="lower-text">
                  <p className="overview">
                    {props.overview.length >= 240
                      ? props.overview.substring(0, 240) + "..."
                      : props.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
