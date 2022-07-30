const axios = require('axios')
require('dotenv').config()
const MovieDB = require('node-themoviedb');
const mdb = new MovieDB(process.env["MOVIES_API_KEY"]);
const IMAGEURI = 'https://image.tmdb.org/t/p/w500'
exports.getTop10Movies = async (req, res) => {

    const popularMovies = await mdb.movie.getPopular({})
    let slimmedPopularMovies = popularMovies.data.results.map(movie => {
        const movieObj = {}
        movieObj.title = movie.title
        movieObj.overview = movie.overview
        movieObj.voteAverage = movie.vote_average
        movieObj.releaseDate = movie.release_date
        movieObj.image = IMAGEURI + movie.poster_path
        movieObj.releaseDate = movie.release_date
        movieObj.id = movie.id

        return movieObj
    })
    res.status(200).send(slimmedPopularMovies.slice(0,10))
}


exports.searchMovie = async (req, res) => {
    const title = req.params.title
    const movie = (await mdb.search.movies({query: {query: title}})).data.results.map(movie=>{
        const movieObj = {}

        movieObj.title = movie.title
        movieObj.overview = movie.overview
        movieObj.voteAverage = movie.vote_average
        movieObj.releaseDate = movie.release_date
        movieObj.image = IMAGEURI + movie.poster_path
        movieObj.releaseDate = movie.release_date
        movieObj.id = movie.id
        return movieObj

    })
    res.status(200).send(movie)
}


exports.getMovieDetails = async (req, res) => {
    const id = req.params.id
    const movieDetail = await mdb.movie.getDetails({pathParameters:{movie_id:id}})
    console.log(movieDetail)
    res.status(200).send(movieDetail.data)
}