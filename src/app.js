const express = require("express");
const helloRoutes = require("./routes/helloRoutes");
const moviesListRoutes = require("./routes/moviesListRoutes")
const errorHandler = require("./middleware/errorHandler")

const app = express(); // Create an Express application
app.use(express.json()); // Middleware to parse JSON request bodies

app.use(helloRoutes);
app.use(moviesListRoutes);
app.use(errorHandler);

module.exports = app;