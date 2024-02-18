const Movie = require("../Models/MovieModel")

exports.getAllMovies=async (req,res)=>
{
  //lets have a look that how we can excludwe some query strings
  // let excludedQuery = ["sort"]
  // let newQuery = {...req.query}
  // let newQuer=excludedQuery.map(el=>delete newQuery[el])
   try{
//   but here we will directly pass the query object because it will automatically manage the query because we were using mongoose version 8.1.1 and it will be automatically managed if we use 7+version
   let queryString = JSON.stringify(req.query).toLowerCase() 
   let querystring = queryString.replace(/\b(gte|lte|lt|gt)\b/g,(match)=>`$${match}`)
   let queryObj = JSON.parse(querystring)
   
   let query = Movie.find()
    ////logic for sorting  
    // let movies = await Movie.find({duration: {$gte: 117}}).sort('price duration').exec()
    if(req.query.sort)
    {
     const sortStr = req.query.sort.toLowerCase().split(",").join(" ")
    //  console.log(sortStr)
     query = query.sort(sortStr).exec()
    }
    else{
    query = query.sort("createdAt")
    }

    ////limiting fields
    if(req.query.fields)
    {
      console.log(req.query.fields)
      const limitStr = req.query.fields.split(",").join(" ")
      query = query.select(limitStr)
    }else{
      query = query.select("-__v")
    }
    ////implimenting pagination
     const page = req.query.page
     const limit = req.query.limit
     const skip = (page-1)*limit
     query = query.skip(skip).limit(limit)
     
     
     let movies = await query
    //  console.log(movies)
    //THIS IS THE CHAINING METHOD WITH THE HELP OF THIS WE CAN ALSO FIND THE DATA USING QUERY STRINGS
    //   .where("duration")
    //   .lte(req.query.duration)
    //   .where("price")
    //   .lte(req.query.price)

      res.status(200).json({
        status:"sucess",
        length:movies.length,
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
