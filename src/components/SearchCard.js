import React from "react";
import "./styles/SearchCard.scss";
import { ReactComponent as Star } from "../images/star.svg";

export function SearchCard(props) {
  return (
    <div className="movie-container">
      <table>
        <tr>
          <td>
            <img
              className="movie-image"
              src={props.img_url}
              alt={props.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://i.imgur.com/F0VhXaw.png";
              }}
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
  );
}
