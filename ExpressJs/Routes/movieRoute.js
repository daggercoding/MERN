const express =require("express")
const movieController = require("../Controller/moviesController")

const router = express.Router()

router.param("id",movieController.checkId)

router.route("/")
.get(movieController.getAllMovies)
//here we will chaining a NewMiddleWare to Validate
.post(movieController.validateMovie,movieController.postMovie)

router.route("/:id")
.get(movieController.getMoviesById)
.patch(movieController.updateMovie)
.delete(movieController.deleteMovie)

router.route("/:id/:name")
.get(movieController.getMoviesByIdName)

module.exports = router