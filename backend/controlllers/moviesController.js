const { Movie } = require("../models/movie");
const cloudinary  = require("../utils/cloudinary");

module.exports.createMovie = async(req,res) => {
        console.log(req.body);
        const movie = new Movie({
            title:req.body.video.name,            
        })
        const uploadedMovie = await  cloudinary.uploader.upload(req.body.video,{
            folder:"movies",
            public_id:movie.title,
            use_filename:true
        })
        console.log(uploadedMovie);
        res.send(uploadedMovie);
    
}