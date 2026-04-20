const express = require("express")
const router = express.Router()
const showtimeServices = require("../services/showtimeServices")

router.get("/showtimes", (req, res, next) => {
    try {
        const showtimes = showtimeServices.getShowtimes()
        res.status(200).json(showtimes)
    } catch (error) {
        console.log("Error in retrieving showtime list", error)
        next(error)
    }
})

router.get("/showtimeById/:id", (req, res, next) => {
    try {
        const showtimeById = showtimeServices.getShowtimeById(parseInt(req.params.id))
        if (!showtimeById) {
            return res.status(404).json({ message: "Showtime ID not found" })
        }
        res.status(200).json(showtimeById)
    } catch (error) {
        console.log("Error in searching for showtime by Id", error)
        next(error)
    }
})

router.get("/showtimeByMovieId", (req, res, next) => {
    if (req.query.movieId === undefined) {
        return res.status(400).json({ "error": "Movie ID query parameter is required" })
    }

    try {
        const showtimeByMovieId = showtimeServices.getShowtimesByMovieId(parseInt(req.query.movieId))
        if (showtimeByMovieId.length <= 0) {
            return res.status(404).json({ message: "Showtime for the provided Movie ID not found" })
        }
        res.status(200).json(showtimeByMovieId)
    } catch (error) {
        console.log("Error in searching for showtime by movie ID", error)
        next(error)
    }
})

router.get("/showtimeByDate", (req, res, next) => {
    if (req.query.date === undefined) {
        return res.status(400).json({ "error": "Date query parameter is required" })
    }

    try {
        const showtimeByDate = showtimeServices.getShowtimesByDate(req.query.date)
        if (showtimeByDate.length <= 0) {
            return res.status(404).json({ message: "Showtime for the provided date not found" })
        }
        res.status(200).json(showtimeByDate)
    } catch (error) {
        console.log("Error in searching for showtime by date", error)
        next(error)
    }
})


module.exports = router