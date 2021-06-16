import React, { useEffect, useState } from "react";

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

export default function Home() {
  //Filmes mais recentes no banco de dados
  const [data, setData] = useState([]);
  // const [changeClass, setChangeClass] = useState("false");

  // const ToggleClass = () => {
  //   setChangeClass(!changeClass);
  // };

  const [className, setClassName] = useState("grid");

  const getUpcoming = api.get("movie/upcoming", {
    params: { api_key },
  });

  useEffect(() => {}, []);
  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  getUpcoming.then((response) => {
    setData(response.data.results);
  });

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
              <option>por gênero</option>
            </select>
            <button className="catalogo-populares">mais populares</button>
            <select className="catalogo-exibicao">
              <option
                value="grid"
                // onClick={ToggleClass}
              >
                em grid
              </option>
              <option value="list">em lista</option>
            </select>
            <button
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
            </button>
          </div>
          <div
            // className={changeClass ? "grid" : "list"}
            className={className}
          >
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
