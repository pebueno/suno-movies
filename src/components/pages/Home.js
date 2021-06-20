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
import CatalogoHeader from "../CatalagoHeader";
import Movie from "../MovieCard";
import MovieMobile from "../MovieMobile";

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
  const [data, setData] = useState([]);
  const [className, setClassName] = useState("grid");
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState();
  const [movie, setMovie] = useState([]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  const getUpcoming = api.get(
    "movie/upcoming?api_key=" + api_key + "&language=pt-BR"
  );

  const fetchMovies = (genre) => {
    // make an API call here and update a state for movies
  };
  // console.log(movie);

  useEffect(() => {
    loadDefaultMovies();
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    api
      .get("genre/movie/list?api_key=" + api_key + "&language=pt-BR")
      .then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
        setGenres(response.data.genres);
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

  function loadDefaultMovies() {
    api
      .get(
        `/discover/movie?api_key=${api_key}&language=pt-BR&with_genres=10751&page=1sc`
      )
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }
  function HandleGenreName(event) {
    let genreData = [];
    event.map((data) => {
      const result = genres.find((genre) => genre.id === data);
      if (result) {
        genreData.push(result.name);
      }
    });
    let generStr = `${genreData[0]}, ${genreData[1]}`;
    return generStr;
  }

  function filterByGenre(e) {
    if (e.id !== undefined) {
      setGenre(e.id);
      api
        .get(
          `/discover/movie?api_key=${api_key}&language=pt-BR&with_genres=${
            e.id
          }&page=1sc${
            e.popularity
              ? "&sort_by=popularity.desc"
              : "&sort_by=vote_average.desc"
          }`
        )
        .then((response) => {
          setMovie(response.data.results);
        })
        .catch((error) => {
          dispatch({
            type: "FETCH_ERROR",
          });
        });
    }
  }

  //Propriedade do Carousel
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  return (
    <>
      <div id="page-mask"></div>
      <section className="background-image">
        <div className="feature-container">
          <p className="feature-title">
            <Ellipse className="ellipse" />
            <strong>LANÇAMENTOS</strong> DA SEMANA{" "}
          </p>
          <Carousel
            mouseTracking
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls
            buttonsDisabled={true}
          >
            {data.map((movie) => (
              <Link
                className="movie-card"
                key={movie.id}
                id={movie.id}
                to={"movie/" + movie.id}
              >
                <img
                  className="movie-image"
                  src={getImage(movie.poster_path)}
                  alt={movie.title}
                />
                <p className="movie-title">
                  {movie.title.length >= 16
                    ? movie.title.substring(0, 16) + "..."
                    : movie.title}
                </p>
                <p className="movie-genre">
                  {HandleGenreName(movie.genre_ids)}
                </p>
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
        <CatalogoHeader />
        <div className="catalogo-container">
          <div className="catalogo-escolhas">
            <div className="grupo-filtros">
              <select
                className="catalogo-filtro"
                onChange={(e) =>
                  filterByGenre({ id: e.target.value, popularity: false })
                }
                value={genre}
              >
                <option selected disabled value="por gênero">
                  por gênero
                </option>
                {state.loading
                  ? "Loading"
                  : state.genres.genres.map((genre) => (
                      <option
                        key={genre.id}
                        value={genre.id}
                        onClick={() => fetchMovies(genre)}
                      >
                        {genre.name}
                      </option>
                    ))}
                {state.error ? state.error : null}
              </select>
              <button
                className="catalogo-populares"
                onClick={() => filterByGenre({ id: genre, popularity: true })}
              >
                mais populares
              </button>
            </div>
            <div className="catalogo-fullscreen">
              <select
                className="catalogo-exibicao"
                onChange={(e) => setClassName(e.target.value)}
              >
                <option value="grid">em grid</option>
                <option value="list">em lista</option>
              </select>
            </div>
          </div>
          <div className={className}>
            {movie.map((movie) => {
              return width > breakpoint ? (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  genre={HandleGenreName(movie.genre_ids)}
                  img_url={getImage(movie.poster_path)}
                  overview={movie.overview}
                  vote_average={movie.vote_average}
                />
              ) : (
                <MovieMobile
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  genre={HandleGenreName(movie.genre_ids)}
                  img_url={getImage(movie.poster_path)}
                  overview={movie.overview}
                  vote_average={movie.vote_average}
                />
              );
            })}
          </div>
          <div className="load-more">
            <button className="load-btn">Carregar mais</button>
          </div>
        </div>
      </section>
    </>
  );
}
