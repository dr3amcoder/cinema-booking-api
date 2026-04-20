const showtimeList = require("../data/showtimes.js")

const showtimes = showtimeList.showtimes;

const getShowtimes = () => {
    return showtimes
}

const getShowtimeById = (id) => {
    const showtimeById = showtimes.find(showtime => showtime.id === id);
    return showtimeById
}

const getShowtimesByMovieId = (movieId) => {
    const showtimeByMovieId = showtimes.filter(showtime => showtime.movieId === movieId);
    return showtimeByMovieId
}

const getShowtimesByDate = (date) => {
    const showtimeByDate = showtimes.filter(showtime => showtime.date === date);
    return showtimeByDate
}

module.exports = { getShowtimes, getShowtimeById, getShowtimesByMovieId, getShowtimesByDate }