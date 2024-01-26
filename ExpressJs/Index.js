const express =require("express")
const fs = require("fs")
const cors = require("cors")
const router = express.Router()

const app = express();
app.use(express.json())
app.use(cors())

let movies=JSON.parse(fs.readFileSync("./data/Movies.json", 'utf-8'))

//////////////////////////////////////////////////////
//////////// ROUTE HANDLER FUNCTION///////////////////
//////////////////////////////////////////////////////

const getAllMovies=(req,res)=>
{
    res.status(200).json({
        status:"sucess",
        count:movies.length,
        data:{
            movies:movies
        }
    })
}


const getMoviesById=(req,res)=>
{
    // + sign is used to convert string to number
    const id = +req.params.id
    let movie = movies.find((element)=>element.id===id)
    if(!movie)
    {
        return res.status(404).json({
            status:"error",
            ErrorMessage:"(: PLEASE ENTER A VALID ID :)"
        })
    }
    res.status(200).json({
        status:"sucess",
        data:{
            movie
        }
    })
}

const getMoviesByIdName=(req,res)=>
{
    // + sign is used to convert string to number
    const id = +req.params.id
    const name =req.params.name
    let movie = movies.find((element)=>element.id===id&&element.name==name)
    if(!movie)
    {
        return res.status(404).json({
            status:"error",
            ErrorMessage:"(: PLEASE ENTER A VALID ID :)"
        })
    }
    res.status(200).json({
        status:"sucess",
        data:{
            movie
        }
    })
}

const postMovie = (req,res)=>
{
    let newId = movies[movies.length-1].id+1;
    let newMovie = Object.assign({id:newId},req.body)
    movies.push(newMovie)
    
    fs.writeFile("./data/Movies.json",JSON.stringify(movies),(err)=>{
        res.status(201).send("sucessfully created")
    })

}

const updateMovie =(req,res)=>
{
    const id = +req.params.id
    const movieToEdit = movies.find((element)=>element.id===id)

    if(!movieToEdit)
    {
     return res.status(404).json({
        status:"Bad Request",
        Message:`This id :( ${id} ) does not exist`
     })
    }

    const index = movies.indexOf(movieToEdit)
    Object.assign(movieToEdit,req.body)
    
    
    movies[index] = movieToEdit

    fs.writeFile("./data/Movies.json",JSON.stringify(movies),(err)=>{
        res.status(200).json({
            status:"sucess",
            data:{
                movie:movieToEdit
            }
        })
    })
}

const deleteMovie=(req,res)=>
{
const id = +req.params.id
const movieToDelete = movies.find(element=>element.id===id)
if(!movieToDelete)
{
    res.status(404).json({
        status:"BAD REQUEST",
        message:`THERE IS NOT ANY MOVIE RELATED TO ID :> ${id}`
    })
}
const index = movies.indexOf(movieToDelete)
const deletedMovie =movies.splice(index,1)
fs.writeFile("./data/Movies.json",JSON.stringify(movies),(err)=>
{
    res.status(202).json({
        status:"sucess",
        messsage:"sucessfully DELETED the movie",
        data:{
            movie:deletedMovie
        }
    })
})
}

router.route("/")
.get(getAllMovies)
.post(postMovie)

router.route("/:id")
.get(getMoviesById)
.patch(updateMovie)
.delete(deleteMovie)

router.route("/:id/:name")
.get(getMoviesByIdName)

app.use("/api/movies",router)


app.listen(4000,()=>
{
    console.log("server is up...(:")
})