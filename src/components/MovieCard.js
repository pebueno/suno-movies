import React from "react";
import "./styles/Catalogo.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../images/star.svg";

export default function Movie(props) {
  return (
    <Link
      className="movie-card"
      to={"movie/" + props.id}
      key={props.id}
      id={props.id}
    >
      <table>
        <tr>
          <td>
            <img
              className="movie-image"
              src={props.img_url}
              alt={props.title}
            />{" "}
          </td>
          <td className="movie-data">
            <p className="movie-title">
              {props.title.length >= 24
                ? props.title.substring(0, 24) + "..."
                : props.title}
            </p>
            <p className="movie-genre">{props.genre}</p>
            <p className="movie-rate">
              <Star className="star" />
              {props.vote_average}
            </p>
            <p className="movie-overview">
              {props.overview.length >= 240
                ? props.overview.substring(0, 240) + "..."
                : props.overview}
            </p>
          </td>
        </tr>
      </table>
    </Link>
  );
}
