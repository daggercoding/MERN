const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        requires:[true,"Name is Required"], // Setting name field as unique
        trin:true
    },
    description:{
        type: String,
        requires:[true,"Description is Required"], // Setting name field as unique
        trin:true
    },
    duration:{
    type:Number,
    required:[true,"Duration is Required field"]
    },
    rating: Number,
    releaseYear:{
        type:Number,
        required:[true,"ReleaseYear is Required"], // Setting name field as unique
    },
    releaseDate:Date,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    genres:{
        type:[String],
        required:[true,"Genres is required Field"]
    },
    directors:{
        type:[String],
        required:[true,"Director is required Field"]
    },
    coverImage:{
        type:[String],
        required:[true,"coverImage is required Field"]
    },
    actors:{
        type:[String],
        required:[true,"Actors is required Field"]
    },
    price:{
        type:Number,
        required:[true,"Release year is required Field"]
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;