const express = require("express");
const router = express.Router();
const movieServices = require("../services/movieServices");

router.get("/movies", (req, res, next) => {
    try {
        const movies = movieServices.getMovies();
        res.status(200).json(movies);
    } catch (error) {
        next(error)
    }
});

router.get("/movieById/:id", (req, res, next) => {
    console.log("I am inside the movieById route!", req.params.id)
    try {
        const movieById = movieServices.getMovieById(parseInt(req.params.id));
        if (!movieById) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(movieById);
    } catch (error) {
        console.log("I am inside the catch block", error)
        next(error)
    }
});

router.get("/movieByGenre", (req, res, next) => {
    if (req.query.genre === undefined) {
        return res.status(400).json({ "error": "genre query parameter is required" })
    }

    try {
        const movieByGenre = movieServices.getMoviesByGenre((req.query.genre));
        if (!movieByGenre) {
            return res.status(404).json({ message: "Genre not found" });
        }
        res.status(200).json(movieByGenre)
    } catch (error) {
        console.log("Error in searching for movie genre", error)
        next(error)
    }
})

router.get("/movieByName", (req, res, next) => {
    if (req.query.name === undefined) {
        return res.status(400).json({ "error": "name query parameter is required" })
    }

    try {
        const movieByName = movieServices.getMoviesByName((req.query.name));
        if (!movieByName) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(movieByName);
    } catch (error) {
        console.log("Error in searching for movie name", error)
        next(error)
    }
});

router.get("/movieByPrice", (req, res, next) => {
    try {
        const movieByPrice = movieServices.getMoviesByPrice(({ minPrice: req.query.minPrice, maxPrice: req.query.maxPrice }));
        if (!movieByPrice) {
            return res.status(400).json({ message: "Price not found" });
        }
        res.status(200).json(movieByPrice)
    } catch (error) {
        console.log("Error in searching for the movie price provided", error)
        next(error)
    }
});

module.exports = router;