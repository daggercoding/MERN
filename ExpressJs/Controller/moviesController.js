const Movie = require("../Models/MovieModel")

exports.getAllMovies=async (req,res)=>
{
   try{
      let movies =await Movie.find()
      res.status(200).json({
        status:"sucess",
        data:{
            movies
        }
      })
   }
   catch(err)
   {
   res.status(404).json({
    status:"something went wrong",
    message:err.message
   })
   }
    
}

exports.getMoviesById=async(req,res)=>
{
    try{
    let movie=await Movie.findById(req.params.id)
     res.status(200).json({
        status:"sucess",
        data:{
            movie
        }
      })
    }
    catch(err)
   {
   res.status(404).json({
    status:"something went wrong",
    message:err.message
   })
   } 
}

exports.postMovie = async (req,res)=>
{
 //sending movie to database
 try{
    let newMovie = await Movie.create(req.body)
    res.status(200).json({
    status:"sucess",
    data:{
        newMovie
    }
 })}
 catch(error){
  res.status(404).json({
    message:error.message
  })
 } 
}

exports.updateMovie =async(req,res)=>
{
    try{
    let updatedMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.status(200).json({
        status:"sucess",
        data:{
            updatedMovie
        }
    })
    }catch(err){
     res.status(404).json({
     message:err.message
     })
    }

    
}

exports.deleteMovie=async(req,res)=>
{
    try{
        let deletedMovie = await Movie.findByIdAndDelete(req.params.id,{new:true})
        res.status(200).json({
            status:"sucess",
            data:{
                deletedMovie
            }
        })
        }catch(err){
         res.status(404).json({
         message:err.message
         })
        }
}
