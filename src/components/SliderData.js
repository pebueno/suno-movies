// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const api_key = process.env.REACT_APP_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";

// const api = axios.create({
//   baseURL: BASE_URL
// })

// class SliderData extends { Component} {
//   constructor() {
//     super();
//     api.get('/').then(res => {
//       console.log(res.data);
//     })
//   }
// }
// const [data, setData] = useState([]);

// const api = axios.create({ baseURL: BASE_URL });

// const getUpcoming = api.get("movie/upcoming", {
//   params: { api_key },
// });

// useEffect(() => {}, []);

// getUpcoming.then((response) => {
//   setData(response.data.results);
// });

//     const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
// export const SliderData = {data.map((movie) => (

// ))};

export const SliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];
