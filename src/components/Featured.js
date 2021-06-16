import React, { useEffect, useState } from "react";
import "./styles/Featured.scss";
import axios from "axios";
import { ReactComponent as ArrowLeft } from "../images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../images/arrow-right.svg";
import { Carousel } from "./Carousel";
// import { ReactComponent as Star } from "../images/star.svg";
// import { Link } from "react-router-dom";

// const api_key = process.env.REACT_APP_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";
// import { ReactComponent as FeaturedBG } from "../images/feature-background.svg";

// const api = axios.create({ baseURL: BASE_URL });
export function Featured() {
  // constructor(){
  //     super();
  //     api.get('/').then(res => {
  //       console.log(res.data)
  //     })
  //   }

  //   const [data, setData] = useState([]);

  //   const getUpcoming = api.get("movie/upcoming", {
  //     params: { api_key },
  //   });

  //   useEffect(() => {}, []);

  //   getUpcoming.then((response) => {
  //     setData(response.data.results);
  //   });

  //   const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
  return (
    <div className="background-image">
      <Carousel />

      <div className="feature-container">
        <div className="carrousel">
          <ArrowLeft className="arrow-left" />
          <div className="grid-movies">
            {/* {data.map((movie) => (
              <Link className="movie-card">
                <img
                  className="movie-image"
                  src={getImage(movie.poster_path)}
                  alt={movie.original_title}
                />
                <h4 className="movie-title">{movie.title}</h4>
                <p className="movie-genre">{movie.genres}</p>
                <p className="movie-rate">
                  <Star className="star" />
                  {movie.vote_average}
                </p>
              </Link>
            ))} */}
          </div>

          <ArrowRight className="arrow-right" />
        </div>
      </div>

      {/* <img src="../images/feature-background.png" alt="" /> */}
      {/* <FeaturedBG className="background-image" /> */}
    </div>
  );
}
