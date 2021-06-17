// import React, { useEffect, useState } from "react";
import React, { useState, useEffect, useReducer } from "react";
import "../../App.scss";
import "../styles/Featured.scss";
import "../styles/Catalogo.scss";

import { Link } from "react-router-dom";

import { ReactComponent as Star } from "../../images/star.svg";
import { ReactComponent as Ellipse } from "../../images/ellipse.svg";
import api from "../services/Api";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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

export default function Home() {
  //Filmes mais recentes no banco de dados
  const [data, setData] = useState([]);
  const [className, setClassName] = useState("grid");
  // const [getGenres, setGetGenres] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const getUpcoming = api.get(
    "movie/upcoming?api_key=" + api_key + "&language=pt-BR"
  );

  const fetchMovies = (genre) => {
    // console.log(genre);
    // make an API call here and update a state for movies
  };
  // const getGenreList = api.get("genre/movie/list", {
  //   params: { api_key },
  // });

  // https://image.tmdb.org/t/p/w500/8ebc6b6a6b73261ffff682818879525d/movie/upcoming
  // https://api.themoviedb.org/3/movie/upcoming?api_key=8ebc6b6a6b73261ffff682818879525d&language=pt-BR&page=1

  //"&language=pt-BR"
  //?api_key=8ebc6b6a6b73261ffff682818879525d

  useEffect(() => {
    api
      .get("genre/movie/list?api_key=" + api_key + "&language=pt-BR")
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }, []);
  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  getUpcoming.then((response) => {
    setData(response.data.results);
  });

  // getGenreList.then((response) => {
  //   setGetGenres(response.data.results);
  // });
  // const getGenre =

  //Propriedade do Carousel
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <>
      <section className="background-image">
        <div className="feature-container">
          <p className="feature-title">
            <Ellipse className="ellipse" />
            <strong>LANÇAMENTOS</strong> DA SEMANA{" "}
          </p>
          <Carousel
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls
            buttonsDisabled={true}
          >
            {data.map((movie) => (
              <Link className="movie-card">
                <img
                  className="movie-image"
                  src={getImage(movie.poster_path)}
                  alt={movie.title}
                />
                <p className="movie-title">{movie.title}</p>
                <p className="movie-genre">{movie.genres_name}</p>
                <p className="movie-rate">
                  <Star className="star" />
                  {movie.vote_average}
                </p>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>
      <section className="catalogo">
        <div className="catalogo-header">
          <div className="header-container">
            <p className="catalogo-title">
              <Ellipse className="ellipse" />
              <strong>Catálogo</strong> Completo{" "}
            </p>
          </div>
        </div>
        <div className="catalogo-container">
          <div className="catalogo-escolhas">
            <select className="catalogo-filtro">
              <option selected disabled>
                por gênero
              </option>
              {state.loading
                ? "Loading"
                : state.genres.genres.map((genre) => (
                    <option key={genre.id} onClick={() => fetchMovies(genre)}>
                      {genre.name}
                    </option>
                  ))}
              {state.error ? state.error : null}
            </select>
            <button className="catalogo-populares">mais populares</button>
            <select
              className="catalogo-exibicao"
              onChange={(e) => setClassName(e.target.value)}
            >
              <option value="grid">em grid</option>
              <option value="list">em lista</option>
            </select>
            {/* <button
              className="view-btn list-view"
              title="List View"
              onClick={() => setClassName("list")}
            >
              List View
            </button>
            <button
              className="view-btn list-view"
              title="Grid View"
              onClick={() => setClassName("grid")}
            >
              Grid View
            </button> */}
          </div>
          <div className={className}>
            {data.map((movie) => (
              <Link className="movie-card">
                <table>
                  <tr>
                    <td>
                      <img
                        className="movie-image"
                        src={getImage(movie.poster_path)}
                        alt={movie.title}
                      />{" "}
                    </td>
                    <td className="movie-data">
                      <p className="movie-title">{movie.title}</p>
                      <p className="movie-genre">{movie.genres_name}</p>
                      <p className="movie-rate">
                        <Star className="star" />
                        {movie.vote_average}
                      </p>
                      <p className="movie-overview">{movie.overview}</p>
                    </td>
                  </tr>
                </table>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
