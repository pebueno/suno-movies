// import React from "react";
// import React, { useEffect, useState } from "react";
import "../../App.scss";

// import axios from "axios";
// const api_key = process.env.REACT_APP_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";

export default function Products() {
  // const [data, setData] = useState([]);

  // const api = axios.create({ baseURL: BASE_URL });

  // const getUpcoming = api.get("movie/upcoming", {
  //   params: { api_key },
  // });

  // useEffect(() => {}, []);

  // getUpcoming.then((response) => {
  //   setData(response.data.results);
  // });

  // const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
  return (
    <>
      {/* {data.map((movie) => (
        <div>
          <img src={getImage(movie.poster_path)} alt={movie.original_title} />
          <h4>{movie.original_title}</h4>
          <p>{movie.overview}</p>
        </div>
      ))} */}
      <h1 className="products">Catalago</h1>
    </>
  );
}
