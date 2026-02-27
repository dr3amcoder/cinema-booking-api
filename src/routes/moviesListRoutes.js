const express = require("express");
const router = express.Router();
const movieListService = require("../services/movieListService");

router.get("/movies", (req, res, next) => {
    try {
        const movies = movieListService.getMovies();
        res.status(200).json(movies);
    } catch (error) {
        next(error)
    }
});

router.get("/movieById/:id", (req, res, next) => {
    console.log("I am inside the movieById route!", req.params.id)
    try {
        const movieById = movieListService.getMovieById(parseInt(req.params.id));
        if (!movieById) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(movieById);
    } catch (error) {
        console.log("I am inside the catch block", error)
        next(error)
    }
});

module.exports = router;