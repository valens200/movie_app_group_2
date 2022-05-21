const { Movie } = require("../models/movie")

module.exports.createMovie = async() => {
    return (req,res) => {
        const movie = new Movie({
            title:req.body.title,
            
        })
    }
}