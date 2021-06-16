// const apiBaseUrl = 'https://api.themoviedb.org/3'
// const apiKey = process.env.REACT_APP_API_KEY

// const Api = {

//     getTrendingMovies: async() => {
//        const trendingMovies = await fetchApi(`/trending/movie/week?api_key=${apiKey}&append_to_response=genre_names&language=pt-BR`)
//        const trendingMoviesWithGenders = await addMoviesGenres(trendingMovies.results)
//        return trendingMoviesWithGenders
//     },

//     getCatalogMovies: async(moviesCategorie) => {
//         const categoriesObj = {
//             'mais populares': 'sort_by=popularity.desc',
//             'ação': 'with_genres=28',
//             'drama': 'with_genres=18',
//             'comédia': 'with_genres=35',
//             'romance': 'with_genres=10749',
//             'aventura': 'with_genres=12'
//         }
//         const catalogMovies = await fetchApi(`/discover/movie?api_key=${apiKey}&language=pt-BR&${categoriesObj[moviesCategorie.toLowerCase()]}`)
//         const catalogMoviesWithGenres = await addMoviesGenres(catalogMovies.results)
//         return catalogMoviesWithGenres
//     },

//     getMovie: async(id) => {
//         const movie = await fetchApi(`/movie/${id}?api_key=${apiKey}&append_to_response=videos&language=pt-BR`)
//         return movie
//     },

//     searchMovie: async(query) => {
//         const searchResult = await fetchApi(`/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`)
//         const searchResultWithGenres = await addMoviesGenres(searchResult.results)
//         return searchResultWithGenres
//     }
// }

// const fetchApi = async(endpoint) => {
//     const req = await fetch(`${apiBaseUrl + endpoint}`)
//     const data = await req.json()
//     return data
// }

// const addMoviesGenres = async(movieList) => {
//     const res = await fetchApi(`/genre/movie/list?api_key=${apiKey}&language=pt-BR`)
//     const genreList = res.genres

//     const genresObj = {}
//     genreList.forEach(genre => genresObj[genre.id] = genre.name)

//     movieList.forEach(movie => {
//         const movieGenres = []
//         movie.genre_ids.forEach(id => movieGenres.push(genresObj[id]))
//         movie.genres = movieGenres
//     })
//     return movieList
// }

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const Api = axios.create({ baseURL: BASE_URL });

export default Api;
