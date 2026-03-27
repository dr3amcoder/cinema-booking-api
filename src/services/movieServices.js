const movieList = require("../data/movies.js");

const movies = movieList.movies;

const getMovies = () => {
    return movies;
}

const getMovieById = (id) => {
    const movie = movies.find(movie => movie.id === id);
    return movie;
}

const getMoviesByGenre = (filters) => {
    const filteredMovies = movies.filter((movie) => movie.genre.toLowerCase() === filters.toLowerCase())
    return filteredMovies;
}

// exact and partial name search
const getMoviesByName = (name) => {
    const movieName = movies.filter((movie) => movie.name.toLowerCase().includes(name.toLowerCase()))
    return movieName;
}


// get min, max and exact match price
const getMoviesByPrice = ({ minPrice, maxPrice }) => {
    const minPriceFloatConversion = parseFloat(minPrice);
    const maxPriceFloatConversion = parseFloat(maxPrice);
    const moviePrice = movies.filter((movie) => movie.price >= minPriceFloatConversion && movie.price <= maxPriceFloatConversion)

    return moviePrice
}


module.exports = { getMovies, getMovieById, getMoviesByGenre, getMoviesByName, getMoviesByPrice };