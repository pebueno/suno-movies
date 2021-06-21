import React, { useState, useEffect, useReducer } from "react";
import "../../App.scss";
import "../styles/Catalogo.scss";
import api from "../services/Api";
import Movie from "../MovieCard";
import MovieMobile from "../MovieMobile";

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

export default function Catalago() {
  const [className, setClassName] = useState("grid");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cutMovies, setCutMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState();
  const [movie, setMovie] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  const fetchMovies = (genre) => {
    // make an API call here and update a state for movies
  };
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

  function increase() {
    if (count < 3) {
      setCount(count + 1);
      let min = count * 6;
      let max = (1 + count) * 6;
      let newMoviesArray = movie.slice(min, max);
      Array.prototype.push.apply(cutMovies, newMoviesArray);
    } else if (count === 3) {
      let newMoviesArray = movie.slice(18, 20);
      Array.prototype.push.apply(cutMovies, newMoviesArray);
      setCount(0);
      loadMovies();
    }
  }

  function checkGenre() {
    if (genre !== undefined) {
      return genre;
    } else {
      return 10751;
    }
  }

  function loadMovies() {
    api
      .get(
        `/discover/movie?api_key=${api_key}&language=pt-BR&with_genres=${checkGenre()}&page=${
          page + 1
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
    setPage(page + 1);
  }
  function loadDefaultMovies() {
    api
      .get(
        `/discover/movie?api_key=${api_key}&language=pt-BR&with_genres=10751&page=1sc`
      )
      .then((response) => {
        setMovie(response.data.results);
        let cutResult = response.data.results;
        cutResult = cutResult.slice(0, 6);
        setCutMovies(cutResult);
        setCount(1);
        setPage(1);
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }

  function HandleGenreName(event) {
    let genreData = [];
    event.forEach((data) => {
      const result = genres.find((genre) => genre.id === data);
      if (result) {
        genreData.push(result.name);
      }
    });
    function notUndefined() {
      if (genreData[0] === undefined) {
        return "";
      } else if (genreData[1] === undefined) {
        return genreData[0];
      } else {
        return genreData[0] + ", " + genreData[1];
      }
    }
    let generStr = `${notUndefined()}`;
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
          cutMovies.length = 0;
          setCount(1);
          setPage(1);
          increase();
          let cutResult = response.data.results;
          cutResult = cutResult.slice(0, 6);
          setCutMovies(cutResult);
        })
        .catch((error) => {
          dispatch({
            type: "FETCH_ERROR",
          });
        });
    }
  }
  return (
    <>
      <div id="page-mask"></div>
      <section className="catalogo">
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
                        onClick={() => {
                          setPage(0);
                          fetchMovies(genre);
                        }}
                      >
                        {genre.name}
                      </option>
                    ))}
                {state.error ? state.error : null}
              </select>
              <button
                className="catalogo-populares"
                onClick={() => {
                  filterByGenre({ id: genre, popularity: true });
                  setPage(0);
                }}
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
            {cutMovies.map((movie) => {
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
            <button className="load-btn" onClick={increase}>
              Carregar mais
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
