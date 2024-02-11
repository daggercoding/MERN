const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        requires:true, // Setting name field as unique
    },
    description: String,
    age: Number,
    married: Boolean
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;