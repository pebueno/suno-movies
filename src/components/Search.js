import React, { useState, useEffect } from "react";
import "./styles/Search.scss";
import "./styles/SearchCard.scss";

import { Link, useHistory } from "react-router-dom";
import { SearchCard } from "./SearchCard";
import { ReactComponent as SearchOne } from "../images/search1.svg";
import { ReactComponent as SearchTwo } from "../images/search2.svg";
import api from "./services/Api";
const api_key = process.env.REACT_APP_API_KEY;

export function Search() {
  const [click, setClick] = useState(false);
  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const history = useHistory();

  function handleClick() {
    if (click === false) {
      document.getElementById("page-mask").style.display = "block";
    } else {
      document.getElementById("page-mask").style.display = "none";
    }
    setClick(!click);
  }

  const closeSearchMenu = () => setClick(false);
  function eraseSearchInput() {
    setData([]);
    document.getElementById("movieName").value = "";
  }

  function handleChange(event) {
    if (event.target.value !== "") {
      setSearch(event.target.value);
      searchMovies.then((response) => {
        setData(response.data.results);
      });
    }
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
  const searchMovies = api.get(
    "search/movie?api_key=" +
      api_key +
      "&language=pt-BR&query=" +
      search +
      "&sort_by=popularity.desc&include_adult=false"
  );
  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  useEffect(() => {
    api
      .get("genre/movie/list?api_key=" + api_key + "&language=pt-BR")
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        console.warn("Ocorreu um erro ao consultar gêneros!");
      });
  }, []);
  return (
    <div>
      <div
        className="search-icon"
        onClick={() => {
          handleClick();
          eraseSearchInput();
        }}
      >
        <Link className={click ? null : "search"}>
          <SearchOne className="search-one" />
          <SearchTwo className="search-two" />
        </Link>
      </div>
      <div className={click ? "background active" : "background"}>
        <div className={click ? "search-menu active" : "search-menu"}>
          <form>
            <input
              id="movieName"
              name="movieName"
              autocomplete="off"
              onChange={handleChange}
              value={search.movieName}
            />
          </form>
          <div className="search-result">
            {data.map((movie, i) => (
              <Link
                className="search-card"
                // to={"movie/" + movie.id}
                // replace
                key={movie.id}
                id={movie.id}
                onClick={() => {
                  closeSearchMenu();
                  eraseSearchInput();
                  history.push("movie/" + movie.id, { from: "Home" });
                  history.push(movie.id, { from: "Movie" });
                }}
              >
                <SearchCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  genre={HandleGenreName(movie.genre_ids)}
                  img_url={getImage(movie.poster_path)}
                  vote_average={movie.vote_average}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
