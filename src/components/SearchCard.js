import React from "react";
import "./styles/SearchCard.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../images/star.svg";

export function SearchCard() {
  return (
    <Link to="movie" className="search-card">
      <div className="movie-container">
        <table>
          <tr>
            <td>
              <div className="movie-image"></div>
            </td>
            <td className="movie-data">
              <p className="movie-title">The specials</p>
              <p className="movie-genre">Drama, Comédia</p>

              <p className="movie-rate">
                <Star className="star" />
                8,4
              </p>
            </td>
          </tr>
        </table>
      </div>
    </Link>
  );
}
