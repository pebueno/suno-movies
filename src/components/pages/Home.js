import React, { useEffect, useState } from "react";

import "../../App.scss";
import "../styles/Featured.scss";
// import { Featured } from "../Featured";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../../images/star.svg";
import { ReactComponent as Ellipse } from "../../images/ellipse.svg";

// import { ReactComponent as ArrowLeft } from "../../images/arrow-left.svg";
// import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";
import api from "../services/Api";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const api_key = process.env.REACT_APP_API_KEY;

export default function Home() {
  //Filmes mais recentes no banco de dados
  const [data, setData] = useState([]);

  const getUpcoming = api.get("movie/upcoming", {
    params: { api_key },
  });

  useEffect(() => {}, []);
  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  getUpcoming.then((response) => {
    setData(response.data.results);
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  // slideNext = () =>
  //   this.setState({ currentIndex: this.state.currentIndex + 1 });
  // slidePrev = () =>
  //   this.setState({ currentIndex: this.state.currentIndex - 1 });

  return (
    <>
      <div className="background-image">
        <div className="feature-container">
          {/* <ArrowLeft className="arrow-left" /> */}
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
          {/* <ArrowRight className="arrow-right" /> */}
        </div>
      </div>

      {/* <Featured
          img={getImage(movie.poster_path)}
          title={movie.title}
          overview={movie.overview}
          average={movie.vote_average}
          genre={movie.genres}
        /> */}
      <h1 className="home">HOME</h1>
    </>
  );
}
