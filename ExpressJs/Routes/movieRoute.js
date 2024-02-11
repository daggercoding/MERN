const express =require("express")
const movieController = require("../Controller/moviesController")
const router = express.Router()


router.route("/")
.get(movieController.getAllMovies)
//here we will chaining a NewMiddleWare to Validate
.post(movieController.postMovie)

router.route("/:id")
.get(movieController.getMoviesById)
.patch(movieController.updateMovie)
.delete(movieController.deleteMovie)

module.exports = router