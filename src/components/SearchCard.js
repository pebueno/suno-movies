import React from "react";
import "./styles/SearchCard.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../images/star.svg";

export function SearchCard(props) {
  return (
    <Link
      className="search-card"
      to={"movie/" + props.id}
      key={props.id}
      id={props.id}
    >
      <div className="movie-container">
        <table>
          <tr>
            <td>
              <img
                className="movie-image"
                src={props.img_url}
                alt={props.title}
              />
            </td>
            <td className="movie-data">
              <p className="movie-title">
                {props.title.length >= 12
                  ? props.title.substring(0, 12) + "..."
                  : props.title}
              </p>
              <p className="movie-genre">{props.genre}</p>

              <p className="movie-rate">
                <Star className="star" />
                {props.vote_average}
              </p>
            </td>
          </tr>
        </table>
      </div>
    </Link>
  );
}
