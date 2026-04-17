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
        if (movieByGenre.length <= 0) {
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
        if (movieByName.length <= 0) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.status(200).json(movieByName);
    } catch (error) {
        console.log("Error in searching for movie name", error)
        next(error)
    }
});

router.get("/movieByPrice", (req, res, next) => {
    if (req.query.minPrice === undefined && req.query.maxPrice === undefined) {
        return res.status(400).json({ "error": "Both minimum and maximum price query parameters are required" })
    }

    if (req.query.minPrice === undefined) {
        return res.status(400).json({ "error": "Minimum price query parameter is required" })
    }

    if (req.query.maxPrice === undefined) {
        return res.status(400).json({ "error": "Maximum price query parameter is required" })
    }

    if ((isNaN(req.query.minPrice) === true) && isNaN(req.query.maxPrice) === true) {
        return res.status(400).json({ "error": "Both minimum price and maximum price query parameters must be a valid numerical values" })
    }

    if (isNaN(req.query.minPrice) === true) {
        return res.status(400).json({ "error": "Minimum price query parameter must be a valid numerical value" })
    }

    if (isNaN(req.query.maxPrice) === true) {
        return res.status(400).json({ "error": "Maximum price query parameter must be a valid numerical value" })
    }

    if (parseFloat(req.query.minPrice) > parseFloat(req.query.maxPrice)) {
        return res.status(400).json({ "error": "Invalid price range provided. The minimum price must be less than maximum price" })

    }


    try {
        const movieByPrice = movieServices.getMoviesByPrice(({ minPrice: req.query.minPrice, maxPrice: req.query.maxPrice }));
        if (movieByPrice.length <= 0) {
            return res.status(400).json({ message: "Price not found" });
        }
        res.status(200).json(movieByPrice)
    } catch (error) {
        console.log("Error in searching for the movie price provided", error)
        next(error)
    }
});

module.exports = router;