//importing different modules which is necessary for 
// mongoose connection to database
// reqquiring dotenv file
// fs module for reading the file
// Movie is our model which we created and exported
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const fs = require("fs")
const Movie = require("../Models/MovieModel")

//config the .env file
dotenv.config()

//converting the js object in BSON formal
const Movies = JSON.parse(fs.readFileSync("./data/Movies.json","utf-8"))

//connecting the databse to js file
mongoose.connect(process.env.DB_COLLECTION_STRING)
.then(()=>{
    console.log("Db Conected")
})
.catch((err)=>{
  console.log(err.message)
})

//function to delete all the movies
const deleteMovies = async()=>{
   try{
    await Movie.deleteMany()
    console.log("movie deleted sucessfully")
   }catch(err){
    console.log(err)
   }
   process.exit()
}

//function to import all the movies
const importMovies = async()=>{
    try{
     await Movie.create(Movies)
     console.log("Movie Exported sucessfully")
    }catch(err){
     console.log(err)
    }
    process.exit()
 }

//running delete and import function on the basis of some condition
console.log(process.argv)
if(process.argv[2]=="--delete")
{
    deleteMovies()
}

if(process.argv[2]=="--import")
{
    importMovies()
}