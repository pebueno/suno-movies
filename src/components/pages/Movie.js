// import React from "react";
import React, { useState, useEffect, useReducer } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../App.scss";
import "../styles/Movie.scss";
import "../styles/Catalogo.scss";
import api from "../services/Api";
import ReactPlayer from "react-player";
import { ReactComponent as Star } from "../../images/star.svg";

const api_key = process.env.REACT_APP_API_KEY;

const initialState = {
  loading: true,
  error: "",
  genres: {},
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        genres: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        genres: {},
        error: "Error",
      };
    default:
      return state;
  }
};

export default function Movie() {
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [video, setVideo] = useState();
  const { id } = useParams();
  // console.log(id);

  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  useEffect(() => {
    api
      .get(`/movie/${id}?api_key=${api_key}&language=pt-BR`)
      .then(function (response) {
        setGenre(response.data.genres[0].name);
        setMovie(response.data);
      })
      .catch(function (error) {
        return null;
      });

    // GET video
    api
      .get(`/movie/${id}/videos?api_key=${api_key}&language=pt-BR`)
      .then(function (response) {
        // console.log(response.data.results[0].key)
        setVideo(response.data.results[0].key);
      })
      .catch(function (error) {
        return null;
      });
  });
  return (
    <>
      <section className="background-image">
        <div className="container">
          <div className="info">
            <div className="info-top">
              <img
                src={getImage(movie.poster_path)}
                alt={`Capa do filme ${movie.title}`}
                className="image"
              />
              <div className="info-text">
                <h1 className="title">{movie.title}</h1>
                <div className="upper-text">
                  <p className="genre">{genre}</p>
                  <p className="rate">
                    <Star className="star" />
                    {movie.vote_average}
                  </p>
                </div>
                <div className="lower-text">
                  <h3 className="sinopse">Sinopse</h3>
                  <p className="overview">{movie.overview}</p>
                </div>
              </div>
            </div>
            <h3 className="trailer-text">Trailer</h3>

            <div className="trailer">
              <ReactPlayer
                className="video"
                url={`https://www.youtube-nocookie.com/embed/${video}`}
                width="100%"
                height="579px"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
