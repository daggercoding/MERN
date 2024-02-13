const mongoose = require("mongoose")
const dotenv = require("dotenv")
const fs = require("fs")
const Movie = require("../Models/MovieModel")


dotenv.config()

const Movies = fs.readFileSync("./data/Movies.json","utf-8")

mongoose.connect(process.env.DB_COLLECTION_STRING)
.then(()=>{
    console.log("Db Conected")
})
.catch((err)=>{
  console.log(err.message)
})

const deleteMovies = async()=>{
   try{
    await Movie.deleteMany()
    console.log("movie deleted sucessfully")
   }catch(err){
    console.log(err)
   }
}