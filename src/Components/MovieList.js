import React from 'react'
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getMovieListAsync} from "../store/slices/movies";
import {useDispatch} from "react-redux";
import MovieCard from "./MovieCard";
import '../CSS/MovieList.css'
import MovieModal from "./MovieModal";

const MovieList = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const movieList = useSelector(state=>state.movies.movieList)
    const detailedMovie = useSelector(state=>state.movies.detailedMovie)
    useEffect(() =>{
        dispatch(getMovieListAsync())
    },[])
    return (

        <>
            <div className='movieList'>
                {movieList.map((movie,index)=>{
                    return <MovieCard open={handleOpen} movie={movie} key={index}></MovieCard>
                 })}

            </div>
            <MovieModal movie ={detailedMovie} open = {open} onClose = {handleClose}></MovieModal>
        </>)
}

export default MovieList