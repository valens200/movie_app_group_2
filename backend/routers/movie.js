const express = require('express');
const { createMovie } = require('../controlllers/moviesController');
const router = express.Router();

router.post('/upload',(req,res)=> createMovie(req,res));

module.exports.Mrouter = router;