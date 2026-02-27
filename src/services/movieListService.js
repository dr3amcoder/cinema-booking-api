const movieList = require("../data/movies.js");

const getMovies = () => {
    return movieList;
}

const getMovieById = (id) => {
    const movie = movieList.movies.find(movie => movie.id === id);
    return movie;
}

module.exports = { getMovies, getMovieById };