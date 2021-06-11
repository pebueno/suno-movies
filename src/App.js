import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";

const api_key = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  const getUpcoming = api.get("movie/upcoming", {
    params: { api_key },
  });

  useEffect(() => {}, []);

  getUpcoming.then((response) => {
    setData(response.data.results);
  });

  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  return (
    <div className="App">
      <header className="App-header">
        {data.map((movie) => (
          <div>
            <img src={getImage(movie.poster_path)} alt={movie.original_title} />
            <p>{movie.original_title}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
