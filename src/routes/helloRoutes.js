const express = require("express"); // Import the express module
const router = express.Router(); // Create a router instance
const helloService = require("../services/helloService"); // Import the helloService module

router.post("/hello", (req, res, next) => {
    try {
        const result = helloService.sayHello();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
});

module.exports = router;