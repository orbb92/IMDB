const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movies')

router.get('/',movieController.getTop10Movies)
router.get('/:title',movieController.searchMovie)
router.get('/details/:id',movieController.getMovieDetails)





module.exports=router