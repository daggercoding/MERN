const express =require("express")
const movieController = require("../Controller/moviesController")

const router = express.Router()

router.route("/")
.get(movieController.getAllMovies)
.post(movieController.postMovie)

router.route("/:id")
.get(movieController.getMoviesById)
.patch(movieController.updateMovie)
.delete(movieController.deleteMovie)

router.route("/:id/:name")
.get(movieController.getMoviesByIdName)

module.exports = router