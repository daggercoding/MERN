const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config()

const app = require("./app")
const port = process.env.PORT || 8000
mongoose.connect(process.env.DB_COLLECTION_STRING)
.then((data)=>console.log("Db connected"))
.catch((err)=>console.log("err occured"))

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:String,
    age:Number,
    married:Boolean,
})

const Movie = mongoose.model("movies",movieSchema)

const newMovie = new Movie({
    name:"vishal singh",
    description:"is it the important discription",
    age:24,
    married:true
})

newMovie.save()
.then((data)=>console.log(data))
.catch((err)=>console.log(err))

app.listen(port,()=>
{
    console.log("server is up.....(:")
})